(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activo-fijo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
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
      loading: true,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mostrar_detalles_vehiculo: false,
      sucursales: [],
      centros_costos: [],
      areas: [],
      grupos: [],
      trabajadores: [],
      tipos: [],
      colores: [],
      propietarios: [],
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      form: {
        descripcion: '',
        codigo: '',
        activo_area: '',
        activo_trabajador: '',
        activo_propietario: '',
        activo_sucursal: '',
        activo_centro: '',
        marca: '',
        modelo: '',
        observacion: '',
        condicion: '',
        serie: '',
        fecha_adquisicion: moment(new Date()).format("YYYY-MM-DD"),
        valor_adquisicion: 0,
        depreciacion_mensual: 0,
        depreciacion_acumulada: 0,
        valor_libro: 0,
        id_fondo: 1,
        es_capitalizable: false,
        placa: '',
        chasis: '',
        numero_motor: '',
        id_tipo_combustible: 1,
        cilindro: 1,
        anio: 2000,
        capacidad_carga: 0,
        pasajeros: 1,
        activo_grupo: '',
        activo_tipo_activo: '',
        meses_depreciarse: 0,
        mes_depreciado: 0,
        anio_depreciado: 0,
        activo_color: '',
        revaluo: 0,
        valor_revaluo: 0,
        vida_util_politica: 0,
        depreciacion_mensual_politica: 0,
        depreciacion_acumulada_politica: 0,
        valor_libro_politica: 0,
        mes_depreciado_politica: 0,
        porcentaje_deterioro: 0,
        valor_deterioro_anual: 0,
        valor_deterioro_acumulado: 0,
        valor_activo_revaluado: 0,
        meses_vida_revaluacion: 0,
        depreciacion_mensual_revaluada: 0,
        depreciacion_acumulada_revaluada: 0,
        valor_libro_revaluado: 0
      },
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    cargarGrupos: function cargarGrupos() {
      var self = this; //console.log(self.form.activo_tipo_activo)

      if (self.form.activo_tipo_activo.grupos_activos.length) {
        self.grupos = [];
        self.form.activo_grupo = '';
        self.grupos = self.form.activo_tipo_activo.grupos_activos;
      }
    },
    obtenerActivoFijo: function obtenerActivoFijo() {
      var _this = this;

      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerActivoFijo({
        id_activo: self.$route.params.id_activo
      }, function (data) {
        self.form = data.activo;
        self.sucursales = data.sucursales;
        self.centros_costos = data.centros;
        self.areas = data.areas;
        self.trabajadores = data.trabajadores;
        self.tipos = data.tipos;
        self.mostrar_detalles_vehiculo = self.form.activo_detalle_vehiculo; //self.grupos = data.grupos;

        self.colores = data.colores;
        self.propietarios = data.propietarios;
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_activo[0], 5);

        _this.$router.push({
          name: 'listado-activos-fijos'
        });
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_adquisicion = moment(date).format("YYYY-MM-DD"); //
    },
    actualizar: function actualizar() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Guardando, espere......';
      self.$swal.fire({
        title: 'Esta seguro de registrar el traslado del activo?',
        text: "Se registrarán los cambios",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          self.loading = true;
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
            alertify.success("Activo Fijo actualizada correctamente", 5);

            _this2.$router.push({
              name: 'listado-activos-fijos'
            });
          }, function (err) {
            self.loading = false;
            self.errorMessages = err;
            self.btnAction = 'Registrar';
          });
        } else {
          self.loading = false;
          self.btnAction = "Registrar";
        }
      });
    },
    desactivar: function desactivar(activoID) {
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
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_activo: activoID
          }, function (data) {
            alertify.warning("Activo Fijo desactivada correctamente", 5);

            _this3.$router.push({
              name: 'listado-activos-fijos'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(activoID) {
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
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_activo: activoID
          }, function (data) {
            alertify.success("Activo Fijo activada correctamente", 5);

            _this4.$router.push({
              name: 'listado-activos-fijos'
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
  computed: {
    calcularDepreciacion: function calcularDepreciacion() {
      var self = this;
      self.form.depreciacion_mensual = Number((self.form.valor_adquisicion / self.form.meses_depreciarse).toFixed(2));

      if (!isNaN(self.form.depreciacion_mensual)) {
        return self.form.depreciacion_mensual;
      } else {
        return 0;
      }
    },
    calcularDepreciacionPolitica: function calcularDepreciacionPolitica() {
      var self = this;
      self.form.depreciacion_mensual_politica = Number((self.form.valor_adquisicion / self.form.vida_util_politica).toFixed(2));

      if (!isNaN(self.form.depreciacion_mensual_politica)) {
        return self.form.depreciacion_mensual_politica;
      } else {
        return 0;
      }
    },
    calcularDepreciacionAcumulada: function calcularDepreciacionAcumulada() {
      var self = this;
      self.form.depreciacion_acumulada = Number((self.form.depreciacion_mensual * self.form.mes_depreciado).toFixed(2));

      if (!isNaN(self.form.depreciacion_acumulada)) {
        return self.form.depreciacion_acumulada;
      } else {
        return 0;
      }
    },
    calcularDepreciacionAcumuladaPolitica: function calcularDepreciacionAcumuladaPolitica() {
      var self = this;
      self.form.depreciacion_acumulada_politica = Number((self.form.depreciacion_mensual_politica * self.form.mes_depreciado_politica).toFixed(2));

      if (!isNaN(self.form.depreciacion_acumulada_politica)) {
        return self.form.depreciacion_acumulada_politica;
      } else {
        return 0;
      }
    },
    calcularValorEnLibro: function calcularValorEnLibro() {
      var self = this;
      self.form.valor_libro = Number((self.form.valor_adquisicion - self.form.depreciacion_acumulada).toFixed(2));

      if (!isNaN(self.form.valor_libro) && self.form.valor_libro > 0) {
        return self.form.valor_libro;
      } else {
        self.form.valor_libro = 0;
        return self.form.valor_libro;
      }
    },
    calcularValorEnLibroPolitica: function calcularValorEnLibroPolitica() {
      var self = this;
      self.form.valor_libro_politica = Number((self.form.valor_adquisicion - self.form.depreciacion_acumulada_politica).toFixed(2));

      if (!isNaN(self.form.valor_libro_politica) && self.form.valor_libro_politica > 0) {
        return self.form.valor_libro_politica;
      } else {
        self.form.valor_libro_politica = 0;
        return self.form.valor_libro_politica;
      }
    },
    calcularRevaluacion: function calcularRevaluacion() {
      var self = this; // self.form.valor_revaluo=202250;

      self.form.revaluo = Number((self.form.valor_revaluo - self.form.valor_libro).toFixed(2));

      if (!isNaN(self.form.revaluo) && self.form.revaluo > 0) {
        return self.form.revaluo;
      } else {
        self.form.revaluo = 0;
        return self.form.revaluo;
      }
    }
  },
  mounted: function mounted() {
    this.obtenerActivoFijo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
          field: 'descripcion',
          value: '',
          status: 0
        }
      },
      activos_fijos: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitudAutorizacion(self.filter, function (data) {
        self.activos_fijos = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
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
    cambiarEstadoSolicitudBaja: function cambiarEstadoSolicitudBaja(estado, id_activo) {
      var txtAprobar = 'Está seguro de autorizar la baja de este activo?';
      var txtRechazar = 'Está seguro de rechazar la baja de este activo?'; //var txtAnular ='Está seguro de revocar el permiso de consignación para este cliente?';

      var self = this;
      self.$swal.fire({
        title: 'Confirmación de cambio del estado de la solicitud de baja',
        text: estado === 0 ? txtAprobar : estado === 1 ? txtRechazar : txtRechazar,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        self.loading = true;

        if (result.value) {
          //var self = this
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].cambiarEstadoSolicitudBaja({
            id_activo: id_activo,
            estado: estado
          }, function (data) {
            alertify.warning("El estado de la solicitud de baja ha cambiado correctamente", 5);
            self.obtener();
          }, function (err) {
            self.loading = false;
            console.log(err);
          });
        } else {
          self.loading = false;
        }
      });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mostrar_detalles_vehiculo: false,
      areas: [],
      area_origen: [],
      area_destino: [],
      trabajadores: [],
      trabajador_origen: [],
      trabajadores_destino: [],
      trabajador_destino: [],
      activos_trabajador: [],
      tipo_traslado: '',
      formatoActa: 'pdf',
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      btnAction: 'Generar',
      errorMessages: []
    };
  },
  methods: {
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.activos_trabajador.length >= 1) {
        this.activos_trabajador.splice(index, 1);
      } else {
        this.activos_trabajador = [];
      }
    },
    obtenerTrabajadores: function obtenerTrabajadores() {
      var self = this;
      self.trabajadores_destino = [];
      self.trabajador_destino = [];

      if (self.area_destino) {
        self.trabajadores_destino = self.area_destino.trabajadores_area;
      }
    },
    obtenerTrabajadoresOrigen: function obtenerTrabajadoresOrigen() {
      var self = this;
      self.activos_trabajador = [];
      self.trabajadores = [];
      self.trabajador_origen = [];

      if (self.area_origen) {
        self.trabajadores = self.area_origen.trabajadores_area;
      }
    },
    obtenerActivosTrabajador: function obtenerActivosTrabajador() {
      var _this = this;

      var self = this;
      self.loading = true;
      self.activos_trabajador = [];

      if (self.trabajador_origen) {
        _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerActivosTrabajador({
          id_trabajador: self.trabajador_origen.id_trabajador
        }, function (data) {
          self.activos_trabajador = data;
          self.loading = false;
        }, function (err) {
          alertify.error(err.id_trabajador[0], 5);

          _this.$router.push({
            name: 'listado-activos-fijos'
          });
        });
      }
    },
    reasignar: function reasignar() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Guardando, espere......';

      if (self.activos_trabajador.length) {
        if (self.trabajador_origen.id_trabajador !== self.trabajador_destino.id_trabajador) {
          self.$swal.fire({
            title: 'Esta seguro de trasladar todos los activos al trabajador especificado?',
            text: "Se registrarán los cambios",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              self.loading = true;
              _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].reasignarLote({
                activos: self.activos_trabajador,
                activo_trabajador_destino: self.trabajador_destino
              }, function (data) {
                alertify.success("Activo Fijo actualizado correctamente", 5);

                _this2.$router.push({
                  name: 'listado-activos-fijos'
                });
              }, function (err) {
                self.loading = false;
                self.errorMessages = err;
                self.btnAction = 'Guardar';
              });
            } else {
              self.loading = false;
              self.btnAction = "Guardar";
            }
          });
        } else {
          alertify.warning("Se deben seleccionar trabajadores distintos", 5);
          self.loading = false;
          self.btnAction = 'Guardar';
        }
      } else {
        alertify.warning("El detalle de activos debe contener al menos un elemento", 5);
        self.loading = false;
        self.btnAction = 'Guardar';
      }
    },
    descargarActaEntrega: function descargarActaEntrega() {
      var _this3 = this;

      if (this.trabajador_origen.id_trabajador) {
        if (!this.loading) {
          var self = this;
          self.loading = true;
          alertify.success("Descargando datos, espere un momento.....", 5);
          axios.post('activosfijos/acta-entrega/reporte', {
            id_trabajador: self.trabajador_origen.id_trabajador,
            extension: self.formatoActa
          }, {
            responseType: 'blob'
          }).then(function (_ref) {
            var data = _ref.data;
            var blob = new Blob([data], {
              type: 'application/pdf'
            });
            self.formatoActa === 'xls' ? blob = new Blob([data], {
              type: 'application/octet-stream'
            }) : blob = new Blob([data], {
              type: 'application/pdf'
            });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'ActaEntregaActivo.' + self.formatoActa;
            link.click();
            _this3.loading = false;
          })["catch"](function (error) {
            alertify.error("Error Descargando archivo.....", 5);
            self.loading = false;
          });
        } else {
          alertify.warning("Espere a que se complete la descarga anterior", 5);
        }
      } else {
        alertify.warning("Por favor seleccione un trabajador.", 5);
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.areas = data.areas;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mostrar_detalles_vehiculo: false,
      sucursales: [],
      sucursal: [],
      activos_sucursal: [],
      periodos: [],
      meses: [],
      mes: 0,
      anio: 0,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    calcularDepreciacionAcumulada: function calcularDepreciacionAcumulada(activo_fijo) {
      activo_fijo.depreciacion_acumulada_actual = 0;

      if (Number(activo_fijo.mes_depreciado_actual) <= Number(activo_fijo.meses_depreciarse)) {
        activo_fijo.depreciacion_acumulada_actual = Number((Number(activo_fijo.mes_depreciado_actual) * Number(activo_fijo.depreciacion_mensual)).toFixed(2));
        return activo_fijo.depreciacion_acumulada_actual;
      } else {
        return activo_fijo.depreciacion_acumulada_actual;
      }
    },
    calcularValorLibros: function calcularValorLibros(activo_fijo) {
      activo_fijo.depreciacion_valor_libros_actual = 0;

      if (Number(activo_fijo.mes_depreciado_actual) <= Number(activo_fijo.meses_depreciarse)) {
        activo_fijo.depreciacion_valor_libros_actual = Number(activo_fijo.valor_adquisicion) - Number(activo_fijo.depreciacion_acumulada_actual);
        return activo_fijo.depreciacion_valor_libros_actual;
      } else {
        return activo_fijo.depreciacion_valor_libros_actual;
      }
    },
    obtenerTrabajadores: function obtenerTrabajadores() {
      var self = this;
      self.trabajadores_destino = [];
      self.trabajador_destino = [];

      if (self.area_destino) {
        self.trabajadores_destino = self.area_destino.trabajadores_area;
      }
    },
    obtenerActivosSucursal: function obtenerActivosSucursal() {
      var _this = this;

      var self = this;
      self.loading = true;
      self.activos_sucursal = [];

      if (self.sucursal && self.mes) {
        _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerActivosSucursal({
          id_sucursal: self.sucursal.id_sucursal,
          fecha_final: self.mes.ultimo_dia_mes
        }, function (data) {
          self.activos_sucursal = data;
          self.loading = false;
        }, function (err) {
          alertify.error(err.id_sucursal[0], 5);

          _this.$router.push({
            name: 'listado-cierres-activo-fijo'
          });
        });
      } else {
        self.loading = false;
      }
    },
    obtenerMeses: function obtenerMeses() {
      var self = this;
      self.mes = [];
      self.meses = self.anio.meses_periodo;
      self.mes = self.meses[0];
    },
    generarCierre: function generarCierre() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Guardando, espere......';

      if (self.activos_sucursal.length) {
        if (self.sucursal.id_sucursal && self.mes.id_periodo_mes) {
          self.$swal.fire({
            title: 'Esta seguro de realizar el cierre de todos los activos de esta sucursal?',
            text: "Se registrarán los cambios",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              self.loading = true;
              _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].generarCierre({
                activos: self.activos_sucursal,
                id_sucursal: self.sucursal.id_sucursal,
                id_periodo_mes: self.mes.id_periodo_mes,
                mes: self.mes.mes,
                anio: self.anio.periodo
              }, function (data) {
                alertify.success("Activo Fijo actualizado correctamente", 5);

                _this2.$router.push({
                  name: 'listado-cierres-activo-fijo'
                });
              }, function (err) {
                self.loading = false;
                self.errorMessages = err;
                self.btnAction = 'Guardar';
              });
            } else {
              self.loading = false;
              self.btnAction = "Guardar";
            }
          });
        } else {
          alertify.warning("Por favor revise si ha seleccionado una sucursal y un mes válido", 5);
          self.loading = false;
          self.btnAction = 'Guardar';
        }
      } else {
        alertify.warning("El detalle de activos debe contener al menos un elemento", 5);
        self.loading = false;
        self.btnAction = 'Guardar';
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].nuevoCierre({}, function (data) {
        self.sucursales = data.sucursales;
        self.sucursal = self.sucursales[0];
        self.periodos = data.periodos;
        self.anio = self.periodos[0];
        self.meses = self.anio.meses_periodo;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Listado.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_solicitud_vacaciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/solicitud-vacaciones */ "./resources/app/api/solicitud-vacaciones.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
          field: 'descripcion',
          value: '',
          status: 0
        }
      },
      activos_fijos: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.activos_fijos = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
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
    cambiarEstadoSolicitud: function cambiarEstadoSolicitud(estado, id_activo) {
      var txtAprobar = 'Justificación:';
      var txtRechazar = '¿Está seguro de rechazar la solicitud para este empleado?';
      var txtAnular = '¿Cual es la justificación de anulación de esta solicitud?';
      var self = this;
      self.$swal.fire({
        title: '¿Está seguro de solicitar la baja de este activo?',
        text: estado === 99 ? txtAprobar : estado === 3 ? txtAnular : txtRechazar,
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
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_activo: id_activo,
            estado: estado,
            justificacion: result.value
          }, function (data) {
            alertify.warning("La solicitud de baja ha sido creada correctamente", 5);
            self.obtener();
          }, function (err) {
            self.loading = false;
            console.log(err);
          });
        } else {
          self.loading = false;
        }
      });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import Pagination from "../layout/Pagination";

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '',
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [20, 40, 60, 80],
        search: {
          field: "codigo_entrada",
          value: ""
        }
      },
      cierres: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarDepreciaciones: function mostrarDepreciaciones(key) {
      if (this.cierres[key].mostrar) {
        this.cierres[key].mostrar = 0;
      } else {
        this.cierres[key].mostrar = 1;
      }
    },
    obtenerCierres: function obtenerCierres() {
      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerCierres(self.filter, function (data) {
        data.rows.forEach(function (cierres, key) {
          data.rows[key].mostrar = 0;
        });
        self.cierres = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerCierres();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerCierres();
    }
  },

  /*components: {
          pagination: Pagination
        },*/
  mounted: function mounted() {
    this.obtenerCierres();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
          field: 'descripcion',
          value: '',
          status: 0
        }
      },
      traslados_activos: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTraslados(self.filter, function (data) {
        self.traslados_activos = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtener();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtener();
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      activo_busqueda: "",
      codigo: "",
      descripcion_activo: "",
      marca_activo: "",
      serie_activo: "",
      area_activo: "",
      estado: "",
      responsable_activo: "",
      errorMessages: []
    };
  },
  methods: {
    buscarActivo: function buscarActivo() {
      var self = this;
      self.loading = true; //self.$refs.precio_unitario.focus();

      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].buscarUbicacionActivo({
        codigo_activo: self.activo_busqueda
      }, function (data) {
        if (data !== null) {
          self.$refs.activo.focus();
          self.activo_busqueda = ''; //self.movimientos = data;

          self.codigo = data.codigo;
          self.descripcion_activo = data.descripcion;
          self.marca_activo = data.marca;
          self.serie_activo = data.serie;
          self.area_activo = data.activo_area.descripcion;
          self.responsable_activo = data.activo_trabajador.nombre_completo;
          self.estado = data.estado;
        } else {
          alertify.warning("No se encuentra este activo.", 5);
          self.$refs.activo.focus();
          self.activo_busqueda = '';
          self.codigo = '';
          self.descripcion_activo = '';
          self.marca_activo = '';
          self.serie_activo = '';
          self.area_activo = '';
          self.responsable_activo = '';
          self.estado = '';
        }

        self.errorMessages = [];
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.errorMessages = err;
        self.activo_busqueda = '';
        self.codigo = '';
        self.descripcion_activo = '';
        self.marca_activo = '';
        self.serie_activo = '';
        self.area_activo = '';
        self.responsable_activo = '';
        self.estado = '';

        if (err.codigo_activo) {
          self.$refs.activo.focus();
          self.activo_busqueda = '';
          alertify.warning("No se encuentra este activo.", 5);
        }

        self.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mostrar_detalles_vehiculo: false,
      sucursales: [],
      areas: [],
      grupos: [],
      trabajadores: [],
      trabajadores_destino: [],
      tipos: [],
      colores: [],
      propietarios: [],
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      form: {
        descripcion: '',
        codigo: '',
        activo_area: '',
        activo_trabajador: '',
        activo_area_destino: '',
        activo_trabajador_destino: '',
        activo_propietario: '',
        activo_sucursal: '',
        marca: '',
        serie: '',
        fecha_adquisicion: moment(new Date()).format("YYYY-MM-DD"),
        valor_adquisicion: 0,
        depreciacion_mensual: 0,
        depreciacion_acumulada: 0,
        valor_libro: 0,
        id_fondo: 1,
        es_capitalizable: false,
        placa: '',
        chasis: '',
        numero_motor: '',
        id_tipo_combustible: 1,
        cilindro: 1,
        anio: 2000,
        capacidad_carga: 0,
        pasajeros: 1,
        activo_grupo: '',
        activo_tipo_activo: '',
        meses_depreciarse: 0,
        mes_depreciado: 0,
        anio_depreciado: 0,
        activo_color: ''
      },
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    cargarGrupos: function cargarGrupos() {
      var self = this; //console.log(self.form.activo_tipo_activo)

      if (self.form.activo_tipo_activo.grupos_activos.length) {
        self.grupos = [];
        self.form.activo_grupo = '';
        self.grupos = self.form.activo_tipo_activo.grupos_activos;
      }
    },
    obtenerTrabajadores: function obtenerTrabajadores() {
      var self = this;
      self.trabajadores_destino = [];
      self.form.activo_trabajador_destino = [];

      if (self.form.activo_area_destino) {
        self.trabajadores_destino = self.form.activo_area_destino.trabajadores_area;
      }
    },
    obtenerActivoFijo: function obtenerActivoFijo() {
      var _this = this;

      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerActivoFijo({
        id_activo: self.$route.params.id_activo
      }, function (data) {
        self.form = data.activo;
        self.sucursales = data.sucursales;
        self.areas = data.areas;
        self.trabajadores = data.trabajadores;
        self.form.activo_area_destino = self.areas[0];
        self.trabajadores_destino = self.form.activo_area_destino.trabajadores_area;
        self.tipos = data.tipos;
        self.mostrar_detalles_vehiculo = self.form.activo_detalle_vehiculo; //self.grupos = data.grupos;

        self.colores = data.colores;
        self.propietarios = data.propietarios;
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_activo[0], 5);

        _this.$router.push({
          name: 'listado-activos-fijos'
        });
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_adquisicion = moment(date).format("YYYY-MM-DD"); //
    },
    reasignar: function reasignar() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Guardando, espere......';
      self.$swal.fire({
        title: 'Esta seguro de registrar el traslado del activo?',
        text: "Se registrarán los cambios",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          self.loading = true;
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].reasignar(self.form, function (data) {
            alertify.success("Activo Fijo actualizado correctamente", 5);

            _this2.$router.push({
              name: 'listado-activos-fijos'
            });
          }, function (err) {
            self.loading = false;
            self.errorMessages = err;
            self.btnAction = 'Guardar';
          });
        } else {
          self.loading = false;
          self.btnAction = "Guardar";
        }
      });
    },
    desactivar: function desactivar(activoID) {
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
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_activo: activoID
          }, function (data) {
            alertify.warning("Activo Fijo desactivada correctamente", 5);

            _this3.$router.push({
              name: 'listado-activos-fijos'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(activoID) {
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
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_activo: activoID
          }, function (data) {
            alertify.success("Activo Fijo activada correctamente", 5);

            _this4.$router.push({
              name: 'listado-activos-fijos'
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
  computed: {
    calcularDepreciacion: function calcularDepreciacion() {
      var self = this;
      self.form.depreciacion_mensual = Number((self.form.valor_adquisicion / self.form.meses_depreciarse).toFixed(2));

      if (!isNaN(self.form.depreciacion_mensual)) {
        return self.form.depreciacion_mensual;
      } else {
        return 0;
      }
    },
    calcularDepreciacionAcumulada: function calcularDepreciacionAcumulada() {
      var self = this;
      self.form.depreciacion_acumulada = Number((self.form.depreciacion_mensual * self.form.mes_depreciado).toFixed(2));

      if (!isNaN(self.form.depreciacion_acumulada)) {
        return self.form.depreciacion_acumulada;
      } else {
        return 0;
      }
    },
    calcularValorEnLibro: function calcularValorEnLibro() {
      var self = this;
      self.form.valor_libro = Number((self.form.valor_adquisicion - self.form.depreciacion_acumulada).toFixed(2));

      if (!isNaN(self.form.valor_libro) && self.form.valor_libro > 0) {
        return self.form.valor_libro;
      } else {
        self.form.valor_libro = 0;
        return self.form.valor_libro;
      }
    }
  },
  mounted: function mounted() {
    this.obtenerActivoFijo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mostrar_detalles_vehiculo: false,
      areas: [],
      area_origen: [],
      area_destino: [],
      trabajadores: [],
      trabajador_origen: [],
      trabajadores_destino: [],
      trabajador_destino: [],
      activos_trabajador: [],
      tipo_traslado: '',
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.activos_trabajador.length >= 1) {
        this.activos_trabajador.splice(index, 1);
      } else {
        this.activos_trabajador = [];
      }
    },
    obtenerTrabajadores: function obtenerTrabajadores() {
      var self = this;
      self.trabajadores_destino = [];
      self.trabajador_destino = [];

      if (self.area_destino) {
        self.trabajadores_destino = self.area_destino.trabajadores_area;
      }
    },
    obtenerTrabajadoresOrigen: function obtenerTrabajadoresOrigen() {
      var self = this;
      self.activos_trabajador = [];
      self.trabajadores = [];
      self.trabajador_origen = [];

      if (self.area_origen) {
        self.trabajadores = self.area_origen.trabajadores_area;
      }
    },
    obtenerActivosTrabajador: function obtenerActivosTrabajador() {
      var _this = this;

      var self = this;
      self.loading = true;
      self.activos_trabajador = [];

      if (self.trabajador_origen) {
        _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerActivosTrabajador({
          id_trabajador: self.trabajador_origen.id_trabajador
        }, function (data) {
          self.activos_trabajador = data;
          self.loading = false;
        }, function (err) {
          alertify.error(err.id_trabajador[0], 5);

          _this.$router.push({
            name: 'listado-activos-fijos'
          });
        });
      }
    },
    reasignar: function reasignar() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Guardando, espere......';

      if (self.activos_trabajador.length) {
        if (self.trabajador_origen.id_trabajador !== self.trabajador_destino.id_trabajador) {
          self.$swal.fire({
            title: 'Esta seguro de trasladar todos los activos al trabajador especificado?',
            text: "Se registrarán los cambios",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              self.loading = true;
              _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].reasignarLote({
                activos: self.activos_trabajador,
                activo_trabajador_destino: self.trabajador_destino
              }, function (data) {
                alertify.success("Activo Fijo actualizado correctamente", 5);

                _this2.$router.push({
                  name: 'listado-activos-fijos'
                });
              }, function (err) {
                self.loading = false;
                self.errorMessages = err;
                self.btnAction = 'Guardar';
              });
            } else {
              self.loading = false;
              self.btnAction = "Guardar";
            }
          });
        } else {
          alertify.warning("Se deben seleccionar trabajadores distintos", 5);
          self.loading = false;
          self.btnAction = 'Guardar';
        }
      } else {
        alertify.warning("El detalle de activos debe contener al menos un elemento", 5);
        self.loading = false;
        self.btnAction = 'Guardar';
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.areas = data.areas;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Registrar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      aplicaCalculo: true,
      fechax: new Date(),
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mostrar_detalles_vehiculo: false,
      centros_costos: [],
      areas: [],
      grupos: [],
      trabajadores: [],
      tipos: [],
      colores: [],
      propietarios: [],
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      form: {
        descripcion: '',
        codigo: '',
        activo_area: '',
        activo_trabajador: '',
        activo_propietario: '',
        marca: '',
        modelo: '',
        serie: '',
        centro_costo: [],
        condicion: 1,
        observacion: '',
        fecha_adquisicion: moment(new Date()).format("YYYY-MM-DD"),
        valor_adquisicion: 0,
        depreciacion_mensual: 0,
        depreciacion_acumulada: 0,
        valor_libro: 0,
        id_fondo: 1,
        es_capitalizable: false,
        placa: '',
        chasis: '',
        numero_motor: '',
        id_tipo_combustible: 1,
        cilindro: 1,
        anio: 2000,
        capacidad_carga: 0,
        pasajeros: 1,
        activo_grupo: '',
        activo_tipo: '',
        meses_depreciarse: 1,
        mes_depreciado: 0,
        anio_depreciado: 0,
        activo_color: '',
        revaluo: 0,
        valor_revaluo: 0,
        vida_util_politica: 0,
        depreciacion_mensual_politica: 0,
        depreciacion_acumulada_politica: 0,
        valor_libro_politica: 0,
        mes_depreciado_politica: 0,
        porcentaje_deterioro: 0,
        valor_deterioro_anual: 0,
        valor_deterioro_acumulado: 0,
        valor_activo_revaluado: 0,
        meses_vida_revaluacion: 0,
        depreciacion_mensual_revaluada: 0,
        depreciacion_acumulada_revaluada: 0,
        valor_libro_revaluado: 0
      },
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  methods: {
    cargarGrupos: function cargarGrupos() {
      var self = this; //console.log(self.form.activo_tipo)

      if (self.form.activo_tipo.grupos_activos.length) {
        self.grupos = [];
        self.form.activo_grupo = '';
        self.grupos = self.form.activo_tipo.grupos_activos;
        self.form.placa = '';
        self.form.chasis = '';
        self.form.numero_motor = '';
        self.form.id_tipo_combustible = 1;
        self.form.cilindro = 1;
        self.form.anio = 2000;
        self.form.capacidad_carga = 0;
        self.form.pasajeros = 1;
        self.form.meses_depreciarse = 1;

        if (self.form.activo_tipo.id_tipo_activo === 1) {
          self.form.meses_depreciarse = 0;
          self.form.mes_depreciado = 0;
        }

        self.aplicaCalculo = self.form.activo_tipo.id_tipo_activo !== 1;
        self.mostrar_detalles_vehiculo = self.form.activo_tipo.id_tipo_activo === 3;
      }
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_adquisicion = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerTrabajadores: function obtenerTrabajadores() {
      var self = this;
      self.trabajadores = [];
      self.form.activo_trabajador = [];

      if (self.form.activo_area) {
        self.trabajadores = self.form.activo_area.trabajadores_area;
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.centros_costos = data.centros;
        self.areas = data.areas;
        self.form.activo_area = self.areas[0];
        self.trabajadores = self.form.activo_area.trabajadores_area;
        self.tipos = data.tipos; //self.grupos = data.grupos;

        self.colores = data.colores;
        self.propietarios = data.propietarios;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.$swal.fire({
        title: 'Esta seguro de registrar el activo?',
        text: "Se registrarán los cambios",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          self.loading = true;
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
            self.loading = false;

            _this.$router.push({
              name: 'listado-activos-fijos'
            });
          }, function (err) {
            self.loading = false;
            self.errorMessages = err;
            self.btnAction = 'Registrar';
          });
        } else {
          self.loading = false;
          self.btnAction = "Registrar";
        }
      });
    }
  },
  computed: {
    calcularDepreciacion: function calcularDepreciacion() {
      var self = this;

      if (self.aplicaCalculo) {
        self.form.depreciacion_mensual = Number((self.form.valor_adquisicion / self.form.meses_depreciarse).toFixed(2));

        if (!isNaN(self.form.depreciacion_mensual)) {
          return self.form.depreciacion_mensual;
        } else {
          return 0;
        }
      } else {
        self.form.depreciacion_mensual = 0;
        return 0;
      }
    },
    calcularDepreciacionPolitica: function calcularDepreciacionPolitica() {
      var self = this;

      if (self.aplicaCalculo) {
        self.form.depreciacion_mensual_politica = Number((self.form.valor_adquisicion / self.form.vida_util_politica).toFixed(2));

        if (!isNaN(self.form.depreciacion_mensual_politica)) {
          return self.form.depreciacion_mensual_politica;
        } else {
          return 0;
        }
      } else {
        self.form.depreciacion_mensual_politica = 0;
        return 0;
      }
    },
    calcularDepreciacionAcumulada: function calcularDepreciacionAcumulada() {
      var self = this;

      if (self.aplicaCalculo) {
        self.form.depreciacion_acumulada = Number((self.form.depreciacion_mensual * self.form.mes_depreciado).toFixed(2));

        if (!isNaN(self.form.depreciacion_acumulada)) {
          return self.form.depreciacion_acumulada;
        } else {
          return 0;
        }
      } else {
        self.form.depreciacion_acumulada = 0;
        return 0;
      }
    },
    calcularDepreciacionAcumuladaPolitica: function calcularDepreciacionAcumuladaPolitica() {
      var self = this;

      if (self.aplicaCalculo) {
        self.form.depreciacion_acumulada_politica = Number((self.form.depreciacion_mensual_politica * self.form.mes_depreciado_politica).toFixed(2));

        if (!isNaN(self.form.depreciacion_acumulada_politica)) {
          return self.form.depreciacion_acumulada_politica;
        } else {
          return 0;
        }
      } else {
        self.form.depreciacion_acumulada_politica = 0;
        return 0;
      }
    },
    calcularValorEnLibro: function calcularValorEnLibro() {
      var self = this;

      if (self.aplicaCalculo) {
        self.form.valor_libro = Number((self.form.valor_adquisicion - self.form.depreciacion_acumulada).toFixed(2));

        if (!isNaN(self.form.valor_libro) && self.form.valor_libro > 0) {
          return self.form.valor_libro;
        } else {
          self.form.valor_libro = 0;
          return self.form.valor_libro;
        }
      } else {
        self.form.valor_libro = self.form.valor_adquisicion;
        return self.form.valor_libro;
      }
    },
    calcularValorEnLibroPolitica: function calcularValorEnLibroPolitica() {
      var self = this;

      if (self.aplicaCalculo) {
        self.form.valor_libro_politica = Number((self.form.valor_adquisicion - self.form.depreciacion_acumulada_politica).toFixed(2));

        if (!isNaN(self.form.valor_libro_politica) && self.form.valor_libro_politica > 0) {
          return self.form.valor_libro_politica;
        } else {
          self.form.valor_libro_politica = 0;
          return self.form.valor_libro_politica;
        }
      } else {
        self.form.valor_libro_politica = self.form.valor_adquisicion;
        return self.form.valor_libro_politica;
      }
    },
    calcularRevaluacion: function calcularRevaluacion() {
      var self = this; // self.form.valor_revaluo=202250;

      self.form.revaluo = Number((self.form.valor_revaluo - self.form.valor_libro).toFixed(2));

      if (!isNaN(self.form.revaluo) && self.form.revaluo > 0) {
        return self.form.revaluo;
      } else {
        self.form.revaluo = 0;
        return self.form.revaluo;
      }
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mostrar_detalles_vehiculo: false,
      sucursales: [],
      areas: [],
      grupos: [],
      trabajadores: [],
      tipos: [],
      colores: [],
      propietarios: [],
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      form: {
        descripcion: '',
        codigo: '',
        activo_area: '',
        activo_trabajador: '',
        activo_propietario: '',
        activo_sucursal: '',
        marca: '',
        serie: '',
        fecha_adquisicion: moment(new Date()).format("YYYY-MM-DD"),
        valor_adquisicion: 0,
        depreciacion_mensual: 0,
        depreciacion_acumulada: 0,
        valor_libro: 0,
        id_fondo: 1,
        es_capitalizable: false,
        placa: '',
        chasis: '',
        numero_motor: '',
        id_tipo_combustible: 1,
        cilindro: 1,
        anio: 2000,
        capacidad_carga: 0,
        pasajeros: 1,
        activo_grupo: '',
        activo_tipo_activo: '',
        meses_depreciarse: 0,
        mes_depreciado: 0,
        anio_depreciado: 0,
        activo_color: '',
        revaluo: 0,
        valor_revaluo: 0,
        vida_util: 0,
        vida_util_adicional: 0,
        depreciacion_mensual_politica: 0,
        depreciacion_acumulada_politica: 0,
        valor_libro_politica: 0,
        mes_depreciado_politica: 0,
        mes_depreciado_revaluada: 0,
        porcentaje_deterioro: 0,
        valor_deterioro_anual: 0,
        valor_deterioro_acumulado: 0,
        valor_activo_revaluado: 0,
        meses_vida_revaluacion: 0,
        depreciacion_mensual_revaluada: 0,
        depreciacion_acumulada_revaluada: 0,
        valor_libro_revaluado: 0
      },
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    cargarGrupos: function cargarGrupos() {
      var self = this; //console.log(self.form.activo_tipo_activo)

      if (self.form.activo_tipo_activo.grupos_activos.length) {
        self.grupos = [];
        self.form.activo_grupo = '';
        self.grupos = self.form.activo_tipo_activo.grupos_activos;
      }
    },
    obtenerActivoFijo: function obtenerActivoFijo() {
      var _this = this;

      var self = this;
      _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerActivoFijo({
        id_activo: self.$route.params.id_activo
      }, function (data) {
        self.form = data.activo;
        self.sucursales = data.sucursales;
        self.areas = data.areas;
        self.trabajadores = data.trabajadores;
        self.tipos = data.tipos;
        self.mostrar_detalles_vehiculo = self.form.activo_detalle_vehiculo; //self.grupos = data.grupos;

        self.colores = data.colores;
        self.propietarios = data.propietarios;
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_activo[0], 5);

        _this.$router.push({
          name: 'listado-activos-fijos'
        });
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_adquisicion = moment(date).format("YYYY-MM-DD"); //
    },
    actualizar: function actualizar() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Guardando, espere......';
      self.$swal.fire({
        title: 'Esta seguro de revaluar este activo?',
        text: "Se registrarán los cambios",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          self.loading = true;
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].revaluar(self.form, function (data) {
            alertify.success("Activo Fijo revaluado correctamente", 5);

            _this2.$router.push({
              name: 'listado-activos-fijos'
            });
          }, function (err) {
            self.loading = false;
            self.errorMessages = err;
            self.btnAction = 'Registrar';
          });
        } else {
          self.loading = false;
          self.btnAction = "Registrar";
        }
      });
    },
    desactivar: function desactivar(activoID) {
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
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_activo: activoID
          }, function (data) {
            alertify.warning("Activo Fijo desactivada correctamente", 5);

            _this3.$router.push({
              name: 'listado-activos-fijos'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(activoID) {
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
          _api_activos_fijos__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_activo: activoID
          }, function (data) {
            alertify.success("Activo Fijo activada correctamente", 5);

            _this4.$router.push({
              name: 'listado-activos-fijos'
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
  computed: {
    calcularVidaUtil: function calcularVidaUtil() {
      var self = this;
      self.form.vida_util_adicional = Number((self.form.vida_util + self.form.vida_util_politica).toFixed(2));

      if (!isNaN(self.form.vida_util_adicional) && self.form.vida_util_adicional > 0) {
        return self.form.vida_util_adicional;
      } else {
        self.form.vida_util_adicional = self.form.vida_util_politica;
        return self.form.vida_util_adicional;
      }
    },
    calcularDepreciacion: function calcularDepreciacion() {
      var self = this;
      self.form.depreciacion_mensual = Number((self.form.valor_adquisicion / self.form.meses_depreciarse).toFixed(2));

      if (!isNaN(self.form.depreciacion_mensual)) {
        return self.form.depreciacion_mensual;
      } else {
        return 0;
      }
    },
    calcularDepreciacionPolitica: function calcularDepreciacionPolitica() {
      var self = this;
      self.form.depreciacion_mensual_politica = Number((self.form.valor_adquisicion / self.form.vida_util_politica).toFixed(2));

      if (!isNaN(self.form.depreciacion_mensual_politica)) {
        return self.form.depreciacion_mensual_politica;
      } else {
        return 0;
      }
    },
    calcularDepreciacionRevaluada: function calcularDepreciacionRevaluada() {
      var self = this;
      self.form.depreciacion_mensual_revaluada = Number((self.form.valor_revaluo / self.form.vida_util_adicional).toFixed(2));

      if (!isNaN(self.form.depreciacion_mensual_revaluada)) {
        return self.form.depreciacion_mensual_revaluada;
      } else {
        return 0;
      }
    },
    calcularDepreciacionAcumulada: function calcularDepreciacionAcumulada() {
      var self = this;
      self.form.depreciacion_acumulada = Number((self.form.depreciacion_mensual * self.form.mes_depreciado).toFixed(2));

      if (!isNaN(self.form.depreciacion_acumulada)) {
        return self.form.depreciacion_acumulada;
      } else {
        return 0;
      }
    },
    calcularDepreciacionAcumuladaPolitica: function calcularDepreciacionAcumuladaPolitica() {
      var self = this;
      self.form.depreciacion_acumulada_politica = Number((self.form.depreciacion_mensual_politica * self.form.mes_depreciado_politica).toFixed(2));

      if (!isNaN(self.form.depreciacion_acumulada_politica)) {
        return self.form.depreciacion_acumulada_politica;
      } else {
        return 0;
      }
    },
    calcularDepreciacionAcumuladaRevaluada: function calcularDepreciacionAcumuladaRevaluada() {
      var self = this;
      self.form.depreciacion_acumulada_revaluada = Number((self.form.depreciacion_mensual_revaluada * self.form.mes_depreciado_revaluada).toFixed(2));

      if (!isNaN(self.form.depreciacion_acumulada_revaluada)) {
        return self.form.depreciacion_acumulada_revaluada;
      } else {
        return 0;
      }
    },
    calcularValorEnLibro: function calcularValorEnLibro() {
      var self = this;
      self.form.valor_libro = Number((self.form.valor_adquisicion - self.form.depreciacion_acumulada).toFixed(2));

      if (!isNaN(self.form.valor_libro) && self.form.valor_libro > 0) {
        return self.form.valor_libro;
      } else {
        self.form.valor_libro = 0;
        return self.form.valor_libro;
      }
    },
    calcularValorEnLibroPolitica: function calcularValorEnLibroPolitica() {
      var self = this;
      self.form.valor_libro_politica = Number((self.form.valor_adquisicion - self.form.depreciacion_acumulada_politica).toFixed(2));

      if (!isNaN(self.form.valor_libro_politica) && self.form.valor_libro_politica > 0) {
        return self.form.valor_libro_politica;
      } else {
        self.form.valor_libro_politica = 0;
        return self.form.valor_libro_politica;
      }
    },
    calcularValorEnLibroRevaluada: function calcularValorEnLibroRevaluada() {
      var self = this;
      self.form.depreciacion_acumulada_revaluada = Number((self.form.depreciacion_mensual_revaluada * self.form.mes_depreciado_revaluada).toFixed(2));
      self.form.valor_libro_revaluado = Number((self.form.valor_revaluo - self.form.depreciacion_acumulada_revaluada).toFixed(2));

      if (!isNaN(self.form.valor_libro_revaluado) && self.form.valor_libro_revaluado > 0) {
        return self.form.valor_libro_revaluado;
      } else {
        self.form.valor_libro_revaluado = 0;
        return self.form.valor_libro_revaluado;
      }
    },
    calcularRevaluacion: function calcularRevaluacion() {
      var self = this; // self.form.valor_revaluo=202250;

      self.form.revaluo = Number((self.form.valor_revaluo - self.form.valor_libro).toFixed(2));

      if (!isNaN(self.form.revaluo) && self.form.revaluo > 0) {
        return self.form.revaluo;
      } else {
        self.form.revaluo = 0;
        return self.form.revaluo;
      }
    }
  },
  mounted: function mounted() {
    this.obtenerActivoFijo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-1a97b54a] {\n  min-width: 120px;\n}\n.table a[data-v-1a97b54a] {\n  color: #2675dc;\n}\n.table .table-number[data-v-1a97b54a] {\n  width: 60px;\n}\n.table .action[data-v-1a97b54a] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-85d34cca] {\n  min-width: 120px;\n}\n.table a[data-v-85d34cca] {\n  color: #2675dc;\n}\n.table .table-number[data-v-85d34cca] {\n  width: 60px;\n}\n.table .action[data-v-85d34cca] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-82d5e07c] {\n  min-width: 120px;\n}\n.table a[data-v-82d5e07c] {\n  color: #2675dc;\n}\n.table .table-number[data-v-82d5e07c] {\n  width: 60px;\n}\n.table .action[data-v-82d5e07c] {\n  width: 180px;\n}\n.table .detail-link[data-v-82d5e07c] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-82d5e07c] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-82d5e07c]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-663d07d8] {\n  min-width: 120px;\n}\n.table a[data-v-663d07d8] {\n  color: #2675dc;\n}\n.table .table-number[data-v-663d07d8] {\n  width: 60px;\n}\n.table .action[data-v-663d07d8] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-label2 {\n    margin-top: 40px;\n    margin-left: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-label2 {\n    margin-top: 40px;\n    margin-left: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-label2 {\n\tmargin-top: 40px;\n\tmargin-left: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-label2 {\n    margin-top: 40px;\n    margin-left: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reasignar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Revaluacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=template&id=6000c373&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=template&id=6000c373& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Centro de costo")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "descripcion",
                      options: _vm.centros_costos,
                      disabled: true
                    },
                    model: {
                      value: _vm.form.activo_centro,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_centro", $$v)
                      },
                      expression: "form.activo_centro"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.centro_costo, function(message) {
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Tipo2")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.tipos
                    },
                    on: { input: _vm.cargarGrupos },
                    model: {
                      value: _vm.form.activo_tipo_activo,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_tipo_activo", $$v)
                      },
                      expression: "form.activo_tipo_activo"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_tipo_activo, function(
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Grupo")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.grupos
                    },
                    model: {
                      value: _vm.form.activo_grupo,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_grupo", $$v)
                      },
                      expression: "form.activo_grupo"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_grupo, function(message) {
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Descripción")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.descripcion,
                      expression: "form.descripcion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Dígite la descripción del activo" },
                  domProps: { value: _vm.form.descripcion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "descripcion", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.descripcion, function(message) {
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
                  _c("label", [_vm._v("Color")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: { label: "descripcion", options: _vm.colores },
                    model: {
                      value: _vm.form.activo_color,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_color", $$v)
                      },
                      expression: "form.activo_color"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_color, function(message) {
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Marca")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.marca,
                      expression: "form.marca"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Dígite la marca del activo" },
                  domProps: { value: _vm.form.marca },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "marca", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.marca, function(message) {
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
                _c("label", [_vm._v(" Módelo")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.modelo,
                      expression: "form.modelo"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Dígite el módelo del activo" },
                  domProps: { value: _vm.form.modelo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "modelo", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.modelo, function(message) {
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
                _c("label", [_vm._v(" Serie")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.serie,
                      expression: "form.serie"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Dígite la serie del activo" },
                  domProps: { value: _vm.form.serie },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "serie", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.serie, function(message) {
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
                _c("label", [_vm._v(" Condición")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.condicion,
                        expression: "form.condicion"
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
                          _vm.form,
                          "condicion",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [_vm._v("Bueno")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Regular")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("Malo")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha Adquisición")
                  ]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      disabled: true,
                      language: _vm.es,
                      value: new Date(),
                      format: _vm.format
                    },
                    on: { selected: _vm.onDateSelect }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.fecha_adquisicion, function(
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Valor adquisición C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.valor_adquisicion,
                      expression: "form.valor_adquisicion",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    min: "1",
                    placeholder: "Dígite el valor del activo"
                  },
                  domProps: { value: _vm.form.valor_adquisicion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "valor_adquisicion",
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
                  _vm._l(_vm.errorMessages.valor_adquisicion, function(
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
                _c("label", [_vm._v(" Meses a depreciarse")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.meses_depreciarse,
                      expression: "form.meses_depreciarse",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    min: "1",
                    type: "number",
                    placeholder: "Dígite el numero de meses a depreciarse"
                  },
                  domProps: { value: _vm.form.meses_depreciarse },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "meses_depreciarse",
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
                  _vm._l(_vm.errorMessages.meses_depreciarse, function(
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
                _c("label", [_vm._v(" Depreciación mensual C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.calcularDepreciacion,
                      expression: "calcularDepreciacion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite la depreciación mensual"
                  },
                  domProps: { value: _vm.calcularDepreciacion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.calcularDepreciacion = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.depreciacion_mensual, function(
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
                _c("label", [_vm._v(" Depreciación acumulada C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.depreciacion_acumulada,
                      expression: "form.depreciacion_acumulada",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite la depreciación acumulada"
                  },
                  domProps: { value: _vm.form.depreciacion_acumulada },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "depreciacion_acumulada",
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
                  _vm._l(_vm.errorMessages.depreciacion_acumulada, function(
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
                _c("label", [_vm._v(" Valor en libros C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.valor_libro,
                      expression: "form.valor_libro",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite el valor actual en libros"
                  },
                  domProps: { value: _vm.form.valor_libro },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "valor_libro",
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
                  _vm._l(_vm.errorMessages.valor_libro, function(message) {
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
                _c("label", [_vm._v(" Mes depreciado")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.mes_depreciado,
                      expression: "form.mes_depreciado",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite el numero de meses a depreciarse"
                  },
                  domProps: { value: _vm.form.mes_depreciado },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "mes_depreciado",
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
                  _vm._l(_vm.errorMessages.mes_depreciado, function(message) {
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
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "check-label2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.es_capitalizable,
                      expression: "form.es_capitalizable"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.form.es_capitalizable)
                      ? _vm._i(_vm.form.es_capitalizable, null) > -1
                      : _vm.form.es_capitalizable
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.es_capitalizable,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form,
                              "es_capitalizable",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form,
                              "es_capitalizable",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form, "es_capitalizable", $$c)
                      }
                    }
                  }
                }),
                _c("strong", [_vm._v(" Es capitalizable ")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Observación")]),
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
                  attrs: { placeholder: "Dígite la observacion del activo" },
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v(" Vida útil")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.vida_util_politica,
                          expression: "form.vida_util_politica",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: "",
                        type: "number",
                        placeholder: "Dígite la vida útil del activo"
                      },
                      domProps: { value: _vm.form.vida_util_politica },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "vida_util_politica",
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
                      _vm._l(_vm.errorMessages.vida_util_politica, function(
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
                    _c("label", [_vm._v(" Depreciación mensual C$")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.calcularDepreciacionPolitica,
                          expression: "calcularDepreciacionPolitica"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: "",
                        placeholder: "Dígite la depreciación mensual"
                      },
                      domProps: { value: _vm.calcularDepreciacionPolitica },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.calcularDepreciacionPolitica = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(
                        _vm.errorMessages.depreciacion_mensual_politica,
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
                    _c("label", [_vm._v(" Meses depreciados")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.mes_depreciado_politica,
                          expression: "form.mes_depreciado_politica",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: "",
                        min: "1",
                        placeholder: "Dígite la cantidad de meses depreciado"
                      },
                      domProps: { value: _vm.form.mes_depreciado_politica },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "mes_depreciado_politica",
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
                      _vm._l(_vm.errorMessages.mes_depreciado, function(
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
                    _c("label", [_vm._v(" Depreciación acumulada C$")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.calcularDepreciacionAcumuladaPolitica,
                          expression: "calcularDepreciacionAcumuladaPolitica"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: "",
                        min: "1",
                        type: "number",
                        placeholder: "Dígite la depreciación acumulada"
                      },
                      domProps: {
                        value: _vm.calcularDepreciacionAcumuladaPolitica
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.calcularDepreciacionAcumuladaPolitica =
                            $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(
                        _vm.errorMessages.depreciacion_acumulada_politica,
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
                    _c("label", [_vm._v(" Valor en libros C$")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.calcularValorEnLibroPolitica,
                          expression: "calcularValorEnLibroPolitica"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: "",
                        placeholder: "Dígite el valor actual en libros"
                      },
                      domProps: { value: _vm.calcularValorEnLibroPolitica },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.calcularValorEnLibroPolitica = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.valor_libro_politica, function(
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
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Valor revaluo")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.valor_revaluo,
                      expression: "form.valor_revaluo",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Dígite el nuevo valor del activo" },
                  domProps: { value: _vm.form.valor_revaluo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "valor_revaluo",
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
                  _vm._l(_vm.errorMessages.valor_revaluo, function(message) {
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
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "table",
                { staticClass: "table table-striped table-bordered" },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("Valor en libros")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.valor_libro))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Valor revaluo")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.valor_revaluo))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("(-)")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.calcularRevaluacion))])
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.mostrar_detalles_vehiculo
            ? [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v(" Placa")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.activo_detalle_vehiculo.placa,
                            expression: "form.activo_detalle_vehiculo.placa"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Dígite la placa del vehiculo" },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.placa
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "placa",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.placa, function(message) {
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
                      _c("label", [_vm._v(" Chasis")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.activo_detalle_vehiculo.chasis,
                            expression: "form.activo_detalle_vehiculo.chasis"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Dígite el chasis del vehiculo" },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.chasis
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "chasis",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.chasis, function(message) {
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
                      _c("label", [_vm._v(" Número de motor")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value:
                              _vm.form.activo_detalle_vehiculo.numero_motor,
                            expression:
                              "form.activo_detalle_vehiculo.numero_motor"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Dígite el numero de motor del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.numero_motor
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "numero_motor",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.numero_motor, function(
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
                      _c("label", [_vm._v(" Cilindro")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.activo_detalle_vehiculo.cilindro,
                            expression: "form.activo_detalle_vehiculo.cilindro",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          min: "1",
                          type: "number",
                          placeholder: "Dígite el numero de cilindro"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.cilindro
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "cilindro",
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
                        _vm._l(_vm.errorMessages.cilindro, function(message) {
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
                      _c("label", [_vm._v(" Tipo combustible:")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value:
                                _vm.form.activo_detalle_vehiculo
                                  .id_tipo_combustible,
                              expression:
                                "form.activo_detalle_vehiculo.id_tipo_combustible",
                              modifiers: { number: true }
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
                                  return _vm._n(val)
                                })
                              _vm.$set(
                                _vm.form.activo_detalle_vehiculo,
                                "id_tipo_combustible",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Diesel")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Gasolina")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.id_tipo_combustible, function(
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
                      _c("label", [_vm._v(" Año")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.activo_detalle_vehiculo.anio,
                            expression: "form.activo_detalle_vehiculo.anio",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          min: "1900",
                          type: "number",
                          placeholder: "Dígite el año del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.anio
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "anio",
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
                        _vm._l(_vm.errorMessages.anio, function(message) {
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
                      _c("label", [_vm._v(" Capacidad de carga")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value:
                              _vm.form.activo_detalle_vehiculo.capacidad_carga,
                            expression:
                              "form.activo_detalle_vehiculo.capacidad_carga",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          min: "1",
                          type: "number",
                          placeholder:
                            "Dígite la capacidad de carga del vehiculo"
                        },
                        domProps: {
                          value:
                            _vm.form.activo_detalle_vehiculo.capacidad_carga
                        },
                        on: {
                          change: function($event) {
                            _vm.form.activo_detalle_vehiculo.capacidad_carga = Math.max(
                              Math.min(
                                Number(
                                  _vm.form.activo_detalle_vehiculo
                                    .capacidad_carga
                                ),
                                500
                              ),
                              1
                            )
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "capacidad_carga",
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
                        _vm._l(_vm.errorMessages.capacidad_carga, function(
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
                      _c("label", [_vm._v(" Número de pasajeros")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.activo_detalle_vehiculo.pasajeros,
                            expression:
                              "form.activo_detalle_vehiculo.pasajeros",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          min: "1",
                          type: "number",
                          placeholder:
                            "Dígite la capacidad de pasajeros del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.pasajeros
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "pasajeros",
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
                        _vm._l(_vm.errorMessages.pasajeros, function(message) {
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
                _c("hr")
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Área")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.areas
                    },
                    model: {
                      value: _vm.form.activo_area,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_area", $$v)
                      },
                      expression: "form.activo_area"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_area, function(message) {
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Trabajador")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "nombre_completo",
                      options: _vm.trabajadores
                    },
                    model: {
                      value: _vm.form.activo_trabajador,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_trabajador", $$v)
                      },
                      expression: "form.activo_trabajador"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_trabajador, function(
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
          ])
        ],
        2
      ),
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
                    attrs: {
                      to: { name: "listado-activos-fijos" },
                      tag: "button"
                    }
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
                      disabled: _vm.btnAction != "Guardar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.actualizar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
                )
              ],
              1
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
        _vm._v("Actualizar Activo Fijo")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar activo fijo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del Activo Fijo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Según politica interna")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "alert alert-success" }, [
        _c("span", [_c("strong", [_vm._v("Detalles de revaluo")])])
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
          _vm._v("Descripción")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [_vm._v("Monto")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalles del vehículo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del trabajador Asignado")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Autorización de baja de activos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Activos Fijos")
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
                  attrs: { to: { name: "pagina-principal-activos" } }
                },
                [_vm._v(" Módulo Activo Fijo")]
              ),
              _vm._v("> Autorización de bajas")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "col-md-12 sm-text-center form-inline justify-content-end",
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
                  _c("option", { attrs: { value: "descripcion" } }, [
                    _vm._v("Descripción")
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
                _vm._l(_vm.activos_fijos, function(activo_fijo) {
                  return _c("tr", { key: activo_fijo.id_activo }, [
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_sucursal
                            ? activo_fijo.activo_sucursal.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.codigo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.descripcion))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_tipo_activo
                            ? activo_fijo.activo_tipo_activo.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_trabajador
                            ? activo_fijo.activo_trabajador.nombre_completo
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.justificacion))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        activo_fijo.estado === 99
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarEstadoSolicitudBaja(
                                        1,
                                        activo_fijo.id_activo
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
                          : _vm._e(),
                        _vm._v(" "),
                        activo_fijo.estado === 0
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarEstadoSolicitudBaja(
                                        1,
                                        activo_fijo.id_activo
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-trash-o" }, [
                                    _vm._v(" Anular Solicitud")
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
                        activo_fijo.estado === 99
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarEstadoSolicitudBaja(
                                        0,
                                        activo_fijo.id_activo
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-trash-o" }, [
                                    _vm._v(" Autorizar Solicitud")
                                  ])
                                ]
                              )
                            ]
                          : void 0
                      ],
                      2
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.activos_fijos.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "6" } },
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
            items: _vm.activos_fijos,
            total: _vm.total,
            page: _vm.filter.page,
            limitOptions: _vm.filter.limitOptions,
            limit: _vm.filter.limit
          },
          on: { changePage: _vm.changePage, changeLimit: _vm.changeLimit }
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
        _c("th", [_vm._v("Sucursal")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Activo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Asignado a")]),
        _vm._v(" "),
        _c("th", [_vm._v("Justificación de baja")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center action", attrs: { colspan: "2" } },
          [_vm._v("Opciones")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=template&id=17844a1e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=template&id=17844a1e& ***!
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
    _c("div", { staticClass: "content-box" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Área  Origen")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "descripcion", options: _vm.areas },
                on: { change: _vm.obtenerTrabajadoresOrigen },
                model: {
                  value: _vm.area_origen,
                  callback: function($$v) {
                    _vm.area_origen = $$v
                  },
                  expression: "area_origen"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.area_origen, function(message) {
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
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Trabajador Origen")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "nombre_completo", options: _vm.trabajadores },
                on: { change: _vm.obtenerActivosTrabajador },
                model: {
                  value: _vm.trabajador_origen,
                  callback: function($$v) {
                    _vm.trabajador_origen = $$v
                  },
                  expression: "trabajador_origen"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.trabajador_origen, function(message) {
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.activos_trabajador, function(activo_fijo, index) {
                  return _c("tr", { key: activo_fijo.id_activo }, [
                    _c("td", [_vm._v(_vm._s(activo_fijo.codigo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.descripcion))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_tipo_activo
                            ? activo_fijo.activo_tipo_activo.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_grupo
                            ? activo_fijo.activo_grupo.descripcion
                            : "N/A"
                        )
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                !_vm.activos_trabajador.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "5" } },
                        [
                          _vm._v(
                            "El trabajador seleccionado no tiene activos asignados"
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ],
              2
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
                    attrs: {
                      to: { name: "listado-activos-fijos" },
                      tag: "button"
                    }
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
                      disabled: _vm.btnAction !== "Generar",
                      type: "button"
                    },
                    on: { click: _vm.descargarActaEntrega }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
                )
              ],
              1
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Actas de entrega")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para generar acta de entrega")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del trabajador Asignado")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Activo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Grupo Activo")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=template&id=0a5aa721&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=template&id=0a5aa721& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Sucursal")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "descripcion", options: _vm.sucursales },
                on: { change: _vm.obtenerActivosSucursal },
                model: {
                  value: _vm.sucursal,
                  callback: function($$v) {
                    _vm.sucursal = $$v
                  },
                  expression: "sucursal"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.sucursal, function(message) {
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
        _c("div", { staticClass: "col-sm-3" }, [
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
              _c("label", { staticClass: "label-search" }, [_vm._v("Mes:")]),
              _vm._v(" "),
              _c("v-select", {
                style: "margin-left: .5rem!important;",
                attrs: { label: "descripcion", options: _vm.meses },
                on: { change: _vm.obtenerActivosSucursal },
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
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "table",
            {
              staticClass: "table table-bordered table-hover table-responsive"
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.activos_sucursal, function(activo_fijo, index) {
                    return _c("tr", { key: activo_fijo.id_activo }, [
                      _c("td", [_vm._v(_vm._s(activo_fijo.codigo))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            activo_fijo.activo_tipo_activo
                              ? activo_fijo.activo_tipo_activo.descripcion
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            activo_fijo.activo_grupo
                              ? activo_fijo.activo_grupo.descripcion
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(activo_fijo.descripcion))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.formatDate(activo_fijo.fecha_adquisicion))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(
                              activo_fijo.valor_adquisicion,
                              2
                            )
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(activo_fijo.meses_depreciarse))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(
                              activo_fijo.depreciacion_mensual,
                              2
                            )
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            Number(activo_fijo.mes_depreciado_actual) <=
                              Number(activo_fijo.meses_depreciarse)
                              ? activo_fijo.mes_depreciado_actual
                              : "Depreciado"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(
                              _vm.calcularDepreciacionAcumulada(activo_fijo),
                              2
                            )
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(
                              _vm.calcularValorLibros(activo_fijo),
                              2
                            )
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            activo_fijo.activo_trabajador
                              ? activo_fijo.activo_trabajador.nombre_completo
                              : "N/A"
                          )
                        )
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  !_vm.activos_sucursal.length
                    ? _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            attrs: { colspan: "11" }
                          },
                          [
                            _vm._v(
                              "La sucursal seleccionada no tiene activos asignados"
                            )
                          ]
                        )
                      ])
                    : _vm._e()
                ],
                2
              )
            ]
          )
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
                    attrs: {
                      to: { name: "listado-cierres-activo-fijo" },
                      tag: "button"
                    }
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
                      disabled: _vm.btnAction !== "Guardar",
                      type: "button"
                    },
                    on: { click: _vm.generarCierre }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
                )
              ],
              1
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
        _vm._v("Generar Cierre de Activos por Sucursal")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para generar cierre de activo fijo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de la sucursal")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { "min-width": "200px" } }, [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Tipo Activo")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Grupo Activo")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "400px" } }, [
          _vm._v("Descripción")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "400px" } }, [
          _vm._v("Fecha Adquisición")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Valor Adquisición C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Meses a Depreciarse")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Depreciación Mensual C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Mes Actual Depreciación")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Depreciación Acumulada Actual C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Valor en Libros Actual C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Trabajador Asignado")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=template&id=85d34cca&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Listado.vue?vue&type=template&id=85d34cca&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Administrar Activos Fijos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Activos Fijos")
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
                  attrs: { to: { name: "pagina-principal-activos" } }
                },
                [_vm._v(" Módulo Activo Fijo")]
              ),
              _vm._v("> Activos Fijos")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-3 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: {
                    tag: "button",
                    to: { name: "registrar-activo-fijo" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Activo Fijo\n\t\t\t\t\t")
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
                "col-md-9 sm-text-center form-inline justify-content-end",
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
                  _c("option", { attrs: { value: "descripcion" } }, [
                    _vm._v("Descripción")
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
                _vm._l(_vm.activos_fijos, function(activo_fijo) {
                  return _c("tr", { key: activo_fijo.id_activo }, [
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_sucursal
                            ? activo_fijo.activo_sucursal.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.codigo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.descripcion))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_tipo_activo
                            ? activo_fijo.activo_tipo_activo.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_grupo
                            ? activo_fijo.activo_grupo.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_trabajador
                            ? activo_fijo.activo_trabajador.nombre_completo
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      activo_fijo.estado === 1
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Activo")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      activo_fijo.estado === 2
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-primary" }, [
                              _vm._v("Depreciado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      activo_fijo.estado === 0
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Baja")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      activo_fijo.estado === 99
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Solicitud de baja")
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        activo_fijo.estado === 1
                          ? [
                              _c(
                                "router-link",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip",
                                      value: "Editar Activo",
                                      expression: "'Editar Activo'"
                                    }
                                  ],
                                  attrs: {
                                    tag: "a",
                                    to: {
                                      name: "actualizar-activo-fijo",
                                      params: {
                                        id_activo: activo_fijo.id_activo
                                      }
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "icon-pencil" })]
                              ),
                              _vm._v(" "),
                              activo_fijo.estado
                                ? _c(
                                    "router-link",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: "Revaluación de activo",
                                          expression: "'Revaluación de activo'"
                                        }
                                      ],
                                      attrs: {
                                        tag: "a",
                                        to: {
                                          name: "revaluacion-activo-fijo",
                                          params: {
                                            id_activo: activo_fijo.id_activo
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "icon-arrow-left"
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              activo_fijo.estado
                                ? _c(
                                    "router-link",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: "Trasladar Activo",
                                          expression: "'Trasladar Activo'"
                                        }
                                      ],
                                      attrs: {
                                        tag: "a",
                                        to: {
                                          name: "reasignar-activo-fijo",
                                          params: {
                                            id_activo: activo_fijo.id_activo
                                          }
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "icon-note" })]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              activo_fijo.estado
                                ? _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: "Solicitar baja de activo",
                                          expression:
                                            "'Solicitar baja de activo'"
                                        }
                                      ],
                                      on: {
                                        click: function($event) {
                                          return _vm.cambiarEstadoSolicitud(
                                            99,
                                            activo_fijo.id_activo
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "icon-close" })]
                                  )
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.activos_fijos.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "6" } },
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
            items: _vm.activos_fijos,
            total: _vm.total,
            page: _vm.filter.page,
            limitOptions: _vm.filter.limitOptions,
            limit: _vm.filter.limit
          },
          on: { changePage: _vm.changePage, changeLimit: _vm.changeLimit }
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
        _c("th", [_vm._v("Sucursal")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Activo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Grupo Activo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Asignado a")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Listado de Cierres de Activos Fijos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Cierres Activos Fijos")
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
                  attrs: { to: { name: "pagina-principal-activos" } }
                },
                [_vm._v(" Módulo Activos Fijos")]
              ),
              _vm._v("> Cierres Activos")
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
                  attrs: { tag: "button", to: { name: "cierre-activo-fijo" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Cierre\n\t\t\t\t")
                ]
              )
            ],
            1
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
                _vm._l(_vm.cierres, function(cierre, key) {
                  return [
                    _c("tr", { key: cierre.id_cierre_activo }, [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: "Mostrar detalles",
                              expression: "'Mostrar detalles'"
                            }
                          ],
                          staticClass: "link",
                          on: {
                            click: function($event) {
                              return _vm.mostrarDepreciaciones(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(cierre.cierre_sucursal.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(cierre.anio))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(cierre.mes))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(cierre.f_grabacion)))
                      ])
                    ]),
                    _vm._v(" "),
                    cierre.mostrar
                      ? _c("tr", { key: cierre.id_cierre_activo }, [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "8" } }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-striped table-bordered"
                              },
                              [
                                _vm._m(1, true),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(cierre.detalles_depreciacion, function(
                                    productosDetalle
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        key:
                                          productosDetalle.id_detalle_depreciacion
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.detalle_activo
                                                .descripcion
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formatDate(
                                                productosDetalle.fecha_adquisicion
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.valor_adquisicion
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.detalle_activo
                                                .meses_depreciarse
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.depreciacion_mensual
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(productosDetalle.meses))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.depreciacion_acumulada
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(productosDetalle.valor_libro)
                                          )
                                        ])
                                      ]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("tfoot")
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td")
                        ])
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                !_vm.cierres.length
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "text-center",
                          attrs: { colspan: "10" }
                        },
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
            items: _vm.cierres,
            total: _vm.total,
            page: _vm.filter.page,
            limitOptions: _vm.filter.limitOptions,
            limit: _vm.filter.limit
          },
          on: { changePage: _vm.changePage, changeLimit: _vm.changeLimit }
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
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Sucursal")]),
        _vm._v(" "),
        _c("th", [_vm._v("Año")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mes")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Cierre")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Adquisición")]),
        _vm._v(" "),
        _c("th", [_vm._v("Valor Adquisición")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meses a depreciarse")]),
        _vm._v(" "),
        _c("th", [_vm._v("Depreciacion Mensual")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meses")]),
        _vm._v(" "),
        _c("th", [_vm._v("Depreciacion Acumulada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Valor en libros")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true& ***!
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
            _vm._v("Histórico De Traslados de Activos Fijos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Traslados de Activos Fijos")
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
                  attrs: { to: { name: "pagina-principal-activos" } }
                },
                [_vm._v(" Módulo Activo Fijo")]
              ),
              _vm._v("> Historial Traslados Activos Fijos")
            ],
            1
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
                _vm._l(_vm.traslados_activos, function(traslados) {
                  return _c("tr", { key: traslados.id_traslado_activo }, [
                    _c("td", [
                      _vm._v(_vm._s(traslados.activo_traslado.codigo))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(traslados.activo_traslado.descripcion))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(traslados.fecha_traslado))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          traslados.activo_area_origen
                            ? traslados.activo_area_origen.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          traslados.activo_trabajador_origen
                            ? traslados.activo_trabajador_origen.nombre_completo
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          traslados.activo_area_destino
                            ? traslados.activo_area_destino.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          traslados.activo_trabajador_destino
                            ? traslados.activo_trabajador_destino
                                .nombre_completo
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          traslados.tipo_traslado == 1
                            ? "Reasignación"
                            : traslados.tipo_traslado == 2
                            ? "Prestamo"
                            : traslados.tipo_traslado == 3
                            ? "Devolución"
                            : "N/A"
                        )
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                !_vm.traslados_activos.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "7" } },
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
            items: _vm.traslados_activos,
            total: _vm.total,
            page: _vm.filter.page,
            limitOptions: _vm.filter.limitOptions,
            limit: _vm.filter.limit
          },
          on: { changePage: _vm.changePage, changeLimit: _vm.changeLimit }
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
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Traslado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Área Origen")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trabajador Origen")]),
        _vm._v(" "),
        _c("th", [_vm._v("Área Destino")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trabajador Destino")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo traslado")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Ubicación de activo")
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
                  attrs: { to: { name: "pagina-principal-activos" } }
                },
                [_vm._v(" Módulo Activo Fijo")]
              ),
              _vm._v("> Localizar activos")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [
                _vm._v("Código del activo")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.activo_busqueda,
                    expression: "activo_busqueda"
                  }
                ],
                ref: "activo",
                staticClass: "form-control",
                domProps: { value: _vm.activo_busqueda },
                on: {
                  focus: function($event) {
                    return $event.target.select()
                  },
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.buscarActivo($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.activo_busqueda = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.activo_busqueda, function(message) {
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
        _c("br"),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v(_vm._s(_vm.codigo))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.descripcion_activo))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.marca_activo))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.serie_activo))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.area_activo))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.responsable_activo))]),
                _vm._v(" "),
                _c("td", [
                  _vm.estado === 1
                    ? _c("div", [
                        _c("span", { staticClass: "badge badge-success" }, [
                          _vm._v("Activo")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.estado === 2
                    ? _c("div", [
                        _c("span", { staticClass: "badge badge-primary" }, [
                          _vm._v("Depreciado")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.estado === 0
                    ? _c("div", [
                        _c("span", { staticClass: "badge badge-danger" }, [
                          _vm._v("Baja")
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tfoot")
          ])
        ]),
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
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del activo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción del activo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Marca")]),
        _vm._v(" "),
        _c("th", [_vm._v("Serie")]),
        _vm._v(" "),
        _c("th", [_vm._v("Área actual")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trabajador asignado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=template&id=4f38fa6e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=template&id=4f38fa6e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Sucursal")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.sucursales
                    },
                    model: {
                      value: _vm.form.activo_sucursal,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_sucursal", $$v)
                      },
                      expression: "form.activo_sucursal"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_sucursal, function(
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Propietario")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.propietarios
                    },
                    model: {
                      value: _vm.form.activo_propietario,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_propietario", $$v)
                      },
                      expression: "form.activo_propietario"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_propietario, function(
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Tipo")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.tipos
                    },
                    on: { input: _vm.cargarGrupos },
                    model: {
                      value: _vm.form.activo_tipo_activo,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_tipo_activo", $$v)
                      },
                      expression: "form.activo_tipo_activo"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_tipo_activo, function(
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Grupo")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.grupos
                    },
                    model: {
                      value: _vm.form.activo_grupo,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_grupo", $$v)
                      },
                      expression: "form.activo_grupo"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_grupo, function(message) {
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Descripción")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.descripcion,
                      expression: "form.descripcion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: true,
                    placeholder: "Dígite la descripción del activo"
                  },
                  domProps: { value: _vm.form.descripcion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "descripcion", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.descripcion, function(message) {
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
                  _c("label", [_vm._v("Color")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.colores
                    },
                    model: {
                      value: _vm.form.activo_color,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_color", $$v)
                      },
                      expression: "form.activo_color"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_color, function(message) {
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Marca")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.marca,
                      expression: "form.marca"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: true,
                    placeholder: "Dígite la marca del activo"
                  },
                  domProps: { value: _vm.form.marca },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "marca", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.marca, function(message) {
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
                _c("label", [_vm._v(" Serie")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.serie,
                      expression: "form.serie"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: true,
                    placeholder: "Dígite la serie del activo"
                  },
                  domProps: { value: _vm.form.serie },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "serie", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.serie, function(message) {
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha Adquisición")
                  ]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      disabled: true,
                      language: _vm.es,
                      value: new Date(),
                      format: _vm.format
                    },
                    on: { selected: _vm.onDateSelect }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.fecha_adquisicion, function(
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Valor adquisición C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.valor_adquisicion,
                      expression: "form.valor_adquisicion",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    min: "1",
                    placeholder: "Dígite el valor del activo"
                  },
                  domProps: { value: _vm.form.valor_adquisicion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "valor_adquisicion",
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
                  _vm._l(_vm.errorMessages.valor_adquisicion, function(
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
                _c("label", [_vm._v(" Meses a depreciarse")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.meses_depreciarse,
                      expression: "form.meses_depreciarse",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    min: "1",
                    type: "number",
                    placeholder: "Dígite el numero de meses a depreciarse"
                  },
                  domProps: { value: _vm.form.meses_depreciarse },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "meses_depreciarse",
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
                  _vm._l(_vm.errorMessages.meses_depreciarse, function(
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
                _c("label", [_vm._v(" Depreciación mensual C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.calcularDepreciacion,
                      expression: "calcularDepreciacion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite la depreciación mensual"
                  },
                  domProps: { value: _vm.calcularDepreciacion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.calcularDepreciacion = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.depreciacion_mensual, function(
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
                _c("label", [_vm._v(" Depreciación acumulada C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.depreciacion_acumulada,
                      expression: "form.depreciacion_acumulada",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite la depreciación acumulada"
                  },
                  domProps: { value: _vm.form.depreciacion_acumulada },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "depreciacion_acumulada",
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
                  _vm._l(_vm.errorMessages.depreciacion_acumulada, function(
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
                _c("label", [_vm._v(" Valor en libros C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.valor_libro,
                      expression: "form.valor_libro",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite el valor actual en libros"
                  },
                  domProps: { value: _vm.form.valor_libro },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "valor_libro",
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
                  _vm._l(_vm.errorMessages.valor_libro, function(message) {
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
                _c("label", [_vm._v(" Mes depreciado")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.mes_depreciado,
                      expression: "form.mes_depreciado",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    placeholder: "Dígite el numero de meses a depreciarse"
                  },
                  domProps: { value: _vm.form.mes_depreciado },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "mes_depreciado",
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
                  _vm._l(_vm.errorMessages.mes_depreciado, function(message) {
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
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "check-label2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.es_capitalizable,
                      expression: "form.es_capitalizable"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.form.es_capitalizable)
                      ? _vm._i(_vm.form.es_capitalizable, null) > -1
                      : _vm.form.es_capitalizable
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.es_capitalizable,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form,
                              "es_capitalizable",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form,
                              "es_capitalizable",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form, "es_capitalizable", $$c)
                      }
                    }
                  }
                }),
                _c("strong", [_vm._v(" Es capitalizable ")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.mostrar_detalles_vehiculo
            ? [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v(" Placa")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.activo_detalle_vehiculo.placa,
                            expression: "form.activo_detalle_vehiculo.placa"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: true,
                          placeholder: "Dígite la placa del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.placa
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "placa",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.placa, function(message) {
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
                      _c("label", [_vm._v(" Chasis")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.activo_detalle_vehiculo.chasis,
                            expression: "form.activo_detalle_vehiculo.chasis"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: true,
                          placeholder: "Dígite el chasis del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.chasis
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "chasis",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.chasis, function(message) {
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
                      _c("label", [_vm._v(" Número de motor")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value:
                              _vm.form.activo_detalle_vehiculo.numero_motor,
                            expression:
                              "form.activo_detalle_vehiculo.numero_motor"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: true,
                          placeholder: "Dígite el numero de motor del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.numero_motor
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "numero_motor",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.numero_motor, function(
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
                      _c("label", [_vm._v(" Cilindro")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.activo_detalle_vehiculo.cilindro,
                            expression: "form.activo_detalle_vehiculo.cilindro",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: true,
                          min: "1",
                          type: "number",
                          placeholder: "Dígite el numero de cilindro"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.cilindro
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "cilindro",
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
                        _vm._l(_vm.errorMessages.cilindro, function(message) {
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
                      _c("label", [_vm._v(" Tipo combustible:")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value:
                                _vm.form.activo_detalle_vehiculo
                                  .id_tipo_combustible,
                              expression:
                                "form.activo_detalle_vehiculo.id_tipo_combustible",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { disabled: true },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return _vm._n(val)
                                })
                              _vm.$set(
                                _vm.form.activo_detalle_vehiculo,
                                "id_tipo_combustible",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Diesel")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Gasolina")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.id_tipo_combustible, function(
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
                      _c("label", [_vm._v(" Año")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.activo_detalle_vehiculo.anio,
                            expression: "form.activo_detalle_vehiculo.anio",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: true,
                          min: "1900",
                          type: "number",
                          placeholder: "Dígite el año del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.anio
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "anio",
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
                        _vm._l(_vm.errorMessages.anio, function(message) {
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
                      _c("label", [_vm._v(" Capacidad de carga")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value:
                              _vm.form.activo_detalle_vehiculo.capacidad_carga,
                            expression:
                              "form.activo_detalle_vehiculo.capacidad_carga",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          min: "1",
                          type: "number",
                          disabled: true,
                          placeholder:
                            "Dígite la capacidad de carga del vehiculo"
                        },
                        domProps: {
                          value:
                            _vm.form.activo_detalle_vehiculo.capacidad_carga
                        },
                        on: {
                          change: function($event) {
                            _vm.form.activo_detalle_vehiculo.capacidad_carga = Math.max(
                              Math.min(
                                Number(
                                  _vm.form.activo_detalle_vehiculo
                                    .capacidad_carga
                                ),
                                500
                              ),
                              1
                            )
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "capacidad_carga",
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
                        _vm._l(_vm.errorMessages.capacidad_carga, function(
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
                      _c("label", [_vm._v(" Número de pasajeros")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.activo_detalle_vehiculo.pasajeros,
                            expression:
                              "form.activo_detalle_vehiculo.pasajeros",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          min: "1",
                          type: "number",
                          disabled: true,
                          placeholder:
                            "Dígite la capacidad de pasajeros del vehiculo"
                        },
                        domProps: {
                          value: _vm.form.activo_detalle_vehiculo.pasajeros
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.activo_detalle_vehiculo,
                              "pasajeros",
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
                        _vm._l(_vm.errorMessages.pasajeros, function(message) {
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
                _c("hr")
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Área Origen")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.areas
                    },
                    model: {
                      value: _vm.form.activo_area,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_area", $$v)
                      },
                      expression: "form.activo_area"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_area, function(message) {
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Trabajador Origen")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "nombre_completo",
                      options: _vm.trabajadores
                    },
                    model: {
                      value: _vm.form.activo_trabajador,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_trabajador", $$v)
                      },
                      expression: "form.activo_trabajador"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_trabajador, function(
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Área Destino")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: { label: "descripcion", options: _vm.areas },
                    on: { change: _vm.obtenerTrabajadores },
                    model: {
                      value: _vm.form.activo_area_destino,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_area_destino", $$v)
                      },
                      expression: "form.activo_area_destino"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.activo_area_destino, function(
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Trabajador Destino")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "nombre_completo",
                      options: _vm.trabajadores_destino
                    },
                    model: {
                      value: _vm.form.activo_trabajador_destino,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "activo_trabajador_destino", $$v)
                      },
                      expression: "form.activo_trabajador_destino"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(
                      _vm.errorMessages.activo_trabajador_destino,
                      function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }
                    ),
                    0
                  )
                ],
                1
              )
            ])
          ])
        ],
        2
      ),
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
                    attrs: {
                      to: { name: "listado-activos-fijos" },
                      tag: "button"
                    }
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
                      disabled: _vm.btnAction !== "Guardar",
                      type: "button"
                    },
                    on: { click: _vm.reasignar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
                )
              ],
              1
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
        _vm._v("Trasladar Activo Fijo")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para Trasladar activo fijo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del Activo Fijo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalles del vehículo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del trabajador Asignado")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=template&id=4b4718c6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=template&id=4b4718c6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Área  Origen")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "descripcion", options: _vm.areas },
                on: { change: _vm.obtenerTrabajadoresOrigen },
                model: {
                  value: _vm.area_origen,
                  callback: function($$v) {
                    _vm.area_origen = $$v
                  },
                  expression: "area_origen"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.area_origen, function(message) {
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
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Trabajador Origen")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "nombre_completo", options: _vm.trabajadores },
                on: { change: _vm.obtenerActivosTrabajador },
                model: {
                  value: _vm.trabajador_origen,
                  callback: function($$v) {
                    _vm.trabajador_origen = $$v
                  },
                  expression: "trabajador_origen"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.trabajador_origen, function(message) {
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
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Área Destino")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "descripcion", options: _vm.areas },
                on: { change: _vm.obtenerTrabajadores },
                model: {
                  value: _vm.area_destino,
                  callback: function($$v) {
                    _vm.area_destino = $$v
                  },
                  expression: "area_destino"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.area_destino, function(message) {
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
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Trabajador Destino")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "nombre_completo",
                  options: _vm.trabajadores_destino
                },
                model: {
                  value: _vm.trabajador_destino,
                  callback: function($$v) {
                    _vm.trabajador_destino = $$v
                  },
                  expression: "trabajador_destino"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.trabajador_destino, function(message) {
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.activos_trabajador, function(activo_fijo, index) {
                  return _c("tr", { key: activo_fijo.id_activo }, [
                    _c("td", { staticStyle: { width: "2%" } }, [
                      _c(
                        "button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.eliminarLinea(activo_fijo, index)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-trash" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.codigo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(activo_fijo.descripcion))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_tipo_activo
                            ? activo_fijo.activo_tipo_activo.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          activo_fijo.activo_grupo
                            ? activo_fijo.activo_grupo.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: activo_fijo.tipo_traslado,
                              expression: "activo_fijo.tipo_traslado",
                              modifiers: { number: true }
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
                                  return _vm._n(val)
                                })
                              _vm.$set(
                                activo_fijo,
                                "tipo_traslado",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Reasignar")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Prestamo")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("Devolución")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(
                          _vm.errorMessages[
                            "activos_trabajador." + index + ".tipo_traslado"
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
                  ])
                }),
                _vm._v(" "),
                !_vm.activos_trabajador.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "5" } },
                        [
                          _vm._v(
                            "El trabajador seleccionado no tiene activos asignados"
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ],
              2
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
                    attrs: {
                      to: { name: "listado-activos-fijos" },
                      tag: "button"
                    }
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
                      disabled: _vm.btnAction !== "Guardar",
                      type: "button"
                    },
                    on: { click: _vm.reasignar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
                )
              ],
              1
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
        _vm._v("Trasladar Activos de Trabajador")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para reasignar activo fijo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del trabajador Asignado")])])
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
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Activo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Grupo Activo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo de traslado")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=template&id=a0d45b0c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Registrar.vue?vue&type=template&id=a0d45b0c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Centro de costo")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "descripcion",
                        options: _vm.centros_costos
                      },
                      model: {
                        value: _vm.form.centro_costo,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "centro_costo", $$v)
                        },
                        expression: "form.centro_costo"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.centro_costo, function(message) {
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Tipo")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.tipos },
                      on: { input: _vm.cargarGrupos },
                      model: {
                        value: _vm.form.activo_tipo,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "activo_tipo", $$v)
                        },
                        expression: "form.activo_tipo"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.activo_tipo, function(message) {
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Grupo")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.grupos },
                      model: {
                        value: _vm.form.activo_grupo,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "activo_grupo", $$v)
                        },
                        expression: "form.activo_grupo"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.activo_grupo, function(message) {
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Descripción")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion,
                        expression: "form.descripcion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Dígite la descripción del activo" },
                    domProps: { value: _vm.form.descripcion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "descripcion", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion, function(message) {
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Color")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.colores },
                      model: {
                        value: _vm.form.activo_color,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "activo_color", $$v)
                        },
                        expression: "form.activo_color"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.activo_color, function(message) {
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Marca")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.marca,
                        expression: "form.marca"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Dígite la marca del activo" },
                    domProps: { value: _vm.form.marca },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "marca", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.marca, function(message) {
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
                  _c("label", [_vm._v(" Módelo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.modelo,
                        expression: "form.modelo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Dígite el módelo del activo" },
                    domProps: { value: _vm.form.modelo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "modelo", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.modelo, function(message) {
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
                  _c("label", [_vm._v(" Serie")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.serie,
                        expression: "form.serie"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Dígite la serie del activo" },
                    domProps: { value: _vm.form.serie },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "serie", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.serie, function(message) {
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
                  _c("label", [_vm._v(" Condición")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.condicion,
                          expression: "form.condicion"
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
                            _vm.form,
                            "condicion",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Bueno")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Regular")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [_vm._v("Malo")])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha Adquisición")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        language: _vm.es,
                        value: new Date(),
                        format: _vm.format
                      },
                      on: { selected: _vm.onDateSelect },
                      model: {
                        value: _vm.fechax,
                        callback: function($$v) {
                          _vm.fechax = $$v
                        },
                        expression: "fechax"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_adquisicion, function(
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Valor adquisición C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.valor_adquisicion,
                        expression: "form.valor_adquisicion",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      placeholder: "Dígite el valor del activo"
                    },
                    domProps: { value: _vm.form.valor_adquisicion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "valor_adquisicion",
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
                    _vm._l(_vm.errorMessages.valor_adquisicion, function(
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
                  _c("label", [_vm._v(" Meses a depreciarse")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.meses_depreciarse,
                        expression: "form.meses_depreciarse",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.aplicaCalculo,
                      min: "1",
                      type: "number",
                      placeholder: "Dígite el numero de meses a depreciarse"
                    },
                    domProps: { value: _vm.form.meses_depreciarse },
                    on: {
                      change: function($event) {
                        _vm.form.meses_depreciarse = Math.max(
                          Math.min(Math.round(_vm.form.meses_depreciarse), 300),
                          1
                        )
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "meses_depreciarse",
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
                    _vm._l(_vm.errorMessages.meses_depreciarse, function(
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
                  _c("label", [_vm._v(" Depreciación mensual C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.calcularDepreciacion,
                        expression: "calcularDepreciacion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      placeholder: "Dígite la depreciación mensual"
                    },
                    domProps: { value: _vm.calcularDepreciacion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.calcularDepreciacion = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.depreciacion_mensual, function(
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Mes depreciado")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.mes_depreciado,
                        expression: "form.mes_depreciado",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.aplicaCalculo,
                      min: "1",
                      placeholder: "Dígite el numero de meses a depreciarse"
                    },
                    domProps: { value: _vm.form.mes_depreciado },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "mes_depreciado",
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
                    _vm._l(_vm.errorMessages.mes_depreciado, function(message) {
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
                  _c("label", [_vm._v(" Depreciación acumulada C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.calcularDepreciacionAcumulada,
                        expression: "calcularDepreciacionAcumulada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      min: "1",
                      type: "number",
                      placeholder: "Dígite la depreciación acumulada"
                    },
                    domProps: { value: _vm.calcularDepreciacionAcumulada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.calcularDepreciacionAcumulada = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.depreciacion_acumulada, function(
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
                  _c("label", [_vm._v(" Valor en libros C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.calcularValorEnLibro,
                        expression: "calcularValorEnLibro"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      placeholder: "Dígite el valor actual en libros"
                    },
                    domProps: { value: _vm.calcularValorEnLibro },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.calcularValorEnLibro = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.valor_libro, function(message) {
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
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "check-label2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.es_capitalizable,
                        expression: "form.es_capitalizable"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.form.es_capitalizable)
                        ? _vm._i(_vm.form.es_capitalizable, null) > -1
                        : _vm.form.es_capitalizable
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.form.es_capitalizable,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.form,
                                "es_capitalizable",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.form,
                                "es_capitalizable",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.form, "es_capitalizable", $$c)
                        }
                      }
                    }
                  }),
                  _c("strong", [_vm._v(" Es capitalizable ")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Observación")]),
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
                    attrs: { placeholder: "Dígite la observacion del activo" },
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
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Vida útil")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.vida_util_politica,
                        expression: "form.vida_util_politica",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      placeholder: "Dígite la vida útil del activo"
                    },
                    domProps: { value: _vm.form.vida_util_politica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "vida_util_politica",
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
                    _vm._l(_vm.errorMessages.vida_util_politica, function(
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
                  _c("label", [_vm._v(" Depreciación mensual C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.calcularDepreciacionPolitica,
                        expression: "calcularDepreciacionPolitica"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      placeholder: "Dígite la depreciación mensual"
                    },
                    domProps: { value: _vm.calcularDepreciacionPolitica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.calcularDepreciacionPolitica = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(
                      _vm.errorMessages.depreciacion_mensual_politica,
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
                  _c("label", [_vm._v(" Meses depreciados")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.mes_depreciado_politica,
                        expression: "form.mes_depreciado_politica",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.aplicaCalculo,
                      min: "1",
                      placeholder: "Dígite la cantidad de meses depreciado"
                    },
                    domProps: { value: _vm.form.mes_depreciado_politica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "mes_depreciado_politica",
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
                    _vm._l(_vm.errorMessages.mes_depreciado, function(message) {
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
                  _c("label", [_vm._v(" Depreciación acumulada C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.calcularDepreciacionAcumuladaPolitica,
                        expression: "calcularDepreciacionAcumuladaPolitica"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      min: "1",
                      type: "number",
                      placeholder: "Dígite la depreciación acumulada"
                    },
                    domProps: {
                      value: _vm.calcularDepreciacionAcumuladaPolitica
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.calcularDepreciacionAcumuladaPolitica =
                          $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(
                      _vm.errorMessages.depreciacion_acumulada_politica,
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
                  _c("label", [_vm._v(" Valor en libros C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.calcularValorEnLibroPolitica,
                        expression: "calcularValorEnLibroPolitica"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      placeholder: "Dígite el valor actual en libros"
                    },
                    domProps: { value: _vm.calcularValorEnLibroPolitica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.calcularValorEnLibroPolitica = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.valor_libro_politica, function(
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
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm.mostrar_detalles_vehiculo
              ? [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Placa")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.placa,
                              expression: "form.placa"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: "Dígite la placa del vehiculo"
                          },
                          domProps: { value: _vm.form.placa },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "placa", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.placa, function(message) {
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
                        _c("label", [_vm._v(" Chasis")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.chasis,
                              expression: "form.chasis"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: "Dígite el chasis del vehiculo"
                          },
                          domProps: { value: _vm.form.chasis },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "chasis", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.chasis, function(message) {
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
                        _c("label", [_vm._v(" Número de motor")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.numero_motor,
                              expression: "form.numero_motor"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder:
                              "Dígite el numero de motor del vehiculo"
                          },
                          domProps: { value: _vm.form.numero_motor },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "numero_motor",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.numero_motor, function(
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
                        _c("label", [_vm._v(" Cilindro")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.form.cilindro,
                              expression: "form.cilindro",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            min: "1",
                            type: "number",
                            placeholder: "Dígite el numero de cilindro"
                          },
                          domProps: { value: _vm.form.cilindro },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "cilindro",
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
                          _vm._l(_vm.errorMessages.cilindro, function(message) {
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
                        _c("label", [_vm._v(" Tipo combustible:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.form.id_tipo_combustible,
                                expression: "form.id_tipo_combustible",
                                modifiers: { number: true }
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
                                    return _vm._n(val)
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "id_tipo_combustible",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("Diesel")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Gasolina")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(
                            _vm.errorMessages.id_tipo_combustible,
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
                        _c("label", [_vm._v(" Año")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.form.anio,
                              expression: "form.anio",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            min: "1900",
                            type: "number",
                            placeholder: "Dígite el año del vehiculo"
                          },
                          domProps: { value: _vm.form.anio },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "anio",
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
                          _vm._l(_vm.errorMessages.anio, function(message) {
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
                        _c("label", [_vm._v(" Capacidad de carga")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.form.capacidad_carga,
                              expression: "form.capacidad_carga",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            min: "1",
                            type: "number",
                            placeholder:
                              "Dígite la capacidad de carga del vehiculo"
                          },
                          domProps: { value: _vm.form.capacidad_carga },
                          on: {
                            change: function($event) {
                              _vm.form.capacidad_carga = Math.max(
                                Math.min(Number(_vm.form.capacidad_carga), 500),
                                1
                              )
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "capacidad_carga",
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
                          _vm._l(_vm.errorMessages.capacidad_carga, function(
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
                        _c("label", [_vm._v(" Número de pasajeros")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.form.pasajeros,
                              expression: "form.pasajeros",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            min: "1",
                            type: "number",
                            placeholder:
                              "Dígite la capacidad de pasajeros del vehiculo"
                          },
                          domProps: { value: _vm.form.pasajeros },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "pasajeros",
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
                          _vm._l(_vm.errorMessages.pasajeros, function(
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
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Área")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.areas },
                      on: { change: _vm.obtenerTrabajadores },
                      model: {
                        value: _vm.form.activo_area,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "activo_area", $$v)
                        },
                        expression: "form.activo_area"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.activo_area, function(message) {
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Trabajador")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "nombre_completo",
                        options: _vm.trabajadores
                      },
                      model: {
                        value: _vm.form.activo_trabajador,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "activo_trabajador", $$v)
                        },
                        expression: "form.activo_trabajador"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.activo_trabajador, function(
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
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      tag: "button",
                      to: { name: "listado-activos-fijos" }
                    }
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
                      type: "button",
                      disabled: _vm.btnAction != "Registrar" ? true : false
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
        _vm._v("Registrar y Asignar Activo Fijo")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar de activos fijos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "alert alert-success" }, [
        _c("span", [_c("strong", [_vm._v("Según politica interna")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalles del vehículo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del Trabajador asignado")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=template&id=490d122c&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=template&id=490d122c& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("form", [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", [_vm._v("Sucursal")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: {
                    disabled: true,
                    label: "descripcion",
                    options: _vm.sucursales
                  },
                  model: {
                    value: _vm.form.activo_sucursal,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "activo_sucursal", $$v)
                    },
                    expression: "form.activo_sucursal"
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.activo_sucursal, function(message) {
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
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", [_vm._v("Propietario")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: {
                    disabled: true,
                    label: "descripcion",
                    options: _vm.propietarios
                  },
                  model: {
                    value: _vm.form.activo_propietario,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "activo_propietario", $$v)
                    },
                    expression: "form.activo_propietario"
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.activo_propietario, function(
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
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", [_vm._v("Tipo")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: {
                    disabled: true,
                    label: "descripcion",
                    options: _vm.tipos
                  },
                  on: { input: _vm.cargarGrupos },
                  model: {
                    value: _vm.form.activo_tipo_activo,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "activo_tipo_activo", $$v)
                    },
                    expression: "form.activo_tipo_activo"
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.activo_tipo_activo, function(
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
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", [_vm._v("Grupo")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: {
                    disabled: true,
                    label: "descripcion",
                    options: _vm.grupos
                  },
                  model: {
                    value: _vm.form.activo_grupo,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "activo_grupo", $$v)
                    },
                    expression: "form.activo_grupo"
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.activo_grupo, function(message) {
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("  Descripción")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.descripcion,
                    expression: "form.descripcion"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite la descripción del activo"
                },
                domProps: { value: _vm.form.descripcion },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "descripcion", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.descripcion, function(message) {
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
                _c("label", [_vm._v("Color")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: {
                    disabled: true,
                    label: "descripcion",
                    options: _vm.colores
                  },
                  model: {
                    value: _vm.form.activo_color,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "activo_color", $$v)
                    },
                    expression: "form.activo_color"
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.activo_color, function(message) {
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
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v(" Marca")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.marca,
                    expression: "form.marca"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite la marca del activo"
                },
                domProps: { value: _vm.form.marca },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "marca", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.marca, function(message) {
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
              _c("label", [_vm._v(" Serie")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.serie,
                    expression: "form.serie"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite la serie del activo"
                },
                domProps: { value: _vm.form.serie },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "serie", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.serie, function(message) {
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Fecha Adquisición")
                ]),
                _vm._v(" "),
                _c("datepicker", {
                  attrs: {
                    disabled: true,
                    language: _vm.es,
                    value: new Date(),
                    format: _vm.format
                  },
                  on: { selected: _vm.onDateSelect }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.fecha_adquisicion, function(
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
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v(" Valor adquisición C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.valor_adquisicion,
                    expression: "form.valor_adquisicion",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  min: "1",
                  placeholder: "Dígite el valor del activo"
                },
                domProps: { value: _vm.form.valor_adquisicion },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "valor_adquisicion",
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
                _vm._l(_vm.errorMessages.valor_adquisicion, function(message) {
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
              _c("label", [_vm._v(" Meses a depreciarse")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.meses_depreciarse,
                    expression: "form.meses_depreciarse",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  min: "1",
                  type: "number",
                  placeholder: "Dígite el numero de meses a depreciarse"
                },
                domProps: { value: _vm.form.meses_depreciarse },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "meses_depreciarse",
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
                _vm._l(_vm.errorMessages.meses_depreciarse, function(message) {
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
              _c("label", [_vm._v(" Depreciación mensual C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.calcularDepreciacion,
                    expression: "calcularDepreciacion"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite la depreciación mensual"
                },
                domProps: { value: _vm.calcularDepreciacion },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.calcularDepreciacion = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.depreciacion_mensual, function(
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
              _c("label", [_vm._v(" Depreciación acumulada C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.depreciacion_acumulada,
                    expression: "form.depreciacion_acumulada",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite la depreciación acumulada"
                },
                domProps: { value: _vm.form.depreciacion_acumulada },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "depreciacion_acumulada",
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
                _vm._l(_vm.errorMessages.depreciacion_acumulada, function(
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
              _c("label", [_vm._v(" Valor en libros C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.valor_libro,
                    expression: "form.valor_libro",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite el valor actual en libros"
                },
                domProps: { value: _vm.form.valor_libro },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "valor_libro",
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
                _vm._l(_vm.errorMessages.valor_libro, function(message) {
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
              _c("label", [_vm._v(" Mes depreciado")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.mes_depreciado,
                    expression: "form.mes_depreciado",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite el numero de meses a depreciarse"
                },
                domProps: { value: _vm.form.mes_depreciado },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "mes_depreciado",
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
                _vm._l(_vm.errorMessages.mes_depreciado, function(message) {
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
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "check-label2" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.es_capitalizable,
                    expression: "form.es_capitalizable"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.form.es_capitalizable)
                    ? _vm._i(_vm.form.es_capitalizable, null) > -1
                    : _vm.form.es_capitalizable
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.es_capitalizable,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.form,
                            "es_capitalizable",
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.form,
                            "es_capitalizable",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.form, "es_capitalizable", $$c)
                    }
                  }
                }
              }),
              _c("strong", [_vm._v(" Es capitalizable ")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Vida útil")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.vida_util_politica,
                        expression: "form.vida_util_politica",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      type: "number",
                      placeholder: "Dígite la vida útil del activo"
                    },
                    domProps: { value: _vm.form.vida_util_politica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "vida_util_politica",
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
                    _vm._l(_vm.errorMessages.vida_util_politica, function(
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
                  _c("label", [_vm._v(" Depreciación mensual C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.depreciacion_mensual_politica,
                        expression: "form.depreciacion_mensual_politica"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      placeholder: "Dígite la depreciación mensual"
                    },
                    domProps: { value: _vm.form.depreciacion_mensual_politica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "depreciacion_mensual_politica",
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
                      _vm.errorMessages.depreciacion_mensual_politica,
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
                  _c("label", [_vm._v(" Meses depreciados")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.mes_depreciado_politica,
                        expression: "form.mes_depreciado_politica",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      min: "1",
                      placeholder: "Dígite la cantidad de meses depreciado"
                    },
                    domProps: { value: _vm.form.mes_depreciado_politica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "mes_depreciado_politica",
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
                    _vm._l(_vm.errorMessages.mes_depreciado, function(message) {
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
                  _c("label", [_vm._v(" Depreciación acumulada C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.depreciacion_acumulada_politica,
                        expression: "form.depreciacion_acumulada_politica"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      disabled: "",
                      min: "1",
                      type: "number",
                      placeholder: "Dígite la depreciación acumulada"
                    },
                    domProps: {
                      value: _vm.form.depreciacion_acumulada_politica
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "depreciacion_acumulada_politica",
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
                      _vm.errorMessages.depreciacion_acumulada_politica,
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
                  _c("label", [_vm._v(" Valor en libros C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.valor_libro_politica,
                        expression: "form.valor_libro_politica"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      disabled: "",
                      placeholder: "Dígite el valor actual en libros"
                    },
                    domProps: { value: _vm.form.valor_libro_politica },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "valor_libro_politica",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.valor_libro_politica, function(
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
            ])
          ]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v(" Valor revaluo")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.valor_revaluo,
                    expression: "form.valor_revaluo",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: { placeholder: "Dígite el nuevo valor del activo" },
                domProps: { value: _vm.form.valor_revaluo },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "valor_revaluo",
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
                _vm._l(_vm.errorMessages.valor_revaluo, function(message) {
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
              _c("label", [_vm._v(" Vida útil adicional")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.vida_util,
                    expression: "form.vida_util",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  min: "0",
                  type: "number",
                  placeholder: "Dígite la vida útil adicional del activo"
                },
                domProps: { value: _vm.form.vida_util },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "vida_util", _vm._n($event.target.value))
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
                _vm._l(_vm.errorMessages.vida_util, function(message) {
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
              _c("label", [_vm._v(" Meses a depreciarse")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.calcularVidaUtil,
                    expression: "calcularVidaUtil"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  type: "number",
                  placeholder: "Dígite la vida útil adicional del activo"
                },
                domProps: { value: _vm.calcularVidaUtil },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.calcularVidaUtil = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.vida_util, function(message) {
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
              _c("label", [_vm._v(" Depreciación mensual C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.calcularDepreciacionRevaluada,
                    expression: "calcularDepreciacionRevaluada"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  placeholder: "Dígite la depreciación mensual"
                },
                domProps: { value: _vm.calcularDepreciacionRevaluada },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.calcularDepreciacionRevaluada = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(
                  _vm.errorMessages.depreciacion_mensual_politica,
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
              _c("label", [_vm._v(" Meses depreciados")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.mes_depreciado_revaluada,
                    expression: "form.mes_depreciado_revaluada",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  min: "1",
                  placeholder: "Dígite la cantidad de meses depreciado"
                },
                domProps: { value: _vm.form.mes_depreciado_revaluada },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "mes_depreciado_revaluada",
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
                _vm._l(_vm.errorMessages.mes_depreciado_revaluada, function(
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
              _c("label", [_vm._v(" Depreciación acumulada C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.calcularDepreciacionAcumuladaRevaluada,
                    expression: "calcularDepreciacionAcumuladaRevaluada"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  disabled: "",
                  min: "1",
                  type: "number",
                  placeholder: "Dígite la depreciación acumulada"
                },
                domProps: { value: _vm.calcularDepreciacionAcumuladaRevaluada },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.calcularDepreciacionAcumuladaRevaluada =
                      $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(
                  _vm.errorMessages.depreciacion_acumulada_revaluada,
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
              _c("label", [_vm._v(" Valor en libros C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.calcularValorEnLibroRevaluada,
                    expression: "calcularValorEnLibroRevaluada"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  disabled: "",
                  disabled: "",
                  placeholder: "Dígite el valor actual en libros"
                },
                domProps: { value: _vm.calcularValorEnLibroRevaluada },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.calcularValorEnLibroRevaluada = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.valor_libro_revaluada, function(
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
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12" }, [
            _c("table", { staticClass: "table table-striped table-bordered" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Valor en libros")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.form.valor_libro))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Valor revaluo")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.form.valor_revaluo))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("( - )")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.calcularRevaluacion))])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", [_vm._v("Área")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: {
                    disabled: true,
                    label: "descripcion",
                    options: _vm.areas
                  },
                  model: {
                    value: _vm.form.activo_area,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "activo_area", $$v)
                    },
                    expression: "form.activo_area"
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.activo_area, function(message) {
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
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", [_vm._v("Trabajador")]),
                _vm._v(" "),
                _c("v-select", {
                  attrs: {
                    disabled: true,
                    label: "nombre_completo",
                    options: _vm.trabajadores
                  },
                  model: {
                    value: _vm.form.activo_trabajador,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "activo_trabajador", $$v)
                    },
                    expression: "form.activo_trabajador"
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.activo_trabajador, function(
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
                    attrs: {
                      to: { name: "listado-activos-fijos" },
                      tag: "button"
                    }
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
                      disabled: _vm.btnAction != "Guardar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.actualizar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
                )
              ],
              1
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
        _vm._v("Revaluación de activo")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para revaluar activo")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del Activo Fijo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Según politica interna")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "alert alert-success" }, [
        _c("span", [_c("strong", [_vm._v("Revaluación del activo")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "alert alert-success" }, [
        _c("span", [_c("strong", [_vm._v("Detalles de revaluo")])])
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
          _vm._v("Descripción")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [_vm._v("Monto")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del trabajador Asignado")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/solicitudes_pago.js":
/*!***********************************************!*\
  !*** ./resources/app/api/solicitudes_pago.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  nueva: function nueva(data, cb, errorCb) {
    axios.post('bancos/cheques/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevaContabilizacion: function nuevaContabilizacion(data, cb, errorCb) {
    axios.post('bancos/cheques/nueva-contabilizacion', data).then(function (response) {
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
    axios.post('bancos/cheques/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSolicitudesAprobacion: function obtenerSolicitudesAprobacion(data, cb, errorCb) {
    axios.post('bancos/cheques/obtener-aprobacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSolicitudPago: function obtenerSolicitudPago(data, cb, errorCb) {
    axios.post('bancos/cheques/obtener-solicitud', data).then(function (response) {
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
    axios.post('bancos/cheques/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  revisar: function revisar(data, cb, errorCb) {
    axios.put('bancos/cheques/revisar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  contabilizar: function contabilizar(data, cb, errorCb) {
    axios.put('bancos/cheques/contabilizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstadoSolicitudPago: function cambiarEstadoSolicitudPago(data, cb, errorCb) {
    axios.put('bancos/cheques/cambiar-estado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  aprobar: function aprobar(data, cb, errorCb) {
    axios.put('bancos/cheques/aprobar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  emitir: function emitir(data, cb, errorCb) {
    axios.put('bancos/cheques/emitir', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  entregar: function entregar(data, cb, errorCb) {
    axios.put('bancos/cheques/entregar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  anular: function anular(data, cb, errorCb) {
    axios.put('bancos/cheques/anular', data).then(function (response) {
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

/***/ "./resources/app/components/activos_fijos/Actualizar.vue":
/*!***************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Actualizar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_6000c373___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=6000c373& */ "./resources/app/components/activos_fijos/Actualizar.vue?vue&type=template&id=6000c373&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_6000c373___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_6000c373___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/Actualizar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Actualizar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Actualizar.vue?vue&type=template&id=6000c373&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Actualizar.vue?vue&type=template&id=6000c373& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_6000c373___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=6000c373& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Actualizar.vue?vue&type=template&id=6000c373&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_6000c373___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_6000c373___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue":
/*!***************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutorizacionBajaActivo_vue_vue_type_template_id_1a97b54a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true& */ "./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true&");
/* harmony import */ var _AutorizacionBajaActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutorizacionBajaActivo.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AutorizacionBajaActivo_vue_vue_type_style_index_0_id_1a97b54a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true& */ "./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AutorizacionBajaActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutorizacionBajaActivo_vue_vue_type_template_id_1a97b54a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutorizacionBajaActivo_vue_vue_type_template_id_1a97b54a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a97b54a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/AutorizacionBajaActivo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutorizacionBajaActivo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_style_index_0_id_1a97b54a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=style&index=0&id=1a97b54a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_style_index_0_id_1a97b54a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_style_index_0_id_1a97b54a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_style_index_0_id_1a97b54a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_style_index_0_id_1a97b54a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_style_index_0_id_1a97b54a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_template_id_1a97b54a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/AutorizacionBajaActivo.vue?vue&type=template&id=1a97b54a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_template_id_1a97b54a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutorizacionBajaActivo_vue_vue_type_template_id_1a97b54a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/GenerarActaEntrega.vue":
/*!***********************************************************************!*\
  !*** ./resources/app/components/activos_fijos/GenerarActaEntrega.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenerarActaEntrega_vue_vue_type_template_id_17844a1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerarActaEntrega.vue?vue&type=template&id=17844a1e& */ "./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=template&id=17844a1e&");
/* harmony import */ var _GenerarActaEntrega_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerarActaEntrega.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenerarActaEntrega_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenerarActaEntrega_vue_vue_type_template_id_17844a1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenerarActaEntrega_vue_vue_type_template_id_17844a1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/GenerarActaEntrega.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarActaEntrega_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GenerarActaEntrega.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarActaEntrega_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=template&id=17844a1e&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=template&id=17844a1e& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarActaEntrega_vue_vue_type_template_id_17844a1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GenerarActaEntrega.vue?vue&type=template&id=17844a1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarActaEntrega.vue?vue&type=template&id=17844a1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarActaEntrega_vue_vue_type_template_id_17844a1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarActaEntrega_vue_vue_type_template_id_17844a1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/GenerarCierre.vue":
/*!******************************************************************!*\
  !*** ./resources/app/components/activos_fijos/GenerarCierre.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenerarCierre_vue_vue_type_template_id_0a5aa721___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerarCierre.vue?vue&type=template&id=0a5aa721& */ "./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=template&id=0a5aa721&");
/* harmony import */ var _GenerarCierre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerarCierre.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenerarCierre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenerarCierre_vue_vue_type_template_id_0a5aa721___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenerarCierre_vue_vue_type_template_id_0a5aa721___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/GenerarCierre.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarCierre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GenerarCierre.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarCierre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=template&id=0a5aa721&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=template&id=0a5aa721& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarCierre_vue_vue_type_template_id_0a5aa721___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GenerarCierre.vue?vue&type=template&id=0a5aa721& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/GenerarCierre.vue?vue&type=template&id=0a5aa721&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarCierre_vue_vue_type_template_id_0a5aa721___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenerarCierre_vue_vue_type_template_id_0a5aa721___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/Listado.vue":
/*!************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Listado.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_85d34cca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=85d34cca&scoped=true& */ "./resources/app/components/activos_fijos/Listado.vue?vue&type=template&id=85d34cca&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_85d34cca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true& */ "./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_85d34cca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_85d34cca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "85d34cca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/Listado.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Listado.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_85d34cca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=style&index=0&id=85d34cca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_85d34cca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_85d34cca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_85d34cca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_85d34cca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_85d34cca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Listado.vue?vue&type=template&id=85d34cca&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Listado.vue?vue&type=template&id=85d34cca&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_85d34cca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=85d34cca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Listado.vue?vue&type=template&id=85d34cca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_85d34cca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_85d34cca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoCierres.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoCierres.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoCierres_vue_vue_type_template_id_82d5e07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true& */ "./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true&");
/* harmony import */ var _ListadoCierres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoCierres.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoCierres_vue_vue_type_style_index_0_id_82d5e07c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true& */ "./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoCierres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoCierres_vue_vue_type_template_id_82d5e07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoCierres_vue_vue_type_template_id_82d5e07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "82d5e07c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/ListadoCierres.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCierres.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_style_index_0_id_82d5e07c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=style&index=0&id=82d5e07c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_style_index_0_id_82d5e07c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_style_index_0_id_82d5e07c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_style_index_0_id_82d5e07c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_style_index_0_id_82d5e07c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_style_index_0_id_82d5e07c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_template_id_82d5e07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoCierres.vue?vue&type=template&id=82d5e07c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_template_id_82d5e07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCierres_vue_vue_type_template_id_82d5e07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoTraslados.vue":
/*!*********************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoTraslados.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoTraslados_vue_vue_type_template_id_663d07d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true& */ "./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true&");
/* harmony import */ var _ListadoTraslados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoTraslados.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoTraslados_vue_vue_type_style_index_0_id_663d07d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true& */ "./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoTraslados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoTraslados_vue_vue_type_template_id_663d07d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoTraslados_vue_vue_type_template_id_663d07d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "663d07d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/ListadoTraslados.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoTraslados.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_style_index_0_id_663d07d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=style&index=0&id=663d07d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_style_index_0_id_663d07d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_style_index_0_id_663d07d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_style_index_0_id_663d07d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_style_index_0_id_663d07d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_style_index_0_id_663d07d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_template_id_663d07d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ListadoTraslados.vue?vue&type=template&id=663d07d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_template_id_663d07d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoTraslados_vue_vue_type_template_id_663d07d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/LocalizarActivo.vue":
/*!********************************************************************!*\
  !*** ./resources/app/components/activos_fijos/LocalizarActivo.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocalizarActivo_vue_vue_type_template_id_30dcfa4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true& */ "./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true&");
/* harmony import */ var _LocalizarActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalizarActivo.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LocalizarActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocalizarActivo_vue_vue_type_template_id_30dcfa4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LocalizarActivo_vue_vue_type_template_id_30dcfa4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30dcfa4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/LocalizarActivo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalizarActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocalizarActivo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalizarActivo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalizarActivo_vue_vue_type_template_id_30dcfa4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/LocalizarActivo.vue?vue&type=template&id=30dcfa4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalizarActivo_vue_vue_type_template_id_30dcfa4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalizarActivo_vue_vue_type_template_id_30dcfa4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/Reasignar.vue":
/*!**************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Reasignar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reasignar_vue_vue_type_template_id_4f38fa6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reasignar.vue?vue&type=template&id=4f38fa6e& */ "./resources/app/components/activos_fijos/Reasignar.vue?vue&type=template&id=4f38fa6e&");
/* harmony import */ var _Reasignar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reasignar.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/Reasignar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Reasignar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reasignar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Reasignar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reasignar_vue_vue_type_template_id_4f38fa6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reasignar_vue_vue_type_template_id_4f38fa6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/Reasignar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/Reasignar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Reasignar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reasignar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reasignar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Reasignar.vue?vue&type=template&id=4f38fa6e&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Reasignar.vue?vue&type=template&id=4f38fa6e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_template_id_4f38fa6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reasignar.vue?vue&type=template&id=4f38fa6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Reasignar.vue?vue&type=template&id=4f38fa6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_template_id_4f38fa6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reasignar_vue_vue_type_template_id_4f38fa6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/ReasignarLote.vue":
/*!******************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ReasignarLote.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReasignarLote_vue_vue_type_template_id_4b4718c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReasignarLote.vue?vue&type=template&id=4b4718c6& */ "./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=template&id=4b4718c6&");
/* harmony import */ var _ReasignarLote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReasignarLote.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReasignarLote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReasignarLote_vue_vue_type_template_id_4b4718c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReasignarLote_vue_vue_type_template_id_4b4718c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/ReasignarLote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReasignarLote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReasignarLote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReasignarLote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=template&id=4b4718c6&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=template&id=4b4718c6& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReasignarLote_vue_vue_type_template_id_4b4718c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReasignarLote.vue?vue&type=template&id=4b4718c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/ReasignarLote.vue?vue&type=template&id=4b4718c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReasignarLote_vue_vue_type_template_id_4b4718c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReasignarLote_vue_vue_type_template_id_4b4718c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/Registrar.vue":
/*!**************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Registrar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_a0d45b0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=a0d45b0c& */ "./resources/app/components/activos_fijos/Registrar.vue?vue&type=template&id=a0d45b0c&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_a0d45b0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_a0d45b0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/Registrar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Registrar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Registrar.vue?vue&type=template&id=a0d45b0c&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Registrar.vue?vue&type=template&id=a0d45b0c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_a0d45b0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=a0d45b0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Registrar.vue?vue&type=template&id=a0d45b0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_a0d45b0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_a0d45b0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/activos_fijos/Revaluacion.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Revaluacion.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Revaluacion_vue_vue_type_template_id_490d122c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Revaluacion.vue?vue&type=template&id=490d122c& */ "./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=template&id=490d122c&");
/* harmony import */ var _Revaluacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Revaluacion.vue?vue&type=script&lang=js& */ "./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Revaluacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Revaluacion.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Revaluacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Revaluacion_vue_vue_type_template_id_490d122c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Revaluacion_vue_vue_type_template_id_490d122c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos_fijos/Revaluacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Revaluacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Revaluacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=template&id=490d122c&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=template&id=490d122c& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_template_id_490d122c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Revaluacion.vue?vue&type=template&id=490d122c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos_fijos/Revaluacion.vue?vue&type=template&id=490d122c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_template_id_490d122c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Revaluacion_vue_vue_type_template_id_490d122c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);