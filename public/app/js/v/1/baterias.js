(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["baterias"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      //productoEntradaBusquedaURL: "/entradas/productos/buscar",
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mascaraCodigo: 'X############',
      contador: 1,
      productos: [],
      detalleForm: {
        fecha_activacion: '',
        productox: [],
        codigo_garantiax: ''
      },
      form: {
        baterias_nuevas: []
      },
      detalle_baterias: [],
      btnAction: "Registrar Batería",
      errorMessages: []
    };
  },
  methods: {
    confirmar: function confirmar() {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar la recepción de la entrada?',
        text: "Revise bien los datos, esta acción no se puede deshacer.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this.recibir();
        }
      });
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this; //  console.log(self.detalleForm.productox)

      self.$refs.bateria.$refs.search.blur();
      self.$refs.codigo.focus();

      if (self.detalleForm.productox) {
        if (self.detalleForm.productox.id_submarca === 7) {
          ///Caso motobaterias (no tiene codigo de garantia)
          self.$refs.fecha_activacion.focus();
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
          self.detalleForm.codigo_garantiax = 'Código Automático ' + self.contador.toString();
          self.contador++;
          var old_activacion = self.detalleForm.codigo_garantiax;
          self.detalleForm.codigo_garantiax = '';
          self.detalleForm.codigo_garantiax = old_activacion;
        } else if (self.detalleForm.productox.id_submarca === 3) {
          //Caso Cronos
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantiax = '';
          self.mascaraCodigo = 'X############';
        } else {
          //casos lth
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantiax = '';
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
        }
      } //self.$refs.codigo.focus();

    },
    codigoGarantiaEvento: function codigoGarantiaEvento() {
      var self = this;

      if (self.detalleForm.codigo_garantiax !== '') {
        //self.$refs.agregar.click()
        this.$refs.fecha_activacion.focus();
      } else {
        self.$refs.codigo.focus();
      }
    },
    fechaActivacionEvento: function fechaActivacionEvento() {
      var self = this;

      if (self.detalleForm.fecha_activacion !== '') {
        self.$refs.agregar.click();
      } else {
        self.$refs.fecha_activacion.focus();
      }
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        var existeCodigoGarantia = false;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (self.detalleForm.codigo_garantiax === bateriax.codigo_garantiax) {
            existeCodigoGarantia = true;
          }
        });

        if (!existeCodigoGarantia) {
          this.detalle_baterias.push({
            productox: this.detalleForm.productox,
            codigo_garantiax: this.detalleForm.codigo_garantiax,
            fecha_activacion: this.detalleForm.fecha_activacion
          });
          alertify.success("Batería agregada!", 5);
        } else {
          alertify.warning("Ya existe ese código de batería en el listado", 5);
        }

        this.detalleForm.productox = [];
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.detalle_baterias.length >= 1) {
        var keyx = 0;

        if (self.form.entrada_productos) {
          self.form.entrada_productos.forEach(function (productox, key) {
            if (item.productox.id_producto === productox.bodega_producto.id_producto) {
              keyx = key;
            }
          });
        }

        self.form.entrada_productos[keyx].cantidad_recibida--;
        this.detalle_baterias.splice(index, 1);
      } else {
        this.detalle_baterias = [];
      }
    },
    calcular_diferencia: function calcular_diferencia(solicitado, recibido) {
      var diff = solicitado - recibido;

      if (!isNaN(diff) && diff > 0) {
        return diff;
      } else return 0;
    },
    recibir: function recibir() {
      var _this2 = this;

      var self = this;

      if (self.detalle_baterias.length > 0) {
        self.form.detalle_baterias = self.detalle_baterias;
        self.btnAction = "Registrando, espere....";
        _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].registrarBateriaExterna(self.form, function (data) {
          //alertify.success("La entrada fue recibida correctamente",5);
          _this2.$swal.fire('Batería Externa Registrada!', 'Las Baterías Externas fueron registradas correctamente.', 'success');

          _this2.$router.push({
            name: "pagina-principal-inventario"
          });
        }, function (err) {
          alertify.error('Error Actualizando los datos', 10);
          self.errorMessages = err;
          self.btnAction = "Registrar Batería";
        });
      } else {
        alertify.error("Se debe recibir al menos un producto", 5);
      }
    },
    leaving: function leaving() {
      alert("Leaving...");
    },
    nuevaBateriaExterna: function nuevaBateriaExterna() {
      var self = this;
      _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].nuevaBateriaExterna({}, function (data) {
        self.productos = [];
        self.productos = data.productos;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nuevaBateriaExterna();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ActualizarBateria.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/ActualizarBateria.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
/* harmony import */ var _api_impuestos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/impuestos */ "./resources/app/api/impuestos.js");
/* harmony import */ var _api_unidad_medida__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/unidad_medida */ "./resources/app/api/unidad_medida.js");
/* harmony import */ var _api_baterias_aplicaciones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/baterias_aplicaciones */ "./resources/app/api/baterias_aplicaciones.js");
/* harmony import */ var _api_baterias_materiales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/baterias_materiales */ "./resources/app/api/baterias_materiales.js");
/* harmony import */ var _api_baterias_marcas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/baterias_marcas */ "./resources/app/api/baterias_marcas.js");
/* harmony import */ var _api_baterias_lineas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/baterias_lineas */ "./resources/app/api/baterias_lineas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
      //It is important to import the loading image then use here
      rubros: [],
      impuestos: [],
      ums: [],
      aplicaciones: [],
      sub_aplicaciones: [],
      materiales: [],
      marcas: [],
      sub_marcas: [],
      lineas: [],
      marca_bateria: [],
      aplicacion_bateria: [],
      form: {
        numero_parte: '',
        codigo_sistema: '',
        codigo_consecutivo: 0,
        nombre_comercial: '',
        descripcion: '',
        costo_estandar: 0,
        precio_sugerido: 0,
        existencia_min: 1,
        cantidad_inicial: 0,
        codigo_barra: '',
        imagen: '',
        rubro_producto: '',
        impuesto_producto: '',
        unidad_medida: '',
        producto_detalles_baterias: []
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
          _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_producto: productoId
          }, function (data) {
            alertify.warning("Batería desactivada correctamente", 5);

            _this.$router.push({
              name: "listado-baterias"
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
          _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_producto: productoId
          }, function (data) {
            alertify.success("Batería activada correctamente", 5);

            _this2.$router.push({
              name: "listado-baterias"
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    obtenerBateria: function obtenerBateria() {
      var self = this;
      _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerBateria({
        id_producto: this.$route.params.id_producto
      }, function (data) {
        self.form = data.bateria;
        self.rubros = data.rubros;
        self.ums = data.unidades_medida;
        self.impuestos = data.impuestos;
        self.aplicaciones = data.aplicaciones; //self.sub_aplicaciones = data.lineas;

        self.materiales = data.materiales;
        self.marcas = data.marcas; //self.sub_marcas = data.materiales;

        self.lineas = data.lineas;
        self.loading = false;

        try {
          self.uploader.set_files(data.bateria.imagen);
        } catch (Exception) {
          console.log('error asignando imagen');
        }

        if (self.form.producto_detalles_baterias.bateria_sub_marca) {
          self.marcas.forEach(function (marcax, indice) {
            //console.log('marcax.id_marca');
            //console.log(marcax.id_marca);
            //console.log('self.form.producto_detalles_baterias.bateria_sub_marca.id_marca');
            //console.log(self.form.producto_detalles_baterias.bateria_sub_marca.id_marca);
            if (marcax.id_marca === self.form.producto_detalles_baterias.bateria_sub_marca.id_marca) {
              self.marca_bateria = self.marcas[indice];
              self.sub_marcas = self.marca_bateria.marca_sub_marcas;
            }
          });
        }

        if (self.form.producto_detalles_baterias.bateria_sub_aplicacion) {
          self.aplicaciones.forEach(function (aplicacionx, indice) {
            if (aplicacionx.id_aplicacion === self.form.producto_detalles_baterias.bateria_sub_aplicacion.id_aplicacion) {
              self.aplicacion_bateria = self.aplicaciones[indice];
              self.sub_aplicaciones = self.aplicacion_bateria.aplicacion_sub_aplicaciones;
            }
          });
        }
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosImpuestos: function obtenerTodosImpuestos() {
      var self = this;
      _api_impuestos__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodosImpuestos(function (data) {
        self.impuestos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosUnidadMedida: function obtenerTodosUnidadMedida() {
      var self = this;
      _api_unidad_medida__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodas(function (data) {
        self.ums = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosAplicaciones: function obtenerTodosAplicaciones() {
      var self = this;
      _api_baterias_aplicaciones__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodos(function (data) {
        self.aplicaciones = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerSubAplicaciones: function obtenerSubAplicaciones() {
      var self = this;
      self.form.producto_detalles_baterias.bateria_sub_aplicacion = null;
      if (self.aplicacion_bateria.aplicacion_sub_aplicaciones) self.sub_aplicaciones = self.aplicacion_bateria.aplicacion_sub_aplicaciones;
    },
    obtenerTodasMarcas: function obtenerTodasMarcas() {
      var self = this;
      _api_baterias_marcas__WEBPACK_IMPORTED_MODULE_5__["default"].obtenerTodos(function (data) {
        self.marcas = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerSubMarcas: function obtenerSubMarcas() {
      var self = this;
      self.form.producto_detalles_baterias.bateria_sub_marca = null;
      if (self.marca_bateria.marca_sub_marcas) self.sub_marcas = self.marca_bateria.marca_sub_marcas;
    },
    obtenerTodasLineas: function obtenerTodasLineas() {
      var self = this;
      _api_baterias_lineas__WEBPACK_IMPORTED_MODULE_6__["default"].obtenerTodas(function (data) {
        self.lineas = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosMateriales: function obtenerTodosMateriales() {
      var self = this;
      _api_baterias_materiales__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerTodos(function (data) {
        self.materiales = data;
      }, function (err) {
        console.log(err);
      });
    },
    getImages: function getImages() {
      var imagen = $('input[name="imagen"]').val();

      if (JSON.parse(imagen).length) {
        return imagen;
      } else {
        return "";
      }
    },
    actualizar: function actualizar() {
      var _this3 = this;

      var self = this;
      self.loading = true;
      self.btnAction = "Guardando, espere....";
      self.form.imagen = this.getImages();
      _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        _this3.$router.push({
          name: "listado-baterias"
        });

        alertify.success("Batería Actualizado Correctamente!", 5);
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
  },
  created: function created() {
    this.initUploader();
    /*this.obtenerTodosImpuestos();
    this.obtenerTodosUnidadMedida()
    this.obtenerTodosAplicaciones()
    this.obtenerTodasLineas()
    this.obtenerTodosMateriales()
    this.obtenerTodasMarcas()*/

    this.obtenerBateria();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/ListadoBaterias.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      imagen_x: "",
      //descargando:false,
      filter: {
        page: 1,
        limit: 10,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: 'nombre_comercial',
          value: '',
          status: 0
        }
      },
      baterias: [],
      total: 0
    };
  },
  methods: {
    downloadItem: function downloadItem(url) {
      var self = this; //if(!this.descargando){

      self.loading = true; //this.descargando=true;

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
        link.download = 'ReporteFicha.pdf';
        link.click(); //this.descargando=false;

        self.loading = false;
      })["catch"](function (error) {
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false; //this.descargando=false;
      });
      /*}else{
      	alertify.warning("Espere a que se complete la descarga anterior",5);
      }*/
    },
    mostrarDetalles: function mostrarDetalles(key) {
      var img_json = JSON.parse(this.baterias[key].imagen);

      if (img_json[0]) {
        this.baterias[key].imagen_x = img_json[0].file_thumbnail;
      } else {
        this.baterias[key].imagen_x = "";
      }

      if (this.baterias[key].mostrar) {
        this.baterias[key].mostrar = 0;
      } else {
        this.baterias[key].mostrar = 1;
      }
    },
    obtenerBaterias: function obtenerBaterias() {
      var self = this;
      self.loading = true;
      _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerBaterias(self.filter, function (data) {
        data.rows.forEach(function (baterias, key) {
          data.rows[key].mostrar = 0;
          data.rows[key].imagen_x = '';
        });
        self.baterias = data.rows;
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
      this.obtenerBaterias();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerBaterias();
    }
  },

  /*components: {
  	'pagination': Pagination
  },*/
  mounted: function mounted() {
    this.obtenerBaterias();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/RegistrarBateria.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/RegistrarBateria.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*import proveedor from '../../api/proveedores'
import rubro from '../../api/rubros'
import impuesto from '../../api/impuestos'
import um from '../../api/unidad_medida'
import aplicacion from '../../api/baterias_aplicaciones'
import material from '../../api/baterias_materiales'
import marca from '../../api/baterias_marcas'
import linea from '../../api/baterias_lineas'
import bodega from "../../api/bodegas";*/


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando contenido, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      rubros: [],
      impuestos: [],
      ums: [],
      aplicaciones: [],
      sub_aplicaciones: [],
      materiales: [],
      marcas: [],
      sub_marcas: [],
      lineas: [],
      bodegas: [],
      proveedores: [],
      form: {
        numero_parte: '',
        codigo_sistema: '',
        codigo_consecutivo: 0,
        nombre_comercial: '',
        descripcion: '',
        isc: 0,
        dai: 0,
        costo_estandar: 0,
        precio_compra: 0,
        precio_distribuidor: 0,
        precio_sugerido: 0,
        existencia_min: 1,
        existencia_max: 1,
        cantidad_inicial: 0,
        codigo_barra: '',
        imagen: '',
        rubro_producto: '',
        impuesto_producto: '',
        proveedor_producto: '',
        unidad_medida: [],
        bodega_inicial: "",
        condicion: 1,
        bci: '',
        largo: 0,
        ancho: 0,
        alto: 0,
        peso_humedo: 0,
        voltaje_nominal: 0,
        cca: 0,
        ca: 0,
        capacidad_reserva: 0,
        garantia: 0,
        rmplzo_sincosto: 0,
        material_bateria: [],
        linea_bateria: [],
        marca_bateria: [],
        submarca_bateria: [],
        aplicacion_bateria: [],
        subaplicacion_bateria: [],
        descuento_eficacia: 2,
        cargo_chico_grande: 2
      },
      uploader: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  methods: {
    nueva: function nueva() {
      var self = this;
      _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].nueva({}, function (data) {
        self.aplicaciones = data.aplicaciones;
        self.bodegas = data.bodegas;
        self.form.bodega_inicial = self.bodegas[0];
        self.proveedores = data.proveedores;
        self.form.proveedor_producto = self.proveedores[0];
        self.marcas = data.marcas;
        self.lineas = data.lineas;
        self.materiales = data.materiales;
        self.rubros = data.rubros;
        self.form.rubro_producto = self.rubros[109];
        self.impuestos = data.impuestos;
        self.ums = data.unidades_medida;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerSubAplicaciones: function obtenerSubAplicaciones() {
      var self = this;
      self.form.subaplicacion_bateria = null;
      if (self.form.aplicacion_bateria.aplicacion_sub_aplicaciones) self.sub_aplicaciones = self.form.aplicacion_bateria.aplicacion_sub_aplicaciones;
    },
    obtenerSubMarcas: function obtenerSubMarcas() {
      var self = this;
      self.form.submarca_bateria = null;
      if (self.form.marca_bateria.marca_sub_marcas) self.sub_marcas = self.form.marca_bateria.marca_sub_marcas;
    },
    obtenerCodigo: function obtenerCodigo() {
      var self = this;
      _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerCodigoBateria({
        id_rubro: self.form.rubro_producto.id_rubro
      }, function (data) {
        //console.log(data);
        self.form.codigo_consecutivo = data.codigo_siguiente;
        self.obtenerConcatenarCodigo();
      }, function (err) {
        alertify.error(err, 5);
      });
    },
    obtenerConcatenarCodigo: function obtenerConcatenarCodigo() {
      var self = this;
      self.form.codigo_sistema = self.form.rubro_producto.codigo + '-' + self.form.codigo_consecutivo;
    },
    getImages: function getImages() {
      var imagen = $('input[name="imagen"]').val();

      if (JSON.parse(imagen).length) {
        return imagen;
      } else {
        return '';
      }
    },
    registrarBateria: function registrarBateria() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.form.imagen = this.getImages();
      self.msg = 'Guardando datos, espere un momento';
      self.loading = true;
      _api_baterias__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.loading = false;

        _this.$router.push({
          name: 'listado-baterias'
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
    /*			this.obtenerTodosProveedores();
    			this.obtenerTodasBodegas();
    			this.obtenerTodosImpuestos()
    			this.obtenerTodosRubrosPS()
    			this.obtenerTodosUnidadMedida()
    			this.obtenerTodosAplicaciones()
    			this.obtenerTodasLineas()
    			this.obtenerTodosMateriales()
    			this.obtenerTodasMarcas()
    */
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-2ae73d18] {\n  min-width: 120px;\n}\n.table a[data-v-2ae73d18] {\n  color: #2675dc;\n}\n.table .table-number[data-v-2ae73d18] {\n  width: 60px;\n}\n.table .action[data-v-2ae73d18] {\n  width: 180px;\n}\n.table .detail-link[data-v-2ae73d18] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-2ae73d18] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-2ae73d18]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4& ***!
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
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "bateria",
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
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Código Garantía")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "mask",
                        rawName: "v-mask",
                        value: _vm.mascaraCodigo,
                        expression: "mascaraCodigo"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.codigo_garantiax,
                        expression: "detalleForm.codigo_garantiax"
                      }
                    ],
                    ref: "codigo",
                    staticClass: "form-control",
                    domProps: { value: _vm.detalleForm.codigo_garantiax },
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
                        return _vm.codigoGarantiaEvento($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "codigo_garantiax",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_garantiax, function(
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
                    _vm._v("Fecha Activación")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "mask",
                        rawName: "v-mask",
                        value: "##/##",
                        expression: "'##/##'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.fecha_activacion,
                        expression: "detalleForm.fecha_activacion"
                      }
                    ],
                    ref: "fecha_activacion",
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "MM/YY" },
                    domProps: { value: _vm.detalleForm.fecha_activacion },
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
                        return _vm.fechaActivacionEvento($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "fecha_activacion",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.fecha_activacion, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "agregar",
                      staticClass: "btn btn-info btn-agregar",
                      on: { click: _vm.agregarDetalle }
                    },
                    [_vm._v("Agregar Batería")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalle_baterias, function(message) {
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
                      _vm._l(_vm.detalle_baterias, function(item, index) {
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
                                    "detalle_baterias." +
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
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.codigo_garantiax,
                                    expression: "item.codigo_garantiax"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.codigo_garantiax },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "codigo_garantiax",
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
                                    "detalle_baterias." +
                                      index +
                                      ".codigo_garantiax"
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
                                    value: "##/##",
                                    expression: "'##/##'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.fecha_activacion,
                                    expression: "item.fecha_activacion"
                                  }
                                ],
                                staticClass: "form-control",
                                domProps: { value: item.fecha_activacion },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "fecha_activacion",
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
                                    "detalle_baterias." +
                                      index +
                                      ".fecha_activacion"
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
                          ])
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot")
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
                      to: { name: "pagina-principal-inventario" },
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
                      disabled: _vm.btnAction !== "Registrar Batería",
                      type: "button"
                    },
                    on: { click: _vm.confirmar }
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
        _vm._v("Registrar Datos de Batería")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar datos de batería externa")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de batería")])])
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
        _c("th", [_vm._v("Batería")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código Garantía")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Activación")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ActualizarBateria.vue?vue&type=template&id=e972caca&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/ActualizarBateria.vue?vue&type=template&id=e972caca& ***!
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Rubro:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.rubro_producto.descripcion,
                        expression: "form.rubro_producto.descripcion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Rubro", readonly: "" },
                    domProps: { value: _vm.form.rubro_producto.descripcion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.rubro_producto,
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
                    _vm._l(_vm.errorMessages.id_rubro, function(message) {
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
                    _vm._v(" Modelo Batería")
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
                    attrs: { placeholder: "Nombre Batería" },
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
                    attrs: { placeholder: "Descripción batería" },
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
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Unidad de medida")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.ums, label: "unidad_medida" },
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
                    attrs: { placeholder: "Código Barras" },
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
                    attrs: { placeholder: "DAI", type: "number", min: "0" },
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
                    attrs: { placeholder: "ISC", type: "number", min: "0" },
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Costo Estándar C$")
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
                      type: "number",
                      min: "1"
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" BCI")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.producto_detalles_baterias.bci,
                        expression: "form.producto_detalles_baterias.bci"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "BCI" },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.bci
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "bci",
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
                      _vm.errorMessages["producto_detalles_baterias.bci"],
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Largo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.producto_detalles_baterias.largo,
                        expression: "form.producto_detalles_baterias.largo",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Largo", type: "number", min: "0" },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.largo
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "largo",
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
                    _vm._l(_vm.errorMessages.largo, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Ancho")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.producto_detalles_baterias.ancho,
                        expression: "form.producto_detalles_baterias.ancho",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Ancho", type: "number", min: "0" },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.ancho
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "ancho",
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
                    _vm._l(_vm.errorMessages.ancho, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Alto")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.producto_detalles_baterias.alto,
                        expression: "form.producto_detalles_baterias.alto",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Alto", type: "number", min: "0" },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.alto
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "alto",
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
                    _vm._l(_vm.errorMessages.alto, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Peso Humedo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.producto_detalles_baterias.peso_humedo,
                        expression:
                          "form.producto_detalles_baterias.peso_humedo",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Peso Humedo",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.peso_humedo
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "peso_humedo",
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
                    _vm._l(_vm.errorMessages.peso_humedo, function(message) {
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
                    _vm._v(" Voltaje Nominal")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value:
                          _vm.form.producto_detalles_baterias.voltaje_nominal,
                        expression:
                          "form.producto_detalles_baterias.voltaje_nominal",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Peso Humedo",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.voltaje_nominal
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "voltaje_nominal",
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
                        "producto_detalles_baterias.voltaje_nominal"
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Capacidad Arranque Frio")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.producto_detalles_baterias.cca,
                        expression: "form.producto_detalles_baterias.cca",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Capacidad Arranque Frio",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.cca
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "cca",
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
                    _vm._l(_vm.errorMessages.cca, function(message) {
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
                    _vm._v(" Capacidad de arranque")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.producto_detalles_baterias.ca,
                        expression: "form.producto_detalles_baterias.ca",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Capacidad de arranque",
                      type: "number",
                      min: "0"
                    },
                    domProps: { value: _vm.form.producto_detalles_baterias.ca },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "ca",
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
                    _vm._l(_vm.errorMessages.ca, function(message) {
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
                    _vm._v(" Capacidad de reserva")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value:
                          _vm.form.producto_detalles_baterias.capacidad_reserva,
                        expression:
                          "form.producto_detalles_baterias.capacidad_reserva",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Capacidad de reserva",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value:
                        _vm.form.producto_detalles_baterias.capacidad_reserva
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "capacidad_reserva",
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
                    _vm._l(_vm.errorMessages.capacidad_reserva, function(
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
                    _vm._v(" Meses de garantía")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.producto_detalles_baterias.garantia,
                        expression: "form.producto_detalles_baterias.garantia",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: " Meses de garantía",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.garantia
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "garantia",
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
                    _vm._l(_vm.errorMessages.garantia, function(message) {
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
                    _vm._v(" Reemplazo sin Costo")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value:
                          _vm.form.producto_detalles_baterias.rmplzo_sincosto,
                        expression:
                          "form.producto_detalles_baterias.rmplzo_sincosto",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Reemplazo sin Costo",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value: _vm.form.producto_detalles_baterias.rmplzo_sincosto
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "rmplzo_sincosto",
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
                    _vm._l(_vm.errorMessages.rmplzo_sincosto, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Material")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.materiales, label: "descripcion" },
                      model: {
                        value:
                          _vm.form.producto_detalles_baterias.bateria_material,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.form.producto_detalles_baterias,
                            "bateria_material",
                            $$v
                          )
                        },
                        expression:
                          "form.producto_detalles_baterias.bateria_material"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(
                        _vm.errorMessages[
                          "producto_detalles_baterias.bateria_material"
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
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo Batería")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.lineas, label: "descripcion" },
                      model: {
                        value:
                          _vm.form.producto_detalles_baterias
                            .bateria_linea_producto,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.form.producto_detalles_baterias,
                            "bateria_linea_producto",
                            $$v
                          )
                        },
                        expression:
                          "form.producto_detalles_baterias.bateria_linea_producto"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.linea_bateria, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Marca")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: true,
                        options: _vm.marcas,
                        label: "descripcion"
                      },
                      on: {
                        input: function($event) {
                          return _vm.obtenerSubMarcas()
                        }
                      },
                      model: {
                        value: _vm.marca_bateria,
                        callback: function($$v) {
                          _vm.marca_bateria = $$v
                        },
                        expression: "marca_bateria"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.marca_bateria, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Sub Marcas")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: true,
                        options: _vm.sub_marcas,
                        label: "descripcion"
                      },
                      model: {
                        value:
                          _vm.form.producto_detalles_baterias.bateria_sub_marca,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.form.producto_detalles_baterias,
                            "bateria_sub_marca",
                            $$v
                          )
                        },
                        expression:
                          "form.producto_detalles_baterias.bateria_sub_marca"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(
                        _vm.errorMessages[
                          "producto_detalles_baterias.bateria_sub_marca"
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
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Aplicación")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: true,
                        options: _vm.aplicaciones,
                        label: "descripcion"
                      },
                      on: {
                        input: function($event) {
                          return _vm.obtenerSubAplicaciones()
                        }
                      },
                      model: {
                        value: _vm.aplicacion_bateria,
                        callback: function($$v) {
                          _vm.aplicacion_bateria = $$v
                        },
                        expression: "aplicacion_bateria"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.aplicacion_bateria, function(
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
                      _vm._v("Sub Aplicación")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: true,
                        options: _vm.sub_aplicaciones,
                        label: "descripcion"
                      },
                      model: {
                        value:
                          _vm.form.producto_detalles_baterias
                            .bateria_sub_aplicacion,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.form.producto_detalles_baterias,
                            "bateria_sub_aplicacion",
                            $$v
                          )
                        },
                        expression:
                          "form.producto_detalles_baterias.bateria_sub_aplicacion"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(
                        _vm.errorMessages[
                          "producto_detalles_baterias.bateria_sub_aplicacion"
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
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" % Descuento Eficacia Operativa")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value:
                          _vm.form.producto_detalles_baterias
                            .descuento_eficacia,
                        expression:
                          "form.producto_detalles_baterias.descuento_eficacia",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Descuento Eficacia Operativa",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value:
                        _vm.form.producto_detalles_baterias.descuento_eficacia
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "descuento_eficacia",
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
                    _vm._l(_vm.errorMessages.descuento_eficacia, function(
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
                    _vm._v(" Cargo Chico/Grande $")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value:
                          _vm.form.producto_detalles_baterias
                            .cargo_chico_grande,
                        expression:
                          "form.producto_detalles_baterias.cargo_chico_grande",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Cargo Chico/Grande",
                      type: "number",
                      min: "0"
                    },
                    domProps: {
                      value:
                        _vm.form.producto_detalles_baterias.cargo_chico_grande
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.producto_detalles_baterias,
                          "cargo_chico_grande",
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
                    _vm._l(_vm.errorMessages.cargo_chico_grande, function(
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
                      {
                        attrs: {
                          to: { name: "listado-baterias" },
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
                          disabled: _vm.btnAction != "Guardar" ? true : false,
                          type: "button"
                        },
                        on: { click: _vm.actualizar }
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Actualizar Batería")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar Batería")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true& ***!
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
            _vm._v("Administrar Baterías")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Baterías")
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
              _vm._v("> Baterías")
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
                  attrs: { to: { name: "registrar-bateria" }, tag: "button" }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Batería\n\t\t\t\t\t")
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
                  _vm.obtenerBaterias()
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
                    _vm._v(" Mostrar Todos")
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
                  _c("option", { attrs: { value: "nombre_comercial" } }, [
                    _vm._v("Modelo")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "descripcion" } }, [
                    _vm._v("Descripcion")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "codigo_barra" } }, [
                    _vm._v("Código Barras")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "codigo_sistema" } }, [
                    _vm._v("Código Sistema")
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
                      _vm.obtenerBaterias()
                    }
                  }
                },
                [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Buscar")]
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
                _vm._l(_vm.baterias, function(bateria, key) {
                  return [
                    _c("tr", [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          staticClass: "link",
                          on: {
                            click: function($event) {
                              return _vm.mostrarDetalles(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(bateria.codigo_sistema))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(bateria.nombre_comercial))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(bateria.descripcion))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            bateria.unidad_medida.descripcion +
                              " (" +
                              bateria.unidad_medida.unidad_medida +
                              ")"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            bateria.producto_detalles_baterias.bateria_material
                              ? bateria.producto_detalles_baterias
                                  .bateria_material.descripcion
                              : "N/D"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            bateria.producto_detalles_baterias
                              .bateria_sub_aplicacion
                              ? bateria.producto_detalles_baterias
                                  .bateria_sub_aplicacion.descripcion
                              : "N/D"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(bateria.producto_detalles_baterias.garantia)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        bateria.activo
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
                                to: {
                                  name: "actualizar-bateria",
                                  params: { id_producto: bateria.id_producto }
                                },
                                tag: "a"
                              }
                            },
                            [_c("i", { staticClass: "icon-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.downloadItem(
                                    "productos/baterias/ficha/" +
                                      bateria.id_producto
                                  )
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-arrow-down-circle" })]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    bateria.mostrar
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "10" } }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-striped table-bordered"
                              },
                              [
                                _vm._m(1, true),
                                _vm._v(" "),
                                _vm._m(2, true),
                                _vm._v(" "),
                                _vm._m(3, true),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", [
                                    _vm._v(_vm._s(bateria.numero_parte))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .bci
                                          : "N/D"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td"),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .nombre_comercial
                                          : "N/D"
                                      )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _vm._m(4, true),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _vm._m(5, true),
                                  _vm._v(" "),
                                  _c("td"),
                                  _vm._v(" "),
                                  _c("td", { attrs: { rowspan: "10" } }, [
                                    _c("img", {
                                      attrs: {
                                        alt: "bateria_lth",
                                        height: "400px",
                                        src: bateria.imagen_x,
                                        width: "400px"
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", [_vm._v("Largo")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .largo + " mm"
                                          : "N/D"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td")
                                ]),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", [_vm._v("Ancho")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .ancho + " mm"
                                          : "N/D"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td")
                                ]),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", [_vm._v("Alto")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .alto + " mm"
                                          : "N/D"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td")
                                ]),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", [_vm._v("Peso Humedo")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .peso_humedo + " kg"
                                          : "N/D"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td")
                                ]),
                                _vm._v(" "),
                                _vm._m(6, true),
                                _vm._v(" "),
                                _vm._m(7, true),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", { attrs: { colspan: "2" } }, [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .voltaje_nominal + " V"
                                          : "N/D"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td")
                                ]),
                                _vm._v(" "),
                                _vm._m(8, true),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", { attrs: { colspan: "2" } }, [
                                    _vm._v(
                                      _vm._s(
                                        bateria.producto_detalles_baterias
                                          ? bateria.producto_detalles_baterias
                                              .capacidad_reserva + " Min"
                                          : "N/D"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td")
                                ]),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", { attrs: { colspan: "4" } }, [
                                    _vm._v(
                                      "AMP A = 18°C (CCA) Capacidad de arranque en frío "
                                    ),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(
                                          bateria.producto_detalles_baterias
                                            ? bateria.producto_detalles_baterias
                                                .cca + " AMP"
                                            : "N/D"
                                        )
                                      )
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", { staticClass: "text-center" }, [
                                  _c("td", { attrs: { colspan: "4" } }, [
                                    _vm._v(
                                      "AMP A = 0°C (CA) Capacidad de arranque "
                                    ),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(
                                          bateria.producto_detalles_baterias
                                            ? bateria.producto_detalles_baterias
                                                .ca + " AMP"
                                            : "N/D"
                                        )
                                      )
                                    ])
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
                !_vm.baterias.length
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
            items: _vm.baterias,
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
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Código Sistema")]),
        _vm._v(" "),
        _c("th", [_vm._v("Modelo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidad de medida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Material")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sub Aplicación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Meses Garantía")]),
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
    return _c("tr", [
      _c("th", { staticClass: "text-center", attrs: { colspan: "4" } }, [
        _vm._v("Ficha Tecnica")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "4" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("td", [_c("strong", [_vm._v("Número Parte ")])]),
      _vm._v(" "),
      _c("td", [_c("strong", [_vm._v("BCI ")])]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td", [_c("strong", [_vm._v("Nombre ")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "4" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "2" } }, [
      _c("strong", [_vm._v("Dimensiones   ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "2" } }),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("td", { attrs: { colspan: "2" } }, [
        _c("strong", [_vm._v("Voltaje nominal ")])
      ]),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("td", { attrs: { colspan: "2" } }, [
        _c("strong", [_vm._v("Capacidad de reserva ")])
      ]),
      _vm._v(" "),
      _c("td")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/RegistrarBateria.vue?vue&type=template&id=575510ac&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/RegistrarBateria.vue?vue&type=template&id=575510ac& ***!
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
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Rubro:")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { options: _vm.rubros, label: "rubro_full" },
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
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Condición:")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.condicion,
                            expression: "form.condicion",
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
                              "condicion",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Nuevo")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Usado")
                        ])
                      ]
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
                        _vm._v(" Proveedor:")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.proveedores,
                          label: "nombre_comercial"
                        },
                        model: {
                          value: _vm.form.proveedor_producto,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "proveedor_producto", $$v)
                          },
                          expression: "form.proveedor_producto"
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
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Modelo Batería")
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
                      attrs: { placeholder: "Nombre Batería" },
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
                      attrs: { placeholder: "Descripción batería" },
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
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Unidad de medida")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { options: _vm.ums, label: "unidad_medida" },
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
                        _vm._l(_vm.errorMessages.unidad_medida, function(
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
                      attrs: { placeholder: "Código Barras" },
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
                      attrs: { placeholder: "DAI", type: "number", min: "0" },
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
                _c("div", { staticClass: "col-sm-3" }, [
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
                        placeholder: "Existencia Mínima",
                        min: "0",
                        type: "number"
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
                        placeholder: "Existencia Máxima",
                        min: "0",
                        type: "number"
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
                        placeholder: "Costo Inicial",
                        min: "0",
                        type: "number"
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
                        placeholder: "Inventario Inicial",
                        min: "0",
                        type: "number"
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
                        attrs: { options: _vm.bodegas, label: "descripcion" },
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
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v(" BCI")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.bci,
                          expression: "form.bci"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "BCI" },
                      domProps: { value: _vm.form.bci },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "bci", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bci, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Largo")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.largo,
                          expression: "form.largo",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Largo", type: "number", min: "0" },
                      domProps: { value: _vm.form.largo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "largo",
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
                      _vm._l(_vm.errorMessages.largo, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Ancho")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.ancho,
                          expression: "form.ancho",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Ancho", type: "number", min: "0" },
                      domProps: { value: _vm.form.ancho },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "ancho",
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
                      _vm._l(_vm.errorMessages.ancho, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Alto")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.alto,
                          expression: "form.alto",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Alto", type: "number", min: "0" },
                      domProps: { value: _vm.form.alto },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "alto",
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
                      _vm._l(_vm.errorMessages.alto, function(message) {
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
                      _vm._v(" Peso Humedo")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.peso_humedo,
                          expression: "form.peso_humedo",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Peso Humedo",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.peso_humedo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "peso_humedo",
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
                      _vm._l(_vm.errorMessages.peso_humedo, function(message) {
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
                      _vm._v(" Voltaje Nominal")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.voltaje_nominal,
                          expression: "form.voltaje_nominal",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Peso Humedo",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.voltaje_nominal },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "voltaje_nominal",
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
                      _vm._l(_vm.errorMessages.voltaje_nominal, function(
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
                      _vm._v(" Capacidad Arranque Frio")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.cca,
                          expression: "form.cca",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Capacidad Arranque Frio",
                        min: "0",
                        type: "number"
                      },
                      domProps: { value: _vm.form.cca },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "cca", _vm._n($event.target.value))
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
                      _vm._l(_vm.errorMessages.cca, function(message) {
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
                      _vm._v(" Capacidad de arranque")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.ca,
                          expression: "form.ca",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Capacidad de arranque",
                        min: "0",
                        type: "number"
                      },
                      domProps: { value: _vm.form.ca },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "ca", _vm._n($event.target.value))
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
                      _vm._l(_vm.errorMessages.ca, function(message) {
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
                      _vm._v(" Capacidad de reserva")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.capacidad_reserva,
                          expression: "form.capacidad_reserva",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Capacidad de reserva",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.capacidad_reserva },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "capacidad_reserva",
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
                      _vm._l(_vm.errorMessages.capacidad_reserva, function(
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
                      _vm._v(" Meses de garantía")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.garantia,
                          expression: "form.garantia",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: " Meses de garantía",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.garantia },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "garantia",
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
                      _vm._l(_vm.errorMessages.garantia, function(message) {
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
                      _vm._v(" Reemplazo sin Costo")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.rmplzo_sincosto,
                          expression: "form.rmplzo_sincosto",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Reemplazo sin Costo",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.rmplzo_sincosto },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "rmplzo_sincosto",
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
                      _vm._l(_vm.errorMessages.rmplzo_sincosto, function(
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Material")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.materiales,
                          label: "descripcion"
                        },
                        model: {
                          value: _vm.form.material_bateria,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "material_bateria", $$v)
                          },
                          expression: "form.material_bateria"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.material_bateria, function(
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
                        _vm._v("Tipo Batería")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { options: _vm.lineas, label: "descripcion" },
                        model: {
                          value: _vm.form.linea_bateria,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "linea_bateria", $$v)
                          },
                          expression: "form.linea_bateria"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.linea_bateria, function(
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Marca")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { options: _vm.marcas, label: "descripcion" },
                        on: {
                          input: function($event) {
                            return _vm.obtenerSubMarcas()
                          }
                        },
                        model: {
                          value: _vm.form.marca_bateria,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "marca_bateria", $$v)
                          },
                          expression: "form.marca_bateria"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.marca_bateria, function(
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
                        _vm._v("Sub Marcas")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.sub_marcas,
                          label: "descripcion"
                        },
                        model: {
                          value: _vm.form.submarca_bateria,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "submarca_bateria", $$v)
                          },
                          expression: "form.submarca_bateria"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.submarca_bateria, function(
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
                        _vm._v("Aplicación")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.aplicaciones,
                          label: "descripcion"
                        },
                        on: {
                          input: function($event) {
                            return _vm.obtenerSubAplicaciones()
                          }
                        },
                        model: {
                          value: _vm.form.aplicacion_bateria,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "aplicacion_bateria", $$v)
                          },
                          expression: "form.aplicacion_bateria"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.aplicacion_bateria, function(
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
                        _vm._v("Sub Aplicación")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.sub_aplicaciones,
                          label: "descripcion"
                        },
                        model: {
                          value: _vm.form.subaplicacion_bateria,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "subaplicacion_bateria", $$v)
                          },
                          expression: "form.subaplicacion_bateria"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(
                          _vm.errorMessages.subaplicacion_bateria,
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
                      _vm._v(" Descuento Eficacia Operativa")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.descuento_eficacia,
                          expression: "form.descuento_eficacia",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Descuento Eficacia Operativa",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.descuento_eficacia },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "descuento_eficacia",
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
                      _vm._l(_vm.errorMessages.descuento_eficacia, function(
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
                      _vm._v(" Cargo Chico/Grande")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.cargo_chico_grande,
                          expression: "form.cargo_chico_grande",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: "Cargo Chico/Grande",
                        type: "number",
                        min: "0"
                      },
                      domProps: { value: _vm.form.cargo_chico_grande },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "cargo_chico_grande",
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
                      _vm._l(_vm.errorMessages.cargo_chico_grande, function(
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
                          _vm.$set(
                            _vm.form,
                            "numero_parte",
                            $event.target.value
                          )
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
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Imágen")]),
                    _vm._v(" "),
                    _vm._m(3),
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
                  {
                    attrs: { to: { name: "listado-baterias" }, tag: "button" }
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
                    on: { click: _vm.registrarBateria }
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
        _vm._v("Registrar Nueva Batería")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar nueva Batería")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos Generales")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalles Batería")])])
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
        [_vm._v("Escoger Imágen")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/baterias.js":
/*!***************************************!*\
  !*** ./resources/app/api/baterias.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerBaterias: function obtenerBaterias(data, cb, errorCb) {
    axios.post('productos/obtener-baterias', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarCodigo: function buscarCodigo(data, cb, errorCb) {
    axios.post('productos/obtener-bateria-codigo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarCodigoBateriaCualquiera: function buscarCodigoBateriaCualquiera(data, cb, errorCb) {
    axios.post('productos/obtener-bateria-cualquiera', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPorcentajeAjuste: function obtenerPorcentajeAjuste(data, cb, errorCb) {
    axios.post('productos/obtener-ajuste-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBateria: function obtenerBateria(data, cb, errorCb) {
    axios.post('productos/obtener-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevaBateriaExterna: function nuevaBateriaExterna(data, cb, errorCb) {
    axios.post('productos/baterias/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCodigoBateria: function obtenerCodigoBateria(data, cb, errorCb) {
    axios.post('productos/obtener-codigo-producto', data).then(function (response) {
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
    axios.post('productos/registrar-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateriaExterna: function registrarBateriaExterna(data, cb, errorCb) {
    axios.post('productos/registrar-baterias-externas', data).then(function (response) {
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
    axios.put('productos/actualizar-bateria', data).then(function (response) {
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
    axios.put('producto/desactivar', data).then(function (response) {
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
    axios.put('producto/activar', data).then(function (response) {
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
    axios.post('productos/nueva-bateria', data).then(function (response) {
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

/***/ "./resources/app/api/baterias_aplicaciones.js":
/*!****************************************************!*\
  !*** ./resources/app/api/baterias_aplicaciones.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('inventario/baterias/aplicaciones/obtener-todos').then(function (response) {
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
    axios.post('inventario/baterias/aplicaciones/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerAplicacion: function obtenerAplicacion(data, cb, errorCb) {
    axios.post('inventario/baterias/aplicaciones/obtener-aplicacion', data).then(function (response) {
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
    axios.post('inventario/baterias/aplicaciones/registrar', data).then(function (response) {
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
    axios.put('inventario/baterias/aplicaciones/actualizar', data).then(function (response) {
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

/***/ "./resources/app/api/baterias_lineas.js":
/*!**********************************************!*\
  !*** ./resources/app/api/baterias_lineas.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('inventario/baterias/lineas/obtener-todas').then(function (response) {
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
    axios.post('inventario/baterias/lineas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerLinea: function obtenerLinea(data, cb, errorCb) {
    axios.post('inventario/baterias/lineas/obtener-linea', data).then(function (response) {
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
    axios.post('inventario/baterias/lineas/registrar', data).then(function (response) {
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
    axios.put('inventario/baterias/lineas/actualizar', data).then(function (response) {
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

/***/ "./resources/app/api/baterias_marcas.js":
/*!**********************************************!*\
  !*** ./resources/app/api/baterias_marcas.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('inventario/baterias/marcas/obtener-todos').then(function (response) {
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
    axios.post('inventario/baterias/marcas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerMarca: function obtenerMarca(data, cb, errorCb) {
    axios.post('inventario/baterias/marcas/obtener-marca', data).then(function (response) {
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
    axios.post('inventario/baterias/marcas/registrar', data).then(function (response) {
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
    axios.put('inventario/baterias/marcas/actualizar', data).then(function (response) {
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

/***/ "./resources/app/api/baterias_materiales.js":
/*!**************************************************!*\
  !*** ./resources/app/api/baterias_materiales.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('inventario/baterias/materiales/obtener-todos').then(function (response) {
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
    axios.post('inventario/baterias/materiales/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerMaterial: function obtenerMaterial(data, cb, errorCb) {
    axios.post('inventario/baterias/materiales/obtener-material', data).then(function (response) {
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
    axios.post('inventario/baterias/materiales/registrar', data).then(function (response) {
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
    axios.put('inventario/baterias/materiales/actualizar', data).then(function (response) {
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

/***/ "./resources/app/components/entradas/RegistrarBateriaExterna.vue":
/*!***********************************************************************!*\
  !*** ./resources/app/components/entradas/RegistrarBateriaExterna.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarBateriaExterna_vue_vue_type_template_id_2a7f33c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4& */ "./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4&");
/* harmony import */ var _RegistrarBateriaExterna_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarBateriaExterna.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarBateriaExterna_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarBateriaExterna_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarBateriaExterna_vue_vue_type_template_id_2a7f33c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarBateriaExterna_vue_vue_type_template_id_2a7f33c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/RegistrarBateriaExterna.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarBateriaExterna.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_template_id_2a7f33c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarBateriaExterna.vue?vue&type=template&id=2a7f33c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_template_id_2a7f33c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateriaExterna_vue_vue_type_template_id_2a7f33c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/productos/ActualizarBateria.vue":
/*!******************************************************************!*\
  !*** ./resources/app/components/productos/ActualizarBateria.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActualizarBateria_vue_vue_type_template_id_e972caca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActualizarBateria.vue?vue&type=template&id=e972caca& */ "./resources/app/components/productos/ActualizarBateria.vue?vue&type=template&id=e972caca&");
/* harmony import */ var _ActualizarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActualizarBateria.vue?vue&type=script&lang=js& */ "./resources/app/components/productos/ActualizarBateria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActualizarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActualizarBateria_vue_vue_type_template_id_e972caca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActualizarBateria_vue_vue_type_template_id_e972caca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/productos/ActualizarBateria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/productos/ActualizarBateria.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/productos/ActualizarBateria.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarBateria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ActualizarBateria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/productos/ActualizarBateria.vue?vue&type=template&id=e972caca&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/productos/ActualizarBateria.vue?vue&type=template&id=e972caca& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarBateria_vue_vue_type_template_id_e972caca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarBateria.vue?vue&type=template&id=e972caca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ActualizarBateria.vue?vue&type=template&id=e972caca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarBateria_vue_vue_type_template_id_e972caca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarBateria_vue_vue_type_template_id_e972caca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/productos/ListadoBaterias.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/productos/ListadoBaterias.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoBaterias_vue_vue_type_template_id_2ae73d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true& */ "./resources/app/components/productos/ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true&");
/* harmony import */ var _ListadoBaterias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoBaterias.vue?vue&type=script&lang=js& */ "./resources/app/components/productos/ListadoBaterias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoBaterias_vue_vue_type_style_index_0_id_2ae73d18_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true& */ "./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoBaterias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoBaterias_vue_vue_type_template_id_2ae73d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoBaterias_vue_vue_type_template_id_2ae73d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ae73d18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/productos/ListadoBaterias.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/productos/ListadoBaterias.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/productos/ListadoBaterias.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoBaterias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_style_index_0_id_2ae73d18_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=style&index=0&id=2ae73d18&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_style_index_0_id_2ae73d18_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_style_index_0_id_2ae73d18_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_style_index_0_id_2ae73d18_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_style_index_0_id_2ae73d18_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_style_index_0_id_2ae73d18_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/productos/ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/productos/ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_template_id_2ae73d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/ListadoBaterias.vue?vue&type=template&id=2ae73d18&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_template_id_2ae73d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoBaterias_vue_vue_type_template_id_2ae73d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/productos/RegistrarBateria.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/components/productos/RegistrarBateria.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarBateria_vue_vue_type_template_id_575510ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarBateria.vue?vue&type=template&id=575510ac& */ "./resources/app/components/productos/RegistrarBateria.vue?vue&type=template&id=575510ac&");
/* harmony import */ var _RegistrarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarBateria.vue?vue&type=script&lang=js& */ "./resources/app/components/productos/RegistrarBateria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarBateria_vue_vue_type_template_id_575510ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarBateria_vue_vue_type_template_id_575510ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/productos/RegistrarBateria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/productos/RegistrarBateria.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/productos/RegistrarBateria.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarBateria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/RegistrarBateria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/productos/RegistrarBateria.vue?vue&type=template&id=575510ac&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/productos/RegistrarBateria.vue?vue&type=template&id=575510ac& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateria_vue_vue_type_template_id_575510ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarBateria.vue?vue&type=template&id=575510ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/RegistrarBateria.vue?vue&type=template&id=575510ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateria_vue_vue_type_template_id_575510ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarBateria_vue_vue_type_template_id_575510ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);