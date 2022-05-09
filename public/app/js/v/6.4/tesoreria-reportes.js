(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tesoreria-reportes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
/* harmony import */ var _api_caja_chica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/caja_chica */ "./resources/app/api/caja_chica.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/menu */ "./resources/app/api/menu.js");
var _methods;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "dd-MM-yyyy",
      descargando: false,
      reportes: [],
      formatoVales: 'pdf',
      formatoCaja: 'pdf',
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
      formatoChequeAnulado: 'pdf',
      parametrosChequesEmitidos: {
        fechaInicialChequesEmitidos: moment(new Date()).format("YYYY-MM-DD"),
        fechaFinalChequesEmitidos: moment(new Date()).format("YYYY-MM-DD"),
        fechaInicialChequesEmitidosX: new Date(),
        fechaFinalChequesEmitidosX: new Date(),
        formatoChequeEmitido: 'pdf',
        cuentas: [],
        cuentas_todas: [],
        cuentas_dolares: [],
        cuentas_cordobas: [],
        cuenta: [],
        moneda: 0,
        todas_cuentas: false
      },
      parametrosMinutasDepositos: {
        fechaInicialMinutasDepositos: moment(new Date()).format("YYYY-MM-DD"),
        fechaFinalMinutasDepositos: moment(new Date()).format("YYYY-MM-DD"),
        fechaInicialMinutasDepositosX: new Date(),
        fechaFinalMinutasDepositosX: new Date(),
        formatoMinutasDepositos: 'pdf',
        cuentas_minutas: [],
        cuenta_minuta: [],
        moneda: 0,
        todas_cuentas_minutas: false,
        todas_sucursales_minutas: false,
        sucursales_minutas: [],
        sucursal_minuta: []
      }
    };
  },
  methods: (_methods = {
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
    seleccionarFechaInicialChequesEmitidos: function seleccionarFechaInicialChequesEmitidos(date) {
      this.parametrosChequesEmitidos.fechaInicialChequesEmitidos = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalChequesEmitidos: function seleccionarFechaFinalChequesEmitidos(date) {
      this.parametrosChequesEmitidos.fechaFinalChequesEmitidos = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialMinutasDepositos: function seleccionarFechaInicialMinutasDepositos(date) {
      this.parametrosMinutasDepositos.fechaInicialMinutasDepositos = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalMinutasDepositos: function seleccionarFechaFinalMinutasDepositos(date) {
      this.parametrosMinutasDepositos.fechaFinalMinutasDepositos = moment(date).format("YYYY-MM-DD");
    },
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_caja_chica__WEBPACK_IMPORTED_MODULE_1__["default"].nuevo({}, function (data) {
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
        self.parametrosChequesEmitidos.cuentas_todas = data.cuentas_bancarias;
        self.parametrosChequesEmitidos.cuentas = data.cuentas_bancarias;
        self.parametrosChequesEmitidos.cuentas_cordobas = data.cuentas_bancarias_cordobas;
        self.parametrosChequesEmitidos.cuentas_dolares = data.cuentas_bancarias_dolares;
        self.parametrosMinutasDepositos.cuentas_minutas = data.cuentas_bancarias;
        self.parametrosMinutasDepositos.sucursales_minutas = data.sucursales;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    cambiarMoneda: function cambiarMoneda() {
      var self = this;

      if (self.parametrosChequesEmitidos.moneda === "0") {
        self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_todas;
      } else if (self.parametrosChequesEmitidos.moneda === "1") {
        self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_cordobas;
      } else if (self.parametrosChequesEmitidos.moneda === "3") {
        self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_dolares;
      } else {
        self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_todas;
      }
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
    },
    descargarReporteVales: function descargarReporteVales() {
      var _this6 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('modulo-tesoreria/caja-chica-comprobante/reporte/vale', {
          extension: self.formatoVales
        }, {
          responseType: 'blob'
        }).then(function (_ref6) {
          var data = _ref6.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoVales === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteValeProvisional.' + self.formatoVales;
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
    descargarReporteCaja: function descargarReporteCaja() {
      var _this7 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('cajas/reporte', {
          extension: self.formatoCaja
        }, {
          responseType: 'blob'
        }).then(function (_ref7) {
          var data = _ref7.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoCaja === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteCajaChica.' + self.formatoCaja;
          link.click();
          _this7.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    descargarReporteChequesEmitidos: function descargarReporteChequesEmitidos() {
      var _this8 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('tesorería/cheques-emitidos/reporte', {
          extension: self.parametrosChequesEmitidos.formatoChequeEmitido,
          id_cuenta_bancaria: self.parametrosChequesEmitidos.cuenta.id_cuenta_bancaria,
          id_moneda: self.parametrosChequesEmitidos.moneda,
          fechaInicial: self.parametrosChequesEmitidos.fechaInicialChequesEmitidos,
          fechaFinal: self.parametrosChequesEmitidos.fechaFinalChequesEmitidos
        }, {
          responseType: 'blob'
        }).then(function (_ref8) {
          var data = _ref8.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametrosChequesEmitidos.formatoChequeEmitido === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteCajaChica.' + self.parametrosChequesEmitidos.formatoChequeEmitido;
          link.click();
          _this8.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    descargarReporteMinutasDepositos: function descargarReporteMinutasDepositos() {
      var _this9 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('tesorería/minutas-depositos/reporte', {
          extension: self.parametrosMinutasDepositos.formatoMinutasDepositos,
          id_cuenta_bancaria: self.parametrosMinutasDepositos.cuenta_minuta.id_cuenta_bancaria,
          id_sucursal: self.parametrosMinutasDepositos.sucursal_minuta.id_sucursal,
          fechaInicial: self.parametrosMinutasDepositos.fechaInicialMinutasDepositos,
          fechaFinal: self.parametrosMinutasDepositos.fechaFinalMinutasDepositos
        }, {
          responseType: 'blob'
        }).then(function (_ref9) {
          var data = _ref9.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.parametrosMinutasDepositos.formatoMinutasDepositos === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteCajaChica.' + self.parametrosMinutasDepositos.formatoMinutasDepositos;
          link.click();
          _this9.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    }
  }, _defineProperty(_methods, "seleccionarBodegaReporte", function seleccionarBodegaReporte(e) {
    var bodega = e.target.value;
    var self = this;
    self.bodega_reporteEstadoBateria = bodega;
    self.id_bodega_reporteEstadoBateria = self.bodega_reporteEstadoBateria.id_bodega;
  }), _defineProperty(_methods, "seleccionarSucursalReporte", function seleccionarSucursalReporte(e) {
    var sucursal = e.target.value;
    var self = this;
    self.sucursal_reporteExistencia = sucursal;
    self.id_sucursal_reporteExistencia = self.sucursal_reporteExistencia.id_sucursal;
  }), _defineProperty(_methods, "seleccionarCliente", function seleccionarCliente(e) {
    var cliente = e.target.value;
    var self = this;
    self.form.cliente = cliente;
    self.form.id_cliente = self.form.cliente.id_cliente;
  }), _defineProperty(_methods, "seleccionarClienteHistorial", function seleccionarClienteHistorial(e) {
    var clienteHistorial = e.target.value;
    var self = this;
    self.form.clienteHistorial = clienteHistorial;
    self.form.id_cliente_historial = self.form.clienteHistorial.id_cliente;
  }), _defineProperty(_methods, "cambiarCuentas", function cambiarCuentas() {
    var self = this;

    if (self.parametrosChequesEmitidos.todas_cuentas) {
      self.parametrosChequesEmitidos.cuenta = {};
      self.parametrosChequesEmitidos.cuenta.id_cuenta_bancaria = 0;
      self.parametrosChequesEmitidos.cuenta.cuenta = 'Todas las cuentas';
      self.parametrosChequesEmitidos.moneda = 0;
    } else if (!self.parametrosChequesEmitidos.todas_cuentas) {
      self.parametrosChequesEmitidos.cuenta = self.parametrosChequesEmitidos.cuentas[5];
    }
  }), _defineProperty(_methods, "cambiarCuentasMinutas", function cambiarCuentasMinutas() {
    var self = this;

    if (self.parametrosMinutasDepositos.todas_cuentas_minutas) {
      self.parametrosMinutasDepositos.cuenta_minuta = {};
      self.parametrosMinutasDepositos.cuenta_minuta.id_cuenta_bancaria = 0;
      self.parametrosMinutasDepositos.cuenta_minuta.cuenta = 'Todas las cuentas';
    } else if (!self.parametrosMinutasDepositos.todas_cuentas_minutas) {
      self.parametrosMinutasDepositos.cuenta_minuta = self.parametrosMinutasDepositos.cuentas_minutas[5];
    }
  }), _defineProperty(_methods, "cambiarSucursalesMinutas", function cambiarSucursalesMinutas() {
    var self = this;

    if (self.parametrosMinutasDepositos.todas_sucursales_minutas) {
      self.parametrosMinutasDepositos.sucursal_minuta = {};
      self.parametrosMinutasDepositos.sucursal_minuta.id_sucursal = 0;
      self.parametrosMinutasDepositos.sucursal_minuta.descripcion = 'Todas las sucursales';
    } else if (!self.parametrosMinutasDepositos.todas_sucursales_minutas) {
      self.parametrosMinutasDepositos.sucursal_minuta = self.parametrosMinutasDepositos.sucursales_minutas[1];
    }
  }), _defineProperty(_methods, "cargarListaReportes", function cargarListaReportes() {
    var self = this;
    _api_menu__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerListaReportes(function (data) {
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
  }), _methods),
  mounted: function mounted() {
    //this.cargarListaReportes();
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-imprimir {\n\tmargin-top: 33px;\n}\n.check-label2 {\n\tmargin-top: 40px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520& ***!
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
  return _c(
    "div",
    { staticClass: "main" },
    [
      _c("div", { staticClass: "simple-welcome-text" }, [
        _c("div", { staticClass: "text" }, [_vm._v("Reportes de tesorería")]),
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
                attrs: { to: { name: "pagina-principal-tesoreria" } }
              },
              [_vm._v(" Módulo de tesorería")]
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
          _vm.reportes.indexOf(469) >= 0
            ? [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "content-box" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
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
                                  value: _vm.formatoVales,
                                  expression: "formatoVales"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.formatoVales = $event.target.multiple
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
                            on: { click: _vm.descargarReporteVales }
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
          _vm.reportes.indexOf(470) >= 0
            ? [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "content-box" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
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
                                  value: _vm.formatoCaja,
                                  expression: "formatoCaja"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.formatoCaja = $event.target.multiple
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
                            on: { click: _vm.descargarReporteCaja }
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
          _vm.reportes.indexOf(425) >= 0
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.formatoRetenciones = $event.target
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
                            on: { click: _vm.descargarReporteRetenciones }
                          },
                          [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t")]
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
                    _vm._m(3),
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
                              on: {
                                selected: _vm.seleccionarFechaFinalCheques
                              },
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                          [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t")]
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
                                options: _vm.periodos
                              },
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
                              attrs: {
                                label: "mes_letras",
                                options: _vm.meses
                              },
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                          [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t")]
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
                    _vm._m(5),
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.formatoBeneficiario = $event.target
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
                            on: { click: _vm.descargarReporteBeneficiario }
                          },
                          [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t")]
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
                    _vm._m(6),
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
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                          [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t")]
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
                    _vm._m(7),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.parametrosChequesEmitidos.todas_cuentas,
                                  expression:
                                    "parametrosChequesEmitidos.todas_cuentas"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.parametrosChequesEmitidos.todas_cuentas
                                )
                                  ? _vm._i(
                                      _vm.parametrosChequesEmitidos
                                        .todas_cuentas,
                                      null
                                    ) > -1
                                  : _vm.parametrosChequesEmitidos.todas_cuentas
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a =
                                        _vm.parametrosChequesEmitidos
                                          .todas_cuentas,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.parametrosChequesEmitidos,
                                            "todas_cuentas",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.parametrosChequesEmitidos,
                                            "todas_cuentas",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(
                                        _vm.parametrosChequesEmitidos,
                                        "todas_cuentas",
                                        $$c
                                      )
                                    }
                                  },
                                  _vm.cambiarCuentas
                                ]
                              }
                            }),
                            _vm._v(" Todas las cuentas ")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.parametrosChequesEmitidos.todas_cuentas
                        ? _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { staticClass: "label-search" }, [
                                _vm._v("Moneda:")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value:
                                        _vm.parametrosChequesEmitidos.moneda,
                                      expression:
                                        "parametrosChequesEmitidos.moneda",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return _vm._n(val)
                                          })
                                        _vm.$set(
                                          _vm.parametrosChequesEmitidos,
                                          "moneda",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      _vm.cambiarMoneda
                                    ]
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "0" } }, [
                                    _vm._v("Todas las monedas")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Solo cordobas")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "3" } }, [
                                    _vm._v("Solo dolares")
                                  ])
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.parametrosChequesEmitidos.todas_cuentas
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { staticClass: "label-search" }, [
                                  _vm._v("Cuenta:")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    disabled: "",
                                    label: "cuenta",
                                    options:
                                      _vm.parametrosChequesEmitidos.cuentas
                                  },
                                  model: {
                                    value: _vm.parametrosChequesEmitidos.cuenta,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.parametrosChequesEmitidos,
                                        "cuenta",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "parametrosChequesEmitidos.cuenta"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.parametrosChequesEmitidos.todas_cuentas
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { staticClass: "label-search" }, [
                                  _vm._v("Cuenta:")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    label: "cuenta",
                                    options:
                                      _vm.parametrosChequesEmitidos.cuentas
                                  },
                                  model: {
                                    value: _vm.parametrosChequesEmitidos.cuenta,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.parametrosChequesEmitidos,
                                        "cuenta",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "parametrosChequesEmitidos.cuenta"
                                  }
                                })
                              ],
                              1
                            )
                          ])
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
                                  value:
                                    _vm.parametrosChequesEmitidos
                                      .formatoChequeEmitido,
                                  expression:
                                    "parametrosChequesEmitidos.formatoChequeEmitido"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.parametrosChequesEmitidos,
                                    "formatoChequeEmitido",
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
                                selected:
                                  _vm.seleccionarFechaInicialChequesEmitidos
                              },
                              model: {
                                value:
                                  _vm.parametrosChequesEmitidos
                                    .fechaInicialChequesEmitidosX,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.parametrosChequesEmitidos,
                                    "fechaInicialChequesEmitidosX",
                                    $$v
                                  )
                                },
                                expression:
                                  "parametrosChequesEmitidos.fechaInicialChequesEmitidosX"
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
                                selected:
                                  _vm.seleccionarFechaFinalChequesEmitidos
                              },
                              model: {
                                value:
                                  _vm.parametrosChequesEmitidos
                                    .fechaFinalChequesEmitidosX,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.parametrosChequesEmitidos,
                                    "fechaFinalChequesEmitidosX",
                                    $$v
                                  )
                                },
                                expression:
                                  "parametrosChequesEmitidos.fechaFinalChequesEmitidosX"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-imprimir",
                            attrs: { type: "button" },
                            on: { click: _vm.descargarReporteChequesEmitidos }
                          },
                          [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t")]
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
                    _vm._m(8),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.parametrosMinutasDepositos
                                      .todas_cuentas_minutas,
                                  expression:
                                    "parametrosMinutasDepositos.todas_cuentas_minutas"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.parametrosMinutasDepositos
                                    .todas_cuentas_minutas
                                )
                                  ? _vm._i(
                                      _vm.parametrosMinutasDepositos
                                        .todas_cuentas_minutas,
                                      null
                                    ) > -1
                                  : _vm.parametrosMinutasDepositos
                                      .todas_cuentas_minutas
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a =
                                        _vm.parametrosMinutasDepositos
                                          .todas_cuentas_minutas,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.parametrosMinutasDepositos,
                                            "todas_cuentas_minutas",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.parametrosMinutasDepositos,
                                            "todas_cuentas_minutas",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(
                                        _vm.parametrosMinutasDepositos,
                                        "todas_cuentas_minutas",
                                        $$c
                                      )
                                    }
                                  },
                                  _vm.cambiarCuentasMinutas
                                ]
                              }
                            }),
                            _vm._v(" Todas las cuentas ")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.parametrosMinutasDepositos.todas_cuentas_minutas
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { staticClass: "label-search" }, [
                                  _vm._v("Cuenta:")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    disabled: "",
                                    label: "cuenta",
                                    options:
                                      _vm.parametrosMinutasDepositos
                                        .cuentas_minutas
                                  },
                                  model: {
                                    value:
                                      _vm.parametrosMinutasDepositos
                                        .cuenta_minuta,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.parametrosMinutasDepositos,
                                        "cuenta_minuta",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "parametrosMinutasDepositos.cuenta_minuta"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.parametrosMinutasDepositos.todas_cuentas_minutas
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { staticClass: "label-search" }, [
                                  _vm._v("Cuenta:")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    label: "cuenta",
                                    options:
                                      _vm.parametrosMinutasDepositos
                                        .cuentas_minutas
                                  },
                                  model: {
                                    value:
                                      _vm.parametrosMinutasDepositos
                                        .cuenta_minuta,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.parametrosMinutasDepositos,
                                        "cuenta_minuta",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "parametrosMinutasDepositos.cuenta_minuta"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.parametrosMinutasDepositos
                                      .todas_sucursales_minutas,
                                  expression:
                                    "parametrosMinutasDepositos.todas_sucursales_minutas"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.parametrosMinutasDepositos
                                    .todas_sucursales_minutas
                                )
                                  ? _vm._i(
                                      _vm.parametrosMinutasDepositos
                                        .todas_sucursales_minutas,
                                      null
                                    ) > -1
                                  : _vm.parametrosMinutasDepositos
                                      .todas_sucursales_minutas
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a =
                                        _vm.parametrosMinutasDepositos
                                          .todas_sucursales_minutas,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.parametrosMinutasDepositos,
                                            "todas_sucursales_minutas",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.parametrosMinutasDepositos,
                                            "todas_sucursales_minutas",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(
                                        _vm.parametrosMinutasDepositos,
                                        "todas_sucursales_minutas",
                                        $$c
                                      )
                                    }
                                  },
                                  _vm.cambiarSucursalesMinutas
                                ]
                              }
                            }),
                            _vm._v(" Todas las sucursales ")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.parametrosMinutasDepositos.todas_sucursales_minutas
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { staticClass: "label-search" }, [
                                  _vm._v("Sucursal:")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    disabled: "",
                                    label: "descripcion",
                                    options:
                                      _vm.parametrosMinutasDepositos
                                        .sucursales_minutas
                                  },
                                  model: {
                                    value:
                                      _vm.parametrosMinutasDepositos
                                        .sucursal_minuta,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.parametrosMinutasDepositos,
                                        "sucursal_minuta",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "parametrosMinutasDepositos.sucursal_minuta"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.parametrosMinutasDepositos.todas_sucursales_minutas
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { staticClass: "label-search" }, [
                                  _vm._v("Sucursal:")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    label: "descripcion",
                                    options:
                                      _vm.parametrosMinutasDepositos
                                        .sucursales_minutas
                                  },
                                  model: {
                                    value:
                                      _vm.parametrosMinutasDepositos
                                        .sucursal_minuta,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.parametrosMinutasDepositos,
                                        "sucursal_minuta",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "parametrosMinutasDepositos.sucursal_minuta"
                                  }
                                })
                              ],
                              1
                            )
                          ])
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
                                  value:
                                    _vm.parametrosMinutasDepositos
                                      .formatoMinutasDepositos,
                                  expression:
                                    "parametrosMinutasDepositos.formatoMinutasDepositos"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.parametrosMinutasDepositos,
                                    "formatoMinutasDepositos",
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
                                selected:
                                  _vm.seleccionarFechaInicialMinutasDepositos
                              },
                              model: {
                                value:
                                  _vm.parametrosMinutasDepositos
                                    .fechaInicialMinutasDepositosX,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.parametrosMinutasDepositos,
                                    "fechaInicialMinutasDepositosX",
                                    $$v
                                  )
                                },
                                expression:
                                  "parametrosMinutasDepositos.fechaInicialMinutasDepositosX"
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
                                selected:
                                  _vm.seleccionarFechaFinalMinutasDepositos
                              },
                              model: {
                                value:
                                  _vm.parametrosMinutasDepositos
                                    .fechaFinalMinutasDepositosX,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.parametrosMinutasDepositos,
                                    "fechaFinalMinutasDepositosX",
                                    $$v
                                  )
                                },
                                expression:
                                  "parametrosMinutasDepositos.fechaFinalMinutasDepositosX"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-imprimir",
                            attrs: { type: "button" },
                            on: { click: _vm.descargarReporteMinutasDepositos }
                          },
                          [_vm._v("Imprimir\n                                ")]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            : _vm._e()
        ],
        2
      ),
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
        _vm._v("Reporte Vale provisional")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Listado caja chica")])
    ])
  },
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de cheques emitidos.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte de minutas de depositos.")
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

/***/ "./resources/app/components/reportes/ReportesGeneralesTesoreria.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesTesoreria.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportesGeneralesTesoreria_vue_vue_type_template_id_b4091520___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520& */ "./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520&");
/* harmony import */ var _ReportesGeneralesTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGeneralesTesoreria.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportesGeneralesTesoreria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesGeneralesTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGeneralesTesoreria_vue_vue_type_template_id_b4091520___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportesGeneralesTesoreria_vue_vue_type_template_id_b4091520___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/ReportesGeneralesTesoreria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesTesoreria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_template_id_b4091520___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesTesoreria.vue?vue&type=template&id=b4091520&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_template_id_b4091520___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesTesoreria_vue_vue_type_template_id_b4091520___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);