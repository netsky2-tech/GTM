(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~basico"],{

/***/ "./node_modules/anymatch/index.js":
/*!****************************************!*\
  !*** ./node_modules/anymatch/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var micromatch = __webpack_require__(/*! micromatch */ "./node_modules/micromatch/index.js");
var normalize = __webpack_require__(/*! normalize-path */ "./node_modules/anymatch/node_modules/normalize-path/index.js");
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js"); // required for tests.
var arrify = function(a) { return a == null ? [] : (Array.isArray(a) ? a : [a]); };

var anymatch = function(criteria, value, returnIndex, startIndex, endIndex) {
  criteria = arrify(criteria);
  value = arrify(value);
  if (arguments.length === 1) {
    return anymatch.bind(null, criteria.map(function(criterion) {
      return typeof criterion === 'string' && criterion[0] !== '!' ?
        micromatch.matcher(criterion) : criterion;
    }));
  }
  startIndex = startIndex || 0;
  var string = value[0];
  var altString, altValue;
  var matched = false;
  var matchIndex = -1;
  function testCriteria(criterion, index) {
    var result;
    switch (Object.prototype.toString.call(criterion)) {
    case '[object String]':
      result = string === criterion || altString && altString === criterion;
      result = result || micromatch.isMatch(string, criterion);
      break;
    case '[object RegExp]':
      result = criterion.test(string) || altString && criterion.test(altString);
      break;
    case '[object Function]':
      result = criterion.apply(null, value);
      result = result || altValue && criterion.apply(null, altValue);
      break;
    default:
      result = false;
    }
    if (result) {
      matchIndex = index + startIndex;
    }
    return result;
  }
  var crit = criteria;
  var negGlobs = crit.reduce(function(arr, criterion, index) {
    if (typeof criterion === 'string' && criterion[0] === '!') {
      if (crit === criteria) {
        // make a copy before modifying
        crit = crit.slice();
      }
      crit[index] = null;
      arr.push(criterion.substr(1));
    }
    return arr;
  }, []);
  if (!negGlobs.length || !micromatch.any(string, negGlobs)) {
    if (path.sep === '\\' && typeof string === 'string') {
      altString = normalize(string);
      altString = altString === string ? null : altString;
      if (altString) altValue = [altString].concat(value.slice(1));
    }
    matched = crit.slice(startIndex, endIndex).some(testCriteria);
  }
  return returnIndex === true ? matchIndex : matched;
};

module.exports = anymatch;


/***/ }),

/***/ "./node_modules/anymatch/node_modules/normalize-path/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/anymatch/node_modules/normalize-path/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var removeTrailingSeparator = __webpack_require__(/*! remove-trailing-separator */ "./node_modules/remove-trailing-separator/index.js");

module.exports = function normalizePath(str, stripTrailing) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  str = str.replace(/[\\\/]+/g, '/');
  if (stripTrailing !== false) {
    str = removeTrailingSeparator(str);
  }
  return str;
};


/***/ }),

/***/ "./node_modules/arr-diff/index.js":
/*!****************************************!*\
  !*** ./node_modules/arr-diff/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function diff(arr/*, arrays*/) {
  var len = arguments.length;
  var idx = 0;
  while (++idx < len) {
    arr = diffArray(arr, arguments[idx]);
  }
  return arr;
};

function diffArray(one, two) {
  if (!Array.isArray(two)) {
    return one.slice();
  }

  var tlen = two.length
  var olen = one.length;
  var idx = -1;
  var arr = [];

  while (++idx < olen) {
    var ele = one[idx];

    var hasEle = false;
    for (var i = 0; i < tlen; i++) {
      var val = two[i];

      if (ele === val) {
        hasEle = true;
        break;
      }
    }

    if (hasEle === false) {
      arr.push(ele);
    }
  }
  return arr;
}


/***/ }),

/***/ "./node_modules/arr-flatten/index.js":
/*!*******************************************!*\
  !*** ./node_modules/arr-flatten/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function (arr) {
  return flat(arr, []);
};

function flat(arr, res) {
  var i = 0, cur;
  var len = arr.length;
  for (; i < len; i++) {
    cur = arr[i];
    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
  }
  return res;
}


/***/ }),

/***/ "./node_modules/arr-union/index.js":
/*!*****************************************!*\
  !*** ./node_modules/arr-union/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function union(init) {
  if (!Array.isArray(init)) {
    throw new TypeError('arr-union expects the first argument to be an array.');
  }

  var len = arguments.length;
  var i = 0;

  while (++i < len) {
    var arg = arguments[i];
    if (!arg) continue;

    if (!Array.isArray(arg)) {
      arg = [arg];
    }

    for (var j = 0; j < arg.length; j++) {
      var ele = arg[j];

      if (init.indexOf(ele) >= 0) {
        continue;
      }
      init.push(ele);
    }
  }
  return init;
};


/***/ }),

/***/ "./node_modules/array-unique/index.js":
/*!********************************************!*\
  !*** ./node_modules/array-unique/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * array-unique <https://github.com/jonschlinkert/array-unique>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var len = arr.length;
  var i = -1;

  while (i++ < len) {
    var j = i + 1;

    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
};

module.exports.immutable = function uniqueImmutable(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var arrLen = arr.length;
  var newArr = new Array(arrLen);

  for (var i = 0; i < arrLen; i++) {
    newArr[i] = arr[i];
  }

  return module.exports(newArr);
};


/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/assign-symbols/index.js":
/*!**********************************************!*\
  !*** ./node_modules/assign-symbols/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function(receiver, objects) {
  if (receiver === null || typeof receiver === 'undefined') {
    throw new TypeError('expected first argument to be an object.');
  }

  if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
    return receiver;
  }

  if (typeof Object.getOwnPropertySymbols !== 'function') {
    return receiver;
  }

  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var target = Object(receiver);
  var len = arguments.length, i = 0;

  while (++i < len) {
    var provider = Object(arguments[i]);
    var names = Object.getOwnPropertySymbols(provider);

    for (var j = 0; j < names.length; j++) {
      var key = names[j];

      if (isEnumerable.call(provider, key)) {
        target[key] = provider[key];
      }
    }
  }
  return target;
};


/***/ }),

/***/ "./node_modules/async-each/index.js":
/*!******************************************!*\
  !*** ./node_modules/async-each/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// async-each MIT license (by Paul Miller from https://paulmillr.com).
(function(globals) {
  'use strict';
  var each = function(items, next, callback) {
    if (!Array.isArray(items)) throw new TypeError('each() expects array as first argument');
    if (typeof next !== 'function') throw new TypeError('each() expects function as second argument');
    if (typeof callback !== 'function') callback = Function.prototype; // no-op

    if (items.length === 0) return callback(undefined, items);

    var transformed = new Array(items.length);
    var count = 0;
    var returned = false;

    items.forEach(function(item, index) {
      next(item, function(error, transformedItem) {
        if (returned) return;
        if (error) {
          returned = true;
          return callback(error);
        }
        transformed[index] = transformedItem;
        count += 1;
        if (count === items.length) return callback(undefined, transformed);
      });
    });
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return each;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // RequireJS
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/base/index.js":
/*!************************************!*\
  !*** ./node_modules/base/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/base/node_modules/define-property/index.js");
var CacheBase = __webpack_require__(/*! cache-base */ "./node_modules/cache-base/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
var merge = __webpack_require__(/*! mixin-deep */ "./node_modules/mixin-deep/index.js");
var pascal = __webpack_require__(/*! pascalcase */ "./node_modules/pascalcase/index.js");
var cu = __webpack_require__(/*! class-utils */ "./node_modules/class-utils/index.js");

/**
 * Optionally define a custom `cache` namespace to use.
 */

function namespace(name) {
  var Cache = name ? CacheBase.namespace(name) : CacheBase;
  var fns = [];

  /**
   * Create an instance of `Base` with the given `config` and `options`.
   *
   * ```js
   * // initialize with `config` and `options`
   * var app = new Base({isApp: true}, {abc: true});
   * app.set('foo', 'bar');
   *
   * // values defined with the given `config` object will be on the root of the instance
   * console.log(app.baz); //=> undefined
   * console.log(app.foo); //=> 'bar'
   * // or use `.get`
   * console.log(app.get('isApp')); //=> true
   * console.log(app.get('foo')); //=> 'bar'
   *
   * // values defined with the given `options` object will be on `app.options
   * console.log(app.options.abc); //=> true
   * ```
   *
   * @param {Object} `config` If supplied, this object is passed to [cache-base][] to merge onto the the instance upon instantiation.
   * @param {Object} `options` If supplied, this object is used to initialize the `base.options` object.
   * @api public
   */

  function Base(config, options) {
    if (!(this instanceof Base)) {
      return new Base(config, options);
    }
    Cache.call(this, config);
    this.is('base');
    this.initBase(config, options);
  }

  /**
   * Inherit cache-base
   */

  util.inherits(Base, Cache);

  /**
   * Add static emitter methods
   */

  Emitter(Base);

  /**
   * Initialize `Base` defaults with the given `config` object
   */

  Base.prototype.initBase = function(config, options) {
    this.options = merge({}, this.options, options);
    this.cache = this.cache || {};
    this.define('registered', {});
    if (name) this[name] = {};

    // make `app._callbacks` non-enumerable
    this.define('_callbacks', this._callbacks);
    if (isObject(config)) {
      this.visit('set', config);
    }
    Base.run(this, 'use', fns);
  };

  /**
   * Set the given `name` on `app._name` and `app.is*` properties. Used for doing
   * lookups in plugins.
   *
   * ```js
   * app.is('foo');
   * console.log(app._name);
   * //=> 'foo'
   * console.log(app.isFoo);
   * //=> true
   * app.is('bar');
   * console.log(app.isFoo);
   * //=> true
   * console.log(app.isBar);
   * //=> true
   * console.log(app._name);
   * //=> 'bar'
   * ```
   * @name .is
   * @param {String} `name`
   * @return {Boolean}
   * @api public
   */

  Base.prototype.is = function(name) {
    if (typeof name !== 'string') {
      throw new TypeError('expected name to be a string');
    }
    this.define('is' + pascal(name), true);
    this.define('_name', name);
    this.define('_appname', name);
    return this;
  };

  /**
   * Returns true if a plugin has already been registered on an instance.
   *
   * Plugin implementors are encouraged to use this first thing in a plugin
   * to prevent the plugin from being called more than once on the same
   * instance.
   *
   * ```js
   * var base = new Base();
   * base.use(function(app) {
   *   if (app.isRegistered('myPlugin')) return;
   *   // do stuff to `app`
   * });
   *
   * // to also record the plugin as being registered
   * base.use(function(app) {
   *   if (app.isRegistered('myPlugin', true)) return;
   *   // do stuff to `app`
   * });
   * ```
   * @name .isRegistered
   * @emits `plugin` Emits the name of the plugin being registered. Useful for unit tests, to ensure plugins are only registered once.
   * @param {String} `name` The plugin name.
   * @param {Boolean} `register` If the plugin if not already registered, to record it as being registered pass `true` as the second argument.
   * @return {Boolean} Returns true if a plugin is already registered.
   * @api public
   */

  Base.prototype.isRegistered = function(name, register) {
    if (this.registered.hasOwnProperty(name)) {
      return true;
    }
    if (register !== false) {
      this.registered[name] = true;
      this.emit('plugin', name);
    }
    return false;
  };

  /**
   * Define a plugin function to be called immediately upon init. Plugins are chainable
   * and expose the following arguments to the plugin function:
   *
   * - `app`: the current instance of `Base`
   * - `base`: the [first ancestor instance](#base) of `Base`
   *
   * ```js
   * var app = new Base()
   *   .use(foo)
   *   .use(bar)
   *   .use(baz)
   * ```
   * @name .use
   * @param {Function} `fn` plugin function to call
   * @return {Object} Returns the item instance for chaining.
   * @api public
   */

  Base.prototype.use = function(fn) {
    fn.call(this, this);
    return this;
  };

  /**
   * The `.define` method is used for adding non-enumerable property on the instance.
   * Dot-notation is **not supported** with `define`.
   *
   * ```js
   * // arbitrary `render` function using lodash `template`
   * app.define('render', function(str, locals) {
   *   return _.template(str)(locals);
   * });
   * ```
   * @name .define
   * @param {String} `key` The name of the property to define.
   * @param {any} `value`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Base.prototype.define = function(key, val) {
    if (isObject(key)) {
      return this.visit('define', key);
    }
    define(this, key, val);
    return this;
  };

  /**
   * Mix property `key` onto the Base prototype. If base is inherited using
   * `Base.extend` this method will be overridden by a new `mixin` method that will
   * only add properties to the prototype of the inheriting application.
   *
   * ```js
   * app.mixin('foo', function() {
   *   // do stuff
   * });
   * ```
   * @name .mixin
   * @param {String} `key`
   * @param {Object|Array} `val`
   * @return {Object} Returns the `base` instance for chaining.
   * @api public
   */

  Base.prototype.mixin = function(key, val) {
    Base.prototype[key] = val;
    return this;
  };

  /**
   * Non-enumberable mixin array, used by the static [Base.mixin]() method.
   */

  Base.prototype.mixins = Base.prototype.mixins || [];

  /**
   * Getter/setter used when creating nested instances of `Base`, for storing a reference
   * to the first ancestor instance. This works by setting an instance of `Base` on the `parent`
   * property of a "child" instance. The `base` property defaults to the current instance if
   * no `parent` property is defined.
   *
   * ```js
   * // create an instance of `Base`, this is our first ("base") instance
   * var first = new Base();
   * first.foo = 'bar'; // arbitrary property, to make it easier to see what's happening later
   *
   * // create another instance
   * var second = new Base();
   * // create a reference to the first instance (`first`)
   * second.parent = first;
   *
   * // create another instance
   * var third = new Base();
   * // create a reference to the previous instance (`second`)
   * // repeat this pattern every time a "child" instance is created
   * third.parent = second;
   *
   * // we can always access the first instance using the `base` property
   * console.log(first.base.foo);
   * //=> 'bar'
   * console.log(second.base.foo);
   * //=> 'bar'
   * console.log(third.base.foo);
   * //=> 'bar'
   * // and now you know how to get to third base ;)
   * ```
   * @name .base
   * @api public
   */

  Object.defineProperty(Base.prototype, 'base', {
    configurable: true,
    get: function() {
      return this.parent ? this.parent.base : this;
    }
  });

  /**
   * Static method for adding global plugin functions that will
   * be added to an instance when created.
   *
   * ```js
   * Base.use(function(app) {
   *   app.foo = 'bar';
   * });
   * var app = new Base();
   * console.log(app.foo);
   * //=> 'bar'
   * ```
   * @name #use
   * @param {Function} `fn` Plugin function to use on each instance.
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'use', function(fn) {
    fns.push(fn);
    return Base;
  });

  /**
   * Run an array of functions by passing each function
   * to a method on the given object specified by the given property.
   *
   * @param  {Object} `obj` Object containing method to use.
   * @param  {String} `prop` Name of the method on the object to use.
   * @param  {Array} `arr` Array of functions to pass to the method.
   */

  define(Base, 'run', function(obj, prop, arr) {
    var len = arr.length, i = 0;
    while (len--) {
      obj[prop](arr[i++]);
    }
    return Base;
  });

  /**
   * Static method for inheriting the prototype and static methods of the `Base` class.
   * This method greatly simplifies the process of creating inheritance-based applications.
   * See [static-extend][] for more details.
   *
   * ```js
   * var extend = cu.extend(Parent);
   * Parent.extend(Child);
   *
   * // optional methods
   * Parent.extend(Child, {
   *   foo: function() {},
   *   bar: function() {}
   * });
   * ```
   * @name #extend
   * @param {Function} `Ctor` constructor to extend
   * @param {Object} `methods` Optional prototype properties to mix in.
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'extend', cu.extend(Base, function(Ctor, Parent) {
    Ctor.prototype.mixins = Ctor.prototype.mixins || [];

    define(Ctor, 'mixin', function(fn) {
      var mixin = fn(Ctor.prototype, Ctor);
      if (typeof mixin === 'function') {
        Ctor.prototype.mixins.push(mixin);
      }
      return Ctor;
    });

    define(Ctor, 'mixins', function(Child) {
      Base.run(Child, 'mixin', Ctor.prototype.mixins);
      return Ctor;
    });

    Ctor.prototype.mixin = function(key, value) {
      Ctor.prototype[key] = value;
      return this;
    };
    return Base;
  }));

  /**
   * Used for adding methods to the `Base` prototype, and/or to the prototype of child instances.
   * When a mixin function returns a function, the returned function is pushed onto the `.mixins`
   * array, making it available to be used on inheriting classes whenever `Base.mixins()` is
   * called (e.g. `Base.mixins(Child)`).
   *
   * ```js
   * Base.mixin(function(proto) {
   *   proto.foo = function(msg) {
   *     return 'foo ' + msg;
   *   };
   * });
   * ```
   * @name #mixin
   * @param {Function} `fn` Function to call
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'mixin', function(fn) {
    var mixin = fn(Base.prototype, Base);
    if (typeof mixin === 'function') {
      Base.prototype.mixins.push(mixin);
    }
    return Base;
  });

  /**
   * Static method for running global mixin functions against a child constructor.
   * Mixins must be registered before calling this method.
   *
   * ```js
   * Base.extend(Child);
   * Base.mixins(Child);
   * ```
   * @name #mixins
   * @param {Function} `Child` Constructor function of a child class
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'mixins', function(Child) {
    Base.run(Child, 'mixin', Base.prototype.mixins);
    return Base;
  });

  /**
   * Similar to `util.inherit`, but copies all static properties, prototype properties, and
   * getters/setters from `Provider` to `Receiver`. See [class-utils][]{#inherit} for more details.
   *
   * ```js
   * Base.inherit(Foo, Bar);
   * ```
   * @name #inherit
   * @param {Function} `Receiver` Receiving (child) constructor
   * @param {Function} `Provider` Providing (parent) constructor
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'inherit', cu.inherit);
  define(Base, 'bubble', cu.bubble);
  return Base;
}

/**
 * Expose `Base` with default settings
 */

module.exports = namespace();

/**
 * Allow users to define a namespace
 */

module.exports.namespace = namespace;


/***/ }),

/***/ "./node_modules/base/node_modules/define-property/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/base/node_modules/define-property/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/base/node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/base/node_modules/is-accessor-descriptor/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/base/node_modules/is-accessor-descriptor/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

// accessor descriptor properties
var accessor = {
  get: 'function',
  set: 'function',
  configurable: 'boolean',
  enumerable: 'boolean'
};

function isAccessorDescriptor(obj, prop) {
  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (has(obj, 'value') || has(obj, 'writable')) {
    return false;
  }

  if (!has(obj, 'get') || typeof obj.get !== 'function') {
    return false;
  }

  // tldr: it's valid to have "set" be undefined
  // "set" might be undefined if `Object.getOwnPropertyDescriptor`
  // was used to get the value, and only `get` was defined by the user
  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
    return false;
  }

  for (var key in obj) {
    if (!accessor.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === accessor[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

/**
 * Expose `isAccessorDescriptor`
 */

module.exports = isAccessorDescriptor;


/***/ }),

/***/ "./node_modules/base/node_modules/is-data-descriptor/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/base/node_modules/is-data-descriptor/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

module.exports = function isDataDescriptor(obj, prop) {
  // data descriptor properties
  var data = {
    configurable: 'boolean',
    enumerable: 'boolean',
    writable: 'boolean'
  };

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (!('value' in obj) && !('writable' in obj)) {
    return false;
  }

  for (var key in obj) {
    if (key === 'value') continue;

    if (!data.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === data[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
};


/***/ }),

/***/ "./node_modules/base/node_modules/is-descriptor/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/base/node_modules/is-descriptor/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
var isAccessor = __webpack_require__(/*! is-accessor-descriptor */ "./node_modules/base/node_modules/is-accessor-descriptor/index.js");
var isData = __webpack_require__(/*! is-data-descriptor */ "./node_modules/base/node_modules/is-data-descriptor/index.js");

module.exports = function isDescriptor(obj, key) {
  if (typeOf(obj) !== 'object') {
    return false;
  }
  if ('get' in obj) {
    return isAccessor(obj, key);
  }
  return isData(obj, key);
};


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/binary-extensions/binary-extensions.json":
/*!***************************************************************!*\
  !*** ./node_modules/binary-extensions/binary-extensions.json ***!
  \***************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"3dm\",\"3ds\",\"3g2\",\"3gp\",\"7z\",\"a\",\"aac\",\"adp\",\"ai\",\"aif\",\"aiff\",\"alz\",\"ape\",\"apk\",\"ar\",\"arj\",\"asf\",\"au\",\"avi\",\"bak\",\"baml\",\"bh\",\"bin\",\"bk\",\"bmp\",\"btif\",\"bz2\",\"bzip2\",\"cab\",\"caf\",\"cgm\",\"class\",\"cmx\",\"cpio\",\"cr2\",\"cur\",\"dat\",\"dcm\",\"deb\",\"dex\",\"djvu\",\"dll\",\"dmg\",\"dng\",\"doc\",\"docm\",\"docx\",\"dot\",\"dotm\",\"dra\",\"DS_Store\",\"dsk\",\"dts\",\"dtshd\",\"dvb\",\"dwg\",\"dxf\",\"ecelp4800\",\"ecelp7470\",\"ecelp9600\",\"egg\",\"eol\",\"eot\",\"epub\",\"exe\",\"f4v\",\"fbs\",\"fh\",\"fla\",\"flac\",\"fli\",\"flv\",\"fpx\",\"fst\",\"fvt\",\"g3\",\"gh\",\"gif\",\"graffle\",\"gz\",\"gzip\",\"h261\",\"h263\",\"h264\",\"icns\",\"ico\",\"ief\",\"img\",\"ipa\",\"iso\",\"jar\",\"jpeg\",\"jpg\",\"jpgv\",\"jpm\",\"jxr\",\"key\",\"ktx\",\"lha\",\"lib\",\"lvp\",\"lz\",\"lzh\",\"lzma\",\"lzo\",\"m3u\",\"m4a\",\"m4v\",\"mar\",\"mdi\",\"mht\",\"mid\",\"midi\",\"mj2\",\"mka\",\"mkv\",\"mmr\",\"mng\",\"mobi\",\"mov\",\"movie\",\"mp3\",\"mp4\",\"mp4a\",\"mpeg\",\"mpg\",\"mpga\",\"mxu\",\"nef\",\"npx\",\"numbers\",\"nupkg\",\"o\",\"oga\",\"ogg\",\"ogv\",\"otf\",\"pages\",\"pbm\",\"pcx\",\"pdb\",\"pdf\",\"pea\",\"pgm\",\"pic\",\"png\",\"pnm\",\"pot\",\"potm\",\"potx\",\"ppa\",\"ppam\",\"ppm\",\"pps\",\"ppsm\",\"ppsx\",\"ppt\",\"pptm\",\"pptx\",\"psd\",\"pya\",\"pyc\",\"pyo\",\"pyv\",\"qt\",\"rar\",\"ras\",\"raw\",\"resources\",\"rgb\",\"rip\",\"rlc\",\"rmf\",\"rmvb\",\"rtf\",\"rz\",\"s3m\",\"s7z\",\"scpt\",\"sgi\",\"shar\",\"sil\",\"sketch\",\"slk\",\"smv\",\"snk\",\"so\",\"stl\",\"suo\",\"sub\",\"swf\",\"tar\",\"tbz\",\"tbz2\",\"tga\",\"tgz\",\"thmx\",\"tif\",\"tiff\",\"tlz\",\"ttc\",\"ttf\",\"txz\",\"udf\",\"uvh\",\"uvi\",\"uvm\",\"uvp\",\"uvs\",\"uvu\",\"viv\",\"vob\",\"war\",\"wav\",\"wax\",\"wbmp\",\"wdp\",\"weba\",\"webm\",\"webp\",\"whl\",\"wim\",\"wm\",\"wma\",\"wmv\",\"wmx\",\"woff\",\"woff2\",\"wrm\",\"wvx\",\"xbm\",\"xif\",\"xla\",\"xlam\",\"xls\",\"xlsb\",\"xlsm\",\"xlsx\",\"xlt\",\"xltm\",\"xltx\",\"xm\",\"xmind\",\"xpi\",\"xpm\",\"xwd\",\"xz\",\"z\",\"zip\",\"zipx\"]");

/***/ }),

/***/ "./node_modules/braces/index.js":
/*!**************************************!*\
  !*** ./node_modules/braces/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");
var unique = __webpack_require__(/*! array-unique */ "./node_modules/array-unique/index.js");
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/braces/node_modules/extend-shallow/index.js");

/**
 * Local dependencies
 */

var compilers = __webpack_require__(/*! ./lib/compilers */ "./node_modules/braces/lib/compilers.js");
var parsers = __webpack_require__(/*! ./lib/parsers */ "./node_modules/braces/lib/parsers.js");
var Braces = __webpack_require__(/*! ./lib/braces */ "./node_modules/braces/lib/braces.js");
var utils = __webpack_require__(/*! ./lib/utils */ "./node_modules/braces/lib/utils.js");
var MAX_LENGTH = 1024 * 64;
var cache = {};

/**
 * Convert the given `braces` pattern into a regex-compatible string. By default, only one string is generated for every input string. Set `options.expand` to true to return an array of patterns (similar to Bash or minimatch. Before using `options.expand`, it's recommended that you read the [performance notes](#performance)).
 *
 * ```js
 * var braces = require('braces');
 * console.log(braces('{a,b,c}'));
 * //=> ['(a|b|c)']
 *
 * console.log(braces('{a,b,c}', {expand: true}));
 * //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

function braces(pattern, options) {
  var key = utils.createKey(String(pattern), options);
  var arr = [];

  var disabled = options && options.cache === false;
  if (!disabled && cache.hasOwnProperty(key)) {
    return cache[key];
  }

  if (Array.isArray(pattern)) {
    for (var i = 0; i < pattern.length; i++) {
      arr.push.apply(arr, braces.create(pattern[i], options));
    }
  } else {
    arr = braces.create(pattern, options);
  }

  if (options && options.nodupes === true) {
    arr = unique(arr);
  }

  if (!disabled) {
    cache[key] = arr;
  }
  return arr;
}

/**
 * Expands a brace pattern into an array. This method is called by the main [braces](#braces) function when `options.expand` is true. Before using this method it's recommended that you read the [performance notes](#performance)) and advantages of using [.optimize](#optimize) instead.
 *
 * ```js
 * var braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */

braces.expand = function(pattern, options) {
  return braces.create(pattern, extend({}, options, {expand: true}));
};

/**
 * Expands a brace pattern into a regex-compatible, optimized string. This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * var braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */

braces.optimize = function(pattern, options) {
  return braces.create(pattern, options);
};

/**
 * Processes a brace pattern and returns either an expanded array (if `options.expand` is true), a highly optimized regex-compatible string. This method is called by the main [braces](#braces) function.
 *
 * ```js
 * var braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */

braces.create = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected a string');
  }

  var maxLength = (options && options.maxLength) || MAX_LENGTH;
  if (pattern.length >= maxLength) {
    throw new Error('expected pattern to be less than ' + maxLength + ' characters');
  }

  function create() {
    if (pattern === '' || pattern.length < 3) {
      return [pattern];
    }

    if (utils.isEmptySets(pattern)) {
      return [];
    }

    if (utils.isQuotedString(pattern)) {
      return [pattern.slice(1, -1)];
    }

    var proto = new Braces(options);
    var result = !options || options.expand !== true
      ? proto.optimize(pattern, options)
      : proto.expand(pattern, options);

    // get the generated pattern(s)
    var arr = result.output;

    // filter out empty strings if specified
    if (options && options.noempty === true) {
      arr = arr.filter(Boolean);
    }

    // filter out duplicates if specified
    if (options && options.nodupes === true) {
      arr = unique(arr);
    }

    Object.defineProperty(arr, 'result', {
      enumerable: false,
      value: result
    });

    return arr;
  }

  return memoize('create', pattern, options, create);
};

/**
 * Create a regular expression from the given string `pattern`.
 *
 * ```js
 * var braces = require('braces');
 *
 * console.log(braces.makeRe('id-{200..300}'));
 * //=> /^(?:id-(20[0-9]|2[1-9][0-9]|300))$/
 * ```
 * @param {String} `pattern` The pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

braces.makeRe = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected a string');
  }

  var maxLength = (options && options.maxLength) || MAX_LENGTH;
  if (pattern.length >= maxLength) {
    throw new Error('expected pattern to be less than ' + maxLength + ' characters');
  }

  function makeRe() {
    var arr = braces(pattern, options);
    var opts = extend({strictErrors: false}, options);
    return toRegex(arr, opts);
  }

  return memoize('makeRe', pattern, options, makeRe);
};

/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * var braces = require('braces');
 * var ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * // { type: 'root',
 * //   errors: [],
 * //   input: 'a/{b,c}/d',
 * //   nodes:
 * //    [ { type: 'bos', val: '' },
 * //      { type: 'text', val: 'a/' },
 * //      { type: 'brace',
 * //        nodes:
 * //         [ { type: 'brace.open', val: '{' },
 * //           { type: 'text', val: 'b,c' },
 * //           { type: 'brace.close', val: '}' } ] },
 * //      { type: 'text', val: '/d' },
 * //      { type: 'eos', val: '' } ] }
 * ```
 * @param {String} `pattern` Brace pattern to parse
 * @param {Object} `options`
 * @return {Object} Returns an AST
 * @api public
 */

braces.parse = function(pattern, options) {
  var proto = new Braces(options);
  return proto.parse(pattern, options);
};

/**
 * Compile the given `ast` or string with the given `options`.
 *
 * ```js
 * var braces = require('braces');
 * var ast = braces.parse('a/{b,c}/d');
 * console.log(braces.compile(ast));
 * // { options: { source: 'string' },
 * //   state: {},
 * //   compilers:
 * //    { eos: [Function],
 * //      noop: [Function],
 * //      bos: [Function],
 * //      brace: [Function],
 * //      'brace.open': [Function],
 * //      text: [Function],
 * //      'brace.close': [Function] },
 * //   output: [ 'a/(b|c)/d' ],
 * //   ast:
 * //    { ... },
 * //   parsingErrors: [] }
 * ```
 * @param {Object|String} `ast` AST from [.parse](#parse). If a string is passed it will be parsed first.
 * @param {Object} `options`
 * @return {Object} Returns an object that has an `output` property with the compiled string.
 * @api public
 */

braces.compile = function(ast, options) {
  var proto = new Braces(options);
  return proto.compile(ast, options);
};

/**
 * Clear the regex cache.
 *
 * ```js
 * braces.clearCache();
 * ```
 * @api public
 */

braces.clearCache = function() {
  cache = braces.cache = {};
};

/**
 * Memoize a generated regex or function. A unique key is generated
 * from the method name, pattern, and user-defined options. Set
 * options.memoize to false to disable.
 */

function memoize(type, pattern, options, fn) {
  var key = utils.createKey(type + ':' + pattern, options);
  var disabled = options && options.cache === false;
  if (disabled) {
    braces.clearCache();
    return fn(pattern, options);
  }

  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  var res = fn(pattern, options);
  cache[key] = res;
  return res;
}

/**
 * Expose `Braces` constructor and methods
 * @type {Function}
 */

braces.Braces = Braces;
braces.compilers = compilers;
braces.parsers = parsers;
braces.cache = cache;

/**
 * Expose `braces`
 * @type {Function}
 */

module.exports = braces;


/***/ }),

/***/ "./node_modules/braces/lib/braces.js":
/*!*******************************************!*\
  !*** ./node_modules/braces/lib/braces.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/braces/node_modules/extend-shallow/index.js");
var Snapdragon = __webpack_require__(/*! snapdragon */ "./node_modules/snapdragon/index.js");
var compilers = __webpack_require__(/*! ./compilers */ "./node_modules/braces/lib/compilers.js");
var parsers = __webpack_require__(/*! ./parsers */ "./node_modules/braces/lib/parsers.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/braces/lib/utils.js");

/**
 * Customize Snapdragon parser and renderer
 */

function Braces(options) {
  this.options = extend({}, options);
}

/**
 * Initialize braces
 */

Braces.prototype.init = function(options) {
  if (this.isInitialized) return;
  this.isInitialized = true;
  var opts = utils.createOptions({}, this.options, options);
  this.snapdragon = this.options.snapdragon || new Snapdragon(opts);
  this.compiler = this.snapdragon.compiler;
  this.parser = this.snapdragon.parser;

  compilers(this.snapdragon, opts);
  parsers(this.snapdragon, opts);

  /**
   * Call Snapdragon `.parse` method. When AST is returned, we check to
   * see if any unclosed braces are left on the stack and, if so, we iterate
   * over the stack and correct the AST so that compilers are called in the correct
   * order and unbalance braces are properly escaped.
   */

  utils.define(this.snapdragon, 'parse', function(pattern, options) {
    var parsed = Snapdragon.prototype.parse.apply(this, arguments);
    this.parser.ast.input = pattern;

    var stack = this.parser.stack;
    while (stack.length) {
      addParent({type: 'brace.close', val: ''}, stack.pop());
    }

    function addParent(node, parent) {
      utils.define(node, 'parent', parent);
      parent.nodes.push(node);
    }

    // add non-enumerable parser reference
    utils.define(parsed, 'parser', this.parser);
    return parsed;
  });
};

/**
 * Decorate `.parse` method
 */

Braces.prototype.parse = function(ast, options) {
  if (ast && typeof ast === 'object' && ast.nodes) return ast;
  this.init(options);
  return this.snapdragon.parse(ast, options);
};

/**
 * Decorate `.compile` method
 */

Braces.prototype.compile = function(ast, options) {
  if (typeof ast === 'string') {
    ast = this.parse(ast, options);
  } else {
    this.init(options);
  }
  return this.snapdragon.compile(ast, options);
};

/**
 * Expand
 */

Braces.prototype.expand = function(pattern) {
  var ast = this.parse(pattern, {expand: true});
  return this.compile(ast, {expand: true});
};

/**
 * Optimize
 */

Braces.prototype.optimize = function(pattern) {
  var ast = this.parse(pattern, {optimize: true});
  return this.compile(ast, {optimize: true});
};

/**
 * Expose `Braces`
 */

module.exports = Braces;


/***/ }),

/***/ "./node_modules/braces/lib/compilers.js":
/*!**********************************************!*\
  !*** ./node_modules/braces/lib/compilers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/braces/lib/utils.js");

module.exports = function(braces, options) {
  braces.compiler

    /**
     * bos
     */

    .set('bos', function() {
      if (this.output) return;
      this.ast.queue = isEscaped(this.ast) ? [this.ast.val] : [];
      this.ast.count = 1;
    })

    /**
     * Square brackets
     */

    .set('bracket', function(node) {
      var close = node.close;
      var open = !node.escaped ? '[' : '\\[';
      var negated = node.negated;
      var inner = node.inner;

      inner = inner.replace(/\\(?=[\\\w]|$)/g, '\\\\');
      if (inner === ']-') {
        inner = '\\]\\-';
      }

      if (negated && inner.indexOf('.') === -1) {
        inner += '.';
      }
      if (negated && inner.indexOf('/') === -1) {
        inner += '/';
      }

      var val = open + negated + inner + close;
      var queue = node.parent.queue;
      var last = utils.arrayify(queue.pop());

      queue.push(utils.join(last, val));
      queue.push.apply(queue, []);
    })

    /**
     * Brace
     */

    .set('brace', function(node) {
      node.queue = isEscaped(node) ? [node.val] : [];
      node.count = 1;
      return this.mapVisit(node.nodes);
    })

    /**
     * Open
     */

    .set('brace.open', function(node) {
      node.parent.open = node.val;
    })

    /**
     * Inner
     */

    .set('text', function(node) {
      var queue = node.parent.queue;
      var escaped = node.escaped;
      var segs = [node.val];

      if (node.optimize === false) {
        options = utils.extend({}, options, {optimize: false});
      }

      if (node.multiplier > 1) {
        node.parent.count *= node.multiplier;
      }

      if (options.quantifiers === true && utils.isQuantifier(node.val)) {
        escaped = true;

      } else if (node.val.length > 1) {
        if (isType(node.parent, 'brace') && !isEscaped(node)) {
          var expanded = utils.expand(node.val, options);
          segs = expanded.segs;

          if (expanded.isOptimized) {
            node.parent.isOptimized = true;
          }

          // if nothing was expanded, we probably have a literal brace
          if (!segs.length) {
            var val = (expanded.val || node.val);
            if (options.unescape !== false) {
              // unescape unexpanded brace sequence/set separators
              val = val.replace(/\\([,.])/g, '$1');
              // strip quotes
              val = val.replace(/["'`]/g, '');
            }

            segs = [val];
            escaped = true;
          }
        }

      } else if (node.val === ',') {
        if (options.expand) {
          node.parent.queue.push(['']);
          segs = [''];
        } else {
          segs = ['|'];
        }
      } else {
        escaped = true;
      }

      if (escaped && isType(node.parent, 'brace')) {
        if (node.parent.nodes.length <= 4 && node.parent.count === 1) {
          node.parent.escaped = true;
        } else if (node.parent.length <= 3) {
          node.parent.escaped = true;
        }
      }

      if (!hasQueue(node.parent)) {
        node.parent.queue = segs;
        return;
      }

      var last = utils.arrayify(queue.pop());
      if (node.parent.count > 1 && options.expand) {
        last = multiply(last, node.parent.count);
        node.parent.count = 1;
      }

      queue.push(utils.join(utils.flatten(last), segs.shift()));
      queue.push.apply(queue, segs);
    })

    /**
     * Close
     */

    .set('brace.close', function(node) {
      var queue = node.parent.queue;
      var prev = node.parent.parent;
      var last = prev.queue.pop();
      var open = node.parent.open;
      var close = node.val;

      if (open && close && isOptimized(node, options)) {
        open = '(';
        close = ')';
      }

      // if a close brace exists, and the previous segment is one character
      // don't wrap the result in braces or parens
      var ele = utils.last(queue);
      if (node.parent.count > 1 && options.expand) {
        ele = multiply(queue.pop(), node.parent.count);
        node.parent.count = 1;
        queue.push(ele);
      }

      if (close && typeof ele === 'string' && ele.length === 1) {
        open = '';
        close = '';
      }

      if ((isLiteralBrace(node, options) || noInner(node)) && !node.parent.hasEmpty) {
        queue.push(utils.join(open, queue.pop() || ''));
        queue = utils.flatten(utils.join(queue, close));
      }

      if (typeof last === 'undefined') {
        prev.queue = [queue];
      } else {
        prev.queue.push(utils.flatten(utils.join(last, queue)));
      }
    })

    /**
     * eos
     */

    .set('eos', function(node) {
      if (this.input) return;

      if (options.optimize !== false) {
        this.output = utils.last(utils.flatten(this.ast.queue));
      } else if (Array.isArray(utils.last(this.ast.queue))) {
        this.output = utils.flatten(this.ast.queue.pop());
      } else {
        this.output = utils.flatten(this.ast.queue);
      }

      if (node.parent.count > 1 && options.expand) {
        this.output = multiply(this.output, node.parent.count);
      }

      this.output = utils.arrayify(this.output);
      this.ast.queue = [];
    });

};

/**
 * Multiply the segments in the current brace level
 */

function multiply(queue, n, options) {
  return utils.flatten(utils.repeat(utils.arrayify(queue), n));
}

/**
 * Return true if `node` is escaped
 */

function isEscaped(node) {
  return node.escaped === true;
}

/**
 * Returns true if regex parens should be used for sets. If the parent `type`
 * is not `brace`, then we're on a root node, which means we should never
 * expand segments and open/close braces should be `{}` (since this indicates
 * a brace is missing from the set)
 */

function isOptimized(node, options) {
  if (node.parent.isOptimized) return true;
  return isType(node.parent, 'brace')
    && !isEscaped(node.parent)
    && options.expand !== true;
}

/**
 * Returns true if the value in `node` should be wrapped in a literal brace.
 * @return {Boolean}
 */

function isLiteralBrace(node, options) {
  return isEscaped(node.parent) || options.optimize !== false;
}

/**
 * Returns true if the given `node` does not have an inner value.
 * @return {Boolean}
 */

function noInner(node, type) {
  if (node.parent.queue.length === 1) {
    return true;
  }
  var nodes = node.parent.nodes;
  return nodes.length === 3
    && isType(nodes[0], 'brace.open')
    && !isType(nodes[1], 'text')
    && isType(nodes[2], 'brace.close');
}

/**
 * Returns true if the given `node` is the given `type`
 * @return {Boolean}
 */

function isType(node, type) {
  return typeof node !== 'undefined' && node.type === type;
}

/**
 * Returns true if the given `node` has a non-empty queue.
 * @return {Boolean}
 */

function hasQueue(node) {
  return Array.isArray(node.queue) && node.queue.length;
}


/***/ }),

/***/ "./node_modules/braces/lib/parsers.js":
/*!********************************************!*\
  !*** ./node_modules/braces/lib/parsers.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Node = __webpack_require__(/*! snapdragon-node */ "./node_modules/snapdragon-node/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/braces/lib/utils.js");

/**
 * Braces parsers
 */

module.exports = function(braces, options) {
  braces.parser
    .set('bos', function() {
      if (!this.parsed) {
        this.ast = this.nodes[0] = new Node(this.ast);
      }
    })

    /**
     * Character parsers
     */

    .set('escape', function() {
      var pos = this.position();
      var m = this.match(/^(?:\\(.)|\$\{)/);
      if (!m) return;

      var prev = this.prev();
      var last = utils.last(prev.nodes);

      var node = pos(new Node({
        type: 'text',
        multiplier: 1,
        val: m[0]
      }));

      if (node.val === '\\\\') {
        return node;
      }

      if (node.val === '${') {
        var str = this.input;
        var idx = -1;
        var ch;

        while ((ch = str[++idx])) {
          this.consume(1);
          node.val += ch;
          if (ch === '\\') {
            node.val += str[++idx];
            continue;
          }
          if (ch === '}') {
            break;
          }
        }
      }

      if (this.options.unescape !== false) {
        node.val = node.val.replace(/\\([{}])/g, '$1');
      }

      if (last.val === '"' && this.input.charAt(0) === '"') {
        last.val = node.val;
        this.consume(1);
        return;
      }

      return concatNodes.call(this, pos, node, prev, options);
    })

    /**
     * Brackets: "[...]" (basic, this is overridden by
     * other parsers in more advanced implementations)
     */

    .set('bracket', function() {
      var isInside = this.isInside('brace');
      var pos = this.position();
      var m = this.match(/^(?:\[([!^]?)([^\]]{2,}|\]-)(\]|[^*+?]+)|\[)/);
      if (!m) return;

      var prev = this.prev();
      var val = m[0];
      var negated = m[1] ? '^' : '';
      var inner = m[2] || '';
      var close = m[3] || '';

      if (isInside && prev.type === 'brace') {
        prev.text = prev.text || '';
        prev.text += val;
      }

      var esc = this.input.slice(0, 2);
      if (inner === '' && esc === '\\]') {
        inner += esc;
        this.consume(2);

        var str = this.input;
        var idx = -1;
        var ch;

        while ((ch = str[++idx])) {
          this.consume(1);
          if (ch === ']') {
            close = ch;
            break;
          }
          inner += ch;
        }
      }

      return pos(new Node({
        type: 'bracket',
        val: val,
        escaped: close !== ']',
        negated: negated,
        inner: inner,
        close: close
      }));
    })

    /**
     * Empty braces (we capture these early to
     * speed up processing in the compiler)
     */

    .set('multiplier', function() {
      var isInside = this.isInside('brace');
      var pos = this.position();
      var m = this.match(/^\{((?:,|\{,+\})+)\}/);
      if (!m) return;

      this.multiplier = true;
      var prev = this.prev();
      var val = m[0];

      if (isInside && prev.type === 'brace') {
        prev.text = prev.text || '';
        prev.text += val;
      }

      var node = pos(new Node({
        type: 'text',
        multiplier: 1,
        match: m,
        val: val
      }));

      return concatNodes.call(this, pos, node, prev, options);
    })

    /**
     * Open
     */

    .set('brace.open', function() {
      var pos = this.position();
      var m = this.match(/^\{(?!(?:[^\\}]?|,+)\})/);
      if (!m) return;

      var prev = this.prev();
      var last = utils.last(prev.nodes);

      // if the last parsed character was an extglob character
      // we need to _not optimize_ the brace pattern because
      // it might be mistaken for an extglob by a downstream parser
      if (last && last.val && isExtglobChar(last.val.slice(-1))) {
        last.optimize = false;
      }

      var open = pos(new Node({
        type: 'brace.open',
        val: m[0]
      }));

      var node = pos(new Node({
        type: 'brace',
        nodes: []
      }));

      node.push(open);
      prev.push(node);
      this.push('brace', node);
    })

    /**
     * Close
     */

    .set('brace.close', function() {
      var pos = this.position();
      var m = this.match(/^\}/);
      if (!m || !m[0]) return;

      var brace = this.pop('brace');
      var node = pos(new Node({
        type: 'brace.close',
        val: m[0]
      }));

      if (!this.isType(brace, 'brace')) {
        if (this.options.strict) {
          throw new Error('missing opening "{"');
        }
        node.type = 'text';
        node.multiplier = 0;
        node.escaped = true;
        return node;
      }

      var prev = this.prev();
      var last = utils.last(prev.nodes);
      if (last.text) {
        var lastNode = utils.last(last.nodes);
        if (lastNode.val === ')' && /[!@*?+]\(/.test(last.text)) {
          var open = last.nodes[0];
          var text = last.nodes[1];
          if (open.type === 'brace.open' && text && text.type === 'text') {
            text.optimize = false;
          }
        }
      }

      if (brace.nodes.length > 2) {
        var first = brace.nodes[1];
        if (first.type === 'text' && first.val === ',') {
          brace.nodes.splice(1, 1);
          brace.nodes.push(first);
        }
      }

      brace.push(node);
    })

    /**
     * Capture boundary characters
     */

    .set('boundary', function() {
      var pos = this.position();
      var m = this.match(/^[$^](?!\{)/);
      if (!m) return;
      return pos(new Node({
        type: 'text',
        val: m[0]
      }));
    })

    /**
     * One or zero, non-comma characters wrapped in braces
     */

    .set('nobrace', function() {
      var isInside = this.isInside('brace');
      var pos = this.position();
      var m = this.match(/^\{[^,]?\}/);
      if (!m) return;

      var prev = this.prev();
      var val = m[0];

      if (isInside && prev.type === 'brace') {
        prev.text = prev.text || '';
        prev.text += val;
      }

      return pos(new Node({
        type: 'text',
        multiplier: 0,
        val: val
      }));
    })

    /**
     * Text
     */

    .set('text', function() {
      var isInside = this.isInside('brace');
      var pos = this.position();
      var m = this.match(/^((?!\\)[^${}[\]])+/);
      if (!m) return;

      var prev = this.prev();
      var val = m[0];

      if (isInside && prev.type === 'brace') {
        prev.text = prev.text || '';
        prev.text += val;
      }

      var node = pos(new Node({
        type: 'text',
        multiplier: 1,
        val: val
      }));

      return concatNodes.call(this, pos, node, prev, options);
    });
};

/**
 * Returns true if the character is an extglob character.
 */

function isExtglobChar(ch) {
  return ch === '!' || ch === '@' || ch === '*' || ch === '?' || ch === '+';
}

/**
 * Combine text nodes, and calculate empty sets (`{,,}`)
 * @param {Function} `pos` Function to calculate node position
 * @param {Object} `node` AST node
 * @return {Object}
 */

function concatNodes(pos, node, parent, options) {
  node.orig = node.val;
  var prev = this.prev();
  var last = utils.last(prev.nodes);
  var isEscaped = false;

  if (node.val.length > 1) {
    var a = node.val.charAt(0);
    var b = node.val.slice(-1);

    isEscaped = (a === '"' && b === '"')
      || (a === "'" && b === "'")
      || (a === '`' && b === '`');
  }

  if (isEscaped && options.unescape !== false) {
    node.val = node.val.slice(1, node.val.length - 1);
    node.escaped = true;
  }

  if (node.match) {
    var match = node.match[1];
    if (!match || match.indexOf('}') === -1) {
      match = node.match[0];
    }

    // replace each set with a single ","
    var val = match.replace(/\{/g, ',').replace(/\}/g, '');
    node.multiplier *= val.length;
    node.val = '';
  }

  var simpleText = last.type === 'text'
    && last.multiplier === 1
    && node.multiplier === 1
    && node.val;

  if (simpleText) {
    last.val += node.val;
    return;
  }

  prev.push(node);
}


/***/ }),

/***/ "./node_modules/braces/lib/utils.js":
/*!******************************************!*\
  !*** ./node_modules/braces/lib/utils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splitString = __webpack_require__(/*! split-string */ "./node_modules/split-string/index.js");
var utils = module.exports;

/**
 * Module dependencies
 */

utils.extend = __webpack_require__(/*! extend-shallow */ "./node_modules/braces/node_modules/extend-shallow/index.js");
utils.flatten = __webpack_require__(/*! arr-flatten */ "./node_modules/arr-flatten/index.js");
utils.isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
utils.fillRange = __webpack_require__(/*! fill-range */ "./node_modules/fill-range/index.js");
utils.repeat = __webpack_require__(/*! repeat-element */ "./node_modules/repeat-element/index.js");
utils.unique = __webpack_require__(/*! array-unique */ "./node_modules/array-unique/index.js");

utils.define = function(obj, key, val) {
  Object.defineProperty(obj, key, {
    writable: true,
    configurable: true,
    enumerable: false,
    value: val
  });
};

/**
 * Returns true if the given string contains only empty brace sets.
 */

utils.isEmptySets = function(str) {
  return /^(?:\{,\})+$/.test(str);
};

/**
 * Returns true if the given string contains only empty brace sets.
 */

utils.isQuotedString = function(str) {
  var open = str.charAt(0);
  if (open === '\'' || open === '"' || open === '`') {
    return str.slice(-1) === open;
  }
  return false;
};

/**
 * Create the key to use for memoization. The unique key is generated
 * by iterating over the options and concatenating key-value pairs
 * to the pattern string.
 */

utils.createKey = function(pattern, options) {
  var id = pattern;
  if (typeof options === 'undefined') {
    return id;
  }
  var keys = Object.keys(options);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    id += ';' + key + '=' + String(options[key]);
  }
  return id;
};

/**
 * Normalize options
 */

utils.createOptions = function(options) {
  var opts = utils.extend.apply(null, arguments);
  if (typeof opts.expand === 'boolean') {
    opts.optimize = !opts.expand;
  }
  if (typeof opts.optimize === 'boolean') {
    opts.expand = !opts.optimize;
  }
  if (opts.optimize === true) {
    opts.makeRe = true;
  }
  return opts;
};

/**
 * Join patterns in `a` to patterns in `b`
 */

utils.join = function(a, b, options) {
  options = options || {};
  a = utils.arrayify(a);
  b = utils.arrayify(b);

  if (!a.length) return b;
  if (!b.length) return a;

  var len = a.length;
  var idx = -1;
  var arr = [];

  while (++idx < len) {
    var val = a[idx];
    if (Array.isArray(val)) {
      for (var i = 0; i < val.length; i++) {
        val[i] = utils.join(val[i], b, options);
      }
      arr.push(val);
      continue;
    }

    for (var j = 0; j < b.length; j++) {
      var bval = b[j];

      if (Array.isArray(bval)) {
        arr.push(utils.join(val, bval, options));
      } else {
        arr.push(val + bval);
      }
    }
  }
  return arr;
};

/**
 * Split the given string on `,` if not escaped.
 */

utils.split = function(str, options) {
  var opts = utils.extend({sep: ','}, options);
  if (typeof opts.keepQuotes !== 'boolean') {
    opts.keepQuotes = true;
  }
  if (opts.unescape === false) {
    opts.keepEscaping = true;
  }
  return splitString(str, opts, utils.escapeBrackets(opts));
};

/**
 * Expand ranges or sets in the given `pattern`.
 *
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object}
 */

utils.expand = function(str, options) {
  var opts = utils.extend({rangeLimit: 10000}, options);
  var segs = utils.split(str, opts);
  var tok = { segs: segs };

  if (utils.isQuotedString(str)) {
    return tok;
  }

  if (opts.rangeLimit === true) {
    opts.rangeLimit = 10000;
  }

  if (segs.length > 1) {
    if (opts.optimize === false) {
      tok.val = segs[0];
      return tok;
    }

    tok.segs = utils.stringifyArray(tok.segs);
  } else if (segs.length === 1) {
    var arr = str.split('..');

    if (arr.length === 1) {
      tok.val = tok.segs[tok.segs.length - 1] || tok.val || str;
      tok.segs = [];
      return tok;
    }

    if (arr.length === 2 && arr[0] === arr[1]) {
      tok.escaped = true;
      tok.val = arr[0];
      tok.segs = [];
      return tok;
    }

    if (arr.length > 1) {
      if (opts.optimize !== false) {
        opts.optimize = true;
        delete opts.expand;
      }

      if (opts.optimize !== true) {
        var min = Math.min(arr[0], arr[1]);
        var max = Math.max(arr[0], arr[1]);
        var step = arr[2] || 1;

        if (opts.rangeLimit !== false && ((max - min) / step >= opts.rangeLimit)) {
          throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
        }
      }

      arr.push(opts);
      tok.segs = utils.fillRange.apply(null, arr);

      if (!tok.segs.length) {
        tok.escaped = true;
        tok.val = str;
        return tok;
      }

      if (opts.optimize === true) {
        tok.segs = utils.stringifyArray(tok.segs);
      }

      if (tok.segs === '') {
        tok.val = str;
      } else {
        tok.val = tok.segs[0];
      }
      return tok;
    }
  } else {
    tok.val = str;
  }
  return tok;
};

/**
 * Ensure commas inside brackets and parens are not split.
 * @param {Object} `tok` Token from the `split-string` module
 * @return {undefined}
 */

utils.escapeBrackets = function(options) {
  return function(tok) {
    if (tok.escaped && tok.val === 'b') {
      tok.val = '\\b';
      return;
    }

    if (tok.val !== '(' && tok.val !== '[') return;
    var opts = utils.extend({}, options);
    var brackets = [];
    var parens = [];
    var stack = [];
    var val = tok.val;
    var str = tok.str;
    var i = tok.idx - 1;

    while (++i < str.length) {
      var ch = str[i];

      if (ch === '\\') {
        val += (opts.keepEscaping === false ? '' : ch) + str[++i];
        continue;
      }

      if (ch === '(') {
        parens.push(ch);
        stack.push(ch);
      }

      if (ch === '[') {
        brackets.push(ch);
        stack.push(ch);
      }

      if (ch === ')') {
        parens.pop();
        stack.pop();
        if (!stack.length) {
          val += ch;
          break;
        }
      }

      if (ch === ']') {
        brackets.pop();
        stack.pop();
        if (!stack.length) {
          val += ch;
          break;
        }
      }
      val += ch;
    }

    tok.split = false;
    tok.val = val.slice(1);
    tok.idx = i;
  };
};

/**
 * Returns true if the given string looks like a regex quantifier
 * @return {Boolean}
 */

utils.isQuantifier = function(str) {
  return /^(?:[0-9]?,[0-9]|[0-9],)$/.test(str);
};

/**
 * Cast `val` to an array.
 * @param {*} `val`
 */

utils.stringifyArray = function(arr) {
  return [utils.arrayify(arr).join('|')];
};

/**
 * Cast `val` to an array.
 * @param {*} `val`
 */

utils.arrayify = function(arr) {
  if (typeof arr === 'undefined') {
    return [];
  }
  if (typeof arr === 'string') {
    return [arr];
  }
  return arr;
};

/**
 * Returns true if the given `str` is a non-empty string
 * @return {Boolean}
 */

utils.isString = function(str) {
  return str != null && typeof str === 'string';
};

/**
 * Get the last element from `array`
 * @param {Array} `array`
 * @return {*}
 */

utils.last = function(arr, n) {
  return arr[arr.length - (n || 1)];
};

utils.escapeRegex = function(str) {
  return str.replace(/\\?([!^*?()[\]{}+?/])/g, '\\$1');
};


/***/ }),

/***/ "./node_modules/braces/node_modules/extend-shallow/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/braces/node_modules/extend-shallow/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/cache-base/index.js":
/*!******************************************!*\
  !*** ./node_modules/cache-base/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var visit = __webpack_require__(/*! collection-visit */ "./node_modules/collection-visit/index.js");
var toPath = __webpack_require__(/*! to-object-path */ "./node_modules/to-object-path/index.js");
var union = __webpack_require__(/*! union-value */ "./node_modules/union-value/index.js");
var del = __webpack_require__(/*! unset-value */ "./node_modules/unset-value/index.js");
var get = __webpack_require__(/*! get-value */ "./node_modules/get-value/index.js");
var has = __webpack_require__(/*! has-value */ "./node_modules/has-value/index.js");
var set = __webpack_require__(/*! set-value */ "./node_modules/set-value/index.js");

/**
 * Create a `Cache` constructor that when instantiated will
 * store values on the given `prop`.
 *
 * ```js
 * var Cache = require('cache-base').namespace('data');
 * var cache = new Cache();
 *
 * cache.set('foo', 'bar');
 * //=> {data: {foo: 'bar'}}
 * ```
 * @param {String} `prop` The property name to use for storing values.
 * @return {Function} Returns a custom `Cache` constructor
 * @api public
 */

function namespace(prop) {

  /**
   * Create a new `Cache`. Internally the `Cache` constructor is created using
   * the `namespace` function, with `cache` defined as the storage object.
   *
   * ```js
   * var app = new Cache();
   * ```
   * @param {Object} `cache` Optionally pass an object to initialize with.
   * @constructor
   * @api public
   */

  function Cache(cache) {
    if (prop) {
      this[prop] = {};
    }
    if (cache) {
      this.set(cache);
    }
  }

  /**
   * Inherit Emitter
   */

  Emitter(Cache.prototype);

  /**
   * Assign `value` to `key`. Also emits `set` with
   * the key and value.
   *
   * ```js
   * app.on('set', function(key, val) {
   *   // do something when `set` is emitted
   * });
   *
   * app.set(key, value);
   *
   * // also takes an object or array
   * app.set({name: 'Halle'});
   * app.set([{foo: 'bar'}, {baz: 'quux'}]);
   * console.log(app);
   * //=> {name: 'Halle', foo: 'bar', baz: 'quux'}
   * ```
   *
   * @name .set
   * @emits `set` with `key` and `value` as arguments.
   * @param {String} `key`
   * @param {any} `value`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.set = function(key, val) {
    if (Array.isArray(key) && arguments.length === 2) {
      key = toPath(key);
    }
    if (isObject(key) || Array.isArray(key)) {
      this.visit('set', key);
    } else {
      set(prop ? this[prop] : this, key, val);
      this.emit('set', key, val);
    }
    return this;
  };

  /**
   * Union `array` to `key`. Also emits `set` with
   * the key and value.
   *
   * ```js
   * app.union('a.b', ['foo']);
   * app.union('a.b', ['bar']);
   * console.log(app.get('a'));
   * //=> {b: ['foo', 'bar']}
   * ```
   * @name .union
   * @param {String} `key`
   * @param {any} `value`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.union = function(key, val) {
    if (Array.isArray(key) && arguments.length === 2) {
      key = toPath(key);
    }
    var ctx = prop ? this[prop] : this;
    union(ctx, key, arrayify(val));
    this.emit('union', val);
    return this;
  };

  /**
   * Return the value of `key`. Dot notation may be used
   * to get [nested property values][get-value].
   *
   * ```js
   * app.set('a.b.c', 'd');
   * app.get('a.b');
   * //=> {c: 'd'}
   *
   * app.get(['a', 'b']);
   * //=> {c: 'd'}
   * ```
   *
   * @name .get
   * @emits `get` with `key` and `value` as arguments.
   * @param {String} `key` The name of the property to get. Dot-notation may be used.
   * @return {any} Returns the value of `key`
   * @api public
   */

  Cache.prototype.get = function(key) {
    key = toPath(arguments);

    var ctx = prop ? this[prop] : this;
    var val = get(ctx, key);

    this.emit('get', key, val);
    return val;
  };

  /**
   * Return true if app has a stored value for `key`,
   * false only if value is `undefined`.
   *
   * ```js
   * app.set('foo', 'bar');
   * app.has('foo');
   * //=> true
   * ```
   *
   * @name .has
   * @emits `has` with `key` and true or false as arguments.
   * @param {String} `key`
   * @return {Boolean}
   * @api public
   */

  Cache.prototype.has = function(key) {
    key = toPath(arguments);

    var ctx = prop ? this[prop] : this;
    var val = get(ctx, key);

    var has = typeof val !== 'undefined';
    this.emit('has', key, has);
    return has;
  };

  /**
   * Delete one or more properties from the instance.
   *
   * ```js
   * app.del(); // delete all
   * // or
   * app.del('foo');
   * // or
   * app.del(['foo', 'bar']);
   * ```
   * @name .del
   * @emits `del` with the `key` as the only argument.
   * @param {String|Array} `key` Property name or array of property names.
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.del = function(key) {
    if (Array.isArray(key)) {
      this.visit('del', key);
    } else {
      del(prop ? this[prop] : this, key);
      this.emit('del', key);
    }
    return this;
  };

  /**
   * Reset the entire cache to an empty object.
   *
   * ```js
   * app.clear();
   * ```
   * @api public
   */

  Cache.prototype.clear = function() {
    if (prop) {
      this[prop] = {};
    }
  };

  /**
   * Visit `method` over the properties in the given object, or map
   * visit over the object-elements in an array.
   *
   * @name .visit
   * @param {String} `method` The name of the `base` method to call.
   * @param {Object|Array} `val` The object or array to iterate over.
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.visit = function(method, val) {
    visit(this, method, val);
    return this;
  };

  return Cache;
}

/**
 * Cast val to an array
 */

function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
}

/**
 * Expose `Cache`
 */

module.exports = namespace();

/**
 * Expose `Cache.namespace`
 */

module.exports.namespace = namespace;


/***/ }),

/***/ "./node_modules/chokidar/index.js":
/*!****************************************!*\
  !*** ./node_modules/chokidar/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var sysPath = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var asyncEach = __webpack_require__(/*! async-each */ "./node_modules/async-each/index.js");
var anymatch = __webpack_require__(/*! anymatch */ "./node_modules/anymatch/index.js");
var globParent = __webpack_require__(/*! glob-parent */ "./node_modules/glob-parent/index.js");
var isGlob = __webpack_require__(/*! is-glob */ "./node_modules/is-glob/index.js");
var isAbsolute = __webpack_require__(/*! path-is-absolute */ "./node_modules/path-is-absolute/index.js");
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
var braces = __webpack_require__(/*! braces */ "./node_modules/braces/index.js");
var normalizePath = __webpack_require__(/*! normalize-path */ "./node_modules/normalize-path/index.js");
var upath = __webpack_require__(/*! upath */ "./node_modules/upath/build/code/upath.js");

var NodeFsHandler = __webpack_require__(/*! ./lib/nodefs-handler */ "./node_modules/chokidar/lib/nodefs-handler.js");
var FsEventsHandler = __webpack_require__(/*! ./lib/fsevents-handler */ "./node_modules/chokidar/lib/fsevents-handler.js");

var arrify = function(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
};

var flatten = function(list, result) {
  if (result == null) result = [];
  list.forEach(function(item) {
    if (Array.isArray(item)) {
      flatten(item, result);
    } else {
      result.push(item);
    }
  });
  return result;
};

// Little isString util for use in Array#every.
var isString = function(thing) {
  return typeof thing === 'string';
};

// Public: Main class.
// Watches files & directories for changes.
//
// * _opts - object, chokidar options hash
//
// Emitted events:
// `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
//
// Examples
//
//  var watcher = new FSWatcher()
//    .add(directories)
//    .on('add', path => console.log('File', path, 'was added'))
//    .on('change', path => console.log('File', path, 'was changed'))
//    .on('unlink', path => console.log('File', path, 'was removed'))
//    .on('all', (event, path) => console.log(path, ' emitted ', event))
//
function FSWatcher(_opts) {
  EventEmitter.call(this);
  var opts = {};
  // in case _opts that is passed in is a frozen object
  if (_opts) for (var opt in _opts) opts[opt] = _opts[opt];
  this._watched = Object.create(null);
  this._closers = Object.create(null);
  this._ignoredPaths = Object.create(null);
  Object.defineProperty(this, '_globIgnored', {
    get: function() { return Object.keys(this._ignoredPaths); }
  });
  this.closed = false;
  this._throttled = Object.create(null);
  this._symlinkPaths = Object.create(null);

  function undef(key) {
    return opts[key] === undefined;
  }

  // Set up default options.
  if (undef('persistent')) opts.persistent = true;
  if (undef('ignoreInitial')) opts.ignoreInitial = false;
  if (undef('ignorePermissionErrors')) opts.ignorePermissionErrors = false;
  if (undef('interval')) opts.interval = 100;
  if (undef('binaryInterval')) opts.binaryInterval = 300;
  if (undef('disableGlobbing')) opts.disableGlobbing = false;
  this.enableBinaryInterval = opts.binaryInterval !== opts.interval;

  // Enable fsevents on OS X when polling isn't explicitly enabled.
  if (undef('useFsEvents')) opts.useFsEvents = !opts.usePolling;

  // If we can't use fsevents, ensure the options reflect it's disabled.
  if (!FsEventsHandler.canUse()) opts.useFsEvents = false;

  // Use polling on Mac if not using fsevents.
  // Other platforms use non-polling fs.watch.
  if (undef('usePolling') && !opts.useFsEvents) {
    opts.usePolling = process.platform === 'darwin';
  }

  // Global override (useful for end-developers that need to force polling for all
  // instances of chokidar, regardless of usage/dependency depth)
  var envPoll = Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).CHOKIDAR_USEPOLLING;
  if (envPoll !== undefined) {
    var envLower = envPoll.toLowerCase();

    if (envLower === 'false' || envLower === '0') {
      opts.usePolling = false;
    } else if (envLower === 'true' || envLower === '1') {
      opts.usePolling = true;
    } else {
      opts.usePolling = !!envLower
    }
  }
  var envInterval = Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).CHOKIDAR_INTERVAL;
  if (envInterval) {
    opts.interval = parseInt(envInterval);
  }

  // Editor atomic write normalization enabled by default with fs.watch
  if (undef('atomic')) opts.atomic = !opts.usePolling && !opts.useFsEvents;
  if (opts.atomic) this._pendingUnlinks = Object.create(null);

  if (undef('followSymlinks')) opts.followSymlinks = true;

  if (undef('awaitWriteFinish')) opts.awaitWriteFinish = false;
  if (opts.awaitWriteFinish === true) opts.awaitWriteFinish = {};
  var awf = opts.awaitWriteFinish;
  if (awf) {
    if (!awf.stabilityThreshold) awf.stabilityThreshold = 2000;
    if (!awf.pollInterval) awf.pollInterval = 100;

    this._pendingWrites = Object.create(null);
  }
  if (opts.ignored) opts.ignored = arrify(opts.ignored);

  this._isntIgnored = function(path, stat) {
    return !this._isIgnored(path, stat);
  }.bind(this);

  var readyCalls = 0;
  this._emitReady = function() {
    if (++readyCalls >= this._readyCount) {
      this._emitReady = Function.prototype;
      this._readyEmitted = true;
      // use process.nextTick to allow time for listener to be bound
      process.nextTick(this.emit.bind(this, 'ready'));
    }
  }.bind(this);

  this.options = opts;

  // You???re frozen when your heart???s not open.
  Object.freeze(opts);
}

inherits(FSWatcher, EventEmitter);

// Common helpers
// --------------

// Private method: Normalize and emit events
//
// * event     - string, type of event
// * path      - string, file or directory path
// * val[1..3] - arguments to be passed with event
//
// Returns the error if defined, otherwise the value of the
// FSWatcher instance's `closed` flag
FSWatcher.prototype._emit = function(event, path, val1, val2, val3) {
  if (this.options.cwd) path = sysPath.relative(this.options.cwd, path);
  var args = [event, path];
  if (val3 !== undefined) args.push(val1, val2, val3);
  else if (val2 !== undefined) args.push(val1, val2);
  else if (val1 !== undefined) args.push(val1);

  var awf = this.options.awaitWriteFinish;
  if (awf && this._pendingWrites[path]) {
    this._pendingWrites[path].lastChange = new Date();
    return this;
  }

  if (this.options.atomic) {
    if (event === 'unlink') {
      this._pendingUnlinks[path] = args;
      setTimeout(function() {
        Object.keys(this._pendingUnlinks).forEach(function(path) {
          this.emit.apply(this, this._pendingUnlinks[path]);
          this.emit.apply(this, ['all'].concat(this._pendingUnlinks[path]));
          delete this._pendingUnlinks[path];
        }.bind(this));
      }.bind(this), typeof this.options.atomic === "number"
        ? this.options.atomic
        : 100);
      return this;
    } else if (event === 'add' && this._pendingUnlinks[path]) {
      event = args[0] = 'change';
      delete this._pendingUnlinks[path];
    }
  }

  var emitEvent = function() {
    this.emit.apply(this, args);
    if (event !== 'error') this.emit.apply(this, ['all'].concat(args));
  }.bind(this);

  if (awf && (event === 'add' || event === 'change') && this._readyEmitted) {
    var awfEmit = function(err, stats) {
      if (err) {
        event = args[0] = 'error';
        args[1] = err;
        emitEvent();
      } else if (stats) {
        // if stats doesn't exist the file must have been deleted
        if (args.length > 2) {
          args[2] = stats;
        } else {
          args.push(stats);
        }
        emitEvent();
      }
    };

    this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
    return this;
  }

  if (event === 'change') {
    if (!this._throttle('change', path, 50)) return this;
  }

  if (
    this.options.alwaysStat && val1 === undefined &&
    (event === 'add' || event === 'addDir' || event === 'change')
  ) {
    var fullPath = this.options.cwd ? sysPath.join(this.options.cwd, path) : path;
    fs.stat(fullPath, function(error, stats) {
      // Suppress event when fs.stat fails, to avoid sending undefined 'stat'
      if (error || !stats) return;

      args.push(stats);
      emitEvent();
    });
  } else {
    emitEvent();
  }

  return this;
};

// Private method: Common handler for errors
//
// * error  - object, Error instance
//
// Returns the error if defined, otherwise the value of the
// FSWatcher instance's `closed` flag
FSWatcher.prototype._handleError = function(error) {
  var code = error && error.code;
  var ipe = this.options.ignorePermissionErrors;
  if (error &&
    code !== 'ENOENT' &&
    code !== 'ENOTDIR' &&
    (!ipe || (code !== 'EPERM' && code !== 'EACCES'))
  ) this.emit('error', error);
  return error || this.closed;
};

// Private method: Helper utility for throttling
//
// * action  - string, type of action being throttled
// * path    - string, path being acted upon
// * timeout - int, duration of time to suppress duplicate actions
//
// Returns throttle tracking object or false if action should be suppressed
FSWatcher.prototype._throttle = function(action, path, timeout) {
  if (!(action in this._throttled)) {
    this._throttled[action] = Object.create(null);
  }
  var throttled = this._throttled[action];
  if (path in throttled) {
    throttled[path].count++;
    return false;
  }
  function clear() {
    var count = throttled[path] ? throttled[path].count : 0;
    delete throttled[path];
    clearTimeout(timeoutObject);
    return count;
  }
  var timeoutObject = setTimeout(clear, timeout);
  throttled[path] = {timeoutObject: timeoutObject, clear: clear, count: 0};
  return throttled[path];
};

// Private method: Awaits write operation to finish
//
// * path    - string, path being acted upon
// * threshold - int, time in milliseconds a file size must be fixed before
//                    acknowledging write operation is finished
// * awfEmit - function, to be called when ready for event to be emitted
// Polls a newly created file for size variations. When files size does not
// change for 'threshold' milliseconds calls callback.
FSWatcher.prototype._awaitWriteFinish = function(path, threshold, event, awfEmit) {
  var timeoutHandler;

  var fullPath = path;
  if (this.options.cwd && !isAbsolute(path)) {
    fullPath = sysPath.join(this.options.cwd, path);
  }

  var now = new Date();

  var awaitWriteFinish = (function (prevStat) {
    fs.stat(fullPath, function(err, curStat) {
      if (err || !(path in this._pendingWrites)) {
        if (err && err.code !== 'ENOENT') awfEmit(err);
        return;
      }

      var now = new Date();

      if (prevStat && curStat.size != prevStat.size) {
        this._pendingWrites[path].lastChange = now;
      }

      if (now - this._pendingWrites[path].lastChange >= threshold) {
        delete this._pendingWrites[path];
        awfEmit(null, curStat);
      } else {
        timeoutHandler = setTimeout(
          awaitWriteFinish.bind(this, curStat),
          this.options.awaitWriteFinish.pollInterval
        );
      }
    }.bind(this));
  }.bind(this));

  if (!(path in this._pendingWrites)) {
    this._pendingWrites[path] = {
      lastChange: now,
      cancelWait: function() {
        delete this._pendingWrites[path];
        clearTimeout(timeoutHandler);
        return event;
      }.bind(this)
    };
    timeoutHandler = setTimeout(
      awaitWriteFinish.bind(this),
      this.options.awaitWriteFinish.pollInterval
    );
  }
};

// Private method: Determines whether user has asked to ignore this path
//
// * path  - string, path to file or directory
// * stats - object, result of fs.stat
//
// Returns boolean
var dotRe = /\..*\.(sw[px])$|\~$|\.subl.*\.tmp/;
FSWatcher.prototype._isIgnored = function(path, stats) {
  if (this.options.atomic && dotRe.test(path)) return true;

  if (!this._userIgnored) {
    var cwd = this.options.cwd;
    var ignored = this.options.ignored;
    if (cwd && ignored) {
      ignored = ignored.map(function (path) {
        if (typeof path !== 'string') return path;
        return upath.normalize(isAbsolute(path) ? path : sysPath.join(cwd, path));
      });
    }
    var paths = arrify(ignored)
      .filter(function(path) {
        return typeof path === 'string' && !isGlob(path);
      }).map(function(path) {
        return path + '/**';
      });
    this._userIgnored = anymatch(
      this._globIgnored.concat(ignored).concat(paths)
    );
  }

  return this._userIgnored([path, stats]);
};

// Private method: Provides a set of common helpers and properties relating to
// symlink and glob handling
//
// * path - string, file, directory, or glob pattern being watched
// * depth - int, at any depth > 0, this isn't a glob
//
// Returns object containing helpers for this path
var replacerRe = /^\.[\/\\]/;
FSWatcher.prototype._getWatchHelpers = function(path, depth) {
  path = path.replace(replacerRe, '');
  var watchPath = depth || this.options.disableGlobbing || !isGlob(path) ? path : globParent(path);
  var fullWatchPath = sysPath.resolve(watchPath);
  var hasGlob = watchPath !== path;
  var globFilter = hasGlob ? anymatch(path) : false;
  var follow = this.options.followSymlinks;
  var globSymlink = hasGlob && follow ? null : false;

  var checkGlobSymlink = function(entry) {
    // only need to resolve once
    // first entry should always have entry.parentDir === ''
    if (globSymlink == null) {
      globSymlink = entry.fullParentDir === fullWatchPath ? false : {
        realPath: entry.fullParentDir,
        linkPath: fullWatchPath
      };
    }

    if (globSymlink) {
      return entry.fullPath.replace(globSymlink.realPath, globSymlink.linkPath);
    }

    return entry.fullPath;
  };

  var entryPath = function(entry) {
    return sysPath.join(watchPath,
      sysPath.relative(watchPath, checkGlobSymlink(entry))
    );
  };

  var filterPath = function(entry) {
    if (entry.stat && entry.stat.isSymbolicLink()) return filterDir(entry);
    var resolvedPath = entryPath(entry);
    return (!hasGlob || globFilter(resolvedPath)) &&
      this._isntIgnored(resolvedPath, entry.stat) &&
      (this.options.ignorePermissionErrors ||
        this._hasReadPermissions(entry.stat));
  }.bind(this);

  var getDirParts = function(path) {
    if (!hasGlob) return false;
    var parts = [];
    var expandedPath = braces.expand(path);
    expandedPath.forEach(function(path) {
      parts.push(sysPath.relative(watchPath, path).split(/[\/\\]/));
    });
    return parts;
  };

  var dirParts = getDirParts(path);
  if (dirParts) {
    dirParts.forEach(function(parts) {
      if (parts.length > 1) parts.pop();
    });
  }
  var unmatchedGlob;

  var filterDir = function(entry) {
    if (hasGlob) {
      var entryParts = getDirParts(checkGlobSymlink(entry));
      var globstar = false;
      unmatchedGlob = !dirParts.some(function(parts) {
        return parts.every(function(part, i) {
          if (part === '**') globstar = true;
          return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i]);
        });
      });
    }
    return !unmatchedGlob && this._isntIgnored(entryPath(entry), entry.stat);
  }.bind(this);

  return {
    followSymlinks: follow,
    statMethod: follow ? 'stat' : 'lstat',
    path: path,
    watchPath: watchPath,
    entryPath: entryPath,
    hasGlob: hasGlob,
    globFilter: globFilter,
    filterPath: filterPath,
    filterDir: filterDir
  };
};

// Directory helpers
// -----------------

// Private method: Provides directory tracking objects
//
// * directory - string, path of the directory
//
// Returns the directory's tracking object
FSWatcher.prototype._getWatchedDir = function(directory) {
  var dir = sysPath.resolve(directory);
  var watcherRemove = this._remove.bind(this);
  if (!(dir in this._watched)) this._watched[dir] = {
    _items: Object.create(null),
    add: function(item) {
      if (item !== '.' && item !== '..') this._items[item] = true;
    },
    remove: function(item) {
      delete this._items[item];
      if (!this.children().length) {
        fs.readdir(dir, function(err) {
          if (err) watcherRemove(sysPath.dirname(dir), sysPath.basename(dir));
        });
      }
    },
    has: function(item) {return item in this._items;},
    children: function() {return Object.keys(this._items);}
  };
  return this._watched[dir];
};

// File helpers
// ------------

// Private method: Check for read permissions
// Based on this answer on SO: http://stackoverflow.com/a/11781404/1358405
//
// * stats - object, result of fs.stat
//
// Returns boolean
FSWatcher.prototype._hasReadPermissions = function(stats) {
  return Boolean(4 & parseInt(((stats && stats.mode) & 0x1ff).toString(8)[0], 10));
};

// Private method: Handles emitting unlink events for
// files and directories, and via recursion, for
// files and directories within directories that are unlinked
//
// * directory - string, directory within which the following item is located
// * item      - string, base path of item/directory
//
// Returns nothing
FSWatcher.prototype._remove = function(directory, item) {
  // if what is being deleted is a directory, get that directory's paths
  // for recursive deleting and cleaning of watched object
  // if it is not a directory, nestedDirectoryChildren will be empty array
  var path = sysPath.join(directory, item);
  var fullPath = sysPath.resolve(path);
  var isDirectory = this._watched[path] || this._watched[fullPath];

  // prevent duplicate handling in case of arriving here nearly simultaneously
  // via multiple paths (such as _handleFile and _handleDir)
  if (!this._throttle('remove', path, 100)) return;

  // if the only watched file is removed, watch for its return
  var watchedDirs = Object.keys(this._watched);
  if (!isDirectory && !this.options.useFsEvents && watchedDirs.length === 1) {
    this.add(directory, item, true);
  }

  // This will create a new entry in the watched object in either case
  // so we got to do the directory check beforehand
  var nestedDirectoryChildren = this._getWatchedDir(path).children();

  // Recursively remove children directories / files.
  nestedDirectoryChildren.forEach(function(nestedItem) {
    this._remove(path, nestedItem);
  }, this);

  // Check if item was on the watched list and remove it
  var parent = this._getWatchedDir(directory);
  var wasTracked = parent.has(item);
  parent.remove(item);

  // If we wait for this file to be fully written, cancel the wait.
  var relPath = path;
  if (this.options.cwd) relPath = sysPath.relative(this.options.cwd, path);
  if (this.options.awaitWriteFinish && this._pendingWrites[relPath]) {
    var event = this._pendingWrites[relPath].cancelWait();
    if (event === 'add') return;
  }

  // The Entry will either be a directory that just got removed
  // or a bogus entry to a file, in either case we have to remove it
  delete this._watched[path];
  delete this._watched[fullPath];
  var eventName = isDirectory ? 'unlinkDir' : 'unlink';
  if (wasTracked && !this._isIgnored(path)) this._emit(eventName, path);

  // Avoid conflicts if we later create another file with the same name
  if (!this.options.useFsEvents) {
    this._closePath(path);
  }
};

FSWatcher.prototype._closePath = function(path) {
  if (!this._closers[path]) return;
  this._closers[path].forEach(function(closer) {
    closer();
  });
  delete this._closers[path];
  this._getWatchedDir(sysPath.dirname(path)).remove(sysPath.basename(path));
}

// Public method: Adds paths to be watched on an existing FSWatcher instance

// * paths     - string or array of strings, file/directory paths and/or globs
// * _origAdd  - private boolean, for handling non-existent paths to be watched
// * _internal - private boolean, indicates a non-user add

// Returns an instance of FSWatcher for chaining.
FSWatcher.prototype.add = function(paths, _origAdd, _internal) {
  var disableGlobbing = this.options.disableGlobbing;
  var cwd = this.options.cwd;
  this.closed = false;
  paths = flatten(arrify(paths));

  if (!paths.every(isString)) {
    throw new TypeError('Non-string provided as watch path: ' + paths);
  }

  if (cwd) paths = paths.map(function(path) {
    var absPath;
    if (isAbsolute(path)) {
      absPath = path;
    } else if (path[0] === '!') {
      absPath = '!' + sysPath.join(cwd, path.substring(1));
    } else {
      absPath = sysPath.join(cwd, path);
    }

    // Check `path` instead of `absPath` because the cwd portion can't be a glob
    if (disableGlobbing || !isGlob(path)) {
      return absPath;
    } else {
      return normalizePath(absPath);
    }
  });

  // set aside negated glob strings
  paths = paths.filter(function(path) {
    if (path[0] === '!') {
      this._ignoredPaths[path.substring(1)] = true;
    } else {
      // if a path is being added that was previously ignored, stop ignoring it
      delete this._ignoredPaths[path];
      delete this._ignoredPaths[path + '/**'];

      // reset the cached userIgnored anymatch fn
      // to make ignoredPaths changes effective
      this._userIgnored = null;

      return true;
    }
  }, this);

  if (this.options.useFsEvents && FsEventsHandler.canUse()) {
    if (!this._readyCount) this._readyCount = paths.length;
    if (this.options.persistent) this._readyCount *= 2;
    paths.forEach(this._addToFsEvents, this);
  } else {
    if (!this._readyCount) this._readyCount = 0;
    this._readyCount += paths.length;
    asyncEach(paths, function(path, next) {
      this._addToNodeFs(path, !_internal, 0, 0, _origAdd, function(err, res) {
        if (res) this._emitReady();
        next(err, res);
      }.bind(this));
    }.bind(this), function(error, results) {
      results.forEach(function(item) {
        if (!item || this.closed) return;
        this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
      }, this);
    }.bind(this));
  }

  return this;
};

// Public method: Close watchers or start ignoring events from specified paths.

// * paths     - string or array of strings, file/directory paths and/or globs

// Returns instance of FSWatcher for chaining.
FSWatcher.prototype.unwatch = function(paths) {
  if (this.closed) return this;
  paths = flatten(arrify(paths));

  paths.forEach(function(path) {
    // convert to absolute path unless relative path already matches
    if (!isAbsolute(path) && !this._closers[path]) {
      if (this.options.cwd) path = sysPath.join(this.options.cwd, path);
      path = sysPath.resolve(path);
    }

    this._closePath(path);

    this._ignoredPaths[path] = true;
    if (path in this._watched) {
      this._ignoredPaths[path + '/**'] = true;
    }

    // reset the cached userIgnored anymatch fn
    // to make ignoredPaths changes effective
    this._userIgnored = null;
  }, this);

  return this;
};

// Public method: Close watchers and remove all listeners from watched paths.

// Returns instance of FSWatcher for chaining.
FSWatcher.prototype.close = function() {
  if (this.closed) return this;

  this.closed = true;
  Object.keys(this._closers).forEach(function(watchPath) {
    this._closers[watchPath].forEach(function(closer) {
      closer();
    });
    delete this._closers[watchPath];
  }, this);
  this._watched = Object.create(null);

  this.removeAllListeners();
  return this;
};

// Public method: Expose list of watched paths

// Returns object w/ dir paths as keys and arrays of contained paths as values.
FSWatcher.prototype.getWatched = function() {
  var watchList = {};
  Object.keys(this._watched).forEach(function(dir) {
    var key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
    watchList[key || '.'] = Object.keys(this._watched[dir]._items).sort();
  }.bind(this));
  return watchList;
};

// Attach watch handler prototype methods
function importHandler(handler) {
  Object.keys(handler.prototype).forEach(function(method) {
    FSWatcher.prototype[method] = handler.prototype[method];
  });
}
importHandler(NodeFsHandler);
if (FsEventsHandler.canUse()) importHandler(FsEventsHandler);

// Export FSWatcher class
exports.FSWatcher = FSWatcher;

// Public function: Instantiates watcher with paths to be tracked.

// * paths     - string or array of strings, file/directory paths and/or globs
// * options   - object, chokidar options

// Returns an instance of FSWatcher for chaining.
exports.watch = function(paths, options) {
  return new FSWatcher(options).add(paths);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/chokidar/lib/fsevents-handler.js":
/*!*******************************************************!*\
  !*** ./node_modules/chokidar/lib/fsevents-handler.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var sysPath = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var readdirp = __webpack_require__(/*! readdirp */ "./node_modules/readdirp/readdirp.js");
var fsevents;
try { fsevents = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fsevents'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); } catch (error) {
  if (Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR) console.error(error)
}

// fsevents instance helper functions

// object to hold per-process fsevents instances
// (may be shared across chokidar FSWatcher instances)
var FSEventsWatchers = Object.create(null);

// Threshold of duplicate path prefixes at which to start
// consolidating going forward
var consolidateThreshhold = 10;

// Private function: Instantiates the fsevents interface

// * path       - string, path to be watched
// * callback   - function, called when fsevents is bound and ready

// Returns new fsevents instance
function createFSEventsInstance(path, callback) {
  return (new fsevents(path)).on('fsevent', callback).start();
}

// Private function: Instantiates the fsevents interface or binds listeners
// to an existing one covering the same file tree

// * path       - string, path to be watched
// * realPath   - string, real path (in case of symlinks)
// * listener   - function, called when fsevents emits events
// * rawEmitter - function, passes data to listeners of the 'raw' event

// Returns close function
function setFSEventsListener(path, realPath, listener, rawEmitter) {
  var watchPath = sysPath.extname(path) ? sysPath.dirname(path) : path;
  var watchContainer;
  var parentPath = sysPath.dirname(watchPath);

  // If we've accumulated a substantial number of paths that
  // could have been consolidated by watching one directory
  // above the current one, create a watcher on the parent
  // path instead, so that we do consolidate going forward.
  if (couldConsolidate(parentPath)) {
    watchPath = parentPath;
  }

  var resolvedPath = sysPath.resolve(path);
  var hasSymlink = resolvedPath !== realPath;
  function filteredListener(fullPath, flags, info) {
    if (hasSymlink) fullPath = fullPath.replace(realPath, resolvedPath);
    if (
      fullPath === resolvedPath ||
      !fullPath.indexOf(resolvedPath + sysPath.sep)
    ) listener(fullPath, flags, info);
  }

  // check if there is already a watcher on a parent path
  // modifies `watchPath` to the parent path when it finds a match
  function watchedParent() {
    return Object.keys(FSEventsWatchers).some(function(watchedPath) {
      // condition is met when indexOf returns 0
      if (!realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep)) {
        watchPath = watchedPath;
        return true;
      }
    });
  }

  if (watchPath in FSEventsWatchers || watchedParent()) {
    watchContainer = FSEventsWatchers[watchPath];
    watchContainer.listeners.push(filteredListener);
  } else {
    watchContainer = FSEventsWatchers[watchPath] = {
      listeners: [filteredListener],
      rawEmitters: [rawEmitter],
      watcher: createFSEventsInstance(watchPath, function(fullPath, flags) {
        var info = fsevents.getInfo(fullPath, flags);
        watchContainer.listeners.forEach(function(listener) {
          listener(fullPath, flags, info);
        });
        watchContainer.rawEmitters.forEach(function(emitter) {
          emitter(info.event, fullPath, info);
        });
      })
    };
  }
  var listenerIndex = watchContainer.listeners.length - 1;

  // removes this instance's listeners and closes the underlying fsevents
  // instance if there are no more listeners left
  return function close() {
    delete watchContainer.listeners[listenerIndex];
    delete watchContainer.rawEmitters[listenerIndex];
    if (!Object.keys(watchContainer.listeners).length) {
      watchContainer.watcher.stop();
      delete FSEventsWatchers[watchPath];
    }
  };
}

// Decide whether or not we should start a new higher-level
// parent watcher
function couldConsolidate(path) {
  var keys = Object.keys(FSEventsWatchers);
  var count = 0;

  for (var i = 0, len = keys.length; i < len; ++i) {
    var watchPath = keys[i];
    if (watchPath.indexOf(path) === 0) {
      count++;
      if (count >= consolidateThreshhold) {
        return true;
      }
    }
  }

  return false;
}

// returns boolean indicating whether fsevents can be used
function canUse() {
  return fsevents && Object.keys(FSEventsWatchers).length < 128;
}

// determines subdirectory traversal levels from root to path
function depth(path, root) {
  var i = 0;
  while (!path.indexOf(root) && (path = sysPath.dirname(path)) !== root) i++;
  return i;
}

// fake constructor for attaching fsevents-specific prototype methods that
// will be copied to FSWatcher's prototype
function FsEventsHandler() {}

// Private method: Handle symlinks encountered during directory scan

// * watchPath  - string, file/dir path to be watched with fsevents
// * realPath   - string, real path (in case of symlinks)
// * transform  - function, path transformer
// * globFilter - function, path filter in case a glob pattern was provided

// Returns close function for the watcher instance
FsEventsHandler.prototype._watchWithFsEvents =
function(watchPath, realPath, transform, globFilter) {
  if (this._isIgnored(watchPath)) return;
  var watchCallback = function(fullPath, flags, info) {
    if (
      this.options.depth !== undefined &&
      depth(fullPath, realPath) > this.options.depth
    ) return;
    var path = transform(sysPath.join(
      watchPath, sysPath.relative(watchPath, fullPath)
    ));
    if (globFilter && !globFilter(path)) return;
    // ensure directories are tracked
    var parent = sysPath.dirname(path);
    var item = sysPath.basename(path);
    var watchedDir = this._getWatchedDir(
      info.type === 'directory' ? path : parent
    );
    var checkIgnored = function(stats) {
      if (this._isIgnored(path, stats)) {
        this._ignoredPaths[path] = true;
        if (stats && stats.isDirectory()) {
          this._ignoredPaths[path + '/**/*'] = true;
        }
        return true;
      } else {
        delete this._ignoredPaths[path];
        delete this._ignoredPaths[path + '/**/*'];
      }
    }.bind(this);

    var handleEvent = function(event) {
      if (checkIgnored()) return;

      if (event === 'unlink') {
        // suppress unlink events on never before seen files
        if (info.type === 'directory' || watchedDir.has(item)) {
          this._remove(parent, item);
        }
      } else {
        if (event === 'add') {
          // track new directories
          if (info.type === 'directory') this._getWatchedDir(path);

          if (info.type === 'symlink' && this.options.followSymlinks) {
            // push symlinks back to the top of the stack to get handled
            var curDepth = this.options.depth === undefined ?
              undefined : depth(fullPath, realPath) + 1;
            return this._addToFsEvents(path, false, true, curDepth);
          } else {
            // track new paths
            // (other than symlinks being followed, which will be tracked soon)
            this._getWatchedDir(parent).add(item);
          }
        }
        var eventName = info.type === 'directory' ? event + 'Dir' : event;
        this._emit(eventName, path);
        if (eventName === 'addDir') this._addToFsEvents(path, false, true);
      }
    }.bind(this);

    function addOrChange() {
      handleEvent(watchedDir.has(item) ? 'change' : 'add');
    }
    function checkFd() {
      fs.open(path, 'r', function(error, fd) {
        if (error) {
          error.code !== 'EACCES' ?
            handleEvent('unlink') : addOrChange();
        } else {
          fs.close(fd, function(err) {
            err && err.code !== 'EACCES' ?
              handleEvent('unlink') : addOrChange();
          });
        }
      });
    }
    // correct for wrong events emitted
    var wrongEventFlags = [
      69888, 70400, 71424, 72704, 73472, 131328, 131840, 262912
    ];
    if (wrongEventFlags.indexOf(flags) !== -1 || info.event === 'unknown') {
      if (typeof this.options.ignored === 'function') {
        fs.stat(path, function(error, stats) {
          if (checkIgnored(stats)) return;
          stats ? addOrChange() : handleEvent('unlink');
        });
      } else {
        checkFd();
      }
    } else {
      switch (info.event) {
      case 'created':
      case 'modified':
        return addOrChange();
      case 'deleted':
      case 'moved':
        return checkFd();
      }
    }
  }.bind(this);

  var closer = setFSEventsListener(
    watchPath,
    realPath,
    watchCallback,
    this.emit.bind(this, 'raw')
  );

  this._emitReady();
  return closer;
};

// Private method: Handle symlinks encountered during directory scan

// * linkPath   - string, path to symlink
// * fullPath   - string, absolute path to the symlink
// * transform  - function, pre-existing path transformer
// * curDepth   - int, level of subdirectories traversed to where symlink is

// Returns nothing
FsEventsHandler.prototype._handleFsEventsSymlink =
function(linkPath, fullPath, transform, curDepth) {
  // don't follow the same symlink more than once
  if (this._symlinkPaths[fullPath]) return;
  else this._symlinkPaths[fullPath] = true;

  this._readyCount++;

  fs.realpath(linkPath, function(error, linkTarget) {
    if (this._handleError(error) || this._isIgnored(linkTarget)) {
      return this._emitReady();
    }

    this._readyCount++;

    // add the linkTarget for watching with a wrapper for transform
    // that causes emitted paths to incorporate the link's path
    this._addToFsEvents(linkTarget || linkPath, function(path) {
      var dotSlash = '.' + sysPath.sep;
      var aliasedPath = linkPath;
      if (linkTarget && linkTarget !== dotSlash) {
        aliasedPath = path.replace(linkTarget, linkPath);
      } else if (path !== dotSlash) {
        aliasedPath = sysPath.join(linkPath, path);
      }
      return transform(aliasedPath);
    }, false, curDepth);
  }.bind(this));
};

// Private method: Handle added path with fsevents

// * path       - string, file/directory path or glob pattern
// * transform  - function, converts working path to what the user expects
// * forceAdd   - boolean, ensure add is emitted
// * priorDepth - int, level of subdirectories already traversed

// Returns nothing
FsEventsHandler.prototype._addToFsEvents =
function(path, transform, forceAdd, priorDepth) {

  // applies transform if provided, otherwise returns same value
  var processPath = typeof transform === 'function' ?
    transform : function(val) { return val; };

  var emitAdd = function(newPath, stats) {
    var pp = processPath(newPath);
    var isDir = stats.isDirectory();
    var dirObj = this._getWatchedDir(sysPath.dirname(pp));
    var base = sysPath.basename(pp);

    // ensure empty dirs get tracked
    if (isDir) this._getWatchedDir(pp);

    if (dirObj.has(base)) return;
    dirObj.add(base);

    if (!this.options.ignoreInitial || forceAdd === true) {
      this._emit(isDir ? 'addDir' : 'add', pp, stats);
    }
  }.bind(this);

  var wh = this._getWatchHelpers(path);

  // evaluate what is at the path we're being asked to watch
  fs[wh.statMethod](wh.watchPath, function(error, stats) {
    if (this._handleError(error) || this._isIgnored(wh.watchPath, stats)) {
      this._emitReady();
      return this._emitReady();
    }

    if (stats.isDirectory()) {
      // emit addDir unless this is a glob parent
      if (!wh.globFilter) emitAdd(processPath(path), stats);

      // don't recurse further if it would exceed depth setting
      if (priorDepth && priorDepth > this.options.depth) return;

      // scan the contents of the dir
      readdirp({
        root: wh.watchPath,
        entryType: 'all',
        fileFilter: wh.filterPath,
        directoryFilter: wh.filterDir,
        lstat: true,
        depth: this.options.depth - (priorDepth || 0)
      }).on('data', function(entry) {
        // need to check filterPath on dirs b/c filterDir is less restrictive
        if (entry.stat.isDirectory() && !wh.filterPath(entry)) return;

        var joinedPath = sysPath.join(wh.watchPath, entry.path);
        var fullPath = entry.fullPath;

        if (wh.followSymlinks && entry.stat.isSymbolicLink()) {
          // preserve the current depth here since it can't be derived from
          // real paths past the symlink
          var curDepth = this.options.depth === undefined ?
            undefined : depth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;

          this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
        } else {
          emitAdd(joinedPath, entry.stat);
        }
      }.bind(this)).on('error', function() {
        // Ignore readdirp errors
      }).on('end', this._emitReady);
    } else {
      emitAdd(wh.watchPath, stats);
      this._emitReady();
    }
  }.bind(this));

  if (this.options.persistent && forceAdd !== true) {
    var initWatch = function(error, realPath) {
      if (this.closed) return;
      var closer = this._watchWithFsEvents(
        wh.watchPath,
        sysPath.resolve(realPath || wh.watchPath),
        processPath,
        wh.globFilter
      );
      if (closer) {
        this._closers[path] = this._closers[path] || [];
        this._closers[path].push(closer);
      }
    }.bind(this);

    if (typeof transform === 'function') {
      // realpath has already been resolved
      initWatch();
    } else {
      fs.realpath(wh.watchPath, initWatch);
    }
  }
};

module.exports = FsEventsHandler;
module.exports.canUse = canUse;


/***/ }),

/***/ "./node_modules/chokidar/lib/nodefs-handler.js":
/*!*****************************************************!*\
  !*** ./node_modules/chokidar/lib/nodefs-handler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var sysPath = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var readdirp = __webpack_require__(/*! readdirp */ "./node_modules/readdirp/readdirp.js");
var isBinaryPath = __webpack_require__(/*! is-binary-path */ "./node_modules/is-binary-path/index.js");

// fs.watch helpers

// object to hold per-process fs.watch instances
// (may be shared across chokidar FSWatcher instances)
var FsWatchInstances = Object.create(null);


// Private function: Instantiates the fs.watch interface

// * path       - string, path to be watched
// * options    - object, options to be passed to fs.watch
// * listener   - function, main event handler
// * errHandler - function, handler which emits info about errors
// * emitRaw    - function, handler which emits raw event data

// Returns new fsevents instance
function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
  var handleEvent = function(rawEvent, evPath) {
    listener(path);
    emitRaw(rawEvent, evPath, {watchedPath: path});

    // emit based on events occurring for files from a directory's watcher in
    // case the file's watcher misses it (and rely on throttling to de-dupe)
    if (evPath && path !== evPath) {
      fsWatchBroadcast(
        sysPath.resolve(path, evPath), 'listeners', sysPath.join(path, evPath)
      );
    }
  };
  try {
    return fs.watch(path, options, handleEvent);
  } catch (error) {
    errHandler(error);
  }
}

// Private function: Helper for passing fs.watch event data to a
// collection of listeners

// * fullPath   - string, absolute path bound to the fs.watch instance
// * type       - string, listener type
// * val[1..3]  - arguments to be passed to listeners

// Returns nothing
function fsWatchBroadcast(fullPath, type, val1, val2, val3) {
  if (!FsWatchInstances[fullPath]) return;
  FsWatchInstances[fullPath][type].forEach(function(listener) {
    listener(val1, val2, val3);
  });
}

// Private function: Instantiates the fs.watch interface or binds listeners
// to an existing one covering the same file system entry

// * path       - string, path to be watched
// * fullPath   - string, absolute path
// * options    - object, options to be passed to fs.watch
// * handlers   - object, container for event listener functions

// Returns close function
function setFsWatchListener(path, fullPath, options, handlers) {
  var listener = handlers.listener;
  var errHandler = handlers.errHandler;
  var rawEmitter = handlers.rawEmitter;
  var container = FsWatchInstances[fullPath];
  var watcher;
  if (!options.persistent) {
    watcher = createFsWatchInstance(
      path, options, listener, errHandler, rawEmitter
    );
    return watcher.close.bind(watcher);
  }
  if (!container) {
    watcher = createFsWatchInstance(
      path,
      options,
      fsWatchBroadcast.bind(null, fullPath, 'listeners'),
      errHandler, // no need to use broadcast here
      fsWatchBroadcast.bind(null, fullPath, 'rawEmitters')
    );
    if (!watcher) return;
    var broadcastErr = fsWatchBroadcast.bind(null, fullPath, 'errHandlers');
    watcher.on('error', function(error) {
      container.watcherUnusable = true; // documented since Node 10.4.1
      // Workaround for https://github.com/joyent/node/issues/4337
      if (process.platform === 'win32' && error.code === 'EPERM') {
        fs.open(path, 'r', function(err, fd) {
          if (!err) fs.close(fd, function(err) {
            if (!err) broadcastErr(error);
          });
        });
      } else {
        broadcastErr(error);
      }
    });
    container = FsWatchInstances[fullPath] = {
      listeners: [listener],
      errHandlers: [errHandler],
      rawEmitters: [rawEmitter],
      watcher: watcher
    };
  } else {
    container.listeners.push(listener);
    container.errHandlers.push(errHandler);
    container.rawEmitters.push(rawEmitter);
  }
  var listenerIndex = container.listeners.length - 1;

  // removes this instance's listeners and closes the underlying fs.watch
  // instance if there are no more listeners left
  return function close() {
    delete container.listeners[listenerIndex];
    delete container.errHandlers[listenerIndex];
    delete container.rawEmitters[listenerIndex];
    if (!Object.keys(container.listeners).length) {
      if (!container.watcherUnusable) { // check to protect against issue #730
        container.watcher.close();
      }
      delete FsWatchInstances[fullPath];
    }
  };
}

// fs.watchFile helpers

// object to hold per-process fs.watchFile instances
// (may be shared across chokidar FSWatcher instances)
var FsWatchFileInstances = Object.create(null);

// Private function: Instantiates the fs.watchFile interface or binds listeners
// to an existing one covering the same file system entry

// * path       - string, path to be watched
// * fullPath   - string, absolute path
// * options    - object, options to be passed to fs.watchFile
// * handlers   - object, container for event listener functions

// Returns close function
function setFsWatchFileListener(path, fullPath, options, handlers) {
  var listener = handlers.listener;
  var rawEmitter = handlers.rawEmitter;
  var container = FsWatchFileInstances[fullPath];
  var listeners = [];
  var rawEmitters = [];
  if (
    container && (
      container.options.persistent < options.persistent ||
      container.options.interval > options.interval
    )
  ) {
    // "Upgrade" the watcher to persistence or a quicker interval.
    // This creates some unlikely edge case issues if the user mixes
    // settings in a very weird way, but solving for those cases
    // doesn't seem worthwhile for the added complexity.
    listeners = container.listeners;
    rawEmitters = container.rawEmitters;
    fs.unwatchFile(fullPath);
    container = false;
  }
  if (!container) {
    listeners.push(listener);
    rawEmitters.push(rawEmitter);
    container = FsWatchFileInstances[fullPath] = {
      listeners: listeners,
      rawEmitters: rawEmitters,
      options: options,
      watcher: fs.watchFile(fullPath, options, function(curr, prev) {
        container.rawEmitters.forEach(function(rawEmitter) {
          rawEmitter('change', fullPath, {curr: curr, prev: prev});
        });
        var currmtime = curr.mtime.getTime();
        if (curr.size !== prev.size || currmtime > prev.mtime.getTime() || currmtime === 0) {
          container.listeners.forEach(function(listener) {
            listener(path, curr);
          });
        }
      })
    };
  } else {
    container.listeners.push(listener);
    container.rawEmitters.push(rawEmitter);
  }
  var listenerIndex = container.listeners.length - 1;

  // removes this instance's listeners and closes the underlying fs.watchFile
  // instance if there are no more listeners left
  return function close() {
    delete container.listeners[listenerIndex];
    delete container.rawEmitters[listenerIndex];
    if (!Object.keys(container.listeners).length) {
      fs.unwatchFile(fullPath);
      delete FsWatchFileInstances[fullPath];
    }
  };
}

// fake constructor for attaching nodefs-specific prototype methods that
// will be copied to FSWatcher's prototype
function NodeFsHandler() {}

// Private method: Watch file for changes with fs.watchFile or fs.watch.

// * path     - string, path to file or directory.
// * listener - function, to be executed on fs change.

// Returns close function for the watcher instance
NodeFsHandler.prototype._watchWithNodeFs =
function(path, listener) {
  var directory = sysPath.dirname(path);
  var basename = sysPath.basename(path);
  var parent = this._getWatchedDir(directory);
  parent.add(basename);
  var absolutePath = sysPath.resolve(path);
  var options = {persistent: this.options.persistent};
  if (!listener) listener = Function.prototype; // empty function

  var closer;
  if (this.options.usePolling) {
    options.interval = this.enableBinaryInterval && isBinaryPath(basename) ?
      this.options.binaryInterval : this.options.interval;
    closer = setFsWatchFileListener(path, absolutePath, options, {
      listener: listener,
      rawEmitter: this.emit.bind(this, 'raw')
    });
  } else {
    closer = setFsWatchListener(path, absolutePath, options, {
      listener: listener,
      errHandler: this._handleError.bind(this),
      rawEmitter: this.emit.bind(this, 'raw')
    });
  }
  return closer;
};

// Private method: Watch a file and emit add event if warranted

// * file       - string, the file's path
// * stats      - object, result of fs.stat
// * initialAdd - boolean, was the file added at watch instantiation?
// * callback   - function, called when done processing as a newly seen file

// Returns close function for the watcher instance
NodeFsHandler.prototype._handleFile =
function(file, stats, initialAdd, callback) {
  var dirname = sysPath.dirname(file);
  var basename = sysPath.basename(file);
  var parent = this._getWatchedDir(dirname);
  // stats is always present
  var prevStats = stats;

  // if the file is already being watched, do nothing
  if (parent.has(basename)) return callback();

  // kick off the watcher
  var closer = this._watchWithNodeFs(file, function(path, newStats) {
    if (!this._throttle('watch', file, 5)) return;
    if (!newStats || newStats && newStats.mtime.getTime() === 0) {
      fs.stat(file, function(error, newStats) {
        // Fix issues where mtime is null but file is still present
        if (error) {
          this._remove(dirname, basename);
        } else {
          // Check that change event was not fired because of changed only accessTime.
          var at = newStats.atime.getTime();
          var mt = newStats.mtime.getTime();
          if (!at || at <= mt || mt !== prevStats.mtime.getTime()) {
            this._emit('change', file, newStats);
          }
          prevStats = newStats;
        }
      }.bind(this));
    // add is about to be emitted if file not already tracked in parent
    } else if (parent.has(basename)) {
      // Check that change event was not fired because of changed only accessTime.
      var at = newStats.atime.getTime();
      var mt = newStats.mtime.getTime();
      if (!at || at <= mt ||  mt !== prevStats.mtime.getTime()) {
        this._emit('change', file, newStats);
      }
      prevStats = newStats;
    }
  }.bind(this));

  // emit an add event if we're supposed to
  if (!(initialAdd && this.options.ignoreInitial)) {
    if (!this._throttle('add', file, 0)) return;
    this._emit('add', file, stats);
  }

  if (callback) callback();
  return closer;
};

// Private method: Handle symlinks encountered while reading a dir

// * entry      - object, entry object returned by readdirp
// * directory  - string, path of the directory being read
// * path       - string, path of this item
// * item       - string, basename of this item

// Returns true if no more processing is needed for this entry.
NodeFsHandler.prototype._handleSymlink =
function(entry, directory, path, item) {
  var full = entry.fullPath;
  var dir = this._getWatchedDir(directory);

  if (!this.options.followSymlinks) {
    // watch symlink directly (don't follow) and detect changes
    this._readyCount++;
    fs.realpath(path, function(error, linkPath) {
      if (dir.has(item)) {
        if (this._symlinkPaths[full] !== linkPath) {
          this._symlinkPaths[full] = linkPath;
          this._emit('change', path, entry.stat);
        }
      } else {
        dir.add(item);
        this._symlinkPaths[full] = linkPath;
        this._emit('add', path, entry.stat);
      }
      this._emitReady();
    }.bind(this));
    return true;
  }

  // don't follow the same symlink more than once
  if (this._symlinkPaths[full]) return true;
  else this._symlinkPaths[full] = true;
};

// Private method: Read directory to add / remove files from `@watched` list
// and re-read it on change.

// * dir        - string, fs path.
// * stats      - object, result of fs.stat
// * initialAdd - boolean, was the file added at watch instantiation?
// * depth      - int, depth relative to user-supplied path
// * target     - string, child path actually targeted for watch
// * wh         - object, common watch helpers for this path
// * callback   - function, called when dir scan is complete

// Returns close function for the watcher instance
NodeFsHandler.prototype._handleDir =
function(dir, stats, initialAdd, depth, target, wh, callback) {
  var parentDir = this._getWatchedDir(sysPath.dirname(dir));
  var tracked = parentDir.has(sysPath.basename(dir));
  if (!(initialAdd && this.options.ignoreInitial) && !target && !tracked) {
    if (!wh.hasGlob || wh.globFilter(dir)) this._emit('addDir', dir, stats);
  }

  // ensure dir is tracked (harmless if redundant)
  parentDir.add(sysPath.basename(dir));
  this._getWatchedDir(dir);

  var read = function(directory, initialAdd, done) {
    // Normalize the directory name on Windows
    directory = sysPath.join(directory, '');

    if (!wh.hasGlob) {
      var throttler = this._throttle('readdir', directory, 1000);
      if (!throttler) return;
    }

    var previous = this._getWatchedDir(wh.path);
    var current = [];

    readdirp({
      root: directory,
      entryType: 'all',
      fileFilter: wh.filterPath,
      directoryFilter: wh.filterDir,
      depth: 0,
      lstat: true
    }).on('data', function(entry) {
      var item = entry.path;
      var path = sysPath.join(directory, item);
      current.push(item);

      if (entry.stat.isSymbolicLink() &&
        this._handleSymlink(entry, directory, path, item)) return;

      // Files that present in current directory snapshot
      // but absent in previous are added to watch list and
      // emit `add` event.
      if (item === target || !target && !previous.has(item)) {
        this._readyCount++;

        // ensure relativeness of path is preserved in case of watcher reuse
        path = sysPath.join(dir, sysPath.relative(dir, path));

        this._addToNodeFs(path, initialAdd, wh, depth + 1);
      }
    }.bind(this)).on('end', function() {
      var wasThrottled = throttler ? throttler.clear() : false;
      if (done) done();

      // Files that absent in current directory snapshot
      // but present in previous emit `remove` event
      // and are removed from @watched[directory].
      previous.children().filter(function(item) {
        return item !== directory &&
          current.indexOf(item) === -1 &&
          // in case of intersecting globs;
          // a path may have been filtered out of this readdir, but
          // shouldn't be removed because it matches a different glob
          (!wh.hasGlob || wh.filterPath({
            fullPath: sysPath.resolve(directory, item)
          }));
      }).forEach(function(item) {
        this._remove(directory, item);
      }, this);

      // one more time for any missed in case changes came in extremely quickly
      if (wasThrottled) read(directory, false);
    }.bind(this)).on('error', this._handleError.bind(this));
  }.bind(this);

  var closer;

  if (this.options.depth == null || depth <= this.options.depth) {
    if (!target) read(dir, initialAdd, callback);
    closer = this._watchWithNodeFs(dir, function(dirPath, stats) {
      // if current directory is removed, do nothing
      if (stats && stats.mtime.getTime() === 0) return;

      read(dirPath, false);
    });
  } else {
    callback();
  }
  return closer;
};

// Private method: Handle added file, directory, or glob pattern.
// Delegates call to _handleFile / _handleDir after checks.

// * path       - string, path to file or directory.
// * initialAdd - boolean, was the file added at watch instantiation?
// * depth      - int, depth relative to user-supplied path
// * target     - string, child path actually targeted for watch
// * callback   - function, indicates whether the path was found or not

// Returns nothing
NodeFsHandler.prototype._addToNodeFs =
function(path, initialAdd, priorWh, depth, target, callback) {
  if (!callback) callback = Function.prototype;
  var ready = this._emitReady;
  if (this._isIgnored(path) || this.closed) {
    ready();
    return callback(null, false);
  }

  var wh = this._getWatchHelpers(path, depth);
  if (!wh.hasGlob && priorWh) {
    wh.hasGlob = priorWh.hasGlob;
    wh.globFilter = priorWh.globFilter;
    wh.filterPath = priorWh.filterPath;
    wh.filterDir = priorWh.filterDir;
  }

  // evaluate what is at the path we're being asked to watch
  fs[wh.statMethod](wh.watchPath, function(error, stats) {
    if (this._handleError(error)) return callback(null, path);
    if (this._isIgnored(wh.watchPath, stats)) {
      ready();
      return callback(null, false);
    }

    var initDir = function(dir, target) {
      return this._handleDir(dir, stats, initialAdd, depth, target, wh, ready);
    }.bind(this);

    var closer;
    if (stats.isDirectory()) {
      closer = initDir(wh.watchPath, target);
    } else if (stats.isSymbolicLink()) {
      var parent = sysPath.dirname(wh.watchPath);
      this._getWatchedDir(parent).add(wh.watchPath);
      this._emit('add', wh.watchPath, stats);
      closer = initDir(parent, path);

      // preserve this symlink's target path
      fs.realpath(path, function(error, targetPath) {
        this._symlinkPaths[sysPath.resolve(path)] = targetPath;
        ready();
      }.bind(this));
    } else {
      closer = this._handleFile(wh.watchPath, stats, initialAdd, ready);
    }

    if (closer) {
      this._closers[path] = this._closers[path] || [];
      this._closers[path].push(closer);
    }
    callback(null, false);
  }.bind(this));
};

module.exports = NodeFsHandler;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/class-utils/index.js":
/*!*******************************************!*\
  !*** ./node_modules/class-utils/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var union = __webpack_require__(/*! arr-union */ "./node_modules/arr-union/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/class-utils/node_modules/define-property/index.js");
var staticExtend = __webpack_require__(/*! static-extend */ "./node_modules/static-extend/index.js");
var isObj = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

/**
 * Expose class utils
 */

var cu = module.exports;

/**
 * Expose class utils: `cu`
 */

cu.isObject = function isObject(val) {
  return isObj(val) || typeof val === 'function';
};

/**
 * Returns true if an array has any of the given elements, or an
 * object has any of the give keys.
 *
 * ```js
 * cu.has(['a', 'b', 'c'], 'c');
 * //=> true
 *
 * cu.has(['a', 'b', 'c'], ['c', 'z']);
 * //=> true
 *
 * cu.has({a: 'b', c: 'd'}, ['c', 'z']);
 * //=> true
 * ```
 * @param {Object} `obj`
 * @param {String|Array} `val`
 * @return {Boolean}
 * @api public
 */

cu.has = function has(obj, val) {
  val = cu.arrayify(val);
  var len = val.length;

  if (cu.isObject(obj)) {
    for (var key in obj) {
      if (val.indexOf(key) > -1) {
        return true;
      }
    }

    var keys = cu.nativeKeys(obj);
    return cu.has(keys, val);
  }

  if (Array.isArray(obj)) {
    var arr = obj;
    while (len--) {
      if (arr.indexOf(val[len]) > -1) {
        return true;
      }
    }
    return false;
  }

  throw new TypeError('expected an array or object.');
};

/**
 * Returns true if an array or object has all of the given values.
 *
 * ```js
 * cu.hasAll(['a', 'b', 'c'], 'c');
 * //=> true
 *
 * cu.hasAll(['a', 'b', 'c'], ['c', 'z']);
 * //=> false
 *
 * cu.hasAll({a: 'b', c: 'd'}, ['c', 'z']);
 * //=> false
 * ```
 * @param {Object|Array} `val`
 * @param {String|Array} `values`
 * @return {Boolean}
 * @api public
 */

cu.hasAll = function hasAll(val, values) {
  values = cu.arrayify(values);
  var len = values.length;
  while (len--) {
    if (!cu.has(val, values[len])) {
      return false;
    }
  }
  return true;
};

/**
 * Cast the given value to an array.
 *
 * ```js
 * cu.arrayify('foo');
 * //=> ['foo']
 *
 * cu.arrayify(['foo']);
 * //=> ['foo']
 * ```
 *
 * @param {String|Array} `val`
 * @return {Array}
 * @api public
 */

cu.arrayify = function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Noop
 */

cu.noop = function noop() {
  return;
};

/**
 * Returns the first argument passed to the function.
 */

cu.identity = function identity(val) {
  return val;
};

/**
 * Returns true if a value has a `contructor`
 *
 * ```js
 * cu.hasConstructor({});
 * //=> true
 *
 * cu.hasConstructor(Object.create(null));
 * //=> false
 * ```
 * @param  {Object} `value`
 * @return {Boolean}
 * @api public
 */

cu.hasConstructor = function hasConstructor(val) {
  return cu.isObject(val) && typeof val.constructor !== 'undefined';
};

/**
 * Get the native `ownPropertyNames` from the constructor of the
 * given `object`. An empty array is returned if the object does
 * not have a constructor.
 *
 * ```js
 * cu.nativeKeys({a: 'b', b: 'c', c: 'd'})
 * //=> ['a', 'b', 'c']
 *
 * cu.nativeKeys(function(){})
 * //=> ['length', 'caller']
 * ```
 *
 * @param  {Object} `obj` Object that has a `constructor`.
 * @return {Array} Array of keys.
 * @api public
 */

cu.nativeKeys = function nativeKeys(val) {
  if (!cu.hasConstructor(val)) return [];
  var keys = Object.getOwnPropertyNames(val);
  if ('caller' in val) keys.push('caller');
  return keys;
};

/**
 * Returns property descriptor `key` if it's an "own" property
 * of the given object.
 *
 * ```js
 * function App() {}
 * Object.defineProperty(App.prototype, 'count', {
 *   get: function() {
 *     return Object.keys(this).length;
 *   }
 * });
 * cu.getDescriptor(App.prototype, 'count');
 * // returns:
 * // {
 * //   get: [Function],
 * //   set: undefined,
 * //   enumerable: false,
 * //   configurable: false
 * // }
 * ```
 *
 * @param {Object} `obj`
 * @param {String} `key`
 * @return {Object} Returns descriptor `key`
 * @api public
 */

cu.getDescriptor = function getDescriptor(obj, key) {
  if (!cu.isObject(obj)) {
    throw new TypeError('expected an object.');
  }
  if (typeof key !== 'string') {
    throw new TypeError('expected key to be a string.');
  }
  return Object.getOwnPropertyDescriptor(obj, key);
};

/**
 * Copy a descriptor from one object to another.
 *
 * ```js
 * function App() {}
 * Object.defineProperty(App.prototype, 'count', {
 *   get: function() {
 *     return Object.keys(this).length;
 *   }
 * });
 * var obj = {};
 * cu.copyDescriptor(obj, App.prototype, 'count');
 * ```
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String} `name`
 * @return {Object}
 * @api public
 */

cu.copyDescriptor = function copyDescriptor(receiver, provider, name) {
  if (!cu.isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!cu.isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }
  if (typeof name !== 'string') {
    throw new TypeError('expected name to be a string.');
  }

  var val = cu.getDescriptor(provider, name);
  if (val) Object.defineProperty(receiver, name, val);
};

/**
 * Copy static properties, prototype properties, and descriptors
 * from one object to another.
 *
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String|Array} `omit` One or more properties to omit
 * @return {Object}
 * @api public
 */

cu.copy = function copy(receiver, provider, omit) {
  if (!cu.isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!cu.isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }
  var props = Object.getOwnPropertyNames(provider);
  var keys = Object.keys(provider);
  var len = props.length,
    key;
  omit = cu.arrayify(omit);

  while (len--) {
    key = props[len];

    if (cu.has(keys, key)) {
      define(receiver, key, provider[key]);
    } else if (!(key in receiver) && !cu.has(omit, key)) {
      cu.copyDescriptor(receiver, provider, key);
    }
  }
};

/**
 * Inherit the static properties, prototype properties, and descriptors
 * from of an object.
 *
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String|Array} `omit` One or more properties to omit
 * @return {Object}
 * @api public
 */

cu.inherit = function inherit(receiver, provider, omit) {
  if (!cu.isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!cu.isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }

  var keys = [];
  for (var key in provider) {
    keys.push(key);
    receiver[key] = provider[key];
  }

  keys = keys.concat(cu.arrayify(omit));

  var a = provider.prototype || provider;
  var b = receiver.prototype || receiver;
  cu.copy(b, a, keys);
};

/**
 * Returns a function for extending the static properties,
 * prototype properties, and descriptors from the `Parent`
 * constructor onto `Child` constructors.
 *
 * ```js
 * var extend = cu.extend(Parent);
 * Parent.extend(Child);
 *
 * // optional methods
 * Parent.extend(Child, {
 *   foo: function() {},
 *   bar: function() {}
 * });
 * ```
 * @param {Function} `Parent` Parent ctor
 * @param {Function} `extend` Optional extend function to handle custom extensions. Useful when updating methods that require a specific prototype.
 *   @param {Function} `Child` Child ctor
 *   @param {Object} `proto` Optionally pass additional prototype properties to inherit.
 *   @return {Object}
 * @api public
 */

cu.extend = function() {
  // keep it lazy, instead of assigning to `cu.extend`
  return staticExtend.apply(null, arguments);
};

/**
 * Bubble up events emitted from static methods on the Parent ctor.
 *
 * @param {Object} `Parent`
 * @param {Array} `events` Event names to bubble up
 * @api public
 */

cu.bubble = function(Parent, events) {
  events = events || [];
  Parent.bubble = function(Child, arr) {
    if (Array.isArray(arr)) {
      events = union([], events, arr);
    }
    var len = events.length;
    var idx = -1;
    while (++idx < len) {
      var name = events[idx];
      Parent.on(name, Child.emit.bind(Child, name));
    }
    cu.bubble(Child, events);
  };
};


/***/ }),

/***/ "./node_modules/class-utils/node_modules/define-property/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/class-utils/node_modules/define-property/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/collection-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/collection-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * collection-visit <https://github.com/jonschlinkert/collection-visit>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var visit = __webpack_require__(/*! object-visit */ "./node_modules/object-visit/index.js");
var mapVisit = __webpack_require__(/*! map-visit */ "./node_modules/map-visit/index.js");

module.exports = function(collection, method, val) {
  var result;

  if (typeof val === 'string' && (method in collection)) {
    var args = [].slice.call(arguments, 2);
    result = collection[method].apply(collection, args);
  } else if (Array.isArray(val)) {
    result = mapVisit.apply(null, arguments);
  } else {
    result = visit.apply(null, arguments);
  }

  if (typeof result !== 'undefined') {
    return result;
  }

  return collection;
};


/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/constants-browserify/constants.json":
/*!**********************************************************!*\
  !*** ./node_modules/constants-browserify/constants.json ***!
  \**********************************************************/
/*! exports provided: O_RDONLY, O_WRONLY, O_RDWR, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOFOLLOW, O_SYNC, O_SYMLINK, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGSYS, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_STORE, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, NPN_ENABLED, RSA_PKCS1_PADDING, RSA_SSLV23_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, F_OK, R_OK, W_OK, X_OK, UV_UDP_REUSEADDR, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"O_RDONLY\":0,\"O_WRONLY\":1,\"O_RDWR\":2,\"S_IFMT\":61440,\"S_IFREG\":32768,\"S_IFDIR\":16384,\"S_IFCHR\":8192,\"S_IFBLK\":24576,\"S_IFIFO\":4096,\"S_IFLNK\":40960,\"S_IFSOCK\":49152,\"O_CREAT\":512,\"O_EXCL\":2048,\"O_NOCTTY\":131072,\"O_TRUNC\":1024,\"O_APPEND\":8,\"O_DIRECTORY\":1048576,\"O_NOFOLLOW\":256,\"O_SYNC\":128,\"O_SYMLINK\":2097152,\"O_NONBLOCK\":4,\"S_IRWXU\":448,\"S_IRUSR\":256,\"S_IWUSR\":128,\"S_IXUSR\":64,\"S_IRWXG\":56,\"S_IRGRP\":32,\"S_IWGRP\":16,\"S_IXGRP\":8,\"S_IRWXO\":7,\"S_IROTH\":4,\"S_IWOTH\":2,\"S_IXOTH\":1,\"E2BIG\":7,\"EACCES\":13,\"EADDRINUSE\":48,\"EADDRNOTAVAIL\":49,\"EAFNOSUPPORT\":47,\"EAGAIN\":35,\"EALREADY\":37,\"EBADF\":9,\"EBADMSG\":94,\"EBUSY\":16,\"ECANCELED\":89,\"ECHILD\":10,\"ECONNABORTED\":53,\"ECONNREFUSED\":61,\"ECONNRESET\":54,\"EDEADLK\":11,\"EDESTADDRREQ\":39,\"EDOM\":33,\"EDQUOT\":69,\"EEXIST\":17,\"EFAULT\":14,\"EFBIG\":27,\"EHOSTUNREACH\":65,\"EIDRM\":90,\"EILSEQ\":92,\"EINPROGRESS\":36,\"EINTR\":4,\"EINVAL\":22,\"EIO\":5,\"EISCONN\":56,\"EISDIR\":21,\"ELOOP\":62,\"EMFILE\":24,\"EMLINK\":31,\"EMSGSIZE\":40,\"EMULTIHOP\":95,\"ENAMETOOLONG\":63,\"ENETDOWN\":50,\"ENETRESET\":52,\"ENETUNREACH\":51,\"ENFILE\":23,\"ENOBUFS\":55,\"ENODATA\":96,\"ENODEV\":19,\"ENOENT\":2,\"ENOEXEC\":8,\"ENOLCK\":77,\"ENOLINK\":97,\"ENOMEM\":12,\"ENOMSG\":91,\"ENOPROTOOPT\":42,\"ENOSPC\":28,\"ENOSR\":98,\"ENOSTR\":99,\"ENOSYS\":78,\"ENOTCONN\":57,\"ENOTDIR\":20,\"ENOTEMPTY\":66,\"ENOTSOCK\":38,\"ENOTSUP\":45,\"ENOTTY\":25,\"ENXIO\":6,\"EOPNOTSUPP\":102,\"EOVERFLOW\":84,\"EPERM\":1,\"EPIPE\":32,\"EPROTO\":100,\"EPROTONOSUPPORT\":43,\"EPROTOTYPE\":41,\"ERANGE\":34,\"EROFS\":30,\"ESPIPE\":29,\"ESRCH\":3,\"ESTALE\":70,\"ETIME\":101,\"ETIMEDOUT\":60,\"ETXTBSY\":26,\"EWOULDBLOCK\":35,\"EXDEV\":18,\"SIGHUP\":1,\"SIGINT\":2,\"SIGQUIT\":3,\"SIGILL\":4,\"SIGTRAP\":5,\"SIGABRT\":6,\"SIGIOT\":6,\"SIGBUS\":10,\"SIGFPE\":8,\"SIGKILL\":9,\"SIGUSR1\":30,\"SIGSEGV\":11,\"SIGUSR2\":31,\"SIGPIPE\":13,\"SIGALRM\":14,\"SIGTERM\":15,\"SIGCHLD\":20,\"SIGCONT\":19,\"SIGSTOP\":17,\"SIGTSTP\":18,\"SIGTTIN\":21,\"SIGTTOU\":22,\"SIGURG\":16,\"SIGXCPU\":24,\"SIGXFSZ\":25,\"SIGVTALRM\":26,\"SIGPROF\":27,\"SIGWINCH\":28,\"SIGIO\":23,\"SIGSYS\":12,\"SSL_OP_ALL\":2147486719,\"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION\":262144,\"SSL_OP_CIPHER_SERVER_PREFERENCE\":4194304,\"SSL_OP_CISCO_ANYCONNECT\":32768,\"SSL_OP_COOKIE_EXCHANGE\":8192,\"SSL_OP_CRYPTOPRO_TLSEXT_BUG\":2147483648,\"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS\":2048,\"SSL_OP_EPHEMERAL_RSA\":0,\"SSL_OP_LEGACY_SERVER_CONNECT\":4,\"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER\":32,\"SSL_OP_MICROSOFT_SESS_ID_BUG\":1,\"SSL_OP_MSIE_SSLV2_RSA_PADDING\":0,\"SSL_OP_NETSCAPE_CA_DN_BUG\":536870912,\"SSL_OP_NETSCAPE_CHALLENGE_BUG\":2,\"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG\":1073741824,\"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG\":8,\"SSL_OP_NO_COMPRESSION\":131072,\"SSL_OP_NO_QUERY_MTU\":4096,\"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION\":65536,\"SSL_OP_NO_SSLv2\":16777216,\"SSL_OP_NO_SSLv3\":33554432,\"SSL_OP_NO_TICKET\":16384,\"SSL_OP_NO_TLSv1\":67108864,\"SSL_OP_NO_TLSv1_1\":268435456,\"SSL_OP_NO_TLSv1_2\":134217728,\"SSL_OP_PKCS1_CHECK_1\":0,\"SSL_OP_PKCS1_CHECK_2\":0,\"SSL_OP_SINGLE_DH_USE\":1048576,\"SSL_OP_SINGLE_ECDH_USE\":524288,\"SSL_OP_SSLEAY_080_CLIENT_DH_BUG\":128,\"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG\":0,\"SSL_OP_TLS_BLOCK_PADDING_BUG\":512,\"SSL_OP_TLS_D5_BUG\":256,\"SSL_OP_TLS_ROLLBACK_BUG\":8388608,\"ENGINE_METHOD_DSA\":2,\"ENGINE_METHOD_DH\":4,\"ENGINE_METHOD_RAND\":8,\"ENGINE_METHOD_ECDH\":16,\"ENGINE_METHOD_ECDSA\":32,\"ENGINE_METHOD_CIPHERS\":64,\"ENGINE_METHOD_DIGESTS\":128,\"ENGINE_METHOD_STORE\":256,\"ENGINE_METHOD_PKEY_METHS\":512,\"ENGINE_METHOD_PKEY_ASN1_METHS\":1024,\"ENGINE_METHOD_ALL\":65535,\"ENGINE_METHOD_NONE\":0,\"DH_CHECK_P_NOT_SAFE_PRIME\":2,\"DH_CHECK_P_NOT_PRIME\":1,\"DH_UNABLE_TO_CHECK_GENERATOR\":4,\"DH_NOT_SUITABLE_GENERATOR\":8,\"NPN_ENABLED\":1,\"RSA_PKCS1_PADDING\":1,\"RSA_SSLV23_PADDING\":2,\"RSA_NO_PADDING\":3,\"RSA_PKCS1_OAEP_PADDING\":4,\"RSA_X931_PADDING\":5,\"RSA_PKCS1_PSS_PADDING\":6,\"POINT_CONVERSION_COMPRESSED\":2,\"POINT_CONVERSION_UNCOMPRESSED\":4,\"POINT_CONVERSION_HYBRID\":6,\"F_OK\":0,\"R_OK\":4,\"W_OK\":2,\"X_OK\":1,\"UV_UDP_REUSEADDR\":4}");

/***/ }),

/***/ "./node_modules/copy-descriptor/index.js":
/*!***********************************************!*\
  !*** ./node_modules/copy-descriptor/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * copy-descriptor <https://github.com/jonschlinkert/copy-descriptor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Copy a descriptor from one object to another.
 *
 * ```js
 * function App() {
 *   this.cache = {};
 * }
 * App.prototype.set = function(key, val) {
 *   this.cache[key] = val;
 *   return this;
 * };
 * Object.defineProperty(App.prototype, 'count', {
 *   get: function() {
 *     return Object.keys(this.cache).length;
 *   }
 * });
 *
 * copy(App.prototype, 'count', 'len');
 *
 * // create an instance
 * var app = new App();
 *
 * app.set('a', true);
 * app.set('b', true);
 * app.set('c', true);
 *
 * console.log(app.count);
 * //=> 3
 * console.log(app.len);
 * //=> 3
 * ```
 * @name copy
 * @param {Object} `receiver` The target object
 * @param {Object} `provider` The provider object
 * @param {String} `from` The key to copy on provider.
 * @param {String} `to` Optionally specify a new key name to use.
 * @return {Object}
 * @api public
 */

module.exports = function copyDescriptor(receiver, provider, from, to) {
  if (!isObject(provider) && typeof provider !== 'function') {
    to = from;
    from = provider;
    provider = receiver;
  }
  if (!isObject(receiver) && typeof receiver !== 'function') {
    throw new TypeError('expected the first argument to be an object');
  }
  if (!isObject(provider) && typeof provider !== 'function') {
    throw new TypeError('expected provider to be an object');
  }

  if (typeof to !== 'string') {
    to = from;
  }
  if (typeof from !== 'string') {
    throw new TypeError('expected key to be a string');
  }

  if (!(from in provider)) {
    throw new Error('property "' + from + '" does not exist');
  }

  var val = Object.getOwnPropertyDescriptor(provider, from);
  if (val) Object.defineProperty(receiver, to, val);
};

function isObject(val) {
  return {}.toString.call(val) === '[object Object]';
}



/***/ }),

/***/ "./node_modules/core-util-is/lib/util.js":
/*!***********************************************!*\
  !*** ./node_modules/core-util-is/lib/util.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/define-property/index.js":
/*!***********************************************!*\
  !*** ./node_modules/define-property/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */



var isobject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/define-property/node_modules/is-descriptor/index.js");
var define = (typeof Reflect !== 'undefined' && Reflect.defineProperty)
  ? Reflect.defineProperty
  : Object.defineProperty;

module.exports = function defineProperty(obj, key, val) {
  if (!isobject(obj) && typeof obj !== 'function' && !Array.isArray(obj)) {
    throw new TypeError('expected an object, function, or array');
  }

  if (typeof key !== 'string') {
    throw new TypeError('expected "key" to be a string');
  }

  if (isDescriptor(val)) {
    define(obj, key, val);
    return obj;
  }

  define(obj, key, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });

  return obj;
};


/***/ }),

/***/ "./node_modules/define-property/node_modules/is-accessor-descriptor/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/define-property/node_modules/is-accessor-descriptor/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

// accessor descriptor properties
var accessor = {
  get: 'function',
  set: 'function',
  configurable: 'boolean',
  enumerable: 'boolean'
};

function isAccessorDescriptor(obj, prop) {
  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (has(obj, 'value') || has(obj, 'writable')) {
    return false;
  }

  if (!has(obj, 'get') || typeof obj.get !== 'function') {
    return false;
  }

  // tldr: it's valid to have "set" be undefined
  // "set" might be undefined if `Object.getOwnPropertyDescriptor`
  // was used to get the value, and only `get` was defined by the user
  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
    return false;
  }

  for (var key in obj) {
    if (!accessor.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === accessor[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

/**
 * Expose `isAccessorDescriptor`
 */

module.exports = isAccessorDescriptor;


/***/ }),

/***/ "./node_modules/define-property/node_modules/is-data-descriptor/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/define-property/node_modules/is-data-descriptor/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

module.exports = function isDataDescriptor(obj, prop) {
  // data descriptor properties
  var data = {
    configurable: 'boolean',
    enumerable: 'boolean',
    writable: 'boolean'
  };

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (!('value' in obj) && !('writable' in obj)) {
    return false;
  }

  for (var key in obj) {
    if (key === 'value') continue;

    if (!data.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === data[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
};


/***/ }),

/***/ "./node_modules/define-property/node_modules/is-descriptor/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/define-property/node_modules/is-descriptor/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
var isAccessor = __webpack_require__(/*! is-accessor-descriptor */ "./node_modules/define-property/node_modules/is-accessor-descriptor/index.js");
var isData = __webpack_require__(/*! is-data-descriptor */ "./node_modules/define-property/node_modules/is-data-descriptor/index.js");

module.exports = function isDescriptor(obj, key) {
  if (typeOf(obj) !== 'object') {
    return false;
  }
  if ('get' in obj) {
    return isAccessor(obj, key);
  }
  return isData(obj, key);
};


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/expand-brackets/index.js":
/*!***********************************************!*\
  !*** ./node_modules/expand-brackets/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/**
 * Local dependencies
 */

var compilers = __webpack_require__(/*! ./lib/compilers */ "./node_modules/expand-brackets/lib/compilers.js");
var parsers = __webpack_require__(/*! ./lib/parsers */ "./node_modules/expand-brackets/lib/parsers.js");

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/expand-brackets/node_modules/debug/src/browser.js")('expand-brackets');
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/expand-brackets/node_modules/extend-shallow/index.js");
var Snapdragon = __webpack_require__(/*! snapdragon */ "./node_modules/snapdragon/index.js");
var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");

/**
 * Parses the given POSIX character class `pattern` and returns a
 * string that can be used for creating regular expressions for matching.
 *
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object}
 * @api public
 */

function brackets(pattern, options) {
  debug('initializing from <%s>', __filename);
  var res = brackets.create(pattern, options);
  return res.output;
}

/**
 * Takes an array of strings and a POSIX character class pattern, and returns a new
 * array with only the strings that matched the pattern.
 *
 * ```js
 * var brackets = require('expand-brackets');
 * console.log(brackets.match(['1', 'a', 'ab'], '[[:alpha:]]'));
 * //=> ['a']
 *
 * console.log(brackets.match(['1', 'a', 'ab'], '[[:alpha:]]+'));
 * //=> ['a', 'ab']
 * ```
 * @param {Array} `arr` Array of strings to match
 * @param {String} `pattern` POSIX character class pattern(s)
 * @param {Object} `options`
 * @return {Array}
 * @api public
 */

brackets.match = function(arr, pattern, options) {
  arr = [].concat(arr);
  var opts = extend({}, options);
  var isMatch = brackets.matcher(pattern, opts);
  var len = arr.length;
  var idx = -1;
  var res = [];

  while (++idx < len) {
    var ele = arr[idx];
    if (isMatch(ele)) {
      res.push(ele);
    }
  }

  if (res.length === 0) {
    if (opts.failglob === true) {
      throw new Error('no matches found for "' + pattern + '"');
    }

    if (opts.nonull === true || opts.nullglob === true) {
      return [pattern.split('\\').join('')];
    }
  }
  return res;
};

/**
 * Returns true if the specified `string` matches the given
 * brackets `pattern`.
 *
 * ```js
 * var brackets = require('expand-brackets');
 *
 * console.log(brackets.isMatch('a.a', '[[:alpha:]].[[:alpha:]]'));
 * //=> true
 * console.log(brackets.isMatch('1.2', '[[:alpha:]].[[:alpha:]]'));
 * //=> false
 * ```
 * @param {String} `string` String to match
 * @param {String} `pattern` Poxis pattern
 * @param {String} `options`
 * @return {Boolean}
 * @api public
 */

brackets.isMatch = function(str, pattern, options) {
  return brackets.matcher(pattern, options)(str);
};

/**
 * Takes a POSIX character class pattern and returns a matcher function. The returned
 * function takes the string to match as its only argument.
 *
 * ```js
 * var brackets = require('expand-brackets');
 * var isMatch = brackets.matcher('[[:lower:]].[[:upper:]]');
 *
 * console.log(isMatch('a.a'));
 * //=> false
 * console.log(isMatch('a.A'));
 * //=> true
 * ```
 * @param {String} `pattern` Poxis pattern
 * @param {String} `options`
 * @return {Boolean}
 * @api public
 */

brackets.matcher = function(pattern, options) {
  var re = brackets.makeRe(pattern, options);
  return function(str) {
    return re.test(str);
  };
};

/**
 * Create a regular expression from the given `pattern`.
 *
 * ```js
 * var brackets = require('expand-brackets');
 * var re = brackets.makeRe('[[:alpha:]]');
 * console.log(re);
 * //=> /^(?:[a-zA-Z])$/
 * ```
 * @param {String} `pattern` The pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

brackets.makeRe = function(pattern, options) {
  var res = brackets.create(pattern, options);
  var opts = extend({strictErrors: false}, options);
  return toRegex(res.output, opts);
};

/**
 * Parses the given POSIX character class `pattern` and returns an object
 * with the compiled `output` and optional source `map`.
 *
 * ```js
 * var brackets = require('expand-brackets');
 * console.log(brackets('[[:alpha:]]'));
 * // { options: { source: 'string' },
 * //   input: '[[:alpha:]]',
 * //   state: {},
 * //   compilers:
 * //    { eos: [Function],
 * //      noop: [Function],
 * //      bos: [Function],
 * //      not: [Function],
 * //      escape: [Function],
 * //      text: [Function],
 * //      posix: [Function],
 * //      bracket: [Function],
 * //      'bracket.open': [Function],
 * //      'bracket.inner': [Function],
 * //      'bracket.literal': [Function],
 * //      'bracket.close': [Function] },
 * //   output: '[a-zA-Z]',
 * //   ast:
 * //    { type: 'root',
 * //      errors: [],
 * //      nodes: [ [Object], [Object], [Object] ] },
 * //   parsingErrors: [] }
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object}
 * @api public
 */

brackets.create = function(pattern, options) {
  var snapdragon = (options && options.snapdragon) || new Snapdragon(options);
  compilers(snapdragon);
  parsers(snapdragon);

  var ast = snapdragon.parse(pattern, options);
  ast.input = pattern;
  var res = snapdragon.compile(ast, options);
  res.input = pattern;
  return res;
};

/**
 * Expose `brackets` constructor, parsers and compilers
 */

brackets.compilers = compilers;
brackets.parsers = parsers;

/**
 * Expose `brackets`
 * @type {Function}
 */

module.exports = brackets;

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./node_modules/expand-brackets/lib/compilers.js":
/*!*******************************************************!*\
  !*** ./node_modules/expand-brackets/lib/compilers.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var posix = __webpack_require__(/*! posix-character-classes */ "./node_modules/posix-character-classes/index.js");

module.exports = function(brackets) {
  brackets.compiler

    /**
     * Escaped characters
     */

    .set('escape', function(node) {
      return this.emit('\\' + node.val.replace(/^\\/, ''), node);
    })

    /**
     * Text
     */

    .set('text', function(node) {
      return this.emit(node.val.replace(/([{}])/g, '\\$1'), node);
    })

    /**
     * POSIX character classes
     */

    .set('posix', function(node) {
      if (node.val === '[::]') {
        return this.emit('\\[::\\]', node);
      }

      var val = posix[node.inner];
      if (typeof val === 'undefined') {
        val = '[' + node.inner + ']';
      }
      return this.emit(val, node);
    })

    /**
     * Non-posix brackets
     */

    .set('bracket', function(node) {
      return this.mapVisit(node.nodes);
    })
    .set('bracket.open', function(node) {
      return this.emit(node.val, node);
    })
    .set('bracket.inner', function(node) {
      var inner = node.val;

      if (inner === '[' || inner === ']') {
        return this.emit('\\' + node.val, node);
      }
      if (inner === '^]') {
        return this.emit('^\\]', node);
      }
      if (inner === '^') {
        return this.emit('^', node);
      }

      if (/-/.test(inner) && !/(\d-\d|\w-\w)/.test(inner)) {
        inner = inner.split('-').join('\\-');
      }

      var isNegated = inner.charAt(0) === '^';
      // add slashes to negated brackets, per spec
      if (isNegated && inner.indexOf('/') === -1) {
        inner += '/';
      }
      if (isNegated && inner.indexOf('.') === -1) {
        inner += '.';
      }

      // don't unescape `0` (octal literal)
      inner = inner.replace(/\\([1-9])/g, '$1');
      return this.emit(inner, node);
    })
    .set('bracket.close', function(node) {
      var val = node.val.replace(/^\\/, '');
      if (node.parent.escaped === true) {
        return this.emit('\\' + val, node);
      }
      return this.emit(val, node);
    });
};


/***/ }),

/***/ "./node_modules/expand-brackets/lib/parsers.js":
/*!*****************************************************!*\
  !*** ./node_modules/expand-brackets/lib/parsers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/expand-brackets/lib/utils.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/expand-brackets/node_modules/define-property/index.js");

/**
 * Text regex
 */

var TEXT_REGEX = '(\\[(?=.*\\])|\\])+';
var not = utils.createRegex(TEXT_REGEX);

/**
 * Brackets parsers
 */

function parsers(brackets) {
  brackets.state = brackets.state || {};
  brackets.parser.sets.bracket = brackets.parser.sets.bracket || [];
  brackets.parser

    .capture('escape', function() {
      if (this.isInside('bracket')) return;
      var pos = this.position();
      var m = this.match(/^\\(.)/);
      if (!m) return;

      return pos({
        type: 'escape',
        val: m[0]
      });
    })

    /**
     * Text parser
     */

    .capture('text', function() {
      if (this.isInside('bracket')) return;
      var pos = this.position();
      var m = this.match(not);
      if (!m || !m[0]) return;

      return pos({
        type: 'text',
        val: m[0]
      });
    })

    /**
     * POSIX character classes: "[[:alpha:][:digits:]]"
     */

    .capture('posix', function() {
      var pos = this.position();
      var m = this.match(/^\[:(.*?):\](?=.*\])/);
      if (!m) return;

      var inside = this.isInside('bracket');
      if (inside) {
        brackets.posix++;
      }

      return pos({
        type: 'posix',
        insideBracket: inside,
        inner: m[1],
        val: m[0]
      });
    })

    /**
     * Bracket (noop)
     */

    .capture('bracket', function() {})

    /**
     * Open: '['
     */

    .capture('bracket.open', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^\[(?=.*\])/);
      if (!m) return;

      var prev = this.prev();
      var last = utils.last(prev.nodes);

      if (parsed.slice(-1) === '\\' && !this.isInside('bracket')) {
        last.val = last.val.slice(0, last.val.length - 1);
        return pos({
          type: 'escape',
          val: m[0]
        });
      }

      var open = pos({
        type: 'bracket.open',
        val: m[0]
      });

      if (last.type === 'bracket.open' || this.isInside('bracket')) {
        open.val = '\\' + open.val;
        open.type = 'bracket.inner';
        open.escaped = true;
        return open;
      }

      var node = pos({
        type: 'bracket',
        nodes: [open]
      });

      define(node, 'parent', prev);
      define(open, 'parent', node);
      this.push('bracket', node);
      prev.nodes.push(node);
    })

    /**
     * Bracket text
     */

    .capture('bracket.inner', function() {
      if (!this.isInside('bracket')) return;
      var pos = this.position();
      var m = this.match(not);
      if (!m || !m[0]) return;

      var next = this.input.charAt(0);
      var val = m[0];

      var node = pos({
        type: 'bracket.inner',
        val: val
      });

      if (val === '\\\\') {
        return node;
      }

      var first = val.charAt(0);
      var last = val.slice(-1);

      if (first === '!') {
        val = '^' + val.slice(1);
      }

      if (last === '\\' || (val === '^' && next === ']')) {
        val += this.input[0];
        this.consume(1);
      }

      node.val = val;
      return node;
    })

    /**
     * Close: ']'
     */

    .capture('bracket.close', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^\]/);
      if (!m) return;

      var prev = this.prev();
      var last = utils.last(prev.nodes);

      if (parsed.slice(-1) === '\\' && !this.isInside('bracket')) {
        last.val = last.val.slice(0, last.val.length - 1);

        return pos({
          type: 'escape',
          val: m[0]
        });
      }

      var node = pos({
        type: 'bracket.close',
        rest: this.input,
        val: m[0]
      });

      if (last.type === 'bracket.open') {
        node.type = 'bracket.inner';
        node.escaped = true;
        return node;
      }

      var bracket = this.pop('bracket');
      if (!this.isType(bracket, 'bracket')) {
        if (this.options.strict) {
          throw new Error('missing opening "["');
        }
        node.type = 'bracket.inner';
        node.escaped = true;
        return node;
      }

      bracket.nodes.push(node);
      define(node, 'parent', bracket);
    });
}

/**
 * Brackets parsers
 */

module.exports = parsers;

/**
 * Expose text regex
 */

module.exports.TEXT_REGEX = TEXT_REGEX;


/***/ }),

/***/ "./node_modules/expand-brackets/lib/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/expand-brackets/lib/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");
var regexNot = __webpack_require__(/*! regex-not */ "./node_modules/regex-not/index.js");
var cached;

/**
 * Get the last element from `array`
 * @param {Array} `array`
 * @return {*}
 */

exports.last = function(arr) {
  return arr[arr.length - 1];
};

/**
 * Create and cache regex to use for text nodes
 */

exports.createRegex = function(pattern, include) {
  if (cached) return cached;
  var opts = {contains: true, strictClose: false};
  var not = regexNot.create(pattern, opts);
  var re;

  if (typeof include === 'string') {
    re = toRegex('^(?:' + include + '|' + not + ')', opts);
  } else {
    re = toRegex(not, opts);
  }

  return (cached = re);
};


/***/ }),

/***/ "./node_modules/expand-brackets/node_modules/debug/src/browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/expand-brackets/node_modules/debug/src/browser.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/expand-brackets/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/expand-brackets/node_modules/debug/src/debug.js":
/*!**********************************************************************!*\
  !*** ./node_modules/expand-brackets/node_modules/debug/src/debug.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/expand-brackets/node_modules/define-property/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/expand-brackets/node_modules/define-property/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/expand-brackets/node_modules/extend-shallow/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/expand-brackets/node_modules/extend-shallow/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./node_modules/extend-shallow/index.js":
/*!**********************************************!*\
  !*** ./node_modules/extend-shallow/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isExtendable = __webpack_require__(/*! is-extendable */ "./node_modules/extend-shallow/node_modules/is-extendable/index.js");
var assignSymbols = __webpack_require__(/*! assign-symbols */ "./node_modules/assign-symbols/index.js");

module.exports = Object.assign || function(obj/*, objects*/) {
  if (obj === null || typeof obj === 'undefined') {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  if (!isObject(obj)) {
    obj = {};
  }
  for (var i = 1; i < arguments.length; i++) {
    var val = arguments[i];
    if (isString(val)) {
      val = toObject(val);
    }
    if (isObject(val)) {
      assign(obj, val);
      assignSymbols(obj, val);
    }
  }
  return obj;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

function isString(val) {
  return (val && typeof val === 'string');
}

function toObject(str) {
  var obj = {};
  for (var i in str) {
    obj[i] = str[i];
  }
  return obj;
}

function isObject(val) {
  return (val && typeof val === 'object') || isExtendable(val);
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function isEnum(obj, key) {
  return Object.prototype.propertyIsEnumerable.call(obj, key);
}


/***/ }),

/***/ "./node_modules/extend-shallow/node_modules/is-extendable/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/extend-shallow/node_modules/is-extendable/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

module.exports = function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};


/***/ }),

/***/ "./node_modules/extglob/index.js":
/*!***************************************!*\
  !*** ./node_modules/extglob/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extglob/node_modules/extend-shallow/index.js");
var unique = __webpack_require__(/*! array-unique */ "./node_modules/array-unique/index.js");
var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");

/**
 * Local dependencies
 */

var compilers = __webpack_require__(/*! ./lib/compilers */ "./node_modules/extglob/lib/compilers.js");
var parsers = __webpack_require__(/*! ./lib/parsers */ "./node_modules/extglob/lib/parsers.js");
var Extglob = __webpack_require__(/*! ./lib/extglob */ "./node_modules/extglob/lib/extglob.js");
var utils = __webpack_require__(/*! ./lib/utils */ "./node_modules/extglob/lib/utils.js");
var MAX_LENGTH = 1024 * 64;

/**
 * Convert the given `extglob` pattern into a regex-compatible string. Returns
 * an object with the compiled result and the parsed AST.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob('*.!(*a)'));
 * //=> '(?!\\.)[^/]*?\\.(?!(?!\\.)[^/]*?a\\b).*?'
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

function extglob(pattern, options) {
  return extglob.create(pattern, options).output;
}

/**
 * Takes an array of strings and an extglob pattern and returns a new
 * array that contains only the strings that match the pattern.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob.match(['a.a', 'a.b', 'a.c'], '*.!(*a)'));
 * //=> ['a.b', 'a.c']
 * ```
 * @param {Array} `list` Array of strings to match
 * @param {String} `pattern` Extglob pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of matches
 * @api public
 */

extglob.match = function(list, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  list = utils.arrayify(list);
  var isMatch = extglob.matcher(pattern, options);
  var len = list.length;
  var idx = -1;
  var matches = [];

  while (++idx < len) {
    var ele = list[idx];

    if (isMatch(ele)) {
      matches.push(ele);
    }
  }

  // if no options were passed, uniquify results and return
  if (typeof options === 'undefined') {
    return unique(matches);
  }

  if (matches.length === 0) {
    if (options.failglob === true) {
      throw new Error('no matches found for "' + pattern + '"');
    }
    if (options.nonull === true || options.nullglob === true) {
      return [pattern.split('\\').join('')];
    }
  }

  return options.nodupes !== false ? unique(matches) : matches;
};

/**
 * Returns true if the specified `string` matches the given
 * extglob `pattern`.
 *
 * ```js
 * var extglob = require('extglob');
 *
 * console.log(extglob.isMatch('a.a', '*.!(*a)'));
 * //=> false
 * console.log(extglob.isMatch('a.b', '*.!(*a)'));
 * //=> true
 * ```
 * @param {String} `string` String to match
 * @param {String} `pattern` Extglob pattern
 * @param {String} `options`
 * @return {Boolean}
 * @api public
 */

extglob.isMatch = function(str, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  if (pattern === str) {
    return true;
  }

  if (pattern === '' || pattern === ' ' || pattern === '.') {
    return pattern === str;
  }

  var isMatch = utils.memoize('isMatch', pattern, options, extglob.matcher);
  return isMatch(str);
};

/**
 * Returns true if the given `string` contains the given pattern. Similar to `.isMatch` but
 * the pattern can match any part of the string.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(extglob.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {Object} `options`
 * @return {Boolean} Returns true if the patter matches any part of `str`.
 * @api public
 */

extglob.contains = function(str, pattern, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  if (pattern === '' || pattern === ' ' || pattern === '.') {
    return pattern === str;
  }

  var opts = extend({}, options, {contains: true});
  opts.strictClose = false;
  opts.strictOpen = false;
  return extglob.isMatch(str, pattern, opts);
};

/**
 * Takes an extglob pattern and returns a matcher function. The returned
 * function takes the string to match as its only argument.
 *
 * ```js
 * var extglob = require('extglob');
 * var isMatch = extglob.matcher('*.!(*a)');
 *
 * console.log(isMatch('a.a'));
 * //=> false
 * console.log(isMatch('a.b'));
 * //=> true
 * ```
 * @param {String} `pattern` Extglob pattern
 * @param {String} `options`
 * @return {Boolean}
 * @api public
 */

extglob.matcher = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  function matcher() {
    var re = extglob.makeRe(pattern, options);
    return function(str) {
      return re.test(str);
    };
  }

  return utils.memoize('matcher', pattern, options, matcher);
};

/**
 * Convert the given `extglob` pattern into a regex-compatible string. Returns
 * an object with the compiled result and the parsed AST.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob.create('*.!(*a)').output);
 * //=> '(?!\\.)[^/]*?\\.(?!(?!\\.)[^/]*?a\\b).*?'
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

extglob.create = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  function create() {
    var ext = new Extglob(options);
    var ast = ext.parse(pattern, options);
    return ext.compile(ast, options);
  }

  return utils.memoize('create', pattern, options, create);
};

/**
 * Returns an array of matches captured by `pattern` in `string`, or `null`
 * if the pattern did not match.
 *
 * ```js
 * var extglob = require('extglob');
 * extglob.capture(pattern, string[, options]);
 *
 * console.log(extglob.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(extglob.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {String} `string` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns an array of captures if the string matches the glob pattern, otherwise `null`.
 * @api public
 */

extglob.capture = function(pattern, str, options) {
  var re = extglob.makeRe(pattern, extend({capture: true}, options));

  function match() {
    return function(string) {
      var match = re.exec(string);
      if (!match) {
        return null;
      }

      return match.slice(1);
    };
  }

  var capture = utils.memoize('capture', pattern, options, match);
  return capture(str);
};

/**
 * Create a regular expression from the given `pattern` and `options`.
 *
 * ```js
 * var extglob = require('extglob');
 * var re = extglob.makeRe('*.!(*a)');
 * console.log(re);
 * //=> /^[^\/]*?\.(?![^\/]*?a)[^\/]*?$/
 * ```
 * @param {String} `pattern` The pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

extglob.makeRe = function(pattern, options) {
  if (pattern instanceof RegExp) {
    return pattern;
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  if (pattern.length > MAX_LENGTH) {
    throw new Error('expected pattern to be less than ' + MAX_LENGTH + ' characters');
  }

  function makeRe() {
    var opts = extend({strictErrors: false}, options);
    if (opts.strictErrors === true) opts.strict = true;
    var res = extglob.create(pattern, opts);
    return toRegex(res.output, opts);
  }

  var regex = utils.memoize('makeRe', pattern, options, makeRe);
  if (regex.source.length > MAX_LENGTH) {
    throw new SyntaxError('potentially malicious regex detected');
  }

  return regex;
};

/**
 * Cache
 */

extglob.cache = utils.cache;
extglob.clearCache = function() {
  extglob.cache.__data__ = {};
};

/**
 * Expose `Extglob` constructor, parsers and compilers
 */

extglob.Extglob = Extglob;
extglob.compilers = compilers;
extglob.parsers = parsers;

/**
 * Expose `extglob`
 * @type {Function}
 */

module.exports = extglob;


/***/ }),

/***/ "./node_modules/extglob/lib/compilers.js":
/*!***********************************************!*\
  !*** ./node_modules/extglob/lib/compilers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var brackets = __webpack_require__(/*! expand-brackets */ "./node_modules/expand-brackets/index.js");

/**
 * Extglob compilers
 */

module.exports = function(extglob) {
  function star() {
    if (typeof extglob.options.star === 'function') {
      return extglob.options.star.apply(this, arguments);
    }
    if (typeof extglob.options.star === 'string') {
      return extglob.options.star;
    }
    return '.*?';
  }

  /**
   * Use `expand-brackets` compilers
   */

  extglob.use(brackets.compilers);
  extglob.compiler

    /**
     * Escaped: "\\*"
     */

    .set('escape', function(node) {
      return this.emit(node.val, node);
    })

    /**
     * Dot: "."
     */

    .set('dot', function(node) {
      return this.emit('\\' + node.val, node);
    })

    /**
     * Question mark: "?"
     */

    .set('qmark', function(node) {
      var val = '[^\\\\/.]';
      var prev = this.prev();

      if (node.parsed.slice(-1) === '(') {
        var ch = node.rest.charAt(0);
        if (ch !== '!' && ch !== '=' && ch !== ':') {
          return this.emit(val, node);
        }
        return this.emit(node.val, node);
      }

      if (prev.type === 'text' && prev.val) {
        return this.emit(val, node);
      }

      if (node.val.length > 1) {
        val += '{' + node.val.length + '}';
      }
      return this.emit(val, node);
    })

    /**
     * Plus: "+"
     */

    .set('plus', function(node) {
      var prev = node.parsed.slice(-1);
      if (prev === ']' || prev === ')') {
        return this.emit(node.val, node);
      }
      var ch = this.output.slice(-1);
      if (!this.output || (/[?*+]/.test(ch) && node.parent.type !== 'bracket')) {
        return this.emit('\\+', node);
      }
      if (/\w/.test(ch) && !node.inside) {
        return this.emit('+\\+?', node);
      }
      return this.emit('+', node);
    })

    /**
     * Star: "*"
     */

    .set('star', function(node) {
      var prev = this.prev();
      var prefix = prev.type !== 'text' && prev.type !== 'escape'
        ? '(?!\\.)'
        : '';

      return this.emit(prefix + star.call(this, node), node);
    })

    /**
     * Parens
     */

    .set('paren', function(node) {
      return this.mapVisit(node.nodes);
    })
    .set('paren.open', function(node) {
      var capture = this.options.capture ? '(' : '';

      switch (node.parent.prefix) {
        case '!':
        case '^':
          return this.emit(capture + '(?:(?!(?:', node);
        case '*':
        case '+':
        case '?':
        case '@':
          return this.emit(capture + '(?:', node);
        default: {
          var val = node.val;
          if (this.options.bash === true) {
            val = '\\' + val;
          } else if (!this.options.capture && val === '(' && node.parent.rest[0] !== '?') {
            val += '?:';
          }

          return this.emit(val, node);
        }
      }
    })
    .set('paren.close', function(node) {
      var capture = this.options.capture ? ')' : '';

      switch (node.prefix) {
        case '!':
        case '^':
          var prefix = /^(\)|$)/.test(node.rest) ? '$' : '';
          var str = star.call(this, node);

          // if the extglob has a slash explicitly defined, we know the user wants
          // to match slashes, so we need to ensure the "star" regex allows for it
          if (node.parent.hasSlash && !this.options.star && this.options.slash !== false) {
            str = '.*?';
          }

          return this.emit(prefix + ('))' + str + ')') + capture, node);
        case '*':
        case '+':
        case '?':
          return this.emit(')' + node.prefix + capture, node);
        case '@':
          return this.emit(')' + capture, node);
        default: {
          var val = (this.options.bash === true ? '\\' : '') + ')';
          return this.emit(val, node);
        }
      }
    })

    /**
     * Text
     */

    .set('text', function(node) {
      var val = node.val.replace(/[\[\]]/g, '\\$&');
      return this.emit(val, node);
    });
};


/***/ }),

/***/ "./node_modules/extglob/lib/extglob.js":
/*!*********************************************!*\
  !*** ./node_modules/extglob/lib/extglob.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var Snapdragon = __webpack_require__(/*! snapdragon */ "./node_modules/snapdragon/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/extglob/node_modules/define-property/index.js");
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extglob/node_modules/extend-shallow/index.js");

/**
 * Local dependencies
 */

var compilers = __webpack_require__(/*! ./compilers */ "./node_modules/extglob/lib/compilers.js");
var parsers = __webpack_require__(/*! ./parsers */ "./node_modules/extglob/lib/parsers.js");

/**
 * Customize Snapdragon parser and renderer
 */

function Extglob(options) {
  this.options = extend({source: 'extglob'}, options);
  this.snapdragon = this.options.snapdragon || new Snapdragon(this.options);
  this.snapdragon.patterns = this.snapdragon.patterns || {};
  this.compiler = this.snapdragon.compiler;
  this.parser = this.snapdragon.parser;

  compilers(this.snapdragon);
  parsers(this.snapdragon);

  /**
   * Override Snapdragon `.parse` method
   */

  define(this.snapdragon, 'parse', function(str, options) {
    var parsed = Snapdragon.prototype.parse.apply(this, arguments);
    parsed.input = str;

    // escape unmatched brace/bracket/parens
    var last = this.parser.stack.pop();
    if (last && this.options.strict !== true) {
      var node = last.nodes[0];
      node.val = '\\' + node.val;
      var sibling = node.parent.nodes[1];
      if (sibling.type === 'star') {
        sibling.loose = true;
      }
    }

    // add non-enumerable parser reference
    define(parsed, 'parser', this.parser);
    return parsed;
  });

  /**
   * Decorate `.parse` method
   */

  define(this, 'parse', function(ast, options) {
    return this.snapdragon.parse.apply(this.snapdragon, arguments);
  });

  /**
   * Decorate `.compile` method
   */

  define(this, 'compile', function(ast, options) {
    return this.snapdragon.compile.apply(this.snapdragon, arguments);
  });

}

/**
 * Expose `Extglob`
 */

module.exports = Extglob;


/***/ }),

/***/ "./node_modules/extglob/lib/parsers.js":
/*!*********************************************!*\
  !*** ./node_modules/extglob/lib/parsers.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var brackets = __webpack_require__(/*! expand-brackets */ "./node_modules/expand-brackets/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/extglob/node_modules/define-property/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/extglob/lib/utils.js");

/**
 * Characters to use in text regex (we want to "not" match
 * characters that are matched by other parsers)
 */

var TEXT_REGEX = '([!@*?+]?\\(|\\)|[*?.+\\\\]|\\[:?(?=.*\\])|:?\\])+';
var not = utils.createRegex(TEXT_REGEX);

/**
 * Extglob parsers
 */

function parsers(extglob) {
  extglob.state = extglob.state || {};

  /**
   * Use `expand-brackets` parsers
   */

  extglob.use(brackets.parsers);
  extglob.parser.sets.paren = extglob.parser.sets.paren || [];
  extglob.parser

    /**
     * Extglob open: "*("
     */

    .capture('paren.open', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^([!@*?+])?\(/);
      if (!m) return;

      var prev = this.prev();
      var prefix = m[1];
      var val = m[0];

      var open = pos({
        type: 'paren.open',
        parsed: parsed,
        val: val
      });

      var node = pos({
        type: 'paren',
        prefix: prefix,
        nodes: [open]
      });

      // if nested negation extglobs, just cancel them out to simplify
      if (prefix === '!' && prev.type === 'paren' && prev.prefix === '!') {
        prev.prefix = '@';
        node.prefix = '@';
      }

      define(node, 'rest', this.input);
      define(node, 'parsed', parsed);
      define(node, 'parent', prev);
      define(open, 'parent', node);

      this.push('paren', node);
      prev.nodes.push(node);
    })

    /**
     * Extglob close: ")"
     */

    .capture('paren.close', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^\)/);
      if (!m) return;

      var parent = this.pop('paren');
      var node = pos({
        type: 'paren.close',
        rest: this.input,
        parsed: parsed,
        val: m[0]
      });

      if (!this.isType(parent, 'paren')) {
        if (this.options.strict) {
          throw new Error('missing opening paren: "("');
        }
        node.escaped = true;
        return node;
      }

      node.prefix = parent.prefix;
      parent.nodes.push(node);
      define(node, 'parent', parent);
    })

    /**
     * Escape: "\\."
     */

    .capture('escape', function() {
      var pos = this.position();
      var m = this.match(/^\\(.)/);
      if (!m) return;

      return pos({
        type: 'escape',
        val: m[0],
        ch: m[1]
      });
    })

    /**
     * Question marks: "?"
     */

    .capture('qmark', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^\?+(?!\()/);
      if (!m) return;
      extglob.state.metachar = true;
      return pos({
        type: 'qmark',
        rest: this.input,
        parsed: parsed,
        val: m[0]
      });
    })

    /**
     * Character parsers
     */

    .capture('star', /^\*(?!\()/)
    .capture('plus', /^\+(?!\()/)
    .capture('dot', /^\./)
    .capture('text', not);
};

/**
 * Expose text regex string
 */

module.exports.TEXT_REGEX = TEXT_REGEX;

/**
 * Extglob parsers
 */

module.exports = parsers;


/***/ }),

/***/ "./node_modules/extglob/lib/utils.js":
/*!*******************************************!*\
  !*** ./node_modules/extglob/lib/utils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regex = __webpack_require__(/*! regex-not */ "./node_modules/regex-not/index.js");
var Cache = __webpack_require__(/*! fragment-cache */ "./node_modules/fragment-cache/index.js");

/**
 * Utils
 */

var utils = module.exports;
var cache = utils.cache = new Cache();

/**
 * Cast `val` to an array
 * @return {Array}
 */

utils.arrayify = function(val) {
  if (!Array.isArray(val)) {
    return [val];
  }
  return val;
};

/**
 * Memoize a generated regex or function
 */

utils.memoize = function(type, pattern, options, fn) {
  var key = utils.createKey(type + pattern, options);

  if (cache.has(type, key)) {
    return cache.get(type, key);
  }

  var val = fn(pattern, options);
  if (options && options.cache === false) {
    return val;
  }

  cache.set(type, key, val);
  return val;
};

/**
 * Create the key to use for memoization. The key is generated
 * by iterating over the options and concatenating key-value pairs
 * to the pattern string.
 */

utils.createKey = function(pattern, options) {
  var key = pattern;
  if (typeof options === 'undefined') {
    return key;
  }
  for (var prop in options) {
    key += ';' + prop + '=' + String(options[prop]);
  }
  return key;
};

/**
 * Create the regex to use for matching text
 */

utils.createRegex = function(str) {
  var opts = {contains: true, strictClose: false};
  return regex(str, opts);
};


/***/ }),

/***/ "./node_modules/extglob/node_modules/define-property/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/extglob/node_modules/define-property/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/extglob/node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/extglob/node_modules/extend-shallow/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/extglob/node_modules/extend-shallow/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./node_modules/extglob/node_modules/is-accessor-descriptor/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/extglob/node_modules/is-accessor-descriptor/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

// accessor descriptor properties
var accessor = {
  get: 'function',
  set: 'function',
  configurable: 'boolean',
  enumerable: 'boolean'
};

function isAccessorDescriptor(obj, prop) {
  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (has(obj, 'value') || has(obj, 'writable')) {
    return false;
  }

  if (!has(obj, 'get') || typeof obj.get !== 'function') {
    return false;
  }

  // tldr: it's valid to have "set" be undefined
  // "set" might be undefined if `Object.getOwnPropertyDescriptor`
  // was used to get the value, and only `get` was defined by the user
  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
    return false;
  }

  for (var key in obj) {
    if (!accessor.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === accessor[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

/**
 * Expose `isAccessorDescriptor`
 */

module.exports = isAccessorDescriptor;


/***/ }),

/***/ "./node_modules/extglob/node_modules/is-data-descriptor/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/extglob/node_modules/is-data-descriptor/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

module.exports = function isDataDescriptor(obj, prop) {
  // data descriptor properties
  var data = {
    configurable: 'boolean',
    enumerable: 'boolean',
    writable: 'boolean'
  };

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (!('value' in obj) && !('writable' in obj)) {
    return false;
  }

  for (var key in obj) {
    if (key === 'value') continue;

    if (!data.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === data[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
};


/***/ }),

/***/ "./node_modules/extglob/node_modules/is-descriptor/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/extglob/node_modules/is-descriptor/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
var isAccessor = __webpack_require__(/*! is-accessor-descriptor */ "./node_modules/extglob/node_modules/is-accessor-descriptor/index.js");
var isData = __webpack_require__(/*! is-data-descriptor */ "./node_modules/extglob/node_modules/is-data-descriptor/index.js");

module.exports = function isDescriptor(obj, key) {
  if (typeOf(obj) !== 'object') {
    return false;
  }
  if ('get' in obj) {
    return isAccessor(obj, key);
  }
  return isData(obj, key);
};


/***/ }),

/***/ "./node_modules/fill-range/index.js":
/*!******************************************!*\
  !*** ./node_modules/fill-range/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var isNumber = __webpack_require__(/*! is-number */ "./node_modules/is-number/index.js");
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/fill-range/node_modules/extend-shallow/index.js");
var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var toRegex = __webpack_require__(/*! to-regex-range */ "./node_modules/to-regex-range/index.js");

/**
 * Return a range of numbers or letters.
 *
 * @param  {String} `start` Start of the range
 * @param  {String} `stop` End of the range
 * @param  {String} `step` Increment or decrement to use.
 * @param  {Function} `fn` Custom function to modify each element in the range.
 * @return {Array}
 */

function fillRange(start, stop, step, options) {
  if (typeof start === 'undefined') {
    return [];
  }

  if (typeof stop === 'undefined' || start === stop) {
    // special case, for handling negative zero
    var isString = typeof start === 'string';
    if (isNumber(start) && !toNumber(start)) {
      return [isString ? '0' : 0];
    }
    return [start];
  }

  if (typeof step !== 'number' && typeof step !== 'string') {
    options = step;
    step = undefined;
  }

  if (typeof options === 'function') {
    options = { transform: options };
  }

  var opts = extend({step: step}, options);
  if (opts.step && !isValidNumber(opts.step)) {
    if (opts.strictRanges === true) {
      throw new TypeError('expected options.step to be a number');
    }
    return [];
  }

  opts.isNumber = isValidNumber(start) && isValidNumber(stop);
  if (!opts.isNumber && !isValid(start, stop)) {
    if (opts.strictRanges === true) {
      throw new RangeError('invalid range arguments: ' + util.inspect([start, stop]));
    }
    return [];
  }

  opts.isPadded = isPadded(start) || isPadded(stop);
  opts.toString = opts.stringify
    || typeof opts.step === 'string'
    || typeof start === 'string'
    || typeof stop === 'string'
    || !opts.isNumber;

  if (opts.isPadded) {
    opts.maxLength = Math.max(String(start).length, String(stop).length);
  }

  // support legacy minimatch/fill-range options
  if (typeof opts.optimize === 'boolean') opts.toRegex = opts.optimize;
  if (typeof opts.makeRe === 'boolean') opts.toRegex = opts.makeRe;
  return expand(start, stop, opts);
}

function expand(start, stop, options) {
  var a = options.isNumber ? toNumber(start) : start.charCodeAt(0);
  var b = options.isNumber ? toNumber(stop) : stop.charCodeAt(0);

  var step = Math.abs(toNumber(options.step)) || 1;
  if (options.toRegex && step === 1) {
    return toRange(a, b, start, stop, options);
  }

  var zero = {greater: [], lesser: []};
  var asc = a < b;
  var arr = new Array(Math.round((asc ? b - a : a - b) / step));
  var idx = 0;

  while (asc ? a <= b : a >= b) {
    var val = options.isNumber ? a : String.fromCharCode(a);
    if (options.toRegex && (val >= 0 || !options.isNumber)) {
      zero.greater.push(val);
    } else {
      zero.lesser.push(Math.abs(val));
    }

    if (options.isPadded) {
      val = zeros(val, options);
    }

    if (options.toString) {
      val = String(val);
    }

    if (typeof options.transform === 'function') {
      arr[idx++] = options.transform(val, a, b, step, idx, arr, options);
    } else {
      arr[idx++] = val;
    }

    if (asc) {
      a += step;
    } else {
      a -= step;
    }
  }

  if (options.toRegex === true) {
    return toSequence(arr, zero, options);
  }
  return arr;
}

function toRange(a, b, start, stop, options) {
  if (options.isPadded) {
    return toRegex(start, stop, options);
  }

  if (options.isNumber) {
    return toRegex(Math.min(a, b), Math.max(a, b), options);
  }

  var start = String.fromCharCode(Math.min(a, b));
  var stop = String.fromCharCode(Math.max(a, b));
  return '[' + start + '-' + stop + ']';
}

function toSequence(arr, zeros, options) {
  var greater = '', lesser = '';
  if (zeros.greater.length) {
    greater = zeros.greater.join('|');
  }
  if (zeros.lesser.length) {
    lesser = '-(' + zeros.lesser.join('|') + ')';
  }
  var res = greater && lesser
    ? greater + '|' + lesser
    : greater || lesser;

  if (options.capture) {
    return '(' + res + ')';
  }
  return res;
}

function zeros(val, options) {
  if (options.isPadded) {
    var str = String(val);
    var len = str.length;
    var dash = '';
    if (str.charAt(0) === '-') {
      dash = '-';
      str = str.slice(1);
    }
    var diff = options.maxLength - len;
    var pad = repeat('0', diff);
    val = (dash + pad + str);
  }
  if (options.stringify) {
    return String(val);
  }
  return val;
}

function toNumber(val) {
  return Number(val) || 0;
}

function isPadded(str) {
  return /^-?0\d/.test(str);
}

function isValid(min, max) {
  return (isValidNumber(min) || isValidLetter(min))
      && (isValidNumber(max) || isValidLetter(max));
}

function isValidLetter(ch) {
  return typeof ch === 'string' && ch.length === 1 && /^\w+$/.test(ch);
}

function isValidNumber(n) {
  return isNumber(n) && !/\./.test(n);
}

/**
 * Expose `fillRange`
 * @type {Function}
 */

module.exports = fillRange;


/***/ }),

/***/ "./node_modules/fill-range/node_modules/extend-shallow/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fill-range/node_modules/extend-shallow/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./node_modules/for-in/index.js":
/*!**************************************!*\
  !*** ./node_modules/for-in/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function forIn(obj, fn, thisArg) {
  for (var key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
};


/***/ }),

/***/ "./node_modules/fragment-cache/index.js":
/*!**********************************************!*\
  !*** ./node_modules/fragment-cache/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * fragment-cache <https://github.com/jonschlinkert/fragment-cache>
 *
 * Copyright (c) 2016-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var MapCache = __webpack_require__(/*! map-cache */ "./node_modules/map-cache/index.js");

/**
 * Create a new `FragmentCache` with an optional object to use for `caches`.
 *
 * ```js
 * var fragment = new FragmentCache();
 * ```
 * @name FragmentCache
 * @param {String} `cacheName`
 * @return {Object} Returns the [map-cache][] instance.
 * @api public
 */

function FragmentCache(caches) {
  this.caches = caches || {};
}

/**
 * Prototype
 */

FragmentCache.prototype = {

  /**
   * Get cache `name` from the `fragment.caches` object. Creates a new
   * `MapCache` if it doesn't already exist.
   *
   * ```js
   * var cache = fragment.cache('files');
   * console.log(fragment.caches.hasOwnProperty('files'));
   * //=> true
   * ```
   * @name .cache
   * @param {String} `cacheName`
   * @return {Object} Returns the [map-cache][] instance.
   * @api public
   */

  cache: function(cacheName) {
    return this.caches[cacheName] || (this.caches[cacheName] = new MapCache());
  },

  /**
   * Set a value for property `key` on cache `name`
   *
   * ```js
   * fragment.set('files', 'somefile.js', new File({path: 'somefile.js'}));
   * ```
   * @name .set
   * @param {String} `name`
   * @param {String} `key` Property name to set
   * @param {any} `val` The value of `key`
   * @return {Object} The cache instance for chaining
   * @api public
   */

  set: function(cacheName, key, val) {
    var cache = this.cache(cacheName);
    cache.set(key, val);
    return cache;
  },

  /**
   * Returns true if a non-undefined value is set for `key` on fragment cache `name`.
   *
   * ```js
   * var cache = fragment.cache('files');
   * cache.set('somefile.js');
   *
   * console.log(cache.has('somefile.js'));
   * //=> true
   *
   * console.log(cache.has('some-other-file.js'));
   * //=> false
   * ```
   * @name .has
   * @param {String} `name` Cache name
   * @param {String} `key` Optionally specify a property to check for on cache `name`
   * @return {Boolean}
   * @api public
   */

  has: function(cacheName, key) {
    return typeof this.get(cacheName, key) !== 'undefined';
  },

  /**
   * Get `name`, or if specified, the value of `key`. Invokes the [cache]() method,
   * so that cache `name` will be created it doesn't already exist. If `key` is not passed,
   * the entire cache (`name`) is returned.
   *
   * ```js
   * var Vinyl = require('vinyl');
   * var cache = fragment.cache('files');
   * cache.set('somefile.js', new Vinyl({path: 'somefile.js'}));
   * console.log(cache.get('somefile.js'));
   * //=> <File "somefile.js">
   * ```
   * @name .get
   * @param {String} `name`
   * @return {Object} Returns cache `name`, or the value of `key` if specified
   * @api public
   */

  get: function(name, key) {
    var cache = this.cache(name);
    if (typeof key === 'string') {
      return cache.get(key);
    }
    return cache;
  }
};

/**
 * Expose `FragmentCache`
 */

exports = module.exports = FragmentCache;


/***/ }),

/***/ "./node_modules/get-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-value/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = function(obj, prop, a, b, c) {
  if (!isObject(obj) || !prop) {
    return obj;
  }

  prop = toString(prop);

  // allowing for multiple properties to be passed as
  // a string or array, but much faster (3-4x) than doing
  // `[].slice.call(arguments)`
  if (a) prop += '.' + toString(a);
  if (b) prop += '.' + toString(b);
  if (c) prop += '.' + toString(c);

  if (prop in obj) {
    return obj[prop];
  }

  var segs = prop.split('.');
  var len = segs.length;
  var i = -1;

  while (obj && (++i < len)) {
    var key = segs[i];
    while (key[key.length - 1] === '\\') {
      key = key.slice(0, -1) + '.' + segs[++i];
    }
    obj = obj[key];
  }
  return obj;
};

function isObject(val) {
  return val !== null && (typeof val === 'object' || typeof val === 'function');
}

function toString(val) {
  if (!val) return '';
  if (Array.isArray(val)) {
    return val.join('.');
  }
  return val;
}


/***/ }),

/***/ "./node_modules/glob-parent/index.js":
/*!*******************************************!*\
  !*** ./node_modules/glob-parent/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var isglob = __webpack_require__(/*! is-glob */ "./node_modules/glob-parent/node_modules/is-glob/index.js");
var pathDirname = __webpack_require__(/*! path-dirname */ "./node_modules/path-dirname/index.js");
var isWin32 = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js").platform() === 'win32';

module.exports = function globParent(str) {
	// flip windows path separators
	if (isWin32 && str.indexOf('/') < 0) str = str.split('\\').join('/');

	// special case for strings ending in enclosure containing path separator
	if (/[\{\[].*[\/]*.*[\}\]]$/.test(str)) str += '/';

	// preserves full path in case of trailing path separator
	str += 'a';

	// remove path parts that are globby
	do {str = pathDirname.posix(str)}
	while (isglob(str) || /(^|[^\\])([\{\[]|\([^\)]+$)/.test(str));

	// remove escape chars and return result
	return str.replace(/\\([\*\?\|\[\]\(\)\{\}])/g, '$1');
};


/***/ }),

/***/ "./node_modules/glob-parent/node_modules/is-glob/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/glob-parent/node_modules/is-glob/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var isExtglob = __webpack_require__(/*! is-extglob */ "./node_modules/is-extglob/index.js");

module.exports = function isGlob(str) {
  if (typeof str !== 'string' || str === '') {
    return false;
  }

  if (isExtglob(str)) return true;

  var regex = /(\\).|([*?]|\[.*\]|\{.*\}|\(.*\|.*\)|^!)/;
  var match;

  while ((match = regex.exec(str))) {
    if (match[2]) return true;
    str = str.slice(match.index + match[0].length);
  }
  return false;
};


/***/ }),

/***/ "./node_modules/graceful-fs/clone.js":
/*!*******************************************!*\
  !*** ./node_modules/graceful-fs/clone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = clone

function clone (obj) {
  if (obj === null || typeof obj !== 'object')
    return obj

  if (obj instanceof Object)
    var copy = { __proto__: obj.__proto__ }
  else
    var copy = Object.create(null)

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))
  })

  return copy
}


/***/ }),

/***/ "./node_modules/graceful-fs/graceful-fs.js":
/*!*************************************************!*\
  !*** ./node_modules/graceful-fs/graceful-fs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
var polyfills = __webpack_require__(/*! ./polyfills.js */ "./node_modules/graceful-fs/polyfills.js")
var legacy = __webpack_require__(/*! ./legacy-streams.js */ "./node_modules/graceful-fs/legacy-streams.js")
var clone = __webpack_require__(/*! ./clone.js */ "./node_modules/graceful-fs/clone.js")

var queue = []

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js")

function noop () {}

var debug = noop
if (util.debuglog)
  debug = util.debuglog('gfs4')
else if (/\bgfs4\b/i.test(Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).NODE_DEBUG || ''))
  debug = function() {
    var m = util.format.apply(util, arguments)
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ')
    console.error(m)
  }

if (/\bgfs4\b/i.test(Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).NODE_DEBUG || '')) {
  process.on('exit', function() {
    debug(queue)
    __webpack_require__(/*! assert */ "./node_modules/assert/assert.js").equal(queue.length, 0)
  })
}

module.exports = patch(clone(fs))
if (Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
    module.exports = patch(fs)
    fs.__patched = true;
}

// Always patch fs.close/closeSync, because we want to
// retry() whenever a close happens *anywhere* in the program.
// This is essential when multiple graceful-fs instances are
// in play at the same time.
module.exports.close = (function (fs$close) { return function (fd, cb) {
  return fs$close.call(fs, fd, function (err) {
    if (!err)
      retry()

    if (typeof cb === 'function')
      cb.apply(this, arguments)
  })
}})(fs.close)

module.exports.closeSync = (function (fs$closeSync) { return function (fd) {
  // Note that graceful-fs also retries when fs.closeSync() fails.
  // Looks like a bug to me, although it's probably a harmless one.
  var rval = fs$closeSync.apply(fs, arguments)
  retry()
  return rval
}})(fs.closeSync)

// Only patch fs once, otherwise we'll run into a memory leak if
// graceful-fs is loaded multiple times, such as in test environments that
// reset the loaded modules between tests.
// We look for the string `graceful-fs` from the comment above. This
// way we are not adding any extra properties and it will detect if older
// versions of graceful-fs are installed.
if (!/\bgraceful-fs\b/.test(fs.closeSync.toString())) {
  fs.closeSync = module.exports.closeSync;
  fs.close = module.exports.close;
}

function patch (fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs)
  fs.gracefulify = patch
  fs.FileReadStream = ReadStream;  // Legacy name.
  fs.FileWriteStream = WriteStream;  // Legacy name.
  fs.createReadStream = createReadStream
  fs.createWriteStream = createWriteStream
  var fs$readFile = fs.readFile
  fs.readFile = readFile
  function readFile (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$readFile(path, options, cb)

    function go$readFile (path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readFile, [path, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$writeFile = fs.writeFile
  fs.writeFile = writeFile
  function writeFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$writeFile(path, data, options, cb)

    function go$writeFile (path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$writeFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$appendFile = fs.appendFile
  if (fs$appendFile)
    fs.appendFile = appendFile
  function appendFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$appendFile(path, data, options, cb)

    function go$appendFile (path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$appendFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$readdir = fs.readdir
  fs.readdir = readdir
  function readdir (path, options, cb) {
    var args = [path]
    if (typeof options !== 'function') {
      args.push(options)
    } else {
      cb = options
    }
    args.push(go$readdir$cb)

    return go$readdir(args)

    function go$readdir$cb (err, files) {
      if (files && files.sort)
        files.sort()

      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
        enqueue([go$readdir, [args]])

      else {
        if (typeof cb === 'function')
          cb.apply(this, arguments)
        retry()
      }
    }
  }

  function go$readdir (args) {
    return fs$readdir.apply(fs, args)
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs)
    ReadStream = legStreams.ReadStream
    WriteStream = legStreams.WriteStream
  }

  var fs$ReadStream = fs.ReadStream
  if (fs$ReadStream) {
    ReadStream.prototype = Object.create(fs$ReadStream.prototype)
    ReadStream.prototype.open = ReadStream$open
  }

  var fs$WriteStream = fs.WriteStream
  if (fs$WriteStream) {
    WriteStream.prototype = Object.create(fs$WriteStream.prototype)
    WriteStream.prototype.open = WriteStream$open
  }

  fs.ReadStream = ReadStream
  fs.WriteStream = WriteStream

  function ReadStream (path, options) {
    if (this instanceof ReadStream)
      return fs$ReadStream.apply(this, arguments), this
    else
      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
  }

  function ReadStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose)
          that.destroy()

        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
        that.read()
      }
    })
  }

  function WriteStream (path, options) {
    if (this instanceof WriteStream)
      return fs$WriteStream.apply(this, arguments), this
    else
      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
  }

  function WriteStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy()
        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
      }
    })
  }

  function createReadStream (path, options) {
    return new ReadStream(path, options)
  }

  function createWriteStream (path, options) {
    return new WriteStream(path, options)
  }

  var fs$open = fs.open
  fs.open = open
  function open (path, flags, mode, cb) {
    if (typeof mode === 'function')
      cb = mode, mode = null

    return go$open(path, flags, mode, cb)

    function go$open (path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$open, [path, flags, mode, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  return fs
}

function enqueue (elem) {
  debug('ENQUEUE', elem[0].name, elem[1])
  queue.push(elem)
}

function retry () {
  var elem = queue.shift()
  if (elem) {
    debug('RETRY', elem[0].name, elem[1])
    elem[0].apply(null, elem[1])
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/graceful-fs/legacy-streams.js":
/*!****************************************************!*\
  !*** ./node_modules/graceful-fs/legacy-streams.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var Stream = __webpack_require__(/*! stream */ "./node_modules/stream-browserify/index.js").Stream

module.exports = legacy

function legacy (fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  }

  function ReadStream (path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function() {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    })
  }

  function WriteStream (path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/graceful-fs/polyfills.js":
/*!***********************************************!*\
  !*** ./node_modules/graceful-fs/polyfills.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var constants = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json")

var origCwd = process.cwd
var cwd = null

var platform = Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).GRACEFUL_FS_PLATFORM || process.platform

process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process)
  return cwd
}
try {
  process.cwd()
} catch (er) {}

var chdir = process.chdir
process.chdir = function(d) {
  cwd = null
  chdir.call(process, d)
}

module.exports = patch

function patch (fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs)
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs)
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown)
  fs.fchown = chownFix(fs.fchown)
  fs.lchown = chownFix(fs.lchown)

  fs.chmod = chmodFix(fs.chmod)
  fs.fchmod = chmodFix(fs.fchmod)
  fs.lchmod = chmodFix(fs.lchmod)

  fs.chownSync = chownFixSync(fs.chownSync)
  fs.fchownSync = chownFixSync(fs.fchownSync)
  fs.lchownSync = chownFixSync(fs.lchownSync)

  fs.chmodSync = chmodFixSync(fs.chmodSync)
  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
  fs.lchmodSync = chmodFixSync(fs.lchmodSync)

  fs.stat = statFix(fs.stat)
  fs.fstat = statFix(fs.fstat)
  fs.lstat = statFix(fs.lstat)

  fs.statSync = statFixSync(fs.statSync)
  fs.fstatSync = statFixSync(fs.fstatSync)
  fs.lstatSync = statFixSync(fs.lstatSync)

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchmodSync = function () {}
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchownSync = function () {}
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = (function (fs$rename) { return function (from, to, cb) {
      var start = Date.now()
      var backoff = 0;
      fs$rename(from, to, function CB (er) {
        if (er
            && (er.code === "EACCES" || er.code === "EPERM")
            && Date.now() - start < 60000) {
          setTimeout(function() {
            fs.stat(to, function (stater, st) {
              if (stater && stater.code === "ENOENT")
                fs$rename(from, to, CB);
              else
                cb(er)
            })
          }, backoff)
          if (backoff < 100)
            backoff += 10;
          return;
        }
        if (cb) cb(er)
      })
    }})(fs.rename)
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = (function (fs$read) { return function (fd, buffer, offset, length, position, callback_) {
    var callback
    if (callback_ && typeof callback_ === 'function') {
      var eagCounter = 0
      callback = function (er, _, __) {
        if (er && er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          return fs$read.call(fs, fd, buffer, offset, length, position, callback)
        }
        callback_.apply(this, arguments)
      }
    }
    return fs$read.call(fs, fd, buffer, offset, length, position, callback)
  }})(fs.read)

  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
    var eagCounter = 0
    while (true) {
      try {
        return fs$readSync.call(fs, fd, buffer, offset, length, position)
      } catch (er) {
        if (er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          continue
        }
        throw er
      }
    }
  }})(fs.readSync)

  function patchLchmod (fs) {
    fs.lchmod = function (path, mode, callback) {
      fs.open( path
             , constants.O_WRONLY | constants.O_SYMLINK
             , mode
             , function (err, fd) {
        if (err) {
          if (callback) callback(err)
          return
        }
        // prefer to return the chmod error, if one occurs,
        // but still try to close, and report closing errors if they occur.
        fs.fchmod(fd, mode, function (err) {
          fs.close(fd, function(err2) {
            if (callback) callback(err || err2)
          })
        })
      })
    }

    fs.lchmodSync = function (path, mode) {
      var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)

      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      var threw = true
      var ret
      try {
        ret = fs.fchmodSync(fd, mode)
        threw = false
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd)
          } catch (er) {}
        } else {
          fs.closeSync(fd)
        }
      }
      return ret
    }
  }

  function patchLutimes (fs) {
    if (constants.hasOwnProperty("O_SYMLINK")) {
      fs.lutimes = function (path, at, mt, cb) {
        fs.open(path, constants.O_SYMLINK, function (er, fd) {
          if (er) {
            if (cb) cb(er)
            return
          }
          fs.futimes(fd, at, mt, function (er) {
            fs.close(fd, function (er2) {
              if (cb) cb(er || er2)
            })
          })
        })
      }

      fs.lutimesSync = function (path, at, mt) {
        var fd = fs.openSync(path, constants.O_SYMLINK)
        var ret
        var threw = true
        try {
          ret = fs.futimesSync(fd, at, mt)
          threw = false
        } finally {
          if (threw) {
            try {
              fs.closeSync(fd)
            } catch (er) {}
          } else {
            fs.closeSync(fd)
          }
        }
        return ret
      }

    } else {
      fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }
      fs.lutimesSync = function () {}
    }
  }

  function chmodFix (orig) {
    if (!orig) return orig
    return function (target, mode, cb) {
      return orig.call(fs, target, mode, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chmodFixSync (orig) {
    if (!orig) return orig
    return function (target, mode) {
      try {
        return orig.call(fs, target, mode)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }


  function chownFix (orig) {
    if (!orig) return orig
    return function (target, uid, gid, cb) {
      return orig.call(fs, target, uid, gid, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chownFixSync (orig) {
    if (!orig) return orig
    return function (target, uid, gid) {
      try {
        return orig.call(fs, target, uid, gid)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }

  function statFix (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options, cb) {
      if (typeof options === 'function') {
        cb = options
        options = null
      }
      function callback (er, stats) {
        if (stats) {
          if (stats.uid < 0) stats.uid += 0x100000000
          if (stats.gid < 0) stats.gid += 0x100000000
        }
        if (cb) cb.apply(this, arguments)
      }
      return options ? orig.call(fs, target, options, callback)
        : orig.call(fs, target, callback)
    }
  }

  function statFixSync (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options) {
      var stats = options ? orig.call(fs, target, options)
        : orig.call(fs, target)
      if (stats.uid < 0) stats.uid += 0x100000000
      if (stats.gid < 0) stats.gid += 0x100000000
      return stats;
    }
  }

  // ENOSYS means that the fs doesn't support the op. Just ignore
  // that, because it doesn't matter.
  //
  // if there's no getuid, or if getuid() is something other
  // than 0, and the error is EINVAL or EPERM, then just ignore
  // it.
  //
  // This specific case is a silent failure in cp, install, tar,
  // and most other unix tools that manage permissions.
  //
  // When running as root, or if other types of errors are
  // encountered, then it's strict.
  function chownErOk (er) {
    if (!er)
      return true

    if (er.code === "ENOSYS")
      return true

    var nonroot = !process.getuid || process.getuid() !== 0
    if (nonroot) {
      if (er.code === "EINVAL" || er.code === "EPERM")
        return true
    }

    return false
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/has-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-value/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-value <https://github.com/jonschlinkert/has-value>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
var hasValues = __webpack_require__(/*! has-values */ "./node_modules/has-values/index.js");
var get = __webpack_require__(/*! get-value */ "./node_modules/get-value/index.js");

module.exports = function(val, prop) {
  return hasValues(isObject(val) && prop ? get(val, prop) : val);
};


/***/ }),

/***/ "./node_modules/has-values/index.js":
/*!******************************************!*\
  !*** ./node_modules/has-values/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/has-values/node_modules/kind-of/index.js");
var isNumber = __webpack_require__(/*! is-number */ "./node_modules/is-number/index.js");

module.exports = function hasValue(val) {
  // is-number checks for NaN and other edge cases
  if (isNumber(val)) {
    return true;
  }

  switch (typeOf(val)) {
    case 'null':
    case 'boolean':
    case 'function':
      return true;
    case 'string':
    case 'arguments':
      return val.length !== 0;
    case 'error':
      return val.message !== '';
    case 'array':
      var len = val.length;
      if (len === 0) {
        return false;
      }
      for (var i = 0; i < len; i++) {
        if (hasValue(val[i])) {
          return true;
        }
      }
      return false;
    case 'file':
    case 'map':
    case 'set':
      return val.size !== 0;
    case 'object':
      var keys = Object.keys(val);
      if (keys.length === 0) {
        return false;
      }
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (hasValue(val[key])) {
          return true;
        }
      }
      return false;
    default: {
      return false;
    }
  }
};


/***/ }),

/***/ "./node_modules/has-values/node_modules/kind-of/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/has-values/node_modules/kind-of/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/is-accessor-descriptor/index.js":
/*!******************************************************!*\
  !*** ./node_modules/is-accessor-descriptor/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js");

// accessor descriptor properties
var accessor = {
  get: 'function',
  set: 'function',
  configurable: 'boolean',
  enumerable: 'boolean'
};

function isAccessorDescriptor(obj, prop) {
  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (has(obj, 'value') || has(obj, 'writable')) {
    return false;
  }

  if (!has(obj, 'get') || typeof obj.get !== 'function') {
    return false;
  }

  // tldr: it's valid to have "set" be undefined
  // "set" might be undefined if `Object.getOwnPropertyDescriptor`
  // was used to get the value, and only `get` was defined by the user
  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
    return false;
  }

  for (var key in obj) {
    if (!accessor.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === accessor[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

/**
 * Expose `isAccessorDescriptor`
 */

module.exports = isAccessorDescriptor;


/***/ }),

/***/ "./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),

/***/ "./node_modules/is-binary-path/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-binary-path/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var binaryExtensions = __webpack_require__(/*! binary-extensions */ "./node_modules/binary-extensions/binary-extensions.json");
var exts = Object.create(null);

binaryExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	return path.extname(filepath).slice(1).toLowerCase() in exts;
};


/***/ }),

/***/ "./node_modules/is-data-descriptor/index.js":
/*!**************************************************!*\
  !*** ./node_modules/is-data-descriptor/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/is-data-descriptor/node_modules/kind-of/index.js");

// data descriptor properties
var data = {
  configurable: 'boolean',
  enumerable: 'boolean',
  writable: 'boolean'
};

function isDataDescriptor(obj, prop) {
  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (!('value' in obj) && !('writable' in obj)) {
    return false;
  }

  for (var key in obj) {
    if (key === 'value') continue;

    if (!data.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === data[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

/**
 * Expose `isDataDescriptor`
 */

module.exports = isDataDescriptor;


/***/ }),

/***/ "./node_modules/is-data-descriptor/node_modules/kind-of/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/is-data-descriptor/node_modules/kind-of/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),

/***/ "./node_modules/is-descriptor/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-descriptor/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/is-descriptor/node_modules/kind-of/index.js");
var isAccessor = __webpack_require__(/*! is-accessor-descriptor */ "./node_modules/is-accessor-descriptor/index.js");
var isData = __webpack_require__(/*! is-data-descriptor */ "./node_modules/is-data-descriptor/index.js");

module.exports = function isDescriptor(obj, key) {
  if (typeOf(obj) !== 'object') {
    return false;
  }
  if ('get' in obj) {
    return isAccessor(obj, key);
  }
  return isData(obj, key);
};


/***/ }),

/***/ "./node_modules/is-descriptor/node_modules/kind-of/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/is-descriptor/node_modules/kind-of/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  var type = typeof val;

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }
  
  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }
  
  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  return val.constructor
    && typeof val.constructor.isBuffer === 'function'
    && val.constructor.isBuffer(val);
}


/***/ }),

/***/ "./node_modules/is-extendable/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-extendable/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};


/***/ }),

/***/ "./node_modules/is-extglob/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-extglob/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = function isExtglob(str) {
  if (typeof str !== 'string' || str === '') {
    return false;
  }

  var match;
  while ((match = /(\\).|([@?!+*]\(.*\))/g.exec(str))) {
    if (match[2]) return true;
    str = str.slice(match.index + match[0].length);
  }

  return false;
};


/***/ }),

/***/ "./node_modules/is-glob/index.js":
/*!***************************************!*\
  !*** ./node_modules/is-glob/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isExtglob = __webpack_require__(/*! is-extglob */ "./node_modules/is-extglob/index.js");
var chars = { '{': '}', '(': ')', '[': ']'};
var strictRegex = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
var relaxedRegex = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;

module.exports = function isGlob(str, options) {
  if (typeof str !== 'string' || str === '') {
    return false;
  }

  if (isExtglob(str)) {
    return true;
  }

  var regex = strictRegex;
  var match;

  // optionally relax regex
  if (options && options.strict === false) {
    regex = relaxedRegex;
  }

  while ((match = regex.exec(str))) {
    if (match[2]) return true;
    var idx = match.index + match[0].length;

    // if an open bracket/brace/paren is escaped,
    // set the index to the next closing character
    var open = match[1];
    var close = open ? chars[open] : null;
    if (open && close) {
      var n = str.indexOf(close, idx);
      if (n !== -1) {
        idx = n + 1;
      }
    }

    str = str.slice(idx);
  }
  return false;
};


/***/ }),

/***/ "./node_modules/is-number/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-number/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/is-number/node_modules/kind-of/index.js");

module.exports = function isNumber(num) {
  var type = typeOf(num);

  if (type === 'string') {
    if (!num.trim()) return false;
  } else if (type !== 'number') {
    return false;
  }

  return (num - num + 1) >= 0;
};


/***/ }),

/***/ "./node_modules/is-number/node_modules/kind-of/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/is-number/node_modules/kind-of/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/is-windows/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-windows/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * is-windows <https://github.com/jonschlinkert/is-windows>
 *
 * Copyright ?? 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

(function(factory) {
  if (exports && typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function() {
  'use strict';
  return function isWindows() {
    return process && (process.platform === 'win32' || /^(msys|cygwin)$/.test(Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).OSTYPE));
  };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),

/***/ "./node_modules/laravel-mix/src/tasks/Task.js":
/*!****************************************************!*\
  !*** ./node_modules/laravel-mix/src/tasks/Task.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let chokidar = __webpack_require__(/*! chokidar */ "./node_modules/chokidar/index.js");

class Task {
    /**
     * Create a new task instance.
     *
     * @param {Object} data
     */
    constructor(data) {
        this.data = data;
        this.assets = [];
        this.isBeingWatched = false;
    }

    /**
     * Watch all relevant files for changes.
     *
     * @param {boolean} usePolling
     */
    watch(usePolling = false) {
        if (this.isBeingWatched) return;

        let files = this.files.get();
        let watcher = chokidar
            .watch(files, { usePolling, persistent: true })
            .on('change', this.onChange.bind(this));

        // Workaround for issue with atomic writes.
        // See https://github.com/paulmillr/chokidar/issues/591
        if (!usePolling) {
            watcher.on('raw', (event, path, { watchedPath }) => {
                if (event === 'rename') {
                    watcher.unwatch(files);
                    watcher.add(files);
                }
            });
        }

        this.isBeingWatched = true;
    }
}

module.exports = Task;


/***/ }),

/***/ "./node_modules/map-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/map-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * map-cache <https://github.com/jonschlinkert/map-cache>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var hasOwn = Object.prototype.hasOwnProperty;

/**
 * Expose `MapCache`
 */

module.exports = MapCache;

/**
 * Creates a cache object to store key/value pairs.
 *
 * ```js
 * var cache = new MapCache();
 * ```
 *
 * @api public
 */

function MapCache(data) {
  this.__data__ = data || {};
}

/**
 * Adds `value` to `key` on the cache.
 *
 * ```js
 * cache.set('foo', 'bar');
 * ```
 *
 * @param {String} `key` The key of the value to cache.
 * @param {*} `value` The value to cache.
 * @returns {Object} Returns the `Cache` object for chaining.
 * @api public
 */

MapCache.prototype.set = function mapSet(key, value) {
  if (key !== '__proto__') {
    this.__data__[key] = value;
  }
  return this;
};

/**
 * Gets the cached value for `key`.
 *
 * ```js
 * cache.get('foo');
 * //=> 'bar'
 * ```
 *
 * @param {String} `key` The key of the value to get.
 * @returns {*} Returns the cached value.
 * @api public
 */

MapCache.prototype.get = function mapGet(key) {
  return key === '__proto__' ? undefined : this.__data__[key];
};

/**
 * Checks if a cached value for `key` exists.
 *
 * ```js
 * cache.has('foo');
 * //=> true
 * ```
 *
 * @param {String} `key` The key of the entry to check.
 * @returns {Boolean} Returns `true` if an entry for `key` exists, else `false`.
 * @api public
 */

MapCache.prototype.has = function mapHas(key) {
  return key !== '__proto__' && hasOwn.call(this.__data__, key);
};

/**
 * Removes `key` and its value from the cache.
 *
 * ```js
 * cache.del('foo');
 * ```
 * @title .del
 * @param {String} `key` The key of the value to remove.
 * @returns {Boolean} Returns `true` if the entry was removed successfully, else `false`.
 * @api public
 */

MapCache.prototype.del = function mapDelete(key) {
  return this.has(key) && delete this.__data__[key];
};


/***/ }),

/***/ "./node_modules/map-visit/index.js":
/*!*****************************************!*\
  !*** ./node_modules/map-visit/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var visit = __webpack_require__(/*! object-visit */ "./node_modules/object-visit/index.js");

/**
 * Map `visit` over an array of objects.
 *
 * @param  {Object} `collection` The context in which to invoke `method`
 * @param  {String} `method` Name of the method to call on `collection`
 * @param  {Object} `arr` Array of objects.
 */

module.exports = function mapVisit(collection, method, val) {
  if (isObject(val)) {
    return visit.apply(null, arguments);
  }

  if (!Array.isArray(val)) {
    throw new TypeError('expected an array: ' + util.inspect(val));
  }

  var args = [].slice.call(arguments, 3);

  for (var i = 0; i < val.length; i++) {
    var ele = val[i];
    if (isObject(ele)) {
      visit.apply(null, [collection, method, ele].concat(args));
    } else {
      collection[method].apply(collection, [ele].concat(args));
    }
  }
};

function isObject(val) {
  return val && (typeof val === 'function' || (!Array.isArray(val) && typeof val === 'object'));
}


/***/ }),

/***/ "./node_modules/micromatch/index.js":
/*!******************************************!*\
  !*** ./node_modules/micromatch/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var braces = __webpack_require__(/*! braces */ "./node_modules/braces/index.js");
var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extend-shallow/index.js");

/**
 * Local dependencies
 */

var compilers = __webpack_require__(/*! ./lib/compilers */ "./node_modules/micromatch/lib/compilers.js");
var parsers = __webpack_require__(/*! ./lib/parsers */ "./node_modules/micromatch/lib/parsers.js");
var cache = __webpack_require__(/*! ./lib/cache */ "./node_modules/micromatch/lib/cache.js");
var utils = __webpack_require__(/*! ./lib/utils */ "./node_modules/micromatch/lib/utils.js");
var MAX_LENGTH = 1024 * 64;

/**
 * The main function takes a list of strings and one or more
 * glob patterns to use for matching.
 *
 * ```js
 * var mm = require('micromatch');
 * mm(list, patterns[, options]);
 *
 * console.log(mm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {Array} `list` A list of strings to match
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */

function micromatch(list, patterns, options) {
  patterns = utils.arrayify(patterns);
  list = utils.arrayify(list);

  var len = patterns.length;
  if (list.length === 0 || len === 0) {
    return [];
  }

  if (len === 1) {
    return micromatch.match(list, patterns[0], options);
  }

  var omit = [];
  var keep = [];
  var idx = -1;

  while (++idx < len) {
    var pattern = patterns[idx];

    if (typeof pattern === 'string' && pattern.charCodeAt(0) === 33 /* ! */) {
      omit.push.apply(omit, micromatch.match(list, pattern.slice(1), options));
    } else {
      keep.push.apply(keep, micromatch.match(list, pattern, options));
    }
  }

  var matches = utils.diff(keep, omit);
  if (!options || options.nodupes !== false) {
    return utils.unique(matches);
  }

  return matches;
}

/**
 * Similar to the main function, but `pattern` must be a string.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.match(list, pattern[, options]);
 *
 * console.log(mm.match(['a.a', 'a.aa', 'a.b', 'a.c'], '*.a'));
 * //=> ['a.a', 'a.aa']
 * ```
 * @param {Array} `list` Array of strings to match
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of matches
 * @api public
 */

micromatch.match = function(list, pattern, options) {
  if (Array.isArray(pattern)) {
    throw new TypeError('expected pattern to be a string');
  }

  var unixify = utils.unixify(options);
  var isMatch = memoize('match', pattern, options, micromatch.matcher);
  var matches = [];

  list = utils.arrayify(list);
  var len = list.length;
  var idx = -1;

  while (++idx < len) {
    var ele = list[idx];
    if (ele === pattern || isMatch(ele)) {
      matches.push(utils.value(ele, unixify, options));
    }
  }

  // if no options were passed, uniquify results and return
  if (typeof options === 'undefined') {
    return utils.unique(matches);
  }

  if (matches.length === 0) {
    if (options.failglob === true) {
      throw new Error('no matches found for "' + pattern + '"');
    }
    if (options.nonull === true || options.nullglob === true) {
      return [options.unescape ? utils.unescape(pattern) : pattern];
    }
  }

  // if `opts.ignore` was defined, diff ignored list
  if (options.ignore) {
    matches = micromatch.not(matches, options.ignore, options);
  }

  return options.nodupes !== false ? utils.unique(matches) : matches;
};

/**
 * Returns true if the specified `string` matches the given glob `pattern`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.isMatch(string, pattern[, options]);
 *
 * console.log(mm.isMatch('a.a', '*.a'));
 * //=> true
 * console.log(mm.isMatch('a.b', '*.a'));
 * //=> false
 * ```
 * @param {String} `string` String to match
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if the string matches the glob pattern.
 * @api public
 */

micromatch.isMatch = function(str, pattern, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }

  if (isEmptyString(str) || isEmptyString(pattern)) {
    return false;
  }

  var equals = utils.equalsPattern(options);
  if (equals(str)) {
    return true;
  }

  var isMatch = memoize('isMatch', pattern, options, micromatch.matcher);
  return isMatch(str);
};

/**
 * Returns true if some of the strings in the given `list` match any of the
 * given glob `patterns`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param  {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.some = function(list, patterns, options) {
  if (typeof list === 'string') {
    list = [list];
  }
  for (var i = 0; i < list.length; i++) {
    if (micromatch(list[i], patterns, options).length === 1) {
      return true;
    }
  }
  return false;
};

/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param  {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.every = function(list, patterns, options) {
  if (typeof list === 'string') {
    list = [list];
  }
  for (var i = 0; i < list.length; i++) {
    if (micromatch(list[i], patterns, options).length !== 1) {
      return false;
    }
  }
  return true;
};

/**
 * Returns true if **any** of the given glob `patterns`
 * match the specified `string`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.any(string, patterns[, options]);
 *
 * console.log(mm.any('a.a', ['b.*', '*.a']));
 * //=> true
 * console.log(mm.any('a.a', 'b.*'));
 * //=> false
 * ```
 * @param  {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.any = function(str, patterns, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }

  if (isEmptyString(str) || isEmptyString(patterns)) {
    return false;
  }

  if (typeof patterns === 'string') {
    patterns = [patterns];
  }

  for (var i = 0; i < patterns.length; i++) {
    if (micromatch.isMatch(str, patterns[i], options)) {
      return true;
    }
  }
  return false;
};

/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param  {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.all = function(str, patterns, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }
  if (typeof patterns === 'string') {
    patterns = [patterns];
  }
  for (var i = 0; i < patterns.length; i++) {
    if (!micromatch.isMatch(str, patterns[i], options)) {
      return false;
    }
  }
  return true;
};

/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */

micromatch.not = function(list, patterns, options) {
  var opts = extend({}, options);
  var ignore = opts.ignore;
  delete opts.ignore;

  var unixify = utils.unixify(opts);
  list = utils.arrayify(list).map(unixify);

  var matches = utils.diff(list, micromatch(list, patterns, opts));
  if (ignore) {
    matches = utils.diff(matches, micromatch(list, ignore));
  }

  return opts.nodupes !== false ? utils.unique(matches) : matches;
};

/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if the patter matches any part of `str`.
 * @api public
 */

micromatch.contains = function(str, patterns, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }

  if (typeof patterns === 'string') {
    if (isEmptyString(str) || isEmptyString(patterns)) {
      return false;
    }

    var equals = utils.equalsPattern(patterns, options);
    if (equals(str)) {
      return true;
    }
    var contains = utils.containsPattern(patterns, options);
    if (contains(str)) {
      return true;
    }
  }

  var opts = extend({}, options, {contains: true});
  return micromatch.any(str, patterns, opts);
};

/**
 * Returns true if the given pattern and options should enable
 * the `matchBase` option.
 * @return {Boolean}
 * @api private
 */

micromatch.matchBase = function(pattern, options) {
  if (pattern && pattern.indexOf('/') !== -1 || !options) return false;
  return options.basename === true || options.matchBase === true;
};

/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.matchKeys(object, patterns[, options]);
 *
 * var obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */

micromatch.matchKeys = function(obj, patterns, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('expected the first argument to be an object');
  }
  var keys = micromatch(Object.keys(obj), patterns, options);
  return utils.pick(obj, keys);
};

/**
 * Returns a memoized matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.matcher(pattern[, options]);
 *
 * var isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a'));
 * //=> false
 * console.log(isMatch('a.b'));
 * //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options` See available [options](#options) for changing how matches are performed.
 * @return {Function} Returns a matcher function.
 * @api public
 */

micromatch.matcher = function matcher(pattern, options) {
  if (Array.isArray(pattern)) {
    return compose(pattern, options, matcher);
  }

  // if pattern is a regex
  if (pattern instanceof RegExp) {
    return test(pattern);
  }

  // if pattern is invalid
  if (!utils.isString(pattern)) {
    throw new TypeError('expected pattern to be an array, string or regex');
  }

  // if pattern is a non-glob string
  if (!utils.hasSpecialChars(pattern)) {
    if (options && options.nocase === true) {
      pattern = pattern.toLowerCase();
    }
    return utils.matchPath(pattern, options);
  }

  // if pattern is a glob string
  var re = micromatch.makeRe(pattern, options);

  // if `options.matchBase` or `options.basename` is defined
  if (micromatch.matchBase(pattern, options)) {
    return utils.matchBasename(re, options);
  }

  function test(regex) {
    var equals = utils.equalsPattern(options);
    var unixify = utils.unixify(options);

    return function(str) {
      if (equals(str)) {
        return true;
      }

      if (regex.test(unixify(str))) {
        return true;
      }
      return false;
    };
  }

  var fn = test(re);
  Object.defineProperty(fn, 'result', {
    configurable: true,
    enumerable: false,
    value: re.result
  });
  return fn;
};

/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {String} `string` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns an array of captures if the string matches the glob pattern, otherwise `null`.
 * @api public
 */

micromatch.capture = function(pattern, str, options) {
  var re = micromatch.makeRe(pattern, extend({capture: true}, options));
  var unixify = utils.unixify(options);

  function match() {
    return function(string) {
      var match = re.exec(unixify(string));
      if (!match) {
        return null;
      }

      return match.slice(1);
    };
  }

  var capture = memoize('capture', pattern, options, match);
  return capture(str);
};

/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */

micromatch.makeRe = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  if (pattern.length > MAX_LENGTH) {
    throw new Error('expected pattern to be less than ' + MAX_LENGTH + ' characters');
  }

  function makeRe() {
    var result = micromatch.create(pattern, options);
    var ast_array = [];
    var output = result.map(function(obj) {
      obj.ast.state = obj.state;
      ast_array.push(obj.ast);
      return obj.output;
    });

    var regex = toRegex(output.join('|'), options);
    Object.defineProperty(regex, 'result', {
      configurable: true,
      enumerable: false,
      value: ast_array
    });
    return regex;
  }

  return memoize('makeRe', pattern, options, makeRe);
};

/**
 * Expand the given brace `pattern`.
 *
 * ```js
 * var mm = require('micromatch');
 * console.log(mm.braces('foo/{a,b}/bar'));
 * //=> ['foo/(a|b)/bar']
 *
 * console.log(mm.braces('foo/{a,b}/bar', {expand: true}));
 * //=> ['foo/(a|b)/bar']
 * ```
 * @param {String} `pattern` String with brace pattern to expand.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */

micromatch.braces = function(pattern, options) {
  if (typeof pattern !== 'string' && !Array.isArray(pattern)) {
    throw new TypeError('expected pattern to be an array or string');
  }

  function expand() {
    if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
      return utils.arrayify(pattern);
    }
    return braces(pattern, options);
  }

  return memoize('braces', pattern, options, expand);
};

/**
 * Proxy to the [micromatch.braces](#method), for parity with
 * minimatch.
 */

micromatch.braceExpand = function(pattern, options) {
  var opts = extend({}, options, {expand: true});
  return micromatch.braces(pattern, opts);
};

/**
 * Parses the given glob `pattern` and returns an array of abstract syntax
 * trees (ASTs), with the compiled `output` and optional source `map` on
 * each AST.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.create(pattern[, options]);
 *
 * console.log(mm.create('abc/*.js'));
 * // [{ options: { source: 'string', sourcemap: true },
 * //   state: {},
 * //   compilers:
 * //    { ... },
 * //   output: '(\\.[\\\\\\/])?abc\\/(?!\\.)(?=.)[^\\/]*?\\.js',
 * //   ast:
 * //    { type: 'root',
 * //      errors: [],
 * //      nodes:
 * //       [ ... ],
 * //      dot: false,
 * //      input: 'abc/*.js' },
 * //   parsingErrors: [],
 * //   map:
 * //    { version: 3,
 * //      sources: [ 'string' ],
 * //      names: [],
 * //      mappings: 'AAAA,GAAG,EAAC,kBAAC,EAAC,EAAE',
 * //      sourcesContent: [ 'abc/*.js' ] },
 * //   position: { line: 1, column: 28 },
 * //   content: {},
 * //   files: {},
 * //   idx: 6 }]
 * ```
 * @param {String} `pattern` Glob pattern to parse and compile.
 * @param {Object} `options` Any [options](#options) to change how parsing and compiling is performed.
 * @return {Object} Returns an object with the parsed AST, compiled string and optional source map.
 * @api public
 */

micromatch.create = function(pattern, options) {
  return memoize('create', pattern, options, function() {
    function create(str, opts) {
      return micromatch.compile(micromatch.parse(str, opts), opts);
    }

    pattern = micromatch.braces(pattern, options);
    var len = pattern.length;
    var idx = -1;
    var res = [];

    while (++idx < len) {
      res.push(create(pattern[idx], options));
    }
    return res;
  });
};

/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.parse(pattern[, options]);
 *
 * var ast = mm.parse('a/{b,c}/d');
 * console.log(ast);
 * // { type: 'root',
 * //   errors: [],
 * //   input: 'a/{b,c}/d',
 * //   nodes:
 * //    [ { type: 'bos', val: '' },
 * //      { type: 'text', val: 'a/' },
 * //      { type: 'brace',
 * //        nodes:
 * //         [ { type: 'brace.open', val: '{' },
 * //           { type: 'text', val: 'b,c' },
 * //           { type: 'brace.close', val: '}' } ] },
 * //      { type: 'text', val: '/d' },
 * //      { type: 'eos', val: '' } ] }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an AST
 * @api public
 */

micromatch.parse = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected a string');
  }

  function parse() {
    var snapdragon = utils.instantiate(null, options);
    parsers(snapdragon, options);

    var ast = snapdragon.parse(pattern, options);
    utils.define(ast, 'snapdragon', snapdragon);
    ast.input = pattern;
    return ast;
  }

  return memoize('parse', pattern, options, parse);
};

/**
 * Compile the given `ast` or string with the given `options`.
 *
 * ```js
 * var mm = require('micromatch');
 * mm.compile(ast[, options]);
 *
 * var ast = mm.parse('a/{b,c}/d');
 * console.log(mm.compile(ast));
 * // { options: { source: 'string' },
 * //   state: {},
 * //   compilers:
 * //    { eos: [Function],
 * //      noop: [Function],
 * //      bos: [Function],
 * //      brace: [Function],
 * //      'brace.open': [Function],
 * //      text: [Function],
 * //      'brace.close': [Function] },
 * //   output: [ 'a/(b|c)/d' ],
 * //   ast:
 * //    { ... },
 * //   parsingErrors: [] }
 * ```
 * @param {Object|String} `ast`
 * @param {Object} `options`
 * @return {Object} Returns an object that has an `output` property with the compiled string.
 * @api public
 */

micromatch.compile = function(ast, options) {
  if (typeof ast === 'string') {
    ast = micromatch.parse(ast, options);
  }

  return memoize('compile', ast.input, options, function() {
    var snapdragon = utils.instantiate(ast, options);
    compilers(snapdragon, options);
    return snapdragon.compile(ast, options);
  });
};

/**
 * Clear the regex cache.
 *
 * ```js
 * mm.clearCache();
 * ```
 * @api public
 */

micromatch.clearCache = function() {
  micromatch.cache.caches = {};
};

/**
 * Returns true if the given value is effectively an empty string
 */

function isEmptyString(val) {
  return String(val) === '' || String(val) === './';
}

/**
 * Compose a matcher function with the given patterns.
 * This allows matcher functions to be compiled once and
 * called multiple times.
 */

function compose(patterns, options, matcher) {
  var matchers;

  return memoize('compose', String(patterns), options, function() {
    return function(file) {
      // delay composition until it's invoked the first time,
      // after that it won't be called again
      if (!matchers) {
        matchers = [];
        for (var i = 0; i < patterns.length; i++) {
          matchers.push(matcher(patterns[i], options));
        }
      }

      var len = matchers.length;
      while (len--) {
        if (matchers[len](file) === true) {
          return true;
        }
      }
      return false;
    };
  });
}

/**
 * Memoize a generated regex or function. A unique key is generated
 * from the `type` (usually method name), the `pattern`, and
 * user-defined options.
 */

function memoize(type, pattern, options, fn) {
  var key = utils.createKey(type + '=' + pattern, options);

  if (options && options.cache === false) {
    return fn(pattern, options);
  }

  if (cache.has(type, key)) {
    return cache.get(type, key);
  }

  var val = fn(pattern, options);
  cache.set(type, key, val);
  return val;
}

/**
 * Expose compiler, parser and cache on `micromatch`
 */

micromatch.compilers = compilers;
micromatch.parsers = parsers;
micromatch.caches = cache.caches;

/**
 * Expose `micromatch`
 * @type {Function}
 */

module.exports = micromatch;


/***/ }),

/***/ "./node_modules/micromatch/lib/cache.js":
/*!**********************************************!*\
  !*** ./node_modules/micromatch/lib/cache.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = new (__webpack_require__(/*! fragment-cache */ "./node_modules/fragment-cache/index.js"))();


/***/ }),

/***/ "./node_modules/micromatch/lib/compilers.js":
/*!**************************************************!*\
  !*** ./node_modules/micromatch/lib/compilers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nanomatch = __webpack_require__(/*! nanomatch */ "./node_modules/nanomatch/index.js");
var extglob = __webpack_require__(/*! extglob */ "./node_modules/extglob/index.js");

module.exports = function(snapdragon) {
  var compilers = snapdragon.compiler.compilers;
  var opts = snapdragon.options;

  // register nanomatch compilers
  snapdragon.use(nanomatch.compilers);

  // get references to some specific nanomatch compilers before they
  // are overridden by the extglob and/or custom compilers
  var escape = compilers.escape;
  var qmark = compilers.qmark;
  var slash = compilers.slash;
  var star = compilers.star;
  var text = compilers.text;
  var plus = compilers.plus;
  var dot = compilers.dot;

  // register extglob compilers or escape exglobs if disabled
  if (opts.extglob === false || opts.noext === true) {
    snapdragon.compiler.use(escapeExtglobs);
  } else {
    snapdragon.use(extglob.compilers);
  }

  snapdragon.use(function() {
    this.options.star = this.options.star || function(/*node*/) {
      return '[^\\\\/]*?';
    };
  });

  // custom micromatch compilers
  snapdragon.compiler

    // reset referenced compiler
    .set('dot', dot)
    .set('escape', escape)
    .set('plus', plus)
    .set('slash', slash)
    .set('qmark', qmark)
    .set('star', star)
    .set('text', text);
};

function escapeExtglobs(compiler) {
  compiler.set('paren', function(node) {
    var val = '';
    visit(node, function(tok) {
      if (tok.val) val += (/^\W/.test(tok.val) ? '\\' : '') + tok.val;
    });
    return this.emit(val, node);
  });

  /**
   * Visit `node` with the given `fn`
   */

  function visit(node, fn) {
    return node.nodes ? mapVisit(node.nodes, fn) : fn(node);
  }

  /**
   * Map visit over array of `nodes`.
   */

  function mapVisit(nodes, fn) {
    var len = nodes.length;
    var idx = -1;
    while (++idx < len) {
      visit(nodes[idx], fn);
    }
  }
}


/***/ }),

/***/ "./node_modules/micromatch/lib/parsers.js":
/*!************************************************!*\
  !*** ./node_modules/micromatch/lib/parsers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extglob = __webpack_require__(/*! extglob */ "./node_modules/extglob/index.js");
var nanomatch = __webpack_require__(/*! nanomatch */ "./node_modules/nanomatch/index.js");
var regexNot = __webpack_require__(/*! regex-not */ "./node_modules/regex-not/index.js");
var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");
var not;

/**
 * Characters to use in negation regex (we want to "not" match
 * characters that are matched by other parsers)
 */

var TEXT = '([!@*?+]?\\(|\\)|\\[:?(?=.*?:?\\])|:?\\]|[*+?!^$.\\\\/])+';
var createNotRegex = function(opts) {
  return not || (not = textRegex(TEXT));
};

/**
 * Parsers
 */

module.exports = function(snapdragon) {
  var parsers = snapdragon.parser.parsers;

  // register nanomatch parsers
  snapdragon.use(nanomatch.parsers);

  // get references to some specific nanomatch parsers before they
  // are overridden by the extglob and/or parsers
  var escape = parsers.escape;
  var slash = parsers.slash;
  var qmark = parsers.qmark;
  var plus = parsers.plus;
  var star = parsers.star;
  var dot = parsers.dot;

  // register extglob parsers
  snapdragon.use(extglob.parsers);

  // custom micromatch parsers
  snapdragon.parser
    .use(function() {
      // override "notRegex" created in nanomatch parser
      this.notRegex = /^\!+(?!\()/;
    })
    // reset the referenced parsers
    .capture('escape', escape)
    .capture('slash', slash)
    .capture('qmark', qmark)
    .capture('star', star)
    .capture('plus', plus)
    .capture('dot', dot)

    /**
     * Override `text` parser
     */

    .capture('text', function() {
      if (this.isInside('bracket')) return;
      var pos = this.position();
      var m = this.match(createNotRegex(this.options));
      if (!m || !m[0]) return;

      // escape regex boundary characters and simple brackets
      var val = m[0].replace(/([[\]^$])/g, '\\$1');

      return pos({
        type: 'text',
        val: val
      });
    });
};

/**
 * Create text regex
 */

function textRegex(pattern) {
  var notStr = regexNot.create(pattern, {contains: true, strictClose: false});
  var prefix = '(?:[\\^]|\\\\|';
  return toRegex(prefix + notStr + ')', {strictClose: false});
}


/***/ }),

/***/ "./node_modules/micromatch/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/micromatch/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = module.exports;
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

/**
 * Module dependencies
 */

var Snapdragon = __webpack_require__(/*! snapdragon */ "./node_modules/snapdragon/index.js");
utils.define = __webpack_require__(/*! define-property */ "./node_modules/define-property/index.js");
utils.diff = __webpack_require__(/*! arr-diff */ "./node_modules/arr-diff/index.js");
utils.extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extend-shallow/index.js");
utils.pick = __webpack_require__(/*! object.pick */ "./node_modules/object.pick/index.js");
utils.typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
utils.unique = __webpack_require__(/*! array-unique */ "./node_modules/array-unique/index.js");

/**
 * Returns true if the platform is windows, or `path.sep` is `\\`.
 * This is defined as a function to allow `path.sep` to be set in unit tests,
 * or by the user, if there is a reason to do so.
 * @return {Boolean}
 */

utils.isWindows = function() {
  return path.sep === '\\' || process.platform === 'win32';
};

/**
 * Get the `Snapdragon` instance to use
 */

utils.instantiate = function(ast, options) {
  var snapdragon;
  // if an instance was created by `.parse`, use that instance
  if (utils.typeOf(ast) === 'object' && ast.snapdragon) {
    snapdragon = ast.snapdragon;
  // if the user supplies an instance on options, use that instance
  } else if (utils.typeOf(options) === 'object' && options.snapdragon) {
    snapdragon = options.snapdragon;
  // create a new instance
  } else {
    snapdragon = new Snapdragon(options);
  }

  utils.define(snapdragon, 'parse', function(str, options) {
    var parsed = Snapdragon.prototype.parse.apply(this, arguments);
    parsed.input = str;

    // escape unmatched brace/bracket/parens
    var last = this.parser.stack.pop();
    if (last && this.options.strictErrors !== true) {
      var open = last.nodes[0];
      var inner = last.nodes[1];
      if (last.type === 'bracket') {
        if (inner.val.charAt(0) === '[') {
          inner.val = '\\' + inner.val;
        }

      } else {
        open.val = '\\' + open.val;
        var sibling = open.parent.nodes[1];
        if (sibling.type === 'star') {
          sibling.loose = true;
        }
      }
    }

    // add non-enumerable parser reference
    utils.define(parsed, 'parser', this.parser);
    return parsed;
  });

  return snapdragon;
};

/**
 * Create the key to use for memoization. The key is generated
 * by iterating over the options and concatenating key-value pairs
 * to the pattern string.
 */

utils.createKey = function(pattern, options) {
  if (utils.typeOf(options) !== 'object') {
    return pattern;
  }
  var val = pattern;
  var keys = Object.keys(options);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    val += ';' + key + '=' + String(options[key]);
  }
  return val;
};

/**
 * Cast `val` to an array
 * @return {Array}
 */

utils.arrayify = function(val) {
  if (typeof val === 'string') return [val];
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Return true if `val` is a non-empty string
 */

utils.isString = function(val) {
  return typeof val === 'string';
};

/**
 * Return true if `val` is a non-empty string
 */

utils.isObject = function(val) {
  return utils.typeOf(val) === 'object';
};

/**
 * Returns true if the given `str` has special characters
 */

utils.hasSpecialChars = function(str) {
  return /(?:(?:(^|\/)[!.])|[*?+()|\[\]{}]|[+@]\()/.test(str);
};

/**
 * Escape regex characters in the given string
 */

utils.escapeRegex = function(str) {
  return str.replace(/[-[\]{}()^$|*+?.\\\/\s]/g, '\\$&');
};

/**
 * Normalize slashes in the given filepath.
 *
 * @param {String} `filepath`
 * @return {String}
 */

utils.toPosixPath = function(str) {
  return str.replace(/\\+/g, '/');
};

/**
 * Strip backslashes before special characters in a string.
 *
 * @param {String} `str`
 * @return {String}
 */

utils.unescape = function(str) {
  return utils.toPosixPath(str.replace(/\\(?=[*+?!.])/g, ''));
};

/**
 * Strip the prefix from a filepath
 * @param {String} `fp`
 * @return {String}
 */

utils.stripPrefix = function(str) {
  if (str.charAt(0) !== '.') {
    return str;
  }
  var ch = str.charAt(1);
  if (utils.isSlash(ch)) {
    return str.slice(2);
  }
  return str;
};

/**
 * Returns true if the given str is an escaped or
 * unescaped path character
 */

utils.isSlash = function(str) {
  return str === '/' || str === '\\/' || str === '\\' || str === '\\\\';
};

/**
 * Returns a function that returns true if the given
 * pattern matches or contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.matchPath = function(pattern, options) {
  return (options && options.contains)
    ? utils.containsPattern(pattern, options)
    : utils.equalsPattern(pattern, options);
};

/**
 * Returns true if the given (original) filepath or unixified path are equal
 * to the given pattern.
 */

utils._equals = function(filepath, unixPath, pattern) {
  return pattern === filepath || pattern === unixPath;
};

/**
 * Returns true if the given (original) filepath or unixified path contain
 * the given pattern.
 */

utils._contains = function(filepath, unixPath, pattern) {
  return filepath.indexOf(pattern) !== -1 || unixPath.indexOf(pattern) !== -1;
};

/**
 * Returns a function that returns true if the given
 * pattern is the same as a given `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.equalsPattern = function(pattern, options) {
  var unixify = utils.unixify(options);
  options = options || {};

  return function fn(filepath) {
    var equal = utils._equals(filepath, unixify(filepath), pattern);
    if (equal === true || options.nocase !== true) {
      return equal;
    }
    var lower = filepath.toLowerCase();
    return utils._equals(lower, unixify(lower), pattern);
  };
};

/**
 * Returns a function that returns true if the given
 * pattern contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.containsPattern = function(pattern, options) {
  var unixify = utils.unixify(options);
  options = options || {};

  return function(filepath) {
    var contains = utils._contains(filepath, unixify(filepath), pattern);
    if (contains === true || options.nocase !== true) {
      return contains;
    }
    var lower = filepath.toLowerCase();
    return utils._contains(lower, unixify(lower), pattern);
  };
};

/**
 * Returns a function that returns true if the given
 * regex matches the `filename` of a file path.
 *
 * @param {RegExp} `re` Matching regex
 * @return {Function}
 */

utils.matchBasename = function(re) {
  return function(filepath) {
    return re.test(path.basename(filepath));
  };
};

/**
 * Determines the filepath to return based on the provided options.
 * @return {any}
 */

utils.value = function(str, unixify, options) {
  if (options && options.unixify === false) {
    return str;
  }
  return unixify(str);
};

/**
 * Returns a function that normalizes slashes in a string to forward
 * slashes, strips `./` from beginning of paths, and optionally unescapes
 * special characters.
 * @return {Function}
 */

utils.unixify = function(options) {
  options = options || {};
  return function(filepath) {
    if (utils.isWindows() || options.unixify === true) {
      filepath = utils.toPosixPath(filepath);
    }
    if (options.stripPrefix !== false) {
      filepath = utils.stripPrefix(filepath);
    }
    if (options.unescape === true) {
      filepath = utils.unescape(filepath);
    }
    return filepath;
  };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/mixin-deep/index.js":
/*!******************************************!*\
  !*** ./node_modules/mixin-deep/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isExtendable = __webpack_require__(/*! is-extendable */ "./node_modules/mixin-deep/node_modules/is-extendable/index.js");
var forIn = __webpack_require__(/*! for-in */ "./node_modules/for-in/index.js");

function mixinDeep(target, objects) {
  var len = arguments.length, i = 0;
  while (++i < len) {
    var obj = arguments[i];
    if (isObject(obj)) {
      forIn(obj, copy, target);
    }
  }
  return target;
}

/**
 * Copy properties from the source object to the
 * target object.
 *
 * @param  {*} `val`
 * @param  {String} `key`
 */

function copy(val, key) {
  if (!isValidKey(key)) {
    return;
  }

  var obj = this[key];
  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    this[key] = val;
  }
}

/**
 * Returns true if `val` is an object or function.
 *
 * @param  {any} val
 * @return {Boolean}
 */

function isObject(val) {
  return isExtendable(val) && !Array.isArray(val);
}

/**
 * Returns true if `key` is a valid key to use when extending objects.
 *
 * @param  {String} `key`
 * @return {Boolean}
 */

function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

/**
 * Expose `mixinDeep`
 */

module.exports = mixinDeep;


/***/ }),

/***/ "./node_modules/mixin-deep/node_modules/is-extendable/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mixin-deep/node_modules/is-extendable/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

module.exports = function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/nanomatch/index.js":
/*!*****************************************!*\
  !*** ./node_modules/nanomatch/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extend-shallow/index.js");

/**
 * Local dependencies
 */

var compilers = __webpack_require__(/*! ./lib/compilers */ "./node_modules/nanomatch/lib/compilers.js");
var parsers = __webpack_require__(/*! ./lib/parsers */ "./node_modules/nanomatch/lib/parsers.js");
var cache = __webpack_require__(/*! ./lib/cache */ "./node_modules/nanomatch/lib/cache.js");
var utils = __webpack_require__(/*! ./lib/utils */ "./node_modules/nanomatch/lib/utils.js");
var MAX_LENGTH = 1024 * 64;

/**
 * The main function takes a list of strings and one or more
 * glob patterns to use for matching.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm(list, patterns[, options]);
 *
 * console.log(nm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {Array} `list` A list of strings to match
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */

function nanomatch(list, patterns, options) {
  patterns = utils.arrayify(patterns);
  list = utils.arrayify(list);

  var len = patterns.length;
  if (list.length === 0 || len === 0) {
    return [];
  }

  if (len === 1) {
    return nanomatch.match(list, patterns[0], options);
  }

  var negated = false;
  var omit = [];
  var keep = [];
  var idx = -1;

  while (++idx < len) {
    var pattern = patterns[idx];

    if (typeof pattern === 'string' && pattern.charCodeAt(0) === 33 /* ! */) {
      omit.push.apply(omit, nanomatch.match(list, pattern.slice(1), options));
      negated = true;
    } else {
      keep.push.apply(keep, nanomatch.match(list, pattern, options));
    }
  }

  // minimatch.match parity
  if (negated && keep.length === 0) {
    if (options && options.unixify === false) {
      keep = list.slice();
    } else {
      var unixify = utils.unixify(options);
      for (var i = 0; i < list.length; i++) {
        keep.push(unixify(list[i]));
      }
    }
  }

  var matches = utils.diff(keep, omit);
  if (!options || options.nodupes !== false) {
    return utils.unique(matches);
  }

  return matches;
}

/**
 * Similar to the main function, but `pattern` must be a string.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.match(list, pattern[, options]);
 *
 * console.log(nm.match(['a.a', 'a.aa', 'a.b', 'a.c'], '*.a'));
 * //=> ['a.a', 'a.aa']
 * ```
 * @param {Array} `list` Array of strings to match
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of matches
 * @api public
 */

nanomatch.match = function(list, pattern, options) {
  if (Array.isArray(pattern)) {
    throw new TypeError('expected pattern to be a string');
  }

  var unixify = utils.unixify(options);
  var isMatch = memoize('match', pattern, options, nanomatch.matcher);
  var matches = [];

  list = utils.arrayify(list);
  var len = list.length;
  var idx = -1;

  while (++idx < len) {
    var ele = list[idx];
    if (ele === pattern || isMatch(ele)) {
      matches.push(utils.value(ele, unixify, options));
    }
  }

  // if no options were passed, uniquify results and return
  if (typeof options === 'undefined') {
    return utils.unique(matches);
  }

  if (matches.length === 0) {
    if (options.failglob === true) {
      throw new Error('no matches found for "' + pattern + '"');
    }
    if (options.nonull === true || options.nullglob === true) {
      return [options.unescape ? utils.unescape(pattern) : pattern];
    }
  }

  // if `opts.ignore` was defined, diff ignored list
  if (options.ignore) {
    matches = nanomatch.not(matches, options.ignore, options);
  }

  return options.nodupes !== false ? utils.unique(matches) : matches;
};

/**
 * Returns true if the specified `string` matches the given glob `pattern`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.isMatch(string, pattern[, options]);
 *
 * console.log(nm.isMatch('a.a', '*.a'));
 * //=> true
 * console.log(nm.isMatch('a.b', '*.a'));
 * //=> false
 * ```
 * @param {String} `string` String to match
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if the string matches the glob pattern.
 * @api public
 */

nanomatch.isMatch = function(str, pattern, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }

  if (utils.isEmptyString(str) || utils.isEmptyString(pattern)) {
    return false;
  }

  var equals = utils.equalsPattern(options);
  if (equals(str)) {
    return true;
  }

  var isMatch = memoize('isMatch', pattern, options, nanomatch.matcher);
  return isMatch(str);
};

/**
 * Returns true if some of the elements in the given `list` match any of the
 * given glob `patterns`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.some(list, patterns[, options]);
 *
 * console.log(nm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(nm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param  {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

nanomatch.some = function(list, patterns, options) {
  if (typeof list === 'string') {
    list = [list];
  }

  for (var i = 0; i < list.length; i++) {
    if (nanomatch(list[i], patterns, options).length === 1) {
      return true;
    }
  }

  return false;
};

/**
 * Returns true if every element in the given `list` matches
 * at least one of the given glob `patterns`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.every(list, patterns[, options]);
 *
 * console.log(nm.every('foo.js', ['foo.js']));
 * // true
 * console.log(nm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(nm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(nm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param  {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

nanomatch.every = function(list, patterns, options) {
  if (typeof list === 'string') {
    list = [list];
  }

  for (var i = 0; i < list.length; i++) {
    if (nanomatch(list[i], patterns, options).length !== 1) {
      return false;
    }
  }

  return true;
};

/**
 * Returns true if **any** of the given glob `patterns`
 * match the specified `string`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.any(string, patterns[, options]);
 *
 * console.log(nm.any('a.a', ['b.*', '*.a']));
 * //=> true
 * console.log(nm.any('a.a', 'b.*'));
 * //=> false
 * ```
 * @param  {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

nanomatch.any = function(str, patterns, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }

  if (utils.isEmptyString(str) || utils.isEmptyString(patterns)) {
    return false;
  }

  if (typeof patterns === 'string') {
    patterns = [patterns];
  }

  for (var i = 0; i < patterns.length; i++) {
    if (nanomatch.isMatch(str, patterns[i], options)) {
      return true;
    }
  }
  return false;
};

/**
 * Returns true if **all** of the given `patterns`
 * match the specified string.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.all(string, patterns[, options]);
 *
 * console.log(nm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(nm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(nm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(nm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param  {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

nanomatch.all = function(str, patterns, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }

  if (typeof patterns === 'string') {
    patterns = [patterns];
  }

  for (var i = 0; i < patterns.length; i++) {
    if (!nanomatch.isMatch(str, patterns[i], options)) {
      return false;
    }
  }
  return true;
};

/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.not(list, patterns[, options]);
 *
 * console.log(nm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */

nanomatch.not = function(list, patterns, options) {
  var opts = extend({}, options);
  var ignore = opts.ignore;
  delete opts.ignore;

  list = utils.arrayify(list);

  var matches = utils.diff(list, nanomatch(list, patterns, opts));
  if (ignore) {
    matches = utils.diff(matches, nanomatch(list, ignore));
  }

  return opts.nodupes !== false ? utils.unique(matches) : matches;
};

/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.contains(string, pattern[, options]);
 *
 * console.log(nm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(nm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if the patter matches any part of `str`.
 * @api public
 */

nanomatch.contains = function(str, patterns, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string: "' + util.inspect(str) + '"');
  }

  if (typeof patterns === 'string') {
    if (utils.isEmptyString(str) || utils.isEmptyString(patterns)) {
      return false;
    }

    var equals = utils.equalsPattern(patterns, options);
    if (equals(str)) {
      return true;
    }
    var contains = utils.containsPattern(patterns, options);
    if (contains(str)) {
      return true;
    }
  }

  var opts = extend({}, options, {contains: true});
  return nanomatch.any(str, patterns, opts);
};

/**
 * Returns true if the given pattern and options should enable
 * the `matchBase` option.
 * @return {Boolean}
 * @api private
 */

nanomatch.matchBase = function(pattern, options) {
  if (pattern && pattern.indexOf('/') !== -1 || !options) return false;
  return options.basename === true || options.matchBase === true;
};

/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.matchKeys(object, patterns[, options]);
 *
 * var obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(nm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */

nanomatch.matchKeys = function(obj, patterns, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('expected the first argument to be an object');
  }
  var keys = nanomatch(Object.keys(obj), patterns, options);
  return utils.pick(obj, keys);
};

/**
 * Returns a memoized matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.matcher(pattern[, options]);
 *
 * var isMatch = nm.matcher('*.!(*a)');
 * console.log(isMatch('a.a'));
 * //=> false
 * console.log(isMatch('a.b'));
 * //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options` See available [options](#options) for changing how matches are performed.
 * @return {Function} Returns a matcher function.
 * @api public
 */

nanomatch.matcher = function matcher(pattern, options) {
  if (utils.isEmptyString(pattern)) {
    return function() {
      return false;
    };
  }

  if (Array.isArray(pattern)) {
    return compose(pattern, options, matcher);
  }

  // if pattern is a regex
  if (pattern instanceof RegExp) {
    return test(pattern);
  }

  // if pattern is invalid
  if (!utils.isString(pattern)) {
    throw new TypeError('expected pattern to be an array, string or regex');
  }

  // if pattern is a non-glob string
  if (!utils.hasSpecialChars(pattern)) {
    if (options && options.nocase === true) {
      pattern = pattern.toLowerCase();
    }
    return utils.matchPath(pattern, options);
  }

  // if pattern is a glob string
  var re = nanomatch.makeRe(pattern, options);

  // if `options.matchBase` or `options.basename` is defined
  if (nanomatch.matchBase(pattern, options)) {
    return utils.matchBasename(re, options);
  }

  function test(regex) {
    var equals = utils.equalsPattern(options);
    var unixify = utils.unixify(options);

    return function(str) {
      if (equals(str)) {
        return true;
      }

      if (regex.test(unixify(str))) {
        return true;
      }
      return false;
    };
  }

  // create matcher function
  var matcherFn = test(re);
  // set result object from compiler on matcher function,
  // as a non-enumerable property. useful for debugging
  utils.define(matcherFn, 'result', re.result);
  return matcherFn;
};

/**
 * Returns an array of matches captured by `pattern` in `string, or
 * `null` if the pattern did not match.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.capture(pattern, string[, options]);
 *
 * console.log(nm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(nm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {String} `string` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns an array of captures if the string matches the glob pattern, otherwise `null`.
 * @api public
 */

nanomatch.capture = function(pattern, str, options) {
  var re = nanomatch.makeRe(pattern, extend({capture: true}, options));
  var unixify = utils.unixify(options);

  function match() {
    return function(string) {
      var match = re.exec(unixify(string));
      if (!match) {
        return null;
      }

      return match.slice(1);
    };
  }

  var capture = memoize('capture', pattern, options, match);
  return capture(str);
};

/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.makeRe(pattern[, options]);
 *
 * console.log(nm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */

nanomatch.makeRe = function(pattern, options) {
  if (pattern instanceof RegExp) {
    return pattern;
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  if (pattern.length > MAX_LENGTH) {
    throw new Error('expected pattern to be less than ' + MAX_LENGTH + ' characters');
  }

  function makeRe() {
    var opts = utils.extend({wrap: false}, options);
    var result = nanomatch.create(pattern, opts);
    var regex = toRegex(result.output, opts);
    utils.define(regex, 'result', result);
    return regex;
  }

  return memoize('makeRe', pattern, options, makeRe);
};

/**
 * Parses the given glob `pattern` and returns an object with the compiled `output`
 * and optional source `map`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.create(pattern[, options]);
 *
 * console.log(nm.create('abc/*.js'));
 * // { options: { source: 'string', sourcemap: true },
 * //   state: {},
 * //   compilers:
 * //    { ... },
 * //   output: '(\\.[\\\\\\/])?abc\\/(?!\\.)(?=.)[^\\/]*?\\.js',
 * //   ast:
 * //    { type: 'root',
 * //      errors: [],
 * //      nodes:
 * //       [ ... ],
 * //      dot: false,
 * //      input: 'abc/*.js' },
 * //   parsingErrors: [],
 * //   map:
 * //    { version: 3,
 * //      sources: [ 'string' ],
 * //      names: [],
 * //      mappings: 'AAAA,GAAG,EAAC,kBAAC,EAAC,EAAE',
 * //      sourcesContent: [ 'abc/*.js' ] },
 * //   position: { line: 1, column: 28 },
 * //   content: {},
 * //   files: {},
 * //   idx: 6 }
 * ```
 * @param {String} `pattern` Glob pattern to parse and compile.
 * @param {Object} `options` Any [options](#options) to change how parsing and compiling is performed.
 * @return {Object} Returns an object with the parsed AST, compiled string and optional source map.
 * @api public
 */

nanomatch.create = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected a string');
  }
  function create() {
    return nanomatch.compile(nanomatch.parse(pattern, options), options);
  }
  return memoize('create', pattern, options, create);
};

/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.parse(pattern[, options]);
 *
 * var ast = nm.parse('a/{b,c}/d');
 * console.log(ast);
 * // { type: 'root',
 * //   errors: [],
 * //   input: 'a/{b,c}/d',
 * //   nodes:
 * //    [ { type: 'bos', val: '' },
 * //      { type: 'text', val: 'a/' },
 * //      { type: 'brace',
 * //        nodes:
 * //         [ { type: 'brace.open', val: '{' },
 * //           { type: 'text', val: 'b,c' },
 * //           { type: 'brace.close', val: '}' } ] },
 * //      { type: 'text', val: '/d' },
 * //      { type: 'eos', val: '' } ] }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an AST
 * @api public
 */

nanomatch.parse = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected a string');
  }

  function parse() {
    var snapdragon = utils.instantiate(null, options);
    parsers(snapdragon, options);

    var ast = snapdragon.parse(pattern, options);
    utils.define(ast, 'snapdragon', snapdragon);
    ast.input = pattern;
    return ast;
  }

  return memoize('parse', pattern, options, parse);
};

/**
 * Compile the given `ast` or string with the given `options`.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm.compile(ast[, options]);
 *
 * var ast = nm.parse('a/{b,c}/d');
 * console.log(nm.compile(ast));
 * // { options: { source: 'string' },
 * //   state: {},
 * //   compilers:
 * //    { eos: [Function],
 * //      noop: [Function],
 * //      bos: [Function],
 * //      brace: [Function],
 * //      'brace.open': [Function],
 * //      text: [Function],
 * //      'brace.close': [Function] },
 * //   output: [ 'a/(b|c)/d' ],
 * //   ast:
 * //    { ... },
 * //   parsingErrors: [] }
 * ```
 * @param {Object|String} `ast`
 * @param {Object} `options`
 * @return {Object} Returns an object that has an `output` property with the compiled string.
 * @api public
 */

nanomatch.compile = function(ast, options) {
  if (typeof ast === 'string') {
    ast = nanomatch.parse(ast, options);
  }

  function compile() {
    var snapdragon = utils.instantiate(ast, options);
    compilers(snapdragon, options);
    return snapdragon.compile(ast, options);
  }

  return memoize('compile', ast.input, options, compile);
};

/**
 * Clear the regex cache.
 *
 * ```js
 * nm.clearCache();
 * ```
 * @api public
 */

nanomatch.clearCache = function() {
  nanomatch.cache.__data__ = {};
};

/**
 * Compose a matcher function with the given patterns.
 * This allows matcher functions to be compiled once and
 * called multiple times.
 */

function compose(patterns, options, matcher) {
  var matchers;

  return memoize('compose', String(patterns), options, function() {
    return function(file) {
      // delay composition until it's invoked the first time,
      // after that it won't be called again
      if (!matchers) {
        matchers = [];
        for (var i = 0; i < patterns.length; i++) {
          matchers.push(matcher(patterns[i], options));
        }
      }

      var len = matchers.length;
      while (len--) {
        if (matchers[len](file) === true) {
          return true;
        }
      }
      return false;
    };
  });
}

/**
 * Memoize a generated regex or function. A unique key is generated
 * from the `type` (usually method name), the `pattern`, and
 * user-defined options.
 */

function memoize(type, pattern, options, fn) {
  var key = utils.createKey(type + '=' + pattern, options);

  if (options && options.cache === false) {
    return fn(pattern, options);
  }

  if (cache.has(type, key)) {
    return cache.get(type, key);
  }

  var val = fn(pattern, options);
  cache.set(type, key, val);
  return val;
}

/**
 * Expose compiler, parser and cache on `nanomatch`
 */

nanomatch.compilers = compilers;
nanomatch.parsers = parsers;
nanomatch.cache = cache;

/**
 * Expose `nanomatch`
 * @type {Function}
 */

module.exports = nanomatch;


/***/ }),

/***/ "./node_modules/nanomatch/lib/cache.js":
/*!*********************************************!*\
  !*** ./node_modules/nanomatch/lib/cache.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = new (__webpack_require__(/*! fragment-cache */ "./node_modules/fragment-cache/index.js"))();


/***/ }),

/***/ "./node_modules/nanomatch/lib/compilers.js":
/*!*************************************************!*\
  !*** ./node_modules/nanomatch/lib/compilers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* Nanomatch compilers
*/

module.exports = function(nanomatch, options) {
  function slash() {
    if (options && typeof options.slash === 'string') {
      return options.slash;
    }
    if (options && typeof options.slash === 'function') {
      return options.slash.call(nanomatch);
    }
    return '\\\\/';
  }

  function star() {
    if (options && typeof options.star === 'string') {
      return options.star;
    }
    if (options && typeof options.star === 'function') {
      return options.star.call(nanomatch);
    }
    return '[^' + slash() + ']*?';
  }

  var ast = nanomatch.ast = nanomatch.parser.ast;
  ast.state = nanomatch.parser.state;
  nanomatch.compiler.state = ast.state;
  nanomatch.compiler

    /**
     * Negation / escaping
     */

    .set('not', function(node) {
      var prev = this.prev();
      if (this.options.nonegate === true || prev.type !== 'bos') {
        return this.emit('\\' + node.val, node);
      }
      return this.emit(node.val, node);
    })
    .set('escape', function(node) {
      if (this.options.unescape && /^[-\w_.]/.test(node.val)) {
        return this.emit(node.val, node);
      }
      return this.emit('\\' + node.val, node);
    })
    .set('quoted', function(node) {
      return this.emit(node.val, node);
    })

    /**
     * Regex
     */

    .set('dollar', function(node) {
      if (node.parent.type === 'bracket') {
        return this.emit(node.val, node);
      }
      return this.emit('\\' + node.val, node);
    })

    /**
     * Dot: "."
     */

    .set('dot', function(node) {
      if (node.dotfiles === true) this.dotfiles = true;
      return this.emit('\\' + node.val, node);
    })

    /**
     * Slashes: "/" and "\"
     */

    .set('backslash', function(node) {
      return this.emit(node.val, node);
    })
    .set('slash', function(node, nodes, i) {
      var val = '[' + slash() + ']';
      var parent = node.parent;
      var prev = this.prev();

      // set "node.hasSlash" to true on all ancestor parens nodes
      while (parent.type === 'paren' && !parent.hasSlash) {
        parent.hasSlash = true;
        parent = parent.parent;
      }

      if (prev.addQmark) {
        val += '?';
      }

      // word boundary
      if (node.rest.slice(0, 2) === '\\b') {
        return this.emit(val, node);
      }

      // globstars
      if (node.parsed === '**' || node.parsed === './**') {
        this.output = '(?:' + this.output;
        return this.emit(val + ')?', node);
      }

      // negation
      if (node.parsed === '!**' && this.options.nonegate !== true) {
        return this.emit(val + '?\\b', node);
      }
      return this.emit(val, node);
    })

    /**
     * Square brackets
     */

    .set('bracket', function(node) {
      var close = node.close;
      var open = !node.escaped ? '[' : '\\[';
      var negated = node.negated;
      var inner = node.inner;
      var val = node.val;

      if (node.escaped === true) {
        inner = inner.replace(/\\?(\W)/g, '\\$1');
        negated = '';
      }

      if (inner === ']-') {
        inner = '\\]\\-';
      }

      if (negated && inner.indexOf('.') === -1) {
        inner += '.';
      }
      if (negated && inner.indexOf('/') === -1) {
        inner += '/';
      }

      val = open + negated + inner + close;
      return this.emit(val, node);
    })

    /**
     * Square: "[.]" (only matches a single character in brackets)
     */

    .set('square', function(node) {
      var val = (/^\W/.test(node.val) ? '\\' : '') + node.val;
      return this.emit(val, node);
    })

    /**
     * Question mark: "?"
     */

    .set('qmark', function(node) {
      var prev = this.prev();
      // don't use "slash" variable so that we always avoid
      // matching backslashes and slashes with a qmark
      var val = '[^.\\\\/]';
      if (this.options.dot || (prev.type !== 'bos' && prev.type !== 'slash')) {
        val = '[^\\\\/]';
      }

      if (node.parsed.slice(-1) === '(') {
        var ch = node.rest.charAt(0);
        if (ch === '!' || ch === '=' || ch === ':') {
          return this.emit(node.val, node);
        }
      }

      if (node.val.length > 1) {
        val += '{' + node.val.length + '}';
      }
      return this.emit(val, node);
    })

    /**
     * Plus
     */

    .set('plus', function(node) {
      var prev = node.parsed.slice(-1);
      if (prev === ']' || prev === ')') {
        return this.emit(node.val, node);
      }
      if (!this.output || (/[?*+]/.test(ch) && node.parent.type !== 'bracket')) {
        return this.emit('\\+', node);
      }
      var ch = this.output.slice(-1);
      if (/\w/.test(ch) && !node.inside) {
        return this.emit('+\\+?', node);
      }
      return this.emit('+', node);
    })

    /**
     * globstar: '**'
     */

    .set('globstar', function(node, nodes, i) {
      if (!this.output) {
        this.state.leadingGlobstar = true;
      }

      var prev = this.prev();
      var before = this.prev(2);
      var next = this.next();
      var after = this.next(2);
      var type = prev.type;
      var val = node.val;

      if (prev.type === 'slash' && next.type === 'slash') {
        if (before.type === 'text') {
          this.output += '?';

          if (after.type !== 'text') {
            this.output += '\\b';
          }
        }
      }

      var parsed = node.parsed;
      if (parsed.charAt(0) === '!') {
        parsed = parsed.slice(1);
      }

      var isInside = node.isInside.paren || node.isInside.brace;
      if (parsed && type !== 'slash' && type !== 'bos' && !isInside) {
        val = star();
      } else {
        val = this.options.dot !== true
          ? '(?:(?!(?:[' + slash() + ']|^)\\.).)*?'
          : '(?:(?!(?:[' + slash() + ']|^)(?:\\.{1,2})($|[' + slash() + ']))(?!\\.{2}).)*?';
      }

      if ((type === 'slash' || type === 'bos') && this.options.dot !== true) {
        val = '(?!\\.)' + val;
      }

      if (prev.type === 'slash' && next.type === 'slash' && before.type !== 'text') {
        if (after.type === 'text' || after.type === 'star') {
          node.addQmark = true;
        }
      }

      if (this.options.capture) {
        val = '(' + val + ')';
      }

      return this.emit(val, node);
    })

    /**
     * Star: "*"
     */

    .set('star', function(node, nodes, i) {
      var prior = nodes[i - 2] || {};
      var prev = this.prev();
      var next = this.next();
      var type = prev.type;

      function isStart(n) {
        return n.type === 'bos' || n.type === 'slash';
      }

      if (this.output === '' && this.options.contains !== true) {
        this.output = '(?![' + slash() + '])';
      }

      if (type === 'bracket' && this.options.bash === false) {
        var str = next && next.type === 'bracket' ? star() : '*?';
        if (!prev.nodes || prev.nodes[1].type !== 'posix') {
          return this.emit(str, node);
        }
      }

      var prefix = !this.dotfiles && type !== 'text' && type !== 'escape'
        ? (this.options.dot ? '(?!(?:^|[' + slash() + '])\\.{1,2}(?:$|[' + slash() + ']))' : '(?!\\.)')
        : '';

      if (isStart(prev) || (isStart(prior) && type === 'not')) {
        if (prefix !== '(?!\\.)') {
          prefix += '(?!(\\.{2}|\\.[' + slash() + ']))(?=.)';
        } else {
          prefix += '(?=.)';
        }
      } else if (prefix === '(?!\\.)') {
        prefix = '';
      }

      if (prev.type === 'not' && prior.type === 'bos' && this.options.dot === true) {
        this.output = '(?!\\.)' + this.output;
      }

      var output = prefix + star();
      if (this.options.capture) {
        output = '(' + output + ')';
      }

      return this.emit(output, node);
    })

    /**
     * Text
     */

    .set('text', function(node) {
      return this.emit(node.val, node);
    })

    /**
     * End-of-string
     */

    .set('eos', function(node) {
      var prev = this.prev();
      var val = node.val;

      this.output = '(?:\\.[' + slash() + '](?=.))?' + this.output;
      if (this.state.metachar && prev.type !== 'qmark' && prev.type !== 'slash') {
        val += (this.options.contains ? '[' + slash() + ']?' : '(?:[' + slash() + ']|$)');
      }

      return this.emit(val, node);
    });

  /**
   * Allow custom compilers to be passed on options
   */

  if (options && typeof options.compilers === 'function') {
    options.compilers(nanomatch.compiler);
  }
};



/***/ }),

/***/ "./node_modules/nanomatch/lib/parsers.js":
/*!***********************************************!*\
  !*** ./node_modules/nanomatch/lib/parsers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexNot = __webpack_require__(/*! regex-not */ "./node_modules/regex-not/index.js");
var toRegex = __webpack_require__(/*! to-regex */ "./node_modules/to-regex/index.js");

/**
 * Characters to use in negation regex (we want to "not" match
 * characters that are matched by other parsers)
 */

var cached;
var NOT_REGEX = '[\\[!*+?$^"\'.\\\\/]+';
var not = createTextRegex(NOT_REGEX);

/**
 * Nanomatch parsers
 */

module.exports = function(nanomatch, options) {
  var parser = nanomatch.parser;
  var opts = parser.options;

  parser.state = {
    slashes: 0,
    paths: []
  };

  parser.ast.state = parser.state;
  parser

    /**
     * Beginning-of-string
     */

    .capture('prefix', function() {
      if (this.parsed) return;
      var m = this.match(/^\.[\\/]/);
      if (!m) return;
      this.state.strictOpen = !!this.options.strictOpen;
      this.state.addPrefix = true;
    })

    /**
     * Escape: "\\."
     */

    .capture('escape', function() {
      if (this.isInside('bracket')) return;
      var pos = this.position();
      var m = this.match(/^(?:\\(.)|([$^]))/);
      if (!m) return;

      return pos({
        type: 'escape',
        val: m[2] || m[1]
      });
    })

    /**
     * Quoted strings
     */

    .capture('quoted', function() {
      var pos = this.position();
      var m = this.match(/^["']/);
      if (!m) return;

      var quote = m[0];
      if (this.input.indexOf(quote) === -1) {
        return pos({
          type: 'escape',
          val: quote
        });
      }

      var tok = advanceTo(this.input, quote);
      this.consume(tok.len);

      return pos({
        type: 'quoted',
        val: tok.esc
      });
    })

    /**
     * Negations: "!"
     */

    .capture('not', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(this.notRegex || /^!+/);
      if (!m) return;
      var val = m[0];

      var isNegated = (val.length % 2) === 1;
      if (parsed === '' && !isNegated) {
        val = '';
      }

      // if nothing has been parsed, we know `!` is at the start,
      // so we need to wrap the result in a negation regex
      if (parsed === '' && isNegated && this.options.nonegate !== true) {
        this.bos.val = '(?!^(?:';
        this.append = ')$).*';
        val = '';
      }
      return pos({
        type: 'not',
        val: val
      });
    })

    /**
     * Dot: "."
     */

    .capture('dot', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^\.+/);
      if (!m) return;

      var val = m[0];
      this.state.dot = val === '.' && (parsed === '' || parsed.slice(-1) === '/');

      return pos({
        type: 'dot',
        dotfiles: this.state.dot,
        val: val
      });
    })

    /**
     * Plus: "+"
     */

    .capture('plus', /^\+(?!\()/)

    /**
     * Question mark: "?"
     */

    .capture('qmark', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^\?+(?!\()/);
      if (!m) return;

      this.state.metachar = true;
      this.state.qmark = true;

      return pos({
        type: 'qmark',
        parsed: parsed,
        val: m[0]
      });
    })

    /**
     * Globstar: "**"
     */

    .capture('globstar', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(/^\*{2}(?![*(])(?=[,)/]|$)/);
      if (!m) return;

      var type = opts.noglobstar !== true ? 'globstar' : 'star';
      var node = pos({type: type, parsed: parsed});
      this.state.metachar = true;

      while (this.input.slice(0, 4) === '/**/') {
        this.input = this.input.slice(3);
      }

      node.isInside = {
        brace: this.isInside('brace'),
        paren: this.isInside('paren')
      };

      if (type === 'globstar') {
        this.state.globstar = true;
        node.val = '**';

      } else {
        this.state.star = true;
        node.val = '*';
      }

      return node;
    })

    /**
     * Star: "*"
     */

    .capture('star', function() {
      var pos = this.position();
      var starRe = /^(?:\*(?![*(])|[*]{3,}(?!\()|[*]{2}(?![(/]|$)|\*(?=\*\())/;
      var m = this.match(starRe);
      if (!m) return;

      this.state.metachar = true;
      this.state.star = true;
      return pos({
        type: 'star',
        val: m[0]
      });
    })

    /**
     * Slash: "/"
     */

    .capture('slash', function() {
      var pos = this.position();
      var m = this.match(/^\//);
      if (!m) return;

      this.state.slashes++;
      return pos({
        type: 'slash',
        val: m[0]
      });
    })

    /**
     * Backslash: "\\"
     */

    .capture('backslash', function() {
      var pos = this.position();
      var m = this.match(/^\\(?![*+?(){}[\]'"])/);
      if (!m) return;

      var val = m[0];

      if (this.isInside('bracket')) {
        val = '\\';
      } else if (val.length > 1) {
        val = '\\\\';
      }

      return pos({
        type: 'backslash',
        val: val
      });
    })

    /**
     * Square: "[.]"
     */

    .capture('square', function() {
      if (this.isInside('bracket')) return;
      var pos = this.position();
      var m = this.match(/^\[([^!^\\])\]/);
      if (!m) return;

      return pos({
        type: 'square',
        val: m[1]
      });
    })

    /**
     * Brackets: "[...]" (basic, this can be overridden by other parsers)
     */

    .capture('bracket', function() {
      var pos = this.position();
      var m = this.match(/^(?:\[([!^]?)([^\]]+|\]-)(\]|[^*+?]+)|\[)/);
      if (!m) return;

      var val = m[0];
      var negated = m[1] ? '^' : '';
      var inner = (m[2] || '').replace(/\\\\+/, '\\\\');
      var close = m[3] || '';

      if (m[2] && inner.length < m[2].length) {
        val = val.replace(/\\\\+/, '\\\\');
      }

      var esc = this.input.slice(0, 2);
      if (inner === '' && esc === '\\]') {
        inner += esc;
        this.consume(2);

        var str = this.input;
        var idx = -1;
        var ch;

        while ((ch = str[++idx])) {
          this.consume(1);
          if (ch === ']') {
            close = ch;
            break;
          }
          inner += ch;
        }
      }

      return pos({
        type: 'bracket',
        val: val,
        escaped: close !== ']',
        negated: negated,
        inner: inner,
        close: close
      });
    })

    /**
     * Text
     */

    .capture('text', function() {
      if (this.isInside('bracket')) return;
      var pos = this.position();
      var m = this.match(not);
      if (!m || !m[0]) return;

      return pos({
        type: 'text',
        val: m[0]
      });
    });

  /**
   * Allow custom parsers to be passed on options
   */

  if (options && typeof options.parsers === 'function') {
    options.parsers(nanomatch.parser);
  }
};

/**
 * Advance to the next non-escaped character
 */

function advanceTo(input, endChar) {
  var ch = input.charAt(0);
  var tok = { len: 1, val: '', esc: '' };
  var idx = 0;

  function advance() {
    if (ch !== '\\') {
      tok.esc += '\\' + ch;
      tok.val += ch;
    }

    ch = input.charAt(++idx);
    tok.len++;

    if (ch === '\\') {
      advance();
      advance();
    }
  }

  while (ch && ch !== endChar) {
    advance();
  }
  return tok;
}

/**
 * Create text regex
 */

function createTextRegex(pattern) {
  if (cached) return cached;
  var opts = {contains: true, strictClose: false};
  var not = regexNot.create(pattern, opts);
  var re = toRegex('^(?:[*]\\((?=.)|' + not + ')', opts);
  return (cached = re);
}

/**
 * Expose negation string
 */

module.exports.not = NOT_REGEX;


/***/ }),

/***/ "./node_modules/nanomatch/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/nanomatch/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports;
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

/**
 * Module dependencies
 */

var isWindows = __webpack_require__(/*! is-windows */ "./node_modules/is-windows/index.js")();
var Snapdragon = __webpack_require__(/*! snapdragon */ "./node_modules/snapdragon/index.js");
utils.define = __webpack_require__(/*! define-property */ "./node_modules/define-property/index.js");
utils.diff = __webpack_require__(/*! arr-diff */ "./node_modules/arr-diff/index.js");
utils.extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extend-shallow/index.js");
utils.pick = __webpack_require__(/*! object.pick */ "./node_modules/object.pick/index.js");
utils.typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
utils.unique = __webpack_require__(/*! array-unique */ "./node_modules/array-unique/index.js");

/**
 * Returns true if the given value is effectively an empty string
 */

utils.isEmptyString = function(val) {
  return String(val) === '' || String(val) === './';
};

/**
 * Returns true if the platform is windows, or `path.sep` is `\\`.
 * This is defined as a function to allow `path.sep` to be set in unit tests,
 * or by the user, if there is a reason to do so.
 * @return {Boolean}
 */

utils.isWindows = function() {
  return path.sep === '\\' || isWindows === true;
};

/**
 * Return the last element from an array
 */

utils.last = function(arr, n) {
  return arr[arr.length - (n || 1)];
};

/**
 * Get the `Snapdragon` instance to use
 */

utils.instantiate = function(ast, options) {
  var snapdragon;
  // if an instance was created by `.parse`, use that instance
  if (utils.typeOf(ast) === 'object' && ast.snapdragon) {
    snapdragon = ast.snapdragon;
  // if the user supplies an instance on options, use that instance
  } else if (utils.typeOf(options) === 'object' && options.snapdragon) {
    snapdragon = options.snapdragon;
  // create a new instance
  } else {
    snapdragon = new Snapdragon(options);
  }

  utils.define(snapdragon, 'parse', function(str, options) {
    var parsed = Snapdragon.prototype.parse.call(this, str, options);
    parsed.input = str;

    // escape unmatched brace/bracket/parens
    var last = this.parser.stack.pop();
    if (last && this.options.strictErrors !== true) {
      var open = last.nodes[0];
      var inner = last.nodes[1];
      if (last.type === 'bracket') {
        if (inner.val.charAt(0) === '[') {
          inner.val = '\\' + inner.val;
        }

      } else {
        open.val = '\\' + open.val;
        var sibling = open.parent.nodes[1];
        if (sibling.type === 'star') {
          sibling.loose = true;
        }
      }
    }

    // add non-enumerable parser reference
    utils.define(parsed, 'parser', this.parser);
    return parsed;
  });

  return snapdragon;
};

/**
 * Create the key to use for memoization. The key is generated
 * by iterating over the options and concatenating key-value pairs
 * to the pattern string.
 */

utils.createKey = function(pattern, options) {
  if (typeof options === 'undefined') {
    return pattern;
  }
  var key = pattern;
  for (var prop in options) {
    if (options.hasOwnProperty(prop)) {
      key += ';' + prop + '=' + String(options[prop]);
    }
  }
  return key;
};

/**
 * Cast `val` to an array
 * @return {Array}
 */

utils.arrayify = function(val) {
  if (typeof val === 'string') return [val];
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Return true if `val` is a non-empty string
 */

utils.isString = function(val) {
  return typeof val === 'string';
};

/**
 * Return true if `val` is a non-empty string
 */

utils.isRegex = function(val) {
  return utils.typeOf(val) === 'regexp';
};

/**
 * Return true if `val` is a non-empty string
 */

utils.isObject = function(val) {
  return utils.typeOf(val) === 'object';
};

/**
 * Escape regex characters in the given string
 */

utils.escapeRegex = function(str) {
  return str.replace(/[-[\]{}()^$|*+?.\\/\s]/g, '\\$&');
};

/**
 * Combines duplicate characters in the provided `input` string.
 * @param {String} `input`
 * @returns {String}
 */

utils.combineDupes = function(input, patterns) {
  patterns = utils.arrayify(patterns).join('|').split('|');
  patterns = patterns.map(function(s) {
    return s.replace(/\\?([+*\\/])/g, '\\$1');
  });
  var substr = patterns.join('|');
  var regex = new RegExp('(' + substr + ')(?=\\1)', 'g');
  return input.replace(regex, '');
};

/**
 * Returns true if the given `str` has special characters
 */

utils.hasSpecialChars = function(str) {
  return /(?:(?:(^|\/)[!.])|[*?+()|[\]{}]|[+@]\()/.test(str);
};

/**
 * Normalize slashes in the given filepath.
 *
 * @param {String} `filepath`
 * @return {String}
 */

utils.toPosixPath = function(str) {
  return str.replace(/\\+/g, '/');
};

/**
 * Strip backslashes before special characters in a string.
 *
 * @param {String} `str`
 * @return {String}
 */

utils.unescape = function(str) {
  return utils.toPosixPath(str.replace(/\\(?=[*+?!.])/g, ''));
};

/**
 * Strip the drive letter from a windows filepath
 * @param {String} `fp`
 * @return {String}
 */

utils.stripDrive = function(fp) {
  return utils.isWindows() ? fp.replace(/^[a-z]:[\\/]+?/i, '/') : fp;
};

/**
 * Strip the prefix from a filepath
 * @param {String} `fp`
 * @return {String}
 */

utils.stripPrefix = function(str) {
  if (str.charAt(0) === '.' && (str.charAt(1) === '/' || str.charAt(1) === '\\')) {
    return str.slice(2);
  }
  return str;
};

/**
 * Returns true if `str` is a common character that doesn't need
 * to be processed to be used for matching.
 * @param {String} `str`
 * @return {Boolean}
 */

utils.isSimpleChar = function(str) {
  return str.trim() === '' || str === '.';
};

/**
 * Returns true if the given str is an escaped or
 * unescaped path character
 */

utils.isSlash = function(str) {
  return str === '/' || str === '\\/' || str === '\\' || str === '\\\\';
};

/**
 * Returns a function that returns true if the given
 * pattern matches or contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.matchPath = function(pattern, options) {
  return (options && options.contains)
    ? utils.containsPattern(pattern, options)
    : utils.equalsPattern(pattern, options);
};

/**
 * Returns true if the given (original) filepath or unixified path are equal
 * to the given pattern.
 */

utils._equals = function(filepath, unixPath, pattern) {
  return pattern === filepath || pattern === unixPath;
};

/**
 * Returns true if the given (original) filepath or unixified path contain
 * the given pattern.
 */

utils._contains = function(filepath, unixPath, pattern) {
  return filepath.indexOf(pattern) !== -1 || unixPath.indexOf(pattern) !== -1;
};

/**
 * Returns a function that returns true if the given
 * pattern is the same as a given `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.equalsPattern = function(pattern, options) {
  var unixify = utils.unixify(options);
  options = options || {};

  return function fn(filepath) {
    var equal = utils._equals(filepath, unixify(filepath), pattern);
    if (equal === true || options.nocase !== true) {
      return equal;
    }
    var lower = filepath.toLowerCase();
    return utils._equals(lower, unixify(lower), pattern);
  };
};

/**
 * Returns a function that returns true if the given
 * pattern contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.containsPattern = function(pattern, options) {
  var unixify = utils.unixify(options);
  options = options || {};

  return function(filepath) {
    var contains = utils._contains(filepath, unixify(filepath), pattern);
    if (contains === true || options.nocase !== true) {
      return contains;
    }
    var lower = filepath.toLowerCase();
    return utils._contains(lower, unixify(lower), pattern);
  };
};

/**
 * Returns a function that returns true if the given
 * regex matches the `filename` of a file path.
 *
 * @param {RegExp} `re` Matching regex
 * @return {Function}
 */

utils.matchBasename = function(re) {
  return function(filepath) {
    return re.test(filepath) || re.test(path.basename(filepath));
  };
};

/**
 * Returns the given value unchanced.
 * @return {any}
 */

utils.identity = function(val) {
  return val;
};

/**
 * Determines the filepath to return based on the provided options.
 * @return {any}
 */

utils.value = function(str, unixify, options) {
  if (options && options.unixify === false) {
    return str;
  }
  if (options && typeof options.unixify === 'function') {
    return options.unixify(str);
  }
  return unixify(str);
};

/**
 * Returns a function that normalizes slashes in a string to forward
 * slashes, strips `./` from beginning of paths, and optionally unescapes
 * special characters.
 * @return {Function}
 */

utils.unixify = function(options) {
  var opts = options || {};
  return function(filepath) {
    if (opts.stripPrefix !== false) {
      filepath = utils.stripPrefix(filepath);
    }
    if (opts.unescape === true) {
      filepath = utils.unescape(filepath);
    }
    if (opts.unixify === true || utils.isWindows()) {
      filepath = utils.toPosixPath(filepath);
    }
    return filepath;
  };
};


/***/ }),

/***/ "./node_modules/normalize-path/index.js":
/*!**********************************************!*\
  !*** ./node_modules/normalize-path/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

module.exports = function(path, stripTrailing) {
  if (typeof path !== 'string') {
    throw new TypeError('expected path to be a string');
  }

  if (path === '\\' || path === '/') return '/';

  var len = path.length;
  if (len <= 1) return path;

  // ensure that win32 namespaces has two leading slashes, so that the path is
  // handled properly by the win32 version of path.parse() after being normalized
  // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
  var prefix = '';
  if (len > 4 && path[3] === '\\') {
    var ch = path[2];
    if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
      path = path.slice(2);
      prefix = '//';
    }
  }

  var segs = path.split(/[/\\]+/);
  if (stripTrailing !== false && segs[segs.length - 1] === '') {
    segs.pop();
  }
  return prefix + segs.join('/');
};


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/object-copy/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-copy/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/object-copy/node_modules/kind-of/index.js");
var copyDescriptor = __webpack_require__(/*! copy-descriptor */ "./node_modules/copy-descriptor/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/object-copy/node_modules/define-property/index.js");

/**
 * Copy static properties, prototype properties, and descriptors from one object to another.
 *
 * ```js
 * function App() {}
 * var proto = App.prototype;
 * App.prototype.set = function() {};
 * App.prototype.get = function() {};
 *
 * var obj = {};
 * copy(obj, proto);
 * ```
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String|Array} `omit` One or more properties to omit
 * @return {Object}
 * @api public
 */

function copy(receiver, provider, omit) {
  if (!isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }

  var props = nativeKeys(provider);
  var keys = Object.keys(provider);
  var len = props.length;
  omit = arrayify(omit);

  while (len--) {
    var key = props[len];

    if (has(keys, key)) {
      define(receiver, key, provider[key]);
    } else if (!(key in receiver) && !has(omit, key)) {
      copyDescriptor(receiver, provider, key);
    }
  }
};

/**
 * Return true if the given value is an object or function
 */

function isObject(val) {
  return typeOf(val) === 'object' || typeof val === 'function';
}

/**
 * Returns true if an array has any of the given elements, or an
 * object has any of the give keys.
 *
 * ```js
 * has(['a', 'b', 'c'], 'c');
 * //=> true
 *
 * has(['a', 'b', 'c'], ['c', 'z']);
 * //=> true
 *
 * has({a: 'b', c: 'd'}, ['c', 'z']);
 * //=> true
 * ```
 * @param {Object} `obj`
 * @param {String|Array} `val`
 * @return {Boolean}
 */

function has(obj, val) {
  val = arrayify(val);
  var len = val.length;

  if (isObject(obj)) {
    for (var key in obj) {
      if (val.indexOf(key) > -1) {
        return true;
      }
    }

    var keys = nativeKeys(obj);
    return has(keys, val);
  }

  if (Array.isArray(obj)) {
    var arr = obj;
    while (len--) {
      if (arr.indexOf(val[len]) > -1) {
        return true;
      }
    }
    return false;
  }

  throw new TypeError('expected an array or object.');
}

/**
 * Cast the given value to an array.
 *
 * ```js
 * arrayify('foo');
 * //=> ['foo']
 *
 * arrayify(['foo']);
 * //=> ['foo']
 * ```
 *
 * @param {String|Array} `val`
 * @return {Array}
 */

function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
}

/**
 * Returns true if a value has a `contructor`
 *
 * ```js
 * hasConstructor({});
 * //=> true
 *
 * hasConstructor(Object.create(null));
 * //=> false
 * ```
 * @param  {Object} `value`
 * @return {Boolean}
 */

function hasConstructor(val) {
  return isObject(val) && typeof val.constructor !== 'undefined';
}

/**
 * Get the native `ownPropertyNames` from the constructor of the
 * given `object`. An empty array is returned if the object does
 * not have a constructor.
 *
 * ```js
 * nativeKeys({a: 'b', b: 'c', c: 'd'})
 * //=> ['a', 'b', 'c']
 *
 * nativeKeys(function(){})
 * //=> ['length', 'caller']
 * ```
 *
 * @param  {Object} `obj` Object that has a `constructor`.
 * @return {Array} Array of keys.
 */

function nativeKeys(val) {
  if (!hasConstructor(val)) return [];
  return Object.getOwnPropertyNames(val);
}

/**
 * Expose `copy`
 */

module.exports = copy;

/**
 * Expose `copy.has` for tests
 */

module.exports.has = has;


/***/ }),

/***/ "./node_modules/object-copy/node_modules/define-property/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/object-copy/node_modules/define-property/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/object-copy/node_modules/kind-of/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/object-copy/node_modules/kind-of/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),

/***/ "./node_modules/object-visit/index.js":
/*!********************************************!*\
  !*** ./node_modules/object-visit/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object-visit <https://github.com/jonschlinkert/object-visit>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

module.exports = function visit(thisArg, method, target, val) {
  if (!isObject(thisArg) && typeof thisArg !== 'function') {
    throw new Error('object-visit expects `thisArg` to be an object.');
  }

  if (typeof method !== 'string') {
    throw new Error('object-visit expects `method` name to be a string');
  }

  if (typeof thisArg[method] !== 'function') {
    return thisArg;
  }

  var args = [].slice.call(arguments, 3);
  target = target || {};

  for (var key in target) {
    var arr = [key, target[key]].concat(args);
    thisArg[method].apply(thisArg, arr);
  }
  return thisArg;
};


/***/ }),

/***/ "./node_modules/object.pick/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object.pick/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object.pick <https://github.com/jonschlinkert/object.pick>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

module.exports = function pick(obj, keys) {
  if (!isObject(obj) && typeof obj !== 'function') {
    return {};
  }

  var res = {};
  if (typeof keys === 'string') {
    if (keys in obj) {
      res[keys] = obj[keys];
    }
    return res;
  }

  var len = keys.length;
  var idx = -1;

  while (++idx < len) {
    var key = keys[idx];
    if (key in obj) {
      res[key] = obj[key];
    }
  }
  return res;
};


/***/ }),

/***/ "./node_modules/os-browserify/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/os-browserify/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ "./node_modules/pascalcase/index.js":
/*!******************************************!*\
  !*** ./node_modules/pascalcase/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * pascalcase <https://github.com/jonschlinkert/pascalcase>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

function pascalcase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string.');
  }
  str = str.replace(/([A-Z])/g, ' $1');
  if (str.length === 1) { return str.toUpperCase(); }
  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str.replace(/[\W_]+(\w|$)/g, function (_, ch) {
    return ch.toUpperCase();
  });
}

module.exports = pascalcase;


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/path-dirname/index.js":
/*!********************************************!*\
  !*** ./node_modules/path-dirname/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var inspect = __webpack_require__(/*! util */ "./node_modules/util/util.js").inspect;

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + inspect(path));
  }
}

function posix(path) {
  assertPath(path);
  if (path.length === 0)
    return '.';
  var code = path.charCodeAt(0);
  var hasRoot = (code === 47/*/*/);
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47/*/*/) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1)
    return hasRoot ? '/' : '.';
  if (hasRoot && end === 1)
    return '//';
  return path.slice(0, end);
}

function win32(path) {
  assertPath(path);
  var len = path.length;
  if (len === 0)
    return '.';
  var rootEnd = -1;
  var end = -1;
  var matchedSlash = true;
  var offset = 0;
  var code = path.charCodeAt(0);

  // Try to match a root
  if (len > 1) {
    if (code === 47/*/*/ || code === 92/*\*/) {
      // Possible UNC root

      rootEnd = offset = 1;

      code = path.charCodeAt(1);
      if (code === 47/*/*/ || code === 92/*\*/) {
        // Matched double path separator at beginning
        var j = 2;
        var last = j;
        // Match 1 or more non-path separators
        for (; j < len; ++j) {
          code = path.charCodeAt(j);
          if (code === 47/*/*/ || code === 92/*\*/)
            break;
        }
        if (j < len && j !== last) {
          // Matched!
          last = j;
          // Match 1 or more path separators
          for (; j < len; ++j) {
            code = path.charCodeAt(j);
            if (code !== 47/*/*/ && code !== 92/*\*/)
              break;
          }
          if (j < len && j !== last) {
            // Matched!
            last = j;
            // Match 1 or more non-path separators
            for (; j < len; ++j) {
              code = path.charCodeAt(j);
              if (code === 47/*/*/ || code === 92/*\*/)
                break;
            }
            if (j === len) {
              // We matched a UNC root only
              return path;
            }
            if (j !== last) {
              // We matched a UNC root with leftovers

              // Offset by 1 to include the separator after the UNC root to
              // treat it as a "normal root" on top of a (UNC) root
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if ((code >= 65/*A*/ && code <= 90/*Z*/) ||
               (code >= 97/*a*/ && code <= 122/*z*/)) {
      // Possible device root

      code = path.charCodeAt(1);
      if (path.charCodeAt(1) === 58/*:*/) {
        rootEnd = offset = 2;
        if (len > 2) {
          code = path.charCodeAt(2);
          if (code === 47/*/*/ || code === 92/*\*/)
            rootEnd = offset = 3;
        }
      }
    }
  } else if (code === 47/*/*/ || code === 92/*\*/) {
    return path[0];
  }

  for (var i = len - 1; i >= offset; --i) {
    code = path.charCodeAt(i);
    if (code === 47/*/*/ || code === 92/*\*/) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) {
    if (rootEnd === -1)
      return '.';
    else
      end = rootEnd;
  }
  return path.slice(0, end);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/path-is-absolute/index.js":
/*!************************************************!*\
  !*** ./node_modules/path-is-absolute/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function posix(path) {
	return path.charAt(0) === '/';
}

function win32(path) {
	// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
	var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
	var result = splitDeviceRe.exec(path);
	var device = result[1] || '';
	var isUnc = Boolean(device && device.charAt(1) !== ':');

	// UNC paths are always absolute
	return Boolean(result[2] || isUnc);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/posix-character-classes/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/posix-character-classes/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * POSIX character classes
 */

module.exports = {
  alnum: 'a-zA-Z0-9',
  alpha: 'a-zA-Z',
  ascii: '\\x00-\\x7F',
  blank: ' \\t',
  cntrl: '\\x00-\\x1F\\x7F',
  digit: '0-9',
  graph: '\\x21-\\x7E',
  lower: 'a-z',
  print: '\\x20-\\x7E ',
  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
  space: ' \\t\\r\\n\\v\\f',
  upper: 'A-Z',
  word: 'A-Za-z0-9_',
  xdigit: 'A-Fa-f0-9'
};


/***/ }),

/***/ "./node_modules/process-nextick-args/index.js":
/*!****************************************************!*\
  !*** ./node_modules/process-nextick-args/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/readable-stream/duplex-browser.js":
/*!********************************************************!*\
  !*** ./node_modules/readable-stream/duplex-browser.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/readable-stream/lib/_stream_duplex.js");


/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
/*!************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_duplex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

var Readable = __webpack_require__(/*! ./_stream_readable */ "./node_modules/readable-stream/lib/_stream_readable.js");
var Writable = __webpack_require__(/*! ./_stream_writable */ "./node_modules/readable-stream/lib/_stream_writable.js");

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
/*!*****************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_passthrough.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(/*! ./_stream_transform */ "./node_modules/readable-stream/lib/_stream_transform.js");

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_readable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(/*! util */ 1);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(/*! ./internal/streams/BufferList */ "./node_modules/readable-stream/lib/internal/streams/BufferList.js");
var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/readable-stream/lib/internal/streams/destroy.js");
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
/*!***************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_transform.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_writable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(/*! util-deprecate */ "./node_modules/util-deprecate/browser.js")
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/readable-stream/lib/internal/streams/destroy.js");

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
/*!*************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/BufferList.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
var util = __webpack_require__(/*! util */ 2);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/destroy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;


/***/ }),

/***/ "./node_modules/readable-stream/passthrough.js":
/*!*****************************************************!*\
  !*** ./node_modules/readable-stream/passthrough.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./readable */ "./node_modules/readable-stream/readable-browser.js").PassThrough


/***/ }),

/***/ "./node_modules/readable-stream/readable-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/readable-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./lib/_stream_readable.js */ "./node_modules/readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__(/*! ./lib/_stream_transform.js */ "./node_modules/readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__(/*! ./lib/_stream_passthrough.js */ "./node_modules/readable-stream/lib/_stream_passthrough.js");


/***/ }),

/***/ "./node_modules/readable-stream/transform.js":
/*!***************************************************!*\
  !*** ./node_modules/readable-stream/transform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./readable */ "./node_modules/readable-stream/readable-browser.js").Transform


/***/ }),

/***/ "./node_modules/readable-stream/writable-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/writable-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/readable-stream/lib/_stream_writable.js");


/***/ }),

/***/ "./node_modules/readdirp/readdirp.js":
/*!*******************************************!*\
  !*** ./node_modules/readdirp/readdirp.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var fs        =  __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js")
  , path      =  __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")
  , micromatch =  __webpack_require__(/*! micromatch */ "./node_modules/micromatch/index.js").isMatch
  , toString  =  Object.prototype.toString
  ;


// Standard helpers
function isFunction (obj) {
  return toString.call(obj) === '[object Function]';
}

function isString (obj) {
  return toString.call(obj) === '[object String]';
}

function isUndefined (obj) {
  return obj === void 0;
}

/**
 * Main function which ends up calling readdirRec and reads all files and directories in given root recursively.
 * @param { Object }   opts     Options to specify root (start directory), filters and recursion depth
 * @param { function } callback1  When callback2 is given calls back for each processed file - function (fileInfo) { ... },
 *                                when callback2 is not given, it behaves like explained in callback2
 * @param { function } callback2  Calls back once all files have been processed with an array of errors and file infos
 *                                function (err, fileInfos) { ... }
 */
function readdir(opts, callback1, callback2) {
  var stream
    , handleError
    , handleFatalError
    , errors = []
    , readdirResult = {
        directories: []
      , files: []
    }
    , fileProcessed
    , allProcessed
    , realRoot
    , aborted = false
    , paused = false
    ;

  // If no callbacks were given we will use a streaming interface
  if (isUndefined(callback1)) {
    var api          =  __webpack_require__(/*! ./stream-api */ "./node_modules/readdirp/stream-api.js")();
    stream           =  api.stream;
    callback1        =  api.processEntry;
    callback2        =  api.done;
    handleError      =  api.handleError;
    handleFatalError =  api.handleFatalError;

    stream.on('close', function () { aborted = true; });
    stream.on('pause', function () { paused = true; });
    stream.on('resume', function () { paused = false; });
  } else {
    handleError      =  function (err) { errors.push(err); };
    handleFatalError =  function (err) {
      handleError(err);
      allProcessed(errors, null);
    };
  }

  if (isUndefined(opts)){
    handleFatalError(new Error (
      'Need to pass at least one argument: opts! \n' +
      'https://github.com/paulmillr/readdirp#options'
      )
    );
    return stream;
  }

  opts.root            =  opts.root            || '.';
  opts.fileFilter      =  opts.fileFilter      || function() { return true; };
  opts.directoryFilter =  opts.directoryFilter || function() { return true; };
  opts.depth           =  typeof opts.depth === 'undefined' ? 999999999 : opts.depth;
  opts.entryType       =  opts.entryType       || 'files';

  var statfn = opts.lstat === true ? fs.lstat.bind(fs) : fs.stat.bind(fs);

  if (isUndefined(callback2)) {
    fileProcessed = function() { };
    allProcessed = callback1;
  } else {
    fileProcessed = callback1;
    allProcessed = callback2;
  }

  function normalizeFilter (filter) {

    if (isUndefined(filter)) return undefined;

    function isNegated (filters) {

      function negated(f) {
        return f.indexOf('!') === 0;
      }

      var some = filters.some(negated);
      if (!some) {
        return false;
      } else {
        if (filters.every(negated)) {
          return true;
        } else {
          // if we detect illegal filters, bail out immediately
          throw new Error(
            'Cannot mix negated with non negated glob filters: ' + filters + '\n' +
            'https://github.com/paulmillr/readdirp#filters'
          );
        }
      }
    }

    // Turn all filters into a function
    if (isFunction(filter)) {

      return filter;

    } else if (isString(filter)) {

      return function (entryInfo) {
        return micromatch(entryInfo.name, filter.trim());
      };

    } else if (filter && Array.isArray(filter)) {

      if (filter) filter = filter.map(function (f) {
        return f.trim();
      });

      return isNegated(filter) ?
        // use AND to concat multiple negated filters
        function (entryInfo) {
          return filter.every(function (f) {
            return micromatch(entryInfo.name, f);
          });
        }
        :
        // use OR to concat multiple inclusive filters
        function (entryInfo) {
          return filter.some(function (f) {
            return micromatch(entryInfo.name, f);
          });
        };
    }
  }

  function processDir(currentDir, entries, callProcessed) {
    if (aborted) return;
    var total = entries.length
      , processed = 0
      , entryInfos = []
      ;

    fs.realpath(currentDir, function(err, realCurrentDir) {
      if (aborted) return;
      if (err) {
        handleError(err);
        callProcessed(entryInfos);
        return;
      }

      var relDir = path.relative(realRoot, realCurrentDir);

      if (entries.length === 0) {
        callProcessed([]);
      } else {
        entries.forEach(function (entry) {

          var fullPath = path.join(realCurrentDir, entry)
            , relPath  = path.join(relDir, entry);

          statfn(fullPath, function (err, stat) {
            if (err) {
              handleError(err);
            } else {
              entryInfos.push({
                  name          :  entry
                , path          :  relPath   // relative to root
                , fullPath      :  fullPath

                , parentDir     :  relDir    // relative to root
                , fullParentDir :  realCurrentDir

                , stat          :  stat
              });
            }
            processed++;
            if (processed === total) callProcessed(entryInfos);
          });
        });
      }
    });
  }

  function readdirRec(currentDir, depth, callCurrentDirProcessed) {
    var args = arguments;
    if (aborted) return;
    if (paused) {
      setImmediate(function () {
        readdirRec.apply(null, args);
      })
      return;
    }

    fs.readdir(currentDir, function (err, entries) {
      if (err) {
        handleError(err);
        callCurrentDirProcessed();
        return;
      }

      processDir(currentDir, entries, function(entryInfos) {

        var subdirs = entryInfos
          .filter(function (ei) { return ei.stat.isDirectory() && opts.directoryFilter(ei); });

        subdirs.forEach(function (di) {
          if(opts.entryType === 'directories' || opts.entryType === 'both' || opts.entryType === 'all') {
            fileProcessed(di);
          }
          readdirResult.directories.push(di);
        });

        entryInfos
          .filter(function(ei) {
            var isCorrectType = opts.entryType === 'all' ?
              !ei.stat.isDirectory() : ei.stat.isFile() || ei.stat.isSymbolicLink();
            return isCorrectType && opts.fileFilter(ei);
          })
          .forEach(function (fi) {
            if(opts.entryType === 'files' || opts.entryType === 'both' || opts.entryType === 'all') {
              fileProcessed(fi);
            }
            readdirResult.files.push(fi);
          });

        var pendingSubdirs = subdirs.length;

        // Be done if no more subfolders exist or we reached the maximum desired depth
        if(pendingSubdirs === 0 || depth === opts.depth) {
          callCurrentDirProcessed();
        } else {
          // recurse into subdirs, keeping track of which ones are done
          // and call back once all are processed
          subdirs.forEach(function (subdir) {
            readdirRec(subdir.fullPath, depth + 1, function () {
              pendingSubdirs = pendingSubdirs - 1;
              if(pendingSubdirs === 0) {
                callCurrentDirProcessed();
              }
            });
          });
        }
      });
    });
  }

  // Validate and normalize filters
  try {
    opts.fileFilter = normalizeFilter(opts.fileFilter);
    opts.directoryFilter = normalizeFilter(opts.directoryFilter);
  } catch (err) {
    // if we detect illegal filters, bail out immediately
    handleFatalError(err);
    return stream;
  }

  // If filters were valid get on with the show
  fs.realpath(opts.root, function(err, res) {
    if (err) {
      handleFatalError(err);
      return stream;
    }

    realRoot = res;
    readdirRec(opts.root, 0, function () {
      // All errors are collected into the errors array
      if (errors.length > 0) {
        allProcessed(errors, readdirResult);
      } else {
        allProcessed(null, readdirResult);
      }
    });
  });

  return stream;
}

module.exports = readdir;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/readdirp/stream-api.js":
/*!*********************************************!*\
  !*** ./node_modules/readdirp/stream-api.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var stream = __webpack_require__(/*! readable-stream */ "./node_modules/readable-stream/readable-browser.js");
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var Readable = stream.Readable;

module.exports = ReaddirpReadable;

util.inherits(ReaddirpReadable, Readable);

function ReaddirpReadable (opts) {
  if (!(this instanceof ReaddirpReadable)) return new ReaddirpReadable(opts);

  opts = opts || {};

  opts.objectMode = true;
  Readable.call(this, opts);

  // backpressure not implemented at this point
  this.highWaterMark = Infinity;

  this._destroyed = false;
  this._paused = false;
  this._warnings = [];
  this._errors = [];

  this._pauseResumeErrors();
}

var proto = ReaddirpReadable.prototype;

proto._pauseResumeErrors = function () {
  var self = this;
  self.on('pause', function () { self._paused = true });
  self.on('resume', function () {
    if (self._destroyed) return;
    self._paused = false;

    self._warnings.forEach(function (err) { self.emit('warn', err) });
    self._warnings.length = 0;

    self._errors.forEach(function (err) { self.emit('error', err) });
    self._errors.length = 0;
  })
}

// called for each entry
proto._processEntry = function (entry) {
  if (this._destroyed) return;
  this.push(entry);
}

proto._read = function () { }

proto.destroy = function () {
  // when stream is destroyed it will emit nothing further, not even errors or warnings
  this.push(null);
  this.readable = false;
  this._destroyed = true;
  this.emit('close');
}

proto._done = function () {
  this.push(null);
}

// we emit errors and warnings async since we may handle errors like invalid args
// within the initial event loop before any event listeners subscribed
proto._handleError = function (err) {
  var self = this;
  setImmediate(function () {
    if (self._paused) return self._warnings.push(err);
    if (!self._destroyed) self.emit('warn', err);
  });
}

proto._handleFatalError = function (err) {
  var self = this;
  setImmediate(function () {
    if (self._paused) return self._errors.push(err);
    if (!self._destroyed) self.emit('error', err);
  });
}

function createStreamAPI () {
  var stream = new ReaddirpReadable();

  return {
      stream           :  stream
    , processEntry     :  stream._processEntry.bind(stream)
    , done             :  stream._done.bind(stream)
    , handleError      :  stream._handleError.bind(stream)
    , handleFatalError :  stream._handleFatalError.bind(stream)
  };
}

module.exports = createStreamAPI;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/regex-not/index.js":
/*!*****************************************!*\
  !*** ./node_modules/regex-not/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extend-shallow/index.js");
var safe = __webpack_require__(/*! safe-regex */ "./node_modules/safe-regex/index.js");

/**
 * The main export is a function that takes a `pattern` string and an `options` object.
 *
 * ```js
 & var not = require('regex-not');
 & console.log(not('foo'));
 & //=> /^(?:(?!^(?:foo)$).)*$/
 * ```
 *
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {RegExp} Converts the given `pattern` to a regex using the specified `options`.
 * @api public
 */

function toRegex(pattern, options) {
  return new RegExp(toRegex.create(pattern, options));
}

/**
 * Create a regex-compatible string from the given `pattern` and `options`.
 *
 * ```js
 & var not = require('regex-not');
 & console.log(not.create('foo'));
 & //=> '^(?:(?!^(?:foo)$).)*$'
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

toRegex.create = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected a string');
  }

  var opts = extend({}, options);
  if (opts.contains === true) {
    opts.strictNegate = false;
  }

  var open = opts.strictOpen !== false ? '^' : '';
  var close = opts.strictClose !== false ? '$' : '';
  var endChar = opts.endChar ? opts.endChar : '+';
  var str = pattern;

  if (opts.strictNegate === false) {
    str = '(?:(?!(?:' + pattern + ')).)' + endChar;
  } else {
    str = '(?:(?!^(?:' + pattern + ')$).)' + endChar;
  }

  var res = open + str + close;
  if (opts.safe === true && safe(res) === false) {
    throw new Error('potentially unsafe regular expression: ' + res);
  }

  return res;
};

/**
 * Expose `toRegex`
 */

module.exports = toRegex;


/***/ }),

/***/ "./node_modules/remove-trailing-separator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/remove-trailing-separator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var isWin = process.platform === 'win32';

module.exports = function (str) {
	var i = str.length - 1;
	if (i < 2) {
		return str;
	}
	while (isSeparator(str, i)) {
		i--;
	}
	return str.substr(0, i + 1);
};

function isSeparator(str, i) {
	var char = str[i];
	return i > 0 && (char === '/' || (isWin && char === '\\'));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/repeat-element/index.js":
/*!**********************************************!*\
  !*** ./node_modules/repeat-element/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-element <https://github.com/jonschlinkert/repeat-element>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Licensed under the MIT license.
 */



module.exports = function repeat(ele, num) {
  var arr = new Array(num);

  for (var i = 0; i < num; i++) {
    arr[i] = ele;
  }

  return arr;
};


/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ "./node_modules/resolve-url/resolve-url.js":
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (???MIT???) Licensed. (See LICENSE.)

void (function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(this, function() {

  function resolveUrl(/* ...urls */) {
    var numUrls = arguments.length

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.")
    }

    var base = document.createElement("base")
    base.href = arguments[0]

    if (numUrls === 1) {
      return base.href
    }

    var head = document.getElementsByTagName("head")[0]
    head.insertBefore(base, head.firstChild)

    var a = document.createElement("a")
    var resolved

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index]
      resolved = a.href
      base.href = resolved
    }

    head.removeChild(base)

    return resolved
  }

  return resolveUrl

}));


/***/ }),

/***/ "./node_modules/ret/lib/index.js":
/*!***************************************!*\
  !*** ./node_modules/ret/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util      = __webpack_require__(/*! ./util */ "./node_modules/ret/lib/util.js");
var types     = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");
var sets      = __webpack_require__(/*! ./sets */ "./node_modules/ret/lib/sets.js");
var positions = __webpack_require__(/*! ./positions */ "./node_modules/ret/lib/positions.js");


module.exports = function(regexpStr) {
  var i = 0, l, c,
      start = { type: types.ROOT, stack: []},

      // Keep track of last clause/group and stack.
      lastGroup = start,
      last = start.stack,
      groupStack = [];


  var repeatErr = function(i) {
    util.error(regexpStr, 'Nothing to repeat at column ' + (i - 1));
  };

  // Decode a few escaped characters.
  var str = util.strToChars(regexpStr);
  l = str.length;

  // Iterate through each character in string.
  while (i < l) {
    c = str[i++];

    switch (c) {
      // Handle escaped characters, inclues a few sets.
      case '\\':
        c = str[i++];

        switch (c) {
          case 'b':
            last.push(positions.wordBoundary());
            break;

          case 'B':
            last.push(positions.nonWordBoundary());
            break;

          case 'w':
            last.push(sets.words());
            break;

          case 'W':
            last.push(sets.notWords());
            break;

          case 'd':
            last.push(sets.ints());
            break;

          case 'D':
            last.push(sets.notInts());
            break;

          case 's':
            last.push(sets.whitespace());
            break;

          case 'S':
            last.push(sets.notWhitespace());
            break;

          default:
            // Check if c is integer.
            // In which case it's a reference.
            if (/\d/.test(c)) {
              last.push({ type: types.REFERENCE, value: parseInt(c, 10) });

            // Escaped character.
            } else {
              last.push({ type: types.CHAR, value: c.charCodeAt(0) });
            }
        }

        break;


      // Positionals.
      case '^':
          last.push(positions.begin());
        break;

      case '$':
          last.push(positions.end());
        break;


      // Handle custom sets.
      case '[':
        // Check if this class is 'anti' i.e. [^abc].
        var not;
        if (str[i] === '^') {
          not = true;
          i++;
        } else {
          not = false;
        }

        // Get all the characters in class.
        var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

        // Increase index by length of class.
        i += classTokens[1];
        last.push({
          type: types.SET,
          set: classTokens[0],
          not: not,
        });

        break;


      // Class of any character except \n.
      case '.':
        last.push(sets.anyChar());
        break;


      // Push group onto stack.
      case '(':
        // Create group.
        var group = {
          type: types.GROUP,
          stack: [],
          remember: true,
        };

        c = str[i];

        // If if this is a special kind of group.
        if (c === '?') {
          c = str[i + 1];
          i += 2;

          // Match if followed by.
          if (c === '=') {
            group.followedBy = true;

          // Match if not followed by.
          } else if (c === '!') {
            group.notFollowedBy = true;

          } else if (c !== ':') {
            util.error(regexpStr,
              'Invalid group, character \'' + c +
              '\' after \'?\' at column ' + (i - 1));
          }

          group.remember = false;
        }

        // Insert subgroup into current group stack.
        last.push(group);

        // Remember the current group for when the group closes.
        groupStack.push(lastGroup);

        // Make this new group the current group.
        lastGroup = group;
        last = group.stack;
        break;


      // Pop group out of stack.
      case ')':
        if (groupStack.length === 0) {
          util.error(regexpStr, 'Unmatched ) at column ' + (i - 1));
        }
        lastGroup = groupStack.pop();

        // Check if this group has a PIPE.
        // To get back the correct last stack.
        last = lastGroup.options ?
          lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
        break;


      // Use pipe character to give more choices.
      case '|':
        // Create array where options are if this is the first PIPE
        // in this clause.
        if (!lastGroup.options) {
          lastGroup.options = [lastGroup.stack];
          delete lastGroup.stack;
        }

        // Create a new stack and add to options for rest of clause.
        var stack = [];
        lastGroup.options.push(stack);
        last = stack;
        break;


      // Repetition.
      // For every repetition, remove last element from last stack
      // then insert back a RANGE object.
      // This design is chosen because there could be more than
      // one repetition symbols in a regex i.e. `a?+{2,3}`.
      case '{':
        var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
        if (rs !== null) {
          if (last.length === 0) {
            repeatErr(i);
          }
          min = parseInt(rs[1], 10);
          max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
          i += rs[0].length;

          last.push({
            type: types.REPETITION,
            min: min,
            max: max,
            value: last.pop(),
          });
        } else {
          last.push({
            type: types.CHAR,
            value: 123,
          });
        }
        break;

      case '?':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: 1,
          value: last.pop(),
        });
        break;

      case '+':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 1,
          max: Infinity,
          value: last.pop(),
        });
        break;

      case '*':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: Infinity,
          value: last.pop(),
        });
        break;


      // Default is a character that is not `\[](){}?+*^$`.
      default:
        last.push({
          type: types.CHAR,
          value: c.charCodeAt(0),
        });
    }

  }

  // Check if any groups have not been closed.
  if (groupStack.length !== 0) {
    util.error(regexpStr, 'Unterminated group');
  }

  return start;
};

module.exports.types = types;


/***/ }),

/***/ "./node_modules/ret/lib/positions.js":
/*!*******************************************!*\
  !*** ./node_modules/ret/lib/positions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var types = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");

exports.wordBoundary = function() {
  return { type: types.POSITION, value: 'b' };
};

exports.nonWordBoundary = function() {
  return { type: types.POSITION, value: 'B' };
};

exports.begin = function() {
  return { type: types.POSITION, value: '^' };
};

exports.end = function() {
  return { type: types.POSITION, value: '$' };
};


/***/ }),

/***/ "./node_modules/ret/lib/sets.js":
/*!**************************************!*\
  !*** ./node_modules/ret/lib/sets.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var types = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");

var INTS = function() {
 return [{ type: types.RANGE , from: 48, to: 57 }];
};

var WORDS = function() {
 return [
    { type: types.CHAR, value: 95 },
    { type: types.RANGE, from: 97, to: 122 },
    { type: types.RANGE, from: 65, to: 90 }
  ].concat(INTS());
};

var WHITESPACE = function() {
 return [
    { type: types.CHAR, value: 9 },
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 11 },
    { type: types.CHAR, value: 12 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 32 },
    { type: types.CHAR, value: 160 },
    { type: types.CHAR, value: 5760 },
    { type: types.CHAR, value: 6158 },
    { type: types.CHAR, value: 8192 },
    { type: types.CHAR, value: 8193 },
    { type: types.CHAR, value: 8194 },
    { type: types.CHAR, value: 8195 },
    { type: types.CHAR, value: 8196 },
    { type: types.CHAR, value: 8197 },
    { type: types.CHAR, value: 8198 },
    { type: types.CHAR, value: 8199 },
    { type: types.CHAR, value: 8200 },
    { type: types.CHAR, value: 8201 },
    { type: types.CHAR, value: 8202 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
    { type: types.CHAR, value: 8239 },
    { type: types.CHAR, value: 8287 },
    { type: types.CHAR, value: 12288 },
    { type: types.CHAR, value: 65279 }
  ];
};

var NOTANYCHAR = function() {
  return [
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
  ];
};

// Predefined class objects.
exports.words = function() {
  return { type: types.SET, set: WORDS(), not: false };
};

exports.notWords = function() {
  return { type: types.SET, set: WORDS(), not: true };
};

exports.ints = function() {
  return { type: types.SET, set: INTS(), not: false };
};

exports.notInts = function() {
  return { type: types.SET, set: INTS(), not: true };
};

exports.whitespace = function() {
  return { type: types.SET, set: WHITESPACE(), not: false };
};

exports.notWhitespace = function() {
  return { type: types.SET, set: WHITESPACE(), not: true };
};

exports.anyChar = function() {
  return { type: types.SET, set: NOTANYCHAR(), not: true };
};


/***/ }),

/***/ "./node_modules/ret/lib/types.js":
/*!***************************************!*\
  !*** ./node_modules/ret/lib/types.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ROOT       : 0,
  GROUP      : 1,
  POSITION   : 2,
  SET        : 3,
  RANGE      : 4,
  REPETITION : 5,
  REFERENCE  : 6,
  CHAR       : 7,
};


/***/ }),

/***/ "./node_modules/ret/lib/util.js":
/*!**************************************!*\
  !*** ./node_modules/ret/lib/util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var types = __webpack_require__(/*! ./types */ "./node_modules/ret/lib/types.js");
var sets  = __webpack_require__(/*! ./sets */ "./node_modules/ret/lib/sets.js");


// All of these are private and only used by randexp.
// It's assumed that they will always be called with the correct input.

var CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
var SLSH = { '0': 0, 't': 9, 'n': 10, 'v': 11, 'f': 12, 'r': 13 };

/**
 * Finds character representations in str and convert all to
 * their respective characters
 *
 * @param {String} str
 * @return {String}
 */
exports.strToChars = function(str) {
  /* jshint maxlen: false */
  var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;
  str = str.replace(chars_regex, function(s, b, lbs, a16, b16, c8, dctrl, eslsh) {
    if (lbs) {
      return s;
    }

    var code = b     ? 8 :
               a16   ? parseInt(a16, 16) :
               b16   ? parseInt(b16, 16) :
               c8    ? parseInt(c8,   8) :
               dctrl ? CTRL.indexOf(dctrl) :
               SLSH[eslsh];

    var c = String.fromCharCode(code);

    // Escape special regex characters.
    if (/[\[\]{}\^$.|?*+()]/.test(c)) {
      c = '\\' + c;
    }

    return c;
  });

  return str;
};


/**
 * turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {String} str
 * @param {String} regexpStr
 * @return {Array.<Array.<Object>, Number>}
 */
exports.tokenizeClass = function(str, regexpStr) {
  /* jshint maxlen: false */
  var tokens = [];
  var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g;
  var rs, c;


  while ((rs = regexp.exec(str)) != null) {
    if (rs[1]) {
      tokens.push(sets.words());

    } else if (rs[2]) {
      tokens.push(sets.ints());

    } else if (rs[3]) {
      tokens.push(sets.whitespace());

    } else if (rs[4]) {
      tokens.push(sets.notWords());

    } else if (rs[5]) {
      tokens.push(sets.notInts());

    } else if (rs[6]) {
      tokens.push(sets.notWhitespace());

    } else if (rs[7]) {
      tokens.push({
        type: types.RANGE,
        from: (rs[8] || rs[9]).charCodeAt(0),
          to: rs[10].charCodeAt(0),
      });

    } else if (c = rs[12]) {
      tokens.push({
        type: types.CHAR,
        value: c.charCodeAt(0),
      });

    } else {
      return [tokens, regexp.lastIndex];
    }
  }

  exports.error(regexpStr, 'Unterminated character class');
};


/**
 * Shortcut to throw errors.
 *
 * @param {String} regexp
 * @param {String} msg
 */
exports.error = function(regexp, msg) {
  throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
};


/***/ }),

/***/ "./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/safe-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/safe-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ret */ "./node_modules/ret/lib/index.js");
var types = parse.types;

module.exports = function (re, opts) {
    if (!opts) opts = {};
    var replimit = opts.limit === undefined ? 25 : opts.limit;
    
    if (isRegExp(re)) re = re.source;
    else if (typeof re !== 'string') re = String(re);
    
    try { re = parse(re) }
    catch (err) { return false }
    
    var reps = 0;
    return (function walk (node, starHeight) {
        if (node.type === types.REPETITION) {
            starHeight ++;
            reps ++;
            if (starHeight > 1) return false;
            if (reps > replimit) return false;
        }
        
        if (node.options) {
            for (var i = 0, len = node.options.length; i < len; i++) {
                var ok = walk({ stack: node.options[i] }, starHeight);
                if (!ok) return false;
            }
        }
        var stack = node.stack || (node.value && node.value.stack);
        if (!stack) return true;
        
        for (var i = 0; i < stack.length; i++) {
            var ok = walk(stack[i], starHeight);
            if (!ok) return false;
        }
        
        return true;
    })(re, 0);
};

function isRegExp (x) {
    return {}.toString.call(x) === '[object RegExp]';
}


/***/ }),

/***/ "./node_modules/set-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/set-value/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var split = __webpack_require__(/*! split-string */ "./node_modules/split-string/index.js");
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/set-value/node_modules/extend-shallow/index.js");
var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function(obj, prop, val) {
  if (!isObject(obj)) {
    return obj;
  }

  if (Array.isArray(prop)) {
    prop = [].concat.apply([], prop).join('.');
  }

  if (typeof prop !== 'string') {
    return obj;
  }

  var keys = split(prop, {sep: '.', brackets: true}).filter(isValidKey);
  var len = keys.length;
  var idx = -1;
  var current = obj;

  while (++idx < len) {
    var key = keys[idx];
    if (idx !== len - 1) {
      if (!isObject(current[key])) {
        current[key] = {};
      }
      current = current[key];
      continue;
    }

    if (isPlainObject(current[key]) && isPlainObject(val)) {
      current[key] = extend({}, current[key], val);
    } else {
      current[key] = val;
    }
  }

  return obj;
};

function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
}


/***/ }),

/***/ "./node_modules/set-value/node_modules/extend-shallow/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/set-value/node_modules/extend-shallow/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./node_modules/snapdragon-node/index.js":
/*!***********************************************!*\
  !*** ./node_modules/snapdragon-node/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/snapdragon-node/node_modules/define-property/index.js");
var utils = __webpack_require__(/*! snapdragon-util */ "./node_modules/snapdragon-util/index.js");
var ownNames;

/**
 * Create a new AST `Node` with the given `val` and `type`.
 *
 * ```js
 * var node = new Node('*', 'Star');
 * var node = new Node({type: 'star', val: '*'});
 * ```
 * @name Node
 * @param {String|Object} `val` Pass a matched substring, or an object to merge onto the node.
 * @param {String} `type` The node type to use when `val` is a string.
 * @return {Object} node instance
 * @api public
 */

function Node(val, type, parent) {
  if (typeof type !== 'string') {
    parent = type;
    type = null;
  }

  define(this, 'parent', parent);
  define(this, 'isNode', true);
  define(this, 'expect', null);

  if (typeof type !== 'string' && isObject(val)) {
    lazyKeys();
    var keys = Object.keys(val);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (ownNames.indexOf(key) === -1) {
        this[key] = val[key];
      }
    }
  } else {
    this.type = type;
    this.val = val;
  }
}

/**
 * Returns true if the given value is a node.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var node = new Node({type: 'foo'});
 * console.log(Node.isNode(node)); //=> true
 * console.log(Node.isNode({})); //=> false
 * ```
 * @param {Object} `node`
 * @returns {Boolean}
 * @api public
 */

Node.isNode = function(node) {
  return utils.isNode(node);
};

/**
 * Define a non-enumberable property on the node instance.
 * Useful for adding properties that shouldn't be extended
 * or visible during debugging.
 *
 * ```js
 * var node = new Node();
 * node.define('foo', 'something non-enumerable');
 * ```
 * @param {String} `name`
 * @param {any} `val`
 * @return {Object} returns the node instance
 * @api public
 */

Node.prototype.define = function(name, val) {
  define(this, name, val);
  return this;
};

/**
 * Returns true if `node.val` is an empty string, or `node.nodes` does
 * not contain any non-empty text nodes.
 *
 * ```js
 * var node = new Node({type: 'text'});
 * node.isEmpty(); //=> true
 * node.val = 'foo';
 * node.isEmpty(); //=> false
 * ```
 * @param {Function} `fn` (optional) Filter function that is called on `node` and/or child nodes. `isEmpty` will return false immediately when the filter function returns false on any nodes.
 * @return {Boolean}
 * @api public
 */

Node.prototype.isEmpty = function(fn) {
  return utils.isEmpty(this, fn);
};

/**
 * Given node `foo` and node `bar`, push node `bar` onto `foo.nodes`, and
 * set `foo` as `bar.parent`.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * foo.push(bar);
 * ```
 * @param {Object} `node`
 * @return {Number} Returns the length of `node.nodes`
 * @api public
 */

Node.prototype.push = function(node) {
  assert(Node.isNode(node), 'expected node to be an instance of Node');
  define(node, 'parent', this);

  this.nodes = this.nodes || [];
  return this.nodes.push(node);
};

/**
 * Given node `foo` and node `bar`, unshift node `bar` onto `foo.nodes`, and
 * set `foo` as `bar.parent`.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * foo.unshift(bar);
 * ```
 * @param {Object} `node`
 * @return {Number} Returns the length of `node.nodes`
 * @api public
 */

Node.prototype.unshift = function(node) {
  assert(Node.isNode(node), 'expected node to be an instance of Node');
  define(node, 'parent', this);

  this.nodes = this.nodes || [];
  return this.nodes.unshift(node);
};

/**
 * Pop a node from `node.nodes`.
 *
 * ```js
 * var node = new Node({type: 'foo'});
 * node.push(new Node({type: 'a'}));
 * node.push(new Node({type: 'b'}));
 * node.push(new Node({type: 'c'}));
 * node.push(new Node({type: 'd'}));
 * console.log(node.nodes.length);
 * //=> 4
 * node.pop();
 * console.log(node.nodes.length);
 * //=> 3
 * ```
 * @return {Number} Returns the popped `node`
 * @api public
 */

Node.prototype.pop = function() {
  return this.nodes && this.nodes.pop();
};

/**
 * Shift a node from `node.nodes`.
 *
 * ```js
 * var node = new Node({type: 'foo'});
 * node.push(new Node({type: 'a'}));
 * node.push(new Node({type: 'b'}));
 * node.push(new Node({type: 'c'}));
 * node.push(new Node({type: 'd'}));
 * console.log(node.nodes.length);
 * //=> 4
 * node.shift();
 * console.log(node.nodes.length);
 * //=> 3
 * ```
 * @return {Object} Returns the shifted `node`
 * @api public
 */

Node.prototype.shift = function() {
  return this.nodes && this.nodes.shift();
};

/**
 * Remove `node` from `node.nodes`.
 *
 * ```js
 * node.remove(childNode);
 * ```
 * @param {Object} `node`
 * @return {Object} Returns the removed node.
 * @api public
 */

Node.prototype.remove = function(node) {
  assert(Node.isNode(node), 'expected node to be an instance of Node');
  this.nodes = this.nodes || [];
  var idx = node.index;
  if (idx !== -1) {
    node.index = -1;
    return this.nodes.splice(idx, 1);
  }
  return null;
};

/**
 * Get the first child node from `node.nodes` that matches the given `type`.
 * If `type` is a number, the child node at that index is returned.
 *
 * ```js
 * var child = node.find(1); //<= index of the node to get
 * var child = node.find('foo'); //<= node.type of a child node
 * var child = node.find(/^(foo|bar)$/); //<= regex to match node.type
 * var child = node.find(['foo', 'bar']); //<= array of node.type(s)
 * ```
 * @param {String} `type`
 * @return {Object} Returns a child node or undefined.
 * @api public
 */

Node.prototype.find = function(type) {
  return utils.findNode(this.nodes, type);
};

/**
 * Return true if the node is the given `type`.
 *
 * ```js
 * var node = new Node({type: 'bar'});
 * cosole.log(node.isType('foo'));          // false
 * cosole.log(node.isType(/^(foo|bar)$/));  // true
 * cosole.log(node.isType(['foo', 'bar'])); // true
 * ```
 * @param {String} `type`
 * @return {Boolean}
 * @api public
 */

Node.prototype.isType = function(type) {
  return utils.isType(this, type);
};

/**
 * Return true if the `node.nodes` has the given `type`.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * foo.push(bar);
 *
 * cosole.log(foo.hasType('qux'));          // false
 * cosole.log(foo.hasType(/^(qux|bar)$/));  // true
 * cosole.log(foo.hasType(['qux', 'bar'])); // true
 * ```
 * @param {String} `type`
 * @return {Boolean}
 * @api public
 */

Node.prototype.hasType = function(type) {
  return utils.hasType(this, type);
};

/**
 * Get the siblings array, or `null` if it doesn't exist.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * var baz = new Node({type: 'baz'});
 * foo.push(bar);
 * foo.push(baz);
 *
 * console.log(bar.siblings.length) // 2
 * console.log(baz.siblings.length) // 2
 * ```
 * @return {Array}
 * @api public
 */

Object.defineProperty(Node.prototype, 'siblings', {
  set: function() {
    throw new Error('node.siblings is a getter and cannot be defined');
  },
  get: function() {
    return this.parent ? this.parent.nodes : null;
  }
});

/**
 * Get the node's current index from `node.parent.nodes`.
 * This should always be correct, even when the parent adds nodes.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * var baz = new Node({type: 'baz'});
 * var qux = new Node({type: 'qux'});
 * foo.push(bar);
 * foo.push(baz);
 * foo.unshift(qux);
 *
 * console.log(bar.index) // 1
 * console.log(baz.index) // 2
 * console.log(qux.index) // 0
 * ```
 * @return {Number}
 * @api public
 */

Object.defineProperty(Node.prototype, 'index', {
  set: function(index) {
    define(this, 'idx', index);
  },
  get: function() {
    if (!Array.isArray(this.siblings)) {
      return -1;
    }
    var tok = this.idx !== -1 ? this.siblings[this.idx] : null;
    if (tok !== this) {
      this.idx = this.siblings.indexOf(this);
    }
    return this.idx;
  }
});

/**
 * Get the previous node from the siblings array or `null`.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * var baz = new Node({type: 'baz'});
 * foo.push(bar);
 * foo.push(baz);
 *
 * console.log(baz.prev.type) // 'bar'
 * ```
 * @return {Object}
 * @api public
 */

Object.defineProperty(Node.prototype, 'prev', {
  set: function() {
    throw new Error('node.prev is a getter and cannot be defined');
  },
  get: function() {
    if (Array.isArray(this.siblings)) {
      return this.siblings[this.index - 1] || this.parent.prev;
    }
    return null;
  }
});

/**
 * Get the siblings array, or `null` if it doesn't exist.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * var baz = new Node({type: 'baz'});
 * foo.push(bar);
 * foo.push(baz);
 *
 * console.log(bar.siblings.length) // 2
 * console.log(baz.siblings.length) // 2
 * ```
 * @return {Object}
 * @api public
 */

Object.defineProperty(Node.prototype, 'next', {
  set: function() {
    throw new Error('node.next is a getter and cannot be defined');
  },
  get: function() {
    if (Array.isArray(this.siblings)) {
      return this.siblings[this.index + 1] || this.parent.next;
    }
    return null;
  }
});

/**
 * Get the first node from `node.nodes`.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * var baz = new Node({type: 'baz'});
 * var qux = new Node({type: 'qux'});
 * foo.push(bar);
 * foo.push(baz);
 * foo.push(qux);
 *
 * console.log(foo.first.type) // 'bar'
 * ```
 * @return {Object} The first node, or undefiend
 * @api public
 */

Object.defineProperty(Node.prototype, 'first', {
  get: function() {
    return this.nodes ? this.nodes[0] : null;
  }
});

/**
 * Get the last node from `node.nodes`.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * var baz = new Node({type: 'baz'});
 * var qux = new Node({type: 'qux'});
 * foo.push(bar);
 * foo.push(baz);
 * foo.push(qux);
 *
 * console.log(foo.last.type) // 'qux'
 * ```
 * @return {Object} The last node, or undefiend
 * @api public
 */

Object.defineProperty(Node.prototype, 'last', {
  get: function() {
    return this.nodes ? utils.last(this.nodes) : null;
  }
});

/**
 * Get the last node from `node.nodes`.
 *
 * ```js
 * var foo = new Node({type: 'foo'});
 * var bar = new Node({type: 'bar'});
 * var baz = new Node({type: 'baz'});
 * var qux = new Node({type: 'qux'});
 * foo.push(bar);
 * foo.push(baz);
 * foo.push(qux);
 *
 * console.log(foo.last.type) // 'qux'
 * ```
 * @return {Object} The last node, or undefiend
 * @api public
 */

Object.defineProperty(Node.prototype, 'scope', {
  get: function() {
    if (this.isScope !== true) {
      return this.parent ? this.parent.scope : this;
    }
    return this;
  }
});

/**
 * Get own property names from Node prototype, but only the
 * first time `Node` is instantiated
 */

function lazyKeys() {
  if (!ownNames) {
    ownNames = Object.getOwnPropertyNames(Node.prototype);
  }
}

/**
 * Simplified assertion. Throws an error is `val` is falsey.
 */

function assert(val, message) {
  if (!val) throw new Error(message);
}

/**
 * Expose `Node`
 */

exports = module.exports = Node;


/***/ }),

/***/ "./node_modules/snapdragon-node/node_modules/define-property/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/snapdragon-node/node_modules/define-property/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/snapdragon-node/node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/snapdragon-node/node_modules/is-accessor-descriptor/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/snapdragon-node/node_modules/is-accessor-descriptor/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

// accessor descriptor properties
var accessor = {
  get: 'function',
  set: 'function',
  configurable: 'boolean',
  enumerable: 'boolean'
};

function isAccessorDescriptor(obj, prop) {
  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (has(obj, 'value') || has(obj, 'writable')) {
    return false;
  }

  if (!has(obj, 'get') || typeof obj.get !== 'function') {
    return false;
  }

  // tldr: it's valid to have "set" be undefined
  // "set" might be undefined if `Object.getOwnPropertyDescriptor`
  // was used to get the value, and only `get` was defined by the user
  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
    return false;
  }

  for (var key in obj) {
    if (!accessor.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === accessor[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

/**
 * Expose `isAccessorDescriptor`
 */

module.exports = isAccessorDescriptor;


/***/ }),

/***/ "./node_modules/snapdragon-node/node_modules/is-data-descriptor/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/snapdragon-node/node_modules/is-data-descriptor/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

module.exports = function isDataDescriptor(obj, prop) {
  // data descriptor properties
  var data = {
    configurable: 'boolean',
    enumerable: 'boolean',
    writable: 'boolean'
  };

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (!('value' in obj) && !('writable' in obj)) {
    return false;
  }

  for (var key in obj) {
    if (key === 'value') continue;

    if (!data.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === data[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
};


/***/ }),

/***/ "./node_modules/snapdragon-node/node_modules/is-descriptor/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/snapdragon-node/node_modules/is-descriptor/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
var isAccessor = __webpack_require__(/*! is-accessor-descriptor */ "./node_modules/snapdragon-node/node_modules/is-accessor-descriptor/index.js");
var isData = __webpack_require__(/*! is-data-descriptor */ "./node_modules/snapdragon-node/node_modules/is-data-descriptor/index.js");

module.exports = function isDescriptor(obj, key) {
  if (typeOf(obj) !== 'object') {
    return false;
  }
  if ('get' in obj) {
    return isAccessor(obj, key);
  }
  return isData(obj, key);
};


/***/ }),

/***/ "./node_modules/snapdragon-util/index.js":
/*!***********************************************!*\
  !*** ./node_modules/snapdragon-util/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/snapdragon-util/node_modules/kind-of/index.js");
var utils = module.exports;

/**
 * Returns true if the given value is a node.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var node = new Node({type: 'foo'});
 * console.log(utils.isNode(node)); //=> true
 * console.log(utils.isNode({})); //=> false
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @returns {Boolean}
 * @api public
 */

utils.isNode = function(node) {
  return typeOf(node) === 'object' && node.isNode === true;
};

/**
 * Emit an empty string for the given `node`.
 *
 * ```js
 * // do nothing for beginning-of-string
 * snapdragon.compiler.set('bos', utils.noop);
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @returns {undefined}
 * @api public
 */

utils.noop = function(node) {
  append(this, '', node);
};

/**
 * Appdend `node.val` to `compiler.output`, exactly as it was created
 * by the parser.
 *
 * ```js
 * snapdragon.compiler.set('text', utils.identity);
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @returns {undefined}
 * @api public
 */

utils.identity = function(node) {
  append(this, node.val, node);
};

/**
 * Previously named `.emit`, this method appends the given `val`
 * to `compiler.output` for the given node. Useful when you know
 * what value should be appended advance, regardless of the actual
 * value of `node.val`.
 *
 * ```js
 * snapdragon.compiler
 *   .set('i', function(node) {
 *     this.mapVisit(node);
 *   })
 *   .set('i.open', utils.append('<i>'))
 *   .set('i.close', utils.append('</i>'))
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @returns {Function} Returns a compiler middleware function.
 * @api public
 */

utils.append = function(val) {
  return function(node) {
    append(this, val, node);
  };
};

/**
 * Used in compiler middleware, this onverts an AST node into
 * an empty `text` node and deletes `node.nodes` if it exists.
 * The advantage of this method is that, as opposed to completely
 * removing the node, indices will not need to be re-calculated
 * in sibling nodes, and nothing is appended to the output.
 *
 * ```js
 * utils.toNoop(node);
 * // convert `node.nodes` to the given value instead of deleting it
 * utils.toNoop(node, []);
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {Array} `nodes` Optionally pass a new `nodes` value, to replace the existing `node.nodes` array.
 * @api public
 */

utils.toNoop = function(node, nodes) {
  if (nodes) {
    node.nodes = nodes;
  } else {
    delete node.nodes;
    node.type = 'text';
    node.val = '';
  }
};

/**
 * Visit `node` with the given `fn`. The built-in `.visit` method in snapdragon
 * automatically calls registered compilers, this allows you to pass a visitor
 * function.
 *
 * ```js
 * snapdragon.compiler.set('i', function(node) {
 *   utils.visit(node, function(childNode) {
 *     // do stuff with "childNode"
 *     return childNode;
 *   });
 * });
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {Function} `fn`
 * @return {Object} returns the node after recursively visiting all child nodes.
 * @api public
 */

utils.visit = function(node, fn) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isFunction(fn), 'expected a visitor function');
  fn(node);
  return node.nodes ? utils.mapVisit(node, fn) : node;
};

/**
 * Map [visit](#visit) the given `fn` over `node.nodes`. This is called by
 * [visit](#visit), use this method if you do not want `fn` to be called on
 * the first node.
 *
 * ```js
 * snapdragon.compiler.set('i', function(node) {
 *   utils.mapVisit(node, function(childNode) {
 *     // do stuff with "childNode"
 *     return childNode;
 *   });
 * });
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {Object} `options`
 * @param {Function} `fn`
 * @return {Object} returns the node
 * @api public
 */

utils.mapVisit = function(node, fn) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isArray(node.nodes), 'expected node.nodes to be an array');
  assert(isFunction(fn), 'expected a visitor function');

  for (var i = 0; i < node.nodes.length; i++) {
    utils.visit(node.nodes[i], fn);
  }
  return node;
};

/**
 * Unshift an `*.open` node onto `node.nodes`.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * snapdragon.parser.set('brace', function(node) {
 *   var match = this.match(/^{/);
 *   if (match) {
 *     var parent = new Node({type: 'brace'});
 *     utils.addOpen(parent, Node);
 *     console.log(parent.nodes[0]):
 *     // { type: 'brace.open', val: '' };
 *
 *     // push the parent "brace" node onto the stack
 *     this.push(parent);
 *
 *     // return the parent node, so it's also added to the AST
 *     return brace;
 *   }
 * });
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {Function} `Node` (required) Node constructor function from [snapdragon-node][].
 * @param {Function} `filter` Optionaly specify a filter function to exclude the node.
 * @return {Object} Returns the created opening node.
 * @api public
 */

utils.addOpen = function(node, Node, val, filter) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isFunction(Node), 'expected Node to be a constructor function');

  if (typeof val === 'function') {
    filter = val;
    val = '';
  }

  if (typeof filter === 'function' && !filter(node)) return;
  var open = new Node({ type: node.type + '.open', val: val});
  var unshift = node.unshift || node.unshiftNode;
  if (typeof unshift === 'function') {
    unshift.call(node, open);
  } else {
    utils.unshiftNode(node, open);
  }
  return open;
};

/**
 * Push a `*.close` node onto `node.nodes`.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * snapdragon.parser.set('brace', function(node) {
 *   var match = this.match(/^}/);
 *   if (match) {
 *     var parent = this.parent();
 *     if (parent.type !== 'brace') {
 *       throw new Error('missing opening: ' + '}');
 *     }
 *
 *     utils.addClose(parent, Node);
 *     console.log(parent.nodes[parent.nodes.length - 1]):
 *     // { type: 'brace.close', val: '' };
 *
 *     // no need to return a node, since the parent
 *     // was already added to the AST
 *     return;
 *   }
 * });
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {Function} `Node` (required) Node constructor function from [snapdragon-node][].
 * @param {Function} `filter` Optionaly specify a filter function to exclude the node.
 * @return {Object} Returns the created closing node.
 * @api public
 */

utils.addClose = function(node, Node, val, filter) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isFunction(Node), 'expected Node to be a constructor function');

  if (typeof val === 'function') {
    filter = val;
    val = '';
  }

  if (typeof filter === 'function' && !filter(node)) return;
  var close = new Node({ type: node.type + '.close', val: val});
  var push = node.push || node.pushNode;
  if (typeof push === 'function') {
    push.call(node, close);
  } else {
    utils.pushNode(node, close);
  }
  return close;
};

/**
 * Wraps the given `node` with `*.open` and `*.close` nodes.
 *
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {Function} `Node` (required) Node constructor function from [snapdragon-node][].
 * @param {Function} `filter` Optionaly specify a filter function to exclude the node.
 * @return {Object} Returns the node
 * @api public
 */

utils.wrapNodes = function(node, Node, filter) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isFunction(Node), 'expected Node to be a constructor function');

  utils.addOpen(node, Node, filter);
  utils.addClose(node, Node, filter);
  return node;
};

/**
 * Push the given `node` onto `parent.nodes`, and set `parent` as `node.parent.
 *
 * ```js
 * var parent = new Node({type: 'foo'});
 * var node = new Node({type: 'bar'});
 * utils.pushNode(parent, node);
 * console.log(parent.nodes[0].type) // 'bar'
 * console.log(node.parent.type) // 'foo'
 * ```
 * @param {Object} `parent`
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Object} Returns the child node
 * @api public
 */

utils.pushNode = function(parent, node) {
  assert(utils.isNode(parent), 'expected parent node to be an instance of Node');
  assert(utils.isNode(node), 'expected node to be an instance of Node');

  node.define('parent', parent);
  parent.nodes = parent.nodes || [];
  parent.nodes.push(node);
  return node;
};

/**
 * Unshift `node` onto `parent.nodes`, and set `parent` as `node.parent.
 *
 * ```js
 * var parent = new Node({type: 'foo'});
 * var node = new Node({type: 'bar'});
 * utils.unshiftNode(parent, node);
 * console.log(parent.nodes[0].type) // 'bar'
 * console.log(node.parent.type) // 'foo'
 * ```
 * @param {Object} `parent`
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {undefined}
 * @api public
 */

utils.unshiftNode = function(parent, node) {
  assert(utils.isNode(parent), 'expected parent node to be an instance of Node');
  assert(utils.isNode(node), 'expected node to be an instance of Node');

  node.define('parent', parent);
  parent.nodes = parent.nodes || [];
  parent.nodes.unshift(node);
};

/**
 * Pop the last `node` off of `parent.nodes`. The advantage of
 * using this method is that it checks for `node.nodes` and works
 * with any version of `snapdragon-node`.
 *
 * ```js
 * var parent = new Node({type: 'foo'});
 * utils.pushNode(parent, new Node({type: 'foo'}));
 * utils.pushNode(parent, new Node({type: 'bar'}));
 * utils.pushNode(parent, new Node({type: 'baz'}));
 * console.log(parent.nodes.length); //=> 3
 * utils.popNode(parent);
 * console.log(parent.nodes.length); //=> 2
 * ```
 * @param {Object} `parent`
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Number|Undefined} Returns the length of `node.nodes` or undefined.
 * @api public
 */

utils.popNode = function(node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  if (typeof node.pop === 'function') {
    return node.pop();
  }
  return node.nodes && node.nodes.pop();
};

/**
 * Shift the first `node` off of `parent.nodes`. The advantage of
 * using this method is that it checks for `node.nodes` and works
 * with any version of `snapdragon-node`.
 *
 * ```js
 * var parent = new Node({type: 'foo'});
 * utils.pushNode(parent, new Node({type: 'foo'}));
 * utils.pushNode(parent, new Node({type: 'bar'}));
 * utils.pushNode(parent, new Node({type: 'baz'}));
 * console.log(parent.nodes.length); //=> 3
 * utils.shiftNode(parent);
 * console.log(parent.nodes.length); //=> 2
 * ```
 * @param {Object} `parent`
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Number|Undefined} Returns the length of `node.nodes` or undefined.
 * @api public
 */

utils.shiftNode = function(node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  if (typeof node.shift === 'function') {
    return node.shift();
  }
  return node.nodes && node.nodes.shift();
};

/**
 * Remove the specified `node` from `parent.nodes`.
 *
 * ```js
 * var parent = new Node({type: 'abc'});
 * var foo = new Node({type: 'foo'});
 * utils.pushNode(parent, foo);
 * utils.pushNode(parent, new Node({type: 'bar'}));
 * utils.pushNode(parent, new Node({type: 'baz'}));
 * console.log(parent.nodes.length); //=> 3
 * utils.removeNode(parent, foo);
 * console.log(parent.nodes.length); //=> 2
 * ```
 * @param {Object} `parent`
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Object|undefined} Returns the removed node, if successful, or undefined if it does not exist on `parent.nodes`.
 * @api public
 */

utils.removeNode = function(parent, node) {
  assert(utils.isNode(parent), 'expected parent.node to be an instance of Node');
  assert(utils.isNode(node), 'expected node to be an instance of Node');

  if (!parent.nodes) {
    return null;
  }

  if (typeof parent.remove === 'function') {
    return parent.remove(node);
  }

  var idx = parent.nodes.indexOf(node);
  if (idx !== -1) {
    return parent.nodes.splice(idx, 1);
  }
};

/**
 * Returns true if `node.type` matches the given `type`. Throws a
 * `TypeError` if `node` is not an instance of `Node`.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var node = new Node({type: 'foo'});
 * console.log(utils.isType(node, 'foo')); // false
 * console.log(utils.isType(node, 'bar')); // true
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {String} `type`
 * @return {Boolean}
 * @api public
 */

utils.isType = function(node, type) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  switch (typeOf(type)) {
    case 'array':
      var types = type.slice();
      for (var i = 0; i < types.length; i++) {
        if (utils.isType(node, types[i])) {
          return true;
        }
      }
      return false;
    case 'string':
      return node.type === type;
    case 'regexp':
      return type.test(node.type);
    default: {
      throw new TypeError('expected "type" to be an array, string or regexp');
    }
  }
};

/**
 * Returns true if the given `node` has the given `type` in `node.nodes`.
 * Throws a `TypeError` if `node` is not an instance of `Node`.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var node = new Node({
 *   type: 'foo',
 *   nodes: [
 *     new Node({type: 'bar'}),
 *     new Node({type: 'baz'})
 *   ]
 * });
 * console.log(utils.hasType(node, 'xyz')); // false
 * console.log(utils.hasType(node, 'baz')); // true
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {String} `type`
 * @return {Boolean}
 * @api public
 */

utils.hasType = function(node, type) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  if (!Array.isArray(node.nodes)) return false;
  for (var i = 0; i < node.nodes.length; i++) {
    if (utils.isType(node.nodes[i], type)) {
      return true;
    }
  }
  return false;
};

/**
 * Returns the first node from `node.nodes` of the given `type`
 *
 * ```js
 * var node = new Node({
 *   type: 'foo',
 *   nodes: [
 *     new Node({type: 'text', val: 'abc'}),
 *     new Node({type: 'text', val: 'xyz'})
 *   ]
 * });
 *
 * var textNode = utils.firstOfType(node.nodes, 'text');
 * console.log(textNode.val);
 * //=> 'abc'
 * ```
 * @param {Array} `nodes`
 * @param {String} `type`
 * @return {Object|undefined} Returns the first matching node or undefined.
 * @api public
 */

utils.firstOfType = function(nodes, type) {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (utils.isType(node, type)) {
      return node;
    }
  }
};

/**
 * Returns the node at the specified index, or the first node of the
 * given `type` from `node.nodes`.
 *
 * ```js
 * var node = new Node({
 *   type: 'foo',
 *   nodes: [
 *     new Node({type: 'text', val: 'abc'}),
 *     new Node({type: 'text', val: 'xyz'})
 *   ]
 * });
 *
 * var nodeOne = utils.findNode(node.nodes, 'text');
 * console.log(nodeOne.val);
 * //=> 'abc'
 *
 * var nodeTwo = utils.findNode(node.nodes, 1);
 * console.log(nodeTwo.val);
 * //=> 'xyz'
 * ```
 *
 * @param {Array} `nodes`
 * @param {String|Number} `type` Node type or index.
 * @return {Object} Returns a node or undefined.
 * @api public
 */

utils.findNode = function(nodes, type) {
  if (!Array.isArray(nodes)) {
    return null;
  }
  if (typeof type === 'number') {
    return nodes[type];
  }
  return utils.firstOfType(nodes, type);
};

/**
 * Returns true if the given node is an "*.open" node.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var brace = new Node({type: 'brace'});
 * var open = new Node({type: 'brace.open'});
 * var close = new Node({type: 'brace.close'});
 *
 * console.log(utils.isOpen(brace)); // false
 * console.log(utils.isOpen(open)); // true
 * console.log(utils.isOpen(close)); // false
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Boolean}
 * @api public
 */

utils.isOpen = function(node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  return node.type.slice(-5) === '.open';
};

/**
 * Returns true if the given node is a "*.close" node.
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var brace = new Node({type: 'brace'});
 * var open = new Node({type: 'brace.open'});
 * var close = new Node({type: 'brace.close'});
 *
 * console.log(utils.isClose(brace)); // false
 * console.log(utils.isClose(open)); // false
 * console.log(utils.isClose(close)); // true
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Boolean}
 * @api public
 */

utils.isClose = function(node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  return node.type.slice(-6) === '.close';
};

/**
 * Returns true if `node.nodes` **has** an `.open` node
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var brace = new Node({
 *   type: 'brace',
 *   nodes: []
 * });
 *
 * var open = new Node({type: 'brace.open'});
 * console.log(utils.hasOpen(brace)); // false
 *
 * brace.pushNode(open);
 * console.log(utils.hasOpen(brace)); // true
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Boolean}
 * @api public
 */

utils.hasOpen = function(node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  var first = node.first || node.nodes ? node.nodes[0] : null;
  if (utils.isNode(first)) {
    return first.type === node.type + '.open';
  }
  return false;
};

/**
 * Returns true if `node.nodes` **has** a `.close` node
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var brace = new Node({
 *   type: 'brace',
 *   nodes: []
 * });
 *
 * var close = new Node({type: 'brace.close'});
 * console.log(utils.hasClose(brace)); // false
 *
 * brace.pushNode(close);
 * console.log(utils.hasClose(brace)); // true
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Boolean}
 * @api public
 */

utils.hasClose = function(node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  var last = node.last || node.nodes ? node.nodes[node.nodes.length - 1] : null;
  if (utils.isNode(last)) {
    return last.type === node.type + '.close';
  }
  return false;
};

/**
 * Returns true if `node.nodes` has both `.open` and `.close` nodes
 *
 * ```js
 * var Node = require('snapdragon-node');
 * var brace = new Node({
 *   type: 'brace',
 *   nodes: []
 * });
 *
 * var open = new Node({type: 'brace.open'});
 * var close = new Node({type: 'brace.close'});
 * console.log(utils.hasOpen(brace)); // false
 * console.log(utils.hasClose(brace)); // false
 *
 * brace.pushNode(open);
 * brace.pushNode(close);
 * console.log(utils.hasOpen(brace)); // true
 * console.log(utils.hasClose(brace)); // true
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Boolean}
 * @api public
 */

utils.hasOpenAndClose = function(node) {
  return utils.hasOpen(node) && utils.hasClose(node);
};

/**
 * Push the given `node` onto the `state.inside` array for the
 * given type. This array is used as a specialized "stack" for
 * only the given `node.type`.
 *
 * ```js
 * var state = { inside: {}};
 * var node = new Node({type: 'brace'});
 * utils.addType(state, node);
 * console.log(state.inside);
 * //=> { brace: [{type: 'brace'}] }
 * ```
 * @param {Object} `state` The `compiler.state` object or custom state object.
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Array} Returns the `state.inside` stack for the given type.
 * @api public
 */

utils.addType = function(state, node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isObject(state), 'expected state to be an object');

  var type = node.parent
    ? node.parent.type
    : node.type.replace(/\.open$/, '');

  if (!state.hasOwnProperty('inside')) {
    state.inside = {};
  }
  if (!state.inside.hasOwnProperty(type)) {
    state.inside[type] = [];
  }

  var arr = state.inside[type];
  arr.push(node);
  return arr;
};

/**
 * Remove the given `node` from the `state.inside` array for the
 * given type. This array is used as a specialized "stack" for
 * only the given `node.type`.
 *
 * ```js
 * var state = { inside: {}};
 * var node = new Node({type: 'brace'});
 * utils.addType(state, node);
 * console.log(state.inside);
 * //=> { brace: [{type: 'brace'}] }
 * utils.removeType(state, node);
 * //=> { brace: [] }
 * ```
 * @param {Object} `state` The `compiler.state` object or custom state object.
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @return {Array} Returns the `state.inside` stack for the given type.
 * @api public
 */

utils.removeType = function(state, node) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isObject(state), 'expected state to be an object');

  var type = node.parent
    ? node.parent.type
    : node.type.replace(/\.close$/, '');

  if (state.inside.hasOwnProperty(type)) {
    return state.inside[type].pop();
  }
};

/**
 * Returns true if `node.val` is an empty string, or `node.nodes` does
 * not contain any non-empty text nodes.
 *
 * ```js
 * var node = new Node({type: 'text'});
 * utils.isEmpty(node); //=> true
 * node.val = 'foo';
 * utils.isEmpty(node); //=> false
 * ```
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {Function} `fn`
 * @return {Boolean}
 * @api public
 */

utils.isEmpty = function(node, fn) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');

  if (!Array.isArray(node.nodes)) {
    if (node.type !== 'text') {
      return true;
    }
    if (typeof fn === 'function') {
      return fn(node, node.parent);
    }
    return !utils.trim(node.val);
  }

  for (var i = 0; i < node.nodes.length; i++) {
    var child = node.nodes[i];
    if (utils.isOpen(child) || utils.isClose(child)) {
      continue;
    }
    if (!utils.isEmpty(child, fn)) {
      return false;
    }
  }

  return true;
};

/**
 * Returns true if the `state.inside` stack for the given type exists
 * and has one or more nodes on it.
 *
 * ```js
 * var state = { inside: {}};
 * var node = new Node({type: 'brace'});
 * console.log(utils.isInsideType(state, 'brace')); //=> false
 * utils.addType(state, node);
 * console.log(utils.isInsideType(state, 'brace')); //=> true
 * utils.removeType(state, node);
 * console.log(utils.isInsideType(state, 'brace')); //=> false
 * ```
 * @param {Object} `state`
 * @param {String} `type`
 * @return {Boolean}
 * @api public
 */

utils.isInsideType = function(state, type) {
  assert(isObject(state), 'expected state to be an object');
  assert(isString(type), 'expected type to be a string');

  if (!state.hasOwnProperty('inside')) {
    return false;
  }

  if (!state.inside.hasOwnProperty(type)) {
    return false;
  }

  return state.inside[type].length > 0;
};

/**
 * Returns true if `node` is either a child or grand-child of the given `type`,
 * or `state.inside[type]` is a non-empty array.
 *
 * ```js
 * var state = { inside: {}};
 * var node = new Node({type: 'brace'});
 * var open = new Node({type: 'brace.open'});
 * console.log(utils.isInside(state, open, 'brace')); //=> false
 * utils.pushNode(node, open);
 * console.log(utils.isInside(state, open, 'brace')); //=> true
 * ```
 * @param {Object} `state` Either the `compiler.state` object, if it exists, or a user-supplied state object.
 * @param {Object} `node` Instance of [snapdragon-node][]
 * @param {String} `type` The `node.type` to check for.
 * @return {Boolean}
 * @api public
 */

utils.isInside = function(state, node, type) {
  assert(utils.isNode(node), 'expected node to be an instance of Node');
  assert(isObject(state), 'expected state to be an object');

  if (Array.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      if (utils.isInside(state, node, type[i])) {
        return true;
      }
    }
    return false;
  }

  var parent = node.parent;
  if (typeof type === 'string') {
    return (parent && parent.type === type) || utils.isInsideType(state, type);
  }

  if (typeOf(type) === 'regexp') {
    if (parent && parent.type && type.test(parent.type)) {
      return true;
    }

    var keys = Object.keys(state.inside);
    var len = keys.length;
    var idx = -1;
    while (++idx < len) {
      var key = keys[idx];
      var val = state.inside[key];

      if (Array.isArray(val) && val.length !== 0 && type.test(key)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Get the last `n` element from the given `array`. Used for getting
 * a node from `node.nodes.`
 *
 * @param {Array} `array`
 * @param {Number} `n`
 * @return {undefined}
 * @api public
 */

utils.last = function(arr, n) {
  return arr[arr.length - (n || 1)];
};

/**
 * Cast the given `val` to an array.
 *
 * ```js
 * console.log(utils.arrayify(''));
 * //=> []
 * console.log(utils.arrayify('foo'));
 * //=> ['foo']
 * console.log(utils.arrayify(['foo']));
 * //=> ['foo']
 * ```
 * @param {any} `val`
 * @return {Array}
 * @api public
 */

utils.arrayify = function(val) {
  if (typeof val === 'string' && val !== '') {
    return [val];
  }
  if (!Array.isArray(val)) {
    return [];
  }
  return val;
};

/**
 * Convert the given `val` to a string by joining with `,`. Useful
 * for creating a cheerio/CSS/DOM-style selector from a list of strings.
 *
 * @param {any} `val`
 * @return {Array}
 * @api public
 */

utils.stringify = function(val) {
  return utils.arrayify(val).join(',');
};

/**
 * Ensure that the given value is a string and call `.trim()` on it,
 * or return an empty string.
 *
 * @param {String} `str`
 * @return {String}
 * @api public
 */

utils.trim = function(str) {
  return typeof str === 'string' ? str.trim() : '';
};

/**
 * Return true if val is an object
 */

function isObject(val) {
  return typeOf(val) === 'object';
}

/**
 * Return true if val is a string
 */

function isString(val) {
  return typeof val === 'string';
}

/**
 * Return true if val is a function
 */

function isFunction(val) {
  return typeof val === 'function';
}

/**
 * Return true if val is an array
 */

function isArray(val) {
  return Array.isArray(val);
}

/**
 * Shim to ensure the `.append` methods work with any version of snapdragon
 */

function append(compiler, val, node) {
  if (typeof compiler.append !== 'function') {
    return compiler.emit(val, node);
  }
  return compiler.append(val, node);
}

/**
 * Simplified assertion. Throws an error is `val` is falsey.
 */

function assert(val, message) {
  if (!val) throw new Error(message);
}


/***/ }),

/***/ "./node_modules/snapdragon-util/node_modules/kind-of/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/snapdragon-util/node_modules/kind-of/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),

/***/ "./node_modules/snapdragon/index.js":
/*!******************************************!*\
  !*** ./node_modules/snapdragon/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(/*! base */ "./node_modules/base/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/snapdragon/node_modules/define-property/index.js");
var Compiler = __webpack_require__(/*! ./lib/compiler */ "./node_modules/snapdragon/lib/compiler.js");
var Parser = __webpack_require__(/*! ./lib/parser */ "./node_modules/snapdragon/lib/parser.js");
var utils = __webpack_require__(/*! ./lib/utils */ "./node_modules/snapdragon/lib/utils.js");
var regexCache = {};
var cache = {};

/**
 * Create a new instance of `Snapdragon` with the given `options`.
 *
 * ```js
 * var snapdragon = new Snapdragon();
 * ```
 *
 * @param {Object} `options`
 * @api public
 */

function Snapdragon(options) {
  Base.call(this, null, options);
  this.options = utils.extend({source: 'string'}, this.options);
  this.compiler = new Compiler(this.options);
  this.parser = new Parser(this.options);

  Object.defineProperty(this, 'compilers', {
    get: function() {
      return this.compiler.compilers;
    }
  });

  Object.defineProperty(this, 'parsers', {
    get: function() {
      return this.parser.parsers;
    }
  });

  Object.defineProperty(this, 'regex', {
    get: function() {
      return this.parser.regex;
    }
  });
}

/**
 * Inherit Base
 */

Base.extend(Snapdragon);

/**
 * Add a parser to `snapdragon.parsers` for capturing the given `type` using
 * the specified regex or parser function. A function is useful if you need
 * to customize how the token is created and/or have access to the parser
 * instance to check options, etc.
 *
 * ```js
 * snapdragon
 *   .capture('slash', /^\//)
 *   .capture('dot', function() {
 *     var pos = this.position();
 *     var m = this.match(/^\./);
 *     if (!m) return;
 *     return pos({
 *       type: 'dot',
 *       val: m[0]
 *     });
 *   });
 * ```
 * @param {String} `type`
 * @param {RegExp|Function} `regex`
 * @return {Object} Returns the parser instance for chaining
 * @api public
 */

Snapdragon.prototype.capture = function() {
  return this.parser.capture.apply(this.parser, arguments);
};

/**
 * Register a plugin `fn`.
 *
 * ```js
 * var snapdragon = new Snapdgragon([options]);
 * snapdragon.use(function() {
 *   console.log(this);          //<= snapdragon instance
 *   console.log(this.parser);   //<= parser instance
 *   console.log(this.compiler); //<= compiler instance
 * });
 * ```
 * @param {Object} `fn`
 * @api public
 */

Snapdragon.prototype.use = function(fn) {
  fn.call(this, this);
  return this;
};

/**
 * Parse the given `str`.
 *
 * ```js
 * var snapdragon = new Snapdgragon([options]);
 * // register parsers
 * snapdragon.parser.use(function() {});
 *
 * // parse
 * var ast = snapdragon.parse('foo/bar');
 * console.log(ast);
 * ```
 * @param {String} `str`
 * @param {Object} `options` Set `options.sourcemap` to true to enable source maps.
 * @return {Object} Returns an AST.
 * @api public
 */

Snapdragon.prototype.parse = function(str, options) {
  this.options = utils.extend({}, this.options, options);
  var parsed = this.parser.parse(str, this.options);

  // add non-enumerable parser reference
  define(parsed, 'parser', this.parser);
  return parsed;
};

/**
 * Compile the given `AST`.
 *
 * ```js
 * var snapdragon = new Snapdgragon([options]);
 * // register plugins
 * snapdragon.use(function() {});
 * // register parser plugins
 * snapdragon.parser.use(function() {});
 * // register compiler plugins
 * snapdragon.compiler.use(function() {});
 *
 * // parse
 * var ast = snapdragon.parse('foo/bar');
 *
 * // compile
 * var res = snapdragon.compile(ast);
 * console.log(res.output);
 * ```
 * @param {Object} `ast`
 * @param {Object} `options`
 * @return {Object} Returns an object with an `output` property with the rendered string.
 * @api public
 */

Snapdragon.prototype.compile = function(ast, options) {
  this.options = utils.extend({}, this.options, options);
  var compiled = this.compiler.compile(ast, this.options);

  // add non-enumerable compiler reference
  define(compiled, 'compiler', this.compiler);
  return compiled;
};

/**
 * Expose `Snapdragon`
 */

module.exports = Snapdragon;

/**
 * Expose `Parser` and `Compiler`
 */

module.exports.Compiler = Compiler;
module.exports.Parser = Parser;


/***/ }),

/***/ "./node_modules/snapdragon/lib/compiler.js":
/*!*************************************************!*\
  !*** ./node_modules/snapdragon/lib/compiler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

var use = __webpack_require__(/*! use */ "./node_modules/use/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/snapdragon/node_modules/define-property/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/snapdragon/node_modules/debug/src/browser.js")('snapdragon:compiler');
var utils = __webpack_require__(/*! ./utils */ "./node_modules/snapdragon/lib/utils.js");

/**
 * Create a new `Compiler` with the given `options`.
 * @param {Object} `options`
 */

function Compiler(options, state) {
  debug('initializing', __filename);
  this.options = utils.extend({source: 'string'}, options);
  this.state = state || {};
  this.compilers = {};
  this.output = '';
  this.set('eos', function(node) {
    return this.emit(node.val, node);
  });
  this.set('noop', function(node) {
    return this.emit(node.val, node);
  });
  this.set('bos', function(node) {
    return this.emit(node.val, node);
  });
  use(this);
}

/**
 * Prototype methods
 */

Compiler.prototype = {

  /**
   * Throw an error message with details including the cursor position.
   * @param {String} `msg` Message to use in the Error.
   */

  error: function(msg, node) {
    var pos = node.position || {start: {column: 0}};
    var message = this.options.source + ' column:' + pos.start.column + ': ' + msg;

    var err = new Error(message);
    err.reason = msg;
    err.column = pos.start.column;
    err.source = this.pattern;

    if (this.options.silent) {
      this.errors.push(err);
    } else {
      throw err;
    }
  },

  /**
   * Define a non-enumberable property on the `Compiler` instance.
   *
   * ```js
   * compiler.define('foo', 'bar');
   * ```
   * @name .define
   * @param {String} `key` propery name
   * @param {any} `val` property value
   * @return {Object} Returns the Compiler instance for chaining.
   * @api public
   */

  define: function(key, val) {
    define(this, key, val);
    return this;
  },

  /**
   * Emit `node.val`
   */

  emit: function(str, node) {
    this.output += str;
    return str;
  },

  /**
   * Add a compiler `fn` with the given `name`
   */

  set: function(name, fn) {
    this.compilers[name] = fn;
    return this;
  },

  /**
   * Get compiler `name`.
   */

  get: function(name) {
    return this.compilers[name];
  },

  /**
   * Get the previous AST node.
   */

  prev: function(n) {
    return this.ast.nodes[this.idx - (n || 1)] || { type: 'bos', val: '' };
  },

  /**
   * Get the next AST node.
   */

  next: function(n) {
    return this.ast.nodes[this.idx + (n || 1)] || { type: 'eos', val: '' };
  },

  /**
   * Visit `node`.
   */

  visit: function(node, nodes, i) {
    var fn = this.compilers[node.type];
    this.idx = i;

    if (typeof fn !== 'function') {
      throw this.error('compiler "' + node.type + '" is not registered', node);
    }
    return fn.call(this, node, nodes, i);
  },

  /**
   * Map visit over array of `nodes`.
   */

  mapVisit: function(nodes) {
    if (!Array.isArray(nodes)) {
      throw new TypeError('expected an array');
    }
    var len = nodes.length;
    var idx = -1;
    while (++idx < len) {
      this.visit(nodes[idx], nodes, idx);
    }
    return this;
  },

  /**
   * Compile `ast`.
   */

  compile: function(ast, options) {
    var opts = utils.extend({}, this.options, options);
    this.ast = ast;
    this.parsingErrors = this.ast.errors;
    this.output = '';

    // source map support
    if (opts.sourcemap) {
      var sourcemaps = __webpack_require__(/*! ./source-maps */ "./node_modules/snapdragon/lib/source-maps.js");
      sourcemaps(this);
      this.mapVisit(this.ast.nodes);
      this.applySourceMaps();
      this.map = opts.sourcemap === 'generator' ? this.map : this.map.toJSON();
      return this;
    }

    this.mapVisit(this.ast.nodes);
    return this;
  }
};

/**
 * Expose `Compiler`
 */

module.exports = Compiler;

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./node_modules/snapdragon/lib/parser.js":
/*!***********************************************!*\
  !*** ./node_modules/snapdragon/lib/parser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

var use = __webpack_require__(/*! use */ "./node_modules/use/index.js");
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var Cache = __webpack_require__(/*! map-cache */ "./node_modules/map-cache/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/snapdragon/node_modules/define-property/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/snapdragon/node_modules/debug/src/browser.js")('snapdragon:parser');
var Position = __webpack_require__(/*! ./position */ "./node_modules/snapdragon/lib/position.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/snapdragon/lib/utils.js");

/**
 * Create a new `Parser` with the given `input` and `options`.
 * @param {String} `input`
 * @param {Object} `options`
 * @api public
 */

function Parser(options) {
  debug('initializing', __filename);
  this.options = utils.extend({source: 'string'}, options);
  this.init(this.options);
  use(this);
}

/**
 * Prototype methods
 */

Parser.prototype = {
  constructor: Parser,

  init: function(options) {
    this.orig = '';
    this.input = '';
    this.parsed = '';

    this.column = 1;
    this.line = 1;

    this.regex = new Cache();
    this.errors = this.errors || [];
    this.parsers = this.parsers || {};
    this.types = this.types || [];
    this.sets = this.sets || {};
    this.fns = this.fns || [];
    this.currentType = 'root';

    var pos = this.position();
    this.bos = pos({type: 'bos', val: ''});

    this.ast = {
      type: 'root',
      errors: this.errors,
      nodes: [this.bos]
    };

    define(this.bos, 'parent', this.ast);
    this.nodes = [this.ast];

    this.count = 0;
    this.setCount = 0;
    this.stack = [];
  },

  /**
   * Throw a formatted error with the cursor column and `msg`.
   * @param {String} `msg` Message to use in the Error.
   */

  error: function(msg, node) {
    var pos = node.position || {start: {column: 0, line: 0}};
    var line = pos.start.line;
    var column = pos.start.column;
    var source = this.options.source;

    var message = source + ' <line:' + line + ' column:' + column + '>: ' + msg;
    var err = new Error(message);
    err.source = source;
    err.reason = msg;
    err.pos = pos;

    if (this.options.silent) {
      this.errors.push(err);
    } else {
      throw err;
    }
  },

  /**
   * Define a non-enumberable property on the `Parser` instance.
   *
   * ```js
   * parser.define('foo', 'bar');
   * ```
   * @name .define
   * @param {String} `key` propery name
   * @param {any} `val` property value
   * @return {Object} Returns the Parser instance for chaining.
   * @api public
   */

  define: function(key, val) {
    define(this, key, val);
    return this;
  },

  /**
   * Mark position and patch `node.position`.
   */

  position: function() {
    var start = { line: this.line, column: this.column };
    var self = this;

    return function(node) {
      define(node, 'position', new Position(start, self));
      return node;
    };
  },

  /**
   * Set parser `name` with the given `fn`
   * @param {String} `name`
   * @param {Function} `fn`
   * @api public
   */

  set: function(type, fn) {
    if (this.types.indexOf(type) === -1) {
      this.types.push(type);
    }
    this.parsers[type] = fn.bind(this);
    return this;
  },

  /**
   * Get parser `name`
   * @param {String} `name`
   * @api public
   */

  get: function(name) {
    return this.parsers[name];
  },

  /**
   * Push a `token` onto the `type` stack.
   *
   * @param {String} `type`
   * @return {Object} `token`
   * @api public
   */

  push: function(type, token) {
    this.sets[type] = this.sets[type] || [];
    this.count++;
    this.stack.push(token);
    return this.sets[type].push(token);
  },

  /**
   * Pop a token off of the `type` stack
   * @param {String} `type`
   * @returns {Object} Returns a token
   * @api public
   */

  pop: function(type) {
    this.sets[type] = this.sets[type] || [];
    this.count--;
    this.stack.pop();
    return this.sets[type].pop();
  },

  /**
   * Return true if inside a `stack` node. Types are `braces`, `parens` or `brackets`.
   *
   * @param {String} `type`
   * @return {Boolean}
   * @api public
   */

  isInside: function(type) {
    this.sets[type] = this.sets[type] || [];
    return this.sets[type].length > 0;
  },

  /**
   * Return true if `node` is the given `type`.
   *
   * ```js
   * parser.isType(node, 'brace');
   * ```
   * @param {Object} `node`
   * @param {String} `type`
   * @return {Boolean}
   * @api public
   */

  isType: function(node, type) {
    return node && node.type === type;
  },

  /**
   * Get the previous AST node
   * @return {Object}
   */

  prev: function(n) {
    return this.stack.length > 0
      ? utils.last(this.stack, n)
      : utils.last(this.nodes, n);
  },

  /**
   * Update line and column based on `str`.
   */

  consume: function(len) {
    this.input = this.input.substr(len);
  },

  /**
   * Update column based on `str`.
   */

  updatePosition: function(str, len) {
    var lines = str.match(/\n/g);
    if (lines) this.line += lines.length;
    var i = str.lastIndexOf('\n');
    this.column = ~i ? len - i : this.column + len;
    this.parsed += str;
    this.consume(len);
  },

  /**
   * Match `regex`, return captures, and update the cursor position by `match[0]` length.
   * @param {RegExp} `regex`
   * @return {Object}
   */

  match: function(regex) {
    var m = regex.exec(this.input);
    if (m) {
      this.updatePosition(m[0], m[0].length);
      return m;
    }
  },

  /**
   * Capture `type` with the given regex.
   * @param {String} `type`
   * @param {RegExp} `regex`
   * @return {Function}
   */

  capture: function(type, regex) {
    if (typeof regex === 'function') {
      return this.set.apply(this, arguments);
    }

    this.regex.set(type, regex);
    this.set(type, function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(regex);
      if (!m || !m[0]) return;

      var prev = this.prev();
      var node = pos({
        type: type,
        val: m[0],
        parsed: parsed,
        rest: this.input
      });

      if (m[1]) {
        node.inner = m[1];
      }

      define(node, 'inside', this.stack.length > 0);
      define(node, 'parent', prev);
      prev.nodes.push(node);
    }.bind(this));
    return this;
  },

  /**
   * Create a parser with open and close for parens,
   * brackets or braces
   */

  capturePair: function(type, openRegex, closeRegex, fn) {
    this.sets[type] = this.sets[type] || [];

    /**
     * Open
     */

    this.set(type + '.open', function() {
      var parsed = this.parsed;
      var pos = this.position();
      var m = this.match(openRegex);
      if (!m || !m[0]) return;

      var val = m[0];
      this.setCount++;
      this.specialChars = true;
      var open = pos({
        type: type + '.open',
        val: val,
        rest: this.input
      });

      if (typeof m[1] !== 'undefined') {
        open.inner = m[1];
      }

      var prev = this.prev();
      var node = pos({
        type: type,
        nodes: [open]
      });

      define(node, 'rest', this.input);
      define(node, 'parsed', parsed);
      define(node, 'prefix', m[1]);
      define(node, 'parent', prev);
      define(open, 'parent', node);

      if (typeof fn === 'function') {
        fn.call(this, open, node);
      }

      this.push(type, node);
      prev.nodes.push(node);
    });

    /**
     * Close
     */

    this.set(type + '.close', function() {
      var pos = this.position();
      var m = this.match(closeRegex);
      if (!m || !m[0]) return;

      var parent = this.pop(type);
      var node = pos({
        type: type + '.close',
        rest: this.input,
        suffix: m[1],
        val: m[0]
      });

      if (!this.isType(parent, type)) {
        if (this.options.strict) {
          throw new Error('missing opening "' + type + '"');
        }

        this.setCount--;
        node.escaped = true;
        return node;
      }

      if (node.suffix === '\\') {
        parent.escaped = true;
        node.escaped = true;
      }

      parent.nodes.push(node);
      define(node, 'parent', parent);
    });

    return this;
  },

  /**
   * Capture end-of-string
   */

  eos: function() {
    var pos = this.position();
    if (this.input) return;
    var prev = this.prev();

    while (prev.type !== 'root' && !prev.visited) {
      if (this.options.strict === true) {
        throw new SyntaxError('invalid syntax:' + util.inspect(prev, null, 2));
      }

      if (!hasDelims(prev)) {
        prev.parent.escaped = true;
        prev.escaped = true;
      }

      visit(prev, function(node) {
        if (!hasDelims(node.parent)) {
          node.parent.escaped = true;
          node.escaped = true;
        }
      });

      prev = prev.parent;
    }

    var tok = pos({
      type: 'eos',
      val: this.append || ''
    });

    define(tok, 'parent', this.ast);
    return tok;
  },

  /**
   * Run parsers to advance the cursor position
   */

  next: function() {
    var parsed = this.parsed;
    var len = this.types.length;
    var idx = -1;
    var tok;

    while (++idx < len) {
      if ((tok = this.parsers[this.types[idx]].call(this))) {
        define(tok, 'rest', this.input);
        define(tok, 'parsed', parsed);
        this.last = tok;
        return tok;
      }
    }
  },

  /**
   * Parse the given string.
   * @return {Array}
   */

  parse: function(input) {
    if (typeof input !== 'string') {
      throw new TypeError('expected a string');
    }

    this.init(this.options);
    this.orig = input;
    this.input = input;
    var self = this;

    function parse() {
      // check input before calling `.next()`
      input = self.input;

      // get the next AST ndoe
      var node = self.next();
      if (node) {
        var prev = self.prev();
        if (prev) {
          define(node, 'parent', prev);
          if (prev.nodes) {
            prev.nodes.push(node);
          }
        }

        if (self.sets.hasOwnProperty(prev.type)) {
          self.currentType = prev.type;
        }
      }

      // if we got here but input is not changed, throw an error
      if (self.input && input === self.input) {
        throw new Error('no parsers registered for: "' + self.input.slice(0, 5) + '"');
      }
    }

    while (this.input) parse();
    if (this.stack.length && this.options.strict) {
      var node = this.stack.pop();
      throw this.error('missing opening ' + node.type + ': "' + this.orig + '"');
    }

    var eos = this.eos();
    var tok = this.prev();
    if (tok.type !== 'eos') {
      this.ast.nodes.push(eos);
    }

    return this.ast;
  }
};

/**
 * Visit `node` with the given `fn`
 */

function visit(node, fn) {
  if (!node.visited) {
    define(node, 'visited', true);
    return node.nodes ? mapVisit(node.nodes, fn) : fn(node);
  }
  return node;
}

/**
 * Map visit over array of `nodes`.
 */

function mapVisit(nodes, fn) {
  var len = nodes.length;
  var idx = -1;
  while (++idx < len) {
    visit(nodes[idx], fn);
  }
}

function hasOpen(node) {
  return node.nodes && node.nodes[0].type === (node.type + '.open');
}

function hasClose(node) {
  return node.nodes && utils.last(node.nodes).type === (node.type + '.close');
}

function hasDelims(node) {
  return hasOpen(node) && hasClose(node);
}

/**
 * Expose `Parser`
 */

module.exports = Parser;

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./node_modules/snapdragon/lib/position.js":
/*!*************************************************!*\
  !*** ./node_modules/snapdragon/lib/position.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-property */ "./node_modules/snapdragon/node_modules/define-property/index.js");

/**
 * Store position for a node
 */

module.exports = function Position(start, parser) {
  this.start = start;
  this.end = { line: parser.line, column: parser.column };
  define(this, 'content', parser.orig);
  define(this, 'source', parser.options.source);
};


/***/ }),

/***/ "./node_modules/snapdragon/lib/source-maps.js":
/*!****************************************************!*\
  !*** ./node_modules/snapdragon/lib/source-maps.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/snapdragon/node_modules/define-property/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/snapdragon/lib/utils.js");

/**
 * Expose `mixin()`.
 * This code is based on `source-maps-support.js` in reworkcss/css
 * https://github.com/reworkcss/css/blob/master/lib/stringify/source-map-support.js
 * Copyright (c) 2012 TJ Holowaychuk <tj@vision-media.ca>
 */

module.exports = mixin;

/**
 * Mixin source map support into `compiler`.
 *
 * @param {Object} `compiler`
 * @api public
 */

function mixin(compiler) {
  define(compiler, '_comment', compiler.comment);
  compiler.map = new utils.SourceMap.SourceMapGenerator();
  compiler.position = { line: 1, column: 1 };
  compiler.content = {};
  compiler.files = {};

  for (var key in exports) {
    define(compiler, key, exports[key]);
  }
}

/**
 * Update position.
 *
 * @param {String} str
 */

exports.updatePosition = function(str) {
  var lines = str.match(/\n/g);
  if (lines) this.position.line += lines.length;
  var i = str.lastIndexOf('\n');
  this.position.column = ~i ? str.length - i : this.position.column + str.length;
};

/**
 * Emit `str` with `position`.
 *
 * @param {String} str
 * @param {Object} [pos]
 * @return {String}
 */

exports.emit = function(str, node) {
  var position = node.position || {};
  var source = position.source;
  if (source) {
    if (position.filepath) {
      source = utils.unixify(position.filepath);
    }

    this.map.addMapping({
      source: source,
      generated: {
        line: this.position.line,
        column: Math.max(this.position.column - 1, 0)
      },
      original: {
        line: position.start.line,
        column: position.start.column - 1
      }
    });

    if (position.content) {
      this.addContent(source, position);
    }
    if (position.filepath) {
      this.addFile(source, position);
    }

    this.updatePosition(str);
    this.output += str;
  }
  return str;
};

/**
 * Adds a file to the source map output if it has not already been added
 * @param {String} `file`
 * @param {Object} `pos`
 */

exports.addFile = function(file, position) {
  if (typeof position.content !== 'string') return;
  if (Object.prototype.hasOwnProperty.call(this.files, file)) return;
  this.files[file] = position.content;
};

/**
 * Adds a content source to the source map output if it has not already been added
 * @param {String} `source`
 * @param {Object} `position`
 */

exports.addContent = function(source, position) {
  if (typeof position.content !== 'string') return;
  if (Object.prototype.hasOwnProperty.call(this.content, source)) return;
  this.map.setSourceContent(source, position.content);
};

/**
 * Applies any original source maps to the output and embeds the source file
 * contents in the source map.
 */

exports.applySourceMaps = function() {
  Object.keys(this.files).forEach(function(file) {
    var content = this.files[file];
    this.map.setSourceContent(file, content);

    if (this.options.inputSourcemaps === true) {
      var originalMap = utils.sourceMapResolve.resolveSync(content, file, fs.readFileSync);
      if (originalMap) {
        var map = new utils.SourceMap.SourceMapConsumer(originalMap.map);
        var relativeTo = originalMap.sourcesRelativeTo;
        this.map.applySourceMap(map, file, utils.unixify(path.dirname(relativeTo)));
      }
    }
  }, this);
};

/**
 * Process comments, drops sourceMap comments.
 * @param {Object} node
 */

exports.comment = function(node) {
  if (/^# sourceMappingURL=/.test(node.comment)) {
    return this.emit('', node.position);
  }
  return this._comment(node);
};


/***/ }),

/***/ "./node_modules/snapdragon/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/snapdragon/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

exports.extend = __webpack_require__(/*! extend-shallow */ "./node_modules/snapdragon/node_modules/extend-shallow/index.js");
exports.SourceMap = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
exports.sourceMapResolve = __webpack_require__(/*! source-map-resolve */ "./node_modules/source-map-resolve/source-map-resolve.js");

/**
 * Convert backslash in the given string to forward slashes
 */

exports.unixify = function(fp) {
  return fp.split(/\\+/).join('/');
};

/**
 * Return true if `val` is a non-empty string
 *
 * @param {String} `str`
 * @return {Boolean}
 */

exports.isString = function(str) {
  return str && typeof str === 'string';
};

/**
 * Cast `val` to an array
 * @return {Array}
 */

exports.arrayify = function(val) {
  if (typeof val === 'string') return [val];
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Get the last `n` element from the given `array`
 * @param {Array} `array`
 * @return {*}
 */

exports.last = function(arr, n) {
  return arr[arr.length - (n || 1)];
};


/***/ }),

/***/ "./node_modules/snapdragon/node_modules/debug/src/browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/snapdragon/node_modules/debug/src/browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/snapdragon/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/snapdragon/node_modules/debug/src/debug.js":
/*!*****************************************************************!*\
  !*** ./node_modules/snapdragon/node_modules/debug/src/debug.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/snapdragon/node_modules/define-property/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/snapdragon/node_modules/define-property/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/snapdragon/node_modules/extend-shallow/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/snapdragon/node_modules/extend-shallow/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./node_modules/source-map-resolve/source-map-resolve.js":
/*!***************************************************************!*\
  !*** ./node_modules/source-map-resolve/source-map-resolve.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014, 2015, 2016, 2017 Simon Lydell
// X11 (???MIT???) Licensed. (See LICENSE.)

// Note: source-map-resolve.js is generated from source-map-resolve-node.js and
// source-map-resolve-template.js. Only edit the two latter files, _not_
// source-map-resolve.js!

void (function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! source-map-url */ "./node_modules/source-map-url/source-map-url.js"), __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else { var resolveUrl, sourceMappingURL; }
}(this, function(sourceMappingURL, resolveUrl) {

  function callbackAsync(callback, error, result) {
    setImmediate(function() { callback(error, result) })
  }

  function parseMapToJSON(string, data) {
    try {
      return JSON.parse(string.replace(/^\)\]\}'/, ""))
    } catch (error) {
      error.sourceMapData = data
      throw error
    }
  }

  function readSync(read, url, data) {
    var readUrl = url
    try {
      return String(read(readUrl))
    } catch (error) {
      error.sourceMapData = data
      throw error
    }
  }



  function resolveSourceMap(code, codeUrl, read, callback) {
    var mapData
    try {
      mapData = resolveSourceMapHelper(code, codeUrl)
    } catch (error) {
      return callbackAsync(callback, error)
    }
    if (!mapData || mapData.map) {
      return callbackAsync(callback, null, mapData)
    }
    var readUrl = mapData.url
    read(readUrl, function(error, result) {
      if (error) {
        error.sourceMapData = mapData
        return callback(error)
      }
      mapData.map = String(result)
      try {
        mapData.map = parseMapToJSON(mapData.map, mapData)
      } catch (error) {
        return callback(error)
      }
      callback(null, mapData)
    })
  }

  function resolveSourceMapSync(code, codeUrl, read) {
    var mapData = resolveSourceMapHelper(code, codeUrl)
    if (!mapData || mapData.map) {
      return mapData
    }
    mapData.map = readSync(read, mapData.url, mapData)
    mapData.map = parseMapToJSON(mapData.map, mapData)
    return mapData
  }

  var dataUriRegex = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/
  var jsonMimeTypeRegex = /^(?:application|text)\/json$/

  function resolveSourceMapHelper(code, codeUrl) {
    var url = sourceMappingURL.getFrom(code)
    if (!url) {
      return null
    }

    var dataUri = url.match(dataUriRegex)
    if (dataUri) {
      var mimeType = dataUri[1]
      var lastParameter = dataUri[2] || ""
      var encoded = dataUri[3] || ""
      var data = {
        sourceMappingURL: url,
        url: null,
        sourcesRelativeTo: codeUrl,
        map: encoded
      }
      if (!jsonMimeTypeRegex.test(mimeType)) {
        var error = new Error("Unuseful data uri mime type: " + (mimeType || "text/plain"))
        error.sourceMapData = data
        throw error
      }
      data.map = parseMapToJSON(
        lastParameter === ";base64" ? atob(encoded) : decodeURIComponent(encoded),
        data
      )
      return data
    }

    var mapUrl = resolveUrl(codeUrl, url)
    return {
      sourceMappingURL: url,
      url: mapUrl,
      sourcesRelativeTo: mapUrl,
      map: null
    }
  }



  function resolveSources(map, mapUrl, read, options, callback) {
    if (typeof options === "function") {
      callback = options
      options = {}
    }
    var pending = map.sources ? map.sources.length : 0
    var result = {
      sourcesResolved: [],
      sourcesContent:  []
    }

    if (pending === 0) {
      callbackAsync(callback, null, result)
      return
    }

    var done = function() {
      pending--
      if (pending === 0) {
        callback(null, result)
      }
    }

    resolveSourcesHelper(map, mapUrl, options, function(fullUrl, sourceContent, index) {
      result.sourcesResolved[index] = fullUrl
      if (typeof sourceContent === "string") {
        result.sourcesContent[index] = sourceContent
        callbackAsync(done, null)
      } else {
        var readUrl = fullUrl
        read(readUrl, function(error, source) {
          result.sourcesContent[index] = error ? error : String(source)
          done()
        })
      }
    })
  }

  function resolveSourcesSync(map, mapUrl, read, options) {
    var result = {
      sourcesResolved: [],
      sourcesContent:  []
    }

    if (!map.sources || map.sources.length === 0) {
      return result
    }

    resolveSourcesHelper(map, mapUrl, options, function(fullUrl, sourceContent, index) {
      result.sourcesResolved[index] = fullUrl
      if (read !== null) {
        if (typeof sourceContent === "string") {
          result.sourcesContent[index] = sourceContent
        } else {
          var readUrl = fullUrl
          try {
            result.sourcesContent[index] = String(read(readUrl))
          } catch (error) {
            result.sourcesContent[index] = error
          }
        }
      }
    })

    return result
  }

  var endingSlash = /\/?$/

  function resolveSourcesHelper(map, mapUrl, options, fn) {
    options = options || {}
    var fullUrl
    var sourceContent
    var sourceRoot
    for (var index = 0, len = map.sources.length; index < len; index++) {
      sourceRoot = null
      if (typeof options.sourceRoot === "string") {
        sourceRoot = options.sourceRoot
      } else if (typeof map.sourceRoot === "string" && options.sourceRoot !== false) {
        sourceRoot = map.sourceRoot
      }
      // If the sourceRoot is the empty string, it is equivalent to not setting
      // the property at all.
      if (sourceRoot === null || sourceRoot === '') {
        fullUrl = resolveUrl(mapUrl, map.sources[index])
      } else {
        // Make sure that the sourceRoot ends with a slash, so that `/scripts/subdir` becomes
        // `/scripts/subdir/<source>`, not `/scripts/<source>`. Pointing to a file as source root
        // does not make sense.
        fullUrl = resolveUrl(mapUrl, sourceRoot.replace(endingSlash, "/"), map.sources[index])
      }
      sourceContent = (map.sourcesContent || [])[index]
      fn(fullUrl, sourceContent, index)
    }
  }



  function resolve(code, codeUrl, read, options, callback) {
    if (typeof options === "function") {
      callback = options
      options = {}
    }
    if (code === null) {
      var mapUrl = codeUrl
      var data = {
        sourceMappingURL: null,
        url: mapUrl,
        sourcesRelativeTo: mapUrl,
        map: null
      }
      var readUrl = mapUrl
      read(readUrl, function(error, result) {
        if (error) {
          error.sourceMapData = data
          return callback(error)
        }
        data.map = String(result)
        try {
          data.map = parseMapToJSON(data.map, data)
        } catch (error) {
          return callback(error)
        }
        _resolveSources(data)
      })
    } else {
      resolveSourceMap(code, codeUrl, read, function(error, mapData) {
        if (error) {
          return callback(error)
        }
        if (!mapData) {
          return callback(null, null)
        }
        _resolveSources(mapData)
      })
    }

    function _resolveSources(mapData) {
      resolveSources(mapData.map, mapData.sourcesRelativeTo, read, options, function(error, result) {
        if (error) {
          return callback(error)
        }
        mapData.sourcesResolved = result.sourcesResolved
        mapData.sourcesContent  = result.sourcesContent
        callback(null, mapData)
      })
    }
  }

  function resolveSync(code, codeUrl, read, options) {
    var mapData
    if (code === null) {
      var mapUrl = codeUrl
      mapData = {
        sourceMappingURL: null,
        url: mapUrl,
        sourcesRelativeTo: mapUrl,
        map: null
      }
      mapData.map = readSync(read, mapUrl, mapData)
      mapData.map = parseMapToJSON(mapData.map, mapData)
    } else {
      mapData = resolveSourceMapSync(code, codeUrl, read)
      if (!mapData) {
        return null
      }
    }
    var result = resolveSourcesSync(mapData.map, mapData.sourcesRelativeTo, read, options)
    mapData.sourcesResolved = result.sourcesResolved
    mapData.sourcesContent  = result.sourcesContent
    return mapData
  }



  return {
    resolveSourceMap:     resolveSourceMap,
    resolveSourceMapSync: resolveSourceMapSync,
    resolveSources:       resolveSources,
    resolveSourcesSync:   resolveSourcesSync,
    resolve:              resolve,
    resolveSync:          resolveSync,
    parseMapToJSON:       parseMapToJSON
  }

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/source-map-url/source-map-url.js":
/*!*******************************************************!*\
  !*** ./node_modules/source-map-url/source-map-url.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (???MIT???) Licensed. (See LICENSE.)

void (function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(this, function() {

  var innerRegex = /[#@] sourceMappingURL=([^\s'"]*)/

  var regex = RegExp(
    "(?:" +
      "/\\*" +
      "(?:\\s*\r?\n(?://)?)?" +
      "(?:" + innerRegex.source + ")" +
      "\\s*" +
      "\\*/" +
      "|" +
      "//(?:" + innerRegex.source + ")" +
    ")" +
    "\\s*"
  )

  return {

    regex: regex,
    _innerRegex: innerRegex,

    getFrom: function(code) {
      var match = code.match(regex)
      return (match ? match[1] || match[2] || "" : null)
    },

    existsIn: function(code) {
      return regex.test(code)
    },

    removeFrom: function(code) {
      return code.replace(regex, "")
    },

    insertBefore: function(code, string) {
      var match = code.match(regex)
      if (match) {
        return code.slice(0, match.index) + string + code.slice(match.index)
      } else {
        return code + string
      }
    }
  }

}));


/***/ }),

/***/ "./node_modules/source-map/lib/array-set.js":
/*!**************************************************!*\
  !*** ./node_modules/source-map/lib/array-set.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "./node_modules/source-map/lib/base64-vlq.js":
/*!***************************************************!*\
  !*** ./node_modules/source-map/lib/base64-vlq.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "./node_modules/source-map/lib/base64.js":
/*!***********************************************!*\
  !*** ./node_modules/source-map/lib/base64.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "./node_modules/source-map/lib/binary-search.js":
/*!******************************************************!*\
  !*** ./node_modules/source-map/lib/binary-search.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "./node_modules/source-map/lib/mapping-list.js":
/*!*****************************************************!*\
  !*** ./node_modules/source-map/lib/mapping-list.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "./node_modules/source-map/lib/quick-sort.js":
/*!***************************************************!*\
  !*** ./node_modules/source-map/lib/quick-sort.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "./node_modules/source-map/lib/source-map-consumer.js":
/*!************************************************************!*\
  !*** ./node_modules/source-map/lib/source-map-consumer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "./node_modules/source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "./node_modules/source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap)
    : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      if (source != null && sourceRoot != null) {
        source = util.join(sourceRoot, source);
      }
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    if (this.sourceRoot != null) {
      needle.source = util.relative(this.sourceRoot, needle.source);
    }
    if (!this._sources.has(needle.source)) {
      return [];
    }
    needle.source = this._sources.indexOf(needle.source);

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          if (this.sourceRoot != null) {
            source = util.join(this.sourceRoot, source);
          }
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    if (this.sourceRoot != null) {
      aSource = util.relative(this.sourceRoot, aSource);
    }

    if (this._sources.has(aSource)) {
      return this.sourcesContent[this._sources.indexOf(aSource)];
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + aSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    if (this.sourceRoot != null) {
      source = util.relative(this.sourceRoot, source);
    }
    if (!this._sources.has(source)) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    source = this._sources.indexOf(source);

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        if (section.consumer.sourceRoot !== null) {
          source = util.join(section.consumer.sourceRoot, source);
        }
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "./node_modules/source-map/lib/source-map-generator.js":
/*!*************************************************************!*\
  !*** ./node_modules/source-map/lib/source-map-generator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "./node_modules/source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "./node_modules/source-map/lib/source-node.js":
/*!****************************************************!*\
  !*** ./node_modules/source-map/lib/source-node.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "./node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex];
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex];
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "./node_modules/source-map/lib/util.js":
/*!*********************************************!*\
  !*** ./node_modules/source-map/lib/util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;


/***/ }),

/***/ "./node_modules/source-map/source-map.js":
/*!***********************************************!*\
  !*** ./node_modules/source-map/source-map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "./node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "./node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "./node_modules/source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "./node_modules/split-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/split-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * split-string <https://github.com/jonschlinkert/split-string>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extend-shallow/index.js");

module.exports = function(str, options, fn) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  if (typeof options === 'function') {
    fn = options;
    options = null;
  }

  // allow separator to be defined as a string
  if (typeof options === 'string') {
    options = { sep: options };
  }

  var opts = extend({sep: '.'}, options);
  var quotes = opts.quotes || ['"', "'", '`'];
  var brackets;

  if (opts.brackets === true) {
    brackets = {
      '<': '>',
      '(': ')',
      '[': ']',
      '{': '}'
    };
  } else if (opts.brackets) {
    brackets = opts.brackets;
  }

  var tokens = [];
  var stack = [];
  var arr = [''];
  var sep = opts.sep;
  var len = str.length;
  var idx = -1;
  var closeIdx;

  function expected() {
    if (brackets && stack.length) {
      return brackets[stack[stack.length - 1]];
    }
  }

  while (++idx < len) {
    var ch = str[idx];
    var next = str[idx + 1];
    var tok = { val: ch, idx: idx, arr: arr, str: str };
    tokens.push(tok);

    if (ch === '\\') {
      tok.val = keepEscaping(opts, str, idx) === true ? (ch + next) : next;
      tok.escaped = true;
      if (typeof fn === 'function') {
        fn(tok);
      }
      arr[arr.length - 1] += tok.val;
      idx++;
      continue;
    }

    if (brackets && brackets[ch]) {
      stack.push(ch);
      var e = expected();
      var i = idx + 1;

      if (str.indexOf(e, i + 1) !== -1) {
        while (stack.length && i < len) {
          var s = str[++i];
          if (s === '\\') {
            s++;
            continue;
          }

          if (quotes.indexOf(s) !== -1) {
            i = getClosingQuote(str, s, i + 1);
            continue;
          }

          e = expected();
          if (stack.length && str.indexOf(e, i + 1) === -1) {
            break;
          }

          if (brackets[s]) {
            stack.push(s);
            continue;
          }

          if (e === s) {
            stack.pop();
          }
        }
      }

      closeIdx = i;
      if (closeIdx === -1) {
        arr[arr.length - 1] += ch;
        continue;
      }

      ch = str.slice(idx, closeIdx + 1);
      tok.val = ch;
      tok.idx = idx = closeIdx;
    }

    if (quotes.indexOf(ch) !== -1) {
      closeIdx = getClosingQuote(str, ch, idx + 1);
      if (closeIdx === -1) {
        arr[arr.length - 1] += ch;
        continue;
      }

      if (keepQuotes(ch, opts) === true) {
        ch = str.slice(idx, closeIdx + 1);
      } else {
        ch = str.slice(idx + 1, closeIdx);
      }

      tok.val = ch;
      tok.idx = idx = closeIdx;
    }

    if (typeof fn === 'function') {
      fn(tok, tokens);
      ch = tok.val;
      idx = tok.idx;
    }

    if (tok.val === sep && tok.split !== false) {
      arr.push('');
      continue;
    }

    arr[arr.length - 1] += tok.val;
  }

  return arr;
};

function getClosingQuote(str, ch, i, brackets) {
  var idx = str.indexOf(ch, i);
  if (str.charAt(idx - 1) === '\\') {
    return getClosingQuote(str, ch, idx + 1);
  }
  return idx;
}

function keepQuotes(ch, opts) {
  if (opts.keepDoubleQuotes === true && ch === '"') return true;
  if (opts.keepSingleQuotes === true && ch === "'") return true;
  return opts.keepQuotes;
}

function keepEscaping(opts, str, idx) {
  if (typeof opts.keepEscaping === 'function') {
    return opts.keepEscaping(str, idx);
  }
  return opts.keepEscaping === true || str[idx + 1] === '\\';
}


/***/ }),

/***/ "./node_modules/static-extend/index.js":
/*!*********************************************!*\
  !*** ./node_modules/static-extend/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * static-extend <https://github.com/jonschlinkert/static-extend>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var copy = __webpack_require__(/*! object-copy */ "./node_modules/object-copy/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/static-extend/node_modules/define-property/index.js");
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

/**
 * Returns a function for extending the static properties,
 * prototype properties, and descriptors from the `Parent`
 * constructor onto `Child` constructors.
 *
 * ```js
 * var extend = require('static-extend');
 * Parent.extend = extend(Parent);
 *
 * // optionally pass a custom merge function as the second arg
 * Parent.extend = extend(Parent, function(Child) {
 *   Child.prototype.mixin = function(key, val) {
 *     Child.prototype[key] = val;
 *   };
 * });
 *
 * // extend "child" constructors
 * Parent.extend(Child);
 *
 * // optionally define prototype methods as the second arg
 * Parent.extend(Child, {
 *   foo: function() {},
 *   bar: function() {}
 * });
 * ```
 * @param {Function} `Parent` Parent ctor
 * @param {Function} `extendFn` Optional extend function for handling any necessary custom merging. Useful when updating methods that require a specific prototype.
 *   @param {Function} `Child` Child ctor
 *   @param {Object} `proto` Optionally pass additional prototype properties to inherit.
 *   @return {Object}
 * @api public
 */

function extend(Parent, extendFn) {
  if (typeof Parent !== 'function') {
    throw new TypeError('expected Parent to be a function.');
  }

  return function(Ctor, proto) {
    if (typeof Ctor !== 'function') {
      throw new TypeError('expected Ctor to be a function.');
    }

    util.inherits(Ctor, Parent);
    copy(Ctor, Parent);

    // proto can be null or a plain object
    if (typeof proto === 'object') {
      var obj = Object.create(proto);

      for (var k in obj) {
        Ctor.prototype[k] = obj[k];
      }
    }

    // keep a reference to the parent prototype
    define(Ctor.prototype, '_parent_', {
      configurable: true,
      set: function() {},
      get: function() {
        return Parent.prototype;
      }
    });

    if (typeof extendFn === 'function') {
      extendFn(Ctor, Parent);
    }

    Ctor.extend = extend(Ctor, extendFn);
  };
};

/**
 * Expose `extend`
 */

module.exports = extend;


/***/ }),

/***/ "./node_modules/static-extend/node_modules/define-property/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/static-extend/node_modules/define-property/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(/*! is-descriptor */ "./node_modules/is-descriptor/index.js");

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),

/***/ "./node_modules/stream-browserify/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stream-browserify/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

inherits(Stream, EE);
Stream.Readable = __webpack_require__(/*! readable-stream/readable.js */ "./node_modules/readable-stream/readable-browser.js");
Stream.Writable = __webpack_require__(/*! readable-stream/writable.js */ "./node_modules/readable-stream/writable-browser.js");
Stream.Duplex = __webpack_require__(/*! readable-stream/duplex.js */ "./node_modules/readable-stream/duplex-browser.js");
Stream.Transform = __webpack_require__(/*! readable-stream/transform.js */ "./node_modules/readable-stream/transform.js");
Stream.PassThrough = __webpack_require__(/*! readable-stream/passthrough.js */ "./node_modules/readable-stream/passthrough.js");

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
/*!***********************************************************!*\
  !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "./node_modules/to-object-path/index.js":
/*!**********************************************!*\
  !*** ./node_modules/to-object-path/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * to-object-path <https://github.com/jonschlinkert/to-object-path>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/to-object-path/node_modules/kind-of/index.js");

module.exports = function toPath(args) {
  if (typeOf(args) !== 'arguments') {
    args = arguments;
  }
  return filter(args).join('.');
};

function filter(arr) {
  var len = arr.length;
  var idx = -1;
  var res = [];

  while (++idx < len) {
    var ele = arr[idx];
    if (typeOf(ele) === 'arguments' || Array.isArray(ele)) {
      res.push.apply(res, filter(ele));
    } else if (typeof ele === 'string') {
      res.push(ele);
    }
  }
  return res;
}


/***/ }),

/***/ "./node_modules/to-object-path/node_modules/kind-of/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/to-object-path/node_modules/kind-of/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),

/***/ "./node_modules/to-regex-range/index.js":
/*!**********************************************!*\
  !*** ./node_modules/to-regex-range/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * to-regex-range <https://github.com/jonschlinkert/to-regex-range>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var isNumber = __webpack_require__(/*! is-number */ "./node_modules/is-number/index.js");
var cache = {};

function toRegexRange(min, max, options) {
  if (isNumber(min) === false) {
    throw new RangeError('toRegexRange: first argument is invalid.');
  }

  if (typeof max === 'undefined' || min === max) {
    return String(min);
  }

  if (isNumber(max) === false) {
    throw new RangeError('toRegexRange: second argument is invalid.');
  }

  options = options || {};
  var relax = String(options.relaxZeros);
  var shorthand = String(options.shorthand);
  var capture = String(options.capture);
  var key = min + ':' + max + '=' + relax + shorthand + capture;
  if (cache.hasOwnProperty(key)) {
    return cache[key].result;
  }

  var a = Math.min(min, max);
  var b = Math.max(min, max);

  if (Math.abs(a - b) === 1) {
    var result = min + '|' + max;
    if (options.capture) {
      return '(' + result + ')';
    }
    return result;
  }

  var isPadded = padding(min) || padding(max);
  var positives = [];
  var negatives = [];

  var tok = {min: min, max: max, a: a, b: b};
  if (isPadded) {
    tok.isPadded = isPadded;
    tok.maxLen = String(tok.max).length;
  }

  if (a < 0) {
    var newMin = b < 0 ? Math.abs(b) : 1;
    var newMax = Math.abs(a);
    negatives = splitToPatterns(newMin, newMax, tok, options);
    a = tok.a = 0;
  }

  if (b >= 0) {
    positives = splitToPatterns(a, b, tok, options);
  }

  tok.negatives = negatives;
  tok.positives = positives;
  tok.result = siftPatterns(negatives, positives, options);

  if (options.capture && (positives.length + negatives.length) > 1) {
    tok.result = '(' + tok.result + ')';
  }

  cache[key] = tok;
  return tok.result;
}

function siftPatterns(neg, pos, options) {
  var onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
  var onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
  var intersected = filterPatterns(neg, pos, '-?', true, options) || [];
  var subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join('|');
}

function splitToRanges(min, max) {
  min = Number(min);
  max = Number(max);

  var nines = 1;
  var stops = [max];
  var stop = +countNines(min, nines);

  while (min <= stop && stop <= max) {
    stops = push(stops, stop);
    nines += 1;
    stop = +countNines(min, nines);
  }

  var zeros = 1;
  stop = countZeros(max + 1, zeros) - 1;

  while (min < stop && stop <= max) {
    stops = push(stops, stop);
    zeros += 1;
    stop = countZeros(max + 1, zeros) - 1;
  }

  stops.sort(compare);
  return stops;
}

/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */

function rangeToPattern(start, stop, options) {
  if (start === stop) {
    return {pattern: String(start), digits: []};
  }

  var zipped = zip(String(start), String(stop));
  var len = zipped.length, i = -1;

  var pattern = '';
  var digits = 0;

  while (++i < len) {
    var numbers = zipped[i];
    var startDigit = numbers[0];
    var stopDigit = numbers[1];

    if (startDigit === stopDigit) {
      pattern += startDigit;

    } else if (startDigit !== '0' || stopDigit !== '9') {
      pattern += toCharacterClass(startDigit, stopDigit);

    } else {
      digits += 1;
    }
  }

  if (digits) {
    pattern += options.shorthand ? '\\d' : '[0-9]';
  }

  return { pattern: pattern, digits: [digits] };
}

function splitToPatterns(min, max, tok, options) {
  var ranges = splitToRanges(min, max);
  var len = ranges.length;
  var idx = -1;

  var tokens = [];
  var start = min;
  var prev;

  while (++idx < len) {
    var range = ranges[idx];
    var obj = rangeToPattern(start, range, options);
    var zeros = '';

    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.digits.length > 1) {
        prev.digits.pop();
      }
      prev.digits.push(obj.digits[0]);
      prev.string = prev.pattern + toQuantifier(prev.digits);
      start = range + 1;
      continue;
    }

    if (tok.isPadded) {
      zeros = padZeros(range, tok);
    }

    obj.string = zeros + obj.pattern + toQuantifier(obj.digits);
    tokens.push(obj);
    start = range + 1;
    prev = obj;
  }

  return tokens;
}

function filterPatterns(arr, comparison, prefix, intersection, options) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    var tok = arr[i];
    var ele = tok.string;

    if (options.relaxZeros !== false) {
      if (prefix === '-' && ele.charAt(0) === '0') {
        if (ele.charAt(1) === '{') {
          ele = '0*' + ele.replace(/^0\{\d+\}/, '');
        } else {
          ele = '0*' + ele.slice(1);
        }
      }
    }

    if (!intersection && !contains(comparison, 'string', ele)) {
      res.push(prefix + ele);
    }

    if (intersection && contains(comparison, 'string', ele)) {
      res.push(prefix + ele);
    }
  }
  return res;
}

/**
 * Zip strings (`for in` can be used on string characters)
 */

function zip(a, b) {
  var arr = [];
  for (var ch in a) arr.push([a[ch], b[ch]]);
  return arr;
}

function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function push(arr, ele) {
  if (arr.indexOf(ele) === -1) arr.push(ele);
  return arr;
}

function contains(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return true;
    }
  }
  return false;
}

function countNines(min, len) {
  return String(min).slice(0, -len) + repeat('9', len);
}

function countZeros(integer, zeros) {
  return integer - (integer % Math.pow(10, zeros));
}

function toQuantifier(digits) {
  var start = digits[0];
  var stop = digits[1] ? (',' + digits[1]) : '';
  if (!stop && (!start || start === 1)) {
    return '';
  }
  return '{' + start + stop + '}';
}

function toCharacterClass(a, b) {
  return '[' + a + ((b - a === 1) ? '' : '-') + b + ']';
}

function padding(str) {
  return /^-?(0+)\d/.exec(str);
}

function padZeros(val, tok) {
  if (tok.isPadded) {
    var diff = Math.abs(tok.maxLen - String(val).length);
    switch (diff) {
      case 0:
        return '';
      case 1:
        return '0';
      default: {
        return '0{' + diff + '}';
      }
    }
  }
  return val;
}

/**
 * Expose `toRegexRange`
 */

module.exports = toRegexRange;


/***/ }),

/***/ "./node_modules/to-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var safe = __webpack_require__(/*! safe-regex */ "./node_modules/safe-regex/index.js");
var define = __webpack_require__(/*! define-property */ "./node_modules/define-property/index.js");
var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/extend-shallow/index.js");
var not = __webpack_require__(/*! regex-not */ "./node_modules/regex-not/index.js");
var MAX_LENGTH = 1024 * 64;

/**
 * Session cache
 */

var cache = {};

/**
 * Create a regular expression from the given `pattern` string.
 *
 * @param {String|RegExp} `pattern` Pattern can be a string or regular expression.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

module.exports = function(patterns, options) {
  if (!Array.isArray(patterns)) {
    return makeRe(patterns, options);
  }
  return makeRe(patterns.join('|'), options);
};

/**
 * Create a regular expression from the given `pattern` string.
 *
 * @param {String|RegExp} `pattern` Pattern can be a string or regular expression.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

function makeRe(pattern, options) {
  if (pattern instanceof RegExp) {
    return pattern;
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('expected a string');
  }

  if (pattern.length > MAX_LENGTH) {
    throw new Error('expected pattern to be less than ' + MAX_LENGTH + ' characters');
  }

  var key = pattern;
  // do this before shallow cloning options, it's a lot faster
  if (!options || (options && options.cache !== false)) {
    key = createKey(pattern, options);

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
  }

  var opts = extend({}, options);
  if (opts.contains === true) {
    if (opts.negate === true) {
      opts.strictNegate = false;
    } else {
      opts.strict = false;
    }
  }

  if (opts.strict === false) {
    opts.strictOpen = false;
    opts.strictClose = false;
  }

  var open = opts.strictOpen !== false ? '^' : '';
  var close = opts.strictClose !== false ? '$' : '';
  var flags = opts.flags || '';
  var regex;

  if (opts.nocase === true && !/i/.test(flags)) {
    flags += 'i';
  }

  try {
    if (opts.negate || typeof opts.strictNegate === 'boolean') {
      pattern = not.create(pattern, opts);
    }

    var str = open + '(?:' + pattern + ')' + close;
    regex = new RegExp(str, flags);

    if (opts.safe === true && safe(regex) === false) {
      throw new Error('potentially unsafe regular expression: ' + regex.source);
    }

  } catch (err) {
    if (opts.strictErrors === true || opts.safe === true) {
      err.key = key;
      err.pattern = pattern;
      err.originalOptions = options;
      err.createdOptions = opts;
      throw err;
    }

    try {
      regex = new RegExp('^' + pattern.replace(/(\W)/g, '\\$1') + '$');
    } catch (err) {
      regex = /.^/; //<= match nothing
    }
  }

  if (opts.cache !== false) {
    memoize(regex, key, pattern, opts);
  }
  return regex;
}

/**
 * Memoize generated regex. This can result in dramatic speed improvements
 * and simplify debugging by adding options and pattern to the regex. It can be
 * disabled by passing setting `options.cache` to false.
 */

function memoize(regex, key, pattern, options) {
  define(regex, 'cached', true);
  define(regex, 'pattern', pattern);
  define(regex, 'options', options);
  define(regex, 'key', key);
  cache[key] = regex;
}

/**
 * Create the key to use for memoization. The key is generated
 * by iterating over the options and concatenating key-value pairs
 * to the pattern string.
 */

function createKey(pattern, options) {
  if (!options) return pattern;
  var key = pattern;
  for (var prop in options) {
    if (options.hasOwnProperty(prop)) {
      key += ';' + prop + '=' + String(options[prop]);
    }
  }
  return key;
}

/**
 * Expose `makeRe`
 */

module.exports.makeRe = makeRe;


/***/ }),

/***/ "./node_modules/union-value/index.js":
/*!*******************************************!*\
  !*** ./node_modules/union-value/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");
var union = __webpack_require__(/*! arr-union */ "./node_modules/arr-union/index.js");
var get = __webpack_require__(/*! get-value */ "./node_modules/get-value/index.js");
var set = __webpack_require__(/*! set-value */ "./node_modules/set-value/index.js");

module.exports = function unionValue(obj, prop, value) {
  if (!isObject(obj)) {
    throw new TypeError('union-value expects the first argument to be an object.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('union-value expects `prop` to be a string.');
  }

  var arr = arrayify(get(obj, prop));
  set(obj, prop, union(arr, arrayify(value)));
  return obj;
};

function arrayify(val) {
  if (val === null || typeof val === 'undefined') {
    return [];
  }
  if (Array.isArray(val)) {
    return val;
  }
  return [val];
}


/***/ }),

/***/ "./node_modules/unset-value/index.js":
/*!*******************************************!*\
  !*** ./node_modules/unset-value/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * unset-value <https://github.com/jonschlinkert/unset-value>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");
var has = __webpack_require__(/*! has-value */ "./node_modules/unset-value/node_modules/has-value/index.js");

module.exports = function unset(obj, prop) {
  if (!isObject(obj)) {
    throw new TypeError('expected an object.');
  }
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }

  if (has(obj, prop)) {
    var segs = prop.split('.');
    var last = segs.pop();
    while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
      last = segs.pop().slice(0, -1) + '.' + last;
    }
    while (segs.length) obj = obj[prop = segs.shift()];
    return (delete obj[last]);
  }
  return true;
};


/***/ }),

/***/ "./node_modules/unset-value/node_modules/has-value/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/unset-value/node_modules/has-value/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-value <https://github.com/jonschlinkert/has-value>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js");
var hasValues = __webpack_require__(/*! has-values */ "./node_modules/unset-value/node_modules/has-values/index.js");
var get = __webpack_require__(/*! get-value */ "./node_modules/get-value/index.js");

module.exports = function(obj, prop, noZero) {
  if (isObject(obj)) {
    return hasValues(get(obj, prop), noZero);
  }
  return hasValues(obj, prop);
};


/***/ }),

/***/ "./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/unset-value/node_modules/has-values/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/unset-value/node_modules/has-values/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function hasValue(o, noZero) {
  if (o === null || o === undefined) {
    return false;
  }

  if (typeof o === 'boolean') {
    return true;
  }

  if (typeof o === 'number') {
    if (o === 0 && noZero === true) {
      return false;
    }
    return true;
  }

  if (o.length !== undefined) {
    return o.length !== 0;
  }

  for (var key in o) {
    if (o.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
};


/***/ }),

/***/ "./node_modules/upath/build/code/upath.js":
/*!************************************************!*\
  !*** ./node_modules/upath/build/code/upath.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* upath http://github.com/anodynos/upath/
*
* A proxy to `path`, replacing `\` with `/` for all results & new methods to normalize & join keeping leading `./` and add, change, default, trim file extensions.
* Version 1.1.1 - Compiled on 2019-03-07 10:45:51
* Repository git://github.com/anodynos/upath
* Copyright(c) 2019 Angelos Pikoulas <agelos.pikoulas@gmail.com>
* License MIT
*/

// Generated by uRequire v0.7.0-beta.33 target: 'lib' template: 'nodejs'


var VERSION = '1.1.1'; // injected by urequire-rc-inject-version

var extraFn, extraFunctions, isFunction, isString, isValidExt, name, path, propName, propValue, toUnix, upath, slice = [].slice, indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item)
        return i;
    }
    return -1;
  }, hasProp = {}.hasOwnProperty;
path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
isFunction = function (val) {
  return val instanceof Function;
};
isString = function (val) {
  return typeof val === "string" || !!val && typeof val === "object" && Object.prototype.toString.call(val) === "[object String]";
};
upath = exports;
upath.VERSION = typeof VERSION !== "undefined" && VERSION !== null ? VERSION : "NO-VERSION";
toUnix = function (p) {
  var double;
  p = p.replace(/\\/g, "/");
  double = /\/\//;
  while (p.match(double)) {
    p = p.replace(double, "/");
  }
  return p;
};
for (propName in path) {
  propValue = path[propName];
  if (isFunction(propValue)) {
    upath[propName] = function (propName) {
      return function () {
        var args, result;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        args = args.map(function (p) {
          if (isString(p)) {
            return toUnix(p);
          } else {
            return p;
          }
        });
        result = path[propName].apply(path, args);
        if (isString(result)) {
          return toUnix(result);
        } else {
          return result;
        }
      };
    }(propName);
  } else {
    upath[propName] = propValue;
  }
}
upath.sep = "/";
extraFunctions = {
  toUnix: toUnix,
  normalizeSafe: function (p) {
    p = toUnix(p);
    if (p.startsWith("./")) {
      if (p.startsWith("./..") || p === "./") {
        return upath.normalize(p);
      } else {
        return "./" + upath.normalize(p);
      }
    } else {
      return upath.normalize(p);
    }
  },
  normalizeTrim: function (p) {
    p = upath.normalizeSafe(p);
    if (p.endsWith("/")) {
      return p.slice(0, +(p.length - 2) + 1 || 9000000000);
    } else {
      return p;
    }
  },
  joinSafe: function () {
    var p, result;
    p = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    result = upath.join.apply(null, p);
    if (p[0].startsWith("./") && !result.startsWith("./")) {
      result = "./" + result;
    }
    return result;
  },
  addExt: function (file, ext) {
    if (!ext) {
      return file;
    } else {
      if (ext[0] !== ".") {
        ext = "." + ext;
      }
      return file + (file.endsWith(ext) ? "" : ext);
    }
  },
  trimExt: function (filename, ignoreExts, maxSize) {
    var oldExt;
    if (maxSize == null) {
      maxSize = 7;
    }
    oldExt = upath.extname(filename);
    if (isValidExt(oldExt, ignoreExts, maxSize)) {
      return filename.slice(0, +(filename.length - oldExt.length - 1) + 1 || 9000000000);
    } else {
      return filename;
    }
  },
  removeExt: function (filename, ext) {
    if (!ext) {
      return filename;
    } else {
      ext = ext[0] === "." ? ext : "." + ext;
      if (upath.extname(filename) === ext) {
        return upath.trimExt(filename);
      } else {
        return filename;
      }
    }
  },
  changeExt: function (filename, ext, ignoreExts, maxSize) {
    if (maxSize == null) {
      maxSize = 7;
    }
    return upath.trimExt(filename, ignoreExts, maxSize) + (!ext ? "" : ext[0] === "." ? ext : "." + ext);
  },
  defaultExt: function (filename, ext, ignoreExts, maxSize) {
    var oldExt;
    if (maxSize == null) {
      maxSize = 7;
    }
    oldExt = upath.extname(filename);
    if (isValidExt(oldExt, ignoreExts, maxSize)) {
      return filename;
    } else {
      return upath.addExt(filename, ext);
    }
  }
};
isValidExt = function (ext, ignoreExts, maxSize) {
  if (ignoreExts == null) {
    ignoreExts = [];
  }
  return ext && ext.length <= maxSize && indexOf.call(ignoreExts.map(function (e) {
    return (e && e[0] !== "." ? "." : "") + e;
  }), ext) < 0;
};
for (name in extraFunctions) {
  if (!hasProp.call(extraFunctions, name))
    continue;
  extraFn = extraFunctions[name];
  if (upath[name] !== void 0) {
    throw new Error("path." + name + " already exists.");
  } else {
    upath[name] = extraFn;
  }
}

;

/***/ }),

/***/ "./node_modules/use/index.js":
/*!***********************************!*\
  !*** ./node_modules/use/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * use <https://github.com/jonschlinkert/use>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function base(app, options) {
  if (!isObject(app) && typeof app !== 'function') {
    throw new TypeError('expected an object or function');
  }

  var opts = isObject(options) ? options : {};
  var prop = typeof opts.prop === 'string' ? opts.prop : 'fns';
  if (!Array.isArray(app[prop])) {
    define(app, prop, []);
  }

  /**
   * Define a plugin function to be passed to use. The only
   * parameter exposed to the plugin is `app`, the object or function.
   * passed to `use(app)`. `app` is also exposed as `this` in plugins.
   *
   * Additionally, **if a plugin returns a function, the function will
   * be pushed onto the `fns` array**, allowing the plugin to be
   * called at a later point by the `run` method.
   *
   * ```js
   * var use = require('use');
   *
   * // define a plugin
   * function foo(app) {
   *   // do stuff
   * }
   *
   * var app = function(){};
   * use(app);
   *
   * // register plugins
   * app.use(foo);
   * app.use(bar);
   * app.use(baz);
   * ```
   * @name .use
   * @param {Function} `fn` plugin function to call
   * @api public
   */

  define(app, 'use', use);

  /**
   * Run all plugins on `fns`. Any plugin that returns a function
   * when called by `use` is pushed onto the `fns` array.
   *
   * ```js
   * var config = {};
   * app.run(config);
   * ```
   * @name .run
   * @param {Object} `value` Object to be modified by plugins.
   * @return {Object} Returns the object passed to `run`
   * @api public
   */

  define(app, 'run', function(val) {
    if (!isObject(val)) return;

    if (!val.use || !val.run) {
      define(val, prop, val[prop] || []);
      define(val, 'use', use);
    }

    if (!val[prop] || val[prop].indexOf(base) === -1) {
      val.use(base);
    }

    var self = this || app;
    var fns = self[prop];
    var len = fns.length;
    var idx = -1;

    while (++idx < len) {
      val.use(fns[idx]);
    }
    return val;
  });

  /**
   * Call plugin `fn`. If a function is returned push it into the
   * `fns` array to be called by the `run` method.
   */

  function use(type, fn, options) {
    var offset = 1;

    if (typeof type === 'string' || Array.isArray(type)) {
      fn = wrap(type, fn);
      offset++;
    } else {
      options = fn;
      fn = type;
    }

    if (typeof fn !== 'function') {
      throw new TypeError('expected a function');
    }

    var self = this || app;
    var fns = self[prop];

    var args = [].slice.call(arguments, offset);
    args.unshift(self);

    if (typeof opts.hook === 'function') {
      opts.hook.apply(self, args);
    }

    var val = fn.apply(self, args);
    if (typeof val === 'function' && fns.indexOf(val) === -1) {
      fns.push(val);
    }
    return self;
  }

  /**
   * Wrap a named plugin function so that it's only called on objects of the
   * given `type`
   *
   * @param {String} `type`
   * @param {Function} `fn` Plugin function
   * @return {Function}
   */

  function wrap(type, fn) {
    return function plugin() {
      return this.type === type ? fn.apply(this, arguments) : plugin;
    };
  }

  return app;
};

function isObject(val) {
  return val && typeof val === 'object' && !Array.isArray(val);
}

function define(obj, key, val) {
  Object.defineProperty(obj, key, {
    configurable: true,
    writable: true,
    value: val
  });
}


/***/ }),

/***/ "./node_modules/util-deprecate/browser.js":
/*!************************************************!*\
  !*** ./node_modules/util-deprecate/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

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


/***/ })

}]);