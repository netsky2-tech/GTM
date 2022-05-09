(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documentos-contables"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/documentos-contables/Listado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/documentos_contables */ "./resources/app/api/documentos_contables.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [20, 40, 60, 80],
        search: {
          field: "num_documento",
          value: ""
        }
      },
      documentos_contables: [],
      total: 0
    };
  },
  methods: {
    anular: function anular(id_documento) {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de anular este documento contable?',
        text: "Digite la causa de la anulación del documento",
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, anular documento'
      }).then(function (result) {
        if (result.value) {
          _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__["default"].anular({
            id_documento: id_documento,
            causa_anulacion: result.value
          }, function (data) {
            _this.$swal.fire('Anulado', 'Los registros del documento han sido anulados', 'success');

            _this.obtenerFacturas();
          }, function (err) {
            _this.$swal.fire('No se puede anular este documento!', err, 'warning');
          });
        }
      });
    },
    mostrarMovimientos: function mostrarMovimientos(key) {
      if (this.documentos_contables[key].mostrar) {
        this.documentos_contables[key].mostrar = 0;
      } else {
        this.documentos_contables[key].mostrar = 1;
      }
    },
    total_debex: function total_debex(documentoContable) {
      return Number(documentoContable.movimientos_cuentas.reduce(function (carry, item) {
        return carry + Number(item.debe);
      }, 0).toFixed(4));
    },
    total_haberx: function total_haberx(documentoContable) {
      return Number(documentoContable.movimientos_cuentas.reduce(function (carry, item) {
        return carry + Number(item.haber);
      }, 0).toFixed(4));
    },
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        data.rows.forEach(function (documentos_contables, key) {
          data.rows[key].mostrar = 0;
        });
        self.documentos_contables = data.rows;
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

  /* components: {
     pagination: Pagination
   },*/
  mounted: function mounted() {
    this.obtener();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Registrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/documentos-contables/Registrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/documentos_contables */ "./resources/app/api/documentos_contables.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import tipo_documento from "../../api/tipos_documentos";
//import centro_costo_ingreso from '../../api/centro_costo'

 //import monedas from "../../api/monedas";


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      centro_costo_deshabilitado: true,
      cuentasBusqueda: {},
      cuentasBusquedaURL: "/contabilidad/cuentas-contables/buscarf",
      contador: 0,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "d MMMM yyyy",
      monedas: [],
      cuentas_contables: [],
      tipos_documentos: [],
      centros_costos_ingresos: [],
      fechax: new Date(),
      form: {
        t_cambio: 0,
        num_documento: "",
        fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
        concepto: "",
        valor: 0,
        codigo_documento: 1,
        detalleMovimientos: []
      },
      detalleForm: {
        centro_costo_ingreso: "",
        debe: 0,
        haber: 0,
        debeORG: 0,
        haberORG: 0,
        concepto: "",
        centro_costo_ingreso_deshabilitada: true,
        cuentaContable: {},
        moneda_x: ""
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_debe: function total_debe() {
      return this.form.detalleMovimientos.reduce(function (carry, item) {
        return carry + Number(Number(item.debe).toFixed(2)); //.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }, 0);
    },
    total_haber: function total_haber() {
      return this.form.detalleMovimientos.reduce(function (carry, item) {
        return carry + Number(Number(item.haber).toFixed(2)); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }, 0);
    }
  },
  methods: {
    monto_debe_cordobas: function monto_debe_cordobas(itemX) {
      var tasa_cambio = 1;

      if (itemX.monedaMov.id_moneda === 3) {
        tasa_cambio = this.form.t_cambio;
      }

      itemX.debe = Number((itemX.debeORG * tasa_cambio).toFixed(4));

      if (!isNaN(itemX.debe)) {
        return itemX.debe;
      } else return 0;
    },
    monto_haber_cordobas: function monto_haber_cordobas(itemX) {
      var tasa_cambio = 1;

      if (itemX.monedaMov.id_moneda === 3) {
        tasa_cambio = this.form.t_cambio;
      }

      itemX.haber = Number((itemX.haberORG * tasa_cambio).toFixed(4));

      if (!isNaN(itemX.haber)) {
        return itemX.haber;
      } else return 0;
    },
    seleccionarCuentaContable: function seleccionarCuentaContable() {
      //const cuenta = e.target.value;
      var self = this; // self.detalleForm.cuentaContable = cuenta;

      if ([4, 5, 6].indexOf(Number(self.detalleForm.cuentaContable.id_tipo_cuenta)) < 0) {
        self.detalleForm.centro_costo_ingreso = null;
        self.centro_costo_deshabilitado = true;
        self.$refs.concepto_mov.focus();
      } else {
        self.centro_costo_deshabilitado = false;
        self.$refs.centro_costo_ingreso.$refs.search.focus();
      }
    },
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_emision = moment(date).format("YYYY-MM-DD");
      this.obtenerCodigo();
    },
    obtenerCodigo: function obtenerCodigo() {
      var self = this;
      self.loading = true;
      _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerCodigo({
        id_tipo_doc: self.form.tipoDocumento.id_tipo_doc,
        fecha_doc: self.form.fecha_emision
      }, function (data) {
        //console.log(data);
        self.form.codigo_documento = data.codigo.secuencia;
        self.form.t_cambio = Number(data.t_cambio.tasa);
        self.obtenerNumeroDocumento();
        self.loading = false;
      }, function (err) {
        alertify.error(err, 5);
        self.loading = false;
      });
    },

    /* obtenerMonedas() {
         var self = this;
         monedas.cargarMonedas(
             data => {
                 self.monedas = data;
                 self.form.moneda = self.monedas[0];
             },
             err => {
                 console.log(err);
             }
         );
     },
     obtenerTiposDocumentosTodos() {
         var self = this;
         tipo_documento.obtenerTodos(
             data => {
                 self.tipos_documentos = data;
                 //console.log();
                 self.form.tipoDocumento = self.tipos_documentos[0];
                 self.obtenerCodigo()
             },
             err => {
                 console.log(err);
             }
         );
     },
     obtenerSucursalesTodas() {
         var self = this;
         centro_costo_ingreso.obtenerTodos(
             data => {
                 self.centros_costos_ingresos = data;
             },
             err => {
                 console.log(err);
             }
         );
     },*/
    nuevo: function nuevo() {
      var self = this;
      _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.tipos_documentos = data.tipos_documentos;
        self.form.tipoDocumento = self.tipos_documentos[0];
        self.monedas = data.monedas;
        self.cuentas_contables = data.cuentas_contables;
        self.detalleForm.moneda_x = self.monedas[0];
        self.centros_costos_ingresos = data.centro_costos_ingresos;
        self.form.t_cambio = Number(data.t_cambio.tasa);
        self.obtenerCodigo();
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    agregarDetalle: function agregarDetalle() {
      //  if(this.detalleForm.sucursal){
      //  this.errorMessages.sucursalx = ['correcto']
      if (this.detalleForm.cuentaContable) {
        if (Number(this.detalleForm.debe.toFixed(4)) > 0 || Number(this.detalleForm.haber.toFixed(4)) > 0) {
          if (Number(this.detalleForm.debe.toFixed(4)) > 0 && Number(this.detalleForm.haber.toFixed(4)) > 0) {
            alertify.warning("No se puede agregar monto en ambos campos", 5);
          } else {
            var tasa_cambio = 1;

            if (this.detalleForm.moneda_x.id_moneda === 3) {
              tasa_cambio = this.form.t_cambio;
            } else {
              tasa_cambio = 1;
            }

            var tipox = 0; //1- tipo debe 2- tipo haber

            if (this.detalleForm.debe > this.detalleForm.haber) {
              tipox = 1;
            } else {
              tipox = 2;
            }

            this.form.detalleMovimientos.push({
              cuentaContable: this.detalleForm.cuentaContable,
              centro_costo_ingreso: this.detalleForm.centro_costo_ingreso,
              centro_costo_ingreso_deshabilitada: this.centro_costo_deshabilitado,
              monedaMov: this.detalleForm.moneda_x,
              debe: Number((this.detalleForm.debe * tasa_cambio).toFixed(4)),
              haber: Number((this.detalleForm.haber * tasa_cambio).toFixed(4)),
              debeORG: Number(this.detalleForm.debe.toFixed(4)),
              haberORG: Number(this.detalleForm.haber.toFixed(4)),
              concepto: this.detalleForm.concepto,
              tipo: tipox
            });
            this.detalleForm.cuentaContable = {}; // this.detalleForm.sucursal=''

            this.detalleForm.debe = 0;
            this.detalleForm.haber = 0;
            this.detalleForm.debeORG = 0;
            this.detalleForm.haberORG = 0; //this.detalleForm.concepto = '';

            this.detalleForm.centro_costo_ingreso = null;
            this.centro_costo_deshabilitado = true;
            this.total_debe > this.total_haber ? this.form.valor = this.total_debe : this.form.valor = this.total_haber;
          }
        } else {
          alertify.warning("El monto debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una cuenta contable", 5);
      }
      /*}else{
        alertify.warning("Debe seleccionar una sucursal",5);
      }*/

    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleMovimientos.length >= 1) {
        this.form.detalleMovimientos.splice(index, 1);
      } else {
        this.form.detalleMovimientos = [];
      }
    },
    obtenerNumeroDocumento: function obtenerNumeroDocumento() {
      var self = this;
      self.form.num_documento = self.form.tipoDocumento.prefijo + '-' + self.form.codigo_documento;
    },
    cambiarFoco: function cambiarFoco() {
      var self = this;

      if (self.contador > 0) {
        self.$refs.moneda.$refs.search.focus();
      }

      self.contador++;
    },
    revisarConceptoMov: function revisarConceptoMov() {
      var self = this;

      if (self.detalleForm.concepto !== '') {
        self.$refs.debe.focus();
      } else {
        self.$refs.concepto_mov.focus();
      }
    },
    centroCostoEvento: function centroCostoEvento() {
      var self = this;

      if (self.contador > 0) {}
    },
    conceptoEvento: function conceptoEvento() {
      var self = this;

      if (self.contador > 0) {
        self.$refs.cuenta_contable.open(); //self.$refs.sucursal.$refs.search.focus();
      } //console.log(self.$refs.cuenta_contable);

    },
    agregarEvento: function agregarEvento() {
      var self = this;
      self.$refs.cuenta_contable.open();
    },
    registrarDocumento: function registrarDocumento() {
      var _this = this;

      var self = this;
      self.loading = true;

      if (self.total_debe > 0 && self.total_haber > 0 && self.total_debe === self.total_haber) {
        self.btnAction = "Registrando, espere....";
        _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
          alertify.success("Documento registrado correctamente", 5);
          self.loading = false;

          _this.$router.push({
            name: "listado-documentos"
          });
        }, function (err) {
          self.errorMessages = err;
          alertify.warning("Por favor Revisar los datos faltantes", 5);
          self.btnAction = "Registrar";
          self.loading = false;
        });
      } else {
        alertify.warning("La sumatoria de las columnas debe y haber tienen que ser iguales.", 5);
        self.loading = false;
      }
    }
  },
  mounted: function mounted() {
    /*  this.obtenerTiposDocumentosTodos();
      this.obtenerSucursalesTodas();
      this.obtenerMonedas();*/
    this.nuevo();
    this.$refs.concepto.focus();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-0ae61ddb] {\n  min-width: 120px;\n}\n.table a[data-v-0ae61ddb] {\n  color: #2675dc;\n}\n.table .table-number[data-v-0ae61ddb] {\n  width: 60px;\n}\n.table .action[data-v-0ae61ddb] {\n  width: 180px;\n}\n.table .detail-link[data-v-0ae61ddb] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-0ae61ddb] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-0ae61ddb]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=template&id=0ae61ddb&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/documentos-contables/Listado.vue?vue&type=template&id=0ae61ddb&scoped=true& ***!
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
            _vm._v("Administrar Documentos Contables")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Documentos Contables")
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
                  attrs: { to: { name: "pagina-principal-contabilidad" } }
                },
                [_vm._v(" Módulo contabilidad")]
              ),
              _vm._v("> Documentos contables")
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
                  attrs: { tag: "button", to: { name: "registrar-documento" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Crear Nuevo Documento Contable\n                ")
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
                  _c("option", { attrs: { value: "num_documento" } }, [
                    _vm._v("Código")
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
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Buscar\n                ")
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
                _vm._l(_vm.documentos_contables, function(
                  documento_contable,
                  key
                ) {
                  return [
                    _c("tr", { key: documento_contable.id_documento }, [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          staticClass: "link",
                          on: {
                            click: function($event) {
                              return _vm.mostrarMovimientos(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(documento_contable.num_documento))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(documento_contable.documento_tipo.descripcion)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(documento_contable.fecha_emision))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        documento_contable.estado == 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Cancelado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        documento_contable.estado == 1
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-blue" }, [
                                _vm._v("Emitido")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        documento_contable.estado == 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Aprobado")]
                              )
                            ])
                          : _vm._e()
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
                                target: "_blank",
                                to:
                                  "documentos-contables/reporte/pdf/" +
                                  documento_contable.id_documento
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
                    ]),
                    _vm._v(" "),
                    documento_contable.mostrar
                      ? _c("tr", { key: documento_contable.num_documento }, [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "6" } }, [
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
                                    documento_contable.movimientos_cuentas,
                                    function(movimiento) {
                                      return _c(
                                        "tr",
                                        { key: movimiento.id_documento_cuenta },
                                        [
                                          _c(
                                            "td",
                                            { attrs: { colspan: "2" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  movimiento.cuenta_contable
                                                    .nombre_cuenta_completo
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(movimiento.concepto))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(movimiento.debe))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(movimiento.haber))
                                          ])
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "item-footer",
                                        attrs: { colspan: "3" }
                                      },
                                      [_vm._v("Totales")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "item-footer",
                                        attrs: { colspan: "1" }
                                      },
                                      [
                                        _c(
                                          "strong",
                                          {
                                            staticClass:
                                              "item-dark form-control"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.total_debex(
                                                  documento_contable
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "item-footer",
                                        attrs: { colspan: "1" }
                                      },
                                      [
                                        _c(
                                          "strong",
                                          {
                                            staticClass:
                                              "item-dark form-control"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.total_haberx(
                                                  documento_contable
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ])
                        ])
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                !_vm.documentos_contables.length
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
            items: _vm.documentos_contables,
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
        _c("th", [_vm._v("Numero documento")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Documento")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha documento")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Opciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Cuenta Contable")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", [_vm._v("Haber")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Registrar.vue?vue&type=template&id=6ef4f28c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/documentos-contables/Registrar.vue?vue&type=template&id=6ef4f28c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "content-box" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo Documento")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "tipo",
                      attrs: {
                        label: "descripcion",
                        options: _vm.tipos_documentos
                      },
                      on: {
                        change: function($event) {
                          return _vm.cambiarFoco()
                        },
                        input: _vm.obtenerNumeroDocumento
                      },
                      model: {
                        value: _vm.form.tipoDocumento,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "tipoDocumento", $$v)
                        },
                        expression: "form.tipoDocumento"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.tipoDocumento, function(
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
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.num_documento,
                        expression: "form.num_documento"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.num_documento },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "num_documento", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.num_documento, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha Emision")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      ref: "fecha",
                      attrs: { format: _vm.format, language: _vm.es },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.$refs.moneda.focus($event)
                        },
                        selected: _vm.onDateSelect
                      },
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
                      _vm._l(_vm.errorMessages.fecha_emision, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("T/C")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.t_cambio,
                        expression: "form.t_cambio"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "", type: "text" },
                    domProps: { value: _vm.form.t_cambio },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "t_cambio", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.t_cambio, function(message) {
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
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Concepto")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.concepto,
                        expression: "form.concepto"
                      }
                    ],
                    ref: "concepto",
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.concepto },
                    on: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.conceptoEvento($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "concepto", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.concepto, function(message) {
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
            !_vm.form.tipoDocumento
              ? _c("div", [_vm._m(2), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Cuenta Contable")
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "cuenta_contable",
                      attrs: {
                        "allow-empty": false,
                        options: _vm.cuentas_contables,
                        searchable: true,
                        "show-labels": false,
                        "deselect-label": "No se puede eliminar este valor",
                        label: "nombre_cuenta_completo",
                        placeholder: "Selecciona una cuenta",
                        "track-by": "id_cuenta_contable"
                      },
                      on: { input: _vm.seleccionarCuentaContable },
                      model: {
                        value: _vm.detalleForm.cuentaContable,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "cuentaContable", $$v)
                        },
                        expression: "detalleForm.cuentaContable"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.cuentaContablex, function(
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
                      _vm._v("Centro de Costo")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "centro_costo_ingreso",
                      attrs: {
                        disabled: _vm.centro_costo_deshabilitado,
                        options: _vm.centros_costos_ingresos,
                        label: "descripcion"
                      },
                      on: {
                        change: function($event) {
                          return _vm.centroCostoEvento()
                        }
                      },
                      model: {
                        value: _vm.detalleForm.centro_costo_ingreso,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "centro_costo_ingreso", $$v)
                        },
                        expression: "detalleForm.centro_costo_ingreso"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.centro_costo_ingresox, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Concepto")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.concepto,
                        expression: "detalleForm.concepto"
                      }
                    ],
                    ref: "concepto_mov",
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.detalleForm.concepto },
                    on: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.revisarConceptoMov($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "concepto",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.conceptox, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Moneda")]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "moneda_x",
                      attrs: { options: _vm.monedas, label: "descripcion" },
                      model: {
                        value: _vm.detalleForm.moneda_x,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "moneda_x", $$v)
                        },
                        expression: "detalleForm.moneda_x"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.moneda_x, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Debe")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.debe,
                        expression: "detalleForm.debe",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "debe",
                    staticClass: "form-control",
                    attrs: { min: "0", type: "number" },
                    domProps: { value: _vm.detalleForm.debe },
                    on: {
                      focus: function($event) {
                        return $event.target.select()
                      },
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.$refs.haber.focus($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "debe",
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
                    _vm._l(_vm.errorMessages.debex, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Haber")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.haber,
                        expression: "detalleForm.haber",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "haber",
                    staticClass: "form-control",
                    attrs: { type: "number", min: "0" },
                    domProps: { value: _vm.detalleForm.haber },
                    on: {
                      focus: function($event) {
                        return $event.target.select()
                      },
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.$refs.agregar.focus($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "haber",
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
                    _vm._l(_vm.errorMessages.haberx, function(message) {
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
              _c("div", { staticClass: "col-sm-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "agregar",
                      staticClass: "btn btn-info",
                      on: {
                        click: _vm.agregarDetalle,
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.agregarEvento($event)
                        }
                      }
                    },
                    [_vm._v("Agregar Línea\n                            ")]
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
                  _vm._l(_vm.errorMessages.detalleMovimientos, function(
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
                    staticClass:
                      "table table-bordered table-hover table-responsive"
                  },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.form.detalleMovimientos, function(
                          item,
                          index
                        ) {
                          return [
                            _c("tr", [
                              _c(
                                "td",
                                { staticStyle: { width: "20%" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      label: "descripcion",
                                      options: _vm.centros_costos_ingresos,
                                      disabled:
                                        item.centro_costo_ingreso_deshabilitada
                                    },
                                    model: {
                                      value: item.centro_costo_ingreso,
                                      callback: function($$v) {
                                        _vm.$set(
                                          item,
                                          "centro_costo_ingreso",
                                          $$v
                                        )
                                      },
                                      expression: "item.centro_costo_ingreso"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(
                                      _vm.errorMessages[
                                        "detalleMovimientos." +
                                          index +
                                          ".centro_costo_ingreso.id_centro"
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
                              _c("td", { staticStyle: { width: "25%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        item.cuentaContable
                                          .nombre_cuenta_completo,
                                      expression:
                                        "item.cuentaContable.nombre_cuenta_completo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "", type: "text" },
                                  domProps: {
                                    value:
                                      item.cuentaContable.nombre_cuenta_completo
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.cuentaContable,
                                        "nombre_cuenta_completo",
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
                                      "detalleMovimientos." +
                                        index +
                                        ".cuentaContable.id_cuenta_contable"
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
                              _c("td", { staticStyle: { width: "21%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.concepto,
                                      expression: "item.concepto"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: item.concepto },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "concepto",
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
                                      "detalleMovimientos." +
                                        index +
                                        ".concepto"
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
                              _c(
                                "td",
                                { staticStyle: { width: "20%" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      label: "descripcion",
                                      options: _vm.monedas
                                    },
                                    model: {
                                      value: item.monedaMov,
                                      callback: function($$v) {
                                        _vm.$set(item, "monedaMov", $$v)
                                      },
                                      expression: "item.monedaMov"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(
                                      _vm.errorMessages[
                                        "detalleMovimientos." +
                                          index +
                                          ".monedaMov.id_moneda"
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
                              _c("td", { staticStyle: { width: "16%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.debeORG,
                                      expression: "item.debeORG",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    disabled: !(item.tipo === 1),
                                    min: "0",
                                    type: "number"
                                  },
                                  domProps: { value: item.debeORG },
                                  on: {
                                    change: function($event) {
                                      item.partida_valida =
                                        (item.debeORG === 0 &&
                                          item.haberORG > 0) ||
                                        (item.haberORG === 0 &&
                                          item.debeORG > 0)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "debeORG",
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
                                      "detalleMovimientos." + index + ".debe"
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
                              _c("td", { staticStyle: { width: "16%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.haberORG,
                                      expression: "item.haberORG",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    disabled: !(item.tipo === 2),
                                    min: "0",
                                    type: "number"
                                  },
                                  domProps: { value: item.haberORG },
                                  on: {
                                    change: function($event) {
                                      item.partida_valida =
                                        (item.haberORG === 0 &&
                                          item.debeORG > 0) ||
                                        (item.debeORG === 0 &&
                                          item.haberORG > 0)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "haberORG",
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
                                      "detalleMovimientos." + index + ".haber"
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
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.monto_debe_cordobas(item)))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.monto_haber_cordobas(item)))
                                ])
                              ]),
                              _vm._v(" "),
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
                        _c("td", {
                          staticStyle: { width: "15%" },
                          attrs: { colspan: "2" }
                        }),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            staticStyle: { width: "30%" },
                            attrs: { colspan: "4" }
                          },
                          [_vm._v("Totales C$")]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "item-footer",
                            staticStyle: { width: "20%" },
                            attrs: { colspan: "1" }
                          },
                          [
                            _c(
                              "strong",
                              { staticClass: "item-dark form-control" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatMoney")(_vm.total_debe, 2)
                                  )
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "item-footer",
                            staticStyle: { width: "20%" },
                            attrs: { colspan: "1" }
                          },
                          [
                            _c(
                              "strong",
                              { staticClass: "item-dark form-control" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatMoney")(_vm.total_haber, 2)
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
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
                    attrs: { tag: "button", to: { name: "listado-documentos" } }
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
                    ref: "registrar",
                    staticClass: "btn btn-primary",
                    attrs: {
                      type: "button",
                      disabled: _vm.btnAction != "Registrar" ? true : false
                    },
                    on: { click: _vm.registrarDocumento }
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
        _vm._v("Crear Nuevo Documento")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Documento")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Numero Documento "),
      _c("small", [_vm._v("(Automático)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v(
          "Se requiere que seleccione un tipo de documento para continuar."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Centro C/I")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Cuenta Contable")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Concepto")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Moneda Original")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Debe Moneda Original")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Haber Moneda Original")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Debe C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Haber C$")
        ])
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

/***/ "./resources/app/api/documentos_contables.js":
/*!***************************************************!*\
  !*** ./resources/app/api/documentos_contables.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('contabilidad/documentos-contables/obtener-todos').then(function (response) {
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
    axios.post('contabilidad/documentos-contables/anular', data).then(function (response) {
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
    axios.post('contabilidad/documentos-contables/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCodigo: function obtenerCodigo(data, cb, errorCb) {
    axios.post('contabilidad/documentos-contables/obtener-codigo-documento', data).then(function (response) {
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
    axios.post('contabilidad/documentos-contables/registrar', data).then(function (response) {
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
    axios.put('contabilidad/documentos-contables/actualizar', data).then(function (response) {
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
    axios.post('contabilidad/documentos-contables/nuevo', data).then(function (response) {
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

/***/ "./resources/app/components/documentos-contables/Listado.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/documentos-contables/Listado.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_0ae61ddb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=0ae61ddb&scoped=true& */ "./resources/app/components/documentos-contables/Listado.vue?vue&type=template&id=0ae61ddb&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/documentos-contables/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_0ae61ddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true& */ "./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_0ae61ddb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_0ae61ddb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ae61ddb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/documentos-contables/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/documentos-contables/Listado.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/documentos-contables/Listado.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_0ae61ddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=style&index=0&id=0ae61ddb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_0ae61ddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_0ae61ddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_0ae61ddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_0ae61ddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_0ae61ddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/documentos-contables/Listado.vue?vue&type=template&id=0ae61ddb&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/app/components/documentos-contables/Listado.vue?vue&type=template&id=0ae61ddb&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_0ae61ddb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=0ae61ddb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Listado.vue?vue&type=template&id=0ae61ddb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_0ae61ddb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_0ae61ddb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/documentos-contables/Registrar.vue":
/*!*********************************************************************!*\
  !*** ./resources/app/components/documentos-contables/Registrar.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_6ef4f28c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=6ef4f28c& */ "./resources/app/components/documentos-contables/Registrar.vue?vue&type=template&id=6ef4f28c&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/documentos-contables/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_6ef4f28c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_6ef4f28c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/documentos-contables/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/documentos-contables/Registrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/documentos-contables/Registrar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/documentos-contables/Registrar.vue?vue&type=template&id=6ef4f28c&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/documentos-contables/Registrar.vue?vue&type=template&id=6ef4f28c& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6ef4f28c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=6ef4f28c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/documentos-contables/Registrar.vue?vue&type=template&id=6ef4f28c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6ef4f28c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6ef4f28c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);