(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cuentas-cobrar-reportes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/menu */ "./resources/app/api/menu.js");
/* harmony import */ var _api_zonas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/zonas */ "./resources/app/api/zonas.js");
/* harmony import */ var _api_periodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/periodos */ "./resources/app/api/periodos.js");
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      clientesBusquedaURL: "/ventas/clientes/buscar",
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      errorMessages: [],
      reportes: [],
      //Reporte antiguedad saldos clientes
      fechaCorteAntiguedad: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteAntiguedadX: new Date(),
      formatoAntiguedad: 'pdf',
      zona: '',
      zonas: [],
      //Reporte estado cuenta detallado
      fechaCorteEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaDetalladoX: new Date(),
      fechaInicialEstadoCuentaDetalladoX: new Date(),
      formatoEstadoCuentaDetallado: 'pdf',
      cliente_estadocuentadetallado: {},
      id_cliente_estadocuentadetallado: '',
      //Reporte estado cuenta consolidado
      fechaCorteEstadoCuentaConsolidado: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaConsolidadoX: new Date(),
      formatoEstadoCuentaConsolidado: 'pdf',
      //Reporte estado cuenta detallado
      fechaCorteEstadoCuentaDetalladoEmpleado: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialEstadoCuentaDetalladoEmpleado: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaDetalladoEmpleadoX: new Date(),
      fechaInicialEstadoCuentaDetalladoEmpleadoX: new Date(),
      formatoEstadoCuentaDetalladoEmpleado: 'pdf',
      empleado_estadocuentadetalladoEmpleado: {},
      id_empleado_estadocuentadetalladoEmpleado: '',
      //Reporte estado cuenta consolidado Empleado
      fechaCorteEstadoCuentaConsolidadoEmpleado: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaConsolidadoEmpleadoX: new Date(),
      formatoEstadoCuentaConsolidadoEmpleado: 'pdf',
      //Reporte estado cuenta detallado OCC
      fechaCorteEstadoCuentaDetalladoOCC: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialEstadoCuentaDetalladoOCC: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaDetalladoOCCX: new Date(),
      fechaInicialEstadoCuentaDetalladoOCCX: new Date(),
      formatoEstadoCuentaDetalladoOCC: 'pdf',
      cliente_estadocuentadetalladoOCC: {},
      id_cliente_estadocuentadetalladoOCC: '',
      //Reporte estado cuenta consolidado
      fechaCorteEstadoCuentaConsolidadoOCC: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaConsolidadoOCCX: new Date(),
      formatoEstadoCuentaConsolidadoOCC: 'pdf',
      //Reporte de recibos
      fechaInicialRecibos: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalRecibos: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialRecibosX: new Date(),
      fechaFinalRecibosX: new Date(),
      formatoRecibos: 'pdf'
    };
  },
  methods: {
    seleccionarFechaCorteAntiguedad: function seleccionarFechaCorteAntiguedad(date) {
      this.fechaCorteAntiguedad = moment(date).format("YYYY-MM-DD"); //
    },
    descargarReporteAntiguedad: function descargarReporteAntiguedad() {
      var self = this;
      self.loading = true;
      axios.post('cuentas-cobrar/reportes/antiguedad', {
        fechaCorte: this.fechaCorteAntiguedad,
        extension: this.formatoAntiguedad,
        id_zona: this.zona
      }, {
        responseType: 'blob'
      }).then(function (_ref) {
        var data = _ref.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.formatoAntiguedad === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'ReporteAntiguedad.' + self.formatoAntiguedad;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    //
    seleccionarFechaCorteEstadoCuentaDetallado: function seleccionarFechaCorteEstadoCuentaDetallado(date) {
      this.fechaCorteEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarFechaInicialEstadoCuentaDetallado: function seleccionarFechaInicialEstadoCuentaDetallado(date) {
      this.fechaInicialEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarClienteEstadoCuentaDetallado: function seleccionarClienteEstadoCuentaDetallado(e) {
      var clienteP = e.target.value;
      var self = this;
      self.cliente_estadocuentadetallado = clienteP;
      self.id_cliente_estadocuentadetallado = self.cliente_estadocuentadetallado.id_cliente;
    },
    descargarReporteEstadoCuentaDetallado: function descargarReporteEstadoCuentaDetallado() {
      var self = this;

      if (self.id_cliente_estadocuentadetallado) {
        self.loading = true;
        axios.post('cuentas-cobrar/reportes/estado-cuenta-detallado', {
          fechaInicial: self.fechaInicialEstadoCuentaDetallado,
          fechaCorte: self.fechaCorteEstadoCuentaDetallado,
          extension: self.formatoEstadoCuentaDetallado,
          id_cliente: self.id_cliente_estadocuentadetallado
        }, {
          responseType: 'blob'
        }).then(function (_ref2) {
          var data = _ref2.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoEstadoCuentaDetallado === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : self.formatoEstadoCuentaDetallado === 'pdf' ? blob = new Blob([data], {
            type: 'application/pdf'
          }) : blob = new Blob([data], {
            type: 'text/html'
          });
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'EstadoCuentaClienteDetalle.' + self.formatoEstadoCuentaDetallado;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          console.log(error);
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("No ha seleccionado un cliente válido.....", 5);
      }
    },
    seleccionarFechaCorteEstadoCuentaConsolidado: function seleccionarFechaCorteEstadoCuentaConsolidado(date) {
      this.fechaCorteEstadoCuentaConsolidado = moment(date).format("YYYY-MM-DD"); //
    },
    descargarReporteEstadoCuentaConsolidado: function descargarReporteEstadoCuentaConsolidado() {
      var self = this;
      self.loading = true;
      axios.post('cuentas-cobrar/reportes/estado-cuenta-consolidado', {
        fechaCorte: this.fechaCorteEstadoCuentaConsolidado,
        extension: this.formatoEstadoCuentaConsolidado
      }, {
        responseType: 'blob'
      }).then(function (_ref3) {
        var data = _ref3.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.formatoEstadoCuentaConsolidado === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'EstadoCuentaConsolidado.' + self.formatoEstadoCuentaConsolidado;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    seleccionarFechaCorteEstadoCuentaDetalladoEmpleado: function seleccionarFechaCorteEstadoCuentaDetalladoEmpleado(date) {
      this.fechaCorteEstadoCuentaDetalladoEmpleado = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarFechaInicialEstadoCuentaDetalladoEmpleado: function seleccionarFechaInicialEstadoCuentaDetalladoEmpleado(date) {
      this.fechaInicialEstadoCuentaDetalladoEmpleado = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarEmpleadoEstadoCuentaDetallado: function seleccionarEmpleadoEstadoCuentaDetallado(e) {
      var empleadoP = e.target.value;
      var self = this;
      self.empleado_estadocuentadetalladoEmpleado = empleadoP;
      self.id_empleado_estadocuentadetalladoEmpleado = self.empleado_estadocuentadetalladoEmpleado.id_trabajador;
    },
    descargarReporteEstadoCuentaDetalladoEmpleado: function descargarReporteEstadoCuentaDetalladoEmpleado() {
      var self = this;

      if (self.id_empleado_estadocuentadetalladoEmpleado) {
        self.loading = true;
        axios.post('cuentas-cobrar/reportes/estado-cuenta-detallado-trabajador', {
          fechaInicial: self.fechaInicialEstadoCuentaDetalladoEmpleado,
          fechaCorte: self.fechaCorteEstadoCuentaDetalladoEmpleado,
          extension: self.formatoEstadoCuentaDetalladoEmpleado,
          id_trabajador: self.id_empleado_estadocuentadetalladoEmpleado
        }, {
          responseType: 'blob'
        }).then(function (_ref4) {
          var data = _ref4.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoEstadoCuentaDetalladoEmpleado === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : self.formatoEstadoCuentaDetalladoEmpleado === 'pdf' ? blob = new Blob([data], {
            type: 'application/pdf'
          }) : blob = new Blob([data], {
            type: 'text/html'
          });
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'EstadoCuentaDetalladoEmpleado.' + self.formatoEstadoCuentaDetalladoEmpleado;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          console.log(error);
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("No ha seleccionado un trabajador válido.....", 5);
      }
    },
    seleccionarFechaCorteEstadoCuentaConsolidadoEmpleado: function seleccionarFechaCorteEstadoCuentaConsolidadoEmpleado(date) {
      this.fechaCorteEstadoCuentaConsolidadoEmpleado = moment(date).format("YYYY-MM-DD"); //
    },
    descargarReporteEstadoCuentaConsolidadoEmpleado: function descargarReporteEstadoCuentaConsolidadoEmpleado() {
      var self = this;
      self.loading = true;
      axios.post('cuentas-cobrar/reportes/estado-cuenta-consolidado-trabajador', {
        fechaCorte: this.fechaCorteEstadoCuentaConsolidadoEmpleado,
        extension: this.formatoEstadoCuentaConsolidadoEmpleado
      }, {
        responseType: 'blob'
      }).then(function (_ref5) {
        var data = _ref5.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.formatoEstadoCuentaConsolidadoEmpleado === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'EstadoCuentaConsolidadoEmpleado.' + self.formatoEstadoCuentaConsolidadoEmpleado;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    seleccionarFechaCorteEstadoCuentaDetalladoOCC: function seleccionarFechaCorteEstadoCuentaDetalladoOCC(date) {
      this.fechaCorteEstadoCuentaDetalladoOCC = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarFechaInicialEstadoCuentaDetalladoOCC: function seleccionarFechaInicialEstadoCuentaDetalladoOCC(date) {
      this.fechaInicialEstadoCuentaDetalladoOCC = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarClienteEstadoCuentaDetalladoOCC: function seleccionarClienteEstadoCuentaDetalladoOCC(e) {
      var clienteP = e.target.value;
      var self = this;
      self.cliente_estadocuentadetalladoOCC = clienteP;
      self.id_cliente_estadocuentadetalladoOCC = self.cliente_estadocuentadetalladoOCC.id_cliente;
    },
    descargarReporteEstadoCuentaDetalladoOCC: function descargarReporteEstadoCuentaDetalladoOCC() {
      var self = this;

      if (self.id_cliente_estadocuentadetalladoOCC) {
        self.loading = true;
        axios.post('cuentas-cobrar/reportes/estado-cuenta-detallado-occ', {
          fechaInicial: self.fechaInicialEstadoCuentaDetalladoOCC,
          fechaCorte: self.fechaCorteEstadoCuentaDetalladoOCC,
          extension: self.formatoEstadoCuentaDetalladoOCC,
          id_cliente: self.id_cliente_estadocuentadetalladoOCC
        }, {
          responseType: 'blob'
        }).then(function (_ref6) {
          var data = _ref6.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoEstadoCuentaDetalladoOCC === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : self.formatoEstadoCuentaDetalladoOCC === 'pdf' ? blob = new Blob([data], {
            type: 'application/pdf'
          }) : blob = new Blob([data], {
            type: 'text/html'
          });
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'EstadoCuentaClienteDetalle.' + self.formatoEstadoCuentaDetalladoOCC;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          console.log(error);
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("No ha seleccionado un cliente válido.....", 5);
      }
    },
    seleccionarFechaCorteEstadoCuentaConsolidadoOCC: function seleccionarFechaCorteEstadoCuentaConsolidadoOCC(date) {
      this.fechaCorteEstadoCuentaConsolidadoOCC = moment(date).format("YYYY-MM-DD"); //
    },
    descargarReporteEstadoCuentaConsolidadoOCC: function descargarReporteEstadoCuentaConsolidadoOCC() {
      var self = this;
      self.loading = true;
      axios.post('cuentas-cobrar/reportes/estado-cuenta-consolidado-occ', {
        fechaCorte: this.fechaCorteEstadoCuentaConsolidadoOCC,
        extension: this.formatoEstadoCuentaConsolidadoOCC
      }, {
        responseType: 'blob'
      }).then(function (_ref7) {
        var data = _ref7.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.formatoEstadoCuentaConsolidadoOCC === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'EstadoCuentaConsolidadoOCC.' + self.formatoEstadoCuentaConsolidadoOCC;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    descargarReporteRecibos: function descargarReporteRecibos() {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('cuentas-cobrar/reportes/recibos', {
          fechaInicio: self.fechaInicialRecibos,
          fechaFinal: self.fechaFinalRecibos,
          extension: self.formatoRecibos
        }, {
          responseType: 'blob'
        }).then(function (_ref8) {
          var data = _ref8.data;
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
          link.download = 'ReporteRecibosPagoAsociados.' + self.formatoRecibos;
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
    seleccionarFechaInicialRecibos: function seleccionarFechaInicialRecibos(date) {
      this.fechaInicialRecibos = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalRecibos: function seleccionarFechaFinalRecibos(date) {
      this.fechaFinalRecibos = moment(date).format("YYYY-MM-DD");
    },
    cargarListaReportes: function cargarListaReportes() {
      var self = this;
      _api_menu__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerListaReportes(function (data) {
        if (data.rows.length > 0) {
          data.rows.forEach(function (reportex, key) {
            self.reportes.push(reportex.id_menu);
          });
        }

        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_zonas__WEBPACK_IMPORTED_MODULE_3__["default"].nuevo({}, function (data) {
        self.zonas = data.zonas;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.cargarListaReportes();
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-imprimir {\n\tmargin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "text" }, [
        _vm._v("Reportes Cuentas por Cobrar")
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
              attrs: { to: { name: "pagina-principal-cuentas-cobrar" } }
            },
            [_vm._v(" Módulo Cuentas por Cobrar")]
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
        _vm.reportes.indexOf(440) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "label-search" }, [
                          _vm._v("Zona:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.zona,
                                expression: "zona"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { label: "descripcion" },
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
                                _vm.zona = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { key: 0, domProps: { value: 0 } }, [
                              _vm._v(_vm._s("TODAS LAS ZONAS") + " ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.zonas, function(zona) {
                              return _c(
                                "option",
                                {
                                  key: zona.id_zona,
                                  domProps: { value: zona.id_zona }
                                },
                                [_vm._v(_vm._s(zona.descripcion))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Corte")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected: _vm.seleccionarFechaCorteAntiguedad
                            },
                            model: {
                              value: _vm.fechaCorteAntiguedadX,
                              callback: function($$v) {
                                _vm.fechaCorteAntiguedadX = $$v
                              },
                              expression: "fechaCorteAntiguedadX"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" }, [
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
                                value: _vm.formatoAntiguedad,
                                expression: "formatoAntiguedad"
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
                                _vm.formatoAntiguedad = $event.target.multiple
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
                          on: { click: _vm.descargarReporteAntiguedad }
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
        _vm.reportes.indexOf(441) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Cliente")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.cliente_estadocuentadetallado,
                                params: { es_deudor: false },
                                trim: 80,
                                url: _vm.clientesBusquedaURL
                              },
                              on: {
                                input:
                                  _vm.seleccionarClienteEstadoCuentaDetallado
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(
                            _vm.errorMessages.id_cliente_estadocuentadetallado,
                            function(message) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }
                          ),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Inicial")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaInicialEstadoCuentaDetallado
                            },
                            model: {
                              value: _vm.fechaInicialEstadoCuentaDetalladoX,
                              callback: function($$v) {
                                _vm.fechaInicialEstadoCuentaDetalladoX = $$v
                              },
                              expression: "fechaInicialEstadoCuentaDetalladoX"
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Final (Corte)")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaCorteEstadoCuentaDetallado
                            },
                            model: {
                              value: _vm.fechaCorteEstadoCuentaDetalladoX,
                              callback: function($$v) {
                                _vm.fechaCorteEstadoCuentaDetalladoX = $$v
                              },
                              expression: "fechaCorteEstadoCuentaDetalladoX"
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
                                value: _vm.formatoEstadoCuentaDetallado,
                                expression: "formatoEstadoCuentaDetallado"
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
                                _vm.formatoEstadoCuentaDetallado = $event.target
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
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "html" } }, [
                              _vm._v("HTML")
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
                          on: {
                            click: _vm.descargarReporteEstadoCuentaDetallado
                          }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(442) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Corte")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaCorteEstadoCuentaConsolidado
                            },
                            model: {
                              value: _vm.fechaCorteEstadoCuentaConsolidadoX,
                              callback: function($$v) {
                                _vm.fechaCorteEstadoCuentaConsolidadoX = $$v
                              },
                              expression: "fechaCorteEstadoCuentaConsolidadoX"
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
                                value: _vm.formatoEstadoCuentaConsolidado,
                                expression: "formatoEstadoCuentaConsolidado"
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
                                _vm.formatoEstadoCuentaConsolidado = $event
                                  .target.multiple
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
                          on: {
                            click: _vm.descargarReporteEstadoCuentaConsolidado
                          }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(443) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Corte")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaCorteEstadoCuentaConsolidadoEmpleado
                            },
                            model: {
                              value:
                                _vm.fechaCorteEstadoCuentaConsolidadoEmpleadoX,
                              callback: function($$v) {
                                _vm.fechaCorteEstadoCuentaConsolidadoEmpleadoX = $$v
                              },
                              expression:
                                "fechaCorteEstadoCuentaConsolidadoEmpleadoX"
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
                                value:
                                  _vm.formatoEstadoCuentaConsolidadoEmpleado,
                                expression:
                                  "formatoEstadoCuentaConsolidadoEmpleado"
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
                                _vm.formatoEstadoCuentaConsolidadoEmpleado = $event
                                  .target.multiple
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
                          on: {
                            click:
                              _vm.descargarReporteEstadoCuentaConsolidadoEmpleado
                          }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(444) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Empleado")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial:
                                  _vm.empleado_estadocuentadetalladoEmpleado,
                                trim: 80,
                                url: _vm.trabajadoresBusquedaURL
                              },
                              on: {
                                input:
                                  _vm.seleccionarEmpleadoEstadoCuentaDetallado
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(
                            _vm.errorMessages
                              .id_empleado_estadocuentadetalladoEmpleado,
                            function(message) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }
                          ),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Inicial")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaInicialEstadoCuentaDetalladoEmpleado
                            },
                            model: {
                              value:
                                _vm.fechaInicialEstadoCuentaDetalladoEmpleadoX,
                              callback: function($$v) {
                                _vm.fechaInicialEstadoCuentaDetalladoEmpleadoX = $$v
                              },
                              expression:
                                "fechaInicialEstadoCuentaDetalladoEmpleadoX"
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Final (Corte)")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaCorteEstadoCuentaDetalladoEmpleado
                            },
                            model: {
                              value:
                                _vm.fechaCorteEstadoCuentaDetalladoEmpleadoX,
                              callback: function($$v) {
                                _vm.fechaCorteEstadoCuentaDetalladoEmpleadoX = $$v
                              },
                              expression:
                                "fechaCorteEstadoCuentaDetalladoEmpleadoX"
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
                                value: _vm.formatoEstadoCuentaDetalladoEmpleado,
                                expression:
                                  "formatoEstadoCuentaDetalladoEmpleado"
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
                                _vm.formatoEstadoCuentaDetalladoEmpleado = $event
                                  .target.multiple
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
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "html" } }, [
                              _vm._v("HTML")
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
                          on: {
                            click:
                              _vm.descargarReporteEstadoCuentaDetalladoEmpleado
                          }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(445) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Cliente")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.cliente_estadocuentadetalladoOCC,
                                params: { es_deudor: true },
                                trim: 80,
                                url: _vm.clientesBusquedaURL
                              },
                              on: {
                                input:
                                  _vm.seleccionarClienteEstadoCuentaDetalladoOCC
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(
                            _vm.errorMessages
                              .id_cliente_estadocuentadetalladoOCC,
                            function(message) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }
                          ),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Inicial")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaInicialEstadoCuentaDetalladoOCC
                            },
                            model: {
                              value: _vm.fechaInicialEstadoCuentaDetalladoOCCX,
                              callback: function($$v) {
                                _vm.fechaInicialEstadoCuentaDetalladoOCCX = $$v
                              },
                              expression:
                                "fechaInicialEstadoCuentaDetalladoOCCX"
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Final (Corte)")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaCorteEstadoCuentaDetalladoOCC
                            },
                            model: {
                              value: _vm.fechaCorteEstadoCuentaDetalladoOCCX,
                              callback: function($$v) {
                                _vm.fechaCorteEstadoCuentaDetalladoOCCX = $$v
                              },
                              expression: "fechaCorteEstadoCuentaDetalladoOCCX"
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
                                value: _vm.formatoEstadoCuentaDetalladoOCC,
                                expression: "formatoEstadoCuentaDetalladoOCC"
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
                                _vm.formatoEstadoCuentaDetalladoOCC = $event
                                  .target.multiple
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
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "html" } }, [
                              _vm._v("HTML")
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
                          on: {
                            click: _vm.descargarReporteEstadoCuentaDetalladoOCC
                          }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(446) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha Corte")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected:
                                _vm.seleccionarFechaCorteEstadoCuentaConsolidadoOCC
                            },
                            model: {
                              value: _vm.fechaCorteEstadoCuentaConsolidadoOCCX,
                              callback: function($$v) {
                                _vm.fechaCorteEstadoCuentaConsolidadoOCCX = $$v
                              },
                              expression:
                                "fechaCorteEstadoCuentaConsolidadoOCCX"
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
                                value: _vm.formatoEstadoCuentaConsolidadoOCC,
                                expression: "formatoEstadoCuentaConsolidadoOCC"
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
                                _vm.formatoEstadoCuentaConsolidadoOCC = $event
                                  .target.multiple
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
                          on: {
                            click:
                              _vm.descargarReporteEstadoCuentaConsolidadoOCC
                          }
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
        _vm.reportes.indexOf(447) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(7),
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
                              selected: _vm.seleccionarFechaInicialRecibos
                            },
                            model: {
                              value: _vm.fechaInicialRecibosX,
                              callback: function($$v) {
                                _vm.fechaInicialRecibosX = $$v
                              },
                              expression: "fechaInicialRecibosX"
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
                            on: { selected: _vm.seleccionarFechaFinalRecibos },
                            model: {
                              value: _vm.fechaFinalRecibosX,
                              callback: function($$v) {
                                _vm.fechaFinalRecibosX = $$v
                              },
                              expression: "fechaFinalRecibosX"
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
                                value: _vm.formatoRecibos,
                                expression: "formatoRecibos"
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
                                _vm.formatoRecibos = $event.target.multiple
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
                          on: { click: _vm.descargarReporteRecibos }
                        },
                        [_vm._v("Imprimir\n                            ")]
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
        _vm._v("Reporte Antigüedad de Saldos Clientes")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Estado Cuenta Detallado Clientes")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Estado de Cuenta Consolidado Clientes")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Estado de Cuenta Consolidado Empleados")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Estado Cuenta Detallado Empleados")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Estado Cuenta Detallado Otras Cuentas")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Estado de Cuenta Consolidado Otras Cuentas")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte recibos pagos asociados")
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

/***/ "./resources/app/api/zonas.js":
/*!************************************!*\
  !*** ./resources/app/api/zonas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('zonas/obtener-todas').then(function (response) {
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
    axios.post('zonas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerZona: function obtenerZona(data, cb, errorCb) {
    axios.post('zonas/obtener-zona', data).then(function (response) {
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
    axios.post('zonas/registrar', data).then(function (response) {
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
    axios.put('zonas/actualizar', data).then(function (response) {
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
    axios.put('zonas/desactivar', data).then(function (response) {
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
    axios.put('zonas/activar', data).then(function (response) {
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
    axios.post('zonas/nuevo', data).then(function (response) {
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

/***/ "./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportesGeneralesCuentasXCobrar_vue_vue_type_template_id_085281e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4& */ "./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4&");
/* harmony import */ var _ReportesGeneralesCuentasXCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportesGeneralesCuentasXCobrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesGeneralesCuentasXCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGeneralesCuentasXCobrar_vue_vue_type_template_id_085281e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportesGeneralesCuentasXCobrar_vue_vue_type_template_id_085281e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4&":
/*!**************************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_template_id_085281e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesCuentasXCobrar.vue?vue&type=template&id=085281e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_template_id_085281e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesCuentasXCobrar_vue_vue_type_template_id_085281e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);