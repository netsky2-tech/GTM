(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav */ "./resources/app/components/layout/TopNav.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
 //import SideNav from './SideNav'


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    navStyle: 'global/navStyle',
    ajustesBasicos: 'global/ajustesBasicos'
  }), {
    getNavStyle: function getNavStyle() {
      if (this.navStyle == 'default') {
        return {
          'wrapper': true,
          'fixed-nav': true,
          //'compact-nav': false
          'compact-nav': true
        };
      } else if (this.navStyle == 'compact-nav') {
        return {
          'wrapper': true,
          'fixed-nav': false,
          'compact-nav': true
        };
      } else {
        return {
          'wrapper': true,
          'fixed-nav': true,
          'compact-nav': false
        };
      }
    }
  }),
  components: {
    'top-nav': _TopNav__WEBPACK_IMPORTED_MODULE_0__["default"] // 'side-nav': SideNav

  },
  methods: {
    /* obtenerUsuarioActivo() {
          var user =   JSON.parse(localStorage.getItem('usuario'))
          if (user !== null) {
              this.$store.dispatch('global/establecerUsuarioActivo', user)
          } else {
              this.$store.dispatch('global/establecerUsuarioActivo', false)
          }
      },*/
    setNav: function setNav() {
      //this.$store.dispatch('global/setNavStyle', 'compact-nav')
      if (this.$route.params.navStyle == 'fixed-menu') {
        this.$store.dispatch('global/setNavStyle', 'fixed-nav');
      } else if (this.$route.params.navStyle == 'compact-menu') {
        this.$store.dispatch('global/setNavStyle', 'compact-nav');
      } else {
        this.$store.dispatch('global/setNavStyle', 'default');
      }
    }
  },
  watch: {
    '$route': function $route(to, from) {//console.log(from);
      //console.log(to);
      //  this.setNav()
    }
  },

  /* created() {
       this.obtenerUsuarioActivo()
   },*/
  mounted: function mounted() {
    this.setNav();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/LayoutFullWidth.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/LayoutFullWidth.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav */ "./resources/app/components/layout/TopNav.vue");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav */ "./resources/app/components/layout/SideNav.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    navStyle: 'global/navStyle',
    ajustesBasicos: 'global/ajustesBasicos'
  }), {
    getNavStyle: function getNavStyle() {
      return {
        'wrapper': true,
        'fixed-nav': true,
        'compact-nav': true
      };
    }
  }),
  components: {
    'top-nav': _TopNav__WEBPACK_IMPORTED_MODULE_0__["default"],
    'side-nav': _SideNav__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    /* obtenerUsuarioActivo() {
                   var user =   JSON.parse(localStorage.getItem('usuario'))
                   if (user !== null) {
                       this.$store.dispatch('global/establecerUsuarioActivo', user)
                   } else {
                       this.$store.dispatch('global/establecerUsuarioActivo', false)
                   }
               },*/
    obtenerAjustesBasicos: function obtenerAjustesBasicos() {
      this.$store.dispatch('global/obtenerAjustesBasicos')["catch"](function (err) {
        console.log(err);
      });
    },
    setNav: function setNav() {
      //this.$store.dispatch('global/setNavStyle', 'compact-nav')
      if (this.$route.params.navStyle == 'fixed-menu') {
        this.$store.dispatch('global/setNavStyle', 'fixed-nav');
      } else if (this.$route.params.navStyle == 'compact-menu') {
        this.$store.dispatch('global/setNavStyle', 'compact-nav');
      } else {
        this.$store.dispatch('global/setNavStyle', 'default');
      }
    }
  },
  watch: {
    '$route': function $route(to, from) {//  this.setNav()
    }
  },

  /* created() {
             this.obtenerUsuarioActivo()
         },*/
  mounted: function mounted() {
    this.setNav();
    this.obtenerAjustesBasicos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/SideNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    menuSections: 'global/menuSections'
  }),
  watch: {
    menuSections: function menuSections() {
      var _this = this;

      this.$nextTick(function () {
        _this.initNav();
      });
    }
  },
  methods: {
    randNumber: function randNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    routeTo: function routeTo(menu) {
      var route = {
        name: menu.nombre_route
      };
      return route;
    },
    initNav: function initNav() {
      $('.side-nav').find('.main-menu').find('a').each(function () {
        if ($(this).parent().find('ul').length > 0) {
          $(this).attr('href', 'javascript:;');
        }

        $(this).off();
        $(this).on('click', function () {
          var li = $(this).parent();

          if ($(li).parent().parent().hasClass('main-menu')) {
            if (!$(li).hasClass('active')) {
              $('.side-nav').find('.main-menu > ul > li').removeClass('active');
              $(li).addClass('active');
            } else {
              $(li).removeClass('active'); //$(li).removeClass('active2')
            }
          }
        });
      });
    },
    obtenerMenusUsuario: function obtenerMenusUsuario() {
      this.$store.dispatch('global/obtenerMenusUsuario')["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerMenusUsuario();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TopNav.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/TopNav.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_ajustes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/ajustes */ "./resources/app/api/ajustes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      company_name: [],
      logo_left: '',
      logo_right: '',
      logo_login: [],
      login_img: 'images/block50.gif',
      form: {
        uploaded_logo: "",
        titulo: "",
        login_static_img: '/public/app/images/csicono.png',
        tituloStatic: 'GTM'
      },
      menu_abierto: true
    };
  },
  computed: {
    /*...mapGetters({
    	ajustesBasicos: 'global/ajustesBasicos'
    }),*/
  },
  methods: {
    cargar: function cargar() {
      var _this = this;

      var self = this;
      _api_ajustes__WEBPACK_IMPORTED_MODULE_1__["default"].cargar_imagenes(function (data) {
        var logo_json = JSON.parse(data[0].valor);
        _this.form.uploaded_logo = logo_json[0].file_thumbnail;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerAjustesBasicosV2: function obtenerAjustesBasicosV2() {
      var _this2 = this;

      _api_ajustes__WEBPACK_IMPORTED_MODULE_1__["default"].cargar_basico(function (data) {
        var self = _this2;
        self.company_name = data.company_name;
        var logo_json_left = JSON.parse(data.logo_left.valor);
        self.logo_left = logo_json_left[0].file_thumbnail;
        var logo_json_right = JSON.parse(data.logo_right.valor);
        self.logo_right = logo_json_right[0].file_thumbnail;
        self.logo_login = data.logo_login;
        /*
        					if(!Object.keys(data).length === 0){
        					self.form.uploaded_logo = JSON.parse(data[1].valor);
        					} else {
        						self.form.uploaded_logo = self.form.login_static_img;
        					}
        
        					if(!Object.keys(data).length === 0){
        						self.form.titulo = JSON.parse(data[0].valor);
        					} else {
        						self.form.titulo = self.form.tituloStatic;
        					}*/
      }, function (err) {
        console.log(err);
      });
    },

    /*obtenerAjustesBasicos() {
    	this.$store.dispatch('global/obtenerAjustesBasicos').catch((err) => {
    		console.log(err)
    	})},*/
    hideAllNotifications: function hideAllNotifications() {
      //$('body').removeClass('mask')
      $('.quick-link').find('ul').hide();
      $('.user-profile').find('.dropdown').hide();
      $('.messages').find('.messages-box').hide();
      $('.notification').find('.notification-box').find('.notification-content').hide();
    },
    initNotification: function initNotification() {
      var self = this;
      $('.notification').find('.notification-box').each(function () {
        $(this).on('click', function () {
          if ($(this).find('.notification-content').is(':visible')) {
            //	$('body').removeClass('mask')
            $(this).find('.notification-content').hide();
          } else {
            self.hideAllNotifications(); //$('body').addClass('mask')

            $(this).find('.notification-content').show();
          }
        });
      });
      $('.notification').find('.notification-box').each(function () {
        $(this).find('.content').slimScroll({
          color: 'rgb(142, 142, 142)',
          height: 270
        });
      });
    },
    initMessages: function initMessages() {
      var self = this;
      $('.messages').on('click', function () {
        if ($(this).find('.messages-box').is(':visible')) {
          //$('body').removeClass('mask')
          $(this).find('.messages-box').hide();
        } else {
          self.hideAllNotifications(); //$('body').addClass('mask')

          $(this).find('.messages-box').show();
        }
      });
      $('.messages').find('.content').slimScroll({
        color: 'rgb(142, 142, 142)',
        height: 250
      });
    },
    initQuickLink: function initQuickLink() {
      var self = this;
      $('.quick-link').on('click', function () {
        if ($(this).find('ul').is(':visible')) {
          //$('body').removeClass('mask')
          $(this).find('ul').hide();
        } else {
          self.hideAllNotifications(); //$('body').addClass('mask')

          $(this).find('ul').show();
        }
      });
    },
    hideAllMenu: function hideAllMenu() {
      //$('body').removeClass('mask')
      $('.user-profile').hide();
      $('.side-nav').hide();
    },
    initProfileNav: function initProfileNav() {
      var self = this;
      $('.user-profile').on('click', function () {
        if ($(window).width() > 400) {
          if ($(this).find('.dropdown').is(':visible')) {
            //$('body').removeClass('mask')
            $(this).find('.dropdown').hide();
          } else {
            self.hideAllNotifications(); //$('body').addClass('mask')

            $(this).find('.dropdown').show();
          }
        }
      });
    },
    initMobileProfileNav: function initMobileProfileNav() {
      var self = this;
      $('.profile-nav-mobile').on('click', function () {
        if ($('.user-profile').is(':visible')) {
          //$('body').removeClass('mask')
          $('.user-profile').hide();
        } else {
          self.hideAllMenu(); //$('body').addClass('mask')

          $('.user-profile').show();
        }
      });
    },
    initMobileNav: function initMobileNav() {
      var self = this; //console.log("cambioooo a menos de 1500");

      $('.side-nav-mobile').on('click', function () {
        if (self.menu_abierto) {
          self.$store.dispatch('global/setNavStyle', 'compact-nav');
          self.menu_abierto = false;
        } else {
          self.$store.dispatch('global/setNavStyle', 'default');
          self.menu_abierto = true;
        }
        /*if ($('.side-nav').is(':visible')) {
        	//$('body').removeClass('mask')
        //this.$store.dispatch('global/setNavStyle', 'fixed-nav')
        //this.$store.dispatch('global/setNavStyle', 'default')
        	$('.side-nav').hide()
        } else {
        	//self.hideAllMenu();
        		//$('body').addClass('mask')
        	$('.side-nav').show()
        }*/

      });
    },
    initResponsiveSideNav: function initResponsiveSideNav() {
      if ($(window).width() <= 400) {
        $('.side-nav').find('.side-nav-box').slimScroll({
          color: 'rgb(142, 142, 142)',
          height: $(window).height() - 60
        });
      }
    },
    logout: function logout() {
      this.$auth.logout();
      this.$router.push({
        name: 'login'
      });
    }
  },
  mounted: function mounted() {
    this.initResponsiveSideNav(); //this.initMobileNav()

    this.initProfileNav();
    this.initMobileProfileNav();
    this.initQuickLink();
    this.initMessages();
    this.initNotification();
    this.obtenerAjustesBasicosV2();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    usuarioActivo: 'global/usuarioActivo'
  })),
  methods: {
    initLineChart: function initLineChart() {
      var lineChart = $("#line-chart");
      var lineData = {
        labels: ["02.00", "02.30", "03.00", "03.30", "04.00", "04.30", "02.00", "02.30", "03.00", "02.00", "02.30"],
        datasets: [{
          label: "Visitors Graph",
          borderColor: "#535a6f",
          pointRadius: 4,
          borderWidth: 1,
          backgroundColor: "#263238",
          pointBackgroundColor: "#cccccc",
          data: [1, 5, 10, 4, 20, 5, 10, 2, 12, 5, 1]
        }, {
          label: "Visitors Graph",
          borderColor: "#535a6f",
          pointRadius: 4,
          borderWidth: 1,
          backgroundColor: "#48527270",
          pointBackgroundColor: "#333",
          data: [5, 32, 5, 42, 50, 59, 5, 32, 5, 40, 5]
        }]
      };
      var myLineChart = new Chart(lineChart, {
        type: 'line',
        data: lineData,
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              ticks: {
                fontSize: '11',
                fontColor: '#969da5'
              },
              gridLines: {
                color: '#f2f4f8',
                zeroLineColor: '#f2f4f8'
              }
            }],
            yAxes: [{
              gridLines: {
                color: '#f2f4f8',
                zeroLineColor: '#f2f4f8'
              },
              ticks: {
                fontSize: '11',
                fontColor: '#969da5'
              }
            }]
          }
        }
      });
    }
  },
  mounted: function mounted() {
    this.initLineChart(); //console.log(this.$auth.user().usuario);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected[data-v-8dafdb2c] {\n  background-color: #ca3232;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Layout.vue?vue&type=template&id=cff4cb08&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/Layout.vue?vue&type=template&id=cff4cb08& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { class: _vm.getNavStyle },
    [
      _c("top-nav"),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper-box" }, [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/LayoutFullWidth.vue?vue&type=template&id=5a17e40b&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/LayoutFullWidth.vue?vue&type=template&id=5a17e40b& ***!
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
  return _c(
    "div",
    { class: _vm.getNavStyle },
    [
      _c("top-nav"),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper-box" }, [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true& ***!
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
  return _c("div", { staticClass: "side-nav" }, [
    _c(
      "div",
      { staticClass: "side-nav-box" },
      [
        _vm._l(_vm.menuSections, function(menuSection, key) {
          return [
            _c("div", { staticClass: "title" }, [
              _c("strong", [_vm._v(_vm._s(key))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "main-menu" }, [
              _c(
                "ul",
                _vm._l(menuSection, function(menu) {
                  return menu.id_menu_padre == 0
                    ? _c(
                        "li",
                        [
                          menu.cantidad_hijos == 0
                            ? _c(
                                "router-link",
                                { attrs: { to: _vm.routeTo(menu) } },
                                [
                                  _c("i", { class: menu.icon }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(menu.nombre_menu))])
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          menu.cantidad_hijos > 0
                            ? _c("a", [
                                _c("i", { class: menu.icon }),
                                _vm._v(" "),
                                _c("span", [_vm._v(_vm._s(menu.nombre_menu))])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          menu.cantidad_hijos > 0
                            ? _c(
                                "ul",
                                _vm._l(menuSection, function(childMenu) {
                                  return childMenu.id_menu_padre == menu.id_menu
                                    ? _c(
                                        "li",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: _vm.routeTo(childMenu),
                                                exact: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(childMenu.nombre_menu)
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                }),
                                0
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                }),
                0
              )
            ])
          ]
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TopNav.vue?vue&type=template&id=891b7e40&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/layout/TopNav.vue?vue&type=template&id=891b7e40& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "top-nav" }, [
    _c("div", { staticClass: "top-nav-box" }, [
      _c(
        "div",
        { staticClass: "logo" },
        [
          _c(
            "router-link",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: "Ir a página principal",
                  expression: "'Ir a página principal' "
                }
              ],
              attrs: { to: { name: "pagina-principal" }, tag: "button" }
            },
            [[_c("img", { attrs: { src: _vm.logo_left, alt: "img" } })]],
            2
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: "Ir a página principal",
                  expression: "'Ir a página principal'"
                }
              ],
              attrs: { to: { name: "pagina-principal" }, tag: "button" }
            },
            [
              _c("div", { staticClass: "titulo_sistema" }, [
                _c("strong", [_vm._v(_vm._s(_vm.company_name.valor))])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "user-profile" }, [
        _c("div", { staticClass: "user-image" }, [
          _c("div", { staticClass: "image" }, [
            _c("img", { attrs: { src: _vm.logo_right, alt: "IMG" } })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown" }, [
          _c(
            "div",
            { staticClass: "info" },
            [
              _vm.$auth.user()
                ? [
                    _c("div", { staticClass: "user-name" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$auth.user().trabajador.primer_nombre +
                            " " +
                            _vm.$auth.user().trabajador.primer_apellido +
                            " " +
                            (_vm.$auth.user().trabajador.segundo_apellido
                              ? _vm.$auth.user().trabajador.segundo_apellido
                              : "")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "user-group" }, [
                      _vm._v(_vm._s(_vm.$auth.user().rol.descripcion))
                    ])
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-list" }),
          _vm._v(" "),
          _vm.$auth.check()
            ? _c("div", { staticClass: "dropdown-list" }, [
                _c(
                  "a",
                  { attrs: { href: "javascript:" }, on: { click: _vm.logout } },
                  [_vm._v("Cerrar sesión")]
                )
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-nav-mobile" }, [
      _c("i", { staticClass: "pe-7s-config" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/Dashboard.vue?vue&type=template&id=5a024e2f&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/Dashboard.vue?vue&type=template&id=5a024e2f& ***!
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
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "simple-welcome-text" }, [
      _c("div", { staticClass: "text" }, [_vm._v("Dashboard")]),
      _vm._v(" "),
      _c("div", { staticClass: "info" }, [
        _vm._v("Bienvenido " + _vm._s(_vm.$auth.user().usuario) + ", "),
        _c("i", { staticClass: "fa fa-map-marker" }),
        _vm._v(_vm._s(_vm.$auth.user().rol.descripcion))
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "simple-chart-3" }, [
      _c("div", { staticClass: "filter" }, [
        _c("div", { staticClass: "left-filter" }, [
          _c("select", [
            _c("option", [_vm._v("2017")]),
            _vm._v(" "),
            _c("option", [_vm._v("2016")]),
            _vm._v(" "),
            _c("option", [_vm._v("2015")]),
            _vm._v(" "),
            _c("option", [_vm._v("2014")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "right-filter" }, [
          _c("div", { staticClass: "text active" }, [_vm._v("Daily")]),
          _vm._v(" "),
          _c("div", { staticClass: "text" }, [_vm._v("Weekly")]),
          _vm._v(" "),
          _c("div", { staticClass: "text" }, [_vm._v("Monthly")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "chart-box" }, [
        _c("div", { staticClass: "chart" }, [
          _c("div", { staticClass: "title" }, [
            _c("div", { staticClass: "text" }, [_vm._v("Sales Report")]),
            _vm._v(" "),
            _c("div", { staticClass: "info" }, [
              _c("span", [
                _c("i", { staticClass: "fa fa-circle" }),
                _vm._v(" Sales")
              ]),
              _vm._v(" "),
              _c("span", [
                _c("i", { staticClass: "fa fa-circle" }),
                _vm._v(" Earning ($)")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "count" }, [
            _c("div", { staticClass: "text" }, [_vm._v("Total revenue")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [_vm._v("$1,521")])
          ]),
          _vm._v(" "),
          _c("canvas", { attrs: { id: "line-chart", height: "149px" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info-list" }, [
          _c("div", { staticClass: "head-info" }, [
            _c("div", { staticClass: "text" }, [_vm._v("$1.423.000")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [_vm._v("Total Income")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "text" }, [_vm._v("$14.000")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [_vm._v("Earnings")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "text" }, [_vm._v("180")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [_vm._v("Server Hit")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "text" }, [_vm._v("12.100")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [_vm._v("Location")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "text" }, [_vm._v("1.500 TB")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [_vm._v("Server Storage")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "weather-card" }, [
          _c("div", { staticClass: "detail" }, [
            _c("div", { staticClass: "country" }, [_vm._v("New York")]),
            _vm._v(" "),
            _c("div", { staticClass: "capital-city" }, [_vm._v("New York")]),
            _vm._v(" "),
            _c("div", { staticClass: "temperature" }, [
              _c("div", { staticClass: "temperature-value" }, [_vm._v("23°")]),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-long-arrow-right" }),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-umbrella" }),
              _vm._v(" "),
              _c("div", { staticClass: "rain-possibility" }, [_vm._v("2%")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "infographic" }, [
            _c("i", { staticClass: "weather fa fa-cloud" }),
            _vm._v(" "),
            _c("div", { staticClass: "time" }, [_vm._v("10:25 PM")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "facebook-card" }, [
          _c("div", { staticClass: "last-post" }, [
            _vm._v(
              "Genius is one percent inspiration and ninety-nine percent perspiration."
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "date" }, [
            _vm._v("1 Jan 2018, via desktop")
          ]),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-facebook" }),
          _vm._v(" "),
          _c("div", { staticClass: "detail" }, [
            _c("div", { staticClass: "comment" }, [
              _c("i", { staticClass: "fa fa-comments" }),
              _vm._v(" 21\n\t\t\t\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "like" }, [
              _c("i", { staticClass: "fa fa-star" }),
              _vm._v(" 31\n\t\t\t\t\t")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "twitter-card" }, [
          _c("div", { staticClass: "last-post" }, [
            _vm._v(
              "Our greatest weakness lies in giving up. The most certain way."
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "date" }, [
            _vm._v("3 Jan 2018, via mobile")
          ]),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-twitter" }),
          _vm._v(" "),
          _c("div", { staticClass: "detail" }, [
            _c("div", { staticClass: "comment" }, [
              _c("i", { staticClass: "fa fa-comments" }),
              _vm._v(" 21\n\t\t\t\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "like" }, [
              _c("i", { staticClass: "fa fa-star" }),
              _vm._v(" 31\n\t\t\t\t\t")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-7" }, [
        _c("div", { staticClass: "pending-products" }, [
          _c("div", { staticClass: "title" }, [
            _c("div", { staticClass: "text" }, [
              _vm._v("Pending Product "),
              _c("div", { staticClass: "badge" }, [_vm._v("27")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "action" }, [
              _c("select", [
                _c("option", [_vm._v("Newest")]),
                _vm._v(" "),
                _c("option", [_vm._v("Today")]),
                _vm._v(" "),
                _c("option", [_vm._v("7 Days")]),
                _vm._v(" "),
                _c("option", [_vm._v("14 Days")]),
                _vm._v(" "),
                _c("option", [_vm._v("Last Month")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "products" }, [
            _c("div", { staticClass: "product" }, [
              _c("div", { staticClass: "product-content" }, [
                _c("div", { staticClass: "product-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio1.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-detail" }, [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info" }, [_vm._v("Food & Drink")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "time" }, [
                  _vm._v("Posted Today at 4:23 AM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product" }, [
              _c("div", { staticClass: "product-content" }, [
                _c("div", { staticClass: "product-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio2.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-detail" }, [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info" }, [_vm._v("Food & Drink")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "time" }, [
                  _vm._v("Posted Today at 4:23 AM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product" }, [
              _c("div", { staticClass: "product-content" }, [
                _c("div", { staticClass: "product-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio3.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-detail" }, [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info" }, [_vm._v("Food & Drink")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "time" }, [
                  _vm._v("Posted Today at 4:23 AM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product" }, [
              _c("div", { staticClass: "product-content" }, [
                _c("div", { staticClass: "product-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio4.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-detail" }, [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info" }, [_vm._v("Food & Drink")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "time" }, [
                  _vm._v("Posted Today at 4:23 AM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-5" }, [
        _c("div", { staticClass: "top-users" }, [
          _c("div", { staticClass: "title" }, [
            _c("div", { staticClass: "text" }, [
              _vm._v("Top 5 Owners "),
              _c("div", { staticClass: "badge" }, [_vm._v("27")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "action" }, [
              _c("select", [
                _c("option", [_vm._v("Newest")]),
                _vm._v(" "),
                _c("option", [_vm._v("Today")]),
                _vm._v(" "),
                _c("option", [_vm._v("7 Days")]),
                _vm._v(" "),
                _c("option", [_vm._v("14 Days")]),
                _vm._v(" "),
                _c("option", [_vm._v("Last Month")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "users" }, [
            _c("div", { staticClass: "user" }, [
              _c("div", { staticClass: "user-content" }, [
                _c("div", { staticClass: "user-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio1.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "user-detail" }, [
                  _c("div", { staticClass: "name" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sales" }, [_vm._v("191 Sales")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "income" }, [_vm._v("$1000")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "user" }, [
              _c("div", { staticClass: "user-content" }, [
                _c("div", { staticClass: "user-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio2.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "user-detail" }, [
                  _c("div", { staticClass: "name" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sales" }, [_vm._v("191 Sales")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "income" }, [_vm._v("$120")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "user" }, [
              _c("div", { staticClass: "user-content" }, [
                _c("div", { staticClass: "user-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio3.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "user-detail" }, [
                  _c("div", { staticClass: "name" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sales" }, [_vm._v("191 Sales")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "income" }, [_vm._v("$230")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "user" }, [
              _c("div", { staticClass: "user-content" }, [
                _c("div", { staticClass: "user-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/portfolio4.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "user-detail" }, [
                  _c("div", { staticClass: "name" }, [
                    _vm._v("Samsung Galaxy J7 Pro")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sales" }, [_vm._v("191 Sales")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "income" }, [_vm._v("$210")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "action-list" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-search" }),
                    _vm._v(" Accept")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "" } }, [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Reject")
                  ])
                ])
              ])
            ])
          ])
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

/***/ "./resources/app/components/layout/Layout.vue":
/*!****************************************************!*\
  !*** ./resources/app/components/layout/Layout.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_cff4cb08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=cff4cb08& */ "./resources/app/components/layout/Layout.vue?vue&type=template&id=cff4cb08&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/app/components/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_cff4cb08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_cff4cb08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/layout/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/layout/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/app/components/layout/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/layout/Layout.vue?vue&type=template&id=cff4cb08&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/layout/Layout.vue?vue&type=template&id=cff4cb08& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_cff4cb08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=cff4cb08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/Layout.vue?vue&type=template&id=cff4cb08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_cff4cb08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_cff4cb08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/layout/LayoutFullWidth.vue":
/*!*************************************************************!*\
  !*** ./resources/app/components/layout/LayoutFullWidth.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutFullWidth_vue_vue_type_template_id_5a17e40b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutFullWidth.vue?vue&type=template&id=5a17e40b& */ "./resources/app/components/layout/LayoutFullWidth.vue?vue&type=template&id=5a17e40b&");
/* harmony import */ var _LayoutFullWidth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutFullWidth.vue?vue&type=script&lang=js& */ "./resources/app/components/layout/LayoutFullWidth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutFullWidth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutFullWidth_vue_vue_type_template_id_5a17e40b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutFullWidth_vue_vue_type_template_id_5a17e40b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/layout/LayoutFullWidth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/layout/LayoutFullWidth.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/layout/LayoutFullWidth.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFullWidth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutFullWidth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/LayoutFullWidth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFullWidth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/layout/LayoutFullWidth.vue?vue&type=template&id=5a17e40b&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/layout/LayoutFullWidth.vue?vue&type=template&id=5a17e40b& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFullWidth_vue_vue_type_template_id_5a17e40b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutFullWidth.vue?vue&type=template&id=5a17e40b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/LayoutFullWidth.vue?vue&type=template&id=5a17e40b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFullWidth_vue_vue_type_template_id_5a17e40b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFullWidth_vue_vue_type_template_id_5a17e40b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/layout/SideNav.vue":
/*!*****************************************************!*\
  !*** ./resources/app/components/layout/SideNav.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideNav_vue_vue_type_template_id_8dafdb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true& */ "./resources/app/components/layout/SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true&");
/* harmony import */ var _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav.vue?vue&type=script&lang=js& */ "./resources/app/components/layout/SideNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SideNav_vue_vue_type_style_index_0_id_8dafdb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true& */ "./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideNav_vue_vue_type_template_id_8dafdb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideNav_vue_vue_type_template_id_8dafdb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8dafdb2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/layout/SideNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/layout/SideNav.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/app/components/layout/SideNav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8dafdb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=style&index=0&id=8dafdb2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8dafdb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8dafdb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8dafdb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8dafdb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8dafdb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/layout/SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/layout/SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_8dafdb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/SideNav.vue?vue&type=template&id=8dafdb2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_8dafdb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_8dafdb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/layout/TopNav.vue":
/*!****************************************************!*\
  !*** ./resources/app/components/layout/TopNav.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav_vue_vue_type_template_id_891b7e40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=891b7e40& */ "./resources/app/components/layout/TopNav.vue?vue&type=template&id=891b7e40&");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ "./resources/app/components/layout/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_891b7e40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNav_vue_vue_type_template_id_891b7e40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/layout/TopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/layout/TopNav.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/app/components/layout/TopNav.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/layout/TopNav.vue?vue&type=template&id=891b7e40&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/layout/TopNav.vue?vue&type=template&id=891b7e40& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_891b7e40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=891b7e40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/layout/TopNav.vue?vue&type=template&id=891b7e40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_891b7e40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_891b7e40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/pagina-principal/Dashboard.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/components/pagina-principal/Dashboard.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_5a024e2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=5a024e2f& */ "./resources/app/components/pagina-principal/Dashboard.vue?vue&type=template&id=5a024e2f&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/app/components/pagina-principal/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_5a024e2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_5a024e2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/pagina-principal/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/pagina-principal/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/pagina-principal/Dashboard.vue?vue&type=template&id=5a024e2f&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/Dashboard.vue?vue&type=template&id=5a024e2f& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5a024e2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=5a024e2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/Dashboard.vue?vue&type=template&id=5a024e2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5a024e2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5a024e2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);