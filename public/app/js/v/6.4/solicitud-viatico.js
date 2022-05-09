(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitud-viatico"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_viatico_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud_viatico.js */ "./resources/app/api/solicitud_viatico.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      detalleForm: {
        cantidad: 0,
        fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
        objetivo: '',
        monto_viatico: 0,
        desayuno: [],
        almuerzo: [],
        cena: [],
        transporte: [],
        hospedaje: []
      },
      form: {
        trabajador: [],
        fecha_solicitud: moment(new Date()).format("YYYY-MM-DD"),
        total: 0,
        total_monto: 0,
        total_desayuno: 0,
        total_almuerzo: 0,
        total_cena: 0,
        total_transporte: 0,
        total_hospedaje: 0,
        detalleSolicitud: [],
        solicitud_distribucion: [],
        concepto: '',
        total_cantidad_desayunos: 0,
        total_cantidad_almuerzos: 0,
        total_cantidad_cenas: 0,
        total_cantidad_transportes: 0,
        total_cantidad_hospedajes: 0,
        cantidad: 0
      },
      fechax: new Date(),
      fechax2: new Date(),
      trabajadores: [],
      viatico_desayuno: [],
      viatico_almuerzo: [],
      viatico_cena: [],
      viatico_transporte: [],
      viatico_hospedaje: [],
      btnAction: 'Guardar',
      btnActionConf: 'Confirmar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total_desayuno: function calcular_total_desayuno() {
      if (this.form.solicitud_distribucion) {
        this.form.total_desayuno = this.form.solicitud_distribucion.reduce(function (carry, item) {
          return carry + Number(item.monto_desayuno);
        }, 0);
        var contador_desayunos = 0;
        this.form.solicitud_distribucion.forEach(function (fila, indice) {
          if (fila.id_viatico_desayuno) {
            contador_desayunos++;
          }
        }); //console.log(contador_desayunos);

        this.form.total_cantidad_desayunos = contador_desayunos;
        return this.form.total_desayuno;
      }
    },
    calcular_total_almuerzo: function calcular_total_almuerzo() {
      if (this.form.solicitud_distribucion) {
        this.form.total_almuerzo = this.form.solicitud_distribucion.reduce(function (carry, item) {
          return carry + Number(item.monto_almuerzo);
        }, 0);
        var contador_almuerzos = 0;
        this.form.solicitud_distribucion.forEach(function (fila, indice) {
          if (fila.id_viatico_almuerzo) {
            contador_almuerzos++;
          }
        });
        this.form.total_cantidad_almuerzos = contador_almuerzos;
        return this.form.total_almuerzo;
      }
    },
    calcular_total_cena: function calcular_total_cena() {
      if (this.form.solicitud_distribucion) {
        this.form.total_cena = this.form.solicitud_distribucion.reduce(function (carry, item) {
          return carry + Number(item.monto_cena);
        }, 0);
        var contador_cenas = 0;
        this.form.solicitud_distribucion.forEach(function (fila, indice) {
          if (fila.id_viatico_cena) {
            contador_cenas++;
          }
        });
        this.form.total_cantidad_cenas = contador_cenas;
        return this.form.total_cena;
      }
    },
    calcular_total_transporte: function calcular_total_transporte() {
      if (this.form.solicitud_distribucion) {
        this.form.total_transporte = this.form.solicitud_distribucion.reduce(function (carry, item) {
          return carry + Number(item.monto_transporte);
        }, 0);
        var contador_transportes = 0;
        this.form.solicitud_distribucion.forEach(function (fila, indice) {
          if (fila.id_viatico_transporte) {
            contador_transportes++;
          }
        });
        this.form.total_cantidad_transportes = contador_transportes;
        return this.form.total_transporte;
      }
    },
    calcular_total_hospedaje: function calcular_total_hospedaje() {
      console.log('calcular_total_hospedaje');

      if (this.form.solicitud_distribucion) {
        this.form.total_hospedaje = this.form.solicitud_distribucion.reduce(function (carry, item) {
          return carry + Number(item.monto_hospedaje);
        }, 0);
        var contador_hospedajes = 0;
        this.form.solicitud_distribucion.forEach(function (fila, indice) {
          if (fila.id_viatico_hospedaje) {
            contador_hospedajes++;
          }
        });
        this.form.total_cantidad_hospedajes = contador_hospedajes;
        return this.form.total_hospedaje;
      }
    },
    calcular_total: function calcular_total() {
      this.form.total = this.form.solicitud_distribucion.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
      this.form.cantidad = Number(this.form.total_cantidad_desayunos) + Number(this.form.total_cantidad_almuerzos) + Number(this.form.total_cantidad_cenas) + Number(this.form.total_cantidad_transportes) + Number(this.form.total_cantidad_hospedajes);
      this.form.total_monto = Number(this.form.total_desayuno) + Number(this.form.total_almuerzo) + Number(this.form.total_cena) + Number(this.form.total_transporte) + Number(this.form.total_hospedaje);

      if (isNaN(this.form.cantidad)) {
        this.form.cantidad = 0;
        this.form.total_monto = 0;
      }

      return this.form.total;
    }
  },
  methods: {
    obtenerSolicitud: function obtenerSolicitud() {
      var _this = this;

      var self = this;
      self.loading = true; //Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false

      _api_solicitud_viatico_js__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSolicitud({
        id_solicitud_viatico: this.$route.params.id_solicitud_viatico
      }, function (data) {
        self.trabajadores = data.trabajadores;
        self.viaticos = data.viaticos;
        self.viatico_desayuno = data.viatico_desayuno;
        self.viatico_almuerzo = data.viatico_almuerzo;
        self.viatico_cena = data.viatico_cena;
        self.viatico_transporte = data.viatico_transporte;
        self.viatico_hospedaje = data.viatico_hospedaje;
        self.fechax2 = new Date(data.solicitud.fecha_solicitud); //self.fechax = new Date(data.solicitud_distribucion.fecha_viatico);

        self.form = data.solicitud;
        self.form.total = 0;
        self.form.total_monto = 0;
        self.form.total_desayuno = 0;
        self.form.total_almuerzo = 0;
        self.form.total_cena = 0;
        self.form.total_transporte = 0;
        self.form.total_hospedaje = 0;
        self.form.total_cantidad_desayunos = 0;
        self.form.total_cantidad_almuerzos = 0;
        self.form.total_cantidad_cenas = 0;
        self.form.total_cantidad_transportes = 0;
        self.form.total_cantidad_hospedajes = 0;
        self.form.cantidad = 0;
        self.loading = false;
      }, function (err) {
        //alertify.error(err.id_solicitud_viatico[0] ,5);
        console.log(err);

        _this.$router.push({
          name: 'listado-solicitud'
        });
      });
    },
    actualizar: function actualizar(estado) {
      var _this2 = this;

      var self = this;
      self.loading = true;
      self.btnAction = 'Guardando, espere......';
      self.btnActionConf = 'Guardando, espere......';
      self.form.estado = estado;
      _api_solicitud_viatico_js__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        alertify.success("Datos actualizados correctamente", 5);

        _this2.$router.push({
          name: 'listado-solicitud'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        console.log(err);
        /*	if(err.id_solicitud_viatico[0])
        	{
        		alertify.error(err.id_solicitud_viatico[0],5)
        		this.$router.push({
        			name: 'listado-solicitud'
        		})
        	}
        	*/

        self.btnAction = 'Guardar';
        self.btnActionConf = 'Confirmar';
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this; //if(this.detalleForm.fecha_viatico){

      var i = 0;
      var keyx = 0;

      if (self.form.solicitud_distribucion) {
        self.form.solicitud_distribucion.forEach(function (fila, key) {
          if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
            i++;
            keyx = key;
          }
        });
      }

      if (i === 0) {
        this.form.solicitud_distribucion.push({
          fecha_viatico: this.detalleForm.fecha_viatico,
          id_viatico_desayuno: this.detalleForm.desayuno ? this.detalleForm.desayuno.id_viatico : null,
          monto_desayuno: this.detalleForm.desayuno.monto ? this.detalleForm.desayuno.monto : 0,
          id_viatico_almuerzo: this.detalleForm.almuerzo ? this.detalleForm.almuerzo.id_viatico : null,
          monto_almuerzo: this.detalleForm.almuerzo.monto ? this.detalleForm.almuerzo.monto : 0,
          id_viatico_cena: this.detalleForm.cena ? this.detalleForm.cena.id_viatico : null,
          monto_cena: this.detalleForm.cena.monto ? this.detalleForm.cena.monto : 0,
          id_viatico_transporte: this.detalleForm.transporte ? this.detalleForm.transporte.id_viatico : null,
          monto_transporte: this.detalleForm.transporte.monto ? this.detalleForm.transporte.monto : 0,
          id_viatico_hospedaje: this.detalleForm.hospedaje ? this.detalleForm.hospedaje.id_viatico : null,
          monto_hospedaje: this.detalleForm.hospedaje.monto ? this.detalleForm.hospedaje.monto : 0,
          subtotal: 0
        }); //this.detalleForm.fecha_viatico='';

        this.detalleForm.almuerzo = '';
        this.detalleForm.desayuno = '';
        this.detalleForm.cena = '';
        this.detalleForm.transporte = '';
        this.detalleForm.hospedaje = '';
      } else {
        alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
      }
      /*}else{
      	alertify.warning("Verifique que ningún campo esté vacío",5);
      }*/

    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.solicitud_distribucion.length >= 1) {
        this.form.solicitud_distribucion.splice(index, 1);
      } else {
        this.form.solicitud_distribucion = [];
      }
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number(itemX.monto_desayuno) + Number(itemX.monto_almuerzo) + Number(itemX.monto_cena) + Number(itemX.monto_transporte) + Number(itemX.monto_hospedaje);
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.subtotal)) {
        return itemX.subtotal;
      } else return 0;
    },
    desactivar: function desactivar(zonaId) {
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
          //var self = this
          _api_solicitud_viatico_js__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_solicitud_viatico: zonaId
          }, function (data) {
            alertify.warning("Solicitud de viatico anulada correctamente", 5);

            _this3.$router.push({
              name: 'listado-solicitud'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(zonaId) {
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
          var self = _this4;
          _api_solicitud_viatico_js__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_solicitud_viatico: zonaId
          }, function (data) {
            alertify.success("Solicitud de viaticos activado correctamente", 5);

            _this4.$router.push({
              name: 'listado-solicitud'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    }
  },
  mounted: function mounted() {
    this.obtenerSolicitud();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_viatico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud_viatico */ "./resources/app/api/solicitud_viatico.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_cuentas_por_cobrar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/cuentas_por_cobrar */ "./resources/app/api/cuentas_por_cobrar.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import Pagination from '../layout/Pagination'

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
          field: 'concepto',
          value: '',
          status: 0
        }
      },
      solicitudes: [],
      total: 0,
      descargando: false,
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      trabajador: {}
    };
  },
  methods: {
    obtener: function obtener() {
      var self = this;
      self.loading = true;
      _api_solicitud_viatico__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
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
    },
    downloadItem: function downloadItem(extension, id_solicitud_viatico) {
      var _this = this;

      var self = this;

      if (!this.descargando) {
        self.loading = true;
        var url = 'solicitud-viatico/reporte/' + extension + '/' + id_solicitud_viatico;
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          extension === 'xls' ? blob = new Blob([data], {
            type: 'application/excel'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'FormatoSolicitudViatico.' + extension;
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
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajadorP = e.target.value;
      var self = this;
      self.trabajador = trabajadorP;
      self.filter.search.value = self.trabajador.id_trabajador;
    },
    deseleccionar: function deseleccionar() {
      this.trabajador = {};
      this.filter.search.value = '';
    },
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    }
  },

  /*components: {
  	'pagination': Pagination
  },*/
  mounted: function mounted() {
    this.obtener();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_solicitud_viatico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/solicitud_viatico */ "./resources/app/api/solicitud_viatico.js");
/* harmony import */ var _api_normativas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/normativas */ "./resources/app/api/normativas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_sucursales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/sucursales */ "./resources/app/api/sucursales.js");
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default.a,
      format: "dd-MM-yyyy",
      detalleForm: {
        cantidad: 0,
        fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
        objetivo: '',
        monto_viatico: 0,
        desayuno: null,
        almuerzo: null,
        cena: null,
        transporte: null,
        hospedaje: null
      },
      form: {
        trabajador: [],
        fecha_solicitud: moment(new Date()).format("YYYY-MM-DD"),
        total: 0,
        total_desayuno: 0,
        total_almuerzo: 0,
        total_cena: 0,
        total_transporte: 0,
        total_hospedaje: 0,
        detalleSolicitud: [],
        distribucionSolicitud: [],
        concepto: '',
        total_cantidad_desayunos: 0,
        total_cantidad_almuerzos: 0,
        total_cantidad_cenas: 0,
        total_cantidad_transportes: 0,
        total_cantidad_hospedajes: 0,
        cantidad: 0
      },
      fechax: new Date(),
      fechax2: new Date(),
      trabajadores: [],
      viatico_desayuno: [],
      viatico_almuerzo: [],
      viatico_cena: [],
      viatico_transporte: [],
      viatico_hospedaje: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total: function calcular_total() {
      this.form.total = this.form.distribucionSolicitud.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
      return this.form.total;
    },
    calcular_total_desayuno: function calcular_total_desayuno() {
      if (this.form.distribucionSolicitud) {
        this.form.total_desayuno = this.form.distribucionSolicitud.reduce(function (carry, item) {
          return carry + Number(item.monto_desayuno);
        }, 0);
        var contador_desayunos = 0;
        this.form.distribucionSolicitud.forEach(function (fila, indice) {
          if (fila.id_viatico_desayuno) {
            contador_desayunos++;
          }
        });
        this.form.total_cantidad_desayunos = contador_desayunos;
        return this.form.total_desayuno;
      }
    },
    calcular_total_almuerzo: function calcular_total_almuerzo() {
      if (this.form.distribucionSolicitud) {
        this.form.total_almuerzo = this.form.distribucionSolicitud.reduce(function (carry, item) {
          return carry + Number(item.monto_almuerzo);
        }, 0);
        var contador_almuerzos = 0;
        this.form.distribucionSolicitud.forEach(function (fila, indice) {
          if (fila.id_viatico_almuerzo) {
            contador_almuerzos++;
          }
        });
        this.form.total_cantidad_almuerzos = contador_almuerzos;
        return this.form.total_almuerzo;
      }
    },
    calcular_total_cena: function calcular_total_cena() {
      if (this.form.distribucionSolicitud) {
        this.form.total_cena = this.form.distribucionSolicitud.reduce(function (carry, item) {
          return carry + Number(item.monto_cena);
        }, 0);
        var contador_cenas = 0;
        this.form.distribucionSolicitud.forEach(function (fila, indice) {
          if (fila.id_viatico_cena) {
            contador_cenas++;
          }
        });
        this.form.total_cantidad_cenas = contador_cenas;
        return this.form.total_cena;
      }
    },
    calcular_total_transporte: function calcular_total_transporte() {
      if (this.form.distribucionSolicitud) {
        this.form.total_transporte = this.form.distribucionSolicitud.reduce(function (carry, item) {
          return carry + Number(item.monto_transporte);
        }, 0);
        var contador_transportes = 0;
        this.form.distribucionSolicitud.forEach(function (fila, indice) {
          if (fila.id_viatico_transporte) {
            contador_transportes++;
          }
        });
        this.form.total_cantidad_transportes = contador_transportes;
        return this.form.total_transporte;
      }
    },
    calcular_total_hospedaje: function calcular_total_hospedaje() {
      if (this.form.distribucionSolicitud) {
        this.form.total_hospedaje = this.form.distribucionSolicitud.reduce(function (carry, item) {
          return carry + Number(item.monto_hospedaje);
        }, 0);
        var contador_hospedajes = 0;
        this.form.distribucionSolicitud.forEach(function (fila, indice) {
          if (fila.id_viatico_hospedaje) {
            contador_hospedajes++;
          }
        });
        this.form.total_cantidad_hospedajes = contador_hospedajes;
        return this.form.total_hospedaje;
      }
    },
    cantidad: function cantidad() {
      this.form.cantidad = Number(this.form.total_cantidad_desayunos) + Number(this.form.total_cantidad_almuerzos) + Number(this.form.total_cantidad_cenas) + Number(this.form.total_cantidad_transportes) + Number(this.form.total_cantidad_hospedajes);
      this.form.total_monto = Number(this.form.total_desayuno) + Number(this.form.total_almuerzo) + Number(this.form.total_cena) + Number(this.form.total_transporte) + Number(this.form.total_hospedaje);

      if (!isNaN(this.form.cantidad)) {
        return this.form.cantidad;
      } else return 0;
    }
  },
  methods: {
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_solicitud_viatico__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.trabajadores = data.trabajadores;
        self.viatico_desayuno = data.viatico_desayuno;
        self.viatico_almuerzo = data.viatico_almuerzo;
        self.viatico_cena = data.viatico_cena;
        self.viatico_transporte = data.viatico_transporte;
        self.viatico_hospedaje = data.viatico_hospedaje;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.loading = true;
      _api_solicitud_viatico__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.loading = false;
        alertify.success("Datos registrados correctamente", 5);

        _this.$router.push({
          name: 'listado-solicitud'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.almuerzo === null && this.detalleForm.desayuno === null && this.detalleForm.cena === null && this.detalleForm.transporte === null && this.detalleForm.hospedaje === null) {
        alertify.warning("No se puede agregar un detalle que esté vacío", 5);
      } else {
        if (this.detalleForm.fecha_viatico) {
          var i = 0;
          var keyx = 0;

          if (self.form.distribucionSolicitud) {
            self.form.distribucionSolicitud.forEach(function (fila, key) {
              if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            this.form.distribucionSolicitud.push({
              fecha_viatico: this.detalleForm.fecha_viatico,
              id_viatico_desayuno: this.detalleForm.desayuno !== "" && this.detalleForm.desayuno !== null ? this.detalleForm.desayuno.id_viatico : null,
              monto_desayuno: this.detalleForm.desayuno !== "" && this.detalleForm.desayuno !== null ? this.detalleForm.desayuno.monto : 0,
              id_viatico_almuerzo: this.detalleForm.almuerzo !== "" && this.detalleForm.almuerzo !== null ? this.detalleForm.almuerzo.id_viatico : null,
              monto_almuerzo: this.detalleForm.almuerzo !== "" && this.detalleForm.almuerzo !== null ? this.detalleForm.almuerzo.monto : 0,
              id_viatico_cena: this.detalleForm.cena !== "" && this.detalleForm.cena !== null ? this.detalleForm.cena.id_viatico : null,
              monto_cena: this.detalleForm.cena !== "" && this.detalleForm.cena !== null ? this.detalleForm.cena.monto : 0,
              id_viatico_transporte: this.detalleForm.transporte !== "" && this.detalleForm.transporte !== null ? this.detalleForm.transporte.id_viatico : null,
              monto_transporte: this.detalleForm.transporte !== "" && this.detalleForm.transporte !== null ? this.detalleForm.transporte.monto : 0,
              id_viatico_hospedaje: this.detalleForm.hospedaje !== "" && this.detalleForm.hospedaje !== null ? this.detalleForm.hospedaje.id_viatico : null,
              monto_hospedaje: this.detalleForm.hospedaje !== "" && this.detalleForm.hospedaje !== null ? this.detalleForm.hospedaje.monto : 0,
              subtotal: 0
            }); //this.detalleForm.fecha_viatico='';

            this.detalleForm.almuerzo = null;
            this.detalleForm.desayuno = null;
            this.detalleForm.cena = null;
            this.detalleForm.transporte = null;
            this.detalleForm.hospedaje = null;
          } else {
            alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
          }
        } else {
          alertify.warning("Verifique que ningún campo esté vacío", 5);
        }
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.distribucionSolicitud.length >= 1) {
        this.form.distribucionSolicitud.splice(index, 1);
      } else {
        this.form.distribucionSolicitud = [];
      }
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number(itemX.monto_desayuno) + Number(itemX.monto_almuerzo) + Number(itemX.monto_cena) + Number(itemX.monto_transporte) + Number(itemX.monto_hospedaje);

      if (!isNaN(itemX.subtotal)) {
        return itemX.subtotal;
      } else return 0;
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-695668d2] {\n  min-width: 120px;\n}\n.table a[data-v-695668d2] {\n  color: #2675dc;\n}\n.table .table-number[data-v-695668d2] {\n  width: 60px;\n}\n.table .action[data-v-695668d2] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=template&id=52ab54dc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=template&id=52ab54dc& ***!
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-6" }, [
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
                    _vm._l(_vm.errorMessages.trabajador, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Fecha")]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      format: _vm.format,
                      language: _vm.es,
                      value: new Date()
                    },
                    on: { selected: _vm.onDateSelect },
                    model: {
                      value: _vm.fechax2,
                      callback: function($$v) {
                        _vm.fechax2 = $$v
                      },
                      expression: "fechax2"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.fecha_viatico, function(message) {
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
                _c("label", [_vm._v(" Concepto")]),
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
                  attrs: { placeholder: "Dígite una descripción" },
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
          _c("br"),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-2" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Fecha")]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      format: _vm.format,
                      language: _vm.es,
                      value: new Date()
                    },
                    on: { selected: _vm.onDateSelect2 },
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
                    _vm._l(_vm.errorMessages.viatico, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Desayuno")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    ref: "viatico",
                    attrs: {
                      "allow-empty": true,
                      options: _vm.viatico_desayuno,
                      searchable: true,
                      "show-labels": false,
                      "deselect-label": "No se puede eliminar este valor",
                      label: "descripcion",
                      placeholder: "Seleccionar un viatico",
                      "track-by": "id_viatico"
                    },
                    model: {
                      value: _vm.detalleForm.desayuno,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "desayuno", $$v)
                      },
                      expression: "detalleForm.desayuno"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.viatico, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Almuerzo")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    ref: "viatico",
                    attrs: {
                      "allow-empty": false,
                      options: _vm.viatico_almuerzo,
                      searchable: true,
                      "show-labels": false,
                      "deselect-label": "No se puede eliminar este valor",
                      label: "descripcion",
                      placeholder: "Seleccionar un viatico",
                      "track-by": "id_viatico"
                    },
                    model: {
                      value: _vm.detalleForm.almuerzo,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "almuerzo", $$v)
                      },
                      expression: "detalleForm.almuerzo"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.viatico, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Cena")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    ref: "viatico",
                    attrs: {
                      "allow-empty": false,
                      options: _vm.viatico_cena,
                      searchable: true,
                      "show-labels": false,
                      "deselect-label": "No se puede eliminar este valor",
                      label: "descripcion",
                      placeholder: "Seleccionar un viatico",
                      "track-by": "id_viatico"
                    },
                    model: {
                      value: _vm.detalleForm.cena,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "cena", $$v)
                      },
                      expression: "detalleForm.cena"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.viatico, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Transporte")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    ref: "viatico",
                    attrs: {
                      "allow-empty": false,
                      options: _vm.viatico_transporte,
                      searchable: true,
                      "show-labels": false,
                      "deselect-label": "No se puede eliminar este valor",
                      label: "descripcion",
                      placeholder: "Seleccionar un viatico",
                      "track-by": "id_viatico"
                    },
                    model: {
                      value: _vm.detalleForm.transporte,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "transporte", $$v)
                      },
                      expression: "detalleForm.transporte"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.viatico, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Hospedaje")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    ref: "viatico",
                    attrs: {
                      "allow-empty": false,
                      options: _vm.viatico_hospedaje,
                      searchable: true,
                      "show-labels": false,
                      "deselect-label": "No se puede eliminar este valor",
                      label: "descripcion",
                      placeholder: "Seleccionar un viatico",
                      "track-by": "id_viatico"
                    },
                    model: {
                      value: _vm.detalleForm.hospedaje,
                      callback: function($$v) {
                        _vm.$set(_vm.detalleForm, "hospedaje", $$v)
                      },
                      expression: "detalleForm.hospedaje"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.viatico, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "agregar",
                    staticClass: "btn btn-info btn-agregar",
                    on: { click: _vm.agregarDetalle }
                  },
                  [_vm._v("Agregar detalle")]
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
                _vm._l(_vm.errorMessages.solicitud_distribucion, function(
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
                    _vm._l(_vm.form.solicitud_distribucion, function(
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
                                  value: item.fecha_viatico,
                                  expression: "item.fecha_viatico"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: "" },
                              domProps: { value: item.fecha_viatico },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "fecha_viatico",
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
                                  "solicitud_distribucion." +
                                    index +
                                    ".fecha_viatico"
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
                                  rawName: "v-model.text",
                                  value: item.monto_desayuno,
                                  expression: "item.monto_desayuno",
                                  modifiers: { text: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", disabled: true },
                              domProps: { value: item.monto_desayuno },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "monto_desayuno",
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
                                  "solicitud_distribucion." +
                                    index +
                                    ".desayuno"
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
                                  value: item.monto_almuerzo,
                                  expression: "item.monto_almuerzo",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", disabled: true },
                              domProps: { value: item.monto_almuerzo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "monto_almuerzo",
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
                                  "solicitud_distribucion." +
                                    index +
                                    ".almuerzo"
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
                                  value: item.monto_cena,
                                  expression: "item.monto_cena",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                disabled: true,
                                min: "0"
                              },
                              domProps: { value: item.monto_cena },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "monto_cena",
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
                                  "solicitud_distribucion." + index + ".cena"
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
                                  value: item.monto_transporte,
                                  expression: "item.monto_transporte",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                disabled: true,
                                min: "0"
                              },
                              domProps: { value: item.monto_transporte },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "monto_transporte",
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
                                  "solicitud_distribucion." +
                                    index +
                                    ".transporte"
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
                                  value: item.monto_hospedaje,
                                  expression: "item.monto_hospedaje",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                disabled: true,
                                min: "0"
                              },
                              domProps: { value: item.monto_hospedaje },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "monto_hospedaje",
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
                                  "solicitud_distribucion." +
                                    index +
                                    ".hospedaje"
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
                    _c("td", { attrs: { colspan: "1" } }),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.calcular_total_desayuno,
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
                          " " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.calcular_total_almuerzo,
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
                          " " +
                            _vm._s(
                              _vm._f("formatMoney")(_vm.calcular_total_cena, 2)
                            )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.calcular_total_transporte,
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
                          " " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.calcular_total_hospedaje,
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
                          " " +
                            _vm._s(_vm._f("formatMoney")(_vm.calcular_total, 2))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("tbody", [
                    _vm.form.total_cantidad_desayunos > 0
                      ? _c("tr", [
                          _vm._m(6),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(_vm.form.total_cantidad_desayunos)
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.form.total_desayuno))
                              ])
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form.total_cantidad_almuerzos > 0
                      ? _c("tr", [
                          _vm._m(7),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(_vm.form.total_cantidad_almuerzos)
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.form.total_almuerzo))
                              ])
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form.total_cantidad_cenas > 0
                      ? _c("tr", [
                          _vm._m(8),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.form.total_cantidad_cenas))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.form.total_cena))
                              ])
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form.total_cantidad_transportes > 0
                      ? _c("tr", [
                          _vm._m(9),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(_vm.form.total_cantidad_transportes)
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.form.total_transporte))
                              ])
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form.total_cantidad_hospedajes > 0
                      ? _c("tr", [
                          _vm._m(10),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(_vm.form.total_cantidad_hospedajes)
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.form.total_hospedaje))
                              ])
                            ])
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("td", [_vm._v("Total")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.cantidad))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("formatMoney")(_vm.form.total_monto, 2))
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
            { staticClass: "row" },
            [
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "content-box-footer text-left" },
                  [
                    _vm.form.estado === 1 || _vm.form.estado === 2
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  return _vm.desactivar(
                                    _vm.form.id_solicitud_viatico
                                  )
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash-o" }, [
                                _vm._v("\tAnular")
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
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "content-box-footer text-right" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: { name: "listado-solicitud" },
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
                    _vm.form.estado === 1
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: {
                                disabled: _vm.btnAction !== "Guardar",
                                type: "button"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.actualizar(1)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.btnAction))]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: {
                                disabled: _vm.btnActionConf !== "Confirmar",
                                type: "button"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.actualizar(2)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.btnActionConf))]
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
        _vm._v("Modificar solicitud de viatico")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar solicitud de viatico")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de la solicitud")])])
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
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Desayuno")]),
        _vm._v(" "),
        _c("th", [_vm._v("Almuerzo ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cena")]),
        _vm._v(" "),
        _c("th", [_vm._v("Transporte")]),
        _vm._v(" "),
        _c("th", [_vm._v("Hospedaje")]),
        _vm._v(" "),
        _c("th", [_vm._v("SubTotal")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Totales")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Resumen de solicitud")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_c("strong", [_vm._v("Resumen")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Cantidad")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Monto total")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Desayuno")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Almuerzo")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Cena")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Transporte")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Hospedaje")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=template&id=695668d2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=template&id=695668d2&scoped=true& ***!
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
            _vm._v("Administrar solicitudes de viatico")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de solicitudes")
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
                  attrs: { to: { name: "pagina-principal-tesoreria" } }
                },
                [_vm._v(" Módulo tesorería")]
              ),
              _vm._v("> Solicitud de viaticos")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-3 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: { to: { name: "registrar-solicitud" }, tag: "button" }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar solicitud\n\t\t\t\t\t")
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
                "col-md-9 sm-text-center form-inline justify-content-end",
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
                  _c("option", { attrs: { value: "concepto" } }, [
                    _vm._v("Concepto")
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
                  staticStyle: { "margin-left": "5px" },
                  on: {
                    click: function($event) {
                      _vm.filter.page = 1
                      _vm.obtener()
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
                _vm._l(_vm.solicitudes, function(solicitud) {
                  return _c("tr", { key: solicitud.id_solicitud_viatico }, [
                    _c("td", [_vm._v(_vm._s(solicitud.concepto))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          solicitud.solicitud_trabajador
                            ? solicitud.solicitud_trabajador.nombre_completo
                            : "N/D"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.formatDate(solicitud.fecha_solicitud)))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(solicitud.monto_total))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      solicitud.estado === 1
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Registrado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      solicitud.estado === 2
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v("Revisado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      solicitud.estado === 3
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-primary" }, [
                              _vm._v("Comprobante")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      solicitud.estado === 4
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v("Reembolsado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      solicitud.estado === 0
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Anulado")
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
                              to: {
                                name: "actualizar-solicitud",
                                params: {
                                  id_solicitud_viatico:
                                    solicitud.id_solicitud_viatico
                                }
                              },
                              tag: "a"
                            }
                          },
                          [_c("i", { staticClass: "icon-pencil" })]
                        ),
                        _vm._v(" "),
                        [2].indexOf(Number(solicitud.estado)) >= 0
                          ? [
                              _c(
                                "router-link",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip",
                                      value: "Crear comprobante",
                                      expression: "'Crear comprobante'"
                                    }
                                  ],
                                  attrs: {
                                    to: {
                                      name: "registrar-comprobante-solicitud",
                                      params: {
                                        id_solicitud_viatico:
                                          solicitud.id_solicitud_viatico
                                      }
                                    },
                                    tag: "a"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-bandcamp" })]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: { disabled: _vm.descargando },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.downloadItem(
                                  "pdf",
                                  solicitud.id_solicitud_viatico
                                )
                              }
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
                }),
                _vm._v(" "),
                !_vm.solicitudes.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "5" } },
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
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre solicitante")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha solicitud")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Monto total C$")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=template&id=4c0eeff1&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=template&id=4c0eeff1& ***!
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
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
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
                      _vm._l(_vm.errorMessages.trabajador, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Fecha")]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelect },
                      model: {
                        value: _vm.fechax2,
                        callback: function($$v) {
                          _vm.fechax2 = $$v
                        },
                        expression: "fechax2"
                      }
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
                    attrs: { placeholder: "Dígite una descripción" },
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
            _c("br"),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("div", { staticClass: "col-sm-2" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Fecha")]),
                      _vm._v(" "),
                      _c("datepicker", {
                        attrs: {
                          format: _vm.format,
                          language: _vm.es,
                          value: new Date()
                        },
                        on: { selected: _vm.onDateSelect2 },
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
                        _vm._l(_vm.errorMessages.viatico, function(message) {
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Desayuno")]),
                      _vm._v(" "),
                      _c("multiselect", {
                        ref: "viatico",
                        attrs: {
                          "allow-empty": true,
                          options: _vm.viatico_desayuno,
                          searchable: true,
                          "show-labels": true,
                          "deselect-label": "Deseleccionar",
                          "select-label": "Seleccionar",
                          label: "viatico_con_monto",
                          placeholder: "Seleccionar un viatico",
                          "track-by": "id_viatico"
                        },
                        model: {
                          value: _vm.detalleForm.desayuno,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "desayuno", $$v)
                          },
                          expression: "detalleForm.desayuno"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.viatico, function(message) {
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Almuerzo")]),
                      _vm._v(" "),
                      _c("multiselect", {
                        ref: "viatico",
                        attrs: {
                          "allow-empty": true,
                          options: _vm.viatico_almuerzo,
                          searchable: true,
                          "show-labels": true,
                          "deselect-label": "Deseleccionar",
                          "select-label": "Seleccionar",
                          label: "viatico_con_monto",
                          placeholder: "Seleccionar un viatico",
                          "track-by": "id_viatico"
                        },
                        model: {
                          value: _vm.detalleForm.almuerzo,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "almuerzo", $$v)
                          },
                          expression: "detalleForm.almuerzo"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.viatico, function(message) {
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Cena")]),
                      _vm._v(" "),
                      _c("multiselect", {
                        ref: "viatico",
                        attrs: {
                          "allow-empty": true,
                          options: _vm.viatico_cena,
                          searchable: true,
                          "show-labels": true,
                          "deselect-label": "Deseleccionar",
                          "select-label": "Seleccionar",
                          label: "viatico_con_monto",
                          placeholder: "Seleccionar un viatico",
                          "track-by": "id_viatico"
                        },
                        model: {
                          value: _vm.detalleForm.cena,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "cena", $$v)
                          },
                          expression: "detalleForm.cena"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.viatico, function(message) {
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
                        _vm._v("Transporte")
                      ]),
                      _vm._v(" "),
                      _c("multiselect", {
                        ref: "viatico",
                        attrs: {
                          "allow-empty": true,
                          options: _vm.viatico_transporte,
                          searchable: true,
                          "show-labels": true,
                          "deselect-label": "Deseleccionar",
                          "select-label": "Seleccionar",
                          label: "viatico_con_monto",
                          placeholder: "Seleccionar un viatico",
                          "track-by": "id_viatico"
                        },
                        model: {
                          value: _vm.detalleForm.transporte,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "transporte", $$v)
                          },
                          expression: "detalleForm.transporte"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.viatico, function(message) {
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
                        _vm._v("Hospedaje")
                      ]),
                      _vm._v(" "),
                      _c("multiselect", {
                        ref: "viatico",
                        attrs: {
                          "allow-empty": true,
                          options: _vm.viatico_hospedaje,
                          searchable: true,
                          "show-labels": true,
                          "deselect-label": "Deseleccionar",
                          "select-label": "Seleccionar",
                          label: "viatico_con_monto",
                          placeholder: "Seleccionar un viatico",
                          "track-by": "id_viatico"
                        },
                        model: {
                          value: _vm.detalleForm.hospedaje,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "hospedaje", $$v)
                          },
                          expression: "detalleForm.hospedaje"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.viatico, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        ref: "agregar",
                        staticClass: "btn btn-info btn-agregar",
                        on: { click: _vm.agregarDetalle }
                      },
                      [_vm._v("Agregar detalle")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.loading
                  ? [
                      _c("BlockUI", {
                        attrs: { message: _vm.msg, url: _vm.url }
                      })
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.distribucionSolicitud, function(
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
                      _vm._l(_vm.form.distribucionSolicitud, function(
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
                                    value: item.fecha_viatico,
                                    expression: "item.fecha_viatico"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date", disabled: true },
                                domProps: { value: item.fecha_viatico },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "fecha_viatico",
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
                                    "distribucionSolicitud." +
                                      index +
                                      ".fecha_viatico"
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
                                    value: item.monto_desayuno,
                                    expression: "item.monto_desayuno",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", disabled: true },
                                domProps: { value: item.monto_desayuno },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "monto_desayuno",
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
                                    "distribucionSolicitud." +
                                      index +
                                      ".desayuno"
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
                                    value: item.monto_almuerzo,
                                    expression: "item.monto_almuerzo",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", disabled: true },
                                domProps: { value: item.monto_almuerzo },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "monto_almuerzo",
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
                                    "distribucionSolicitud." +
                                      index +
                                      ".almuerzo"
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
                                    value: item.monto_cena,
                                    expression: "item.monto_cena",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  disabled: true,
                                  min: "0"
                                },
                                domProps: { value: item.monto_cena },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "monto_cena",
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
                                    "distribucionSolicitud." + index + ".cena"
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
                                    value: item.monto_transporte,
                                    expression: "item.monto_transporte",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  disabled: true,
                                  min: "0"
                                },
                                domProps: { value: item.monto_transporte },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "monto_transporte",
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
                                    "distribucionSolicitud." +
                                      index +
                                      ".transporte"
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
                                    value: item.monto_hospedaje,
                                    expression: "item.monto_hospedaje",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  disabled: true,
                                  min: "0"
                                },
                                domProps: { value: item.monto_hospedaje },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "monto_hospedaje",
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
                                    "distribucionSolicitud." +
                                      index +
                                      ".hospedaje"
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
                      _c("td", { attrs: { colspan: "1" } }),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.calcular_total_desayuno,
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
                            " " +
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.calcular_total_almuerzo,
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
                            " " +
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.calcular_total_cena,
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
                            " " +
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.calcular_total_transporte,
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
                            " " +
                              _vm._s(
                                _vm._f("formatMoney")(
                                  _vm.calcular_total_hospedaje,
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
                            " " +
                              _vm._s(
                                _vm._f("formatMoney")(_vm.calcular_total, 2)
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("tbody", [
                      _vm.form.total_cantidad_desayunos > 0
                        ? _c("tr", [
                            _vm._m(6),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(this.form.total_cantidad_desayunos)
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(_vm._s(this.form.total_desayuno))
                                ])
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.total_cantidad_almuerzos > 0
                        ? _c("tr", [
                            _vm._m(7),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(this.form.total_cantidad_almuerzos)
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(_vm._s(this.form.total_almuerzo))
                                ])
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.total_cantidad_cenas > 0
                        ? _c("tr", [
                            _vm._m(8),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(_vm._s(this.form.total_cantidad_cenas))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(_vm._s(this.form.total_cena))
                                ])
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.total_cantidad_transportes > 0
                        ? _c("tr", [
                            _vm._m(9),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(this.form.total_cantidad_transportes)
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(_vm._s(this.form.total_transporte))
                                ])
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.total_cantidad_hospedajes > 0
                        ? _c("tr", [
                            _vm._m(10),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(this.form.total_cantidad_hospedajes)
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(_vm._s(this.form.total_hospedaje))
                                ])
                              ])
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("tfoot", [
                      _c("tr", [
                        _c("td", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.cantidad))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatMoney")(_vm.form.total_monto, 2)
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
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: { to: { name: "listado-solicitud" }, tag: "button" }
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
                      disabled: _vm.btnAction != "Registrar" ? true : false,
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
        _vm._v("Crear nueva solicitud de viatico")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar solicitud de viatico")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de la solicitud")])])
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
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Desayuno")]),
        _vm._v(" "),
        _c("th", [_vm._v("Almuerzo ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cena")]),
        _vm._v(" "),
        _c("th", [_vm._v("Transporte")]),
        _vm._v(" "),
        _c("th", [_vm._v("Hospedaje")]),
        _vm._v(" "),
        _c("th", [_vm._v("SubTotal")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Totales")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Resumen de solicitud")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_c("strong", [_vm._v("Resumen")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Cantidad")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Monto total")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Desayuno")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Almuerzo")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Cena")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Transporte")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v(" Hospedaje")])])
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

/***/ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/locale/translations/es.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return new(function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=e,this.months=n,this.monthsAbbr=r,this.days=o,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,o;return n=t,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&e(n.prototype,r),o&&e(n,o),t}())("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])});


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

/***/ "./resources/app/api/cuentas_por_cobrar.js":
/*!*************************************************!*\
  !*** ./resources/app/api/cuentas_por_cobrar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('cuentas-cobrar/obtener', data).then(function (response) {
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
    axios.post('cuentas-cobrar/obtener-cc', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentasCliente: function obtenerCuentasCliente(data, cb, errorCb) {
    axios.post('cuentas-cobrar/obtener-cuentas-cliente', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCuentasTrabajador: function obtenerCuentasTrabajador(data, cb, errorCb) {
    axios.post('cuentas-cobrar/obtener-cuentas-trabajador', data).then(function (response) {
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

/***/ "./resources/app/api/normativas.js":
/*!*****************************************!*\
  !*** ./resources/app/api/normativas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('normativas/obtener-todas').then(function (response) {
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
    axios.post('normativas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNormativa: function obtenerNormativa(data, cb, errorCb) {
    axios.post('normativas/obtener-normativa', data).then(function (response) {
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
    axios.post('normativas/registrar', data).then(function (response) {
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
    axios.put('normativas/actualizar', data).then(function (response) {
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
    axios.put('normativas/desactivar', data).then(function (response) {
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
    axios.put('normativas/activar', data).then(function (response) {
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

/***/ "./resources/app/api/solicitud_viatico.js":
/*!************************************************!*\
  !*** ./resources/app/api/solicitud_viatico.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('solicitud-viatico/obtener', data).then(function (response) {
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
    axios.post('solicitud-viatico/obtener-viatico', data).then(function (response) {
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
    axios.post('solicitud-viatico/nuevo', data).then(function (response) {
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
    axios.post('solicitud-viatico/registrar', data).then(function (response) {
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
    axios.put('solicitud-viatico/actualizar', data).then(function (response) {
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
    axios.put('solicitud-viatico/desactivar', data).then(function (response) {
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
    axios.put('solicitud-viatico/activar', data).then(function (response) {
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

/***/ "./resources/app/assets/images/block50.gif":
/*!*************************************************!*\
  !*** ./resources/app/assets/images/block50.gif ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/block50.gif?a75e3729ca58e29435a37b05f314fe5c";

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Actualizar.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Actualizar.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_52ab54dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=52ab54dc& */ "./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=template&id=52ab54dc&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_52ab54dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_52ab54dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitud-viatico/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=template&id=52ab54dc&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=template&id=52ab54dc& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_52ab54dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=52ab54dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Actualizar.vue?vue&type=template&id=52ab54dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_52ab54dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_52ab54dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Listado.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Listado.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_695668d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=695668d2&scoped=true& */ "./resources/app/components/solicitud-viatico/Listado.vue?vue&type=template&id=695668d2&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitud-viatico/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_695668d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true& */ "./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_695668d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_695668d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "695668d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitud-viatico/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Listado.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Listado.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_695668d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=style&index=0&id=695668d2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_695668d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_695668d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_695668d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_695668d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_695668d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Listado.vue?vue&type=template&id=695668d2&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Listado.vue?vue&type=template&id=695668d2&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_695668d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=695668d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Listado.vue?vue&type=template&id=695668d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_695668d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_695668d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Registrar.vue":
/*!******************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Registrar.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_4c0eeff1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=4c0eeff1& */ "./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=template&id=4c0eeff1&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_4c0eeff1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_4c0eeff1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/solicitud-viatico/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=template&id=4c0eeff1&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=template&id=4c0eeff1& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_4c0eeff1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=4c0eeff1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/solicitud-viatico/Registrar.vue?vue&type=template&id=4c0eeff1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_4c0eeff1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_4c0eeff1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);