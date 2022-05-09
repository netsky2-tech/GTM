(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conteo-fisico"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/conteos-fisicos/ActualizarConteoFisico.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
      inicio_paginacion: 0,
      limite_paginacion: 10,
      productos: [],
      bodegas: [],
      detalleForm: {
        codigo_garantia: ''
      },
      consolidadoProductos: [],
      form: {
        consolidadoProductosId: [],
        id_conteo_fisico: '',
        contiene_baterias: true,
        codigo_entrada: "",
        fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
        entrada_tipo: "",
        entrada_proveedor: "",
        conteo_bodega: "",
        entrada_baterias: []
      },
      btnAction: "Actualizar Conteo",
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
    buscarBateria: function buscarBateria() {
      var _this2 = this;

      var self = this;
      self.loading = true;
      var cod_bat = self.detalleForm.codigo_garantia;
      self.detalleForm.codigo_garantia = '';
      var existeCodigoGarantia = false;
      var existeProducto = false; //console.log(self.detalleForm.codigo_garantiax.toUpperCase());

      self.form.conteo_baterias.forEach(function (bateriax, key) {
        //console.log(self.detalleForm.codigo_garantiax.toUpperCase());
        //console.log(bateriax.codigo_garantia.toUpperCase());
        if (cod_bat.toUpperCase() === bateriax.codigo_garantia.toUpperCase()) {
          existeCodigoGarantia = true;
        }
      });

      if (!existeCodigoGarantia) {
        //self.$refs.precio_unitario.focus();
        _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].buscarCodigoBateriaAny({
          codigo_bateria: cod_bat
        }, function (data) {
          //self.detalleForm.codigo_garantia='';
          self.$refs.bateria.focus();

          if (data !== null) {
            if (self.consolidadoProductos) {
              self.consolidadoProductos.forEach(function (productox, key) {
                if (data.id_producto === productox.id_producto) {
                  existeProducto = true;
                }
              });
            }

            if (existeProducto) {
              var keyx = -1;

              if (self.consolidadoProductos) {
                self.consolidadoProductos.forEach(function (productox, key) {
                  if (data.id_producto === productox.id_producto) {
                    keyx = key;
                  }
                });
              }

              if (keyx >= 0) {
                var verificacion2 = false;
                self.form.conteo_baterias.forEach(function (bateriax, key) {
                  if (data.codigo_garantia.toUpperCase() === bateriax.codigo_garantia.toUpperCase()) {
                    verificacion2 = true;
                  }
                });

                if (!verificacion2) {
                  self.consolidadoProductos[keyx].cantidad++;

                  _this2.form.conteo_baterias.unshift({
                    id_bateria: data.id_bateria,
                    id_producto: data.id_producto,
                    id_conteo_fisico_bateria: null,
                    codigo_garantia: data.codigo_garantia,
                    fecha_activacion: data.fecha_activacion,
                    producto_simple: data.bateria_producto,
                    estado: 1,
                    registrada: false
                  });
                }

                alertify.success("Batería agregada!", 5);

                if (self.cantidad_sin_registrar() >= 5) {
                  self.form.conteo_baterias.forEach(function (bateriax, key) {
                    if (!bateriax.registrada) {
                      self.registrarBateria(bateriax);
                    }
                  });
                }

                self.cantidad_sin_registrar(); //self.agruparProductos();

                self.$refs.bateria.focus();
              }
            } else {
              self.consolidadoProductos.push({
                descripcion: data.bateria_producto.descripcion,
                id_producto: data.id_producto,
                cantidad: 1
              });

              _this2.form.conteo_baterias.unshift({
                id_bateria: data.id_bateria,
                id_producto: data.id_producto,
                id_conteo_fisico_bateria: null,
                codigo_garantia: data.codigo_garantia,
                fecha_activacion: data.fecha_activacion,
                producto_simple: data.bateria_producto,
                estado: 1,
                registrada: false
              });

              if (self.cantidad_sin_registrar() >= 5) {
                self.form.conteo_baterias.forEach(function (bateriax, key) {
                  if (!bateriax.registrada) {
                    self.registrarBateria(bateriax);
                  }
                });
              }

              self.cantidad_sin_registrar(); //	self.agruparProductos();

              self.$refs.bateria.focus();
            }
          } else {
            alertify.warning("No se encuentra esta batería.", 5); //self.detalleForm.codigo_garantia='';

            self.$refs.bateria.focus();
          }

          self.errorMessages = [];
          self.loading = false;
        }, function (err) {
          //console.log(err);
          self.errorMessages = err; //self.detalleForm.codigo_garantia='';

          if (err.codigo_bateria) {
            self.$refs.bateria.focus(); //self.detalleForm.codigo_garantia='';

            alertify.warning("No se encuentra esta batería.", 5);
          }

          self.loading = false;
        });
      } else {
        self.loading = false;
        self.$refs.bateria.focus(); //self.detalleForm.codigo_garantia='';

        alertify.warning("Ya existe ese código de garantía.", 5);
      }
    },
    confirmarEmision: function confirmarEmision() {
      var _this3 = this;

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
          _this3.registrar();
        }
      });
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
      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerConteoFisico({
        id_conteo_fisico: this.$route.params.id_conteo_fisico,
        cargar_dependencias: true
      }, function (data) {
        data.conteo_fisico.conteo_baterias.forEach(function (conteo_bateriasx, key) {
          data.conteo_fisico.conteo_baterias[key].registrada = true;
          data.conteo_fisico.conteo_baterias[key].guardadoEnProgreso = false;
        });
        self.form = data.conteo_fisico;
        data.consolidado.forEach(function (conteo_bateriasx, key) {
          console.log(conteo_bateriasx);
          self.consolidadoProductos.push({
            descripcion: conteo_bateriasx.producto_simple.descripcion,
            id_producto: conteo_bateriasx.id_producto,
            cantidad: conteo_bateriasx.cantidad_prod
          });
        }); //self.productos = data.productos;

        self.bodegas = data.bodegas; //self.agruparProductos();

        self.loading = false;
        /*if (self.form.estado !== 99) {
        	alertify.error("La entrada ya no puede ser actualizada", 5);
        	this.$router.push({
        		name: "entradas"
        	});
        }*/
      }, function (err) {
        self.loading = false;
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
            id_conteo_fisico: self.form.id_conteo_fisico,
            codigo_garantia: bateria.codigo_garantia,
            id_producto: bateria.id_producto,
            id_bateria: bateria.id_bateria,
            id_conteo_fisico_bateria: bateria.id_conteo_fisico_bateria,
            estado: bateria.estado
          }, function (data) {
            //self.form = data.orden;
            bateria.registrada = true;
            bateria.id_conteo_fisico_bateria = data.id_conteo_fisico_bateria; //self.registrandoBateria = false;

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
      var _this4 = this;

      var self = this; //if(self.total_cantidad_recibida > 0){

      self.loading = true;
      self.form.consolidadoProductos = self.consolidadoProductos;
      self.btnAction = "Registrando, espere...."; //if(self.form.estado === 1) {

      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        //alertify.success("La entrada fue recibida correctamente",5);
        _this4.$swal.fire('Conteo Registrado!', 'El conteo fue registrado correctamente.', 'success');

        self.loading = false;

        _this4.$router.push({
          name: "listado-conteo-fisico-1"
        });
      }, function (err) {
        alertify.error('Error Actualizando los datos', 10);
        self.errorMessages = err;
        self.btnAction = "Actualizar Conteo";
        self.loading = false;
      });
      /*}else{
                      alertify.error("La entrada ya no puede ser recibida",5);
                      this.$router.push({
                          name: "listado-conteo-fisico-1"
                      });
                  }*/

      /*}else{
      	alertify.error("Se debe recibir al menos un producto",5);
      }*/
    },
    cantidad_sin_registrar: function cantidad_sin_registrar() {
      var self = this;

      if (self.form.conteo_baterias) {
        var i = 0;
        self.form.conteo_baterias.forEach(function (bateriax, key) {
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
    cambiarPaginacion: function cambiarPaginacion(limite) {
      var self = this;

      if (self.form.conteo_baterias.length >= 1) {
        if (limite === 999) {
          //mostrar todos
          self.inicio_paginacion = 0;
          self.limite_paginacion = self.form.conteo_baterias.length;
        } else if (limite === -999) {
          self.inicio_paginacion = 0;
          self.limite_paginacion = 10;
        } else {
          self.inicio_paginacion = 0;
          self.limite_paginacion = self.limite_paginacion + limite;
        }
      }
    },
    agruparProductos: function agruparProductos() {
      var self = this;
      var counts = self.form.conteo_baterias.reduce(function (p, c) {
        var name = c.producto_simple.descripcion;

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
      /*self.form.consolidadoProductosId = Object.keys(counts2).map(k => {
      	return {id_producto: k, cantidad: counts2[k]}; });*/
    }
  },
  mounted: function mounted() {
    this.obtenerEntrada();
  },
  computed: {
    filteredItems: function filteredItems() {
      if (this.form.conteo_baterias) {
        return this.form.conteo_baterias.slice(this.inicio_paginacion, this.limite_paginacion);
      }
    },
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
/* harmony import */ var _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/conteo-fisico */ "./resources/app/api/conteo-fisico.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
          field: "id_conteo_fisico",
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
      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
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
        fecha_conteo: "",
        id_tipo_entrada: "",
        id_proveedor: 0,
        id_bodega: 0,
        consolidado: [],
        entrada_proveedor: [],
        conteo_bodega: [],
        conteo_baterias: [],
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
      axios.post('inventario/conteo-fisico-1/reporte', {
        id_conteo_fisico: self.form.id_conteo_fisico,
        extension: extension
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
        link.download = 'ReporteConteoFisico.' + extension;
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
      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerConteoFisico({
        id_conteo_fisico: this.$route.params.id_conteo_fisico,
        cargar_dependencias: false
      }, function (data) {
        self.form = data.conteo_fisico;
        self.nombre_empresa = data.nombre_empresa;
        self.direccion_empresa = data.direccion_empresa;
        self.form.consolidado = data.consolidado;
        self.loading = false;
        /*if (self.form.estado !== 99) {
            alertify.error("La entrada ya no puede ser actualizada", 5);
            this.$router.push({
                name: "entradas"
            });
        }*/
      }, function (err) {
        self.loading = false;
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
    total_cantidad_baterias: function total_cantidad_baterias() {
      return this.form.conteo_baterias.reduce(function (carry, item) {
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      inicio_paginacion: 0,
      limite_paginacion: 10,
      productos: [],
      bodegas: [],
      detalleForm: {
        codigo_garantia: ''
      },
      detalle_baterias: [],
      consolidadoProductos: [],
      form: {
        id_conteo_fisico: '',
        conteo_bodega: "",
        detalleProductos: []
      },
      btnAction: "Registrar Conteo",
      errorMessages: []
    };
  },
  methods: {
    agruparProductos: function agruparProductos() {
      var self = this;
      var counts = self.detalle_baterias.reduce(function (p, c) {
        var name = c.descripcion;

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
    cambiarPaginacion: function cambiarPaginacion(limite) {
      var self = this;

      if (self.detalle_baterias.length >= 1) {
        if (limite === 999) {
          //mostrar todos
          self.inicio_paginacion = 0;
          self.limite_paginacion = self.detalle_baterias.length;
        } else if (limite === -999) {
          self.inicio_paginacion = 0;
          self.limite_paginacion = 10;
        } else {
          self.inicio_paginacion = 0;
          self.limite_paginacion = self.limite_paginacion + limite;
        }
      }
    },
    confirmar: function confirmar() {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar el registro del conteo?',
        text: "Revise bien los datos proporcionados.",
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
            id_conteo_fisico: self.form.id_conteo_fisico,
            codigo_garantia: bateria.codigo_garantia,
            id_producto: bateria.id_producto,
            id_bateria: bateria.id_bateria,
            id_conteo_fisico_bateria: bateria.id_conteo_fisico_bateria,
            estado: bateria.estado
          }, function (data) {
            //self.form = data.orden;
            bateria.registrada = true;
            bateria.id_conteo_fisico_bateria = data.id_conteo_fisico_bateria; //self.registrandoBateria = false;

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
      var _this2 = this;

      var self = this;
      self.loading = true;
      var cod_bat = self.detalleForm.codigo_garantia;
      self.detalleForm.codigo_garantia = '';
      var existeCodigoGarantia = false;
      var existeProducto = false; //console.log(self.detalleForm.codigo_garantiax.toUpperCase());

      self.detalle_baterias.forEach(function (bateriax, key) {
        //console.log(self.detalleForm.codigo_garantiax.toUpperCase());
        //console.log(bateriax.codigo_garantia.toUpperCase());
        if (cod_bat.toUpperCase() === bateriax.codigo_garantia.toUpperCase()) {
          existeCodigoGarantia = true;
        }
      });

      if (!existeCodigoGarantia) {
        //self.$refs.precio_unitario.focus();
        _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].buscarCodigoBateriaAny({
          codigo_bateria: cod_bat
        }, function (data) {
          //self.detalleForm.codigo_garantia='';
          self.$refs.bateria.focus();

          if (data !== null) {
            if (self.form.detalleProductos) {
              self.form.detalleProductos.forEach(function (productox, key) {
                if (data.id_producto === productox.id_producto) {
                  existeProducto = true;
                }
              });
            }

            if (existeProducto) {
              //console.log('existe producto!');
              var keyx = -1;

              if (self.form.detalleProductos) {
                self.form.detalleProductos.forEach(function (productox, key) {
                  if (data.id_producto === productox.id_producto) {
                    keyx = key;
                  }
                });
              } //if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){


              if (keyx >= 0) {
                var verificacion2 = false;
                self.detalle_baterias.forEach(function (bateriax, key) {
                  //console.log(self.detalleForm.codigo_garantiax.toUpperCase());
                  //console.log(bateriax.codigo_garantia.toUpperCase());
                  if (data.codigo_garantia.toUpperCase() === bateriax.codigo_garantia.toUpperCase()) {
                    verificacion2 = true;
                  }
                });

                if (!verificacion2) {
                  self.form.detalleProductos[keyx].cantidad++;

                  _this2.detalle_baterias.unshift({
                    id_bateria: data.id_bateria,
                    id_producto: data.id_producto,
                    id_conteo_fisico_bateria: null,
                    codigo_garantia: data.codigo_garantia,
                    //	fecha_activacion:data.fecha_activacion,
                    descripcion: data.bateria_producto.descripcion,
                    estado: 1,
                    registrada: false
                  });
                }

                alertify.success("Batería agregada!", 5);

                if (self.cantidad_sin_registrar() >= 5) {
                  self.detalle_baterias.forEach(function (bateriax, key) {
                    if (!bateriax.registrada) {
                      self.registrarBateria(bateriax);
                    }
                  });
                }

                self.cantidad_sin_registrar();
                self.$refs.bateria.focus();
              }
              /*}else{
              	alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
              }*/

            } else {
              //console.log('no existe producto!');
              self.form.detalleProductos.push({
                descripcion: data.bateria_producto.descripcion,
                id_producto: data.id_producto,
                cantidad: 1
              }); //if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){
              //self.form.detalleProductos[keyx].cantidad_despachada++;

              _this2.detalle_baterias.unshift({
                id_bateria: data.id_bateria,
                id_producto: data.id_producto,
                id_conteo_fisico_bateria: null,
                codigo_garantia: data.codigo_garantia,
                //fecha_activacion:data.fecha_activacion,
                descripcion: data.bateria_producto.descripcion,
                estado: 1,
                registrada: false
              });

              if (self.cantidad_sin_registrar() >= 5) {
                self.detalle_baterias.forEach(function (bateriax, key) {
                  if (!bateriax.registrada) {
                    self.registrarBateria(bateriax);
                  }
                });
              }

              self.cantidad_sin_registrar();
              self.$refs.bateria.focus();
              /*}else{
              	alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
              }*/
            } //self.agregarDetalle();

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
            alertify.warning("No se encuentra esta batería.", 5); //self.detalleForm.codigo_garantia='';

            self.$refs.bateria.focus();
          }

          self.errorMessages = [];
          self.loading = false;
        }, function (err) {
          //console.log(err);
          self.errorMessages = err; //self.detalleForm.codigo_garantia='';

          if (err.codigo_bateria) {
            self.$refs.bateria.focus(); //self.detalleForm.codigo_garantia='';

            alertify.warning("No se encuentra esta batería.", 5);
          }

          self.loading = false;
        });
      } else {
        self.loading = false;
        self.$refs.bateria.focus(); //self.detalleForm.codigo_garantia='';

        alertify.warning("Ya existe ese código de garantía.", 5);
      }
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.codigo_garantia) {
        var existeCodigoGarantia = false;
        var existeProducto = false;
        var estadoExistente = 0;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (self.detalleForm.codigo_garantia.toUpperCase() === bateriax.codigo_garantia.toUpperCase()) {
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
      var _this3 = this;

      var self = this; //if(self.total_cantidad_recibida > 0){

      self.loading = true;
      self.form.detalle_baterias = self.detalle_baterias;
      self.btnAction = "Registrando, espere...."; //if(self.form.estado === 1) {

      _api_conteo_fisico__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        //alertify.success("La entrada fue recibida correctamente",5);
        _this3.$swal.fire('Conteo Registrado!', 'El conteo fue registrado correctamente.', 'success');

        self.loading = false;

        _this3.$router.push({
          name: "listado-conteo-fisico-1"
        });
      }, function (err) {
        alertify.error('Error Actualizando los datos', 10);
        self.errorMessages = err;
        self.btnAction = "Registrar Conteo";
        self.loading = false;
      });
      /*}else{
      	alertify.error("La entrada ya no puede ser recibida",5);
      	this.$router.push({
      		name: "listado-conteo-fisico-1"
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
    filteredItems: function filteredItems() {
      return this.detalle_baterias.slice(this.inicio_paginacion, this.limite_paginacion);
    },
    total_cantidad: function total_cantidad() {
      return this.form.detalleProductos.reduce(function (carry, item) {
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
                        value: _vm.form.conteo_bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "conteo_bodega", $$v)
                        },
                        expression: "form.conteo_bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.conteo_bodega, function(
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
                  _vm._l(_vm.errorMessages.conteo_productos, function(message) {
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
                        value: _vm.detalleForm.codigo_garantia,
                        expression: "detalleForm.codigo_garantia"
                      }
                    ],
                    ref: "bateria",
                    staticClass: "form-control",
                    domProps: { value: _vm.detalleForm.codigo_garantia },
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
                      _vm._l(_vm.filteredItems, function(item, index) {
                        return [
                          item.estado === 1
                            ? [
                                _c("tr", [
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
                                            ".id_producto"
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
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(-999)
                          }
                        }
                      },
                      [_vm._v("Mostrar Primeros 10")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(10)
                          }
                        }
                      },
                      [_vm._v("Mostrar Más")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(-10)
                          }
                        }
                      },
                      [_vm._v("Mostrar Menos")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(999)
                          }
                        }
                      },
                      [_vm._v("Mostrar Todos")]
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
                    attrs: {
                      to: { name: "listado-conteo-fisico-1" },
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
                      disabled: _vm.btnAction !== "Actualizar Conteo",
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
        _vm._v("Registrar Conteo por códigos de garantía")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar conteo por códigos de garantía")
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
        _c("th", [_vm._v("Batería")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código Garantía")]),
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
            _vm._v("Administrar Conteos Fisicos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Conteos")
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
              _vm._v("> Conteos Fisicos")
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
                    to: { name: "registrar-conteo-fisico-1" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Conteo\n        ")
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
                    _c("tr", { key: entrada.id_conteo_fisico }, [
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("formatDate")(entrada.fecha_conteo))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            entrada.trabajador_conteo
                              ? entrada.trabajador_conteo.nombre_completo
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            entrada.conteo_bodega
                              ? entrada.conteo_bodega.descripcion
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
                          [1, 99].indexOf(entrada.estado) >= 0
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Editar Conteo",
                                        expression: "'Editar Conteo'"
                                      }
                                    ],
                                    attrs: {
                                      tag: "a",
                                      to: {
                                        name: "actualizar-conteo-fisico-1",
                                        params: {
                                          id_conteo_fisico:
                                            entrada.id_conteo_fisico
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
                                  value: "Mostrar Detalles de Conteo",
                                  expression: "'Mostrar Detalles de Conteo'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-conteo-fisico-1",
                                  params: {
                                    id_conteo_fisico: entrada.id_conteo_fisico
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
        _c("th", [_vm._v("Fecha Conteo")]),
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
            "Conteo de Baterías No.: " +
              _vm._s(_vm.form ? _vm.form.id_conteo_fisico : "N/D")
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
        _c("div", { staticClass: "document" }, [
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
                      "Conteo de Baterías No. : " +
                        _vm._s(_vm.form.id_conteo_fisico)
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
                  _vm.form.trabajador_conteo
                    ? [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.form.trabajador_conteo.nombre_completo)
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
                      _vm.form.conteo_bodega
                        ? _vm.form.conteo_bodega.descripcion
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
                      _c("td", [_vm._v("Código conteo:")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.id_conteo_fisico))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Fecha Emisión:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(_vm.form.fecha_conteo)))
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
                              " " + _vm._s(item.producto_simple.descripcion)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-1 align-center" }, [
                          _vm._v(_vm._s(item.cantidad_prod))
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
                  _c(
                    "td",
                    { staticClass: "align-right", attrs: { colspan: "2" } },
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
                  _vm.form.conteo_baterias
                    ? [
                        _vm._l(_vm.form.conteo_baterias, function(itemBateria) {
                          return [
                            _c("tr", { key: itemBateria.id_bateria }, [
                              _c("td", { staticClass: "width-4" }, [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(itemBateria.codigo_garantia) +
                                    "\n                                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "width-4" }, [
                                _c("pre", [
                                  _vm._v(
                                    _vm._s(
                                      itemBateria.producto_simple
                                        ? itemBateria.producto_simple.text
                                        : "N/D"
                                    )
                                  )
                                ])
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
                _c("td", { staticClass: "align-right" }, [
                  _vm._v("Total unidades")
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "align-center" }, [
                  _vm._v(_vm._s(_vm.total_cantidad_baterias))
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
        _c("th", [_vm._v("Descripción Bateria")])
      ])
    ])
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
                        value: _vm.form.conteo_bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "conteo_bodega", $$v)
                        },
                        expression: "form.conteo_bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.conteo_bodega, function(
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
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalleProductos, function(item, index) {
                        return [
                          _c("tr", [
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
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad,
                                    expression: "item.cantidad",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", disabled: "" },
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
                    _vm._m(3),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "item-footer" }, [
                        _vm._v(" Total Unidades")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
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
                  {
                    attrs: {
                      to: { name: "listado-conteo-fisico-1" },
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
                      disabled: _vm.btnAction !== "Registrar Conteo",
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
            _vm._m(4),
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
                        value: _vm.detalleForm.codigo_garantia,
                        expression: "detalleForm.codigo_garantia"
                      }
                    ],
                    ref: "bateria",
                    staticClass: "form-control",
                    domProps: { value: _vm.detalleForm.codigo_garantia },
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
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.filteredItems, function(item, index) {
                        return [
                          item.estado === 1
                            ? [
                                _c("tr", [
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
                                          "detalle_baterias." +
                                            index +
                                            ".id_producto"
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
                                          "detalle_baterias." +
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
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(-999)
                          }
                        }
                      },
                      [_vm._v("Mostrar Primeros 10")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(10)
                          }
                        }
                      },
                      [_vm._v("Mostrar Más")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(-10)
                          }
                        }
                      },
                      [_vm._v("Mostrar Menos")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-agregar",
                        on: {
                          click: function($event) {
                            return _vm.cambiarPaginacion(999)
                          }
                        }
                      },
                      [_vm._v("Mostrar Todos")]
                    )
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
        _vm._v("Registrar Conteo por códigos de garantía")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar conteo por códigos de garantía")
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
        _c("th", [_vm._v("Cantidad")])
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
        _c("th", [_vm._v("Batería")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código Garantía")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Estado")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


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
  obtener: function obtener(data, cb, errorCb) {
    axios.post('inventario/conteo-fisico-1/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerConteoFisico: function obtenerConteoFisico(data, cb, errorCb) {
    axios.post('inventario/conteo-fisico-1/obtener-conteo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateria: function registrarBateria(data, cb, errorCb) {
    axios.post('inventario/conteo-fisico-1/registrar-bateria', data).then(function (response) {
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
    axios.post('inventario/conteo-fisico-1/registrar', data).then(function (response) {
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
    axios.put('inventario/conteo-fisico-1/actualizar', data).then(function (response) {
      if (response.data.status === 'success') {
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoConteoFisico_vue_vue_type_style_index_0_id_34b48ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConteoFisico_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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