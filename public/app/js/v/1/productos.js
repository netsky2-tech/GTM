(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Actualizar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Actualizar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
/* harmony import */ var _api_rubros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/rubros */ "./resources/app/api/rubros.js");
/* harmony import */ var _api_impuestos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/impuestos */ "./resources/app/api/impuestos.js");
/* harmony import */ var _api_unidad_medida__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/unidad_medida */ "./resources/app/api/unidad_medida.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      //It is important to import the loading image then use here
      tipoProducto: true,
      rubros: [],
      impuestos: [],
      ums: [],
      form: {
        precio_compra: 0,
        precio_distribuidor: 0,
        codigo_sistema: '',
        codigo_consecutivo: 0,
        nombre_comercial: '',
        descripcion: '',
        costo_estandar: 0,
        precio_sugerido: 0,
        existencia_min: 1,
        existencia_max: 1,
        cantidad_inicial: 0,
        tipo_producto: 0,
        codigo_barra: '',
        imagen: '',
        rubro_producto: '',
        impuesto_producto: '',
        unidad_medida: ''
      },
      uploader: [],
      btnAction: "Guardar",
      errorMessages: []
    };
  },
  methods: {
    desactivar: function desactivar(productoId) {
      var _this = this;

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
          _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_producto: productoId
          }, function (data) {
            alertify.warning("Producto desactivado correctamente", 5);

            _this.$router.push({
              name: "productos"
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(productoId) {
      var _this2 = this;

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
          _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_producto: productoId
          }, function (data) {
            alertify.success("Producto activado correctamente", 5);

            _this2.$router.push({
              name: "productos"
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    ObtenerProductoEspecifico: function ObtenerProductoEspecifico() {
      var self = this;
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerProducto({
        id_producto: this.$route.params.id_producto
      }, function (data) {
        self.form = data;
        self.loading = false; //self.uploader.set_files(data.imagen);

        try {
          self.uploader.set_files(data.imagen);
        } catch (Exception) {
          console.log('error asignando imagen');
        }

        self.seleccionaTipo();
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosRubrosPS: function obtenerTodosRubrosPS() {
      var self = this;
      _api_rubros__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodosRubrosPS(function (data) {
        self.rubros = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosImpuestos: function obtenerTodosImpuestos() {
      var self = this;
      _api_impuestos__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodosImpuestos(function (data) {
        self.impuestos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosUnidadMedida: function obtenerTodosUnidadMedida() {
      var self = this;
      _api_unidad_medida__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodas(function (data) {
        self.ums = data;
      }, function (err) {
        console.log(err);
      });
    },
    seleccionaTipo: function seleccionaTipo() {
      var self = this; //console.log(self.form.tipo_producto);

      if (self.form.tipo_producto === 1) {
        self.tipoProducto = false;
      } else {
        self.tipoProducto = true;
      }
    },
    getImages: function getImages() {
      var imagen = $('input[name="imagen"]').val();

      if (JSON.parse(imagen).length) {
        return imagen;
      } else {
        return "";
      }
    },
    actualizarProducto: function actualizarProducto() {
      var _this3 = this;

      var self = this;
      self.loading = true;
      self.btnAction = "Guardando, espere....";
      self.form.imagen = this.getImages();
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].actualizarProducto(self.form, function (data) {
        _this3.$router.push({
          name: "productos"
        });

        alertify.success("Producto Actualizado Correctamente!", 5);
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = "Guardar";
      });
    },
    initUploader: function initUploader() {
      var self = this;
      this.uploader = $("#uploader-button").uploader({
        upload_url: window.location.origin + "/public/media/upload",
        file_picker_url: window.location.origin + "/public/media/get-files",
        input_name: "imagen",
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ["image/jpeg", "image/png"],
        on_before_upload: function on_before_upload() {
          self.btnAction = "Subiendo imágenes...";
        },
        on_success_upload: function on_success_upload() {
          self.btnAction = "Guardar";
        },
        on_error: function on_error(err) {
          console.log(err);
        }
      });
    }
  },
  mounted: function mounted() {
    this.initUploader();
    this.obtenerTodosImpuestos();
    this.obtenerTodosRubrosPS();
    this.obtenerTodosUnidadMedida();
    this.ObtenerProductoEspecifico();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Listado.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
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
      productos: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    downloadItem: function downloadItem(extension) {
      var _this = this;

      var self = this;
      console.log(self.descargando);

      if (!self.descargando) {
        var url = 'productos/ps/reporte/' + extension;
        self.descargando = true;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
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
          link.download = 'ReporteProductosServicios.' + extension;
          link.click();
          _this.descargando = false;
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
    obtenerProductos: function obtenerProductos() {
      var self = this;
      self.loading = true;
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerProductos(self.filter, function (data) {
        self.productos = data.rows;
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
      this.obtenerProductos();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerProductos();
    }
  },
  mounted: function mounted() {
    this.obtenerProductos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Registrar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Registrar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_1__);
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
 //import rubro from '../../api/rubros'
//import impuesto from '../../api/impuestos'
//import um from '../../api/unidad_medida'
//import bodega from "../../api/bodegas";



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'barcode': vue_barcode__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      loading: true,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      textPositionx: 'center',
      heightx: 25,
      widthx: 2,
      marginTopx: 40,
      formatx: 'upc',
      tipoProducto: true,
      rubros: [],
      impuestos: [],
      ums: [],
      bodegas: [],
      form: {
        precio_compra: 0,
        precio_distribuidor: 0,
        codigo_sistema: '',
        codigo_consecutivo: 0,
        nombre_comercial: '',
        descripcion: '',
        costo_estandar: 0,
        precio_sugerido: 0,
        existencia_min: 1,
        existencia_max: 1,
        cantidad_inicial: 0,
        tipo_producto: 1,
        codigo_barra: '',
        imagen: '',
        rubro_producto: '',
        impuesto_producto: '',
        unidad_medida: '',
        bodega_inicial: ""
      },
      uploader: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  methods: {
    nueva: function nueva() {
      var self = this;
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.bodegas = data.bodegas;
        self.form.bodega_inicial = self.bodegas[0];
        self.proveedores = data.proveedores;
        self.rubros = data.rubros;
        self.impuestos = data.impuestos;
        self.ums = data.unidades_medida;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerCodigo: function obtenerCodigo() {
      var self = this;
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerCodigoProducto({
        id_rubro: self.form.rubro_producto.id_rubro
      }, function (data) {
        //console.log(data);
        self.form.codigo_consecutivo = data.codigo_siguiente;
        self.obtenerConcatenarCodigo();
      }, function (err) {
        alertify.error(err, 5);
      });
    },
    seleccionaTipo: function seleccionaTipo() {
      var self = this;

      if (self.form.tipo_producto === 1) {
        self.tipoProducto = true;
        self.form.costo_estandar = 0;
        self.form.precio_sugerido = 0;
        self.form.existencia_min = 0;
        self.form.existencia_max = 1;
        self.form.cantidad_inicial = 0;
        self.form.codigo_barra = 'N/A';
        self.form.imagen = '';
        self.form.rubro_producto = '';
        self.form.impuesto_producto = '';
        self.form.unidad_medida = '';
      } else if (self.form.tipo_producto === 2) {
        self.tipoProducto = false;
        self.form.costo_estandar = 0;
        self.form.precio_sugerido = 0;
        self.form.existencia_min = 1;
        self.form.existencia_max = 1;
        self.form.cantidad_inicial = 0;
        self.form.codigo_barra = '';
        self.form.imagen = '';
        self.form.rubro_producto = '';
        self.form.impuesto_producto = '';
        self.form.unidad_medida = '';
        self.ums.forEach(function (umx, indice) {
          if (umx.id_unidad_medida === 11) {
            self.form.unidad_medida = self.ums[indice];
          }
        });
      } else {
        self.tipoProducto = true;
        self.form.costo_estandar = 0;
        self.form.precio_sugerido = 0;
        self.form.existencia_min = 0;
        self.form.existencia_max = 1;
        self.form.cantidad_inicial = 0;
        self.form.codigo_barra = 'N/A';
        self.form.imagen = '';
        self.form.rubro_producto = '';
        self.form.impuesto_producto = '';
        self.form.unidad_medida = '';
      }
    },

    /*obtenerTodasBodegas() {
    	var self = this;
    	bodega.obtenerTodasBodegas(
    			data => {
    				self.bodegas = data;
    				self.form.bodega_inicial=self.bodegas[0];
    			},
    			err => {
    				console.log(err);
    			}
    	);
    },*/
    obtenerConcatenarCodigo: function obtenerConcatenarCodigo() {
      var self = this;
      self.form.codigo_sistema = self.form.rubro_producto.codigo + '-' + self.form.codigo_consecutivo;
    },

    /*obtenerTodosRubrosPS() {
    	var self = this
    	rubro.obtenerTodosRubrosPS(data => {
    		self.rubros = data
    	}, err => {
    		console.log(err)
    	})
    },
    obtenerTodosImpuestos() {
    	var self = this
    	impuesto.obtenerTodosImpuestos(data => {
    		self.impuestos = data
    	}, err => {
    		console.log(err)
    	})
    },
    obtenerTodosUnidadMedida() {
    	var self = this
    	um.obtenerTodas(data => {
    		self.ums = data
    	}, err => {
    		console.log(err)
    	})
    },*/
    getImages: function getImages() {
      var imagen = $('input[name="imagen"]').val();

      if (JSON.parse(imagen).length) {
        return imagen;
      } else {
        return '';
      }
    },
    registrarProducto: function registrarProducto() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.form.imagen = this.getImages();
      self.loading = true;
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].registrarProducto(self.form, function (data) {
        self.loading = false;

        _this.$router.push({
          name: 'productos'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    },
    initUploader: function initUploader() {
      var self = this;
      this.uploader = $('#uploader-button').uploader({
        upload_url: window.location.origin + '/public/media/upload',
        file_picker_url: window.location.origin + '/public/media/get-files',
        input_name: 'imagen',
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ['image/jpeg', 'image/png'],
        on_before_upload: function on_before_upload() {
          self.btnAction = 'Subiendo imágenes...';
        },
        on_success_upload: function on_success_upload() {
          self.btnAction = 'Guardar';
        },
        on_error: function on_error(err) {
          console.log(err);
        }
      });
    }
  },
  mounted: function mounted() {
    this.initUploader();
    this.nueva();
    /*
    this.obtenerTodasBodegas();
    this.obtenerTodosImpuestos()
    this.obtenerTodosRubrosPS()
    this.obtenerTodosUnidadMedida()
    this.seleccionaTipo()
    */
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-38a7c642] {\n  min-width: 120px;\n}\n.table a[data-v-38a7c642] {\n  color: #2675dc;\n}\n.table .table-number[data-v-38a7c642] {\n  width: 60px;\n}\n.table .action[data-v-38a7c642] {\n  width: 180px;\n}\n.table .detail-link[data-v-38a7c642] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-38a7c642] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-38a7c642]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Actualizar.vue?vue&type=template&id=e3e1eca2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Actualizar.vue?vue&type=template&id=e3e1eca2& ***!
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
          _c("form", [
            _c("div", { staticClass: "row" }, [
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
                          value: _vm.form.tipo_producto,
                          expression: "form.tipo_producto",
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
                            _vm.form,
                            "tipo_producto",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Producto")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Servicio")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Rubro:")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: true,
                        options: _vm.rubros,
                        label: "descripcion"
                      },
                      model: {
                        value: _vm.form.rubro_producto,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "rubro_producto", $$v)
                        },
                        expression: "form.rubro_producto"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.id_rubro, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Código")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.codigo_sistema,
                        expression: "form.codigo_sistema"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Código Sistema", readonly: "" },
                    domProps: { value: _vm.form.codigo_sistema },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "codigo_sistema",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_sistema, function(message) {
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
                    _vm._v(
                      " Nombre " +
                        _vm._s(
                          _vm.form.tipo_producto === 1 ? "Producto" : "Servicio"
                        )
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nombre_comercial,
                        expression: "form.nombre_comercial"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Nombre" },
                    domProps: { value: _vm.form.nombre_comercial },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Unidad de medida")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: _vm.tipoProducto,
                        options: _vm.ums,
                        label: "unidad_medida"
                      },
                      model: {
                        value: _vm.form.unidad_medida,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "unidad_medida", $$v)
                        },
                        expression: "form.unidad_medida"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(
                        _vm.errorMessages["unidad_medida.id_unidad_medida"],
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Descripción")]),
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
                    attrs: { placeholder: "Descripción" },
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Código Barras")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.codigo_barra,
                        expression: "form.codigo_barra"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: _vm.tipoProducto,
                      placeholder: "Código Barras"
                    },
                    domProps: { value: _vm.form.codigo_barra },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "codigo_barra", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_barra, function(message) {
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
                    _vm._v(" Número Parte")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.numero_parte,
                        expression: "form.numero_parte"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Número Parte" },
                    domProps: { value: _vm.form.numero_parte },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "numero_parte", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.numero_parte, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Impuesto")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.impuestos, label: "descripcion" },
                      model: {
                        value: _vm.form.impuesto_producto,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "impuesto_producto", $$v)
                        },
                        expression: "form.impuesto_producto"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.id_impuesto, function(message) {
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
                    _vm._v(" Existencia Mínima")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.existencia_min,
                        expression: "form.existencia_min",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: _vm.tipoProducto,
                      placeholder: "Existencia Mínima",
                      type: "number",
                      min: "0"
                    },
                    domProps: { value: _vm.form.existencia_min },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "existencia_min",
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
                    _vm._l(_vm.errorMessages.existencia_min, function(message) {
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
                    _vm._v(" Existencia Máxima")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.existencia_max,
                        expression: "form.existencia_max",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: _vm.tipoProducto,
                      placeholder: "Existencia Máxima",
                      type: "number",
                      min: "0"
                    },
                    domProps: { value: _vm.form.existencia_max },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "existencia_max",
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
                    _vm._l(_vm.errorMessages.existencia_max, function(message) {
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
                    _vm._v(" Precio de compra $")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.precio_compra,
                        expression: "form.precio_compra",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Costo de compra",
                      min: "0",
                      type: "number"
                    },
                    domProps: { value: _vm.form.precio_compra },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "precio_compra",
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
                    _vm._l(_vm.errorMessages.precio_compra, function(message) {
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
                    _vm._v(" Precio de venta $")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.precio_sugerido,
                        expression: "form.precio_sugerido",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Precio de venta",
                      min: "1",
                      type: "number"
                    },
                    domProps: { value: _vm.form.precio_sugerido },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
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
                    _vm._l(_vm.errorMessages.precio_sugerido, function(
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
                    _vm._v(" Precio de venta a Distribuidor $")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.precio_distribuidor,
                        expression: "form.precio_distribuidor",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Precio de venta distribuidor",
                      min: "1",
                      type: "number"
                    },
                    domProps: { value: _vm.form.precio_distribuidor },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "precio_distribuidor",
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
                    _vm._l(_vm.errorMessages.precio_distribuidor, function(
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
                    _vm._v(" Costo Inicial C$")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.costo_estandar,
                        expression: "form.costo_estandar",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Costo Estándar C$",
                      disabled: !(_vm.form.tipo_producto === 2),
                      type: "number",
                      min: "0"
                    },
                    domProps: { value: _vm.form.costo_estandar },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "costo_estandar",
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
                    _vm._l(_vm.errorMessages.costo_estandar, function(message) {
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
                    _vm._v(" Inventario Inicial")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.cantidad_inicial,
                        expression: "form.cantidad_inicial",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Inventario Inicial",
                      readonly: "",
                      type: "number",
                      min: "0"
                    },
                    domProps: { value: _vm.form.cantidad_inicial },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "cantidad_inicial",
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
                    _vm._l(_vm.errorMessages.cantidad_inicial, function(
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
                    _vm._v(" Porcentaje DAI")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.dai,
                        expression: "form.dai",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "DAI", min: "0", type: "number" },
                    domProps: { value: _vm.form.dai },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "dai", _vm._n($event.target.value))
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
                    _vm._l(_vm.errorMessages.dai, function(message) {
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
                    _vm._v(" Porcentaje ISC")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.isc,
                        expression: "form.isc",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "ISC", min: "0", type: "number" },
                    domProps: { value: _vm.form.isc },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "isc", _vm._n($event.target.value))
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
                    _vm._l(_vm.errorMessages.isc, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Imágen")]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.imagen, function(message) {
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
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "content-box-footer text-left" },
                  [
                    _vm.form.activo === 1
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  return _vm.desactivar(_vm.form.id_producto)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash-o" }, [
                                _vm._v(" Eliminar")
                              ])
                            ]
                          )
                        ]
                      : [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              on: {
                                click: function($event) {
                                  return _vm.activar(_vm.form.id_producto)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-check-square" }, [
                                _vm._v(" Habilitar")
                              ])
                            ]
                          )
                        ]
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "content-box-footer text-right" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "button", to: { name: "productos" } } },
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
                          disabled: _vm.btnAction != "Guardar" ? true : false
                        },
                        on: { click: _vm.actualizarProducto }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.btnAction) +
                            "\n                            "
                        )
                      ]
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
        _vm._v("Actualizar Producto | Servicio")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar un producto / servicio")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uploader" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { id: "uploader-button", type: "button" }
        },
        [
          _vm._v(
            "Escoger\n                                        Imágen\n                                    "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=template&id=38a7c642&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Listado.vue?vue&type=template&id=38a7c642&scoped=true& ***!
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
            _vm._v("Administrar Artículos y Servicios")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Artículos y Servicios")
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
                  attrs: { to: { name: "pagina-principal-inventario" } }
                },
                [_vm._v(" Módulo inventario")]
              ),
              _vm._v("> Productos")
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
                  attrs: { tag: "button", to: { name: "registrar-producto" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Crear Nuevo Artículo / Servicio\n\t\t\t\t\t")
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
                  _vm.obtenerProductos()
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
                    _vm._v("Mostrar todo")
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
                    _vm._v("Descripcion")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "codigo_barra" } }, [
                    _vm._v("Código Barras")
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
              _c("p", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function($event) {
                        _vm.filter.page = 1
                        _vm.obtenerProductos()
                      }
                    }
                  },
                  [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Buscar")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticStyle: { color: "#ffffff", "padding-left": "2px" },
                    attrs: { disabled: _vm.descargando },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.downloadItem("pdf")
                      }
                    }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { disabled: _vm.descargando }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-file-pdf-o",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticStyle: { color: "#ffffff", "padding-left": "2px" },
                    attrs: { disabled: _vm.descargando },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.downloadItem("xls")
                      }
                    }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { disabled: _vm.descargando }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-file-excel-o",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ]
                )
              ])
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
                _vm._l(_vm.productos, function(producto, key) {
                  return [
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(producto.codigo_sistema))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(producto.descripcion))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(producto.nombre_comercial))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            producto.unidad_medida.descripcion +
                              " (" +
                              producto.unidad_medida.unidad_medida +
                              ")"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            producto.tipo_producto === 1
                              ? "Físico"
                              : producto.tipo_producto === 2
                              ? "Servicio"
                              : producto.tipo_producto === 4
                              ? "Bienes"
                              : "Otro"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        producto.activo
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Activo")]
                              )
                            ])
                          : _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Desactivado")]
                              )
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
                                tag: "a",
                                to: {
                                  name: "actualizar-producto",
                                  params: { id_producto: producto.id_producto }
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-pencil" })]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                }),
                _vm._v(" "),
                !_vm.productos.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "8" } },
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
            items: _vm.productos,
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
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidad de medida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Registrar.vue?vue&type=template&id=f0705684&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/Registrar.vue?vue&type=template&id=f0705684& ***!
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
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("form", [
              _c("div", { staticClass: "row" }, [
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
                            value: _vm.form.tipo_producto,
                            expression: "form.tipo_producto",
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
                                "tipo_producto",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              return _vm.seleccionaTipo()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Producto")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Servicio")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("Bienes")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Rubro:")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { label: "rubro_full", options: _vm.rubros },
                        on: { input: _vm.obtenerCodigo },
                        model: {
                          value: _vm.form.rubro_producto,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "rubro_producto", $$v)
                          },
                          expression: "form.rubro_producto"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.rubro_producto, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Código")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.codigo_sistema,
                          expression: "form.codigo_sistema"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", placeholder: "Código Sistema" },
                      domProps: { value: _vm.form.codigo_sistema },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "codigo_sistema",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.codigo_sistema, function(
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
                        " Nombre " +
                          _vm._s(
                            _vm.form.tipo_producto === 1
                              ? "Producto"
                              : "Servicio"
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.nombre_comercial,
                          expression: "form.nombre_comercial"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Nombre" },
                      domProps: { value: _vm.form.nombre_comercial },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
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
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Descripción")
                    ]),
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
                      attrs: { placeholder: "Descripción" },
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
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Unidad de medida")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          disabled: !_vm.tipoProducto,
                          label: "unidad_medida",
                          options: _vm.ums
                        },
                        model: {
                          value: _vm.form.unidad_medida,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "unidad_medida", $$v)
                          },
                          expression: "form.unidad_medida"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(
                          _vm.errorMessages["unidad_medida.id_unidad_medida"],
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Código Barras")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.codigo_barra,
                          expression: "form.codigo_barra"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: !_vm.tipoProducto,
                        placeholder: "Código Barras"
                      },
                      domProps: { value: _vm.form.codigo_barra },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "codigo_barra",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.codigo_barra, function(message) {
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
                        _vm._v(" Impuesto")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { label: "descripcion", options: _vm.impuestos },
                        model: {
                          value: _vm.form.impuesto_producto,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "impuesto_producto", $$v)
                          },
                          expression: "form.impuesto_producto"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.impuesto_producto, function(
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Existencia Mínima")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.existencia_min,
                          expression: "form.existencia_min",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: !_vm.tipoProducto,
                        type: "number",
                        min: "0",
                        placeholder: "Existencia Mínima"
                      },
                      domProps: { value: _vm.form.existencia_min },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "existencia_min",
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
                      _vm._l(_vm.errorMessages.existencia_min, function(
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
                      _vm._v(" Existencia Máxima")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.existencia_max,
                          expression: "form.existencia_max",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: !_vm.tipoProducto,
                        placeholder: "Existencia Máxima",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.existencia_max },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "existencia_max",
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
                      _vm._l(_vm.errorMessages.existencia_max, function(
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
                _c(
                  "div",
                  { staticClass: "col-sm-3" },
                  [
                    _c(
                      "barcode",
                      {
                        attrs: {
                          value: _vm.form.codigo_barra,
                          textPosition: _vm.textPositionx,
                          format: _vm.formatx,
                          marginTop: _vm.marginTopx,
                          width: _vm.widthx,
                          height: _vm.heightx
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tGenerando Código de Barras\n\t\t\t\t\t\t\t"
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Costo Inicial C$")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.costo_estandar,
                          expression: "form.costo_estandar",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        min: "1",
                        placeholder: "Costo Estándar"
                      },
                      domProps: { value: _vm.form.costo_estandar },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "costo_estandar",
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
                      _vm._l(_vm.errorMessages.costo_estandar, function(
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
                      _vm._v(" Precio de compra $")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.precio_compra,
                          expression: "form.precio_compra",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Costo de compra",
                        min: "0",
                        type: "number"
                      },
                      domProps: { value: _vm.form.precio_compra },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "precio_compra",
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
                      _vm._l(_vm.errorMessages.precio_compra, function(
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
                      _vm._v(" Precio de venta $")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.precio_sugerido,
                          expression: "form.precio_sugerido",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Precio de venta",
                        min: "1",
                        type: "number"
                      },
                      domProps: { value: _vm.form.precio_sugerido },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
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
                      _vm._l(_vm.errorMessages.precio_sugerido, function(
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
                      _vm._v(" Precio de venta a Distribuidor $")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.precio_distribuidor,
                          expression: "form.precio_distribuidor",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Precio de venta distribuidor",
                        min: "1",
                        type: "number"
                      },
                      domProps: { value: _vm.form.precio_distribuidor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "precio_distribuidor",
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
                      _vm._l(_vm.errorMessages.precio_distribuidor, function(
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
                      _vm._v(" Inventario Inicial")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.cantidad_inicial,
                          expression: "form.cantidad_inicial",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: !_vm.tipoProducto,
                        type: "number",
                        min: "0",
                        placeholder: "Inventario Inicial"
                      },
                      domProps: { value: _vm.form.cantidad_inicial },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "cantidad_inicial",
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
                      _vm._l(_vm.errorMessages.cantidad_inicial, function(
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
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          disabled: !_vm.tipoProducto,
                          label: "descripcion",
                          options: _vm.bodegas
                        },
                        model: {
                          value: _vm.form.bodega_inicial,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "bodega_inicial", $$v)
                          },
                          expression: "form.bodega_inicial"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.bodega_inicial, function(
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
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Imágen")]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.imagen, function(message) {
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
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { tag: "button", to: { name: "productos" } } },
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
                    on: { click: _vm.registrarProducto }
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
        _vm._v("Registrar Nuevo Producto / Servicio")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar nuevo producto / servicio")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uploader" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "button", id: "uploader-button" }
        },
        [_vm._v("Escoger Imágen")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/impuestos.js":
/*!****************************************!*\
  !*** ./resources/app/api/impuestos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosImpuestos: function obtenerTodosImpuestos(cb, errorCb) {
    axios.get('impuestos/obtener-impuestos-todos').then(function (response) {
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
    axios.post('impuestos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerImpuesto: function obtenerImpuesto(data, cb, errorCb) {
    axios.post('impuestos/obtener-impuesto', data).then(function (response) {
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
    axios.post('impuestos/registrar', data).then(function (response) {
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
    axios.put('impuestos/actualizar', data).then(function (response) {
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
    axios.put('impuestos/desactivar', data).then(function (response) {
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
    axios.put('impuestos/activar', data).then(function (response) {
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

/***/ "./resources/app/api/rubros.js":
/*!*************************************!*\
  !*** ./resources/app/api/rubros.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosRubrosPS: function obtenerTodosRubrosPS(cb, errorCb) {
    axios.get('rubros/obtener-rubros-todos-ps').then(function (response) {
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
    axios.post('rubros/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerRubro: function obtenerRubro(data, cb, errorCb) {
    axios.post('rubros/obtener-rubro', data).then(function (response) {
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
    axios.post('rubros/registrar', data).then(function (response) {
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
    axios.put('rubros/actualizar', data).then(function (response) {
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
    axios.put('rubros/desactivar', data).then(function (response) {
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
    axios.put('rubros/activar', data).then(function (response) {
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

/***/ "./resources/app/api/unidad_medida.js":
/*!********************************************!*\
  !*** ./resources/app/api/unidad_medida.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('unidad-medida/obtener-unidad-medidas-todas').then(function (response) {
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
    axios.post('unidad-medida/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerUnidadMedida: function obtenerUnidadMedida(data, cb, errorCb) {
    axios.post('unidad-medida/obtener-unidad-medida', data).then(function (response) {
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
    axios.post('unidad-medida/registrar', data).then(function (response) {
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
    axios.put('unidad-medida/actualizar', data).then(function (response) {
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
    axios.put('unidad-medida/desactivar', data).then(function (response) {
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
    axios.put('unidad-medida/activar', data).then(function (response) {
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

/***/ "./resources/app/components/productos/Actualizar.vue":
/*!***********************************************************!*\
  !*** ./resources/app/components/productos/Actualizar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_e3e1eca2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=e3e1eca2& */ "./resources/app/components/productos/Actualizar.vue?vue&type=template&id=e3e1eca2&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/productos/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_e3e1eca2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_e3e1eca2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/productos/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/productos/Actualizar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/app/components/productos/Actualizar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/productos/Actualizar.vue?vue&type=template&id=e3e1eca2&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/productos/Actualizar.vue?vue&type=template&id=e3e1eca2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_e3e1eca2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=e3e1eca2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Actualizar.vue?vue&type=template&id=e3e1eca2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_e3e1eca2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_e3e1eca2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/productos/Listado.vue":
/*!********************************************************!*\
  !*** ./resources/app/components/productos/Listado.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_38a7c642_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=38a7c642&scoped=true& */ "./resources/app/components/productos/Listado.vue?vue&type=template&id=38a7c642&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/productos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_38a7c642_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true& */ "./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_38a7c642_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_38a7c642_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38a7c642",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/productos/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/productos/Listado.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/productos/Listado.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_38a7c642_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=style&index=0&id=38a7c642&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_38a7c642_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_38a7c642_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_38a7c642_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_38a7c642_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_38a7c642_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/productos/Listado.vue?vue&type=template&id=38a7c642&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/productos/Listado.vue?vue&type=template&id=38a7c642&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_38a7c642_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=38a7c642&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Listado.vue?vue&type=template&id=38a7c642&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_38a7c642_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_38a7c642_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/productos/Registrar.vue":
/*!**********************************************************!*\
  !*** ./resources/app/components/productos/Registrar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_f0705684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=f0705684& */ "./resources/app/components/productos/Registrar.vue?vue&type=template&id=f0705684&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/productos/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_f0705684___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_f0705684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/productos/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/productos/Registrar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/productos/Registrar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/productos/Registrar.vue?vue&type=template&id=f0705684&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/productos/Registrar.vue?vue&type=template&id=f0705684& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_f0705684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=f0705684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/Registrar.vue?vue&type=template&id=f0705684&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_f0705684___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_f0705684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);