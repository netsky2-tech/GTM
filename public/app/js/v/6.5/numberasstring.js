"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["numberasstring"],{

/***/ "./resources/app/assets/custom-scripts/NumberAsString.js":
/*!***************************************************************!*\
  !*** ./resources/app/assets/custom-scripts/NumberAsString.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");


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

vue__WEBPACK_IMPORTED_MODULE_0__["default"].filter('numberasstring', function (num) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  numberasstring: function numberasstring(num) {
    var centavos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // currency = currency || {};
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
    console.log();

    if (data.centavos > 0) {
      var _centavos2 = data.centavos == 1 ? Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular : Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;

      data.letrasCentavos = 'CON ' + _centavos2;
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

/***/ })

}]);