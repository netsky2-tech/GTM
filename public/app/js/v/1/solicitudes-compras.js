(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitudes-compras"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_compras */ "./resources/app/api/solicitudes_compras.js");
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
//
//
//
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
      areas: [],
      proveedores: [],
      productos: [],
      trabajadores: [],
      //sucursales:[],
      monedas: [],
      bodegas: [],
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      detalleForm: {
        productox: {},
        proveedorx: "",
        cantidad: 1,
        monto_descuento: 0,
        precio_info: 0,
        subtotal: 0,
        total: 0,
        f_necesidad_producto: moment(new Date()).format("YYYY-MM-DD")
      },
      total_cantidadx: 0,
      total_subtotalx: 0,
      total_ivax: 0,
      total_descuentox: 0,
      total_finalx: 0,
      form: {
        es_borrador: true,
        observacion: "",
        f_necesidad: moment(new Date()).format("YYYY-MM-DD"),
        solicitud_trabajador: "",
        solicitud_sucursal: "",
        solicitud_area: "",
        total: 0,
        porcentaje_iva: 0,
        iva: 0,
        solicitud_productos: []
      },
      btnAction: "Actualizar y Solicitar",
      btnActionDraft: "Guardar Borrador",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      this.total_cantidadx = this.form.solicitud_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
      return this.total_cantidadx;
    },
    total_subt: function total_subt() {
      this.total_subtotalx = Number(this.form.solicitud_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.subtotal).toFixed(2));
      }, 0).toFixed(2));
      return this.total_subtotalx;
    },
    total_descuento: function total_descuento() {
      this.total_descuentox = Number(this.form.solicitud_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2) * Number(item.descuento / 100).toFixed(2));
      }, 0).toFixed(2));
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
      return Number(this.total_finalx.toFixed(2)) + Number(this.total_ivax.toFixed(2));
    }
  },
  methods: {
    seleccionarProducto: function seleccionarProducto() {
      var self = this;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 1;
      self.detalleForm.precio_info = self.detalleForm.productox.precio_compra;
      self.$refs.cantidad.focus();
    },

    /*seleccionarProducto(e) {
    	const productoP = e.target.value;
    	var self = this;
    	self.detalleForm.productox = productoP;
    		if(self.detalleForm.productox)
    		self.detalleForm.precio_info = self.detalleForm.productox.precio_compra;
    	},*/
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this;
      _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitud({
        id_solicitud_compra: this.$route.params.id_solicitud_compra,
        cargar_dependencias: true
      }, function (data) {
        //self.sucursales = data.sucursales;
        self.monedas = data.monedas;
        self.bodegas = data.bodegas;
        self.areas = data.areas;
        self.trabajadores = data.trabajadores;
        self.proveedores = data.proveedores;
        self.productos = data.productos;
        self.form = data.solicitud;
        self.loading = false;

        if (self.form.estado !== 99) {
          alertify.error("La solicitud ya no puede ser actualizada", 5);

          _this.$router.push({
            name: "listado-solicitudes-compras"
          });
        }
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_info) * Number(itemX.cantidad)).toFixed(2));
      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    onDateSelect: function onDateSelect(date) {
      this.form.f_necesidad = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      this.detalleForm.f_necesidad_producto = moment(date).format("YYYY-MM-DD"); //

      console.log(this.detalleForm.f_necesidad_producto);
    },
    agregarDetalle: function agregarDetalle() {
      var _this2 = this;

      var self = this;

      if (this.detalleForm.productox) {
        if (this.detalleForm.cantidad > 0 && this.detalleForm.precio_info > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.solicitud_productos) {
            self.form.solicitud_productos.forEach(function (productox, key) {
              //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
              if (self.detalleForm.productox.id_producto === productox.solicitud_producto.id_producto) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            this.detalleForm.productox.descripcion = this.detalleForm.productox.text;
            this.form.solicitud_productos.push({
              solicitud_producto: this.detalleForm.productox,
              solicitud_proveedor: this.detalleForm.proveedorx,
              id_producto: this.detalleForm.productox.id_producto,
              id_proveedor: this.detalleForm.proveedorx.id_proveedor,
              cantidad: this.detalleForm.cantidad,
              precio_info: this.detalleForm.precio_info,
              f_necesidad_producto: this.detalleForm.f_necesidad_producto,
              descuento: 0,
              monto_descuento: Number(0),
              subtotal: 0,
              total: 0
            });
            this.detalleForm.productox = {}; //this.detalleForm.proveedorx='';

            this.detalleForm.cantidad = 0;
            this.detalleForm.precio_info = 0;
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
                self.form.solicitud_productos[keyx].cantidad = Number(self.form.solicitud_productos[keyx].cantidad) + self.detalleForm.cantidad;
                self.form.solicitud_productos[keyx].precio_info = self.detalleForm.precio_info;
                _this2.detalleForm.productox = {};
                _this2.detalleForm.proveedorx = '';
                _this2.detalleForm.cantidad = 0;
                _this2.detalleForm.precio_info = 0;
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
      if (this.form.solicitud_productos.length >= 1) {
        this.form.solicitud_productos.splice(index, 1);
      } else {
        this.form.solicitud_productos = [];
      }
    },
    actualizar: function actualizar() {
      var _this3 = this;

      var self = this;

      if (self.form.estado === 99) {
        self.btnAction = "Registrando, espere....";
        self.loading = true;
        _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
          if (self.form.es_borrador) {
            alertify.success("El borrador de la solicitud fue actualizado correctamente", 5);
          } else {
            alertify.success("La solicitud fue actualizada y SOLICITADA correctamente", 5);
          }

          self.loading = false;

          _this3.$router.push({
            name: "listado-solicitudes-compras"
          });
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnAction = "Actualizar y Solicitar";
          self.btnActionDraft = "Guardar Borrador";
        });
      } else {
        alertify.error("La solicitud ya no puede ser actualizada", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerSolicitud();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_compras */ "./resources/app/api/solicitudes_compras.js");
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
        limit: 5,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: "observacion",
          value: ""
        }
      },
      solicitudes_compras: [],
      total: 0
    };
  },
  methods: {
    mostrarProductos: function mostrarProductos(key) {
      if (this.solicitudes_compras[key].mostrar) {
        this.solicitudes_compras[key].mostrar = 0;
      } else {
        this.solicitudes_compras[key].mostrar = 1;
      }
    },
    obtenerSolicitudesCompra: function obtenerSolicitudesCompra() {
      var self = this;
      self.loading = true;
      _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitudesCompra(self.filter, function (data) {
        data.rows.forEach(function (solicitudes_compras, key) {
          data.rows[key].mostrar = 0;
        });
        self.solicitudes_compras = data.rows;
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
      this.obtenerSolicitudesCompra();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerSolicitudesCompra();
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerSolicitudesCompra();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarSolicitud.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/MostrarSolicitud.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_compras */ "./resources/app/api/solicitudes_compras.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      descargando: false,
      form: {
        solicitud_productos: [],
        solicitud_moneda: "",
        total: 0,
        sub_total: 0
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    sub_total: function sub_total(itemX) {
      if (this.form.estado !== 1) {
        itemX.subtotal = Number((Number(itemX.precio_cotizado) * Number(itemX.cantidad_cotizado)).toFixed(2));
      } else {
        itemX.subtotal = Number((Number(itemX.precio_info) * Number(itemX.cantidad)).toFixed(2));
      }

      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    regresar: function regresar() {
      this.$router.push({
        name: "listado-solicitudes-compras"
      });
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
          link.download = 'ReporteSolicitudCompra-' + _this.form.id_solicitud_compra + '.pdf';
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
    obtenerSolicitud: function obtenerSolicitud() {
      var self = this;
      _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitud({
        id_solicitud_compra: this.$route.params.id_solicitud_compra,
        cargar_dependencias: false
      }, function (data) {
        self.form = data.solicitud;
      }, function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    total_cantidad: function total_cantidad() {
      var _this2 = this;

      return this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this2.form.estado !== 1) {
          return carry + Number(item.cantidad_cotizado);
        } else {
          return carry + Number(item.cantidad);
        }
      }, 0);
    },
    total_subt: function total_subt() {
      var _this3 = this;

      return this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this3.form.estado !== 1) {
          return carry + Number(Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2));
        }
      }, 0);
    },
    total_descuento: function total_descuento() {
      var _this4 = this;

      return this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this4.form.estado !== 1) {
          return carry + Number(Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        }
      }, 0);
    },
    gran_total: function gran_total() {
      var _this5 = this;

      this.form.total = this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this5.form.estado !== 1) {
          return carry + Number(Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        }
      }, 0);
      return this.form.total;
    }
  },
  mounted: function mounted() {
    this.obtenerSolicitud();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_compras */ "./resources/app/api/solicitudes_compras.js");
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
//
//
//
//
//
//
//
//
//
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
      loading: true,
      registrandoBateria: false,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      productosBusqueda: {},
      productosBusquedaURL: "/inventario/productos/buscarPS",
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      areas: [],
      proveedores: [],
      productos: [],
      trabajadores: [],
      //sucursales:[],
      monedas: [],
      bodegas: [],
      detalleForm: {
        productox: '',
        proveedorx: "",
        cantidad: 1,
        monto_descuento: 0,
        precio_info: 0,
        subtotal: 0,
        total: 0,
        f_necesidad_producto: moment(new Date()).format("YYYY-MM-DD")
      },
      form: {
        observacion: "",
        f_necesidad: moment(new Date()).format("YYYY-MM-DD"),
        trabajador: "",
        //sucursal: "",
        solicitud_bodega: "",
        solicitud_moneda: "",
        area: "",
        total: 0,
        iva: 0,
        porcentaje_iva: 15,
        detalleProductos: [],
        es_borrador: false
      },
      btnAction: "Solicitar",
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
    total_impuesto: function total_impuesto() {
      var _this = this;

      this.form.iva = Number(this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(Number(item.subtotal * (_this.form.porcentaje_iva / 100)).toFixed(2));
      }, 0).toFixed(2));
      return this.form.iva;
    },
    gran_total: function gran_total() {
      this.form.total = this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
      return this.form.total + this.form.iva;
    }
  },
  methods: {
    seleccionarProducto: function seleccionarProducto() {
      var self = this;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 1;
      self.detalleForm.precio_info = self.detalleForm.productox.precio_compra;
      self.$refs.cantidad.focus();
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_info) * Number(itemX.cantidad)).toFixed(2));
      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.f_necesidad = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      this.detalleForm.f_necesidad_producto = moment(date).format("YYYY-MM-DD"); //

      console.log(this.detalleForm.f_necesidad_producto);
    },
    agregarDetalle: function agregarDetalle() {
      var _this2 = this;

      var self = this;

      if (this.detalleForm.productox) {
        if (this.detalleForm.cantidad > 0 && this.detalleForm.precio_info > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.detalleProductos) {
            self.form.detalleProductos.forEach(function (productox, key) {
              //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
              if (self.detalleForm.productox.id_producto === productox.productox.id_producto) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            this.form.detalleProductos.push({
              productox: this.detalleForm.productox,
              proveedorx: this.detalleForm.proveedorx,
              cantidad: this.detalleForm.cantidad,
              precio_info: this.detalleForm.precio_info,
              f_necesidad_producto: this.detalleForm.f_necesidad_producto,
              descuento: 0,
              monto_descuento: Number(0),
              subtotal: 0,
              total: 0
            });
            this.detalleForm.productox = ''; //this.detalleForm.proveedorx='';

            this.detalleForm.cantidad = 0;
            this.detalleForm.precio_info = 0;
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
                _this2.detalleForm.productox = {};
                _this2.detalleForm.proveedorx = '';
                _this2.detalleForm.cantidad = 0;
                _this2.detalleForm.precio_info = 0;
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
      _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].nueva(function (data) {
        //self.sucursales = data.sucursales;
        self.monedas = data.monedas;
        self.bodegas = data.bodegas;
        self.form.solicitud_bodega = self.bodegas[0]; //self.form.sucursal = self.sucursales[0];

        self.form.solicitud_moneda = self.monedas[1];
        self.areas = data.areas;
        self.form.area = self.areas[0];
        self.trabajadores = data.trabajadores;
        self.form.trabajador = self.trabajadores[0];
        self.productos = data.productos;
        self.proveedores = data.proveedores;
        self.detalleForm.proveedorx = self.proveedores[0];
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this3 = this;

      var self = this;
      self.loading = true;
      self.btnAction = "Registrando, espere....";
      self.btnActionDraft = "Guardando, espere....";
      _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        alertify.success("Solicitud de Compra emitida correctamente", 5);

        _this3.$router.push({
          name: "listado-solicitudes-compras"
        });

        self.loading = false;
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = "Solicitar";
        self.btnActionDraft = "Guardar Borrador";
      });
    }
  },
  mounted: function mounted() {
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitudes_compras */ "./resources/app/api/solicitudes_compras.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      productosBusqueda: {},
      productosBusquedaURL: "/inventario/productos/buscarPS",
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      areas: [],
      proveedores: [],
      productos: [],
      trabajadores: [],
      //	sucursales:[],
      monedas: [],
      bodegas: [],
      detalleForm: {
        productox: {},
        proveedorx: "",
        cantidad: 1,
        monto_descuento: 0,
        precio_info: 0,
        subtotal: 0,
        total: 0,
        f_necesidad_producto: moment(new Date()).format("YYYY-MM-DD")
      },
      form: {
        es_borrador: true,
        observacion: "",
        f_necesidad: moment(new Date()).format("YYYY-MM-DD"),
        solicitud_trabajador: "",
        solicitud_sucursal: "",
        solicitud_area: "",
        total: 0,
        iva: 0,
        porcentaje_iva: 0,
        solicitud_productos: []
      },
      btnAction: "Confirmar",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      var _this = this;

      return this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this.form.estado !== 1) {
          return carry + Number(item.cantidad_cotizado);
        } else {
          return carry + Number(item.cantidad);
        }
      }, 0);
    },
    total_subt: function total_subt() {
      var _this2 = this;

      return this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this2.form.estado !== 1) {
          return carry + Number(Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2));
        }
      }, 0);
    },
    total_descuento: function total_descuento() {
      var _this3 = this;

      return this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this3.form.estado !== 1) {
          return carry + Number(Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2) * Number(item.descuento / 100).toFixed(2));
        }
      }, 0);
    },
    calcular_impuesto: function calcular_impuesto() {
      var _this4 = this;

      //console.log(this.form.estado);
      this.form.iva = Number(this.form.solicitud_productos.reduce(function (carry, item) {
        //return(carry + Number(Number(item.subtotal*0.15).toFixed(2)));
        if (_this4.form.estado > 2) {
          return carry + Number(Number(item.subtotal) * Number(_this4.form.porcentaje_iva / 100));
        } else {
          return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2) * Number(_this4.form.porcentaje_iva / 100) * Number(1 - item.descuento / 100).toFixed(2));
        }
      }, 0).toFixed(2));
      return Number(this.form.iva.toFixed(2));
    },
    gran_total: function gran_total() {
      var _this5 = this;

      this.form.total = Number(this.form.solicitud_productos.reduce(function (carry, item) {
        if (_this5.form.estado > 2) {
          return carry + Number(Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        } else {
          return carry + Number(Number(item.cantidad * item.precio_info).toFixed(2) * Number(1 - item.descuento / 100).toFixed(2));
        }
      }, 0).toFixed(2));
      return this.form.total + this.form.iva;
    }
  },
  methods: {
    confirmar: function confirmar(estadox) {
      var _this6 = this;

      var titulox = '';

      if (estadox === 0) {
        titulox = 'Esta seguro de rechazar ésta solicitud de compra?';
      } else if (estadox === 2) {
        titulox = 'Esta seguro de cambiar el estado a Cotizado?';
      } else if (estadox === 3) {
        titulox = 'Esta seguro de autorizar esta solicitud de compra?';
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
      if (self.detalleForm.productox) self.detalleForm.precio_info = self.detalleForm.productox.costo_estandar;
    },
    obtenerSolicitud: function obtenerSolicitud() {
      var _this7 = this;

      var self = this;
      _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitud({
        id_solicitud_compra: self.$route.params.id_solicitud_compra,
        cargar_dependencias: true
      }, function (data) {
        //self.sucursales = data.sucursales;
        self.monedas = data.monedas;
        self.bodegas = data.bodegas;
        self.areas = data.areas;
        self.trabajadores = data.trabajadores;
        self.proveedores = data.proveedores;
        self.form = data.solicitud;

        if (self.form.estado === 99 || self.form.estado === 4 || self.form.estado === 0) {
          alertify.error("La solicitud no puede ser revisada", 5);

          _this7.$router.push({
            name: "listado-solicitudes-compras"
          });
        }

        self.loading = false;
      });
    },
    sub_total: function sub_total(itemX) {
      if (this.form.estado !== 1) {
        itemX.subtotal = Number((Number(itemX.precio_cotizado) * Number(itemX.cantidad_cotizado)).toFixed(2));
      } else {
        itemX.subtotal = Number((Number(itemX.precio_info) * Number(itemX.cantidad)).toFixed(2));
      }

      itemX.monto_descuento = Number(Number(itemX.subtotal * Number(itemX.descuento / 100)).toFixed(2));
      itemX.total = itemX.subtotal - itemX.monto_descuento;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    onDateSelect: function onDateSelect(date) {
      this.form.f_necesidad = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      this.detalleForm.f_necesidad_producto = moment(date).format("YYYY-MM-DD"); //

      console.log(this.detalleForm.f_necesidad_producto);
    },
    agregarDetalle: function agregarDetalle() {
      if (this.detalleForm.productox) {
        if (this.detalleForm.cantidad > 0 && this.detalleForm.precio_info > 0) {
          this.detalleForm.productox.descripcion = this.detalleForm.productox.text;
          this.form.solicitud_productos.push({
            solicitud_producto: this.detalleForm.productox,
            solicitud_proveedor: this.detalleForm.proveedorx,
            id_producto: this.detalleForm.productox.id_producto,
            id_proveedor: this.detalleForm.proveedorx.id_proveedor,
            cantidad: this.detalleForm.cantidad,
            precio_info: this.detalleForm.precio_info,
            f_necesidad_producto: this.detalleForm.f_necesidad_producto,
            descuento: 0,
            monto_descuento: Number(0),
            subtotal: 0,
            total: 0
          });
          this.detalleForm.productox = {};
          this.detalleForm.proveedorx = '';
          this.detalleForm.cantidad = 0;
          this.detalleForm.precio_info = 0;
          this.detalleForm.subtotal = 0;
          this.detalleForm.monto_descuento = 0;
          this.detalleForm.descuento = 0;
          this.detalleForm.total = 0;
        } else {
          alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.solicitud_productos.length >= 1) {
        this.form.solicitud_productos.splice(index, 1);
      } else {
        this.form.solicitud_productos = [];
      }
    },
    cambiarEstado: function cambiarEstado(estadox) {
      var _this8 = this;

      var self = this;
      self.loading = true;

      if (self.form.estado === 1 && (estadox === 2 || estadox === 0) || self.form.estado === 2 && (estadox === 3 || estadox === 0) || self.form.estado === 3 && (estadox === 4 || estadox === 0)) {
        self.btnAction = "Registrando, espere.....";
        _api_solicitudes_compras__WEBPACK_IMPORTED_MODULE_0__["default"].cambiarEstado({
          id_solicitud_compra: this.$route.params.id_solicitud_compra,
          estado: estadox,
          productos: self.form.solicitud_productos
        }, function (data) {
          if (estadox === 2) {
            alertify.success("El estado de la solicitud ha cambiado a Cotizado", 5);
          } else if (estadox === 3) {
            alertify.success("El estado de la solicitud ha cambiado a Autorizado", 5);
          }

          self.loading = false;

          _this8.$router.push({
            name: "mostrar-solicitud-compra",
            params: {
              id_solicitud_compra: self.form.id_solicitud_compra
            }
          });
        }, function (err) {
          self.errorMessages = err;
          self.btnAction = "Confirmar";
        });
      } else {
        alertify.error("La solicitud no puede ser actualizada", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerSolicitud();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-03563042] {\n  min-width: 120px;\n}\n.table a[data-v-03563042] {\n  color: #2675dc;\n}\n.table .table-number[data-v-03563042] {\n  width: 60px;\n}\n.table .action[data-v-03563042] {\n  width: 180px;\n}\n.table .detail-link[data-v-03563042] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-03563042] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-03563042]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSolicitud.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6& ***!
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Usuario Solicitante")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "nombre_completo",
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
                      _vm._l(_vm.errorMessages.solicitud_area, function(
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Area Solicitante")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.areas },
                      model: {
                        value: _vm.form.solicitud_area,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "solicitud_area", $$v)
                        },
                        expression: "form.solicitud_area"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.solicitud_area, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      model: {
                        value: _vm.form.solicitud_bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "solicitud_bodega", $$v)
                        },
                        expression: "form.solicitud_bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.solicitud_bodega, function(
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
                      attrs: { label: "descripcion", options: _vm.monedas },
                      model: {
                        value: _vm.form.solicitud_moneda,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "solicitud_moneda", $$v)
                        },
                        expression: "form.solicitud_moneda"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.solicitud_moneda, function(
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
                      _vm._v("Fecha Necesidad")
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
                      _vm._l(_vm.errorMessages.f_necesidad, function(message) {
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
              _c("div", { staticClass: "col-sm-8" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Observaciones solicitud")
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
              ])
            ]),
            _vm._v(" "),
            !_vm.form.solicitud_area
              ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "producto",
                      attrs: {
                        "allow-empty": false,
                        options: _vm.productos,
                        searchable: true,
                        "show-labels": false,
                        "deselect-label": "No se puede eliminar este valor",
                        label: "text",
                        placeholder: "Selecciona un producto",
                        "track-by": "id_producto"
                      },
                      on: { input: _vm.seleccionarProducto },
                      model: {
                        value: _vm.detalleForm.productox,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "productox", $$v)
                        },
                        expression: "detalleForm.productox"
                      }
                    }),
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "nombre_comercial",
                        options: _vm.proveedores
                      },
                      model: {
                        value: _vm.detalleForm.proveedorx,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "proveedorx", $$v)
                        },
                        expression: "detalleForm.proveedorx"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.proveedorx, function(message) {
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
                    attrs: { type: "number" },
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Precio Info")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("div", { staticClass: "input-group-addon" }, [
                      _vm._v(
                        _vm._s(
                          _vm.form.solicitud_moneda
                            ? _vm.form.solicitud_moneda.codigo
                            : ""
                        ) + "\n\t\t\t\t\t\t\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.detalleForm.precio_info,
                          expression: "detalleForm.precio_info",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.detalleForm.precio_info },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detalleForm,
                            "precio_info",
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
                    _vm._l(_vm.errorMessages.precio_infox, function(message) {
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
                      _vm._v("Fecha Necesidad")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelect2 }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.f_necesidad_productox, function(
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
                  _vm._l(_vm.errorMessages.solicitud_productos, function(
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
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.solicitud_productos, function(
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
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.solicitud_producto.descripcion,
                                    expression:
                                      "item.solicitud_producto.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.solicitud_producto.descripcion
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.solicitud_producto,
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
                                    "solicitud_productos." +
                                      index +
                                      ".solicitud_producto.id_producto"
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
                                    name: "mask",
                                    rawName: "v-mask",
                                    value: "####-##-##",
                                    expression: "'####-##-##'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.f_necesidad_producto,
                                    expression: "item.f_necesidad_producto"
                                  }
                                ],
                                staticClass: "form-control",
                                domProps: { value: item.f_necesidad_producto },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "f_necesidad_producto",
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
                                    "solicitud_productos." +
                                      index +
                                      ".f_necesidad_producto"
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
                                    value:
                                      item.solicitud_proveedor.nombre_comercial,
                                    expression:
                                      "item.solicitud_proveedor.nombre_comercial"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value:
                                    item.solicitud_proveedor.nombre_comercial
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.solicitud_proveedor,
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
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".solicitud_proveedor.id_proveedor"
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
                                attrs: { type: "number" },
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
                                    "solicitud_productos." + index + ".cantidad"
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
                                    value: item.precio_info,
                                    expression: "item.precio_info",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number" },
                                domProps: { value: item.precio_info },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "precio_info",
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
                                      ".precio_info"
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
                                attrs: { type: "number" },
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
                                    "solicitud_productos." +
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
                                  _vm._s(
                                    _vm.form.solicitud_moneda
                                      ? _vm.form.solicitud_moneda.codigo
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
                      _c("td", { attrs: { colspan: "6" } }),
                      _vm._v(" "),
                      _c("td", [_vm._v("Subtotal")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
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
                      _c("td", { attrs: { colspan: "6" } }),
                      _vm._v(" "),
                      _c("td", [_vm._v("Descuento")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
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
                      _c("td", { attrs: { colspan: "5" } }),
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
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
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
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "2" } },
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
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
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
                      to: { name: "listado-solicitudes-compras" }
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Crear Solicitud")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Solicitud de compra")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una area para continuar.")
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
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Necesidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Proveedor")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Administrar Solicitudes de Compra")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Solicitudes")
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
              _vm._v("> Solicitudes de compra")
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
                    to: { name: "registrar-solicitud-compra" },
                    tag: "button"
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Solicitud\n        ")
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
                  _vm.obtenerSolicitudesCompra()
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
                  _c("option", { attrs: { value: "observacion" } }, [
                    _vm._v("observacion")
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
                      _vm.obtenerSolicitudesCompra()
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
                _vm._l(_vm.solicitudes_compras, function(solicitud, key) {
                  return [
                    _c("tr", { key: solicitud.id_solicitud_compra }, [
                      _c("td", [_vm._v(_vm._s(solicitud.id_solicitud_compra))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            solicitud.solicitud_moneda
                              ? solicitud.solicitud_moneda.descripcion
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            solicitud.solicitud_area
                              ? solicitud.solicitud_area.descripcion
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            solicitud.solicitud_trabajador
                              ? solicitud.solicitud_trabajador.primer_nombre +
                                  " " +
                                  solicitud.solicitud_trabajador.primer_apellido
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(solicitud.f_necesidad))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        solicitud.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Rechazado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 1
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-blue" }, [
                                _vm._v("Solicitado")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Cotizado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 3
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Autorizado")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 4
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Orden Compra")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        solicitud.estado === 99
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
                                    "Mostrar Detalles de Solicitud de Compra",
                                  expression:
                                    "'Mostrar Detalles de Solicitud de Compra'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-solicitud-compra",
                                  params: {
                                    id_solicitud_compra:
                                      solicitud.id_solicitud_compra
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
                          solicitud.estado === 99
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          "Actualizar de Solicitud de Compra",
                                        expression:
                                          "'Actualizar de Solicitud de Compra'"
                                      }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "actualizar-solicitud-compra",
                                        params: {
                                          id_solicitud_compra:
                                            solicitud.id_solicitud_compra
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
                          [1, 2, 3].indexOf(Number(solicitud.estado)) >= 0
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          solicitud.estado === 1
                                            ? "Confirmar Cotización de Solicitud"
                                            : solicitud.estado === 2
                                            ? "Autorizar Solicitud de Compra"
                                            : "Revisar Estado de Solicitud de Compra",
                                        expression:
                                          "solicitud.estado===1?'Confirmar Cotización de Solicitud': solicitud.estado===2?'Autorizar Solicitud de Compra':'Revisar Estado de Solicitud de Compra'"
                                      }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "revisar-solicitud-compra",
                                        params: {
                                          id_solicitud_compra:
                                            solicitud.id_solicitud_compra
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
                    solicitud.mostrar
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
                                  _vm._l(
                                    solicitud.solicitud_productos,
                                    function(productosDetalle) {
                                      return _c(
                                        "tr",
                                        {
                                          key:
                                            productosDetalle.id_solicitud_compra_producto
                                        },
                                        [
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                productosDetalle
                                                  .solicitud_producto
                                                  .codigo_sistema
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                productosDetalle
                                                  .solicitud_producto
                                                  .descripcion
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                productosDetalle
                                                  .solicitud_producto
                                                  .unidad_medida.unidad_medida
                                              )
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
                                              _vm._s(
                                                productosDetalle.precio_info
                                              )
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
                                    }
                                  ),
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
                                          _vm._s(
                                            solicitud.solicitud_moneda
                                              ? solicitud.solicitud_moneda
                                                  .codigo
                                              : ""
                                          ) +
                                            " " +
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                solicitud.subtotal,
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
                                          _vm._s(
                                            solicitud.solicitud_moneda
                                              ? solicitud.solicitud_moneda
                                                  .codigo
                                              : ""
                                          ) +
                                            " " +
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                solicitud.total_descuento,
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
                                        _vm._v(_vm._s(solicitud.tot_unidades))
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
                                          _vm._s(
                                            solicitud.solicitud_moneda
                                              ? solicitud.solicitud_moneda
                                                  .codigo
                                              : ""
                                          ) +
                                            " " +
                                            _vm._s(
                                              _vm._f("formatMoney")(
                                                solicitud.total,
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
                !_vm.solicitudes_compras.length
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
            items: _vm.solicitudes_compras,
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
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Moneda")]),
        _vm._v(" "),
        _c("th", [_vm._v("Area")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trabajador")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Necesidad")]),
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
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Código producto")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidad de medida")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarSolicitud.vue?vue&type=template&id=7c28403e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/MostrarSolicitud.vue?vue&type=template&id=7c28403e& ***!
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
    _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c("span", { staticClass: "panel-title" }, [
          _vm._v(
            "Solicitud de Compra No. " + _vm._s(_vm.form.id_solicitud_compra)
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "a",
            {
              staticStyle: { "margin-right": "10px" },
              on: { click: _vm.regresar }
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
                    "compras/solicitudes/reporte/" +
                      _vm.form.id_solicitud_compra
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
                _c("div", { staticClass: "step" }, [_vm._v("Solicitado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Cotizado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Autorizado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.form.estado === 99
            ? [
                _c("div", { staticClass: "step complete" }, [
                  _vm._v("Borrador")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Solicitado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Cotizado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Autorizado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.form.estado === 1
            ? [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Cotizado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Autorizado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.form.estado === 2
            ? [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Autorizado")]),
                _vm._v(" "),
                _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
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
                _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
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
                _vm._m(9)
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
                _c("div", { staticClass: "company-address" }, [
                  _c("strong", [
                    _vm._v(
                      "Solicitud de Compra No. " +
                        _vm._s(_vm.form.id_solicitud_compra)
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
                _c("table", { staticClass: "document-summary-left" }, [
                  _c("tbody", [
                    _c(
                      "tr",
                      [
                        _vm._m(10),
                        _vm._v(" "),
                        _vm.form.solicitud_trabajador
                          ? [
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.form.solicitud_trabajador
                                      .primer_nombre +
                                      " " +
                                      _vm.form.solicitud_trabajador
                                        .primer_apellido
                                  )
                                )
                              ])
                            ]
                          : [_c("td", [_vm._v("N/A")])]
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "tr",
                      [
                        _c("td", [_vm._v("Bodega:")]),
                        _vm._v(" "),
                        _vm.form.solicitud_bodega
                          ? [
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.form.solicitud_bodega.descripcion)
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
                        _c("td", [_vm._v("Area:")]),
                        _vm._v(" "),
                        _vm.form.solicitud_area
                          ? [
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.form.solicitud_area.descripcion)
                                )
                              ])
                            ]
                          : [_c("span", [_vm._v("N/A")])]
                      ],
                      2
                    )
                  ])
                ])
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
                                [_vm._v("Solicitada")]
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
                                [_vm._v("Cotizada")]
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
                                [_vm._v("Autorizada")]
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
                                [_vm._v("Orden de Compra")]
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
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("No. Solicitud")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.id_solicitud_compra))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Fecha Emisión:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(_vm.form.f_necesidad)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Moneda:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.form.solicitud_moneda.descripcion))
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
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("Código producto")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Descripción")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("UM")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Proveedor")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "align-center" }, [
                    _vm._v("Cantidad")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "align-center" }, [
                    _vm._v(
                      "Precio unitario " +
                        _vm._s(_vm.form.solicitud_moneda.codigo)
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "align-center" }, [
                    _vm._v("Descuento %")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "align-center" }, [
                    _vm._v("Total " + _vm._s(_vm.form.solicitud_moneda.codigo))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.solicitud_productos, function(item) {
                    return [
                      _c(
                        "tr",
                        { key: item.id_solicitud_compra_producto },
                        [
                          _c("td", { staticClass: "width-2" }, [
                            _vm._v(
                              "\n                      " +
                                _vm._s(item.solicitud_producto.codigo_sistema) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "width-2" }, [
                            _c("pre", [
                              _vm._v(
                                _vm._s(item.solicitud_producto.descripcion)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "width-2" }, [
                            _vm._v(
                              "\n                      " +
                                _vm._s(
                                  item.solicitud_producto.unidad_medida
                                    .unidad_medida
                                ) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "width-2" }, [
                            _c("pre", [
                              _vm._v(
                                _vm._s(
                                  item.solicitud_proveedor.nombre_comercial
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm.form.estado !== 1
                            ? [
                                _c(
                                  "td",
                                  { staticClass: "width-1 align-center" },
                                  [_vm._v(_vm._s(item.cantidad_cotizado))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "width-2 align-right" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          item.precio_cotizado,
                                          2
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "width-2 align-right" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatMoney")(item.descuento, 2)
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
                                        _vm._f("formatMoney")(
                                          item.precio_info,
                                          2
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "width-2 align-right" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatMoney")(item.descuento, 2)
                                      )
                                    )
                                  ]
                                )
                              ],
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
                  _c("td", { attrs: { colspan: "4" } }),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "3" } }, [
                    _vm._v(
                      "Total Antes de descuento " +
                        _vm._s(_vm.form.solicitud_moneda.codigo)
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
                  _c("td", { attrs: { colspan: "4" } }),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "3" } }, [
                    _vm._v(
                      "Descuento " + _vm._s(_vm.form.solicitud_moneda.codigo)
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
                  _c("td", { attrs: { colspan: "4" } }),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "3" } }, [
                    _vm._v(
                      "Impuesto " +
                        _vm._s(
                          _vm.form.solicitud_moneda
                            ? _vm.form.solicitud_moneda.codigo
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
                  _c("td", { attrs: { colspan: "4" } }),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "3" } }, [
                    _c("strong", [
                      _vm._v(
                        "Total " +
                          _vm._s(
                            _vm.form.solicitud_moneda
                              ? _vm.form.solicitud_moneda.codigo
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
          _c("div", { staticClass: "document-footer row" }, [
            _c("div", { staticClass: "col col-12" }, [
              _c("strong", [_vm._v("Observaciones:")]),
              _vm._v(" "),
              _c("div", { staticClass: "document-terms" }, [
                _c("pre", [_vm._v(_vm._s(_vm.form.observacion))])
              ])
            ])
          ])
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
    return _c("div", { staticClass: "step complete" }, [
      _c("i", {
        staticClass: "fa fa-check-circle",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("    Solicitado")
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
      _vm._v("    Solicitado")
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
      _vm._v("    Cotizado")
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
      _vm._v("    Solicitado")
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
      _vm._v("    Cotizado")
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
      _vm._v("    Autorizado")
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
      _vm._v("    Solicitado")
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
      _vm._v("    Cotizado")
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
      _vm._v("    Autorizado")
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
      _vm._v("    Orden Compra")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Solicitante:")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=template&id=329c0ed8&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=template&id=329c0ed8& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Usuario Solicitante")
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Area Solicitante")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.areas },
                      model: {
                        value: _vm.form.area,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "area", $$v)
                        },
                        expression: "form.area"
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      model: {
                        value: _vm.form.solicitud_bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "solicitud_bodega", $$v)
                        },
                        expression: "form.solicitud_bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.solicitud_bodega, function(
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
                      attrs: { label: "descripcion", options: _vm.monedas },
                      model: {
                        value: _vm.form.solicitud_moneda,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "solicitud_moneda", $$v)
                        },
                        expression: "form.solicitud_moneda"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.solicitud_moneda, function(
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha Necesidad")
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
                      _vm._l(_vm.errorMessages.f_necesidad, function(message) {
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
              _c("div", { staticClass: "col-sm-9" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Observaciones solicitud")
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
              ])
            ]),
            _vm._v(" "),
            !_vm.form.area
              ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "producto",
                      attrs: {
                        "allow-empty": false,
                        options: _vm.productos,
                        searchable: true,
                        "show-labels": false,
                        "deselect-label": "No se puede eliminar este valor",
                        label: "text",
                        placeholder: "Selecciona un producto",
                        "track-by": "id_producto"
                      },
                      on: { input: _vm.seleccionarProducto },
                      model: {
                        value: _vm.detalleForm.productox,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "productox", $$v)
                        },
                        expression: "detalleForm.productox"
                      }
                    }),
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "nombre_comercial",
                        options: _vm.proveedores
                      },
                      model: {
                        value: _vm.detalleForm.proveedorx,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "proveedorx", $$v)
                        },
                        expression: "detalleForm.proveedorx"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.proveedorx, function(message) {
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
                    attrs: { type: "number" },
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Precio Unitatio $")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("div", { staticClass: "input-group-addon" }, [
                      _vm._v(
                        _vm._s(
                          _vm.form.solicitud_moneda
                            ? _vm.form.solicitud_moneda.codigo
                            : ""
                        ) + "\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.detalleForm.precio_info,
                          expression: "detalleForm.precio_info",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.detalleForm.precio_info },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detalleForm,
                            "precio_info",
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
                    _vm._l(_vm.errorMessages.precio_infox, function(message) {
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
                      _vm._v("Fecha Necesidad")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelect2 }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.f_necesidad_productox, function(
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
                  _vm._m(3),
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
                            _c("td", [
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
                                domProps: { value: item.productox.descripcion },
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
                                    name: "mask",
                                    rawName: "v-mask",
                                    value: "####-##-##",
                                    expression: "'####-##-##'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.f_necesidad_producto,
                                    expression: "item.f_necesidad_producto"
                                  }
                                ],
                                staticClass: "form-control",
                                domProps: { value: item.f_necesidad_producto },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "f_necesidad_producto",
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
                                      ".f_necesidad_producto"
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
                                    value: item.proveedorx.nombre_comercial,
                                    expression:
                                      "item.proveedorx.nombre_comercial"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.proveedorx.nombre_comercial
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.proveedorx,
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
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".proveedorx.id_proveedor"
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
                                attrs: { type: "number" },
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
                                    value: item.precio_info,
                                    expression: "item.precio_info",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number" },
                                domProps: { value: item.precio_info },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "precio_info",
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
                                    "detalleProductos." + index + ".precio_info"
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
                                attrs: { type: "number" },
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
                                    _vm.form.solicitud_moneda
                                      ? _vm.form.solicitud_moneda.codigo
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
                      _c("td", { attrs: { colspan: "6" } }),
                      _vm._v(" "),
                      _c("td", [_vm._v("Subtotal")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
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
                      _c("td", { attrs: { colspan: "6" } }),
                      _vm._v(" "),
                      _c("td", [_vm._v("Descuento")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
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
                      _c("td", { attrs: { colspan: "5" } }),
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
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
                                : ""
                            ) +
                              " " +
                              _vm._s(
                                _vm._f("formatMoney")(_vm.total_impuesto, 2)
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "2" } }),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "2" } },
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
                              _vm.form.solicitud_moneda
                                ? _vm.form.solicitud_moneda.codigo
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
                      to: { name: "listado-solicitudes-compras" }
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
                      disabled: _vm.btnAction !== "Solicitar",
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Crear Solicitud")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Solicitud de compra")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una area para continuar.")
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
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Necesidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Proveedor")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1& ***!
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
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "content-box" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-wizard-nav" },
            [
              _vm.form.estado === 1
                ? [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Cotizado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Autorizado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.form.estado === 2
                ? [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Autorizado")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
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
                    _c("div", { staticClass: "step" }, [_vm._v("Orden Compra")])
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Usuario Solicitante")
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "nombre_completo",
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
                    _vm._l(_vm.errorMessages.solicitud_area, function(message) {
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
                    _vm._v("Area Solicitante")
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.areas
                    },
                    model: {
                      value: _vm.form.solicitud_area,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "solicitud_area", $$v)
                      },
                      expression: "form.solicitud_area"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.solicitud_area, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.bodegas
                    },
                    model: {
                      value: _vm.form.solicitud_bodega,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "solicitud_bodega", $$v)
                      },
                      expression: "form.solicitud_bodega"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.solicitud_bodega, function(
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
                    attrs: {
                      disabled: true,
                      label: "descripcion",
                      options: _vm.monedas
                    },
                    model: {
                      value: _vm.form.solicitud_moneda,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "solicitud_moneda", $$v)
                      },
                      expression: "form.solicitud_moneda"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.solicitud_moneda, function(
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha Necesidad")
                  ]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      disabled: true,
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
                    _vm._l(_vm.errorMessages.f_necesidad, function(message) {
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
            _c("div", { staticClass: "col-sm-9" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Observaciones solicitud")
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
            ])
          ]),
          _vm._v(" "),
          !_vm.form.solicitud_area
            ? _c("div", [_vm._m(7), _vm._v(" "), _c("hr")])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(8),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.solicitud_productos, function(
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
                    _c("th", [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Fecha Necesidad")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Proveedor")]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "Cantidad " +
                          _vm._s(
                            _vm.form.estado === 1 || _vm.form.estado === 2
                              ? "Cotizado"
                              : ""
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "Precio Unitario " +
                          _vm._s(
                            _vm.form.estado === 1 || _vm.form.estado === 2
                              ? "Cotizado"
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
                    _vm._l(_vm.form.solicitud_productos, function(item, index) {
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
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.solicitud_producto.descripcion,
                                    expression:
                                      "item.solicitud_producto.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.solicitud_producto.descripcion
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.solicitud_producto,
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
                                    "solicitud_productos." +
                                      index +
                                      ".solicitud_producto.id_producto"
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
                                    name: "mask",
                                    rawName: "v-mask",
                                    value: "####-##-##",
                                    expression: "'####-##-##'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.f_necesidad_producto,
                                    expression: "item.f_necesidad_producto"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.f_necesidad_producto },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "f_necesidad_producto",
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
                                    "solicitud_productos." +
                                      index +
                                      ".f_necesidad_producto"
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
                                    value:
                                      item.solicitud_proveedor.nombre_comercial,
                                    expression:
                                      "item.solicitud_proveedor.nombre_comercial"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value:
                                    item.solicitud_proveedor.nombre_comercial
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.solicitud_proveedor,
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
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".solicitud_proveedor.id_proveedor"
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
                            _vm.form.estado !== 1
                              ? [
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.number",
                                          value: item.cantidad_cotizado,
                                          expression: "item.cantidad_cotizado",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: _vm.form.estado !== 1,
                                        type: "number"
                                      },
                                      domProps: {
                                        value: item.cantidad_cotizado
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "cantidad_cotizado",
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
                                          value: item.precio_cotizado,
                                          expression: "item.precio_cotizado",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: _vm.form.estado !== 1,
                                        type: "number"
                                      },
                                      domProps: { value: item.precio_cotizado },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "precio_cotizado",
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
                                            ".precio_info"
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
                                        disabled: _vm.form.estado !== 1,
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
                                          value: item.precio_info,
                                          expression: "item.precio_info",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: _vm.form.estado !== 1,
                                        type: "number"
                                      },
                                      domProps: { value: item.precio_info },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "precio_info",
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
                                            ".precio_info"
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
                                  disabled: _vm.form.estado !== 1,
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
                                    "solicitud_productos." +
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
                                  _vm._s(
                                    _vm.form.solicitud_moneda
                                      ? _vm.form.solicitud_moneda.codigo
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
                    _c("td", { attrs: { colspan: "6" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Subtotal")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.solicitud_moneda
                              ? _vm.form.solicitud_moneda.codigo
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
                    _c("td", { attrs: { colspan: "6" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Descuento")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.form.solicitud_moneda
                              ? _vm.form.solicitud_moneda.codigo
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
                    _c("td", { attrs: { colspan: "5" } }),
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
                        attrs: {
                          disabled: _vm.form.estado !== 1,
                          min: "0",
                          max: "99"
                        },
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
                            _vm.form.solicitud_moneda
                              ? _vm.form.solicitud_moneda.codigo
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
                    _c("td", { attrs: { colspan: "2" } }),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "item-footer", attrs: { colspan: "2" } },
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
                            _vm.form.solicitud_moneda
                              ? _vm.form.solicitud_moneda.codigo
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
                    to: { name: "listado-solicitudes-compras" }
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
                      [_vm._v("Confirmar Cotización")]
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
                      [_vm._v("Autorizar Solicitud")]
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
              _vm.loading
                ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
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
        _vm._v("Revisión de Solicitud de Compra")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para revisión de Solicitud de compra")
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
      _vm._v("    Solicitado")
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
      _vm._v("    Solicitado")
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
      _vm._v("    Cotizado")
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
      _vm._v("    Solicitado")
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
      _vm._v("    Cotizado")
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
      _vm._v("    Autorizado")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una area para continuar.")
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

/***/ "./resources/app/api/solicitudes_compras.js":
/*!**************************************************!*\
  !*** ./resources/app/api/solicitudes_compras.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerSolicitudesCompra: function obtenerSolicitudesCompra(data, cb, errorCb) {
    axios.post('compras/solicitudes/obtener', data).then(function (response) {
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
    axios.post('compras/solicitudes/registrar', data).then(function (response) {
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
    axios.put('compras/solicitudes/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nueva: function nueva(cb, errorCb) {
    axios.get('compras/solicitudes/nueva').then(function (response) {
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
    axios.post('compras/solicitudes/obtener-solicitud-compra', data).then(function (response) {
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
    axios.put('compras/solicitudes/cambiar-estado', data).then(function (response) {
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

/***/ "./resources/app/components/compras/ActualizarSolicitudCompra.vue":
/*!************************************************************************!*\
  !*** ./resources/app/components/compras/ActualizarSolicitudCompra.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActualizarSolicitudCompra_vue_vue_type_template_id_7b54bfb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6& */ "./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6&");
/* harmony import */ var _ActualizarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActualizarSolicitudCompra.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ActualizarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ActualizarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActualizarSolicitudCompra_vue_vue_type_template_id_7b54bfb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActualizarSolicitudCompra_vue_vue_type_template_id_7b54bfb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/ActualizarSolicitudCompra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarSolicitudCompra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_template_id_7b54bfb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ActualizarSolicitudCompra.vue?vue&type=template&id=7b54bfb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_template_id_7b54bfb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarSolicitudCompra_vue_vue_type_template_id_7b54bfb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/ListadoSolicitudesCompra.vue":
/*!***********************************************************************!*\
  !*** ./resources/app/components/compras/ListadoSolicitudesCompra.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoSolicitudesCompra_vue_vue_type_template_id_03563042_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true& */ "./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true&");
/* harmony import */ var _ListadoSolicitudesCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoSolicitudesCompra.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoSolicitudesCompra_vue_vue_type_style_index_0_id_03563042_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true& */ "./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoSolicitudesCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoSolicitudesCompra_vue_vue_type_template_id_03563042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoSolicitudesCompra_vue_vue_type_template_id_03563042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03563042",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/ListadoSolicitudesCompra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoSolicitudesCompra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_style_index_0_id_03563042_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=style&index=0&id=03563042&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_style_index_0_id_03563042_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_style_index_0_id_03563042_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_style_index_0_id_03563042_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_style_index_0_id_03563042_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_style_index_0_id_03563042_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_template_id_03563042_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/ListadoSolicitudesCompra.vue?vue&type=template&id=03563042&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_template_id_03563042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoSolicitudesCompra_vue_vue_type_template_id_03563042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/MostrarSolicitud.vue":
/*!***************************************************************!*\
  !*** ./resources/app/components/compras/MostrarSolicitud.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MostrarSolicitud_vue_vue_type_template_id_7c28403e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarSolicitud.vue?vue&type=template&id=7c28403e& */ "./resources/app/components/compras/MostrarSolicitud.vue?vue&type=template&id=7c28403e&");
/* harmony import */ var _MostrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarSolicitud.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/MostrarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MostrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarSolicitud_vue_vue_type_template_id_7c28403e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MostrarSolicitud_vue_vue_type_template_id_7c28403e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/MostrarSolicitud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/MostrarSolicitud.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/compras/MostrarSolicitud.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarSolicitud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/MostrarSolicitud.vue?vue&type=template&id=7c28403e&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/compras/MostrarSolicitud.vue?vue&type=template&id=7c28403e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarSolicitud_vue_vue_type_template_id_7c28403e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarSolicitud.vue?vue&type=template&id=7c28403e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/MostrarSolicitud.vue?vue&type=template&id=7c28403e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarSolicitud_vue_vue_type_template_id_7c28403e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarSolicitud_vue_vue_type_template_id_7c28403e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/RegistrarSolicitud.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/components/compras/RegistrarSolicitud.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarSolicitud_vue_vue_type_template_id_329c0ed8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarSolicitud.vue?vue&type=template&id=329c0ed8& */ "./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=template&id=329c0ed8&");
/* harmony import */ var _RegistrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarSolicitud.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarSolicitud_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarSolicitud.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarSolicitud_vue_vue_type_template_id_329c0ed8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarSolicitud_vue_vue_type_template_id_329c0ed8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/RegistrarSolicitud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSolicitud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSolicitud.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=template&id=329c0ed8&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=template&id=329c0ed8& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_template_id_329c0ed8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSolicitud.vue?vue&type=template&id=329c0ed8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RegistrarSolicitud.vue?vue&type=template&id=329c0ed8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_template_id_329c0ed8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSolicitud_vue_vue_type_template_id_329c0ed8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/compras/RevisarSolicitudCompra.vue":
/*!*********************************************************************!*\
  !*** ./resources/app/components/compras/RevisarSolicitudCompra.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RevisarSolicitudCompra_vue_vue_type_template_id_665f96c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1& */ "./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1&");
/* harmony import */ var _RevisarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevisarSolicitudCompra.vue?vue&type=script&lang=js& */ "./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RevisarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RevisarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RevisarSolicitudCompra_vue_vue_type_template_id_665f96c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RevisarSolicitudCompra_vue_vue_type_template_id_665f96c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/compras/RevisarSolicitudCompra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarSolicitudCompra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_template_id_665f96c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/compras/RevisarSolicitudCompra.vue?vue&type=template&id=665f96c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_template_id_665f96c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisarSolicitudCompra_vue_vue_type_template_id_665f96c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);