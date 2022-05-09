(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asignacion-ingreso-deduccion"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_asignacion_ingreso_deduccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/asignacion-ingreso-deduccion */ "./resources/app/api/asignacion-ingreso-deduccion.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando contenido, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      form: {
        solicitud_detalle: [],
        num_solicitud: '',
        trabajador: [],
        cantidad_dias: '',
        justificacion: '',
        costo_vacaciones: '',
        total_dias: '',
        saldo_dias: '',
        dias_meses: 30,
        salario_basico: 0
      },
      trabajadores: [],
      ingresos: [],
      planillas: [],
      btnAction: 'Guardar',
      btnActionConf: 'Confirmar',
      errorMessages: []
    };
  },
  methods: {
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this; //Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false

      _api_asignacion_ingreso_deduccion__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerAsignacion({
        id_cat_ingreso_deduccion_trabajador: this.$route.params.id_cat_ingreso_deduccion_trabajador
      }, function (data) {
        self.form = data;
        self.trabajadores = data.trabajadores;
        self.ingresos = data.ingresos;
        self.planillas = data.planillas;
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_cat_ingreso_deduccion_trabajador[0], 5);

        _this.$router.push({
          name: 'listado-asignacion-ingreso'
        });
      });
    },
    actualizar: function actualizar(estado) {
      var _this2 = this;

      var self = this;
      self.loading = true;
      self.btnAction = 'Guardando, espere......';
      self.btnActionConf = 'Guardando, espere......';
      self.form.estado = estado;
      _api_asignacion_ingreso_deduccion__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
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
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.form.cantidad_dias) {
        var i = 0;
        var keyx = 0;

        if (self.form.solicitud_detalle) {
          self.form.solicitud_detalle.forEach(function (fila, key) {
            if (self.form.cantidad_dias === fila.cantidad_dias) {
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
            anio: this.form.anio,
            mes: this.form.mes
          });
          /*	this.form.fecha_desdex='';
                                this.form.fecha_hastax='';*/

          this.form.cantidad_dias = '';
          this.form.anio = '';
          this.form.mes = '';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
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
    limpiarDetalle: function limpiarDetalle() {
      this.form.detalleSolicitud = [];
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_planilla_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/planilla-control */ "./resources/app/api/planilla-control.js");
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
//
//
//
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
      descargando: false,
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
          value: "",
          status: 0
        }
      },
      planillas: [],
      total: 0
    };
  },
  methods: {
    obtenerplanillas: function obtenerplanillas() {
      var self = this;
      self.loading = true;
      _api_planilla_control__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.planillas = data.rows;
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
      this.obtenerFacturas();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerFacturas();
    },
    downloadItem: function downloadItem(extension, id_importacionx) {
      var self = this;

      if (!this.descargando) {
        self.loading = true;
        var url = 'inventario/facturas/reporte/' + extension + '/' + id_importacionx;
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'text/plain'
          });
          extension === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'FormatoFactura.' + extension;
          link.click(); //this.descargando = false;

          self.loading = false;
          self.descargando = false;
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
          pagination: Pagination
        },*/
  mounted: function mounted() {
    this.obtenerplanillas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_asignacion_ingreso_deduccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/asignacion-ingreso-deduccion */ "./resources/app/api/asignacion-ingreso-deduccion.js");
