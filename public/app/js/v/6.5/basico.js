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
        login_img: 'images/block50.gif',
        login_static_img: '/public/app/images/capsoft-login.png'
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

      this.$http.post("auth/store-two-factor-code", {
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
        alertify.warning(error.message, 5);
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        uploaded_logo: ""
      },
      titulo: 'Inicio de sesión',
      login_img: 'images/block50.gif',
      login_static_img: 'images/capsoft-login.png'
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
  mounted: function mounted() {//this.cargar()
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

/*import cheems from '../../assets/images/unnamed.png'*/

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        uploaded_logo: "",
        img_cheems: cheems
      },
      titulo: 'Inicio de sesión',
      login_img: 'images/block50.gif',
      login_static_img: 'images/capsoft-login.png'
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
  mounted: function mounted() {//this.cargar()
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
/* harmony import */ var _assets_images_capsoft_login_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/capsoft-login.png */ "./resources/app/assets/images/capsoft-login.png");
/* harmony import */ var _assets_images_capsoft_login_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_capsoft_login_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_setting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/setting.js */ "./resources/app/api/setting.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        rememberMe: false,
        count: 0,
        timer: 60,
        companies: [],
        countCompany: ''
      },
      titulo: 'Inicio de sesión',
      login_img: 'images/block50.gif',
      login_static_img: '/public/app/images/capsoft-login.png',
      btnAction: 'Acceder',
      errorMessages: [],
      maxAttempts: []
    };
  },
  methods: {
    countDownTimer: function countDownTimer() {
      var _this = this;

      if (this.form.timer > 0) {
        setTimeout(function () {
          _this.form.timer -= 1;

          _this.countDownTimer();
        }, 1000);
      } else if (this.form.timer === 0) {
        this.form.count = 0;
      }
    },

    /*obtenerAjustesBasicos() {
    	this.$store.dispatch('global/obtenerAjustesBasicos').catch((err) => {
    		console.log(err)
    	})
    	this.initTilt();
    },*/
    login: function login() {
      var app = this;
      app.loading = true;
      app.btnAction = 'Comprobando datos...';

      if (app.form.usuario.trim() !== '' && app.form.password.trim() !== '') {
        app.errorMessages.password = [''];
        this.$auth.login({
          params: {
            usuario: app.form.usuario,
            password: app.form.password
          },
          success: function success(response) {
            if (response.data.status === 'success') {
              app.loading = false; // localStorage.setItem('usuario', JSON.stringify(response.data.result))

              this.$router.push({
                name: 'select-company' //name: 'pagina-principal'

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
            app.form.count = app.form.count + 1;

            if (app.form.count === 3) {
              this.countDownTimer();
            }

            app.errorMessages.maxAttempts = ['Número de intentos superado, por favor espere ' + app.form.timer + ' segundos'];
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
    this.initTilt(); //this.obtenerAjustesBasicos();
    //this.login_img = (JSON.parse(ajustesBasicos[1].valor))[0].file_thumbnail;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/SelectCompany.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/login/SelectCompany.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_setting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/setting.js */ "./resources/app/api/setting.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Verificando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      form: {
        company: [],
        id_company: '',
        countCompany: '',
        usuario: [],
        name: '',
        descripcion: ''
      },
      companies: [],
      btnAction: 'Acceder',
      errorMessages: []
    };
  },
  methods: {
    nuevo: function nuevo() {
      var _this = this;

      var self = this;
      self.loading = true;
      _api_setting_js__WEBPACK_IMPORTED_MODULE_0__["default"].nueva({}, function (data) {
        self.form.countCompany = data.countCompany;

        if (self.form.countCompany === 1) {
          self.form.company = data.companies[0];
        } else {
          self.companies = data.companies;
        }

        self.form.usuario = data.usuario;
        self.form.name = data.usuario.text;

        if (self.form.countCompany === 1) {
          _this.registrar(); //self.loading = false;

        } else {
          self.loading = false;
        }
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Accediendo, espere....';
      self.loading = true;

      if (self.form.usuario.two_factor_email_available === true) {
        _api_setting_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveCompany(self.form, function (data) {
          alertify.success("Datos cargados correctamente", 5); //this.$router.push({name: 'pagina-principal'});

          _this2.$router.push({
            name: 'two-factor-verify'
          });

          self.loading = false;
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnAction = 'Acceder';
        });
      } else {
        _api_setting_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveCompany(self.form, function (data) {
          alertify.success("Datos cargados correctamente", 5);

          _this2.$router.push({
            name: 'pagina-principal'
          }); //this.$router.push({name: 'two-factor-verify'});


          self.loading = false;
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnAction = 'Acceder';
        });
      }
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css&");

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
                  attrs: { src: this.form.login_static_img }
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
                              placeholder: "correo@gtm.com",
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
                    width: "100px",
                    height: "100px",
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
                attrs: { src: _vm.login_static_img, alt: "IMG" }
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
                attrs: { src: this.form.img_cheems, alt: "IMG" }
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
        _c("div", { staticClass: "wrap-login100" }, [
          _c(
            "div",
            { staticClass: "login100-pic js-tilt", attrs: { "data-tilt": "" } },
            [_c("img", { attrs: { src: _vm.login_static_img, alt: "IMG" } })]
          ),
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
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.titulo) + "\n\t\t\t\t\t")
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
                  attrs: { placeholder: "Digite contraseña", type: "password" },
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
              _vm.form.count < 3
                ? [
                    _c("div", { staticClass: "text-center p-t-12" }, [
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.password, function(message) {
                          return _c("li", { key: message }, [
                            _vm._v(_vm._s(message))
                          ])
                        }),
                        0
                      )
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.count >= 3 && _vm.form.timer > 0
                ? [
                    _c("div", { staticClass: "text-center p-t-12" }, [
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.maxAttempts, function(
                          message
                        ) {
                          return _c("li", { key: message }, [
                            _vm._v(_vm._s(message))
                          ])
                        }),
                        0
                      )
                    ])
                  ]
                : _vm._e(),
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
                      attrs: { tag: "button", to: { name: "reset-password" } }
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
            ],
            2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/SelectCompany.vue?vue&type=template&id=30e8eaf0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/login/SelectCompany.vue?vue&type=template&id=30e8eaf0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      { staticClass: "row" },
      [
        _vm.form.countCompany >= 2
          ? [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(" Usuario")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { disabled: true, type: "text" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Empresas:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: { label: "nombre", options: _vm.companies },
                            model: {
                              value: _vm.form.company,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "company", $$v)
                              },
                              expression: "form.company"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-box-footer text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          disabled: _vm.btnAction != "Acceder" ? true : false,
                          type: "button"
                        },
                        on: { click: _vm.registrar }
                      },
                      [_vm._v(_vm._s(_vm.btnAction))]
                    )
                  ])
                ])
              ])
            ]
          : _vm._e(),
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Seleccionar compañía")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para iniciar sesión con empresa seleccionada")
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

