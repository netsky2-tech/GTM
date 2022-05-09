(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trabajadores"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Actualizar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/trabajadores */ "./resources/app/api/trabajadores.js");
/* harmony import */ var _api_areas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/areas */ "./resources/app/api/areas.js");
/* harmony import */ var _api_niveles_academicos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/niveles_academicos */ "./resources/app/api/niveles_academicos.js");
/* harmony import */ var _api_niveles_estudios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/niveles_estudios */ "./resources/app/api/niveles_estudios.js");
/* harmony import */ var _api_datos_medicos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/datos_medicos */ "./resources/app/api/datos_medicos.js");
/* harmony import */ var _api_cargos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/cargos */ "./resources/app/api/cargos.js");
/* harmony import */ var _api_departamentos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/departamentos */ "./resources/app/api/departamentos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_parentesco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/parentesco */ "./resources/app/api/parentesco.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_8___default.a,
      format: "dd-MM-yyyy",
      areas: [],
      cargos: [],
      departamentos: [],
      municipios: [],
      niveles_academicos: [],
      niveles_estudios: [],
      parentescos: [],
      detalleForm: {
        nombres: '',
        apellidos: '',
        fecha_nacimiento: moment(new Date()).format("YYYY-MM-DD"),
        sexo: '',
        id_parentesco: '',
        tipo_identificacion: '',
        no_identificacion: '',
        no_telefonico: ''
      },
      form: {
        trabajador_grupo_familiar: [],
        trabajador_ingreso_deduccion: [],
        codigo: '',
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        cedula: '',
        fecha_ingreso: moment(new Date()).format("YYYY-MM-DD"),
        fecha_egreso: moment(new Date()).format("YYYY-MM-DD"),
        trabajador_area: '',
        trabajador_cargo: '',
        tipo_contrato: '',
        no_inss: '',
        salario_basico: '',
        trabajador_nivel_academico: '',
        trabajador_nivel_estudio: '',
        trabajador_datos_medicos: [],
        trabajador_detalles: [],

        /*sexo: '',
        estado_civil: '',
        departamento: '',
        municipio: '',
        email: '',
        telefono: '',
         direccion: '',
        notifica: '',
        telefono_notifica: '',*/
        imagen: ''
      },
      fechax: new Date(),
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    obtenerTodosCargos: function obtenerTodosCargos() {
      var self = this;
      _api_cargos__WEBPACK_IMPORTED_MODULE_5__["default"].obtenerTodos(function (data) {
        self.cargos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodasAreas: function obtenerTodasAreas() {
      var self = this;
      _api_areas__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodas(function (data) {
        self.areas = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosDepartamentos: function obtenerTodosDepartamentos() {
      var self = this;
      _api_departamentos__WEBPACK_IMPORTED_MODULE_6__["default"].obtenerTodos(function (data) {
        self.departamentos = data; //console.log(self.departamentos);
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosParentesco: function obtenerTodosParentesco() {
      var self = this;
      _api_parentesco__WEBPACK_IMPORTED_MODULE_9__["default"].obtenerTodas(function (data) {
        self.parentescos = data;
      }, function (err) {
        console.log(err);
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_ingreso = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.form.fecha_egreso = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectNac: function onDateSelectNac(date) {
      //console.log(date); //
      this.detalleForm.fecha_nacimiento = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerMunicipios: function obtenerMunicipios() {
      var self = this;
      self.form.municipio = '';
      if (self.form.departamento.municipios_departamento) self.municipios = self.form.departamento.municipios_departamento;
    },
    obtenerTodosNivelesAcademicos: function obtenerTodosNivelesAcademicos() {
      var self = this;
      _api_niveles_academicos__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodas(function (data) {
        self.niveles_academicos = data; //console.log(self.departamentos);
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosNivelesEstudios: function obtenerTodosNivelesEstudios() {
      var self = this;
      _api_niveles_estudios__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodas(function (data) {
        self.niveles_estudios = data; //console.log(self.departamentos);
      }, function (err) {
        console.log(err);
      });
    },
    obtenerDatosMedicos: function obtenerDatosMedicos() {
      var self = this;
      _api_datos_medicos__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerTodas(function (data) {
        self.trabajador_datos_medicos = data; //console.log(self.departamentos);
      }, function (err) {
        console.log(err);
      });
    },

    /*            obtenerImg() {
                    var imagen = $('input[name="imagen"]').val();
                    if (JSON.parse(imagen).length) {
                        return imagen;
                    } else {
                        return "";
                    }
                },*/
    obtenerTrabajador: function obtenerTrabajador() {
      var _this = this;

      var self = this;
      _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTrabajador({
        id_trabajador: this.$route.params.id_trabajador
      }, function (data) {
        self.form = data;

        if (self.form.imagen !== '') {
          try {
            self.uploader.set_files(data.form.imagen);
          } catch (Exception) {
            console.log('error asignando imagen');
          }
        }

        if (self.form.trabajador_detalles.trabajador_municipio) {
          self.form.departamento = self.form.trabajador_detalles.trabajador_municipio.departamento_municipio;
          self.municipios = self.form.trabajador_detalles.trabajador_municipio.departamento_municipio.municipios_departamento;
          self.form.municipio = self.form.trabajador_detalles.trabajador_municipio;
        }

        self.loading = false;
      }, function (err) {
        console.log(err); //alertify.error(err.id[0], 5);

        _this.$router.push({
          name: 'listado-trabajadores'
        });
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.no_identificacion) {
        var i = 0;
        var keyx = 0;

        if (self.form.trabajador_grupo_familiar) {
          self.form.trabajador_grupo_familiar.forEach(function (fila, key) {
            if (self.detalleForm.no_identificacion === fila.no_identificacion) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          this.form.trabajador_grupo_familiar.push({
            nombres: this.detalleForm.nombres,
            apellidos: this.detalleForm.apellidos,
            sexo: this.detalleForm.sexo,
            id_parentesco: this.detalleForm.parentesco !== "" && this.detalleForm.parentesco !== null ? this.detalleForm.parentesco.id_parentesco : null,
            fecha_nacimiento: this.detalleForm.fecha_nacimiento,
            tipo_identificacion: this.detalleForm.tipo_identificacion,
            no_identificacion: this.detalleForm.no_identificacion,
            no_telefonico: this.detalleForm.no_telefonico
          }); //this.detalleForm.fecha_viatico='';

          this.detalleForm.nombres = '';
          this.detalleForm.apellidos = '';
          this.detalleForm.sexo = '';
          this.detalleForm.parentesco = '';
          this.detalleForm.fecha_nacimiento = '';
          this.detalleForm.tipo_identificacion = '';
          this.detalleForm.no_identificacion = '';
          this.detalleForm.no_telefonico = '';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.trabajador_grupo_familiar.length >= 1) {
        this.form.trabajador_grupo_familiar.splice(index, 1);
      } else {
        this.form.trabajador_grupo_familiar = [];
      }
    },
    actualizar: function actualizar() {
      var _this2 = this;

      var self = this;
      self.loading = true;
      self.btnAction = 'Guardando, espere...';
      /*   self.form.imagen = this.obtenerImg();*/

      _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        alertify.success("Datos del trabajador actualizados correctamente", 5);

        _this2.$router.push({
          name: 'listado-trabajadores'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Guardar';
      });
    },
    desactivar: function desactivar(areaId) {
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
          _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_trabajador: areaId
          }, function (data) {
            alertify.warning("Trabajador desactivado correctamente", 5);

            _this3.$router.push({
              name: 'listado-trabajadores'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },
    activar: function activar(areaId) {
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
          _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_trabajador: areaId
          }, function (data) {
            alertify.success("Trabajador activado correctamente", 5);

            _this4.$router.push({
              name: 'listado-trabajadores'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
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
    this.obtenerTodosCargos();
    this.obtenerTodasAreas();
    this.obtenerTodosDepartamentos();
    this.obtenerTrabajador();
    this.obtenerTodosNivelesAcademicos();
    this.obtenerTodosNivelesEstudios();
    this.obtenerTodosParentesco();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Listado.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/trabajadores */ "./resources/app/api/trabajadores.js");
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
          field: 'primer_nombre',
          value: '',
          status: 0
        }
      },
      trabajadores: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtenerTrabajadores: function obtenerTrabajadores() {
      var self = this;
      self.loading = true;
      _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.trabajadores = data.rows;
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
      this.obtenerTrabajadores();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerTrabajadores();
    },
    downloadItem: function downloadItem(url) {
      var self = this;
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
        link.download = 'ExpedientePersonal.pdf';
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
      /*}else{
      	alertify.warning("Espere a que se complete la descarga anterior",5);
      }*/
    }
  },

  /*components: {
  	'pagination': Pagination
  },*/
  mounted: function mounted() {
    this.obtenerTrabajadores();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Registrar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/trabajadores */ "./resources/app/api/trabajadores.js");
/* harmony import */ var _api_areas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/areas */ "./resources/app/api/areas.js");
/* harmony import */ var _api_cargos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/cargos */ "./resources/app/api/cargos.js");
/* harmony import */ var _api_niveles_academicos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/niveles_academicos */ "./resources/app/api/niveles_academicos.js");
/* harmony import */ var _api_parentesco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/parentesco */ "./resources/app/api/parentesco.js");
/* harmony import */ var _api_niveles_estudios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/niveles_estudios */ "./resources/app/api/niveles_estudios.js");
/* harmony import */ var _api_datos_medicos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/datos_medicos */ "./resources/app/api/datos_medicos.js");
/* harmony import */ var _api_departamentos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/departamentos */ "./resources/app/api/departamentos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_9__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_8___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_9___default.a,
      format: "dd-MM-yyyy",
      areas: [],
      niveles_academicos: [],
      niveles_estudios: [],
      cargos: [],
      departamentos: [],
      municipios: [],
      detalleForm: {
        parentescos: [],
        nombres: '',
        apellidos: '',
        fecha_nacimiento: moment(new Date()).format("YYYY-MM-DD"),
        sexoGrupo: '',
        parentesco: '',
        tipo_identificacion: '',
        no_identificacion: '',
        no_telefonico: ''
      },
      form: {
        detalleGrupo: [],
        codigo: '',
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        cedula: '',
        fecha_ingreso: moment(new Date()).format("YYYY-MM-DD"),
        fecha_egreso: moment(new Date()).format("YYYY-MM-DD"),
        area: '',
        nivel: '',
        nivel_estudio: '',
        seguroInss: '',
        seguroMedico: '',
        inssIpss: '',
        inssIpssrp: '',
        centroPrivado: '',
        grupoSanguineo: '',
        alergia: '',
        alergiaDescripcion: '',
        diabetes: '',
        hipertension: '',
        cardiaca: '',
        pesoLibras: '',
        altura: '',
        asma: '',
        otraEnfermedad: '',
        nombreMedico: '',
        telefonoMedico: '',
        contactoEmergencia: '',
        telefonoEmergencia: '',
        observaciones: '',
        cargo: '',
        tipo_contrato: '',
        no_inss: '',
        salario_basico: '',
        sexo: '',
        estado_civil: '',
        departamento: '',
        municipio: '',
        email: '',
        telefono: '',
        direccion: '',
        notifica: '',
        telefono_notifica: '',
        imagen: ''
      },
      fechax: new Date(),
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  methods: {
    obtenerTodosCargos: function obtenerTodosCargos() {
      var self = this;
      _api_cargos__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodos(function (data) {
        self.cargos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosParentesco: function obtenerTodosParentesco() {
      var self = this;
      _api_parentesco__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerTodas(function (data) {
        self.detalleForm.parentescos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodasAreas: function obtenerTodasAreas() {
      var self = this;
      _api_areas__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodas(function (data) {
        self.areas = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosDepartamentos: function obtenerTodosDepartamentos() {
      var self = this;
      _api_departamentos__WEBPACK_IMPORTED_MODULE_7__["default"].obtenerTodos(function (data) {
        self.departamentos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosNivelesAcademicos: function obtenerTodosNivelesAcademicos() {
      var self = this;
      _api_niveles_academicos__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodas(function (data) {
        self.niveles_academicos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosNivelesEstudios: function obtenerTodosNivelesEstudios() {
      var self = this;
      _api_niveles_estudios__WEBPACK_IMPORTED_MODULE_5__["default"].obtenerTodas(function (data) {
        self.niveles_estudios = data;
      }, function (err) {
        console.log(err);
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_ingreso = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelect2: function onDateSelect2(date) {
      //console.log(date); //
      this.form.fecha_egreso = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectNac: function onDateSelectNac(date) {
      //console.log(date); //
      this.detalleForm.fecha_nacimiento = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerMunicipios: function obtenerMunicipios() {
      var self = this;
      self.form.municipio = null;
      if (self.form.departamento.municipios_departamento) self.municipios = self.form.departamento.municipios_departamento;
    },
    obtenerImg: function obtenerImg() {
      var imagen = $('input[name="imagen"]').val();

      if (JSON.parse(imagen).length) {
        return imagen;
      } else {
        return "";
      }
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (this.detalleForm.no_identificacion) {
        var i = 0;
        var keyx = 0;

        if (self.form.detalleGrupo) {
          self.form.detalleGrupo.forEach(function (fila, key) {
            if (self.detalleForm.no_identificacion === fila.no_identificacion) {
              i++;
              keyx = key;
            }
          });
        }

        if (i === 0) {
          //this.detalleForm.parentescos.descripcion = this.detalleForm.parentescos.text;
          this.form.detalleGrupo.push({
            nombres: this.detalleForm.nombres,
            apellidos: this.detalleForm.apellidos,
            sexoGrupo: this.detalleForm.sexoGrupo,
            parentesco: this.detalleForm.parentesco,
            fecha_nacimiento: this.detalleForm.fecha_nacimiento,
            tipo_identificacion: this.detalleForm.tipo_identificacion,
            no_identificacion: this.detalleForm.no_identificacion,
            no_telefonico: this.detalleForm.no_telefonico
          }); //this.detalleForm.fecha_viatico='';

          this.detalleForm.nombres = '';
          this.detalleForm.apellidos = '';
          this.detalleForm.sexoGrupo = '';
          this.detalleForm.parentesco = '';
          this.detalleForm.fecha_nacimiento = '';
          this.detalleForm.tipo_identificacion = '';
          this.detalleForm.no_identificacion = '';
          this.detalleForm.no_telefonico = '';
        } else {
          alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
        }
      } else {
        alertify.warning("Los campos no pueden estar vacíos", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleGrupo.length >= 1) {
        this.form.detalleGrupo.splice(index, 1);
      } else {
        this.form.detalleGrupo = [];
      }
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Guardando, espere...';
      self.form.imagen = this.obtenerImg();
      self.loading = true;
      _api_trabajadores__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.loading = false;
        alertify.success("Datos del trabajador registrados correctamente", 5);

        _this.$router.push({
          name: 'listado-trabajadores'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Guardar';
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
    this.obtenerTodosCargos();
    this.obtenerTodasAreas();
    this.obtenerTodosDepartamentos();
    this.obtenerTodosNivelesAcademicos();
    this.obtenerTodosNivelesEstudios();
    this.obtenerTodosParentesco();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-41ca9ffe] {\n  min-width: 120px;\n}\n.table a[data-v-41ca9ffe] {\n  color: #2675dc;\n}\n.table .table-number[data-v-41ca9ffe] {\n  width: 60px;\n}\n.table .action[data-v-41ca9ffe] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=template&id=4ecbbe30&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Actualizar.vue?vue&type=template&id=4ecbbe30& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c(
          "vue-tabs",
          [
            _c(
              "v-tab",
              { attrs: { title: "Datos generales del trabajador" } },
              [
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Código colaborador")
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
                        attrs: {
                          placeholder: "Código trabajador",
                          type: "text",
                          disabled: ""
                        },
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
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Primer nombre")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.primer_nombre,
                            expression: "form.primer_nombre"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Primer Nombre", type: "text" },
                        domProps: { value: _vm.form.primer_nombre },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "primer_nombre",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.primer_nombre, function(
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
                        _vm._v(" Segundo Nombre")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.segundo_nombre,
                            expression: "form.segundo_nombre"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Segundo Nombre", type: "text" },
                        domProps: { value: _vm.form.segundo_nombre },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "segundo_nombre",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.segundo_nombre, function(
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
                        _vm._v(" Primer apellido")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.primer_apellido,
                            expression: "form.primer_apellido"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Primer apellido", type: "text" },
                        domProps: { value: _vm.form.primer_apellido },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "primer_apellido",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.primer_apellido, function(
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
                        _vm._v(" Segundo apellido")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.segundo_apellido,
                            expression: "form.segundo_apellido"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Segundo apellido",
                          type: "text"
                        },
                        domProps: { value: _vm.form.segundo_apellido },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "segundo_apellido",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.segundo_apellido, function(
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
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Cédula")]),
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
                            value: _vm.form.cedula,
                            expression: "form.cedula"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Ingrese Identificación"
                        },
                        domProps: { value: _vm.form.cedula },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "cedula", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.cedula, function(message) {
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
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Sexo")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.trabajador_detalles.sexo,
                              expression: "form.trabajador_detalles.sexo"
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
                                  return val
                                })
                              _vm.$set(
                                _vm.form.trabajador_detalles,
                                "sexo",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "M" } }, [
                            _vm._v("Masculino")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "F" } }, [
                            _vm._v("Femenino")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(
                          _vm.errorMessages["trabajador_detalles.sexo"],
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
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Estado Civil")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.trabajador_detalles.estado_civil,
                              expression:
                                "form.trabajador_detalles.estado_civil"
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
                                  return val
                                })
                              _vm.$set(
                                _vm.form.trabajador_detalles,
                                "estado_civil",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "S" } }, [
                            _vm._v("Soltero/a")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "C" } }, [
                            _vm._v("Casado/a")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "V" } }, [
                            _vm._v("Viudo/a")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "D" } }, [
                            _vm._v("Divorciado/a")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(
                          _vm.errorMessages["trabajador_detalles.estado_civil"],
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
                  _c("div", { staticClass: "col-sm-2" }, [
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
                          _vm._l(_vm.errorMessages.departamento, function(
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
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Municipio")
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.municipios,
                            label: "descripcion"
                          },
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
                          _vm._l(_vm.errorMessages.municipio, function(
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
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Email")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.trabajador_detalles.email,
                            expression: "form.trabajador_detalles.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Ingrese Email", type: "email" },
                        domProps: { value: _vm.form.trabajador_detalles.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.trabajador_detalles,
                              "email",
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
                          _vm.errorMessages["trabajador_detalles.email"],
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
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Teléfono")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.trabajador_detalles.telefono,
                            expression: "form.trabajador_detalles.telefono"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Ingrese télefono" },
                        domProps: {
                          value: _vm.form.trabajador_detalles.telefono
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.trabajador_detalles,
                              "telefono",
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
                          _vm.errorMessages["trabajador_detalles.telefono"],
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Emergencias Notificar a:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.trabajador_detalles.notifica,
                            expression: "form.trabajador_detalles.notifica"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Ingrese contacto",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.form.trabajador_detalles.notifica
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.trabajador_detalles,
                              "notifica",
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
                          _vm.errorMessages["trabajador_detalles.notifica"],
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
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Télefono Notificar:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value:
                              _vm.form.trabajador_detalles.telefono_notifica,
                            expression:
                              "form.trabajador_detalles.telefono_notifica"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Ingrese télefono",
                          type: "number"
                        },
                        domProps: {
                          value: _vm.form.trabajador_detalles.telefono_notifica
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.trabajador_detalles,
                              "telefono_notifica",
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
                            "trabajador_detalles.telefono_notifica"
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
                  _c("div", { staticClass: "col-sm-8" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Dirección")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.trabajador_detalles.direccion,
                            expression: "form.trabajador_detalles.direccion"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Ingrese dirección" },
                        domProps: {
                          value: _vm.form.trabajador_detalles.direccion
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.trabajador_detalles,
                              "direccion",
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
                          _vm.errorMessages["trabajador_detalles.direccion"],
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" })
              ]
            )
          ],
          1
        ),
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
                  _vm.form.activo == 1
                    ? [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.desactivar(_vm.form.id_trabajador)
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
                                return _vm.activar(_vm.form.id_trabajador)
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
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "listado-trabajadores" },
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
                    [_vm._v(_vm._s(_vm.btnAction) + "\n             ")]
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
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Modificar un colaborador")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar datos de un colaborador")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=template&id=41ca9ffe&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Listado.vue?vue&type=template&id=41ca9ffe&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Control de colaboradores")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de colaboradores")
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
                  attrs: { to: { name: "pagina-principal-administracion" } }
                },
                [_vm._v(" Módulo administración")]
              ),
              _vm._v("> Colaboradores")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-4 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "registrar-trabajador" }, tag: "button" }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Nuevo colaborador\n\t\t\t\t\t")
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
                  _vm.obtenerTrabajadores()
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
                  _c("option", { attrs: { value: "primer_nombre" } }, [
                    _vm._v("Nombres")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "primer_apellido" } }, [
                    _vm._v("Primer Apellido")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "segundo_apellido" } }, [
                    _vm._v("Segundo Apellido")
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
                  staticClass: "btn btn-primary",
                  on: {
                    click: function($event) {
                      _vm.filter.page = 1
                      _vm.obtenerTrabajadores()
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
                _vm._l(_vm.trabajadores, function(trabajador) {
                  return _c("tr", { key: trabajador.id_trabajador }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(trabajador.codigo))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          trabajador.primer_nombre +
                            " " +
                            (trabajador.segundo_nombre
                              ? trabajador.segundo_nombre
                              : "") +
                            " " +
                            trabajador.primer_apellido +
                            " " +
                            (trabajador.segundo_apellido
                              ? trabajador.segundo_apellido
                              : "")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(trabajador.cedula))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      trabajador.activo
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
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "actualizar-trabajador",
                                params: {
                                  id_trabajador: trabajador.id_trabajador
                                }
                              },
                              tag: "a"
                            }
                          },
                          [_c("i", { staticClass: "icon-pencil" })]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.trabajadores.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "8" } },
                        [_vm._v("Sin registros")]
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
            items: _vm.trabajadores,
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
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre completo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cedula")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=template&id=4f5be7c6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/trabajadores/Registrar.vue?vue&type=template&id=4f5be7c6& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c(
          "vue-tabs",
          [
            _c(
              "v-tab",
              { attrs: { title: "Datos generales del colaborador" } },
              [
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Primer nombre")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.primer_nombre,
                            expression: "form.primer_nombre"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Primer Nombre", type: "text" },
                        domProps: { value: _vm.form.primer_nombre },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "primer_nombre",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.primer_nombre, function(
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
                        _vm._v(" Segundo Nombre")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.segundo_nombre,
                            expression: "form.segundo_nombre"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Segundo Nombre", type: "text" },
                        domProps: { value: _vm.form.segundo_nombre },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "segundo_nombre",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.segundo_nombre, function(
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
                        _vm._v(" Primer apellido")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.primer_apellido,
                            expression: "form.primer_apellido"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Primer apellido", type: "text" },
                        domProps: { value: _vm.form.primer_apellido },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "primer_apellido",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.primer_apellido, function(
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
                        _vm._v(" Segundo apellido")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.segundo_apellido,
                            expression: "form.segundo_apellido"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Segundo apellido",
                          type: "text"
                        },
                        domProps: { value: _vm.form.segundo_apellido },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "segundo_apellido",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.segundo_apellido, function(
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
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Cédula")]),
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
                            value: _vm.form.cedula,
                            expression: "form.cedula"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Ingrese Identificación"
                        },
                        domProps: { value: _vm.form.cedula },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "cedula", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.cedula, function(message) {
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
                _c("div", { staticClass: "row" }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Sexo")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.sexo,
                              expression: "form.sexo"
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
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "sexo",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "M" } }, [
                            _vm._v("Masculino")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "F" } }, [
                            _vm._v("Femenino")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.sexo, function(message) {
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
                        _vm._v("Estado Civil")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.estado_civil,
                              expression: "form.estado_civil"
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
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "estado_civil",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "S" } }, [
                            _vm._v("Soltero/a")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "C" } }, [
                            _vm._v("Casado/a")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "V" } }, [
                            _vm._v("Viudo/a")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "D" } }, [
                            _vm._v("Divorciado/a")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.estado_civil, function(
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
                          _vm._l(_vm.errorMessages.departamento, function(
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
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Municipio")
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.municipios,
                            label: "descripcion"
                          },
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
                          _vm._l(_vm.errorMessages.municipio, function(
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
                      _c("label", { attrs: { for: "" } }, [_vm._v(" Email")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "Ingrese Email", type: "email" },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.email, function(message) {
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
                        _vm._v(" Teléfono")
                      ]),
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
                        attrs: { placeholder: "Ingrese télefono" },
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
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Emergencias Notificar a:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.notifica,
                            expression: "form.notifica"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Ingrese contacto",
                          type: "text"
                        },
                        domProps: { value: _vm.form.notifica },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "notifica", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.notifica, function(message) {
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
                        _vm._v(" Télefono Notificar:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.telefono_notifica,
                            expression: "form.telefono_notifica"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Ingrese télefono",
                          type: "number"
                        },
                        domProps: { value: _vm.form.telefono_notifica },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "telefono_notifica",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.telefono_notifica, function(
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
                  _c("div", { staticClass: "col-sm-8" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(" Dirección")
                      ]),
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
                        attrs: { placeholder: "Ingrese dirección" },
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
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-box-footer text-right" },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "listado-trabajadores" }, tag: "button" }
              },
              [
                _c(
                  "button",
                  { staticClass: "btn btn-default", attrs: { type: "button" } },
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Registrar nuevo colaborador")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario de nuevo colaborador")
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

/***/ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/locale/translations/es.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return new(function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=e,this.months=n,this.monthsAbbr=r,this.days=o,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,o;return n=t,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&e(n.prototype,r),o&&e(n,o),t}())("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])});


/***/ }),

/***/ "./resources/app/api/areas.js":
/*!************************************!*\
  !*** ./resources/app/api/areas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('areas/obtener-todas').then(function (response) {
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
    axios.post('areas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerArea: function obtenerArea(data, cb, errorCb) {
    axios.post('areas/obtener-area', data).then(function (response) {
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
    axios.post('areas/registrar', data).then(function (response) {
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
    axios.put('areas/actualizar', data).then(function (response) {
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
    axios.put('areas/desactivar', data).then(function (response) {
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
    axios.put('areas/activar', data).then(function (response) {
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

/***/ "./resources/app/api/cargos.js":
/*!*************************************!*\
  !*** ./resources/app/api/cargos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('rrhh/cargos/obtener-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCargos: function obtenerCargos(data, cb, errorCb) {
    axios.post('rrhh/cargos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCargo: function obtenerCargo(data, cb, errorCb) {
    axios.post('rrhh/cargos/obtener-cargo', data).then(function (response) {
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
    axios.post('rrhh/cargos/registrar', data).then(function (response) {
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
    axios.put('rrhh/cargos/actualizar', data).then(function (response) {
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
    axios.put('rrhh/cargos/desactivar', data).then(function (response) {
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
    axios.put('rrhh/cargos/activar', data).then(function (response) {
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

/***/ "./resources/app/api/datos_medicos.js":
/*!********************************************!*\
  !*** ./resources/app/api/datos_medicos.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('datos-medicos/obtener-todas').then(function (response) {
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
    axios.post('datos-medicos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerDatoMedico: function obtenerDatoMedico(data, cb, errorCb) {
    axios.post('datos-medicos/obtener-datos', data).then(function (response) {
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

/***/ "./resources/app/api/niveles_academicos.js":
/*!*************************************************!*\
  !*** ./resources/app/api/niveles_academicos.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('nivel-academico/obtener-todas').then(function (response) {
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
    axios.post('nivel-academico/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNivelAcademico: function obtenerNivelAcademico(data, cb, errorCb) {
    axios.post('nivel-academico/obtener-nivel', data).then(function (response) {
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
    axios.post('nivel-academico/registrar', data).then(function (response) {
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
    axios.put('nivel-academico/actualizar', data).then(function (response) {
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
    axios.put('nivel-academico/desactivar', data).then(function (response) {
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
    axios.put('nivel-academico/activar', data).then(function (response) {
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

/***/ "./resources/app/api/niveles_estudios.js":
/*!***********************************************!*\
  !*** ./resources/app/api/niveles_estudios.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('nivel-estudio/obtener-todas').then(function (response) {
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
    axios.post('nivel-estudio/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNivelAcademico: function obtenerNivelAcademico(data, cb, errorCb) {
    axios.post('nivel-estudio/obtener-nivel', data).then(function (response) {
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
    axios.post('nivel-estudio/registrar', data).then(function (response) {
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
    axios.put('nivel-estudio/actualizar', data).then(function (response) {
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
    axios.put('nivel-estudio/desactivar', data).then(function (response) {
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
    axios.put('nivel-estudio/activar', data).then(function (response) {
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

/***/ "./resources/app/api/parentesco.js":
/*!*****************************************!*\
  !*** ./resources/app/api/parentesco.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('parentesco/obtener-todas').then(function (response) {
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
    axios.post('parentesco/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerParentesco: function obtenerParentesco(data, cb, errorCb) {
    axios.post('parentesco/obtener-datos', data).then(function (response) {
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
  }
});

/***/ }),

/***/ "./resources/app/api/trabajadores.js":
/*!*******************************************!*\
  !*** ./resources/app/api/trabajadores.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('trabajadores/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTrabajador: function obtenerTrabajador(data, cb, errorCb) {
    axios.post('trabajadores/obtener-trabajador', data).then(function (response) {
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
    axios.post('trabajadores/registrar', data).then(function (response) {
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
    axios.put('trabajadores/actualizar', data).then(function (response) {
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
    axios.put('trabajadores/desactivar', data).then(function (response) {
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
    axios.put('trabajadores/activar', data).then(function (response) {
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

/***/ "./resources/app/components/trabajadores/Actualizar.vue":
/*!**************************************************************!*\
  !*** ./resources/app/components/trabajadores/Actualizar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_4ecbbe30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=4ecbbe30& */ "./resources/app/components/trabajadores/Actualizar.vue?vue&type=template&id=4ecbbe30&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/trabajadores/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_4ecbbe30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_4ecbbe30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/trabajadores/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/trabajadores/Actualizar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Actualizar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/trabajadores/Actualizar.vue?vue&type=template&id=4ecbbe30&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Actualizar.vue?vue&type=template&id=4ecbbe30& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_4ecbbe30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=4ecbbe30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Actualizar.vue?vue&type=template&id=4ecbbe30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_4ecbbe30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_4ecbbe30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/trabajadores/Listado.vue":
/*!***********************************************************!*\
  !*** ./resources/app/components/trabajadores/Listado.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_41ca9ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=41ca9ffe&scoped=true& */ "./resources/app/components/trabajadores/Listado.vue?vue&type=template&id=41ca9ffe&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/trabajadores/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_41ca9ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true& */ "./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_41ca9ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_41ca9ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41ca9ffe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/trabajadores/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/trabajadores/Listado.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Listado.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_41ca9ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=style&index=0&id=41ca9ffe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_41ca9ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_41ca9ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_41ca9ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_41ca9ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_41ca9ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/trabajadores/Listado.vue?vue&type=template&id=41ca9ffe&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Listado.vue?vue&type=template&id=41ca9ffe&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_41ca9ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=41ca9ffe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Listado.vue?vue&type=template&id=41ca9ffe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_41ca9ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_41ca9ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/trabajadores/Registrar.vue":
/*!*************************************************************!*\
  !*** ./resources/app/components/trabajadores/Registrar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_4f5be7c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=4f5be7c6& */ "./resources/app/components/trabajadores/Registrar.vue?vue&type=template&id=4f5be7c6&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/trabajadores/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_4f5be7c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_4f5be7c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/trabajadores/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/trabajadores/Registrar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Registrar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/trabajadores/Registrar.vue?vue&type=template&id=4f5be7c6&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/trabajadores/Registrar.vue?vue&type=template&id=4f5be7c6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_4f5be7c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=4f5be7c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/trabajadores/Registrar.vue?vue&type=template&id=4f5be7c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_4f5be7c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_4f5be7c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);