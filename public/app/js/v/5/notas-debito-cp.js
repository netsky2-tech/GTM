(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notas-debito-cp"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_notas_debito_cp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/notas_debito_cp */ "./resources/app/api/notas_debito_cp.js");
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
          field: "no_documento",
          value: ""
        }
      },
      notas_debito: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarPagos: function mostrarPagos(key) {
      if (this.notas_debito[key].mostrar) {
        this.notas_debito[key].mostrar = 0;
      } else {
        this.notas_debito[key].mostrar = 1;
      }
    },
    obtenerNotasDebito: function obtenerNotasDebito() {
      var self = this;
      _api_notas_debito_cp__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        data.rows.forEach(function (notas_debito, key) {
          data.rows[key].mostrar = 0;
        });
        self.notas_debito = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerNotasDebito();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerNotasDebito();
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerNotasDebito();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/MostrarCP.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/MostrarCP.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_notas_debito__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/notas_debito */ "./resources/app/api/notas_debito.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      format: "dd-MM-yyyy",
      descargando: false,
      form: {
        no_documento: "",
        fecha_emision: "",
        nota_debito_proveedor: [],
        nota_debito_detalles: [],
        monto_total_iva: 0,
        monto_total: 0,
        subtotal: 0
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerNotaDebito: function obtenerNotaDebito() {
      var self = this;
      _api_notas_debito__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerNotaDebito({
        id_nota_debito: this.$route.params.id_nota_debito
      }, function (data) {
        self.form = data;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.obtenerNotaDebito();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_notas_debito_cp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/notas_debito_cp */ "./resources/app/api/notas_debito_cp.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
      SweetModal
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      proveedoresBusquedaURL: "/proveedores/buscar",
      tipos_notas: [],
      monedas: [],
      compras: [],
      compras_baterias: [],
      compras_servicios: [],
      form: {
        numero_factura: "",
        fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
        nota_debito_proveedor: {},
        nota_debito_factura: '',
        nota_debito_moneda: '',
        concepto: "",
        t_cambio: 0,
        monto_total_me: 0,
        monto_total: 0,
        detalleFacturas: []
      },
      detalleForm: {
        nota_debito_factura: '',
        nota_debito_tipo: '',
        monto: 0,
        descripcion: '',
        aplicaIVA: true
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_cargo: function total_cargo() {
      var self = this;
      self.form.monto_total = Number(this.form.detalleFacturas.reduce(function (carry, item) {
        return carry + Number(item.monto);
      }, 0).toFixed(2));
      self.form.monto_total_iva = Number(this.form.detalleFacturas.reduce(function (carry, item) {
        return carry + Number(item.monto_iva);
      }, 0).toFixed(2));
      self.form.subtotal = Number(this.form.detalleFacturas.reduce(function (carry, item) {
        return carry + Number(item.subtotal);
      }, 0).toFixed(2));
      return this.form.subtotal;
    }
  },
  methods: {
    limpiar: function limpiar() {
      var self = this;
      self.detalleForm.monto = 0;
      self.form.detalleFacturas = [];
    },
    calcular_monto: function calcular_monto() {
      console.log('calcula rmonto');
      var self = this;

      if (self.form.nota_debito_moneda && self.detalleForm.nota_debito_factura) {
        var tasax = 1;
        var monto_maximo = Number(self.detalleForm.nota_debito_factura.total);

        if (self.form.nota_debito_moneda.id_moneda !== self.detalleForm.nota_debito_factura.id_moneda) {
          tasax = self.form.t_cambio;

          if (self.form.nota_debito_moneda.id_moneda === 3) {
            monto_maximo = Number((self.detalleForm.nota_debito_factura.total / tasax).toFixed(2));
          } else {
            monto_maximo = Number((self.detalleForm.nota_debito_factura.total * tasax).toFixed(2));
          }
        }

        self.detalleForm.monto = Number(Math.max(Math.min(Number(self.detalleForm.monto), monto_maximo), 1).toFixed(2));
        return self.detalleForm.monto;
      } else {
        self.detalleForm.monto = 0;
        return self.detalleForm.monto;
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleFacturas.length >= 1) {
        this.form.detalleFacturas.splice(index, 1);
      } else {
        this.form.detalleFacturas = [];
      }
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.nota_debito_factura && self.detalleForm.nota_debito_tipo) {
        if (self.detalleForm.monto > 0) {
          var validacion = 0;

          if (validacion === 0) {
            var i = 0;
            var keyx = 0;

            if (self.form.detalleFacturas) {
              self.form.detalleFacturas.forEach(function (cuentax, key) {
                if (self.detalleForm.nota_debito_factura.identificador === cuentax.nota_debito_factura.identificador && self.detalleForm.nota_debito_factura.tipo === cuentax.nota_debito_factura.tipo) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (i === 0) {
              var descripcionx = '';

              if (self.detalleForm.monto === Number(self.detalleForm.nota_debito_factura.total)) {
                descripcionx = 'Se acredita al proveedor el monto total de la factura No.' + self.detalleForm.nota_debito_factura.numero_factura + ', por concepto de: ' + self.detalleForm.nota_debito_tipo.descripcion;
              } else {
                descripcionx = 'Se acredita al proveedor el monto parcial de la factura No.' + self.detalleForm.nota_debito_factura.numero_factura + ', por concepto de: ' + self.detalleForm.nota_debito_tipo.descripcion;
              }

              var monto_iva = 0,
                  subtotal = 0;

              if (self.detalleForm.aplicaIVA) {
                monto_iva = Number((self.detalleForm.monto - Number(self.detalleForm.monto) / 1.15).toFixed(2));
                subtotal = Number(self.detalleForm.monto - monto_iva);
              } else {
                monto_iva = 0;
                subtotal = Number(self.detalleForm.monto);
              }

              self.form.detalleFacturas.push({
                nota_debito_factura: self.detalleForm.nota_debito_factura,
                nota_debito_tipo: self.detalleForm.nota_debito_tipo,
                monto: Number(self.detalleForm.monto),
                subtotal: subtotal,
                monto_iva: monto_iva,
                descripcion: descripcionx
              });
              alertify.success("Factura agregada!", 5);
            } else {
              var nuevo_total = self.form.detalleFacturas[keyx].monto + self.detalleForm.monto;

              if (nuevo_total <= Number(self.form.detalleFacturas[keyx].nota_debito_factura.total)) {
                self.form.detalleFacturas[keyx].monto = nuevo_total; //self.form.detalleFacturas[keyx].monto_me = Number((self.detalleForm.monto/self.form.t_cambio).toFixed(2));

                alertify.success("Factura agregada!", 5);

                if (nuevo_total === Number(self.form.detalleFacturas[keyx].nota_debito_factura.total)) {
                  self.form.detalleFacturas[keyx].descripcion = 'Se acredita al proveedor el monto total de la factura No.' + self.form.detalleFacturas[keyx].nota_debito_factura.numero_factura + ', por concepto de: ' + self.form.detalleFacturas[keyx].nota_debito_tipo.descripcion;
                } else {
                  self.form.detalleFacturas[keyx].descripcion = 'Se acredita al proveedor el monto parcial de la factura No.' + self.form.detalleFacturas[keyx].nota_debito_factura.numero_factura + ', por concepto de: ' + self.form.detalleFacturas[keyx].nota_debito_tipo.descripcion;
                }
              } else {
                /* let tasax = 1;
                 let monto_maximo = Number(self.form.detalleFacturas[keyx].nota_debito_factura.total);
                 if(self.form.nota_debito_moneda.id_moneda !== self.form.detalleFacturas[keyx].nota_debito_factura.id_moneda){
                     tasax=self.form.t_cambio;
                     if(self.form.nota_debito_moneda.id_moneda === 3){
                         monto_maximo = Number((self.form.detalleFacturas[keyx].nota_debito_factura.total/tasax).toFixed(2));
                     }else{
                         monto_maximo = Number((self.form.detalleFacturas[keyx].nota_debito_factura.total*tasax).toFixed(2));
                     }
                 }
                   self.form.detalleFacturas[keyx].monto = monto_maximo;*/
                alertify.warning("Ya se ha agregado esa factura, si desea modificarla, borre la fila antes", 5);
              }
            }

            self.detalleForm.nota_debito_factura = null;
            self.detalleForm.nota_debito_tipo = null; //self.detalleForm.monto_me = 0;

            self.detalleForm.monto = 0;
            self.detalleForm.descripcion = ''; //this.$refs.cuenta.$el.focus();
          }
        } else {
          alertify.warning("El monto del abono debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una cuenta para realizar el abono", 5);
      }
    },
    seleccionarProveedor: function seleccionarProveedor(e) {
      var clienteP = e.target.value;
      var self = this;
      self.form.nota_debito_proveedor = clienteP;
      self.form.nombre_persona = self.form.nota_debito_proveedor.nombre_comercial;
      self.loading = true;
      self.form.nota_debito_factura = '';
      _api_notas_debito_cp__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerFacturasCompraProveedor({
        id_proveedor: self.form.nota_debito_proveedor.id_proveedor
      }, function (data) {
        if (data !== null) {
          self.compras = [];
          self.compras_baterias = [];
          self.compras_servicios = [];
          self.compras_baterias = data.ordenes_compra_baterias;
          self.compras_servicios = data.ordenes_compra_servicios;
          self.compras_baterias.forEach(function (producto, key) {
            self.compras.push(producto);
          });
          self.compras_servicios.forEach(function (servicio, key) {
            self.compras.push(servicio);
          });
          self.form.nota_debito_factura = '';
        } else {
          alertify.warning("No se encuentran facturas para este proveedor.", 5);
          self.form.nota_debito_factura = '';
        }

        self.loading = false;
      }, function (err) {
        /*if(err.codigo_bateria){
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.",5);
          self.form.nota_debito_factura = '';
        }*/
        self.loading = false;
      });
    },
    nueva: function nueva() {
      var self = this;
      _api_notas_debito_cp__WEBPACK_IMPORTED_MODULE_0__["default"].nueva({}, function (data) {
        self.compras = [];
        self.tipos_notas = data.tipos_notas;
        self.monedas = data.monedas;
        self.form.nota_debito_moneda = self.monedas[0];
        self.form.t_cambio = Number(data.t_cambio.tasa);
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";

      if (self.form.monto_total <= 0) {
        alertify.warning("El monto de la nota debe ser mayor que cero", 5);
        self.btnAction = "Registrar";
      } else {
        self.$swal.fire({
          title: 'Esta seguro de procesar la nota de Débito?',
          text: "Revise los Detalles de la nota de Débito: ",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, registrar',
          cancelButtonText: 'Cancelar'
        }).then(function (result) {
          if (result.value) {
            _api_notas_debito_cp__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
              _this.$swal.fire('Nota de Débito Registrada!', 'La nota de Débito fue registrada correctamente', 'success');

              _this.$router.push({
                name: "notas-debito-cp"
              });
            }, function (err) {
              self.errorMessages = err;
              alertify.warning("Por favor revise los datos faltantes", 5);
              self.btnAction = "Registrar";
            });
          } else {
            self.btnAction = "Registrar";
          }
        });
      }
    }
  },
  mounted: function mounted() {
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-5ba594ec] {\n  min-width: 120px;\n}\n.table a[data-v-5ba594ec] {\n  color: #2675dc;\n}\n.table .table-number[data-v-5ba594ec] {\n  width: 60px;\n}\n.table .action[data-v-5ba594ec] {\n  width: 180px;\n}\n.table .detail-link[data-v-5ba594ec] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-5ba594ec] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-5ba594ec]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n.check-label2 {\n    margin-top: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarCP.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
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
                  attrs: {
                    tag: "button",
                    to: { name: "registrar-nota-debito-cp" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar N/D\n        ")
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
                  _vm.obtenerNotasDebito()
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
                  _c("option", { attrs: { value: "no_documento" } }, [
                    _vm._v("No Documento")
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
                      _vm.obtenerNotasDebito()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Buscar\n        ")
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.notas_debito, function(nota_debito, key) {
                  return [
                    _c("tr", { key: nota_debito.id_nota_debito }, [
                      _c("td", [_vm._v(_vm._s(nota_debito.no_documento))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.formatDate(nota_debito.fecha_emision))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            nota_debito.nota_debito_proveedor.nombre_comercial
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "C$ " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                Number(nota_debito.monto_total),
                                2
                              )
                            )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(nota_debito.concepto))]),
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
                                  value: "Mostrar detalles de recibo",
                                  expression: "'Mostrar detalles de recibo'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-nota-debito-cp",
                                  params: {
                                    id_nota_debito: nota_debito.id_nota_debito
                                  }
                                },
                                tag: "a"
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
                  ]
                }),
                _vm._v(" "),
                !_vm.notas_debito.length
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
            items: _vm.notas_debito,
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Administrar Notas de Débito")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Listado Notas de Débito")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No. Recibo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cliente")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/MostrarCP.vue?vue&type=template&id=9025f444&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/MostrarCP.vue?vue&type=template&id=9025f444& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "panel" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("span", { staticClass: "panel-title" }, [
        _vm._v("Nota de Débito No. : " + _vm._s(_vm.form.no_documento))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn-group" }, [
        _c(
          "a",
          {
            staticStyle: { "margin-right": "10px" },
            on: {
              click: function($event) {
                return _vm.$router.go(-1)
              }
            }
          },
          [_c("i", { staticClass: "fa fa-arrow-left" }), _vm._v(" Regresar")]
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
                  "ventas/nota-debito/reporte/" + _vm.form.id_nota_debito
                )
              }
            }
          },
          [_c("i", { staticClass: "fa fa-download" }), _vm._v(" Descargar")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel-body" },
      [
        _c("div", { staticClass: "document" }, [
          _c("div", { staticClass: "document-heading" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col col-12 text-center" }, [
                _c("div", { staticClass: "company-name" }, [
                  _vm._v("LUBRICANTES DE NICARAGUA, S. A.")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "company-address" }, [
                  _vm._v(
                    "De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "company-name" }, [
                  _vm._v("NOTA DE DEBITO")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "company-address" }, [
                  _c("strong", [_vm._v("No. " + _vm._s(_vm.form.no_documento))])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col col-8" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.form.nota_debito_proveedor
                    ? [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.form.nota_debito_proveedor.nombre_comercial +
                                (_vm.form.nota_debito_proveedor.tipo_persona ===
                                1
                                  ? ", Numero Cédula: " +
                                    _vm.form.nota_debito_proveedor.numero_cedula
                                  : " Numero RUC: " +
                                    _vm.form.nota_debito_proveedor.numero_ruc)
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ]
                    : [_c("span", [_vm._v("N/A")])]
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col col-4" }, [
                _c("table", { staticClass: "document-summary" }, [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("Número Nota:")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.no_documento))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Fecha Emisión:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(_vm.form.fecha_emision)))
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "document-body" }, [
            _c("table", { staticClass: "document-table" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.nota_debito_detalles, function(item) {
                    return [
                      _c("tr", { key: item.id_nota_debito_detalle }, [
                        _c("td", { staticClass: "width-4" }, [
                          _c("pre", [_vm._v(_vm._s(item.descripcion))])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2 text-center" }, [
                          _vm._v(_vm._s(_vm._f("formatMoney")(item.precio, 2)))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2 text-center" }, [
                          _vm._v(_vm._s(_vm._f("formatMoney")(item.iva, 2)))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2 text-center" }, [
                          _vm._v(
                            _vm._s(_vm._f("formatMoney")(item.subtotal, 2))
                          )
                        ])
                      ])
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm._f("formatMoney")(_vm.form.monto_subtotal, 2)
                        )
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm._f("formatMoney")(_vm.form.monto_iva, 2))
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm._f("formatMoney")(_vm.form.monto_total, 2))
                      )
                    ])
                  ])
                ])
              ])
            ])
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
    return _c("p", [_c("strong", [_vm._v("Acreditamos a la cuenta de:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Subtotal C$")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("IVA C$")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Total C$")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right", attrs: { colspan: "3" } }, [
      _c("strong", [_vm._v("Subtotal C$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right", attrs: { colspan: "3" } }, [
      _c("strong", [_vm._v("IVA C$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right", attrs: { colspan: "3" } }, [
      _c("strong", [_vm._v("Total C$")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=template&id=30ed4dea&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=template&id=30ed4dea& ***!
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Proveedor")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.form.nota_debito_proveedor,
                          params: { es_deudor: false },
                          trim: 80,
                          url: _vm.proveedoresBusquedaURL
                        },
                        on: { input: _vm.seleccionarProveedor }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.nota_debito_proveedor, function(
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
              _c("div", { staticClass: "col-sm-2" }, [
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
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Fecha")]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        disabled: true,
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
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
              _c("div", { staticClass: "col-sm-2" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Moneda")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.monedas, label: "descripcion" },
                      on: { change: _vm.limpiar },
                      model: {
                        value: _vm.form.nota_debito_moneda,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "nota_debito_moneda", $$v)
                        },
                        expression: "form.nota_debito_moneda"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.nota_debito_moneda, function(
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
                        value: _vm.form.concepto,
                        expression: "form.concepto"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.concepto },
                    on: {
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
            !_vm.form.nota_debito_proveedor
              ? _c("div", [_vm._m(2), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Listado de Facturas de Compra")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("multiselect", {
                        ref: "factura",
                        attrs: {
                          "allow-empty": false,
                          options: _vm.compras,
                          searchable: true,
                          "show-labels": false,
                          "deselect-label": "No se puede eliminar este valor",
                          label: "text",
                          placeholder: "Selecciona una cuenta para pagar",
                          "track-by": "identificador"
                        },
                        model: {
                          value: _vm.detalleForm.nota_debito_factura,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.detalleForm,
                              "nota_debito_factura",
                              $$v
                            )
                          },
                          expression: "detalleForm.nota_debito_factura"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.nota_debito_factura, function(
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
                    _vm._v(" Tipo de Nota")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("multiselect", {
                        ref: "tipo-nota",
                        attrs: {
                          "allow-empty": false,
                          options: _vm.tipos_notas,
                          searchable: true,
                          "show-labels": false,
                          "deselect-label": "No se puede eliminar este valor",
                          label: "descripcion",
                          placeholder: "Selecciona un tipo de nota",
                          "track-by": "id_tipo_nota_debito"
                        },
                        model: {
                          value: _vm.detalleForm.nota_debito_tipo,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "nota_debito_tipo", $$v)
                          },
                          expression: "detalleForm.nota_debito_tipo"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.nota_debito_factura, function(
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
                  _c("label", [
                    _vm._v(" Monto ("),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm.form.nota_debito_moneda
                            ? _vm.form.nota_debito_moneda.descripcion
                            : "N/A"
                        )
                      )
                    ]),
                    _vm._v(")")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.monto,
                        expression: "detalleForm.monto",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.form.nota_debito_moneda,
                      placeholder: "Monto"
                    },
                    domProps: { value: _vm.detalleForm.monto },
                    on: {
                      change: _vm.calcular_monto,
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "monto",
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
                  _c("label", { staticClass: "check-label2" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detalleForm.aplicaIVA,
                          expression: "detalleForm.aplicaIVA"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.detalleForm.aplicaIVA)
                          ? _vm._i(_vm.detalleForm.aplicaIVA, null) > -1
                          : _vm.detalleForm.aplicaIVA
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.detalleForm.aplicaIVA,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIVA",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIVA",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.detalleForm, "aplicaIVA", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v("Aplica IVA")
                  ])
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
                    [_vm._v("Agregar Factura\n                            ")]
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
                  _vm._l(_vm.errorMessages.detalleFacturas, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th"),
                      _vm._v(" "),
                      _c("th", [_vm._v("No Factura")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Tipo N/C")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Descripción")]),
                      _vm._v(" "),
                      _c("th", [
                        _vm._v(
                          "Monto " +
                            _vm._s(
                              _vm.form.nota_debito_moneda
                                ? _vm.form.nota_debito_moneda.descripcion
                                : "N/A"
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalleFacturas, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", { staticStyle: { width: "5%" } }, [
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
                            _c("td", { staticStyle: { width: "10%" } }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      item.nota_debito_factura.numero_factura,
                                    expression:
                                      "item.nota_debito_factura.numero_factura"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.nota_debito_factura.numero_factura
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.nota_debito_factura,
                                      "numero_factura",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", { staticStyle: { width: "10%" } }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.nota_debito_tipo.descripcion,
                                    expression:
                                      "item.nota_debito_tipo.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.nota_debito_tipo.descripcion
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.nota_debito_tipo,
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
                                    "detalleFacturas." + index + ".descripcion"
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
                            _c("td", { staticStyle: { width: "20%" } }, [
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
                                    "detalleFacturas." + index + ".descripcion"
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
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "12%" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.monto,
                                      expression: "item.monto",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: { value: item.monto },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "monto",
                                        _vm._n($event.target.value)
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                })
                              ]
                            )
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
                      _c("td", { attrs: { colspan: "3" } }),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c("strong", [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm.form.nota_debito_moneda
                                  ? _vm.form.nota_debito_moneda.codigo
                                  : "N/A"
                              )
                            )
                          ]),
                          _vm._v(
                            " " +
                              _vm._s(_vm._f("formatMoney")(_vm.total_cargo, 2))
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "3" } }),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.form.nota_debito_moneda
                                ? _vm.form.nota_debito_moneda.codigo
                                : "N/A"
                            ) +
                              " " +
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.form.monto_total_iva,
                                  2
                                )
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "3" } }),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.form.nota_debito_moneda
                                ? _vm.form.nota_debito_moneda.codigo
                                : "N/A"
                            ) +
                              " " +
                              _vm._s(
                                _vm._f("formatMoney")(_vm.form.monto_total, 2)
                              )
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "notas-debito-cp" }, tag: "button" } },
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
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Notas de Débito")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar notas de Débito")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de la nota")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione un proveedor para continuar.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalles de la nota")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" SubTotal")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" IVA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" SubTotal ")])
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

/***/ "./resources/app/api/notas_debito.js":
/*!*******************************************!*\
  !*** ./resources/app/api/notas_debito.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('cuentas-cobrar/notas-debito/obtener', data).then(function (response) {
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
    axios.post('cuentas-cobrar/notas-debito/registrar', data).then(function (response) {
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
    axios.post('cuentas-cobrar/notas-debito/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNotaDebito: function obtenerNotaDebito(data, cb, errorCb) {
    axios.post('cuentas-cobrar/notas-debito/obtener-nota-debito', data).then(function (response) {
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

/***/ "./resources/app/api/notas_debito_cp.js":
/*!**********************************************!*\
  !*** ./resources/app/api/notas_debito_cp.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('cuentas-pagar/notas-debito/obtener', data).then(function (response) {
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
    axios.post('cuentas-pagar/notas-debito/registrar', data).then(function (response) {
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
    axios.post('cuentas-pagar/notas-debito/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNotaDebito: function obtenerNotaDebito(data, cb, errorCb) {
    axios.post('cuentas-pagar/notas-debito/obtener-nota-debito', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerFacturasCompraProveedor: function obtenerFacturasCompraProveedor(data, cb, errorCb) {
    axios.post('compras/facturas-compra/obtener-facturas-proveedor', data).then(function (response) {
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

/***/ "./resources/app/components/notas_debito/ListadoCP.vue":
/*!*************************************************************!*\
  !*** ./resources/app/components/notas_debito/ListadoCP.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoCP_vue_vue_type_template_id_5ba594ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true& */ "./resources/app/components/notas_debito/ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true&");
/* harmony import */ var _ListadoCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoCP.vue?vue&type=script&lang=js& */ "./resources/app/components/notas_debito/ListadoCP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoCP_vue_vue_type_style_index_0_id_5ba594ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true& */ "./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoCP_vue_vue_type_template_id_5ba594ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoCP_vue_vue_type_template_id_5ba594ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ba594ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/notas_debito/ListadoCP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/notas_debito/ListadoCP.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/ListadoCP.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_style_index_0_id_5ba594ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=style&index=0&id=5ba594ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_style_index_0_id_5ba594ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_style_index_0_id_5ba594ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_style_index_0_id_5ba594ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_style_index_0_id_5ba594ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_style_index_0_id_5ba594ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/notas_debito/ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_template_id_5ba594ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/ListadoCP.vue?vue&type=template&id=5ba594ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_template_id_5ba594ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCP_vue_vue_type_template_id_5ba594ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/notas_debito/MostrarCP.vue":
/*!*************************************************************!*\
  !*** ./resources/app/components/notas_debito/MostrarCP.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MostrarCP_vue_vue_type_template_id_9025f444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarCP.vue?vue&type=template&id=9025f444& */ "./resources/app/components/notas_debito/MostrarCP.vue?vue&type=template&id=9025f444&");
/* harmony import */ var _MostrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarCP.vue?vue&type=script&lang=js& */ "./resources/app/components/notas_debito/MostrarCP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MostrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarCP_vue_vue_type_template_id_9025f444___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MostrarCP_vue_vue_type_template_id_9025f444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/notas_debito/MostrarCP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/notas_debito/MostrarCP.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/MostrarCP.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarCP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/MostrarCP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/notas_debito/MostrarCP.vue?vue&type=template&id=9025f444&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/MostrarCP.vue?vue&type=template&id=9025f444& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarCP_vue_vue_type_template_id_9025f444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarCP.vue?vue&type=template&id=9025f444& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/MostrarCP.vue?vue&type=template&id=9025f444&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarCP_vue_vue_type_template_id_9025f444___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarCP_vue_vue_type_template_id_9025f444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/notas_debito/RegistrarCP.vue":
/*!***************************************************************!*\
  !*** ./resources/app/components/notas_debito/RegistrarCP.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarCP_vue_vue_type_template_id_30ed4dea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarCP.vue?vue&type=template&id=30ed4dea& */ "./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=template&id=30ed4dea&");
/* harmony import */ var _RegistrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarCP.vue?vue&type=script&lang=js& */ "./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarCP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarCP.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarCP_vue_vue_type_template_id_30ed4dea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarCP_vue_vue_type_template_id_30ed4dea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/notas_debito/RegistrarCP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarCP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarCP.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=template&id=30ed4dea&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=template&id=30ed4dea& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_template_id_30ed4dea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarCP.vue?vue&type=template&id=30ed4dea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/notas_debito/RegistrarCP.vue?vue&type=template&id=30ed4dea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_template_id_30ed4dea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarCP_vue_vue_type_template_id_30ed4dea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);