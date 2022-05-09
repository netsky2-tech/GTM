(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comprobante-caja-chica"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante.js */ "./resources/app/api/caja-chica-comprobante.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _form;

    return {
      loading: true,
      msg: 'Cargando contenido, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      proveedoresBusqueda: {},
      proveedoresBusquedaURL: "/proveedores/buscar",
      trabajadoresBusqueda: {},
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      detalleForm: {
        nombre_comercio: '',
        numero_ruc: '',
        fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
        factura: '',
        monto: 0,
        moneda: ''
      },
      form: (_form = {
        trabajador: [],
        fecha: moment(new Date()).format("YYYY-MM-DD"),
        total: 0,
        comprobante_detalle: [],
        proveedor: []
      }, _defineProperty(_form, "trabajador", {}), _defineProperty(_form, "beneficiario", ''), _defineProperty(_form, "concepto", ''), _defineProperty(_form, "monto_entregado", 0), _defineProperty(_form, "diferencia", 0), _defineProperty(_form, "monto_letras", ''), _defineProperty(_form, "tipo_comprobante", 0), _defineProperty(_form, "tipo_beneficiario", 1), _defineProperty(_form, "id_solicitud_viatico", ''), _defineProperty(_form, "id_comprobante", ''), _defineProperty(_form, "vale", []), _defineProperty(_form, "solicitud", []), _defineProperty(_form, "persona_recibe", ''), _defineProperty(_form, "identificacion_persona_recibe", ''), _form),
      fechax: new Date(),
      fechax2: new Date(),
      trabajadores: [],
      proveedores: [],
      solicitudes: [],
      vales: [],
      cajas: [],
      btnAction: 'Guardar',
      btnActionConf: 'Confirmar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total: function calcular_total() {
      if (this.form.comprobante_detalle) {
        this.form.total = this.form.comprobante_detalle.reduce(function (carry, item) {
          return carry + Number(item.monto);
        }, 0);
        return this.form.total;
      }
    },
    calcular_diferencia: function calcular_diferencia() {
      this.form.diferencia = Number((this.form.total - this.form.total_detalle).toFixed(2));
      return this.form.diferencia;
    }
  },
  methods: {
    obtenerComprobante: function obtenerComprobante() {
      var _this = this;

      var self = this; //Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false

      _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerComprobante({
        id_comprobante: this.$route.params.id_comprobante
      }, function (data) {
        self.trabajadores = data.trabajadores;
        self.viaticos = data.viaticos;
        self.proveedores = data.proveedores;
        self.cajas = data.cajas_chica;
        self.form = data.comprobante;
        self.fechax2 = new Date(data.comprobante.fecha);
        self.monto_letras();
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_comprobante[0], 5);

        _this.$router.push({
          name: 'listado-comprobante'
        });
      });
    },
    limpiar_campos: function limpiar_campos() {
      var self = this;
      self.form.id_solicitud_viatico = null;
      self.form.id_comprobante = null;
      self.form.monto_entregado = '';
      self.form.concepto = '';
      self.form.solicitud = null;
      self.form.vale = null;
      self.form.trabajador = '';
      self.form.monto_letras = '';
      self.form.caja = '';
    },
    seleccionarBeneficiario: function seleccionarBeneficiario(e) {
      var beneficiario = e.target.value;
      var self = this;
      self.form.proveedor = beneficiario;
      self.form.beneficiario = beneficiario.paguese_a;
    },
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajador = e.target.value;
      var self = this;
      self.form.trabajador = trabajador;
      self.form.beneficiario = trabajador.text;
    },
    monto_letras: function monto_letras() {
      if (this.form.monto_entregado > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_3__["default"].numberasstring(this.form.monto_entregado, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_letras = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    },
    cargar_vale: function cargar_vale() {
      var self = this; //self.limpiar_campos();

      if (self.form.vale) {
        self.form.id_comprobante = self.form.comprobante.id_comprobante;
        self.form.monto_entregado = self.form.comprobante.monto_entregado;
        self.form.concepto = self.form.comprobante.concepto;
        self.form.trabajador = self.form.comprobante.trabajador_comprobante;
        self.form.caja = self.form.comprobante.caja_comprobante;
        self.monto_letras();
      }
    },
    cargar_viatico: function cargar_viatico() {
      var self = this; //self.limpiar_campos();

      if (self.form.solicitud) {
        self.form.id_solicitud_viatico = self.form.solicitud.id_comprobante;
        self.form.monto_entregado = self.form.solicitud.monto_total;
        self.form.concepto = self.form.solicitud.concepto;
        self.form.trabajador = self.form.solicitud.solicitud_trabajador;
        self.monto_letras();
      }
    },
    actualizar: function actualizar(estado) {
      var _this2 = this;

      var self = this;
      self.loading = true;
      /*var validacion = false;
      if(self.form.tipo_comprobante === 3 ){
      	if ((Number(self.form.monto_entregado) === Number(self.form.total))){
      		validacion = true;
      	}else
      	{
      		validacion = false;
      	}
      }else{
      	validacion = true;
      }*/

      /*if (validacion){*/

      self.btnAction = 'Guardando, espere......';
      self.btnActionConf = 'Guardando, espere......';
      self.form.estado = estado;
      _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        alertify.success("Datos actualizados correctamente", 5);

        _this2.$router.push({
          name: 'listado-comprobante'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;

        if (err.id_comprobante) {
          alertify.error(err.id_comprobante, 5);

          _this2.$router.push({
            name: 'listado-comprobante'
          });
        }

        self.btnAction = 'Guardar';
        self.btnActionConf = 'Confirmar';
      });
      /*}else{
      	self.loading = false;
      	alertify.warning("El sumatoria del detalle debe de coincidir con el monto solicitado",5);
      }*/
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD");
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.factura) {
        var i = 0;
        var keyx = 0;

        if (self.form.comprobante_detalle) {
          self.form.comprobante_detalle.forEach(function (fila, key) {
            if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.comprobante_detalle.push({
            nombre_comercio: this.detalleForm.nombre_comercio,
            numero_ruc: this.detalleForm.numero_ruc,
            factura: this.detalleForm.factura,
            monto: this.detalleForm.monto,
            subtotal: 0
          }); //this.detalleForm.fecha_viatico='';

          this.detalleForm.nombre_comercio = '';
          this.detalleForm.numero_ruc = '';
          this.detalleForm.factura = '';
          this.detalleForm.monto = '';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.comprobante_detalle.length >= 1) {
        this.form.comprobante_detalle.splice(index, 1);
      } else {
        this.form.comprobante_detalle = [];
      }
    },

    /*	sub_total(itemX) {
    		itemX.total= Number(itemX.monto_viatico) * Number(itemX.cantidad);
    			if(!isNaN(itemX.total)){
    			return itemX.total;
    		}
    		else return 0;
    	},*/
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
          _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_comprobante: zonaId
          }, function (data) {
            alertify.warning("Comprobante anulado correctamente", 5);

            _this3.$router.push({
              name: 'listado-comprobante'
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
          _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_comprobante: zonaId
          }, function (data) {
            alertify.success("Comprobante activado correctamente", 5);

            _this4.$router.push({
              name: 'listado-comprobante'
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
    this.obtenerComprobante();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante.js */ "./resources/app/api/caja-chica-comprobante.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      fechax: new Date(),
      detalleForm: {
        cantidad: 0,
        fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
        objetivo: '',
        monto_viatico: 0,
        viatico: [],
        moneda: ''
      },
      form: {
        trabajador: [],
        fecha: '',
        detalleSolicitud: [],
        concepto: '',
        monto_entregado: 0,
        monto_en_letra: ''
      },
      fechax2: new Date(),
      trabajadores: [],
      cajas: [],
      solicitudes: [],
      btnAction: 'Guardar',
      btnActionConf: 'Confirmar',
      errorMessages: []
    };
  },
  computed: {
    /*calcular_total() {
    	this.form.monto_total = this.form.solicitud_detalles.reduce((carry, item) => {
    				return(carry + Number(item.total));
    			}
    			, 0)
    	return this.form.monto_total;
    },*/
  },
  methods: {
    obtenerComprobante: function obtenerComprobante() {
      var _this = this;

      var self = this; //Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false

      _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerComprobante({
        id_comprobante: this.$route.params.id_comprobante
      }, function (data) {
        self.trabajadores = data.trabajadores;
        self.viaticos = data.viaticos;
        self.cajas = data.cajas_chica;
        self.form = data.comprobante;
        self.fechax = new Date(data.comprobante.fecha);
        self.monto_letras();
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_comprobante[0], 5);

        _this.$router.push({
          name: 'listado-vales'
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
      _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].actualizarVale(self.form, function (data) {
        alertify.success("Datos actualizados correctamente", 5);

        _this2.$router.push({
          name: 'listado-vales'
        });
      }, function (err) {
        self.loading = false;
        console.log(err);
        self.errorMessages = err;

        if (err.id_comprobante[0]) {
          alertify.error(err.id_comprobante[0], 10);

          _this2.$router.push({
            name: 'listado-vales'
          });
        }

        self.btnAction = 'Guardar';
        self.btnActionConf = 'Confirmar';
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
    },
    monto_letras: function monto_letras() {
      if (this.form.monto_entregado > 0) {
        this.form.monto_en_letra = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_3__["default"].numberasstring(this.form.monto_entregado, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_en_letra = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.fecha_viatico) {
        var i = 0;
        var keyx = 0;

        if (self.form.solicitud_detalles) {
          self.form.solicitud_detalles.forEach(function (fila, key) {
            if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.solicitud_detalles.push({
            cantidad: this.detalleForm.cantidad,
            objetivo: this.detalleForm.objetivo,
            solicitud_viatico: this.detalleForm.viatico,
            monto_viatico: this.detalleForm.viatico.monto,
            total: 0
          }); //this.detalleForm.fecha_viatico='';

          this.detalleForm.objetivo = '';
          this.detalleForm.cantidad = 1;
          this.detalleForm.viatico = '';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        alertify.warning("Debe seleccionar una fecha válida", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.solicitud_detalles.length >= 1) {
        this.form.solicitud_detalles.splice(index, 1);
      } else {
        this.form.solicitud_detalles = [];
      }
    },

    /*sub_total(itemX) {
    	itemX.total= Number(itemX.monto_viatico) * Number(itemX.cantidad);
    		if(!isNaN(itemX.total)){
    		return itemX.total;
    	}
    	else return 0;
    },*/
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
          _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_comprobante: zonaId
          }, function (data) {
            alertify.warning("Vale provisional anulado correctamente", 5);

            _this3.$router.push({
              name: 'listado-vales'
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
          _api_caja_chica_comprobante_js__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_comprobante: zonaId
          }, function (data) {
            alertify.success("Vale activado correctamente", 5);

            _this4.$router.push({
              name: 'listado-vales'
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
    this.obtenerComprobante();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante */ "./resources/app/api/caja-chica-comprobante.js");
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
          status: 0,
          tipo: 1
        }
      },
      comprobantes: [],
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
      _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.comprobantes = data.rows;
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
    downloadItem: function downloadItem(extension, id_comprobante) {
      var _this = this;

      var self = this;

      if (!this.descargando) {
        self.loading = true;
        var url = 'modulo-tesoreria/caja-chica-comprobante/reporte/' + id_comprobante;
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
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'FormatoComprobante.pdf'; //+ extension;

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante */ "./resources/app/api/caja-chica-comprobante.js");
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
          status: 0,
          tipo: 0
        }
      },
      comprobantes: [],
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
      _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.comprobantes = data.rows;
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
    downloadItem: function downloadItem(ext) {
      var _this = this;

      var self = this;

      if (!this.descargando) {
        this.descargando = true;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get('smodulo-tesoreria/caja-chica-comprobante/reporte/' + ext, {
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
          link.download = 'Vale_provisional.' + ext;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante */ "./resources/app/api/caja-chica-comprobante.js");
/* harmony import */ var _api_normativas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/normativas */ "./resources/app/api/normativas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_sucursales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/sucursales */ "./resources/app/api/sucursales.js");
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _form;

    return {
      loading: false,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default.a,
      format: "dd-MM-yyyy",
      proveedoresBusqueda: {},
      proveedoresBusquedaURL: "/proveedores/buscar",
      trabajadoresBusqueda: {},
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      detalleForm: {
        nombre_comercio: '',
        numero_ruc: '',
        fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
        factura: '',
        monto: 0,
        moneda: ''
      },
      form: (_form = {
        trabajador: [],
        fecha: moment(new Date()).format("YYYY-MM-DD"),
        total: 0,
        detalleSolicitud: [],
        proveedor: {}
      }, _defineProperty(_form, "trabajador", {}), _defineProperty(_form, "beneficiario", ''), _defineProperty(_form, "concepto", ''), _defineProperty(_form, "monto_entregado", 0), _defineProperty(_form, "monto_letras", ''), _defineProperty(_form, "tipo_comprobante", 1), _defineProperty(_form, "tipo_beneficiario", 1), _defineProperty(_form, "id_solicitud_viatico", ''), _defineProperty(_form, "id_comprobante", ''), _defineProperty(_form, "vale", []), _defineProperty(_form, "solicitud", []), _defineProperty(_form, "persona_recibe", ''), _defineProperty(_form, "identificacion_persona_recibe", ''), _form),
      fechax: new Date(),
      fechax2: new Date(),
      trabajadores: [],
      solicitudes: [],
      vales: [],
      cajas: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total: function calcular_total() {
      this.form.total = this.form.detalleSolicitud.reduce(function (carry, item) {
        return carry + Number(item.monto.toFixed(2));
      }, 0);
      return this.form.total;
    }
  },
  methods: {
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.trabajadores = data.trabajadores;
        self.cajas = data.cajas;
        self.solicitudes = data.solicitudes;
        self.vales = data.vales;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    monto_letras: function monto_letras() {
      if (this.form.monto_entregado > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__["default"].numberasstring(this.form.monto_entregado, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_letras = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    },
    cargar_identificacion: function cargar_identificacion() {
      if (this.form.trabajador) {
        this.form.persona_recibe = this.form.trabajador.text;
        this.form.identificacion_persona_recibe = this.form.trabajador.cedula;
      } else {
        this.form.persona_recibe = '';
        this.form.identificacion_persona_recibe = '';
      }
    },
    cargar_vale: function cargar_vale() {
      var self = this; //self.limpiar_campos();

      if (self.form.vale) {
        self.form.id_comprobante = self.form.vale.id_comprobante;
        self.form.monto_entregado = self.form.vale.monto_entregado;
        self.form.concepto = self.form.vale.concepto;
        self.form.trabajador = self.form.vale.trabajador_comprobante;
        self.form.caja = self.form.vale.caja_comprobante;
        self.monto_letras();
      }
    },
    cargar_viatico: function cargar_viatico() {
      var self = this; //self.limpiar_campos();

      if (self.form.solicitud) {
        self.form.id_solicitud_viatico = self.form.solicitud.id_solicitud_viatico;
        self.form.monto_entregado = self.form.solicitud.monto_total;
        self.form.concepto = self.form.solicitud.concepto;
        self.form.trabajador = self.form.solicitud.solicitud_trabajador;
        self.monto_letras();
      }
    },
    limpiar_campos: function limpiar_campos() {
      var self = this;
      self.form.id_solicitud_viatico = null;
      self.form.id_comprobante = null;
      self.form.monto_entregado = '';
      self.form.concepto = '';
      self.form.solicitud = null;
      self.form.vale = null; //self.form.trabajador = '';

      self.form.monto_letras = '';
      self.form.caja = '';
    },
    seleccionarBeneficiario: function seleccionarBeneficiario(e) {
      var beneficiario = e.target.value;
      var self = this;
      self.form.proveedor = beneficiario;
      self.form.beneficiario = beneficiario.paguese_a;
    },
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajador = e.target.value;
      var self = this;
      self.form.trabajador = trabajador;
      self.form.beneficiario = trabajador.text;
      self.cargar_identificacion();
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      var validacion = false;

      if (self.form.tipo_comprobante === 2) {
        if (Number(self.form.monto_entregado) === Number(self.form.total)) {
          validacion = true;
        } else {
          validacion = false;
        }
      } else {
        validacion = true;
      }

      if (validacion) {
        self.btnAction = 'Registrando, espere....';
        self.loading = true;
        _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
          self.loading = false;
          alertify.success("Datos registrados correctamente", 5);

          _this.$router.push({
            name: 'listado-comprobante'
          });
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnAction = 'Registrar';
        });
      } else {
        alertify.warning("La sumatoria del detalle debe de coincidir con el monto solicitado", 5);
      }
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.factura) {
        var i = 0;
        var keyx = 0;

        if (self.form.detalleSolicitud) {
          self.form.detalleSolicitud.forEach(function (fila, key) {
            if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.detalleSolicitud.push({
            nombre_comercio: this.detalleForm.nombre_comercio,
            numero_ruc: this.detalleForm.numero_ruc,
            factura: this.detalleForm.factura,
            monto: this.detalleForm.monto,
            subtotal: 0
          }); //this.detalleForm.fecha_viatico='';

          this.detalleForm.nombre_comercio = '';
          this.detalleForm.numero_ruc = '';
          this.detalleForm.factura = '';
          this.detalleForm.monto = '';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleSolicitud.length >= 1) {
        this.form.detalleSolicitud.splice(index, 1);
      } else {
        this.form.detalleSolicitud = [];
      }
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante */ "./resources/app/api/caja-chica-comprobante.js");
/* harmony import */ var _api_normativas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/normativas */ "./resources/app/api/normativas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_sucursales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/sucursales */ "./resources/app/api/sucursales.js");
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default.a,
      format: "dd-MM-yyyy",
      detalleForm: {
        nombre_comercio: '',
        numero_ruc: '',
        fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
        factura: '',
        monto: 0,
        moneda: ''
      },
      form: {
        trabajador: [],
        fecha: moment(new Date()).format("YYYY-MM-DD"),
        total: 0,
        detalleSolicitud: [],
        concepto: '',
        monto_entregado: 0,
        monto_letras: '',
        tipo_comprobante: 1,
        tipo_beneficiario: 1,
        id_solicitud_viatico: ''
      },
      fechax: new Date(),
      fechax2: new Date(),
      trabajadores: [],
      solicitud: [],
      cajas: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total: function calcular_total() {
      this.form.total = this.form.detalleSolicitud.reduce(function (carry, item) {
        return carry + Number(item.monto.toFixed(2));
      }, 0);
      return this.form.total;
    }
  },
  methods: {
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({
        id_solicitud_viatico: this.$route.params.id_solicitud_viatico
      }, function (data) {
        self.trabajadores = data.trabajadores;
        self.cajas = data.cajas;
        self.solicitud = data.solicitud;
        self.form.monto_entregado = data.solicitud.monto_total;
        self.form.concepto = data.solicitud.concepto;
        self.form.trabajador = data.solicitud.solicitud_trabajador;
        self.monto_letras();
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    monto_letras: function monto_letras() {
      if (this.form.monto_entregado > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__["default"].numberasstring(this.form.monto_entregado, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_letras = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      var validacion = false;

      if (self.form.tipo_comprobante !== 1) {
        if (Number(self.form.monto_entregado) === Number(self.form.total)) {
          validacion = true;
        } else {
          validacion = false;
        }
      } else {
        validacion = true;
      }

      if (validacion) {
        self.btnAction = 'Registrando, espere....';
        self.loading = true;
        self.form.id_solicitud_viatico = this.$route.params.id_solicitud_viatico;
        _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
          self.loading = false;
          alertify.success("Datos registrados correctamente", 5);

          _this.$router.push({
            name: 'listado-comprobante'
          });
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnAction = 'Registrar';
        });
      } else {
        alertify.warning("El sumatoria del detalle debe de coincidir con el monto solicitado", 5);
      }
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.factura) {
        var i = 0;
        var keyx = 0;

        if (self.form.detalleSolicitud) {
          self.form.detalleSolicitud.forEach(function (fila, key) {
            if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.detalleSolicitud.push({
            nombre_comercio: this.detalleForm.nombre_comercio,
            numero_ruc: this.detalleForm.numero_ruc,
            factura: this.detalleForm.factura,
            monto: this.detalleForm.monto,
            subtotal: 0
          }); //this.detalleForm.fecha_viatico='';

          this.detalleForm.nombre_comercio = '';
          this.detalleForm.numero_ruc = '';
          this.detalleForm.factura = '';
          this.detalleForm.monto = '';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleSolicitud.length >= 1) {
        this.form.detalleSolicitud.splice(index, 1);
      } else {
        this.form.detalleSolicitud = [];
      }
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante */ "./resources/app/api/caja-chica-comprobante.js");
/* harmony import */ var _api_normativas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/normativas */ "./resources/app/api/normativas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_sucursales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/sucursales */ "./resources/app/api/sucursales.js");
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default.a,
      format: "dd-MM-yyyy",
      detalleForm: {
        nombre_comercio: '',
        numero_ruc: '',
        fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
        factura: '',
        monto: 0,
        moneda: ''
      },
      form: {
        trabajador: [],
        fecha: moment(new Date()).format("YYYY-MM-DD"),
        total: 0,
        detalleSolicitud: [],
        concepto: '',
        monto_entregado: 0,
        monto_letras: '',
        tipo_comprobante: 3,
        tipo_beneficiario: 1,
        id_comprobante: ''
      },
      fechax: new Date(),
      fechax2: new Date(),
      trabajadores: [],
      vale: [],
      cajas: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  computed: {
    calcular_total: function calcular_total() {
      this.form.total = this.form.detalleSolicitud.reduce(function (carry, item) {
        return carry + Number(item.monto.toFixed(2));
      }, 0);
      return this.form.total;
    }
  },
  methods: {
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({
        id_comprobante: this.$route.params.id_comprobante
      }, function (data) {
        self.trabajadores = data.trabajadores;
        self.cajas = data.cajas;
        self.vale = data.vale;
        self.form.monto_entregado = data.vale.monto_entregado;
        self.form.concepto = data.vale.concepto;
        self.form.trabajador = data.vale.trabajador_comprobante;
        self.form.caja = data.vale.caja_comprobante;
        self.monto_letras();
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    monto_letras: function monto_letras() {
      if (this.form.monto_entregado > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__["default"].numberasstring(this.form.monto_entregado, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_letras = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      var validacion = false;

      if (self.form.tipo_comprobante === 2) {
        if (Number(self.form.monto_entregado) === Number(self.form.total)) {
          validacion = true;
        } else {
          validacion = false;
        }
      } else {
        validacion = true;
      }

      if (validacion) {
        self.btnAction = 'Registrando, espere....';
        self.loading = true;
        self.form.id_comprobante = this.$route.params.id_comprobante;
        _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
          self.loading = false;
          alertify.success("Datos registrados correctamente", 5);

          _this.$router.push({
            name: 'listado-comprobante'
          });
        }, function (err) {
          self.loading = false;
          self.errorMessages = err;
          self.btnAction = 'Registrar';
        });
      } else {
        alertify.warning("El sumatoria del detalle debe de coincidir con el monto solicitado", 5);
      }
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.factura) {
        var i = 0;
        var keyx = 0;

        if (self.form.detalleSolicitud) {
          self.form.detalleSolicitud.forEach(function (fila, key) {
            if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.detalleSolicitud.push({
            nombre_comercio: this.detalleForm.nombre_comercio,
            numero_ruc: this.detalleForm.numero_ruc,
            factura: this.detalleForm.factura,
            monto: this.detalleForm.monto,
            subtotal: 0
          }); //this.detalleForm.fecha_viatico='';

          this.detalleForm.nombre_comercio = '';
          this.detalleForm.numero_ruc = '';
          this.detalleForm.factura = '';
          this.detalleForm.monto = '';
        } else {
          //5ta condicional
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        //6ta condicional
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleSolicitud.length >= 1) {
        this.form.detalleSolicitud.splice(index, 1);
      } else {
        this.form.detalleSolicitud = [];
      }
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/caja-chica-comprobante */ "./resources/app/api/caja-chica-comprobante.js");
/* harmony import */ var _api_normativas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/normativas */ "./resources/app/api/normativas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_sucursales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/sucursales */ "./resources/app/api/sucursales.js");
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/custom-scripts/NumberAsString */ "./resources/app/assets/custom-scripts/NumberAsString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        viatico: [],
        moneda: ''
      },
      form: {
        trabajador: [],
        fecha: moment(new Date()).format("YYYY-MM-DD"),
        detalleSolicitud: [],
        concepto: '',
        monto_entregado: 0,
        monto_letras: ''
      },
      fechax: new Date(),
      fechax2: new Date(),
      trabajadores: [],
      cajas: [],
      solicitudes: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  computed: {
    /*calcular_total() {
    	this.form.total = this.form.detalleSolicitud.reduce((carry, item) => {
    				return (carry + Number(item.subtotal.toFixed(2)));
    			}
    			, 0)
    	return this.form.total;
    },*/
  },
  methods: {
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.trabajadores = data.trabajadores;
        self.cajas = data.cajas;
        self.solicitudes = data.solicitudes;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    monto_letras: function monto_letras() {
      if (this.form.monto_entregado > 0) {
        this.form.monto_letras = _assets_custom_scripts_NumberAsString__WEBPACK_IMPORTED_MODULE_6__["default"].numberasstring(this.form.monto_entregado, 'CORDOBA', 'CORDOBAS', true);
      } else {
        this.form.monto_letras = 'SELECCIONE UN MONTO MAYOR QUE CERO';
      }

      return this.form.monto_letras;
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.loading = true;
      _api_caja_chica_comprobante__WEBPACK_IMPORTED_MODULE_0__["default"].registrarVale(self.form, function (data) {
        self.loading = false;
        alertify.success("Datos registrados correctamente", 5);

        _this.$router.push({
          name: 'listado-vales'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;
      /*if (this.detalleForm.fecha_viatico) {
      	let i = 0;
      	/*let keyx = 0;
      	if (self.form.detalleSolicitud) {
      		self.form.detalleSolicitud.forEach((fila, key) => {
      			if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
      				i++;
      				keyx = key;
      			}
      		});
      	}*/

      if (i === 0) {
        this.form.detalleSolicitud.push({
          cantidad: this.detalleForm.cantidad,
          objetivo: this.detalleForm.objetivo,
          viatico: this.detalleForm.viatico,
          monto_viatico: this.detalleForm.viatico.monto,
          subtotal: 0
        }); //this.detalleForm.fecha_viatico='';

        this.detalleForm.objetivo = '';
        this.detalleForm.cantidad = 1;
        this.detalleForm.viatico = '';
      } else {
        alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
      }
      /*} else {
      	alertify.warning("Debe seleccionar una fecha válida", 5);
      }*/

    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleSolicitud.length >= 1) {
        this.form.detalleSolicitud.splice(index, 1);
      } else {
        this.form.detalleSolicitud = [];
      }
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number(itemX.monto_viatico) * Number(itemX.cantidad);

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-2b0a1ac5] {\n  min-width: 120px;\n}\n.table a[data-v-2b0a1ac5] {\n  color: #2675dc;\n}\n.table .table-number[data-v-2b0a1ac5] {\n  width: 60px;\n}\n.table .action[data-v-2b0a1ac5] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-3767286e] {\n  min-width: 120px;\n}\n.table a[data-v-3767286e] {\n  color: #2675dc;\n}\n.table .table-number[data-v-3767286e] {\n  width: 60px;\n}\n.table .action[data-v-3767286e] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarVale.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSV.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarV.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVale.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=template&id=be070bee&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=template&id=be070bee& ***!
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Tipo de comprobante")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.tipo_comprobante,
                          expression: "form.tipo_comprobante",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass:
                        "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                      attrs: { disabled: true },
                      on: {
                        input: _vm.limpiar_campos,
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
                            "tipo_comprobante",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Comprobante de viatico")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Comprobante de gastos")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [
                        _vm._v("Comprobante de vale")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Monto")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.monto_entregado,
                        expression: "form.monto_entregado"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: _vm.form.tipo_comprobante !== 2,
                      placeholder: "Dígite una cantidad",
                      type: "number"
                    },
                    domProps: { value: _vm.form.monto_entregado },
                    on: {
                      change: _vm.monto_letras,
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_entregado",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.monto_entregado, function(
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
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Caja chica")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "descripcion",
                          disabled: _vm.form.tipo_comprobante === 3,
                          options: _vm.cajas
                        },
                        model: {
                          value: _vm.form.caja_comprobante,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "caja_comprobante", $$v)
                          },
                          expression: "form.caja_comprobante"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.caja_comprobante, function(
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
                _vm.form.tipo_comprobante === 2
                  ? [
                      _vm.form.tipo_comprobante === 2
                        ? _c("div", { staticClass: "col-sm-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Tipo de beneficiario")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: _vm.form.tipo_beneficiario,
                                      expression: "form.tipo_beneficiario",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass:
                                    "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return _vm._n(val)
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "tipo_beneficiario",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Trabajador")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "2" } }, [
                                    _vm._v("Acreedor")
                                  ])
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.tipo_beneficiario === 1
                        ? _c("div", { staticClass: "col-sm-9" }, [
                            _c("div", { staticClass: "col-sm-9" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Trabajador")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    attrs: {
                                      label: "nombre_completo",
                                      disabled: false,
                                      options: _vm.trabajadores
                                    },
                                    model: {
                                      value: _vm.form.trabajador_comprobante,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "trabajador_comprobante",
                                          $$v
                                        )
                                      },
                                      expression: "form.trabajador_comprobante"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(
                                      _vm.errorMessages.trabajador,
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
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.tipo_beneficiario === 2
                        ? _c("div", { staticClass: "col-sm-9" }, [
                            _c("div", { staticClass: "col-sm-9" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Acreedor")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    attrs: {
                                      label: "nombre_comercial",
                                      disabled: false,
                                      options: _vm.proveedores
                                    },
                                    model: {
                                      value: _vm.form.acreedor_comprobante,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "acreedor_comprobante",
                                          $$v
                                        )
                                      },
                                      expression: "form.acreedor_comprobante"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "error-messages" },
                                    _vm._l(
                                      _vm.errorMessages.proveedor,
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
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.tipo_comprobante === 2
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v(" Persona que recibe")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.persona_recibe,
                                    expression: "form.persona_recibe"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder:
                                    "Dígite el nombre de la persona que recibe el dinero"
                                },
                                domProps: { value: _vm.form.persona_recibe },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "persona_recibe",
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
                                  _vm.errorMessages.persona_recibe,
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
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.tipo_comprobante === 2
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v(" Identificacion")
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
                                    value:
                                      _vm.form.identificacion_persona_recibe,
                                    expression:
                                      "form.identificacion_persona_recibe"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder:
                                    "Dígite la identificación de la persona que recibe"
                                },
                                domProps: {
                                  value: _vm.form.identificacion_persona_recibe
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "identificacion_persona_recibe",
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
                                  _vm.errorMessages
                                    .identificacion_persona_recibe,
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
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.tipo_comprobante !== 2
                  ? [
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Empleado")
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "nombre_completo",
                                disabled: true,
                                options: _vm.trabajadores
                              },
                              model: {
                                value: _vm.form.trabajador_comprobante,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.form,
                                    "trabajador_comprobante",
                                    $$v
                                  )
                                },
                                expression: "form.trabajador_comprobante"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(
                                _vm.errorMessages.trabajador_comprobante,
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
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Monto en letras")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.monto_letras,
                          expression: "form.monto_letras"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: true,
                        placeholder: "Dígite monto en letra"
                      },
                      domProps: { value: _vm.form.monto_letras },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "monto_letras",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.monto_letras, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" En concepto de")
                    ]),
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
                      attrs: {
                        disabled: _vm.form.tipo_comprobante !== 2,
                        placeholder: "Dígite un concepto"
                      },
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
              ],
              2
            ),
            _vm._v(" "),
            _vm.form.tipo_comprobante !== 1
              ? [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(" Nombre comercio")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.objetivo",
                                value: _vm.detalleForm.nombre_comercio,
                                expression: "detalleForm.nombre_comercio",
                                modifiers: { objetivo: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              placeholder: "Dígite el nombre del comercio"
                            },
                            domProps: {
                              value: _vm.detalleForm.nombre_comercio
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.detalleForm,
                                  "nombre_comercio",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.nombre_comercio, function(
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
                            _vm._v(" Numero RUC")
                          ]),
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
                                rawName: "v-model.objetivo",
                                value: _vm.detalleForm.numero_ruc,
                                expression: "detalleForm.numero_ruc",
                                modifiers: { objetivo: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              placeholder: "Dígite el objetivo del viatico"
                            },
                            domProps: { value: _vm.detalleForm.numero_ruc },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.detalleForm,
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Factura")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.detalleForm.factura,
                                expression: "detalleForm.factura"
                              }
                            ],
                            ref: "cantidad",
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.detalleForm.factura },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.detalleForm,
                                  "factura",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.factura, function(
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
                            _vm._v("Monto")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.detalleForm.monto,
                                expression: "detalleForm.monto",
                                modifiers: { number: true }
                              }
                            ],
                            ref: "monto_viatico",
                            staticClass: "form-control",
                            attrs: { type: "number", min: "0" },
                            domProps: { value: _vm.detalleForm.monto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.detalleForm,
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
                        _vm._l(_vm.errorMessages.comprobante_detalle, function(
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
                            _vm._l(_vm.form.comprobante_detalle, function(
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
                                          rawName: "v-model.number",
                                          value: item.nombre_comercio,
                                          expression: "item.nombre_comercio",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: item.nombre_comercio },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "nombre_comercio",
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
                                          "comprobante_detalle." +
                                            index +
                                            ".nombre_comercio"
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
                                          rawName: "v-model.text",
                                          value: item.numero_ruc,
                                          expression: "item.numero_ruc",
                                          modifiers: { text: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: item.numero_ruc },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
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
                                      _vm._l(
                                        _vm.errorMessages[
                                          "comprobante_detalle." +
                                            index +
                                            ".numero_ruc"
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
                                          rawName: "v-model.text",
                                          value: item.factura,
                                          expression: "item.factura",
                                          modifiers: { text: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text", disabled: true },
                                      domProps: { value: item.factura },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "factura",
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
                                          "comprobante_detalle." +
                                            index +
                                            ".factura"
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
                                          value: item.monto,
                                          expression: "item.monto",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "numeric", min: "0" },
                                      domProps: { value: item.monto },
                                      on: {
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
                                          "comprobante_detalle." +
                                            index +
                                            ".monto"
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
                            _c("td", { attrs: { colspan: "4" } }),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total")]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.calcular_total,
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
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "content-box-footer text-left" },
                  [
                    _vm.form.estado === 99 || _vm.form.estado === 1
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  return _vm.desactivar(_vm.form.id_comprobante)
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
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "div",
                    { staticClass: "content-box-footer text-right" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: { name: "listado-comprobante" },
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
                                  disabled:
                                    _vm.btnAction !== "Guardar" ? true : false,
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
                  ),
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
              )
            ])
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Modificar ")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar comprobante")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de comprobante")])])
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
        _c("th", [_vm._v("Nombre comercio")]),
        _vm._v(" "),
        _c("th", [_vm._v("RUC")]),
        _vm._v(" "),
        _c("th", [_vm._v("No.Factura")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=template&id=4fb5890d&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=template&id=4fb5890d& ***!
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
        _c("div", { staticClass: "content-box" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Fecha")]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      format: _vm.format,
                      disabled: true,
                      language: _vm.es
                    },
                    on: { selected: _vm.onDateSelect },
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
                    _vm._l(_vm.errorMessages.fecha, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v(" Por: C$")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.monto_entregado,
                      expression: "form.monto_entregado"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Dígite una cantidad", type: "number" },
                  domProps: { value: _vm.form.monto_entregado },
                  on: {
                    change: _vm.monto_letras,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "monto_entregado", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.monto_entregado, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Caja chica")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: { label: "descripcion", options: _vm.cajas },
                    model: {
                      value: _vm.form.caja_comprobante,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "caja_comprobante", $$v)
                      },
                      expression: "form.caja_comprobante"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.caja, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Nombre")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "nombre_completo",
                      options: _vm.trabajadores
                    },
                    model: {
                      value: _vm.form.trabajador_comprobante,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "trabajador_comprobante", $$v)
                      },
                      expression: "form.trabajador_comprobante"
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
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(" Monto en letras")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.monto_en_letra,
                      expression: "form.monto_en_letra"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: true,
                    placeholder: "Dígite monto en letra"
                  },
                  domProps: { value: _vm.form.monto_en_letra },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "monto_en_letra", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.monto_en_letra, function(message) {
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
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(" En concepto de")
                ]),
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
                  attrs: { placeholder: "Dígite un concepto" },
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
                  _vm.form.estado === 99 || _vm.form.estado === 1
                    ? [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.desactivar(_vm.form.id_comprobante)
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
                    { attrs: { to: { name: "listado-vales" }, tag: "button" } },
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Modificar ")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar vale provisional")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Administrar comprobantes")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de comprobantes")
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
              _vm._v("> Comprobantes")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-sm-2 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: {
                    to: { name: "registrar-comprobante" },
                    tag: "button"
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar comprobante\n\t\t\t\t\t")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-3 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "registrar-reembolso" }, tag: "button" }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar solicitud de reembolso\n\t\t\t\t\t")
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
                "col-md-7 sm-text-center form-inline justify-content-end",
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
                _vm._l(_vm.comprobantes, function(comprobante) {
                  return _c("tr", { key: comprobante.id_comprobante }, [
                    _c("td", [_vm._v(_vm._s(comprobante.numero))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(comprobante.concepto))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(comprobante.monto_entregado))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.formatDate(comprobante.fecha)))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      comprobante.estado === 1
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Elaborado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 2
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v("Revisado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 3
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-primary" }, [
                              _vm._v("En reembolso")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 4
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-primary" }, [
                              _vm._v("Reembolsado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 0
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
                                name: "actualizar-comprobante",
                                params: {
                                  id_comprobante: comprobante.id_comprobante
                                }
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
                            attrs: { disabled: _vm.descargando },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.downloadItem(
                                  "pdf",
                                  comprobante.id_comprobante
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
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.comprobantes.length
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
            items: _vm.comprobantes,
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
        _c("th", [_vm._v("Número")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Monto entregado")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Fecha")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=template&id=3767286e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=template&id=3767286e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Administrar vales")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de vales")
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
              _vm._v("> Vales")
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
                  attrs: { to: { name: "registrar-vale" }, tag: "button" }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar vale\n\t\t\t\t\t")
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
                _vm._l(_vm.comprobantes, function(comprobante) {
                  return _c("tr", { key: comprobante.id_comprobante }, [
                    _c("td", [_vm._v(_vm._s(comprobante.numero))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(comprobante.concepto))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          comprobante.trabajador_comprobante
                            ? comprobante.trabajador_comprobante.nombre_completo
                            : "N/D"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(comprobante.monto_entregado))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.formatDate(comprobante.fecha)))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      comprobante.estado === 99
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-grey" }, [
                              _vm._v("Borrador")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 1
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Emitido")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 2
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v("Revisado")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 3
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-primary" }, [
                              _vm._v("Comprobante")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      comprobante.estado === 0
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
                                name: "actualizar-vale",
                                params: {
                                  id_comprobante: comprobante.id_comprobante
                                }
                              },
                              tag: "a"
                            }
                          },
                          [_c("i", { staticClass: "icon-pencil" })]
                        ),
                        _vm._v(" "),
                        [2].indexOf(Number(comprobante.estado)) >= 0
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
                                      name: "registrar-comprobante-vale",
                                      params: {
                                        id_comprobante:
                                          comprobante.id_comprobante
                                      }
                                    },
                                    tag: "a"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-bandcamp" })]
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.comprobantes.length
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
            items: _vm.comprobantes,
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
        _c("th", [_vm._v("Número")]),
        _vm._v(" "),
        _c("th", [_vm._v("Concepto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Entregado a")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Fecha")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=template&id=6f9df124&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=template&id=6f9df124& ***!
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
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "div",
            { staticClass: "content-box" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Tipo de comprobante")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.form.tipo_comprobante,
                              expression: "form.tipo_comprobante",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass:
                            "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                          on: {
                            input: _vm.limpiar_campos,
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
                                "tipo_comprobante",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Comprobante de viatico")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Comprobante de gastos")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("Comprobante de vale")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
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
                          _vm._l(_vm.errorMessages.f_necesidad, function(
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
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Monto")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.monto_entregado,
                            expression: "form.monto_entregado"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: _vm.form.tipo_comprobante !== 2,
                          placeholder: "Dígite una cantidad",
                          type: "number"
                        },
                        domProps: { value: _vm.form.monto_entregado },
                        on: {
                          change: _vm.monto_letras,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "monto_entregado",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.monto_entregado, function(
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
                  _vm.form.tipo_comprobante === 1
                    ? [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Solicitud de viatico")
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "concepto",
                                  options: _vm.solicitudes
                                },
                                on: { change: _vm.cargar_viatico },
                                model: {
                                  value: _vm.form.solicitud,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "solicitud", $$v)
                                  },
                                  expression: "form.solicitud"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(_vm.errorMessages.solicitud, function(
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
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.tipo_comprobante === 3
                    ? [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Vale provisional")
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "concepto",
                                  options: _vm.vales
                                },
                                on: { change: _vm.cargar_vale },
                                model: {
                                  value: _vm.form.vale,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "vale", $$v)
                                  },
                                  expression: "form.vale"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(_vm.errorMessages.vale, function(
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
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Caja chica")
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "descripcion",
                            disabled: _vm.form.tipo_comprobante === 3,
                            options: _vm.cajas
                          },
                          model: {
                            value: _vm.form.caja,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "caja", $$v)
                            },
                            expression: "form.caja"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.caja, function(message) {
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
                  _vm.form.tipo_comprobante === 2
                    ? [
                        _vm.form.tipo_comprobante === 2
                          ? _c("div", { staticClass: "col-sm-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("Tipo de beneficiario")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: _vm.form.tipo_beneficiario,
                                        expression: "form.tipo_beneficiario",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass:
                                      "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return _vm._n(val)
                                          })
                                        _vm.$set(
                                          _vm.form,
                                          "tipo_beneficiario",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "1" } }, [
                                      _vm._v("Trabajador")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "2" } }, [
                                      _vm._v("Acreedor")
                                    ])
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.tipo_beneficiario === 1
                          ? _c("div", { staticClass: "col-sm-9" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v(" Trabajador ")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("typeahead", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        initial: _vm.form.trabajador,
                                        trim: 80,
                                        url: _vm.trabajadoresBusquedaURL
                                      },
                                      on: { input: _vm.seleccionarTrabajador }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(_vm.errorMessages.proveedor, function(
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.tipo_beneficiario === 2
                          ? _c("div", { staticClass: "col-sm-9" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v(" Acreedor ")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("typeahead", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        initial: _vm.form.proveedor,
                                        trim: 80,
                                        url: _vm.proveedoresBusquedaURL
                                      },
                                      on: { input: _vm.seleccionarBeneficiario }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(_vm.errorMessages.proveedor, function(
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.tipo_comprobante === 2
                          ? _c("div", { staticClass: "col-sm-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v(" Persona que recibe")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.persona_recibe,
                                      expression: "form.persona_recibe"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    placeholder:
                                      "Dígite el nombre de la persona que recibe el dinero"
                                  },
                                  domProps: { value: _vm.form.persona_recibe },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "persona_recibe",
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
                                    _vm.errorMessages.persona_recibe,
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
                        _vm.form.tipo_comprobante === 2
                          ? _c("div", { staticClass: "col-sm-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v(" Identificacion")
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
                                      value:
                                        _vm.form.identificacion_persona_recibe,
                                      expression:
                                        "form.identificacion_persona_recibe"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    placeholder:
                                      "Dígite la identificación de la persona que recibe"
                                  },
                                  domProps: {
                                    value:
                                      _vm.form.identificacion_persona_recibe
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "identificacion_persona_recibe",
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
                                    _vm.errorMessages
                                      .identificacion_persona_recibe,
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
                  _vm.form.tipo_comprobante !== 2
                    ? [
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Empleado")
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "nombre_completo",
                                  disabled: false,
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
                                _vm._l(_vm.errorMessages.trabajador, function(
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
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Monto en letras")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.monto_letras,
                            expression: "form.monto_letras"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: true,
                          placeholder: "Dígite monto en letra"
                        },
                        domProps: { value: _vm.form.monto_letras },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "monto_letras",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.monto_letras, function(
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" En concepto de")
                      ]),
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
                        attrs: {
                          disabled: false,
                          placeholder: "Dígite un concepto"
                        },
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
                ],
                2
              ),
              _vm._v(" "),
              _vm.form.tipo_comprobante !== 1
                ? [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v(" Nombre comercio")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.detalleForm.nombre_comercio,
                                  expression: "detalleForm.nombre_comercio"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Dígite el nombre del comercio"
                              },
                              domProps: {
                                value: _vm.detalleForm.nombre_comercio
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
                                    "nombre_comercio",
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
                                _vm.errorMessages.nombre_comercio,
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
                              _vm._v(" Numero RUC")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.detalleForm.numero_ruc,
                                  expression: "detalleForm.numero_ruc"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Dígite el objetivo del viatico"
                              },
                              domProps: { value: _vm.detalleForm.numero_ruc },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Factura")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.detalleForm.factura,
                                  expression: "detalleForm.factura"
                                }
                              ],
                              ref: "cantidad",
                              staticClass: "form-control",
                              attrs: { type: "text", min: "0" },
                              domProps: { value: _vm.detalleForm.factura },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
                                    "factura",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "error-messages" },
                              _vm._l(_vm.errorMessages.factura, function(
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
                              _vm._v("Monto")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: _vm.detalleForm.monto,
                                  expression: "detalleForm.monto",
                                  modifiers: { number: true }
                                }
                              ],
                              ref: "monto_viatico",
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: _vm.detalleForm.monto },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
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
                              _vm._l(_vm.errorMessages.monto, function(
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
                          _vm._l(_vm.errorMessages.detalleSolicitud, function(
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
                              _vm._l(_vm.form.detalleSolicitud, function(
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
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.nombre_comercio,
                                            expression: "item.nombre_comercio"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: item.nombre_comercio
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "nombre_comercio",
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
                                            "detalleSolicitud." +
                                              index +
                                              ".nombre_comercio"
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
                                            rawName: "v-model.text",
                                            value: item.numero_ruc,
                                            expression: "item.numero_ruc",
                                            modifiers: { text: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: item.numero_ruc },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
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
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." +
                                              index +
                                              ".numero_ruc"
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
                                            rawName: "v-model.text",
                                            value: item.factura,
                                            expression: "item.factura",
                                            modifiers: { text: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: true },
                                        domProps: { value: item.factura },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "factura",
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
                                            "detalleSolicitud." +
                                              index +
                                              ".factura"
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
                                            value: item.monto,
                                            expression: "item.monto",
                                            modifiers: { number: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "number", min: "0" },
                                        domProps: { value: item.monto },
                                        on: {
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
                                            "detalleSolicitud." +
                                              index +
                                              ".monto"
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
                              _c("td", { attrs: { colspan: "4" } }),
                              _vm._v(" "),
                              _c("td", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          _vm.calcular_total,
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
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-box-footer text-right" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "listado-comprobante" },
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
                        disabled: _vm.btnAction != "Registrar" ? true : false,
                        type: "button"
                      },
                      on: { click: _vm.registrar }
                    },
                    [_vm._v(_vm._s(_vm.btnAction))]
                  )
                ],
                1
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear nuevo comprobante")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar comprobante")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de comprobante")])])
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
        _c("th", [_vm._v("Nombre comercio")]),
        _vm._v(" "),
        _c("th", [_vm._v("RUC")]),
        _vm._v(" "),
        _c("th", [_vm._v("No.Factura")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=template&id=3d269f07&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=template&id=3d269f07& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "div",
            { staticClass: "content-box" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Tipo de comprobante")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.tipo_comprobante,
                            expression: "form.tipo_comprobante"
                          }
                        ],
                        staticClass:
                          "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                        attrs: { disabled: true },
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
                              _vm.form,
                              "tipo_comprobante",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Comprobante de viatico")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Comprobante de gastos")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("Vale provisional")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
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
                        _vm._l(_vm.errorMessages.f_necesidad, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Monto")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.monto_entregado,
                          expression: "form.monto_entregado"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: true,
                        placeholder: "Dígite una cantidad",
                        type: "number"
                      },
                      domProps: { value: _vm.form.monto_entregado },
                      on: {
                        change: _vm.monto_letras,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "monto_entregado",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.monto_entregado, function(
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Caja chica")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { label: "descripcion", options: _vm.cajas },
                        model: {
                          value: _vm.form.caja,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "caja", $$v)
                          },
                          expression: "form.caja"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.caja, function(message) {
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Nombre")]),
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Monto en letras")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.monto_letras,
                          expression: "form.monto_letras"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: true,
                        placeholder: "Dígite monto en letra"
                      },
                      domProps: { value: _vm.form.monto_letras },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "monto_letras",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.monto_letras, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" En concepto de")
                    ]),
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
                      attrs: { placeholder: "Dígite un concepto" },
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
              _vm.form.tipo_comprobante !== 1
                ? [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v(" Nombre comercio")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.objetivo",
                                  value: _vm.detalleForm.nombre_comercio,
                                  expression: "detalleForm.nombre_comercio",
                                  modifiers: { objetivo: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Dígite el nombre del comercio"
                              },
                              domProps: {
                                value: _vm.detalleForm.nombre_comercio
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
                                    "nombre_comercio",
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
                                _vm.errorMessages.nombre_comercio,
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
                              _vm._v(" Numero RUC")
                            ]),
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
                                  rawName: "v-model.objetivo",
                                  value: _vm.detalleForm.numero_ruc,
                                  expression: "detalleForm.numero_ruc",
                                  modifiers: { objetivo: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Dígite el objetivo del viatico"
                              },
                              domProps: { value: _vm.detalleForm.numero_ruc },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Factura")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: _vm.detalleForm.factura,
                                  expression: "detalleForm.factura",
                                  modifiers: { number: true }
                                }
                              ],
                              ref: "cantidad",
                              staticClass: "form-control",
                              attrs: { type: "text", min: "0" },
                              domProps: { value: _vm.detalleForm.factura },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
                                    "factura",
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
                              _vm._l(_vm.errorMessages.factura, function(
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
                              _vm._v("Monto")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: _vm.detalleForm.monto,
                                  expression: "detalleForm.monto",
                                  modifiers: { number: true }
                                }
                              ],
                              ref: "monto_viatico",
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: _vm.detalleForm.monto },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
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
                              _vm._l(_vm.errorMessages.monto, function(
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
                          _vm._l(_vm.errorMessages.detalleSolicitud, function(
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
                              _vm._l(_vm.form.detalleSolicitud, function(
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
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model.number",
                                            value: item.nombre_comercio,
                                            expression: "item.nombre_comercio",
                                            modifiers: { number: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: item.nombre_comercio
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "nombre_comercio",
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
                                            "detalleSolicitud." +
                                              index +
                                              ".nombre_comercio"
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
                                            value: "A#############",
                                            expression: "'A#############'"
                                          },
                                          {
                                            name: "model",
                                            rawName: "v-model.text",
                                            value: item.numero_ruc,
                                            expression: "item.numero_ruc",
                                            modifiers: { text: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: item.numero_ruc },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
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
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." +
                                              index +
                                              ".numero_ruc"
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
                                            rawName: "v-model.text",
                                            value: item.factura,
                                            expression: "item.factura",
                                            modifiers: { text: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: true },
                                        domProps: { value: item.factura },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "factura",
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
                                            "detalleSolicitud." +
                                              index +
                                              ".factura"
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
                                            value: item.monto,
                                            expression: "item.monto",
                                            modifiers: { number: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "number", min: "0" },
                                        domProps: { value: item.monto },
                                        on: {
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
                                            "detalleSolicitud." +
                                              index +
                                              ".monto"
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
                              _c("td", { attrs: { colspan: "4" } }),
                              _vm._v(" "),
                              _c("td", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          _vm.calcular_total,
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
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-box-footer text-right" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "listado-comprobante" },
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
                        disabled: _vm.btnAction != "Registrar" ? true : false,
                        type: "button"
                      },
                      on: { click: _vm.registrar }
                    },
                    [_vm._v(_vm._s(_vm.btnAction))]
                  )
                ],
                1
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear nuevo comprobante")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar comprobante")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de comprobante")])])
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
        _c("th", [_vm._v("Nombre comercio")]),
        _vm._v(" "),
        _c("th", [_vm._v("RUC")]),
        _vm._v(" "),
        _c("th", [_vm._v("No.Factura")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=template&id=f399aa3c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=template&id=f399aa3c& ***!
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
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "div",
            { staticClass: "content-box" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Tipo de comprobante")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.tipo_comprobante,
                            expression: "form.tipo_comprobante"
                          }
                        ],
                        staticClass:
                          "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                        attrs: { disabled: true },
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
                              _vm.form,
                              "tipo_comprobante",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Comprobante de viatico")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Comprobante de gastos")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("Comprobante de vale")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
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
                        _vm._l(_vm.errorMessages.f_necesidad, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v(" Monto")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.monto_entregado,
                          expression: "form.monto_entregado"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: true,
                        placeholder: "Dígite una cantidad",
                        type: "number"
                      },
                      domProps: { value: _vm.form.monto_entregado },
                      on: {
                        change: _vm.monto_letras,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "monto_entregado",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.monto_entregado, function(
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Caja chica")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "descripcion",
                          disabled: true,
                          options: _vm.cajas
                        },
                        model: {
                          value: _vm.form.caja,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "caja", $$v)
                          },
                          expression: "form.caja"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.caja, function(message) {
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Empleado")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "nombre_completo",
                          disabled: true,
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" Monto en letras")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.monto_letras,
                          expression: "form.monto_letras"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        disabled: true,
                        placeholder: "Dígite monto en letra"
                      },
                      domProps: { value: _vm.form.monto_letras },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "monto_letras",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.monto_letras, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(" En concepto de")
                    ]),
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
                      attrs: {
                        disabled: true,
                        placeholder: "Dígite un concepto"
                      },
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
              _vm.form.tipo_comprobante !== 1
                ? [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v(" Nombre comercio")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.objetivo",
                                  value: _vm.detalleForm.nombre_comercio,
                                  expression: "detalleForm.nombre_comercio",
                                  modifiers: { objetivo: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Dígite el nombre del comercio"
                              },
                              domProps: {
                                value: _vm.detalleForm.nombre_comercio
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
                                    "nombre_comercio",
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
                                _vm.errorMessages.nombre_comercio,
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
                              _vm._v(" Numero RUC")
                            ]),
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
                                  rawName: "v-model.objetivo",
                                  value: _vm.detalleForm.numero_ruc,
                                  expression: "detalleForm.numero_ruc",
                                  modifiers: { objetivo: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Dígite el objetivo del viatico"
                              },
                              domProps: { value: _vm.detalleForm.numero_ruc },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Factura")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: _vm.detalleForm.factura,
                                  expression: "detalleForm.factura",
                                  modifiers: { number: true }
                                }
                              ],
                              ref: "cantidad",
                              staticClass: "form-control",
                              attrs: { type: "text", min: "0" },
                              domProps: { value: _vm.detalleForm.factura },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
                                    "factura",
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
                              _vm._l(_vm.errorMessages.factura, function(
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
                              _vm._v("Monto")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: _vm.detalleForm.monto,
                                  expression: "detalleForm.monto",
                                  modifiers: { number: true }
                                }
                              ],
                              ref: "monto_viatico",
                              staticClass: "form-control",
                              attrs: { type: "number", min: "0" },
                              domProps: { value: _vm.detalleForm.monto },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.detalleForm,
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
                              _vm._l(_vm.errorMessages.monto, function(
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
                          _vm._l(_vm.errorMessages.detalleSolicitud, function(
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
                              _vm._l(_vm.form.detalleSolicitud, function(
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
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model.number",
                                            value: item.nombre_comercio,
                                            expression: "item.nombre_comercio",
                                            modifiers: { number: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: item.nombre_comercio
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "nombre_comercio",
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
                                            "detalleSolicitud." +
                                              index +
                                              ".nombre_comercio"
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
                                            value: "A#############",
                                            expression: "'A#############'"
                                          },
                                          {
                                            name: "model",
                                            rawName: "v-model.text",
                                            value: item.numero_ruc,
                                            expression: "item.numero_ruc",
                                            modifiers: { text: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: item.numero_ruc },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
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
                                        _vm._l(
                                          _vm.errorMessages[
                                            "detalleSolicitud." +
                                              index +
                                              ".numero_ruc"
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
                                            rawName: "v-model.text",
                                            value: item.factura,
                                            expression: "item.factura",
                                            modifiers: { text: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: true },
                                        domProps: { value: item.factura },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "factura",
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
                                            "detalleSolicitud." +
                                              index +
                                              ".factura"
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
                                            value: item.monto,
                                            expression: "item.monto",
                                            modifiers: { number: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "number", min: "0" },
                                        domProps: { value: item.monto },
                                        on: {
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
                                            "detalleSolicitud." +
                                              index +
                                              ".monto"
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
                              _c("td", { attrs: { colspan: "4" } }),
                              _vm._v(" "),
                              _c("td", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          _vm.calcular_total,
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
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-box-footer text-right" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "listado-comprobante" },
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
                        disabled: _vm.btnAction != "Registrar" ? true : false,
                        type: "button"
                      },
                      on: { click: _vm.registrar }
                    },
                    [_vm._v(_vm._s(_vm.btnAction))]
                  )
                ],
                1
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear nuevo comprobante")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar comprobante")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de comprobante")])])
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
        _c("th", [_vm._v("Nombre comercio")]),
        _vm._v(" "),
        _c("th", [_vm._v("RUC")]),
        _vm._v(" "),
        _c("th", [_vm._v("No.Factura")]),
        _vm._v(" "),
        _c("th", [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=template&id=743ffaa8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=template&id=743ffaa8& ***!
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "content-box" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
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
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Por: C$")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.monto_entregado,
                        expression: "form.monto_entregado"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      min: "0",
                      placeholder: "Dígite una cantidad",
                      type: "number"
                    },
                    domProps: { value: _vm.form.monto_entregado },
                    on: {
                      change: _vm.monto_letras,
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "monto_entregado",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.monto_entregado, function(
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Caja chica")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.cajas },
                      model: {
                        value: _vm.form.caja,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "caja", $$v)
                        },
                        expression: "form.caja"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.caja, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Empleado")]),
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
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Monto en letras")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.monto_letras,
                        expression: "form.monto_letras"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: true,
                      placeholder: "Dígite monto en letra"
                    },
                    domProps: { value: _vm.form.monto_letras },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "monto_letras", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.monto_letras, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" En concepto de")
                  ]),
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
                    attrs: { placeholder: "Dígite un concepto" },
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
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "listado-vales" }, tag: "button" } },
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear nuevo vale provisional")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar vale provisional")
      ])
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

/***/ "./resources/app/api/caja-chica-comprobante.js":
/*!*****************************************************!*\
  !*** ./resources/app/api/caja-chica-comprobante.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('modulo-tesoreria/caja-chica-comprobante/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerComprobante: function obtenerComprobante(data, cb, errorCb) {
    axios.post('modulo-tesoreria/caja-chica-comprobante/obtener-comprobante', data).then(function (response) {
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
    axios.post('modulo-tesoreria/caja-chica-comprobante/nuevo', data).then(function (response) {
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
    axios.post('modulo-tesoreria/caja-chica-comprobante/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarVale: function registrarVale(data, cb, errorCb) {
    axios.post('modulo-tesoreria/vales/registrarVale', data).then(function (response) {
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
    axios.put('modulo-tesoreria/caja-chica-comprobante/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarVale: function actualizarVale(data, cb, errorCb) {
    axios.put('modulo-tesoreria/vales/actualizarVale', data).then(function (response) {
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
    axios.put('modulo-tesoreria/caja-chica-comprobante/desactivar', data).then(function (response) {
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
    axios.put('modulo-tesoreria/caja-chica-comprobante/activar', data).then(function (response) {
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

/***/ "./resources/app/assets/custom-scripts/NumberAsString.js":
/*!***************************************************************!*\
  !*** ./resources/app/assets/custom-scripts/NumberAsString.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var Unidades = function Unidades(num) {
  switch (num) {
    case 1:
      return 'UN';

    case 2:
      return 'DOS';

    case 3:
      return 'TRES';

    case 4:
      return 'CUATRO';

    case 5:
      return 'CINCO';

    case 6:
      return 'SEIS';

    case 7:
      return 'SIETE';

    case 8:
      return 'OCHO';

    case 9:
      return 'NUEVE';

    default:
      return '';
  }
};

var Decenas = function Decenas(num) {
  var decena = Math.floor(num / 10);
  var unidad = num - decena * 10;

  switch (decena) {
    case 1:
      switch (unidad) {
        case 0:
          return 'DIEZ';

        case 1:
          return 'ONCE';

        case 2:
          return 'DOCE';

        case 3:
          return 'TRECE';

        case 4:
          return 'CATORCE';

        case 5:
          return 'QUINCE';

        default:
          return 'DIECI' + Unidades(unidad);
      }

    case 2:
      switch (unidad) {
        case 0:
          return 'VEINTE';

        default:
          return 'VEINTI' + Unidades(unidad);
      }

    case 3:
      return DecenasY('TREINTA', unidad);

    case 4:
      return DecenasY('CUARENTA', unidad);

    case 5:
      return DecenasY('CINCUENTA', unidad);

    case 6:
      return DecenasY('SESENTA', unidad);

    case 7:
      return DecenasY('SETENTA', unidad);

    case 8:
      return DecenasY('OCHENTA', unidad);

    case 9:
      return DecenasY('NOVENTA', unidad);

    case 0:
      return Unidades(unidad);
  }
};

var DecenasY = function DecenasY(strSin, numUnidades) {
  return numUnidades > 0 ? strSin + ' Y ' + Unidades(numUnidades) : strSin;
};

var Centenas = function Centenas(num) {
  var centenas = Math.floor(num / 100);
  var decenas = num - centenas * 100;

  switch (centenas) {
    case 1:
      if (decenas > 0) return 'CIENTO ' + Decenas(decenas);
      return 'CIEN';

    case 2:
      return 'DOSCIENTOS ' + Decenas(decenas);

    case 3:
      return 'TRESCIENTOS ' + Decenas(decenas);

    case 4:
      return 'CUATROCIENTOS ' + Decenas(decenas);

    case 5:
      return 'QUINIENTOS ' + Decenas(decenas);

    case 6:
      return 'SEISCIENTOS ' + Decenas(decenas);

    case 7:
      return 'SETECIENTOS ' + Decenas(decenas);

    case 8:
      return 'OCHOCIENTOS ' + Decenas(decenas);

    case 9:
      return 'NOVECIENTOS ' + Decenas(decenas);

    default:
      return Decenas(decenas);
  }
};

var Seccion = function Seccion(num, divisor, strSingular, strPlural) {
  var cientos = Math.floor(num / divisor);
  var resto = num - cientos * divisor;
  var letras = '';

  if (cientos > 0) {
    letras = cientos > 1 ? Centenas(cientos) + ' ' + strPlural : strSingular;
  } else {
    letras = strSingular;
  }

  if (resto > 0) {
    letras += '';
  }

  return letras;
};

var Miles = function Miles(num) {
  var divisor = 1000;
  var cientos = Math.floor(num / divisor);
  var resto = num - cientos * divisor;
  var strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
  var strCentenas = Centenas(resto);
  return strMiles == '' || cientos === 0 ? strCentenas : strMiles + ' ' + strCentenas;
};

var Millones = function Millones(num) {
  var divisor = 1000000;
  var cientos = Math.floor(num / divisor);
  var resto = num - cientos * divisor;
  var strMillones = Seccion(num, divisor, millon(num, true), millon(num, false));
  var strMiles = Miles(resto);
  return strMillones == '' || cientos === 0 ? strMiles : strMillones + ' ' + strMiles;
};

var millon = function millon(num, singular) {
  var letraMillon = singular ? 'UN MILLON' : 'MILLONES';

  if (num % 1000000 == 0) {
    letraMillon = letraMillon + ' DE';
  }

  return letraMillon;
};

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('numberasstring', function (num) {
  var centavos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var data = {
    numero: num,
    enteros: Math.floor(num),
    centavos: centavos ? Math.round(num * 100) - Math.floor(num) * 100 : 0,
    letrasCentavos: '',
    letrasMonedaPlural: 'CORDOBAS',
    letrasMonedaSingular: 'CORDOBA',
    letrasMonedaCentavoPlural: 'CENTAVOS',
    letrasMonedaCentavoSingular: 'CENTAVO'
  };

  if (data.centavos > 0) {
    var _centavos = data.centavos == 1 ? Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular : Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;

    data.letrasCentavos = 'CON ' + _centavos;
  }

  if (data.enteros == 0) {
    return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
  }

  if (data.enteros == 1) {
    return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
  } else {
    return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  numberasstring: function numberasstring(num, monedaSingular, monedaPlural) {
    var centavos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // currency = currency || {};
    var data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: centavos ? Math.round(num * 100) - Math.floor(num) * 100 : 0,
      letrasCentavos: '',
      letrasMonedaPlural: monedaPlural,
      letrasMonedaSingular: monedaSingular,
      letrasMonedaCentavoPlural: 'CENTAVOS',
      letrasMonedaCentavoSingular: 'CENTAVO'
    }; //console.log();

    /*if (data.centavos > 0) {
      let centavos = data.centavos == 1 ? Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular : Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural ;
      data.letrasCentavos = 'CON ' + centavos;
    }*/

    if (data.centavos > 0) {
      // console.log(data.centavos);
      // let centavos = data.centavos == 1 ? Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular : Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural ;
      data.letrasCentavos = 'CON ' + data.centavos + '/100';
    }

    if (data.enteros == 0) {
      return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    }

    if (data.enteros == 1) {
      return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
    } else {
      return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    }
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

/***/ "./resources/app/components/comprobante-caja-chica/Actualizar.vue":
/*!************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Actualizar.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_be070bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=be070bee& */ "./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=template&id=be070bee&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_be070bee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_be070bee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=template&id=be070bee&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=template&id=be070bee& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_be070bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=be070bee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Actualizar.vue?vue&type=template&id=be070bee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_be070bee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_be070bee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ActualizarVale.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ActualizarVale.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActualizarVale_vue_vue_type_template_id_4fb5890d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActualizarVale.vue?vue&type=template&id=4fb5890d& */ "./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=template&id=4fb5890d&");
/* harmony import */ var _ActualizarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActualizarVale.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ActualizarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActualizarVale.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ActualizarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActualizarVale_vue_vue_type_template_id_4fb5890d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActualizarVale_vue_vue_type_template_id_4fb5890d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/ActualizarVale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarVale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarVale.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=template&id=4fb5890d&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=template&id=4fb5890d& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_template_id_4fb5890d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ActualizarVale.vue?vue&type=template&id=4fb5890d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ActualizarVale.vue?vue&type=template&id=4fb5890d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_template_id_4fb5890d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActualizarVale_vue_vue_type_template_id_4fb5890d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Listado.vue":
/*!*********************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Listado.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_2b0a1ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true& */ "./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_2b0a1ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true& */ "./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_2b0a1ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_2b0a1ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b0a1ac5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2b0a1ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=style&index=0&id=2b0a1ac5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2b0a1ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2b0a1ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2b0a1ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2b0a1ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2b0a1ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_2b0a1ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Listado.vue?vue&type=template&id=2b0a1ac5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_2b0a1ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_2b0a1ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ListadoVale.vue":
/*!*************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ListadoVale.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoVale_vue_vue_type_template_id_3767286e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoVale.vue?vue&type=template&id=3767286e&scoped=true& */ "./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=template&id=3767286e&scoped=true&");
/* harmony import */ var _ListadoVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoVale.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoVale_vue_vue_type_style_index_0_id_3767286e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true& */ "./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoVale_vue_vue_type_template_id_3767286e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoVale_vue_vue_type_template_id_3767286e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3767286e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/ListadoVale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoVale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_style_index_0_id_3767286e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=style&index=0&id=3767286e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_style_index_0_id_3767286e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_style_index_0_id_3767286e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_style_index_0_id_3767286e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_style_index_0_id_3767286e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_style_index_0_id_3767286e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=template&id=3767286e&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=template&id=3767286e&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_template_id_3767286e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoVale.vue?vue&type=template&id=3767286e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/ListadoVale.vue?vue&type=template&id=3767286e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_template_id_3767286e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoVale_vue_vue_type_template_id_3767286e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Registrar.vue":
/*!***********************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Registrar.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_6f9df124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=6f9df124& */ "./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=template&id=6f9df124&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_6f9df124___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_6f9df124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=template&id=6f9df124&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=template&id=6f9df124& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6f9df124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=6f9df124& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/Registrar.vue?vue&type=template&id=6f9df124&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6f9df124___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_6f9df124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarSV.vue":
/*!*************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarSV.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarSV_vue_vue_type_template_id_3d269f07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarSV.vue?vue&type=template&id=3d269f07& */ "./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=template&id=3d269f07&");
/* harmony import */ var _RegistrarSV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarSV.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarSV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarSV.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarSV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarSV_vue_vue_type_template_id_3d269f07___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarSV_vue_vue_type_template_id_3d269f07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/RegistrarSV.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSV.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSV.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=template&id=3d269f07&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=template&id=3d269f07& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_template_id_3d269f07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarSV.vue?vue&type=template&id=3d269f07& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarSV.vue?vue&type=template&id=3d269f07&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_template_id_3d269f07___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarSV_vue_vue_type_template_id_3d269f07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarV.vue":
/*!************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarV.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarV_vue_vue_type_template_id_f399aa3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarV.vue?vue&type=template&id=f399aa3c& */ "./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=template&id=f399aa3c&");
/* harmony import */ var _RegistrarV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarV.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarV.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarV_vue_vue_type_template_id_f399aa3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarV_vue_vue_type_template_id_f399aa3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/RegistrarV.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarV.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarV.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=template&id=f399aa3c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=template&id=f399aa3c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_template_id_f399aa3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarV.vue?vue&type=template&id=f399aa3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarV.vue?vue&type=template&id=f399aa3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_template_id_f399aa3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarV_vue_vue_type_template_id_f399aa3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarVale.vue":
/*!***************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarVale.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarVale_vue_vue_type_template_id_743ffaa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarVale.vue?vue&type=template&id=743ffaa8& */ "./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=template&id=743ffaa8&");
/* harmony import */ var _RegistrarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarVale.vue?vue&type=script&lang=js& */ "./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarVale.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarVale_vue_vue_type_template_id_743ffaa8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarVale_vue_vue_type_template_id_743ffaa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/comprobante-caja-chica/RegistrarVale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVale.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=template&id=743ffaa8&":
/*!**********************************************************************************************************!*\
  !*** ./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=template&id=743ffaa8& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_template_id_743ffaa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarVale.vue?vue&type=template&id=743ffaa8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/comprobante-caja-chica/RegistrarVale.vue?vue&type=template&id=743ffaa8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_template_id_743ffaa8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarVale_vue_vue_type_template_id_743ffaa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);