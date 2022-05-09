(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facturas-ventas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_facturas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/facturas */ "./resources/app/api/facturas.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweet-modal-vue */ "./node_modules/sweet-modal-vue/src/main.js");
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/tasas-cambio */ "./resources/app/api/tasas-cambio.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/custom-scripts/Round */ "./resources/app/assets/custom-scripts/Round.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SweetModal: sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__["SweetModal"]
  },
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      proformasBusquedaURL: "/inventario/proformas/buscar",
      clientesBusquedaURL: "/ventas/clientes/buscar",
      vendedoresBusquedaURL: "/ventas/vendedores/buscar",
      sucursalesBusquedaURL: "/sucursales/buscar",
      //bodegasBusquedaURL: "/bodegas/buscar",
      //productosBodegaBusquedaURL: "/productos/buscar-bodega-venta",
      clienteCredito: false,
      plazo_maximo_credito: 0,
      bodegas: [],
      sucursales: [],
      productos: [],
      servicios: [],
      productosORG: [],
      departamentos: [],
      municipios: [],
      zonas: [],
      vendedores: [],
      formCliente: {
        tipo_persona: 1,
        nombre_comercial: '',
        vendedor: '',
        numero_ruc: '',
        numero_cedula: '',
        direccion: '',
        id_tipo_cliente: 1,
        telefono: '',
        correo: '',
        municipio: '',
        giro_negocio: '',
        zona: '',
        id_impuesto: 1,
        tipo_contribuyente: 1,
        retencion_ir: true,
        retencion_imi: true,
        clasificacion: 1,
        permite_credito: false,
        plazo_credito: 0,
        limite_credito: 0,
        porcentaje_descuento: 0,
        observaciones: '',
        permite_consignacion: false,
        tramite_cheque: 15
      },
      //afectacionesBusquedaURL: "/ventas/afectaciones/buscar",
      afectaciones: [],
      vias_pago: [],
      monedas: [],
      bancos: [],
      detalleForm: {
        productox: '',
        afectacionx: [],
        cantidad: 1,
        precio_sugerido: 0,
        precio_sugerido_me: 0,
        descuento: 0,
        precio_costo: 0,
        precio_lista: 0,
        subtotal: 0,
        total: 0,
        total_sin_iva: 0
      },
      detalleFormPago: {
        via_pagox: null,
        monto: 0,
        monto_me: 0,
        moneda_x: null,
        banco_x: null,
        numero_minuta: '',
        numero_nota_credito: '',
        numero_cheque: '',
        numero_transferencia: '',
        numero_recibo_pago: ''
      },
      form: {
        proformasBusqueda: {},
        proforma_especifica: false,
        tipo_venta: 1,
        no_documento: "",
        f_factura: moment(new Date()).format("YYYY-MM-DD"),
        f_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
        serie: "",
        id_tipo: 1,
        //factura_moneda: {},
        factura_sucursal: '',
        factura_bodega: "",
        tipo_identificacion: 1,
        identificacion: "",
        factura_cliente: {},
        id_tipo_cliente: 1,
        dias_credito: 0,
        nombre_razon: "",
        factura_vendedor: "",
        t_cambio: 0,
        doc_exoneracion: "",
        doc_exoneracion_ir: "",
        doc_exoneracion_imi: "",
        impuesto_exonerado: false,
        mt_retencion: 0,
        mt_retencion_imi: 0,
        mt_impuesto: 0,
        mt_descuento: 0,
        mt_ajuste: 0,
        pago_vuelto: 0,
        pago_pendiente: 0,
        pago_vuelto_mn: 0,
        pago_pendiente_mn: 0,
        observacion: "",
        mt_subtotal: 0,
        mt_subtotal_sin_iva: 0,
        aplicaIR: false,
        aplicaIMI: false,
        aplicaIVA: true,
        total_final: 0,
        total_final_cordobas: 0,
        total_unidades_sin_bonificacion: 0,
        total_unidades_con_bonificacion: 0,
        detalleProductos: [],
        detallePago: []
      },
      btnAction: "Facturar",
      btnActionCliente: "Registrar Cliente",
      registrandoCliente: false,
      errorMessages: []
    };
  },
  computed: {
    total_subt_sin_iva: function total_subt_sin_iva() {
      this.form.mt_subtotal_sin_iva = Number(this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total_sin_iva);
      }, 0).toFixed(2));
      this.form.mt_subtotal = Number(this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.subtotal);
      }, 0).toFixed(2));
      return this.form.mt_subtotal_sin_iva.toFixed(2);
    },
    total_impuesto: function total_impuesto() {
      if (this.form.aplicaIVA) {
        this.form.mt_impuesto = Number(this.form.detalleProductos.reduce(function (carry, item) {
          return carry + Number(item.mt_impuesto.toFixed(2));
        }, 0).toFixed(2));
      } else {
        this.form.mt_impuesto = 0;
      }

      return this.form.mt_impuesto;
    },
    total_retencion: function total_retencion() {
      if (this.form.aplicaIR && Number(this.form.mt_subtotal_sin_iva) >= 1000) {
        this.form.mt_retencion = Number((this.form.mt_subtotal_sin_iva * 0.02).toFixed(2));
      } else {
        this.form.mt_retencion = 0;
      }

      return this.form.mt_retencion;
    },
    total_retencion_imi: function total_retencion_imi() {
      if (this.form.aplicaIMI) {
        this.form.mt_retencion_imi = Number((this.form.mt_subtotal_sin_iva * 0.01).toFixed(2));
      } else {
        this.form.mt_retencion_imi = 0;
      }

      return this.form.mt_retencion_imi;
    },
    total_ajuste: function total_ajuste() {
      this.form.mt_ajuste = this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.mt_ajuste);
      }, 0);
      return this.form.mt_ajuste;
    },
    total_descuento: function total_descuento() {
      this.form.mt_descuento = Number(this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.mt_descuento.toFixed(2));
      }, 0).toFixed(2));
      return this.form.mt_descuento;
    },
    total_cantidad: function total_cantidad() {
      this.form.total_unidades_sin_bonificacion = Number(this.form.detalleProductos.reduce(function (carry, item) {
        return carry + (item.afectacionx.id_afectacion !== 2 ? Number(item.cantidad) : 0);
      }, 0));
      this.form.total_unidades_con_bonificacion = Number(this.form.detalleProductos.reduce(function (carry, item) {
        return carry + (item.afectacionx.id_afectacion === 2 ? Number(item.cantidad) : 0);
      }, 0));
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    },
    gran_total_cordobas: function gran_total_cordobas() {
      this.form.total_final_cordobas = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number((this.form.mt_subtotal_sin_iva - this.form.mt_retencion - this.form.mt_retencion_imi + this.form.mt_impuesto).toFixed(2)), 2); //roundNumber.round(Number((Number(this.form.total_final)*this.form.t_cambio).toFixed(2)),2);

      if (!isNaN(this.form.total_final_cordobas)) {
        return this.form.total_final_cordobas;
      } else return 0;
    },
    gran_total: function gran_total() {
      this.form.total_final = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].decimalAdjust('ceil', Number(this.form.total_final_cordobas / this.form.t_cambio), -1);

      if (!isNaN(this.form.total_final)) {
        return this.form.total_final;
      } else return 0;
    },
    total_deuda: function total_deuda() {
      var _this = this;

      /*let total_pagos = this.form.detallePago.reduce((carry, item) => {
          return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto_me : Number((item.monto/this.form.t_cambio).toFixed(2))));
      }, 0);*/
      var total_pagos_cordobas = 0;

      if (this.form.detallePago.length) {
        total_pagos_cordobas = this.form.detallePago.reduce(function (carry, item) {
          return carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number((item.monto_me * _this.form.t_cambio).toFixed(2)));
        }, 0);
      }
      /*console.log('Total pago C$: '+total_pagos_cordobas);
      console.log('Total factura C$: '+ this.form.total_final_cordobas);
      console.log('Dif C$: '+ this.form.total_final_cordobas- total_pagos_cordobas);*/


      if ((Number(this.form.total_final_cordobas.toFixed(2)) - Number(total_pagos_cordobas.toFixed(2))).toFixed(2) < 0.005) {
        this.form.pago_pendiente = 0;
        this.form.pago_pendiente_mn = 0;
      } else {
        this.form.pago_pendiente_mn = Number((Number(this.form.total_final_cordobas.toFixed(2)) - Number(total_pagos_cordobas.toFixed(2))).toFixed(2));
        this.form.pago_pendiente = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].decimalAdjust('ceil', Number(this.form.pago_pendiente_mn / this.form.t_cambio), -1);
      }
      /*let total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
        return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(2))));
      }, 0);*/


      if (!isNaN(this.form.pago_pendiente_mn)) {
        //Number((Number((this.form.total_final*this.form.t_cambio).toFixed(2)) - total_pagos_cordobas).toFixed(2));
        return this.form.pago_pendiente_mn;
      } else return 0;
    },
    total_vuelto: function total_vuelto() {
      var _this2 = this;

      /* let total_pagos = this.form.detallePago.reduce((carry, item) => {
           return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto_me : Number(item.monto/this.form.t_cambio.toFixed(2))));
       }, 0);*/
      var total_pagos = 0;

      if (this.form.detallePago.length) {
        total_pagos = this.form.detallePago.reduce(function (carry, item) {
          return carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number((item.monto_me * _this2.form.t_cambio).toFixed(2)));
        }, 0);
      }

      if ((Number(this.form.total_final_cordobas.toFixed(2)) - Number(total_pagos.toFixed(2))).toFixed(2) > 0) {
        ///revision
        this.form.pago_vuelto = 0;
        this.form.pago_vuelto_mn = 0;
      } else {
        this.form.pago_vuelto_mn = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(Number(total_pagos.toFixed(2)) - Number(this.form.total_final_cordobas).toFixed(2)), 2);
        this.form.pago_vuelto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number((this.form.pago_vuelto_mn / this.form.t_cambio).toFixed(2)), 2);
      } //console.log('Master C$: '+((Number((this.form.total_final).toFixed(2)) - Number((total_pagos).toFixed(2))).toFixed(2)));

      /*let total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
        return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(2))));
      }, 0);*/


      if (!isNaN(this.form.pago_vuelto_mn)) {
        return this.form.pago_vuelto_mn;
      } else return 0;
    }
  },
  methods: {
    deseleccionar: function deseleccionar() {
      this.form.proformasBusqueda = {}; //this.filter.search.value=''
    },
    seleccionarProforma: function seleccionarProforma(e) {
      var oc = e.target.value;
      var self = this;
      self.form.proformasBusqueda = oc;
    },
    calcularEquivalente: function calcularEquivalente(itemX) {
      if (itemX.moneda_x.id_moneda === 1 && itemX.monto > 0) {
        itemX.monto_me = Number((itemX.monto / this.form.t_cambio).toFixed(2));
      }

      if (itemX.moneda_x.id_moneda === 3 && itemX.monto_me > 0) {
        itemX.monto = Number((itemX.monto_me * this.form.t_cambio).toFixed(2));
      }
    },
    abrirModal: function abrirModal() {
      this.$refs.modal.open();
    },
    cerrarModal: function cerrarModal() {
      this.$refs.modal.close();
    },
    cambiarFocoCantidad: function cambiarFocoCantidad() {
      var self = this;
      self.$refs.agregar.focus();
    },
    seleccionarCliente: function seleccionarCliente(e) {
      var trabajadorP = e.target.value;
      var self = this;
      self.form.factura_cliente = trabajadorP;
      self.form.tipo_identificacion = self.form.factura_cliente.tipo_persona;
      self.form.id_tipo = 1;
      self.form.dias_credito = 0;
      self.plazo_maximo_credito = self.form.factura_cliente.plazo_credito;
      self.form.factura_vendedor = trabajadorP.vendedor_cliente;
      self.form.factura_cliente.permite_credito && self.form.factura_cliente.plazo_credito > 0 ? self.clienteCredito = true : self.clienteCredito = false;

      if (self.form.factura_cliente.tipo_persona === 1) {
        self.form.identificacion = self.form.factura_cliente.numero_cedula;
      } else {
        self.form.identificacion = self.form.factura_cliente.numero_ruc;
      }
    },
    seleccionarVendedor: function seleccionarVendedor(e) {
      var proveedorP = e.target.value;
      var self = this;
      self.form.factura_vendedor = proveedorP;
    },
    seleccionarSucursal: function seleccionarSucursal() {
      var self = this;
      self.bodegas = [];
      self.form.factura_bodega = []; //self.form.factura_sucursal = sucursalx;
      //console.log(sucursalx);
      //console.log(self.form.factura_sucursal);

      self.form.serie = self.form.factura_sucursal.serie;

      if (self.form.factura_sucursal.sucursal_bodega_ventas.length) {
        self.bodegas = self.form.factura_sucursal.sucursal_bodega_ventas;
        self.form.factura_bodega = self.bodegas[0];
        self.loading = true;
        self.form.detalleProductos = [];
        self.form.detallePago = [];
        self.detalleForm.productox = '';
        _api_bodegas__WEBPACK_IMPORTED_MODULE_1__["default"].buscarProductosBodega({
          id_bodega: self.form.factura_bodega.id_bodega
        }, function (data) {
          if (data !== null) {
            self.productos = [];
            self.productosORG = [];
            self.servicios = [];
            self.productosORG = data.productos;
            self.servicios = data.servicios;
            self.productosORG.forEach(function (producto, key) {
              self.productos.push(producto);
            });
            self.servicios.forEach(function (servicio, key) {
              self.productos.push(servicio);
            });
            self.detalleForm.productox = '';
          } else {
            alertify.warning("No se encuentran productos para esta bodega.", 5);
            self.detalleForm.productox = '';
          }

          self.loading = false;
        }, function (err) {
          /*if(err.codigo_bateria){
            self.detalleForm.bateria_busqueda = '';
            self.$refs.bateria.focus();
            alertify.warning("No se encuentra esta batería.",5);
            self.detalleForm.productox = '';
          }*/
          self.loading = false;
        });
      } else {
        alertify.warning('La sucursal seleccionada no tiene bodegas disponibles.');
      }
    },
    seleccionarArea: function seleccionarArea(e) {
      var areaP = e.target.value;
      var self = this;
      self.form.factura_area = areaP;
    },
    seleccionarBodega: function seleccionarBodega() {
      var self = this;
      self.loading = true;
      self.form.detalleProductos = [];
      self.form.detallePago = [];
      self.detalleForm.productox = '';
      _api_bodegas__WEBPACK_IMPORTED_MODULE_1__["default"].buscarProductosBodega({
        id_bodega: self.form.factura_bodega.id_bodega
      }, function (data) {
        if (data !== null) {
          self.productos = [];
          self.productosORG = [];
          self.servicios = [];
          self.productosORG = data.productos;
          self.servicios = data.servicios;
          self.productosORG.forEach(function (producto, key) {
            self.productos.push(producto);
          });
          self.servicios.forEach(function (servicio, key) {
            self.productos.push(servicio);
          });
          self.detalleForm.productox = '';
        } else {
          alertify.warning("No se encuentran productos para esta bodega.", 5);
          self.detalleForm.productox = '';
        }

        self.loading = false;
      }, function (err) {
        /*if(err.codigo_bateria){
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.",5);
          self.detalleForm.productox = '';
        }*/
        self.loading = false;
      });
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      //const productoP = e.target.value;
      var self = this; //self.detalleForm.productox = productoP;

      if (self.detalleForm.productox) {
        self.detalleForm.cantidad = 1;
        self.detalleForm.precio_sugerido = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(self.detalleForm.productox.precio_sugerido * self.form.t_cambio), 2);
        self.detalleForm.precio_sugerido_me = Number(self.detalleForm.productox.precio_sugerido);

        if (self.detalleForm.productox.tipo_producto === 2) {
          self.detalleForm.afectacionx = self.afectaciones[0];
        }

        self.$refs.cantidad.focus(); //self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
      }
    },
    calcularAjuste: function calcularAjuste(itemX) {
      itemX.p_ajuste = Number(itemX.afectacionx.valor);

      if (itemX.p_ajuste > 0) {
        itemX.p_descuento = 0;
      }
    },
    calcular_montos: function calcular_montos(itemX) {
      itemX.subtotal = Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2));
      itemX.mt_descuento = Number((Number(itemX.p_descuento / 100) * Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2))).toFixed(2));
      itemX.p_ajuste = Number(itemX.afectacionx.valor);
      itemX.mt_ajuste = Number((Number(itemX.p_ajuste / 100) * Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2))).toFixed(2));
      itemX.p_unitario = Number((Number(itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste) / Number(itemX.cantidad)).toFixed(2));
      /*console.log(itemX.p_impuesto);
      console.log(Number(itemX.p_impuesto/100));
      console.log(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste);
      console.log(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)))));
      */

      /*let xy = Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste))));
      console.log(roundNumber.round(xy,2));*/

      itemX.mt_impuesto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number((Number(itemX.p_impuesto / 100) * Number(itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste)).toFixed(2)), 2);
      itemX.total_sin_iva = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste), 2);
      itemX.total = Number((itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste + itemX.mt_impuesto).toFixed(2));

      if (!isNaN(itemX.mt_descuento)) {
        return itemX.mt_descuento;
      } else return 0;
    },
    obtenerTCParalela: function obtenerTCParalela() {
      var self = this;
      self.loading = true;
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_5__["default"].obtenerTCParalela({
        fecha: self.form.f_factura,
        dias: self.form.dias_credito
      }, function (data) {
        if (data.tasa_paralela !== null) {
          self.form.t_cambio = Number(data.tasa_paralela);
          self.form.f_vencimiento = data.fecha;
          self.form.detalleProductos.forEach(function (productox, key) {
            productox.precio_lista = Number((productox.precio_lista_me * self.form.t_cambio).toFixed(2));
            productox.precio = Number((productox.precio_lista_me * self.form.t_cambio).toFixed(2)); // console.log(productox.precio_lista);
          });
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
          self.form.t_cambio = 0;
          self.form.f_vencimiento = self.form.f_factura;
          self.form.detalleProductos = [];
        }

        self.loading = false;
      }, function (err) {
        if (err.fecha[0]) {
          self.form.t_cambio = 0;
          self.form.f_vencimiento = self.form.f_factura;
          alertify.warning(err.fecha[0], 5);
          self.loading = false;
        }
      });
    },

    /*obtenerTC(){
      var self = this;
      tc.obtenerTC({
        fecha: self.form.f_factura
      }, data => {
        if(data.tasa_paralela !== null){
          self.form.t_cambio = Number(data.tasa_paralela);
        }else{
          alertify.warning("No se encuentra tasa de cambio para esta fecha.",5);
          self.form.t_cambio = 0;
        }
        self.loading = false;
      }, err => {
        if(err.fecha[0]){
          self.form.t_cambio = 0;
          alertify.warning(err.fecha[0],5);
          self.loading = false;
        }
      })
    },*/

    /*obtenerAfectacionesTodas() {
       var self = this;
       afectacion.obtenerTodos(
               data => {
                 self.afectaciones = data;
               },
               err => {
                 console.log(err);
               }
       );
     },*/
    obtenerMunicipios: function obtenerMunicipios() {
      var self = this;
      self.form.municipio = null;
      if (self.formCliente.departamento.municipios_departamento) self.municipios = self.formCliente.departamento.municipios_departamento;
    },
    nueva: function nueva() {
      var self = this;
      _api_facturas__WEBPACK_IMPORTED_MODULE_0__["default"].nueva({}, function (data) {
        self.vias_pago = data.vias_pago;
        self.afectaciones = data.afectaciones;
        self.detalleForm.afectacionx = self.afectaciones[0];
        self.monedas = data.monedas;
        self.bancos = data.bancos;
        self.sucursales = data.sucursales; //self.form.factura_bodega=self.bodegas[0];

        self.productos = [];
        self.form.t_cambio = Number(data.t_cambio.tasa_paralela);
        self.zonas = data.zonas;
        self.vendedores = data.vendedores;
        self.formCliente.zona = data.zonas[0];
        self.departamentos = data.departamentos;
        self.formCliente.departamento = self.departamentos[9];
        self.municipios = self.formCliente.departamento.municipios_departamento;
        self.formCliente.municipio = self.municipios[5];
        self.formCliente.vendedor = data.vendedor_actual;
        self.loading = false;
        /*self.form.factura_bodega.productos_bodega.forEach((bodega_producto, key) => {
          self.productos.push({
            codigo_sistema: bodega_producto.producto_venta.codigo_sistema,
            costo_promedio:  Number(bodega_producto.producto_venta.costo_promedio),
            precio:Number(bodega_producto.producto_venta.precio_sugerido),
            descripcion:  bodega_producto.producto_venta.descripcion,
            id_producto:  bodega_producto.producto_venta.id_producto,
            tasa_impuesto: Number(bodega_producto.producto_venta.tasa_impuesto),
            id_bodega_producto:  self.form.factura_bodega.productos_bodega[key].id_bodega_producto,
            nombre_comercial:  bodega_producto.producto_venta.nombre_comercial,
            cantidad_disponible: Number(self.form.factura_bodega.productos_bodega[key].cantidad),
            unidad_medida: bodega_producto.producto_venta.unidad_medida,
            nombre_full: bodega_producto.producto_venta.descripcion+' - '+bodega_producto.producto_venta.codigo_barra,
          });
        });*/
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox && self.detalleForm.afectacionx) {
        if (self.detalleForm.cantidad > 0) {
          var cantidad = 0;

          if (self.form.detalleProductos) {
            self.form.detalleProductos.forEach(function (productox, key) {
              if (self.detalleForm.productox.id_producto === productox.productox.id_producto) {
                cantidad = cantidad + productox.cantidad + self.detalleForm.cantidad;
              }
            });
          }

          var i = 0;
          var keyx = 0;

          if (self.form.detalleProductos) {
            self.form.detalleProductos.forEach(function (productox, key) {
              if (self.detalleForm.productox.id_producto === productox.productox.id_producto && self.detalleForm.afectacionx.id_afectacion === productox.afectacionx.id_afectacion) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            if (cantidad <= Number(self.detalleForm.productox.cantidad_disponible)) {
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                afectacionx: self.detalleForm.afectacionx,
                cantidad: Number(self.detalleForm.cantidad),
                precio_costo: Number(self.detalleForm.productox.costo_promedio),
                //precio_lista:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                //precio:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                precio_lista: Number(self.detalleForm.precio_sugerido),
                precio_lista_me: Number(self.detalleForm.precio_sugerido_me),
                precio: Number(self.detalleForm.precio_sugerido),
                p_descuento: 0,
                mt_descuento: 0,
                p_impuesto: Number(self.detalleForm.productox.tasa_impuesto),
                mt_impuesto: 0,
                subtotal: 0,
                total: 0,
                total_sin_iva: 0,
                mt_ajuste: 0,
                p_ajuste: 0
              });
              alertify.success("Artículo agregado!", 5);
            } else {
              alertify.warning("Se ha agregado la cantidad máxima disponible de este producto", 5);
            }
          } else {
            var nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;

            if (nuevo_total <= self.form.detalleProductos[keyx].productox.cantidad_disponible) {
              self.form.detalleProductos[keyx].cantidad = nuevo_total;
              alertify.success("Artículo agregado!", 5);
            } else {
              self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].productox.cantidad_disponible);
              alertify.warning("Se ha agregado la cantidad maxima disponible de este articulo", 5);
            }
          }

          self.detalleForm.productox = null;
          self.detalleForm.afectacionx = self.afectaciones[0];
          self.detalleForm.cantidad = 0;
          self.detalleForm.precio_sugerido = 0;
          self.detalleForm.subtotal = 0;
          self.detalleForm.total = 0;
          self.detalleForm.total_sin_iva = 0;
          this.$refs.producto.$el.focus();
        } else {
          alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleProductos.length >= 1) {
        this.form.detalleProductos.splice(index, 1);
      } else {
        this.form.detalleProductos = [];
      }
    },
    pagoCompleto: function pagoCompleto(IdMoneda) {
      var self = this;

      if (Number(self.form.total_final_cordobas.toFixed(2)) > 0) {
        self.form.detallePago = [];
        /*
              let monto =0,monto_me=0;
              if(IdMoneda === 1){
                monto=Number(self.form.total_final_cordobas.toFixed(2));
                monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(2));
              }else{
                monto=Number(self.form.total_final_cordobas.toFixed(2));
                monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(2));
              }*/

        self.form.detallePago.push({
          via_pagox: self.vias_pago[1],
          moneda_x: self.monedas[Number(IdMoneda)],
          monto: Number(self.form.total_final_cordobas.toFixed(2)),
          monto_me: Number((self.form.total_final_cordobas / self.form.t_cambio).toFixed(2)),
          banco_x: null,
          numero_minuta: '',
          numero_nota_credito: '',
          numero_cheque: '',
          numero_transferencia: '',
          numero_recibo_pago: ''
        });
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
            monto_me = Number((self.detalleFormPago.monto / self.form.t_cambio).toFixed(2));
          } else if (self.detalleFormPago.moneda_x.id_moneda === 3) {
            monto_me = Number(self.detalleFormPago.monto);
            monto_mn = Number((self.detalleFormPago.monto * self.form.t_cambio).toFixed(2));
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
            if (self.detalleFormPago.moneda_x.id_moneda === 1) {
              monto_mn = Number(self.detalleFormPago.monto);
              monto_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(self.detalleFormPago.monto / self.form.t_cambio), 2);
              self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto + self.detalleFormPago.monto).toFixed(2));
              self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto / self.form.t_cambio).toFixed(2));
            } else if (self.detalleFormPago.moneda_x.id_moneda === 3) {
              self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto_me + self.detalleFormPago.monto).toFixed(2));
              self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto_me * self.form.t_cambio).toFixed(2));
            } //let nuevo_monto_total = self.form.detallePago[keyx].monto + self.detalleFormPago.monto;


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
    procesar_factura: function procesar_factura() {
      var _this3 = this;

      var self = this;
      self.$swal.fire({
        title: 'Esta seguro de completar la factura?',
        text: "Detalles de la factura: ",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_facturas__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
            _this3.$swal.fire('Factura Registrada!', 'La Factura fue registrada correctamente', 'success').then(function (result2) {
              if (result2.value) {
                _this3.$router.push({
                  name: "facturas"
                });
              }
            });
          }, function (err) {
            self.errorMessages = err;
            alertify.warning("Por favor revise los datos faltantes", 5);
            self.btnAction = "Facturar";
          });
        } else {
          self.btnAction = "Facturar";
        }
      });
    },
    registrar: function registrar() {
      var self = this;
      self.btnAction = "Registrando, espere....";
      /*facturas de contado*/

      if (self.form.id_tipo === 1) {
        if (self.form.pago_vuelto_mn >= 0
        /*&& self.form.total_final_cordobas > 0*/
        && self.form.pago_pendiente_mn === 0) {
          this.procesar_factura();
        } else {
          alertify.warning("Las facturas de contado deben ser pagadas en su totalidad", 5); //self.errorMessages.serie = Array('Error serie');

          self.btnAction = "Facturar";
        }
      }
      /*facturas de credito*/


      if (self.form.id_tipo === 2) {
        if (self.form.pago_vuelto_mn === 0 && self.form.total_final_cordobas > 0 && self.form.pago_pendiente_mn > 1) {
          if (self.form.factura_cliente) {
            if (self.form.pago_pendiente_mn <= Number(self.form.factura_cliente.monto_credito_disponible)) {
              self.procesar_factura();
            } else {
              alertify.warning("El monto máximo actual de crédito de este cliente es C$ " + Number(self.form.factura_cliente.monto_credito_disponible).toFixed(2) + " , el monto de ésta factura supera ese monto", 5);
              self.btnAction = "Facturar";
            }
          } else {
            alertify.warning("Debe seleccionar un cliente", 5);
            self.btnAction = "Facturar";
          }
        } else {
          alertify.warning("Las facturas de crédito deben tener saldo a pagar", 5); //self.errorMessages.serie = Array('Error serie');

          self.btnAction = "Facturar";
        }
      }
    },
    registrarCliente: function registrarCliente() {
      var self = this;
      self.btnActionCliente = "Registrando, espere....";
      if (!self.registrandoCliente) self.registrandoCliente = true;
      _api_clientes__WEBPACK_IMPORTED_MODULE_4__["default"].registrarBasico(self.formCliente, function (data) {
        alertify.success("Cliente registrado exitosamente", 5); //console.log(data);

        self.form.factura_cliente = data;
        self.form.factura_vendedor = self.formCliente.vendedor;
        self.form.tipo_identificacion = self.form.factura_cliente.tipo_persona;

        if (self.form.factura_cliente.tipo_persona === 1) {
          self.form.identificacion = self.form.factura_cliente.numero_cedula;
        } else {
          self.form.identificacion = self.form.factura_cliente.numero_ruc;
        }

        self.btnActionCliente = "Registrar Cliente"; //self.form.factura_vendedor

        self.registrandoCliente = false;
        self.formCliente.tipo_persona = 1;
        self.formCliente.nombre_comercial = '';
        self.formCliente.vendedor = '';
        self.formCliente.numero_ruc = '';
        self.formCliente.numero_cedula = '';
        self.formCliente.direccion = '';
        self.formCliente.id_tipo_cliente = 1;
        self.formCliente.telefono = '';
        self.formCliente.correo = '';
        self.formCliente.municipio = '';
        self.formCliente.giro_negocio = '';
        self.formCliente.zona = '';
        self.formCliente.id_impuesto = 1;
        self.formCliente.tipo_contribuyente = 1;
        self.formCliente.retencion_ir = true;
        self.formCliente.retencion_imi = true;
        self.formCliente.clasificacion = 1;
        self.formCliente.permite_credito = false;
        self.formCliente.plazo_credito = 0;
        self.formCliente.limite_credito = 0;
        self.formCliente.porcentaje_descuento = 0;
        self.formCliente.observaciones = '';
        self.formCliente.permite_consignacion = false;
        self.formCliente.tramite_cheque = 15;
        self.$refs.modal.close();
      }, function (err) {
        self.errorMessages = err;
        self.registrandoCliente = false;
        self.btnActionCliente = "Registrar Cliente";
      });
    },
    seleccionarTipo: function seleccionarTipo() {
      var self = this;

      if (self.form.id_tipo === 1) {
        self.form.dias_credito = 0;
      } else {
        self.form.aplicaIR = false;
        self.form.aplicaIMI = false;
        self.form.mt_retencion = 0;
        self.form.mt_retencion_imi = 0;
        self.form.doc_exoneracion_ir = '';
        self.form.doc_exoneracion_imi = '';
        self.form.dias_credito = 0;
        self.form.dias_credito = self.plazo_maximo_credito;
      }

      self.obtenerTCParalela();
      /*calcular fecha*/
    }
  },
  mounted: function mounted() {
    // this.obtenerAfectacionesTodas();
    // this.obtenerTodasBodegasProductos();
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n.check-label2 {\n  margin-top: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVentas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=template&id=1acfd2ba&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=template&id=1acfd2ba& ***!
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
  return _c(
    "div",
    { staticClass: "main" },
    [
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
                _c("div", { staticClass: "col-sm-9" }, [
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
                            initial: _vm.form.factura_cliente,
                            params: { es_deudor: false },
                            trim: 80,
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
                      _vm._l(_vm.errorMessages.factura_cliente, function(
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
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success btn-agregar",
                          on: { click: _vm.abrirModal }
                        },
                        [_vm._v("Nuevo")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Tipo Cliente")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.tipo_identificacion,
                            expression: "form.tipo_identificacion",
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
                              "tipo_identificacion",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Natural")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Jurídico")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-8" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v(" Identificación")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.identificacion,
                          expression: "form.identificacion"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Número Identificación" },
                      domProps: { value: _vm.form.identificacion },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "identificacion",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.identificacion, function(
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
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-5" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v(" Sucursal")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.factura_sucursal,
                              expression: "form.factura_sucursal"
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
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "factura_sucursal",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.seleccionarSucursal
                            ]
                          }
                        },
                        _vm._l(_vm.sucursales, function(sucursal) {
                          return _c(
                            "option",
                            {
                              key: sucursal.id_sucursal,
                              domProps: { value: sucursal }
                            },
                            [
                              _vm._v(
                                _vm._s(sucursal.descripcion) +
                                  "\n                  "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.factura_sucursal, function(
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
                    _c("label", [_vm._v("Serie")]),
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
                      attrs: { disabled: "", placeholder: "Serie" },
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
                _c("div", { staticClass: "col-sm-5" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { label: "descripcion", options: _vm.bodegas },
                        on: {
                          input: function($event) {
                            return _vm.seleccionarBodega()
                          }
                        },
                        model: {
                          value: _vm.form.factura_bodega,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "factura_bodega", $$v)
                          },
                          expression: "form.factura_bodega"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.factura_bodega, function(
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
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Tipo Factura")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.id_tipo,
                            expression: "form.id_tipo",
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
                                "id_tipo",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.seleccionarTipo
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Contado")
                        ]),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: { disabled: !_vm.clienteCredito, value: "2" }
                          },
                          [_vm._v("Crédito")]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v(" Plazo Crédito")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.dias_credito,
                            expression: "form.dias_credito",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { disabled: !(_vm.form.id_tipo === 2) },
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
                                "dias_credito",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.obtenerTCParalela
                          ]
                        }
                      },
                      [
                        _c(
                          "option",
                          {
                            attrs: {
                              disabled: _vm.form.id_tipo === 2,
                              value: "0"
                            }
                          },
                          [_vm._v("N/A")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: {
                              disabled: !(_vm.plazo_maximo_credito >= 8),
                              value: "8"
                            }
                          },
                          [_vm._v("8 días")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: {
                              disabled: !(_vm.plazo_maximo_credito >= 15),
                              value: "15"
                            }
                          },
                          [_vm._v("15 días ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: {
                              disabled: !(_vm.plazo_maximo_credito >= 30),
                              value: "30"
                            }
                          },
                          [_vm._v("30 días")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: {
                              disabled: !(_vm.plazo_maximo_credito >= 45),
                              value: "45"
                            }
                          },
                          [_vm._v("45 días")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: {
                              disabled: !(_vm.plazo_maximo_credito >= 60),
                              value: "60"
                            }
                          },
                          [_vm._v("60 días")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.plazo_credito, function(
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
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Vendedor")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "nombre_completo",
                          options: _vm.vendedores,
                          disabled: true
                        },
                        model: {
                          value: _vm.form.factura_vendedor,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "factura_vendedor", $$v)
                          },
                          expression: "form.factura_vendedor"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.factura_vendedor, function(
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
                        _vm._v("Fecha Emitida")
                      ]),
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
                        _vm._l(_vm.errorMessages.f_factura, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha Vencimiento")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.f_vencimiento,
                          expression: "form.f_vencimiento"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { disabled: "", type: "text" },
                      domProps: { value: _vm.form.f_vencimiento },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "f_vencimiento",
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Observaciones")
                    ]),
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
                      attrs: { type: "text" },
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
                _c("div", { staticClass: "col-sm-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "check-label2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.proforma_especifica,
                            expression: "form.proforma_especifica"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.form.proforma_especifica)
                            ? _vm._i(_vm.form.proforma_especifica, null) > -1
                            : _vm.form.proforma_especifica
                        },
                        on: {
                          input: _vm.deseleccionar,
                          change: function($event) {
                            var $$a = _vm.form.proforma_especifica,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "proforma_especifica",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "proforma_especifica",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "proforma_especifica", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" Tiene proforma")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-10" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Proforma")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _vm.form.proforma_especifica
                          ? _c("typeahead", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                initial: _vm.form.proformasBusqueda,
                                trim: 80,
                                url: _vm.proformasBusquedaURL
                              },
                              on: { input: _vm.seleccionarProforma }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.form.proforma_especifica
                          ? _c("input", {
                              staticClass: "form-control",
                              attrs: { disabled: "" }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.proformasBusqueda, function(
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
              !_vm.form.factura_bodega
                ? _c("div", [_vm._m(3), _vm._v(" "), _c("hr")])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v(" Producto")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("multiselect", {
                          ref: "producto",
                          attrs: {
                            options: _vm.productos,
                            "deselect-label": "No se puede eliminar este valor",
                            "track-by": "id_producto",
                            label: "text",
                            placeholder: "Selecciona un producto",
                            searchable: true,
                            "show-labels": false,
                            "allow-empty": false
                          },
                          on: {
                            input: function($event) {
                              return _vm.cargar_detalles_producto()
                            }
                          },
                          model: {
                            value: _vm.detalleForm.productox,
                            callback: function($$v) {
                              _vm.$set(_vm.detalleForm, "productox", $$v)
                            },
                            expression: "detalleForm.productox"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.productox, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Cantidad")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.detalleForm.cantidad,
                          expression: "detalleForm.cantidad",
                          modifiers: { number: true }
                        }
                      ],
                      ref: "cantidad",
                      staticClass: "form-control",
                      attrs: { type: "number", min: "0" },
                      domProps: { value: _vm.detalleForm.cantidad },
                      on: {
                        keydown: function($event) {
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
                          return _vm.cambiarFocoCantidad($event)
                        },
                        change: function($event) {
                          _vm.detalleForm.cantidad = Math.max(
                            Math.min(
                              Math.round(_vm.detalleForm.cantidad),
                              !isNaN(
                                _vm.detalleForm.productox.cantidad_disponible
                              )
                                ? _vm.detalleForm.productox.cantidad_disponible
                                : 0
                            ),
                            1
                          )
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detalleForm,
                            "cantidad",
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
                      _vm._l(_vm.errorMessages.cantidadx, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Precio Lista C$ ")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.detalleForm.precio_sugerido,
                          expression: "detalleForm.precio_sugerido",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "" },
                      domProps: { value: _vm.detalleForm.precio_sugerido },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detalleForm,
                            "precio_sugerido",
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
                      _vm._l(_vm.errorMessages.preciox, function(message) {
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
                        _vm._v("Tipo de Afectación")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          disabled: !_vm.detalleForm.productox
                            ? true
                            : _vm.detalleForm.productox.tipo_producto === 2,
                          label: "descripcion",
                          options: _vm.afectaciones
                        },
                        model: {
                          value: _vm.detalleForm.afectacionx,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "afectacionx", $$v)
                          },
                          expression: "detalleForm.afectacionx"
                        }
                      })
                    ],
                    1
                  )
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
                        staticClass: "btn btn-info",
                        on: { click: _vm.agregarDetalle }
                      },
                      [_vm._v("Agregar Producto")]
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
                    _vm._l(_vm.errorMessages.detalleProductos, function(
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
                          _vm._l(_vm.form.detalleProductos, function(
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
                                        value: item.productox.descripcion,
                                        expression: "item.productox.descripcion"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value: item.productox.descripcion
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item.productox,
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
                                        "detalleProductos." +
                                          index +
                                          ".productox.id_producto"
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
                                _c("td", { staticStyle: { width: "12%" } }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.afectacionx.descripcion,
                                        expression:
                                          "item.afectacionx.descripcion"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value: item.afectacionx.descripcion
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item.afectacionx,
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
                                        "detalleProductos." +
                                          index +
                                          ".afectacionx.id_afectacion"
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
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(item.p_ajuste + "%") +
                                      "\n                  "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticStyle: { width: "5%" } }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.cantidad,
                                        expression: "item.cantidad",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "number", min: "1" },
                                    domProps: { value: item.cantidad },
                                    on: {
                                      change: function($event) {
                                        item.cantidad = Math.max(
                                          Math.min(
                                            Math.round(item.cantidad),
                                            item.productox.cantidad_disponible
                                          ),
                                          1
                                        )
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "cantidad",
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
                                        "detalleProductos." +
                                          index +
                                          ".cantidad"
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
                                _c("td", { staticStyle: { width: "10%" } }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.precio,
                                        expression: "item.precio",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: { value: item.precio },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "precio",
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
                                        "detalleProductos." + index + ".precio"
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
                                        rawName: "v-model.number",
                                        value: item.p_descuento,
                                        expression: "item.p_descuento",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: item.p_ajuste > 0 },
                                    domProps: { value: item.p_descuento },
                                    on: {
                                      change: function($event) {
                                        item.p_descuento = Math.max(
                                          Math.min(
                                            Math.round(item.p_descuento),
                                            50
                                          ),
                                          0
                                        )
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "p_descuento",
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
                                        "detalleProductos." +
                                          index +
                                          ".p_descuento"
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
                                _c("td", { staticStyle: { width: "8%" } }, [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            _vm.calcular_montos(item),
                                            2
                                          )
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td", { staticStyle: { width: "8%" } }, [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            item.mt_ajuste,
                                            2
                                          )
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td", { staticStyle: { width: "8%" } }, [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            item.p_unitario,
                                            2
                                          )
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td", { staticStyle: { width: "8%" } }, [
                                  _c("strong", [
                                    _vm._v(
                                      "C$ " +
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            item.total_sin_iva,
                                            2
                                          )
                                        )
                                    )
                                  ])
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
                          _c("td", { attrs: { colspan: "9" } }, [
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(_vm.errorMessages.error_general, function(
                                message
                              ) {
                                return _c("li", {
                                  key: message,
                                  domProps: { textContent: _vm._s(message) }
                                })
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Subtotal")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.total_subt_sin_iva,
                                      2
                                    )
                                  )
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "7" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("No Doc. Exoneración")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.doc_exoneracion,
                                  expression: "form.doc_exoneracion"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: _vm.form.aplicaIVA },
                              domProps: { value: _vm.form.doc_exoneracion },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "doc_exoneracion",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("label", { staticClass: "check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.aplicaIVA,
                                    expression: "form.aplicaIVA"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: Array.isArray(_vm.form.aplicaIVA)
                                    ? _vm._i(_vm.form.aplicaIVA, null) > -1
                                    : _vm.form.aplicaIVA
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.form.aplicaIVA,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.form,
                                            "aplicaIVA",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.form,
                                            "aplicaIVA",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "aplicaIVA", $$c)
                                    }
                                  }
                                }
                              }),
                              _vm._v(" I.V.A.")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages.doc_exoneracion,
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
                            _c("strong", [
                              _vm._v(
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(_vm.total_impuesto, 2)
                                  )
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "7" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("No. Documento:")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.doc_exoneracion_ir,
                                  expression: "form.doc_exoneracion_ir"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: !_vm.form.aplicaIR },
                              domProps: { value: _vm.form.doc_exoneracion_ir },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "doc_exoneracion_ir",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("label", { staticClass: "check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.aplicaIR,
                                    expression: "form.aplicaIR"
                                  }
                                ],
                                attrs: {
                                  disabled: !(_vm.form.id_tipo === 1),
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.aplicaIR)
                                    ? _vm._i(_vm.form.aplicaIR, null) > -1
                                    : _vm.form.aplicaIR
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.form.aplicaIR,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.form,
                                            "aplicaIR",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.form,
                                            "aplicaIR",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "aplicaIR", $$c)
                                    }
                                  }
                                }
                              }),
                              _vm._v(" Retención")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages.doc_exoneracion_ir,
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
                            _c("strong", [
                              _vm._v(
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.total_retencion,
                                      2
                                    )
                                  )
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "7" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("No. Documento:")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.doc_exoneracion_imi,
                                  expression: "form.doc_exoneracion_imi"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: !_vm.form.aplicaIMI },
                              domProps: { value: _vm.form.doc_exoneracion_imi },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "doc_exoneracion_imi",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("label", { staticClass: "check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.aplicaIMI,
                                    expression: "form.aplicaIMI"
                                  }
                                ],
                                attrs: {
                                  disabled: !(_vm.form.id_tipo === 1),
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.aplicaIMI)
                                    ? _vm._i(_vm.form.aplicaIMI, null) > -1
                                    : _vm.form.aplicaIMI
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.form.aplicaIMI,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.form,
                                            "aplicaIMI",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.form,
                                            "aplicaIMI",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "aplicaIMI", $$c)
                                    }
                                  }
                                }
                              }),
                              _vm._v(" Retención IMI")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages.doc_exoneracion_imi,
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
                            _c("strong", [
                              _vm._v(
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.total_retencion_imi,
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
                          _c("td", { staticClass: "item-footer" }, [
                            _vm._v(" Total Unidades")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "item-footer" }, [
                            _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "2" } }, [
                            _vm._v("Total Descuento | Ajuste")
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.total_descuento,
                                      2
                                    )
                                  )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(_vm.total_ajuste, 2)
                                  )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Total")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.gran_total_cordobas,
                                      2
                                    )
                                  )
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "9" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("Equivalente Dólares")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(
                                "$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(_vm.gran_total, 2)
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
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
                                  options: _vm.vias_pago,
                                  "deselect-label":
                                    "No se puede eliminar este valor",
                                  "track-by": "id_via_pago",
                                  label: "descripcion",
                                  placeholder: "Selecciona un método pago",
                                  searchable: true,
                                  "show-labels": false,
                                  "allow-empty": false
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
                                  options: _vm.monedas,
                                  "deselect-label":
                                    "No se puede eliminar este valor",
                                  "track-by": "id_moneda",
                                  label: "descripcion",
                                  placeholder: "Selecciona un método pago",
                                  searchable: true,
                                  "show-labels": false,
                                  "allow-empty": false
                                },
                                model: {
                                  value: _vm.detalleFormPago.moneda_x,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.detalleFormPago,
                                      "moneda_x",
                                      $$v
                                    )
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
                            _vm._l(_vm.errorMessages.moneda_x, function(
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
                                            options: _vm.bancos,
                                            "deselect-label":
                                              "No se puede eliminar este valor",
                                            "track-by": "id_banco",
                                            label: "descripcion",
                                            placeholder:
                                              "Selecciona un método pago",
                                            searchable: true,
                                            "show-labels": false,
                                            "allow-empty": false
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
                                            expression:
                                              "detalleFormPago.banco_x"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      { staticClass: "error-messages" },
                                      _vm._l(
                                        _vm.errorMessages.moneda_x,
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
                                          _vm.detalleFormPago
                                            .numero_nota_credito
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
                                          _vm.detalleFormPago
                                            .numero_transferencia
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
                      _c("div", { staticClass: "col-sm-6" }, [
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
                            [_vm._v("Agregar Método")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("table", { staticClass: "table table-bordered" }, [
                          _vm._m(6),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm._l(_vm.form.detallePago, function(
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
                                              return _vm.eliminarLineaPago(
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
                                      { staticStyle: { width: "10%" } },
                                      [
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
                                      ]
                                    ),
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
                                              attrs: {
                                                type: "number",
                                                step: "0.01"
                                              },
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
                                                  "detalleProductos." +
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
                                              attrs: {
                                                type: "number",
                                                step: "0.01"
                                              },
                                              domProps: {
                                                value: item.monto_me
                                              },
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
                                                  "detalleProductos." +
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
                                        )
                                      : _vm._e()
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Deuda")]),
                        _vm._v(" "),
                        _c("p", [
                          _c("strong", [
                            _vm._v(
                              "C$ " +
                                _vm._s(
                                  _vm._f("formatMoney")(_vm.total_deuda, 2)
                                )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.mt_deuda, function(message) {
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
                        _c("label", [_vm._v("Diferencia")]),
                        _vm._v(" "),
                        _c("p", [
                          _c("strong", [
                            _vm._v(
                              "C$ " +
                                _vm._s(
                                  _vm._f("formatMoney")(_vm.total_vuelto, 2)
                                )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.pago_vuelto, function(
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
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Diferencia Dólares")]),
                        _vm._v(" "),
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
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.pago_pendiente, function(
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
                        _c("label", [_vm._v("Vuelto Dólares")]),
                        _vm._v(" "),
                        _c("p", [
                          _c("strong", [
                            _vm._v(
                              "$ " +
                                _vm._s(
                                  _vm._f("formatMoney")(_vm.form.pago_vuelto, 2)
                                )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.pago_vuelto, function(
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
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-box-footer text-right" },
                [
                  _c(
                    "router-link",
                    { attrs: { tag: "button", to: { name: "facturas" } } },
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
                        disabled: _vm.btnAction !== "Facturar",
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
      ]),
      _vm._v(" "),
      _c(
        "sweet-modal",
        {
          ref: "modal",
          attrs: {
            "modal-theme": "dark",
            "overlay-theme": "dark",
            title: "Registrar Cliente"
          }
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("div", { staticClass: "col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Tipo Persona")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.formCliente.tipo_persona,
                          expression: "formCliente.tipo_persona",
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
                            _vm.formCliente,
                            "tipo_persona",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Natural")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Jurídico")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.formCliente.tipo_persona === 1
                ? [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Número Cédula")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "#############A",
                              expression: "'#############A'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formCliente.numero_cedula,
                              expression: "formCliente.numero_cedula"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "Número Cédula" },
                          domProps: { value: _vm.formCliente.numero_cedula },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formCliente,
                                "numero_cedula",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.numero_cedula, function(
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
                : [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Número RUC")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "A#############",
                              expression: "'A#############'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formCliente.numero_ruc,
                              expression: "formCliente.numero_ruc"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "Número RUC" },
                          domProps: { value: _vm.formCliente.numero_ruc },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formCliente,
                                "numero_ruc",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.numero_ruc, function(
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
                  ],
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Nombre Completo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formCliente.nombre_comercial,
                        expression: "formCliente.nombre_comercial"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Nombre Completo" },
                    domProps: { value: _vm.formCliente.nombre_comercial },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formCliente,
                          "nombre_comercial",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.nombre_comercial, function(
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
                  _c("label", [_vm._v(" Contacto")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formCliente.contacto,
                        expression: "formCliente.contacto"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Contacto" },
                    domProps: { value: _vm.formCliente.contacto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formCliente,
                          "contacto",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.contacto, function(message) {
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
                  _c("label", [_vm._v(" Dirección")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formCliente.direccion,
                        expression: "formCliente.direccion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Dirección" },
                    domProps: { value: _vm.formCliente.direccion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formCliente,
                          "direccion",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.direccion, function(message) {
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
                  _c("label", [_vm._v(" Teléfono")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formCliente.telefono,
                        expression: "formCliente.telefono"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Teléfono" },
                    domProps: { value: _vm.formCliente.telefono },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formCliente,
                          "telefono",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.telefono, function(message) {
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
                    _c("label", [_vm._v("Departamento")]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticStyle: { background: "white" },
                      attrs: {
                        options: _vm.departamentos,
                        label: "descripcion"
                      },
                      on: {
                        input: function($event) {
                          return _vm.obtenerMunicipios()
                        }
                      },
                      model: {
                        value: _vm.formCliente.departamento,
                        callback: function($$v) {
                          _vm.$set(_vm.formCliente, "departamento", $$v)
                        },
                        expression: "formCliente.departamento"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.departamento, function(message) {
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
                    _c("label", [_vm._v("Municipio")]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticStyle: { background: "white" },
                      attrs: { options: _vm.municipios, label: "descripcion" },
                      model: {
                        value: _vm.formCliente.municipio,
                        callback: function($$v) {
                          _vm.$set(_vm.formCliente, "municipio", $$v)
                        },
                        expression: "formCliente.municipio"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.municipio, function(message) {
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
                    _c("label", [_vm._v("Zona")]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticStyle: { background: "white" },
                      attrs: { options: _vm.zonas, label: "descripcion" },
                      model: {
                        value: _vm.formCliente.zona,
                        callback: function($$v) {
                          _vm.$set(_vm.formCliente, "zona", $$v)
                        },
                        expression: "formCliente.zona"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.zona, function(message) {
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
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Vendedor")]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticStyle: { background: "white" },
                      attrs: {
                        options: _vm.vendedores,
                        label: "nombre_completo"
                      },
                      model: {
                        value: _vm.formCliente.vendedor,
                        callback: function($$v) {
                          _vm.$set(_vm.formCliente, "vendedor", $$v)
                        },
                        expression: "formCliente.vendedor"
                      }
                    }),
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
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Observaciones")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formCliente.observaciones,
                        expression: "formCliente.observaciones"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Observaciones" },
                    domProps: { value: _vm.formCliente.observaciones },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formCliente,
                          "observaciones",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.observaciones, function(message) {
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
              _c("div", { staticClass: "content-box-footer text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    on: { click: _vm.cerrarModal }
                  },
                  [_vm._v("Cancelar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnActionCliente !== "Registrar Cliente",
                      type: "button"
                    },
                    on: { click: _vm.registrarCliente }
                  },
                  [_vm._v(_vm._s(_vm.btnActionCliente))]
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br")
            ],
            2
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br")
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Facturar")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para facturar productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos del Cliente")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de Factura")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una bodega para continuar.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de productos")])])
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
        _c("th", { staticStyle: { "min-width": "300px" } }, [
          _vm._v("Producto")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "120px" } }, [
          _vm._v("Afectación")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("% Ajuste")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "50px" } }, [
          _vm._v("Cantidad")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("P. Lista C$")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Descuento %")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Descuento C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Ajuste C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Precio Unit. C$")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Valor C$")
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
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Moneda")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/app/api/facturas.js":
/*!***************************************!*\
  !*** ./resources/app/api/facturas.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerFacturas: function obtenerFacturas(data, cb, errorCb) {
    axios.post('inventario/facturas/obtener', data).then(function (response) {
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
    axios.post('inventario/facturas/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarRecuperados: function registrarRecuperados(data, cb, errorCb) {
    axios.post('inventario/facturas-recuperado/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarFacturaConsignacion: function registrarFacturaConsignacion(data, cb, errorCb) {
    axios.post('inventario/facturas/consignacion/registrar', data).then(function (response) {
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
    axios.post('inventario/facturas/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevaFacturaAjuste: function nuevaFacturaAjuste(data, cb, errorCb) {
    axios.post('inventario/facturas-ajustes/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarFacturaAjuste: function registrarFacturaAjuste(data, cb, errorCb) {
    axios.post('inventario/facturas-ajustes/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cancelar: function cancelar(data, cb, errorCb) {
    axios.post('inventario/facturas/cancelar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerFactura: function obtenerFactura(data, cb, errorCb) {
    axios.post('inventario/facturas/obtener-factura', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerFacturasCliente: function obtenerFacturasCliente(data, cb, errorCb) {
    axios.post('inventario/facturas/obtener-facturas-cliente', data).then(function (response) {
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

/***/ "./resources/app/components/facturas/RegistrarVentas.vue":
/*!***************************************************************!*\
  !*** ./resources/app/components/facturas/RegistrarVentas.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarVentas_vue_vue_type_template_id_1acfd2ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarVentas.vue?vue&type=template&id=1acfd2ba& */ "./resources/app/components/facturas/RegistrarVentas.vue?vue&type=template&id=1acfd2ba&");
/* harmony import */ var _RegistrarVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarVentas.vue?vue&type=script&lang=js& */ "./resources/app/components/facturas/RegistrarVentas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarVentas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarVentas.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarVentas_vue_vue_type_template_id_1acfd2ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarVentas_vue_vue_type_template_id_1acfd2ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/facturas/RegistrarVentas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/facturas/RegistrarVentas.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/facturas/RegistrarVentas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVentas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVentas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/facturas/RegistrarVentas.vue?vue&type=template&id=1acfd2ba&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/facturas/RegistrarVentas.vue?vue&type=template&id=1acfd2ba& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_template_id_1acfd2ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVentas.vue?vue&type=template&id=1acfd2ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/facturas/RegistrarVentas.vue?vue&type=template&id=1acfd2ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_template_id_1acfd2ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVentas_vue_vue_type_template_id_1acfd2ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);