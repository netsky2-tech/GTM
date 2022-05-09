(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contabilidad-reportes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_periodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/periodos */ "./resources/app/api/periodos.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      parametroEstadoResultado: {
        periodos_fiscales: [],
        periodos_fiscales1: [],
        periodos_meses: [],
        periodos_meses1: [],
        fecha_finalx: '',
        fecha_finalx1: '',
        periodo: "",
        mes: "",
        periodo1: "",
        mes1: "",
        formato: 'pdf'
      },
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "d MMMM yyyy",
      parametroLibroDiario: {
        nivel_cuenta: "",
        periodos_fiscales: [],
        periodos_meses: [],
        periodo: "",
        mes: "",
        formato: 'pdf'
      },
      parametroLibroMayor: {
        formato: 'pdf',
        periodos_fiscales: [],
        periodos_meses: [],
        periodo: "",
        mes: ""
      },
      parametroEstadoCambioPatrimonio: {
        formato: 'xls',
        periodos_fiscales: [],
        periodos_meses: [],
        periodo: "",
        mes: ""
      },
      parametroBalanzaAnual: {
        formato: 'xls',
        periodos_fiscales: [],
        periodos_meses: [],
        periodo: "",
        mes: "",
        niveles_cuenta: [],
        nivel_cuenta: ""
      },
      parametroNotas: {
        formato: 'xls',
        periodos_fiscales: [],
        periodos_meses: [],
        periodo: "",
        mes: ""
      },
      parametroAnexoFlujo: {
        formato: 'xls',
        periodos_fiscales: [],
        periodos_meses: [],
        periodo: "",
        mes: ""
      },
      parametroFlujoEfectivo: {
        formato: 'xls',
        periodos_fiscales: [],
        periodos_meses: [],
        periodo: "",
        mes: ""
      },
      parametroCentroCosto: {
        formato: 'xls',
        periodos_fiscales: [],
        centros: [],
        periodos_meses: [],
        periodo: "",
        centro: "",
        mes: ""
      },
      parametroRFC: {
        periodos_fiscales: [],
        periodos_fiscales1: [],
        periodos_meses: [],
        periodos_meses1: [],
        fecha_finalx: '',
        fecha_finalx1: '',
        periodo: "",
        mes: "",
        periodo1: "",
        mes1: "",
        formato: 'pdf'
      },
      reportes: [],
      cuentasContables: [],
      errorMessages: [],
      total: 0
    };
  },
  methods: {
    onDateSelect: function onDateSelect(date) {
      this.parametroLibroDiario.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      this.parametroLibroDiario.fecha_final = moment(date).format("YYYY-MM-DD"); //
    },
    descargarReporteLibroMayor: function descargarReporteLibroMayor() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/libro-mayor/reporte', {
        periodo: self.parametroLibroMayor.periodo,
        mes: self.parametroLibroMayor.mes,
        extension: self.parametroLibroMayor.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref) {
        var data = _ref.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroLibroMayor.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'LibroMayor.' + self.parametroLibroMayor.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteLibroDiario: function descargarReporteLibroDiario() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/libro-diario/reporte', {
        periodo: self.parametroLibroDiario.periodo,
        mes: self.parametroLibroDiario.mes,
        extension: self.parametroLibroDiario.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref2) {
        var data = _ref2.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroLibroDiario.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'LibroDiario.' + self.parametroLibroDiario.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteEstadoResultado: function descargarReporteEstadoResultado() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/estado-resultado/reporte', {
        id_periodox: self.parametroEstadoResultado.periodo.id_periodo_fiscal,
        mesx: self.parametroEstadoResultado.mes.mes,
        id_mesx: self.parametroEstadoResultado.mes.id_periodo_mes,
        id_periodox1: self.parametroEstadoResultado.periodo1.id_periodo_fiscal,
        mesx1: self.parametroEstadoResultado.mes1.mes,
        id_mesx1: self.parametroEstadoResultado.mes1.id_periodo_mes,
        id_nivel_cuenta: 3,
        extension: self.parametroEstadoResultado.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref3) {
        var data = _ref3.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.parametroEstadoResultado.formato === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'EstadoResultado.' + self.parametroEstadoResultado.formato;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteCambioPatrimonio: function descargarReporteCambioPatrimonio() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/cambio-patrimonio/reporte', {
        periodo: self.parametroEstadoCambioPatrimonio.periodo,
        mes: self.parametroEstadoCambioPatrimonio.mes,
        extension: self.parametroEstadoCambioPatrimonio.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref4) {
        var data = _ref4.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroEstadoCambioPatrimonio.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'EstadoCambioPatrimonio.' + self.parametroEstadoCambioPatrimonio.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteBalanzaComprobacionAnual: function descargarReporteBalanzaComprobacionAnual() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/balanza-anual/reporte', {
        periodo: self.parametroBalanzaAnual.periodo,
        id_nivel_cuenta: self.parametroBalanzaAnual.nivel_cuenta.id_nivel_cuenta,
        mes: self.parametroBalanzaAnual.mes,
        extension: self.parametroBalanzaAnual.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref5) {
        var data = _ref5.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroBalanzaAnual.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'BalanzaComprobacion.' + self.parametroBalanzaAnual.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteNotas: function descargarReporteNotas() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/notas/reporte', {
        periodo: self.parametroNotas.periodo,
        mes: self.parametroNotas.mes,
        extension: self.parametroNotas.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref6) {
        var data = _ref6.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroNotas.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteNotas.' + self.parametroNotas.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteAFE: function descargarReporteAFE() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/anexo-flujo/reporte', {
        periodo: self.parametroAnexoFlujo.periodo,
        mes: self.parametroAnexoFlujo.mes,
        extension: self.parametroAnexoFlujo.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref7) {
        var data = _ref7.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroAnexoFlujo.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteAnexoFlujo.' + self.parametroAnexoFlujo.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteFE: function descargarReporteFE() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/flujo-efectivo/reporte', {
        periodo: self.parametroFlujoEfectivo.periodo,
        mes: self.parametroFlujoEfectivo.mes,
        extension: self.parametroFlujoEfectivo.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref8) {
        var data = _ref8.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroFlujoEfectivo.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteFlujoEfectivo.' + self.parametroFlujoEfectivo.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteMCC: function descargarReporteMCC() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/centro-costos/reporte', {
        periodo: self.parametroCentroCosto.periodo,
        centro: self.parametroCentroCosto.centro,
        mes: self.parametroCentroCosto.mes,
        extension: self.parametroCentroCosto.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref9) {
        var data = _ref9.data;
        console.log(data);

        if (data.status === 'error') {
          console.log(data);
        } else {
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametroCentroCosto.formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteMovimientosCentroCosto.' + self.parametroCentroCosto.formato;
          link.click();
        }

        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteRFC: function descargarReporteRFC() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/razones-financieras-comparativo/reporte', {
        id_periodox: self.parametroRFC.periodo.id_periodo_fiscal,
        mesx: self.parametroRFC.mes.mes,
        id_mesx: self.parametroRFC.mes.id_periodo_mes,
        id_periodox1: self.parametroRFC.periodo1.id_periodo_fiscal,
        mesx1: self.parametroRFC.mes1.mes,
        id_mesx1: self.parametroRFC.mes1.id_periodo_mes,
        extension: self.parametroRFC.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref10) {
        var data = _ref10.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.parametroRFC.formato === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'RazonesFinancieras.' + self.parametroRFC.formato;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    obtenerMesesPeriodo: function obtenerMesesPeriodo() {
      var self = this;
      self.parametroEstadoResultado.mes = null;
      if (self.parametroEstadoResultado.periodos_fiscales.meses_periodo) self.parametroEstadoResultado.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodo1: function obtenerMesesPeriodo1() {
      var self = this;
      self.parametroEstadoResultado.mes1 = null;
      self.parametroEstadoResultado.periodos_meses1 = null;

      if (self.parametroEstadoResultado.periodos_fiscales1.meses_periodo) {
        self.parametroEstadoResultado.periodos_meses1 = self.parametroEstadoResultado.periodos_fiscales1.meses_periodo;
      }
    },
    obtenerMesesPeriodoLD: function obtenerMesesPeriodoLD() {
      var self = this;
      self.parametroLibroDiario.mes = null;
      if (self.parametroLibroDiario.periodos_fiscales.meses_periodo) self.parametroLibroDiario.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoLM: function obtenerMesesPeriodoLM() {
      var self = this;
      self.parametroLibroMayor.mes = null;
      if (self.parametroLibroMayor.periodos_fiscales.meses_periodo) self.parametroLibroMayor.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoECP: function obtenerMesesPeriodoECP() {
      var self = this;
      self.parametroEstadoCambioPatrimonio.mes = null;
      if (self.parametroEstadoCambioPatrimonio.periodos_fiscales.meses_periodo) self.parametroEstadoCambioPatrimonio.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoBCA: function obtenerMesesPeriodoBCA() {
      var self = this;
      self.parametroBalanzaAnual.mes = null;
      if (self.parametroBalanzaAnual.periodos_fiscales.meses_periodo) self.parametroBalanzaAnual.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoNEEFF: function obtenerMesesPeriodoNEEFF() {
      var self = this;
      self.parametroNotas.mes = null;
      if (self.parametroNotas.periodos_fiscales.meses_periodo) self.parametroNotas.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoAFE: function obtenerMesesPeriodoAFE() {
      var self = this;
      self.parametroAnexoFlujo.mes = null;
      if (self.parametroAnexoFlujo.periodos_fiscales.meses_periodo) self.parametroAnexoFlujo.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoFE: function obtenerMesesPeriodoFE() {
      var self = this;
      self.parametroFlujoEfectivo.mes = null;
      if (self.parametroFlujoEfectivo.periodos_fiscales.meses_periodo) self.parametroFlujoEfectivo.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoMCC: function obtenerMesesPeriodoMCC() {
      var self = this;
      self.parametroCentroCosto.mes = null;
      if (self.parametroCentroCosto.periodos_fiscales.meses_periodo) self.parametroCentroCosto.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodoRFC: function obtenerMesesPeriodoRFC() {
      var self = this;
      self.parametroRFC.mes1 = null;
      self.parametroRFC.periodos_meses1 = null;

      if (self.parametroRFC.periodos_fiscales1.meses_periodo) {
        self.parametroRFC.periodos_meses1 = self.parametroRFC.periodos_fiscales1.meses_periodo;
      }
    },
    obtenerDiasMes: function obtenerDiasMes() {
      var self = this;
      self.parametroEstadoResultado.fecha_finalx = moment(new Date(self.parametroEstadoResultado.periodo.periodo, self.parametroEstadoResultado.mes.mes - 1, self.daysInMonth(self.parametroEstadoResultado.mes.mes, self.parametroEstadoResultado.periodo.periodo))).format("DD/MM/YYYY");
    },
    obtenerDiasMes1: function obtenerDiasMes1() {
      var self = this;
      self.parametroEstadoResultado.fecha_finalx1 = moment(new Date(self.parametroEstadoResultado.periodo1.periodo, self.parametroEstadoResultado.mes1.mes - 1, self.daysInMonth(self.parametroEstadoResultado.mes1.mes, self.parametroEstadoResultado.periodo1.periodo))).format("DD/MM/YYYY");
    },
    obtenerDiasMesLD: function obtenerDiasMesLD() {
      var self = this;
      self.parametroLibroDiario.fecha_finalx = moment(new Date(self.parametroLibroDiario.periodo.periodo, self.parametroLibroDiario.mes.mes - 1, self.daysInMonth(self.parametroLibroDiario.mes.mes, self.parametroLibroDiario.periodo.periodo))).format("DD/MM/YYYY");
    },
    obtenerDiasMesLM: function obtenerDiasMesLM() {
      var self = this;
      self.parametroLibroMayor.fecha_finalx = moment(new Date(self.parametroLibroMayor.periodo.periodo, self.parametroLibroMayor.mes.mes - 1, self.daysInMonth(self.parametroLibroMayor.mes.mes, self.parametroLibroMayor.periodo.periodo))).format("DD/MM/YYYY");
    },
    obtenerDiasMesECP: function obtenerDiasMesECP() {
      var self = this;
      self.parametroEstadoCambioPatrimonio.fecha_finalx = moment(new Date(self.parametroEstadoCambioPatrimonio.periodo.periodo, self.parametroEstadoCambioPatrimonio.mes.mes - 1, self.daysInMonth(self.parametroEstadoCambioPatrimonio.mes.mes, self.parametroEstadoCambioPatrimonio.periodo.periodo))).format("DD/MM/YYYY");
    },
    daysInMonth: function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    obtenerTodosPeriodos: function obtenerTodosPeriodos() {
      var self = this;
      _api_periodos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTodos(function (data) {
        if (data.lista_reportes.length > 0) {
          data.lista_reportes.forEach(function (reportex, key) {
            self.reportes.push(reportex.id_menu);
          });
        } //self.reportes=data.lista_reportes;


        self.parametroEstadoResultado.periodos_fiscales = data.periodos;
        self.parametroEstadoResultado.periodo = data.periodos[0];
        self.parametroEstadoResultado.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroEstadoResultado.mes = data.periodos[0].meses_periodo[0];
        self.parametroEstadoResultado.periodos_fiscales1 = data.periodos;
        self.parametroEstadoResultado.periodo1 = data.periodos[0];
        self.parametroEstadoResultado.periodos_meses1 = data.periodos[0].meses_periodo;
        self.parametroEstadoResultado.mes1 = data.periodos[0].meses_periodo[0];
        self.parametroLibroDiario.periodos_fiscales = data.periodos;
        self.parametroLibroDiario.periodo = data.periodos[0];
        self.parametroLibroDiario.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroLibroDiario.mes = data.periodos[0].meses_periodo[0];
        self.parametroLibroMayor.periodos_fiscales = data.periodos;
        self.parametroLibroMayor.periodo = data.periodos[0];
        self.parametroLibroMayor.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroLibroMayor.mes = data.periodos[0].meses_periodo[0];
        self.parametroEstadoResultado.periodos_fiscales = data.periodos;
        self.parametroEstadoResultado.periodo = data.periodos[0];
        self.parametroEstadoResultado.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroEstadoResultado.mes = data.periodos[0].meses_periodo[0];
        self.parametroEstadoCambioPatrimonio.periodos_fiscales = data.periodos;
        self.parametroEstadoCambioPatrimonio.periodo = data.periodos[0];
        self.parametroEstadoCambioPatrimonio.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroEstadoCambioPatrimonio.mes = data.periodos[0].meses_periodo[0];
        self.parametroBalanzaAnual.periodos_fiscales = data.periodos;
        self.parametroBalanzaAnual.periodo = data.periodos[0];
        self.parametroBalanzaAnual.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroBalanzaAnual.mes = data.periodos[0].meses_periodo[0];
        self.parametroBalanzaAnual.niveles_cuenta = data.niveles_cuenta;
        self.parametroBalanzaAnual.nivel_cuenta = self.parametroBalanzaAnual.niveles_cuenta[2];
        self.parametroNotas.periodos_fiscales = data.periodos;
        self.parametroNotas.periodo = data.periodos[0];
        self.parametroNotas.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroNotas.mes = data.periodos[0].meses_periodo[0];
        self.parametroAnexoFlujo.periodos_fiscales = data.periodos;
        self.parametroAnexoFlujo.periodo = data.periodos[0];
        self.parametroAnexoFlujo.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroAnexoFlujo.mes = data.periodos[0].meses_periodo[0];
        self.parametroFlujoEfectivo.periodos_fiscales = data.periodos;
        self.parametroFlujoEfectivo.periodo = data.periodos[0];
        self.parametroFlujoEfectivo.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroFlujoEfectivo.mes = data.periodos[0].meses_periodo[0];
        self.parametroCentroCosto.periodos_fiscales = data.periodos;
        self.parametroCentroCosto.periodo = data.periodos[0];
        self.parametroCentroCosto.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroCentroCosto.mes = data.periodos[0].meses_periodo[0];
        self.parametroCentroCosto.centros = data.centros;
        self.parametroCentroCosto.centro = data.centros[0];
        self.parametroRFC.periodos_fiscales = data.periodos;
        self.parametroRFC.periodo = data.periodos[0];
        self.parametroRFC.periodos_meses = data.periodos[0].meses_periodo;
        self.parametroRFC.mes = data.periodos[0].meses_periodo[0];
        self.parametroRFC.periodos_fiscales1 = data.periodos;
        self.parametroRFC.periodo1 = data.periodos[0];
        self.parametroRFC.periodos_meses1 = data.periodos[0].meses_periodo;
        self.parametroRFC.mes1 = data.periodos[0].meses_periodo[0];
        self.parametroEstadoResultado.fecha_finalx = moment(new Date(self.parametroEstadoResultado.periodo.periodo, self.parametroEstadoResultado.mes.mes - 1, self.daysInMonth(self.parametroEstadoResultado.mes.mes, self.parametroEstadoResultado.periodo.periodo))).format("DD/MM/YYYY");
        self.parametroEstadoResultado.fecha_finalx1 = moment(new Date(self.parametroEstadoResultado.periodo1.periodo, self.parametroEstadoResultado.mes1.mes - 1, self.daysInMonth(self.parametroEstadoResultado.mes1.mes, self.parametroEstadoResultado.periodo1.periodo))).format("DD/MM/YYYY");
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerTodosPeriodos();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-imprimir {\n\tmargin-top: 33px;\n}\n.check-label2 {\n\tmargin-top: 40px;\n}\n.btn-generar\n {\n\t margin-top: 33px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "simple-welcome-text" }, [
        _c("div", { staticClass: "text" }, [_vm._v("Reportes Contabilidad")]),
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
            _vm._v("> Reportes")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.reportes.indexOf(430) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo Actual:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroEstadoResultado.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodo()
                              }
                            },
                            model: {
                              value: _vm.parametroEstadoResultado.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroEstadoResultado,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression: "parametroEstadoResultado.periodo"
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
                            _vm._v("Mes Actual:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroEstadoResultado.periodos_meses,
                              label: "descripcion"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerDiasMes()
                              }
                            },
                            model: {
                              value: _vm.parametroEstadoResultado.mes,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroEstadoResultado,
                                  "mes",
                                  $$v
                                )
                              },
                              expression: "parametroEstadoResultado.mes"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo Anterior:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroEstadoResultado.periodos_fiscales1,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodo1()
                              }
                            },
                            model: {
                              value: _vm.parametroEstadoResultado.periodo1,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroEstadoResultado,
                                  "periodo1",
                                  $$v
                                )
                              },
                              expression: "parametroEstadoResultado.periodo1"
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
                            _vm._v("Mes Anterior:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroEstadoResultado.periodos_meses1,
                              label: "descripcion"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerDiasMes1()
                              }
                            },
                            model: {
                              value: _vm.parametroEstadoResultado.mes1,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroEstadoResultado,
                                  "mes1",
                                  $$v
                                )
                              },
                              expression: "parametroEstadoResultado.mes1"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
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
                                value: _vm.parametroEstadoResultado.formato,
                                expression: "parametroEstadoResultado.formato"
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
                                  _vm.parametroEstadoResultado,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteEstadoResultado }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(431) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroLibroDiario.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoLD()
                              }
                            },
                            model: {
                              value: _vm.parametroLibroDiario.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroLibroDiario,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression: "parametroLibroDiario.periodo"
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
                            attrs: {
                              options: _vm.parametroLibroDiario.periodos_meses,
                              label: "descripcion"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerDiasMesLD()
                              }
                            },
                            model: {
                              value: _vm.parametroLibroDiario.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroLibroDiario, "mes", $$v)
                              },
                              expression: "parametroLibroDiario.mes"
                            }
                          })
                        ],
                        1
                      )
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
                                value: _vm.parametroLibroDiario.formato,
                                expression: "parametroLibroDiario.formato"
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
                                  _vm.parametroLibroDiario,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteLibroDiario }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(432) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroLibroMayor.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoLM()
                              }
                            },
                            model: {
                              value: _vm.parametroLibroMayor.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroLibroMayor,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression: "parametroLibroMayor.periodo"
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
                            attrs: {
                              options: _vm.parametroLibroMayor.periodos_meses,
                              label: "descripcion"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerDiasMesLM()
                              }
                            },
                            model: {
                              value: _vm.parametroLibroMayor.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroLibroMayor, "mes", $$v)
                              },
                              expression: "parametroLibroMayor.mes"
                            }
                          })
                        ],
                        1
                      )
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
                                value: _vm.parametroLibroMayor.formato,
                                expression: "parametroLibroMayor.formato"
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
                                  _vm.parametroLibroMayor,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteLibroMayor }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(433) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroEstadoCambioPatrimonio
                                  .periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoECP()
                              }
                            },
                            model: {
                              value:
                                _vm.parametroEstadoCambioPatrimonio.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroEstadoCambioPatrimonio,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression:
                                "parametroEstadoCambioPatrimonio.periodo"
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
                            attrs: {
                              options:
                                _vm.parametroEstadoCambioPatrimonio
                                  .periodos_meses,
                              label: "descripcion"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerDiasMesECP()
                              }
                            },
                            model: {
                              value: _vm.parametroEstadoCambioPatrimonio.mes,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroEstadoCambioPatrimonio,
                                  "mes",
                                  $$v
                                )
                              },
                              expression: "parametroEstadoCambioPatrimonio.mes"
                            }
                          })
                        ],
                        1
                      )
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
                                value:
                                  _vm.parametroEstadoCambioPatrimonio.formato,
                                expression:
                                  "parametroEstadoCambioPatrimonio.formato"
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
                                  _vm.parametroEstadoCambioPatrimonio,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteCambioPatrimonio }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(434) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Nivel de cuenta")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "descripcion",
                              options: _vm.parametroBalanzaAnual.niveles_cuenta
                            },
                            model: {
                              value: _vm.parametroBalanzaAnual.nivel_cuenta,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroBalanzaAnual,
                                  "nivel_cuenta",
                                  $$v
                                )
                              },
                              expression: "parametroBalanzaAnual.nivel_cuenta"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.nivel_cuenta, function(
                              message
                            ) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroBalanzaAnual.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoBCA()
                              }
                            },
                            model: {
                              value: _vm.parametroBalanzaAnual.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroBalanzaAnual,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression: "parametroBalanzaAnual.periodo"
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
                            attrs: {
                              options: _vm.parametroBalanzaAnual.periodos_meses,
                              label: "descripcion"
                            },
                            model: {
                              value: _vm.parametroBalanzaAnual.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroBalanzaAnual, "mes", $$v)
                              },
                              expression: "parametroBalanzaAnual.mes"
                            }
                          })
                        ],
                        1
                      )
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
                                value: _vm.parametroBalanzaAnual.formato,
                                expression: "parametroBalanzaAnual.formato"
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
                                  _vm.parametroBalanzaAnual,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: {
                            click: _vm.descargarReporteBalanzaComprobacionAnual
                          }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(435) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.parametroNotas.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoNEEFF()
                              }
                            },
                            model: {
                              value: _vm.parametroNotas.periodo,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroNotas, "periodo", $$v)
                              },
                              expression: "parametroNotas.periodo"
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
                            attrs: {
                              options: _vm.parametroNotas.periodos_meses,
                              label: "descripcion"
                            },
                            model: {
                              value: _vm.parametroNotas.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroNotas, "mes", $$v)
                              },
                              expression: "parametroNotas.mes"
                            }
                          })
                        ],
                        1
                      )
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
                                value: _vm.parametroNotas.formato,
                                expression: "parametroNotas.formato"
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
                                  _vm.parametroNotas,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteNotas }
                        },
                        [_vm._v("Imprimir\n                            ")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(436) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroAnexoFlujo.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoAFE()
                              }
                            },
                            model: {
                              value: _vm.parametroAnexoFlujo.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroAnexoFlujo,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression: "parametroAnexoFlujo.periodo"
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
                            attrs: {
                              options: _vm.parametroAnexoFlujo.periodos_meses,
                              label: "descripcion"
                            },
                            model: {
                              value: _vm.parametroAnexoFlujo.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroAnexoFlujo, "mes", $$v)
                              },
                              expression: "parametroAnexoFlujo.mes"
                            }
                          })
                        ],
                        1
                      )
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
                                value: _vm.parametroAnexoFlujo.formato,
                                expression: "parametroAnexoFlujo.formato"
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
                                  _vm.parametroAnexoFlujo,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteAFE }
                        },
                        [_vm._v("Imprimir\n                            ")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(437) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroFlujoEfectivo.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoFE()
                              }
                            },
                            model: {
                              value: _vm.parametroFlujoEfectivo.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroFlujoEfectivo,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression: "parametroFlujoEfectivo.periodo"
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
                            attrs: {
                              options:
                                _vm.parametroFlujoEfectivo.periodos_meses,
                              label: "descripcion"
                            },
                            model: {
                              value: _vm.parametroFlujoEfectivo.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroFlujoEfectivo, "mes", $$v)
                              },
                              expression: "parametroFlujoEfectivo.mes"
                            }
                          })
                        ],
                        1
                      )
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
                                value: _vm.parametroFlujoEfectivo.formato,
                                expression: "parametroFlujoEfectivo.formato"
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
                                  _vm.parametroFlujoEfectivo,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteFE }
                        },
                        [_vm._v("Imprimir\n                            ")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(438) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(8),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options:
                                _vm.parametroCentroCosto.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoMCC()
                              }
                            },
                            model: {
                              value: _vm.parametroCentroCosto.periodo,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.parametroCentroCosto,
                                  "periodo",
                                  $$v
                                )
                              },
                              expression: "parametroCentroCosto.periodo"
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
                            attrs: {
                              options: _vm.parametroCentroCosto.periodos_meses,
                              label: "descripcion"
                            },
                            model: {
                              value: _vm.parametroCentroCosto.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroCentroCosto, "mes", $$v)
                              },
                              expression: "parametroCentroCosto.mes"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(" Centros")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametroCentroCosto.centro,
                                expression: "parametroCentroCosto.centro"
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
                                  _vm.parametroCentroCosto,
                                  "centro",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { key: 0, domProps: { value: 0 } }, [
                              _vm._v(_vm._s("Todos los centros") + " ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.parametroCentroCosto.centros, function(
                              centrox
                            ) {
                              return _c(
                                "option",
                                {
                                  key: _vm.parametroCentroCosto.id_centro,
                                  domProps: {
                                    value: _vm.parametroCentroCosto.id_centro
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(centrox.descripcion) +
                                      "\n\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.id_centro, function(
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
                                value: _vm.parametroCentroCosto.formato,
                                expression: "parametroCentroCosto.formato"
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
                                  _vm.parametroCentroCosto,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteMCC }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.reportes.indexOf(439) >= 0
        ? [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo Actual:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.parametroRFC.periodos_fiscales,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoRFC()
                              }
                            },
                            model: {
                              value: _vm.parametroRFC.periodo,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroRFC, "periodo", $$v)
                              },
                              expression: "parametroRFC.periodo"
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
                            _vm._v("Mes Actual:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.parametroRFC.periodos_meses,
                              label: "descripcion"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerDiasMesRFC()
                              }
                            },
                            model: {
                              value: _vm.parametroRFC.mes,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroRFC, "mes", $$v)
                              },
                              expression: "parametroRFC.mes"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo Anterior:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.parametroRFC.periodos_fiscales1,
                              label: "periodo"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerMesesPeriodoRFC()
                              }
                            },
                            model: {
                              value: _vm.parametroRFC.periodo1,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroRFC, "periodo1", $$v)
                              },
                              expression: "parametroRFC.periodo1"
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
                            _vm._v("Mes Anterior:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.parametroRFC.periodos_meses1,
                              label: "descripcion"
                            },
                            on: {
                              input: function($event) {
                                return _vm.obtenerDiasMesRFC()
                              }
                            },
                            model: {
                              value: _vm.parametroRFC.mes1,
                              callback: function($$v) {
                                _vm.$set(_vm.parametroRFC, "mes1", $$v)
                              },
                              expression: "parametroRFC.mes1"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
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
                                value: _vm.parametroRFC.formato,
                                expression: "parametroRFC.formato"
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
                                  _vm.parametroRFC,
                                  "formato",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
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
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-generar",
                          attrs: { type: "button" },
                          on: { click: _vm.descargarReporteRFC }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Estado de Resultado Comparativo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Libro Diario")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Libro Mayor")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Estado Cambio Patrimonio")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Balanza Comprobación Anual")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Reporte de Notas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de Anexo Flujo Efectivo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de Flujo Efectivo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de Centro de Costo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Comparativo de Razones Financieras")
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

