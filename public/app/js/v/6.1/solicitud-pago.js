(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitud-pago"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      format: "dd-MM-yyyy",
      form: {
        estado: 0,
        moneda_solicitud: [],
        documento_solicitud: [],
        usuario_registra: [],
        total: 0
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    obtenerSolicitudPago: function obtenerSolicitudPago() {
      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        self.form = data.solicitud;
      }, function (err) {
        console.log(err);
      });
    },
    aprobar: function aprobar() {
      var _this = this;

      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__["default"].aprobar({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        alertify.success("Solicitud de pago aprobada correctamente", 5);

        _this.obtenerSolicitudPago();
      }, function (err) {
        console.log(err);
      });
    },
    anular: function anular() {
      var _this2 = this;

      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__["default"].anular({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        alertify.warning("La Solicitud de pago ha sido anulada", 5);

        _this2.obtenerSolicitudPago();
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerSolicitudPago();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/documentos_contables */ "./resources/app/api/documentos_contables.js");
/* harmony import */ var _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/tasas-cambio */ "./resources/app/api/tasas-cambio.js");
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    //Datepicker,
    //	'typeahead':Typeahead
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      cuentasBusqueda: {},
      cuentasBusquedaURL: "/contabilidad/cuentas-contables/buscarf",
      contador: 0,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "d MMMM yyyy",
      monedas: [],
      centro_costo_deshabilitado: true,
      banco: [],
      cuentas_bancarias: [],
      tipos_documentos: [],
      solicitud_original: [],
      moneda_solicitada: '',
      moneda_aprobada: '',
      tasa_cambio: [],
      centros_costos_ingresos: [],
      bancos: [],
      monto_org: 0,
      monto_cord: 0,
      monto_ir_cord: 0,
      fechax: new Date(),
      form: {
        tipo_pago: 1,
        codigo_documento: 1,
        monto_neto: 0,
        monto_ir: 0,
        num_documento: "",
        fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
        concepto: "",
        valor: 0,
        detalleMovimientos: [],
        cuenta_bancaria: [],
        monto_letras: ''
      },
      detalleForm: {
        centro_costo_ingreso: "",
        debe: 0,
        haber: 0,
        concepto: "",
        cuentaContable: {}
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_debe: function total_debe() {
      return this.form.detalleMovimientos.reduce(function (carry, item) {
        return carry + Number(item.debe); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }, 0);
    },
    total_haber: function total_haber() {
      return this.form.detalleMovimientos.reduce(function (carry, item) {
        return carry + Number(item.haber); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }, 0);
    }
  },
  methods: {
    limpiarMonto: function limpiarMonto() {
      var self = this;
      self.form.monto_letras = '';
      self.form.monto_neto = 0;
    },
    calcular_monto: function calcular_monto() {
      var self = this;

      if (self.form.cuenta_bancaria) {
        var tasax = 1;
        var monto_maximo = self.solicitud_original.monto;

        if (self.form.cuenta_bancaria.id_moneda !== self.solicitud_original.id_moneda) {
          tasax = self.form.t_cambio;

          if (self.form.cuenta_bancaria.id_moneda === 3) {
            monto_maximo = Number((self.solicitud_original.monto / tasax).toFixed(2));
          } else {
            monto_maximo = Number((self.solicitud_original.monto * tasax).toFixed(2));
          }
        }

        self.form.monto_neto = Number(Math.max(Math.min(Number(self.form.monto_neto), monto_maximo), 1).toFixed(2));
        this.form.detalleMovimientos[0].debe = 0;
        this.form.detalleMovimientos[0].haber = 0;
        this.form.detalleMovimientos[0].debeORG = 0;
        this.form.detalleMovimientos[0].haberORG = 0;
        this.total_debe - this.total_haber > 0 ? self.form.monto_neto = this.total_debe - this.total_haber : self.form.monto_neto = 0;

        if (self.form.monto_neto > Number(monto_maximo)) {
          self.form.monto_neto = Number(monto_maximo);
        }

        this.form.detalleMovimientos[0].debe = 0;
        this.form.detalleMovimientos[0].haber = Number((self.form.monto_neto * tasax).toFixed(2));
        this.form.detalleMovimientos[0].debeORG = 0;
        this.form.detalleMovimientos[0].haberORG = Number(self.form.monto_neto.toFixed(2));

        if (self.form.cuenta_bancaria.moneda_cuenta_bancaria) {
          self.form.monto_letras = self.obtener_monto_letras(self.form.monto_neto, self.form.cuenta_bancaria.moneda_cuenta_bancaria).trim();
        } else {
          self.form.monto_letras = '';
        }

        return self.form.monto_neto;
      } else {
        self.form.monto_letras = '';
        return 0;
      }
    },
    moment: function (_moment) {
      function moment() {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function () {
      return moment();
    }),
    obtenerCuentasBancarias: function obtenerCuentasBancarias() {
      var self = this;
      if (self.banco.cuentas_bancarias_banco) self.cuentas_bancarias = self.banco.cuentas_bancarias_banco;
    },
    obtener_monto_letras: function obtener_monto_letras(montox, moneda) {
      var valor_letras_solicitud = '';

      if (montox > 0) {
        valor_letras_solicitud = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_5__["default"].numberasstring(montox, moneda.descripcion_singular.toUpperCase(), moneda.descripcion.toUpperCase(), true);
      } else {
        valor_letras_solicitud = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return valor_letras_solicitud;
    },
    monto_debe_cordobas: function monto_debe_cordobas(itemX) {
      var tasa_cambio = 1;

      if (itemX.monedaMov.id_moneda === 3) {
        tasa_cambio = this.form.t_cambio;
      }

      itemX.debe = Number((itemX.debeORG * tasa_cambio).toFixed(2));

      if (!isNaN(itemX.debe)) {
        return itemX.debe;
      } else return 0;
    },
    monto_haber_cordobas: function monto_haber_cordobas(itemX) {
      var tasa_cambio = 1;

      if (itemX.monedaMov.id_moneda === 3) {
        tasa_cambio = this.form.t_cambio;
      }

      itemX.haber = Number((itemX.haberORG * tasa_cambio).toFixed(2));

      if (!isNaN(itemX.haber)) {
        return itemX.haber;
      } else return 0;
    },
    seleccionarCuentaContable: function seleccionarCuentaContable(e) {
      var cuenta = e.target.value;
      var self = this;
      self.detalleForm.cuentaContable = cuenta;

      if ([4, 5, 6].indexOf(Number(cuenta.id_tipo_cuenta)) < 0) {
        self.detalleForm.centro_costo_ingreso = null;
        self.centro_costo_deshabilitado = true;
        self.$refs.concepto_mov.focus();
      } else {
        self.centro_costo_deshabilitado = false;
        self.$refs.centro_costo_ingreso.$refs.search.focus();
      }
    },
    calcularTotales: function calcularTotales() {
      var self = this; // console.log(self.solicitud_original.id_moneda);

      if (self.form.cuenta_bancaria.id_moneda === 3 && self.solicitud_original.id_moneda === 3) {
        self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
        self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
        self.form.monto_neto = Number(self.form.valor - self.form.monto_ir).toFixed(2);
      } else {
        self.monto_cord = self.monto_org;
        self.monto_ir_cord = self.form.monto_ir;
        self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
      }

      self.form.valor = Number(self.monto_cord); //self.monto_letras()
    },
    onDateSelect: function onDateSelect(date) {
      var self = this;
      self.form.fecha_emision = moment(date).format("YYYY-MM-DD");
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data; // console.log(self.solicitud_original.id_moneda);

          if (self.solicitud_original.id_moneda === 3) {
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord); //self.monto_letras()
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        if (err.fecha[0]) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerTC: function obtenerTC() {
      var self = this;
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data;

          if (self.solicitud_original.id_moneda === 3) {
            //console.log(self.form.monto_ir);

            /* console.log(self.tasa_cambio.tasa);*/
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord); //self.monto_letras()
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        console.log(err);

        if (err.fecha.length > 0) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        if (data.solicitud.estado === 1) {
          if (data.solicitud.documento_solicitud === null) {
            //console.log(data);
            self.solicitud_original = data.solicitud; //self.form.moneda = data.moneda_solicitud;

            self.form.concepto = data.solicitud.concepto;
            self.detalleForm.concepto = data.solicitud.concepto;
            self.form.valor = 0;
            self.form.id_solicitud_pago = _this.$route.params.id_solicitud_pago;
            self.monto_org = self.solicitud_original.monto;
            self.moneda_solicitada = self.solicitud_original.moneda_solicitud.descripcion;
          } else {
            alertify.warning("Esta solicitud ya tiene un documento contable registrado.", 5);

            _this.$router.push({
              name: "listado-solicitudes-pago"
            });
          }
        } else {
          alertify.warning("Esta solicitud ya fue revisada anteriormente", 5);

          _this.$router.push({
            name: "listado-solicitudes-pago"
          });
        } //self.form = data

      }, function (err) {
        console.log(err);
      });
    },
    validarCuentaContableBanco: function validarCuentaContableBanco() {
      var self = this;
      var valido = false;
      self.form.detalleMovimientos.forEach(function (cuenta, fila) {
        //console.log('cuenta.cuentaContable.id_cuenta_contable ');
        //console.log(cuenta.cuentaContable.id_cuenta_contable );
        //console.log('self.form.cuenta_bancaria.id_cuenta_contable');
        //console.log(self.form.cuenta_bancaria.id_cuenta_contable);
        if (cuenta.cuentaContable.id_cuenta_contable === self.form.cuenta_bancaria.id_cuenta_contable) {
          valido = true;
        }
      });
      return valido;
    },
    agregarDetalle: function agregarDetalle() {
      //  if(this.detalleForm.sucursal){
      //  this.errorMessages.sucursalx = ['correcto']
      if (this.detalleForm.cuentaContable && this.detalleForm.moneda_x) {
        if (Number(this.detalleForm.debe.toFixed(2)) > 0 || Number(this.detalleForm.haber.toFixed(2)) > 0) {
          if (Number(this.detalleForm.debe.toFixed(2)) > 0 && Number(this.detalleForm.haber.toFixed(2)) > 0) {
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
              debe: Number((this.detalleForm.debe * tasa_cambio).toFixed(2)),
              haber: Number((this.detalleForm.haber * tasa_cambio).toFixed(2)),
              debeORG: Number(this.detalleForm.debe.toFixed(2)),
              haberORG: Number(this.detalleForm.haber.toFixed(2)),
              concepto: this.detalleForm.concepto,
              tipo: tipox,
              editable: true
            }); //this.total_debe - this.total_haber

            this.detalleForm.cuentaContable = {}; // this.detalleForm.sucursal=''

            this.detalleForm.debe = 0;
            this.detalleForm.haber = 0;
            this.detalleForm.debeORG = 0;
            this.detalleForm.haberORG = 0; //this.detalleForm.concepto = '';

            this.detalleForm.centro_costo_ingreso = null;
            this.centro_costo_deshabilitado = true; //this.total_debe > this.total_haber ? this.form.valor = this.total_debe : this.form.valor = this.total_haber;

            this.calcular_monto();
          }
        } else {
          alertify.warning("El monto debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una cuenta contable", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleMovimientos.length >= 1) {
        this.form.detalleMovimientos.splice(index, 1);
      } else {
        this.form.detalleMovimientos = [];
      }

      this.calcular_monto();
    },
    obtenerNumeroDocumento: function obtenerNumeroDocumento() {
      var self = this;

      if (self.form.tipoDocumento) {
        self.form.num_documento = self.form.tipoDocumento.prefijo + '-' + self.form.codigo_documento;
      }
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
    revisarSolicitud: function revisarSolicitud() {
      var _this2 = this;

      var self = this;

      if (self.total_debe > 0 && self.total_haber > 0 && self.total_debe === self.total_haber) {
        //if(self.total_debe === self.form.valor){
        //  if(self.validarCuentaContableBanco()){
        self.btnAction = "Registrando, espere....";
        self.$swal.fire({
          title: 'Esta seguro de confirmar la contabilización de la solicitud de pago?',
          text: "Revise los detalles de la solicitud ",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, registrar',
          cancelButtonText: 'Cancelar'
        }).then(function (result) {
          if (result.value) {
            _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].contabilizar(self.form, function (data) {
              alertify.success("Documento registrado correctamente", 5);

              _this2.$router.push({
                name: "listado-solicitudes-pago"
              });
            }, function (err) {
              self.loading = false;
              self.errorMessages = err;
              alertify.warning("Por favor Revisar los datos faltantes", 5);
              self.btnAction = "Registrar";
            });
          } else {
            self.btnAction = "Registrar";
          }
        });
        /*}else{
            self.loading = false;
            alertify.warning("La cuenta contable de la cuenta bancaria seleccionada no esta presente en el detalle",5);
        }*/
      } else {
        alertify.warning("La sumatoria de las columnas debe y haber tienen que ser iguales.", 5);
        self.loading = false;
      }
    },
    nuevaContabilizacion: function nuevaContabilizacion() {
      var _this3 = this;

      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].nuevaContabilizacion({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        if (data.solicitud.estado === 2) {
          self.cuentas_bancarias = data.cuentas_bancarias;
          self.form.cuenta_bancaria = data.cuenta_bancaria_seleccionada;
          self.centros_costos_ingresos = data.centro_costos_ingresos;
          self.solicitud_original = data.solicitud;
          self.tipos_documentos = data.tipos_documentos;
          self.form.tipoDocumento = self.tipos_documentos[0];
          self.monedas = data.monedas;
          self.form.moneda = self.monedas[0];
          self.form.t_cambio = Number(data.t_cambio.tasa); //self.detalleForm.moneda_x = self.monedas[0];

          self.form.concepto = data.solicitud.concepto;
          self.detalleForm.concepto = data.solicitud.concepto;
          self.form.valor = 0;
          self.form.id_solicitud_pago = _this3.$route.params.id_solicitud_pago;
          self.monto_org = self.solicitud_original.monto;
          self.moneda_solicitada = self.solicitud_original.moneda_solicitud.descripcion;
          self.form.detalleMovimientos.push({
            cuentaContable: _this3.form.cuenta_bancaria.cuenta_contable_cuenta_bancaria,
            centro_costo_ingreso: null,
            centro_costo_ingreso_deshabilitada: true,
            monedaMov: _this3.form.cuenta_bancaria.moneda_cuenta_bancaria,
            debe: 0,
            haber: 0,
            debeORG: 0,
            haberORG: 0,
            concepto: self.form.concepto,
            tipo: 2,
            editable: false
          });
          self.loading = false;
        } else {
          alertify.warning("Esta solicitud ya fue modificada previamente", 5);

          _this3.$router.push({
            name: "listado-solicitudes-pago"
          });
        }
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    //this.obtenerTiposDocumentosTodos() ;
    //this.obtenercentros_costosTodas();
    //this.obtenerMonedas();
    //this.obtenerTodosBancos();
    //this.obtenerSolicitud();
    //this.obtenerTC();
    this.nuevaContabilizacion(); //this.$refs.banco.$refs.search.focus();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/documentos_contables */ "./resources/app/api/documentos_contables.js");
/* harmony import */ var _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/tasas-cambio */ "./resources/app/api/tasas-cambio.js");
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    //Datepicker,
    //	'typeahead':Typeahead
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      cuentasBusqueda: {},
      cuentasBusquedaURL: "/contabilidad/cuentas-contables/buscarf",
      contador: 0,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "d MMMM yyyy",
      monedas: [],
      centro_costo_deshabilitado: true,
      banco: [],
      cuentas_bancarias: [],
      tipos_documentos: [],
      solicitud_original: [],
      moneda_solicitada: '',
      moneda_aprobada: '',
      tasa_cambio: [],
      centros_costos_ingresos: [],
      bancos: [],
      monto_org: 0,
      monto_cord: 0,
      monto_ir_cord: 0,
      fechax: new Date(),
      form: {
        num_documento: "",
        documento_cuenta: [],
        solicitud_cuenta_bancaria: [],
        monto_letras: ''
      },
      detalleForm: {
        centro_costo_ingreso: "",
        debe: 0,
        haber: 0,
        concepto: "",
        cuentaContable: {}
      },
      btnAction: "Emitir",
      errorMessages: []
    };
  },
  computed: {
    total_debe: function total_debe() {
      if (this.form.documento_solicitud) {
        return this.form.documento_solicitud.movimientos_cuentas.reduce(function (carry, item) {
          return carry + Number(item.debe); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }, 0);
      } else {
        return 0;
      }
    },
    total_haber: function total_haber() {
      if (this.form.documento_solicitud) {
        return this.form.documento_solicitud.movimientos_cuentas.reduce(function (carry, item) {
          return carry + Number(item.haber); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }, 0);
      } else {
        return 0;
      }
    }
  },
  methods: {
    limpiarDatos: function limpiarDatos() {
      var self = this;

      if (self.form.tipo_pago === 1) {
        self.form.numero_comprobante_pago = self.form.solicitud_cuenta_bancaria.numeracion_chequera;
      } else {
        self.form.numero_comprobante_pago = '';
      }
    },
    limpiarMonto: function limpiarMonto() {
      var self = this;
      self.form.monto_letras = '';
      self.form.monto_neto = 0;
    },
    calcular_monto: function calcular_monto() {
      var self = this;

      if (self.form.cuenta_bancaria) {
        var tasax = 1;
        var monto_maximo = self.solicitud_original.monto;

        if (self.form.cuenta_bancaria.id_moneda !== self.solicitud_original.id_moneda) {
          tasax = self.form.t_cambio;

          if (self.form.cuenta_bancaria.id_moneda === 3) {
            monto_maximo = Number((self.solicitud_original.monto / tasax).toFixed(2));
          } else {
            monto_maximo = Number((self.solicitud_original.monto * tasax).toFixed(2));
          }
        }

        self.form.monto_neto = Number(Math.max(Math.min(Number(self.form.monto_neto), monto_maximo), 1).toFixed(2));

        if (self.form.cuenta_bancaria.moneda_cuenta_bancaria) {
          self.form.monto_letras = self.obtener_monto_letras(self.form.monto_neto, self.form.cuenta_bancaria.moneda_cuenta_bancaria);
        } else {
          self.form.monto_letras = '';
        }

        return self.form.monto_neto;
      } else {
        self.form.monto_letras = '';
        return 0;
      }
    },
    moment: function (_moment) {
      function moment() {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function () {
      return moment();
    }),
    obtenerCuentasBancarias: function obtenerCuentasBancarias() {
      var self = this;
      if (self.banco.cuentas_bancarias_banco) self.cuentas_bancarias = self.banco.cuentas_bancarias_banco;
    },
    obtener_monto_letras: function obtener_monto_letras(montox, moneda) {
      var valor_letras_solicitud = '';

      if (montox > 0) {
        valor_letras_solicitud = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_5__["default"].numberasstring(montox, moneda.descripcion_singular.toUpperCase(), moneda.descripcion.toUpperCase(), true);
      } else {
        valor_letras_solicitud = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return valor_letras_solicitud;
    },
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
    seleccionarCuentaContable: function seleccionarCuentaContable(e) {
      var cuenta = e.target.value;
      var self = this;
      self.detalleForm.cuentaContable = cuenta;

      if ([4, 5, 6].indexOf(Number(cuenta.id_tipo_cuenta)) < 0) {
        self.detalleForm.centro_costo_ingreso = null;
        self.centro_costo_deshabilitado = true;
        self.$refs.concepto_mov.focus();
      } else {
        self.centro_costo_deshabilitado = false;
        self.$refs.centro_costo_ingreso.$refs.search.focus();
      }
    },
    calcularTotales: function calcularTotales() {
      var self = this; // console.log(self.solicitud_original.id_moneda);

      if (self.form.cuenta_bancaria.id_moneda === 3 && self.solicitud_original.id_moneda === 3) {
        self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
        self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
        self.form.monto_neto = Number(self.form.valor - self.form.monto_ir).toFixed(2);
      } else {
        self.monto_cord = self.monto_org;
        self.monto_ir_cord = self.form.monto_ir;
        self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
      }

      self.form.valor = Number(self.monto_cord); //self.monto_letras()
    },
    onDateSelect: function onDateSelect(date) {
      var self = this;
      self.form.fecha_emision = moment(date).format("YYYY-MM-DD");
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data; // console.log(self.solicitud_original.id_moneda);

          if (self.solicitud_original.id_moneda === 3) {
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord); //self.monto_letras()
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        if (err.fecha[0]) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerTC: function obtenerTC() {
      var self = this;
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data;

          if (self.solicitud_original.id_moneda === 3) {
            //console.log(self.form.monto_ir);

            /* console.log(self.tasa_cambio.tasa);*/
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord); //self.monto_letras()
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        console.log(err);

        if (err.fecha.length > 0) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        if (data.solicitud.estado === 1) {
          if (data.solicitud.documento_solicitud === null) {
            //console.log(data);
            self.solicitud_original = data.solicitud; //self.form.moneda = data.moneda_solicitud;

            self.form.concepto = data.solicitud.concepto;
            self.detalleForm.concepto = data.solicitud.concepto;
            self.form.valor = 0;
            self.form.id_solicitud_pago = _this.$route.params.id_solicitud_pago;
            self.monto_org = self.solicitud_original.monto_solicitado;
            self.moneda_solicitada = self.solicitud_original.moneda_solicitud.descripcion;
            self.form.numero_comprobante_pago = '';

            if (self.form.tipo_pago === 1) {
              self.form.numero_comprobante_pago = self.form.solicitud_cuenta_bancaria.numeracion_chequera;
            }
          } else {
            alertify.warning("Esta solicitud ya tiene un documento contable registrado.", 5);

            _this.$router.push({
              name: "listado-solicitudes-pago"
            });
          }
        } else {
          alertify.warning("Esta solicitud ya fue revisada anteriormente", 5);

          _this.$router.push({
            name: "listado-solicitudes-pago"
          });
        } //self.form = data

      }, function (err) {
        console.log(err);
      });
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.documento_solicitud.movimientos_cuentas.length >= 1) {
        this.form.documento_solicitud.movimientos_cuentas.splice(index, 1);
      } else {
        this.form.documento_solicitud.movimientos_cuentas = [];
      }
    },
    obtenerNumeroDocumento: function obtenerNumeroDocumento() {
      var self = this;

      if (self.form.tipoDocumento) {
        self.form.num_documento = self.form.tipoDocumento.prefijo + '-' + self.form.codigo_documento;
      }
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
    emitirSolicitud: function emitirSolicitud() {
      var _this2 = this;

      var self = this;

      if (self.total_debe > 0 && self.total_haber > 0 && self.total_debe === self.total_haber) {
        //if(self.total_debe === self.form.valor){
        self.btnAction = "Registrando, espere....";
        _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].emitir(self.form, function (data) {
          alertify.success("Solicitud de pago emitida correctamente", 5);

          _this2.$router.push({
            name: "listado-solicitudes-pago"
          });
        }, function (err) {
          self.errorMessages = err;
          alertify.warning("Por favor Revisar los datos faltantes", 5);
          self.btnAction = "Emitir";
        });
      } else {
        alertify.warning("La sumatoria de las columnas debe y haber tienen que ser iguales.", 5);
      }
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
    obtenerSolicitudCompleta: function obtenerSolicitudCompleta() {
      var _this3 = this;

      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        // console.log(data);
        if (data.solicitud.estado === 3) {
          self.form = data.solicitud;
          self.form.numero_comprobante_pago = '';

          if (self.form.tipo_pago === 1) {
            self.form.numero_comprobante_pago = self.form.solicitud_cuenta_bancaria.numeracion_chequera.toString();
          }

          self.loading = false;
        } else {
          alertify.warning("Ésta solicitud no puede ser emitida", 5);

          _this3.$router.push({
            name: "listado-solicitudes-pago"
          });
        }
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    //this.obtenerTiposDocumentosTodos() ;
    //this.obtenercentros_costosTodas();
    //this.obtenerMonedas();
    //this.obtenerTodosBancos();
    //this.obtenerSolicitud();
    //this.obtenerTC();
    this.obtenerSolicitudCompleta(); //this.$refs.banco.$refs.search.focus();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_documentos_contables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/documentos_contables */ "./resources/app/api/documentos_contables.js");
/* harmony import */ var _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/tasas-cambio */ "./resources/app/api/tasas-cambio.js");
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    //Datepicker,
    //	'typeahead':Typeahead
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      cuentasBusqueda: {},
      cuentasBusquedaURL: "/contabilidad/cuentas-contables/buscarf",
      contador: 0,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "d MMMM yyyy",
      monedas: [],
      centro_costo_deshabilitado: true,
      banco: [],
      cuentas_bancarias: [],
      tipos_documentos: [],
      solicitud_original: [],
      moneda_solicitada: '',
      moneda_aprobada: '',
      tasa_cambio: [],
      centros_costos_ingresos: [],
      bancos: [],
      monto_org: 0,
      monto_cord: 0,
      monto_ir_cord: 0,
      fechax: new Date(),
      form: {
        num_documento: "",
        documento_cuenta: [],
        solicitud_cuenta_bancaria: [],
        monto_letras: '',
        nombre_persona_recibe: '',
        identificacion_persona_recibe: ''
      },
      detalleForm: {
        centro_costo_ingreso: "",
        debe: 0,
        haber: 0,
        concepto: "",
        cuentaContable: {}
      },
      btnAction: "Confirmar Entrega",
      errorMessages: []
    };
  },
  computed: {
    total_debe: function total_debe() {
      if (this.form.documento_solicitud) {
        return this.form.documento_solicitud.movimientos_cuentas.reduce(function (carry, item) {
          return carry + Number(item.debe); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }, 0);
      } else {
        return 0;
      }
    },
    total_haber: function total_haber() {
      if (this.form.documento_solicitud) {
        return this.form.documento_solicitud.movimientos_cuentas.reduce(function (carry, item) {
          return carry + Number(item.haber); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }, 0);
      } else {
        return 0;
      }
    }
  },
  methods: {
    limpiarDatos: function limpiarDatos() {
      var self = this;

      if (self.form.tipo_pago === 1) {
        self.form.numero_comprobante_pago = self.form.solicitud_cuenta_bancaria.numeracion_chequera;
      } else {
        self.form.numero_comprobante_pago = '';
      }
    },
    limpiarMonto: function limpiarMonto() {
      var self = this;
      self.form.monto_letras = '';
      self.form.monto_neto = 0;
    },
    calcular_monto: function calcular_monto() {
      var self = this;

      if (self.form.cuenta_bancaria) {
        var tasax = 1;
        var monto_maximo = self.solicitud_original.monto;

        if (self.form.cuenta_bancaria.id_moneda !== self.solicitud_original.id_moneda) {
          tasax = self.form.t_cambio;

          if (self.form.cuenta_bancaria.id_moneda === 3) {
            monto_maximo = Number((self.solicitud_original.monto / tasax).toFixed(2));
          } else {
            monto_maximo = Number((self.solicitud_original.monto * tasax).toFixed(2));
          }
        }

        self.form.monto_neto = Number(Math.max(Math.min(Number(self.form.monto_neto), monto_maximo), 1).toFixed(2));

        if (self.form.cuenta_bancaria.moneda_cuenta_bancaria) {
          self.form.monto_letras = self.obtener_monto_letras(self.form.monto_neto, self.form.cuenta_bancaria.moneda_cuenta_bancaria);
        } else {
          self.form.monto_letras = '';
        }

        return self.form.monto_neto;
      } else {
        self.form.monto_letras = '';
        return 0;
      }
    },
    moment: function (_moment) {
      function moment() {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function () {
      return moment();
    }),
    obtenerCuentasBancarias: function obtenerCuentasBancarias() {
      var self = this;
      if (self.banco.cuentas_bancarias_banco) self.cuentas_bancarias = self.banco.cuentas_bancarias_banco;
    },
    obtener_monto_letras: function obtener_monto_letras(montox, moneda) {
      var valor_letras_solicitud = '';

      if (montox > 0) {
        valor_letras_solicitud = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_5__["default"].numberasstring(montox, moneda.descripcion_singular.toUpperCase(), moneda.descripcion.toUpperCase(), true);
      } else {
        valor_letras_solicitud = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return valor_letras_solicitud;
    },
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
    seleccionarCuentaContable: function seleccionarCuentaContable(e) {
      var cuenta = e.target.value;
      var self = this;
      self.detalleForm.cuentaContable = cuenta;

      if ([4, 5, 6].indexOf(Number(cuenta.id_tipo_cuenta)) < 0) {
        self.detalleForm.centro_costo_ingreso = null;
        self.centro_costo_deshabilitado = true;
        self.$refs.concepto_mov.focus();
      } else {
        self.centro_costo_deshabilitado = false;
        self.$refs.centro_costo_ingreso.$refs.search.focus();
      }
    },
    calcularTotales: function calcularTotales() {
      var self = this; // console.log(self.solicitud_original.id_moneda);

      if (self.form.cuenta_bancaria.id_moneda === 3 && self.solicitud_original.id_moneda === 3) {
        self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
        self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
        self.form.monto_neto = Number(self.form.valor - self.form.monto_ir).toFixed(2);
      } else {
        self.monto_cord = self.monto_org;
        self.monto_ir_cord = self.form.monto_ir;
        self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
      }

      self.form.valor = Number(self.monto_cord); //self.monto_letras()
    },
    onDateSelect: function onDateSelect(date) {
      var self = this;
      self.form.fecha_emision = moment(date).format("YYYY-MM-DD");
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data; // console.log(self.solicitud_original.id_moneda);

          if (self.solicitud_original.id_moneda === 3) {
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord); //self.monto_letras()
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        if (err.fecha[0]) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerTC: function obtenerTC() {
      var self = this;
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data;

          if (self.solicitud_original.id_moneda === 3) {
            //console.log(self.form.monto_ir);

            /* console.log(self.tasa_cambio.tasa);*/
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord); //self.monto_letras()
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        console.log(err);

        if (err.fecha.length > 0) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        if (data.solicitud.estado === 1) {
          if (data.solicitud.documento_solicitud === null) {
            //console.log(data);
            self.solicitud_original = data.solicitud; //self.form.moneda = data.moneda_solicitud;

            self.form.concepto = data.solicitud.concepto;
            self.detalleForm.concepto = data.solicitud.concepto;
            self.form.valor = 0;
            self.form.id_solicitud_pago = _this.$route.params.id_solicitud_pago;
            self.monto_org = self.solicitud_original.monto_solicitado;
            self.moneda_solicitada = self.solicitud_original.moneda_solicitud.descripcion;
            self.form.numero_comprobante_pago = '';

            if (self.form.tipo_pago === 1) {
              self.form.numero_comprobante_pago = self.form.solicitud_cuenta_bancaria.numeracion_chequera;
            }
          } else {
            alertify.warning("Esta solicitud ya tiene un documento contable registrado.", 5);

            _this.$router.push({
              name: "listado-solicitudes-pago"
            });
          }
        } else {
          alertify.warning("Esta solicitud ya fue revisada anteriormente", 5);

          _this.$router.push({
            name: "listado-solicitudes-pago"
          });
        } //self.form = data

      }, function (err) {
        console.log(err);
      });
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.documento_solicitud.movimientos_cuentas.length >= 1) {
        this.form.documento_solicitud.movimientos_cuentas.splice(index, 1);
      } else {
        this.form.documento_solicitud.movimientos_cuentas = [];
      }
    },
    obtenerNumeroDocumento: function obtenerNumeroDocumento() {
      var self = this;

      if (self.form.tipoDocumento) {
        self.form.num_documento = self.form.tipoDocumento.prefijo + '-' + self.form.codigo_documento;
      }
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
    emitirSolicitud: function emitirSolicitud() {
      var _this2 = this;

      var self = this;

      if (self.total_debe > 0 && self.total_haber > 0 && self.total_debe === self.total_haber) {
        //if(self.total_debe === self.form.valor){
        self.btnAction = "Registrando, espere....";
        _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].entregar(self.form, function (data) {
          alertify.success("Se ha registrado la entrega de comprobante de pago", 5);

          _this2.$router.push({
            name: "listado-solicitudes-pago"
          });
        }, function (err) {
          self.errorMessages = err;
          alertify.warning("Por favor Revisar los datos faltantes", 5);
          self.btnAction = "Confirmar Entrega";
        });
      } else {
        alertify.warning("La sumatoria de las columnas debe y haber tienen que ser iguales.", 5);
      }
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
    obtenerSolicitudCompleta: function obtenerSolicitudCompleta() {
      var _this3 = this;

      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        if (data.solicitud.estado === 4) {
          self.form = data.solicitud;
          self.form.nombre_persona_recibe = '', self.form.identificacion_persona_recibe = '', self.loading = false;
        } else {
          alertify.warning("Ésta solicitud no puede ser entregada", 5);

          _this3.$router.push({
            name: "listado-solicitudes-pago"
          });
        }
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    //this.obtenerTiposDocumentosTodos() ;
    //this.obtenercentros_costosTodas();
    //this.obtenerMonedas();
    //this.obtenerTodosBancos();
    //this.obtenerSolicitud();
    //this.obtenerTC();
    this.obtenerSolicitudCompleta(); //this.$refs.banco.$refs.search.focus();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
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
          field: "beneficiario",
          value: ""
        }
      },
      solicitudes: [],
      total: 0
    };
  },
  methods: {
    descargarReporteSolicitud: function descargarReporteSolicitud(id_solicitud_pagox) {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        var extensionx = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('bancos/solicitud-pago/reporte', {
          id_solicitud_pago: id_solicitud_pagox,
          extension: extensionx
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          extensionx === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteSolicitudPago.' + extensionx;
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
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.solicitudes = data.rows;
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
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtener();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
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
          field: "beneficiario",
          value: ""
        },
        status: 1
      },
      solicitudes: [],
      cuentas_bancarias: [],
      total: 0
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitudesAprobacion(self.filter, function (data) {
        self.solicitudes = data.rows;
        self.cuentas_bancarias = data.cuentas_bancarias;
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
    cambiarEstadoSolicitudPago: function cambiarEstadoSolicitudPago(estado, id_solicitud_pago, id_cuenta_bancaria) {
      var txtAprobar = 'Está seguro de autorizar esta solicitud de pago?';
      var txtRechazar = 'Está seguro de rechazar la solicitud de pago?'; //var txtAnular ='Está seguro de revocar el permiso de consignación para este cliente?';

      var self = this;
      var validacion = true;
      var id_cuenta_bancariax = id_cuenta_bancaria;

      if (estado === 2 && id_cuenta_bancaria === null) {
        validacion = false;
        id_cuenta_bancariax = 0;
      }

      if (validacion) {
        self.$swal.fire({
          title: 'Confirmación de cambio del estado de solicitud de pago',
          text: estado === 2 ? txtAprobar : estado === 0 ? txtRechazar : txtRechazar,
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
            _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_0__["default"].cambiarEstadoSolicitudPago({
              id_solicitud_pago: id_solicitud_pago,
              id_cuenta_bancaria: id_cuenta_bancariax,
              estado: estado
            }, function (data) {
              alertify.warning("El estado de la solicitud de pago ha cambiado correctamente", 5);
              self.obtener();
            }, function (err) {
              self.loading = false;
              console.log(err);
            });
          } else {
            self.loading = false;
          }
        });
      } else {
        alertify.warning("Debe seleccionar una cuenta bancaria para aprobar la solicitud de pago", 10);
      }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default.a,
      nombre_empresa: '',
      direccion_empresa: '',
      format: "dd-MM-yyyy",
      form: {
        num_documento: "",
        documento_cuenta: [],
        solicitud_cuenta_bancaria: [],
        monto_letras: ''
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    descargarReporteSolicitud: function descargarReporteSolicitud() {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        var extensionx = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('bancos/solicitud-pago/reporte', {
          id_solicitud_pago: self.form.id_solicitud_pago,
          extension: extensionx
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          extensionx === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteSolicitudPago.' + extensionx;
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
    descargarReporteCheque: function descargarReporteCheque() {
      var _this2 = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        var extensionx = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('bancos/solicitud-pago/reporte-cheque', {
          id_solicitud_pago: self.form.id_solicitud_pago,
          extension: extensionx
        }, {
          responseType: 'blob'
        }).then(function (_ref2) {
          var data = _ref2.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          extensionx === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteCheque.' + extensionx;
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
    obtener_monto_letras: function obtener_monto_letras(montox, moneda) {
      var valor_letras_solicitud = '';

      if (montox > 0) {
        valor_letras_solicitud = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_2__["default"].numberasstring(montox, moneda.descripcion_singular.toUpperCase(), moneda.descripcion.toUpperCase(), true);
      } else {
        valor_letras_solicitud = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return valor_letras_solicitud;
    },
    downloadItem: function downloadItem(extension, id_importacionx) {
      var _this3 = this;

      var self = this;

      if (!this.descargando) {
        self.loading = true;
        var url = 'inventario/importaciones/reporte/' + extension + '/' + id_importacionx;
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref3) {
          var data = _ref3.data;
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
          link.download = 'FormatoImportacion.' + extension;
          link.click();
          _this3.descargando = false;
          self.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.descargando = false;
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerSolicitudCompleta: function obtenerSolicitudCompleta() {
      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        self.form = data.solicitud;
        self.nombre_empresa = data.nombre_empresa;
        self.direccion_empresa = data.direccion_empresa;
        self.form.numero_comprobante_pago = '';

        if (self.form.tipo_pago === 1) {
          self.form.numero_comprobante_pago = self.form.solicitud_cuenta_bancaria.numeracion_chequera.toString();
        }

        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    total_debe: function total_debe() {
      if (this.form.documento_solicitud) {
        return this.form.documento_solicitud.movimientos_cuentas.reduce(function (carry, item) {
          return carry + Number(item.debe); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }, 0);
      } else {
        return 0;
      }
    },
    total_haber: function total_haber() {
      if (this.form.documento_solicitud) {
        return this.form.documento_solicitud.movimientos_cuentas.reduce(function (carry, item) {
          return carry + Number(item.haber); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }, 0);
      } else {
        return 0;
      }
    },
    total_cantidad_recibida: function total_cantidad_recibida() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_recibida);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad_recibida * item.precio_unitario).toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad_recibida * item.precio_unitario).toFixed(2));
      }, 0);
    }
  },
  mounted: function mounted() {
    this.obtenerSolicitudCompleta();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
/* harmony import */ var _api_monedas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/monedas */ "./resources/app/api/monedas.js");
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_cuentas_por_pagar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/cuentas_por_pagar */ "./resources/app/api/cuentas_por_pagar.js");
/* harmony import */ var _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/custom-scripts/Round */ "./resources/app/assets/custom-scripts/Round.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_0___default.a,
      format: "d MMMM yyyy",
      proveedoresBusqueda: {},
      proveedoresBusquedaURL: "/proveedores/buscar",
      trabajadoresBusqueda: {},
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      monedas: [],
      tipos_solicitud: [],
      cuentas: [],
      fechax: new Date(),
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
      form: {
        tipo_beneficiario: 1,
        no_tiene_cuentasxpagar: true,
        proveedor: {},
        trabajador: {},
        beneficiario: '',
        concepto: '',
        lugar: '',
        moneda: '',
        t_cambio: 0,
        monto_solicitado: 0,
        fecha_solicitud: moment(new Date()).format("YYYY-MM-DD"),
        monto_letras: '',
        tipo_solicitud: [],
        detalleCuentasxPagar: []
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_a_pagar: function total_a_pagar() {
      var self = this;

      if (self.form.tipo_beneficiario === 1 && !self.form.no_tiene_cuentasxpagar) {
        self.form.monto_solicitado = Number(this.form.detalleCuentasxPagar.reduce(function (carry, item) {
          return carry + Number(item.monto);
        }, 0).toFixed(2));
        self.form.saldo_total = Number(this.form.detalleCuentasxPagar.reduce(function (carry, item) {
          return carry + Number(_assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(item.cuentax.saldo_actual_org), 2)) - item.monto;
        }, 0).toFixed(2));

        if (!isNaN(this.form.monto_solicitado)) {
          this.form.monto_solicitado_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].decimalAdjust('ceil', Number((this.form.monto_solicitado / this.form.t_cambio).toFixed(4)), -2);
          this.form.saldo_total_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].decimalAdjust('ceil', Number((this.form.saldo_total / this.form.t_cambio).toFixed(4)), -2);
          return this.form.monto_solicitado;
        } else return 0;
      }
    }
  },
  methods: {
    monto_letras: function monto_letras() {
      if (this.form.moneda && Number(this.form.monto_solicitado) > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_1__["default"].numberasstring(this.form.monto_solicitado, this.form.moneda.descripcion_singular.toUpperCase(), this.form.moneda.descripcion.toUpperCase(), true);
      } else {
        this.form.monto_letras = 'Seleccione un tipo de moneda';
      }

      return this.form.monto_letras;
    },
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajador = e.target.value;
      var self = this;
      self.form.trabajador = trabajador;
      self.form.beneficiario = trabajador.text;
      self.form.detalleCuentasxPagar = [];
      self.form.detallePago = [];
      self.detalleForm.cuentax = '';
    },
    limpiarDetallesEsp: function limpiarDetallesEsp() {
      var self = this;
      self.form.detalleCuentasxPagar = [];
      self.form.trabajador = {};
    },
    limpiarDetalles: function limpiarDetalles() {
      var self = this;
      self.form.detalleCuentasxPagar = [];
      self.form.trabajador = {}, self.form.proveedor = {};
    },
    limpiarDetallesGen: function limpiarDetallesGen() {
      var self = this;
      self.form.detalleCuentasxPagar = [];
      self.form.trabajador = {}, self.form.proveedor = {};
      self.form.tipo_beneficiario = '';
    },
    nueva: function nueva() {
      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_3__["default"].nueva({}, function (data) {
        //console.log(data);
        self.form.t_cambio = Number(data.t_cambio.tasa);
        self.monedas = data.monedas;
        self.tipos_solicitud = data.tipos_solicitud;
        self.form.tipo_solicitud = self.tipos_solicitud[0];
        self.form.moneda = self.monedas[0];
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    seleccionarBeneficiario: function seleccionarBeneficiario(e) {
      var beneficiario = e.target.value;
      var self = this;
      self.form.proveedor = beneficiario;
      self.form.beneficiario = beneficiario.paguese_a;
      self.loading = true;
      self.form.detalleCuentasxPagar = [];
      self.form.detallePago = [];
      self.detalleForm.cuentax = '';
      _api_cuentas_por_pagar__WEBPACK_IMPORTED_MODULE_5__["default"].obtenerCuentasProveedor({
        id_proveedor: self.form.proveedor.id_proveedor
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
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
    },
    calcularSaldoX: function calcularSaldoX(item) {
      return Number(_assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(item.cuentax.saldo_actual_org), 2) - Number(item.monto).toFixed(2));
    },
    cargar_detalles_cuenta: function cargar_detalles_cuenta() {
      var self = this;
      if (self.detalleForm.cuentax) //self.detalleForm.moneda_x = self.monedas[1];
        self.detalleForm.monto_me = 0;
      self.detalleForm.monto = Number(Number(self.detalleForm.cuentax.saldo_actual_org).toFixed(2));
    },
    establecerConcepto: function establecerConcepto(itemX) {
      itemX.monto = Math.max(Math.min(Number(!isNaN(itemX.monto) ? itemX.monto.toFixed(2) : 0), Number(Number(itemX.cuentax.saldo_actual_org).toFixed(2))), 1);

      if (itemX.monto === Number(Number(itemX.cuentax.saldo_actual_org).toFixed(2))) {
        itemX.descripcion_pago = 'Cancela factura No.' + itemX.cuentax.no_documento_origen + '.';
      } else {
        itemX.descripcion_pago = 'Abona factura No.' + itemX.cuentax.no_documento_origen + '. Saldo C$' + (Number(itemX.cuentax.saldo_actual_org) - itemX.monto).toFixed(2) + '.';
      }

      var monto_retencion_ir = 0,
          monto_retencion_imi = 0;

      if (itemX.aplicaIR) {
        monto_retencion_ir = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(itemX.monto) * 0.02, 2);
      } else {
        monto_retencion_ir = 0;
      }

      if (itemX.aplicaIMI) {
        monto_retencion_imi = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(itemX.monto) * 0.01, 2);
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
        itemX.monto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(itemX.monto_me * this.form.t_cambio), 2);
      }
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.cuentax) {
        if (self.detalleForm.monto > 0) {
          if (self.detalleForm.cuentax.id_moneda === self.form.moneda.id_moneda) {
            var validacion = 0;

            if (validacion === 0) {
              var i = 0;
              var keyx = 0;

              if (self.form.detalleCuentasxPagar) {
                self.form.detalleCuentasxPagar.forEach(function (cuentax, key) {
                  if (self.detalleForm.cuentax.id_cuentaxpagar === cuentax.cuentax.id_cuentaxpagar) {
                    i++;
                    keyx = key;
                  }
                });
              }

              if (i === 0) {
                if (Number(Number(self.detalleForm.monto).toFixed(2)) === Number(Number(self.detalleForm.cuentax.saldo_actual_org).toFixed(2))) {
                  self.detalleForm.descripcion_pago = 'Cancela factura No.' + self.detalleForm.cuentax.no_documento_origen + '.';
                } else {
                  self.detalleForm.descripcion_pago = 'Abona factura No.' + self.detalleForm.cuentax.no_documento_origen + '. Saldo C$' + (Number(self.detalleForm.cuentax.saldo_actual_org) - self.detalleForm.monto).toFixed(2) + '.';
                }

                var monto_retencion_ir = 0,
                    monto_retencion_imi = 0;

                if (self.detalleForm.aplicaIR) {
                  monto_retencion_ir = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(self.detalleForm.monto) * 0.02, 2);
                } else {
                  monto_retencion_ir = 0;
                }

                if (self.detalleForm.aplicaIMI) {
                  monto_retencion_imi = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(self.detalleForm.monto) * 0.01, 2);
                } else {
                  monto_retencion_imi = 0;
                }

                self.form.detalleCuentasxPagar.push({
                  cuentax: self.detalleForm.cuentax,
                  monto: Number(self.detalleForm.monto),
                  monto_me: Number((self.detalleForm.monto / self.form.t_cambio).toFixed(2)),
                  monto_subtotal: _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_6__["default"].round(Number(self.detalleForm.monto - monto_retencion_imi - monto_retencion_ir), 2),
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
                var nuevo_total = self.form.detalleCuentasxPagar[keyx].monto + self.detalleForm.monto;
                console.log(nuevo_total);

                if (nuevo_total <= Number(self.form.detalleCuentasxPagar[keyx].cuentax.saldo_actual_org)) {
                  self.form.detalleCuentasxPagar[keyx].monto = nuevo_total;
                  self.form.detalleCuentasxPagar[keyx].monto_me = Number((self.detalleForm.monto / self.form.t_cambio).toFixed(2));
                  alertify.success("Cuenta agregada!", 5);

                  if (nuevo_total === Number(self.form.detalleCuentasxPagar[keyx].cuentax.saldo_actual_org)) {
                    self.form.detalleCuentasxPagar[keyx].descripcion_pago = 'Cancela factura No.' + self.form.detalleCuentasxPagar[keyx].cuentax.no_documento_origen + '.';
                  } else {
                    self.form.detalleCuentasxPagar[keyx].descripcion_pago = 'Abona factura No.' + self.detalleCuentasxPagar[keyx].cuentax.no_documento_origen + '. Saldo C$' + (Number(self.form.detalleCuentasxPagar[keyx].cuentax.saldo_actual_org) - nuevo_total).toFixed(2) + '.';
                  }
                } else {
                  self.form.detalleCuentasxPagar[keyx].monto = Number(self.form.detalleCuentasxPagar[keyx].cuentax.saldo_actual_org);
                  self.form.detalleCuentasxPagar[keyx].monto_me = Number((self.form.detalleCuentasxPagar[keyx].cuentax.saldo_actual_org / self.form.t_cambio).toFixed(2));
                  self.form.detalleCuentasxPagar[keyx].descripcion_pago = 'Cancela factura No.' + self.form.detalleCuentasxPagar[keyx].cuentax.no_documento_origen + '.';
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
            alertify.warning("La moneda de la cuenta por pagar es distinta de la moneda de la solicitud", 5);
          }
        } else {
          alertify.warning("El monto del abono debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una cuenta para realizar el abono", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleCuentasxPagar.length >= 1) {
        this.form.detalleCuentasxPagar.splice(index, 1);
      } else {
        this.form.detalleCuentasxPagar = [];
      }
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.monto_letras();
      /*if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {
          alertify.warning("El monto de la solicitud deber ser pagado en su totalidad", 5);
          //self.errorMessages.serie = Array('Error serie');
          self.btnAction = "Registrar";
      } else if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {
       } else {*/

      self.$swal.fire({
        title: 'Esta seguro de procesar la solicitud de pago?',
        text: "Revise los detalles de la solicitud ",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, registrar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_3__["default"].registrar(self.form, function (data) {
            self.loading = false;
            alertify.success("Solicitud de pago registrada correctamente", 5);

            _this.$router.push({
              name: 'listado-solicitudes-pago'
            });
          }, function (err) {
            self.loading = false;
            self.errorMessages = err;
            self.btnAction = 'Registrar';
          });
        } else {
          self.btnAction = "Registrar";
        }
      }); //}
    }
  },
  mounted: function mounted() {
    // this.obtenerAfectacionesTodas();
    // this.obtenerTodasBodegasProductos();
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_tipos_documentos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/tipos_documentos */ "./resources/app/api/tipos_documentos.js");
/* harmony import */ var _api_sucursales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sucursales */ "./resources/app/api/sucursales.js");
/* harmony import */ var _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/tasas-cambio */ "./resources/app/api/tasas-cambio.js");
/* harmony import */ var _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/solicitudes_pago */ "./resources/app/api/solicitudes_pago.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_monedas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/monedas */ "./resources/app/api/monedas.js");
/* harmony import */ var _api_bancos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/bancos */ "./resources/app/api/bancos.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //import Typeahead from '../layout/Typeahead'
//import Datepicker from "vuejs-datepicker";




/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
    //Datepicker,
    //	'typeahead':Typeahead
  },*/
  data: function data() {
    return {
      cuentasBusqueda: {},
      cuentasBusquedaURL: "/contabilidad/cuentas-contables/buscarf",
      contador: 0,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default.a,
      format: "d MMMM yyyy",
      monedas: [],
      banco: [],
      cuentas_bancarias: [],
      tipos_documentos: [],
      solicitud_original: [],
      moneda_solicitada: '',
      moneda_aprobada: '',
      tasa_cambio: [],
      sucursales: [],
      bancos: [],
      monto_org: 0,
      monto_cord: 0,
      monto_ir_cord: 0,
      fechax: new Date(),
      form: {
        monto_neto: 0,
        monto_ir: 0,
        num_documento: "",
        fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
        concepto: "",
        valor: 0,
        detalleMovimientos: [],
        cuenta_bancaria: []
      },
      detalleForm: {
        sucursal: "",
        debe: 0,
        haber: 0,
        concepto: "",
        cuentaContable: {}
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_debe: function total_debe() {
      return this.form.detalleMovimientos.reduce(function (carry, item) {
        return carry + Number(item.debe) * 1; //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }, 0);
    },
    total_haber: function total_haber() {
      return this.form.detalleMovimientos.reduce(function (carry, item) {
        return carry + Number(item.haber) * 1; //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }, 0);
    }
  },
  methods: {
    moment: function (_moment) {
      function moment() {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function () {
      return moment();
    }),
    obtenerCuentasBancarias: function obtenerCuentasBancarias() {
      var self = this;
      if (self.banco.cuentas_bancarias_banco) self.cuentas_bancarias = self.banco.cuentas_bancarias_banco;
    },
    seleccionarCuentaContable: function seleccionarCuentaContable(e) {
      var cuenta = e.target.value;
      var self = this;
      self.detalleForm.cuentaContable = cuenta;
      self.revisarConceptoMov();
    },

    /*monto_letras(){
        /*console.log(this.form.cuenta_bancaria.id_moneda);
        console.log(this.form.valor );
        console.log(this.form.monto_ir);*/
    //console.log(this.form.monto_neto);

    /* if(this.form.cuenta_bancaria.id_moneda && this.form.valor >0){
         this.form.monto_letras = numberasstring.numberasstring(this.form.monto_neto,this.form.cuenta_bancaria.moneda_cuenta_bancaria.descripcion_singular.toUpperCase(),this.form.cuenta_bancaria.moneda_cuenta_bancaria.descripcion.toUpperCase(),true);
     }else{
         this.form.monto_letras ='Seleccione un tipo de moneda';
     }
     return this.form.monto_letras;
    },*/
    calcularTotales: function calcularTotales() {
      var self = this; // console.log(self.solicitud_original.id_moneda);

      if (self.form.cuenta_bancaria.id_moneda === 3 && self.solicitud_original.id_moneda === 3) {
        self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
        self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
        self.form.monto_neto = Number(self.form.valor - self.form.monto_ir).toFixed(2);
      } else {
        self.monto_cord = self.monto_org;
        self.monto_ir_cord = self.form.monto_ir;
        self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
      }

      self.form.valor = Number(self.monto_cord);
      self.monto_letras();
    },
    onDateSelect: function onDateSelect(date) {
      var self = this;
      self.form.fecha_emision = moment(date).format("YYYY-MM-DD");
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data; // console.log(self.solicitud_original.id_moneda);

          if (self.solicitud_original.id_moneda === 3) {
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord);
          self.monto_letras();
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        if (err.fecha[0]) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerTC: function obtenerTC() {
      var self = this;
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTC({
        fecha: self.form.fecha_emision
      }, function (data) {
        if (data.tasa !== null) {
          self.tasa_cambio = data;

          if (self.solicitud_original.id_moneda === 3) {
            //console.log(self.form.monto_ir);

            /* console.log(self.tasa_cambio.tasa);*/
            self.monto_cord = Number(self.monto_org * self.tasa_cambio.tasa).toFixed(2);
            self.monto_ir_cord = Number(self.form.monto_ir * self.tasa_cambio.tasa).toFixed(2);
            self.form.monto_neto = Number(self.monto_cord - self.monto_ir_cord).toFixed(2);
          } else {
            self.monto_cord = Number(self.monto_org);
            self.monto_ir_cord = Number(self.form.monto_ir);
            self.form.monto_neto = Number(self.monto_org - self.form.monto_ir).toFixed(2);
          }

          self.form.valor = Number(self.monto_cord);
          self.monto_letras();
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
        }
      }, function (err) {
        console.log(err);

        if (err.fecha.length > 0) {
          alertify.warning(err.fecha[0], 5);
        }
      });
    },
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this;
      _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerSolicitudPago({
        id_solicitud_pago: this.$route.params.id_solicitud_pago
      }, function (data) {
        if (data.estado === 1) {
          if (data.documento_solicitud === null) {
            //console.log(data);
            self.solicitud_original = data.solicitud; //self.form.moneda = data.moneda_solicitud;

            self.form.concepto = data.solicitud.concepto;
            self.detalleForm.concepto = data.solicitud.concepto;
            self.form.valor = 0;
            self.form.id_solicitud_pago = _this.$route.params.id_solicitud_pago;
            self.monto_org = self.solicitud_original.monto_solicitado;
            self.moneda_solicitada = self.solicitud_original.moneda_solicitud.descripcion;
          } else {
            alertify.warning("Esta solicitud ya tiene un documento contable registrado.", 5);

            _this.$router.push({
              name: "listado-solicitudes-pago"
            });
          }
        } else {
          alertify.warning("Esta solicitud ya fue revisada anteriormente", 5);

          _this.$router.push({
            name: "listado-solicitudes-pago"
          });
        } //self.form = data

      }, function (err) {
        console.log(err);
      });
    },
    obtenerMonedas: function obtenerMonedas() {
      var self = this;
      _api_monedas__WEBPACK_IMPORTED_MODULE_5__["default"].cargarMonedas(function (data) {
        self.monedas = data;
        self.form.moneda = self.monedas[0];
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTiposDocumentosTodos: function obtenerTiposDocumentosTodos() {
      var self = this;
      _api_tipos_documentos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTodos(function (data) {
        self.tipos_documentos = data; //console.log();

        self.form.tipoDocumento = self.tipos_documentos[3];
        self.obtenerNumeroDocumento();
      }, function (err) {
        console.log(err);
      });
    },
    obtenerSucursalesTodas: function obtenerSucursalesTodas() {
      var self = this;
      _api_sucursales__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodos(function (data) {
        self.sucursales = data;
      }, function (err) {
        console.log(err);
      });
    },
    agregarDetalle: function agregarDetalle() {
      if (this.detalleForm.sucursal) {
        //  this.errorMessages.sucursalx = ['correcto']
        if (this.detalleForm.cuentaContable) {
          if (this.detalleForm.debe > 0 || this.detalleForm.haber > 0) {
            if (this.detalleForm.debe > 0 && this.detalleForm.haber > 0) {
              alertify.warning("No se puede agregar monto en ambos campos", 5);
            } else {
              this.form.detalleMovimientos.push({
                cuentaContable: this.detalleForm.cuentaContable,
                sucursal: this.detalleForm.sucursal,
                debe: this.detalleForm.debe * 1,
                haber: this.detalleForm.haber * 1,
                concepto: this.detalleForm.concepto
              });
              this.detalleForm.cuentaContable = {}; // this.detalleForm.sucursal=''

              this.detalleForm.debe = 0;
              this.detalleForm.haber = 0; // this.detalleForm.concepto='';
            }
          } else {
            alertify.warning("El monto debe ser mayor que cero", 5);
          }
        } else {
          alertify.warning("Debe seleccionar una cuenta contable", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una sucursal", 5);
      }
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

      if (self.form.tipoDocumento) {
        self.form.num_documento = self.form.tipoDocumento.prefijo + '-' + self.form.tipoDocumento.secuencia;
      }
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
    obtenerTodosBancos: function obtenerTodosBancos() {
      var self = this;
      _api_bancos__WEBPACK_IMPORTED_MODULE_6__["default"].obtenerTodosBancos(function (data) {
        self.bancos = data;
      }, function (err) {
        console.log(err);
      });
    },
    sucursalEvento: function sucursalEvento() {
      var self = this;

      if (self.contador > 0) {
        self.$refs.cuenta_contable.open();
      } //console.log(self.$refs.cuenta_contable);

    },
    eventoAgregar: function eventoAgregar() {
      var self = this;

      if (self.detalleForm.sucursal !== '') {
        self.$refs.cuenta_contable.open();
      } else {
        self.$refs.sucursal.$refs.search.focus();
      } //console.log(self.$refs.cuenta_contable);

    },
    revisarSolicitud: function revisarSolicitud() {
      var _this2 = this;

      var self = this;

      if (self.total_debe > 0 && self.total_haber > 0 && self.total_debe === self.total_haber) {
        if (self.total_debe === self.form.valor) {
          self.btnAction = "Registrando, espere....";
          _api_solicitudes_pago__WEBPACK_IMPORTED_MODULE_3__["default"].revisar(self.form, function (data) {
            alertify.success("Documento registrado correctamente", 5);

            _this2.$router.push({
              name: "listado-solicitudes-pago"
            });
          }, function (err) {
            self.errorMessages = err;
            alertify.warning("Por favor Revisar los datos faltantes", 5);
            self.btnAction = "Registrar";
          });
        } else {
          alertify.warning("La sumatoria de las columnas debe y haber tienen que coincidir con el monto original de la solicitud de pago.", 5);
        }
      } else {
        alertify.warning("La sumatoria de las columnas debe y haber tienen que ser iguales.", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerTiposDocumentosTodos();
    this.obtenerSucursalesTodas();
    this.obtenerMonedas();
    this.obtenerTodosBancos();
    this.obtenerSolicitud();
    this.obtenerTC(); //this.$refs.banco.$refs.search.focus();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-32686c8b] {\n  min-width: 120px;\n}\n.table a[data-v-32686c8b] {\n  color: #2675dc;\n}\n.table .table-number[data-v-32686c8b] {\n  width: 60px;\n}\n.table .action[data-v-32686c8b] {\n  width: 180px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-434dd7ca] {\n  min-width: 120px;\n}\n.table a[data-v-434dd7ca] {\n  color: #2675dc;\n}\n.table .table-number[data-v-434dd7ca] {\n  width: 60px;\n}\n.table .action[data-v-434dd7ca] {\n  width: 180px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n.check-label2 {\n    margin-top: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSP.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=template&id=0ede7ea4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=template&id=0ede7ea4& ***!
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
      _c("span", { staticClass: "panel-title" }, [_vm._v("Solicitud de pago")]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: {
                to: { name: "listado-solicitudes-pago" },
                title: "Regresar"
              }
            },
            [_c("i", { staticClass: "fa fa-arrow-left" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-group" },
            [
              [0, 3, 4].indexOf(_vm.form.estado) < 0
                ? [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "confirm",
                            rawName: "v-confirm",
                            value: {
                              ok: _vm.aprobar,
                              message:
                                "Esta seguro de APROBAR la solicitud de pago? Esta accion no se podra deshacer."
                            },
                            expression:
                              "{ok: aprobar,message: 'Esta seguro de APROBAR la solicitud de pago? Esta accion no se podra deshacer.'}"
                          }
                        ],
                        staticClass: "btn btn-success"
                      },
                      [
                        _c("i", { staticClass: "fa fa-check" }, [
                          _vm._v("   Aprobar")
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
            "div",
            { staticClass: "btn-group" },
            [
              [0, 4].indexOf(_vm.form.estado) < 0
                ? [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "confirm",
                            rawName: "v-confirm",
                            value: {
                              ok: _vm.anular,
                              message:
                                "Esta seguro de ANULAR la solicitud de pago? Esta accion no se podra deshacer."
                            },
                            expression:
                              "{ok: anular,message: 'Esta seguro de ANULAR la solicitud de pago? Esta accion no se podra deshacer.'}"
                          }
                        ],
                        staticClass: "btn btn-danger"
                      },
                      [
                        _c("i", { staticClass: "fa fa-trash-o" }, [
                          _vm._v("   Anular")
                        ])
                      ]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c("div", { staticClass: "document" }, [
        _c("div", { staticClass: "document-heading" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col col-12" }, [
              _c("p", [
                _c("strong", [
                  _vm._v(
                    "Solicitud de Pago #" + _vm._s(_vm.form.id_solicitud_pago)
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col col-4" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.form.beneficiario))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col col-4" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.form.concepto))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col col-4" }, [
              _c("table", { staticClass: "document-summary" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v("Estado actual")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.form.estado === 0
                        ? _c("div", [
                            _c(
                              "span",
                              {
                                staticClass: "badge badge-danger",
                                staticStyle: { "font-size": "100%" }
                              },
                              [_vm._v("Anulada")]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.estado === 1
                        ? _c("div", [
                            _c(
                              "span",
                              {
                                staticClass: "badge badge-info",
                                staticStyle: { "font-size": "100%" }
                              },
                              [_vm._v("Esperando revisión")]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.estado === 2
                        ? _c("div", [
                            _c(
                              "span",
                              {
                                staticClass: "badge badge-warning",
                                staticStyle: { "font-size": "100%" }
                              },
                              [_vm._v("Esperando aprobación")]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.estado === 3
                        ? _c("div", [
                            _c(
                              "span",
                              {
                                staticClass: "badge badge-default",
                                staticStyle: { "font-size": "100%" }
                              },
                              [_vm._v("Aprobada")]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.estado === 4
                        ? _c("div", [
                            _c(
                              "span",
                              {
                                staticClass: "badge badge-success",
                                staticStyle: { "font-size": "100%" }
                              },
                              [_vm._v("Emitido")]
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Fecha:")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.form.fecha_solicitud))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Moneda:")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.form.moneda_solicitud.descripcion))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Total:")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("formatMoney")(_vm.form.monto, 2)))
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
                _vm.form.documento_solicitud
                  ? [
                      _vm._l(
                        _vm.form.documento_solicitud.movimientos_cuentas,
                        function(item) {
                          return [
                            _c("tr", { key: item.id_documento_cuenta }, [
                              _c("td", { staticClass: "width-4" }, [
                                _vm._v(
                                  "\n                      " +
                                    _vm._s(item.cta_contable) +
                                    "\n                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "width-4" }, [
                                _c("pre", [_vm._v(_vm._s(item.concepto))])
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "width-2 align-right" }, [
                                _vm._v(
                                  _vm._s(_vm._f("formatMoney")(item.debe, 2))
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "width-2 align-right" }, [
                                _vm._v(
                                  _vm._s(_vm._f("formatMoney")(item.haber, 2))
                                )
                              ])
                            ])
                          ]
                        }
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                !_vm.form.documento_solicitud
                  ? [
                      _c(
                        "td",
                        { staticClass: "align-right", attrs: { colspan: "4" } },
                        [
                          _vm._v(
                            "\n                      No hay datos registrados\n                  "
                          )
                        ]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "tfoot",
              [
                _vm.form.documento_solicitud
                  ? [
                      _c("tr", [
                        _c("td", { attrs: { colspan: "1" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-right" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(_vm._f("formatMoney")(_vm.form.monto, 2))
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-right" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(_vm._f("formatMoney")(_vm.form.monto, 2))
                            )
                          ])
                        ])
                      ])
                    ]
                  : _vm._e()
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "document-footer row" }, [
          _c(
            "div",
            { staticClass: "col col-3" },
            [
              _vm._m(3),
              _vm._v(" "),
              _vm.form.usuario_registra.trabajador
                ? [
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.form.usuario_registra.trabajador.primer_nombre +
                            " " +
                            _vm.form.usuario_registra.trabajador.primer_apellido
                        )
                      )
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.form.f_creacion))])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col col-3" },
            [
              _vm._m(4),
              _vm._v(" "),
              _vm.form.usuario_revisa
                ? [
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.form.usuario_revisa.trabajador.primer_nombre +
                            " " +
                            _vm.form.usuario_revisa.trabajador.primer_apellido
                        )
                      )
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.form.f_revision))])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col col-3" },
            [
              _vm._m(5),
              _vm._v(" "),
              _vm.form.usuario_aprueba
                ? [
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.form.usuario_aprueba.trabajador.primer_nombre +
                            " " +
                            _vm.form.usuario_aprueba.trabajador.primer_apellido
                        )
                      )
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.form.f_aprobacion))])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col col-3" },
            [
              _vm._m(6),
              _vm._v(" "),
              _vm.form.usuario_emite
                ? [
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.form.usuario_emite.trabajador.primer_nombre +
                            " " +
                            _vm.form.usuario_emite.trabajador.primer_apellido
                        )
                      )
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.form.f_emision))])
            ],
            2
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
    return _c("p", [_c("strong", [_vm._v("Beneficiario:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Concepto:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Cuenta Contable")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Haber")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Realizada por:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Revisada por por:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Aprobada por:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Emitida por:")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae& ***!
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "content-box" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "collapse", attrs: { id: "collapseExample" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "card card-body",
                    staticStyle: { "padding-left": "20px" }
                  },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Beneficiario: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(_vm.solicitud_original.beneficiario)
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(
                              "Monto " +
                                _vm._s(
                                  _vm.solicitud_original.moneda_solicitud
                                    ? _vm.solicitud_original.moneda_solicitud
                                        .codigo
                                    : "N/A"
                                ) +
                                ": "
                            )
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatMoney")(
                                    _vm.solicitud_original.monto,
                                    2
                                  )
                                )
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Monto en letras: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm.solicitud_original
                                    ? _vm.obtener_monto_letras(
                                        _vm.solicitud_original.monto,
                                        _vm.solicitud_original.moneda_solicitud
                                      )
                                    : "N/A"
                                )
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Concepto: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.solicitud_original.concepto))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .moment(
                                      _vm.solicitud_original.fecha_solicitud
                                    )
                                    .format("YYYY-MM-DD")
                                )
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Cuenta bancaria")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.cuentas_bancarias,
                        label: "numero_cuenta",
                        disabled: true
                      },
                      on: { change: _vm.limpiarMonto },
                      model: {
                        value: _vm.form.cuenta_bancaria,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "cuenta_bancaria", $$v)
                        },
                        expression: "form.cuenta_bancaria"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.cuenta_bancaria, function(
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
                  _c("label", [_vm._v("Tipo Pago")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.tipo_pago,
                          expression: "form.tipo_pago",
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
                        _vm._v("Cheque")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Transferencia")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.tipo_beneficiario, function(
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
                  _c("label", [
                    _vm._v(
                      " Monto Solicitado (" +
                        _vm._s(_vm.moneda_solicitada) +
                        ")"
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.solicitud_original.monto,
                        expression: "solicitud_original.monto",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "valor",
                    staticClass: "form-control",
                    attrs: { readonly: "" },
                    domProps: { value: _vm.solicitud_original.monto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.solicitud_original,
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
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [
                    _vm._v(" Monto Neto ("),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm.form.cuenta_bancaria.moneda_cuenta_bancaria
                            ? _vm.form.cuenta_bancaria.moneda_cuenta_bancaria
                                .descripcion
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
                        value: _vm.form.monto_neto,
                        expression: "form.monto_neto",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      placeholder: "Monto del cheque",
                      type: "number"
                    },
                    domProps: { value: _vm.form.monto_neto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_neto",
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
              _c("div", { staticClass: "col-sm-8" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Valor en letras")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.monto_letras,
                        expression: "form.monto_letras"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: _vm.form.monto, readonly: "" },
                    domProps: { value: _vm.form.monto_letras },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "monto_letras", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
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
                        return _vm.$refs.centro_costo_ingreso.$refs.search.focus(
                          $event
                        )
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
                    _c("typeahead", {
                      ref: "cuenta_contable",
                      staticStyle: { width: "100%" },
                      attrs: {
                        initial: _vm.detalleForm.cuentaContable,
                        trim: 80,
                        url: _vm.cuentasBusquedaURL
                      },
                      on: { input: _vm.seleccionarCuentaContable }
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
                    [_vm._v("Agregar Línea\n                        ")]
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
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      item.cuentaContable.nombre_cuenta_completo
                                    ) +
                                    "\n                                    "
                                ),
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
                                      options: _vm.monedas,
                                      disabled: true
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
                                    disabled: true,
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
                                    disabled: true,
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
                                    attrs: { disabled: !item.editable },
                                    on: {
                                      click: function($event) {
                                        return _vm.eliminarLinea(item, index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
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
                            _c("strong", { staticClass: "item-dark" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatMoney")(_vm.total_debe, 2))
                              )
                            ])
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
                            _c("strong", { staticClass: "item-dark" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatMoney")(_vm.total_haber, 2)
                                )
                              )
                            ])
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
                    attrs: {
                      to: { name: "listado-solicitudes-pago" },
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
                    ref: "registrar",
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.revisarSolicitud }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
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
        _vm._v("Contabilizar Solicitud de pago")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para contabilizar solicitud de pago")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "aria-controls": "collapseExample",
            "aria-expanded": "false",
            "data-target": "#collapseExample",
            "data-toggle": "collapse",
            type: "button"
          }
        },
        [
          _vm._v(
            "\n                   Ver Detalles de Solicitud de Pago\n                "
          )
        ]
      )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=template&id=1db105f6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=template&id=1db105f6& ***!
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "content-box" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "collapse", attrs: { id: "collapseExample" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "card card-body",
                    staticStyle: { "padding-left": "20px" }
                  },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Beneficiario: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.form.beneficiario))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(
                              "Monto " +
                                _vm._s(
                                  _vm.form.moneda_solicitud
                                    ? _vm.form.moneda_solicitud.codigo
                                    : "N/A"
                                ) +
                                ": "
                            )
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(_vm._f("formatMoney")(_vm.form.monto, 2))
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Monto en letras: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.monto
                                    ? _vm.obtener_monto_letras(
                                        _vm.form.monto,
                                        _vm.form.moneda_solicitud
                                      )
                                    : "N/A"
                                )
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Concepto: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [_vm._v(_vm._s(_vm.form.concepto))])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .moment(_vm.form.fecha_solicitud)
                                    .format("YYYY-MM-DD")
                                )
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("No. Documento")
                  ]),
                  _vm._v(" "),
                  _vm.form.documento_solicitud
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.documento_solicitud.num_documento,
                            expression: "form.documento_solicitud.num_documento"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { readonly: "", type: "text" },
                        domProps: {
                          value: _vm.form.documento_solicitud.num_documento
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.documento_solicitud,
                              "num_documento",
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
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha Emision")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.fecha_solicitud,
                        expression: "form.fecha_solicitud",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "" },
                    domProps: { value: _vm.form.fecha_solicitud },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "fecha_solicitud",
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
                  _c("label", [
                    _vm._v(
                      " Monto Solicitado (" +
                        _vm._s(
                          _vm.form.moneda_solicitud
                            ? _vm.form.moneda_solicitud.codigo
                            : "N/A"
                        ) +
                        ")"
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.monto,
                        expression: "form.monto",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "valor",
                    staticClass: "form-control",
                    attrs: { readonly: "" },
                    domProps: { value: _vm.form.monto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "monto", _vm._n($event.target.value))
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
                  _c("label", [_vm._v("Cuenta bancaria")]),
                  _vm._v(" "),
                  _vm.form.solicitud_cuenta_bancaria
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value:
                              _vm.form.solicitud_cuenta_bancaria.numero_cuenta,
                            expression:
                              "form.solicitud_cuenta_bancaria.numero_cuenta",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { readonly: "" },
                        domProps: {
                          value:
                            _vm.form.solicitud_cuenta_bancaria.numero_cuenta
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.solicitud_cuenta_bancaria,
                              "numero_cuenta",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cuenta_bancaria, function(
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
                  _c("label", [
                    _vm._v(" Monto Neto del Cheque ("),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm.form.moneda_aprobada_solicitud
                            ? _vm.form.moneda_aprobada_solicitud.descripcion
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
                        value: _vm.form.monto_neto,
                        expression: "form.monto_neto",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: true, placeholder: "Monto del cheque" },
                    domProps: { value: _vm.form.monto_neto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_neto",
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
              _c("div", { staticClass: "col-sm-5" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Valor en letras")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.monto_letras_neto,
                        expression: "form.monto_letras_neto"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: _vm.form.monto, readonly: "" },
                    domProps: { value: _vm.form.monto_letras_neto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_letras_neto",
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
                    attrs: { readonly: "", type: "text" },
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
                        return _vm.$refs.centro_costo_ingreso.$refs.search.focus(
                          $event
                        )
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
            _c("br"),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Tipo Pago")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.tipo_pago,
                          expression: "form.tipo_pago",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { disabled: "" },
                      on: {
                        change: [
                          function($event) {
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
                              "tipo_pago",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.limpiarDatos
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Cheque")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Transferencia")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.tipo_pago, function(message) {
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
                  _vm.form.tipo_pago === 2
                    ? _c("label", [_vm._v("Número Transferencia")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.tipo_pago === 1
                    ? _c("label", [_vm._v("Número Cheque")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.solicitud_cuenta_bancaria
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.numero_comprobante_pago,
                            expression: "form.numero_comprobante_pago"
                          }
                        ],
                        staticClass: "form-control",
                        domProps: { value: _vm.form.numero_comprobante_pago },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "numero_comprobante_pago",
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
                    _vm._l(_vm.errorMessages.numero_comprobante_pago, function(
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
              _vm.form.tipo_pago === 2
                ? _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Correo Electrónico Beneficiario")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.correo_electronico_beneficiario,
                            expression: "form.correo_electronico_beneficiario",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        domProps: {
                          value: _vm.form.correo_electronico_beneficiario
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "correo_electronico_beneficiario",
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
                          _vm.errorMessages.correo_electronico_beneficiario,
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
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.movimientos_cuentas, function(
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
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.form.documento_solicitud
                          ? [
                              _vm._l(
                                _vm.form.documento_solicitud
                                  .movimientos_cuentas,
                                function(item, index) {
                                  return [
                                    _c("tr", [
                                      _c(
                                        "td",
                                        { staticStyle: { width: "20%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                item.id_centro
                                                  ? item.centro_costo
                                                      .descripcion
                                                  : "N/A"
                                              ) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "25%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                item.cuenta_contable
                                                  .nombre_cuenta_completo
                                              ) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "21%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(item.concepto) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "20%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                item.id_moneda === 3
                                                  ? "Dólares"
                                                  : "Córdobas"
                                              ) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "16%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(item.debe_org) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "16%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(item.haber_org) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(item.debe) +
                                            "\n                                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(item.haber) +
                                            "\n                                "
                                        )
                                      ])
                                    ])
                                  ]
                                }
                              )
                            ]
                          : _vm._e()
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
                    attrs: {
                      to: { name: "listado-solicitudes-pago" },
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
                    ref: "registrar",
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Emitir" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.emitirSolicitud }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
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
        _vm._v("Emitir Solicitud de pago")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para emitir solicitud de pago")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "aria-controls": "collapseExample",
            "aria-expanded": "false",
            "data-target": "#collapseExample",
            "data-toggle": "collapse",
            type: "button"
          }
        },
        [
          _vm._v(
            "\n                   Ver Detalles de Solicitud de Pago\n                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_vm._v("Datos de comprobante de pago")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_vm._v("Datos del comprobante contable")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=template&id=4476f707&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=template&id=4476f707& ***!
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
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "content-box" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "collapse", attrs: { id: "collapseExample" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "card card-body",
                    staticStyle: { "padding-left": "20px" }
                  },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Beneficiario: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.form.beneficiario))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(
                              "Monto " +
                                _vm._s(
                                  _vm.form.moneda_solicitud
                                    ? _vm.form.moneda_solicitud.codigo
                                    : "N/A"
                                ) +
                                ": "
                            )
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(_vm._f("formatMoney")(_vm.form.monto, 2))
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Monto en letras: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.monto
                                    ? _vm.obtener_monto_letras(
                                        _vm.form.monto,
                                        _vm.form.moneda_solicitud
                                      )
                                    : "N/A"
                                )
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Concepto: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [_vm._v(_vm._s(_vm.form.concepto))])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Fecha: ")
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .moment(_vm.form.fecha_solicitud)
                                    .format("YYYY-MM-DD")
                                )
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("No. Documento")
                  ]),
                  _vm._v(" "),
                  _vm.form.documento_solicitud
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.documento_solicitud.num_documento,
                            expression: "form.documento_solicitud.num_documento"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { readonly: "", type: "text" },
                        domProps: {
                          value: _vm.form.documento_solicitud.num_documento
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.documento_solicitud,
                              "num_documento",
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
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha Emision")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.fecha_solicitud,
                        expression: "form.fecha_solicitud",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "" },
                    domProps: { value: _vm.form.fecha_solicitud },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "fecha_solicitud",
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
                  _c("label", [
                    _vm._v(
                      " Monto Solicitado (" +
                        _vm._s(
                          _vm.form.moneda_solicitud
                            ? _vm.form.moneda_solicitud.codigo
                            : "N/A"
                        ) +
                        ")"
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.monto,
                        expression: "form.monto",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "valor",
                    staticClass: "form-control",
                    attrs: { readonly: "" },
                    domProps: { value: _vm.form.monto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "monto", _vm._n($event.target.value))
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
                  _c("label", [_vm._v("Cuenta bancaria")]),
                  _vm._v(" "),
                  _vm.form.solicitud_cuenta_bancaria
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value:
                              _vm.form.solicitud_cuenta_bancaria.numero_cuenta,
                            expression:
                              "form.solicitud_cuenta_bancaria.numero_cuenta",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { readonly: "" },
                        domProps: {
                          value:
                            _vm.form.solicitud_cuenta_bancaria.numero_cuenta
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.solicitud_cuenta_bancaria,
                              "numero_cuenta",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cuenta_bancaria, function(
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
                  _c("label", [
                    _vm._v(" Monto Neto del Cheque ("),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm.form.moneda_aprobada_solicitud
                            ? _vm.form.moneda_aprobada_solicitud.descripcion
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
                        value: _vm.form.monto_neto,
                        expression: "form.monto_neto",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: true, placeholder: "Monto del cheque" },
                    domProps: { value: _vm.form.monto_neto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_neto",
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
              _c("div", { staticClass: "col-sm-5" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Valor en letras")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.monto_letras_neto,
                        expression: "form.monto_letras_neto"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: _vm.form.monto, readonly: "" },
                    domProps: { value: _vm.form.monto_letras_neto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_letras_neto",
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
                    attrs: { readonly: "", type: "text" },
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
                        return _vm.$refs.centro_costo_ingreso.$refs.search.focus(
                          $event
                        )
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
            _c("br"),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Tipo Pago")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.tipo_pago,
                          expression: "form.tipo_pago",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { disabled: "" },
                      on: {
                        change: [
                          function($event) {
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
                              "tipo_pago",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.limpiarDatos
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Cheque")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Transferencia")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.tipo_pago, function(message) {
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
                  _vm.form.tipo_pago === 2
                    ? _c("label", [_vm._v("Número Transferencia")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.tipo_pago === 1
                    ? _c("label", [_vm._v("Número Cheque")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.solicitud_cuenta_bancaria
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.numero_comprobante_pago,
                            expression: "form.numero_comprobante_pago"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { disabled: "" },
                        domProps: { value: _vm.form.numero_comprobante_pago },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "numero_comprobante_pago",
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
                    _vm._l(_vm.errorMessages.numero_comprobante_pago, function(
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
              _vm.form.tipo_pago === 2
                ? _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Correo Electrónico Beneficiario")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.correo_electronico_beneficiario,
                            expression: "form.correo_electronico_beneficiario",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { disabled: "" },
                        domProps: {
                          value: _vm.form.correo_electronico_beneficiario
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "correo_electronico_beneficiario",
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
                          _vm.errorMessages.correo_electronico_beneficiario,
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
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Nombre persona recibe")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nombre_persona_recibe,
                        expression: "form.nombre_persona_recibe"
                      }
                    ],
                    staticClass: "form-control",
                    domProps: { value: _vm.form.nombre_persona_recibe },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "nombre_persona_recibe",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.nombre_persona_recibe, function(
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
                  _c("label", [_vm._v("Número Identificación persona recibe")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.identificacion_persona_recibe,
                        expression: "form.identificacion_persona_recibe"
                      }
                    ],
                    staticClass: "form-control",
                    domProps: { value: _vm.form.identificacion_persona_recibe },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "identificacion_persona_recibe",
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
                      _vm.errorMessages.identificacion_persona_recibe,
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
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.movimientos_cuentas, function(
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
                    _vm._m(5),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.form.documento_solicitud
                          ? [
                              _vm._l(
                                _vm.form.documento_solicitud
                                  .movimientos_cuentas,
                                function(item, index) {
                                  return [
                                    _c("tr", [
                                      _c(
                                        "td",
                                        { staticStyle: { width: "20%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                item.id_centro
                                                  ? item.centro_costo
                                                      .descripcion
                                                  : "N/A"
                                              ) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "25%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                item.cuenta_contable
                                                  .nombre_cuenta_completo
                                              ) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "21%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(item.concepto) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "20%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                item.id_moneda === 3
                                                  ? "Dólares"
                                                  : "Córdobas"
                                              ) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "16%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(item.debe_org) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "16%" } },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(item.haber_org) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(item.debe) +
                                            "\n                                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(item.haber) +
                                            "\n                                "
                                        )
                                      ])
                                    ])
                                  ]
                                }
                              )
                            ]
                          : _vm._e()
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
                    attrs: {
                      to: { name: "listado-solicitudes-pago" },
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
                    ref: "registrar",
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled:
                        _vm.btnAction != "Confirmar Entrega" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.emitirSolicitud }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
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
        _vm._v("Entregar Comprobante de pago")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para confirmar entrega de comprobante de pago")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "aria-controls": "collapseExample",
            "aria-expanded": "false",
            "data-target": "#collapseExample",
            "data-toggle": "collapse",
            type: "button"
          }
        },
        [
          _vm._v(
            "\n                   Ver Detalles de Solicitud de Pago\n                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_vm._v("Datos de comprobante de pago")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_vm._v("Datos de la persona que recibe comprobante")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_vm._v("Datos del comprobante contable")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=template&id=32686c8b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=template&id=32686c8b&scoped=true& ***!
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
            _vm._v("Administrar Solicitudes de Pago")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Solicitudes de Pago")
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
                  attrs: { to: { name: "pagina-principal-caja" } }
                },
                [_vm._v(" Módulo caja y banco")]
              ),
              _vm._v("> Solicitudes de pago")
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
                    to: { name: "registrar-solicitud-pago" },
                    tag: "button"
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Solicitud de Pago\n                ")
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
                  _c("option", { attrs: { value: "beneficiario" } }, [
                    _vm._v("Beneficiario")
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
                _vm._l(_vm.solicitudes, function(solicitud, key) {
                  return [
                    _c("tr", { key: solicitud.id_solicitud_pago }, [
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            solicitud.tipo_solicitud
                              ? solicitud.tipo_solicitud.descripcion
                              : "N/D"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(solicitud.beneficiario))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(solicitud.concepto))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.formatDate(solicitud.fecha_solicitud))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(solicitud.moneda_solicitud.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("formatMoney")(solicitud.monto, 2))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        solicitud.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Anulado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 1
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-default" },
                                [_vm._v("Registrado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-warning" },
                                [_vm._v("Autorizado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 3
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-info" }, [
                                _vm._v("Contabilizado")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 4
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Emitido")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 5
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Pagado")]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          solicitud.estado === 2
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "contabilizar-solicitud-pago",
                                      params: {
                                        id_solicitud_pago:
                                          solicitud.id_solicitud_pago
                                      }
                                    },
                                    title: "Contabilizar Solicitud de pago"
                                  }
                                },
                                [_c("i", { staticClass: "icon-check" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          solicitud.estado === 3
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "emitir-solicitud-pago",
                                      params: {
                                        id_solicitud_pago:
                                          solicitud.id_solicitud_pago
                                      }
                                    },
                                    title: "Emitir Solicitud de pago"
                                  }
                                },
                                [_c("i", { staticClass: "icon-share-alt" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          solicitud.estado === 4
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "entregar-solicitud-pago",
                                      params: {
                                        id_solicitud_pago:
                                          solicitud.id_solicitud_pago
                                      }
                                    },
                                    title:
                                      "Confirmar entrega de comprobante de pago"
                                  }
                                },
                                [_c("i", { staticClass: "icon-share-alt" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value:
                                    "Mostrar Detalles de Solicitud de pago",
                                  expression:
                                    "'Mostrar Detalles de Solicitud de pago'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-solicitud-pago",
                                  params: {
                                    id_solicitud_pago:
                                      solicitud.id_solicitud_pago
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
                !_vm.solicitudes.length
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
        _c("th", [_vm._v("Tipo Solicitud")]),
        _vm._v(" "),
        _c("th", [_vm._v("Beneficiario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Solicitud")]),
        _vm._v(" "),
        _c("th", [_vm._v("Moneda Solicitada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto Solicitado")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true& ***!
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _c("div", { staticClass: "content-box-header" }, [
              _c("div", { staticClass: "box-title" }, [
                _vm._v("Autorización de Solicitudes de Pago")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "box-description" }, [
                _vm._v("Listado de Solicitudes de Pago")
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
                      attrs: { to: { name: "pagina-principal-caja" } }
                    },
                    [_vm._v(" Módulo caja y banco")]
                  ),
                  _vm._v("> Solicitudes de pago")
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
                      staticClass:
                        "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
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
                      _c("option", { attrs: { value: "beneficiario" } }, [
                        _vm._v("Beneficiario")
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
                        _vm.$set(
                          _vm.filter.search,
                          "value",
                          $event.target.value
                        )
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
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-striped table-bordered table-responsive"
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.solicitudes, function(solicitud, key) {
                          return [
                            _c("tr", { key: solicitud.id_solicitud_pago }, [
                              _c("td", [
                                _vm._v(_vm._s(solicitud.beneficiario))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(solicitud.concepto))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatDate")(
                                      solicitud.fecha_solicitud
                                    )
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(solicitud.moneda_solicitud.descripcion)
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(solicitud.monto))]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "30%" } }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: solicitud.id_cuenta_bancaria,
                                        expression:
                                          "solicitud.id_cuenta_bancaria"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: solicitud.estado !== 1 },
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
                                            return val
                                          })
                                        _vm.$set(
                                          solicitud,
                                          "id_cuenta_bancaria",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      { key: 0, domProps: { value: null } },
                                      [_vm._v(_vm._s("Ninguna") + " ")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.cuentas_bancarias, function(
                                      cuenta
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: cuenta.id_cuenta_bancaria,
                                          domProps: {
                                            value: cuenta.id_cuenta_bancaria
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(cuenta.numero_cuenta) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                )
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
                                                return _vm.cambiarEstadoSolicitudPago(
                                                  0,
                                                  solicitud.id_solicitud_pago,
                                                  solicitud.id_cuenta_bancaria
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "i",
                                              { staticClass: "fa fa-trash-o" },
                                              [_vm._v(" Rechazar Solicitud")]
                                            )
                                          ]
                                        )
                                      ]
                                    : [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-danger",
                                            on: {
                                              click: function($event) {
                                                return _vm.cambiarEstadoSolicitudPago(
                                                  0,
                                                  solicitud.id_solicitud_pago,
                                                  solicitud.id_cuenta_bancaria
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "i",
                                              { staticClass: "fa fa-trash-o" },
                                              [_vm._v(" Anular Solicitud")]
                                            )
                                          ]
                                        )
                                      ]
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
                                                return _vm.cambiarEstadoSolicitudPago(
                                                  2,
                                                  solicitud.id_solicitud_pago,
                                                  solicitud.id_cuenta_bancaria
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "i",
                                              { staticClass: "fa fa-trash-o" },
                                              [_vm._v(" Autorizar Solicitud")]
                                            )
                                          ]
                                        )
                                      ]
                                    : void 0
                                ],
                                2
                              )
                            ])
                          ]
                        }),
                        _vm._v(" "),
                        !_vm.solicitudes.length
                          ? _c("tr", [
                              _c(
                                "td",
                                {
                                  staticClass: "text-center",
                                  attrs: { colspan: "7" }
                                },
                                [_vm._v("Sin datos")]
                              )
                            ])
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ]
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
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Beneficiario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Solicitud")]),
        _vm._v(" "),
        _c("th", [_vm._v("Moneda Solicitada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto Solicitado")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "300px" } }, [
          _vm._v("Cuenta Bancaria")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center action", attrs: { colspan: "2" } },
          [_vm._v("Opciones")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("td", { staticClass: "text-center", attrs: { colspan: "7" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=template&id=01491c06&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=template&id=01491c06& ***!
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
  return _c(
    "div",
    { staticClass: "panel" },
    [
      _c("div", { staticClass: "panel-heading" }, [
        _c("span", { staticClass: "panel-title" }, [
          _vm._v("Solicitud de Pago No.: " + _vm._s(_vm.form.id_solicitud_pago))
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
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.descargarReporteSolicitud($event)
                }
              }
            },
            [_c("i", { staticClass: "fa fa-download" }), _vm._v(" Descargar")]
          ),
          _vm._v(" "),
          _vm.form.estado === 4
            ? _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.descargarReporteCheque($event)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-download" }),
                  _vm._v(" Descargar Cheque")
                ]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          { staticClass: "document" },
          [
            _c("div", { staticClass: "document-heading" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col col-12 text-center" }, [
                  _c("div", { staticClass: "company-name" }, [
                    _vm._v(_vm._s(_vm.nombre_empresa))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "company-address" }, [
                    _vm._v(_vm._s(_vm.direccion_empresa))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "company-address" }, [
                    _c("strong", [
                      _vm._v(
                        "Solicitud de Pago No. : " +
                          _vm._s(_vm.form.id_solicitud_pago)
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col col-6" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.form.beneficiario))]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("p", [
                    _c("strong", [
                      _vm._v(
                        "Monto " +
                          _vm._s(
                            _vm.form.moneda_solicitud
                              ? _vm.form.moneda_solicitud.codigo
                              : "N/A"
                          ) +
                          ": "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm._f("formatMoney")(_vm.form.monto, 2)) +
                        " (" +
                        _vm._s(
                          _vm.form.monto
                            ? _vm.obtener_monto_letras(
                                _vm.form.monto,
                                _vm.form.moneda_solicitud
                              )
                            : "N/A"
                        ) +
                        ")"
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.form.concepto))]),
                  _vm._v(" "),
                  _c("br")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col col-6" }, [
                  _c("table", { staticClass: "document-summary" }, [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Estado actual")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm.form.estado === 0
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-danger",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Anulado")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.estado === 1
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-primary",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Registrado")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.estado === 2
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-success",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Autorizado")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.estado === 3
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-success",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Contabilizado")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.estado === 4
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-success",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Emitido")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.estado === 5
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-success",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Pagado")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.estado === 6
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-success",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Archivado")]
                                )
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Número solicitud de pago::")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.form.id_solicitud_pago))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Fecha Solicitud:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatDate")(_vm.form.fecha_solicitud)
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
            _vm.form.estado >= 2
              ? [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col col-4" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.form.solicitud_cuenta_bancaria.numero_cuenta
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col col-4" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _vm.form.f_aprobacion
                        ? _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatDate")(_vm.form.f_aprobacion)
                              )
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col col-4" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _vm.form.tipo_pago
                        ? _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm.form.tipo_pago === 1
                                  ? "Cheque"
                                  : "Transferencia"
                              )
                            )
                          ])
                        : _c("span", [_vm._v(_vm._s("Pendiente de Definir"))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col col-4" }, [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.form.usuario_aprueba.trabajador
                              .nombre_completo +
                              "(" +
                              _vm.form.u_aprobacion +
                              ")"
                          )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("br")
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm.form.estado >= 3
              ? [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col col-12" }, [
                      _c("table", [
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [_vm._v("Número Documento:")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-primary",
                                  staticStyle: { "font-size": "100%" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.form.documento_solicitud.num_documento
                                    )
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Concepto:")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.form.documento_solicitud.concepto)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Fecha Contabilización:")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatDate")(
                                    _vm.form.documento_solicitud.fecha_emision
                                  )
                                )
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-bordered table-hover table-responsive"
                    },
                    [
                      _vm._m(8),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm.form.documento_solicitud
                            ? [
                                _vm._l(
                                  _vm.form.documento_solicitud
                                    .movimientos_cuentas,
                                  function(item, index) {
                                    return [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          { staticStyle: { width: "20%" } },
                                          [
                                            _vm._v(
                                              "\n                                  " +
                                                _vm._s(
                                                  item.id_centro
                                                    ? item.centro_costo
                                                        .descripcion
                                                    : "N/A"
                                                ) +
                                                "\n                              "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticStyle: { width: "25%" } },
                                          [
                                            _vm._v(
                                              "\n                                  " +
                                                _vm._s(
                                                  item.cuenta_contable
                                                    .nombre_cuenta_completo
                                                ) +
                                                "\n                              "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                  " +
                                              _vm._s(item.debe) +
                                              "\n                              "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                  " +
                                              _vm._s(item.haber) +
                                              "\n                              "
                                          )
                                        ])
                                      ])
                                    ]
                                  }
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("tfoot", [
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-right",
                              staticStyle: { width: "30%" },
                              attrs: { colspan: "2" }
                            },
                            [_vm._v("Totales C$")]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "item-footer",
                              staticStyle: { width: "20%" }
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
                              staticStyle: { width: "20%" }
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Beneficiario:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("En concepto de:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "document-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col col-12 text-center" }, [
          _c("div", { staticClass: "company-address" }, [
            _c("strong", [_vm._v("Detalle de Autorización de Pago")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Cuenta Bancaria Autorizada:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Fecha Autorización:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Método de Pago:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Usuario Autoriza:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "document-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col col-12 text-center" }, [
          _c("div", { staticClass: "company-address" }, [
            _c("strong", [_vm._v("Detalle de Contabilización")])
          ])
        ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=template&id=34f3de72&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=template&id=34f3de72& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo Solicitud")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.tipos_solicitud,
                        label: "descripcion"
                      },
                      on: { input: _vm.limpiarDetallesGen },
                      model: {
                        value: _vm.form.tipo_solicitud,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "tipo_solicitud", $$v)
                        },
                        expression: "form.tipo_solicitud"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.tipo_solicitud, function(
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
                  _c("label", [_vm._v("Tipo Beneficiario")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.tipo_beneficiario,
                          expression: "form.tipo_beneficiario",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      on: {
                        change: [
                          function($event) {
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
                              "tipo_beneficiario",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.limpiarDetalles
                        ]
                      }
                    },
                    [
                      _c(
                        "option",
                        {
                          attrs: {
                            disabled:
                              _vm.form.tipo_solicitud.id_tipo_solicitud === 3,
                            value: "1"
                          }
                        },
                        [_vm._v("Proveedor|Acreedor")]
                      ),
                      _vm._v(" "),
                      _c(
                        "option",
                        {
                          attrs: {
                            disabled:
                              _vm.form.tipo_solicitud.id_tipo_solicitud !== 3,
                            value: "2"
                          }
                        },
                        [_vm._v("Trabajador")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.tipo_beneficiario, function(
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
              _vm.form.tipo_beneficiario === 1
                ? _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Proveedor | Acreedor ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("typeahead", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              initial: _vm.form.proveedor,
                              trim: 80,
                              url: _vm.proveedoresBusquedaURL
                            },
                            on: { input: _vm.seleccionarBeneficiario }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.proveedor, function(message) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.form.tipo_beneficiario === 2
                ? _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Trabajador ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("typeahead", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              initial: _vm.form.trabajador,
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
                        _vm._l(_vm.errorMessages.proveedor, function(message) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Beneficiario")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.beneficiario,
                          expression: "form.beneficiario"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Dígite el beneficiario del pago" },
                      domProps: { value: _vm.form.beneficiario },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "beneficiario",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.beneficiario, function(message) {
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
                      _vm._v("Fecha Solicitud")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: { format: _vm.format, language: _vm.es },
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
                      _vm._l(_vm.errorMessages.fecha_solicitud, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Moneda")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.monedas, label: "descripcion" },
                      on: { input: _vm.limpiarDetalles },
                      model: {
                        value: _vm.form.moneda,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "moneda", $$v)
                        },
                        expression: "form.moneda"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.moneda, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(
                      " Monto " +
                        _vm._s(_vm.form.moneda ? _vm.form.moneda.codigo : "N/D")
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.monto_solicitado,
                        expression: "form.monto_solicitado",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled:
                        !_vm.form.no_tiene_cuentasxpagar &&
                        _vm.form.tipo_beneficiario !== 2,
                      placeholder: "Monto total de la solicitud",
                      type: "number",
                      min: "0"
                    },
                    domProps: { value: _vm.form.monto_solicitado },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_solicitado",
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
                    _vm._l(_vm.errorMessages.monto_solicitado, function(
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
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Concepto")]),
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
                    attrs: { placeholder: "Dígite el concepto" },
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
            !_vm.form.proveedor
              ? _c("div", [_vm._m(2), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm.form.tipo_beneficiario === 1
              ? [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "check-label2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.no_tiene_cuentasxpagar,
                            expression: "form.no_tiene_cuentasxpagar"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(
                            _vm.form.no_tiene_cuentasxpagar
                          )
                            ? _vm._i(_vm.form.no_tiene_cuentasxpagar, null) > -1
                            : _vm.form.no_tiene_cuentasxpagar
                        },
                        on: {
                          input: _vm.limpiarDetallesEsp,
                          change: function($event) {
                            var $$a = _vm.form.no_tiene_cuentasxpagar,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "no_tiene_cuentasxpagar",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "no_tiene_cuentasxpagar",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "no_tiene_cuentasxpagar", $$c)
                            }
                          }
                        }
                      }),
                      _c("strong", [
                        _vm._v(
                          " Ésta solicitud de pago no tiene órdenes de compra registradas previamente "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  !_vm.form.no_tiene_cuentasxpagar
                    ? [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(" Listado de Documentos por pagar")
                              ]),
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
                                      "deselect-label":
                                        "No se puede eliminar este valor",
                                      label: "text",
                                      placeholder:
                                        "Selecciona una cuenta para pagar",
                                      "track-by": "id_cuentaxpagar"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.cargar_detalles_cuenta()
                                      }
                                    },
                                    model: {
                                      value: _vm.detalleForm.cuentax,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.detalleForm,
                                          "cuentax",
                                          $$v
                                        )
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
                                _vm._l(_vm.errorMessages.cuentax, function(
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
                                _vm._v(
                                  "Saldo Pendiente " +
                                    _vm._s(
                                      _vm.form.moneda
                                        ? _vm.form.moneda.codigo
                                        : "N/D"
                                    )
                                )
                              ]),
                              _vm._v(" "),
                              _c("label", { staticClass: "form-control" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.detalleForm.cuentax
                                          ? _vm.detalleForm.cuentax
                                              .saldo_actual_org
                                          : 0,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v(
                                  "Monto Abono " +
                                    _vm._s(
                                      _vm.form.moneda
                                        ? _vm.form.moneda.codigo
                                        : "N/D"
                                    )
                                )
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
                                    _vm.detalleForm.monto = _vm.detalleForm
                                      .cuentax
                                      ? Math.max(
                                          Math.min(
                                            Number(
                                              !isNaN(_vm.detalleForm.monto)
                                                ? _vm.detalleForm.monto.toFixed(
                                                    2
                                                  )
                                                : 0
                                            ),
                                            Number(
                                              Number(
                                                _vm.detalleForm.cuentax
                                                  .saldo_actual_org
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
                                _vm._l(_vm.errorMessages.monto, function(
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
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v(" ")
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  ref: "agregar",
                                  staticClass: "btn btn-info btn-agregar",
                                  on: { click: _vm.agregarDetalle }
                                },
                                [
                                  _vm._v(
                                    "Agregar Abono\n                            "
                                  )
                                ]
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
                              _vm._l(
                                _vm.errorMessages.detalleCuentasxPagar,
                                function(message) {
                                  return _c("li", {
                                    key: message,
                                    domProps: { textContent: _vm._s(message) }
                                  })
                                }
                              ),
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
                                _c("thead", [
                                  _c("tr", [
                                    _c("th"),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "min-width": "50px" } },
                                      [_vm._v("Documento Origen")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "min-width": "300px" } },
                                      [_vm._v("Concepto")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "min-width": "100px" } },
                                      [
                                        _vm._v(
                                          "Monto Abono " +
                                            _vm._s(
                                              _vm.form.moneda
                                                ? _vm.form.moneda.codigo
                                                : "N/D"
                                            )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticStyle: { "min-width": "150px" },
                                        attrs: { colspan: "2" }
                                      },
                                      [
                                        _vm._v(
                                          "Saldo Pendiente " +
                                            _vm._s(
                                              _vm.form.moneda
                                                ? _vm.form.moneda.codigo
                                                : "N/D"
                                            )
                                        )
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(
                                      _vm.form.detalleCuentasxPagar,
                                      function(item, index) {
                                        return [
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticStyle: { width: "5%" } },
                                              [
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
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticStyle: { width: "10%" } },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        item.cuentax
                                                          .no_documento_origen,
                                                      expression:
                                                        "item.cuentax.no_documento_origen"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: { disabled: "" },
                                                  domProps: {
                                                    value:
                                                      item.cuentax
                                                        .no_documento_origen
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticStyle: { width: "20%" } },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        item.descripcion_pago,
                                                      expression:
                                                        "item.descripcion_pago"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: { disabled: "" },
                                                  domProps: {
                                                    value: item.descripcion_pago
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                                  {
                                                    staticClass:
                                                      "error-messages"
                                                  },
                                                  _vm._l(
                                                    _vm.errorMessages[
                                                      "detalleCuentasxPagar." +
                                                        index +
                                                        ".descripcion_pago"
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
                                                      modifiers: {
                                                        number: true
                                                      }
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: { min: "0" },
                                                  domProps: {
                                                    value: item.monto
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      return _vm.establecerConcepto(
                                                        item
                                                      )
                                                    },
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        item,
                                                        "monto",
                                                        _vm._n(
                                                          $event.target.value
                                                        )
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
                                                  {
                                                    staticClass:
                                                      "error-messages"
                                                  },
                                                  _vm._l(
                                                    _vm.errorMessages[
                                                      "detalleCuentasxPagar." +
                                                        index +
                                                        ".monto"
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
                                                    _vm._s(
                                                      _vm.form.moneda
                                                        ? _vm.form.moneda.codigo
                                                        : "N/D"
                                                    ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm._f("formatMoney")(
                                                          _vm.calcularSaldoX(
                                                            item
                                                          ),
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
                                      }
                                    )
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "2" } }),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-right" }, [
                                      _c("strong", [
                                        _vm._v(
                                          " Total a pagar " +
                                            _vm._s(
                                              _vm.form.moneda
                                                ? _vm.form.moneda.codigo
                                                : "N/D"
                                            )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatMoney")(
                                              _vm.total_a_pagar,
                                              2
                                            )
                                          )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-right" }, [
                                      _c("strong", [
                                        _vm._v(
                                          " Total saldo pendiente " +
                                            _vm._s(
                                              _vm.form.moneda
                                                ? _vm.form.moneda.codigo
                                                : "N/D"
                                            )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatMoney")(
                                              _vm.form.saldo_total,
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
                    : _vm._e()
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
                    attrs: {
                      to: { name: "listado-solicitudes-pago" },
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
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Registrar solicitud de pago")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar solicitud de pago")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de la solicitud")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione un beneficiario para continuar.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [
        _c("strong", [_vm._v("Detalles de órdenes de compra por pagar")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=template&id=5009c18a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=template&id=5009c18a& ***!
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "content-box" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "collapseExample" } },
            [
              _c("div", { staticClass: "card card-body" }, [
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Beneficiario: ")
                      ]),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "" } }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.solicitud_original.beneficiario))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Monto: ")]),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "" } }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.solicitud_original.monto))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Monto en letras: ")
                      ]),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "" } }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.solicitud_original.monto_letras))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("         Concepto: ")
                      ]),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "" } }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.solicitud_original.concepto))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Lugar y fecha: ")
                      ]),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "" } }, [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.solicitud_original.lugar_solicitud +
                                " " +
                                _vm
                                  .moment(
                                    _vm.solicitud_original.fecha_solicitud
                                  )
                                  .format("YYYY-MM-DD")
                            )
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-2" }, [
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
                      options: _vm.tipos_documentos,
                      label: "descripcion"
                    },
                    on: { input: _vm.obtenerNumeroDocumento },
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
                    _vm._l(_vm.errorMessages.tipoDocumento, function(message) {
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
                _vm._m(2),
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
            _c("div", { staticClass: "col-sm-2" }, [
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
                    _vm._l(_vm.errorMessages.fecha_emision, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Tasa de Cambio")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tasa_cambio.tasa,
                      expression: "tasa_cambio.tasa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { readonly: "", type: "text" },
                  domProps: { value: _vm.tasa_cambio.tasa },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.tasa_cambio, "tasa", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.tasa_cambio, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Banco")]),
                  _vm._v(" "),
                  _c("v-select", {
                    ref: "banco",
                    attrs: { options: _vm.bancos, label: "descripcion" },
                    on: {
                      input: function($event) {
                        return _vm.obtenerCuentasBancarias()
                      }
                    },
                    model: {
                      value: _vm.banco,
                      callback: function($$v) {
                        _vm.banco = $$v
                      },
                      expression: "banco"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.banco, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Cuenta bancaria")
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      "on-change": _vm.monto_letras,
                      options: _vm.cuentas_bancarias,
                      label: "numero_cuenta"
                    },
                    model: {
                      value: _vm.form.cuenta_bancaria,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "cuenta_bancaria", $$v)
                      },
                      expression: "form.cuenta_bancaria"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cuenta_bancaria, function(
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
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(
                    " Monto Solicitado (" + _vm._s(_vm.moneda_solicitada) + ")"
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.monto_org,
                      expression: "monto_org"
                    }
                  ],
                  ref: "valor",
                  staticClass: "form-control",
                  attrs: { readonly: "" },
                  domProps: { value: _vm.monto_org },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.monto_org = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(" IR (" + _vm._s(_vm.moneda_solicitada) + ")")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.monto_ir,
                      expression: "form.monto_ir"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "IR del cheque", type: "number" },
                  domProps: { value: _vm.form.monto_ir },
                  on: {
                    change: _vm.calcularTotales,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "monto_ir", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.monto_ir, function(message) {
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
            _vm.solicitud_original.id_moneda === 3
              ? _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Monto Córdobas")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.monto_cord,
                          expression: "monto_cord"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "" },
                      domProps: { value: _vm.monto_cord },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.monto_cord = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.solicitud_original.id_moneda === 3
              ? _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" IR Córdobas")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.monto_ir_cord,
                          expression: "monto_ir_cord"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "IR del cheque", readonly: "" },
                      domProps: { value: _vm.monto_ir_cord },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.monto_ir_cord = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(" Monto Neto del Cheque ("),
                  _c("strong", [_vm._v(_vm._s(_vm.moneda_aprobada))]),
                  _vm._v(")")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.monto_neto,
                      expression: "form.monto_neto"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "IR del cheque", readonly: "" },
                  domProps: { value: _vm.form.monto_neto },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "monto_neto", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Valor en letras")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.monto_letras,
                      expression: "form.monto_letras"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "IR del cheque", readonly: "" },
                  domProps: { value: _vm.form.monto_letras },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "monto_letras", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-5" }, [
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
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.$refs.sucursal.$refs.search.focus($event)
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
            ? _c("div", [_vm._m(3), _vm._v(" "), _c("hr")])
            : _vm._e(),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-2" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Sucursal")]),
                  _vm._v(" "),
                  _c("v-select", {
                    ref: "sucursal",
                    attrs: { options: _vm.sucursales, label: "descripcion" },
                    on: {
                      change: function($event) {
                        return _vm.sucursalEvento()
                      }
                    },
                    model: {
                      value: _vm.detalleForm.sucursal,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "sucursal", $$v)
                      },
                      expression: "detalleForm.sucursal"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.sucursalx, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Cuenta Contable")
                  ]),
                  _vm._v(" "),
                  _c("typeahead", {
                    ref: "cuenta_contable",
                    staticStyle: { width: "100%" },
                    attrs: {
                      initial: _vm.detalleForm.cuentaContable,
                      trim: 80,
                      url: _vm.cuentasBusquedaURL
                    },
                    on: {
                      input: _vm.seleccionarCuentaContable,
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
                        return _vm.$refs.concepto_mov.focus($event)
                      }
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
            _c("div", { staticClass: "col-sm-2" }, [
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
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.revisarConceptoMov($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.detalleForm, "concepto", $event.target.value)
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
            _c("div", { staticClass: "col-sm-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Debe")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.detalleForm.debe,
                      expression: "detalleForm.debe"
                    }
                  ],
                  ref: "debe",
                  staticClass: "form-control",
                  attrs: { type: "number" },
                  domProps: { value: _vm.detalleForm.debe },
                  on: {
                    focus: function($event) {
                      return $event.target.select()
                    },
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.$refs.haber.focus($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.detalleForm, "debe", $event.target.value)
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
            _c("div", { staticClass: "col-sm-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Haber")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.detalleForm.haber,
                      expression: "detalleForm.haber"
                    }
                  ],
                  ref: "haber",
                  staticClass: "form-control",
                  attrs: { type: "number" },
                  domProps: { value: _vm.detalleForm.haber },
                  on: {
                    focus: function($event) {
                      return $event.target.select()
                    },
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.$refs.agregar.focus($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.detalleForm, "haber", $event.target.value)
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
                        return _vm.eventoAgregar($event)
                      }
                    }
                  },
                  [_vm._v("Agregar Línea")]
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
                _vm._l(_vm.errorMessages.detalleMovimientos, function(message) {
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
                { staticClass: "table table-striped table-bordered" },
                [
                  _vm._m(4),
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
                                    options: _vm.sucursales,
                                    label: "descripcion"
                                  },
                                  model: {
                                    value: item.sucursal,
                                    callback: function($$v) {
                                      _vm.$set(item, "sucursal", $$v)
                                    },
                                    expression: "item.sucursal"
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
                                        ".sucursal.id_sucursal"
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
                                      domProps: { textContent: _vm._s(message) }
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
                                    "detalleMovimientos." + index + ".concepto"
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
                            _c("td", { staticStyle: { width: "16%" } }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.debe,
                                    expression: "item.debe"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "number" },
                                domProps: { value: item.debe },
                                on: {
                                  change: function($event) {
                                    item.partida_valida =
                                      (item.debe == 0 && item.haber > 0) ||
                                      (item.haber == 0 && item.debe > 0)
                                        ? true
                                        : false
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(item, "debe", $event.target.value)
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
                                      domProps: { textContent: _vm._s(message) }
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
                                    rawName: "v-model",
                                    value: item.haber,
                                    expression: "item.haber"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "number" },
                                domProps: { value: item.haber },
                                on: {
                                  change: function($event) {
                                    item.partida_valida =
                                      (item.haber == 0 && item.debe > 0) ||
                                      (item.debe == 0 && item.haber > 0)
                                        ? true
                                        : false
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(item, "haber", $event.target.value)
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
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
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
                        attrs: { colspan: "1" }
                      }),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "item-footer",
                          staticStyle: { width: "30%" },
                          attrs: { colspan: "2" }
                        },
                        [_vm._v("Totales")]
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
                                _vm._s(_vm._f("formatMoney")(_vm.total_debe, 2))
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
                  attrs: {
                    to: { name: "listado-solicitudes-pago" },
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
                  ref: "registrar",
                  staticClass: "btn btn-primary",
                  attrs: {
                    disabled: _vm.btnAction != "Registrar" ? true : false,
                    type: "button"
                  },
                  on: { click: _vm.revisarSolicitud }
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear Nuevo Documento Contable")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar solicitud de pago")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "aria-controls": "collapseExample",
            "aria-expanded": "false",
            "data-target": "#collapseExample",
            "data-toggle": "collapse",
            type: "button"
          }
        },
        [
          _vm._v(
            "\n                   Ver Detalles de Solicitud\n                "
          )
        ]
      )
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
        _c("th", [_vm._v("Sucursal")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cuenta Contable")]),
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

/***/ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/locale/translations/es.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return new(function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=e,this.months=n,this.monthsAbbr=r,this.days=o,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,o;return n=t,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&e(n.prototype,r),o&&e(n,o),t}())("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])});


/***/ }),

/***/ "./resources/app/api/bancos.js":
/*!*************************************!*\
  !*** ./resources/app/api/bancos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosBancos: function obtenerTodosBancos(cb, errorCb) {
    axios.get('contabilidad/bancos/obtener-bancos-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBancos: function obtenerBancos(data, cb, errorCb) {
    axios.post('contabilidad/bancos/obtener-bancos', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBanco: function obtenerBanco(data, cb, errorCb) {
    axios.post('contabilidad/bancos/obtener-banco', data).then(function (response) {
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
    axios.post('contabilidad/bancos/registrar', data).then(function (response) {
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
    axios.put('contabilidad/bancos/actualizar', data).then(function (response) {
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
    axios.put('contabilidad/bancos/desactivar', data).then(function (response) {
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
    axios.put('contabilidad/bancos/activar', data).then(function (response) {
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

/***/ "./resources/app/api/cuentas_por_pagar.js":
/*!************************************************!*\
  !*** ./resources/app/api/cuentas_por_pagar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('cuentas-pagar/obtener', data).then(function (response) {
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
    axios.post('cuentas-pagar/obtener-cp', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentasProveedor: function obtenerCuentasProveedor(data, cb, errorCb) {
    axios.post('cuentas-pagar/obtener-cuentas-proveedor', data).then(function (response) {
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

/***/ "./resources/app/api/monedas.js":
/*!**************************************!*\
  !*** ./resources/app/api/monedas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cargarMonedas: function cargarMonedas(cb, errorCb) {
    axios.get('monedas/obtener-monedas').then(function (response) {
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

/***/ "./resources/app/api/sucursales.js":
/*!*****************************************!*\
  !*** ./resources/app/api/sucursales.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('sucursales/obtener-todas').then(function (response) {
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
    axios.post('sucursales/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSucursal: function obtenerSucursal(data, cb, errorCb) {
    axios.post('sucursales/obtener-sucursal', data).then(function (response) {
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
    axios.post('sucursales/registrar', data).then(function (response) {
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
    axios.put('sucursales/actualizar', data).then(function (response) {
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
    axios.put('sucursales/desactivar', data).then(function (response) {
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
    axios.put('sucursales/activar', data).then(function (response) {
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

/***/ "./resources/app/api/tasas-cambio.js":
/*!*******************************************!*\
  !*** ./resources/app/api/tasas-cambio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTC: function obtenerTC(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/dia', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarTCParalelas: function actualizarTCParalelas(data, cb, errorCb) {
    axios.put('contabilidad/tasas-cambio/paralelas/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTCParalela: function obtenerTCParalela(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/dia/paralela', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTasas: function obtenerTasas(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/obtener-tasas', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  descargarTasas: function descargarTasas(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/descargar', data).then(function (response) {
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

/***/ "./resources/app/api/tipos_documentos.js":
/*!***********************************************!*\
  !*** ./resources/app/api/tipos_documentos.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('contabilidad/tipos-documentos/obtener-todos').then(function (response) {
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
    axios.post('contabilidad/tipos-documentos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTipoDocumento: function obtenerTipoDocumento(data, cb, errorCb) {
    axios.post('contabilidad/tipos-documentos/obtener-tipo-documento', data).then(function (response) {
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
    axios.post('contabilidad/tipos-documentos/registrar', data).then(function (response) {
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
    axios.put('contabilidad/tipos-documentos/actualizar', data).then(function (response) {
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
    axios.put('contabilidad/tipos-documentos/desactivar', data).then(function (response) {
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
    axios.put('contabilidad/tipos-documentos/activar', data).then(function (response) {
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

/***/ "./resources/app/components/solicitudes-pagos/Aprobar.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Aprobar.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Aprobar_vue_vue_type_template_id_0ede7ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aprobar.vue?vue&type=template&id=0ede7ea4& */ "./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=template&id=0ede7ea4&");
/* harmony import */ var _Aprobar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aprobar.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Aprobar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Aprobar_vue_vue_type_template_id_0ede7ea4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Aprobar_vue_vue_type_template_id_0ede7ea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/Aprobar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aprobar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Aprobar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aprobar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=template&id=0ede7ea4&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=template&id=0ede7ea4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aprobar_vue_vue_type_template_id_0ede7ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Aprobar.vue?vue&type=template&id=0ede7ea4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Aprobar.vue?vue&type=template&id=0ede7ea4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aprobar_vue_vue_type_template_id_0ede7ea4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aprobar_vue_vue_type_template_id_0ede7ea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue":
/*!******************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContabilizarSolicitud_vue_vue_type_template_id_3c4124ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae& */ "./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae&");
/* harmony import */ var _ContabilizarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContabilizarSolicitud.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContabilizarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContabilizarSolicitud_vue_vue_type_template_id_3c4124ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContabilizarSolicitud_vue_vue_type_template_id_3c4124ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContabilizarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContabilizarSolicitud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContabilizarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContabilizarSolicitud_vue_vue_type_template_id_3c4124ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ContabilizarSolicitud.vue?vue&type=template&id=3c4124ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContabilizarSolicitud_vue_vue_type_template_id_3c4124ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContabilizarSolicitud_vue_vue_type_template_id_3c4124ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue":
/*!************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmitirSolicitud_vue_vue_type_template_id_1db105f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmitirSolicitud.vue?vue&type=template&id=1db105f6& */ "./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=template&id=1db105f6&");
/* harmony import */ var _EmitirSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmitirSolicitud.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmitirSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmitirSolicitud_vue_vue_type_template_id_1db105f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmitirSolicitud_vue_vue_type_template_id_1db105f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/EmitirSolicitud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmitirSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmitirSolicitud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmitirSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=template&id=1db105f6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=template&id=1db105f6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmitirSolicitud_vue_vue_type_template_id_1db105f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmitirSolicitud.vue?vue&type=template&id=1db105f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EmitirSolicitud.vue?vue&type=template&id=1db105f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmitirSolicitud_vue_vue_type_template_id_1db105f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmitirSolicitud_vue_vue_type_template_id_1db105f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EntregarSolicitud_vue_vue_type_template_id_4476f707___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntregarSolicitud.vue?vue&type=template&id=4476f707& */ "./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=template&id=4476f707&");
/* harmony import */ var _EntregarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntregarSolicitud.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntregarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntregarSolicitud_vue_vue_type_template_id_4476f707___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EntregarSolicitud_vue_vue_type_template_id_4476f707___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/EntregarSolicitud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntregarSolicitud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=template&id=4476f707&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=template&id=4476f707& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregarSolicitud_vue_vue_type_template_id_4476f707___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntregarSolicitud.vue?vue&type=template&id=4476f707& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/EntregarSolicitud.vue?vue&type=template&id=4476f707&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregarSolicitud_vue_vue_type_template_id_4476f707___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregarSolicitud_vue_vue_type_template_id_4476f707___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Listado.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Listado.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_32686c8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=32686c8b&scoped=true& */ "./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=template&id=32686c8b&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_32686c8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true& */ "./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_32686c8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_32686c8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32686c8b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_32686c8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=style&index=0&id=32686c8b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_32686c8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_32686c8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_32686c8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_32686c8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_32686c8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=template&id=32686c8b&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=template&id=32686c8b&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_32686c8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=32686c8b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Listado.vue?vue&type=template&id=32686c8b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_32686c8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_32686c8b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoAprobacion_vue_vue_type_template_id_434dd7ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true& */ "./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true&");
/* harmony import */ var _ListadoAprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoAprobacion.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoAprobacion_vue_vue_type_style_index_0_id_434dd7ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true& */ "./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoAprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoAprobacion_vue_vue_type_template_id_434dd7ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoAprobacion_vue_vue_type_template_id_434dd7ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "434dd7ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/ListadoAprobacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_style_index_0_id_434dd7ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=style&index=0&id=434dd7ca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_style_index_0_id_434dd7ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_style_index_0_id_434dd7ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_style_index_0_id_434dd7ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_style_index_0_id_434dd7ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_style_index_0_id_434dd7ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_template_id_434dd7ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/ListadoAprobacion.vue?vue&type=template&id=434dd7ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_template_id_434dd7ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacion_vue_vue_type_template_id_434dd7ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Mostrar.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Mostrar.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mostrar_vue_vue_type_template_id_01491c06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=template&id=01491c06& */ "./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=template&id=01491c06&");
/* harmony import */ var _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar_vue_vue_type_template_id_01491c06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mostrar_vue_vue_type_template_id_01491c06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/Mostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=template&id=01491c06&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=template&id=01491c06& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_01491c06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=template&id=01491c06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Mostrar.vue?vue&type=template&id=01491c06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_01491c06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_01491c06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/RegistrarSP.vue":
/*!********************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/RegistrarSP.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarSP_vue_vue_type_template_id_34f3de72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarSP.vue?vue&type=template&id=34f3de72& */ "./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=template&id=34f3de72&");
/* harmony import */ var _RegistrarSP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarSP.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarSP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarSP.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarSP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarSP_vue_vue_type_template_id_34f3de72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarSP_vue_vue_type_template_id_34f3de72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/RegistrarSP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSP.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=template&id=34f3de72&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=template&id=34f3de72& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_template_id_34f3de72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSP.vue?vue&type=template&id=34f3de72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/RegistrarSP.vue?vue&type=template&id=34f3de72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_template_id_34f3de72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSP_vue_vue_type_template_id_34f3de72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Revisar.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Revisar.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Revisar_vue_vue_type_template_id_5009c18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Revisar.vue?vue&type=template&id=5009c18a& */ "./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=template&id=5009c18a&");
/* harmony import */ var _Revisar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Revisar.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Revisar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Revisar_vue_vue_type_template_id_5009c18a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Revisar_vue_vue_type_template_id_5009c18a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitudes-pagos/Revisar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revisar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Revisar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Revisar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=template&id=5009c18a&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=template&id=5009c18a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Revisar_vue_vue_type_template_id_5009c18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Revisar.vue?vue&type=template&id=5009c18a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitudes-pagos/Revisar.vue?vue&type=template&id=5009c18a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Revisar_vue_vue_type_template_id_5009c18a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Revisar_vue_vue_type_template_id_5009c18a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);