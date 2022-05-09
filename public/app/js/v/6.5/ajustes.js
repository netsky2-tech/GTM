(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajustes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/Actualizar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/ajustes/Actualizar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_ajustes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/ajustes */ "./resources/app/api/ajustes.js");
/* harmony import */ var _api_monedas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/monedas */ "./resources/app/api/monedas.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      monedas: [],
      form: {
        app_title: "",
        company_address: "",
        company_email: "",
        company_name: "",
        company_telephone: "",
        company_website: "",
        currency_id: "",
        uploaded_logo: "",
        uploaded_icon: "",
        login_img: "",
        ruc_company: ""
      },
      btnAction: "Guardar",
      errorMessages: []
    };
  },
  methods: {
    cargar: function cargar() {
      var _this = this;

      var self = this;
      _api_ajustes__WEBPACK_IMPORTED_MODULE_0__["default"].cargar(function (data) {
        //console.log(data);
        self.monedas = data.monedas;
        _this.form.currency_id = data.ajustes[0].valor;
        _this.form.app_title = data.ajustes[1].valor;
        _this.form.company_name = data.ajustes[3].valor;
        _this.form.company_address = data.ajustes[4].valor;
        _this.form.company_telephone = data.ajustes[5].valor;
        _this.form.company_email = data.ajustes[6].valor;
        _this.form.company_website = data.ajustes[7].valor;
        _this.form.uploaded_icon = data.ajustes[19].valor;
        _this.form.uploaded_logo = data.ajustes[2].valor;
        _this.form.login_img = data.ajustes[20].valor;
        _this.form.ruc_company = data.ajustes[22].valor;
        self.uploader.set_files(data.ajustes[2].valor);
        self.uploader2.set_files(data.ajustes[19].valor);
        self.uploader3.set_files(data.ajustes[20].valor);
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerLogo: function obtenerLogo() {
      var uploaded_logo = $('input[name="uploaded_logo"]').val();

      if (JSON.parse(uploaded_logo).length) {
        return uploaded_logo;
      } else {
        return "";
      }
    },
    obtenerIcono: function obtenerIcono() {
      var uploaded_icon = $('input[name="uploaded_icon"]').val();

      if (JSON.parse(uploaded_icon).length) {
        return uploaded_icon;
      } else {
        return "";
      }
    },
    obtenerLoginImg: function obtenerLoginImg() {
      var login_img = $('input[name="login_img"]').val();

      if (JSON.parse(login_img).length) {
        return login_img;
      } else {
        return "";
      }
    },
    registrar: function registrar() {
      var self = this;
      self.loading = true;
      self.btnAction = "Guardando, espere...";
      self.form.uploaded_logo = this.obtenerLogo();
      self.form.uploaded_icon = this.obtenerIcono();
      self.form.login_img = this.obtenerLoginImg();
      _api_ajustes__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.btnAction = "Guardar";
        alertify.success("Datos Actualizados Correctamente!", 5);
        self.loading = false;
      }, function (err) {
        self.errorMessages = err;
        self.btnAction = "Guardar";
        self.loading = false;
      });
    },
    obtenerMonedas: function obtenerMonedas() {
      var self = this;
      _api_monedas__WEBPACK_IMPORTED_MODULE_1__["default"].cargarMonedas(function (data) {
        self.monedas = data;
      }, function (err) {
        console.log(err);
      });
    },
    initUploader: function initUploader() {
      var self = this;
      this.uploader = $("#uploader-button").uploader({
        upload_url: window.location.origin + "/public/media/upload",
        file_picker_url: window.location.origin + "/public/media/get-files",
        input_name: "uploaded_logo",
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ["image/jpeg", "image/png"],
        on_before_upload: function on_before_upload() {
          self.btnAction = "Subiendo imágenes...";
        },
        on_success_upload: function on_success_upload() {
          self.btnAction = "Guardar";
        },
        on_error: function on_error(err) {
          console.log(err);
        }
      });
      this.uploader2 = $("#uploader-button2").uploader({
        upload_url: window.location.origin + "/public/media/upload",
        file_picker_url: window.location.origin + "/public/media/get-files",
        input_name: "uploaded_icon",
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ["image/jpeg", "image/png"],
        on_before_upload: function on_before_upload() {
          self.btnAction = "Subiendo imágenes...";
        },
        on_success_upload: function on_success_upload() {
          self.btnAction = "Guardar";
        },
        on_error: function on_error(err) {
          console.log(err);
        }
      });
      this.uploader3 = $("#uploader-button3").uploader({
        upload_url: window.location.origin + "/public/media/upload",
        file_picker_url: window.location.origin + "/public/media/get-files",
        input_name: "login_img",
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ["image/jpeg", "image/png"],
        on_before_upload: function on_before_upload() {
          self.btnAction = "Subiendo imágenes...";
        },
        on_success_upload: function on_success_upload() {
          self.btnAction = "Guardar";
        },
        on_error: function on_error(err) {
          console.log(err);
        }
      });
    }
  },
  mounted: function mounted() {
    this.initUploader();
    this.cargar(); //this.obtenerMonedas();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/Actualizar.vue?vue&type=template&id=954a0772&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/ajustes/Actualizar.vue?vue&type=template&id=954a0772& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "content-box" }, [
            _c("div", { staticClass: "content-box-header" }, [
              _c("div", { staticClass: "box-title" }, [
                _vm._v("Ajustes Generales del Sistema")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "box-description" }, [
                _vm._v("Actualizar Ajustes")
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
                      attrs: { to: { name: "pagina-principal-administracion" } }
                    },
                    [_vm._v(" Módulo administración")]
                  ),
                  _vm._v("> Ajustes generales")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Nombre Aplicación")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.app_title,
                          expression: "form.app_title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Digite nombre aplicación"
                      },
                      domProps: { value: _vm.form.app_title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "app_title", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.app_title, function(message) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Sitio web empresa")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_website,
                          expression: "form.company_website"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Digite Sitio web empresa"
                      },
                      domProps: { value: _vm.form.company_website },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "company_website",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.company_website, function(
                        message
                      ) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Nombre empresa")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_name,
                          expression: "form.company_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Digite Nombre empresa"
                      },
                      domProps: { value: _vm.form.company_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "company_name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.company_name, function(message) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Dirección empresa")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_address,
                          expression: "form.company_address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Digite Dirección empresa"
                      },
                      domProps: { value: _vm.form.company_address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "company_address",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.company_address, function(
                        message
                      ) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Télefono")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_telephone,
                          expression: "form.company_telephone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", placeholder: "Télefono" },
                      domProps: { value: _vm.form.company_telephone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "company_telephone",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.company_telephone, function(
                        message
                      ) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Número RUC")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.ruc_company,
                          expression: "form.ruc_company"
                        },
                        {
                          name: "mask",
                          rawName: "v-mask",
                          value: "A#############",
                          expression: "'A#############'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Número RUC" },
                      domProps: { value: _vm.form.ruc_company },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "ruc_company", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.ruc_company, function(message) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Correo electrónico empresa")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_email,
                          expression: "form.company_email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Digite Correo electrónico"
                      },
                      domProps: { value: _vm.form.company_email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "company_email",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.company_email, function(
                        message
                      ) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Moneda")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.currency_id,
                            expression: "form.currency_id"
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
                            _vm.$set(
                              _vm.form,
                              "currency_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.monedas, function(moneda) {
                        return _c(
                          "option",
                          { domProps: { value: moneda.id_moneda } },
                          [_vm._v(_vm._s(moneda.descripcion))]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.currency_id, function(message) {
                        return _c("li", [_vm._v(_vm._s(message))])
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Imagen Logo")
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.uploaded_logo, function(
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Imagen Icono")
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.uploaded_icon, function(
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Imagen Login")
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.login_img, function(message) {
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "content-box-footer text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    type: "button",
                    disabled: _vm.btnAction !== "Guardar"
                  },
                  on: { click: _vm.registrar }
                },
                [_vm._v(_vm._s(_vm.btnAction))]
              )
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uploader" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "button", id: "uploader-button" }
        },
        [_vm._v("Escoger Imagen")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uploader" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "button", id: "uploader-button2" }
        },
        [_vm._v("Escoger Icono")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uploader" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "button", id: "uploader-button3" }
        },
        [_vm._v("Escoger Imagen")]
      )
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

/***/ "./resources/app/api/monedas.js":
/*!**************************************!*\
  !*** ./resources/app/api/monedas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cargarMonedas: function cargarMonedas(cb, errorCb) {
    axios.get('monedas/obtener-monedas').then(function (response) {
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

/***/ "./resources/app/components/ajustes/Actualizar.vue":
/*!*********************************************************!*\
  !*** ./resources/app/components/ajustes/Actualizar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_954a0772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=954a0772& */ "./resources/app/components/ajustes/Actualizar.vue?vue&type=template&id=954a0772&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/ajustes/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_954a0772___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_954a0772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/ajustes/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/ajustes/Actualizar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/components/ajustes/Actualizar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/ajustes/Actualizar.vue?vue&type=template&id=954a0772&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/ajustes/Actualizar.vue?vue&type=template&id=954a0772& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_954a0772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=954a0772& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/Actualizar.vue?vue&type=template&id=954a0772&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_954a0772___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_954a0772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);