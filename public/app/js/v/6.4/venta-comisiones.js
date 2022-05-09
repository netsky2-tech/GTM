(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["venta-comisiones"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/comisiones_asignaciones */ "./resources/app/api/comisiones_asignaciones.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  /*components: {
    Datepicker
  },*/
  data: function data() {
    return {
      marcas: [],
      form: {
        vendedor: '',
        comisiones_asignadas: []
      },
      btnAction: "Registrar",
      btnActionDraft: "Guardar Borrador",
      errorMessages: []
    };
  },
  methods: {
    cargarMarcas: function cargarMarcas() {
      var self = this;
      console.log('cargarMarcas');

      if (self.form.vendedor) {
        self.marcas.forEach(function (comision_marca, key) {
          self.form.comisiones_asignadas.push({
            comision_marca: comision_marca,
            tipo_meta: 1,
            meta_unidades: 0,
            meta_monto: 0,
            porcentaje_comision: 0,
            porcentaje_comision_sobremeta: 0
          });
        });
      }
    },
    obtenerComisiones: function obtenerComisiones() {
      var self = this;
      _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerComisiones({
        id_vendedor: Number(this.$route.params.id_vendedor)
      }, function (data) {
        self.form = data;
        self.loading = false;
      });
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de guardar esta asignación de comisiones?',
        text: "Se guardará la configuración",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
            alertify.success("Comisión asignada correctamente", 5);

            _this.$router.push({
              name: "listado-comisiones"
            });
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Registrar";
          });
        } else {
          self.btnAction = "Registrar";
        }
      });
    }
  },
  mounted: function mounted() {
    this.obtenerComisiones();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/comisiones_asignaciones */ "./resources/app/api/comisiones_asignaciones.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      vendedores: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarComisiones: function mostrarComisiones(key) {
      if (this.vendedores[key].mostrar) {
        this.vendedores[key].mostrar = 0;
      } else {
        this.vendedores[key].mostrar = 1;
      }
    },
    obtener: function obtener() {
      var self = this;
      _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        data.rows.forEach(function (vendedores, key) {
          data.rows[key].mostrar = 0;
        });
        self.vendedores = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
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
          pagination: Pagination
        },*/
  mounted: function mounted() {
    this.obtener();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/comisiones_asignaciones */ "./resources/app/api/comisiones_asignaciones.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  /*components: {
    Datepicker
  },*/
  data: function data() {
    return {
      vendedores: [],
      marcas: [],
      form: {
        vendedor: '',
        detalleComisiones: []
      },
      btnAction: "Registrar",
      btnActionDraft: "Guardar Borrador",
      errorMessages: []
    };
  },
  methods: {
    cargarMarcas: function cargarMarcas() {
      var self = this;
      console.log('cargarMarcas');

      if (self.form.vendedor) {
        self.marcas.forEach(function (marcax, key) {
          self.form.detalleComisiones.push({
            marcax: marcax,
            tipo_meta: 1,
            meta_unidades: 0,
            meta_monto: 0,
            porcentaje_comision: 0,
            porcentaje_comision_sobremeta: 0
          });
        });
      }
    },
    nueva: function nueva() {
      var self = this;
      _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.vendedores = data.vendedores;
        self.marcas = data.marcas;
      }, function (err) {
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de guardar esta asignación de comisiones?',
        text: "Se guardará la configuración",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
            alertify.success("Comisión asignada correctamente", 5);

            _this.$router.push({
              name: "listado-comisiones"
            });
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Registrar";
          });
        } else {
          self.btnAction = "Registrar";
        }
      });
    }
  },
  mounted: function mounted() {
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/comisiones_asignaciones */ "./resources/app/api/comisiones_asignaciones.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  /*components: {
    Datepicker
  },*/
  data: function data() {
    return {
      marcas: [],
      detalleForm: {
        id_comision_gerencia_politica: 0,
        descripcion: '',
        porcentaje_inicial: 0,
        porcentaje_final: 0,
        meta_inicio: 0,
        meta_fin: 0,
        porcentaje_comision: 0,
        activo: true,
        tipo_meta: 1
      },
      form: {
        vendedor: '',
        comisiones_asignadas: []
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.form.comisiones_asignadas.length >= 1) {
        //self.form.entrada_productos[keyx].cantidad_recibida--;
        this.form.comisiones_asignadas[index].activo = false;
      } else {
        this.form.comisiones_asignadas = [];
      }
    },
    agregarDetalle: function agregarDetalle() {
      var self = this; //if(this.detalleForm.fecha_viatico){

      var i = 0;
      var keyx = 0;
      /* if(self.form.comisiones_asignadas){
         self.form.comisiones_asignadas.forEach((fila, key) => {
           if(self.detalleForm.meta_inicio===fila.meta_inicio){
             i++;
             keyx = key;
           }
         });
       }*/

      if (i === 0) {
        self.form.comisiones_asignadas.push({
          id_comision_gerencia_politica: 0,
          descripcion: self.detalleForm.descripcion,
          porcentaje_inicial: 0,
          porcentaje_final: 0,
          meta_inicio: self.detalleForm.meta_inicio,
          meta_fin: self.detalleForm.meta_fin,
          porcentaje_comision: self.detalleForm.porcentaje_comision,
          activo: true,
          tipo_meta: self.detalleForm.tipo_meta
        });
        self.detalleForm.descripcion = '';
        self.detalleForm.meta_inicio = 0;
        self.detalleForm.meta_fin = 0;
        self.detalleForm.porcentaje_comision = 0;
        self.detalleForm.tipo_meta = 1;
      } else {
        alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
      }
    },
    obtenerComisiones: function obtenerComisiones() {
      var self = this;
      _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerComisionesGerencia({}, function (data) {
        if (data) {
          self.form.comisiones_asignadas = data;
        }

        self.loading = false;
      });
    },
    registrar: function registrar() {
      var self = this;
      self.btnAction = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de guardar esta asignación de comisiones?',
        text: "Se guardará la configuración",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_comisiones_asignaciones__WEBPACK_IMPORTED_MODULE_0__["default"].actualizarComisionGerencia(self.form, function (data) {
            alertify.success("Comisión asignada correctamente", 5);
            self.obtenerComisiones();
            self.btnAction = "Registrar";
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Registrar";
          });
        } else {
          self.btnAction = "Registrar";
        }
      });
    }
  },
  mounted: function mounted() {
    this.obtenerComisiones();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-1c8f11ce] {\n  min-width: 120px;\n}\n.table a[data-v-1c8f11ce] {\n  color: #2675dc;\n}\n.table .table-number[data-v-1c8f11ce] {\n  width: 60px;\n}\n.table .action[data-v-1c8f11ce] {\n  width: 180px;\n}\n.table .detail-link[data-v-1c8f11ce] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-1c8f11ce] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-1c8f11ce]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=template&id=fd778b40&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=template&id=fd778b40& ***!
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
        _c("div", { staticClass: "content-box" }, [
          _c("div", { staticClass: "content-box-header" }, [
            _c("div", { staticClass: "box-title" }, [
              _vm._v("Asignar Comisiones de Venta")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "box-description" }, [
              _vm._v("Formulario para actualizar comisiones por vendedor")
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
                    attrs: { to: { name: "pagina-principal-ventas" } }
                  },
                  [_vm._v(" Módulo Ventas")]
                ),
                _vm._v("> Actualización Comisión Vendedores")
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Vendedor")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.nombre_completo,
                      expression: "form.nombre_completo"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", readonly: "" },
                  domProps: { value: _vm.form.nombre_completo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "nombre_completo", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.comisiones_asignadas, function(
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
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.comisiones_asignadas, function(
                      item,
                      index
                    ) {
                      return [
                        _c("tr", [
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.comision_marca.descripcion,
                                  expression: "item.comision_marca.descripcion"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: "" },
                              domProps: {
                                value: item.comision_marca.descripcion
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item.comision_marca,
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
                                  "comisiones_asignadas." +
                                    index +
                                    ".comision_marca.id_marca"
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
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.tipo_meta,
                                    expression: "item.tipo_meta",
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return _vm._n(val)
                                      })
                                    _vm.$set(
                                      item,
                                      "tipo_meta",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Unidades")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Monto")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages[
                                  "comisiones_asignadas." + index + ".tipo_meta"
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
                          item.tipo_meta === 1
                            ? _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.meta_unidades,
                                      expression: "item.meta_unidades",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number", min: "0" },
                                  domProps: { value: item.meta_unidades },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "meta_unidades",
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
                                  _vm._l(
                                    _vm.errorMessages[
                                      "comisiones_asignadas." +
                                        index +
                                        ".meta_unidades"
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
                            : _vm._e(),
                          _vm._v(" "),
                          item.tipo_meta === 2
                            ? _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.meta_monto,
                                      expression: "item.meta_monto",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number", min: "0" },
                                  domProps: { value: item.meta_monto },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "meta_monto",
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
                                  _vm._l(
                                    _vm.errorMessages[
                                      "comisiones_asignadas." +
                                        index +
                                        ".meta_monto"
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
                            : _vm._e(),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: item.porcentaje_comision,
                                  expression: "item.porcentaje_comision",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: item.porcentaje_comision },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "porcentaje_comision",
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
                              _vm._l(
                                _vm.errorMessages[
                                  "comisiones_asignadas." +
                                    index +
                                    ".porcentaje_comision"
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
                                  rawName: "v-model.number",
                                  value: item.porcentaje_comision_sobremeta,
                                  expression:
                                    "item.porcentaje_comision_sobremeta",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: {
                                value: item.porcentaje_comision_sobremeta
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "porcentaje_comision_sobremeta",
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
                              _vm._l(
                                _vm.errorMessages[
                                  "comisiones_asignadas." +
                                    index +
                                    ".porcentaje_comision_sobremeta"
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
                )
              ])
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
                  attrs: { tag: "button", to: { name: "listado-comisiones" } }
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
                    disabled: _vm.btnAction !== "Registrar",
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      return _vm.registrar()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.btnAction))]
              )
            ],
            1
          )
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
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de Comisiones por Marca")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Marca")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Meta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Porcentaje Comisión")]),
        _vm._v(" "),
        _c("th", [_vm._v("Porcentaje Comisión Sobremeta")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=template&id=1c8f11ce&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=template&id=1c8f11ce&scoped=true& ***!
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
            _vm._v("Asignación de Comisiones")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Porcentajes de comisiones de vendedores")
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
                  attrs: { to: { name: "pagina-principal-ventas" } }
                },
                [_vm._v(" Módulo Ventas")]
              ),
              _vm._v("> Comisión Vendedores")
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
                  attrs: { tag: "button", to: { name: "registrar-comisiones" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Asignar Comisiones a Vendedor\n\t\t\t\t")
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
                _vm._l(_vm.vendedores, function(vendedor, key) {
                  return [
                    _c("tr", { key: vendedor.id_comision_asignacion }, [
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
                              return _vm.mostrarComisiones(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(vendedor.nombre_completo))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Actualizar Comisiones",
                                  expression: "'Actualizar Comisiones'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "actualizar-comisiones",
                                  params: { id_vendedor: vendedor.id_vendedor }
                                },
                                tag: "a"
                              }
                            },
                            [_c("i", { staticClass: "icon-pencil" })]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    vendedor.mostrar
                      ? _c("tr", [
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
                                  _vm._l(
                                    vendedor.comisiones_asignadas,
                                    function(comision) {
                                      return _c(
                                        "tr",
                                        {
                                          key: comision.id_comision_asignacion
                                        },
                                        [
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                comision.comision_marca
                                                  .descripcion
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                comision.tipo_meta === 1
                                                  ? "Unidades"
                                                  : "Monto"
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          comision.tipo_meta === 2
                                            ? _c("td", [
                                                _vm._v(
                                                  "C$ " +
                                                    _vm._s(
                                                      _vm._f("formatMoney")(
                                                        comision.meta_monto,
                                                        2
                                                      )
                                                    )
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          comision.tipo_meta === 1
                                            ? _c("td", [
                                                _vm._v(
                                                  _vm._s(comision.meta_unidades)
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                comision.porcentaje_comision
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                comision.porcentaje_comision_sobremeta
                                              )
                                            )
                                          ])
                                        ]
                                      )
                                    }
                                  ),
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
                !_vm.vendedores.length
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
            items: _vm.vendedores,
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
        _c("th", [_vm._v("Vendedor")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Acciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Marca")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Meta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Porcentaje Comisión")]),
        _vm._v(" "),
        _c("th", [_vm._v("Porcentaje Comisión Sobremeta")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=template&id=13c149ed&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=template&id=13c149ed& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "content-box" }, [
          _c("div", { staticClass: "content-box-header" }, [
            _c("div", { staticClass: "box-title" }, [
              _vm._v("Asignar Comisiones de Venta")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "box-description" }, [
              _vm._v("Formulario para asignar comisiones por vendedor")
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
                    attrs: { to: { name: "pagina-principal-ventas" } }
                  },
                  [_vm._v(" Módulo Ventas")]
                ),
                _vm._v("> Registrar Comisión Vendedores")
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Vendedores")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("multiselect", {
                      attrs: {
                        "allow-empty": false,
                        options: _vm.vendedores,
                        searchable: true,
                        "show-labels": false,
                        "deselect-label": "No se puede eliminar este valor",
                        label: "nombre_completo",
                        placeholder: "Selecciona una cuenta para pagar",
                        "track-by": "id_vendedor"
                      },
                      on: { input: _vm.cargarMarcas },
                      model: {
                        value: _vm.form.vendedor,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "vendedor", $$v)
                        },
                        expression: "form.vendedor"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.vendedor, function(message) {
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
          !_vm.form.vendedor
            ? _c("div", [_vm._m(0), _vm._v(" "), _c("hr")])
            : _vm._e(),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.detalleComisiones, function(message) {
                  return _c("li", {
                    key: message,
                    domProps: { textContent: _vm._s(message) }
                  })
                }),
                0
              ),
              _vm._v(" "),
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.detalleComisiones, function(item, index) {
                      return [
                        _c("tr", [
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.marcax.descripcion,
                                  expression: "item.marcax.descripcion"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: "" },
                              domProps: { value: item.marcax.descripcion },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item.marcax,
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
                                  "detalleComisiones." +
                                    index +
                                    ".marcax.id_marca"
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
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.tipo_meta,
                                    expression: "item.tipo_meta",
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return _vm._n(val)
                                      })
                                    _vm.$set(
                                      item,
                                      "tipo_meta",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Unidades")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Monto")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages[
                                  "detalleComisiones." + index + ".tipo_meta"
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
                          item.tipo_meta === 1
                            ? _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.meta_unidades,
                                      expression: "item.meta_unidades",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number", min: "0" },
                                  domProps: { value: item.meta_unidades },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "meta_unidades",
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
                                  _vm._l(
                                    _vm.errorMessages[
                                      "detalleComisiones." +
                                        index +
                                        ".meta_unidades"
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
                            : _vm._e(),
                          _vm._v(" "),
                          item.tipo_meta === 2
                            ? _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.meta_monto,
                                      expression: "item.meta_monto",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number", min: "0" },
                                  domProps: { value: item.meta_monto },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "meta_monto",
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
                                  _vm._l(
                                    _vm.errorMessages[
                                      "detalleComisiones." +
                                        index +
                                        ".meta_monto"
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
                            : _vm._e(),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: item.porcentaje_comision,
                                  expression: "item.porcentaje_comision",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: item.porcentaje_comision },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "porcentaje_comision",
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
                              _vm._l(
                                _vm.errorMessages[
                                  "detalleComisiones." +
                                    index +
                                    ".porcentaje_comision"
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
                                  rawName: "v-model.number",
                                  value: item.porcentaje_comision_sobremeta,
                                  expression:
                                    "item.porcentaje_comision_sobremeta",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: {
                                value: item.porcentaje_comision_sobremeta
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "porcentaje_comision_sobremeta",
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
                              _vm._l(
                                _vm.errorMessages[
                                  "detalleComisiones." +
                                    index +
                                    ".porcentaje_comision_sobremeta"
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
                )
              ])
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
                  attrs: { tag: "button", to: { name: "listado-comisiones" } }
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
                    disabled: _vm.btnAction !== "Registrar",
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      return _vm.registrar()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.btnAction))]
              )
            ],
            1
          )
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
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione un vendedor para continuar.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de Comisiones por Marca")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Marca")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Meta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Porcentaje Comisión")]),
        _vm._v(" "),
        _c("th", [_vm._v("Porcentaje Comisión Sobremeta")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "content-box" }, [
          _c("div", { staticClass: "content-box-header" }, [
            _c("div", { staticClass: "box-title" }, [
              _vm._v("Asignar Comisiones de Venta de Gerencias")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "box-description" }, [
              _vm._v("Formulario para actualizar comisiones de gerencias")
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
                    attrs: { to: { name: "pagina-principal-ventas" } }
                  },
                  [_vm._v(" Módulo Ventas")]
                ),
                _vm._v("> Actualización Comisión Gerente")
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Descripción")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.detalleForm.descripcion,
                      expression: "detalleForm.descripcion"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.detalleForm.descripcion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.detalleForm,
                        "descripcion",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Tipo de Meta")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.tipo_meta,
                        expression: "detalleForm.tipo_meta",
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
                          _vm.detalleForm,
                          "tipo_meta",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Unidades")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [_vm._v("Monto")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Meta Rango Inicial")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.detalleForm.meta_inicio,
                      expression: "detalleForm.meta_inicio",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", min: "0" },
                  domProps: { value: _vm.detalleForm.meta_inicio },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.detalleForm,
                        "meta_inicio",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Meta Rango Final")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.detalleForm.meta_fin,
                      expression: "detalleForm.meta_fin",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", min: "0" },
                  domProps: { value: _vm.detalleForm.meta_fin },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.detalleForm,
                        "meta_fin",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Porcentaje Comisión")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.detalleForm.porcentaje_comision,
                      expression: "detalleForm.porcentaje_comision",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", min: "0" },
                  domProps: { value: _vm.detalleForm.porcentaje_comision },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.detalleForm,
                        "porcentaje_comision",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2" }, [
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.comisiones_asignadas, function(
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
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.comisiones_asignadas, function(
                      item,
                      index
                    ) {
                      return [
                        item.activo
                          ? _c("tr", [
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
                                      "comisiones_asignadas." +
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
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.tipo_meta,
                                        expression: "item.tipo_meta",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
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
                                          item,
                                          "tipo_meta",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "1" } }, [
                                      _vm._v("Unidades")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "2" } }, [
                                      _vm._v("Monto")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(
                                    _vm.errorMessages[
                                      "comisiones_asignadas." +
                                        index +
                                        ".tipo_meta"
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
                                      rawName: "v-model.number",
                                      value: item.meta_inicio,
                                      expression: "item.meta_inicio",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number", min: "0" },
                                  domProps: { value: item.meta_inicio },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "meta_inicio",
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
                                  _vm._l(
                                    _vm.errorMessages[
                                      "comisiones_asignadas." +
                                        index +
                                        ".meta_inicio"
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
                                      rawName: "v-model.number",
                                      value: item.meta_fin,
                                      expression: "item.meta_fin",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number", min: "0" },
                                  domProps: { value: item.meta_fin },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "meta_fin",
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
                                  _vm._l(
                                    _vm.errorMessages[
                                      "comisiones_asignadas." +
                                        index +
                                        ".meta_fin"
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
                                      rawName: "v-model.number",
                                      value: item.porcentaje_comision,
                                      expression: "item.porcentaje_comision",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number", min: "0" },
                                  domProps: { value: item.porcentaje_comision },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "porcentaje_comision",
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
                                  _vm._l(
                                    _vm.errorMessages[
                                      "comisiones_asignadas." +
                                        index +
                                        ".porcentaje_comision"
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
                          : _vm._e(),
                        _vm._v(" "),
                        _c("tr")
                      ]
                    })
                  ],
                  2
                )
              ])
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
                    to: { name: "pagina-principal-ventas" }
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
                    disabled: _vm.btnAction !== "Registrar",
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      return _vm.registrar()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.btnAction))]
              )
            ],
            1
          )
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
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [
        _c("strong", [_vm._v("Detalle de Comisiones para Gerencia de Ventas ")])
      ])
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
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Meta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meta Rango Inicial")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meta Rango Final")]),
        _vm._v(" "),
        _c("th", [_vm._v("Porcentaje Comisión")])
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

/***/ "./resources/app/api/comisiones_asignaciones.js":
/*!******************************************************!*\
  !*** ./resources/app/api/comisiones_asignaciones.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  registrar: function registrar(data, cb, errorCb) {
    axios.post('ventas/comisiones/registrar', data).then(function (response) {
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
    axios.post('ventas/comisiones/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerComisiones: function obtenerComisiones(data, cb, errorCb) {
    axios.post('ventas/comisiones/obtener-comisiones', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarComisionGerencia: function actualizarComisionGerencia(data, cb, errorCb) {
    axios.post('ventas/comisiones/actualizar-comisiones-gerencia', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerComisionesGerencia: function obtenerComisionesGerencia(data, cb, errorCb) {
    axios.post('ventas/comisiones/obtener-comisiones-gerencia', data).then(function (response) {
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
    axios.post('ventas/comisiones/obtener', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('ventas/comisiones/nuevo', data).then(function (response) {
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

/***/ "./resources/app/api/salidas.js":
/*!**************************************!*\
  !*** ./resources/app/api/salidas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerSalidas: function obtenerSalidas(data, cb, errorCb) {
    axios.post('salidas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateria: function registrarBateria(data, cb, errorCb) {
    axios.post('salidas/registrar-bateria', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  anular: function anular(data, cb, errorCb) {
    axios.put('salidas/anular', data).then(function (response) {
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
    axios.post('salidas/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  guardar: function guardar(data, cb, errorCb) {
    axios.post('salidas/guardar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarSalidaManual: function registrarSalidaManual(data, cb, errorCb) {
    axios.post('salidas/registrar-manual', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nueva: function nueva(data, cb, errorCb) {
    axios.post('salidas/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cargarPresentacionesProductos: function cargarPresentacionesProductos(data, cb, errorCb) {
    axios.post('salidas/obtener-presentaciones-producto', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarTraslado: function registrarTraslado(data, cb, errorCb) {
    axios.post('salidas/registrar-traslado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarTrasladoConsignacion: function registrarTrasladoConsignacion(data, cb, errorCb) {
    axios.post('salidas/registrar-traslado-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarDevolucionConsignacion: function registrarDevolucionConsignacion(data, cb, errorCb) {
    axios.post('salidas/registrar-devolucion-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarDevolucion: function registrarDevolucion(data, cb, errorCb) {
    axios.post('salidas/registrar-devolucion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  despachar: function despachar(data, cb, errorCb) {
    axios.put('salidas/despachar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  crearSalidaPorDevolucion: function crearSalidaPorDevolucion(data, cb, errorCb) {
    axios.post('salidas/crear-salida-devolucion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSalida: function obtenerSalida(data, cb, errorCb) {
    axios.post('salidas/obtener-salida', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSalidaPorCodigo: function obtenerSalidaPorCodigo(data, cb, errorCb) {
    axios.post('salidas/obtener-salida-por-codigo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevaSalidaRecuperados: function nuevaSalidaRecuperados(data, cb, errorCb) {
    axios.post('salidas/nuevasalida-recuperado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarTrasladoRecuperado: function registrarTrasladoRecuperado(data, cb, errorCb) {
    axios.post('salidas/registrar-traslado-recuperado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNumeroSalida: function obtenerNumeroSalida(cb, errorCb) {
    axios.get('salidas/obtener-numero-salida').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstado: function cambiarEstado(data, cb, errorCb) {
    axios.put('salidas/cambiar-estado', data).then(function (response) {
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

/***/ "./resources/app/components/asignacion_comisiones/Actualizar.vue":
/*!***********************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Actualizar.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_fd778b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=fd778b40& */ "./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=template&id=fd778b40&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_fd778b40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_fd778b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/asignacion_comisiones/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=template&id=fd778b40&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=template&id=fd778b40& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_fd778b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=fd778b40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Actualizar.vue?vue&type=template&id=fd778b40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_fd778b40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_fd778b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Listado.vue":
/*!********************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Listado.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_1c8f11ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=1c8f11ce&scoped=true& */ "./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=template&id=1c8f11ce&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_1c8f11ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true& */ "./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_1c8f11ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_1c8f11ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c8f11ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/asignacion_comisiones/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_1c8f11ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=style&index=0&id=1c8f11ce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_1c8f11ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_1c8f11ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_1c8f11ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_1c8f11ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_1c8f11ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=template&id=1c8f11ce&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=template&id=1c8f11ce&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_1c8f11ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=1c8f11ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Listado.vue?vue&type=template&id=1c8f11ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_1c8f11ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_1c8f11ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Registrar.vue":
/*!**********************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Registrar.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_13c149ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=13c149ed& */ "./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=template&id=13c149ed&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_13c149ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_13c149ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/asignacion_comisiones/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=template&id=13c149ed&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=template&id=13c149ed& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_13c149ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=13c149ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/Registrar.vue?vue&type=template&id=13c149ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_13c149ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_13c149ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarComisionesGerencia_vue_vue_type_template_id_979bc194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194& */ "./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194&");
/* harmony import */ var _RegistrarComisionesGerencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarComisionesGerencia.vue?vue&type=script&lang=js& */ "./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarComisionesGerencia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarComisionesGerencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarComisionesGerencia_vue_vue_type_template_id_979bc194___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarComisionesGerencia_vue_vue_type_template_id_979bc194___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarComisionesGerencia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_template_id_979bc194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/asignacion_comisiones/RegistrarComisionesGerencia.vue?vue&type=template&id=979bc194&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_template_id_979bc194___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarComisionesGerencia_vue_vue_type_template_id_979bc194___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);