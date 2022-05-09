(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recibos-oficiales"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/recibos_oficiales */ "./resources/app/api/recibos_oficiales.js");
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
          field: "nombre_persona",
          value: "",
          type: 1
        }
      },
      recibos: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarPagos: function mostrarPagos(key) {
      if (this.recibos[key].mostrar) {
        this.recibos[key].mostrar = 0;
      } else {
        this.recibos[key].mostrar = 1;
      }
    },
    obtenerRecibos: function obtenerRecibos() {
      var self = this;
      _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        data.rows.forEach(function (recibos, key) {
          data.rows[key].mostrar = 0;
        });
        self.recibos = data.rows;
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
      this.obtenerRecibos();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerRecibos();
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerRecibos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/recibos_oficiales */ "./resources/app/api/recibos_oficiales.js");
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
        no_recibo: "",
        fecha_emision: "",
        id_tipo_recibo: "",
        id_proveedor: 0,
        id_bodega: 0,
        detalleProductos: [],
        recibo_cliente: [],
        recibo_bodega: [],
        recibo_detalles: [],
        recibo_tipo: [],
        log_registro: [],
        total: 0,
        sub_total: 0
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerRecibo: function obtenerRecibo() {
      var self = this;
      _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerRecibo({
        id_recibo: this.$route.params.id_recibo
      }, function (data) {
        self.form = data;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    }
  },
  computed: {
    gran_total: function gran_total() {
      return this.form.recibo_detalles.reduce(function (carry, item) {
        return carry + Number(item.monto);
      }, 0);
    }
  },
  mounted: function mounted() {
    this.obtenerRecibo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/recibos_oficiales */ "./resources/app/api/recibos_oficiales.js");
/* harmony import */ var _api_cuentas_por_cobrar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/cuentas_por_cobrar */ "./resources/app/api/cuentas_por_cobrar.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/custom-scripts/Round */ "./resources/app/assets/custom-scripts/Round.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import {SweetModal} from 'sweet-modal-vue'




/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
      SweetModal
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      clientesBusquedaURL: "/ventas/clientes/buscar",
      cuentas: [],
      vias_pago: [],
      monedas: [],
      bancos: [],
      detalleForm: {
        cuentax: '',
        fecha_pago: '',
        descripcion_pago: '',
        monto: 0,
        monto_me: 0,
        moneda_x: [],
        doc_exoneracion_ir: '',
        doc_exoneracion_imi: '',
        aplicaIR: false,
        aplicaIMI: false
      },
      detalleFormPago: {
        via_pagox: [],
        monto: 1,
        moneda_x: [],
        banco_x: [],
        numero_minuta: '',
        numero_nota_credito: '',
        numero_cheque: '',
        numero_transferencia: '',
        numero_recibo_pago: ''
      },
      form: {
        no_documento: "",
        fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
        recibo_cliente: {},
        nombre_persona: "",
        concepto: "",
        t_cambio: 0,
        monto_total_me: 0,
        monto_total: 0,
        saldo_total_me: 0,
        saldo_total: 0,
        detalleCuentasxCobrar: [],
        detallePago: [],
        pago_vuelto: 0,
        pago_pendiente: 0,
        pago_vuelto_mn: 0,
        pago_pendiente_mn: 0,
        tipo_recibo: 1
      },
      btnAction: "Registrar Recibo",
      errorMessages: []
    };
  },
  computed: {
    total_a_pagar: function total_a_pagar() {
      var self = this;
      self.form.monto_total = Number(this.form.detalleCuentasxCobrar.reduce(function (carry, item) {
        return carry + Number(item.monto);
      }, 0).toFixed(2));
      self.form.saldo_total = Number(this.form.detalleCuentasxCobrar.reduce(function (carry, item) {
        return carry + Number(_assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(item.cuentax.saldo_actual), 2)) - item.monto;
      }, 0).toFixed(2));

      if (!isNaN(this.form.monto_total)) {
        this.form.monto_total_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].decimalAdjust('ceil', Number((this.form.monto_total / this.form.t_cambio).toFixed(4)), -2);
        this.form.saldo_total_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].decimalAdjust('ceil', Number((this.form.saldo_total / this.form.t_cambio).toFixed(4)), -2);
        return this.form.monto_total;
      } else return 0;
    },
    total_deuda: function total_deuda() {
      var _this = this;

      var total_pagos = this.form.detallePago.reduce(function (carry, item) {
        return carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number(Number(item.monto_me * _this.form.t_cambio).toFixed(2)));
      }, 0);
      /*let total_pagos_cuentas = this.form.detalleCuentasxCobrar.reduce((carry, item) => {
          return (carry + Number(item.monto));
      }, 0);*/

      var total_pagos_cuentas = this.form.monto_total;

      if ((total_pagos_cuentas - total_pagos).toFixed(2) < 0) {
        this.form.pago_pendiente = 0;
        this.form.pago_pendiente_mn = 0;
        this.form.pago_vuelto_mn = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(Number(total_pagos.toFixed(2)) - Number(this.form.monto_total).toFixed(2)), 2);
        this.form.pago_vuelto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number((this.form.pago_vuelto_mn / this.form.t_cambio).toFixed(2)), 2);
      } else {
        this.form.pago_pendiente_mn = Number((total_pagos_cuentas - total_pagos).toFixed(2));
        this.form.pago_pendiente = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].decimalAdjust('ceil', Number((this.form.pago_pendiente_mn / this.form.t_cambio).toFixed(4)), -2);
        this.form.pago_vuelto = 0;
        this.form.pago_vuelto_mn = 0;
      }

      if (!isNaN(this.form.pago_pendiente_mn)) {
        //this.form.pago_pendiente = roundNumber.round(Number((this.form.pago_pendiente_mn / this.form.t_cambio)),2);
        return this.form.pago_pendiente_mn;
      } else return 0;
    }
  },
  methods: {
    calcularSaldoX: function calcularSaldoX(item) {
      return Number(_assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(item.cuentax.saldo_actual), 2) - Number(item.monto).toFixed(2));
    },
    cargar_detalles_cuenta: function cargar_detalles_cuenta() {
      var self = this;
      if (self.detalleForm.cuentax) //self.detalleForm.moneda_x = self.monedas[1];
        self.detalleForm.monto_me = 0;
      self.detalleForm.monto = Number(Number(self.detalleForm.cuentax.saldo_actual).toFixed(2));
    },
    establecerConcepto: function establecerConcepto(itemX) {
      itemX.monto = Math.max(Math.min(Number(!isNaN(itemX.monto) ? itemX.monto.toFixed(2) : 0), Number(Number(itemX.cuentax.saldo_actual).toFixed(2))), 1);

      if (itemX.monto === Number(Number(itemX.cuentax.saldo_actual).toFixed(2))) {
        itemX.descripcion_pago = 'Cancela factura No.' + itemX.cuentax.no_documento_origen + '.';
      } else {
        itemX.descripcion_pago = 'Abona factura No.' + itemX.cuentax.no_documento_origen + '. Saldo C$' + (Number(itemX.cuentax.saldo_actual) - itemX.monto).toFixed(2) + '.';
      }

      var monto_retencion_ir = 0,
          monto_retencion_imi = 0,
          iva = 1.15;

      if (itemX.cuentax.cuenta_factura.impuesto_exonerado) {
        iva = 1;
      }

      if (itemX.aplicaIR) {
        monto_retencion_ir = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(itemX.monto / iva) * 0.02, 2);
      } else {
        monto_retencion_ir = 0;
      }

      if (itemX.aplicaIMI) {
        monto_retencion_imi = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(itemX.monto / iva) * 0.01, 2);
      } else {
        monto_retencion_imi = 0;
      }

      itemX.monto_retencion_ir = monto_retencion_ir;
      itemX.monto_retencion_imi = monto_retencion_imi;
    },
    calcularEquivalente: function calcularEquivalente(itemX) {
      if (itemX.moneda_x.id_moneda === 1 && itemX.monto > 0) {
        itemX.monto_me = Number((itemX.monto / this.form.t_cambio).toFixed(2));
      }

      if (itemX.moneda_x.id_moneda === 3 && itemX.monto_me > 0) {
        itemX.monto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(itemX.monto_me * this.form.t_cambio), 2);
      }
    },
    seleccionarCliente: function seleccionarCliente(e) {
      var clienteP = e.target.value;
      var self = this;
      self.form.recibo_cliente = clienteP;
      self.form.nombre_persona = self.form.recibo_cliente.nombre_comercial;
      self.loading = true;
      self.form.detalleCuentasxCobrar = [];
      self.form.detallePago = [];
      self.detalleForm.cuentax = '';
      _api_cuentas_por_cobrar__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerCuentasCliente({
        id_cliente: self.form.recibo_cliente.id_cliente
      }, function (data) {
        if (data !== null) {
          self.cuentas = data;
          self.detalleForm.cuentax = '';
        } else {
          alertify.warning("No se encuentran cuentas para este cliente.", 5);
          self.detalleForm.cuentax = '';
        }

        self.loading = false;
      }, function (err) {
        /*if(err.codigo_bateria){
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.",5);
          self.detalleForm.cuentax = '';
        }*/
        self.loading = false;
      });
    },
    nuevo: function nuevo() {
      var self = this;
      _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.vias_pago = data.vias_pago;
        self.monedas = data.monedas;
        self.bancos = data.bancos;
        self.cuentas = [];
        self.form.t_cambio = Number(data.t_cambio.tasa_paralela);
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.cuentax) {
        if (self.detalleForm.monto > 0) {
          var validacion = 0;

          if (self.detalleForm.aplicaIR && self.detalleForm.doc_exoneracion_ir === '') {
            validacion++;
            alertify.warning("Si el pago retiene IR se debe definir un No. documento Exoneración", 5);
          }

          if (self.detalleForm.aplicaIMI && self.detalleForm.doc_exoneracion_imi === '') {
            validacion++;
            alertify.warning("Si el pago retiene IMI se debe definir un No. documento Exoneración", 5);
          }

          if (validacion === 0) {
            var i = 0;
            var keyx = 0;

            if (self.form.detalleCuentasxCobrar) {
              self.form.detalleCuentasxCobrar.forEach(function (cuentax, key) {
                if (self.detalleForm.cuentax.id_cuentaxcobrar === cuentax.cuentax.id_cuentaxcobrar) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (i === 0) {
              if (Number(Number(self.detalleForm.monto).toFixed(2)) === Number(Number(self.detalleForm.cuentax.saldo_actual).toFixed(2))) {
                self.detalleForm.descripcion_pago = 'Cancela factura No.' + self.detalleForm.cuentax.no_documento_origen + '.';
              } else {
                self.detalleForm.descripcion_pago = 'Abona factura No.' + self.detalleForm.cuentax.no_documento_origen + '. Saldo C$' + (Number(self.detalleForm.cuentax.saldo_actual) - self.detalleForm.monto).toFixed(2) + '.';
              }

              var monto_retencion_ir = 0,
                  monto_retencion_imi = 0,
                  iva = 1.15;

              if (self.detalleForm.cuentax.cuenta_factura.impuesto_exonerado) {
                iva = 1;
              }

              if (self.detalleForm.aplicaIR) {
                monto_retencion_ir = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(self.detalleForm.monto / iva) * 0.02, 2);
              } else {
                monto_retencion_ir = 0;
              }

              if (self.detalleForm.aplicaIMI) {
                monto_retencion_imi = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(self.detalleForm.monto / iva) * 0.01, 2);
              } else {
                monto_retencion_imi = 0;
              }

              self.form.detalleCuentasxCobrar.push({
                cuentax: self.detalleForm.cuentax,
                monto: Number(self.detalleForm.monto),
                monto_me: Number((self.detalleForm.monto / self.form.t_cambio).toFixed(2)),
                monto_subtotal: _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(self.detalleForm.monto - monto_retencion_imi - monto_retencion_ir), 2),
                monto_retencion_ir: monto_retencion_ir,
                monto_retencion_imi: monto_retencion_imi,
                aplicaIR: self.detalleForm.aplicaIR,
                aplicaIMI: self.detalleForm.aplicaIMI,
                doc_exoneracion_ir: self.detalleForm.doc_exoneracion_ir,
                doc_exoneracion_imi: self.detalleForm.doc_exoneracion_imi,
                descripcion_pago: self.detalleForm.descripcion_pago
              });
              alertify.success("Artículo agregado!", 5);
            } else {
              var nuevo_total = self.form.detalleCuentasxCobrar[keyx].monto + self.detalleForm.monto;

              if (nuevo_total <= Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual)) {
                self.form.detalleCuentasxCobrar[keyx].monto = nuevo_total;
                self.form.detalleCuentasxCobrar[keyx].monto_me = Number((self.detalleForm.monto / self.form.t_cambio).toFixed(2));
                alertify.success("Cuenta agregada!", 5);

                if (nuevo_total === Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual)) {
                  self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Cancela factura No.' + self.form.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen + '.';
                } else {
                  self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Abona factura No.' + self.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen + '. Saldo C$' + (Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual) - nuevo_total).toFixed(2) + '.';
                }
              } else {
                self.form.detalleCuentasxCobrar[keyx].monto = Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual);
                self.form.detalleCuentasxCobrar[keyx].monto_me = Number((self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual / self.form.t_cambio).toFixed(2));
                self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Cancela factura No.' + self.form.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen + '.';
                alertify.warning("Se ha agregado el monto maximo disponible para cancelar esta cuenta", 5);
              }
            }

            self.detalleForm.cuentax = null;
            self.detalleForm.monto_me = 0;
            self.detalleForm.monto = 0;
            self.detalleForm.descripcion_pago = '';
            this.$refs.cuenta.$el.focus();
          }
        } else {
          alertify.warning("El monto del abono debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una cuenta para realizar el abono", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleCuentasxCobrar.length >= 1) {
        this.form.detalleCuentasxCobrar.splice(index, 1);
      } else {
        this.form.detalleCuentasxCobrar = [];
      }
    },
    agregarMetodoPago: function agregarMetodoPago() {
      var self = this;

      if (self.detalleFormPago.via_pagox && self.detalleFormPago.moneda_x) {
        if (self.detalleFormPago.monto > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.detallePago) {
            self.form.detallePago.forEach(function (via_pago_x, key) {
              if (self.detalleFormPago.via_pagox.id_via_pago === via_pago_x.via_pagox.id_via_pago && self.detalleFormPago.moneda_x.id_moneda === via_pago_x.moneda_x.id_moneda) {
                i++;
                keyx = key;
              }
            });
          }

          var monto_me = 0,
              monto_mn = 0;

          if (self.detalleFormPago.moneda_x.id_moneda === 1) {
            monto_mn = Number(self.detalleFormPago.monto);
            monto_me = Number(self.detalleFormPago.monto / self.form.t_cambio);
          } else if (self.detalleFormPago.moneda_x.id_moneda === 3) {
            monto_me = Number(self.detalleFormPago.monto); //monto_mn = Number((self.detalleFormPago.monto * self.form.t_cambio));

            monto_mn = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_5__["default"].round(Number(monto_me * this.form.t_cambio), 2);
          }

          if (i === 0) {
            self.form.detallePago.push({
              via_pagox: self.detalleFormPago.via_pagox,
              moneda_x: self.detalleFormPago.moneda_x,
              monto: Number(monto_mn.toFixed(2)),
              monto_me: Number(monto_me.toFixed(2)),
              banco_x: self.detalleFormPago.banco_x,
              numero_minuta: self.detalleFormPago.numero_minuta,
              numero_nota_credito: self.detalleFormPago.numero_nota_credito,
              numero_cheque: self.detalleFormPago.numero_cheque,
              numero_transferencia: self.detalleFormPago.numero_transferencia,
              numero_recibo_pago: self.detalleFormPago.numero_recibo_pago
            });
            alertify.success("Método de pago agregado!", 5);
          } else {
            //let nuevo_monto_total = self.form.detallePago[keyx].monto + self.detalleFormPago.monto;
            self.form.detallePago[keyx].monto_me = Number(self.form.detallePago[keyx].monto_me + self.detalleFormPago.monto);
            self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto_me * self.form.t_cambio).toFixed(2));
            alertify.success("Pago agregado!", 5);
          }

          self.detalleFormPago.via_pagox = null;
          self.detalleFormPago.monto = 0;
          self.detalleFormPago.monto_me = 0;
          self.detalleFormPago.moneda_x = null;
          self.detalleFormPago.banco_x = null;
          self.detalleFormPago.numero_minuta = '';
          self.detalleFormPago.numero_nota_credito = '';
          self.detalleFormPago.numero_cheque = '';
          self.detalleFormPago.numero_transferencia = '';
          self.detalleFormPago.numero_recibo_pago = '';
        } else {
          alertify.warning("El monto debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un método y una moneda", 5);
      }
    },
    eliminarLineaPago: function eliminarLineaPago(item, index) {
      if (this.form.detallePago.length >= 1) {
        this.form.detallePago.splice(index, 1);
      } else {
        this.form.detallePago = [];
      }
    },
    registrar: function registrar() {
      var _this2 = this;

      var self = this;
      self.btnAction = "Registrando, espere....";

      if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {
        alertify.warning("El monto del recibo deber ser pagado en su totalidad", 5); //self.errorMessages.serie = Array('Error serie');

        self.btnAction = "Registrar Recibo";
      } else if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {} else {
        self.$swal.fire({
          title: 'Esta seguro de procesar el recibo?',
          text: "Detalles del recibo: ",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, registrar',
          cancelButtonText: 'Cancelar'
        }).then(function (result) {
          if (result.value) {
            _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
              _this2.$swal.fire('Recibo Registrado!', 'El recibo fue registrado correctamente', 'success');

              _this2.$router.push({
                name: "recibos-oficiales"
              });
            }, function (err) {
              self.errorMessages = err;
              alertify.warning("Por favor revise los datos faltantes", 5);
              self.btnAction = "Registrar Recibo";
            });
          } else {
            self.btnAction = "Registrar Recibo";
          }
        });
      }
    },
    registrarCliente: function registrarCliente() {
      var self = this;
      _api_clientes__WEBPACK_IMPORTED_MODULE_3__["default"].registrarBasico(self.formCliente, function (data) {
        alertify.success("Cliente registrado exitosamente", 5); //console.log(data);

        self.form.recibo_cliente = data;
        self.form.tipo_identificacion = self.form.recibo_cliente.tipo_persona;

        if (self.form.recibo_cliente.tipo_persona === 1) {
          self.form.identificacion = self.form.recibo_cliente.numero_cedula;
        } else {
          self.form.identificacion = self.form.recibo_cliente.numero_ruc;
        }

        self.$refs.modal.close();
      }, function (err) {
        self.errorMessages = err;
      });
    },
    seleccionarTipo: function seleccionarTipo() {
      var self = this;

      if (self.form.id_tipo === 1) {
        self.form.dias_credito = 0;
      } else {
        self.form.dias_credito = 0;
        self.form.dias_credito = self.plazo_maximo_credito;
      }
      /*calcular fecha*/

    }
  },
  mounted: function mounted() {
    // this.obtenerAfectacionesTodas();
    // this.obtenerTodasBodegasProductos();
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/recibos_oficiales */ "./resources/app/api/recibos_oficiales.js");
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
          field: "nombre_persona",
          value: "",
          type: 2
        }
      },
      recibos: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarPagos: function mostrarPagos(key) {
      if (this.recibos[key].mostrar) {
        this.recibos[key].mostrar = 0;
      } else {
        this.recibos[key].mostrar = 1;
      }
    },
    obtenerRecibos: function obtenerRecibos() {
      var self = this;
      _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        data.rows.forEach(function (recibos, key) {
          data.rows[key].mostrar = 0;
        });
        self.recibos = data.rows;
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
      this.obtenerRecibos();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerRecibos();
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerRecibos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/recibos_oficiales */ "./resources/app/api/recibos_oficiales.js");
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
        no_recibo: "",
        fecha_emision: "",
        id_tipo_recibo: "",
        id_proveedor: 0,
        id_bodega: 0,
        detalleProductos: [],
        recibo_cliente: [],
        recibo_bodega: [],
        recibo_detalles: [],
        recibo_tipo: [],
        log_registro: [],
        total: 0,
        sub_total: 0
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerRecibo: function obtenerRecibo() {
      var self = this;
      _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerRecibo({
        id_recibo: this.$route.params.id_recibo
      }, function (data) {
        self.form = data;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    }
  },
  computed: {
    gran_total: function gran_total() {
      return this.form.recibo_detalles.reduce(function (carry, item) {
        return carry + Number(item.monto);
      }, 0);
    }
  },
  mounted: function mounted() {
    this.obtenerRecibo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/recibos_oficiales */ "./resources/app/api/recibos_oficiales.js");
/* harmony import */ var _api_cuentas_por_cobrar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/cuentas_por_cobrar */ "./resources/app/api/cuentas_por_cobrar.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/custom-scripts/Round */ "./resources/app/assets/custom-scripts/Round.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import {SweetModal} from 'sweet-modal-vue'



/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
      SweetModal
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      cuentas: [],
      vias_pago: [],
      monedas: [],
      bancos: [],
      detalleForm: {
        cuentax: '',
        fecha_pago: '',
        descripcion_pago: '',
        monto: 0,
        monto_me: 0,
        moneda_x: [],
        doc_exoneracion_ir: '',
        doc_exoneracion_imi: '',
        aplicaIR: false,
        aplicaIMI: false
      },
      detalleFormPago: {
        via_pagox: [],
        monto: 1,
        moneda_x: [],
        banco_x: [],
        numero_minuta: '',
        numero_nota_credito: '',
        numero_cheque: '',
        numero_transferencia: '',
        numero_recibo_pago: ''
      },
      form: {
        no_documento: "",
        fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
        recibo_trabajador: {},
        nombre_persona: "",
        concepto: "",
        t_cambio: 0,
        monto_total_me: 0,
        monto_total: 0,
        saldo_total_me: 0,
        saldo_total: 0,
        detalleCuentasxCobrar: [],
        detallePago: [],
        pago_vuelto: 0,
        pago_pendiente: 0,
        pago_vuelto_mn: 0,
        pago_pendiente_mn: 0,
        tipo_recibo: 2
      },
      btnAction: "Registrar Recibo",
      errorMessages: []
    };
  },
  computed: {
    total_a_pagar: function total_a_pagar() {
      var self = this;
      self.form.monto_total = Number(this.form.detalleCuentasxCobrar.reduce(function (carry, item) {
        return carry + Number(item.monto);
      }, 0).toFixed(2));
      self.form.saldo_total = Number(this.form.detalleCuentasxCobrar.reduce(function (carry, item) {
        return carry + Number(_assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(item.cuentax.saldo_actual), 2)) - item.monto;
      }, 0).toFixed(2));

      if (!isNaN(this.form.monto_total)) {
        this.form.monto_total_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].decimalAdjust('ceil', Number((this.form.monto_total / this.form.t_cambio).toFixed(4)), -2);
        this.form.saldo_total_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].decimalAdjust('ceil', Number((this.form.saldo_total / this.form.t_cambio).toFixed(4)), -2);
        return this.form.monto_total;
      } else return 0;
    },
    total_deuda: function total_deuda() {
      var _this = this;

      var total_pagos = this.form.detallePago.reduce(function (carry, item) {
        return carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number(Number(item.monto_me * _this.form.t_cambio).toFixed(2)));
      }, 0);
      /*let total_pagos_cuentas = this.form.detalleCuentasxCobrar.reduce((carry, item) => {
          return (carry + Number(item.monto));
      }, 0);*/

      var total_pagos_cuentas = this.form.monto_total;

      if ((total_pagos_cuentas - total_pagos).toFixed(2) < 0) {
        this.form.pago_pendiente = 0;
        this.form.pago_pendiente_mn = 0;
        this.form.pago_vuelto_mn = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(Number(total_pagos.toFixed(2)) - Number(this.form.monto_total).toFixed(2)), 2);
        this.form.pago_vuelto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number((this.form.pago_vuelto_mn / this.form.t_cambio).toFixed(2)), 2);
      } else {
        this.form.pago_pendiente_mn = Number((total_pagos_cuentas - total_pagos).toFixed(2));
        this.form.pago_pendiente = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].decimalAdjust('ceil', Number((this.form.pago_pendiente_mn / this.form.t_cambio).toFixed(4)), -2);
        this.form.pago_vuelto = 0;
        this.form.pago_vuelto_mn = 0;
      }

      if (!isNaN(this.form.pago_pendiente_mn)) {
        //this.form.pago_pendiente = roundNumber.round(Number((this.form.pago_pendiente_mn / this.form.t_cambio)),2);
        return this.form.pago_pendiente_mn;
      } else return 0;
    }
  },
  methods: {
    calcularSaldoX: function calcularSaldoX(item) {
      return Number(_assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(item.cuentax.saldo_actual), 2) - Number(item.monto).toFixed(2));
    },
    cargar_detalles_cuenta: function cargar_detalles_cuenta() {
      var self = this;
      if (self.detalleForm.cuentax) //self.detalleForm.moneda_x = self.monedas[1];
        self.detalleForm.monto_me = 0;
      self.detalleForm.monto = Number(Number(self.detalleForm.cuentax.saldo_actual).toFixed(2));
    },
    establecerConcepto: function establecerConcepto(itemX) {
      itemX.monto = Math.max(Math.min(Number(!isNaN(itemX.monto) ? itemX.monto.toFixed(2) : 0), Number(Number(itemX.cuentax.saldo_actual).toFixed(2))), 1);

      if (itemX.monto === Number(Number(itemX.cuentax.saldo_actual).toFixed(2))) {
        itemX.descripcion_pago = 'Cancela factura No.' + itemX.cuentax.no_documento_origen + '.';
      } else {
        itemX.descripcion_pago = 'Abona factura No.' + itemX.cuentax.no_documento_origen + '. Saldo C$' + (Number(itemX.cuentax.saldo_actual) - itemX.monto).toFixed(2) + '.';
      }

      var monto_retencion_ir = 0,
          monto_retencion_imi = 0;

      if (itemX.aplicaIR) {
        monto_retencion_ir = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(itemX.monto) * 0.02, 2);
      } else {
        monto_retencion_ir = 0;
      }

      if (itemX.aplicaIMI) {
        monto_retencion_imi = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(itemX.monto) * 0.01, 2);
      } else {
        monto_retencion_imi = 0;
      }

      itemX.monto_retencion_ir = monto_retencion_ir;
      itemX.monto_retencion_imi = monto_retencion_imi;
    },
    calcularEquivalente: function calcularEquivalente(itemX) {
      if (itemX.moneda_x.id_moneda === 1 && itemX.monto > 0) {
        itemX.monto_me = Number((itemX.monto / this.form.t_cambio).toFixed(2));
      }

      if (itemX.moneda_x.id_moneda === 3 && itemX.monto_me > 0) {
        itemX.monto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(itemX.monto_me * this.form.t_cambio), 2);
      }
    },
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajadorP = e.target.value;
      var self = this;
      self.form.recibo_trabajador = trabajadorP;
      self.form.nombre_persona = (self.form.recibo_trabajador.primer_nombre ? self.form.recibo_trabajador.primer_nombre : '') + (self.form.recibo_trabajador.segundo_nombre ? ' ' + self.form.recibo_trabajador.segundo_nombre : '') + (self.form.recibo_trabajador.primer_apellido ? ' ' + self.form.recibo_trabajador.primer_apellido : '') + (self.form.recibo_trabajador.segundo_apellido ? ' ' + self.form.recibo_trabajador.segundo_apellido : '');
      self.loading = true;
      self.form.detalleCuentasxCobrar = [];
      self.form.detallePago = [];
      self.detalleForm.cuentax = '';
      _api_cuentas_por_cobrar__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerCuentasTrabajador({
        id_trabajador: self.form.recibo_trabajador.id_trabajador
      }, function (data) {
        if (data !== null) {
          self.cuentas = data;
          self.detalleForm.cuentax = '';
        } else {
          alertify.warning("No se encuentran cuentas para este empleado.", 5);
          self.detalleForm.cuentax = '';
        }

        self.loading = false;
      }, function (err) {
        /*if(err.codigo_bateria){
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.",5);
          self.detalleForm.cuentax = '';
        }*/
        self.loading = false;
      });
    },
    nuevo: function nuevo() {
      var self = this;
      _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.vias_pago = data.vias_pago;
        self.monedas = data.monedas;
        self.bancos = data.bancos;
        self.cuentas = [];
        self.form.t_cambio = Number(data.t_cambio.tasa_paralela);
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.cuentax) {
        if (self.detalleForm.monto > 0) {
          var validacion = 0;
          /*if(self.detalleForm.aplicaIR && self.detalleForm.doc_exoneracion_ir ===''){
              validacion++;
              alertify.warning("Si el pago retiene IR se debe definir un No. documento Exoneración", 5);
          }
          if(self.detalleForm.aplicaIMI && self.detalleForm.doc_exoneracion_imi ===''){
              validacion++;
              alertify.warning("Si el pago retiene IMI se debe definir un No. documento Exoneración", 5);
          }*/

          if (validacion === 0) {
            var i = 0;
            var keyx = 0;

            if (self.form.detalleCuentasxCobrar) {
              self.form.detalleCuentasxCobrar.forEach(function (cuentax, key) {
                if (self.detalleForm.cuentax.id_cuentaxcobrar === cuentax.cuentax.id_cuentaxcobrar) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (i === 0) {
              if (Number(Number(self.detalleForm.monto).toFixed(2)) === Number(Number(self.detalleForm.cuentax.saldo_actual).toFixed(2))) {
                self.detalleForm.descripcion_pago = 'Cancela factura No.' + self.detalleForm.cuentax.no_documento_origen + '.';
              } else {
                self.detalleForm.descripcion_pago = 'Abona factura No.' + self.detalleForm.cuentax.no_documento_origen + '. Saldo C$' + (Number(self.detalleForm.cuentax.saldo_actual) - self.detalleForm.monto).toFixed(2) + '.';
              }

              var monto_retencion_ir = 0,
                  monto_retencion_imi = 0;
              /*if(self.detalleForm.aplicaIR){
                  monto_retencion_ir = roundNumber.round(Number(self.detalleForm.monto)*0.02,2);
              }else{
                  monto_retencion_ir=0;
              }
               if(self.detalleForm.aplicaIMI){
                  monto_retencion_imi = roundNumber.round(Number(self.detalleForm.monto)*0.01,2);
              }else{
                  monto_retencion_imi=0;
              }*/

              self.form.detalleCuentasxCobrar.push({
                cuentax: self.detalleForm.cuentax,
                monto: Number(self.detalleForm.monto),
                monto_me: Number((self.detalleForm.monto / self.form.t_cambio).toFixed(2)),
                monto_subtotal: _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(self.detalleForm.monto - monto_retencion_imi - monto_retencion_ir), 2),
                monto_retencion_ir: monto_retencion_ir,
                monto_retencion_imi: monto_retencion_imi,
                aplicaIR: self.detalleForm.aplicaIR,
                aplicaIMI: self.detalleForm.aplicaIMI,
                doc_exoneracion_ir: self.detalleForm.doc_exoneracion_ir,
                doc_exoneracion_imi: self.detalleForm.doc_exoneracion_imi,
                descripcion_pago: self.detalleForm.descripcion_pago
              });
              alertify.success("Artículo agregado!", 5);
            } else {
              var nuevo_total = self.form.detalleCuentasxCobrar[keyx].monto + self.detalleForm.monto;

              if (nuevo_total <= Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual)) {
                self.form.detalleCuentasxCobrar[keyx].monto = nuevo_total;
                self.form.detalleCuentasxCobrar[keyx].monto_me = Number((self.detalleForm.monto / self.form.t_cambio).toFixed(2));
                alertify.success("Cuenta agregada!", 5);

                if (nuevo_total === Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual)) {
                  self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Cancela factura No.' + self.form.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen + '.';
                } else {
                  self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Abona factura No.' + self.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen + '. Saldo C$' + (Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual) - nuevo_total).toFixed(2) + '.';
                }
              } else {
                self.form.detalleCuentasxCobrar[keyx].monto = Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual);
                self.form.detalleCuentasxCobrar[keyx].monto_me = Number((self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual / self.form.t_cambio).toFixed(2));
                self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Cancela factura No.' + self.form.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen + '.';
                alertify.warning("Se ha agregado el monto maximo disponible para cancelar esta cuenta", 5);
              }
            }

            self.detalleForm.cuentax = null;
            self.detalleForm.monto_me = 0;
            self.detalleForm.monto = 0;
            self.detalleForm.descripcion_pago = '';
            this.$refs.cuenta.$el.focus();
          }
        } else {
          alertify.warning("El monto del abono debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una cuenta para realizar el abono", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleCuentasxCobrar.length >= 1) {
        this.form.detalleCuentasxCobrar.splice(index, 1);
      } else {
        this.form.detalleCuentasxCobrar = [];
      }
    },
    agregarMetodoPago: function agregarMetodoPago() {
      var self = this;

      if (self.detalleFormPago.via_pagox && self.detalleFormPago.moneda_x) {
        if (self.detalleFormPago.monto > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.detallePago) {
            self.form.detallePago.forEach(function (via_pago_x, key) {
              if (self.detalleFormPago.via_pagox.id_via_pago === via_pago_x.via_pagox.id_via_pago && self.detalleFormPago.moneda_x.id_moneda === via_pago_x.moneda_x.id_moneda) {
                i++;
                keyx = key;
              }
            });
          }

          var monto_me = 0,
              monto_mn = 0;

          if (self.detalleFormPago.moneda_x.id_moneda === 1) {
            monto_mn = Number(self.detalleFormPago.monto);
            monto_me = Number(self.detalleFormPago.monto / self.form.t_cambio);
          } else if (self.detalleFormPago.moneda_x.id_moneda === 3) {
            monto_me = Number(self.detalleFormPago.monto); //monto_mn = Number((self.detalleFormPago.monto * self.form.t_cambio));

            monto_mn = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_4__["default"].round(Number(monto_me * this.form.t_cambio), 2);
          }

          if (i === 0) {
            self.form.detallePago.push({
              via_pagox: self.detalleFormPago.via_pagox,
              moneda_x: self.detalleFormPago.moneda_x,
              monto: Number(monto_mn.toFixed(2)),
              monto_me: Number(monto_me.toFixed(2)),
              banco_x: self.detalleFormPago.banco_x,
              numero_minuta: self.detalleFormPago.numero_minuta,
              numero_nota_credito: self.detalleFormPago.numero_nota_credito,
              numero_cheque: self.detalleFormPago.numero_cheque,
              numero_transferencia: self.detalleFormPago.numero_transferencia,
              numero_recibo_pago: self.detalleFormPago.numero_recibo_pago
            });
            alertify.success("Método de pago agregado!", 5);
          } else {
            //let nuevo_monto_total = self.form.detallePago[keyx].monto + self.detalleFormPago.monto;
            self.form.detallePago[keyx].monto_me = Number(self.form.detallePago[keyx].monto_me + self.detalleFormPago.monto);
            self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto_me * self.form.t_cambio).toFixed(2));
            alertify.success("Pago agregado!", 5);
          }

          self.detalleFormPago.via_pagox = null;
          self.detalleFormPago.monto = 0;
          self.detalleFormPago.monto_me = 0;
          self.detalleFormPago.moneda_x = null;
          self.detalleFormPago.banco_x = null;
          self.detalleFormPago.numero_minuta = '';
          self.detalleFormPago.numero_nota_credito = '';
          self.detalleFormPago.numero_cheque = '';
          self.detalleFormPago.numero_transferencia = '';
          self.detalleFormPago.numero_recibo_pago = '';
        } else {
          alertify.warning("El monto debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un método y una moneda", 5);
      }
    },
    eliminarLineaPago: function eliminarLineaPago(item, index) {
      if (this.form.detallePago.length >= 1) {
        this.form.detallePago.splice(index, 1);
      } else {
        this.form.detallePago = [];
      }
    },
    registrar: function registrar() {
      var _this2 = this;

      var self = this;
      self.btnAction = "Registrando, espere....";

      if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {
        alertify.warning("El monto del recibo deber ser pagado en su totalidad", 5); //self.errorMessages.serie = Array('Error serie');

        self.btnAction = "Registrar Recibo";
      } else if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {} else {
        self.$swal.fire({
          title: 'Esta seguro de procesar el recibo?',
          text: "Detalles del recibo: ",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, registrar',
          cancelButtonText: 'Cancelar'
        }).then(function (result) {
          if (result.value) {
            _api_recibos_oficiales__WEBPACK_IMPORTED_MODULE_0__["default"].registrarROCTrabajador(self.form, function (data) {
              _this2.$swal.fire('Recibo Registrado!', 'El recibo fue registrado correctamente', 'success');

              _this2.$router.push({
                name: "recibos-oficiales-trabajador"
              });
            }, function (err) {
              self.errorMessages = err;
              alertify.warning("Por favor revise los datos faltantes", 5);
              self.btnAction = "Registrar Recibo";
            });
          } else {
            self.btnAction = "Registrar Recibo";
          }
        });
      }
    },
    seleccionarTipo: function seleccionarTipo() {
      var self = this;

      if (self.form.id_tipo === 1) {
        self.form.dias_credito = 0;
      } else {
        self.form.dias_credito = 0;
        self.form.dias_credito = self.plazo_maximo_credito;
      }
      /*calcular fecha*/

    }
  },
  mounted: function mounted() {
    // this.obtenerAfectacionesTodas();
    // this.obtenerTodasBodegasProductos();
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-7ceb146a] {\n  min-width: 120px;\n}\n.table a[data-v-7ceb146a] {\n  color: #2675dc;\n}\n.table .table-number[data-v-7ceb146a] {\n  width: 60px;\n}\n.table .action[data-v-7ceb146a] {\n  width: 180px;\n}\n.table .detail-link[data-v-7ceb146a] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-7ceb146a] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-7ceb146a]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-3e6e5ad4] {\n  min-width: 120px;\n}\n.table a[data-v-3e6e5ad4] {\n  color: #2675dc;\n}\n.table .table-number[data-v-3e6e5ad4] {\n  width: 60px;\n}\n.table .action[data-v-3e6e5ad4] {\n  width: 180px;\n}\n.table .detail-link[data-v-3e6e5ad4] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-3e6e5ad4] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-3e6e5ad4]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n.check-label2 {\n margin-top: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n.check-label2 {\n margin-top: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=template&id=7ceb146a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=template&id=7ceb146a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Administrar Recibos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Recibos")
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
                [_vm._v(" Módulo cuentas por cobrar")]
              ),
              _vm._v("> Recibos")
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
                  attrs: {
                    tag: "button",
                    to: { name: "registrar-recibo-oficial" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Recibo\n        ")
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
                  _vm.obtenerRecibos()
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
                  _c("option", { attrs: { value: "nombre_persona" } }, [
                    _vm._v("Nombre Persona")
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
                      _vm.obtenerRecibos()
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
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.recibos, function(recibo, key) {
                  return [
                    _c("tr", { key: recibo.id_recibo }, [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: "Mostrar Detalle",
                              expression: "'Mostrar Detalle'"
                            }
                          ],
                          staticClass: "link",
                          on: {
                            click: function($event) {
                              return _vm.mostrarPagos(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(recibo.no_documento))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(recibo.fecha_emision)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(recibo.recibo_cliente.nombre_comercial))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(Number(recibo.monto_total), 2)
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(recibo.concepto))]),
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
                                  name: "mostrar-recibo-oficial",
                                  params: { id_recibo: recibo.id_recibo }
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
                    ]),
                    _vm._v(" "),
                    recibo.mostrar
                      ? _c("tr", [
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
                                  _vm._l(recibo.recibo_detalles, function(
                                    recibosDetalle
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        key: recibosDetalle.id_recibo_producto
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              recibosDetalle.descripcion_pago
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                recibosDetalle.monto,
                                                2
                                              )
                                            )
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
                !_vm.recibos.length
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
            items: _vm.recibos,
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
        _c("th", [_vm._v("No. Recibo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cliente")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto C$")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
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
        _c("th", [_vm._v("Descripción Pago")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto C$")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=template&id=e3050986&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=template&id=e3050986& ***!
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
  return _c("div", { staticClass: "panel" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("span", { staticClass: "panel-title" }, [
        _vm._v("Recibo No. : " + _vm._s(_vm.form.no_documento))
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
                  "ventas/recibos/reporte/" + _vm.form.id_recibo
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
                  _vm._v("RECIBO OFICIAL DE CAJA")
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
                  _c("span", [_vm._v(_vm._s(_vm.form.nombre_persona))]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _vm.form.recibo_cliente
                    ? [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.form.recibo_cliente.nombre_comercial +
                                (_vm.form.recibo_cliente.tipo_persona === 1
                                  ? ", Numero Cédula: " +
                                    _vm.form.recibo_cliente.numero_cedula
                                  : " Numero RUC: " +
                                    _vm.form.recibo_cliente.numero_ruc)
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
                      _c("td", [_vm._v("Código recibo:")]),
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
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.recibo_detalles, function(item) {
                    return [
                      _c("tr", { key: item.id_recibo_producto }, [
                        _c("td", { staticClass: "width-4" }, [
                          _c("pre", [_vm._v(_vm._s(item.descripcion_pago))])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2 text-center" }, [
                          _vm._v(_vm._s(_vm._f("formatMoney")(item.monto, 2)))
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
                  _vm._m(3),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm._f("formatMoney")(_vm.gran_total, 2)))
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
    return _c("p", [_c("strong", [_vm._v("Recibimos de:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("A cuenta de:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Monto C$")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "align-right" }, [
      _c("strong", [_vm._v("Total Pagado C$")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=template&id=6773a2aa&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=template&id=6773a2aa& ***!
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
              _c("div", { staticClass: "col-sm-4" }, [
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
                          initial: _vm.form.recibo_cliente,
                          trim: 80,
                          params: { es_deudor: false },
                          url: _vm.clientesBusquedaURL
                        },
                        on: { input: _vm.seleccionarCliente }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.recibo_cliente, function(message) {
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Recibo de:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nombre_persona,
                        expression: "form.nombre_persona"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Nombre persona" },
                    domProps: { value: _vm.form.nombre_persona },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "nombre_persona",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.nombre_persona, function(message) {
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
              ])
            ]),
            _vm._v(" "),
            !_vm.form.recibo_cliente
              ? _c("div", [_vm._m(2), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Listado de Documentos pendientes")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("multiselect", {
                        ref: "cuenta",
                        attrs: {
                          "allow-empty": false,
                          options: _vm.cuentas,
                          searchable: true,
                          "show-labels": false,
                          "deselect-label": "No se puede eliminar este valor",
                          label: "text",
                          placeholder: "Selecciona una cuenta para pagar",
                          "track-by": "id_cuentaxcobrar"
                        },
                        on: {
                          input: function($event) {
                            return _vm.cargar_detalles_cuenta()
                          }
                        },
                        model: {
                          value: _vm.detalleForm.cuentax,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "cuentax", $$v)
                          },
                          expression: "detalleForm.cuentax"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cuentax, function(message) {
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Saldo Pendiente C$")
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "form-control" }, [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm._f("formatMoney")(
                            _vm.detalleForm.cuentax
                              ? _vm.detalleForm.cuentax.saldo_actual
                              : 0,
                            2
                          )
                        )
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Monto Abono C$")
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
                    ref: "abono",
                    staticClass: "form-control",
                    attrs: { type: "number", min: "0" },
                    domProps: { value: _vm.detalleForm.monto },
                    on: {
                      change: function($event) {
                        _vm.detalleForm.monto = _vm.detalleForm.cuentax
                          ? Math.max(
                              Math.min(
                                Number(
                                  !isNaN(_vm.detalleForm.monto)
                                    ? _vm.detalleForm.monto.toFixed(2)
                                    : 0
                                ),
                                Number(
                                  Number(
                                    _vm.detalleForm.cuentax.saldo_actual
                                  ).toFixed(2)
                                )
                              ),
                              1
                            )
                          : 0
                      },
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
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "check-label2" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detalleForm.aplicaIR,
                          expression: "detalleForm.aplicaIR"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.detalleForm.aplicaIR)
                          ? _vm._i(_vm.detalleForm.aplicaIR, null) > -1
                          : _vm.detalleForm.aplicaIR
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.detalleForm.aplicaIR,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIR",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIR",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.detalleForm, "aplicaIR", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" Aplica Retención IR")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("No. Documento Exoneración IR")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.doc_exoneracion_ir,
                        expression: "detalleForm.doc_exoneracion_ir"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.detalleForm.aplicaIR,
                      type: "text"
                    },
                    domProps: { value: _vm.detalleForm.doc_exoneracion_ir },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "doc_exoneracion_ir",
                          $event.target.value
                        )
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
                          value: _vm.detalleForm.aplicaIMI,
                          expression: "detalleForm.aplicaIMI"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.detalleForm.aplicaIMI)
                          ? _vm._i(_vm.detalleForm.aplicaIMI, null) > -1
                          : _vm.detalleForm.aplicaIMI
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.detalleForm.aplicaIMI,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIMI",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIMI",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.detalleForm, "aplicaIMI", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v("Aplica Retención IMI")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("No. Documento Exoneración IMI")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.doc_exoneracion_imi,
                        expression: "detalleForm.doc_exoneracion_imi"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.detalleForm.aplicaIMI,
                      type: "text"
                    },
                    domProps: { value: _vm.detalleForm.doc_exoneracion_imi },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "doc_exoneracion_imi",
                          $event.target.value
                        )
                      }
                    }
                  })
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
                    [_vm._v("Agregar Abono\n                            ")]
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
                  _vm._l(_vm.errorMessages.detalleCuentasxCobrar, function(
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
                        _vm._l(_vm.form.detalleCuentasxCobrar, function(
                          item,
                          index
                        ) {
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
                                      value: item.cuentax.no_documento_origen,
                                      expression:
                                        "item.cuentax.no_documento_origen"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.cuentax.no_documento_origen
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.cuentax,
                                        "no_documento_origen",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "20%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.descripcion_pago,
                                      expression: "item.descripcion_pago"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: { value: item.descripcion_pago },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "descripcion_pago",
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
                                      "detalleCuentasxCobrar." +
                                        index +
                                        ".descripcion_pago"
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
                                        value: item.monto_subtotal,
                                        expression: "item.monto_subtotal",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "", min: "0" },
                                    domProps: { value: item.monto_subtotal },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "monto_subtotal",
                                          _vm._n($event.target.value)
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  })
                                ]
                              ),
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
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          "No. Documento Exoneración:" +
                                          item.doc_exoneracion_ir,
                                        expression:
                                          "'No. Documento Exoneración:'+item.doc_exoneracion_ir"
                                      },
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.monto_retencion_ir,
                                        expression: "item.monto_retencion_ir",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value: item.monto_retencion_ir
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "monto_retencion_ir",
                                          _vm._n($event.target.value)
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  })
                                ]
                              ),
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
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          "No. Documento Exoneración:" +
                                          item.doc_exoneracion_imi,
                                        expression:
                                          "'No. Documento Exoneración:'+item.doc_exoneracion_imi"
                                      },
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.monto_retencion_imi,
                                        expression: "item.monto_retencion_imi",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value: item.monto_retencion_imi
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "monto_retencion_imi",
                                          _vm._n($event.target.value)
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  })
                                ]
                              ),
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
                                    attrs: { min: "0" },
                                    domProps: { value: item.monto },
                                    on: {
                                      change: function($event) {
                                        return _vm.establecerConcepto(item)
                                      },
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
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(
                                      _vm.errorMessages[
                                        "detalleCuentasxCobrar." +
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
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { width: "15%" },
                                  attrs: { colspan: "2" }
                                },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            _vm.calcularSaldoX(item),
                                            2
                                          )
                                        )
                                    )
                                  ])
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
                        _c("td", { attrs: { colspan: "5" } }),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(_vm.total_a_pagar, 2)
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(5),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(_vm.form.saldo_total, 2)
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "5" } }),
                        _vm._v(" "),
                        _vm._m(6),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.form.monto_total_me,
                                  2
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(7),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.form.saldo_total_me,
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
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-8" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Método Pago")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("multiselect", {
                              ref: "via_pago",
                              attrs: {
                                "allow-empty": false,
                                options: _vm.vias_pago,
                                searchable: true,
                                "show-labels": false,
                                "deselect-label":
                                  "No se puede eliminar este valor",
                                label: "descripcion",
                                placeholder: "Selecciona un método pago",
                                "track-by": "id_via_pago"
                              },
                              model: {
                                value: _vm.detalleFormPago.via_pagox,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.detalleFormPago,
                                    "via_pagox",
                                    $$v
                                  )
                                },
                                expression: "detalleFormPago.via_pagox"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.via_pagox, function(
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
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Moneda")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("multiselect", {
                              ref: "moneda",
                              attrs: {
                                "allow-empty": false,
                                options: _vm.monedas,
                                searchable: true,
                                "show-labels": false,
                                "deselect-label":
                                  "No se puede eliminar este valor",
                                label: "descripcion",
                                placeholder: "Selecciona una moneda",
                                "track-by": "id_moneda"
                              },
                              model: {
                                value: _vm.detalleFormPago.moneda_x,
                                callback: function($$v) {
                                  _vm.$set(_vm.detalleFormPago, "moneda_x", $$v)
                                },
                                expression: "detalleFormPago.moneda_x"
                              }
                            })
                          ],
                          1
                        ),
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
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.detalleFormPago.via_pagox
                      ? [
                          [1, 3, 5, 6].indexOf(
                            _vm.detalleFormPago.via_pagox.id_via_pago
                          ) >= 0
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v(" Banco")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("multiselect", {
                                        ref: "banco",
                                        attrs: {
                                          "allow-empty": false,
                                          options: _vm.bancos,
                                          searchable: true,
                                          "show-labels": false,
                                          "deselect-label":
                                            "No se puede eliminar este valor",
                                          label: "descripcion",
                                          placeholder:
                                            "Selecciona un método pago",
                                          "track-by": "id_banco"
                                        },
                                        model: {
                                          value: _vm.detalleFormPago.banco_x,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.detalleFormPago,
                                              "banco_x",
                                              $$v
                                            )
                                          },
                                          expression: "detalleFormPago.banco_x"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(_vm.errorMessages.moneda_x, function(
                                      message
                                    ) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }),
                                    0
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          [1].indexOf(
                            _vm.detalleFormPago.via_pagox.id_via_pago
                          ) >= 0
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Minuta")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago.numero_minuta,
                                        expression:
                                          "detalleFormPago.numero_minuta"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.detalleFormPago.numero_minuta
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_minuta",
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
                                      _vm.errorMessages.numero_minuta,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 3
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Voucher")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago.numero_minuta,
                                        expression:
                                          "detalleFormPago.numero_minuta"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.detalleFormPago.numero_minuta
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_minuta",
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
                                      _vm.errorMessages.numero_minuta,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 4
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Nota Crédito")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago
                                            .numero_nota_credito,
                                        expression:
                                          "detalleFormPago.numero_nota_credito"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value:
                                        _vm.detalleFormPago.numero_nota_credito
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_nota_credito",
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
                                      _vm.errorMessages.numero_nota_credito,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 5
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Cheque")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago.numero_cheque,
                                        expression:
                                          "detalleFormPago.numero_cheque"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.detalleFormPago.numero_cheque
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_cheque",
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
                                      _vm.errorMessages.numero_cheque,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 6
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Transferencia")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago
                                            .numero_transferencia,
                                        expression:
                                          "detalleFormPago.numero_transferencia"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value:
                                        _vm.detalleFormPago.numero_transferencia
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_transferencia",
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
                                      _vm.errorMessages.numero_transferencia,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 7
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Recibo Pago Anticipado")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago
                                            .numero_recibo_pago,
                                        expression:
                                          "detalleFormPago.numero_recibo_pago"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value:
                                        _vm.detalleFormPago.numero_recibo_pago
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_recibo_pago",
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
                                      _vm.errorMessages.numero_recibo_pago,
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
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(
                            "Monto " +
                              _vm._s(
                                _vm.detalleFormPago.moneda_x
                                  ? _vm.detalleFormPago.moneda_x.codigo
                                  : ""
                              )
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.detalleFormPago.monto,
                              expression: "detalleFormPago.monto",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { min: "0" },
                          domProps: { value: _vm.detalleFormPago.monto },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detalleFormPago,
                                "monto",
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
                            ref: "agregarpago",
                            staticClass: "btn btn-info btn-agregar",
                            on: { click: _vm.agregarMetodoPago }
                          },
                          [
                            _vm._v(
                              "Agregar Pago\n                                    "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("table", { staticClass: "table table-bordered" }, [
                        _vm._m(9),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.form.detallePago, function(item, index) {
                              return [
                                _c("tr", [
                                  _c("td", { staticStyle: { width: "2%" } }, [
                                    _c(
                                      "button",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.eliminarLineaPago(
                                              item,
                                              index
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-trash" })]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticStyle: { width: "5%" } }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.via_pagox.descripcion,
                                          expression:
                                            "item.via_pagox.descripcion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.via_pagox.descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.via_pagox,
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
                                          "detallePagos." +
                                            index +
                                            ".via_pagox.id_via_pago"
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
                                  _c("td", { staticStyle: { width: "5%" } }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.moneda_x.descripcion,
                                          expression:
                                            "item.moneda_x.descripcion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.moneda_x.descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.moneda_x,
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
                                          "detallePagos." +
                                            index +
                                            ".moneda_x.id_moneda"
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
                                  item.moneda_x.id_moneda === 1
                                    ? _c(
                                        "td",
                                        { staticStyle: { width: "5%" } },
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
                                            attrs: { type: "number", min: "0" },
                                            domProps: { value: item.monto },
                                            on: {
                                              change: function($event) {
                                                return _vm.calcularEquivalente(
                                                  item
                                                )
                                              },
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
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "ul",
                                            { staticClass: "error-messages" },
                                            _vm._l(
                                              _vm.errorMessages[
                                                "detallePagos." +
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
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.moneda_x.id_moneda === 3
                                    ? _c(
                                        "td",
                                        { staticStyle: { width: "5%" } },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.number",
                                                value: item.monto_me,
                                                expression: "item.monto_me",
                                                modifiers: { number: true }
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { type: "number", min: "0" },
                                            domProps: { value: item.monto_me },
                                            on: {
                                              change: function($event) {
                                                return _vm.calcularEquivalente(
                                                  item
                                                )
                                              },
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "monto_me",
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
                                                "detallePagos." +
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
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { width: "5%" } },
                                    [
                                      [1, 3].indexOf(
                                        item.via_pagox.id_via_pago
                                      ) >= 0
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.numero_minuta,
                                                  expression:
                                                    "item.numero_minuta"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_minuta
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_minuta",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_minuta"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 4
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    item.numero_nota_credito,
                                                  expression:
                                                    "item.numero_nota_credito"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_nota_credito
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_nota_credito",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_nota_credito"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 5
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.numero_cheque,
                                                  expression:
                                                    "item.numero_cheque"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_cheque
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_cheque",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_cheque"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 6
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    item.numero_transferencia,
                                                  expression:
                                                    "item.numero_transferencia"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_transferencia
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_transferencia",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_transferencia"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 7
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    item.numero_recibo_pago,
                                                  expression:
                                                    "item.numero_recibo_pago"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_recibo_pago
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_recibo_pago",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_recibo_pago"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e()
                                    ],
                                    2
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
                        _c("tfoot")
                      ])
                    ])
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _vm._m(11),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.form.monto_total,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.form.detallePago, function(item, index) {
                          return [
                            _c("tr", [
                              _c("td", { staticStyle: { width: "50%" } }, [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(
                                      "(-) Pagado con " +
                                        item.via_pagox.descripcion +
                                        " (Equivalente en Córdobas)"
                                    ) +
                                    "\n                                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "50%" } }, [
                                _c("p", [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(item.monto, 2)
                                        )
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        }),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(12),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(_vm.total_deuda, 2)
                                    )
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(13),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.form.pago_pendiente,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(14),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.form.pago_vuelto_mn,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ])
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("tfoot")
                  ])
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
                    attrs: { to: { name: "recibos-oficiales" }, tag: "button" }
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
                      disabled: _vm.btnAction !== "Registrar Recibo",
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Recibos")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar recibos oficiales de caja")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del Recibo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione un cliente para continuar.")
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
        _c("th", { staticStyle: { "min-width": "50px" } }, [
          _vm._v("Documento Origen")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "300px" } }, [
          _vm._v("Concepto")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Subtotal C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Retención IR C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Retención IMI C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Monto Abono C$")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticStyle: { "min-width": "150px" }, attrs: { colspan: "2" } },
          [_vm._v("Saldo Pendiente C$")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total a pagar C$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total saldo pendiente C$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total a pagar $")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total saldo pendiente $")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de pago y Resumen")])])
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
        _c("th", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Moneda")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th", [_vm._v("No Referencia")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [_c("th", { attrs: { colspan: "2" } }, [_vm._v("Resumen")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Total a Abonar en Córdobas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Monto Pendiente Córdobas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Monto Pendiente (Equivalente en Dólares)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Monto Vuelto")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                    to: { name: "registrar-recibo-oficial-trabajador" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Recibo\n        ")
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
                  _vm.obtenerRecibos()
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
                  _c("option", { attrs: { value: "nombre_persona" } }, [
                    _vm._v("Nombre Persona")
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
                      _vm.obtenerRecibos()
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
                _vm._l(_vm.recibos, function(recibo, key) {
                  return [
                    _c("tr", { key: recibo.id_recibo }, [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: "Mostrar Detalle",
                              expression: "'Mostrar Detalle'"
                            }
                          ],
                          staticClass: "link",
                          on: {
                            click: function($event) {
                              return _vm.mostrarPagos(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(recibo.nombre_persona))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(recibo.fecha_emision)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            recibo.recibo_trabajador
                              ? recibo.recibo_trabajador.primer_nombre +
                                  " " +
                                  recibo.recibo_trabajador.primer_apellido
                              : ""
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(Number(recibo.monto_total), 2)
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(recibo.concepto))]),
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
                                  name: "mostrar-recibo-oficial-trabajador",
                                  params: { id_recibo: recibo.id_recibo }
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
                    ]),
                    _vm._v(" "),
                    recibo.mostrar
                      ? _c("tr", [
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
                                _vm._m(2, true),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(recibo.recibo_detalles, function(
                                    recibosDetalle
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        key: recibosDetalle.id_recibo_producto
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              recibosDetalle.descripcion_pago
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                recibosDetalle.monto,
                                                2
                                              )
                                            )
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
                !_vm.recibos.length
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
            items: _vm.recibos,
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Administrar Recibos")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Listado de Recibos")
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
        _c("th", [_vm._v("No. Recibo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cliente")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto C$")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
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
        _c("th", [_vm._v("Descripción Pago")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto C$")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=template&id=0b616046&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=template&id=0b616046& ***!
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
  return _c("div", { staticClass: "panel" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("span", { staticClass: "panel-title" }, [
        _vm._v("Recibo No. : " + _vm._s(_vm.form.no_documento))
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
                  "ventas/recibos/reporte/" + _vm.form.id_recibo
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
                  _vm._v("RECIBO OFICIAL DE CAJA")
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
                  _c("span", [_vm._v(_vm._s(_vm.form.nombre_persona))]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _vm.form.recibo_cliente
                    ? [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.form.recibo_cliente.nombre_comercial +
                                (_vm.form.recibo_cliente.tipo_persona === 1
                                  ? ", Numero Cédula: " +
                                    _vm.form.recibo_cliente.numero_cedula
                                  : " Numero RUC: " +
                                    _vm.form.recibo_cliente.numero_ruc)
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
                      _c("td", [_vm._v("Código recibo:")]),
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
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.recibo_detalles, function(item) {
                    return [
                      _c("tr", { key: item.id_recibo_producto }, [
                        _c("td", { staticClass: "width-4" }, [
                          _c("pre", [_vm._v(_vm._s(item.descripcion_pago))])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2 text-center" }, [
                          _vm._v(_vm._s(_vm._f("formatMoney")(item.monto, 2)))
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
                  _vm._m(3),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm._f("formatMoney")(_vm.gran_total, 2)))
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
    return _c("p", [_c("strong", [_vm._v("Recibimos de:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("A cuenta de:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Monto C$")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "align-right" }, [
      _c("strong", [_vm._v("Total Pagado C$")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=template&id=3af26973&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=template&id=3af26973& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "col-sm-4" }, [
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
                          initial: _vm.form.recibo_trabajador,
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
                    _vm._l(_vm.errorMessages.recibo_trabajador, function(
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Recibo de:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nombre_persona,
                        expression: "form.nombre_persona"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Nombre persona" },
                    domProps: { value: _vm.form.nombre_persona },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "nombre_persona",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.nombre_persona, function(message) {
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
              ])
            ]),
            _vm._v(" "),
            !_vm.form.recibo_trabajador
              ? _c("div", [_vm._m(2), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Listado de Documentos pendientes")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("multiselect", {
                        ref: "cuenta",
                        attrs: {
                          "allow-empty": false,
                          options: _vm.cuentas,
                          searchable: true,
                          "show-labels": false,
                          "deselect-label": "No se puede eliminar este valor",
                          label: "text",
                          placeholder: "Selecciona una cuenta para pagar",
                          "track-by": "id_cuentaxcobrar"
                        },
                        on: {
                          input: function($event) {
                            return _vm.cargar_detalles_cuenta()
                          }
                        },
                        model: {
                          value: _vm.detalleForm.cuentax,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "cuentax", $$v)
                          },
                          expression: "detalleForm.cuentax"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cuentax, function(message) {
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Saldo Pendiente C$")
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "form-control" }, [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm._f("formatMoney")(
                            _vm.detalleForm.cuentax
                              ? _vm.detalleForm.cuentax.saldo_actual
                              : 0,
                            2
                          )
                        )
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Monto Abono C$")
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
                    ref: "abono",
                    staticClass: "form-control",
                    attrs: { type: "number" },
                    domProps: { value: _vm.detalleForm.monto },
                    on: {
                      change: function($event) {
                        _vm.detalleForm.monto = _vm.detalleForm.cuentax
                          ? Math.max(
                              Math.min(
                                Number(
                                  !isNaN(_vm.detalleForm.monto)
                                    ? _vm.detalleForm.monto.toFixed(2)
                                    : 0
                                ),
                                Number(
                                  Number(
                                    _vm.detalleForm.cuentax.saldo_actual
                                  ).toFixed(2)
                                )
                              ),
                              1
                            )
                          : 0
                      },
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
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "check-label2" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detalleForm.aplicaIR,
                          expression: "detalleForm.aplicaIR"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.detalleForm.aplicaIR)
                          ? _vm._i(_vm.detalleForm.aplicaIR, null) > -1
                          : _vm.detalleForm.aplicaIR
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.detalleForm.aplicaIR,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIR",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIR",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.detalleForm, "aplicaIR", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" Aplica Retención IR")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("No. Documento Exoneración IR")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.doc_exoneracion_ir,
                        expression: "detalleForm.doc_exoneracion_ir"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.detalleForm.aplicaIR,
                      type: "text"
                    },
                    domProps: { value: _vm.detalleForm.doc_exoneracion_ir },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "doc_exoneracion_ir",
                          $event.target.value
                        )
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
                          value: _vm.detalleForm.aplicaIMI,
                          expression: "detalleForm.aplicaIMI"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.detalleForm.aplicaIMI)
                          ? _vm._i(_vm.detalleForm.aplicaIMI, null) > -1
                          : _vm.detalleForm.aplicaIMI
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.detalleForm.aplicaIMI,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIMI",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.detalleForm,
                                  "aplicaIMI",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.detalleForm, "aplicaIMI", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v("Aplica Retención IMI")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("No. Documento Exoneración IMI")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.doc_exoneracion_imi,
                        expression: "detalleForm.doc_exoneracion_imi"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: !_vm.detalleForm.aplicaIMI,
                      type: "text"
                    },
                    domProps: { value: _vm.detalleForm.doc_exoneracion_imi },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "doc_exoneracion_imi",
                          $event.target.value
                        )
                      }
                    }
                  })
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
                    [_vm._v("Agregar Abono\n                            ")]
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
                  _vm._l(_vm.errorMessages.detalleCuentasxCobrar, function(
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
                        _vm._l(_vm.form.detalleCuentasxCobrar, function(
                          item,
                          index
                        ) {
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
                                      value: item.cuentax.no_documento_origen,
                                      expression:
                                        "item.cuentax.no_documento_origen"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.cuentax.no_documento_origen
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.cuentax,
                                        "no_documento_origen",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "20%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.descripcion_pago,
                                      expression: "item.descripcion_pago"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: { value: item.descripcion_pago },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "descripcion_pago",
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
                                      "detalleCuentasxCobrar." +
                                        index +
                                        ".descripcion_pago"
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
                                        value: item.monto_subtotal,
                                        expression: "item.monto_subtotal",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: { value: item.monto_subtotal },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "monto_subtotal",
                                          _vm._n($event.target.value)
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  })
                                ]
                              ),
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
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          "No. Documento Exoneración:" +
                                          item.doc_exoneracion_ir,
                                        expression:
                                          "'No. Documento Exoneración:'+item.doc_exoneracion_ir"
                                      },
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.monto_retencion_ir,
                                        expression: "item.monto_retencion_ir",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value: item.monto_retencion_ir
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "monto_retencion_ir",
                                          _vm._n($event.target.value)
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  })
                                ]
                              ),
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
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          "No. Documento Exoneración:" +
                                          item.doc_exoneracion_imi,
                                        expression:
                                          "'No. Documento Exoneración:'+item.doc_exoneracion_imi"
                                      },
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.monto_retencion_imi,
                                        expression: "item.monto_retencion_imi",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value: item.monto_retencion_imi
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "monto_retencion_imi",
                                          _vm._n($event.target.value)
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  })
                                ]
                              ),
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
                                    domProps: { value: item.monto },
                                    on: {
                                      change: function($event) {
                                        return _vm.establecerConcepto(item)
                                      },
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
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(
                                      _vm.errorMessages[
                                        "detalleCuentasxCobrar." +
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
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { width: "15%" },
                                  attrs: { colspan: "2" }
                                },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            _vm.calcularSaldoX(item),
                                            2
                                          )
                                        )
                                    )
                                  ])
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
                        _c("td", { attrs: { colspan: "5" } }),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(_vm.total_a_pagar, 2)
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(5),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(_vm.form.saldo_total, 2)
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "5" } }),
                        _vm._v(" "),
                        _vm._m(6),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.form.monto_total_me,
                                  2
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(7),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.form.saldo_total_me,
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
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-8" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Método Pago")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("multiselect", {
                              ref: "via_pago",
                              attrs: {
                                "allow-empty": false,
                                options: _vm.vias_pago,
                                searchable: true,
                                "show-labels": false,
                                "deselect-label":
                                  "No se puede eliminar este valor",
                                label: "descripcion",
                                placeholder: "Selecciona un método pago",
                                "track-by": "id_via_pago"
                              },
                              model: {
                                value: _vm.detalleFormPago.via_pagox,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.detalleFormPago,
                                    "via_pagox",
                                    $$v
                                  )
                                },
                                expression: "detalleFormPago.via_pagox"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.via_pagox, function(
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
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Moneda")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("multiselect", {
                              ref: "moneda",
                              attrs: {
                                "allow-empty": false,
                                options: _vm.monedas,
                                searchable: true,
                                "show-labels": false,
                                "deselect-label":
                                  "No se puede eliminar este valor",
                                label: "descripcion",
                                placeholder: "Selecciona una moneda",
                                "track-by": "id_moneda"
                              },
                              model: {
                                value: _vm.detalleFormPago.moneda_x,
                                callback: function($$v) {
                                  _vm.$set(_vm.detalleFormPago, "moneda_x", $$v)
                                },
                                expression: "detalleFormPago.moneda_x"
                              }
                            })
                          ],
                          1
                        ),
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
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.detalleFormPago.via_pagox
                      ? [
                          [1, 3, 5, 6].indexOf(
                            _vm.detalleFormPago.via_pagox.id_via_pago
                          ) >= 0
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v(" Banco")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("multiselect", {
                                        ref: "banco",
                                        attrs: {
                                          "allow-empty": false,
                                          options: _vm.bancos,
                                          searchable: true,
                                          "show-labels": false,
                                          "deselect-label":
                                            "No se puede eliminar este valor",
                                          label: "descripcion",
                                          placeholder:
                                            "Selecciona un método pago",
                                          "track-by": "id_banco"
                                        },
                                        model: {
                                          value: _vm.detalleFormPago.banco_x,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.detalleFormPago,
                                              "banco_x",
                                              $$v
                                            )
                                          },
                                          expression: "detalleFormPago.banco_x"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(_vm.errorMessages.moneda_x, function(
                                      message
                                    ) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }),
                                    0
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          [1].indexOf(
                            _vm.detalleFormPago.via_pagox.id_via_pago
                          ) >= 0
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Minuta")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago.numero_minuta,
                                        expression:
                                          "detalleFormPago.numero_minuta"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.detalleFormPago.numero_minuta
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_minuta",
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
                                      _vm.errorMessages.numero_minuta,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 3
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Voucher")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago.numero_minuta,
                                        expression:
                                          "detalleFormPago.numero_minuta"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.detalleFormPago.numero_minuta
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_minuta",
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
                                      _vm.errorMessages.numero_minuta,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 4
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Nota Crédito")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago
                                            .numero_nota_credito,
                                        expression:
                                          "detalleFormPago.numero_nota_credito"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value:
                                        _vm.detalleFormPago.numero_nota_credito
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_nota_credito",
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
                                      _vm.errorMessages.numero_nota_credito,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 5
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Cheque")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago.numero_cheque,
                                        expression:
                                          "detalleFormPago.numero_cheque"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.detalleFormPago.numero_cheque
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_cheque",
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
                                      _vm.errorMessages.numero_cheque,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 6
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Transferencia")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago
                                            .numero_transferencia,
                                        expression:
                                          "detalleFormPago.numero_transferencia"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value:
                                        _vm.detalleFormPago.numero_transferencia
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_transferencia",
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
                                      _vm.errorMessages.numero_transferencia,
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
                          _vm.detalleFormPago.via_pagox.id_via_pago === 7
                            ? _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Número Recibo Pago Anticipado")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.detalleFormPago
                                            .numero_recibo_pago,
                                        expression:
                                          "detalleFormPago.numero_recibo_pago"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value:
                                        _vm.detalleFormPago.numero_recibo_pago
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.detalleFormPago,
                                          "numero_recibo_pago",
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
                                      _vm.errorMessages.numero_recibo_pago,
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
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(
                            "Monto " +
                              _vm._s(
                                _vm.detalleFormPago.moneda_x
                                  ? _vm.detalleFormPago.moneda_x.codigo
                                  : ""
                              )
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.detalleFormPago.monto,
                              expression: "detalleFormPago.monto",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          domProps: { value: _vm.detalleFormPago.monto },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detalleFormPago,
                                "monto",
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
                            ref: "agregarpago",
                            staticClass: "btn btn-info btn-agregar",
                            on: { click: _vm.agregarMetodoPago }
                          },
                          [
                            _vm._v(
                              "Agregar Pago\n                                    "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("table", { staticClass: "table table-bordered" }, [
                        _vm._m(9),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.form.detallePago, function(item, index) {
                              return [
                                _c("tr", [
                                  _c("td", { staticStyle: { width: "2%" } }, [
                                    _c(
                                      "button",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.eliminarLineaPago(
                                              item,
                                              index
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-trash" })]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticStyle: { width: "5%" } }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.via_pagox.descripcion,
                                          expression:
                                            "item.via_pagox.descripcion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.via_pagox.descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.via_pagox,
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
                                          "detallePagos." +
                                            index +
                                            ".via_pagox.id_via_pago"
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
                                  _c("td", { staticStyle: { width: "5%" } }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.moneda_x.descripcion,
                                          expression:
                                            "item.moneda_x.descripcion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.moneda_x.descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.moneda_x,
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
                                          "detallePagos." +
                                            index +
                                            ".moneda_x.id_moneda"
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
                                  item.moneda_x.id_moneda === 1
                                    ? _c(
                                        "td",
                                        { staticStyle: { width: "5%" } },
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
                                            attrs: { type: "number" },
                                            domProps: { value: item.monto },
                                            on: {
                                              change: function($event) {
                                                return _vm.calcularEquivalente(
                                                  item
                                                )
                                              },
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
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "ul",
                                            { staticClass: "error-messages" },
                                            _vm._l(
                                              _vm.errorMessages[
                                                "detallePagos." +
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
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.moneda_x.id_moneda === 3
                                    ? _c(
                                        "td",
                                        { staticStyle: { width: "5%" } },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.number",
                                                value: item.monto_me,
                                                expression: "item.monto_me",
                                                modifiers: { number: true }
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { type: "number" },
                                            domProps: { value: item.monto_me },
                                            on: {
                                              change: function($event) {
                                                return _vm.calcularEquivalente(
                                                  item
                                                )
                                              },
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "monto_me",
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
                                                "detallePagos." +
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
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { width: "5%" } },
                                    [
                                      [1, 3].indexOf(
                                        item.via_pagox.id_via_pago
                                      ) >= 0
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.numero_minuta,
                                                  expression:
                                                    "item.numero_minuta"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_minuta
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_minuta",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_minuta"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 4
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    item.numero_nota_credito,
                                                  expression:
                                                    "item.numero_nota_credito"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_nota_credito
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_nota_credito",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_nota_credito"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 5
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.numero_cheque,
                                                  expression:
                                                    "item.numero_cheque"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_cheque
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_cheque",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_cheque"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 6
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    item.numero_transferencia,
                                                  expression:
                                                    "item.numero_transferencia"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_transferencia
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_transferencia",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_transferencia"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.via_pagox.id_via_pago === 7
                                        ? [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    item.numero_recibo_pago,
                                                  expression:
                                                    "item.numero_recibo_pago"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              domProps: {
                                                value: item.numero_recibo_pago
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "numero_recibo_pago",
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
                                                  "detalleCuentasxCobrar." +
                                                    index +
                                                    ".numero_recibo_pago"
                                                ],
                                                function(message) {
                                                  return _c("li", {
                                                    key: message,
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        message
                                                      )
                                                    }
                                                  })
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e()
                                    ],
                                    2
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
                        _c("tfoot")
                      ])
                    ])
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _vm._m(11),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.form.monto_total,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.form.detallePago, function(item, index) {
                          return [
                            _c("tr", [
                              _c("td", { staticStyle: { width: "50%" } }, [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(
                                      "(-) Pagado con " +
                                        item.via_pagox.descripcion +
                                        " (Equivalente en Córdobas)"
                                    ) +
                                    "\n                                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "50%" } }, [
                                _c("p", [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(item.monto, 2)
                                        )
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        }),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(12),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(_vm.total_deuda, 2)
                                    )
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(13),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.form.pago_pendiente,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(14),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "50%" } }, [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.form.pago_vuelto_mn,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ])
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("tfoot")
                  ])
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
                      to: { name: "recibos-oficiales-trabajador" },
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
                      disabled: _vm.btnAction !== "Registrar Recibo",
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Recibos")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar recibos oficiales de caja")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del Recibo")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione un empleado para continuar.")
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
        _c("th", { staticStyle: { "min-width": "50px" } }, [
          _vm._v("Documento Origen")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "300px" } }, [
          _vm._v("Concepto")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Subtotal C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Retención IR C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Retención IMI C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "100px" } }, [
          _vm._v("Monto Abono C$")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticStyle: { "min-width": "150px" }, attrs: { colspan: "2" } },
          [_vm._v("Saldo Pendiente C$")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total a pagar C$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total saldo pendiente C$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total a pagar $")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("strong", [_vm._v(" Total saldo pendiente $")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de pago y Resumen")])])
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
        _c("th", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Moneda")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th", [_vm._v("No Referencia")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [_c("th", { attrs: { colspan: "2" } }, [_vm._v("Resumen")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Total a Abonar en Córdobas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Monto Pendiente Córdobas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Monto Pendiente (Equivalente en Dólares)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "50%" } }, [
      _c("label", [_vm._v(" Monto Vuelto")])
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

/***/ "./resources/app/api/cuentas_por_cobrar.js":
/*!*************************************************!*\
  !*** ./resources/app/api/cuentas_por_cobrar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('cuentas-cobrar/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentaPorCobrar: function obtenerCuentaPorCobrar(data, cb, errorCb) {
    axios.post('cuentas-cobrar/obtener-cc', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentasCliente: function obtenerCuentasCliente(data, cb, errorCb) {
    axios.post('cuentas-cobrar/obtener-cuentas-cliente', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentasTrabajador: function obtenerCuentasTrabajador(data, cb, errorCb) {
    axios.post('cuentas-cobrar/obtener-cuentas-trabajador', data).then(function (response) {
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

/***/ "./resources/app/api/recibos_oficiales.js":
/*!************************************************!*\
  !*** ./resources/app/api/recibos_oficiales.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('cuentas-cobrar/roc/obtener', data).then(function (response) {
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
    axios.post('cuentas-cobrar/roc/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarROCTrabajador: function registrarROCTrabajador(data, cb, errorCb) {
    axios.post('cuentas-cobrar/roc/empleado/registrar', data).then(function (response) {
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
    axios.post('cuentas-cobrar/roc/nuevo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerRecibo: function obtenerRecibo(data, cb, errorCb) {
    axios.post('cuentas-cobrar/roc/obtener-recibo', data).then(function (response) {
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

/***/ "./resources/app/assets/custom-scripts/Round.js":
/*!******************************************************!*\
  !*** ./resources/app/assets/custom-scripts/Round.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  round: function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  },

  /**
   * Ajuste decimal de un número.
   *
   * @param	{String}	type	El tipo de ajuste.
   * @param	{Number}	value	El número.
   * @param	{Integer}	exp		El exponente(el logaritmo en base 10 del ajuste).
   * @returns	{Number}			El valor ajustado.
   */
  decimalAdjust: function decimalAdjust(type, value, exp) {
    // Si el exp es indefinido o cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }

    value = +value;
    exp = +exp; // Si el valor no es un número o el exp no es un entero...

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    } // Cambio


    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))); // Volver a cambiar

    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
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

/***/ "./resources/app/components/recibos_oficiales/Listado.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Listado.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_7ceb146a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=7ceb146a&scoped=true& */ "./resources/app/components/recibos_oficiales/Listado.vue?vue&type=template&id=7ceb146a&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/recibos_oficiales/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_7ceb146a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true& */ "./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_7ceb146a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_7ceb146a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ceb146a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/recibos_oficiales/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Listado.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Listado.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_7ceb146a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=style&index=0&id=7ceb146a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_7ceb146a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_7ceb146a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_7ceb146a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_7ceb146a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_7ceb146a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Listado.vue?vue&type=template&id=7ceb146a&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Listado.vue?vue&type=template&id=7ceb146a&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_7ceb146a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=7ceb146a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Listado.vue?vue&type=template&id=7ceb146a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_7ceb146a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_7ceb146a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Mostrar.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Mostrar.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mostrar_vue_vue_type_template_id_e3050986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=template&id=e3050986& */ "./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=template&id=e3050986&");
/* harmony import */ var _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=script&lang=js& */ "./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar_vue_vue_type_template_id_e3050986___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mostrar_vue_vue_type_template_id_e3050986___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/recibos_oficiales/Mostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=template&id=e3050986&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=template&id=e3050986& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_e3050986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=template&id=e3050986& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Mostrar.vue?vue&type=template&id=e3050986&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_e3050986___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_e3050986___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Registrar.vue":
/*!******************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Registrar.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_6773a2aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=6773a2aa& */ "./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=template&id=6773a2aa&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_6773a2aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_6773a2aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/recibos_oficiales/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=template&id=6773a2aa&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=template&id=6773a2aa& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6773a2aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=6773a2aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales/Registrar.vue?vue&type=template&id=6773a2aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6773a2aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6773a2aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Listado.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Listado.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_3e6e5ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true& */ "./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_3e6e5ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true& */ "./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_3e6e5ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_3e6e5ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e6e5ad4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/recibos_oficiales_empleados/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3e6e5ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=style&index=0&id=3e6e5ad4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3e6e5ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3e6e5ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3e6e5ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3e6e5ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3e6e5ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3e6e5ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Listado.vue?vue&type=template&id=3e6e5ad4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3e6e5ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3e6e5ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Mostrar.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Mostrar.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mostrar_vue_vue_type_template_id_0b616046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=template&id=0b616046& */ "./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=template&id=0b616046&");
/* harmony import */ var _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=script&lang=js& */ "./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar_vue_vue_type_template_id_0b616046___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mostrar_vue_vue_type_template_id_0b616046___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/recibos_oficiales_empleados/Mostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=template&id=0b616046&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=template&id=0b616046& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_0b616046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=template&id=0b616046& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Mostrar.vue?vue&type=template&id=0b616046&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_0b616046___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_0b616046___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Registrar.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Registrar.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_3af26973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=3af26973& */ "./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=template&id=3af26973&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_3af26973___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_3af26973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/recibos_oficiales_empleados/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=template&id=3af26973&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=template&id=3af26973& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_3af26973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=3af26973& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/recibos_oficiales_empleados/Registrar.vue?vue&type=template&id=3af26973&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_3af26973___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_3af26973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);