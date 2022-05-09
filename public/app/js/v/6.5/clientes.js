(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Actualizar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando contenido, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      claseBotonNoSolicitado: 'btn mb-2 btn-md-width btn-default btn-rounded',
      claseBotonSolicitado: 'btn mb-2 btn-md-width btn-success btn-rounded',
      claseBotonAprobado: 'btn mb-2 btn-md-width btn-info btn-rounded',
      departamentos: [],
      municipios: [],
      zonas: [],
      impuestos: [],
      tipos_clientes: [],
      vendedores: [],
      form: {
        departamento_cliente: '',
        tipo_persona: '',
        nombre_comercial: '',
        nombre_completo: '',
        razon_social: '',
        contacto: '',
        numero_ruc: '',
        numero_cedula: '',
        direccion: '',
        tipo_clientex: '',
        tipo_cliente: '',
        telefono: '',
        correo: '',
        municipio: '',
        giro_negocio: '',
        zona: '',
        impuesto: '',
        tipo_contribuyente: '',
        retencion_ir: '',
        retencion_imi: '',
        clasificacion: '',
        permite_credito: '',
        plazo_credito: '',
        limite_credito: '',
        porcentaje_descuento: '',
        observaciones: '',
        permite_consignacion: '',
        tramite_cheque: '',
        es_deudor: '',
        numero_contrato_consignacion: '',
        plazo_consignacion: 0,
        monto_max_consignacion: 0
      },
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    obtenerCliente: function obtenerCliente() {
      var _this = this;

      var self = this; //self.SoloLectura = [1].includes(Number(self.$route.params.id_cliente))

      _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerCliente({
        id_cliente: this.$route.params.id_cliente
      }, function (data) {
        if (data !== null) {
          self.form = data.cliente;
          self.departamentos = data.departamentos;
          self.zonas = data.zonas;
          self.impuestos = data.impuestos;
          self.tipos_clientes = data.tipos_clientes;
          self.vendedores = data.vendedores;
          self.loading = false;

          if (self.form.municipio_cliente) {
            self.departamentos.forEach(function (departamentox, indice) {
              if (departamentox.id_departamento === self.form.municipio_cliente.id_departamento) {
                self.form.departamento_cliente = self.departamentos[indice];
                self.municipios = self.form.departamento_cliente.municipios_departamento;
              }
            });
          }
        } else {
          _this.$router.push({
            name: 'listado-clientes'
          });

          alertify.warning('Lo sentimos no hemos encontrado registros');
        }
      }, function (err) {
        console.log(err);
      });
    },
    solicitarAutorizacion: function solicitarAutorizacion() {
      var self = this;

      if (self.form.aprobacion_consignacion === 0) {
        self.form.aprobacion_consignacion = 1;
      } else if (self.form.aprobacion_consignacion === 1) {
        self.form.aprobacion_consignacion = 0;
      }
    },
    actualizar: function actualizar() {
      var _this2 = this;

      var self = this;
      self.loading = true;
      self.btnAction = 'Guardando, espere......'; //if(!self.SoloLectura){

      _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        _this2.$router.push({
          name: 'listado-clientes'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Guardar';
      });
      /*}else{
      	this.$router.push({
      		name: 'listado-clientes'
      	})
      alertify.warning('Lo sentimos este valor esta protegido, si desea cambiar el nombre contacte a los desarrolladores');
      }*/
    },
    desactivar: function desactivar(clienteId) {
      var _this3 = this;

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
          _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_cliente: clienteId
          }, function (data) {
            alertify.warning("Cliente desactivado correctamente", 5);

            _this3.$router.push({
              name: 'listado-clientes'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(clienteId) {
      var _this4 = this;

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
          _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_cliente: clienteId
          }, function (data) {
            alertify.success("Cliente activado correctamente", 5);

            _this4.$router.push({
              name: 'listado-clientes'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    obtenerMunicipios: function obtenerMunicipios() {
      var self = this;
      self.form.municipio_cliente = null;
      if (self.form.departamento_cliente.municipios_departamento) self.municipios = self.form.departamento_cliente.municipios_departamento;
    }
  },
  mounted: function mounted() {
    this.obtenerCliente();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Listado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
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
        limitOptions: [25, 30, 45, 60],
        search: {
          field: "nombre_comercial",
          value: "",
          status: 0,
          credit: 0,
          es_deudor: false
        }
      },
      clientes: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      self.filter.search.es_deudor = this.$route.meta.deudores;
      _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.clientes = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    downloadItem: function downloadItem(ext) {
      var _this = this;

      var self = this;

      if (!this.descargando) {
        this.descargando = true;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get('ventas/clientes/' + ext, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          ext === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ListadoClientes.' + ext;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
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
        limitOptions: [25, 30, 45, 60],
        search: {
          field: "nombre_comercial",
          value: "",
          status: 0,
          es_deudor: false
        }
      },
      clientes: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      self.filter.search.es_deudor = this.$route.meta.deudores;
      _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitudesConsignacion(self.filter, function (data) {
        self.clientes = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    cambiarEstadoConsignacion: function cambiarEstadoConsignacion(estado, id_cliente) {
      var txtAprobar = 'Está seguro de autorizar el permiso de consignación para este cliente?';
      var txtRechazar = 'Está seguro de rechazar la solicitud de consignación para este cliente?';
      var txtAnular = 'Está seguro de revocar el permiso de consignación para este cliente?';
      var self = this;
      self.$swal.fire({
        title: 'Confirmación de cambio del estado de consignación de cliente',
        text: estado === 2 ? txtAprobar : estado === 3 ? txtAnular : txtRechazar,
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
          _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].cambiarEstadoConsignacion({
            id_cliente: id_cliente,
            estado: estado
          }, function (data) {
            alertify.warning("El permiso de consignación ha sido cambiado correctamente", 5);
            self.obtener();
          }, function (err) {
            self.loading = false;
            console.log(err);
          });
        } else {
          self.loading = false;
        }
      });
    },
    downloadItem: function downloadItem(ext) {
      var _this = this;

      var self = this;

      if (!this.descargando) {
        this.descargando = true;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get('ventas/clientes/' + ext, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          ext === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ListadoClientes.' + ext;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Registrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var _api_tipos_clientes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/tipos_clientes */ "./resources/app/api/tipos_clientes.js");
/* harmony import */ var _api_departamentos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/departamentos */ "./resources/app/api/departamentos.js");
/* harmony import */ var _api_impuestos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/impuestos */ "./resources/app/api/impuestos.js");
/* harmony import */ var _api_zonas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/zonas */ "./resources/app/api/zonas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      msg: 'Guardando los datos, espere un momento',
      claseBotonNoSolicitado: 'btn mb-2 btn-md-width btn-default btn-rounded',
      claseBotonSolicitado: 'btn mb-2 btn-md-width btn-success btn-rounded',
      claseBotonAprobado: 'btn mb-2 btn-md-width btn-info btn-rounded',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5___default.a,
      //It is important to import the loading image then use here
      departamentos: [],
      municipios: [],
      zonas: [],
      impuestos: [],
      tipos_clientes: [],
      vendedores: [],
      form: {
        codigo: '',
        tipo_persona: 1,
        nombre_comercial: '',
        nombre_completo: '',
        razon_social: '',
        contacto: '',
        numero_ruc: '',
        numero_cedula: '',
        direccion: '',
        tipo_cliente: '',
        telefono: '',
        correo: '',
        municipio: '',
        giro_negocio: '',
        zona: '',
        impuesto: '',
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
        tramite_cheque: 15,
        es_deudor: false,
        numero_contrato_consignacion: '',
        plazo_consignacion: 0,
        aprobacion_consignacion: 0,
        monto_max_consignacion: 0
      },
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  methods: {
    validarCredito: function validarCredito() {
      var self = this;
      self.form.limite_credito = 0;
      self.form.plazo_credito = 0;
    },
    obtenerMunicipios: function obtenerMunicipios() {
      var self = this;
      self.form.municipio = null;
      if (self.form.departamento.municipios_departamento) self.municipios = self.form.departamento.municipios_departamento;
    },
    nuevo: function nuevo() {
      var self = this;
      _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.impuestos = data.impuestos;
        self.form.impuesto = self.impuestos[1];
        self.tipos_clientes = data.tipos_cliente;
        self.form.tipo_cliente = self.tipos_clientes[0];
        self.departamentos = data.departamentos;
        self.form.departamento = self.departamentos[9];
        self.municipios = self.form.departamento.municipios_departamento;
        self.form.municipio = self.municipios[5];
        self.zonas = data.zonas;
        self.vendedores = data.vendedores;
      }, function (err) {
        console.log(err);
      });
    },
    solicitarAutorizacion: function solicitarAutorizacion() {
      var self = this;

      if (self.form.aprobacion_consignacion === 0) {
        self.form.aprobacion_consignacion = 1;
      } else if (self.form.aprobacion_consignacion === 1) {
        self.form.aprobacion_consignacion = 0;
      }
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.loading = true;
      _api_clientes__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.loading = false;
        alertify.success("Cliente registrado exitosamente", 5);

        _this.$router.push({
          name: 'listado-clientes'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    }
  },
  mounted: function mounted() {
    /*this.obtenerTodosTipos();
    this.obtenerTodosImpuestos()
    this.obtenerTodasZonas()*/
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".check-label2[data-v-64cfc353] {\n  margin-top: 30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-3d6b348a] {\n  min-width: 120px;\n}\n.table a[data-v-3d6b348a] {\n  color: #2675dc;\n}\n.table .table-number[data-v-3d6b348a] {\n  width: 60px;\n}\n.table .action[data-v-3d6b348a] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-4e2aa732] {\n  min-width: 120px;\n}\n.table a[data-v-4e2aa732] {\n  color: #2675dc;\n}\n.table .table-number[data-v-4e2aa732] {\n  width: 60px;\n}\n.table .action[data-v-4e2aa732] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".check-label2[data-v-d21152cc] {\n  margin-top: 30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=template&id=64cfc353&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Actualizar.vue?vue&type=template&id=64cfc353&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "content-box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v(" Código del cliente")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.codigo,
                  expression: "form.codigo"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Digite el código del cliente" },
              domProps: { value: _vm.form.codigo },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "codigo", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.codigo, function(message) {
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
            _c("label", { attrs: { for: "" } }, [_vm._v("Tipo Persona")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.form.tipo_persona,
                    expression: "form.tipo_persona",
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
                      "tipo_persona",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "1" } }, [_vm._v("Natural")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [_vm._v("Jurídico")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Nombre completo")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.nombre_completo,
                  expression: "form.nombre_completo"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Nombre Comercial" },
              domProps: { value: _vm.form.nombre_completo },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "nombre_completo", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.nombre_comercial, function(message) {
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
            _c("label", { attrs: { for: "" } }, [_vm._v(" Razón Social")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.razon_social,
                  expression: "form.razon_social"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Razón Social" },
              domProps: { value: _vm.form.razon_social },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "razon_social", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.nombre_comercial, function(message) {
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
            _c("label", { attrs: { for: "" } }, [_vm._v(" Contacto")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.contacto,
                  expression: "form.contacto"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Contacto" },
              domProps: { value: _vm.form.contacto },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "contacto", $event.target.value)
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
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Número RUC")]),
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
                  value: _vm.form.numero_ruc,
                  expression: "form.numero_ruc"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Número RUC" },
              domProps: { value: _vm.form.numero_ruc },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "numero_ruc", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.numero_ruc, function(message) {
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
            _c("label", { attrs: { for: "" } }, [_vm._v(" Número Cédula")]),
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
                  value: _vm.form.numero_cedula,
                  expression: "form.numero_cedula"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Número Cédula" },
              domProps: { value: _vm.form.numero_cedula },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "numero_cedula", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.numero_cedula, function(message) {
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
            _c("label", { attrs: { for: "" } }, [_vm._v(" Dirección")]),
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
              attrs: { placeholder: "Dirección" },
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
            _c("label", { attrs: { for: "" } }, [_vm._v(" Teléfono")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.telefono,
                  expression: "form.telefono"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Teléfono" },
              domProps: { value: _vm.form.telefono },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "telefono", $event.target.value)
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
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Correo Contacto")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.correo,
                  expression: "form.correo"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Correo Contacto" },
              domProps: { value: _vm.form.correo },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "correo", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.correo, function(message) {
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
              _c("label", { attrs: { for: "" } }, [_vm._v("Departamento")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { options: _vm.departamentos, label: "descripcion" },
                on: {
                  input: function($event) {
                    return _vm.obtenerMunicipios()
                  }
                },
                model: {
                  value: _vm.form.departamento_cliente,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "departamento_cliente", $$v)
                  },
                  expression: "form.departamento_cliente"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.departamento_cliente, function(
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
              _c("label", { attrs: { for: "" } }, [_vm._v("Municipio")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { options: _vm.municipios, label: "descripcion" },
                model: {
                  value: _vm.form.municipio_cliente,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "municipio_cliente", $$v)
                  },
                  expression: "form.municipio_cliente"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.municipio_cliente, function(message) {
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
            _c("label", { attrs: { for: "" } }, [_vm._v(" Observaciones")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.observaciones,
                  expression: "form.observaciones"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Observaciones" },
              domProps: { value: _vm.form.observaciones },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "observaciones", $event.target.value)
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
                _vm.form.estado
                  ? [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          on: {
                            click: function($event) {
                              return _vm.desactivar(_vm.form.id_cliente)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-trash-o" }, [
                            _vm._v("\tEliminar")
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
                              return _vm.activar(_vm.form.id_cliente)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-check-square" }, [
                            _vm._v("\tHabilitar")
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
                _vm.form.es_deudor
                  ? [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            tag: "button",
                            to: { name: "listado-deudores" }
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
                      )
                    ]
                  : [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            tag: "button",
                            to: { name: "listado-clientes" }
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
                      )
                    ],
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
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
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
      ),
      _vm._v(" "),
      _c("div", { staticClass: "content-box-footer text-right" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Modificar Cliente")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar Cliente")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=template&id=3d6b348a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Listado.vue?vue&type=template&id=3d6b348a&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Administrar Clientes ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Clientes")
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
                  attrs: { to: { name: "pagina-principal-ventas" } }
                },
                [_vm._v(" Módulo ventas")]
              ),
              _vm._v("> Clientes")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _vm.filter.search.es_deudor
              ? [
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
                            to: {
                              name: "registrar-deudor",
                              params: { deudor: true }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "pe-7s-plus" }),
                          _vm._v(" Registrar Deudor\n                ")
                        ]
                      )
                    ],
                    1
                  )
                ]
              : [
                  _c(
                    "div",
                    { staticClass: "col-md-4 sm-text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-success",
                          attrs: {
                            tag: "button",
                            to: {
                              name: "registrar-cliente",
                              params: { deudor: false }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "pe-7s-plus" }),
                          _vm._v(" Registrar Cliente\n                ")
                        ]
                      )
                    ],
                    1
                  )
                ],
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-md-8 sm-text-center form-inline justify-content-end",
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
                _c("div", { staticClass: "form-group check-label" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "check-label form-control mb-1 mr-sm-1 mb-sm-0"
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
                    _c("option", { attrs: { value: "nombre_comercial" } }, [
                      _vm._v("Nombre")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "contacto" } }, [
                      _vm._v("Contacto")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "numero_ruc" } }, [
                      _vm._v("Número RUC")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "numero_cedula" } }, [
                      _vm._v("Número Cedula")
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
                    _vm._v(" Buscar\n        ")
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
              ]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.clientes, function(cliente) {
                  return _c(
                    "tr",
                    { key: cliente.id_cliente },
                    [
                      _c("td", [_vm._v(_vm._s(cliente.codigo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(cliente.nombre_completo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(cliente.razon_social))]),
                      _vm._v(" "),
                      cliente.tipo_persona === 1
                        ? [_c("td", [_vm._v(_vm._s(cliente.numero_cedula))])]
                        : _vm._e(),
                      _vm._v(" "),
                      cliente.tipo_persona === 2
                        ? [_c("td", [_vm._v(_vm._s(cliente.numero_ruc))])]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        cliente.estado
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
                                  name: "actualizar-cliente",
                                  params: { id_cliente: cliente.id_cliente }
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-pencil" })]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                !_vm.clientes.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "4" } },
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
            items: _vm.clientes,
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
        _c("th", [_vm._v("Nombre completo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Razon social")]),
        _vm._v(" "),
        _c("th", [_vm._v("Identificación")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Administrar Solicitudes de Consignación ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Clientes")
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
                [_vm._v(" Módulo Inventario")]
              ),
              _vm._v("> Clientes Consignatarios")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _vm.filter.search.es_deudor
              ? [
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
                            to: {
                              name: "registrar-deudor",
                              params: { deudor: true }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "pe-7s-plus" }),
                          _vm._v(" Registrar Deudor\n                ")
                        ]
                      )
                    ],
                    1
                  )
                ]
              : [
                  _c(
                    "div",
                    { staticClass: "col-md-4 sm-text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-success",
                          attrs: {
                            tag: "button",
                            to: {
                              name: "registrar-cliente",
                              params: { deudor: false }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "pe-7s-plus" }),
                          _vm._v(" Registrar Cliente\n                ")
                        ]
                      )
                    ],
                    1
                  )
                ],
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-md-8 sm-text-center form-inline justify-content-end",
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
                _c("div", { staticClass: "form-group check-label" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "check-label form-control mb-1 mr-sm-1 mb-sm-0"
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
                    _c("option", { attrs: { value: "nombre_comercial" } }, [
                      _vm._v("Nombre")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "contacto" } }, [
                      _vm._v("Contacto")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "numero_ruc" } }, [
                      _vm._v("Número RUC")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "numero_cedula" } }, [
                      _vm._v("Número Cedula")
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
                    _vm._v(" Buscar\n        ")
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
              ]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.clientes, function(cliente) {
                  return _c("tr", { key: cliente.id_cliente }, [
                    _c("td", [_vm._v(_vm._s(cliente.codigo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(cliente.nombre_comercial))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(cliente.numero_ruc))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      cliente.estado
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Activo")
                            ])
                          ])
                        : _c("div", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Desactivado")
                            ])
                          ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        cliente.aprobacion_consignacion === 1
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarEstadoConsignacion(
                                        0,
                                        cliente.id_cliente
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-trash-o" }, [
                                    _vm._v(" Rechazar Solicitud")
                                  ])
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
                                      return _vm.cambiarEstadoConsignacion(
                                        3,
                                        cliente.id_cliente
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-trash-o" }, [
                                    _vm._v(" Revocar Consignación")
                                  ])
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
                        cliente.aprobacion_consignacion === 1
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarEstadoConsignacion(
                                        2,
                                        cliente.id_cliente
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-trash-o" }, [
                                    _vm._v(" Aprobar Solicitud")
                                  ])
                                ]
                              )
                            ]
                          : void 0
                      ],
                      2
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.clientes.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "4" } },
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
            items: _vm.clientes,
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
        _c("th", [_vm._v("Nombre Completo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Número RUC")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center action", attrs: { colspan: "2" } },
          [_vm._v("Opciones")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=template&id=d21152cc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/clientes/Registrar.vue?vue&type=template&id=d21152cc&scoped=true& ***!
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
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Código del cliente")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.codigo,
                        expression: "form.codigo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Digite el código del cliente" },
                    domProps: { value: _vm.form.codigo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "codigo", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Tipo Persona")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.tipo_persona,
                          expression: "form.tipo_persona",
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Nombre completo")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nombre_completo,
                        expression: "form.nombre_completo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Nombre Comercial" },
                    domProps: { value: _vm.form.nombre_completo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "nombre_completo",
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
                    _vm._v(" Razón Social")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.razon_social,
                        expression: "form.razon_social"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Razón Social" },
                    domProps: { value: _vm.form.razon_social },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "razon_social", $event.target.value)
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Contacto")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.contacto,
                        expression: "form.contacto"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Contacto" },
                    domProps: { value: _vm.form.contacto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "contacto", $event.target.value)
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Número RUC")]),
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
                        value: _vm.form.numero_ruc,
                        expression: "form.numero_ruc"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Número RUC" },
                    domProps: { value: _vm.form.numero_ruc },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "numero_ruc", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.numero_ruc, function(message) {
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
                    _vm._v(" Número Cédula")
                  ]),
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
                        value: _vm.form.numero_cedula,
                        expression: "form.numero_cedula"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Número Cédula" },
                    domProps: { value: _vm.form.numero_cedula },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "numero_cedula", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.numero_cedula, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Dirección")]),
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
                    attrs: { placeholder: "Dirección" },
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Teléfono")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.telefono,
                        expression: "form.telefono"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Teléfono" },
                    domProps: { value: _vm.form.telefono },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "telefono", $event.target.value)
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Correo Contacto")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.correo,
                        expression: "form.correo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Correo Contacto" },
                    domProps: { value: _vm.form.correo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "correo", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.correo, function(message) {
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
                      _vm._v("Departamento")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
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
                        value: _vm.form.departamento,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "departamento", $$v)
                        },
                        expression: "form.departamento"
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Municipio")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.municipios, label: "descripcion" },
                      model: {
                        value: _vm.form.municipio,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "municipio", $$v)
                        },
                        expression: "form.municipio"
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
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Observaciones")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.observaciones,
                        expression: "form.observaciones"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Observaciones" },
                    domProps: { value: _vm.form.observaciones },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "observaciones", $event.target.value)
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
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _vm.form.es_deudor
                  ? [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            tag: "button",
                            to: { name: "listado-deudores" }
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
                      )
                    ]
                  : [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            tag: "button",
                            to: { name: "listado-clientes" }
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
                      )
                    ],
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              2
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Registro de Cliente")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar nuevo Cliente")
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

/***/ "./resources/app/api/departamentos.js":
/*!********************************************!*\
  !*** ./resources/app/api/departamentos.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('departamentos/obtener-todos').then(function (response) {
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
    axios.post('departamentos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerDepartamento: function obtenerDepartamento(data, cb, errorCb) {
    axios.post('departamentos/obtener-departamento', data).then(function (response) {
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
    axios.post('departamentos/registrar', data).then(function (response) {
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
    axios.put('departamentos/actualizar', data).then(function (response) {
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

/***/ "./resources/app/api/tipos_clientes.js":
/*!*********************************************!*\
  !*** ./resources/app/api/tipos_clientes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('ventas/tipo-cliente/obtener-todos').then(function (response) {
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
    axios.post('ventas/tipo-cliente/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTipoCliente: function obtenerTipoCliente(data, cb, errorCb) {
    axios.post('ventas/tipo-cliente/obtener-tipo-cliente', data).then(function (response) {
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
    axios.post('ventas/tipo-cliente/registrar', data).then(function (response) {
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
    axios.put('ventas/tipo-cliente/actualizar', data).then(function (response) {
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
    axios.put('ventas/tipo-cliente/desactivar', data).then(function (response) {
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
    axios.put('ventas/tipo-cliente/activar', data).then(function (response) {
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

/***/ "./resources/app/api/zonas.js":
/*!************************************!*\
  !*** ./resources/app/api/zonas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /*obtenerTodas(cb, errorCb) {
      axios.get('zonas/obtener-todas')
      .then(function (response) {
          if (response.data.status == 'success') {
              cb(response.data.result)
          } else {
              errorCb(response.data.result)
          }
      })
      .catch(function (error) {
          errorCb(error)
      })
  },*/
  obtener: function obtener(data, cb, errorCb) {
    axios.post('zonas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerZona: function obtenerZona(data, cb, errorCb) {
    axios.post('zonas/obtener-zona', data).then(function (response) {
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
    axios.post('zonas/registrar', data).then(function (response) {
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
    axios.put('zonas/actualizar', data).then(function (response) {
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
    axios.put('zonas/desactivar', data).then(function (response) {
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
    axios.put('zonas/activar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevo: function nuevo(cb, errorCb) {
    axios.get('zonas/nuevo').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerZonas: function obtenerZonas(cb, errorCb) {
    axios.get('zonas/obtener-todas').then(function (response) {
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

module.exports = "/images/block50.gif?4b6516f8e0b7c10cfccd51ce36336b66";

/***/ }),

/***/ "./resources/app/components/clientes/Actualizar.vue":
/*!**********************************************************!*\
  !*** ./resources/app/components/clientes/Actualizar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_64cfc353_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=64cfc353&scoped=true& */ "./resources/app/components/clientes/Actualizar.vue?vue&type=template&id=64cfc353&scoped=true&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/clientes/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_id_64cfc353_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true& */ "./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_64cfc353_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_64cfc353_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64cfc353",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/clientes/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/clientes/Actualizar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/clientes/Actualizar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_id_64cfc353_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=style&index=0&id=64cfc353&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_id_64cfc353_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_id_64cfc353_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_id_64cfc353_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_id_64cfc353_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_id_64cfc353_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/clientes/Actualizar.vue?vue&type=template&id=64cfc353&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/clientes/Actualizar.vue?vue&type=template&id=64cfc353&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_64cfc353_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=64cfc353&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Actualizar.vue?vue&type=template&id=64cfc353&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_64cfc353_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_64cfc353_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/clientes/Listado.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/clientes/Listado.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_3d6b348a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=3d6b348a&scoped=true& */ "./resources/app/components/clientes/Listado.vue?vue&type=template&id=3d6b348a&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/clientes/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_3d6b348a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true& */ "./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_3d6b348a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_3d6b348a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d6b348a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/clientes/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/clientes/Listado.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/clientes/Listado.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d6b348a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=style&index=0&id=3d6b348a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d6b348a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d6b348a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d6b348a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d6b348a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d6b348a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/clientes/Listado.vue?vue&type=template&id=3d6b348a&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/clientes/Listado.vue?vue&type=template&id=3d6b348a&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3d6b348a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=3d6b348a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Listado.vue?vue&type=template&id=3d6b348a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3d6b348a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3d6b348a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/clientes/ListadoAprobacionConsignacion.vue":
/*!*****************************************************************************!*\
  !*** ./resources/app/components/clientes/ListadoAprobacionConsignacion.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoAprobacionConsignacion_vue_vue_type_template_id_4e2aa732_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true& */ "./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true&");
/* harmony import */ var _ListadoAprobacionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoAprobacionConsignacion.vue?vue&type=script&lang=js& */ "./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoAprobacionConsignacion_vue_vue_type_style_index_0_id_4e2aa732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true& */ "./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoAprobacionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoAprobacionConsignacion_vue_vue_type_template_id_4e2aa732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoAprobacionConsignacion_vue_vue_type_template_id_4e2aa732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e2aa732",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/clientes/ListadoAprobacionConsignacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacionConsignacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_style_index_0_id_4e2aa732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=style&index=0&id=4e2aa732&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_style_index_0_id_4e2aa732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_style_index_0_id_4e2aa732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_style_index_0_id_4e2aa732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_style_index_0_id_4e2aa732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_style_index_0_id_4e2aa732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_template_id_4e2aa732_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/ListadoAprobacionConsignacion.vue?vue&type=template&id=4e2aa732&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_template_id_4e2aa732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoAprobacionConsignacion_vue_vue_type_template_id_4e2aa732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/clientes/Registrar.vue":
/*!*********************************************************!*\
  !*** ./resources/app/components/clientes/Registrar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_d21152cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=d21152cc&scoped=true& */ "./resources/app/components/clientes/Registrar.vue?vue&type=template&id=d21152cc&scoped=true&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/clientes/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_id_d21152cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true& */ "./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_d21152cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_d21152cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d21152cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/clientes/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/clientes/Registrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/components/clientes/Registrar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_id_d21152cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=style&index=0&id=d21152cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_id_d21152cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_id_d21152cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_id_d21152cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_id_d21152cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_id_d21152cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/clientes/Registrar.vue?vue&type=template&id=d21152cc&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/clientes/Registrar.vue?vue&type=template&id=d21152cc&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_d21152cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=d21152cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/clientes/Registrar.vue?vue&type=template&id=d21152cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_d21152cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_d21152cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);