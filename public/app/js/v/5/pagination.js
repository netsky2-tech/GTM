(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagination"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Pagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/Pagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      currentLimit: 0,
      paginations: [],
      showing: {
        first: '',
        last: ''
      }
    };
  },
  props: ['items', 'total', 'page', 'limitOptions', 'limit'],
  watch: {
    items: function items() {
      this.pagination();
    }
  },
  methods: {
    pagination: function pagination() {
      var totalPage = Math.ceil(this.total / this.limit); // Pagination info

      this.showing.first = this.page * this.limit - this.limit + 1;
      this.showing.last = this.showing.first + this.items.length - 1; // Reset pagination

      this.paginations = []; // First

      if (this.page > 1) {
        this.paginations.push({
          active: false,
          text: 'First',
          value: 1
        });
      } else {
        this.paginations.push({
          active: false,
          text: 'First',
          value: 0
        });
      } // Prev


      if (this.page > 1) {
        this.paginations.push({
          active: false,
          text: 'Prev',
          value: this.page - 1
        });
      } else {
        this.paginations.push({
          active: false,
          text: 'Prev',
          value: 0
        });
      } // Page before


      var start;

      if (this.page - 3 <= 0) {
        start = 1;
      } else {
        var append = 0;

        if (this.page + 3 > totalPage) {
          var margin = this.page + 3 - totalPage;

          if (this.page - 3 - margin > 0) {
            append = margin;
          } else {
            append = this.page - 1 - 3;
          }
        } else {
          append = 0;
        }

        start = this.page - 3 - append;
      }

      for (var i = start; i < this.page; i++) {
        this.paginations.push({
          active: false,
          text: i,
          value: i
        });
      } // Current page


      this.paginations.push({
        active: true,
        text: this.page,
        value: 0
      }); // Page after

      var end;

      if (this.page + 3 > totalPage) {
        end = totalPage;
      } else {
        var append = 0;

        if (this.page - 3 <= 0) {
          var margin = 3 - (this.page - 1);

          if (this.page + 3 + margin > totalPage) {
            append = totalPage - this.page - 3;
          } else {
            append = margin;
          }
        } else {
          append = 0;
        }

        end = this.page + 3 + append;
      }

      for (var i = this.page + 1; i <= end; i++) {
        this.paginations.push({
          active: false,
          text: i,
          value: i
        });
      } // Next


      if (this.page < totalPage) {
        this.paginations.push({
          active: false,
          text: 'Next',
          value: this.page + 1
        });
      } else {
        this.paginations.push({
          active: false,
          text: 'Next',
          value: 0
        });
      } // Last


      if (this.page < totalPage) {
        this.paginations.push({
          active: false,
          text: 'Last',
          value: totalPage
        });
      } else {
        this.paginations.push({
          active: false,
          text: 'Last',
          value: 0
        });
      }
    },
    changePage: function changePage(page) {
      if (page) {
        this.$emit('changePage', page);
      }
    },
    changeLimit: function changeLimit() {
      this.$emit('changeLimit', this.currentLimit);
    }
  },
  mounted: function mounted() {
    this.currentLimit = this.limit;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Pagination.vue?vue&type=template&id=0d3cb1ec&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/Pagination.vue?vue&type=template&id=0d3cb1ec& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-box-footer" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3 form-inline sm-text-center" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.currentLimit,
                expression: "currentLimit"
              }
            ],
            staticClass: "form-control",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.currentLimit = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.changeLimit
              ]
            }
          },
          _vm._l(_vm.limitOptions, function(limit) {
            return _c("option", [_vm._v(_vm._s(limit))])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 form-inline mt-2 sm-text-center" }, [
        _vm._v(
          "Mostrando registros del " +
            _vm._s(_vm.showing.first) +
            " al " +
            _vm._s(_vm.showing.last) +
            ". Total de registros: " +
            _vm._s(_vm.total)
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c(
          "ul",
          { staticClass: "pagination pull-right mt-2" },
          _vm._l(_vm.paginations, function(pagination) {
            return _c(
              "li",
              {
                class: { active: pagination.active },
                on: {
                  click: function($event) {
                    return _vm.changePage(pagination.value)
                  }
                }
              },
              [
                pagination.text == "First"
                  ? _c("a", { attrs: { href: "javascript:;" } }, [
                      _vm._v("Primera")
                    ])
                  : pagination.text == "Prev"
                  ? _c("a", { attrs: { href: "javascript:;" } }, [
                      _vm._v("Anterior")
                    ])
                  : pagination.text == "Next"
                  ? _c("a", { attrs: { href: "javascript:;" } }, [
                      _vm._v("Siguiente")
                    ])
                  : pagination.text == "Last"
                  ? _c("a", { attrs: { href: "javascript:;" } }, [
                      _vm._v("Última")
                    ])
                  : _c("a", { attrs: { href: "javascript:;" } }, [
                      _vm._v(_vm._s(pagination.text))
                    ])
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/components/layout/Pagination.vue":
/*!********************************************************!*\
  !*** ./resources/app/components/layout/Pagination.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_0d3cb1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=0d3cb1ec& */ "./resources/app/components/layout/Pagination.vue?vue&type=template&id=0d3cb1ec&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/app/components/layout/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_0d3cb1ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_0d3cb1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/layout/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/layout/Pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/layout/Pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/layout/Pagination.vue?vue&type=template&id=0d3cb1ec&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/layout/Pagination.vue?vue&type=template&id=0d3cb1ec& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_0d3cb1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=0d3cb1ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Pagination.vue?vue&type=template&id=0d3cb1ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_0d3cb1ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_0d3cb1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);