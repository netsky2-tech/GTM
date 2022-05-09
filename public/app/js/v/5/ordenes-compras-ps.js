(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordenes-compras-ps"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarPS.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/orden_compras_ps */ "./resources/app/api/orden_compras_ps.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      productosBusqueda: {},
      productosBusquedaURL: "/inventario/productos/buscarPS",
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      proveedores: [],
      monedas: [],
      clasificaciones: [],
      detalleForm: {
        descripcion: '',
        cantidad: 1,
        monto_descuento: 0,
        precio: 0,
        subtotal: 0,
        total: 0
      },
      total_cantidadx: 0,
      total_subtotalx: 0,
      total_ivax: 0,
      total_descuentox: 0,
      total_finalx: 0,
      form: {
        observacion: "",
        f_orden_compra: moment(new Date()).format("YYYY-MM-DD"),
        proveedor: "",
        referencia_solicitud: "",
        telefono_proveedor: "",
        email_proveedor: "",
        atencion: "",
        area_proveedor: "",
        iva: 0,
        total: 0,
        porcentaje_iva: 0,
        orden_compra_listado: [],
        orden_compra_moneda: [],
        es_borrador: false
      },
      btnAction: "Actualizar y Solicitar",
      btnActionDraft: "Guardar Borrador",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      this.total_cantidadx = Number(this.form.orden_compra_listado.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0));
      return this.total_cantidadx;
    },
    total_subt: function total_subt() {
      this.total_subtotalx = Number(this.form.orden_compra_listado.reduce(function (carry, item) {
        return carry + Number(Number(item.subtotal).toFixed(2));
      }, 0));
      return this.total_subtotalx;
    },
    total_descuento: function total_descuento() {
      this.total_descuentox = Number(this.form.orden_compra_listado.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad * item.precio).toFixed(2) * Number(item.descuento / 100).toFixed(2));
      }, 0));
      return this.total_descuentox;
    },
    calcular_impuesto: function calcular_impuesto() {
      this.form.iva = Number((Number(this.total_subtotalx - this.total_descuentox) * Number(this.form.porcentaje_iva / 100)).toFixed(2));
      this.total_ivax = this.form.iva;
      return this.form.iva;
    },
    gran_total: function gran_total() {
      this.form.total = Number(Number(this.total_subtotalx - this.total_descuentox).toFixed(2));
      this.total_finalx = this.form.total;
      return Number(this.total_finalx.toFixed(2)) + Number(this.total_ivax);
    }
  },
  methods: {
    cambiarTipoPago: function cambiarTipoPago() {
      var self = this;

      if (self.form.id_condicion_pago === 1) {
        self.form.plazo_credito = 0;
      } else {
        self.form.plazo_credito = 8;
      }
    },
    obtenerOrdenCompra: function obtenerOrdenCompra() {
      var _this = this;

      var self = this;
      _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerOrdenCompra({
        id_orden_servicio: this.$route.params.id_orden_servicio,
        cargar_dependencias: true
      }, function (data) {
        self.proveedores = data.proveedores;
        self.monedas = data.monedas;
        self.clasificaciones = data.clasificaciones;
        self.form = data.orden;

        if (self.form.estado !== 99) {
          alertify.error("La solicitud ya no puede ser actualizada", 5);

          _this.$router.push({
            name: "listado-ordenes-compras-ps"
          });
        }
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2));
      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.f_orden_compra = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var _this2 = this;

      var self = this;

      if (this.detalleForm.descripcion) {
        if (this.detalleForm.cantidad > 0 && this.detalleForm.precio > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.orden_compra_listado) {
            self.form.orden_compra_listado.forEach(function (productox, key) {
              //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
              if (self.detalleForm.descripcion === productox.descripcion) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            this.form.orden_compra_listado.push({
              descripcion: this.detalleForm.descripcion,
              servicio_clasificacion: this.detalleForm.clasificacionx,
              cantidad: this.detalleForm.cantidad,
              precio: this.detalleForm.precio,
              descuento: 0,
              monto_descuento: Number(0),
              subtotal: 0,
              total: 0
            });
            this.detalleForm.descripcion = '';
            this.detalleForm.cantidad = 0;
            this.detalleForm.precio = 0;
            this.detalleForm.subtotal = 0;
            this.detalleForm.monto_descuento = 0;
            this.detalleForm.descuento = 0;
            this.detalleForm.total = 0;
          } else {
            this.$swal.fire({
              title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
              text: "También se sobreescribirá el costo unitario",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, confirmar',
              cancelButtonText: 'Cancelar'
            }).then(function (result) {
              if (result.value) {
                self.form.orden_compra_listado[keyx].cantidad = Number(self.form.orden_compra_listado[keyx].cantidad) + self.detalleForm.cantidad;
                self.form.orden_compra_listado[keyx].precio = self.detalleForm.precio;
                _this2.detalleForm.descripcion = '';
                _this2.detalleForm.cantidad = 0;
                _this2.detalleForm.precio = 0;
                _this2.detalleForm.subtotal = 0;
                _this2.detalleForm.monto_descuento = 0;
                _this2.detalleForm.descuento = 0;
                _this2.detalleForm.total = 0;
              }
            });
          }
        } else {
          alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.orden_compra_listado.length >= 1) {
        this.form.orden_compra_listado.splice(index, 1);
      } else {
        this.form.orden_compra_listado = [];
      }
    },
    actualizar: function actualizar() {
      var _this3 = this;

      var self = this;

      if (self.form.estado === 99) {
        self.btnAction = "Registrando, espere....";

        if (self.form.es_borrador === false) {
          self.$swal.fire({
            title: 'Esta seguro de guardar y emitir la orden de compra?',
            text: "Esta acción no se puede deshacer",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
                if (self.form.es_borrador) {
                  alertify.success("El borrador de la solicitud fue actualizado correctamente", 5);
                } else {
                  alertify.success("La solicitud fue actualizada y SOLICITADA correctamente", 5);
                }

                _this3.$router.push({
                  name: "listado-ordenes-compras-ps"
                });
              }, function (err) {
                self.errorMessages = err;
                self.btnAction = "Actualizar y Solicitar";
                self.btnActionDraft = "Guardar Borrador";
              });
            }
          });
        } else {
          _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
            if (self.form.es_borrador) {
              alertify.success("El borrador de la solicitud fue actualizado correctamente", 5);
            } else {
              alertify.success("La solicitud fue actualizada y SOLICITADA correctamente", 5);
            }

            _this3.$router.push({
              name: "listado-ordenes-compras-ps"
            });
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Actualizar y Solicitar";
            self.btnActionDraft = "Guardar Borrador";
          });
        }
      } else {
        alertify.error("La solicitud ya no puede ser actualizada", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerOrdenCompra();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoPS.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/orden_compras_ps */ "./resources/app/api/orden_compras_ps.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      filter: {
        page: 1,
        limit: 5,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: "atencion",
          value: ""
        }
      },
      ordenes_compras: [],
      total: 0
    };
  },
  methods: {
    mostrarProductos: function mostrarProductos(key) {
      if (this.ordenes_compras[key].mostrar) {
        this.ordenes_compras[key].mostrar = 0;
      } else {
        this.ordenes_compras[key].mostrar = 1;
      }
    },
    obtenerOrdenesCompra: function obtenerOrdenesCompra() {
      var self = this;
      _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerOrdenesCompra(self.filter, function (data) {
        data.rows.forEach(function (ordenes_compras, key) {
          data.rows[key].mostrar = 0;
        });
        self.ordenes_compras = data.rows;
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
      this.obtenerOrdenesCompra();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerOrdenesCompra();
    }
  },
  mounted: function mounted() {
    this.obtenerOrdenesCompra();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/MostrarPS.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/orden_compras_ps */ "./resources/app/api/orden_compras_ps.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      format: "dd-MM-yyyy",
      descargando: false,
      form: {
        orden_compra_listado: [],
        orden_compra_proveedor: [],
        total: 0,
        sub_total: 0
      },
      btnAction: "Registrar",
      errorMessages: [],
      logo_empresa: ''
    };
  },
  methods: {
    sub_total: function sub_total(itemX) {
      if (this.form.estado > 2) {
        itemX.subtotal = Number((Number(itemX.precio_facturado) * Number(itemX.cantidad_facturado)).toFixed(2));
      } else {
        itemX.subtotal = Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2));
      }

      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    downloadItem: function downloadItem(url) {
      var _this = this;

      if (!this.descargando) {
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteOrdenCompra-' + _this.form.id_orden_servicio + '.pdf';
          link.click();
          _this.descargando = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          this.descargando = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    regresar: function regresar() {
      this.$router.push({
        name: "listado-ordenes-compras-ps"
      });
    },
    obtenerOrdenCompra: function obtenerOrdenCompra() {
      var self = this;
      _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerOrdenCompra({
        id_orden_servicio: this.$route.params.id_orden_servicio,
        cargar_dependencias: false
      }, function (data) {
        self.form = data.orden;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    },
    nueva: function nueva() {
      var self = this;
      _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].nueva({}, function (data) {
        self.logo_empresa = data.logo_empresa;
      }, function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    total_cantidad: function total_cantidad() {
      var _this2 = this;

      return this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this2.form.estado > 2) {
          return carry + Number(item.cantidad_facturado);
        } else {
          return carry + Number(item.cantidad);
        }
      }, 0);
    },
    total_subt: function total_subt() {
      var _this3 = this;

      return this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this3.form.estado > 2) {
          return carry + Number(Number(item.cantidad_facturado * item.precio_facturado).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio).toFixed(2));
        }
      }, 0);
    },
    total_descuento: function total_descuento() {
      var _this4 = this;

      return this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this4.form.estado > 2) {
          return carry + Number(Number(item.cantidad_facturado * item.precio_facturado).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        }
      }, 0);
    },
    gran_total: function gran_total() {
      var _this5 = this;

      this.form.total = this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this5.form.estado > 2) {
          return carry + Number(Number(item.cantidad_facturado * item.precio_facturado).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        }
      }, 0);
      return this.form.total;
    }
  },
  mounted: function mounted() {
    this.obtenerOrdenCompra();
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarPS.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/orden_compras_ps */ "./resources/app/api/orden_compras_ps.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      proveedores: [],
      monedas: [],
      clasificaciones: [],
      detalleForm: {
        productox: '',
        cantidad: 1,
        monto_descuento: 0,
        precio: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        observacion: "",
        f_orden_servicio: moment(new Date()).format("YYYY-MM-DD"),
        proveedor: "",
        referencia_solicitud: "",
        telefono_proveedor: "",
        email_proveedor: "",
        atencion: "",
        area_proveedor: "",
        moneda: [],
        direccion: "",
        condicion_envio: "Envío",
        nota: "",
        tiempo_entrega: 15,
        porcentaje_iva: 15,
        id_condicion_pago: 1,
        plazo_credito: 0,
        id_medio_pago: 4,
        tipo_compra: 1,
        iva: 0,
        total: 0,
        detalleProductos: [],
        es_borrador: false
      },
      btnAction: "Registrar",
      btnActionDraft: "Guardar Borrador",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    total_descuento: function total_descuento() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(Number(item.monto_descuento).toFixed(2));
      }, 0);
    },
    calcular_impuesto: function calcular_impuesto() {
      var _this = this;

      this.form.iva = this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(Number(item.total * Number(_this.form.porcentaje_iva / 100)).toFixed(2));
      }, 0);
      return Number(this.form.iva.toFixed(2));
    },
    gran_total: function gran_total() {
      this.form.total = this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
      return Number((this.form.total + this.form.iva).toFixed(2));
    }
  },
  methods: {
    cambiarTipoPago: function cambiarTipoPago() {
      var self = this;

      if (self.form.id_condicion_pago === 1) {
        self.form.plazo_credito = 0;
      } else {
        self.form.plazo_credito = 8;
      }
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2));
      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.f_orden_servicio = moment(date).format("YYYY-MM-DD"); //
    },
    cargar_detalles_proveedor: function cargar_detalles_proveedor() {
      var self = this;
      if (self.form.proveedor) self.form.telefono_proveedor = self.form.proveedor.telefono_contacto;
      self.form.email_proveedor = self.form.proveedor.correo_contacto;
      self.form.atencion = self.form.proveedor.contacto_proveedor;
      self.form.numero_ruc_proveedor = self.form.proveedor.numero_ruc;
      self.form.direccion_proveedor = self.form.proveedor.direccion;
    },
    agregarDetalle: function agregarDetalle() {
      var _this2 = this;

      var self = this;

      if (this.detalleForm.descripcion) {
        if (this.detalleForm.cantidad > 0 && this.detalleForm.precio > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.detalleProductos) {
            self.form.detalleProductos.forEach(function (productox, key) {
              //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
              if (self.detalleForm.descripcion === productox.descripcion) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            this.form.detalleProductos.push({
              descripcion: this.detalleForm.descripcion,
              cantidad: this.detalleForm.cantidad,
              precio: this.detalleForm.precio,
              clasificacionx: this.detalleForm.clasificacionx,
              descuento: 0,
              monto_descuento: Number(0),
              subtotal: 0,
              total: 0
            });
            this.detalleForm.descripcion = '';
            this.detalleForm.clasificacionx = '';
            this.detalleForm.cantidad = 0;
            this.detalleForm.precio = 0;
            this.detalleForm.subtotal = 0;
            this.detalleForm.monto_descuento = 0;
            this.detalleForm.descuento = 0;
            this.detalleForm.total = 0;
          } else {
            this.$swal.fire({
              title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
              text: "También se sobreescribirá el costo unitario",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, confirmar',
              cancelButtonText: 'Cancelar'
            }).then(function (result) {
              if (result.value) {
                self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].cantidad) + self.detalleForm.cantidad;
                self.form.detalleProductos[keyx].precio = self.detalleForm.precio;
                _this2.detalleForm.descripcion = '';
                _this2.detalleForm.cantidad = 0;
                _this2.detalleForm.precio = 0;
                _this2.detalleForm.subtotal = 0;
                _this2.detalleForm.monto_descuento = 0;
                _this2.detalleForm.descuento = 0;
                _this2.detalleForm.total = 0;
              }
            });
          }
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
    nueva: function nueva() {
      var self = this;
      _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].nueva({}, function (data) {
        self.monedas = data.monedas;
        self.form.moneda = self.monedas[0];
        self.clasificaciones = data.clasificaciones;
        self.proveedores = data.proveedores;
        self.form.proveedor = self.proveedores[0];
        self.cargar_detalles_proveedor();
      }, function (err) {
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this3 = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.btnActionDraft = "Guardando, espere....";

      if (self.form.es_borrador === false) {
        self.$swal.fire({
          title: 'Esta seguro de guardar y emitir la orden de compra?',
          text: "Esta acción no se puede deshacer",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, confirmar',
          cancelButtonText: 'Cancelar'
        }).then(function (result) {
          if (result.value) {
            _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
              alertify.success("Orden de Compra emitida correctamente", 5);

              _this3.$router.push({
                name: "listado-ordenes-compras-ps"
              });
            }, function (err) {
              self.errorMessages = err;
              self.btnAction = "Registrar";
              self.btnActionDraft = "Guardar Borrador";
            });
          } else {
            self.btnAction = "Registrar";
            self.btnActionDraft = "Guardar Borrador";
          }
        });
      } else {
        _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
          alertify.success("Orden de Compra emitida correctamente", 5);

          _this3.$router.push({
            name: "listado-ordenes-compras-ps"
          });
        }, function (err) {
          self.errorMessages = err;
          self.btnAction = "Registrar";
          self.btnActionDraft = "Guardar Borrador";
        });
      }
    }
  },
  mounted: function mounted() {
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/orden_compras_ps */ "./resources/app/api/orden_compras_ps.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      areas: [],
      proveedores: [],
      productos: [],
      trabajadores: [],
      clasificaciones: [],
      monedas: [],
      bodegas: [],

      /*detalleForm:{
      	productox: {},
      	proveedorx: "",
      	cantidad: 1,
      	monto_descuento:0,
      	precio: 0,
      	subtotal: 0,
      	total: 0,
      	f_necesidad_producto: moment(new Date()).format("YYYY-MM-DD"),
      },*/
      form: {
        numero_factura: "",
        observacion: "",
        f_orden_compra: moment(new Date()).format("YYYY-MM-DD"),
        proveedor: "",
        referencia_solicitud: "",
        telefono_proveedor: "",
        email_proveedor: "",
        atencion: "",
        area_proveedor: "",
        total: 0,
        iva: 0,
        porcentaje_iva: 0,
        orden_compra_listado: [],
        orden_compra_moneda: [],
        es_borrador: false
      },
      btnAction: "Confirmar",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      var _this = this;

      return this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this.form.estado > 2) {
          return carry + Number(item.cantidad_facturado);
        } else {
          return carry + Number(item.cantidad);
        }
      }, 0);
    },
    total_subt: function total_subt() {
      var _this2 = this;

      return this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this2.form.estado > 2) {
          return carry + Number(Number(item.cantidad_facturado * item.precio_facturado).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio).toFixed(2));
        }
      }, 0);
    },
    total_descuento: function total_descuento() {
      var _this3 = this;

      return this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this3.form.estado > 2) {
          return carry + Number(Number(item.cantidad_facturado * item.precio_facturado).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        }
      }, 0);
    },
    calcular_impuesto: function calcular_impuesto() {
      var _this4 = this;

      this.form.iva = Number(this.form.orden_compra_listado.reduce(function (carry, item) {
        //return(carry + Number(Number(item.subtotal*0.15).toFixed(2)));
        if (_this4.form.estado > 2) {
          return carry + Number(Number(item.cantidad_facturado * item.precio_facturado).toFixed(2) * (Number(1 - item.descuento / 100) * Number(_this4.form.porcentaje_iva / 100)).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio).toFixed(2) * Number(_this4.form.porcentaje_iva / 100) * Number(1 - item.descuento / 100).toFixed(2));
        }
      }, 0).toFixed(2));
      return Number(this.form.iva.toFixed(2));
    },
    gran_total: function gran_total() {
      var _this5 = this;

      this.form.total = Number(this.form.orden_compra_listado.reduce(function (carry, item) {
        if (_this5.form.estado > 2) {
          return carry + Number(Number(item.cantidad_facturado * item.precio_facturado).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        }
      }, 0).toFixed(2));
      return Number(this.form.total + this.form.iva);
    }
  },
  methods: {
    cambiarTipoPago: function cambiarTipoPago() {
      var self = this;

      if (self.form.id_condicion_pago === 1) {
        self.form.plazo_credito = 0;
      } else {
        self.form.plazo_credito = 8;
      }
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.f_orden_compra = moment(date).format("YYYY-MM-DD"); //
    },
    confirmar: function confirmar(estadox) {
      var _this6 = this;

      var titulox = '';

      if (estadox === 0) {
        titulox = 'Esta seguro de rechazar ésta orden de compra?';
      } else if (estadox === 2) {
        titulox = 'Esta seguro de cambiar el estado a Ordenado?';
      } else if (estadox === 3) {
        titulox = 'Esta seguro de cambiar el estado a Facturado?';
      } else if (estadox === 4) {
        titulox = 'Esta seguro de cambiar el estado a Enviado?';
      }

      this.$swal.fire({
        title: titulox,
        text: "Revise bien los datos, esta acción no se puede deshacer.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this6.cambiarEstado(estadox);
        }
      });
    },
    seleccionarProducto: function seleccionarProducto(e) {
      var productoP = e.target.value;
      var self = this;
      self.detalleForm.productox = productoP;
      if (self.detalleForm.productox) self.detalleForm.precio = self.detalleForm.productox.costo_estandar;
    },
    obtenerOrdenCompra: function obtenerOrdenCompra() {
      var _this7 = this;

      var self = this;
      _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerOrdenCompra({
        id_orden_servicio: this.$route.params.id_orden_servicio,
        cargar_dependencias: true
      }, function (data) {
        self.proveedores = data.proveedores;
        self.form = data.orden;
        self.monedas = data.monedas;
        self.clasificaciones = data.clasificaciones; //self.bodegas = data.bodegas;

        if (self.form.estado === 99 || self.form.estado === 4 || self.form.estado === 0) {
          alertify.error("La orden ya no puede ser actualizada", 5);

          _this7.$router.push({
            name: "listado-ordenes-compras-ps"
          });
        }
      });
    },
    sub_total: function sub_total(itemX) {
      if (this.form.estado > 2) {
        itemX.subtotal = Number((Number(itemX.precio_facturado) * Number(itemX.cantidad_facturado)).toFixed(2));
      } else {
        itemX.subtotal = Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2));
      }

      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.orden_compra_listado.length >= 1) {
        this.form.orden_compra_listado.splice(index, 1);
      } else {
        this.form.orden_compra_listado = [];
      }
    },
    cambiarEstado: function cambiarEstado(estadox) {
      var _this8 = this;

      var self = this;

      if (self.form.estado === 1 && (estadox === 2 || estadox === 0) || self.form.estado === 2 && (estadox === 3 || estadox === 0) || self.form.estado === 3 && (estadox === 4 || estadox === 0)) {
        self.btnAction = "Registrando, espere....";
        _api_orden_compras_ps__WEBPACK_IMPORTED_MODULE_0__["default"].cambiarEstado({
          id_orden_servicio: this.$route.params.id_orden_servicio,
          productos: self.form.orden_compra_listado,
          total: Number(self.form.total.toFixed(2)),
          porcentaje_iva: Number(self.form.porcentaje_iva),
          plazo_credito: Number(self.form.plazo_credito),
          id_condicion_pago: Number(self.form.id_condicion_pago),
          iva: Number(self.form.iva.toFixed(2)),
          numero_factura: self.form.numero_factura,
          estado: estadox
        }, function (data) {
          if (estadox === 2) {
            alertify.success("El estado de la orden de compra ha cambiado a Ordenado", 5);
          } else if (estadox === 3) {
            alertify.success("El estado de la orden de compra ha cambiado a Facturado", 5);
          } else if (estadox === 4) {
            alertify.success("El estado de la orden de compra ha cambiado a Enviado", 5);
          }

          _this8.$router.push({
            name: "listado-ordenes-compras-ps"
            /*params: { id_orden_servicio: self.form.id_orden_servicio }*/

          });
        }, function (err) {
          self.errorMessages = err;
          self.btnAction = "Confirmar";
        });
      } else {
        alertify.error("La orden de compra no puede ser actualizada", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerOrdenCompra();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-0a668504] {\n  min-width: 120px;\n}\n.table a[data-v-0a668504] {\n  color: #2675dc;\n}\n.table .table-number[data-v-0a668504] {\n  width: 60px;\n}\n.table .action[data-v-0a668504] {\n  width: 180px;\n}\n.table .detail-link[data-v-0a668504] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-0a668504] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-0a668504]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.logo_previa{\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    margin: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=template&id=0d99cfd0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarPS.vue?vue&type=template&id=0d99cfd0& ***!
  \************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(" Tipo Orden Compra:")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.tipo_compra,
                        expression: "form.tipo_compra",
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
                          "tipo_compra",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Nacional")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Internacional")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.tipo_compra, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "nombre_comercial",
                      options: _vm.proveedores
                    },
                    model: {
                      value: _vm.form.orden_compra_proveedor,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "orden_compra_proveedor", $$v)
                      },
                      expression: "form.orden_compra_proveedor"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_compra_proveedor, function(
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
                    _vm._v("RUC Proveedor")
                  ]),
                  _vm._v(" "),
                  _vm.form.orden_compra_proveedor
                    ? [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.orden_compra_proveedor.numero_ruc,
                              expression:
                                "form.orden_compra_proveedor.numero_ruc"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: {
                            value: _vm.form.orden_compra_proveedor.numero_ruc
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form.orden_compra_proveedor,
                                "numero_ruc",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Moneda")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: { label: "descripcion", options: _vm.monedas },
                    model: {
                      value: _vm.form.orden_compra_moneda,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "orden_compra_moneda", $$v)
                      },
                      expression: "form.orden_compra_moneda"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.id_moneda, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Atención:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.atencion,
                      expression: "form.atencion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.atencion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "atencion", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.atencion, function(message) {
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
                  _vm._v("Email Proveedor:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email_proveedor,
                      expression: "form.email_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.email_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email_proveedor", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.email_proveedor, function(message) {
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
                  _vm._v("Télefono Proveedor:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.telefono_proveedor,
                      expression: "form.telefono_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.telefono_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "telefono_proveedor",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.telefono_proveedor, function(
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Referencia:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.referencia_solicitud,
                      expression: "form.referencia_solicitud"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.referencia_solicitud },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "referencia_solicitud",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.referencia_solicitud, function(
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
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Area / Departamento:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.area_proveedor,
                      expression: "form.area_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.area_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "area_proveedor", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.area_proveedor, function(message) {
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
                  _vm._v("Solicitud de Compra:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.id_solicitud_compra,
                      expression: "form.id_solicitud_compra"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.form.id_solicitud_compra },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "id_solicitud_compra",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_solicitud_compra, function(
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
                    _vm._v("Fecha Orden Compra")
                  ]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      format: _vm.format,
                      language: _vm.es,
                      value: new Date()
                    },
                    on: { selected: _vm.onDateSelect }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.f_orden_compra, function(message) {
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
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Dirección")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.direccion,
                      expression: "form.direccion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.direccion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "direccion", $event.target.value)
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v(" Tipo:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.id_condicion_pago,
                        expression: "form.id_condicion_pago",
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
                            "id_condicion_pago",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.cambiarTipoPago
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Contado")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Crédito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Consignación")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_condicion_pago, function(
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
                _c("label", { attrs: { for: "" } }, [_vm._v(" Días Crédito")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.plazo_credito,
                        expression: "form.plazo_credito",
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
                          "plazo_credito",
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
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago !== 1,
                          value: "0"
                        }
                      },
                      [_vm._v("Contado")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "8"
                        }
                      },
                      [_vm._v("Trámite de Cheque (8 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "15"
                        }
                      },
                      [_vm._v("Crédito (15 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "30"
                        }
                      },
                      [_vm._v("Crédito (30 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "45"
                        }
                      },
                      [_vm._v("Crédito (45 días)")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.plazo_credito, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v(" Tipo:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.id_medio_pago,
                        expression: "form.id_medio_pago",
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
                          "id_medio_pago",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Crédito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Transferencia")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("Cheque")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "4" } }, [
                      _vm._v("Minuta Depósito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "5" } }, [
                      _vm._v("Efectivo")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "6" } }, [_vm._v("Tarjeta")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_medio_pago, function(message) {
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
                  _vm._v("Condición envío")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.condicion_envio,
                        expression: "form.condicion_envio",
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
                          "condicion_envio",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "Envío" } }, [
                      _vm._v("Envío")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Retiro en tienda" } }, [
                      _vm._v(" Retiro en tienda")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.condicion_envio, function(message) {
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
                  _vm._v("Tiempo de Entrega")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.tiempo_entrega,
                      expression: "form.tiempo_entrega",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.tiempo_entrega },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "tiempo_entrega",
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
                  _vm._l(_vm.errorMessages.tiempo_entrega, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Nota")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.nota,
                      expression: "form.nota"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.nota },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "nota", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.nota, function(message) {
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
          !_vm.form.orden_compra_proveedor
            ? _c("div", [_vm._m(2), _vm._v(" "), _c("hr")])
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Clasificación Compra")
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "descripcion",
                      options: _vm.clasificaciones
                    },
                    model: {
                      value: _vm.detalleForm.clasificacionx,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "clasificacionx", $$v)
                      },
                      expression: "detalleForm.clasificacionx"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Descripción producto | servicio")
                ]),
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
                  ref: "producto",
                  staticClass: "form-control",
                  attrs: { type: "text" },
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Precio")]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-addon" }, [
                    _vm._v(
                      _vm._s(
                        _vm.form.orden_compra_moneda
                          ? _vm.form.orden_compra_moneda.codigo
                          : ""
                      ) + "\n\t\t\t\t\t\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.precio,
                        expression: "detalleForm.precio",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", min: "1" },
                    domProps: { value: _vm.detalleForm.precio },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "precio",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  })
                ]),
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
                _vm._l(_vm.errorMessages.orden_compra_listado, function(
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
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.orden_compra_listado, function(
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
                          _c(
                            "td",
                            { staticStyle: { width: "12%" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "descripcion",
                                  options: _vm.clasificaciones
                                },
                                model: {
                                  value: item.servicio_clasificacion,
                                  callback: function($$v) {
                                    _vm.$set(
                                      item,
                                      "servicio_clasificacion",
                                      $$v
                                    )
                                  },
                                  expression: "item.servicio_clasificacion"
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
                                      ".servicio_clasificacion.id_clasificacion_compra"
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
                                  "orden_compra_listado." +
                                    index +
                                    ".descripcion"
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
                                  value: item.cantidad,
                                  expression: "item.cantidad",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: item.cantidad },
                              on: {
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
                                  "orden_compra_listado." + index + ".cantidad"
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
                                  value: item.precio,
                                  expression: "item.precio",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
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
                                  "orden_compra_listado." + index + ".precio"
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
                                  value: item.descuento,
                                  expression: "item.descuento",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: item.descuento },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "descuento",
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
                                  "orden_compra_listado." + index + ".descuento"
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
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.orden_compra_moneda
                                    ? _vm.form.orden_compra_moneda.codigo
                                    : ""
                                ) +
                                  " " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.sub_total(item),
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
                    _c("td", { attrs: { colspan: "5" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Subtotal")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          ) +
                            " " +
                            _vm._s(_vm._f("formatMoney")(_vm.total_subt, 2))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "5" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Descuento")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          ) +
                            " " +
                            _vm._s(
                              _vm._f("formatMoney")(_vm.total_descuento, 2)
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "4" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("I.V.A.")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.porcentaje_iva,
                            expression: "form.porcentaje_iva",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { min: "0", max: "99" },
                        domProps: { value: _vm.form.porcentaje_iva },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "porcentaje_iva",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          ) +
                            " " +
                            _vm._s(
                              _vm._f("formatMoney")(_vm.calcular_impuesto, 2)
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      { staticClass: "item-footer", attrs: { colspan: "3" } },
                      [_vm._v(" Total Unidades")]
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "item-footer" }, [
                      _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
                    ]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          ) +
                            " " +
                            _vm._s(_vm._f("formatMoney")(_vm.gran_total, 2))
                        )
                      ])
                    ])
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
                {
                  attrs: {
                    tag: "button",
                    to: { name: "listado-ordenes-compras-ps" }
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
                  staticClass: "btn btn-dark",
                  attrs: {
                    disabled: _vm.btnActionDraft !== "Guardar Borrador",
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      _vm.form.es_borrador = true
                      _vm.actualizar()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.btnActionDraft))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    disabled: _vm.btnAction !== "Actualizar y Solicitar",
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      _vm.form.es_borrador = false
                      _vm.actualizar()
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Actualizar Orden de compra")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para Actualizar Orden de compra")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("DETALLES CONSOLIDADOR")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una proveedor para continuar.")
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
        _c("th", [_vm._v("Clasificación Compra")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción producto | servicio")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio Unitario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descuento")]),
        _vm._v(" "),
        _c("th", [_vm._v("SubTotal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=template&id=0a668504&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoPS.vue?vue&type=template&id=0a668504&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Administrar Ordenes de Compra Artículos y Servicios")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Ordenes de Compra")
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
                  attrs: { to: { name: "pagina-principal-compras" } }
                },
                [_vm._v(" Módulo compras")]
              ),
              _vm._v("> Ordenes de compra Artículos y Servicios")
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
                    to: { name: "registrar-orden-compra-ps" },
                    tag: "button"
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Orden Compra\n        ")
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
                  _vm.obtenerOrdenesCompra()
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
                  _c("option", { attrs: { value: "atencion" } }, [
                    _vm._v("Contacto")
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
                      _vm.obtenerOrdenesCompra()
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
                _vm._l(_vm.ordenes_compras, function(orden, key) {
                  return [
                    _c("tr", { key: orden.id_orden_servicio }, [
                      _c("td", [_vm._v(_vm._s(orden.id_orden_servicio))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            orden.numero_factura ? orden.numero_factura : "N/D"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            orden.orden_compra_proveedor
                              ? orden.orden_compra_proveedor.nombre_comercial
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(orden.f_orden_servicio))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        orden.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Rechazado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        orden.estado === 1
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-blue" }, [
                                _vm._v("Registrado")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        orden.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Ordenado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        orden.estado === 3
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Facturado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        orden.estado === 4
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Enviado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        orden.estado === 5
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Recibido")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        orden.estado === 99
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-grey" }, [
                                _vm._v("Borrador")
                              ])
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
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value:
                                    "Mostrar Detalles de la Orden de Compra",
                                  expression:
                                    "'Mostrar Detalles de la Orden de Compra'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-orden-compra-ps",
                                  params: {
                                    id_orden_servicio: orden.id_orden_servicio
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
                          ),
                          _vm._v(" "),
                          orden.estado === 99
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Actualizar Orden de Compra",
                                        expression:
                                          "'Actualizar Orden de Compra'"
                                      }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "actualizar-orden-compra-ps",
                                        params: {
                                          id_orden_servicio:
                                            orden.id_orden_servicio
                                        }
                                      },
                                      tag: "a"
                                    }
                                  },
                                  [_c("i", { staticClass: "icon-pencil" })]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          [1, 2, 3].indexOf(Number(orden.estado)) >= 0
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          orden.estado === 1
                                            ? "Cambiar estado a Ordenado"
                                            : orden.estado === 2
                                            ? "Cambiar estado a Facturado"
                                            : orden.estado === 3
                                            ? "Cambiar estado a Enviado"
                                            : "Revisar Estado de Orden de Compra",
                                        expression:
                                          "orden.estado===1?'Cambiar estado a Ordenado': orden.estado===2?'Cambiar estado a Facturado': orden.estado===3?'Cambiar estado a Enviado':'Revisar Estado de Orden de Compra'"
                                      }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "revisar-orden-compra-ps",
                                        params: {
                                          id_orden_servicio:
                                            orden.id_orden_servicio
                                        }
                                      },
                                      tag: "a"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-check-circle",
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    orden.mostrar
                      ? _c("tr", [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "9" } }, [
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
                                  _vm._l(orden.orden_compra_listado, function(
                                    productosDetalle
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        key:
                                          productosDetalle.id_orden_servicio_detalle
                                      },
                                      [
                                        _c("td", { attrs: { colspan: "3" } }, [
                                          _vm._v(
                                            _vm._s(productosDetalle.descripcion)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(productosDetalle.cantidad)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(productosDetalle.precio)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(productosDetalle.descuento)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(productosDetalle.subtotal)
                                          )
                                        ])
                                      ]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "5" } }),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Subtotal")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("strong", [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                orden.subtotal,
                                                2
                                              )
                                            )
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "5" } }),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Descuento")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("strong", [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                orden.total_descuento,
                                                2
                                              )
                                            )
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "5" } }),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("I.V.A.")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("strong", [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                orden.total_descuento,
                                                2
                                              )
                                            )
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "item-footer",
                                        attrs: { colspan: "2" }
                                      },
                                      [_vm._v(" Total Unidades")]
                                    ),
                                    _vm._v(" "),
                                    _c("td"),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "item-footer" }, [
                                      _c("strong", [
                                        _vm._v(_vm._s(orden.tot_unidades))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td"),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Total")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("strong", [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                orden.total,
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
                          ]),
                          _vm._v(" "),
                          _c("td")
                        ])
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                !_vm.ordenes_compras.length
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "text-center",
                          attrs: { colspan: "11" }
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
            items: _vm.ordenes_compras,
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
        _c("th", [_vm._v("No.OC")]),
        _vm._v(" "),
        _c("th", [_vm._v("No. Factura Proveedor")]),
        _vm._v(" "),
        _c("th", [_vm._v("Proveedor")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
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
        _c("th", { attrs: { colspan: "3" } }, [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio de compra")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descuento %")]),
        _vm._v(" "),
        _c("th", [_vm._v("Subtotal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=template&id=66adf5f6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/MostrarPS.vue?vue&type=template&id=66adf5f6& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "panel" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _c("span", { staticClass: "panel-title" }, [
            _vm._v("Orden de Compra No. " + _vm._s(_vm.form.id_orden_servicio))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btn-group" }, [
            _c(
              "a",
              {
                staticStyle: { "margin-right": "10px" },
                on: { click: _vm.regresar }
              },
              [
                _c("i", { staticClass: "fa fa-arrow-left" }),
                _vm._v(" Regresar")
              ]
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
                      "compras/ordenes-ps/reporte/" + _vm.form.id_orden_servicio
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
          { staticClass: "form-wizard-nav" },
          [
            _vm.form.estado === 0
              ? [
                  _c("div", { staticClass: "step complete" }, [
                    _vm._v("Rechazado")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Borrador")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Registrado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Ordenado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.estado === 99
              ? [
                  _c("div", { staticClass: "step complete" }, [
                    _vm._v("Borrador")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Registrado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Ordenado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.estado === 1
              ? [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Ordenado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.estado === 2
              ? [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.estado === 3
              ? [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.estado === 4
              ? [
                  _vm._m(6),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.estado === 5
              ? [
                  _vm._m(10),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _vm._m(12),
                  _vm._v(" "),
                  _vm._m(13),
                  _vm._v(" "),
                  _vm._m(14)
                ]
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "document" }, [
            _c("div", { staticClass: "document-heading" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col col-12 text-center" }, [
                  _c(
                    "div",
                    { staticClass: "company-name" },
                    [
                      [
                        _c("img", {
                          staticClass: "logo_previa",
                          attrs: { src: _vm.logo_empresa, alt: "IMG" }
                        })
                      ],
                      _vm._v("LUBRICANTES DE NICARAGUA, S. A.")
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "company-address" }, [
                    _vm._v(
                      "De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "company-address" }, [
                    _c("strong", [
                      _vm._v(
                        "Orden de Compra No. " +
                          _vm._s(_vm.form.id_orden_servicio)
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
                  _c(
                    "table",
                    { staticClass: "document-summary-left table-striped" },
                    [
                      _c("tbody", [
                        _vm._m(15),
                        _vm._v(" "),
                        _c(
                          "tr",
                          [
                            _vm.form.orden_compra_proveedor
                              ? [
                                  _vm._m(16),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.form.orden_compra_proveedor
                                          .nombre_comercial
                                      )
                                    )
                                  ])
                                ]
                              : [_c("span", [_vm._v("N/A")])]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "tr",
                          [
                            _vm.form.orden_compra_proveedor
                              ? [
                                  _vm._m(17),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.form.orden_compra_proveedor
                                          .numero_ruc
                                      )
                                    )
                                  ])
                                ]
                              : [_c("span", [_vm._v("N/A")])]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(18),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.form.atencion))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(19),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.form.email))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(20),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.form.referencia_solicitud))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(21),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.form.area_proveedor))])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col col-6" }, [
                  _c(
                    "table",
                    { staticClass: "document-summary-left table-striped" },
                    [
                      _c(
                        "tbody",
                        [
                          _vm._m(22),
                          _vm._v(" "),
                          _vm.form.id_solicitud_compra
                            ? [
                                _c("tr", [
                                  _vm._m(23),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        "SC #0000" +
                                          _vm.form.id_solicitud_compra
                                      )
                                    )
                                  ])
                                ])
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._m(24),
                          _vm._v(" "),
                          _vm._m(25),
                          _vm._v(" "),
                          _c("tr", [
                            _vm._m(26),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.formatDate(_vm.form.f_orden_compra))
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Moneda:")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.orden_compra_moneda
                                    ? _vm.form.orden_compra_moneda.descripcion
                                    : ""
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _vm._m(27),
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
                                      [_vm._v("Rechazada")]
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
                                      [_vm._v("Ordenado")]
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
                                      [_vm._v("Facturado")]
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
                                      [_vm._v("Enviado")]
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
                                      [_vm._v("Recibido")]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.estado === 99
                                ? _c("div", [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-grey",
                                        staticStyle: { "font-size": "100%" }
                                      },
                                      [_vm._v("Borrrador")]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ])
                        ],
                        2
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "document-body" }, [
              _c("table", { staticClass: "document-table" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("Descripción")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "align-center" }, [
                      _vm._v("Cantidad")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "align-center" }, [
                      _vm._v(
                        "Precio unitario " +
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "align-center" }, [
                      _vm._v("Descuento %")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "align-center" }, [_vm._v("Total")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.orden_compra_listado, function(item) {
                      return [
                        _c(
                          "tr",
                          { key: item.id_orden_servicio_producto },
                          [
                            _c("td", { staticClass: "width-2" }, [
                              _c("pre", [_vm._v(_vm._s(item.descripcion))])
                            ]),
                            _vm._v(" "),
                            _vm.form.estado > 2
                              ? [
                                  _c(
                                    "td",
                                    { staticClass: "width-1 align-center" },
                                    [_vm._v(_vm._s(item.cantidad_facturado))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "width-2 align-right" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatMoney")(
                                            item.precio_facturado,
                                            2
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ]
                              : [
                                  _c(
                                    "td",
                                    { staticClass: "width-1 align-center" },
                                    [_vm._v(_vm._s(item.cantidad))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "width-2 align-right" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatMoney")(item.precio, 2)
                                        )
                                      )
                                    ]
                                  )
                                ],
                            _vm._v(" "),
                            _c("td", { staticClass: "width-2 align-right" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatMoney")(item.descuento, 2))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "width-2 align-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatMoney")(_vm.sub_total(item), 2)
                                )
                              )
                            ])
                          ],
                          2
                        )
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
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "Total Antes de descuento " +
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-right" }, [
                      _c("strong", [
                        _vm._v(_vm._s(_vm._f("formatMoney")(_vm.total_subt, 2)))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "2" } }),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "Descuento " +
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(_vm._f("formatMoney")(_vm.total_descuento, 2))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "2" } }),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "Impuesto " +
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm._f("formatMoney")(_vm.form.iva, 2)))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "2" } }),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _c("strong", [
                        _vm._v(
                          "Total " +
                            _vm._s(
                              _vm.form.orden_compra_moneda
                                ? _vm.form.orden_compra_moneda.codigo
                                : ""
                            ) +
                            " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-right" }, [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMoney")(
                              Number(_vm.form.total) + Number(_vm.form.iva),
                              2
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col col-12" }, [
                _c(
                  "table",
                  { staticClass: "document-summary-left table-striped" },
                  [
                    _c("tbody", [
                      _vm._m(28),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(29),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.form.direccion))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tr",
                        [
                          _vm._m(30),
                          _vm._v(" "),
                          _vm.form.id_condicion_pago === 1
                            ? [_c("td", [_vm._v(_vm._s("Contado"))])]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.id_condicion_pago === 2
                            ? [_c("td", [_vm._v(_vm._s("Crédito"))])]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.id_condicion_pago === 3
                            ? [_c("td", [_vm._v(_vm._s("Consignación"))])]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "tr",
                        [
                          _vm._m(31),
                          _vm._v(" "),
                          _vm.form.id_medio_pago === 1
                            ? [_c("td", [_vm._v(_vm._s("Crédito"))])]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.id_medio_pago === 2
                            ? [_c("td", [_vm._v(_vm._s("Transferencia"))])]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.id_medio_pago === 3
                            ? [_c("td", [_vm._v(_vm._s("Cheque"))])]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.id_medio_pago === 4
                            ? [_c("td", [_vm._v(_vm._s("Minuta Depósito"))])]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.id_medio_pago === 5
                            ? [_c("td", [_vm._v(_vm._s("Efectivo"))])]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.id_medio_pago === 6
                            ? [_c("td", [_vm._v(_vm._s("Tarjeta"))])]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(32),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.form.condicion_envio))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(33),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.form.atencion))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(34),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.form.email))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(35),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.form.referencia_solicitud))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(36),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.form.area_proveedor))])
                      ])
                    ])
                  ]
                )
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Facturado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Facturado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Enviado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Facturado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Enviado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Recibido")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-center", attrs: { colspan: "2" } }, [
        _c("strong", [_vm._v("PROVEEDOR")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Proveedor:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Numero RUC:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Atención:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Email:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Referencia:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Area/ Dpto:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-center", attrs: { colspan: "2" } }, [
        _c("strong", [_vm._v("ENVIE A")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("No. Ref.")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_c("strong", [_vm._v("RUC")])]),
      _vm._v(" "),
      _c("td", [_vm._v("123456789")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_c("strong", [_vm._v("PBX")])]),
      _vm._v(" "),
      _c("td", [_vm._v("2268 2316")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Fecha Elaboración:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Estado Actual:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-center", attrs: { colspan: "2" } }, [
        _c("strong", [_vm._v("DETALLES CONSOLIDADOR")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Proveedor:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Condición de pago:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Medio de pago:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Condición de Envío:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Atención:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Email:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Referencia:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Area/ Dpto:")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=template&id=1b05f0a3&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarPS.vue?vue&type=template&id=1b05f0a3& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(" Tipo Orden Compra:")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.tipo_compra,
                        expression: "form.tipo_compra",
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
                          "tipo_compra",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Nacional")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Internacional")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.tipo_compra, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "nombre_comercial",
                      options: _vm.proveedores
                    },
                    on: {
                      input: function($event) {
                        return _vm.cargar_detalles_proveedor()
                      }
                    },
                    model: {
                      value: _vm.form.proveedor,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "proveedor", $$v)
                      },
                      expression: "form.proveedor"
                    }
                  }),
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
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("RUC Proveedor")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.numero_ruc_proveedor,
                      expression: "form.numero_ruc_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.numero_ruc_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "numero_ruc_proveedor",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.numero_ruc_proveedor, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Moneda")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: { label: "descripcion", options: _vm.monedas },
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
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Atención:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.atencion,
                      expression: "form.atencion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.atencion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "atencion", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.atencion, function(message) {
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
                  _vm._v("Email Proveedor:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email_proveedor,
                      expression: "form.email_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.email_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email_proveedor", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.email_proveedor, function(message) {
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
                  _vm._v("Télefono Proveedor:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.telefono_proveedor,
                      expression: "form.telefono_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.telefono_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "telefono_proveedor",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.telefono_proveedor, function(
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Referencia:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.referencia_solicitud,
                      expression: "form.referencia_solicitud"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.referencia_solicitud },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "referencia_solicitud",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.referencia_solicitud, function(
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
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Area / Departamento:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.area_proveedor,
                      expression: "form.area_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.area_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "area_proveedor", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.area_proveedor, function(message) {
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
                    _vm._v("Fecha Orden Compra")
                  ]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      format: _vm.format,
                      language: _vm.es,
                      value: new Date()
                    },
                    on: { selected: _vm.onDateSelect }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.f_orden_servicio, function(
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
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Dirección")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.direccion,
                      expression: "form.direccion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.direccion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "direccion", $event.target.value)
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v(" Tipo Pago:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.id_condicion_pago,
                        expression: "form.id_condicion_pago",
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
                            "id_condicion_pago",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.cambiarTipoPago
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Contado")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Crédito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Consignación")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_condicion_pago, function(
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
                _c("label", { attrs: { for: "" } }, [_vm._v(" Días Crédito")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.plazo_credito,
                        expression: "form.plazo_credito",
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
                          "plazo_credito",
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
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago !== 1,
                          value: "0"
                        }
                      },
                      [_vm._v("Contado")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "8"
                        }
                      },
                      [_vm._v("Trámite de Cheque (8 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "15"
                        }
                      },
                      [_vm._v("Crédito (15 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "30"
                        }
                      },
                      [_vm._v("Crédito (30 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "45"
                        }
                      },
                      [_vm._v("Crédito (45 días)")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.plazo_credito, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v(" Tipo:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.id_medio_pago,
                        expression: "form.id_medio_pago",
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
                          "id_medio_pago",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Crédito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Transferencia")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("Cheque")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "4" } }, [
                      _vm._v("Minuta Depósito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "5" } }, [
                      _vm._v("Efectivo")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "6" } }, [_vm._v("Tarjeta")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_medio_pago, function(message) {
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
                  _vm._v("Condición envío")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.condicion_envio,
                        expression: "form.condicion_envio",
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
                          "condicion_envio",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "Envío" } }, [
                      _vm._v("Envío")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Retiro en tienda" } }, [
                      _vm._v(" Retiro en tienda")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.condicion_envio, function(message) {
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
                  _vm._v("Tiempo de Entrega")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.tiempo_entrega,
                      expression: "form.tiempo_entrega",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.tiempo_entrega },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "tiempo_entrega",
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
                  _vm._l(_vm.errorMessages.tiempo_entrega, function(message) {
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
            _c("div", { staticClass: "col-sm-9" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Nota")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.nota,
                      expression: "form.nota"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.nota },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "nota", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.nota, function(message) {
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
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Clasificación Compra")
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "descripcion",
                      options: _vm.clasificaciones
                    },
                    model: {
                      value: _vm.detalleForm.clasificacionx,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "clasificacionx", $$v)
                      },
                      expression: "detalleForm.clasificacionx"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Descripción producto | servicio")
                ]),
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
                  ref: "producto",
                  staticClass: "form-control",
                  attrs: { type: "text" },
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Precio")]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-addon" }, [
                    _vm._v(
                      _vm._s(_vm.form.moneda ? _vm.form.moneda.codigo : "") +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.precio,
                        expression: "detalleForm.precio",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", min: "0" },
                    domProps: { value: _vm.detalleForm.precio },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "precio",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  })
                ]),
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
                _vm._l(_vm.errorMessages.detalleProductos, function(message) {
                  return _c("li", {
                    key: message,
                    domProps: { textContent: _vm._s(message) }
                  })
                }),
                0
              ),
              _vm._v(" "),
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.detalleProductos, function(item, index) {
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
                            { staticStyle: { width: "12%" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "descripcion",
                                  options: _vm.clasificaciones
                                },
                                model: {
                                  value: item.clasificacionx,
                                  callback: function($$v) {
                                    _vm.$set(item, "clasificacionx", $$v)
                                  },
                                  expression: "item.clasificacionx"
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
                                      ".clasificacionx.id_clasificacion_compra"
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
                                  value: item.descripcion,
                                  expression: "item.descripcion"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: "" },
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
                                  "detalleProductos." + index + ".descripcion"
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
                                  value: item.cantidad,
                                  expression: "item.cantidad",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: item.cantidad },
                              on: {
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
                                  "detalleProductos." + index + ".cantidad"
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
                                  value: item.precio,
                                  expression: "item.precio",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
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
                                  value: item.descuento,
                                  expression: "item.descuento",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0", max: "99" },
                              domProps: { value: item.descuento },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "descuento",
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
                                  "detalleProductos." + index + ".descuento"
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
                            _c("strong", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.moneda ? _vm.form.moneda.codigo : ""
                                ) +
                                  " " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.sub_total(item),
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
                    _c("td", { attrs: { colspan: "5" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Subtotal  ")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.moneda ? _vm.form.moneda.codigo : "N/D"
                          ) +
                            " " +
                            _vm._s(_vm._f("formatMoney")(_vm.total_subt, 2))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "5" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Descuento")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.moneda ? _vm.form.moneda.codigo : ""
                          ) +
                            " " +
                            _vm._s(
                              _vm._f("formatMoney")(_vm.total_descuento, 2)
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "4" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("I.V.A.")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.porcentaje_iva,
                            expression: "form.porcentaje_iva",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { min: "0", max: "99" },
                        domProps: { value: _vm.form.porcentaje_iva },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "porcentaje_iva",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.moneda ? _vm.form.moneda.codigo : ""
                          ) +
                            " " +
                            _vm._s(
                              _vm._f("formatMoney")(_vm.calcular_impuesto, 2)
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      { staticClass: "item-footer", attrs: { colspan: "3" } },
                      [_vm._v(" Total Unidades")]
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "item-footer" }, [
                      _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
                    ]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.moneda ? _vm.form.moneda.codigo : ""
                          ) +
                            " " +
                            _vm._s(_vm._f("formatMoney")(_vm.gran_total, 2))
                        )
                      ])
                    ])
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
                {
                  attrs: {
                    tag: "button",
                    to: { name: "listado-ordenes-compras-ps" }
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
                  staticClass: "btn btn-dark",
                  attrs: {
                    disabled: _vm.btnActionDraft !== "Guardar Borrador",
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      _vm.form.es_borrador = true
                      _vm.registrar()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.btnActionDraft))]
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
                      _vm.form.es_borrador = false
                      _vm.registrar()
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear Orden de Compra")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Orden de compra")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("DETALLES CONSOLIDADOR")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una proveedor para continuar.")
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
        _c("th", [_vm._v("Clasificación Compra")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción Artículo | Servicio")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio Unitario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descuento")]),
        _vm._v(" "),
        _c("th", [_vm._v("SubTotal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          _c(
            "div",
            { staticClass: "form-wizard-nav" },
            [
              _vm.form.estado === 0
                ? [
                    _c("div", { staticClass: "step complete" }, [
                      _vm._v("Rechazado")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Borrador")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Registrado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Ordenado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 99
                ? [
                    _c("div", { staticClass: "step complete" }, [
                      _vm._v("Borrador")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Registrado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Ordenado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 1
                ? [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Ordenado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 2
                ? [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Facturado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 3
                ? [
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Enviado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 4
                ? [
                    _vm._m(7),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _vm._m(9),
                    _vm._v(" "),
                    _vm._m(10),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Recibido")])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 5
                ? [
                    _vm._m(11),
                    _vm._v(" "),
                    _vm._m(12),
                    _vm._v(" "),
                    _vm._m(13),
                    _vm._v(" "),
                    _vm._m(14),
                    _vm._v(" "),
                    _vm._m(15)
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: "",
                      label: "nombre_comercial",
                      options: _vm.proveedores
                    },
                    model: {
                      value: _vm.form.orden_compra_proveedor,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "orden_compra_proveedor", $$v)
                      },
                      expression: "form.orden_compra_proveedor"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_compra_proveedor, function(
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
                    _vm._v("RUC Proveedor")
                  ]),
                  _vm._v(" "),
                  _vm.form.orden_compra_proveedor
                    ? [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.orden_compra_proveedor.numero_ruc,
                              expression:
                                "form.orden_compra_proveedor.numero_ruc"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { disabled: "", type: "text" },
                          domProps: {
                            value: _vm.form.orden_compra_proveedor.numero_ruc
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form.orden_compra_proveedor,
                                "numero_ruc",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Atención:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.atencion,
                      expression: "form.atencion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.atencion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "atencion", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.atencion, function(message) {
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
                  _vm._v("Email Proveedor:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email_proveedor,
                      expression: "form.email_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.email_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email_proveedor", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.email_proveedor, function(message) {
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
                  _vm._v("Télefono Proveedor:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.telefono_proveedor,
                      expression: "form.telefono_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.telefono_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "telefono_proveedor",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.telefono_proveedor, function(
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Referencia:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.referencia_solicitud,
                      expression: "form.referencia_solicitud"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.referencia_solicitud },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "referencia_solicitud",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.referencia_solicitud, function(
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
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Area / Departamento:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.area_proveedor,
                      expression: "form.area_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.area_proveedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "area_proveedor", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.area_proveedor, function(message) {
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
                  _vm._v("Solicitud de Compra:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.id_solicitud_compra,
                      expression: "form.id_solicitud_compra"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.form.id_solicitud_compra },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "id_solicitud_compra",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_solicitud_compra, function(
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
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Fecha Orden Compra")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.f_orden_servicio,
                      expression: "form.f_orden_servicio"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "" },
                  domProps: { value: _vm.form.f_orden_servicio },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "f_orden_servicio",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.f_orden_compra, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
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
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("No. Factura")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.numero_factura,
                      expression: "form.numero_factura"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: _vm.form.estado !== 2, type: "text" },
                  domProps: { value: _vm.form.numero_factura },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "numero_factura", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.numero_factura, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.bodegas
                    },
                    model: {
                      value: _vm.form.orden_compra_bodega,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "orden_compra_bodega", $$v)
                      },
                      expression: "form.orden_compra_bodega"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_compra_bodega, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Moneda")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.monedas
                    },
                    model: {
                      value: _vm.form.orden_compra_moneda,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "orden_compra_moneda", $$v)
                      },
                      expression: "form.orden_compra_moneda"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_compra_moneda, function(
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
          _vm._m(16),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Dirección")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.direccion,
                      expression: "form.direccion"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.direccion },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "direccion", $event.target.value)
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
            _c("div", { staticClass: "col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(" Condición Pago:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.id_condicion_pago,
                        expression: "form.id_condicion_pago",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: _vm.form.estado !== 2 },
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
                            "id_condicion_pago",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.cambiarTipoPago
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Contado")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Crédito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Consignación")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_condicion_pago, function(
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
                _c("label", { attrs: { for: "" } }, [_vm._v(" Días Crédito")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.plazo_credito,
                        expression: "form.plazo_credito",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: _vm.form.estado !== 2 },
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
                          "plazo_credito",
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
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago !== 1,
                          value: "0"
                        }
                      },
                      [_vm._v("Contado")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "8"
                        }
                      },
                      [_vm._v("Trámite de Cheque (8 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "15"
                        }
                      },
                      [_vm._v("Crédito (15 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "30"
                        }
                      },
                      [_vm._v("Crédito (30 días)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        attrs: {
                          disabled: _vm.form.id_condicion_pago === 1,
                          value: "45"
                        }
                      },
                      [_vm._v("Crédito (45 días)")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.plazo_credito, function(message) {
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
                _c("label", [_vm._v(" Medio Pago:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.id_medio_pago,
                        expression: "form.id_medio_pago",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "" },
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
                          "id_medio_pago",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Crédito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Transferencia")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("Cheque")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "4" } }, [
                      _vm._v("Minuta Depósito")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "5" } }, [
                      _vm._v("Efectivo")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "6" } }, [_vm._v("Tarjeta")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_medio_pago, function(message) {
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
                  _vm._v("Condición envío")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.condicion_envio,
                        expression: "form.condicion_envio",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "" },
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
                          "condicion_envio",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "Envío" } }, [
                      _vm._v("Envío")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Retiro en tienda" } }, [
                      _vm._v(" Retiro en tienda")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.condicion_envio, function(message) {
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
                  _vm._v("Tiempo de Entrega")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.form.tiempo_entrega,
                      expression: "form.tiempo_entrega",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.tiempo_entrega },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "tiempo_entrega",
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
                  _vm._l(_vm.errorMessages.tiempo_entrega, function(message) {
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
            _c("div", { staticClass: "col-sm-9" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Nota")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.nota,
                      expression: "form.nota"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.nota },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "nota", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.nota, function(message) {
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
          _vm._m(17),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.orden_compra_listado, function(
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
                _c("thead", [
                  _c("tr", [
                    _c("th"),
                    _vm._v(" "),
                    _c("th", [_vm._v("Clasificación Compra")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Descripción producto | servicio")]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "Cantidad " +
                          _vm._s(
                            _vm.form.estado === 2 || _vm.form.estado === 3
                              ? "Facturada"
                              : ""
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "Precio Unitario " +
                          _vm._s(
                            _vm.form.estado === 2 || _vm.form.estado === 3
                              ? "Facturada"
                              : ""
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Descuento")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("SubTotal")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.orden_compra_listado, function(
                      item,
                      index
                    ) {
                      return [
                        _c(
                          "tr",
                          [
                            _c("td", { staticStyle: { width: "2%" } }, [
                              _c(
                                "button",
                                {
                                  attrs: { disabled: "" },
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
                              { staticStyle: { width: "12%" } },
                              [
                                _c("v-select", {
                                  attrs: {
                                    label: "descripcion",
                                    options: _vm.clasificaciones
                                  },
                                  model: {
                                    value: item.servicio_clasificacion,
                                    callback: function($$v) {
                                      _vm.$set(
                                        item,
                                        "servicio_clasificacion",
                                        $$v
                                      )
                                    },
                                    expression: "item.servicio_clasificacion"
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
                                        ".servicio_clasificacion.id_clasificacion_compra"
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
                                    value: item.descripcion,
                                    expression: "item.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
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
                                    "orden_compra_listado." +
                                      index +
                                      ".descripcion"
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
                            _vm.form.estado > 2
                              ? [
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.number",
                                          value: item.cantidad_facturado,
                                          expression: "item.cantidad_facturado",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: _vm.form.estado !== 2,
                                        type: "number"
                                      },
                                      domProps: {
                                        value: item.cantidad_facturado
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "cantidad_facturado",
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
                                          "solicitud_productos." +
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
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.number",
                                          value: item.precio_facturado,
                                          expression: "item.precio_facturado",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: _vm.form.estado !== 2,
                                        type: "number"
                                      },
                                      domProps: {
                                        value: item.precio_facturado
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "precio_facturado",
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
                                          "solicitud_productos." +
                                            index +
                                            ".precio"
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
                                ]
                              : [
                                  _c("td", [
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
                                      attrs: {
                                        disabled: _vm.form.estado !== 2,
                                        type: "number"
                                      },
                                      domProps: { value: item.cantidad },
                                      on: {
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
                                          "orden_compra_listado." +
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
                                  _c("td", [
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
                                      attrs: {
                                        disabled: _vm.form.estado !== 2,
                                        type: "number"
                                      },
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
                                          "orden_compra_listado." +
                                            index +
                                            ".precio"
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
                                ],
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.descuento,
                                    expression: "item.descuento",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  disabled: _vm.form.estado !== 2,
                                  type: "number"
                                },
                                domProps: { value: item.descuento },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "descuento",
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
                                    "orden_compra_listado." +
                                      index +
                                      ".descuento"
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
                              _c("strong", [
                                _vm._v(
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.sub_total(item),
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ],
                          2
                        ),
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
                    _c("td", [_vm._v("Subtotal")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          "C$ " +
                            _vm._s(_vm._f("formatMoney")(_vm.total_subt, 2))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "5" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Descuento")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          "C$ " +
                            _vm._s(
                              _vm._f("formatMoney")(_vm.total_descuento, 2)
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "4" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("I.V.A.")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.porcentaje_iva,
                            expression: "form.porcentaje_iva",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { min: "0", max: "99" },
                        domProps: { value: _vm.form.porcentaje_iva },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "porcentaje_iva",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.orden_compra_moneda
                              ? _vm.form.orden_compra_moneda.codigo
                              : ""
                          ) +
                            " " +
                            _vm._s(
                              _vm._f("formatMoney")(_vm.calcular_impuesto, 2)
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      { staticClass: "item-footer", attrs: { colspan: "3" } },
                      [_vm._v(" Total Unidades")]
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "item-footer" }, [
                      _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
                    ]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          "C$ " +
                            _vm._s(_vm._f("formatMoney")(_vm.gran_total, 2))
                        )
                      ])
                    ])
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
                {
                  attrs: {
                    tag: "button",
                    to: { name: "listado-ordenes-compras-ps" }
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
                          disabled: _vm.btnAction !== "Confirmar",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.confirmar(2)
                          }
                        }
                      },
                      [_vm._v("Cambiar a Ordenado")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: {
                          disabled: _vm.btnAction !== "Confirmar",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.confirmar(0)
                          }
                        }
                      },
                      [_vm._v("Rechazar")]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 2
                ? [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          disabled: _vm.btnAction !== "Confirmar",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.confirmar(3)
                          }
                        }
                      },
                      [_vm._v("Confirmar Facturación")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: {
                          disabled: _vm.btnAction !== "Confirmar",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.confirmar(0)
                          }
                        }
                      },
                      [_vm._v("Rechazar")]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 3
                ? [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          disabled: _vm.btnAction !== "Confirmar",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.confirmar(4)
                          }
                        }
                      },
                      [_vm._v("Confirmar Envío")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: {
                          disabled: _vm.btnAction !== "Confirmar",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.confirmar(0)
                          }
                        }
                      },
                      [_vm._v("Rechazar")]
                    )
                  ]
                : _vm._e()
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Revisión de Orden de Compra")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para revisión de Orden de compra")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Facturado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Facturado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Enviado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Registrado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Ordenado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Facturado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Enviado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Recibido")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("DETALLES CONSOLIDADOR")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de productos")])])
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

/***/ "./resources/app/api/orden_compras_ps.js":
/*!***********************************************!*\
  !*** ./resources/app/api/orden_compras_ps.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerOrdenesCompra: function obtenerOrdenesCompra(data, cb, errorCb) {
    axios.post('compras-ps/ordenes/obtener', data).then(function (response) {
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
    axios.post('compras-ps/ordenes/registrar', data).then(function (response) {
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
    axios.put('compras-ps/ordenes/actualizar', data).then(function (response) {
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
    axios.post('compras-ps/ordenes/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerOrdenCompra: function obtenerOrdenCompra(data, cb, errorCb) {
    axios.post('compras-ps/ordenes/obtener-orden-compra', data).then(function (response) {
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
    axios.put('compras-ps/ordenes/cambiar-estado', data).then(function (response) {
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

/***/ "./resources/app/components/compras/ActualizarPS.vue":
/*!***********************************************************!*\
  !*** ./resources/app/components/compras/ActualizarPS.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActualizarPS_vue_vue_type_template_id_0d99cfd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActualizarPS.vue?vue&type=template&id=0d99cfd0& */ "./resources/app/components/compras/ActualizarPS.vue?vue&type=template&id=0d99cfd0&");
/* harmony import */ var _ActualizarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActualizarPS.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/ActualizarPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ActualizarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActualizarPS.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ActualizarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActualizarPS_vue_vue_type_template_id_0d99cfd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActualizarPS_vue_vue_type_template_id_0d99cfd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/ActualizarPS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/ActualizarPS.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/app/components/compras/ActualizarPS.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarPS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/ActualizarPS.vue?vue&type=template&id=0d99cfd0&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/compras/ActualizarPS.vue?vue&type=template&id=0d99cfd0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_template_id_0d99cfd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarPS.vue?vue&type=template&id=0d99cfd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarPS.vue?vue&type=template&id=0d99cfd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_template_id_0d99cfd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarPS_vue_vue_type_template_id_0d99cfd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/ListadoPS.vue":
/*!********************************************************!*\
  !*** ./resources/app/components/compras/ListadoPS.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoPS_vue_vue_type_template_id_0a668504_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoPS.vue?vue&type=template&id=0a668504&scoped=true& */ "./resources/app/components/compras/ListadoPS.vue?vue&type=template&id=0a668504&scoped=true&");
/* harmony import */ var _ListadoPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoPS.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/ListadoPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoPS_vue_vue_type_style_index_0_id_0a668504_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true& */ "./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoPS_vue_vue_type_template_id_0a668504_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoPS_vue_vue_type_template_id_0a668504_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a668504",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/ListadoPS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/ListadoPS.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/compras/ListadoPS.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_style_index_0_id_0a668504_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=style&index=0&id=0a668504&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_style_index_0_id_0a668504_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_style_index_0_id_0a668504_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_style_index_0_id_0a668504_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_style_index_0_id_0a668504_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_style_index_0_id_0a668504_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/ListadoPS.vue?vue&type=template&id=0a668504&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/compras/ListadoPS.vue?vue&type=template&id=0a668504&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_template_id_0a668504_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPS.vue?vue&type=template&id=0a668504&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoPS.vue?vue&type=template&id=0a668504&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_template_id_0a668504_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPS_vue_vue_type_template_id_0a668504_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/MostrarPS.vue":
/*!********************************************************!*\
  !*** ./resources/app/components/compras/MostrarPS.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MostrarPS_vue_vue_type_template_id_66adf5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarPS.vue?vue&type=template&id=66adf5f6& */ "./resources/app/components/compras/MostrarPS.vue?vue&type=template&id=66adf5f6&");
/* harmony import */ var _MostrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarPS.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/MostrarPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MostrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MostrarPS.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MostrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarPS_vue_vue_type_template_id_66adf5f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MostrarPS_vue_vue_type_template_id_66adf5f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/MostrarPS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/MostrarPS.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/compras/MostrarPS.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarPS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/MostrarPS.vue?vue&type=template&id=66adf5f6&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/compras/MostrarPS.vue?vue&type=template&id=66adf5f6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_template_id_66adf5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarPS.vue?vue&type=template&id=66adf5f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarPS.vue?vue&type=template&id=66adf5f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_template_id_66adf5f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPS_vue_vue_type_template_id_66adf5f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/RegistrarPS.vue":
/*!**********************************************************!*\
  !*** ./resources/app/components/compras/RegistrarPS.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarPS_vue_vue_type_template_id_1b05f0a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarPS.vue?vue&type=template&id=1b05f0a3& */ "./resources/app/components/compras/RegistrarPS.vue?vue&type=template&id=1b05f0a3&");
/* harmony import */ var _RegistrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarPS.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/RegistrarPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarPS.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarPS_vue_vue_type_template_id_1b05f0a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarPS_vue_vue_type_template_id_1b05f0a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/RegistrarPS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/RegistrarPS.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/compras/RegistrarPS.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarPS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/RegistrarPS.vue?vue&type=template&id=1b05f0a3&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/compras/RegistrarPS.vue?vue&type=template&id=1b05f0a3& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_template_id_1b05f0a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarPS.vue?vue&type=template&id=1b05f0a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarPS.vue?vue&type=template&id=1b05f0a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_template_id_1b05f0a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarPS_vue_vue_type_template_id_1b05f0a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/RevisarOrdenCompraPS.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/compras/RevisarOrdenCompraPS.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RevisarOrdenCompraPS_vue_vue_type_template_id_a35aa7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac& */ "./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac&");
/* harmony import */ var _RevisarOrdenCompraPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevisarOrdenCompraPS.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RevisarOrdenCompraPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RevisarOrdenCompraPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RevisarOrdenCompraPS_vue_vue_type_template_id_a35aa7ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RevisarOrdenCompraPS_vue_vue_type_template_id_a35aa7ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/RevisarOrdenCompraPS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarOrdenCompraPS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_template_id_a35aa7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarOrdenCompraPS.vue?vue&type=template&id=a35aa7ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_template_id_a35aa7ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarOrdenCompraPS_vue_vue_type_template_id_a35aa7ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);