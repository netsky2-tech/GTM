(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nomina-reportes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      descargando: false,
      reportes: [],
      formatoPersonal: 'pdf',
      formatoActivoBajas: 'pdf',
      sucursalesBusquedaURL: "/sucursales/buscar",
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      trabajador: {
        id_trabajador: 0
      },
      trabajadorColilla: {
        id_trabajador: 0
      },
      trabajadorAntiguedad: {
        id_trabajador: 0
      },
      //	bodegasBusquedaURL: "/bodegas/buscar",
      //clientesBusquedaURL: "/ventas/clientes/buscar",
      errorMessages: [],
      sucursal_reportePersonal: {
        id_sucursal: 0
      },
      todas_sucursales: true,
      //Reporta alta activos
      fechaInicioPersonal: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalPersonal: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicioControl: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalControl: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicioPersonalX: new Date(),
      fechaFinalPersonalX: new Date(),
      fechaInicioControlX: new Date(),
      fechaFinalControlX: new Date(),
      anioINSS: '',
      mesINSS: 0,
      formatoINSS: 'pdf',
      anioIR: '',
      mesIR: 0,
      anioColilla: '',
      mesColilla: 0,
      formatoColilla: 'pdf',
      anioCentro: '',
      mesCentro: 0,
      formatoCentro: 'pdf',
      anioAntiguedad: '',
      mesAntiguedad: 0,
      formatoAntiguedad: 'pdf',
      formatoIR: 'pdf',
      formatoControl: 'pdf',
      formatoConstancia: 'pdf',
      periodos: [],
      periodosColilla: [],
      periodosCentro: [],
      meses: [],
      mesesColilla: [],
      mesesCentro: [],
      mes: 0,
      anio: 0,
      //Antiguedad proyectada
      fechaCorteAntiguedad: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteAntiguedadX: new Date(),
      formatoAntiguedadProyectada: 'pdf',
      trabajadorAntiguedadProyectada: {
        id_trabajador: 0
      },
      //Aguinaldo proyectada
      fechaCorteAguinaldo: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteAguinaldoX: new Date(),
      formatoAguinaldoProyectado: 'pdf',
      periodosAguinaldo: [],
      mesesAguinaldo: [],
      anioAguinaldo: '',
      mesAguinaldo: 0,
      trabajadorAguinaldoProyectado: {
        id_trabajador: 0
      }
    };
  },
  methods: {
    ReportePersonalSucursal: function ReportePersonalSucursal() {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('nomina/reportes/personal-sucursal', {
          id_sucursal: self.sucursal_reportePersonal.id_sucursal,
          fechaInicio: self.fechaInicioPersonal,
          fechaFinal: self.fechaFinalPersonal,
          extension: self.formatoPersonal
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoPersonal === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'PersonalPorSucursal.' + self.formatoPersonal;
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
    descargarReporteINSS: function descargarReporteINSS() {
      var _this2 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('nomina/reportes/inss', {
          anio: self.anioINSS.periodo,
          mes: self.mesINSS.mes,
          extension: self.formatoINSS
        }, {
          responseType: 'blob'
        }).then(function (_ref2) {
          var data = _ref2.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoINSS === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteINSS.' + self.formatoINSS;
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
    descargarReporteIR: function descargarReporteIR() {
      var _this3 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('nomina/reportes/ir', {
          anio: self.anioIR.periodo,
          mes: self.mesIR.mes,
          extension: self.formatoIR
        }, {
          responseType: 'blob'
        }).then(function (_ref3) {
          var data = _ref3.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoIR === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteIR.' + self.formatoIR;
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
    reporteControlEmpleado: function reporteControlEmpleado() {
      var _this4 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('nomina/reportes/control-entrada', {
          fecha_inicio: self.fechaInicioControl,
          fecha_final: self.fechaFinalControl,
          extension: self.formatoControl
        }, {
          responseType: 'blob'
        }).then(function (_ref4) {
          var data = _ref4.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoControl === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ControlEmpleado.' + self.formatoControl;
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
    reporteConstanciaRetenciones: function reporteConstanciaRetenciones() {
      var _this5 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('nomina/reportes/constancia_retencion', {
          id_trabajador: self.trabajador.id_trabajador,
          extension: self.formatoConstancia
        }, {
          responseType: 'blob'
        }).then(function (_ref5) {
          var data = _ref5.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoConstancia === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ConstanciaRetencion.' + self.formatoConstancia;
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
    reporteColillaPago: function reporteColillaPago() {
      var _this6 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('nomina/reportes/colilla-pago', {
          id_trabajador: self.trabajadorColilla.id_trabajador,
          extension: self.formatoColilla,
          mes: self.mesColilla.mes,
          anio: self.anioColilla.periodo
        }, {
          responseType: 'blob'
        }).then(function (_ref6) {
          var data = _ref6.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoColilla === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ColillaPago.' + self.formatoColilla;
          link.click();
          _this6.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    reporteAntiguedad: function reporteAntiguedad() {
      var _this7 = this;

      if (!this.loading) {
        if (this.trabajadorAntiguedad.fecha_egreso) {
          var self = this;
          self.loading = true;
          alertify.success("Descargando datos, espere un momento.....", 5);
          axios.post('nomina/reportes/antiguedad', {
            id_trabajador: self.trabajadorAntiguedad.id_trabajador,
            extension: self.formatoAntiguedad
          }, {
            responseType: 'blob'
          }).then(function (_ref7) {
            var data = _ref7.data;
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
            _this7.loading = false;
          })["catch"](function (error) {
            alertify.error("Error Descargando archivo.....", 5);
            self.loading = false;
          });
        } else {
          alertify.warning("Verifique si el trabajador seleccionado ya no forma parte de la empresa.", 5);
        }
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    reporteAntiguedadProyectada: function reporteAntiguedadProyectada() {
      var _this8 = this;

      if (!this.loading) {
        if (this.trabajadorAntiguedadProyectada.fecha_ingreso) {
          var self = this;
          self.loading = true;
          alertify.success("Descargando datos, espere un momento.....", 5);
          axios.post('nomina/reportes/antiguedad-proyectada', {
            id_trabajador: self.trabajadorAntiguedadProyectada.id_trabajador,
            extension: self.formatoAntiguedadProyectada,
            fecha_corte: self.fechaCorteAntiguedad
          }, {
            responseType: 'blob'
          }).then(function (_ref8) {
            var data = _ref8.data;
            var blob = new Blob([data], {
              type: 'application/pdf'
            });
            self.formatoAntiguedadProyectada === 'xls' ? blob = new Blob([data], {
              type: 'application/octet-stream'
            }) : blob = new Blob([data], {
              type: 'application/pdf'
            });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'ReporteAntiguedadProyectada.' + self.formatoAntiguedadProyectada;
            link.click();
            _this8.loading = false;
          })["catch"](function (error) {
            alertify.error("Error Descargando archivo.....", 5);
            self.loading = false;
          });
        } else {
          alertify.warning("Verifique que el trabajador seleccionado siga formando parte de la empresa.", 5);
        }
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    reporteAguinaldoProyectado: function reporteAguinaldoProyectado() {
      var _this9 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('nomina/reportes/aguinaldo-proyectada', {
          id_trabajador: self.trabajadorAguinaldoProyectado.id_trabajador,
          extension: self.formatoAguinaldoProyectado,
          fecha_corte: self.fechaCorteAguinaldo,
          periodo: self.anioAguinaldo.periodo
        }, {
          responseType: 'blob'
        }).then(function (_ref9) {
          var data = _ref9.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoAguinaldoProyectado === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteAguinaldoProyectado.' + self.formatoAguinaldoProyectado;
          link.click();
          _this9.loading = false;
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
      self.sucursal_reportePersonal = sucursal;
      self.id_sucursal_reportePersonal = self.sucursal_reportePersonal.id_sucursal;
    },
    seleccionarCliente: function seleccionarCliente(e) {
      var cliente = e.target.value;
      var self = this;
      self.form.cliente = cliente;
      self.form.id_cliente = self.form.cliente.id_cliente;
    },
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajadorP = e.target.value;
      var self = this;
      self.trabajador = trabajadorP;
      self.id_trabajador = self.trabajador.id_trabajador;
    },
    seleccionarTrabajadorColilla: function seleccionarTrabajadorColilla(e) {
      var trabajadorC = e.target.value;
      var self = this;
      self.trabajadorColilla = trabajadorC;
      self.id_trabajador = self.trabajadorColilla.id_trabajador;
    },
    seleccionarTrabajadorAntiguedad: function seleccionarTrabajadorAntiguedad(e) {
      var trabajadorA = e.target.value;
      var self = this;
      self.trabajadorAntiguedad = trabajadorA;
      self.id_trabajador = self.trabajadorAntiguedad.id_trabajador;
    },
    seleccionarTrabajadorAguinaldoProyectado: function seleccionarTrabajadorAguinaldoProyectado(e) {
      var trabajadorAg = e.target.value;
      var self = this;
      self.trabajadorAguinaldoProyectado = trabajadorAg;
      self.id_trabajador = self.trabajadorAguinaldoProyectado.id_trabajador;
    },
    seleccionarTrabajadorAntiguedadProyectada: function seleccionarTrabajadorAntiguedadProyectada(e) {
      var trabajadorAP = e.target.value;
      var self = this;
      self.trabajadorAntiguedadProyectada = trabajadorAP;
      self.id_trabajador = self.trabajadorAntiguedadProyectada.id_trabajador;
    },
    seleccionarClienteHistorial: function seleccionarClienteHistorial(e) {
      var clienteHistorial = e.target.value;
      var self = this;
      self.form.clienteHistorial = clienteHistorial;
      self.form.id_cliente_historial = self.form.clienteHistorial.id_cliente;
    },
    cambiarSucursal: function cambiarSucursal() {
      var self = this;

      if (self.todas_sucursales) {
        self.sucursal_reportePersonal = {};
        self.sucursal_reportePersonal.id_sucursal = 0;
      }
    },
    seleccionarFechaInicioPersonal: function seleccionarFechaInicioPersonal(date) {
      this.fechaInicioPersonal = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalPersonal: function seleccionarFechaFinalPersonal(date) {
      this.fechaFinalPersonal = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicioControl: function seleccionarFechaInicioControl(date) {
      this.fechaInicioControl = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalControl: function seleccionarFechaFinalControl(date) {
      this.fechaFinalControl = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaCorteAntiguedad: function seleccionarFechaCorteAntiguedad(date) {
      this.fechaCorteAntiguedad = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaCorteAguinaldo: function seleccionarFechaCorteAguinaldo(date) {
      this.fechaCorteAguinaldo = moment(date).format("YYYY-MM-DD");
    },
    obtenerMesesINSS: function obtenerMesesINSS() {
      var self = this;
      self.mesINSS = [];
      self.meses = self.anioINSS.meses_periodo;
      self.mesINSS = self.meses[0];
    },
    obtenerMesesIR: function obtenerMesesIR() {
      var self = this;
      self.mesIR = [];
      self.meses = self.anioIR.meses_periodo;
      self.mesIR = self.meses[0];
    },
    obtenerMesesColilla: function obtenerMesesColilla() {
      var self = this;
      self.mesColilla = [];
      self.mesesColilla = self.anioColilla.meses_periodo;
      self.mesColilla = self.meses[0];
    },
    obtenerMesesAguinaldo: function obtenerMesesAguinaldo() {
      var self = this;
      self.mesAguinaldo = [];
      self.mesesAguinaldo = self.anioAguinaldo.meses_periodo;
      self.mesAguinaldo = self.meses[0];
    },
    obtenerMesesCentro: function obtenerMesesCentro() {
      var self = this;
      self.mesCentro = [];
      self.mesesCentro = self.anioCentro.meses_periodo;
      self.mesCentro = self.meses[0];
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
        self.periodosColilla = data.periodos;
        self.anioColilla = self.periodos[0];
        self.mesesColilla = self.anio.meses_periodo;
        self.periodosCentro = data.periodos;
        self.anioCentro = self.periodos[0];
        self.mesesCentro = self.anio.meses_periodo;
        self.periodosAguinaldo = data.periodos;
        self.anioAguinaldo = self.periodos[0];
        self.mesesAguinaldo = self.anio.meses_periodo;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-imprimir {\n\tmargin-top: 33px;\n}\n.check-label2 {\n\tmargin-top: 40px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "text" }, [_vm._v("Reportes nómina")]),
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
              attrs: { to: { name: "pagina-principal-nomina" } }
            },
            [_vm._v(" Módulo nómina")]
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
        _vm.reportes.indexOf(451) >= 0
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
                              selected: _vm.seleccionarFechaInicioPersonal
                            },
                            model: {
                              value: _vm.fechaInicioPersonalX,
                              callback: function($$v) {
                                _vm.fechaInicioPersonalX = $$v
                              },
                              expression: "fechaInicioPersonalX"
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
                            on: { selected: _vm.seleccionarFechaFinalPersonal },
                            model: {
                              value: _vm.fechaFinalPersonalX,
                              callback: function($$v) {
                                _vm.fechaFinalPersonalX = $$v
                              },
                              expression: "fechaFinalPersonalX"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "check-label2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.todas_sucursales,
                                expression: "todas_sucursales"
                              }
                            ],
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.todas_sucursales)
                                ? _vm._i(_vm.todas_sucursales, null) > -1
                                : _vm.todas_sucursales
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$a = _vm.todas_sucursales,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.todas_sucursales = $$a.concat([
                                          $$v
                                        ]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.todas_sucursales = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.todas_sucursales = $$c
                                  }
                                },
                                _vm.cambiarSucursal
                              ]
                            }
                          }),
                          _vm._v(" Todas las sucursales")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    !_vm.todas_sucursales
                      ? _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v(" Sucursal")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("typeahead", {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    disabled: _vm.todas_sucursales,
                                    initial: _vm.sucursal_reportePersonal,
                                    trim: 80,
                                    url: _vm.sucursalesBusquedaURL
                                  },
                                  on: { input: _vm.seleccionarSucursalReporte }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages.id_bodega_reporteExistencia,
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
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.todas_sucursales
                      ? _c("div", { staticClass: "col-sm-6" }, [_vm._m(1)])
                      : _vm._e(),
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
                                value: _vm.formatoPersonal,
                                expression: "formatoPersonal"
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
                                _vm.formatoPersonal = $event.target.multiple
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
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-imprimir",
                        attrs: { type: "button" },
                        on: { click: _vm.ReportePersonalSucursal }
                      },
                      [_vm._v("Imprimir\n\t\t\t\t\t")]
                    )
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(452) >= 0
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
                            on: { input: _vm.obtenerMesesINSS },
                            model: {
                              value: _vm.anioINSS,
                              callback: function($$v) {
                                _vm.anioINSS = $$v
                              },
                              expression: "anioINSS"
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
                            model: {
                              value: _vm.mesINSS,
                              callback: function($$v) {
                                _vm.mesINSS = $$v
                              },
                              expression: "mesINSS"
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
                                value: _vm.formatoINSS,
                                expression: "formatoINSS"
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
                                _vm.formatoINSS = $event.target.multiple
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
                          on: { click: _vm.descargarReporteINSS }
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
        _vm.reportes.indexOf(453) >= 0
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
                            attrs: { label: "periodo", options: _vm.periodos },
                            on: { input: _vm.obtenerMesesIR },
                            model: {
                              value: _vm.anioIR,
                              callback: function($$v) {
                                _vm.anioIR = $$v
                              },
                              expression: "anioIR"
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
                            model: {
                              value: _vm.mesIR,
                              callback: function($$v) {
                                _vm.mesIR = $$v
                              },
                              expression: "mesIR"
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
                                value: _vm.formatoIR,
                                expression: "formatoIR"
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
                                _vm.formatoIR = $event.target.multiple
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
                          on: { click: _vm.descargarReporteIR }
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
        _vm.reportes.indexOf(454) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(4),
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
                            on: { selected: _vm.seleccionarFechaInicioControl },
                            model: {
                              value: _vm.fechaInicioControlX,
                              callback: function($$v) {
                                _vm.fechaInicioControlX = $$v
                              },
                              expression: "fechaInicioControlX"
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
                            on: { selected: _vm.seleccionarFechaFinalControl },
                            model: {
                              value: _vm.fechaFinalControlX,
                              callback: function($$v) {
                                _vm.fechaFinalControlX = $$v
                              },
                              expression: "fechaFinalControlX"
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
                                value: _vm.formatoControl,
                                expression: "formatoControl"
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
                                _vm.formatoControl = $event.target.multiple
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
                          on: { click: _vm.reporteControlEmpleado }
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
        _vm.reportes.indexOf(455) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Trabajador")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.trabajador,
                                trim: 80,
                                url: _vm.trabajadoresBusquedaURL
                              },
                              on: { input: _vm.seleccionarTrabajador }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.trabajador, function(
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
                        _c("label", [_vm._v(" Formato:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formatoConstancia,
                                expression: "formatoConstancia"
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
                                _vm.formatoConstancia = $event.target.multiple
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
                          on: { click: _vm.reporteConstanciaRetenciones }
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
        _vm.reportes.indexOf(456) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Trabajador")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.trabajadorColilla,
                                trim: 80,
                                url: _vm.trabajadoresBusquedaURL
                              },
                              on: { input: _vm.seleccionarTrabajadorColilla }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.trabajadorColilla, function(
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
                              options: _vm.periodosColilla
                            },
                            on: { input: _vm.obtenerMesesColilla },
                            model: {
                              value: _vm.anioColilla,
                              callback: function($$v) {
                                _vm.anioColilla = $$v
                              },
                              expression: "anioColilla"
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
                              options: _vm.mesesColilla
                            },
                            model: {
                              value: _vm.mesColilla,
                              callback: function($$v) {
                                _vm.mesColilla = $$v
                              },
                              expression: "mesColilla"
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
                                value: _vm.formatoColilla,
                                expression: "formatoColilla"
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
                                _vm.formatoColilla = $event.target.multiple
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
                          on: { click: _vm.reporteColillaPago }
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
        _vm.reportes.indexOf(457) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Trabajador")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.trabajadorAntiguedad,
                                trim: 80,
                                url: _vm.trabajadoresBusquedaURL
                              },
                              on: { input: _vm.seleccionarTrabajadorAntiguedad }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(
                            _vm.errorMessages.trabajadorAntiguedad,
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
                          on: { click: _vm.reporteAntiguedad }
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
        _vm.reportes.indexOf(458) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(8),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Trabajador")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.trabajadorAntiguedadProyectada,
                                trim: 80,
                                url: _vm.trabajadoresBusquedaURL
                              },
                              on: {
                                input:
                                  _vm.seleccionarTrabajadorAntiguedadProyectada
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
                            _vm.errorMessages.trabajadorAntiguedadProyectada,
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
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha de corte")
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
                                value: _vm.formatoAntiguedadProyectada,
                                expression: "formatoAntiguedadProyectada"
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
                                _vm.formatoAntiguedadProyectada = $event.target
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
                          on: { click: _vm.reporteAntiguedadProyectada }
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
        _vm.reportes.indexOf(459) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Trabajador")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.trabajadorAguinaldoProyectado,
                                trim: 80,
                                url: _vm.trabajadoresBusquedaURL
                              },
                              on: {
                                input:
                                  _vm.seleccionarTrabajadorAguinaldoProyectado
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
                            _vm.errorMessages.trabajadorAguinaldoProyectado,
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
                          _c("label", { staticClass: "label-search" }, [
                            _vm._v("Periodo:")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "periodo",
                              options: _vm.periodosAguinaldo
                            },
                            on: { input: _vm.obtenerMesesAguinaldo },
                            model: {
                              value: _vm.anioAguinaldo,
                              callback: function($$v) {
                                _vm.anioAguinaldo = $$v
                              },
                              expression: "anioAguinaldo"
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
                            _vm._v("Fecha de corte")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected: _vm.seleccionarFechaCorteAguinaldo
                            },
                            model: {
                              value: _vm.fechaCorteAguinaldoX,
                              callback: function($$v) {
                                _vm.fechaCorteAguinaldoX = $$v
                              },
                              expression: "fechaCorteAguinaldoX"
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
                                value: _vm.formatoAguinaldoProyectado,
                                expression: "formatoAguinaldoProyectado"
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
                                _vm.formatoAguinaldoProyectado = $event.target
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
                          on: { click: _vm.reporteAguinaldoProyectado }
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Reporte de personal")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Sucursal")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", disabled: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Reporte INSS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Reporte IR")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte control entrada y salida de personal")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Constancia de retenciones")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Colilla de pago")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de indemnización por antigüedad")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Proyección de indemnización por antigüedad")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Reporte de aguinaldo")])
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

/***/ "./resources/app/components/reportes/ReportesGeneralesNomina.vue":
/*!***********************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesNomina.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportesGeneralesNomina_vue_vue_type_template_id_2672b49a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a& */ "./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a&");
/* harmony import */ var _ReportesGeneralesNomina_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGeneralesNomina.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportesGeneralesNomina_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesGeneralesNomina_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGeneralesNomina_vue_vue_type_template_id_2672b49a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportesGeneralesNomina_vue_vue_type_template_id_2672b49a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/ReportesGeneralesNomina.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesNomina.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_template_id_2672b49a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesNomina.vue?vue&type=template&id=2672b49a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_template_id_2672b49a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesNomina_vue_vue_type_template_id_2672b49a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);