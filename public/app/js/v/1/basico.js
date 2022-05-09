(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basico"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_ajustes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/ajustes */ "./resources/app/api/ajustes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      email: null,
      has_error: false,
      form: {
        uploaded_logo: ""
      }
    };
  },
  methods: {
    cargar: function cargar() {
      var self = this;
      _api_ajustes__WEBPACK_IMPORTED_MODULE_0__["default"].cargar_imagenes(function (data) {
        var logo_json = JSON.parse(data[0].valor);
        self.form.uploaded_logo = logo_json[0].file_thumbnail;
      }, function (err) {
        console.log(err);
      });
    },
    requestResetPassword: function requestResetPassword() {
      var _this = this;

      this.$http.post("auth/reset-password", {
        email: this.email
      }).then(function (result) {
        //this.response = result.data;
        if (result.data.message === 'Email could not be sent to this email address.') {
          alertify.warning('No se ha encontrado esta dirección de correo electrónico en nuestros registros.', 5);

          _this.$router.push({
            name: 'login'
          });
        } else if (result.data.message === 'Password reset email sent.') {
          alertify.success('Hemos enviado al correo ' + _this.email + ' las instrucciones para reestablecer su contrasena. ', 10);

          _this.$router.push({
            name: 'login'
          });
        } else {
          alertify.error(result.data.message, 10);

          _this.$router.push({
            name: 'login'
          });
        }
      }, function (error) {
        console.log(error);

        _this.$router.push({
          name: 'login'
        });
      });
    }
  },
  mounted: function mounted() {
    this.cargar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_ajustes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/ajustes */ "./resources/app/api/ajustes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      uploaded_logo: "",
      token: null,
      email: null,
      password: null,
      password_confirmation: null,
      has_error: false
    };
  },
  methods: {
    cargar: function cargar() {
      var self = this;
      _api_ajustes__WEBPACK_IMPORTED_MODULE_0__["default"].cargar_imagenes(function (data) {
        var logo_json = JSON.parse(data[0].valor);
        self.uploaded_logo = logo_json[0].file_thumbnail;
      }, function (err) {
        console.log(err);
      });
    },
    resetPassword: function resetPassword() {
      var _this = this;

      this.$http.post("auth/reset/password", {
        token: this.$route.params.token,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (result) {
        if (result.data.message === 'Password reset successfully.') {
          alertify.success('Se ha realizado el cambio de contrasena correctamente.', 5);

          _this.$router.push({
            name: 'login'
          });
        } else if (result.data.message === 'Failed, Invalid Token.') {
          alertify.error('El correo no es valido o la solicitud de cambio de contraseña ha expirado', 5);

          _this.$router.push({
            name: 'login'
          });
        } else {
          alertify.warning(result.data.message, 5);

          _this.$router.push({
            name: 'login'
          });
        }
      }, function (error) {
        console.error(error);
      });
    }
  },
  mounted: function mounted() {
    this.cargar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error404.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/errores/Error404.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_ajustes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/ajustes */ "./resources/app/api/ajustes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {
        uploaded_logo: ""
      }
    };
  },
  methods: {
    cargar: function cargar() {
      var _this = this;

      var self = this;
      _api_ajustes__WEBPACK_IMPORTED_MODULE_0__["default"].cargar_imagenes(function (data) {
        var logo_json = JSON.parse(data[0].valor);
        _this.form.uploaded_logo = logo_json[0].file_thumbnail;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.cargar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error500.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/errores/Error500.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_ajustes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/ajustes */ "./resources/app/api/ajustes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {
        uploaded_logo: ""
      }
    };
  },
  methods: {
    cargar: function cargar() {
      var _this = this;

      var self = this;
      _api_ajustes__WEBPACK_IMPORTED_MODULE_0__["default"].cargar_imagenes(function (data) {
        var logo_json = JSON.parse(data[0].valor);
        _this.form.uploaded_logo = logo_json[0].file_thumbnail;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.cargar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/ErrorPermiso.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/errores/ErrorPermiso.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_ajustes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/ajustes */ "./resources/app/api/ajustes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {
        uploaded_logo: ""
      }
    };
  },
  methods: {
    cargar: function cargar() {
      var _this = this;

      var self = this;
      _api_ajustes__WEBPACK_IMPORTED_MODULE_0__["default"].cargar_imagenes(function (data) {
        var logo_json = JSON.parse(data[0].valor);
        _this.form.uploaded_logo = logo_json[0].file_thumbnail;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.cargar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/login/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import auth from '../../api/auth'


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      msg: 'Espere un momento, el sistema esta validando sus datos',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default.a,
      //It is important to import the loading image then use here
      form: {
        usuario: '',
        password: '',
        rememberMe: false
      },
      titulo: '',
      login_img: 'images/block50.gif',
      btnAction: 'Acceder',
      errorMessages: []
    };
  },
  methods: {
    obtenerAjustesBasicos: function obtenerAjustesBasicos() {
      this.$store.dispatch('global/obtenerAjustesBasicos')["catch"](function (err) {
        console.log(err);
      });
      this.initTilt();
    },
    login: function login() {
      var app = this;
      app.loading = true;
      app.btnAction = 'Comprobando datos...';

      if (app.form.usuario.trim() != '' && app.form.password.trim() != '') {
        app.errorMessages.password = [''];
        this.$auth.login({
          params: {
            usuario: app.form.usuario,
            password: app.form.password
          },
          success: function success(response) {
            if (response.data.status == 'success') {
              app.loading = false; // localStorage.setItem('usuario', JSON.stringify(response.data.result))

              this.$router.push({
                name: 'pagina-principal'
              });
              alertify.success("Inicio de sesión correcto, Bienvenido!", 5);
            } else {
              app.loading = false;
              app.errorMessages = response.data.result;
              app.btnAction = 'Acceder';
              app.form.password = '';
            }
          },
          error: function error(res) {
            app.loading = false;
            app.btnAction = 'Acceder';
            app.form.password = '';
            app.errorMessages.password = ['Los datos no coinciden con nuestros registros'];
          },
          rememberMe: app.form.rememberMe,
          fetchUser: true
        });
      } else {
        alertify.error("Error con los datos proporcionados!", 5);
        app.loading = false;
        app.btnAction = 'Acceder';
        app.form.password = '';
        app.errorMessages.password = ['Los campos usuario y contraseña son requeridos'];
      }
    },
    initTilt: function initTilt() {
      $('.js-tilt').tilt({
        scale: 1.1
      });
    }
  },
  mounted: function mounted() {
    //this.initTilt();
    this.obtenerAjustesBasicos(); //this.login_img = (JSON.parse(ajustesBasicos[1].valor))[0].file_thumbnail;
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    ajustesBasicos: 'global/ajustesBasicos'
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=template&id=59705b23&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=template&id=59705b23& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "main" } }, [
    _c("div", { staticClass: "wrapper" }, [
      _c("div", { staticClass: "wrapper-box" }, [
        _c("div", { staticClass: "main" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "logo" }, [
                _c("img", {
                  staticStyle: {
                    width: "100px",
                    height: "100px",
                    "justify-content": "center"
                  },
                  attrs: { src: this.form.uploaded_logo }
                })
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "card card-default" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v("Solicitar reinicio de contraseña")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        attrs: { autocomplete: "off", method: "post" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.requestResetPassword($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticStyle: { "padding-left": "10px" },
                              attrs: { for: "email" }
                            },
                            [_vm._v("Correo Electrónico")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.email,
                                expression: "email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "email",
                              placeholder: "correo@lubnica.com",
                              required: "",
                              type: "email"
                            },
                            domProps: { value: _vm.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.email = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Enviar enlace de reinicio")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=template&id=10cb80b9&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=template&id=10cb80b9& ***!
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
  return _c("div", { attrs: { id: "main" } }, [
    _c("div", { staticClass: "wrapper" }, [
      _c("div", { staticClass: "wrapper-box" }, [
        _c("div", { staticClass: "main" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "logo" }, [
                _c("img", {
                  staticStyle: {
                    width: "250px",
                    height: "75px",
                    "justify-content": "center"
                  },
                  attrs: { src: this.uploaded_logo }
                })
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "card card-default" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v("Definir Nueva Contraseña")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        attrs: { autocomplete: "off", method: "post" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.resetPassword($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticStyle: { "padding-left": "10px" },
                              attrs: { for: "email" }
                            },
                            [_vm._v("Correo Electrónico")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.email,
                                expression: "email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "email",
                              placeholder: "correo@lubnica.com",
                              required: "",
                              type: "email"
                            },
                            domProps: { value: _vm.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.email = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticStyle: { "padding-left": "10px" },
                              attrs: { for: "email" }
                            },
                            [_vm._v("Nueva Contraseña")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password,
                                expression: "password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "password",
                              placeholder: "",
                              required: "",
                              type: "password"
                            },
                            domProps: { value: _vm.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticStyle: { "padding-left": "10px" },
                              attrs: { for: "email" }
                            },
                            [_vm._v("Confirmar Contraseña")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password_confirmation,
                                expression: "password_confirmation"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "password_confirmation",
                              placeholder: "",
                              required: "",
                              type: "password"
                            },
                            domProps: { value: _vm.password_confirmation },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password_confirmation = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Cambiar Contraseña")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error404.vue?vue&type=template&id=649353ec&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/errores/Error404.vue?vue&type=template&id=649353ec& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "main" } }, [
    _c("div", { staticClass: "wrapper" }, [
      _c("div", { staticClass: "wrapper-box" }, [
        _c("div", { staticClass: "main" }, [
          _c("div", { staticClass: "not-found-box" }, [
            _c("div", { staticClass: "logo" }, [
              _c("img", {
                staticStyle: {
                  width: "250px",
                  height: "100%",
                  "justify-content": "center"
                },
                attrs: { src: this.form.uploaded_logo }
              })
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "not-found-footer" }),
            _vm._v(" "),
            _c("div", { staticClass: "error-code" }, [_vm._v("404")]),
            _vm._v(" "),
            _c("div", { staticClass: "error-status" }, [
              _vm._v("Página no encontrada")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "error-text" }, [
              _vm._v("Oops, algo salió mal...")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "not-found-footer" }, [
              _c(
                "form",
                { staticClass: "form-inline justify-content-center" },
                [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }, [
                        _vm._v("\tRegresar a página anterior")
                      ])
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error500.vue?vue&type=template&id=cd7d9dae&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/errores/Error500.vue?vue&type=template&id=cd7d9dae& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "main" } }, [
    _c("div", { staticClass: "wrapper" }, [
      _c("div", { staticClass: "wrapper-box" }, [
        _c("div", { staticClass: "main" }, [
          _c("div", { staticClass: "not-found-box" }, [
            _c("div", { staticClass: "logo" }, [
              _c("img", {
                staticStyle: {
                  width: "250px",
                  height: "100%",
                  "justify-content": "center"
                },
                attrs: { src: this.form.uploaded_logo }
              })
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "not-found-footer" }),
            _vm._v(" "),
            _c("div", { staticClass: "error-code" }, [_vm._v("500")]),
            _vm._v(" "),
            _c("div", { staticClass: "error-status" }, [
              _vm._v("Error interno del servidor")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "error-text" }, [
              _vm._v(
                "Oops, algo está mal :( por favor comunícate con los desarrolladores"
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "not-found-footer" }, [
              _c(
                "form",
                { staticClass: "form-inline justify-content-center" },
                [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }, [
                        _vm._v("\tRegresar a página anterior")
                      ])
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/ErrorPermiso.vue?vue&type=template&id=246d4da9&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/errores/ErrorPermiso.vue?vue&type=template&id=246d4da9& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "main" } }, [
    _c("div", { staticClass: "wrapper" }, [
      _c("div", { staticClass: "wrapper-box" }, [
        _c("div", { staticClass: "main" }, [
          _c("div", { staticClass: "not-found-box" }, [
            _c("div", { staticClass: "logo" }, [
              _c("img", {
                staticStyle: {
                  width: "250px",
                  height: "100%",
                  "justify-content": "center"
                },
                attrs: { src: this.form.uploaded_logo }
              })
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "not-found-footer" }),
            _vm._v(" "),
            _c("div", { staticClass: "error-code" }, [_vm._v("403")]),
            _vm._v(" "),
            _c("div", { staticClass: "error-status" }, [
              _vm._v("Usted no tiene permisos para visitar esta Página")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "error-text" }, [
              _vm._v("Oops, algo salió mal...")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "not-found-footer" }, [
              _c(
                "form",
                { staticClass: "form-inline justify-content-center" },
                [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }, [
                        _vm._v("\tRegresar a página anterior")
                      ])
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=template&id=5bb72910&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/login/Login.vue?vue&type=template&id=5bb72910& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "limiter" }, [
    _c(
      "div",
      { staticClass: "container-login100" },
      [
        _c(
          "div",
          { staticClass: "wrap-login100" },
          [
            _vm.ajustesBasicos[3]
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "login100-pic js-tilt",
                      attrs: { "data-tilt": "" }
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: JSON.parse(
                            _vm.ajustesBasicos[3]
                              ? _vm.ajustesBasicos[3].valor
                              : "[]"
                          )[0]
                            ? JSON.parse(
                                _vm.ajustesBasicos[3]
                                  ? _vm.ajustesBasicos[3].valor
                                  : "[]"
                              )[0].file_thumbnail
                            : _vm.login_img,
                          alt: "IMG"
                        }
                      })
                    ]
                  )
                ]
              : [
                  _c("div", { staticClass: "login100-pic-loading js-tilt" }, [
                    _c("img", { attrs: { src: _vm.login_img, alt: "IMG" } })
                  ])
                ],
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { autocomplete: "off", method: "post" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login($event)
                  }
                }
              },
              [
                _c("span", { staticClass: "login100-form-title" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\t" +
                      _vm._s(
                        _vm.ajustesBasicos[0] ? _vm.ajustesBasicos[0].valor : ""
                      ) +
                      "\n\t\t\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wrap-input100 validate-input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.usuario,
                        expression: "form.usuario"
                      }
                    ],
                    staticClass: "input100",
                    attrs: { placeholder: "Digite nombre de usuario" },
                    domProps: { value: _vm.form.usuario },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "usuario", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "focus-input100" }),
                  _vm._v(" "),
                  _vm._m(0)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wrap-input100 validate-input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    staticClass: "input100",
                    attrs: {
                      placeholder: "Digite contraseña",
                      type: "password"
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "focus-input100" }),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center p-t-12" }, [
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.usuario, function(message) {
                      return _c("li", { key: message }, [
                        _vm._v(_vm._s(message))
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.password, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "container-login100-form-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "login100-form-btn",
                      attrs: {
                        type: "submit",
                        disabled: _vm.btnAction != "Acceder" ? true : false
                      }
                    },
                    [_vm._v(_vm._s(_vm.btnAction))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center p-t-12" }, [
                  _c("label", { staticClass: "check-label" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.rememberMe,
                          expression: "form.rememberMe"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.form.rememberMe)
                          ? _vm._i(_vm.form.rememberMe, null) > -1
                          : _vm.form.rememberMe
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.form.rememberMe,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.form,
                                  "rememberMe",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.form,
                                  "rememberMe",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.form, "rememberMe", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" Recordarme")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center p-t-12" },
                  [
                    _c(
                      "router-link",
                      {
                        style: "color: #707070;",
                        attrs: { to: { name: "reset-password" } }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-long-arrow-right m-l-5",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" Recuperar Contraseña\n\t\t\t\t\t\t")
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ],
          2
        ),
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
    return _c("span", { staticClass: "symbol-input100" }, [
      _c("i", {
        staticClass: "fa fa-envelope",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "symbol-input100" }, [
      _c("i", { staticClass: "fa fa-lock", attrs: { "aria-hidden": "true" } })
    ])
  }
]
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

/***/ "./resources/app/components/contrasenas/ForgotPassword.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/components/contrasenas/ForgotPassword.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_59705b23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=59705b23& */ "./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=template&id=59705b23&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_59705b23___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_59705b23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/contrasenas/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=template&id=59705b23&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=template&id=59705b23& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_59705b23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=59705b23& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ForgotPassword.vue?vue&type=template&id=59705b23&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_59705b23___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_59705b23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/contrasenas/ResetPasswordForm.vue":
/*!********************************************************************!*\
  !*** ./resources/app/components/contrasenas/ResetPasswordForm.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPasswordForm_vue_vue_type_template_id_10cb80b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordForm.vue?vue&type=template&id=10cb80b9& */ "./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=template&id=10cb80b9&");
/* harmony import */ var _ResetPasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordForm.vue?vue&type=script&lang=js& */ "./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPasswordForm_vue_vue_type_template_id_10cb80b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPasswordForm_vue_vue_type_template_id_10cb80b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/contrasenas/ResetPasswordForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=template&id=10cb80b9&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=template&id=10cb80b9& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_template_id_10cb80b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordForm.vue?vue&type=template&id=10cb80b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/contrasenas/ResetPasswordForm.vue?vue&type=template&id=10cb80b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_template_id_10cb80b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_template_id_10cb80b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/errores/Error404.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/errores/Error404.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error404_vue_vue_type_template_id_649353ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error404.vue?vue&type=template&id=649353ec& */ "./resources/app/components/errores/Error404.vue?vue&type=template&id=649353ec&");
/* harmony import */ var _Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error404.vue?vue&type=script&lang=js& */ "./resources/app/components/errores/Error404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error404_vue_vue_type_template_id_649353ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error404_vue_vue_type_template_id_649353ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/errores/Error404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/errores/Error404.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/errores/Error404.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/errores/Error404.vue?vue&type=template&id=649353ec&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/errores/Error404.vue?vue&type=template&id=649353ec& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_template_id_649353ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error404.vue?vue&type=template&id=649353ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error404.vue?vue&type=template&id=649353ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_template_id_649353ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_template_id_649353ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/errores/Error500.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/errores/Error500.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error500_vue_vue_type_template_id_cd7d9dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error500.vue?vue&type=template&id=cd7d9dae& */ "./resources/app/components/errores/Error500.vue?vue&type=template&id=cd7d9dae&");
/* harmony import */ var _Error500_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error500.vue?vue&type=script&lang=js& */ "./resources/app/components/errores/Error500.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Error500_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error500_vue_vue_type_template_id_cd7d9dae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error500_vue_vue_type_template_id_cd7d9dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/errores/Error500.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/errores/Error500.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/errores/Error500.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error500_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error500.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error500.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error500_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/errores/Error500.vue?vue&type=template&id=cd7d9dae&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/errores/Error500.vue?vue&type=template&id=cd7d9dae& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error500_vue_vue_type_template_id_cd7d9dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error500.vue?vue&type=template&id=cd7d9dae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/Error500.vue?vue&type=template&id=cd7d9dae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error500_vue_vue_type_template_id_cd7d9dae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error500_vue_vue_type_template_id_cd7d9dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/errores/ErrorPermiso.vue":
/*!***********************************************************!*\
  !*** ./resources/app/components/errores/ErrorPermiso.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorPermiso_vue_vue_type_template_id_246d4da9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorPermiso.vue?vue&type=template&id=246d4da9& */ "./resources/app/components/errores/ErrorPermiso.vue?vue&type=template&id=246d4da9&");
/* harmony import */ var _ErrorPermiso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorPermiso.vue?vue&type=script&lang=js& */ "./resources/app/components/errores/ErrorPermiso.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorPermiso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorPermiso_vue_vue_type_template_id_246d4da9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorPermiso_vue_vue_type_template_id_246d4da9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/errores/ErrorPermiso.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/errores/ErrorPermiso.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/app/components/errores/ErrorPermiso.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPermiso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorPermiso.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/ErrorPermiso.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPermiso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/errores/ErrorPermiso.vue?vue&type=template&id=246d4da9&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/errores/ErrorPermiso.vue?vue&type=template&id=246d4da9& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPermiso_vue_vue_type_template_id_246d4da9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorPermiso.vue?vue&type=template&id=246d4da9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/errores/ErrorPermiso.vue?vue&type=template&id=246d4da9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPermiso_vue_vue_type_template_id_246d4da9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPermiso_vue_vue_type_template_id_246d4da9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/login/Login.vue":
/*!**************************************************!*\
  !*** ./resources/app/components/login/Login.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_5bb72910___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=5bb72910& */ "./resources/app/components/login/Login.vue?vue&type=template&id=5bb72910&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/app/components/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_5bb72910___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_5bb72910___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/login/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/login/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/app/components/login/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/login/Login.vue?vue&type=template&id=5bb72910&":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/login/Login.vue?vue&type=template&id=5bb72910& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_5bb72910___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=5bb72910& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=template&id=5bb72910&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_5bb72910___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_5bb72910___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);