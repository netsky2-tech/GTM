(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["typeaheadbarcode"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api */ "./resources/app/api/api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    tabindex: {
      type: Number,
      "default": 0
    },
    trim: {
      type: Number,
      "default": 45
    },
    url: {
      type: String,
      required: true
    },
    initial: {
      type: Object
    },
    "default": {
      type: Object,
      "default": function _default() {
        return {
          id: null,
          text: 'Escribe para buscar o selecciona de la lista'
        };
      }
    },
    params: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isLoading: false,
      selectIndex: -1,
      isOpen: false,
      search: '',
      results: []
    };
  },
  computed: {
    selected: function selected() {
      return this.initial ? this.initial : this["default"];
    }
  },
  methods: {
    onEnterKey: function onEnterKey(event) {
      var q = event.target.value;
      this.selectIndex = 0;
      this.fetchData(q);
      var option = this.results[this.selectIndex];

      if (option) {
        this.select(option);
      }
    },
    onDownKey: function onDownKey() {
      if (this.results.length - 1 > this.selectIndex) {
        this.selectIndex++;
      }
    },
    onUpKey: function onUpKey() {
      if (this.selectIndex > 0) {
        this.selectIndex--;
      }
    },
    select: function select(result) {
      this.$emit('input', {
        target: {
          value: result
        }
      });
      this.onEsc();
    },
    onMouse: function onMouse(index) {
      this.selectIndex = index;
    },
    onBlur: function onBlur() {
      this.close();
    },
    onEsc: function onEsc() {
      this.$refs.search.blur();
    },
    close: function close() {
      this.results = [];
      this.isOpen = false;
      this.search = '';
      this.selectIndex = -1;
    },
    onSearch: function onSearch(event) {
      var q = event.target.value;
      this.selectIndex = 0;
      this.fetchData(q);
    },
    toggle: function toggle() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.open();
      }
    },
    onKey: function onKey(e) {
      var keyCode = e.keyCode || e.which;

      if (!e.shiftKey && keyCode !== 9 && !this.isOpen) {
        this.open();
      }
    },
    open: function open() {
      var _this = this;

      this.isOpen = true;
      this.$nextTick(function () {
        _this.$refs.search.focus();
      });
      this.fetchData('');
    },
    fetchData: function fetchData(q) {
      var _this2 = this;

      this.isLoading = true;

      var params = _objectSpread({
        q: q
      }, this.params);

      Object(_api_api__WEBPACK_IMPORTED_MODULE_1__["get"])(this.url, params).then(function (res) {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(_this2.$data, 'results', res.data.results);
        _this2.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=template&id=344b69aa&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=template&id=344b69aa& ***!
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
  return _c(
    "div",
    { class: [_vm.isOpen ? "typeahead typeahead-open" : "typeahead"] },
    [
      _c(
        "div",
        { staticClass: "typeahead-inner" },
        [
          _c(
            "div",
            {
              ref: "toggle",
              class: ["typeahead-selected", "form-control"],
              attrs: { tabindex: _vm.tabindex, title: _vm.selected.text },
              on: { click: _vm.toggle, keydown: _vm.onKey }
            },
            [
              _c("span", [
                _vm._v(_vm._s(_vm._f("trim")(_vm.selected.text, _vm.trim)))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "typeahead-toggler" }, [
                _vm.isOpen
                  ? _c("i", { staticClass: "fa fa-angle-up" })
                  : _c("i", { staticClass: "fa fa-angle-down" })
              ])
            ]
          ),
          _vm._v(" "),
          _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
            _vm.isOpen
              ? _c("div", { staticClass: "typeahead-dropdown" }, [
                  _c(
                    "div",
                    { staticClass: "typeahead-input_wrap" },
                    [
                      _c("input", {
                        ref: "search",
                        staticClass: "typeahead-input",
                        attrs: {
                          autocomplete: "off",
                          type: "text",
                          spellcheck: "false",
                          autocorrect: "off",
                          autocapitalize: "off",
                          placeholder: "Buscar..."
                        },
                        on: {
                          blur: _vm.onBlur,
                          keydown: [
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k($event.keyCode, "esc", 27, $event.key, [
                                  "Esc",
                                  "Escape"
                                ])
                              ) {
                                return null
                              }
                              return _vm.onEsc($event)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.onEnterKey($event)
                            }
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c("transition", { attrs: { name: "fade" } }, [
                        _vm.isLoading
                          ? _c("i", {
                              staticClass:
                                "fa fa-spinner fa-pulse typeahead-spinner"
                            })
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.results.length
                    ? _c(
                        "ul",
                        { staticClass: "typeahead-list" },
                        _vm._l(_vm.results, function(result, index) {
                          return _c("li", { staticClass: "typeahead-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "ac-result",
                                class: [
                                  _vm.selectIndex === index
                                    ? "typeahead-active"
                                    : ""
                                ],
                                on: {
                                  mousedown: function($event) {
                                    $event.preventDefault()
                                    return _vm.select(result)
                                  },
                                  mouseover: function($event) {
                                    $event.preventDefault()
                                    return _vm.onMouse(index)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(result.text))]
                            )
                          ])
                        }),
                        0
                      )
                    : !_vm.isLoading
                    ? _c("div", { staticClass: "typeahead-empty" }, [
                        _c("small", [_vm._v("No se encontraron resultados!")])
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/api.js":
/*!**********************************!*\
  !*** ./resources/app/api/api.js ***!
  \**********************************/
/*! exports provided: get, post, byMethod, interceptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byMethod", function() { return byMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptors", function() { return interceptors; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function get(url, params) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'GET',
    url: url,
    params: params
  });
}
function post(url, data) {
  return byMethod('POST', url, data);
}
function byMethod(method, url, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: method,
    url: url,
    data: data
  });
}
function interceptors(cb) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (res) {
    return res;
  }, function (err) {
    cb(err);
    return Promise.reject(err);
  });
}

/***/ }),

/***/ "./resources/app/components/layout/TypeaheadBarCode.vue":
/*!**************************************************************!*\
  !*** ./resources/app/components/layout/TypeaheadBarCode.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypeaheadBarCode_vue_vue_type_template_id_344b69aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypeaheadBarCode.vue?vue&type=template&id=344b69aa& */ "./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=template&id=344b69aa&");
/* harmony import */ var _TypeaheadBarCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeaheadBarCode.vue?vue&type=script&lang=js& */ "./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TypeaheadBarCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TypeaheadBarCode_vue_vue_type_template_id_344b69aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TypeaheadBarCode_vue_vue_type_template_id_344b69aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/layout/TypeaheadBarCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadBarCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeaheadBarCode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadBarCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=template&id=344b69aa&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=template&id=344b69aa& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadBarCode_vue_vue_type_template_id_344b69aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeaheadBarCode.vue?vue&type=template&id=344b69aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TypeaheadBarCode.vue?vue&type=template&id=344b69aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadBarCode_vue_vue_type_template_id_344b69aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadBarCode_vue_vue_type_template_id_344b69aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);