/* harmony import */ var _api_trabajadores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/trabajadores */ "./resources/app/api/trabajadores.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "dd-MM-yyyy",
      form: {
        detalleSolicitud: [],
        trabajador: [],
        planilla: [],
        ingreso: [],
        monto: 0
      },
      trabajadores: [],
      planillas: [],
      ingresos: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  methods: {
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_asignacion_ingreso_deduccion__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({
        id_planilla_control: this.$route.params.id_planilla_control
      }, function (data) {
        self.trabajadores = data.trabajadores;
        self.planillas = data.planillas;
        self.ingresos = data.ingresos;
        self.form.planilla = data.planilla;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    obtenerIngreso: function obtenerIngreso() {
      var self = this;
      self.loading = true;
      this.form.detalleSolicitud = [];
      _api_asignacion_ingreso_deduccion__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerIngreso({
        id_planilla_control: this.$route.params.id_planilla_control,
        id_trabajador: this.form.trabajador.id_trabajador
      }, function (data) {
        self.form.detalleSolicitud = data.ingresos;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.loading = true;
      _api_asignacion_ingreso_deduccion__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.loading = false;
        alertify.success("Datos registrados correctamente", 5);

        _this.$router.push({
          name: 'listado-asignacion-ingreso'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.form.trabajador.id_trabajador > 0 && this.form.monto > 0) {
        if (this.form.planilla.id_planilla_control > 0 && this.form.ingreso.id_cat_ingreso_deduccion > 0) {
          var i = 0;
          var keyx = 0;
          /*if (self.form.detalleSolicitud) {
          	self.form.detalleSolicitud.forEach((fila, key) => {
          		if (self.form.descripcion === fila.descripcion) {
          			i++;
          			keyx = key;
          		}
          	});
          }*/

          if (i === 0) {
            this.form.detalleSolicitud.push({
              id_cat_ingreso_deduccion_trabajador: 0,
              estado: 1,
              id_planilla_control: this.form.planilla.id_planilla_control,
              id_sucursal: this.form.planilla.id_sucursal,
              id_trabajador: this.form.trabajador.id_trabajador,
              asignacion_ingreso: this.form.ingreso,
              codigo: this.form.ingreso.codigo,
              descripcion: this.form.ingreso.descripcion,
              id_cat_ingreso_deduccion: this.form.ingreso.id_cat_ingreso_deduccion,
              monto: this.form.monto
            });
            this.form.ingreso = '';
            this.form.codigo = '';
            this.form.descripcion = '';
            this.form.monto = '';
          } else {
            alertify.warning("Ya existe un registro con la descripcion seleccionada", 5);
          }
        } else {
          alertify.warning("Verifique que ningún campo está vacío", 5);
        }
      } else {
        alertify.warning("Verifique que ningún campo está vacío", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleSolicitud.length >= 1) {
        //this.form.detalleSolicitud.splice(index, 1);
        item.estado = 0;
      } else {
        this.form.detalleSolicitud = [];
      }
    },
    limpiarDetalle: function limpiarDetalle() {
      this.form.detalleSolicitud = [];
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-6d6e33d3] {\n  min-width: 120px;\n}\n.table a[data-v-6d6e33d3] {\n  color: #2675dc;\n}\n.table .table-number[data-v-6d6e33d3] {\n  width: 60px;\n}\n.table .action[data-v-6d6e33d3] {\n  width: 180px;\n}\n.table .detail-link[data-v-6d6e33d3] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-6d6e33d3] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-6d6e33d3]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=template&id=c107c38a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=template&id=c107c38a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Planilla")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "planilla", options: _vm.planillas },
                model: {
                  value: _vm.form.planilla,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "planilla", $$v)
                  },
                  expression: "form.planilla"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.planilla, function(message) {
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
                _vm._v("Ingreso/Deducción")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "ingreso", options: _vm.ingresos },
                model: {
                  value: _vm.form.ingreso,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "ingreso", $$v)
                  },
                  expression: "form.ingreso"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.ingreso, function(message) {
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Empleado")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "nombre_completo", options: _vm.trabajadores },
                on: {
                  input: function($event) {
                    return _vm.limpiarDetalle()
                  }
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
                    _vm.$set(_vm.form.trabajador, "trabajador_area", $$v)
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
                    _vm.$set(_vm.form.trabajador, "trabajador_cargo", $$v)
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
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Monto")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.monto,
                  expression: "form.monto"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: false, type: "number", min: "0" },
              domProps: { value: _vm.form.monto },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "monto", $event.target.value)
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
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "ul",
            { staticClass: "error-messages" },
            _vm._l(_vm.errorMessages.detalleSolicitud, function(message) {
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
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.detalleSolicitud, function(item, index) {
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
                        _c(
                          "td",
                          [
                            _c("v-select", {
                              attrs: {
                                label: "ingreso",
                                disabled: true,
                                options: _vm.ingresos
                              },
                              model: {
                                value: item.ingreso,
                                callback: function($$v) {
                                  _vm.$set(item, "ingreso", $$v)
                                },
                                expression: "item.ingreso"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages[
                                  "detalleSolicitud." + index + ".ingreso"
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
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.codigo,
                                expression: "item.codigo"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true, type: "number", min: "0" },
                            domProps: { value: item.codigo },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "codigo", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(
                              _vm.errorMessages[
                                "detalleSolicitud." + index + ".codigo"
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
                                value: item.descripcion,
                                expression: "item.descripcion"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true, type: "text" },
                            domProps: { value: item.descripcion },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  item,
                                  "descripcion",
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
                                "detalleSolicitud." + index + ".descripcion"
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
                                value: item.monto,
                                expression: "item.monto"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: true, type: "number", min: "0" },
                            domProps: { value: item.monto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "monto", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(
                              _vm.errorMessages[
                                "detalleSolicitud." + index + ".monto"
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
              _vm._m(3)
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
                      to: { name: "listado-asignacion-ingreso" },
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
      _c("span", [_c("strong", [_vm._v("Detalle de asignación")])])
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
          _vm._v("Ingreso/Deducción")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Descripción")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [_c("tr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=template&id=6d6e33d3&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=template&id=6d6e33d3&scoped=true& ***!
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
            _vm._v("Control de asignación ingresos y deducciones")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de asignaciones")
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
                [_vm._v(" Módulo nómina")]
              ),
              _vm._v("> Asignación ingresos y deducciones")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6 sm-text-center" }),
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
                  _vm.obtenerplanillas()
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
                  _c("option", { attrs: { value: "primer_nombre" } }, [
                    _vm._v("Descripcion")
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
                      _vm.obtenerplanillas()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Buscar\n\t\t\t\t")
                ]
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
                _vm._l(_vm.planillas, function(planilla) {
                  return _c("tr", { key: planilla.id_planilla_control }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(planilla.codigo_planilla))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(planilla.descripcion))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      planilla.estado
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Activo")
                            ])
                          ])
                        : _c("div", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Desactivado")
                            ])
                          ])
                    ]),
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
                                name: "registrar-asignacion-ingreso",
                                params: {
                                  id_planilla_control:
                                    planilla.id_planilla_control
                                }
                              },
                              tag: "a"
                            }
                          },
                          [_c("i", { staticClass: "icon-pencil" })]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.planillas.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "8" } },
                        [_vm._v("Sin registros")]
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
            items: _vm.planillas,
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
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Código")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=template&id=ad40029c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=template&id=ad40029c& ***!
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
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Planilla")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "planilla",
                        disabled: true,
                        options: _vm.planillas
                      },
                      model: {
                        value: _vm.form.planilla,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "planilla", $$v)
                        },
                        expression: "form.planilla"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.planilla, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Empleado")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "nombre_completo",
                        options: _vm.trabajadores
                      },
                      on: { input: _vm.obtenerIngreso },
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
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
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
                          _vm.$set(_vm.form.trabajador, "trabajador_area", $$v)
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
                          _vm.$set(_vm.form.trabajador, "trabajador_cargo", $$v)
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
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Ingreso/Deducción")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "ingreso", options: _vm.ingresos },
                      model: {
                        value: _vm.form.ingreso,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "ingreso", $$v)
                        },
                        expression: "form.ingreso"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.ingreso, function(message) {
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Monto")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.monto,
                        expression: "form.monto"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: false, type: "number", min: "0" },
                    domProps: { value: _vm.form.monto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "monto", $event.target.value)
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
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalleSolicitud, function(message) {
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
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.form.detalleSolicitud, function(
                          item,
                          index
                        ) {
                          return [
                            item.estado === 1
                              ? [
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
                                    _c(
                                      "td",
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            label: "ingreso",
                                            disabled: true,
                                            options: _vm.ingresos
                                          },
                                          model: {
                                            value:
                                              item.asignacion_ingreso
                                                .cve_ingreso_deduccion,
                                            callback: function($$v) {
                                              _vm.$set(
                                                item.asignacion_ingreso,
                                                "cve_ingreso_deduccion",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "item.asignacion_ingreso.cve_ingreso_deduccion"
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
                                                ".ingreso"
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
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              item.asignacion_ingreso.codigo,
                                            expression:
                                              "item.asignacion_ingreso.codigo"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: true,
                                          type: "number",
                                          min: "0"
                                        },
                                        domProps: {
                                          value: item.asignacion_ingreso.codigo
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item.asignacion_ingreso,
                                              "codigo",
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
                                              ".codigo"
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
                                            value:
                                              item.asignacion_ingreso
                                                .descripcion,
                                            expression:
                                              "item.asignacion_ingreso.descripcion"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { disabled: true, type: "text" },
                                        domProps: {
                                          value:
                                            item.asignacion_ingreso.descripcion
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item.asignacion_ingreso,
                                              "descripcion",
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
                                              ".descripcion"
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
                                            value: item.monto,
                                            expression: "item.monto"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: true,
                                          type: "number",
                                          min: "0"
                                        },
                                        domProps: { value: item.monto },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "monto",
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
                                              ".monto"
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
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _c("tr")
                          ]
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
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
                      to: { name: "listado-asignacion-ingreso" },
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
        _vm._v("Asignación de ingresos y deducciones")
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
      _c("span", [_c("strong", [_vm._v("Detalle de asignación")])])
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
          _vm._v("Ingreso/Deducción")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Descripción")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [_c("tr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue":
/*!******************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_c107c38a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=c107c38a& */ "./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=template&id=c107c38a&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_c107c38a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_c107c38a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=template&id=c107c38a&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=template&id=c107c38a& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_c107c38a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=c107c38a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Actualizar.vue?vue&type=template&id=c107c38a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_c107c38a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_c107c38a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Listado.vue":
/*!***************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Listado.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_6d6e33d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=6d6e33d3&scoped=true& */ "./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=template&id=6d6e33d3&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_6d6e33d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true& */ "./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_6d6e33d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_6d6e33d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d6e33d3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/asignacion_ingreso_deduccion/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_6d6e33d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=style&index=0&id=6d6e33d3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_6d6e33d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_6d6e33d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_6d6e33d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_6d6e33d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_6d6e33d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=template&id=6d6e33d3&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=template&id=6d6e33d3&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_6d6e33d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=6d6e33d3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Listado.vue?vue&type=template&id=6d6e33d3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_6d6e33d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_6d6e33d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue":
/*!*****************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_ad40029c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=ad40029c& */ "./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=template&id=ad40029c&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_ad40029c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_ad40029c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/asignacion_ingreso_deduccion/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=template&id=ad40029c&":
/*!************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=template&id=ad40029c& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_ad40029c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=ad40029c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_ingreso_deduccion/Registrar.vue?vue&type=template&id=ad40029c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_ad40029c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_ad40029c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);