/***/ "./resources/app/api/periodos.js":
/*!***************************************!*\
  !*** ./resources/app/api/periodos.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('contabilidad/periodos/obtener-todos').then(function (response) {
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
    axios.post('contabilidad/periodos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPeriodo: function obtenerPeriodo(data, cb, errorCb) {
    axios.post('contabilidad/periodos/obtener-periodo', data).then(function (response) {
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
    axios.post('contabilidad/periodos/registrar', data).then(function (response) {
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
    axios.put('contabilidad/periodos/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cerrar: function cerrar(data, cb, errorCb) {
    axios.put('contabilidad/periodos/cerrar-mes', data).then(function (response) {
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

/***/ "./resources/app/components/reportes/ReportesGeneralesContabilidad.vue":
/*!*****************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesContabilidad.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportesGeneralesContabilidad_vue_vue_type_template_id_781f8a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e& */ "./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e&");
/* harmony import */ var _ReportesGeneralesContabilidad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGeneralesContabilidad.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportesGeneralesContabilidad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesGeneralesContabilidad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGeneralesContabilidad_vue_vue_type_template_id_781f8a3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportesGeneralesContabilidad_vue_vue_type_template_id_781f8a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/ReportesGeneralesContabilidad.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesContabilidad.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e&":
/*!************************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_template_id_781f8a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesContabilidad.vue?vue&type=template&id=781f8a3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_template_id_781f8a3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesContabilidad_vue_vue_type_template_id_781f8a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);