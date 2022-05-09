(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activo-reportes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "dd-MM-yyyy",
      descargando: false,
      formatoActivoAltas: 'pdf',
      formatoActivoBajas: 'pdf',
      formatoActivoDepreciando: 'pdf',
      formatoActivoDepreciadoUso: 'pdf',
      formatoTrasladosActivo: 'pdf',
      //sucursalesBusquedaURL: "/sucursales/buscar",
      //	bodegasBusquedaURL: "/bodegas/buscar",
      //clientesBusquedaURL: "/ventas/clientes/buscar",
      errorMessages: [],
      //Reporta alta activos
      fechaInicialAltas: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalAltas: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialAltasX: new Date(),
      fechaFinalAltasX: new Date(),
      //Reporta bajas activos
      fechaInicialBajas: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalBajas: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialBajasX: new Date(),
      fechaFinalBajasX: new Date(),
      //Reporta activo depreciandose
      fechaInicialDepreciando: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalDepreciando: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialDepreciandoX: new Date(),
      fechaFinalDepreciandoX: new Date(),
      //Reporta activo depreciado en uso
      fechaInicialDepreciadoUso: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalDepreciadoUso: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialDepreciadoUsoX: new Date(),
      fechaFinalDepreciadoUsoX: new Date(),
      //Reporte traslados activos
      fechaInicialTraslados: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalTraslados: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialTrasladosX: new Date(),
      fechaFinalTrasladosX: new Date(),
      //Reporte adquisicion activos
      fechaInicialAdquisicion: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalAdquisicion: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialAdquisicionX: new Date(),
      fechaFinalAdquisicionX: new Date(),
      formatoAdquisicionActivo: 'pdf',
      sucursalAdquisicion: '',
      sucursalesAdquisicion: [],
      //Reporte historial de compras
      fechaInicialHistorial: moment(new Date()).format("YYYY-MM-DD"),
      fechaFinalHistorial: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialHistorialX: new Date(),
      fechaFinalHistorialX: new Date(),
      formatoHistorialActivo: 'pdf',
      sucursalHistorial: '',
      sucursalesHistorial: [],
      //Reporte vida util activos
      formatoVidaUtil: 'pdf',
      //Consolidado bienes depreciados
      formatoDepreciados: 'pdf',
      periodosDepreciados: [],
      mesesDepreciados: [],
      anioDepreciados: '',
      mesDepreciados: 0,
      mes: 0,
      anio: 0,
      //Reporte general de activos por tipo
      formatoGeneralActivos: 'pdf',
      tipos_activos: [],
      tipoActivo: 0,
      reportes: []
    };
  },
  methods: {
    descargarReporteAltasActivo: function descargarReporteAltasActivo() {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/altas-activos/reporte', {
          fechaInicio: self.fechaInicialAltas,
          fechaFinal: self.fechaFinalAltas,
          extension: self.formatoActivoAltas
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoActivoAltas === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteAltasActivos.' + self.formatoActivoAltas;
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
    descargarReporteBajasActivos: function descargarReporteBajasActivos() {
      var _this2 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/bajas-activos/reporte', {
          fechaInicial: self.fechaInicialBajas,
          fechaFinal: self.fechaFinalBajas,
          extension: self.formatoActivoBajas
        }, {
          responseType: 'blob'
        }).then(function (_ref2) {
          var data = _ref2.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoActivoBajas === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteBajasActivos.' + self.formatoActivoBajas;
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
    descargarReporteActivosDepreciandose: function descargarReporteActivosDepreciandose() {
      var _this3 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/activos-depreciandose/reporte', {
          fechaInicial: self.fechaInicialDepreciando,
          fechaFinal: self.fechaFinalDepreciando,
          extension: self.formatoActivoDepreciando
        }, {
          responseType: 'blob'
        }).then(function (_ref3) {
          var data = _ref3.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoActivoDepreciando === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteActivoDepreciandose.' + self.formatoActivoDepreciando;
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
    descargarReporteActivosDepreciadoEnUso: function descargarReporteActivosDepreciadoEnUso() {
      var _this4 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/activos-depreciado-uso/reporte', {
          fechaInicial: self.fechaInicialDepreciadoUso,
          fechaFinal: self.fechaFinalDepreciadoUso,
          extension: self.formatoActivoDepreciadoUso
        }, {
          responseType: 'blob'
        }).then(function (_ref4) {
          var data = _ref4.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoActivoDepreciadoUso === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteActivoDepreciandoEnUso.' + self.formatoActivoDepreciadoUso;
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
    descargarReporteTrasladosActivo: function descargarReporteTrasladosActivo() {
      var _this5 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/traslados-activo/reporte', {
          fechaInicio: self.fechaInicialTraslados,
          fechaFinal: self.fechaFinalTraslados,
          extension: self.formatoTrasladosActivo
        }, {
          responseType: 'blob'
        }).then(function (_ref5) {
          var data = _ref5.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoTrasladosActivo === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteTrasladosActivo.' + self.formatoTrasladosActivo;
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
    descargarReporteAdquisicionActivo: function descargarReporteAdquisicionActivo() {
      var _this6 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/valor-adquisicion/reporte', {
          fechaInicio: self.fechaInicialAdquisicion,
          fechaFinal: self.fechaFinalAdquisicion,
          extension: self.formatoAdquisicionActivo,
          id_sucursal: self.sucursalAdquisicion
        }, {
          responseType: 'blob'
        }).then(function (_ref6) {
          var data = _ref6.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoAdquisicionActivo === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteAdquisicion.' + self.formatoAdquisicionActivo;
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
    descargarReporteHistorialActivo: function descargarReporteHistorialActivo() {
      var _this7 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/historia-compra/reporte', {
          fechaInicio: self.fechaInicialHistorial,
          fechaFinal: self.fechaFinalHistorial,
          extension: self.formatoHistorialActivo,
          id_sucursal: self.sucursalHistorial
        }, {
          responseType: 'blob'
        }).then(function (_ref7) {
          var data = _ref7.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoHistorialActivo === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'HistorialComprasActivos.' + self.formatoHistorialActivo;
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
    descargarReporteConsolidadoDepreciados: function descargarReporteConsolidadoDepreciados() {
      var _this8 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/bienes-depreciados/reporte', {
          anio: self.anioDepreciados.periodo,
          mes: self.mesDepreciados.mes,
          extension: self.formatoDepreciados
        }, {
          responseType: 'blob'
        }).then(function (_ref8) {
          var data = _ref8.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoDepreciados === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteConsolidadoDepreciados.' + self.formatoDepreciados;
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
    descargarReporteVidaUtil: function descargarReporteVidaUtil() {
      var _this9 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/vida-util/reporte', {
          extension: self.formatoVidaUtil
        }, {
          responseType: 'blob'
        }).then(function (_ref9) {
          var data = _ref9.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoVidaUtil === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteVidaUtil.' + self.formatoVidaUtil;
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
    descargarReporteGeneralActivo: function descargarReporteGeneralActivo() {
      var _this10 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('activosfijos/general-activos-tipo/reporte', {
          id_tipo_activo: self.tipoActivo,
          extension: self.formatoGeneralActivos
        }, {
          responseType: 'blob'
        }).then(function (_ref10) {
          var data = _ref10.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoGeneralActivos === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteGeneralActivos.' + self.formatoGeneralActivos;
          link.click();
          _this10.loading = false;
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
    seleccionarFechaInicialAltas: function seleccionarFechaInicialAltas(date) {
      this.fechaInicialAltas = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalAltas: function seleccionarFechaFinalAltas(date) {
      this.fechaFinalAltas = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialAdquisicion: function seleccionarFechaInicialAdquisicion(date) {
      this.fechaInicialAdquisicion = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalAdquisicion: function seleccionarFechaFinalAdquisicion(date) {
      this.fechaFinalAdquisicion = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialHistorial: function seleccionarFechaInicialHistorial(date) {
      this.fechaInicialHistorial = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalHistorial: function seleccionarFechaFinalHistorial(date) {
      this.fechaFinalHistorial = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialBajas: function seleccionarFechaInicialBajas(date) {
      this.fechaInicialBajas = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalBajas: function seleccionarFechaFinalBajas(date) {
      this.fechaFinalBajas = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialDepreciando: function seleccionarFechaInicialDepreciando(date) {
      this.fechaInicialDepreciando = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalDepreciando: function seleccionarFechaFinalDepreciando(date) {
      this.fechaFinalDepreciando = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialDepreciadoUso: function seleccionarFechaInicialDepreciadoUso(date) {
      this.fechaInicialDepreciadoUso = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalDepreciadoUso: function seleccionarFechaFinalDepreciadoUso(date) {
      this.fechaFinalDepreciadoUso = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaInicialTrasladosActivo: function seleccionarFechaInicialTrasladosActivo(date) {
      this.fechaInicialTraslados = moment(date).format("YYYY-MM-DD");
    },
    seleccionarFechaFinalTrasladosActivo: function seleccionarFechaFinalTrasladosActivo(date) {
      this.fechaFinalTraslados = moment(date).format("YYYY-MM-DD");
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

        self.periodosDepreciados = data.periodos;
        self.anioDepreciados = self.periodos[0];
        self.mesesDepreciados = self.anio.meses_periodo;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    nueva: function nueva() {
      var self = this;
      self.loading = true;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_1__["default"].nuevo({}, function (data) {
        self.tipos_activos = data.tipos;
        self.sucursalesAdquisicion = data.sucursales;
        self.sucursalesHistorial = data.sucursales;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    obtenerMesesDepreciados: function obtenerMesesDepreciados() {
      var self = this;
      self.mesDepreciados = [];
      self.mesesDepreciados = self.anioDepreciados.meses_periodo;
      self.mesDepreciados = self.mesesDepreciados[0];
    }
  },
  mounted: function mounted() {
    this.nuevo();
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-imprimir {\n\tmargin-top: 33px;\n}\n.check-label2 {\n\tmargin-top: 40px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=template&id=7575da49&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=template&id=7575da49& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "text" }, [_vm._v("Reportes Activo fijo")]),
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
              attrs: { to: { name: "pagina-principal-activos" } }
            },
            [_vm._v(" Módulo activos")]
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
        _vm.reportes.indexOf(460) >= 0
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
                            on: { selected: _vm.seleccionarFechaInicialAltas },
                            model: {
                              value: _vm.fechaInicialAltasX,
                              callback: function($$v) {
                                _vm.fechaInicialAltasX = $$v
                              },
                              expression: "fechaInicialAltasX"
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
                            on: { selected: _vm.seleccionarFechaFinalAltas },
                            model: {
                              value: _vm.fechaFinalAltasX,
                              callback: function($$v) {
                                _vm.fechaFinalAltasX = $$v
                              },
                              expression: "fechaFinalAltasX"
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
                                value: _vm.formatoActivoAltas,
                                expression: "formatoActivoAltas"
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
                                _vm.formatoActivoAltas = $event.target.multiple
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
                          on: { click: _vm.descargarReporteAltasActivo }
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
        _vm.reportes.indexOf(461) >= 0
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
                            on: { selected: _vm.seleccionarFechaInicialBajas },
                            model: {
                              value: _vm.fechaInicialBajasX,
                              callback: function($$v) {
                                _vm.fechaInicialBajasX = $$v
                              },
                              expression: "fechaInicialBajasX"
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
                            on: { selected: _vm.seleccionarFechaFinalBajas },
                            model: {
                              value: _vm.fechaFinalBajasX,
                              callback: function($$v) {
                                _vm.fechaFinalBajasX = $$v
                              },
                              expression: "fechaFinalBajasX"
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
                                value: _vm.formatoActivoBajas,
                                expression: "formatoActivoBajas"
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
                                _vm.formatoActivoBajas = $event.target.multiple
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
                          on: { click: _vm.descargarReporteBajasActivos }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(462) >= 0
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
                              selected: _vm.seleccionarFechaInicialDepreciando
                            },
                            model: {
                              value: _vm.fechaInicialDepreciandoX,
                              callback: function($$v) {
                                _vm.fechaInicialDepreciandoX = $$v
                              },
                              expression: "fechaInicialDepreciandoX"
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
                              selected: _vm.seleccionarFechaFinalDepreciando
                            },
                            model: {
                              value: _vm.fechaFinalDepreciandoX,
                              callback: function($$v) {
                                _vm.fechaFinalDepreciandoX = $$v
                              },
                              expression: "fechaFinalDepreciandoX"
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
                                value: _vm.formatoActivoDepreciando,
                                expression: "formatoActivoDepreciando"
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
                                _vm.formatoActivoDepreciando = $event.target
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
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-imprimir",
                        attrs: { type: "button" },
                        on: { click: _vm.descargarReporteActivosDepreciandose }
                      },
                      [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t")]
                    )
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(463) >= 0
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
                              selected: _vm.seleccionarFechaInicialDepreciadoUso
                            },
                            model: {
                              value: _vm.fechaInicialDepreciadoUsoX,
                              callback: function($$v) {
                                _vm.fechaInicialDepreciadoUsoX = $$v
                              },
                              expression: "fechaInicialDepreciadoUsoX"
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
                              selected: _vm.seleccionarFechaFinalDepreciadoUso
                            },
                            model: {
                              value: _vm.fechaFinalDepreciadoUsoX,
                              callback: function($$v) {
                                _vm.fechaFinalDepreciadoUsoX = $$v
                              },
                              expression: "fechaFinalDepreciadoUsoX"
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
                                value: _vm.formatoActivoDepreciadoUso,
                                expression: "formatoActivoDepreciadoUso"
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
                                _vm.formatoActivoDepreciadoUso = $event.target
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
                          on: {
                            click: _vm.descargarReporteActivosDepreciadoEnUso
                          }
                        },
                        [_vm._v("Imprimir\n\t\t\t\t\t\t\t\t\t")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.reportes.indexOf(464) >= 0
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
                            on: {
                              selected:
                                _vm.seleccionarFechaInicialTrasladosActivo
                            },
                            model: {
                              value: _vm.fechaInicialTrasladosX,
                              callback: function($$v) {
                                _vm.fechaInicialTrasladosX = $$v
                              },
                              expression: "fechaInicialTrasladosX"
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
                              selected: _vm.seleccionarFechaFinalTrasladosActivo
                            },
                            model: {
                              value: _vm.fechaFinalTrasladosX,
                              callback: function($$v) {
                                _vm.fechaFinalTrasladosX = $$v
                              },
                              expression: "fechaFinalTrasladosX"
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
                                value: _vm.formatoTrasladosActivo,
                                expression: "formatoTrasladosActivo"
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
                                _vm.formatoTrasladosActivo = $event.target
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
                          on: { click: _vm.descargarReporteTrasladosActivo }
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
        _vm.reportes.indexOf(465) >= 0
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
                              options: _vm.periodosDepreciados
                            },
                            on: { input: _vm.obtenerMesesDepreciados },
                            model: {
                              value: _vm.anioDepreciados,
                              callback: function($$v) {
                                _vm.anioDepreciados = $$v
                              },
                              expression: "anioDepreciados"
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
                              options: _vm.mesesDepreciados
                            },
                            model: {
                              value: _vm.mesDepreciados,
                              callback: function($$v) {
                                _vm.mesDepreciados = $$v
                              },
                              expression: "mesDepreciados"
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
                                value: _vm.formatoDepreciados,
                                expression: "formatoDepreciados"
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
                                _vm.formatoDepreciados = $event.target.multiple
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
                            click: _vm.descargarReporteConsolidadoDepreciados
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
        _vm.reportes.indexOf(466) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(" Sucursal")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.sucursalAdquisicion,
                                expression: "sucursalAdquisicion"
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
                                _vm.sucursalAdquisicion = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { key: 0, domProps: { value: 0 } }, [
                              _vm._v(_vm._s("Todas las sucursales") + " ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.sucursalesAdquisicion, function(
                              sucursalDepreciado
                            ) {
                              return _c(
                                "option",
                                {
                                  key: sucursalDepreciado.descripcion,
                                  domProps: {
                                    value: sucursalDepreciado.id_sucursal
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(sucursalDepreciado.descripcion) +
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
                          _vm._l(
                            _vm.errorMessages.sucursalAdquisicion,
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
                            _vm._v("Fecha inicial")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: { format: _vm.format, language: _vm.es },
                            on: {
                              selected: _vm.seleccionarFechaInicialAdquisicion
                            },
                            model: {
                              value: _vm.fechaInicialAdquisicionX,
                              callback: function($$v) {
                                _vm.fechaInicialAdquisicionX = $$v
                              },
                              expression: "fechaInicialAdquisicionX"
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
                              selected: _vm.seleccionarFechaFinalAdquisicion
                            },
                            model: {
                              value: _vm.fechaFinalAdquisicionX,
                              callback: function($$v) {
                                _vm.fechaFinalAdquisicionX = $$v
                              },
                              expression: "fechaFinalAdquisicionX"
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
                                value: _vm.formatoAdquisicionActivo,
                                expression: "formatoAdquisicionActivo"
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
                                _vm.formatoAdquisicionActivo = $event.target
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
                          on: { click: _vm.descargarReporteAdquisicionActivo }
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
        _vm.reportes.indexOf(467) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(" Sucursal")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.sucursalHistorial,
                                expression: "sucursalHistorial"
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
                                _vm.sucursalHistorial = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { key: 0, domProps: { value: 0 } }, [
                              _vm._v(_vm._s("Todas las sucursales") + " ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.sucursalesHistorial, function(
                              sucursalHistorial
                            ) {
                              return _c(
                                "option",
                                {
                                  key: sucursalHistorial.descripcion,
                                  domProps: {
                                    value: sucursalHistorial.id_sucursal
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(sucursalHistorial.descripcion) +
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
                          _vm._l(_vm.errorMessages.sucursalHistorial, function(
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
                              selected: _vm.seleccionarFechaInicialHistorial
                            },
                            model: {
                              value: _vm.fechaInicialHistorialX,
                              callback: function($$v) {
                                _vm.fechaInicialHistorialX = $$v
                              },
                              expression: "fechaInicialHistorialX"
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
                              selected: _vm.seleccionarFechaFinalHistorial
                            },
                            model: {
                              value: _vm.fechaFinalHistorialX,
                              callback: function($$v) {
                                _vm.fechaFinalHistorialX = $$v
                              },
                              expression: "fechaFinalHistorialX"
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
                                value: _vm.formatoHistorialActivo,
                                expression: "formatoHistorialActivo"
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
                                _vm.formatoHistorialActivo = $event.target
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
                          on: { click: _vm.descargarReporteHistorialActivo }
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
        _vm.reportes.indexOf(468) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(8),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
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
                                value: _vm.formatoVidaUtil,
                                expression: "formatoVidaUtil"
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
                                _vm.formatoVidaUtil = $event.target.multiple
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
                          on: { click: _vm.descargarReporteVidaUtil }
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
        _vm.reportes.indexOf(472) >= 0
          ? [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "content-box" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(" Tipos de activos")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.tipoActivo,
                                expression: "tipoActivo"
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
                                _vm.tipoActivo = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { key: 0, domProps: { value: 0 } }, [
                              _vm._v(_vm._s("Todos los tipos") + " ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.tipos_activos, function(tipoActivo) {
                              return _c(
                                "option",
                                {
                                  key: tipoActivo.descripcion,
                                  domProps: { value: tipoActivo.id_tipo_activo }
                                },
                                [
                                  _vm._v(
                                    _vm._s(tipoActivo.descripcion) +
                                      "\n                                        "
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
                          _vm._l(_vm.errorMessages.tipoActivo, function(
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
                                value: _vm.formatoGeneralActivos,
                                expression: "formatoGeneralActivos"
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
                                _vm.formatoGeneralActivos = $event.target
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
                          on: { click: _vm.descargarReporteGeneralActivo }
                        },
                        [_vm._v("Imprimir\n                                ")]
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Altas de activo")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Bajas de activo")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Activos depreciados")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Activo depreciado en uso")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Traslados de activos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Consolidado de bienes depreciados")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Valor de adquisición de activos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Historial de compra de activos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Vida útil de activos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte general de activos")
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

/***/ "./resources/app/api/activos_fijos.js":
/*!********************************************!*\
  !*** ./resources/app/api/activos_fijos.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('activosfijos/activos/nuevo', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarUbicacionActivo: function buscarUbicacionActivo(data, cb, errorCb) {
    axios.post('activosfijos/obtener-ubicacion-activo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevoCierre: function nuevoCierre(data, cb, errorCb) {
    axios.post('activosfijos/activos/nuevo-cierre', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtener: function obtener(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSolicitudAutorizacion: function obtenerSolicitudAutorizacion(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-solicitud-autorizacion', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCierres: function obtenerCierres(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-cierres', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerActivosTrabajador: function obtenerActivosTrabajador(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-por-trabajador', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerActivosSucursal: function obtenerActivosSucursal(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-por-sucursal', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerActivoFijo: function obtenerActivoFijo(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-activo-fijo', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTraslados: function obtenerTraslados(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-traslados', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.post('activosfijos/activos/registrar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizar: function actualizar(data, cb, errorCb) {
    axios.put('activosfijos/activos/actualizar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  reasignar: function reasignar(data, cb, errorCb) {
    axios.put('activosfijos/activos/reasignar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  revaluar: function revaluar(data, cb, errorCb) {
    axios.put('activosfijos/activos/revaluar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  generarCierre: function generarCierre(data, cb, errorCb) {
    axios.put('activosfijos/activos/generar-cierre', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  reasignarLote: function reasignarLote(data, cb, errorCb) {
    axios.put('activosfijos/activos/reasignar-lote', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('activosfijos/activos/desactivar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activar: function activar(data, cb, errorCb) {
    axios.put('activosfijos/activos/activar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstadoSolicitudBaja: function cambiarEstadoSolicitudBaja(data, cb, errorCb) {
    axios.put('activosfijos/activos/cambiar-estado', data).then(function (response) {
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

/***/ "./resources/app/components/reportes/ReportesGeneralesActivos.vue":
/*!************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesActivos.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportesGeneralesActivos_vue_vue_type_template_id_7575da49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGeneralesActivos.vue?vue&type=template&id=7575da49& */ "./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=template&id=7575da49&");
/* harmony import */ var _ReportesGeneralesActivos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGeneralesActivos.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportesGeneralesActivos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesGeneralesActivos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGeneralesActivos_vue_vue_type_template_id_7575da49___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportesGeneralesActivos_vue_vue_type_template_id_7575da49___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/ReportesGeneralesActivos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesActivos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=template&id=7575da49&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=template&id=7575da49& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_template_id_7575da49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesActivos.vue?vue&type=template&id=7575da49& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesActivos.vue?vue&type=template&id=7575da49&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_template_id_7575da49___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesActivos_vue_vue_type_template_id_7575da49___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);