(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitud-vacaciones"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_saldo_vacaciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/saldo-vacaciones */ "./resources/app/api/saldo-vacaciones.js");
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




var fecha_actual = new Date();
fecha_actual.setHours(23, 59, 59, 999);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      disabledDates: {
        to: '',
        //new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
        from: fecha_actual // Disable all dates after specific date 01/02/2020

      },
      loading: true,
      msg: 'Cargando contenido, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "dd-MM-yyyy",
      form: {
        solicitud_detalle: [],
        num_solicitud: '',
        trabajador: [],
        cantidad_dias: '',
        justificacion: '',
        f_solicitud: moment(new Date()).format("YYYY-MM-DD"),
        fecha_desde: moment(new Date()).format("YYYY-MM-DD"),
        fecha_hasta: moment(new Date()).format("YYYY-MM-DD"),
        fecha_desdex: moment(new Date()).format("YYYY-MM-DD"),
        fecha_hastax: moment(new Date()).format("YYYY-MM-DD"),
        costo_vacaciones: '',
        total_dias: '',
        saldo_dias: '',
        dias_meses: 30,
        salario_basico: 0,
        mes: 0,
        anio: 0
      },
      trabajadores: [],
      periodos: [],
      meses: [],
      fechax1: new Date(),
      fechax2: new Date(),
      fechax3: new Date(),
      fechax4: new Date(),
      fechax5: new Date(),
      btnAction: 'Guardar',
      btnActionConf: 'Confirmar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total: function calcular_total() {
      if (this.form.solicitud_detalle) {
        this.form.total_dias = this.form.solicitud_detalle.reduce(function (carry, item) {
          return carry + Number(item.cantidad_dias);
        }, 0);
        return this.form.total_dias;
      }
    },
    calcularSaldoDias: function calcularSaldoDias() {
      var self = this;
      self.form.saldo_dias = Number((self.form.trabajador_saldo_vacacion.saldo_actual - self.form.total_dias).toFixed(2));

      if (!isNaN(self.form.saldo_dias)) {
        return self.form.saldo_dias;
      } else {
        return 0;
      }
    },
    calcularCostoVacacion: function calcularCostoVacacion() {
      var self = this;
      self.form.costo_vacaciones = Number((self.form.salario_basico / 30 * self.form.total_dias).toFixed(2));

      if (!isNaN(self.form.costo_vacaciones)) {
        return self.form.costo_vacaciones;
      } else {
        return 0;
      }
    }
  },
  methods: {
    cambiarFechas: function cambiarFechas() {
      var self = this; //self.form.detalleSolicitud = [];

      self.disabledDates.to = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1);
      self.disabledDates.from = new Date(self.form.mes.ultimo_dia_mes);
      self.disabledDates.from.setTime(self.disabledDates.from.getTime() + 86400000); //self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);
      //self.fechax2 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);
      //self.fechax3 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

      self.fechax4 = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1);
      self.fechax5 = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1); //self.form.f_solicitud = moment(self.fechax1).format("YYYY-MM-DD"); //
      //self.form.fecha_desde = moment(self.fechax2).format("YYYY-MM-DD"); //
      //self.form.fecha_hasta = moment(self.fechax3).format("YYYY-MM-DD"); //

      self.form.fecha_desdex = moment(self.fechax4).format("YYYY-MM-DD"); //

      self.form.fecha_hastax = moment(self.fechax5).format("YYYY-MM-DD"); //
    },
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerMeses: function obtenerMeses() {
      var self = this;
      self.form.mes = [];
      self.meses = self.form.anio.meses_periodo;
      self.form.mes = self.meses[0];
    },
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this; //Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false

      _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitud({
        id_vacacion_solicitud: this.$route.params.id_vacacion_solicitud
      }, function (data) {
        self.form = data.solicitud;
        self.periodos = data.periodos;
        self.form.anio = self.periodos[0];
        self.meses = self.form.anio.meses_periodo; //self.form.fechax1 = new Date(data.solicitud.f_solicitud);
        //self.form.fechax2 = new Date(data.solicitud.fecha_desde);
        //self.form.fechax3 = new Date(data.solicitud.fecha_hasta);
        //self.form.fechax4 = new Date(data.solicitud.solicitud_detalle.fecha_desde);
        //self.form.fechax5 = new Date(data.solicitud.solicitud_detalle.fecha_hasta);

        self.form.salario_basico = data.solicitud.trabajador_detalles.salario_basico;
        self.loading = false;
      }, function (err) {
        //alertify.error(err.id_vacacion_solicitud[0],5);
        console.log(err);

        _this.$router.push({
          name: 'listado-vacaciones'
        });
      });
    },
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.trabajadores = data.trabajadores;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    actualizar: function actualizar(estado) {
      var _this2 = this;

      var self = this;
      self.loading = true;
      self.btnAction = 'Guardando, espere......';
      self.btnActionConf = 'Guardando, espere......';
      self.form.estado = estado;
      _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        alertify.success("Datos actualizados correctamente", 5);

        _this2.$router.push({
          name: 'listado-vacaciones'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Guardar';
        self.btnActionConf = 'Confirmar';
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.f_solicitud = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.form.fecha_desde = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect3: function onDateSelect3(date) {
      //console.log(date); //
      this.form.fecha_hasta = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect4: function onDateSelect4(date) {
      //console.log(date); //
      this.form.fecha_desdex = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect5: function onDateSelect5(date) {
      //console.log(date); //
      this.form.fecha_hastax = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.form.cantidad_dias) {
        var i = 0;
        var keyx = 0;

        if (self.form.solicitud_detalle) {
          self.form.solicitud_detalle.forEach(function (fila, key) {
            if (self.form.anio.periodo !== fila.anio || self.form.mes.mes !== fila.mes) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.solicitud_detalle.push({
            fecha_desde: this.form.fecha_desdex,
            fecha_hasta: this.form.fecha_hastax,
            cantidad_dias: this.form.cantidad_dias,
            anio: this.form.anio.periodo,
            mes: this.form.mes.mes
          });
          /*	this.form.fecha_desdex='';
                                this.form.fecha_hastax='';*/

          this.form.cantidad_dias = ''; //this.form.anio='';
          //this.form.mes='';
        } else {
          alertify.warning("El periodo y mes seleccionado no coincide con los registros anteriores", 5);
        }
      } else {
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.solicitud_detalle.length >= 1) {
        this.form.solicitud_detalle.splice(index, 1);
      } else {
        this.form.solicitud_detalle = [];
      }
    },
    desactivar: function desactivar(zonaId) {
      var _this3 = this;

      var self = this;
      self.$swal.fire({
        title: 'Esta seguro de cambiar el estado?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          //var self = this
          feriado.desactivar({
            id_feriado: zonaId
          }, function (data) {
            alertify.warning("Día feriado desactivado correctamente", 5);

            _this3.$router.push({
              name: 'listado-feriado'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(zonaId) {
      var _this4 = this;

      var self = this;
      self.$swal.fire({
        title: 'Esta seguro de cambiar el estado?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          var self = _this4;
          feriado.activar({
            id_feriado: zonaId
          }, function (data) {
            alertify.success("Nivel estudio activado correctamente", 5);

            _this4.$router.push({
              name: 'listado-feriado'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    }
  },
  mounted: function mounted() {
    this.obtenerSolicitud();
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import Pagination from '../layout/Pagination'

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 5,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: 'num_solicitud',
          value: '',
          status: 0
        }
      },
      solicitudes: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.solicitudes = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtener();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtener();
    },
    cambiarEstadoSolicitud: function cambiarEstadoSolicitud(estado, id_cliente) {
      var txtAprobar = '¿Cual es la justificación de aprobación de esta solicitud?';
      var txtRechazar = '¿Está seguro de rechazar la solicitud para este empleado?';
      var txtAnular = '¿Cual es la justificación de anulación de esta solicitud?';
      var self = this;
      self.$swal.fire({
        title: 'Confirmación de cambio de estado de solicitud de vacaciones',
        text: estado === 2 ? txtAprobar : estado === 3 ? txtAnular : txtRechazar,
        type: 'warning',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        self.loading = true;

        if (result.value) {
          //var self = this
          _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].cambiarEstadoSolicitud({
            id_vacacion_solicitud: id_cliente,
            estado: estado,
            observacion: result.value
          }, function (data) {
            alertify.warning("El estado de solicitud ha sido cambiado correctamente", 5);
            self.obtener();
          }, function (err) {
            self.loading = false;
            console.log(err);
          });
        } else {
          self.loading = false;
        }
      });
    },
    downloadItem: function downloadItem(extension, id_trabajador) {
      var _this = this;

      var self = this;

      if (!this.descargando) {
        self.loading = true;
        var url = 'rrhh/solicitud-vacaciones/reporte/' + id_trabajador;
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          extension === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'FormatoSolicitudVacaciones.pdf'; //+ extension;

          link.click();
          _this.descargando = false;
          self.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.descargando = false;
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    }
  },

  /*components: {
  	'pagination': Pagination
  },*/
  mounted: function mounted() {
    this.obtener();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
/* harmony import */ var _api_saldo_vacaciones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/saldo-vacaciones */ "./resources/app/api/saldo-vacaciones.js");
/* harmony import */ var _api_trabajadores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/trabajadores */ "./resources/app/api/trabajadores.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_cuentas_contables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/cuentas_contables */ "./resources/app/api/cuentas_contables.js");
/* harmony import */ var _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/caja-chica-comprobante */ "./resources/app/api/caja-chica-comprobante.js");
/* harmony import */ var _api_contratos_internos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/contratos_internos */ "./resources/app/api/contratos_internos.js");
/* harmony import */ var _api_departamentos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/departamentos */ "./resources/app/api/departamentos.js");
/* harmony import */ var _api_baterias_aplicaciones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/baterias_aplicaciones */ "./resources/app/api/baterias_aplicaciones.js");
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      disabledDates: {
        to: '',
        //new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
        from: fecha_actual // Disable all dates after specific date 01/02/2020

      },
      loading: false,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default.a,
      format: "dd-MM-yyyy",
      form: {
        detalleSolicitud: [],
        num_solicitud: '',
        trabajador: [],
        cantidad_dias: '',
        justificacion: '',
        f_solicitud: moment(new Date()).format("YYYY-MM-DD"),
        fecha_desde: moment(new Date()).format("YYYY-MM-DD"),
        fecha_hasta: moment(new Date()).format("YYYY-MM-DD"),
        fecha_desdex: moment(new Date()).format("YYYY-MM-DD"),
        fecha_hastax: moment(new Date()).format("YYYY-MM-DD"),
        costo_vacaciones: '',
        total_dias: '',
        saldo_dias: '',
        salario_basico: 0,
        dias_meses: 30,
        mes: 0,
        anio: 0,
        tipo_solicitud: 1,
        tipo_pago: 1,
        monto: 0,
        monto_letras: '',
        dias_a_pagar: 1
      },
      trabajadores: [],
      periodos: [],
      meses: [],
      saldos: [],
      fechax1: new Date(),
      fechax2: new Date(),
      fechax3: new Date(),
      fechax4: new Date(),
      fechax5: new Date(),
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total: function calcular_total() {
      var self = this;
      this.form.total_dias = this.form.detalleSolicitud.reduce(function (carry, item) {
        return carry + Number(item.cantidad_dias);
      }, 0);

      if (self.form.trabajador.trabajador_detalles) {
        if (self.form.tipo_solicitud == 1) {
          self.form.saldo_dias = Number((self.form.trabajador.saldo_actual - self.form.total_dias).toFixed(2));
        } else if (self.form.tipo_solicitud == 2) {
          self.form.saldo_dias = Number((self.form.trabajador.saldo_actual + self.form.total_dias).toFixed(2));
        } else if (self.form.tipo_solicitud == 3) {
          self.form.saldo_dias = Number((self.form.trabajador.saldo_actual - self.form.dias_a_pagar).toFixed(2));
        }

        self.form.costo_vacaciones = Number((self.form.trabajador.trabajador_detalles.salario_basico / self.form.dias_meses * self.form.total_dias).toFixed(2));
      } else {
        self.form.saldo_dias = 0;
        self.form.costo_vacaciones = 0;
      }

      return this.form.total_dias;
    },
    calcularSaldoDias: function calcularSaldoDias() {
      var self = this;

      if (self.form.tipo_solicitud == 1) {
        self.form.saldo_dias = Number((self.form.trabajador.saldo_actual - self.form.total_dias).toFixed(2));
      } else if (self.form.tipo_solicitud == 2) {
        self.form.saldo_dias = Number((self.form.trabajador.saldo_actual + self.form.total_dias).toFixed(2));
      } else if (self.form.tipo_solicitud == 3) {
        self.form.saldo_dias = Number((self.form.trabajador.saldo_actual - self.form.dias_a_pagar).toFixed(2));
      }

      if (!isNaN(self.form.saldo_dias)) {
        return self.form.saldo_dias;
      } else {
        return 0;
      }
    },
    calcularCostoVacacion: function calcularCostoVacacion() {
      var self = this;
      self.form.costo_vacaciones = Number((self.form.trabajador.trabajador_detalles.salario_basico / self.form.dias_meses * self.form.total_dias).toFixed(2));

      if (!isNaN(self.form.costo_vacaciones)) {
        return self.form.costo_vacaciones;
      } else {
        return 0;
      }
    },
    calcularPagoVacaciones: function calcularPagoVacaciones() {
      var self = this;
      self.form.monto = Number((self.form.trabajador.salario_ingreso_deduccion / self.form.dias_meses * self.form.dias_a_pagar).toFixed(2));

      if (!isNaN(self.form.monto)) {
        return self.form.monto;
      } else {
        return 0;
      }
    },
    monto_letras: function monto_letras() {
      if (this.form.monto > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_10__["default"].numberasstring(this.form.monto, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_letras = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    }
  },
  methods: {
    cambiarFechas: function cambiarFechas() {
      var self = this;
      self.form.detalleSolicitud = [];
      self.disabledDates.to = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1);
      self.disabledDates.from = new Date(self.form.mes.ultimo_dia_mes);
      self.disabledDates.from.setTime(self.disabledDates.from.getTime() + 86400000); //self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

      self.fechax2 = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1);
      self.fechax3 = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1);
      self.fechax4 = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1);
      self.fechax5 = new Date(self.form.anio.periodo, self.form.mes.mes - 1, 1); //self.form.f_solicitud = moment(self.fechax1).format("YYYY-MM-DD"); //

      self.form.fecha_desde = moment(self.fechax2).format("YYYY-MM-DD"); //

      self.form.fecha_hasta = moment(self.fechax3).format("YYYY-MM-DD"); //

      self.form.fecha_desdex = moment(self.fechax4).format("YYYY-MM-DD"); //

      self.form.fecha_hastax = moment(self.fechax5).format("YYYY-MM-DD"); //
    },
    obtenerSaldos: function obtenerSaldos() {
      var self = this;
      _api_saldo_vacaciones__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodas(function (data) {
        self.saldos = data;
      }, function (err) {
        console.log(err);
      });
    },
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.trabajadores = data.trabajadores;
        self.periodos = data.periodos;
        self.form.anio = self.periodos[0];
        self.meses = self.form.anio.meses_periodo;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    obtenerMeses: function obtenerMeses() {
      var self = this;
      self.form.mes = [];
      self.meses = self.form.anio.meses_periodo;
      self.form.mes = self.meses[0];
    },

    /*cargar_saldo()
    {
    	var self = this;
    	//self.limpiar_campos();
    	if (self.saldos){
    		self.form.saldo_actual = self.saldos.saldo_actual;
    	}
    },*/
    monto_letras: function monto_letras() {
      if (this.form.monto > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_10__["default"].numberasstring(this.form.monto, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_letras = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.loading = true;
      _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.loading = false;
        alertify.success("Datos registrados correctamente", 5);

        _this.$router.push({
          name: 'listado-vacaciones'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.f_solicitud = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.form.fecha_desde = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect3: function onDateSelect3(date) {
      //console.log(date); //
      this.form.fecha_hasta = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect4: function onDateSelect4(date) {
      //console.log(date); //
      this.form.fecha_desdex = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect5: function onDateSelect5(date) {
      //console.log(date); //
      this.form.fecha_hastax = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.form.cantidad_dias) {
        //validar que periodo y mes seleccionado
        var i = 0;
        var keyx = 0;

        if (self.form.detalleSolicitud) {
          self.form.detalleSolicitud.forEach(function (fila, key) {
            if (self.form.cantidad_dias === fila.cantidad_dias) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.detalleSolicitud.push({
            fecha_desdex: this.form.fecha_desdex,
            fecha_hastax: this.form.fecha_hastax,
            cantidad_dias: this.form.cantidad_dias,
            anio: this.form.anio.periodo,
            mes: this.form.mes.mes
          });
          /*	this.form.fecha_desdex='';
          	this.form.fecha_hastax='';*/

          this.form.cantidad_dias = ''; //this.form.anio='';
          //this.form.mes='';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleSolicitud.length >= 1) {
        this.form.detalleSolicitud.splice(index, 1);
      } else {
        this.form.detalleSolicitud = [];
      }
    }
  },
  mounted: function mounted() {
    this.nuevo();
    this.obtenerSaldos(); //this.cargar_saldo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-34701a8b] {\n  min-width: 120px;\n}\n.table a[data-v-34701a8b] {\n  color: #2675dc;\n}\n.table .table-number[data-v-34701a8b] {\n  width: 60px;\n}\n.table .action[data-v-34701a8b] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=template&id=55bc1c83&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=template&id=55bc1c83& ***!
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
    _c("div", { staticClass: "content-box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Tipo de solicitud")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.id_tipo,
                    expression: "form.id_tipo"
                  }
                ],
                staticClass: "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                attrs: { disabled: true },
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
                      _vm.form,
                      "id_tipo",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "1" } }, [
                  _vm._v("Solicitud de vacaciones")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [
                  _vm._v("Solicitud de devolucion de vacaciones")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Fecha solicitud")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  format: _vm.format,
                  language: _vm.es,
                  disabled: true,
                  value: new Date()
                },
                on: { selected: _vm.onDateSelect },
                model: {
                  value: _vm.form.f_solicitud,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "f_solicitud", $$v)
                  },
                  expression: "form.f_solicitud"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.fecha, function(message) {
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Fecha desde")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  format: _vm.format,
                  disabled: true,
                  language: _vm.es,
                  value: new Date()
                },
                on: { selected: _vm.onDateSelect2 },
                model: {
                  value: _vm.form.fecha_desde,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "fecha_desde", $$v)
                  },
                  expression: "form.fecha_desde"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.fecha, function(message) {
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Fecha hasta")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  format: _vm.format,
                  disabled: true,
                  language: _vm.es,
                  value: new Date()
                },
                on: { selected: _vm.onDateSelect3 },
                model: {
                  value: _vm.form.fecha_hasta,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "fecha_hasta", $$v)
                  },
                  expression: "form.fecha_hasta"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.fecha, function(message) {
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
        ])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Empleado")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "nombre_completo",
                  disabled: true,
                  options: _vm.trabajadores
                },
                model: {
                  value: _vm.form.solicitud_trabajador,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "solicitud_trabajador", $$v)
                  },
                  expression: "form.solicitud_trabajador"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.trabajador, function(message) {
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Fecha ingreso")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "fecha_ingreso",
                  disabled: true,
                  options: _vm.trabajadores
                },
                model: {
                  value: _vm.form.trabajador_detalles,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "trabajador_detalles", $$v)
                  },
                  expression: "form.trabajador_detalles"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.fecha, function(message) {
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
        ])
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6" }, [
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
                  value: _vm.form.anio,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "anio", $$v)
                  },
                  expression: "form.anio"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "label-search" }, [_vm._v("Mes:")]),
              _vm._v(" "),
              _c("v-select", {
                style: "margin-left: .5rem!important;",
                attrs: { label: "descripcion", options: _vm.meses },
                on: { input: _vm.cambiarFechas },
                model: {
                  value: _vm.form.mes,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "mes", $$v)
                  },
                  expression: "form.mes"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Días solicitados")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.cantidad_dias,
                  expression: "form.cantidad_dias"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: false, type: "number", min: "0" },
              domProps: { value: _vm.form.cantidad_dias },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "cantidad_dias", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.total_dias, function(message) {
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Saldo a la fecha")]),
            _vm._v(" "),
            _vm.form.solicitud_trabajador
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.solicitud_trabajador.saldo_actual,
                      expression: "form.solicitud_trabajador.saldo_actual"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: true, type: "number" },
                  domProps: {
                    value: _vm.form.solicitud_trabajador.saldo_actual
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.solicitud_trabajador,
                        "saldo_actual",
                        $event.target.value
                      )
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.saldo_actual, function(message) {
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Fecha desde")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  "disabled-dates": _vm.disabledDates,
                  format: _vm.format,
                  disabled: false,
                  language: _vm.es,
                  value: new Date()
                },
                on: { selected: _vm.onDateSelect4 },
                model: {
                  value: _vm.fechax4,
                  callback: function($$v) {
                    _vm.fechax4 = $$v
                  },
                  expression: "fechax4"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.fecha_desdex, function(message) {
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Fecha hasta")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  "disabled-dates": _vm.disabledDates,
                  format: _vm.format,
                  disabled: false,
                  language: _vm.es,
                  value: new Date()
                },
                on: { selected: _vm.onDateSelect5 },
                model: {
                  value: _vm.fechax5,
                  callback: function($$v) {
                    _vm.fechax5 = $$v
                  },
                  expression: "fechax5"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.fecha_hastax, function(message) {
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
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Justificación")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.justificacion,
                  expression: "form.justificacion"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: false },
              domProps: { value: _vm.form.justificacion },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "justificacion", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.justificacion, function(message) {
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
            _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "agregar",
                staticClass: "btn btn-info btn-agregar",
                on: { click: _vm.agregarDetalle }
              },
              [_vm._v("Agregar detalle")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "ul",
            { staticClass: "error-messages" },
            _vm._l(_vm.errorMessages.solicitud_detalle, function(message) {
              return _c("li", {
                key: message,
                domProps: { textContent: _vm._s(message) }
              })
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table table-bordered table-responsive" },
            [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.solicitud_detalle, function(item, index) {
                    return [
                      _c("tr", [
                        _c("td", { staticStyle: { width: "2%" } }, [
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.eliminarLinea(item, index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-trash" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(_vm.formatDate(item.fecha_desde)) +
                              "\n\t\t\t\t\t\t\t\t\t\t\t"
                          ),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(
                              _vm.errorMessages[
                                "solicitud_detalle." + index + ".fecha_desdex"
                              ],
                              function(message) {
                                return _c("li", {
                                  key: message,
                                  domProps: { textContent: _vm._s(message) }
                                })
                              }
                            ),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(_vm.formatDate(item.fecha_hasta)) +
                              "\n\t\t\t\t\t\t\t\t\t\t\t"
                          ),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(
                              _vm.errorMessages[
                                "solicitud_detalle." + index + ".fecha_hastax"
                              ],
                              function(message) {
                                return _c("li", {
                                  key: message,
                                  domProps: { textContent: _vm._s(message) }
                                })
                              }
                            ),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.cantidad_dias,
                                expression: "item.cantidad_dias"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true, type: "number", min: "0" },
                            domProps: { value: item.cantidad_dias },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  item,
                                  "cantidad_dias",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(
                              _vm.errorMessages[
                                "solicitud_detalle." + index + ".cantidad_dias"
                              ],
                              function(message) {
                                return _c("li", {
                                  key: message,
                                  domProps: { textContent: _vm._s(message) }
                                })
                              }
                            ),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.anio,
                                expression: "item.anio"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true, type: "number", min: "0" },
                            domProps: { value: item.anio },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "anio", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(
                              _vm.errorMessages[
                                "solicitud_detalle." + index + ".anio"
                              ],
                              function(message) {
                                return _c("li", {
                                  key: message,
                                  domProps: { textContent: _vm._s(message) }
                                })
                              }
                            ),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.mes,
                                expression: "item.mes"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true, type: "number", min: "0" },
                            domProps: { value: item.mes },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "mes", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(
                              _vm.errorMessages[
                                "solicitud_detalle." + index + ".mes"
                              ],
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
                      _c("tr")
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _c("td", { attrs: { colspan: "2" } }),
                  _vm._v(" "),
                  _c("td", [_vm._v("Total")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("strong", [
                      _vm._v(
                        " " +
                          _vm._s(_vm._f("formatMoney")(_vm.calcular_total, 2))
                      )
                    ])
                  ])
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Observación")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.observacion,
                  expression: "form.observacion"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: false },
              domProps: { value: _vm.form.observacion },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "observacion", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.observacion, function(message) {
                return _c("li", {
                  key: message,
                  domProps: { textContent: _vm._s(message) }
                })
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: { to: { name: "listado-vacaciones" }, tag: "button" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.form.estado === 1
                  ? [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            disabled: _vm.btnAction != "Guardar" ? true : false,
                            type: "button"
                          },
                          on: {
                            click: function($event) {
                              return _vm.actualizar(1)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.btnAction))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _vm.loading
            ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Modificar solicitud de vacaciones")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar solicitud de vacaciones ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [
        _c("strong", [_vm._v("Información del empleado solicitante")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Solicitud de vacaciones")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de solicitud")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Fecha desde")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Fecha hasta")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Cantidad de días")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Año")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Mes")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=template&id=34701a8b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=template&id=34701a8b&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Administrar solicitudes de vacaciones")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de solicitudes de vacaciones")
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
                  attrs: { to: { name: "pagina-principal-nomina" } }
                },
                [_vm._v(" Módulo nomina")]
              ),
              _vm._v("> Solicitud de vacaciones")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: { to: { name: "registrar-vacaciones" }, tag: "button" }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar solicitud\n\t\t\t\t")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-md-6 sm-text-center form-inline justify-content-end",
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  _vm.filter.page = 1
                  _vm.obtener()
                }
              }
            },
            [
              _c("div", { staticClass: "form-group check-label" }, [
                _c(
                  "label",
                  {
                    staticClass: "check-label form-control mb-1 mr-sm-1 mb-sm-0"
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.filter.search.status,
                          expression: "filter.search.status"
                        }
                      ],
                      staticClass: "form-control mb-1 mr-sm-1 mb-sm-0",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.filter.search.status)
                          ? _vm._i(_vm.filter.search.status, null) > -1
                          : _vm.filter.search.status
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.filter.search.status,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.filter.search,
                                  "status",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.filter.search,
                                  "status",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.filter.search, "status", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" Mostrar Todos")
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filter.search.field,
                      expression: "filter.search.field"
                    }
                  ],
                  staticClass: "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
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
                        _vm.filter.search,
                        "field",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "num_solicitud" } }, [
                    _vm._v("No. solicitud")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filter.search.value,
                    expression: "filter.search.value"
                  }
                ],
                staticClass: "form-control mb-1 mr-sm-1 mb-sm-0",
                attrs: { placeholder: "Buscar", type: "text" },
                domProps: { value: _vm.filter.search.value },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filter.search, "value", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  on: {
                    click: function($event) {
                      _vm.filter.page = 1
                      _vm.obtener()
                    }
                  }
                },
                [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Buscar")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.solicitudes, function(solicitud) {
                  return _c("tr", { key: solicitud.id_vacacion_solicitud }, [
                    _c("td", [_vm._v(_vm._s(solicitud.num_solicitud))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          solicitud.id_tipo === 1
                            ? "Solicitud de vacaciones"
                            : solicitud.id_tipo === 2
                            ? "Solicitud de devolución de vacaciones"
                            : solicitud.id_tipo === 3
                            ? "Solicitud de pago de vacaciones"
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          solicitud.solicitud_trabajador
                            ? solicitud.solicitud_trabajador.nombre_completo
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.formatDate(solicitud.f_solicitud)))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      solicitud.estado === 1
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Registrado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      solicitud.estado === 2
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v("Autorizado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      solicitud.estado === 0
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Anulado")
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        solicitud.estado === 1
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarEstadoSolicitud(
                                        0,
                                        solicitud.id_vacacion_solicitud
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-trash-o" }, [
                                    _vm._v(" Rechazar Solicitud")
                                  ])
                                ]
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        solicitud.estado === 1
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarEstadoSolicitud(
                                        2,
                                        solicitud.id_vacacion_solicitud
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-trash-o" }, [
                                    _vm._v(" Aprobar Solicitud")
                                  ])
                                ]
                              )
                            ]
                          : void 0
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "actualizar-vacaciones",
                                params: {
                                  id_vacacion_solicitud:
                                    solicitud.id_vacacion_solicitud
                                }
                              },
                              tag: "a"
                            }
                          },
                          [_c("i", { staticClass: "icon-pencil" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: { disabled: _vm.descargando },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.downloadItem(
                                  "pdf",
                                  solicitud.solicitud_trabajador.id_trabajador
                                )
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-eye",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.solicitudes.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "5" } },
                        [_vm._v("Sin datos")]
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("pagination", {
          attrs: {
            items: _vm.solicitudes,
            limit: _vm.filter.limit,
            limitOptions: _vm.filter.limitOptions,
            page: _vm.filter.page,
            total: _vm.total
          },
          on: { changeLimit: _vm.changeLimit, changePage: _vm.changePage }
        }),
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No. Solicitud")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo de solicitud")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trabajador")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha solicitud")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center action", attrs: { colspan: "3" } },
          [_vm._v("Opciones")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=template&id=90f9d12c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=template&id=90f9d12c& ***!
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("div", { staticClass: "col-sm-4" }, [
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
                          value: _vm.form.anio,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "anio", $$v)
                          },
                          expression: "form.anio"
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
                      _c("label", { staticClass: "label-search" }, [
                        _vm._v("Mes:")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        style: "margin-left: .5rem!important;",
                        attrs: { label: "descripcion", options: _vm.meses },
                        on: { input: _vm.cambiarFechas },
                        model: {
                          value: _vm.form.mes,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "mes", $$v)
                          },
                          expression: "form.mes"
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
                        _vm._v("Fecha solicitud")
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        attrs: {
                          "disabled-dates": _vm.disabledDates,
                          format: _vm.format,
                          language: _vm.es,
                          value: new Date()
                        },
                        on: { selected: _vm.onDateSelect },
                        model: {
                          value: _vm.fechax1,
                          callback: function($$v) {
                            _vm.fechax1 = $$v
                          },
                          expression: "fechax1"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.fecha, function(message) {
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
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Tipo de solicitud")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.tipo_solicitud,
                            expression: "form.tipo_solicitud"
                          }
                        ],
                        staticClass:
                          "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                        attrs: { disabled: false },
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
                              _vm.form,
                              "tipo_solicitud",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Solicitud de vacaciones")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Solicitud de devolucion de vacaciones")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("Solicitud de pago")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.form.tipo_solicitud >= 3
                  ? [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Tipo de pago")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.tipo_pago,
                                  expression: "form.tipo_pago"
                                }
                              ],
                              staticClass:
                                "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                              attrs: { disabled: false },
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
                                    _vm.form,
                                    "tipo_pago",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("Emisión de cheque")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Pago en nómina")
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
                              _vm._v("Empleado")
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "nombre_completo",
                                options: _vm.trabajadores
                              },
                              model: {
                                value: _vm.form.trabajador,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "trabajador", $$v)
                                },
                                expression: "form.trabajador"
                              }
                            }),
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
                          ],
                          1
                        )
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.tipo_solicitud < 3
                  ? [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Fecha desde")
                            ]),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: {
                                "disabled-dates": _vm.disabledDates,
                                format: _vm.format,
                                disabled: false,
                                language: _vm.es,
                                value: new Date()
                              },
                              on: { selected: _vm.onDateSelect2 },
                              model: {
                                value: _vm.fechax2,
                                callback: function($$v) {
                                  _vm.fechax2 = $$v
                                },
                                expression: "fechax2"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(_vm.errorMessages.fecha, function(
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
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Fecha hasta")
                            ]),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: {
                                "disabled-dates": _vm.disabledDates,
                                format: _vm.format,
                                disabled: false,
                                language: _vm.es,
                                value: new Date()
                              },
                              on: { selected: _vm.onDateSelect3 },
                              model: {
                                value: _vm.fechax3,
                                callback: function($$v) {
                                  _vm.fechax3 = $$v
                                },
                                expression: "fechax3"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(_vm.errorMessages.fecha, function(
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
                      ])
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              [
                _vm.form.tipo_solicitud < 3
                  ? [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Empleado")
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "nombre_completo",
                                options: _vm.trabajadores
                              },
                              model: {
                                value: _vm.form.trabajador,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "trabajador", $$v)
                                },
                                expression: "form.trabajador"
                              }
                            }),
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
                          ],
                          1
                        )
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Fecha ingreso")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "fecha_ingreso",
                          disabled: true,
                          options: _vm.trabajadores
                        },
                        model: {
                          value: _vm.form.trabajador.trabajador_detalles,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form.trabajador,
                              "trabajador_detalles",
                              $$v
                            )
                          },
                          expression: "form.trabajador.trabajador_detalles"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.fecha, function(message) {
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
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Area")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "descripcion",
                          disabled: true,
                          options: _vm.trabajadores
                        },
                        model: {
                          value: _vm.form.trabajador.trabajador_area,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form.trabajador,
                              "trabajador_area",
                              $$v
                            )
                          },
                          expression: "form.trabajador.trabajador_area"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.area, function(message) {
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
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Cargo")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "descripcion",
                          disabled: true,
                          options: _vm.trabajadores
                        },
                        model: {
                          value: _vm.form.trabajador.trabajador_cargo,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form.trabajador,
                              "trabajador_cargo",
                              $$v
                            )
                          },
                          expression: "form.trabajador.trabajador_cargo"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.cargo, function(message) {
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
                _vm.form.tipo_solicitud >= 3
                  ? [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(" Días a pagar")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.form.dias_a_pagar,
                                expression: "form.dias_a_pagar",
                                modifiers: { number: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              disabled: false,
                              type: "number",
                              min: "0"
                            },
                            domProps: { value: _vm.form.dias_a_pagar },
                            on: {
                              change: function($event) {
                                _vm.form.dias_a_pagar = Math.max(
                                  Math.min(
                                    Math.round(_vm.form.dias_a_pagar),
                                    Number(_vm.form.trabajador.saldo_actual)
                                  ),
                                  1
                                )
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "dias_a_pagar",
                                  _vm._n($event.target.value)
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.dias_a_pagar, function(
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(" Monto a pagar")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.calcularPagoVacaciones,
                                expression: "calcularPagoVacaciones"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true },
                            domProps: { value: _vm.calcularPagoVacaciones },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.calcularPagoVacaciones = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.monto, function(message) {
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
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(" Monto en letras")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.monto_letras,
                                expression: "monto_letras"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true },
                            domProps: { value: _vm.monto_letras },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.monto_letras = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.monto_letras, function(
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
                      ])
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _vm.form.tipo_solicitud < 3
              ? [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(" Días solicitados")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.cantidad_dias,
                              expression: "form.cantidad_dias"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            disabled: false,
                            type: "number",
                            min: "0.5",
                            step: "0.5"
                          },
                          domProps: { value: _vm.form.cantidad_dias },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "cantidad_dias",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.total_dias, function(
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
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(" Saldo a la fecha")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "saldo_actual",
                              disabled: true,
                              options: _vm.trabajadores
                            },
                            model: {
                              value: _vm.form.trabajador.saldo_actual,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form.trabajador,
                                  "saldo_actual",
                                  $$v
                                )
                              },
                              expression: "form.trabajador.saldo_actual"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.saldo_actual, function(
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
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha desde")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: {
                              "disabled-dates": _vm.disabledDates,
                              format: _vm.format,
                              disabled: false,
                              language: _vm.es,
                              value: new Date()
                            },
                            on: { selected: _vm.onDateSelect4 },
                            model: {
                              value: _vm.fechax4,
                              callback: function($$v) {
                                _vm.fechax4 = $$v
                              },
                              expression: "fechax4"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.fecha_desdex, function(
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
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha hasta")
                          ]),
                          _vm._v(" "),
                          _c("datepicker", {
                            attrs: {
                              "disabled-dates": _vm.disabledDates,
                              format: _vm.format,
                              disabled: false,
                              language: _vm.es,
                              value: new Date()
                            },
                            on: { selected: _vm.onDateSelect5 },
                            model: {
                              value: _vm.fechax5,
                              callback: function($$v) {
                                _vm.fechax5 = $$v
                              },
                              expression: "fechax5"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.fecha_hastax, function(
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
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(" Justificación")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.justificacion,
                              expression: "form.justificacion"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { disabled: false },
                          domProps: { value: _vm.form.justificacion },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "justificacion",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.justificacion, function(
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
                        _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            ref: "agregar",
                            staticClass: "btn btn-info btn-agregar",
                            on: { click: _vm.agregarDetalle }
                          },
                          [_vm._v("Agregar detalle")]
                        )
                      ])
                    ])
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.tipo_solicitud < 3
              ? [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.detalleSolicitud, function(
                          message
                        ) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "table",
                        {
                          staticClass: "table table-bordered table-responsive"
                        },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm._l(_vm.form.detalleSolicitud, function(
                                item,
                                index
                              ) {
                                return [
                                  _c("tr", [
                                    _c("td", { staticStyle: { width: "2%" } }, [
                                      _c(
                                        "button",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.eliminarLinea(
                                                item,
                                                index
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.fecha_desdex,
                                            expression: "item.fecha_desdex"
                                          }
                                        ],
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: item.fecha_desdex },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "fecha_desdex",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        { staticClass: "error-messages" },
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." +
                                              index +
                                              ".fecha_desdex"
                                          ],
                                          function(message) {
                                            return _c("li", {
                                              key: message,
                                              domProps: {
                                                textContent: _vm._s(message)
                                              }
                                            })
                                          }
                                        ),
                                        0
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.fecha_hastax,
                                            expression: "item.fecha_hastax"
                                          }
                                        ],
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: item.fecha_hastax },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "fecha_hastax",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        { staticClass: "error-messages" },
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." +
                                              index +
                                              ".fecha_hastax"
                                          ],
                                          function(message) {
                                            return _c("li", {
                                              key: message,
                                              domProps: {
                                                textContent: _vm._s(message)
                                              }
                                            })
                                          }
                                        ),
                                        0
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.cantidad_dias,
                                            expression: "item.cantidad_dias"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: true,
                                          type: "number",
                                          min: "0"
                                        },
                                        domProps: { value: item.cantidad_dias },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "cantidad_dias",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        { staticClass: "error-messages" },
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." +
                                              index +
                                              ".cantidad_dias"
                                          ],
                                          function(message) {
                                            return _c("li", {
                                              key: message,
                                              domProps: {
                                                textContent: _vm._s(message)
                                              }
                                            })
                                          }
                                        ),
                                        0
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.anio,
                                            expression: "item.anio"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: true,
                                          type: "number",
                                          min: "0"
                                        },
                                        domProps: { value: item.anio },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "anio",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        { staticClass: "error-messages" },
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." +
                                              index +
                                              ".anio"
                                          ],
                                          function(message) {
                                            return _c("li", {
                                              key: message,
                                              domProps: {
                                                textContent: _vm._s(message)
                                              }
                                            })
                                          }
                                        ),
                                        0
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.mes,
                                            expression: "item.mes"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: true,
                                          type: "number",
                                          min: "0"
                                        },
                                        domProps: { value: item.mes },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "mes",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        { staticClass: "error-messages" },
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." + index + ".mes"
                                          ],
                                          function(message) {
                                            return _c("li", {
                                              key: message,
                                              domProps: {
                                                textContent: _vm._s(message)
                                              }
                                            })
                                          }
                                        ),
                                        0
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr")
                                ]
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("tfoot", [
                            _c("tr", [
                              _c("td", { attrs: { colspan: "2" } }),
                              _vm._v(" "),
                              _c("td", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          _vm.calcular_total,
                                          2
                                        )
                                      )
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: { to: { name: "listado-vacaciones" }, tag: "button" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.loading
              ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Solicitudes de vacaciones")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar solicitud de vacaciones")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [
        _c("strong", [_vm._v("Información del empleado solicitante")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Solicitud de vacaciones")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de solicitud")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Fecha desde")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Fecha hasta")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Cantidad de días")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Año")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Mes")]),
        _vm._v(" "),
        _c("th")
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

/***/ "./resources/app/api/baterias_aplicaciones.js":
/*!****************************************************!*\
  !*** ./resources/app/api/baterias_aplicaciones.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('inventario/baterias/aplicaciones/obtener-todos').then(function (response) {
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
    axios.post('inventario/baterias/aplicaciones/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerAplicacion: function obtenerAplicacion(data, cb, errorCb) {
    axios.post('inventario/baterias/aplicaciones/obtener-aplicacion', data).then(function (response) {
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
    axios.post('inventario/baterias/aplicaciones/registrar', data).then(function (response) {
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
    axios.put('inventario/baterias/aplicaciones/actualizar', data).then(function (response) {
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

/***/ "./resources/app/api/caja-chica-comprobante.js":
/*!*****************************************************!*\
  !*** ./resources/app/api/caja-chica-comprobante.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('modulo-tesoreria/caja-chica-comprobante/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerComprobante: function obtenerComprobante(data, cb, errorCb) {
    axios.post('modulo-tesoreria/caja-chica-comprobante/obtener-comprobante', data).then(function (response) {
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
    axios.post('modulo-tesoreria/caja-chica-comprobante/nuevo', data).then(function (response) {
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
    axios.post('modulo-tesoreria/caja-chica-comprobante/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarVale: function registrarVale(data, cb, errorCb) {
    axios.post('modulo-tesoreria/vales/registrarVale', data).then(function (response) {
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
    axios.put('modulo-tesoreria/caja-chica-comprobante/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarVale: function actualizarVale(data, cb, errorCb) {
    axios.put('modulo-tesoreria/vales/actualizarVale', data).then(function (response) {
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
    axios.put('modulo-tesoreria/caja-chica-comprobante/desactivar', data).then(function (response) {
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
    axios.put('modulo-tesoreria/caja-chica-comprobante/activar', data).then(function (response) {
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

/***/ "./resources/app/api/clientes.js":
/*!***************************************!*\
  !*** ./resources/app/api/clientes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('ventas/clientes/obtener-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSolicitudesConsignacion: function obtenerSolicitudesConsignacion(data, cb, errorCb) {
    axios.post('ventas/clientes/obtener-solicitudes-consignacion', data).then(function (response) {
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
    axios.post('ventas/clientes/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCliente: function obtenerCliente(data, cb, errorCb) {
    axios.post('ventas/clientes/obtener-cliente', data).then(function (response) {
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
    axios.post('ventas/clientes/nuevo', data).then(function (response) {
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
    axios.post('ventas/clientes/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBasico: function registrarBasico(data, cb, errorCb) {
    axios.post('ventas/clientes/registrar-basico', data).then(function (response) {
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
    axios.put('ventas/clientes/actualizar', data).then(function (response) {
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
    axios.put('ventas/clientes/desactivar', data).then(function (response) {
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
    axios.put('ventas/clientes/activar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstadoConsignacion: function cambiarEstadoConsignacion(data, cb, errorCb) {
    axios.put('ventas/clientes/cambiarEstadoConsignacion', data).then(function (response) {
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

/***/ "./resources/app/api/contratos_internos.js":
/*!*************************************************!*\
  !*** ./resources/app/api/contratos_internos.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('rrhh/contrato-interno/obtener-todas').then(function (response) {
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
    axios.post('rrhh/contrato-interno/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerContratoGeneral: function obtenerContratoGeneral(data, cb, errorCb) {
    axios.post('rrhh/contrato-interno/obtener-contrato', data).then(function (response) {
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
    axios.post('rrhh/contrato-interno/registrar', data).then(function (response) {
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
    axios.put('rrhh/contrato-interno/actualizar', data).then(function (response) {
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
    axios.put('rrhh/contrato-interno/desactivar', data).then(function (response) {
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
    axios.put('rrhh/contrato-interno/activar', data).then(function (response) {
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

/***/ "./resources/app/api/cuentas_contables.js":
/*!************************************************!*\
  !*** ./resources/app/api/cuentas_contables.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodasCuentasContables: function obtenerTodasCuentasContables(cb, errorCb) {
    axios.get('contabilidad/cuentas-contables/obtener-cuentas-contables-todas').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentasNivel: function obtenerCuentasNivel(data, cb, errorCb) {
    axios.post('contabilidad/cuentas-contables/obtener-cuentas-nivel', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentasContables: function obtenerCuentasContables(data, cb, errorCb) {
    axios.post('contabilidad/cuentas-contables/obtener-cuentas-contables', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentaContable: function obtenerCuentaContable(data, cb, errorCb) {
    axios.post('contabilidad/cuentas-contables/obtener-cuenta-contable', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentaContableV: function obtenerCuentaContableV(data, cb, errorCb) {
    axios.post('contabilidad/cuentas-contables/obtener-cuenta-contable-v', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  guardarCuentaContable: function guardarCuentaContable(data, cb, errorCb) {
    axios.post('contabilidad/cuentas-contables/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarCuentaContable: function actualizarCuentaContable(data, cb, errorCb) {
    axios.put('contabilidad/cuentas-contables/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivarCuentaContable: function desactivarCuentaContable(data, cb, errorCb) {
    axios.put('contabilidad/cuentas-contables/desactivar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activarCuentaContable: function activarCuentaContable(data, cb, errorCb) {
    axios.put('contabilidad/cuentas-contables/activar', data).then(function (response) {
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

/***/ "./resources/app/api/departamentos.js":
/*!********************************************!*\
  !*** ./resources/app/api/departamentos.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('departamentos/obtener-todos').then(function (response) {
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
    axios.post('departamentos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerDepartamento: function obtenerDepartamento(data, cb, errorCb) {
    axios.post('departamentos/obtener-departamento', data).then(function (response) {
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
    axios.post('departamentos/registrar', data).then(function (response) {
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
    axios.put('departamentos/actualizar', data).then(function (response) {
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

/***/ "./resources/app/api/saldo-vacaciones.js":
/*!***********************************************!*\
  !*** ./resources/app/api/saldo-vacaciones.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('rrhh/saldo-vacacion/obtener-todas').then(function (response) {
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
    axios.post('rrhh/saldo-vacacion/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSaldo: function obtenerSaldo(data, cb, errorCb) {
    axios.post('rrhh/saldo-vacacion/obtener-saldos', data).then(function (response) {
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

/***/ "./resources/app/api/trabajadores.js":
/*!*******************************************!*\
  !*** ./resources/app/api/trabajadores.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('trabajadores/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTrabajador: function obtenerTrabajador(data, cb, errorCb) {
    axios.post('trabajadores/obtener-trabajador', data).then(function (response) {
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
    axios.post('trabajadores/registrar', data).then(function (response) {
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
    axios.put('trabajadores/actualizar', data).then(function (response) {
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
    axios.put('trabajadores/desactivar', data).then(function (response) {
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
    axios.put('trabajadores/activar', data).then(function (response) {
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

/***/ "./resources/app/assets/custom-scripts/NumberAsString.js":
/*!***************************************************************!*\
  !*** ./resources/app/assets/custom-scripts/NumberAsString.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var Unidades = function Unidades(num) {
  switch (num) {
    case 1:
      return 'UN';

    case 2:
      return 'DOS';

    case 3:
      return 'TRES';

    case 4:
      return 'CUATRO';

    case 5:
      return 'CINCO';

    case 6:
      return 'SEIS';

    case 7:
      return 'SIETE';

    case 8:
      return 'OCHO';

    case 9:
      return 'NUEVE';

    default:
      return '';
  }
};

var Decenas = function Decenas(num) {
  var decena = Math.floor(num / 10);
  var unidad = num - decena * 10;

  switch (decena) {
    case 1:
      switch (unidad) {
        case 0:
          return 'DIEZ';

        case 1:
          return 'ONCE';

        case 2:
          return 'DOCE';

        case 3:
          return 'TRECE';

        case 4:
          return 'CATORCE';

        case 5:
          return 'QUINCE';

        default:
          return 'DIECI' + Unidades(unidad);
      }

    case 2:
      switch (unidad) {
        case 0:
          return 'VEINTE';

        default:
          return 'VEINTI' + Unidades(unidad);
      }

    case 3:
      return DecenasY('TREINTA', unidad);

    case 4:
      return DecenasY('CUARENTA', unidad);

    case 5:
      return DecenasY('CINCUENTA', unidad);

    case 6:
      return DecenasY('SESENTA', unidad);

    case 7:
      return DecenasY('SETENTA', unidad);

    case 8:
      return DecenasY('OCHENTA', unidad);

    case 9:
      return DecenasY('NOVENTA', unidad);

    case 0:
      return Unidades(unidad);
  }
};

var DecenasY = function DecenasY(strSin, numUnidades) {
  return numUnidades > 0 ? strSin + ' Y ' + Unidades(numUnidades) : strSin;
};

var Centenas = function Centenas(num) {
  var centenas = Math.floor(num / 100);
  var decenas = num - centenas * 100;

  switch (centenas) {
    case 1:
      if (decenas > 0) return 'CIENTO ' + Decenas(decenas);
      return 'CIEN';

    case 2:
      return 'DOSCIENTOS ' + Decenas(decenas);

    case 3:
      return 'TRESCIENTOS ' + Decenas(decenas);

    case 4:
      return 'CUATROCIENTOS ' + Decenas(decenas);

    case 5:
      return 'QUINIENTOS ' + Decenas(decenas);

    case 6:
      return 'SEISCIENTOS ' + Decenas(decenas);

    case 7:
      return 'SETECIENTOS ' + Decenas(decenas);

    case 8:
      return 'OCHOCIENTOS ' + Decenas(decenas);

    case 9:
      return 'NOVECIENTOS ' + Decenas(decenas);

    default:
      return Decenas(decenas);
  }
};

var Seccion = function Seccion(num, divisor, strSingular, strPlural) {
  var cientos = Math.floor(num / divisor);
  var resto = num - cientos * divisor;
  var letras = '';

  if (cientos > 0) {
    letras = cientos > 1 ? Centenas(cientos) + ' ' + strPlural : strSingular;
  } else {
    letras = strSingular;
  }

  if (resto > 0) {
    letras += '';
  }

  return letras;
};

var Miles = function Miles(num) {
  var divisor = 1000;
  var cientos = Math.floor(num / divisor);
  var resto = num - cientos * divisor;
  var strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
  var strCentenas = Centenas(resto);
  return strMiles == '' || cientos === 0 ? strCentenas : strMiles + ' ' + strCentenas;
};

var Millones = function Millones(num) {
  var divisor = 1000000;
  var cientos = Math.floor(num / divisor);
  var resto = num - cientos * divisor;
  var strMillones = Seccion(num, divisor, millon(num, true), millon(num, false));
  var strMiles = Miles(resto);
  return strMillones == '' || cientos === 0 ? strMiles : strMillones + ' ' + strMiles;
};

var millon = function millon(num, singular) {
  var letraMillon = singular ? 'UN MILLON' : 'MILLONES';

  if (num % 1000000 == 0) {
    letraMillon = letraMillon + ' DE';
  }

  return letraMillon;
};

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('numberasstring', function (num) {
  var centavos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var data = {
    numero: num,
    enteros: Math.floor(num),
    centavos: centavos ? Math.round(num * 100) - Math.floor(num) * 100 : 0,
    letrasCentavos: '',
    letrasMonedaPlural: 'CORDOBAS',
    letrasMonedaSingular: 'CORDOBA',
    letrasMonedaCentavoPlural: 'CENTAVOS',
    letrasMonedaCentavoSingular: 'CENTAVO'
  };

  if (data.centavos > 0) {
    var _centavos = data.centavos == 1 ? Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular : Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;

    data.letrasCentavos = 'CON ' + _centavos;
  }

  if (data.enteros == 0) {
    return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
  }

  if (data.enteros == 1) {
    return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
  } else {
    return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  numberasstring: function numberasstring(num, monedaSingular, monedaPlural) {
    var centavos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // currency = currency || {};
    var data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: centavos ? Math.round(num * 100) - Math.floor(num) * 100 : 0,
      letrasCentavos: '',
      letrasMonedaPlural: monedaPlural,
      letrasMonedaSingular: monedaSingular,
      letrasMonedaCentavoPlural: 'CENTAVOS',
      letrasMonedaCentavoSingular: 'CENTAVO'
    }; //console.log();

    /*if (data.centavos > 0) {
      let centavos = data.centavos == 1 ? Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular : Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural ;
      data.letrasCentavos = 'CON ' + centavos;
    }*/

    if (data.centavos > 0) {
      // console.log(data.centavos);
      // let centavos = data.centavos == 1 ? Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular : Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural ;
      data.letrasCentavos = 'CON ' + data.centavos + '/100';
    }

    if (data.enteros == 0) {
      return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    }

    if (data.enteros == 1) {
      return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
    } else {
      return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    }
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

/***/ "./resources/app/components/solicitudes_vacaciones/Actualizar.vue":
/*!************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Actualizar.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_55bc1c83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=55bc1c83& */ "./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=template&id=55bc1c83&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_55bc1c83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_55bc1c83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes_vacaciones/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=template&id=55bc1c83&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=template&id=55bc1c83& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_55bc1c83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=55bc1c83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Actualizar.vue?vue&type=template&id=55bc1c83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_55bc1c83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_55bc1c83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Listado.vue":
/*!*********************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Listado.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_34701a8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=34701a8b&scoped=true& */ "./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=template&id=34701a8b&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_34701a8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true& */ "./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_34701a8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_34701a8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34701a8b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes_vacaciones/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_34701a8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=style&index=0&id=34701a8b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_34701a8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_34701a8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_34701a8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_34701a8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_34701a8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=template&id=34701a8b&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=template&id=34701a8b&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_34701a8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=34701a8b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Listado.vue?vue&type=template&id=34701a8b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_34701a8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_34701a8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Registrar.vue":
/*!***********************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Registrar.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_90f9d12c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=90f9d12c& */ "./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=template&id=90f9d12c&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_90f9d12c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_90f9d12c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes_vacaciones/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=template&id=90f9d12c&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=template&id=90f9d12c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_90f9d12c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=90f9d12c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes_vacaciones/Registrar.vue?vue&type=template&id=90f9d12c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_90f9d12c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_90f9d12c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);