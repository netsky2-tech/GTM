(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["two-factor-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_usuarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/usuarios */ "./resources/app/api/usuarios.js");
/* harmony import */ var _api_two_factor_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/two-factor-auth */ "./resources/app/api/two-factor-auth.js");
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


 //import Pagination from '../layout/Pagination'

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    enabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      twoFactorEnabled: this.enabled,
      qrCode: '',
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: 'codigo',
          value: '',
          status: 0
        }
      },
      form: {
        login_security: null,
        google2fa_enable: null,
        data: [],
        qr_code: ''
      },
      areas: [],
      total: 0
    };
  },
  methods: {
    obtenerUsuario: function obtenerUsuario() {
      var _this = this;

      var self = this;
      _api_usuarios__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerUserLogin({}, function (data) {
        self.form = data;
        self.loading = false;
      }, function (err) {
        //console.log(err)
        alertify.error(err.id_usuario, 5);

        _this.$router.push({
          name: 'login'
        });
      });
    },
    enableTwoFactorAuthentication: function enableTwoFactorAuthentication() {
      var _this2 = this;

      axios.post('auth/enable-2fa').then(function () {
        return Promise.all([_this2.showQrCode()]);
      }).then(function () {
        _this2.twoFactorEnabled = true;
      });
    },
    showQrCode: function showQrCode() {
      var _this3 = this;

      return axios.get('auth/show-qr').then(function (response) {
        _this3.qrCode = response.data.svg;
      });
    },
    disableTwoFactorAuthentication: function disableTwoFactorAuthentication() {
      var _this4 = this;

      axios["delete"]('auth/disabled-2fa').then(function () {
        _this4.twoFactorEnabled = false;
        _this4.qrCode = '';
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerAreas();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerAreas();
    }
  },

  /*components: {
      'pagination': Pagination
  },*/
  mounted: function mounted() {
    this.obtenerUsuario();
    /*           this.showQrCode();*/
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_verify.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_usuarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/usuarios */ "./resources/app/api/usuarios.js");
/* harmony import */ var _api_two_factor_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/two-factor-auth */ "./resources/app/api/two-factor-auth.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_configuracion_ir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/configuracion-ir */ "./resources/app/api/configuracion-ir.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    enabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      twoFactorEnabled: this.enabled,
      qrCode: '',
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: 'codigo',
          value: '',
          status: 0
        }
      },
      form: {
        two_factor_code: '',
        google2fa_enable: null,
        data: [],
        qr_code: ''
      },
      btnAction: 'Verificar',
      areas: [],
      errorMessages: [],
      total: 0
    };
  },
  methods: {
    obtenerUsuario: function obtenerUsuario() {
      var _this = this;

      var self = this;
      _api_usuarios__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerUserLogin({}, function (data) {
        self.form = data;
        self.loading = false;
      }, function (err) {
        //console.log(err)
        alertify.error(err.id_usuario, 5);

        _this.$router.push({
          name: 'login'
        });
      });
    },
    storeTwoFactorCode: function storeTwoFactorCode() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Verificando codigo, espere....';
      self.loading = true;

      if (self.form.usuario.two_factor_code === self.form.two_factor_code) {
        _api_two_factor_auth__WEBPACK_IMPORTED_MODULE_1__["default"].storeTwoFactorCode(self.form, function (data) {
          self.loading = false;
          alertify.success("Datos registrados correctamente", 5);

          _this2.$router.push({
            name: 'pagina-principal'
          });
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnAction = 'Verificar';
        });
      } else {
        alertify.warning("El código digitado no coincide con el enviado por correo, favor verificar", 5);
        self.btnAction = 'Verificar';
      }
    },
    showQrCode: function showQrCode() {
      var _this3 = this;

      return axios.get('auth/show-qr').then(function (response) {
        _this3.qrCode = response.data.svg;
      });
    },
    requestResetPassword: function requestResetPassword() {
      var _this4 = this;

      //mismo metodo que storeTwoFactorCode
      var self = this;
      self.btnAction = 'Verificando codigo, espere....';
      self.loading = true;
      this.$http.get("auth/store-two-factor-code", {
        two_factor_code: self.form.two_factor_code
      }).then(function (result) {
        //this.response = result.data;
        if (self.form.usuario.two_factor_code === self.form.two_factor_code) {
          self.loading = false;
          alertify.success('Datos cargados correctamente ', 10);

          _this4.$router.push({
            name: 'pagina-principal'
          });
        } else {
          self.loading = false;
          alertify.warning('El código digitado no coincide con el que ha sido enviado al correo, favor verificar', 10);
          self.btnAction = 'Verificar';
        }
      }, function (error) {
        console.log(error);
        self.loading = false;
        self.btnAction = 'Verificar'; //this.$router.push({name: 'login'})
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerAreas();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerAreas();
    }
  },

  /*components: {
      'pagination': Pagination
  },*/
  mounted: function mounted() {
    this.obtenerUsuario();
    /*           this.showQrCode();*/
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-8c70572e] {\n  min-width: 120px;\n}\n.table a[data-v-8c70572e] {\n  color: #2675dc;\n}\n.table .table-number[data-v-8c70572e] {\n  width: 60px;\n}\n.table .action[data-v-8c70572e] {\n  width: 100px;\n}\n.center[data-v-8c70572e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-d1cd0d82] {\n  min-width: 120px;\n}\n.table a[data-v-d1cd0d82] {\n  color: #2675dc;\n}\n.table .table-number[data-v-d1cd0d82] {\n  width: 60px;\n}\n.table .action[data-v-d1cd0d82] {\n  width: 100px;\n}\n.center[data-v-d1cd0d82] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row " }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "card-body " },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "card-text",
                    staticStyle: { "text-align": "center" }
                  },
                  [
                    _vm._v(
                      "La autenticación de dos factores (2FA) refuerza la seguridad del acceso al requerir dos métodos (también denominados factores) para verificar su identidad. La autenticación de dos factores protege contra ataques de phishing, ingeniería social y de fuerza bruta de contraseñas y protege sus inicios de sesión de atacantes que explotan credenciales débiles o robadas."
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm.form.two_factor_secret
                  ? [
                      _c("strong", [_vm._v("Tienes habilitado 2FA.")]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]
                  : [_vm._m(2)],
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm.qrCode
                  ? _c("div", { domProps: { innerHTML: _vm._s(_vm.qrCode) } })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "content-box-footer text-center" },
                  [
                    !_vm.twoFactorEnabled
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: { click: _vm.enableTwoFactorAuthentication }
                            },
                            [_vm._v("Habilitar 2FA")]
                          )
                        ]
                      : [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: { click: _vm.disableTwoFactorAuthentication }
                            },
                            [_vm._v("Deshabilitar 2FA")]
                          )
                        ]
                  ],
                  2
                )
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h1",
      { staticClass: "card-header", staticStyle: { "text-align": "center" } },
      [_c("strong", [_vm._v("Autenticación de dos factores (2FA)")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/2 flex justify-center" }, [
      _c("img", { attrs: { src: "$auth()->user()->twoFactorQrCodeSvg()" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("No tienes habilitado 2FA.")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/auth/2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row " }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "card-body " },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "card-text",
                    staticStyle: { "text-align": "center" }
                  },
                  [
                    _vm._v(
                      "La autenticación de dos factores (2FA) refuerza la seguridad del acceso al requerir dos métodos (también denominados factores) para verificar su identidad. La autenticación de dos factores protege contra ataques de phishing, ingeniería social y de fuerza bruta de contraseñas y protege sus inicios de sesión de atacantes que explotan credenciales débiles o robadas."
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { method: "post", autocomplete: "off" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.requestResetPassword($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row center" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "Presionar enter para acceder",
                                expression: "'Presionar enter para acceder'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.two_factor_code,
                                expression: "form.two_factor_code"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              placeholder:
                                "Digite su código de doble autenticación"
                            },
                            domProps: { value: _vm.form.two_factor_code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "two_factor_code",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.two_factor_code, function(
                              message
                            ) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }),
                            0
                          )
                        ])
                      ])
                    ])
                  ]
                ),
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
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h1",
      { staticClass: "card-header", staticStyle: { "text-align": "center" } },
      [_c("strong", [_vm._v("Autenticación de dos factores (2FA)")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center" }, [
      _c("strong", [
        _vm._v(
          "Se ha enviado un código de verificación a su correo electronico, favor ingresarlo para iniciar sesión."
        )
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

/***/ "./resources/app/api/configuracion-ir.js":
/*!***********************************************!*\
  !*** ./resources/app/api/configuracion-ir.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('rrhh/configuracion-ir/obtener-todas').then(function (response) {
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
    axios.post('rrhh/configuracion-ir/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerConfiguracion: function obtenerConfiguracion(data, cb, errorCb) {
    axios.post('rrhh/configuracion-ir/obtener-configuracion', data).then(function (response) {
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
    axios.post('rrhh/configuracion-ir/nueva', data).then(function (response) {
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
    axios.post('rrhh/configuracion-ir/registrar', data).then(function (response) {
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
    axios.put('rrhh/configuracion-ir/actualizar', data).then(function (response) {
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
    axios.put('rrhh/configuracion-ir/desactivar', data).then(function (response) {
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
    axios.put('rrhh/configuracion-ir/activar', data).then(function (response) {
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

/***/ "./resources/app/api/two-factor-auth.js":
/*!**********************************************!*\
  !*** ./resources/app/api/two-factor-auth.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  enable2fa: function enable2fa(data, cb, errorCb) {
    axios.post('auth/enable-2fa', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  disable2fa: function disable2fa(data, cb, errorCb) {
    axios["delete"]('auth/disabled-2fa', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  showQr: function showQr(data, cb, errorCb) {
    axios.get('auth/show-qr', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  getRecoveryCode: function getRecoveryCode(data, cb, errorCb) {
    axios.get('auth/get-recovery', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  setRecoveryCode: function setRecoveryCode(data, cb, errorCb) {
    axios.get('auth/set-recovery-code', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  storeTwoFactorCode: function storeTwoFactorCode(data, cb, errorCb) {
    axios.get('auth/store-two-factor-code', data).then(function (response) {
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

/***/ "./resources/app/api/usuarios.js":
/*!***************************************!*\
  !*** ./resources/app/api/usuarios.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerUsuarios: function obtenerUsuarios(data, cb, errorCb) {
    axios.post('usuarios/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerUsuario: function obtenerUsuario(data, cb, errorCb) {
    axios.post('usuarios/obtener-usuario', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerUserLogin: function obtenerUserLogin(data, cb, errorCb) {
    axios.post('usuarios/obtener-user-login', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerActivos: function obtenerActivos(cb, errorCb) {
    axios.get('usuarios/obtener-activos').then(function (response) {
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
    axios.post('usuarios/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarContrasena: function cambiarContrasena(data, cb, errorCb) {
    axios.put('usuarios/cambiar-contrasena', data).then(function (response) {
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

/***/ "./resources/app/components/auth/2fa_settings.vue":
/*!********************************************************!*\
  !*** ./resources/app/components/auth/2fa_settings.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2fa_settings_vue_vue_type_template_id_8c70572e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true& */ "./resources/app/components/auth/2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true&");
/* harmony import */ var _2fa_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2fa_settings.vue?vue&type=script&lang=js& */ "./resources/app/components/auth/2fa_settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _2fa_settings_vue_vue_type_style_index_0_id_8c70572e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true& */ "./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _2fa_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _2fa_settings_vue_vue_type_template_id_8c70572e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2fa_settings_vue_vue_type_template_id_8c70572e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8c70572e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/auth/2fa_settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/auth/2fa_settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/auth/2fa_settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_style_index_0_id_8c70572e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=style&index=0&id=8c70572e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_style_index_0_id_8c70572e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_style_index_0_id_8c70572e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_style_index_0_id_8c70572e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_style_index_0_id_8c70572e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_style_index_0_id_8c70572e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/auth/2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/auth/2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_template_id_8c70572e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_settings.vue?vue&type=template&id=8c70572e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_template_id_8c70572e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_settings_vue_vue_type_template_id_8c70572e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/auth/2fa_verify.vue":
/*!******************************************************!*\
  !*** ./resources/app/components/auth/2fa_verify.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2fa_verify_vue_vue_type_template_id_d1cd0d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true& */ "./resources/app/components/auth/2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true&");
/* harmony import */ var _2fa_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2fa_verify.vue?vue&type=script&lang=js& */ "./resources/app/components/auth/2fa_verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _2fa_verify_vue_vue_type_style_index_0_id_d1cd0d82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true& */ "./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _2fa_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _2fa_verify_vue_vue_type_template_id_d1cd0d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2fa_verify_vue_vue_type_template_id_d1cd0d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d1cd0d82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/auth/2fa_verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/auth/2fa_verify.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/auth/2fa_verify.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_style_index_0_id_d1cd0d82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=style&index=0&id=d1cd0d82&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_style_index_0_id_d1cd0d82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_style_index_0_id_d1cd0d82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_style_index_0_id_d1cd0d82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_style_index_0_id_d1cd0d82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_style_index_0_id_d1cd0d82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/auth/2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/auth/2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_template_id_d1cd0d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/auth/2fa_verify.vue?vue&type=template&id=d1cd0d82&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_template_id_d1cd0d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_2fa_verify_vue_vue_type_template_id_d1cd0d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);