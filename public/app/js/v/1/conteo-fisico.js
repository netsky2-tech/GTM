(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conteo-fisico"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas-inventario-inicial */ "./resources/app/api/entradas-inventario-inicial.js");
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
 //import es from 'vuejs-datepicker/dist/locale/translations/es'


/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
  	Multiselect
  },*/
  data: function data() {
    return {
      //productoEntradaBusquedaURL: "/entradas/productos/buscar",
      loading: true,
      registrandoBateria: false,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mascaraCodigo: 'X############',
      codigoAutomatico: false,
      total_pendientes: 0,
      contador: 1,
      productos: [],
      bodegas: [],
      detalleForm: {
        fecha_activacion: '',
        producto_simple: {},
        codigo_garantia: ''
      },
      consolidadoProductos: [],
      form: {
        consolidadoProductosId: [],
        id_entrada_inicial: '',
        contiene_baterias: true,
        codigo_entrada: "",
        fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
        entrada_tipo: "",
        entrada_proveedor: "",
        entrada_bodega: "",
        entrada_baterias: []
      },
      btnAction: "Actualizar Entrada",
      btnActionEmi: "Emitir Entrada",
      errorMessages: []
    };
  },
  methods: {
    confirmar: function confirmar() {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar el registro de la entrada?',
        text: "Revise bien los datos, es posible editar la entrada luego de guardar.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          //this.actualizar();
          _this.actualizar();
        }
      });
    },
    confirmarEmision: function confirmarEmision() {
      var _this2 = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar la emisión de la entrada?',
        text: "Revisa los datos, ya no se podrá editar la entrada, y se afectará el inventario",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          //this.actualizar();
          _this2.registrar();
        }
      });
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this; //  console.log(self.detalleForm.producto_simple)

      self.$refs.bateria.$refs.search.blur();
      self.$refs.codigo.focus();

      if (self.detalleForm.producto_simple) {
        if (self.detalleForm.producto_simple.producto_detalles_baterias.id_submarca === 7) {
          ///Caso motobaterias (no tiene codigo de garantia)
          self.$refs.fecha_activacion.focus();
          self.codigoAutomatico = true;
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
          self.detalleForm.codigo_garantia = 'Código Automático ' + self.contador.toString();
          self.contador++;
          var old_activacion = self.detalleForm.codigo_garantia;
          self.detalleForm.codigo_garantia = '';
          self.detalleForm.codigo_garantia = old_activacion;
        } else if (self.detalleForm.producto_simple.producto_detalles_baterias.id_submarca === 3) {
          //Caso Cronos
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantia = '';
          self.mascaraCodigo = 'X############';
          self.codigoAutomatico = false;
        } else {
          //casos lth
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantia = '';
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
          self.codigoAutomatico = false;
        }
      } //self.$refs.codigo.focus();

    },
    codigoGarantiaEvento: function codigoGarantiaEvento() {
      var self = this;

      if (self.detalleForm.codigo_garantia !== '') {
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
    cambiarFechaActivacion: function cambiarFechaActivacion(item) {
      if (item.fecha_activacion !== item.fecha_activacion_org) {
        item.registrada = false;
      }
    },
    obtenerEntrada: function obtenerEntrada() {
      var self = this;
      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEntrada({
        id_entrada_inicial: this.$route.params.id_entrada_inicial,
        cargar_dependencias: true
      }, function (data) {
        data.entrada_inicial.entrada_baterias.forEach(function (entrada_inicial, key) {
          data.entrada_inicial.entrada_baterias[key].registrada = true;
          data.entrada_inicial.entrada_baterias[key].guardadoEnProgreso = false;
        });
        self.form = data.entrada_inicial;
        self.productos = data.productos;
        self.bodegas = data.bodegas;
        self.agruparProductos();
        self.loading = false;
        /*if (self.form.estado !== 99) {
        	alertify.error("La entrada ya no puede ser actualizada", 5);
        	this.$router.push({
        		name: "entradas"
        	});
        }*/
      });
    },
    registrarBateria: function registrarBateria(bateria) {
      var self = this;

      if (!self.registrandoBateria && !bateria.registrada
      /*&& bateria.estado===1*/
      ) {
          //self.registrandoBateria = true;
          bateria.guardadoEnProgreso = true;
          _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__["default"].registrarBateria({
            id_entrada_inicial: self.form.id_entrada_inicial,
            codigo_garantiax: bateria.codigo_garantia,
            codigo_barra: bateria.producto_simple.codigo_barra,
            id_producto: bateria.producto_simple.id_producto,
            fecha_activacion: bateria.fecha_activacion,
            id_entrada_inicial_bateria: bateria.id_entrada_inicial_bateria,
            estado: bateria.estado
          }, function (data) {
            //self.form = data.orden;
            bateria.registrada = true;
            bateria.id_entrada_inicial_bateria = data.id_entrada_inicial_bateria; //self.registrandoBateria = false;

            bateria.guardadoEnProgreso = false;
          }, function (err) {
            bateria.registrada = false;
            console.log(err); //self.registrandoBateria = false;

            bateria.guardadoEnProgreso = false;
          });
        }
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.producto_simple) {
        if (self.detalleForm.codigo_garantia !== '' && self.detalleForm.fecha_activacion !== '') {
          var existe = false;
          var validacion = true;
          self.form.entrada_baterias.forEach(function (bateriax, key) {
            if (self.detalleForm.codigo_garantia === bateriax.codigo_garantia) {
              existe = true;
            }
          });

          if (!existe) {
            var keyx = 0;
            this.form.entrada_baterias.unshift({
              producto_simple: this.detalleForm.producto_simple,
              id_producto: this.detalleForm.producto_simple.id_producto,
              codigo_garantia: this.detalleForm.codigo_garantia,
              fecha_activacion: this.detalleForm.fecha_activacion,
              fecha_activacion_org: this.detalleForm.fecha_activacion,
              registrada: false,
              guardadoEnProgreso: false,
              estado: 1,
              id_entrada_inicial_bateria: null
            });
          } else {
            alertify.warning("Ya existe ese código de batería en el listado", 5);
            validacion = false;
          }

          if (validacion) {
            if (self.detalleForm.producto_simple.producto_detalles_baterias.id_submarca === 7) {
              //Caso Motobaterias
              //self.contador++;
              self.detalleForm.codigo_garantia = 'Código Automático ' + self.contador.toString();
              self.detalleForm.producto_simple = '';
              self.$refs.bateria.$el.focus();
            } else if (self.detalleForm.producto_simple.producto_detalles_baterias.id_submarca === 3) {
              //Caso Cronos
              self.detalleForm.codigo_garantia = '';
              self.$refs.codigo.focus();
            } else {
              self.detalleForm.codigo_garantia = '';
              self.detalleForm.producto_simple = ''; ///self.$refs.bateria.$refs.search.blur()

              self.$refs.bateria.$el.focus();
            }
          } else {
            self.detalleForm.codigo_garantia = '';
            self.detalleForm.producto_simple = '';
            self.$refs.bateria.$el.focus();
          }

          if (self.cantidad_sin_registrar() >= 5) {
            self.form.entrada_baterias.forEach(function (bateriax, key) {
              if (!bateriax.registrada) {
                self.registrarBateria(bateriax);
              }
            });
          }

          self.cantidad_sin_registrar();
          self.agruparProductos(); //this.detalleForm.fecha_activacion='';
        } else {
          alertify.warning("Debe definir un código unico de garantía", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.form.entrada_baterias.length >= 1) {
        //self.form.entrada_productos[keyx].cantidad_recibida--;
        this.form.entrada_baterias[index].estado = 0;
        this.form.entrada_baterias[index].registrada = false;
        self.agruparProductos();
        /*if(item.id_entrada_inicial_bateria){
        		this.entrada_baterias.splice(index, 1);
        }*/
        //guardadoEnProgreso: false,
        //		estado: 0,
      } else {
        this.form.entrada_baterias = [];
      }
    },
    actualizar: function actualizar() {
      var _this3 = this;

      var self = this;
      self.loading = true; //if(self.total_cantidad_recibida > 0){
      //self.form.entrada_baterias = self.entrada_baterias;

      self.btnAction = "Registrando, espere....";
      self.btnActionEmi = "Registrando, espere...."; //if(self.form.estado === 1) {

      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        //alertify.success("La entrada fue recibida correctamente",5);
        _this3.$swal.fire('Entrada Actualizada!', 'La Entrada fue actualizada correctamente.', 'success');

        self.loading = false;

        _this3.$router.push({
          name: "entradas-inicial"
        });
      }, function (err) {
        self.loading = false;
        alertify.error('Error Actualizando los datos', 10);
        self.errorMessages = err;
        self.btnAction = "Actualizar Entrada";
        self.btnActionEmi = "Emitir Entrada";
      });
      /*}else{
      	alertify.error("La entrada ya no puede ser recibida",5);
      	this.$router.push({
      		name: "entradas-inicial"
      	});
      }*/

      /*}else{
      	alertify.error("Se debe recibir al menos un producto",5);
      }*/
    },
    registrar: function registrar() {
      var _this4 = this;

      var self = this;
      self.loading = true; //if(self.total_cantidad_recibida > 0){
      //self.form.entrada_baterias = self.entrada_baterias;

      self.btnAction = "Registrando, espere....";
      self.btnActionEmi = "Registrando, espere...."; //if(self.form.estado === 1) {

      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        //alertify.success("La entrada fue recibida correctamente",5);
        _this4.$swal.fire('Entrada Registrada!', 'La Entrada fue registrada correctamente.', 'success');

        self.loading = false;

        _this4.$router.push({
          name: "entradas-inicial"
        });
      }, function (err) {
        self.loading = false;
        alertify.error('Error Actualizando los datos', 10);
        self.errorMessages = err;
        self.btnAction = "Actualizar Entrada";
        self.btnActionEmi = "Emitir Entrada";
      });
      /*}else{
                      alertify.error("La entrada ya no puede ser recibida",5);
                      this.$router.push({
                          name: "entradas-inicial"
                      });
                  }*/

      /*}else{
      	alertify.error("Se debe recibir al menos un producto",5);
      }*/
    },
    cantidad_sin_registrar: function cantidad_sin_registrar() {
      var self = this;

      if (self.form.entrada_baterias) {
        var i = 0;
        self.form.entrada_baterias.forEach(function (bateriax, key) {
          if (!bateriax.registrada) {
            i++;
          }
        });
        self.total_pendientes = i;
        return self.total_pendientes;
      } else {
        return 0;
      }
    },
    agruparProductos: function agruparProductos() {
      var self = this;
      var counts = self.form.entrada_baterias.reduce(function (p, c) {
        var name = c.producto_simple.descripcion;

        if (!p.hasOwnProperty(name)) {
          p[name] = 0;
        }

        if (c.estado === 1) {
          p[name]++;
        }

        return p;
      }, {});
      var counts2 = self.form.entrada_baterias.reduce(function (p, c) {
        var idProd = c.id_producto;

        if (!p.hasOwnProperty(idProd)) {
          p[idProd] = 0;
        }

        if (c.estado === 1) {
          p[idProd]++;
        }

        return p;
      }, {});
      self.consolidadoProductos = Object.keys(counts).map(function (k) {
        return {
          nombre_producto: k,
          cantidad: counts[k]
        };
      });
      self.form.consolidadoProductosId = Object.keys(counts2).map(function (k) {
        return {
          id_producto: k,
          cantidad: counts2[k]
        };
      });
    }
  },
  mounted: function mounted() {
    this.obtenerEntrada();
  },
  computed: {
    total_unidades: function total_unidades() {
      return this.consolidadoProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas-inventario-inicial */ "./resources/app/api/entradas-inventario-inicial.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '',
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [20, 40, 60, 80],
        search: {
          field: "id_entrada_inicial",
          value: ""
        }
      },
      entradas: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarProductos: function mostrarProductos(key) {
      if (this.entradas[key].mostrar) {
        this.entradas[key].mostrar = 0;
      } else {
        this.entradas[key].mostrar = 1;
      }
    },
    obtenerEntradas: function obtenerEntradas() {
      var self = this;
      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        data.rows.forEach(function (entradas, key) {
          data.rows[key].mostrar = 0;
        });
        self.entradas = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerEntradas();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerEntradas();
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerEntradas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas-inventario-inicial */ "./resources/app/api/entradas-inventario-inicial.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      nombre_empresa: '',
      direccion_empresa: '',
      format: "dd-MM-yyyy",
      descargando: false,
      form: {
        codigo_entrada: "",
        fecha_entrada: "",
        id_tipo_entrada: "",
        id_proveedor: 0,
        id_bodega: 0,
        consolidado: [],
        entrada_proveedor: [],
        entrada_bodega: [],
        entrada_baterias: [],
        entrada_tipo: [],
        log_registro: [],
        total: 0,
        sub_total: 0
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    downloadItem: function downloadItem(extension) {
      var self = this;
      self.loading = true;
      axios.post('entradas/inventario-inicial/reporte', {
        id_entrada_inicial: self.form.id_entrada_inicial,
        extension: extension,
        tipo_productos: self.form.tipo_productos
      }, {
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
        link.download = 'ReporeInventarioInicial.' + extension;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerEntrada: function obtenerEntrada() {
      var self = this;
      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEntrada({
        id_entrada_inicial: this.$route.params.id_entrada_inicial,
        cargar_dependencias: false
      }, function (data) {
        self.form = data.entrada_inicial;
        self.nombre_empresa = data.nombre_empresa;
        self.direccion_empresa = data.direccion_empresa;
        self.form.consolidado = data.consolidado;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    total_cantidad_consolidado: function total_cantidad_consolidado() {
      return this.form.consolidado.reduce(function (carry, item) {
        return carry + Number(item.cantidad_prod);
      }, 0);
    },
    total_cantidad_prods: function total_cantidad_prods() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    },
    total_cantidad_baterias: function total_cantidad_baterias() {
      return this.form.entrada_baterias.reduce(function (carry, item) {
        return carry + 1;
      }, 0);
    }
  },
  mounted: function mounted() {
    this.obtenerEntrada();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/conteo-fisico */ "./resources/app/api/conteo-fisico.js");
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
 //import es from 'vuejs-datepicker/dist/locale/translations/es'


/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
  	Multiselect
  },*/
  data: function data() {
    return {
      //productoEntradaBusquedaURL: "/entradas/productos/buscar",
      loading: true,
      registrandoBateria: false,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      mascaraCodigo: 'X############',
      codigoAutomatico: false,
      total_pendientes: 0,
      contador: 1,
      productos: [],
      bodegas: [],
      detalleForm: {
        fecha_activacion: '',
        productox: {},
        codigo_garantiax: ''
      },
      detalle_baterias: [],
      consolidadoProductos: [],
      form: {
        id_conteo_fisico: '',
        entrada_bodega: "",
        entrada_productos: []
      },
      btnAction: "Registrar Entrada Inicial",
      errorMessages: []
    };
  },
  methods: {
    agruparProductos: function agruparProductos() {
      var self = this;
      var counts = self.detalle_baterias.reduce(function (p, c) {
        var name = c.productox.text;

        if (!p.hasOwnProperty(name)) {
          p[name] = 0;
        }

        if (c.estado === 1) {
          p[name]++;
        }

        return p;
      }, {});
      self.consolidadoProductos = Object.keys(counts).map(function (k) {
        return {
          nombre_producto: k,
          cantidad: counts[k]
        };
      });
    },
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
          _this.registrar();
        }
      });
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this; //  console.log(self.detalleForm.productox)

      self.$refs.bateria.$refs.search.blur();
      self.$refs.codigo.focus();

      if (self.detalleForm.productox) {
        if (self.detalleForm.productox.producto_detalles_baterias.id_submarca === 7) {
          ///Caso motobaterias (no tiene codigo de garantia)
          self.$refs.fecha_activacion.focus();
          self.codigoAutomatico = true;
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
          self.detalleForm.codigo_garantiax = 'Código Automático ' + self.contador.toString();
          self.contador++;
          var old_activacion = self.detalleForm.codigo_garantiax;
          self.detalleForm.codigo_garantiax = '';
          self.detalleForm.codigo_garantiax = old_activacion;
        } else if (self.detalleForm.productox.producto_detalles_baterias.id_submarca === 3) {
          //Caso Cronos
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantiax = '';
          self.mascaraCodigo = 'X############';
          self.codigoAutomatico = false;
        } else {
          //casos lth
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantiax = '';
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
          self.codigoAutomatico = false;
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
    cambiarFechaActivacion: function cambiarFechaActivacion(item) {
      if (item.fecha_activacion !== item.fecha_activacion_org) {
        item.registrada = false;
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.productos = data.productos;
        self.bodegas = data.bodegas;
        self.form.id_conteo_fisico = data.id_conteo_fisico; //self.agruparProductos();

        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    registrarBateria: function registrarBateria(bateria) {
      var self = this;

      if (!self.registrandoBateria && !bateria.registrada
      /*&& bateria.estado===1*/
      ) {
          //self.registrandoBateria = true;
          bateria.guardadoEnProgreso = true;
          _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].registrarBateria({
            id_entrada_inicial: self.form.id_entrada_inicial,
            codigo_garantiax: bateria.codigo_garantiax,
            codigo_barra: bateria.productox.codigo_barra,
            id_producto: bateria.productox.id_producto,
            fecha_activacion: bateria.fecha_activacion,
            id_entrada_inicial_bateria: bateria.id_entrada_inicial_bateria,
            estado: bateria.estado
          }, function (data) {
            //self.form = data.orden;
            bateria.registrada = true;
            bateria.id_entrada_inicial_bateria = data.id_entrada_inicial_bateria; //self.registrandoBateria = false;

            bateria.guardadoEnProgreso = false;
          }, function (err) {
            bateria.registrada = false;
            console.log(err); //self.registrandoBateria = false;

            bateria.guardadoEnProgreso = false;
          });
        }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.detalle_baterias.length >= 1) {
        //self.form.entrada_productos[keyx].cantidad_recibida--;
        this.detalle_baterias[index].estado = 0;
        this.detalle_baterias[index].registrada = false;
        self.agruparProductos();
        /*if(item.id_entrada_inicial_bateria){
        		this.detalle_baterias.splice(index, 1);
        }*/
        //guardadoEnProgreso: false,
        //		estado: 0,
      } else {
        this.detalle_baterias = [];
      }
    },
    buscarBateria: function buscarBateria() {
      var self = this;
      self.loading = true; //self.$refs.precio_unitario.focus();

      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].buscarCodigoBateriaAny({
        codigo_bateria: self.detalleForm.codigo_garantiax
      }, function (data) {
        if (data !== null) {
          self.$refs.bateria.focus();
          self.detalleForm.codigo_garantiax = '';
          /*
          self.codigo_garantia = data[0].codigo_garantia;
          self.reservada = data[0].reservada;
          self.estado_bateria = data[0].estado_bateria;
          self.descripcion_producto = data[0].descripcion_producto;
          self.nombre_comercial = data[0].nombre_comercial;
          self.fecha_activacion = data[0].fecha_activacion;
          self.fecha_ingreso = data[0].fecha_ingreso;
          */
        } else {
          alertify.warning("No se encuentra esta batería.", 5);
          self.$refs.bateria.focus();
          self.detalleForm.codigo_garantiax = '';
        }

        self.errorMessages = [];
        self.loading = false;
      }, function (err) {
        //console.log(err);
        self.errorMessages = err;
        self.detalleForm.codigo_garantiax = '';

        if (err.codigo_bateria) {
          self.$refs.bateria.focus();
          self.bateria_busqueda = '';
          alertify.warning("No se encuentra esta batería.", 5);
        }

        self.loading = false;
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.codigo_garantiax) {
        var existeCodigoGarantia = false;
        var existeProducto = false;
        var estadoExistente = 0;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (self.detalleForm.codigo_garantiax.toUpperCase() === bateriax.codigo_garantia.toUpperCase()) {
            existeCodigoGarantia = true;
            estadoExistente = bateriax.estado;
          }
        });

        if (self.form.salida_productos) {
          self.form.salida_productos.forEach(function (productox, key) {
            if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
              existeProducto = true;
            }
          });
        }

        if (existeProducto) {
          if (!existeCodigoGarantia) {
            var keyx = 0;

            if (self.form.salida_productos) {
              self.form.salida_productos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                  keyx = key;
                }
              });
            }

            if (self.form.salida_productos[keyx].cantidad_despachada + 1 <= self.form.salida_productos[keyx].cantidad_saliente) {
              self.form.salida_productos[keyx].cantidad_despachada++;
              this.detalle_baterias.push({
                estado: 1,
                id_producto: self.detalleForm.productox.id_producto,
                id_salida_producto_bateria: 0,
                id_bateria: this.detalleForm.productox.id_bateria,
                codigo_garantia: this.detalleForm.productox.codigo_garantia,
                id_salida_producto: 0,
                id_salida: this.form.id_salida,
                descripcion: this.detalleForm.productox.bateria_producto.descripcion,
                registrada: false,
                guardadoEnProgreso: false
              });
              alertify.success("Batería agregada!", 5);

              if (self.cantidad_sin_registrar() >= 5) {
                self.detalle_baterias.forEach(function (bateriax, key) {
                  if (!bateriax.registrada) {
                    self.registrarBateria(bateriax);
                  }
                });
              }

              self.cantidad_sin_registrar();
            } else {
              alertify.warning("Ya se registró la cantidad solicitada de esta batería", 5);
            }
          } else {
            if (!estadoExistente) {
              alertify.warning("Ya existe ese código de batería en el listado", 5);
            } else {}
          }
        } else {
          alertify.warning("El código de esta batería pertenece a un producto que no existe en la salida", 5);
        }

        this.detalleForm.productox = {};
        self.$refs.bateria.focus();
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    registrar: function registrar() {
      var _this2 = this;

      var self = this; //if(self.total_cantidad_recibida > 0){

      self.loading = true;
      self.form.detalle_baterias = self.detalle_baterias;
      self.btnAction = "Registrando, espere...."; //if(self.form.estado === 1) {

      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].recibir(self.form, function (data) {
        //alertify.success("La entrada fue recibida correctamente",5);
        _this2.$swal.fire('Entrada Recibida!', 'La Entrada fue Recibida correctamente.', 'success');

        self.loading = false;

        _this2.$router.push({
          name: "entradas-inicial"
        });
      }, function (err) {
        alertify.error('Error Actualizando los datos', 10);
        self.errorMessages = err;
        self.btnAction = "Registrar Entrada Inicial";
        self.loading = false;
      });
      /*}else{
      	alertify.error("La entrada ya no puede ser recibida",5);
      	this.$router.push({
      		name: "entradas-inicial"
      	});
      }*/

      /*}else{
      	alertify.error("Se debe recibir al menos un producto",5);
      }*/
    },
    cantidad_sin_registrar: function cantidad_sin_registrar() {
      var self = this;

      if (self.detalle_baterias) {
        var i = 0;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (!bateriax.registrada) {
            i++;
          }
        });
        self.total_pendientes = i;
        return self.total_pendientes;
      } else {
        return 0;
      }
    }
  },
  computed: {
    total_unidades: function total_unidades() {
      return this.consolidadoProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-34b48ef6] {\n  min-width: 120px;\n}\n.table a[data-v-34b48ef6] {\n  color: #2675dc;\n}\n.table .table-number[data-v-34b48ef6] {\n  width: 60px;\n}\n.table .action[data-v-34b48ef6] {\n  width: 180px;\n}\n.table .detail-link[data-v-34b48ef6] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-34b48ef6] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-34b48ef6]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      model: {
                        value: _vm.form.entrada_bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_bodega", $$v)
                        },
                        expression: "form.entrada_bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.entrada_bodega, function(
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
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.entrada_productos, function(
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
                      _vm._l(_vm.consolidadoProductos, function(item, index) {
                        return [
                          item.cantidad > 0
                            ? _c("tr", [
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.nombre_producto,
                                        expression: "item.nombre_producto"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: { value: item.nombre_producto },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "nombre_producto",
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
                                        rawName: "v-model.number",
                                        value: item.cantidad,
                                        expression: "item.cantidad",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "", type: "number" },
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
                                  })
                                ])
                              ])
                            : _vm._e(),
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
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tTotal Unidades\n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-left" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.total_unidades) +
                            "\n\t\t\t\t\t\t\t\t"
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _vm._m(3),
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
                      on: { input: _vm.cargar_detalles_producto },
                      model: {
                        value: _vm.detalleForm.producto_simple,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "producto_simple", $$v)
                        },
                        expression: "detalleForm.producto_simple"
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
                        value: _vm.detalleForm.codigo_garantia,
                        expression: "detalleForm.codigo_garantia"
                      }
                    ],
                    ref: "codigo",
                    staticClass: "form-control",
                    attrs: { disabled: _vm.codigoAutomatico },
                    domProps: { value: _vm.detalleForm.codigo_garantia },
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
                          "codigo_garantia",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_garantia, function(
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
                  _vm._l(_vm.errorMessages.entrada_baterias, function(message) {
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
                      _vm._l(_vm.form.entrada_baterias, function(item, index) {
                        return [
                          item.estado === 1
                            ? [
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
                                          value:
                                            item.producto_simple.descripcion,
                                          expression:
                                            "item.producto_simple.descripcion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.producto_simple.descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.producto_simple,
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
                                          "entrada_baterias." +
                                            index +
                                            ".producto_simple.id_producto"
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
                                          value: item.codigo_garantia,
                                          expression: "item.codigo_garantia"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: { value: item.codigo_garantia },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "codigo_garantia",
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
                                          "entrada_baterias." +
                                            index +
                                            ".codigo_garantia"
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
                                      domProps: {
                                        value: item.fecha_activacion
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.cambiarFechaActivacion(
                                            item
                                          )
                                        },
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
                                          "entrada_baterias." +
                                            index +
                                            ".fecha_activacion"
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
                                  _c("td", { staticClass: "text-center" }, [
                                    item.registrada
                                      ? _c("div", [
                                          _c(
                                            "i",
                                            {
                                              directives: [
                                                {
                                                  name: "tooltip",
                                                  rawName: "v-tooltip",
                                                  value: "Bateria registrada",
                                                  expression:
                                                    "'Bateria registrada'"
                                                }
                                              ],
                                              staticClass: "fa fa-check",
                                              style: "color:green;",
                                              attrs: { "aria-hidden": "true" }
                                            },
                                            [_vm._v("  Guardada")]
                                          )
                                        ])
                                      : _c("div", [
                                          _c(
                                            "i",
                                            {
                                              directives: [
                                                {
                                                  name: "tooltip",
                                                  rawName: "v-tooltip",
                                                  value:
                                                    "Registrar bateria manualmente",
                                                  expression:
                                                    "'Registrar bateria manualmente'"
                                                }
                                              ],
                                              staticClass: "fa fa-save",
                                              style: "color:blue;",
                                              attrs: { "aria-hidden": "true" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.registrarBateria(
                                                    item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item.guardadoEnProgreso
                                                    ? "  Guardando...."
                                                    : "  Pendiente"
                                                )
                                              )
                                            ]
                                          )
                                        ])
                                  ])
                                ])
                              ]
                            : _vm._e()
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
                    attrs: { to: { name: "entradas-inicial" }, tag: "button" }
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
                      disabled: _vm.btnAction !== "Actualizar Entrada",
                      type: "button"
                    },
                    on: { click: _vm.confirmar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: {
                      disabled: _vm.btnActionEmi !== "Emitir Entrada",
                      type: "button"
                    },
                    on: { click: _vm.confirmarEmision }
                  },
                  [_vm._v(_vm._s(_vm.btnActionEmi))]
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
        _vm._v("Registrar Inventario inicial")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Inventario inicial de baterías")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Consolidado de productos")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Recibida")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de baterías")])])
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
        _c("th", [_vm._v("Fecha Activación")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Estado")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true& ***!
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
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Administrar Entradas de productos por inventario Inicial")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Entradas")
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
              _vm._v("> Inventario Inicial")
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
                    to: { name: "registrar-inventario-inicial" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(
                    " Registrar Inventario Inicial de Baterias Automotrices\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: {
                    tag: "button",
                    to: { name: "registrar-inventario-inicial-manual" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(
                    " Registrar Inventario Inicial de Otros Productos\n        "
                  )
                ]
              )
            ],
            1
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
                _vm._l(_vm.entradas, function(entrada, key) {
                  return [
                    _c("tr", { key: entrada.id_entrada_inicial }, [
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(entrada.fecha_entrada)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            entrada.trabajador_entrada_inicial
                              ? entrada.trabajador_entrada_inicial
                                  .nombre_completo
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            entrada.entrada_bodega
                              ? entrada.entrada_bodega.descripcion
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        entrada.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Anulada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        entrada.estado === 99
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-grey" }, [
                                _vm._v("Borrador")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        entrada.estado === 1
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-blue" }, [
                                _vm._v("Registrada")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        entrada.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Emitida")]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          [1, 99].indexOf(entrada.estado) >= 0 &&
                          entrada.tipo_productos === 1
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          "Editar o Emitir Entrada Inicial",
                                        expression:
                                          "'Editar o Emitir Entrada Inicial'"
                                      }
                                    ],
                                    attrs: {
                                      tag: "a",
                                      to: {
                                        name: "actualizar-entrada-inicial",
                                        params: {
                                          id_entrada_inicial:
                                            entrada.id_entrada_inicial
                                        }
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "icon-pencil" })]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          [1, 99].indexOf(entrada.estado) >= 0 &&
                          entrada.tipo_productos === 2
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value:
                                          "Editar o Emitir Entrada Inicial",
                                        expression:
                                          "'Editar o Emitir Entrada Inicial'"
                                      }
                                    ],
                                    attrs: {
                                      tag: "a",
                                      to: {
                                        name:
                                          "actualizar-entrada-inicial-manual",
                                        params: {
                                          id_entrada_inicial:
                                            entrada.id_entrada_inicial
                                        }
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "icon-pencil" })]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Mostrar Detalles de Entrada Inicial",
                                  expression:
                                    "'Mostrar Detalles de Entrada Inicial'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-entrada-inicial",
                                  params: {
                                    id_entrada_inicial:
                                      entrada.id_entrada_inicial
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
                        2
                      )
                    ])
                  ]
                }),
                _vm._v(" "),
                !_vm.entradas.length
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "text-center",
                          attrs: { colspan: "10" }
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
            items: _vm.entradas,
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
        _c("th", [_vm._v("Fecha Entrada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trabajador Registra")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bodega")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=template&id=b8dbba12&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=template&id=b8dbba12& ***!
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
  return _c(
    "div",
    { staticClass: "panel" },
    [
      _c("div", { staticClass: "panel-heading" }, [
        _c("span", { staticClass: "panel-title" }, [
          _vm._v(
            "Entrada Inicial Código: " +
              _vm._s(_vm.form ? _vm.form.id_entrada_inicial : "N/D")
          )
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
              staticStyle: { "margin-right": "10px" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.downloadItem("xls")
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-file-excel-o" }),
              _vm._v(" Descargar Excel")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticStyle: { "margin-right": "10px" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.downloadItem("pdf")
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-file-pdf-o" }),
              _vm._v(" Descargar PDF")
            ]
          )
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
                        "Entrada Inicial No. : " +
                          _vm._s(_vm.form.id_entrada_inicial)
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col col-4" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm.form.trabajador_entrada_inicial
                      ? [
                          _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm.form.trabajador_entrada_inicial
                                  .nombre_completo
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
                  _vm._m(1),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm.form.entrada_bodega
                          ? _vm.form.entrada_bodega.descripcion
                          : "N/D"
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br")
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
                                  [_vm._v("Cancelada")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.estado === 99
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-default",
                                    staticStyle: { "font-size": "100%" }
                                  },
                                  [_vm._v("Borrador")]
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
                                  [_vm._v("Registrada")]
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
                                  [_vm._v("Emitida")]
                                )
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Código entrada:")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.form.id_entrada_inicial))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Fecha Emisión:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.formatDate(_vm.form.fecha_entrada)))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.form.tipo_productos === 1
              ? [
                  _c("div", { staticClass: "document-body" }, [
                    _c("table", { staticClass: "document-table" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.form.consolidado, function(item) {
                            return [
                              _c("tr", [
                                _c("td", { staticClass: "width-2" }, [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(
                                        item.producto_simple.codigo_barra
                                          ? item.producto_simple.codigo_barra
                                          : "N/D"
                                      ) +
                                      "\n                     "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "width-4" }, [
                                  _c("pre", [
                                    _vm._v(
                                      " " +
                                        _vm._s(item.producto_simple.descripcion)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "width-1 align-center" },
                                  [_vm._v(_vm._s(item.cantidad_prod))]
                                )
                              ])
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
                              staticClass: "align-right",
                              attrs: { colspan: "2" }
                            },
                            [_vm._v("Total unidades")]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-center" }, [
                            _vm._v(_vm._s(_vm.total_cantidad_consolidado))
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(3)
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "document-body" }, [
                    _c("table", { staticClass: "document-table" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm.form.entrada_baterias
                            ? [
                                _vm._l(_vm.form.entrada_baterias, function(
                                  itemBateria
                                ) {
                                  return [
                                    _c("tr", { key: itemBateria.id_bateria }, [
                                      _c("td", { staticClass: "width-4" }, [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              itemBateria.codigo_garantia
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "width-4" }, [
                                        _c("pre", [
                                          _vm._v(
                                            _vm._s(
                                              itemBateria.producto_simple
                                                ? itemBateria.producto_simple
                                                    .text
                                                : "N/D"
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "width-4" }, [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              itemBateria.fecha_activacion
                                            ) +
                                            "\n                                        "
                                        )
                                      ])
                                    ])
                                  ]
                                })
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("tfoot", [
                        _c(
                          "td",
                          {
                            staticClass: "align-right",
                            attrs: { colspan: "2" }
                          },
                          [_vm._v("Total unidades")]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-center" }, [
                          _vm._v(_vm._s(_vm.total_cantidad_baterias))
                        ])
                      ])
                    ])
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.form.tipo_productos === 2
              ? [
                  _c("div", { staticClass: "document-body" }, [
                    _c("table", { staticClass: "document-table" }, [
                      _vm._m(6),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.form.entrada_productos, function(item) {
                            return [
                              _c("tr", [
                                _c("td", { staticClass: "width-2" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        item.entrada_producto.codigo_barra
                                          ? item.entrada_producto.codigo_barra
                                          : "N/D"
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "width-4" }, [
                                  _c("pre", [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          item.entrada_producto.descripcion
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "width-1 align-center" },
                                  [_vm._v(_vm._s(item.cantidad))]
                                )
                              ])
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
                              staticClass: "align-right",
                              attrs: { colspan: "2" }
                            },
                            [_vm._v("Total unidades")]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-center" }, [
                            _vm._v(_vm._s(_vm.total_cantidad_prods))
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(7)
                      ])
                    ])
                  ])
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
    return _c("p", [_c("strong", [_vm._v("Trabajador Registra:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Bodega:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Cantidad")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "3" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col col-4" }, [
      _c("p", [_c("strong", [_vm._v("Detalle de Baterías Recibidas:")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código Garantía")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción Bateria")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Activación")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Cantidad")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "3" } })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=template&id=758a66b8&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=template&id=758a66b8& ***!
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
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
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.entrada_productos, function(
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
                      _vm._l(_vm.consolidadoProductos, function(item, index) {
                        return [
                          item.cantidad > 0
                            ? _c("tr", [
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.nombre_producto,
                                        expression: "item.nombre_producto"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "" },
                                    domProps: { value: item.nombre_producto },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "nombre_producto",
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
                                        rawName: "v-model.number",
                                        value: item.cantidad,
                                        expression: "item.cantidad",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "", type: "number" },
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
                                  })
                                ])
                              ])
                            : _vm._e(),
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
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tTotal Unidades\n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-left" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.total_unidades) +
                            "\n\t\t\t\t\t\t\t\t"
                        )
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
                    attrs: { to: { name: "entradas-inicial" }, tag: "button" }
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
                      disabled: _vm.btnAction !== "Registrar Entrada Inicial",
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
            _c("hr"),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Código Garantía")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.codigo_garantiax,
                        expression: "detalleForm.codigo_garantiax"
                      }
                    ],
                    ref: "bateria",
                    staticClass: "form-control",
                    domProps: { value: _vm.detalleForm.codigo_garantiax },
                    on: {
                      focus: function($event) {
                        return $event.target.select()
                      },
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
                        return _vm.buscarBateria($event)
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
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.detalle_baterias, function(item, index) {
                        return [
                          item.estado === 1
                            ? [
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
                                          value: item.codigo_garantiax,
                                          expression: "item.codigo_garantiax"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.codigo_garantiax
                                      },
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
                                      domProps: {
                                        value: item.fecha_activacion
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.cambiarFechaActivacion(
                                            item
                                          )
                                        },
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
                                  _c("td", { staticClass: "text-center" }, [
                                    item.registrada
                                      ? _c("div", [
                                          _c(
                                            "i",
                                            {
                                              directives: [
                                                {
                                                  name: "tooltip",
                                                  rawName: "v-tooltip",
                                                  value: "Bateria registrada",
                                                  expression:
                                                    "'Bateria registrada'"
                                                }
                                              ],
                                              staticClass: "fa fa-check",
                                              style: "color:green;",
                                              attrs: { "aria-hidden": "true" }
                                            },
                                            [_vm._v("  Guardada")]
                                          )
                                        ])
                                      : _c("div", [
                                          _c(
                                            "i",
                                            {
                                              directives: [
                                                {
                                                  name: "tooltip",
                                                  rawName: "v-tooltip",
                                                  value:
                                                    "Registrar bateria manualmente",
                                                  expression:
                                                    "'Registrar bateria manualmente'"
                                                }
                                              ],
                                              staticClass: "fa fa-save",
                                              style: "color:blue;",
                                              attrs: { "aria-hidden": "true" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.registrarBateria(
                                                    item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item.guardadoEnProgreso
                                                    ? "  Guardando...."
                                                    : "  Pendiente"
                                                )
                                              )
                                            ]
                                          )
                                        ])
                                  ])
                                ])
                              ]
                            : _vm._e()
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
        _vm._v("Registrar Inventario inicial")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Inventario inicial de baterías")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Consolidado de productos")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Recibida")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de baterías")])])
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
        _c("th", [_vm._v("Fecha Activación")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Estado")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/conteo-fisico.js":
/*!********************************************!*\
  !*** ./resources/app/api/conteo-fisico.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener', data).then(function (response) {
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
    axios.post('inventario/conteo-fisico-1/nuevo', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevoProductosVarios: function nuevoProductosVarios(data, cb, errorCb) {
    axios.post('entradas/nuevo-inventario-inicial-varios', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateria: function registrarBateria(data, cb, errorCb) {
    axios.post('entradas/registrar-bateria', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  recibir: function recibir(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/recibir', data).then(function (response) {
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
    axios.put('entradas/inventario-inicial/actualizar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarManual: function actualizarManual(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/actualizar-manual', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarManual: function registrarManual(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial-manual/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerEntrada: function obtenerEntrada(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener-entrada', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarCodigoBateriaAny: function buscarCodigoBateriaAny(data, cb, errorCb) {
    axios.post('productos/obtener-bateria-any', data).then(function (response) {
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

/***/ "./resources/app/api/entradas-inventario-inicial.js":
/*!**********************************************************!*\
  !*** ./resources/app/api/entradas-inventario-inicial.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener', data).then(function (response) {
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
    axios.post('entradas/nuevo-inventario-inicial', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevoProductosVarios: function nuevoProductosVarios(data, cb, errorCb) {
    axios.post('entradas/nuevo-inventario-inicial-varios', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateria: function registrarBateria(data, cb, errorCb) {
    axios.post('entradas/registrar-bateria', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  recibir: function recibir(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/recibir', data).then(function (response) {
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
    axios.put('entradas/inventario-inicial/actualizar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarManual: function actualizarManual(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/actualizar-manual', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarManual: function registrarManual(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial-manual/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerEntrada: function obtenerEntrada(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener-entrada', data).then(function (response) {
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

/***/ "./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue":
/*!*****************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActualizarConteoFisico_vue_vue_type_template_id_9b3ac7aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa& */ "./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa&");
/* harmony import */ var _ActualizarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActualizarConteoFisico.vue?vue&type=script&lang=js& */ "./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ActualizarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActualizarConteoFisico_vue_vue_type_template_id_9b3ac7aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActualizarConteoFisico_vue_vue_type_template_id_9b3ac7aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarConteoFisico.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa&":
/*!************************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_template_id_9b3ac7aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=template&id=9b3ac7aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_template_id_9b3ac7aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_template_id_9b3ac7aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoConteoFisico_vue_vue_type_template_id_34b48ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true& */ "./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true&");
/* harmony import */ var _ListadoConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoConteoFisico.vue?vue&type=script&lang=js& */ "./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true& */ "./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoConteoFisico_vue_vue_type_template_id_34b48ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoConteoFisico_vue_vue_type_template_id_34b48ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34b48ef6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/conteos-fisicos/ListadoConteoFisico.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoConteoFisico.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=style&index=0&id=34b48ef6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_template_id_34b48ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ListadoConteoFisico.vue?vue&type=template&id=34b48ef6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_template_id_34b48ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_template_id_34b48ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MostrarConteoFisico_vue_vue_type_template_id_b8dbba12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarConteoFisico.vue?vue&type=template&id=b8dbba12& */ "./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=template&id=b8dbba12&");
/* harmony import */ var _MostrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarConteoFisico.vue?vue&type=script&lang=js& */ "./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MostrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarConteoFisico_vue_vue_type_template_id_b8dbba12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MostrarConteoFisico_vue_vue_type_template_id_b8dbba12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/conteos-fisicos/MostrarConteoFisico.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarConteoFisico.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=template&id=b8dbba12&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=template&id=b8dbba12& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarConteoFisico_vue_vue_type_template_id_b8dbba12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MostrarConteoFisico.vue?vue&type=template&id=b8dbba12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/MostrarConteoFisico.vue?vue&type=template&id=b8dbba12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarConteoFisico_vue_vue_type_template_id_b8dbba12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarConteoFisico_vue_vue_type_template_id_b8dbba12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarConteoFisico_vue_vue_type_template_id_758a66b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarConteoFisico.vue?vue&type=template&id=758a66b8& */ "./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=template&id=758a66b8&");
/* harmony import */ var _RegistrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarConteoFisico.vue?vue&type=script&lang=js& */ "./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarConteoFisico_vue_vue_type_template_id_758a66b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarConteoFisico_vue_vue_type_template_id_758a66b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarConteoFisico.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=template&id=758a66b8&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=template&id=758a66b8& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_template_id_758a66b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarConteoFisico.vue?vue&type=template&id=758a66b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/RegistrarConteoFisico.vue?vue&type=template&id=758a66b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_template_id_758a66b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_template_id_758a66b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);