/***/ "./resources/app/api/ajustes.js":
/*!**************************************!*\
  !*** ./resources/app/api/ajustes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cargar: function cargar(cb, errorCb) {
    axios.get('ajustes/cargar').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cargar_basico: function cargar_basico(cb, errorCb) {
    axios.get('ajustes/cargar-basico').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cargar_contabilidad: function cargar_contabilidad(cb, errorCb) {
    axios.get('ajustes/cargar-contabilidad').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cargar_imagenes: function cargar_imagenes(cb, errorCb) {
    axios.get('ajustes/cargar-imagenes').then(function (response) {
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
    axios.post('ajustes/guardar', data).then(function (response) {
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

/***/ "./resources/app/api/setting.js":
/*!**************************************!*\
  !*** ./resources/app/api/setting.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getSettings: function getSettings(cb, errorCb) {
    axios.post('settings/get-settings').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  saveSettings: function saveSettings(data, cb, errorCb) {
    axios.post('settings/save', data).then(function (response) {
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
    axios.post('auth/loadCompany', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  saveCompany: function saveCompany(data, cb, errorCb) {
    axios.post('auth/StoreCompany', data).then(function (response) {
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

/***/ "./resources/app/assets/images/capsoft-login.png":
/*!*******************************************************!*\
  !*** ./resources/app/assets/images/capsoft-login.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/capsoft-login.png?476cf42673514785582b8f29408aa2ba";

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
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ }),

/***/ "./resources/app/components/login/SelectCompany.vue":
/*!**********************************************************!*\
  !*** ./resources/app/components/login/SelectCompany.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectCompany_vue_vue_type_template_id_30e8eaf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectCompany.vue?vue&type=template&id=30e8eaf0& */ "./resources/app/components/login/SelectCompany.vue?vue&type=template&id=30e8eaf0&");
/* harmony import */ var _SelectCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectCompany.vue?vue&type=script&lang=js& */ "./resources/app/components/login/SelectCompany.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectCompany_vue_vue_type_template_id_30e8eaf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectCompany_vue_vue_type_template_id_30e8eaf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/login/SelectCompany.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/login/SelectCompany.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/login/SelectCompany.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectCompany.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/SelectCompany.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/login/SelectCompany.vue?vue&type=template&id=30e8eaf0&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/login/SelectCompany.vue?vue&type=template&id=30e8eaf0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCompany_vue_vue_type_template_id_30e8eaf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectCompany.vue?vue&type=template&id=30e8eaf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/login/SelectCompany.vue?vue&type=template&id=30e8eaf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCompany_vue_vue_type_template_id_30e8eaf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCompany_vue_vue_type_template_id_30e8eaf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);