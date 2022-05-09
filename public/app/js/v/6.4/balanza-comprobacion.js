(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balanza-comprobacion"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/reportes_financieros */ "./resources/app/api/reportes_financieros.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_niveles_cuentas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/niveles_cuentas */ "./resources/app/api/niveles_cuentas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var fecha_actual = new Date();
fecha_actual.setHours(23, 59, 59, 999);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      descargando: false,
      niveles_cuenta: [],
      disabledDates: {
        to: '',
        // Disable all dates up to specific date
        from: fecha_actual // Disable all dates after specific date

      },
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "d MMMM yyyy",
      fecha_inicialx: '',
      //new Date(),
      fecha_finalx: '',
      //new Date(),
      filter: {
        nivel_cuenta: "",
        fecha_inicial: 'Invalid date',
        //moment(new Date()).format("YYYY-MM-DD"),
        fecha_final: 'Invalid date' //moment(new Date()).format("YYYY-MM-DD"),

      },
      cuentasContables: [],
      errorMessages: [],
      total: 0
    };
  },
  computed: {
    total_debe: function total_debe() {
      return this.cuentasContables.reduce(function (carry, item) {
        return carry + (item.id_nivel_cuenta === 2 ? Number(item.debe) : 0);
      }, 0);
    },
    total_haber: function total_haber() {
      return this.cuentasContables.reduce(function (carry, item) {
        return carry + (item.id_nivel_cuenta === 2 ? Number(item.haber) : 0);
      }, 0);
    }
  },
  methods: {
    mostrarCentros: function mostrarCentros(key) {
      console.log(key);
      console.log("mostrar centro");

      if (this.cuentasContables[key].mostrar) {
        this.cuentasContables[key].mostrar = 0;
      } else {
        this.cuentasContables[key].mostrar = 1;
      } //console.log(this.cuentasContables[key].mostrar);

    },

    /*seleccionarUsuario(e) {
          const client = e.target.value;
    this.usuarioBusqueda = client;
      },*/
    onDateSelect: function onDateSelect(date) {
      this.filter.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      this.filter.fecha_final = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerBalanzaComprobacion: function obtenerBalanzaComprobacion() {
      var self = this;
      _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerBalanzaComprobacion(self.filter, function (data) {
        data.forEach(function (cuenta, key) {
          data[key].mostrar = 0; //console.log(JSON.parse(data[key].detalle_sucursales));

          data[key].detalle_sucursales = JSON.parse(data[key].detalle_sucursales);
        });
        self.cuentasContables = data;
      }, function (err) {
        //console.log(err)
        alertify.error('Rango de Fechas no válido');
      });
    },
    obtenerTodosNivelesCuenta: function obtenerTodosNivelesCuenta() {
      var self = this;
      _api_niveles_cuentas__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodosNivelesCuenta(function (data) {
        self.niveles_cuenta = data;
        self.filter.nivel_cuenta = self.niveles_cuenta[1];
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerTodosNivelesCuenta();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/reportes_financieros */ "./resources/app/api/reportes_financieros.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_niveles_cuentas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/niveles_cuentas */ "./resources/app/api/niveles_cuentas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_caja_chica__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/caja_chica */ "./resources/app/api/caja_chica.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var fecha_actual = new Date();
fecha_actual.setHours(23, 59, 59, 999);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tipo_reporte: 1,
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default.a,
      niveles_cuenta: [],
      periodos: [],
      meses: [],
      mes: '',
      formato: 'pdf',
      disabledDates: {
        to: '',
        // Disable all dates up to specific date
        from: fecha_actual // Disable all dates after specific date

      },
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "d MMMM yyyy",
      fecha_inicialx: '',
      //new Date(),
      fecha_finalx: '',
      //new Date(),
      filter: {
        nivel_cuenta: "",
        periodo: "",
        fecha_inicial: 'Invalid date',
        //moment(new Date()).format("YYYY-MM-DD"),
        fecha_final: 'Invalid date' //moment(new Date()).format("YYYY-MM-DD"),

      },
      cuentasContables: [],
      errorMessages: [],
      total: 0,
      primer_dia_periodo: moment(new Date()).format("YYYY-MM-DD"),
      ultimo_dia_periodo: moment(new Date()).format("YYYY-MM-DD")
    };
  },
  computed: {
    total_debe: function total_debe() {
      return this.cuentasContables.reduce(function (carry, item) {
        return carry + (item.id_nivel_cuenta === 2 ? Number(item.debe) : 0);
      }, 0);
    },
    total_haber: function total_haber() {
      return this.cuentasContables.reduce(function (carry, item) {
        return carry + (item.id_nivel_cuenta === 2 ? Number(item.haber) : 0);
      }, 0);
    }
  },
  methods: {
    obtenerMeses: function obtenerMeses() {
      var self = this;
      self.mes = [];
      self.meses = self.filter.periodo.meses_periodo;
      self.mes = self.meses[0];
    },
    cambiarFechas: function cambiarFechas() {
      var self = this;
      self.fecha_inicialx = '';
      self.fecha_finalx = '';
      self.disabledDates.to = new Date(self.filter.periodo.periodo, self.mes.mes - 1, 1, 0, 0, 0);
      self.disabledDates.from = new Date(self.mes.ultimo_dia_mes + ' 23:59'); //self.disabledDates.from.setTime( self.disabledDates.from.getTime() + 86400000 );
      //self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

      self.filter.fecha_inicial = moment(self.disabledDates.to).format("YYYY-MM-DD"); //

      self.filter.fecha_final = moment(self.disabledDates.from).format("YYYY-MM-DD"); //*/

      self.fecha_inicialx = self.disabledDates.to;
      self.fecha_finalx = self.disabledDates.from;
    },
    mostrarCentros: function mostrarCentros(key) {
      console.log(key);
      console.log("mostrar centro");

      if (this.cuentasContables[key].mostrar) {
        this.cuentasContables[key].mostrar = 0;
      } else {
        this.cuentasContables[key].mostrar = 1;
      } //console.log(this.cuentasContables[key].mostrar);

    },

    /*seleccionarUsuario(e) {
          const client = e.target.value;
    this.usuarioBusqueda = client;
      },*/
    onDateSelect: function onDateSelect(date) {
      this.filter.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      this.filter.fecha_final = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerBalanzaComprobacion: function obtenerBalanzaComprobacion() {
      var self = this;

      if (self.tipo_reporte === 1) {
        self.loading = true;
        _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerBalanzaComprobacionRta91(self.filter, function (data) {
          /*data.forEach((cuenta, key) => {
          	data[key].mostrar = 0;
          	//console.log(JSON.parse(data[key].detalle_sucursales));
          	data[key].detalle_sucursales = JSON.parse(data[key].detalle_sucursales);
          });*/
          self.cuentasContables = data;
          self.loading = false;
        }, function (err) {
          //console.log(err)
          alertify.error('Rango de Fechas no válido');
        });
      }

      if (self.tipo_reporte === 2) {
        self.loading = true;
        _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerBalanzaComprobacion(self.filter, function (data) {
          data.forEach(function (cuenta, key) {
            data[key].mostrar = 0; //console.log(JSON.parse(data[key].detalle_sucursales));

            data[key].detalle_sucursales = JSON.parse(data[key].detalle_sucursales);
          });
          self.cuentasContables = data;
          self.loading = false;
        }, function (err) {
          //console.log(err)
          alertify.error('Rango de Fechas no válido');
        });
      }
    },
    obtenerDependenciasBalanza: function obtenerDependenciasBalanza() {
      var self = this;
      self.loading = true;
      _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerDependenciasBalanza({}, function (data) {
        self.periodos = data.periodos;
        self.niveles_cuenta = data.niveles_cuenta;
        self.filter.nivel_cuenta = self.niveles_cuenta[2];
        self.filter.periodo = self.periodos[0];
        self.meses = self.filter.periodo.meses_periodo;
        self.mes = self.meses[0];
        self.cambiarFechas();
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    descargarReporte: function descargarReporte() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/balanza-comprobacion/reporte', {
        id_periodox: self.filter.periodo.id_periodo_fiscal,
        id_mesx: self.mes.id_periodo_mes,
        tipo_reporte: self.tipo_reporte,
        id_nivel_cuenta: self.filter.nivel_cuenta.id_nivel_cuenta,
        extension: self.formato,
        fechaInicio: self.filter.fecha_inicial,
        fechaFinal: self.filter.fecha_final
      }, {
        responseType: 'blob'
      }).then(function (_ref) {
        var data = _ref.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.formato === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'EstadoResultado.' + self.formato;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.obtenerDependenciasBalanza();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-b3a03252] {\n  min-width: 120px;\n}\n.detail-link[data-v-b3a03252] {\n  width: 60px;\n  position: relative;\n}\n.detail-link .link[data-v-b3a03252] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.detail-link .link[data-v-b3a03252]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.btn-generar[data-v-b3a03252] {\n  margin-top: 33px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-68465fd0] {\n  min-width: 120px;\n}\n.detail-link[data-v-68465fd0] {\n  width: 60px;\n  position: relative;\n}\n.detail-link .link[data-v-68465fd0] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.detail-link .link[data-v-68465fd0]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.btn-generar[data-v-68465fd0] {\n  margin-top: 33px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content-box-header" }, [
        _c("div", { staticClass: "box-title" }, [
          _vm._v("Balanza Comprobación")
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
                attrs: { to: { name: "pagina-principal-contabilidad" } }
              },
              [_vm._v(" Módulo contabilidad")]
            ),
            _vm._v("> Balanza comprobación")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "label-search" }, [
                _vm._v("Tipos Cuentas:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { options: _vm.niveles_cuenta, label: "descripcion" },
                model: {
                  value: _vm.filter.nivel_cuenta,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "nivel_cuenta", $$v)
                  },
                  expression: "filter.nivel_cuenta"
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
                _vm._v("Rango de fechas:")
              ]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  disabledDates: _vm.disabledDates,
                  format: _vm.format,
                  language: _vm.es,
                  placeholder: "Fecha Inicial"
                },
                on: { selected: _vm.onDateSelect },
                model: {
                  value: _vm.fecha_inicialx,
                  callback: function($$v) {
                    _vm.fecha_inicialx = $$v
                  },
                  expression: "fecha_inicialx"
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
                _vm._v("Rango de fechas:")
              ]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  disabledDates: _vm.disabledDates,
                  format: _vm.format,
                  language: _vm.es,
                  placeholder: "Fecha Final"
                },
                on: { selected: _vm.onDateSelect2 },
                model: {
                  value: _vm.fecha_finalx,
                  callback: function($$v) {
                    _vm.fecha_finalx = $$v
                  },
                  expression: "fecha_finalx"
                }
              })
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
                on: { click: _vm.obtenerBalanzaComprobacion }
              },
              [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Generar")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "invoice-wrapper" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "invoice-body" }, [
        _c("table", { staticClass: "table invoice-table" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.cuentasContables, function(cuentaContable, key) {
                return [
                  _c("tr", { key: cuentaContable.id_cierre_mensual }, [
                    _c(
                      "td",
                      {
                        staticClass: "detail-link",
                        staticStyle: { "padding-left": "12px", width: "5%" }
                      },
                      [
                        [4, 5, 6].indexOf(cuentaContable.id_tipo_cuenta) >= 0
                          ? _c("div", {
                              staticClass: "link",
                              on: {
                                click: function($event) {
                                  return _vm.mostrarCentros(key)
                                }
                              }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "15%" }
                      },
                      [_vm._v(_vm._s(cuentaContable.cta_contable))]
                    ),
                    _vm._v(" "),
                    cuentaContable.id_nivel_cuenta === 1
                      ? _c(
                          "td",
                          {
                            staticClass: "text-left",
                            staticStyle: { width: "30%" }
                          },
                          [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    cuentaContable.id_nivel_cuenta === 2
                      ? _c(
                          "td",
                          {
                            staticClass: "text-left",
                            staticStyle: { "padding-left": "2em", width: "30%" }
                          },
                          [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    cuentaContable.id_nivel_cuenta === 3
                      ? _c(
                          "td",
                          {
                            staticClass: "text-left",
                            staticStyle: { "padding-left": "4em", width: "30%" }
                          },
                          [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    cuentaContable.id_nivel_cuenta === 4
                      ? _c(
                          "td",
                          {
                            staticClass: "text-left",
                            staticStyle: { "padding-left": "6em", width: "30%" }
                          },
                          [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    cuentaContable.id_nivel_cuenta === 5
                      ? _c(
                          "td",
                          {
                            staticClass: "text-left",
                            staticStyle: { "padding-left": "8em", width: "30%" }
                          },
                          [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    cuentaContable.id_nivel_cuenta === 6
                      ? _c(
                          "td",
                          {
                            staticClass: "text-left",
                            staticStyle: {
                              "padding-left": "10em",
                              width: "30%"
                            }
                          },
                          [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    cuentaContable.id_nivel_cuenta === 7
                      ? _c(
                          "td",
                          {
                            staticClass: "text-left",
                            staticStyle: {
                              "padding-left": "12em",
                              width: "30%"
                            }
                          },
                          [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                        )
                      : _vm._e(),
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
                            _vm._f("formatMoney")(
                              cuentaContable.debe_anterior,
                              2
                            )
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
                            _vm._f("formatMoney")(
                              cuentaContable.haber_anterior,
                              2
                            )
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "15%" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm._f("formatMoney")(cuentaContable.debe, 2))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "15%" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm._f("formatMoney")(cuentaContable.haber, 2))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "15%" }
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(
                              Number(cuentaContable.debe_anterior) +
                                Number(cuentaContable.debe),
                              2
                            )
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "15%" }
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(
                              Number(cuentaContable.haber_anterior) +
                                Number(cuentaContable.haber),
                              2
                            )
                          )
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  cuentaContable.mostrar
                    ? _c("tr", { key: cuentaContable.id_cuenta_contable }, [
                        _c("td", { attrs: { colspan: "10" } }, [
                          _c("table", { staticClass: "table invoice-table" }, [
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(
                                cuentaContable.detalle_sucursales,
                                function(detalle_sucursal) {
                                  return _c(
                                    "tr",
                                    { key: detalle_sucursal.cta_contable },
                                    [
                                      _c(
                                        "td",
                                        {
                                          staticClass: "text-left",
                                          staticStyle: { width: "50%" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(detalle_sucursal.descripcion)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("td", {
                                        staticStyle: { width: "10%" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass: "text-center",
                                          staticStyle: { width: "15%" }
                                        },
                                        [_vm._v(_vm._s(detalle_sucursal.debex))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass: "text-center",
                                          staticStyle: { width: "15%" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(detalle_sucursal.haberx)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("td", {
                                        staticStyle: { width: "10%" }
                                      })
                                    ]
                                  )
                                }
                              ),
                              0
                            )
                          ])
                        ])
                      ])
                    : _vm._e()
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("tfoot")
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
    return _c("div", { staticClass: "invoice-info" }, [
      _c("div", { staticClass: "company-info" }, [
        _c("div", { staticClass: "company-name" }, [
          _vm._v("LUBRICANTES DE NICARAGUA, S. A.")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "company-address" }, [
          _vm._v(
            "De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "company-phone" }, [
          _vm._v("Balanza de Comprobación")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { colspan: "3" } }),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Saldo Anterior")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Movimientos")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Saldo Final")]
        )
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Código Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Haber")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Haber")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Haber")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Descripción Centro Costo")
        ]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Haber")
        ]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "main" },
    [
      _c("div", { staticClass: "content-box" }, [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Balanza Comprobación")
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
                  attrs: { to: { name: "pagina-principal-contabilidad" } }
                },
                [_vm._v(" Módulo contabilidad")]
              ),
              _vm._v("> Balanza comprobación")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4 col-md-2" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { staticClass: "label-search" }, [
                  _vm._v("Tipos Cuentas:")
                ]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: { options: _vm.niveles_cuenta, label: "descripcion" },
                  model: {
                    value: _vm.filter.nivel_cuenta,
                    callback: function($$v) {
                      _vm.$set(_vm.filter, "nivel_cuenta", $$v)
                    },
                    expression: "filter.nivel_cuenta"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4 col-md-2" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { staticClass: "label-search" }, [_vm._v("Año:")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: { label: "periodo", options: _vm.periodos },
                  on: { input: _vm.obtenerMeses },
                  model: {
                    value: _vm.filter.periodo,
                    callback: function($$v) {
                      _vm.$set(_vm.filter, "periodo", $$v)
                    },
                    expression: "filter.periodo"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4 col-md-2" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { staticClass: "label-search" }, [_vm._v("Mes:")]),
                _vm._v(" "),
                _c("v-select", {
                  style: "margin-left: .5rem!important;",
                  attrs: { label: "mes_letras", options: _vm.meses },
                  on: { input: _vm.cambiarFechas },
                  model: {
                    value: _vm.mes,
                    callback: function($$v) {
                      _vm.mes = $$v
                    },
                    expression: "mes"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4 col-md-2" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { staticClass: "label-search" }, [
                  _vm._v("Rango de fechas:")
                ]),
                _vm._v(" "),
                _c("datepicker", {
                  attrs: {
                    disabledDates: _vm.disabledDates,
                    format: _vm.format,
                    language: _vm.es,
                    placeholder: "Fecha Inicial"
                  },
                  on: { selected: _vm.onDateSelect },
                  model: {
                    value: _vm.fecha_inicialx,
                    callback: function($$v) {
                      _vm.fecha_inicialx = $$v
                    },
                    expression: "fecha_inicialx"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4 col-md-2" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { staticClass: "label-search" }, [
                  _vm._v("Rango de fechas:")
                ]),
                _vm._v(" "),
                _c("datepicker", {
                  attrs: {
                    disabledDates: _vm.disabledDates,
                    format: _vm.format,
                    language: _vm.es,
                    placeholder: "Fecha Final"
                  },
                  on: { selected: _vm.onDateSelect2 },
                  model: {
                    value: _vm.fecha_finalx,
                    callback: function($$v) {
                      _vm.fecha_finalx = $$v
                    },
                    expression: "fecha_finalx"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4 col-md-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info btn-generar",
                  on: { click: _vm.obtenerBalanzaComprobacion }
                },
                [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Generar")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v(" Formato de los saldos:")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.tipo_reporte,
                      expression: "tipo_reporte",
                      modifiers: { number: true }
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
                            return _vm._n(val)
                          })
                        _vm.tipo_reporte = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        _vm.cuentasContables = ""
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "1" } }, [
                    _vm._v("Consolidados")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [
                    _vm._v("Detallados")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v(" Formato impresión:")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formato,
                      expression: "formato"
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
                      _vm.formato = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "pdf" } }, [_vm._v("PDF")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "xls" } }, [_vm._v("Excel")])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-generar",
                attrs: { type: "button" },
                on: { click: _vm.descargarReporte }
              },
              [_vm._v("Imprimir\n\t\t\t\t")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.tipo_reporte === 1
        ? _c("div", { staticClass: "invoice-wrapper" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "invoice-body" }, [
              _c("table", { staticClass: "table invoice-table" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.cuentasContables, function(cuentaContable, key) {
                      return [
                        _c("tr", { key: cuentaContable.id_cierre_mensual }, [
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "15%" }
                            },
                            [_vm._v(_vm._s(cuentaContable.cta_contable))]
                          ),
                          _vm._v(" "),
                          cuentaContable.id_nivel_cuenta === 1
                            ? _c(
                                "td",
                                {
                                  staticClass: "text-left",
                                  staticStyle: { width: "30%" }
                                },
                                [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          cuentaContable.id_nivel_cuenta === 2
                            ? _c(
                                "td",
                                {
                                  staticClass: "text-left",
                                  staticStyle: {
                                    "padding-left": "2em",
                                    width: "30%"
                                  }
                                },
                                [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          cuentaContable.id_nivel_cuenta === 3
                            ? _c(
                                "td",
                                {
                                  staticClass: "text-left",
                                  staticStyle: {
                                    "padding-left": "4em",
                                    width: "30%"
                                  }
                                },
                                [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          cuentaContable.id_nivel_cuenta === 4
                            ? _c(
                                "td",
                                {
                                  staticClass: "text-left",
                                  staticStyle: {
                                    "padding-left": "6em",
                                    width: "30%"
                                  }
                                },
                                [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          cuentaContable.id_nivel_cuenta === 5
                            ? _c(
                                "td",
                                {
                                  staticClass: "text-left",
                                  staticStyle: {
                                    "padding-left": "8em",
                                    width: "30%"
                                  }
                                },
                                [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          cuentaContable.id_nivel_cuenta === 6
                            ? _c(
                                "td",
                                {
                                  staticClass: "text-left",
                                  staticStyle: {
                                    "padding-left": "10em",
                                    width: "30%"
                                  }
                                },
                                [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          cuentaContable.id_nivel_cuenta === 7
                            ? _c(
                                "td",
                                {
                                  staticClass: "text-left",
                                  staticStyle: {
                                    "padding-left": "12em",
                                    width: "30%"
                                  }
                                },
                                [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                              )
                            : _vm._e(),
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
                                  _vm._f("formatMoney")(
                                    cuentaContable.saldo_anterior,
                                    2
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "15%" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatMoney")(cuentaContable.debe, 2)
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "15%" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatMoney")(cuentaContable.haber, 2)
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
                                  _vm._f("formatMoney")(
                                    Number(cuentaContable.saldo_anterior) +
                                      Number(cuentaContable.saldox),
                                    2
                                  )
                                )
                              )
                            ]
                          )
                        ])
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("tfoot")
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.tipo_reporte === 2
        ? _c("div", { staticClass: "invoice-wrapper" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "invoice-body" }, [
              _c("table", { staticClass: "table invoice-table" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.cuentasContables, function(cuentaContable, key) {
                      return [
                        _c(
                          "tr",
                          { key: cuentaContable.id_cierre_mensual },
                          [
                            _c(
                              "td",
                              {
                                staticClass: "detail-link",
                                staticStyle: {
                                  "padding-left": "12px",
                                  width: "5%"
                                }
                              },
                              [
                                [4, 5, 6].indexOf(
                                  cuentaContable.id_tipo_cuenta
                                ) >= 0
                                  ? _c("div", {
                                      staticClass: "link",
                                      on: {
                                        click: function($event) {
                                          return _vm.mostrarCentros(key)
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "15%" }
                              },
                              [_vm._v(_vm._s(cuentaContable.cta_contable))]
                            ),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 1
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: { width: "30%" }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 2
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      "padding-left": "2em",
                                      width: "30%"
                                    }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 3
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      "padding-left": "4em",
                                      width: "30%"
                                    }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 4
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      "padding-left": "6em",
                                      width: "30%"
                                    }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 5
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      "padding-left": "8em",
                                      width: "30%"
                                    }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 6
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      "padding-left": "10em",
                                      width: "30%"
                                    }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 7
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      "padding-left": "12em",
                                      width: "30%"
                                    }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            [2, 3, 4].indexOf(cuentaContable.id_tipo_cuenta) >=
                            0
                              ? [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "10%" }
                                    },
                                    [_vm._v("-")]
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
                                          _vm._f("formatMoney")(
                                            cuentaContable.saldo_anterior,
                                            2
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ]
                              : [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "10%" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            cuentaContable.saldo_anterior,
                                            2
                                          )
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
                                    [_vm._v("-")]
                                  )
                                ],
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "15%" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      cuentaContable.debe,
                                      2
                                    )
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "15%" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      cuentaContable.haber,
                                      2
                                    )
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            [2, 3, 4].indexOf(cuentaContable.id_tipo_cuenta) >=
                            0
                              ? [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "15%" }
                                    },
                                    [_vm._v("-")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "15%" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            Number(
                                              cuentaContable.saldo_anterior
                                            ) + Number(cuentaContable.saldox),
                                            2
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ]
                              : [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "15%" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            Number(
                                              cuentaContable.saldo_anterior
                                            ) + Number(cuentaContable.saldox),
                                            2
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "15%" }
                                    },
                                    [_vm._v("-")]
                                  )
                                ]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        cuentaContable.mostrar
                          ? _c(
                              "tr",
                              { key: cuentaContable.id_cuenta_contable },
                              [
                                _c("td", { attrs: { colspan: "10" } }, [
                                  _c(
                                    "table",
                                    { staticClass: "table invoice-table" },
                                    [
                                      _vm._m(4, true),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        _vm._l(
                                          cuentaContable.detalle_sucursales,
                                          function(detalle_sucursal) {
                                            return _c(
                                              "tr",
                                              {
                                                key:
                                                  detalle_sucursal.cta_contable
                                              },
                                              [
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-left",
                                                    staticStyle: {
                                                      width: "50%"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        detalle_sucursal.descripcion
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", {
                                                  staticStyle: { width: "10%" }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center",
                                                    staticStyle: {
                                                      width: "15%"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        detalle_sucursal.debex
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center",
                                                    staticStyle: {
                                                      width: "15%"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        detalle_sucursal.haberx
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", {
                                                  staticStyle: { width: "10%" }
                                                })
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("tfoot")
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.loading
        ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invoice-info" }, [
      _c("div", { staticClass: "company-info" }, [
        _c("div", { staticClass: "company-name" }, [
          _vm._v("LUBRICANTES DE NICARAGUA, S. A.")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "company-address" }, [
          _vm._v(
            "De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "company-phone" }, [
          _vm._v("Balanza de Comprobación")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Código Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Saldo Anterior")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Haber")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Saldo Final")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invoice-info" }, [
      _c("div", { staticClass: "company-info" }, [
        _c("div", { staticClass: "company-name" }, [
          _vm._v("LUBRICANTES DE NICARAGUA, S. A.")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "company-address" }, [
          _vm._v(
            "De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "company-phone" }, [
          _vm._v("Balanza de Comprobación")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { colspan: "3" } }),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Saldo Anterior")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Movimientos")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Saldo Final")]
        )
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Código Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Haber")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Haber")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Haber")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Descripción Centro Costo")
        ]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Haber")
        ]),
        _vm._v(" "),
        _c("th")
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

/***/ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/locale/translations/es.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return new(function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=e,this.months=n,this.monthsAbbr=r,this.days=o,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,o;return n=t,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&e(n.prototype,r),o&&e(n,o),t}())("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])});


/***/ }),

/***/ "./resources/app/api/caja_chica.js":
/*!*****************************************!*\
  !*** ./resources/app/api/caja_chica.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('cajas/obtener-todas').then(function (response) {
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
    axios.post('cajas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCaja: function obtenerCaja(data, cb, errorCb) {
    axios.post('cajas/obtener-caja', data).then(function (response) {
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
    axios.post('cajas/registrar', data).then(function (response) {
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
    axios.put('cajas/actualizar', data).then(function (response) {
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
    axios.put('cajas/desactivar', data).then(function (response) {
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
    axios.put('cajas/activar', data).then(function (response) {
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
    axios.post('cajas/nuevo', data).then(function (response) {
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

/***/ "./resources/app/api/niveles_cuentas.js":
/*!**********************************************!*\
  !*** ./resources/app/api/niveles_cuentas.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosNivelesCuenta: function obtenerTodosNivelesCuenta(cb, errorCb) {
    axios.get('contabilidad/niveles-cuenta/obtener-niveles-cuenta-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNivelesCuenta: function obtenerNivelesCuenta(data, cb, errorCb) {
    axios.post('contabilidad/niveles-cuenta/obtener-niveles-cuenta', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNivelCuenta: function obtenerNivelCuenta(data, cb, errorCb) {
    axios.post('contabilidad/niveles-cuenta/obtener-nivel-cuenta', data).then(function (response) {
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
    axios.put('contabilidad/niveles-cuenta/actualizar', data).then(function (response) {
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

/***/ "./resources/app/api/reportes_financieros.js":
/*!***************************************************!*\
  !*** ./resources/app/api/reportes_financieros.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerBalanzaComprobacion: function obtenerBalanzaComprobacion(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balanza', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBalanzaComprobacionRta91: function obtenerBalanzaComprobacionRta91(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balanza-nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerDependenciasBalanza: function obtenerDependenciasBalanza(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balanza/dependencias', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBalanceGeneral: function obtenerBalanceGeneral(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balance-general', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerEstadoResultados: function obtenerEstadoResultados(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/estado-resultados', data).then(function (response) {
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

module.exports = "/images/block50.gif?a75e3729ca58e29435a37b05f314fe5c";

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacion.vue":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacion.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BalanzaComprobacion_vue_vue_type_template_id_b3a03252_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true& */ "./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true&");
/* harmony import */ var _BalanzaComprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BalanzaComprobacion.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BalanzaComprobacion_vue_vue_type_style_index_0_id_b3a03252_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true& */ "./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BalanzaComprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BalanzaComprobacion_vue_vue_type_template_id_b3a03252_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BalanzaComprobacion_vue_vue_type_template_id_b3a03252_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b3a03252",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes_financieros/BalanzaComprobacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_style_index_0_id_b3a03252_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=style&index=0&id=b3a03252&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_style_index_0_id_b3a03252_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_style_index_0_id_b3a03252_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_style_index_0_id_b3a03252_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_style_index_0_id_b3a03252_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_style_index_0_id_b3a03252_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_template_id_b3a03252_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacion.vue?vue&type=template&id=b3a03252&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_template_id_b3a03252_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacion_vue_vue_type_template_id_b3a03252_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue":
/*!************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BalanzaComprobacionRta91_vue_vue_type_template_id_68465fd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true& */ "./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true&");
/* harmony import */ var _BalanzaComprobacionRta91_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BalanzaComprobacionRta91.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BalanzaComprobacionRta91_vue_vue_type_style_index_0_id_68465fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true& */ "./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BalanzaComprobacionRta91_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BalanzaComprobacionRta91_vue_vue_type_template_id_68465fd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BalanzaComprobacionRta91_vue_vue_type_template_id_68465fd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68465fd0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacionRta91.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_style_index_0_id_68465fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=style&index=0&id=68465fd0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_style_index_0_id_68465fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_style_index_0_id_68465fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_style_index_0_id_68465fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_style_index_0_id_68465fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_style_index_0_id_68465fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_template_id_68465fd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanzaComprobacionRta91.vue?vue&type=template&id=68465fd0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_template_id_68465fd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanzaComprobacionRta91_vue_vue_type_template_id_68465fd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);