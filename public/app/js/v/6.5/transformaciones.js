(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transformaciones"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Actualizar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony import */ var _api_productopresentacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/productopresentacion */ "./resources/app/api/productopresentacion.js");
/* harmony import */ var _api_transformaciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/transformaciones */ "./resources/app/api/transformaciones.js");
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _form;

    return {
      loading: true,
      msg: 'Cargando contenido, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      //It is important to import the loading image then use here
      tipoProducto: true,
      rubros: [],
      impuestos: [],
      ums: [],
      bodegas: [],
      detalleForm: {
        presentacionx: '',
        cantidad: 0
      },
      form: (_form = {
        bodega: '',
        producto: '',
        productox: '',
        unidad_medida: '',
        estado: '',
        cantidadx: 0,
        conversion_salida: 0,
        totalConversion: 0,
        totalCantidad: '',
        salida_transformacion: [],
        entrada_transformacion: [],
        detalleProductos: '',
        presentacion: '',
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
        impuesto_producto: ''
      }, _defineProperty(_form, "unidad_medida", ''), _defineProperty(_form, "conversion", 0), _defineProperty(_form, "totalEscalar", 0), _form),
      uploader: [],
      productos: [],
      unidades_medidas: [],
      transformaciones: [],
      presentaciones: [],
      btnAction: "Guardar",
      btnEmitir: "Emitir",
      errorMessages: []
    };
  },
  methods: (_methods = {
    obtenerProductosBodega: function obtenerProductosBodega() {
      var self = this;
      self.detalleForm.productox = [];
      self.productos = [];
      self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.producto.id_producto,
          id_bodega_producto: bodega_producto.id_bodega_producto,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: bodega_producto.cantidad,
          unidad_medida: bodega_producto.producto.unidad_medida,
          text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial + '-' + bodega_producto.codigo_presentacion + ' ( ' + bodega_producto.no_lote + ' ) ',
          codigo_presentacion: bodega_producto.presentacion.codigo,
          escalar: bodega_producto.escalar,
          id_origen: bodega_producto.presentacion.id_origen,
          id_presentacion: bodega_producto.id_presentacion
        });
      });
    },

    /*cargarPresentaciones(){
    var self = this;
    self.loading = true;
    transformaciones.cargarPresentacionesProductos({
           id_producto: self.detalleForm.productox.id_producto,
       },data=>{
           if(data.presentaciones !== null){
               self.form.presentaciones = data.presentaciones;
           }else{
               alertify.warning("No se encuentran presentaciones para este producto.",5);
               self.form.presentaciones = [];
           }
           self.loading = false;
       },err =>{
           if(err.id_producto){
               self.form.presentaciones = [];
               alertify.warning(err.id_producto,5);
               self.loading = false;
           }
       }
    )
    },*/
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.form.productox && this.form.producto
      /* > 0*/
      ) {
          if (this.detalleForm.cantidad > 0) {
            if (this.form.producto) {
              var i = 0;
              var keyx = 0;

              if (self.form.salida_transformacion) {
                self.form.salida_transformacion.forEach(function (presentacion_salida, key) {
                  if (self.form.productox.id_presentacion === presentacion.productox.id_presentacion) {
                    i++;
                    keyx = key;
                  }
                });
              }

              if (i === 0) {
                this.form.salida_transformacion.push({
                  id_presentacion_salida: this.form.productox.id_presentacion,
                  descripcion_presentacion_salida: this.form.productox.codigo_presentacion,
                  id_producto: this.form.productox.id_producto,
                  descripcion_producto_salida: this.form.productox.text,
                  id_bodega_producto: this.form.productox.id_bodega_producto,
                  cantidad_salida: this.detalleForm.cantidad,

                  /*relacion_um_estandar: this.detalleForm.presentacionx.relacion_um_estandar,*/
                  escalar_salida: this.form.productox.escalar,
                  origen: this.form.productox.id_origen,
                  conversion_salida: this.form.totalConversion,
                  codigo_sistema: this.form.productox.codigo_sistema
                });
                /*this.detalleForm.presentacionx = '',*/

                /*this.detalleForm.productox = '',*/

                this.detalleForm.cantidad = 0;
              } else {
                this.$swal.fire({
                  title: 'El producto ya agrego al detalle, ¿Desea sumar la nueva cantidad al monto existente?',
                  text: "Revise bien la información",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sí, confirmar',
                  cancelButtonText: 'Cancelar'
                });
                /*.then((result) => {
                  if (result.value) {
                      self.form.conteo_productos[keyx].cantidad = Number(self.form.conteo_productos[keyx].cantidad) + self.detalleForm.cantidad;
                      this.detalleForm.productox = '';
                      this.detalleForm.cantidad = 0;
                  }
                })*/
              }
            } else {
              alertify.warning("Verifique que seleccionó una nueva presentación");
            }
          } else {
            alertify.warning("Los valores para la cantidad deben ser mayores a cero", 5);
          }
        } else {
        alertify.warning("Verifique que seleccionó un producto y una configuración", 5);
      }
    },
    agregarDetalleEntrada: function agregarDetalleEntrada() {
      var self = this;

      if (this.form.productox && this.form.salida_transformacion !== 0) {
        if (this.form.entrada_transformacion.length < 1) {
          if (this.form.producto.id_origen == this.form.productox.id_origen) {
            var i = 0;
            var keyx = 0;

            if (self.form.entrada_transformacion) {
              self.form.entrada_transformacion.forEach(function (presentacion_entrada, key) {
                if (self.from.producto.id_presentacion === presentacion.producto.id_presentacion) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (this.form.producto.escalar < this.form.productox.escalar) {
              if (i === 0) {
                this.form.entrada_transformacion.push({
                  descripcion_producto_entrada: this.form.productox.text,
                  id_producto_entrada: this.form.productox.id_producto,
                  id_bodega_producto: this.form.productox.id_bodega_producto,
                  id_presentacion_entrada: this.form.producto.id_presentacion,
                  descripcion_presentacion_entrada: this.form.producto.codigo_presentacion,
                  escalar_entrada: this.form.producto.escalar,
                  origenx: this.form.producto.id_origen,

                  /*relacion_um_estandar: this.form.presentacion.relacion_um_estandar,*/
                  cantidadx: this.form.cantidadx,
                  codigo_sistema: this.form.productox.codigo_sistema
                  /*
                                                  cantidadx: Number((Number(this.detalleForm.cantidad) / Number(this.form.presentacion.escalar)).toFixed(2)) ,
                  */

                });
                this.form.productox = '';
                this.form.cantidadx = '';
              } else {
                this.$swal.fire({
                  title: 'El producto ya se agrego al detalle, ¿Desea agregar la nueva presentación al producto existente?',
                  text: "Revise bien la información",
                  type: 'warning',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sí, confirmar',
                  cancelButtonText: 'cancelar'
                });
              }
            } else {
              alertify.warning("Verifique que el escalar de la presentación origen sea menor al escalar de la nueva presentación");
            }
          } else {
            alertify.warning("Verifique que el origen de las presentaciones coincidan");
          }
        } else {
          alertify.warning("La tabla de productos transformados ya contiene datos", 5);
        }
      } else {
        alertify.warning("Verifique que tiene seleccionado un producto y la tabla de producto origen contenga datos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.salida_transformacion.length >= 1) {
        this.form.salida_transformacion.splice(index, 1);
      } else {
        this.form.salida_transformacion = [];
      }
    },
    eliminarLineaConversion: function eliminarLineaConversion(item, index) {
      if (this.form.entrada_transformacion.length >= 1) {
        this.form.entrada_transformacion.splice(index, 1);
      } else {
        this.form.entrada_transformacion = [];
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_transformaciones__WEBPACK_IMPORTED_MODULE_6__["default"].nuevo({}, function (data) {
        /*self.presentaciones = data.presentaciones;*/
        self.bodegas = data.bodegas;
        self.form.bodega = self.bodegas[0];
        self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.id_producto,
            id_bodega_producto: bodega_producto.id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: bodega_producto.cantidad,
            unidad_medida: bodega_producto.producto.unidad_medida,
            text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial + '-' + bodega_producto.codigo_presentacion + ' ( ' + bodega_producto.no_lote + ' ) ',
            codigo_presentacion: bodega_producto.presentacion.codigo,
            id_origen: bodega_producto.presentacion.id_origen,
            escalar: bodega_producto.escalar,
            id_presentacion: bodega_producto.id_presentacion
          });
        });
        self.unidades_medidas = data.unidades_medidas;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  }, _defineProperty(_methods, "nuevo", function nuevo() {
    var self = this;
    _api_transformaciones__WEBPACK_IMPORTED_MODULE_6__["default"].nuevo({}, function (data) {
      /*self.presentaciones = data.presentaciones;*/
      self.bodegas = data.bodegas;
      self.form.bodega = self.bodegas[0];
      self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.id_producto,
          id_bodega_producto: bodega_producto.id_bodega_producto,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: Number(self.form.bodega.productos_bodega[key].id_bodega_producto),
          unidad_medida: bodega_producto.producto.unidad_medida,
          text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial + '-' + bodega_producto.codigo_presentacion + ' ( ' + bodega_producto.no_lote + ' ) ',
          codigo_presentacion: bodega_producto.presentacion.codigo,
          id_origen: bodega_producto.presentacion.id_origen,
          escalar: bodega_producto.escalar,
          id_presentacion: bodega_producto.id_presentacion
        });
      });
      self.unidades_medidas = data.unidades_medidas;
      self.loading = false;
    }, function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "ObtenerProductoEspecifico", function ObtenerProductoEspecifico() {
    var _this = this;

    var self = this;
    _api_transformaciones__WEBPACK_IMPORTED_MODULE_6__["default"].obtenerProducto({
      id_transformacion: this.$route.params.id_transformacion
    }, function (data) {
      self.form = data.transformacion;
      /*self.form.conteo_productos = data.transformacion.salida_transformacion;
      self.form.conteo_producto = data.transformacion.entrada_transformacion;*/

      _this.form.bodega = data.transformacion.bodega_registrada[0];
      self.form.detalleProductos = [];
      self.productos = [];
      self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.id_producto,
          id_bodega_producto: bodega_producto.id_bodega_producto,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: bodega_producto.cantidad,
          unidad_medida: bodega_producto.producto.unidad_medida,
          text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial + '-' + bodega_producto.codigo_presentacion + ' ( ' + bodega_producto.no_lote + ' ) ',
          codigo_presentacion: bodega_producto.presentacion.codigo,
          id_origen: bodega_producto.presentacion.id_origen,
          escalar: bodega_producto.escalar,
          id_presentacion: bodega_producto.id_presentacion
        });
      });
      self.unidades_medidas = data.unidades_medidas;
      self.loading = false;
    }, function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "obtenerTodosRubrosPS", function obtenerTodosRubrosPS() {
    var self = this;
    _api_rubros__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodosRubrosPS(function (data) {
      self.rubros = data;
    }, function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "obtenerTodosImpuestos", function obtenerTodosImpuestos() {
    var self = this;
    _api_impuestos__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodosImpuestos(function (data) {
      self.impuestos = data;
    }, function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "obtenerTodosUnidadMedida", function obtenerTodosUnidadMedida() {
    var self = this;
    _api_unidad_medida__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodas(function (data) {
      self.ums = data;
    }, function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "seleccionaTipo", function seleccionaTipo() {
    var self = this; //console.log(self.form.tipo_producto);

    if (self.form.tipo_producto === 1) {
      self.tipoProducto = false;
    } else {
      self.tipoProducto = true;
    }
  }), _defineProperty(_methods, "actualizarProducto", function actualizarProducto(estado) {
    var _this2 = this;

    var self = this;

    if (self.estado = estado) {
      self.loading = true;
      self.btnAction = "Guardando, espere....";
      _api_transformaciones__WEBPACK_IMPORTED_MODULE_6__["default"].actualizarProducto(self.form, function (data) {
        _this2.$router.push({
          name: "transformaciones"
        });

        alertify.success("Transformación Modificada Correctamente!", 5);
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = "Guardar";
      });
    } else {
      self.btnAction = false;
    }
  }), _defineProperty(_methods, "emitirTransformacion", function emitirTransformacion(estado) {
    var _this3 = this;

    var self = this;
    self.btnEmitir = "Emitiendo, espere....";
    self.$swal.fire({
      title: 'Esta seguro de emitir la transformación ?',
      text: "Esta acción no se puede deshacer",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, confirmar',
      cancelButtonText: 'Cancelar'
    }).then(function (result) {
      self.loading = true;

      if (result.value) {
        self.form.estado = estado;
        _api_transformaciones__WEBPACK_IMPORTED_MODULE_6__["default"].emitirTransformacion(self.form, function (data) {
          alertify.success("La transformación se ha emitido con exito!", 5);

          _this3.$router.push({
            name: "transformaciones"
          });
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnEmitir = "Emitir";
          alertify.success("La transformación se ha emitido con exito!", 5);

          _this3.$router.push({
            name: "transformaciones"
          });
        });
      } else {
        self.btnEmitir = "Emitir ";
      }
    });
  }), _defineProperty(_methods, "initUploader", function initUploader() {
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
  }), _defineProperty(_methods, "calcularConversion", function calcularConversion(itemX) {
    itemX.conversion_salida = Number((Number(itemX.cantidad_salida) * Number(itemX.escalar_salida)).toFixed(2));

    if (!isNaN(itemX.conversion_salida)) {
      return itemX.conversion_salida;
    } else return 0;
  }), _defineProperty(_methods, "calcularConversionEntrada", function calcularConversionEntrada(itemx) {
    itemx.conversion = Number((Number(itemx.cantidadx) * Number(itemx.escalar_entrada)).toFixed(2));

    if (!isNaN(itemx.conversion)) {
      return itemx.conversion;
    } else return 0;
  }), _defineProperty(_methods, "calcularCantidadEntrante", function calcularCantidadEntrante(itemx) {
    itemx.cantidadx = Number((Number(this.form.totalConversion) / Number(itemx.escalar_entrada)).toFixed(2));

    if (!isNaN(itemx.cantidadx)) {
      return itemx.cantidadx;
    } else return 0;
  }), _methods),
  computed: {
    total_cantidad: function total_cantidad() {
      /*var self = this;*/
      this.form.totalCantidad = Number(this.form.salida_transformacion.reduce(function (carry, item) {
        return carry + Number(item.cantidad_salida);
      }, 0));
      return this.form.totalCantidad;
    },
    total_conversion: function total_conversion() {
      /*var self = this;*/
      this.form.totalConversion = Number(this.form.salida_transformacion.reduce(function (carry, item) {
        return carry + Number(item.conversion_salida);
      }, 0));
      return this.form.totalConversion;
    },
    total_escalar: function total_escalar() {
      var self = this;
      return self.form.salida_transformacion.reduce(function (carry, item) {
        return self.form.totalEscalar = carry + Number(item.escalar_salida);
      }, 0);
    },

    /**
     * @return {number}
     */
    TcantidadNuevaPresentacion: function TcantidadNuevaPresentacion() {
      var _this4 = this;

      /*var self = this;*/

      /*	itemx.cantidadx = Number((Number(self.form.totalConversion) / Number(itemx.escalarx)).toFixed(2))*/
      this.form.cantidadx = Number(this.form.entrada_transformacion.reduce(function (carry, item) {
        return carry + Number(_this4.form.totalConversion / item.escalar_entrada).toFixed(2);
      }, 0));
      return this.form.cantidadx;
    }
  },
  mounted: function mounted() {
    this.initUploader();
    this.obtenerTodosImpuestos();
    this.obtenerTodosRubrosPS();
    this.obtenerTodosUnidadMedida();
    this.ObtenerProductoEspecifico();
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Listado.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_transformaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/transformaciones */ "./resources/app/api/transformaciones.js");
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
          field: 'codigo',
          value: '',
          status: 0
        }
      },
      transformaciones_entradas: [],
      transformaciones_salidas: [],
      transformaciones: [],
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
        alertify.warnng("Espere a que se complete la descarga anterior", 5);
      }
    },
    obtenerTransformacionesEntradas: function obtenerTransformacionesEntradas() {
      var self = this;
      self.loading = true;
      _api_transformaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTransformacionesEntradas(self.filter, function (data) {
        self.transformaciones_entradas = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    obtenerTransformacion: function obtenerTransformacion() {
      var self = this;
      self.loading = true;
      _api_transformaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTransformacion(self.filter, function (data) {
        data.rows.forEach(function (transformaciones, key) {
          data.rows[key].mostrar = 0;
        });
        self.transformaciones = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    mostrarDetalle: function mostrarDetalle(key) {
      if (this.transformaciones[key].mostrar) {
        this.transformaciones[key].mostrar = 0;
      } else {
        this.transformaciones[key].mostrar = 1;
      }
    },
    obtenerTransformacionesSalidas: function obtenerTransformacionesSalidas() {
      var self = this;
      self.loading = true;
      _api_transformaciones__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTransformacionesSalidas(self.filter, function (data) {
        self.transformaciones_salidas = data.rows;
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
      this.obtenerTransformacion();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerTransformacion();
    }
  },
  mounted: function mounted() {
    this.obtenerTransformacionesEntradas();
    this.obtenerTransformacionesSalidas();
    this.obtenerTransformacion();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Registrar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_transformaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/transformaciones */ "./resources/app/api/transformaciones.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_plugins_moment_src_lib_utils_is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/plugins/moment/src/lib/utils/is-number */ "./resources/app/assets/plugins/moment/src/lib/utils/is-number.js");
/* harmony import */ var _api_presentacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/presentacion */ "./resources/app/api/presentacion.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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





/*
	import tipo from "../../api/productopresentacion";
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'barcode': vue_barcode__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    var _form;

    return {
      loading: true,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default.a,
      //It is important to import the loading image then use here
      textPositionx: 'center',
      heightx: 25,
      widthx: 2,
      marginTopx: 40,
      elementTag: 'svg',
      formatx: 'EAN',
      tipoProducto: true,
      rubros: [],
      impuestos: [],
      unidades_medidas: [],
      bodegas: [],
      productos: [],
      presentaciones: [],
      detalleForm: {
        presentacionx: '',
        cantidad: 0
      },
      form: (_form = {
        productox: '',
        producto: '',
        conversion: 0,
        totalConversion: 0,
        totalEscalar: 0,
        totalCantidad: 0,
        totalCantidadNuevaPresentacion: 0,
        TCantidadNuevaPresentacion: 0,
        cantidadx: 0,
        presentacion: '',
        detalleProductos: [],
        presentaciones: [],
        presentacionest: [],
        precio_compra: 0,
        precio_distribuidor: 0,
        codigo_sistema: '',
        bodega: '',
        codigo_consecutivo: 0,
        nombre_comercial: ''
      }, _defineProperty(_form, "producto", ''), _defineProperty(_form, "descripcion", ''), _defineProperty(_form, "costo_estandar", 0), _defineProperty(_form, "precio_sugerido", 0), _defineProperty(_form, "existencia_min", 1), _defineProperty(_form, "existencia_max", 1), _defineProperty(_form, "cantidad_inicial", 0), _defineProperty(_form, "tipo_producto", 1), _defineProperty(_form, "codigo_barra", ''), _defineProperty(_form, "imagen", ''), _defineProperty(_form, "rubro_producto", ''), _defineProperty(_form, "conteo_productos", []), _defineProperty(_form, "conteo_producto", []), _defineProperty(_form, "impuesto_producto", ''), _defineProperty(_form, "unidad_medida", ''), _defineProperty(_form, "bodega_inicial", ""), _defineProperty(_form, "conversionx", 0), _form),
      uploader: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  methods: {
    /*cargarPresentaciones(){
    	var self = this;
    	self.loading = true;
    	transformaciones.cargarPresentacionesProductos({
    		id_producto: self.form.productox.id_producto,
    	},data=>{
    		if(data.presentaciones !== null){
    			self.form.presentaciones = data.presentaciones;
    		}else{
    			alertify.warning("No se encuentran presentaciones para este producto.",5);
    			self.form.presentaciones = [];
    		}
    		self.loading = false;
    	},err =>{
    				if(err.id_producto){
    						self.form.presentaciones = [];
    						alertify.warning(err.id_producto,5);
    						self.loading = false;
    				}
    			}
    	)
    },*/
    agregarDetalle: function agregarDetalle() {
      var _this = this;

      var self = this;

      if (this.form.productox && this.form.producto
      /* > 0*/
      ) {
          if (this.detalleForm.cantidad > 0) {
            if (this.form.producto) {
              var i = 0;
              var keyx = 0;

              if (self.form.conteo_productos) {
                self.form.conteo_productos.forEach(function (presentacion, key) {
                  if (self.form.productox.id_presentacion === presentacion.productox.id_presentacion) {
                    i++;
                    keyx = key;
                  }
                });
              }

              if (i === 0) {
                this.form.conteo_productos.push({
                  presentacionx: this.form.productox.codigo_presentacion,
                  productox: this.form.productox,
                  cantidad: this.detalleForm.cantidad,
                  escalar: this.form.productox.escalar,
                  origen: this.form.productox.id_origen,
                  conversionx: this.form.conversionx,
                  codigo_sistema: this.form.productox.codigo_sistema
                });
                /*this.detalleForm.presentacionx = '',*/

                /*this.form.productox = '',*/

                this.detalleForm.cantidad = 0;
              } else {
                this.$swal.fire({
                  title: 'El producto ya agrego al detalle, ¿Desea sumar la nueva cantidad al monto existente?',
                  text: "Revise bien la información",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sí, confirmar',
                  cancelButtonText: 'Cancelar'
                }).then(function (result) {
                  if (result.value) {
                    self.form.conteo_productos[keyx].cantidad = Number(self.form.conteo_productos[keyx].cantidad) + self.detalleForm.cantidad;
                    _this.form.productox = '';
                    _this.detalleForm.cantidad = 0;
                  }
                });
              }
            } else {
              alertify.warning("Verifique que seleccionó una nueva presentación");
            }
          } else {
            alertify.warning("Los valores para la cantidad deben ser mayores a cero", 5);
          }
        } else {
        alertify.warning("Verifique que seleccionó un producto y una configuración", 5);
      }
    },
    agregarDetalleEntrada: function agregarDetalleEntrada() {
      var self = this;

      if (this.form.productox && this.form.conteo_productos != 0) {
        if (this.form.conteo_producto.length < 1) {
          if (this.form.producto.id_origen == this.form.productox.id_origen) {
            var i = 0;
            var keyx = 0;

            if (self.form.conteo_producto) {
              self.form.conteo_producto.forEach(function (presentacion, key) {
                if (self.from.producto.id_presentacion === presentacion.producto.id_presentacion) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (this.form.producto.escalar < this.form.productox.escalar) {
              if (i === 0) {
                this.form.conteo_producto.push({
                  productox: this.form.productox,
                  presentacion: this.form.producto.codigo_presentacion,
                  id_presentacion: this.form.producto.id_presentacion,
                  id_bodega_producto: this.form.producto.id_bodega_producto,
                  escalarx: this.form.producto.escalar,
                  origenx: this.form.producto.id_origen,
                  conversionx: this.form.conversionx,

                  /*relacion_um_estandar: this.form.presentacion.relacion_um_estandar,*/
                  cantidadx: this.form.cantidadx,
                  conversion: this.form.conversion
                  /*
                  								cantidadx: Number((Number(this.detalleForm.cantidad) / Number(this.form.presentacion.escalar)).toFixed(2)) ,
                  */

                });
                this.form.productox = '';
                this.form.presentacion = '';
                this.form.cantidadx = '';
              } else {
                this.$swal.fire({
                  title: 'El producto ya se agrego al detalle, ¿Desea agregar la nueva presentación al producto existente?',
                  text: "Revise bien la información",
                  type: 'warning',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sí, confirmar',
                  cancelButtonText: 'cancelar'
                });
              }
            } else {
              alertify.warning("Verifique que el escalar de la presentación origen sea menor al escalar de la nueva presentación");
            }
          } else {
            alertify.warning("Verifique que el origen de las presentaciones coincidan");
          }
        } else {
          alertify.warning("La tabla de productos transformados ya contiene datos", 5);
        }
      } else {
        alertify.warning("Verifique que tiene seleccionado un producto y la tabla de producto origen contenga datos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.conteo_productos.length >= 1) {
        this.form.conteo_productos.splice(index, 1);
      } else {
        this.form.conteo_productos = [];
      }
    },
    eliminarLineaConversion: function eliminarLineaConversion(item, index) {
      if (this.form.conteo_producto.length >= 1) {
        this.form.conteo_producto.splice(index, 1);
      } else {
        this.form.conteo_producto = [];
      }
    },
    confirmar: function confirmar() {
      var _this2 = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar el registro de la entrada?',
        text: "Revise bien los datos",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this2.registrar();
        }
      });
    },
    obtenerProductosBodega: function obtenerProductosBodega() {
      var self = this;
      self.form.productox = [];
      self.form.producto = [];
      self.productos = [];
      self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.producto.id_producto,
          id_bodega_producto: bodega_producto.id_bodega_producto,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: bodega_producto.cantidad,
          unidad_medida: bodega_producto.producto.unidad_medida,
          text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial + '-' + bodega_producto.codigo_presentacion + ' ( ' + bodega_producto.no_lote + ' ) ',
          codigo_presentacion: bodega_producto.presentacion.codigo,
          escalar: bodega_producto.escalar,
          id_origen: bodega_producto.presentacion.id_origen,
          id_presentacion: bodega_producto.id_presentacion
        });
      });
    },
    registrar: function registrar() {
      var _this3 = this;

      var self = this;
      /*self.form.conteo_productos = self.form.conteo_productos;*/

      self.btnAction = 'Registrando, espere....';
      self.loading = true;
      producto.registrarProducto(self.form, function (data) {
        _this3.$swal.fire('Presentación Registrada', 'La Presentación fue registrada correctamente', 'success');

        self.loading = false;
        /*alertify.success("Datos registrados correctamente",5);*/

        _this3.$router.push({
          name: 'producto-presentacion'
        });
      }, function (err) {
        alertify.warning('Hubo un problema al registrar los datos, revise la información', 10);
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    },

    /*seleccionarBodega(){
    var self = this;
    	self.productos=[];
    	self.conteo_productos=[];
    	self.productos.forEach((producto, key) => {self.productos.push(producto)});
    },*/
    nuevo: function nuevo() {
      var self = this;
      _api_transformaciones__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        /*self.presentaciones = data.presentaciones;*/
        self.bodegas = data.bodegas;
        self.form.bodega = self.bodegas[0];
        self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.id_producto,
            id_bodega_producto: bodega_producto.id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: bodega_producto.cantidad,
            unidad_medida: bodega_producto.producto.unidad_medida,
            text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial + '-' + bodega_producto.codigo_presentacion + ' ( ' + bodega_producto.no_lote + ' ) ',
            codigo_presentacion: bodega_producto.presentacion.codigo,
            id_origen: bodega_producto.presentacion.id_origen,
            escalar: bodega_producto.escalar,
            id_presentacion: bodega_producto.id_presentacion
          });
        });
        self.unidades_medidas = data.unidades_medidas;
        self.loading = false;
      }, function (err) {
        console.log(err);
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

    /*obtenerConcatenarCodigo() {
    	var self = this;
    	self.form.codigo_sistema = self.form.rubro_producto.codigo +'-'+ self.form.codigo_consecutivo;
    },*/

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

    /*getImages() {
    	var imagen = $('input[name="imagen"]').val()
    	if (JSON.parse(imagen).length) {
    		return imagen
    	} else {
    		return ''
    	}
    },*/
    registrarProducto: function registrarProducto() {
      var _this4 = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      /*	self.form.imagen = this.getImages()*/

      self.loading = true;
      _api_transformaciones__WEBPACK_IMPORTED_MODULE_0__["default"].registrarProducto(self.form, function (data) {
        self.loading = true;

        _this4.$router.push({
          name: 'transformaciones'
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
    },

    /*initSelect2() {
    	$('.select2').select2()
    }*/
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    calcularConversionEntrada: function calcularConversionEntrada(itemx) {
      var self = this;
      itemx.conversion = Number((Number(this.form.cantidadx) * Number(itemx.escalarx)).toFixed(2));

      if (!isNaN(itemx.conversion)) {
        return itemx.conversion;
      } else return 0;
    },
    calcularTotalCantidadEntrada: function calcularTotalCantidadEntrada(itemX) {
      var self = this;
      itemX.cantidadx = Number((Number(itemX.conversionx) / Number(itemX.escalarx)).toFixed(2));

      if (!isNaN(itemX.cantidadx)) {
        return itemX.cantidadx;
      }
    }
  },
  computed: {
    total_cantidad: function total_cantidad() {
      var self = this;
      return this.form.conteo_productos.reduce(function (carry, item) {
        return self.form.totalCantidad = carry + Number(item.cantidad);
      }, 0);
    },
    total_conversion: function total_conversion() {
      var self = this;
      return this.form.conteo_productos.reduce(function (carry, item) {
        return self.form.totalConversion = carry + Number(item.conversionx);
      }, 0);
    },
    total_escalar: function total_escalar() {
      var self = this;
      return this.form.conteo_productos.reduce(function (carry, item) {
        return self.form.totalEscalar = carry + Number(item.escalar);
      }, 0);
    },
    TcantidadNuevaPresentacion: function TcantidadNuevaPresentacion() {
      var _this5 = this;

      var self = this;
      /*	itemx.cantidadx = Number((Number(self.form.totalConversion) / Number(itemx.escalarx)).toFixed(2))*/

      return this.form.conteo_producto.reduce(function (carry, item) {
        return self.form.cantidadx = carry + Number((Number(_this5.form.totalConversion) / Number(item.escalarx)).toFixed(2));
      }, 0);
    }
  },
  mounted: function mounted() {
    this.initUploader();
    /*this.nueva();*/

    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-4e9c816a] {\n  min-width: 120px;\n}\n.table a[data-v-4e9c816a] {\n  color: #2675dc;\n}\n.table .table-number[data-v-4e9c816a] {\n  width: 60px;\n}\n.table .action[data-v-4e9c816a] {\n  width: 180px;\n}\n.table .detail-link[data-v-4e9c816a] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-4e9c816a] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-4e9c816a]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-label2{\n    margin-top: 40px;\n    margin-left: 40px;\n}\n.btn-agregar{\n    margin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-label2{\n\tmargin-top: 40px;\n\tmargin-left: 40px;\n}\n.btn-agregar{\n\tmargin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=template&id=2ad35544&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Actualizar.vue?vue&type=template&id=2ad35544& ***!
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
        _c("div", { staticClass: "content-box" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "descripcion",
                        placeholder: "Seleccione un bodega",
                        options: _vm.bodegas
                      },
                      on: {
                        input: function($event) {
                          return _vm.obtenerProductosBodega()
                        }
                      },
                      model: {
                        value: _vm.form.bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega", $$v)
                        },
                        expression: "form.bodega"
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
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-10" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Producto")]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.productos,
                            label: "text",
                            placeholder: "Seleccione un producto"
                          },
                          model: {
                            value: _vm.form.productox,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "productox", $$v)
                            },
                            expression: "form.productox"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.productox, function(
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
                      _c("label", [_vm._v("Cantidad")]),
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
                        attrs: { type: "number", min: "1" },
                        domProps: { value: _vm.detalleForm.cantidad },
                        on: {
                          change: function($event) {
                            _vm.detalleForm.cantidad = Math.max(
                              Math.min(
                                Math.round(_vm.detalleForm.cantidad),
                                _vm.form.productox.cantidad_disponible
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
                        { staticClass: "error-message" },
                        _vm._l(_vm.errorMessages.cantidad, function(message) {
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
                  _c("div"),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-agregar",
                          attrs: { type: "button" },
                          on: { click: _vm.agregarDetalle }
                        },
                        [_vm._v(" Agregar producto")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "ul",
                      _vm._l(_vm.errorMessages.salida_transformacion, function(
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
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.form.salida_transformacion, function(
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
                                        value: item.descripcion_producto_salida,
                                        expression:
                                          "item.descripcion_producto_salida"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value: item.descripcion_producto_salida
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "descripcion_producto_salida",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-message" },
                                    _vm._l(
                                      _vm.errorMessages[
                                        "salida_transformacion." +
                                          index +
                                          ".id_producto_salida"
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
                                          item.descripcion_presentacion_salida,
                                        expression:
                                          "item.descripcion_presentacion_salida"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: {
                                      value:
                                        item.descripcion_presentacion_salida
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "descripcion_presentacion_salida",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    _vm._l(
                                      _vm.errorMessages[
                                        "conteo_produtos." +
                                          index +
                                          ".id_presentacion_salida"
                                      ],
                                      function(message) {
                                        return _c("il", {
                                          key: message,
                                          domProps: {
                                            textContent: _vm._s(message)
                                          }
                                        })
                                      }
                                    ),
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: item.cantidad_salida,
                                        expression: "item.cantidad_salida",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "", type: "number" },
                                    domProps: { value: item.cantidad_salida },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "cantidad_salida",
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
                                    { staticClass: "error-message" },
                                    _vm._l(
                                      _vm.errorMessages[
                                        "salida_transformacion." +
                                          index +
                                          ".cantidad_salida"
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
                                        value: item.escalar_salida,
                                        expression: "item.escalar_salida",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: { value: item.escalar_salida },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "escalar_salida",
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
                                    { staticClass: "error-message" },
                                    _vm._l(
                                      _vm.errorMessages[
                                        "salida_transformacion." +
                                          index +
                                          ".escalar_salida"
                                      ],
                                      function(message) {
                                        return _c("li", { key: message })
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
                                        _vm._f("formatMoney")(
                                          _vm.calcularConversion(item),
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
                          _c(
                            "td",
                            {
                              staticClass: "item-footer",
                              attrs: { colspan: "3" }
                            },
                            [_vm._v("Total Unidades")]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "item-footer",
                              attrs: { colspan: "2" }
                            },
                            [_c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "item-footer" }, [
                            _c("strong", [
                              _vm._v(
                                "k " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.total_conversion,
                                      2
                                    )
                                  )
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-10" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Producto")]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.productos,
                            label: "text",
                            placeholder: "Seleccione un producto"
                          },
                          model: {
                            value: _vm.form.producto,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "producto", $$v)
                            },
                            expression: "form.producto"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.productox, function(
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
                  _c("div"),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-agregar",
                          attrs: { type: "button" },
                          on: { click: _vm.agregarDetalleEntrada }
                        },
                        [_vm._v(" Agregar Transformación")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "ul",
                      _vm._l(_vm.errorMessages.entrada_transformacion, function(
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
                      { staticClass: "table table-bordered" },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _vm._l(_vm.form.entrada_transformacion, function(
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
                                        return _vm.eliminarLineaConversion(
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
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.descripcion_producto_entrada,
                                      expression:
                                        "item.descripcion_producto_entrada"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.descripcion_producto_entrada
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "descripcion_producto_entrada",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        item.descripcion_presentacion_entrada,
                                      expression:
                                        "item.descripcion_presentacion_entrada"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.descripcion_presentacion_entrada
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "descripcion_presentacion_entrada",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  _vm._l(_vm.errorMessages[""], function(
                                    message
                                  ) {
                                    return _c("il", { key: message })
                                  }),
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.calcularCantidadEntrante(item),
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
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.calcularConversionEntrada(item),
                                        2
                                      )
                                    )
                                  )
                                ])
                              ])
                            ])
                          ]
                        })
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("div", { staticClass: "col-md-6" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "content-box-footer text-right" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          tag: "button",
                          to: { name: "transformaciones" }
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
                    _vm.form.estado === 2 || _vm.form.estado === 1
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: {
                                type: "button",
                                disabled:
                                  _vm.btnAction != "Guardar" ? true : false
                              },
                              on: {
                                click: function($event) {
                                  return _vm.actualizarProducto(2)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.btnAction) +
                                  "\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: {
                                type: "button",
                                disabled:
                                  _vm.btnEmitir != "Emitir" ? true : false
                              },
                              on: {
                                click: function($event) {
                                  return _vm.emitirTransformacion(3)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.btnEmitir) +
                                  "\n                                    "
                              )
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
        _vm._v("Modificar Transformación")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar una transformación")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Producto Origen")])])
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
        _c("th", [_vm._v("Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Escalar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Conversión")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Productos Transformados")])])
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
        _c("th", [_vm._v("producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nueva Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Conversión")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=template&id=4e9c816a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Listado.vue?vue&type=template&id=4e9c816a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Administrar transformaciones")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de transformaciones")
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
              _vm._v("> transformaciones")
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
                    to: { name: "registrar-transformaciones" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Crear nueva transformación\n\t\t\t\t")
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
                  _vm.obtenerTransformacion()
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
                  _c("option", { attrs: { value: "codigo" } }, [
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
              _c("p", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function($event) {
                        _vm.filter.page = 1
                        _vm.obtenerTransformacion()
                      }
                    }
                  },
                  [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Buscar")]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-4" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.transformaciones, function(transformacion, key) {
                  return [
                    _c("tr", { key: transformacion.id_transformacion }, [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: "Mostrar detalle de la transformación",
                              expression:
                                "'Mostrar detalle de la transformación'"
                            }
                          ],
                          staticClass: "link",
                          on: {
                            click: function($event) {
                              return _vm.mostrarDetalle(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(transformacion.codigo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(transformacion.descripcion))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(transformacion.total_conversiones + " KG")
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        transformacion.estado === 1
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Registrada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        transformacion.estado === 2
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-grey" }, [
                                _vm._v("Borrador")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        transformacion.estado === 3
                          ? _c("div", [
                              _c("span", { staticClass: "badge-blue" }, [
                                _vm._v("Emitida")
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
                              attrs: {
                                tag: "a",
                                to: {
                                  name: "actualizar-transformaciones",
                                  params: {
                                    id_transformacion:
                                      transformacion.id_transformacion
                                  }
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-pencil" })]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    transformacion.mostrar
                      ? _c("tr", { key: transformacion.id_transformacion }, [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "8" } }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-6" }, [
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
                                        transformacion.salida_transformacion,
                                        function(
                                          transformacion_detalle_salida
                                        ) {
                                          return _c(
                                            "tr",
                                            {
                                              key:
                                                transformacion_detalle_salida.id_detalle_transformacion
                                            },
                                            [
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle_salida.codigo
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle_salida.descripcion_producto_salida
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle_salida.descripcion_presentacion_salida
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle_salida.cantidad_salida
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
                              _c("div", { staticClass: "col-sm-6" }, [
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
                                      _vm._l(
                                        transformacion.entrada_transformacion,
                                        function(transformacion_detalle) {
                                          return _c(
                                            "tr",
                                            {
                                              key:
                                                transformacion_detalle.id_detalle_transformacion_entrada
                                            },
                                            [
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle.codigo
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle.descripcion_producto_entrada
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle.descripcion_presentacion_entrada
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    transformacion_detalle.cantidad_entrada
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
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td")
                        ])
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                !_vm.transformaciones.length
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
            items: _vm.transformaciones,
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
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bodega")]),
        _vm._v(" "),
        _c("th", [_vm._v("total")]),
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
        _c("th", [_vm._v("Código salida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Producto salida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Presentación salida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Salida")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código entrada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Producto entrada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Presentación entrada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad entrada")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=template&id=0f9d7aee&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/transformaciones/Registrar.vue?vue&type=template&id=0f9d7aee& ***!
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
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Bodega")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "descripcion",
                          placeholder: "Seleccione una bodega",
                          options: _vm.bodegas
                        },
                        on: {
                          input: function($event) {
                            return _vm.obtenerProductosBodega()
                          }
                        },
                        model: {
                          value: _vm.form.bodega,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "bodega", $$v)
                          },
                          expression: "form.bodega"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.bodega, function(message) {
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
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Producto")]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.productos,
                              label: "text",
                              placeholder: "Seleccione un producto"
                            },
                            model: {
                              value: _vm.form.productox,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "productox", $$v)
                              },
                              expression: "form.productox"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.productox, function(
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
                        _c("label", [_vm._v("Cantidad")]),
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
                          attrs: { type: "number", min: "1" },
                          domProps: { value: _vm.detalleForm.cantidad },
                          on: {
                            change: function($event) {
                              _vm.detalleForm.cantidad = Math.max(
                                Math.min(
                                  Math.round(_vm.detalleForm.cantidad),
                                  _vm.form.productox.cantidad_disponible
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
                          { staticClass: "error-message" },
                          _vm._l(_vm.errorMessages.cantidad, function(message) {
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
                    _c("div"),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info btn-agregar",
                            attrs: { type: "button" },
                            on: { click: _vm.agregarDetalle }
                          },
                          [_vm._v(" Agregar producto")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "ul",
                        _vm._l(_vm.errorMessages.conteo_productos, function(
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
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.form.conteo_productos, function(
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
                                            return _vm.eliminarLinea(
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
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.productox.text,
                                          expression: "item.productox.text"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: { value: item.productox.text },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.productox,
                                            "text",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      { staticClass: "error-message" },
                                      _vm._l(
                                        _vm.errorMessages[
                                          "conteo_productos." +
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
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            item.productox.codigo_presentacion,
                                          expression:
                                            "item.productox.codigo_presentacion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value:
                                          item.productox.codigo_presentacion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.productox,
                                            "codigo_presentacion",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      _vm._l(
                                        _vm.errorMessages[
                                          "conteo_produtos." +
                                            index +
                                            ".presentacionx.id_presentacion"
                                        ],
                                        function(message) {
                                          return _c("il", {
                                            key: message,
                                            domProps: {
                                              textContent: _vm._s(message)
                                            }
                                          })
                                        }
                                      ),
                                      1
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
                                      attrs: {
                                        disabled: "",
                                        type: "number",
                                        min: "1"
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
                                      { staticClass: "error-message" },
                                      _vm._l(
                                        _vm.errorMessages[
                                          "conteo_producto." +
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
                                          value: item.productox.escalar,
                                          expression: "item.productox.escalar",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.productox.escalar
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.productox,
                                            "escalar",
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
                                      { staticClass: "error-message" },
                                      _vm._l(
                                        _vm.errorMessages[
                                          "conteo_productos." +
                                            index +
                                            ".presentacionx.id_presentacion"
                                        ],
                                        function(message) {
                                          return _c("li", { key: message })
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
                                          _vm._f("formatMoney")(
                                            _vm.calcularConversion(item),
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
                            _c(
                              "td",
                              {
                                staticClass: "item-footer",
                                attrs: { colspan: "3" }
                              },
                              [_vm._v("Total Unidades")]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "item-footer",
                                attrs: { colspan: "2" }
                              },
                              [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.total_cantidad))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "item-footer" }, [
                              _c("strong", [
                                _vm._v(
                                  "k " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.total_conversion,
                                        2
                                      )
                                    )
                                )
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Producto")]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.productos,
                              label: "text",
                              placeholder: "Seleccione un producto"
                            },
                            model: {
                              value: _vm.form.producto,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "producto", $$v)
                              },
                              expression: "form.producto"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.productox, function(
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
                    _c("div"),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info btn-agregar",
                            attrs: { type: "button" },
                            on: { click: _vm.agregarDetalleEntrada }
                          },
                          [_vm._v(" Agregar Transformación")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "ul",
                        _vm._l(_vm.errorMessages.conteo_producto, function(
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
                        { staticClass: "table table-bordered" },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _vm._l(_vm.form.conteo_producto, function(
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
                                          return _vm.eliminarLineaConversion(
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
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.productox.text,
                                        expression: "item.productox.text"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: { value: item.productox.text },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item.productox,
                                          "text",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.presentacion,
                                        expression: "item.presentacion"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: { value: item.presentacion },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "presentacion",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    _vm._l(_vm.errorMessages[""], function(
                                      message
                                    ) {
                                      return _c("il", { key: message })
                                    }),
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          _vm.TcantidadNuevaPresentacion,
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
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          _vm.calcularConversionEntrada(item),
                                          2
                                        )
                                      )
                                    )
                                  ])
                                ])
                              ])
                            ]
                          })
                        ],
                        2
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
                  {
                    attrs: { tag: "button", to: { name: "transformaciones" } }
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
        _vm._v("Registrar Nueva Transformación")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar nueva transformacion")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Producto Origen")])])
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
        _c("th", [_vm._v("Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Escalar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Conversión")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Productos Transformados")])])
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
        _c("th", [_vm._v("producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nueva Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Conversión")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/bodegas.js":
/*!**************************************!*\
  !*** ./resources/app/api/bodegas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodasBodegas: function obtenerTodasBodegas(cb, errorCb) {
    axios.get('bodegas/obtener-bodegas-todas').then(function (response) {
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
    axios.post('bodegas/nuevo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBodegasConsignacion: function obtenerBodegasConsignacion(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTodasBodegasProductos: function obtenerTodasBodegasProductos(cb, errorCb) {
    axios.get('bodegas/obtener-bodegas-productos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosGarantia: function buscarProductosGarantia(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-garantia', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosBodega: function buscarProductosBodega(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-venta', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosBodegaObsoletos: function buscarProductosBodegaObsoletos(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-obsoletos', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosBodegaRecuperados: function buscarProductosBodegaRecuperados(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-recuperados', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosConsignacionCliente: function buscarProductosConsignacionCliente(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTodasBodegasProductosVenta: function obtenerTodasBodegasProductosVenta(cb, errorCb) {
    axios.get('bodegas/obtener-bodegas-productos-venta').then(function (response) {
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
    axios.post('bodegas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBodega: function obtenerBodega(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodega', data).then(function (response) {
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
    axios.post('bodegas/registrar', data).then(function (response) {
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
    axios.put('bodegas/actualizar', data).then(function (response) {
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
    axios.put('bodegas/desactivar', data).then(function (response) {
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
    axios.put('bodegas/activar', data).then(function (response) {
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

/***/ "./resources/app/api/presentacion.js":
/*!*******************************************!*\
  !*** ./resources/app/api/presentacion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('presentacion/obtener-presentacion-todas').then(function (response) {
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
    axios.post('presentacion/nuevo', data).then(function (response) {
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
    axios.post('presentacion/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPresentacion: function obtenerPresentacion(data, cb, errorCb) {
    axios.post('presentacion/obtener-presentacion', data).then(function (response) {
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
    axios.post('presentacion/registrar', data).then(function (response) {
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
    axios.put('presentacion/actualizar', data).then(function (response) {
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
    axios.put('presentacion/desactivar', data).then(function (response) {
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
    axios.put('presentacion/activar', data).then(function (response) {
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

/***/ "./resources/app/api/transformaciones.js":
/*!***********************************************!*\
  !*** ./resources/app/api/transformaciones.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  buscarProductoVenta: function buscarProductoVenta(data, cb, errorCb) {
    axios.post('transformaciones/buscar-bodega-venta', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTransformacionesEntradas: function obtenerTransformacionesEntradas(data, cb, errorCb) {
    axios.post('transformaciones/obtener-transformacion-entrada', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTransformacion: function obtenerTransformacion(data, cb, errorCb) {
    axios.post('transformaciones/obtener-transformacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTransformacionesSalidas: function obtenerTransformacionesSalidas(data, cb, errorCb) {
    axios.post('transformaciones/obtener-transformacion-salida', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProductosBodega: function obtenerProductosBodega(data, cb, errorCb) {
    axios.post('transformaciones/obtener-productos-bodega', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProductosValidos: function obtenerProductosValidos(cb, errorCb) {
    axios.get('transformaciones/obtener-f-validos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProducto: function obtenerProducto(data, cb, errorCb) {
    axios.post('transformaciones/obtener-producto', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCodigoProducto: function obtenerCodigoProducto(data, cb, errorCb) {
    axios.post('transformaciones/obtener-codigo-producto', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarProducto: function registrarProducto(data, cb, errorCb) {
    axios.post('transformaciones/registrarPS', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarProducto: function actualizarProducto(data, cb, errorCb) {
    axios.put('transformaciones/actualizarPS', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  emitirTransformacion: function emitirTransformacion(data, cb, errorCb) {
    axios.put('transformaciones/emitirTransformacion', data).then(function (response) {
      if (respose.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('transformaciones/desactivar', data).then(function (response) {
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
    axios.put('transformaciones/activar', data).then(function (response) {
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
    axios.post('transformaciones/nuevo-producto-servicio', data).then(function (response) {
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
    axios.post('transformaciones/obtener-presentaciones-producto', data).then(function (response) {
      if (response.data.status === 'success') {
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

/***/ "./resources/app/assets/plugins/moment/src/lib/utils/is-number.js":
/*!************************************************************************!*\
  !*** ./resources/app/assets/plugins/moment/src/lib/utils/is-number.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNumber; });
function isNumber(input) {
  return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

/***/ }),

/***/ "./resources/app/components/transformaciones/Actualizar.vue":
/*!******************************************************************!*\
  !*** ./resources/app/components/transformaciones/Actualizar.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_2ad35544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=2ad35544& */ "./resources/app/components/transformaciones/Actualizar.vue?vue&type=template&id=2ad35544&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/transformaciones/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_2ad35544___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_2ad35544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/transformaciones/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/transformaciones/Actualizar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Actualizar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/transformaciones/Actualizar.vue?vue&type=template&id=2ad35544&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Actualizar.vue?vue&type=template&id=2ad35544& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_2ad35544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=2ad35544& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Actualizar.vue?vue&type=template&id=2ad35544&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_2ad35544___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_2ad35544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/transformaciones/Listado.vue":
/*!***************************************************************!*\
  !*** ./resources/app/components/transformaciones/Listado.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_4e9c816a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=4e9c816a&scoped=true& */ "./resources/app/components/transformaciones/Listado.vue?vue&type=template&id=4e9c816a&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/transformaciones/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_4e9c816a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true& */ "./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_4e9c816a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_4e9c816a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e9c816a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/transformaciones/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/transformaciones/Listado.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Listado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_4e9c816a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=style&index=0&id=4e9c816a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_4e9c816a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_4e9c816a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_4e9c816a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_4e9c816a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_4e9c816a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/transformaciones/Listado.vue?vue&type=template&id=4e9c816a&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Listado.vue?vue&type=template&id=4e9c816a&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_4e9c816a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=4e9c816a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Listado.vue?vue&type=template&id=4e9c816a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_4e9c816a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_4e9c816a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/transformaciones/Registrar.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/components/transformaciones/Registrar.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_0f9d7aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=0f9d7aee& */ "./resources/app/components/transformaciones/Registrar.vue?vue&type=template&id=0f9d7aee&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/transformaciones/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_0f9d7aee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_0f9d7aee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/transformaciones/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/transformaciones/Registrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Registrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/transformaciones/Registrar.vue?vue&type=template&id=0f9d7aee&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/transformaciones/Registrar.vue?vue&type=template&id=0f9d7aee& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_0f9d7aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=0f9d7aee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/transformaciones/Registrar.vue?vue&type=template&id=0f9d7aee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_0f9d7aee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_0f9d7aee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);