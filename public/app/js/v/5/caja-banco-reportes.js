(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caja-banco-reportes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var fecha_actual_beneficiario = new Date();
fecha_actual_beneficiario.setHours(23, 59, 59, 999);
var fecha_actual_cheque_anulado = new Date();
fecha_actual_cheque_anulado.setHours(23, 59, 59, 999);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      descargando: false,
      reportes: [],
      formatoRetenciones: 'pdf',
      formatoCheques: 'pdf',
      //sucursalesBusquedaURL: "/sucursales/buscar",
      //	bodegasBusquedaURL: "/bodegas/buscar",
      //clientesBusquedaURL: "/ventas/clientes/buscar",
      errorMessages: [],
      //Reporte retenciones
      fechaInicialRetenciones: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalRetenciones: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialRetencionesX: new Date(),
      fechaFinalRetencionesX: new Date(),
      //Reporte de chequest
      fechaInicialCheques: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalCheques: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialChequesX: new Date(),
      fechaFinalChequesX: new Date(),
      //Reporte estado cheques
      disabledDates: {
        to: '',
        //new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
        from: fecha_actual // Disable all dates after specific date 01/02/2020

      },
      periodos: [],
      meses: [],
      mes: 0,
      anio: 0,
      primero_dia_mes_cheque: moment(new Date()).format("YYYY-MM-DD"),
      ultimo_dia_mes_cheque: moment(new Date()).format("YYYY-MM-DD"),
      formatoChequesEstados: 'pdf',
      //Reporte pago beneficiario
      disabledDatesBeneficiario: {
        to: '',
        //new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
        from: fecha_actual_beneficiario // Disable all dates after specific date 01/02/2020

      },
      periodosBeneficiario: [],
      mesesBeneficiario: [],
      mesBeneficiario: 0,
      anioBeneficiario: 0,
      primero_dia_mes_beneficiario: moment(new Date()).format("YYYY-MM-DD"),
      ultimo_dia_mes_beneficiario: moment(new Date()).format("YYYY-MM-DD"),
      formatoBeneficiario: 'pdf',
      //Reporte cheques anulados
      disabledDatesChequesAnulados: {
        to: '',
        //new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
        from: fecha_actual_cheque_anulado // Disable all dates after specific date 01/02/2020

      },
      periodosChequesAnulados: [],
      mesesChequesAnulados: [],
      mesChequeAnulado: 0,
      anioChequeAnulado: 0,
      primero_dia_mes_anulado: moment(new Date()).format("YYYY-MM-DD"),
      ultimo_dia_mes_anulado: moment(new Date()).format("YYYY-MM-DD"),
      formatoChequeAnulado: 'pdf'
    };
  },
  methods: {
    descargarReporteRetenciones: function descargarReporteRetenciones() {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('caja-banco/reportes/retenciones', {
          fechaInicio: self.fechaInicialRetenciones,
          fechaFinal: self.fechaFinalRetenciones,
          extension: self.formatoRetenciones
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoRetenciones === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteRetenciones.' + self.formatoRetenciones;
          link.click();
          _this.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    descargarReporteCheques: function descargarReporteCheques() {
      var _this2 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('caja-banco/reportes/cheques', {
          fechaInicio: self.fechaInicialCheques,
          fechaFinal: self.fechaFinalCheques,
          extension: self.formatoCheques
        }, {
          responseType: 'blob'
        }).then(function (_ref2) {
          var data = _ref2.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoCheques === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteCheques.' + self.formatoCheques;
          link.click();
          _this2.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    descargarReporteChequesEstados: function descargarReporteChequesEstados() {
      var _this3 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('caja-banco/reportes/cheques-estado', {
          fechaInicio: self.primero_dia_mes_cheque,
          fechaFinal: self.ultimo_dia_mes_cheque,
          extension: self.formatoChequesEstados
        }, {
          responseType: 'blob'
        }).then(function (_ref3) {
          var data = _ref3.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoChequesEstados === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteChequesEstados.' + self.formatoChequesEstados;
          link.click();
          _this3.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    descargarReporteBeneficiario: function descargarReporteBeneficiario() {
      var _this4 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('caja-banco/reportes/pago-beneficiario', {
          fechaInicio: self.primero_dia_mes_beneficiario,
          fechaFinal: self.ultimo_dia_mes_beneficiario,
          extension: self.formatoBeneficiario
        }, {
          responseType: 'blob'
        }).then(function (_ref4) {
          var data = _ref4.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoBeneficiario === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReportePagoBeneficiario.' + self.formatoBeneficiario;
          link.click();
          _this4.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    descargarReporteChequesAnulados: function descargarReporteChequesAnulados() {
      var _this5 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('caja-banco/reportes/cheques-anulados', {
          fechaInicio: self.primero_dia_mes_anulado,
          fechaFinal: self.ultimo_dia_mes_anulado,
          extension: self.formatoChequeAnulado
        }, {
          responseType: 'blob'
        }).then(function (_ref5) {
          var data = _ref5.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoChequeAnulado === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteChequesAnulados.' + self.formatoChequeAnulado;
          link.click();
          _this5.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    seleccionarBodegaReporte: function seleccionarBodegaReporte(e) {
      var bodega = e.target.value;
      var self = this;
      self.bodega_reporteEstadoBateria = bodega;
      self.id_bodega_reporteEstadoBateria = self.bodega_reporteEstadoBateria.id_bodega;
    },
    seleccionarSucursalReporte: function seleccionarSucursalReporte(e) {
      var sucursal = e.target.value;
      var self = this;
      self.sucursal_reporteExistencia = sucursal;
      self.id_sucursal_reporteExistencia = self.sucursal_reporteExistencia.id_sucursal;
    },
    seleccionarCliente: function seleccionarCliente(e) {
      var cliente = e.target.value;
      var self = this;
      self.form.cliente = cliente;
      self.form.id_cliente = self.form.cliente.id_cliente;
    },
    seleccionarClienteHistorial: function seleccionarClienteHistorial(e) {
      var clienteHistorial = e.target.value;
      var self = this;
      self.form.clienteHistorial = clienteHistorial;
      self.form.id_cliente_historial = self.form.clienteHistorial.id_cliente;
    },
    cambiarClientes: function cambiarClientes() {
      var self = this;

      if (self.todos_clientes) {
        self.form.clienteHistorial = {};
        self.form.clienteHistorial.id_cliente_historial = 0;
      }
    },
    seleccionarFechaInicialRetenciones: function seleccionarFechaInicialRetenciones(date) {
      this.fechaInicialRetenciones = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalRetenciones: function seleccionarFechaFinalRetenciones(date) {
      this.fechaFinalRetenciones = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialCheques: function seleccionarFechaInicialCheques(date) {
      this.fechaInicialCheques = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalCheques: function seleccionarFechaFinalCheques(date) {
      this.fechaFinalCheques = moment(date).format("YYYY-MM-DD");
    },
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        if (data.lista_reportes.length > 0) {
          data.lista_reportes.forEach(function (reportex, key) {
            self.reportes.push(reportex.id_menu);
          });
        }

        self.periodos = data.periodos;
        self.anio = self.periodos[0];
        self.meses = self.anio.meses_periodo;
        self.periodosBeneficiario = data.periodos;
        self.anioBeneficiario = self.periodos[0];
        self.mesesBeneficiario = self.anioBeneficiario.meses_periodo;
        self.periodosChequesAnulados = data.periodos;
        self.anioChequeAnulado = self.periodos[0];
        self.mesesChequesAnulados = self.anioBeneficiario.meses_periodo;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    obtenerMeses: function obtenerMeses() {
      var self = this;
      self.mes = [];
      self.meses = self.anio.meses_periodo;
      self.mes = self.meses[0];
    },
    obtenerMesesBeneficiario: function obtenerMesesBeneficiario() {
      var self = this;
      self.mesBeneficiario = [];
      self.mesesBeneficiario = self.anioBeneficiario.meses_periodo;
      self.mesBeneficiario = self.mesesBeneficiario[0];
    },
    obtenerMesesChequesAnulados: function obtenerMesesChequesAnulados() {
      var self = this;
      self.mesChequeAnulado = [];
      self.mesesChequesAnulados = self.anioChequeAnulado.meses_periodo;
      self.mesChequeAnulado = self.mesesChequesAnulados[0];
    },
    cambiarFechas: function cambiarFechas() {
      var self = this;
      self.disabledDates.to = new Date(self.anio.periodo, self.mes.mes - 1, 1);
      self.disabledDates.from = new Date(self.mes.ultimo_dia_mes);
      self.disabledDates.from.setTime(self.disabledDates.from.getTime() + 86400000); //self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

      self.primero_dia_mes_cheque = moment(self.disabledDates.to).format("YYYY-MM-DD"); //

      self.ultimo_dia_mes_cheque = moment(self.disabledDates.from).format("YYYY-MM-DD"); //
    },
    cambiarFechasBeneficiario: function cambiarFechasBeneficiario() {
      var self = this;
      self.disabledDatesBeneficiario.to = new Date(self.anioBeneficiario.periodo, self.mesBeneficiario.mes - 1, 1);
      self.disabledDatesBeneficiario.from = new Date(self.mesBeneficiario.ultimo_dia_mes);
      self.disabledDatesBeneficiario.from.setTime(self.disabledDatesBeneficiario.from.getTime() + 86400000); //self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

      self.primero_dia_mes_beneficiario = moment(self.disabledDatesBeneficiario.to).format("YYYY-MM-DD"); //

      self.ultimo_dia_mes_beneficiario = moment(self.disabledDatesBeneficiario.from).format("YYYY-MM-DD"); //
    },
    cambiarFechasChequesAnulado: function cambiarFechasChequesAnulado() {
      var self = this;
      self.disabledDatesChequesAnulados.to = new Date(self.anioChequeAnulado.periodo, self.mesChequeAnulado.mes - 1, 1);
      self.disabledDatesChequesAnulados.from = new Date(self.mesChequeAnulado.ultimo_dia_mes);
      self.disabledDatesChequesAnulados.from.setTime(self.disabledDatesChequesAnulados.from.getTime() + 86400000); //self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

      self.primero_dia_mes_anulado = moment(self.disabledDatesChequesAnulados.to).format("YYYY-MM-DD"); //

      self.ultimo_dia_mes_anulado = moment(self.disabledDatesChequesAnulados.from).format("YYYY-MM-DD"); //
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-imprimir {\n\tmargin-top: 33px;\n}\n.check-label2 {\n\tmargin-top: 40px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "text" }, [_vm._v("Reportes Caja y Banco")]),
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
              attrs: { to: { name: "pagina-principal-caja" } }
            },
            [_vm._v(" Módulo caja y banco")]
          ),
          _vm._v("> Reportes")
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _vm.reportes.indexOf(425) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha inicial")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected: _vm.seleccionarFechaInicialRetenciones
                            },
                            model: {
                              value: _vm.fechaInicialRetencionesX,
                              callback: function($$v) {
                                _vm.fechaInicialRetencionesX = $$v
                              },
                              expression: "fechaInicialRetencionesX"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha final (Corte)")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected: _vm.seleccionarFechaFinalRetenciones
                            },
                            model: {
                              value: _vm.fechaFinalRetencionesX,
                              callback: function($$v) {
                                _vm.fechaFinalRetencionesX = $$v
                              },
                              expression: "fechaFinalRetencionesX"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Formato:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formatoRetenciones,
                                expression: "formatoRetenciones"
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
                                _vm.formatoRetenciones = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "pdf" } }, [
                              _vm._v("PDF")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "xls" } }, [
                              _vm._v("Excel")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-imprimir",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteRetenciones }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(426) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha inicial")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected: _vm.seleccionarFechaInicialCheques
                            },
                            model: {
                              value: _vm.fechaInicialChequesX,
                              callback: function($$v) {
                                _vm.fechaInicialChequesX = $$v
                              },
                              expression: "fechaInicialChequesX"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha final (Corte)")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: { selected: _vm.seleccionarFechaFinalCheques },
                            model: {
                              value: _vm.fechaFinalChequesX,
                              callback: function($$v) {
                                _vm.fechaFinalChequesX = $$v
                              },
                              expression: "fechaFinalChequesX"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Formato:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formatoCheques,
                                expression: "formatoCheques"
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
                                _vm.formatoCheques = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "pdf" } }, [
                              _vm._v("PDF")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "xls" } }, [
                              _vm._v("Excel")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-imprimir",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteCheques }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(427) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Año:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: { label: "periodo", options: _vm.periodos },
                            on: { input: _vm.obtenerMeses },
                            model: {
                              value: _vm.anio,
                              callback: function($$v) {
                                _vm.anio = $$v
                              },
                              expression: "anio"
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
                            _vm._v("Mes:")
                          ]),
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
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Formato:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formatoChequesEstados,
                                expression: "formatoChequesEstados"
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
                                _vm.formatoChequesEstados = $event.target
                                  .multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "pdf" } }, [
                              _vm._v("PDF")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "xls" } }, [
                              _vm._v("Excel")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-imprimir",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteChequesEstados }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(428) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Año:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "periodo",
                              options: _vm.periodosBeneficiario
                            },
                            on: { input: _vm.obtenerMesesBeneficiario },
                            model: {
                              value: _vm.anioBeneficiario,
                              callback: function($$v) {
                                _vm.anioBeneficiario = $$v
                              },
                              expression: "anioBeneficiario"
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
                            _vm._v("Mes:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            style: "margin-left: .5rem!important;",
                            attrs: {
                              label: "mes_letras",
                              options: _vm.mesesBeneficiario
                            },
                            on: { input: _vm.cambiarFechasBeneficiario },
                            model: {
                              value: _vm.mesBeneficiario,
                              callback: function($$v) {
                                _vm.mesBeneficiario = $$v
                              },
                              expression: "mesBeneficiario"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Formato:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formatoBeneficiario,
                                expression: "formatoBeneficiario"
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
                                _vm.formatoBeneficiario = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "pdf" } }, [
                              _vm._v("PDF")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "xls" } }, [
                              _vm._v("Excel")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-imprimir",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteBeneficiario }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(429) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Año:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "periodo",
                              options: _vm.periodosChequesAnulados
                            },
                            on: { input: _vm.obtenerMesesChequesAnulados },
                            model: {
                              value: _vm.anioChequeAnulado,
                              callback: function($$v) {
                                _vm.anioChequeAnulado = $$v
                              },
                              expression: "anioChequeAnulado"
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
                            _vm._v("Mes:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            style: "margin-left: .5rem!important;",
                            attrs: {
                              label: "mes_letras",
                              options: _vm.mesesChequesAnulados
                            },
                            on: { input: _vm.cambiarFechasChequesAnulado },
                            model: {
                              value: _vm.mesChequeAnulado,
                              callback: function($$v) {
                                _vm.mesChequeAnulado = $$v
                              },
                              expression: "mesChequeAnulado"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Formato:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formatoChequeAnulado,
                                expression: "formatoChequeAnulado"
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
                                _vm.formatoChequeAnulado = $event.target
                                  .multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "pdf" } }, [
                              _vm._v("PDF")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "xls" } }, [
                              _vm._v("Excel")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-imprimir",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteChequesAnulados }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t")]
                      )
                    ])
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
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de retenciones")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte generales de cheques.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Estado de solicitudes de cheque.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de pago a beneficiarios.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte solicitudes de cheques anulados.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/locale/translations/es.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return new(function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=e,this.months=n,this.monthsAbbr=r,this.days=o,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,o;return n=t,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&e(n.prototype,r),o&&e(n,o),t}())("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])});


/***/ }),

/***/ "./resources/app/api/solicitud-vacaciones.js":
/*!***************************************************!*\
  !*** ./resources/app/api/solicitud-vacaciones.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('rrhh/solicitud-vacaciones/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSolicitud: function obtenerSolicitud(data, cb, errorCb) {
    axios.post('rrhh/solicitud-vacaciones/obtener-solicitud', data).then(function (response) {
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
    axios.post('rrhh/solicitud-vacaciones/nuevo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstadoSolicitud: function cambiarEstadoSolicitud(data, cb, errorCb) {
    axios.put('rrhh/solicitud-vacaciones/cambiarEstadoSolicitud', data).then(function (response) {
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
    axios.post('rrhh/solicitud-vacaciones/registrar', data).then(function (response) {
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
    axios.put('rrhh/solicitud-vacaciones/actualizar', data).then(function (response) {
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
    axios.put('rrhh/solicitud-vacaciones/desactivar', data).then(function (response) {
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
    axios.put('rrhh/solicitud-vacaciones/activar', data).then(function (response) {
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

/***/ "./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportesGeneralesCajaBanco_vue_vue_type_template_id_61ee84e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8& */ "./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8&");
/* harmony import */ var _ReportesGeneralesCajaBanco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportesGeneralesCajaBanco_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesGeneralesCajaBanco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGeneralesCajaBanco_vue_vue_type_template_id_61ee84e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportesGeneralesCajaBanco_vue_vue_type_template_id_61ee84e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/ReportesGeneralesCajaBanco.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_template_id_61ee84e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCajaBanco.vue?vue&type=template&id=61ee84e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_template_id_61ee84e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCajaBanco_vue_vue_type_template_id_61ee84e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);