(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(factory.toString()).default;
	else if(typeof exports === 'object')
		exports["Quagga"] = factory(factory.toString()).default;
	else
		root["Quagga"] = factory(factory.toString()).default;
})(this, function(__factorySource__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 164);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__barcode_reader__ = __webpack_require__(5);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function EANReader(opts, supplements) {
    opts = __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()(getDefaulConfig(), opts);
    __WEBPACK_IMPORTED_MODULE_1__barcode_reader__["a" /* default */].call(this, opts, supplements);
}

function getDefaulConfig() {
    var config = {};

    Object.keys(EANReader.CONFIG_KEYS).forEach(function (key) {
        config[key] = EANReader.CONFIG_KEYS[key].default;
    });
    return config;
}

var properties = {
    CODE_L_START: { value: 0 },
    CODE_G_START: { value: 10 },
    START_PATTERN: { value: [1, 1, 1] },
    STOP_PATTERN: { value: [1, 1, 1] },
    MIDDLE_PATTERN: { value: [1, 1, 1, 1, 1] },
    EXTENSION_START_PATTERN: { value: [1, 1, 2] },
    CODE_PATTERN: { value: [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]] },
    CODE_FREQUENCY: { value: [0, 11, 13, 14, 19, 25, 28, 21, 22, 26] },
    SINGLE_CODE_ERROR: { value: 0.70 },
    AVG_CODE_ERROR: { value: 0.48 },
    FORMAT: { value: "ean_13", writeable: false }
};

EANReader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_1__barcode_reader__["a" /* default */].prototype, properties);
EANReader.prototype.constructor = EANReader;

EANReader.prototype._decodeCode = function (start, coderange) {
    var counter = [0, 0, 0, 0],
        i,
        self = this,
        offset = start,
        isWhite = !self._row[offset],
        counterPos = 0,
        bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start
    },
        code,
        error;

    if (!coderange) {
        coderange = self.CODE_PATTERN.length;
    }

    for (i = offset; i < self._row.length; i++) {
        if (self._row[i] ^ isWhite) {
            counter[counterPos]++;
        } else {
            if (counterPos === counter.length - 1) {
                for (code = 0; code < coderange; code++) {
                    error = self._matchPattern(counter, self.CODE_PATTERN[code]);
                    if (error < bestMatch.error) {
                        bestMatch.code = code;
                        bestMatch.error = error;
                    }
                }
                bestMatch.end = i;
                if (bestMatch.error > self.AVG_CODE_ERROR) {
                    return null;
                }
                return bestMatch;
            } else {
                counterPos++;
            }
            counter[counterPos] = 1;
            isWhite = !isWhite;
        }
    }
    return null;
};

EANReader.prototype._findPattern = function (pattern, offset, isWhite, tryHarder, epsilon) {
    var counter = [],
        self = this,
        i,
        counterPos = 0,
        bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
    },
        error,
        j,
        sum;

    if (!offset) {
        offset = self._nextSet(self._row);
    }

    if (isWhite === undefined) {
        isWhite = false;
    }

    if (tryHarder === undefined) {
        tryHarder = true;
    }

    if (epsilon === undefined) {
        epsilon = self.AVG_CODE_ERROR;
    }

    for (i = 0; i < pattern.length; i++) {
        counter[i] = 0;
    }

    for (i = offset; i < self._row.length; i++) {
        if (self._row[i] ^ isWhite) {
            counter[counterPos]++;
        } else {
            if (counterPos === counter.length - 1) {
                sum = 0;
                for (j = 0; j < counter.length; j++) {
                    sum += counter[j];
                }
                error = self._matchPattern(counter, pattern);

                if (error < epsilon) {
                    bestMatch.error = error;
                    bestMatch.start = i - sum;
                    bestMatch.end = i;
                    return bestMatch;
                }
                if (tryHarder) {
                    for (j = 0; j < counter.length - 2; j++) {
                        counter[j] = counter[j + 2];
                    }
                    counter[counter.length - 2] = 0;
                    counter[counter.length - 1] = 0;
                    counterPos--;
                } else {
                    return null;
                }
            } else {
                counterPos++;
            }
            counter[counterPos] = 1;
            isWhite = !isWhite;
        }
    }
    return null;
};

EANReader.prototype._findStart = function () {
    var self = this,
        leadingWhitespaceStart,
        offset = self._nextSet(self._row),
        startInfo;

    while (!startInfo) {
        startInfo = self._findPattern(self.START_PATTERN, offset);
        if (!startInfo) {
            return null;
        }
        leadingWhitespaceStart = startInfo.start - (startInfo.end - startInfo.start);
        if (leadingWhitespaceStart >= 0) {
            if (self._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
                return startInfo;
            }
        }
        offset = startInfo.end;
        startInfo = null;
    }
};

EANReader.prototype._verifyTrailingWhitespace = function (endInfo) {
    var self = this,
        trailingWhitespaceEnd;

    trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start);
    if (trailingWhitespaceEnd < self._row.length) {
        if (self._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
            return endInfo;
        }
    }
    return null;
};

EANReader.prototype._findEnd = function (offset, isWhite) {
    var self = this,
        endInfo = self._findPattern(self.STOP_PATTERN, offset, isWhite, false);

    return endInfo !== null ? self._verifyTrailingWhitespace(endInfo) : null;
};

EANReader.prototype._calculateFirstDigit = function (codeFrequency) {
    var i,
        self = this;

    for (i = 0; i < self.CODE_FREQUENCY.length; i++) {
        if (codeFrequency === self.CODE_FREQUENCY[i]) {
            return i;
        }
    }
    return null;
};

EANReader.prototype._decodePayload = function (code, result, decodedCodes) {
    var i,
        self = this,
        codeFrequency = 0x0,
        firstDigit;

    for (i = 0; i < 6; i++) {
        code = self._decodeCode(code.end);
        if (!code) {
            return null;
        }
        if (code.code >= self.CODE_G_START) {
            code.code = code.code - self.CODE_G_START;
            codeFrequency |= 1 << 5 - i;
        } else {
            codeFrequency |= 0 << 5 - i;
        }
        result.push(code.code);
        decodedCodes.push(code);
    }

    firstDigit = self._calculateFirstDigit(codeFrequency);
    if (firstDigit === null) {
        return null;
    }
    result.unshift(firstDigit);

    code = self._findPattern(self.MIDDLE_PATTERN, code.end, true, false);
    if (code === null) {
        return null;
    }
    decodedCodes.push(code);

    for (i = 0; i < 6; i++) {
        code = self._decodeCode(code.end, self.CODE_G_START);
        if (!code) {
            return null;
        }
        decodedCodes.push(code);
        result.push(code.code);
    }

    return code;
};

EANReader.prototype._decode = function () {
    var startInfo,
        self = this,
        code,
        result = [],
        decodedCodes = [],
        resultInfo = {};

    startInfo = self._findStart();
    if (!startInfo) {
        return null;
    }
    code = {
        code: startInfo.code,
        start: startInfo.start,
        end: startInfo.end
    };
    decodedCodes.push(code);
    code = self._decodePayload(code, result, decodedCodes);
    if (!code) {
        return null;
    }
    code = self._findEnd(code.end, false);
    if (!code) {
        return null;
    }

    decodedCodes.push(code);

    // Checksum
    if (!self._checksum(result)) {
        return null;
    }

    if (this.supplements.length > 0) {
        var ext = this._decodeExtensions(code.end);
        if (!ext) {
            return null;
        }
        var lastCode = ext.decodedCodes[ext.decodedCodes.length - 1],
            endInfo = {
            start: lastCode.start + ((lastCode.end - lastCode.start) / 2 | 0),
            end: lastCode.end
        };
        if (!self._verifyTrailingWhitespace(endInfo)) {
            return null;
        }
        resultInfo = {
            supplement: ext,
            code: result.join("") + ext.code
        };
    }

    return _extends({
        code: result.join(""),
        start: startInfo.start,
        end: code.end,
        codeset: "",
        startInfo: startInfo,
        decodedCodes: decodedCodes
    }, resultInfo);
};

EANReader.prototype._decodeExtensions = function (offset) {
    var i,
        start = this._nextSet(this._row, offset),
        startInfo = this._findPattern(this.EXTENSION_START_PATTERN, start, false, false),
        result;

    if (startInfo === null) {
        return null;
    }

    for (i = 0; i < this.supplements.length; i++) {
        result = this.supplements[i].decode(this._row, startInfo.end);
        if (result !== null) {
            return {
                code: result.code,
                start: start,
                startInfo: startInfo,
                end: result.end,
                codeset: "",
                decodedCodes: result.decodedCodes
            };
        }
    }
    return null;
};

EANReader.prototype._checksum = function (result) {
    var sum = 0,
        i;

    for (i = result.length - 2; i >= 0; i -= 2) {
        sum += result[i];
    }
    sum *= 3;
    for (i = result.length - 1; i >= 0; i -= 2) {
        sum += result[i];
    }
    return sum % 10 === 0;
};

EANReader.CONFIG_KEYS = {
    supplements: {
        'type': 'arrayOf(string)',
        'default': [],
        'description': 'Allowed extensions to be decoded (2 and/or 5)'
    }
};

/* harmony default export */ __webpack_exports__["a"] = EANReader;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(38);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function BarcodeReader(config, supplements) {
    this._row = [];
    this.config = config || {};
    this.supplements = supplements;
    return this;
}

BarcodeReader.prototype._nextUnset = function (line, start) {
    var i;

    if (start === undefined) {
        start = 0;
    }
    for (i = start; i < line.length; i++) {
        if (!line[i]) {
            return i;
        }
    }
    return line.length;
};

BarcodeReader.prototype._matchPattern = function (counter, code, maxSingleError) {
    var i,
        error = 0,
        singleError = 0,
        sum = 0,
        modulo = 0,
        barWidth,
        count,
        scaled;

    maxSingleError = maxSingleError || this.SINGLE_CODE_ERROR || 1;

    for (i = 0; i < counter.length; i++) {
        sum += counter[i];
        modulo += code[i];
    }
    if (sum < modulo) {
        return Number.MAX_VALUE;
    }
    barWidth = sum / modulo;
    maxSingleError *= barWidth;

    for (i = 0; i < counter.length; i++) {
        count = counter[i];
        scaled = code[i] * barWidth;
        singleError = Math.abs(count - scaled) / scaled;
        if (singleError > maxSingleError) {
            return Number.MAX_VALUE;
        }
        error += singleError;
    }
    return error / modulo;
};

BarcodeReader.prototype._nextSet = function (line, offset) {
    var i;

    offset = offset || 0;
    for (i = offset; i < line.length; i++) {
        if (line[i]) {
            return i;
        }
    }
    return line.length;
};

BarcodeReader.prototype._correctBars = function (counter, correction, indices) {
    var length = indices.length,
        tmp = 0;
    while (length--) {
        tmp = counter[indices[length]] * (1 - (1 - correction) / 2);
        if (tmp > 1) {
            counter[indices[length]] = tmp;
        }
    }
};

BarcodeReader.prototype._matchTrace = function (cmpCounter, epsilon) {
    var counter = [],
        i,
        self = this,
        offset = self._nextSet(self._row),
        isWhite = !self._row[offset],
        counterPos = 0,
        bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0
    },
        error;

    if (cmpCounter) {
        for (i = 0; i < cmpCounter.length; i++) {
            counter.push(0);
        }
        for (i = offset; i < self._row.length; i++) {
            if (self._row[i] ^ isWhite) {
                counter[counterPos]++;
            } else {
                if (counterPos === counter.length - 1) {
                    error = self._matchPattern(counter, cmpCounter);

                    if (error < epsilon) {
                        bestMatch.start = i - offset;
                        bestMatch.end = i;
                        bestMatch.counter = counter;
                        return bestMatch;
                    } else {
                        return null;
                    }
                } else {
                    counterPos++;
                }
                counter[counterPos] = 1;
                isWhite = !isWhite;
            }
        }
    } else {
        counter.push(0);
        for (i = offset; i < self._row.length; i++) {
            if (self._row[i] ^ isWhite) {
                counter[counterPos]++;
            } else {
                counterPos++;
                counter.push(0);
                counter[counterPos] = 1;
                isWhite = !isWhite;
            }
        }
    }

    // if cmpCounter was not given
    bestMatch.start = offset;
    bestMatch.end = self._row.length - 1;
    bestMatch.counter = counter;
    return bestMatch;
};

BarcodeReader.prototype.decodePattern = function (pattern) {
    var self = this,
        result;

    self._row = pattern;
    result = self._decode();
    if (result === null) {
        self._row.reverse();
        result = self._decode();
        if (result) {
            result.direction = BarcodeReader.DIRECTION.REVERSE;
            result.start = self._row.length - result.start;
            result.end = self._row.length - result.end;
        }
    } else {
        result.direction = BarcodeReader.DIRECTION.FORWARD;
    }
    if (result) {
        result.format = self.FORMAT;
    }
    return result;
};

BarcodeReader.prototype._matchRange = function (start, end, value) {
    var i;

    start = start < 0 ? 0 : start;
    for (i = start; i < end; i++) {
        if (this._row[i] !== value) {
            return false;
        }
    }
    return true;
};

BarcodeReader.prototype._fillCounters = function (offset, end, isWhite) {
    var self = this,
        counterPos = 0,
        i,
        counters = [];

    isWhite = typeof isWhite !== 'undefined' ? isWhite : true;
    offset = typeof offset !== 'undefined' ? offset : self._nextUnset(self._row);
    end = end || self._row.length;

    counters[counterPos] = 0;
    for (i = offset; i < end; i++) {
        if (self._row[i] ^ isWhite) {
            counters[counterPos]++;
        } else {
            counterPos++;
            counters[counterPos] = 1;
            isWhite = !isWhite;
        }
    }
    return counters;
};

Object.defineProperty(BarcodeReader.prototype, "FORMAT", {
    value: 'unknown',
    writeable: false
});

BarcodeReader.DIRECTION = {
    FORWARD: 1,
    REVERSE: -1
};

BarcodeReader.Exception = {
    StartNotFoundException: "Start-Info was not found!",
    CodeNotFoundException: "Code could not be found!",
    PatternNotFoundException: "Pattern could not be found!"
};

BarcodeReader.CONFIG_KEYS = {};

/* harmony default export */ __webpack_exports__["a"] = BarcodeReader;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = clone

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new Float32Array(2)
    out[0] = a[0]
    out[1] = a[1]
    return out
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    getRawTag = __webpack_require__(117),
    objectToString = __webpack_require__(144);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    init: function init(arr, val) {
        var l = arr.length;
        while (l--) {
            arr[l] = val;
        }
    },

    /**
     * Shuffles the content of an array
     * @return {Array} the array itself shuffled
     */
    shuffle: function shuffle(arr) {
        var i = arr.length - 1,
            j,
            x;
        for (i; i >= 0; i--) {
            j = Math.floor(Math.random() * i);
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    },

    toPointList: function toPointList(arr) {
        var i,
            j,
            row = [],
            rows = [];
        for (i = 0; i < arr.length; i++) {
            row = [];
            for (j = 0; j < arr[i].length; j++) {
                row[j] = arr[i][j];
            }
            rows[i] = "[" + row.join(",") + "]";
        }
        return "[" + rows.join(",\r\n") + "]";
    },

    /**
     * returns the elements which's score is bigger than the threshold
     * @return {Array} the reduced array
     */
    threshold: function threshold(arr, _threshold, scoreFunc) {
        var i,
            queue = [];
        for (i = 0; i < arr.length; i++) {
            if (scoreFunc.apply(arr, [arr[i]]) >= _threshold) {
                queue.push(arr[i]);
            }
        }
        return queue;
    },

    maxIndex: function maxIndex(arr) {
        var i,
            max = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > arr[max]) {
                max = i;
            }
        }
        return max;
    },

    max: function max(arr) {
        var i,
            max = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    },

    sum: function sum(arr) {
        var length = arr.length,
            sum = 0;

        while (length--) {
            sum += arr[length];
        }
        return sum;
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    drawRect: function drawRect(pos, size, ctx, style) {
        ctx.strokeStyle = style.color;
        ctx.fillStyle = style.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeRect(pos.x, pos.y, size.x, size.y);
    },
    drawPath: function drawPath(path, def, ctx, style) {
        ctx.strokeStyle = style.color;
        ctx.fillStyle = style.color;
        ctx.lineWidth = style.lineWidth;
        ctx.beginPath();
        ctx.moveTo(path[0][def.x], path[0][def.y]);
        for (var j = 1; j < path.length; j++) {
            ctx.lineTo(path[j][def.x], path[j][def.y]);
        }
        ctx.closePath();
        ctx.stroke();
    },
    drawImage: function drawImage(imageData, size, ctx) {
        var canvasData = ctx.getImageData(0, 0, size.x, size.y),
            data = canvasData.data,
            imageDataPos = imageData.length,
            canvasDataPos = data.length,
            value;

        if (canvasDataPos / imageDataPos !== 4) {
            return false;
        }
        while (imageDataPos--) {
            value = imageData[imageDataPos];
            data[--canvasDataPos] = 255;
            data[--canvasDataPos] = value;
            data[--canvasDataPos] = value;
            data[--canvasDataPos] = value;
        }
        ctx.putImageData(canvasData, 0, 0);
        return true;
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(131),
    listCacheDelete = __webpack_require__(132),
    listCacheGet = __webpack_require__(133),
    listCacheHas = __webpack_require__(134),
    listCacheSet = __webpack_require__(135);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(17);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isKey = __webpack_require__(128),
    stringToPath = __webpack_require__(152),
    toString = __webpack_require__(163);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(129);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(22);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(94),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cluster__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_helper__ = __webpack_require__(8);
/* harmony export (immutable) */ __webpack_exports__["b"] = imageRef;
/* unused harmony export computeIntegralImage2 */
/* unused harmony export computeIntegralImage */
/* unused harmony export thresholdImage */
/* unused harmony export computeHistogram */
/* unused harmony export sharpenLine */
/* unused harmony export determineOtsuThreshold */
/* harmony export (immutable) */ __webpack_exports__["f"] = otsuThreshold;
/* unused harmony export computeBinaryImage */
/* harmony export (immutable) */ __webpack_exports__["g"] = cluster;
/* unused harmony export Tracer */
/* unused harmony export DILATE */
/* unused harmony export ERODE */
/* unused harmony export dilate */
/* unused harmony export erode */
/* unused harmony export subtract */
/* unused harmony export bitwiseOr */
/* unused harmony export countNonZero */
/* harmony export (immutable) */ __webpack_exports__["h"] = topGeneric;
/* unused harmony export grayArrayFromImage */
/* unused harmony export grayArrayFromContext */
/* harmony export (immutable) */ __webpack_exports__["c"] = grayAndHalfSampleFromCanvasData;
/* harmony export (immutable) */ __webpack_exports__["d"] = computeGray;
/* unused harmony export loadImageArray */
/* harmony export (immutable) */ __webpack_exports__["i"] = halfSample;
/* harmony export (immutable) */ __webpack_exports__["a"] = hsv2rgb;
/* unused harmony export _computeDivisors */
/* harmony export (immutable) */ __webpack_exports__["e"] = calculatePatchSize;
/* unused harmony export _parseCSSDimensionValues */
/* unused harmony export _dimensionsConverters */
/* harmony export (immutable) */ __webpack_exports__["j"] = computeImageArea;


var vec2 = {
    clone: __webpack_require__(6)
};
var vec3 = {
    clone: __webpack_require__(81)
};

/**
 * @param x x-coordinate
 * @param y y-coordinate
 * @return ImageReference {x,y} Coordinate
 */
function imageRef(x, y) {
    var that = {
        x: x,
        y: y,
        toVec2: function toVec2() {
            return vec2.clone([this.x, this.y]);
        },
        toVec3: function toVec3() {
            return vec3.clone([this.x, this.y, 1]);
        },
        round: function round() {
            this.x = this.x > 0.0 ? Math.floor(this.x + 0.5) : Math.floor(this.x - 0.5);
            this.y = this.y > 0.0 ? Math.floor(this.y + 0.5) : Math.floor(this.y - 0.5);
            return this;
        }
    };
    return that;
};

/**
 * Computes an integral image of a given grayscale image.
 * @param imageDataContainer {ImageDataContainer} the image to be integrated
 */
function computeIntegralImage2(imageWrapper, integralWrapper) {
    var imageData = imageWrapper.data;
    var width = imageWrapper.size.x;
    var height = imageWrapper.size.y;
    var integralImageData = integralWrapper.data;
    var sum = 0,
        posA = 0,
        posB = 0,
        posC = 0,
        posD = 0,
        x,
        y;

    // sum up first column
    posB = width;
    sum = 0;
    for (y = 1; y < height; y++) {
        sum += imageData[posA];
        integralImageData[posB] += sum;
        posA += width;
        posB += width;
    }

    posA = 0;
    posB = 1;
    sum = 0;
    for (x = 1; x < width; x++) {
        sum += imageData[posA];
        integralImageData[posB] += sum;
        posA++;
        posB++;
    }

    for (y = 1; y < height; y++) {
        posA = y * width + 1;
        posB = (y - 1) * width + 1;
        posC = y * width;
        posD = (y - 1) * width;
        for (x = 1; x < width; x++) {
            integralImageData[posA] += imageData[posA] + integralImageData[posB] + integralImageData[posC] - integralImageData[posD];
            posA++;
            posB++;
            posC++;
            posD++;
        }
    }
};

function computeIntegralImage(imageWrapper, integralWrapper) {
    var imageData = imageWrapper.data;
    var width = imageWrapper.size.x;
    var height = imageWrapper.size.y;
    var integralImageData = integralWrapper.data;
    var sum = 0;

    // sum up first row
    for (var i = 0; i < width; i++) {
        sum += imageData[i];
        integralImageData[i] = sum;
    }

    for (var v = 1; v < height; v++) {
        sum = 0;
        for (var u = 0; u < width; u++) {
            sum += imageData[v * width + u];
            integralImageData[v * width + u] = sum + integralImageData[(v - 1) * width + u];
        }
    }
};

function thresholdImage(imageWrapper, threshold, targetWrapper) {
    if (!targetWrapper) {
        targetWrapper = imageWrapper;
    }
    var imageData = imageWrapper.data,
        length = imageData.length,
        targetData = targetWrapper.data;

    while (length--) {
        targetData[length] = imageData[length] < threshold ? 1 : 0;
    }
};

function computeHistogram(imageWrapper, bitsPerPixel) {
    if (!bitsPerPixel) {
        bitsPerPixel = 8;
    }
    var imageData = imageWrapper.data,
        length = imageData.length,
        bitShift = 8 - bitsPerPixel,
        bucketCnt = 1 << bitsPerPixel,
        hist = new Int32Array(bucketCnt);

    while (length--) {
        hist[imageData[length] >> bitShift]++;
    }
    return hist;
};

function sharpenLine(line) {
    var i,
        length = line.length,
        left = line[0],
        center = line[1],
        right;

    for (i = 1; i < length - 1; i++) {
        right = line[i + 1];
        //  -1 4 -1 kernel
        line[i - 1] = center * 2 - left - right & 255;
        left = center;
        center = right;
    }
    return line;
};

function determineOtsuThreshold(imageWrapper, bitsPerPixel) {
    if (!bitsPerPixel) {
        bitsPerPixel = 8;
    }
    var hist,
        threshold,
        bitShift = 8 - bitsPerPixel;

    function px(init, end) {
        var sum = 0,
            i;
        for (i = init; i <= end; i++) {
            sum += hist[i];
        }
        return sum;
    }

    function mx(init, end) {
        var i,
            sum = 0;

        for (i = init; i <= end; i++) {
            sum += i * hist[i];
        }

        return sum;
    }

    function determineThreshold() {
        var vet = [0],
            p1,
            p2,
            p12,
            k,
            m1,
            m2,
            m12,
            max = (1 << bitsPerPixel) - 1;

        hist = computeHistogram(imageWrapper, bitsPerPixel);
        for (k = 1; k < max; k++) {
            p1 = px(0, k);
            p2 = px(k + 1, max);
            p12 = p1 * p2;
            if (p12 === 0) {
                p12 = 1;
            }
            m1 = mx(0, k) * p2;
            m2 = mx(k + 1, max) * p1;
            m12 = m1 - m2;
            vet[k] = m12 * m12 / p12;
        }
        return __WEBPACK_IMPORTED_MODULE_1__array_helper__["a" /* default */].maxIndex(vet);
    }

    threshold = determineThreshold();
    return threshold << bitShift;
};

function otsuThreshold(imageWrapper, targetWrapper) {
    var threshold = determineOtsuThreshold(imageWrapper);

    thresholdImage(imageWrapper, threshold, targetWrapper);
    return threshold;
};

// local thresholding
function computeBinaryImage(imageWrapper, integralWrapper, targetWrapper) {
    computeIntegralImage(imageWrapper, integralWrapper);

    if (!targetWrapper) {
        targetWrapper = imageWrapper;
    }
    var imageData = imageWrapper.data;
    var targetData = targetWrapper.data;
    var width = imageWrapper.size.x;
    var height = imageWrapper.size.y;
    var integralImageData = integralWrapper.data;
    var sum = 0,
        v,
        u,
        kernel = 3,
        A,
        B,
        C,
        D,
        avg,
        size = (kernel * 2 + 1) * (kernel * 2 + 1);

    // clear out top & bottom-border
    for (v = 0; v <= kernel; v++) {
        for (u = 0; u < width; u++) {
            targetData[v * width + u] = 0;
            targetData[(height - 1 - v) * width + u] = 0;
        }
    }

    // clear out left & right border
    for (v = kernel; v < height - kernel; v++) {
        for (u = 0; u <= kernel; u++) {
            targetData[v * width + u] = 0;
            targetData[v * width + (width - 1 - u)] = 0;
        }
    }

    for (v = kernel + 1; v < height - kernel - 1; v++) {
        for (u = kernel + 1; u < width - kernel; u++) {
            A = integralImageData[(v - kernel - 1) * width + (u - kernel - 1)];
            B = integralImageData[(v - kernel - 1) * width + (u + kernel)];
            C = integralImageData[(v + kernel) * width + (u - kernel - 1)];
            D = integralImageData[(v + kernel) * width + (u + kernel)];
            sum = D - C - B + A;
            avg = sum / size;
            targetData[v * width + u] = imageData[v * width + u] > avg + 5 ? 0 : 1;
        }
    }
};

function cluster(points, threshold, property) {
    var i,
        k,
        cluster,
        point,
        clusters = [];

    if (!property) {
        property = "rad";
    }

    function addToCluster(newPoint) {
        var found = false;
        for (k = 0; k < clusters.length; k++) {
            cluster = clusters[k];
            if (cluster.fits(newPoint)) {
                cluster.add(newPoint);
                found = true;
            }
        }
        return found;
    }

    // iterate over each cloud
    for (i = 0; i < points.length; i++) {
        point = __WEBPACK_IMPORTED_MODULE_0__cluster__["a" /* default */].createPoint(points[i], i, property);
        if (!addToCluster(point)) {
            clusters.push(__WEBPACK_IMPORTED_MODULE_0__cluster__["a" /* default */].create(point, threshold));
        }
    }
    return clusters;
};

var Tracer = {
    trace: function trace(points, vec) {
        var iteration,
            maxIterations = 10,
            top = [],
            result = [],
            centerPos = 0,
            currentPos = 0;

        function trace(idx, forward) {
            var from,
                to,
                toIdx,
                predictedPos,
                thresholdX = 1,
                thresholdY = Math.abs(vec[1] / 10),
                found = false;

            function match(pos, predicted) {
                if (pos.x > predicted.x - thresholdX && pos.x < predicted.x + thresholdX && pos.y > predicted.y - thresholdY && pos.y < predicted.y + thresholdY) {
                    return true;
                } else {
                    return false;
                }
            }

            // check if the next index is within the vec specifications
            // if not, check as long as the threshold is met

            from = points[idx];
            if (forward) {
                predictedPos = {
                    x: from.x + vec[0],
                    y: from.y + vec[1]
                };
            } else {
                predictedPos = {
                    x: from.x - vec[0],
                    y: from.y - vec[1]
                };
            }

            toIdx = forward ? idx + 1 : idx - 1;
            to = points[toIdx];
            while (to && (found = match(to, predictedPos)) !== true && Math.abs(to.y - from.y) < vec[1]) {
                toIdx = forward ? toIdx + 1 : toIdx - 1;
                to = points[toIdx];
            }

            return found ? toIdx : null;
        }

        for (iteration = 0; iteration < maxIterations; iteration++) {
            // randomly select point to start with
            centerPos = Math.floor(Math.random() * points.length);

            // trace forward
            top = [];
            currentPos = centerPos;
            top.push(points[currentPos]);
            while ((currentPos = trace(currentPos, true)) !== null) {
                top.push(points[currentPos]);
            }
            if (centerPos > 0) {
                currentPos = centerPos;
                while ((currentPos = trace(currentPos, false)) !== null) {
                    top.push(points[currentPos]);
                }
            }

            if (top.length > result.length) {
                result = top;
            }
        }
        return result;
    }
};

var DILATE = 1;
var ERODE = 2;

function dilate(inImageWrapper, outImageWrapper) {
    var v,
        u,
        inImageData = inImageWrapper.data,
        outImageData = outImageWrapper.data,
        height = inImageWrapper.size.y,
        width = inImageWrapper.size.x,
        sum,
        yStart1,
        yStart2,
        xStart1,
        xStart2;

    for (v = 1; v < height - 1; v++) {
        for (u = 1; u < width - 1; u++) {
            yStart1 = v - 1;
            yStart2 = v + 1;
            xStart1 = u - 1;
            xStart2 = u + 1;
            sum = inImageData[yStart1 * width + xStart1] + inImageData[yStart1 * width + xStart2] + inImageData[v * width + u] + inImageData[yStart2 * width + xStart1] + inImageData[yStart2 * width + xStart2];
            outImageData[v * width + u] = sum > 0 ? 1 : 0;
        }
    }
};

function erode(inImageWrapper, outImageWrapper) {
    var v,
        u,
        inImageData = inImageWrapper.data,
        outImageData = outImageWrapper.data,
        height = inImageWrapper.size.y,
        width = inImageWrapper.size.x,
        sum,
        yStart1,
        yStart2,
        xStart1,
        xStart2;

    for (v = 1; v < height - 1; v++) {
        for (u = 1; u < width - 1; u++) {
            yStart1 = v - 1;
            yStart2 = v + 1;
            xStart1 = u - 1;
            xStart2 = u + 1;
            sum = inImageData[yStart1 * width + xStart1] + inImageData[yStart1 * width + xStart2] + inImageData[v * width + u] + inImageData[yStart2 * width + xStart1] + inImageData[yStart2 * width + xStart2];
            outImageData[v * width + u] = sum === 5 ? 1 : 0;
        }
    }
};

function subtract(aImageWrapper, bImageWrapper, resultImageWrapper) {
    if (!resultImageWrapper) {
        resultImageWrapper = aImageWrapper;
    }
    var length = aImageWrapper.data.length,
        aImageData = aImageWrapper.data,
        bImageData = bImageWrapper.data,
        cImageData = resultImageWrapper.data;

    while (length--) {
        cImageData[length] = aImageData[length] - bImageData[length];
    }
};

function bitwiseOr(aImageWrapper, bImageWrapper, resultImageWrapper) {
    if (!resultImageWrapper) {
        resultImageWrapper = aImageWrapper;
    }
    var length = aImageWrapper.data.length,
        aImageData = aImageWrapper.data,
        bImageData = bImageWrapper.data,
        cImageData = resultImageWrapper.data;

    while (length--) {
        cImageData[length] = aImageData[length] || bImageData[length];
    }
};

function countNonZero(imageWrapper) {
    var length = imageWrapper.data.length,
        data = imageWrapper.data,
        sum = 0;

    while (length--) {
        sum += data[length];
    }
    return sum;
};

function topGeneric(list, top, scoreFunc) {
    var i,
        minIdx = 0,
        min = 0,
        queue = [],
        score,
        hit,
        pos;

    for (i = 0; i < top; i++) {
        queue[i] = {
            score: 0,
            item: null
        };
    }

    for (i = 0; i < list.length; i++) {
        score = scoreFunc.apply(this, [list[i]]);
        if (score > min) {
            hit = queue[minIdx];
            hit.score = score;
            hit.item = list[i];
            min = Number.MAX_VALUE;
            for (pos = 0; pos < top; pos++) {
                if (queue[pos].score < min) {
                    min = queue[pos].score;
                    minIdx = pos;
                }
            }
        }
    }

    return queue;
};

function grayArrayFromImage(htmlImage, offsetX, ctx, array) {
    ctx.drawImage(htmlImage, offsetX, 0, htmlImage.width, htmlImage.height);
    var ctxData = ctx.getImageData(offsetX, 0, htmlImage.width, htmlImage.height).data;
    computeGray(ctxData, array);
};

function grayArrayFromContext(ctx, size, offset, array) {
    var ctxData = ctx.getImageData(offset.x, offset.y, size.x, size.y).data;
    computeGray(ctxData, array);
};

function grayAndHalfSampleFromCanvasData(canvasData, size, outArray) {
    var topRowIdx = 0;
    var bottomRowIdx = size.x;
    var endIdx = Math.floor(canvasData.length / 4);
    var outWidth = size.x / 2;
    var outImgIdx = 0;
    var inWidth = size.x;
    var i;

    while (bottomRowIdx < endIdx) {
        for (i = 0; i < outWidth; i++) {
            outArray[outImgIdx] = Math.floor((0.299 * canvasData[topRowIdx * 4 + 0] + 0.587 * canvasData[topRowIdx * 4 + 1] + 0.114 * canvasData[topRowIdx * 4 + 2] + (0.299 * canvasData[(topRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(topRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(topRowIdx + 1) * 4 + 2]) + (0.299 * canvasData[bottomRowIdx * 4 + 0] + 0.587 * canvasData[bottomRowIdx * 4 + 1] + 0.114 * canvasData[bottomRowIdx * 4 + 2]) + (0.299 * canvasData[(bottomRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(bottomRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(bottomRowIdx + 1) * 4 + 2])) / 4);
            outImgIdx++;
            topRowIdx = topRowIdx + 2;
            bottomRowIdx = bottomRowIdx + 2;
        }
        topRowIdx = topRowIdx + inWidth;
        bottomRowIdx = bottomRowIdx + inWidth;
    }
};

function computeGray(imageData, outArray, config) {
    var l = imageData.length / 4 | 0,
        i,
        singleChannel = config && config.singleChannel === true;

    if (singleChannel) {
        for (i = 0; i < l; i++) {
            outArray[i] = imageData[i * 4 + 0];
        }
    } else {
        for (i = 0; i < l; i++) {
            outArray[i] = Math.floor(0.299 * imageData[i * 4 + 0] + 0.587 * imageData[i * 4 + 1] + 0.114 * imageData[i * 4 + 2]);
        }
    }
};

function loadImageArray(src, callback, canvas) {
    if (!canvas) {
        canvas = document.createElement('canvas');
    }
    var img = new Image();
    img.callback = callback;
    img.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0);
        var array = new Uint8Array(this.width * this.height);
        ctx.drawImage(this, 0, 0);
        var data = ctx.getImageData(0, 0, this.width, this.height).data;
        computeGray(data, array);
        this.callback(array, {
            x: this.width,
            y: this.height
        }, this);
    };
    img.src = src;
};

/**
 * @param inImg {ImageWrapper} input image to be sampled
 * @param outImg {ImageWrapper} to be stored in
 */
function halfSample(inImgWrapper, outImgWrapper) {
    var inImg = inImgWrapper.data;
    var inWidth = inImgWrapper.size.x;
    var outImg = outImgWrapper.data;
    var topRowIdx = 0;
    var bottomRowIdx = inWidth;
    var endIdx = inImg.length;
    var outWidth = inWidth / 2;
    var outImgIdx = 0;
    while (bottomRowIdx < endIdx) {
        for (var i = 0; i < outWidth; i++) {
            outImg[outImgIdx] = Math.floor((inImg[topRowIdx] + inImg[topRowIdx + 1] + inImg[bottomRowIdx] + inImg[bottomRowIdx + 1]) / 4);
            outImgIdx++;
            topRowIdx = topRowIdx + 2;
            bottomRowIdx = bottomRowIdx + 2;
        }
        topRowIdx = topRowIdx + inWidth;
        bottomRowIdx = bottomRowIdx + inWidth;
    }
};

function hsv2rgb(hsv, rgb) {
    var h = hsv[0],
        s = hsv[1],
        v = hsv[2],
        c = v * s,
        x = c * (1 - Math.abs(h / 60 % 2 - 1)),
        m = v - c,
        r = 0,
        g = 0,
        b = 0;

    rgb = rgb || [0, 0, 0];

    if (h < 60) {
        r = c;
        g = x;
    } else if (h < 120) {
        r = x;
        g = c;
    } else if (h < 180) {
        g = c;
        b = x;
    } else if (h < 240) {
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        b = c;
    } else if (h < 360) {
        r = c;
        b = x;
    }
    rgb[0] = (r + m) * 255 | 0;
    rgb[1] = (g + m) * 255 | 0;
    rgb[2] = (b + m) * 255 | 0;
    return rgb;
};

function _computeDivisors(n) {
    var largeDivisors = [],
        divisors = [],
        i;

    for (i = 1; i < Math.sqrt(n) + 1; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                largeDivisors.unshift(Math.floor(n / i));
            }
        }
    }
    return divisors.concat(largeDivisors);
};

function _computeIntersection(arr1, arr2) {
    var i = 0,
        j = 0,
        result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return result;
};

function calculatePatchSize(patchSize, imgSize) {
    var divisorsX = _computeDivisors(imgSize.x),
        divisorsY = _computeDivisors(imgSize.y),
        wideSide = Math.max(imgSize.x, imgSize.y),
        common = _computeIntersection(divisorsX, divisorsY),
        nrOfPatchesList = [8, 10, 15, 20, 32, 60, 80],
        nrOfPatchesMap = {
        "x-small": 5,
        "small": 4,
        "medium": 3,
        "large": 2,
        "x-large": 1
    },
        nrOfPatchesIdx = nrOfPatchesMap[patchSize] || nrOfPatchesMap.medium,
        nrOfPatches = nrOfPatchesList[nrOfPatchesIdx],
        desiredPatchSize = Math.floor(wideSide / nrOfPatches),
        optimalPatchSize;

    function findPatchSizeForDivisors(divisors) {
        var i = 0,
            found = divisors[Math.floor(divisors.length / 2)];

        while (i < divisors.length - 1 && divisors[i] < desiredPatchSize) {
            i++;
        }
        if (i > 0) {
            if (Math.abs(divisors[i] - desiredPatchSize) > Math.abs(divisors[i - 1] - desiredPatchSize)) {
                found = divisors[i - 1];
            } else {
                found = divisors[i];
            }
        }
        if (desiredPatchSize / found < nrOfPatchesList[nrOfPatchesIdx + 1] / nrOfPatchesList[nrOfPatchesIdx] && desiredPatchSize / found > nrOfPatchesList[nrOfPatchesIdx - 1] / nrOfPatchesList[nrOfPatchesIdx]) {
            return { x: found, y: found };
        }
        return null;
    }

    optimalPatchSize = findPatchSizeForDivisors(common);
    if (!optimalPatchSize) {
        optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(wideSide));
        if (!optimalPatchSize) {
            optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(desiredPatchSize * nrOfPatches));
        }
    }
    return optimalPatchSize;
};

function _parseCSSDimensionValues(value) {
    var dimension = {
        value: parseFloat(value),
        unit: value.indexOf("%") === value.length - 1 ? "%" : "%"
    };

    return dimension;
};

var _dimensionsConverters = {
    top: function top(dimension, context) {
        if (dimension.unit === "%") {
            return Math.floor(context.height * (dimension.value / 100));
        }
    },
    right: function right(dimension, context) {
        if (dimension.unit === "%") {
            return Math.floor(context.width - context.width * (dimension.value / 100));
        }
    },
    bottom: function bottom(dimension, context) {
        if (dimension.unit === "%") {
            return Math.floor(context.height - context.height * (dimension.value / 100));
        }
    },
    left: function left(dimension, context) {
        if (dimension.unit === "%") {
            return Math.floor(context.width * (dimension.value / 100));
        }
    }
};

function computeImageArea(inputWidth, inputHeight, area) {
    var context = { width: inputWidth, height: inputHeight };

    var parsedArea = Object.keys(area).reduce(function (result, key) {
        var value = area[key],
            parsed = _parseCSSDimensionValues(value),
            calculated = _dimensionsConverters[key](parsed, context);

        result[key] = calculated;
        return result;
    }, {});

    return {
        sx: parsedArea.left,
        sy: parsedArea.top,
        sw: parsedArea.right - parsedArea.left,
        sh: parsedArea.bottom - parsedArea.top
    };
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subImage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_cv_utils__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_array_helper__ = __webpack_require__(8);



var vec2 = {
    clone: __webpack_require__(6)
};

/**
 * Represents a basic image combining the data and size.
 * In addition, some methods for manipulation are contained.
 * @param size {x,y} The size of the image in pixel
 * @param data {Array} If given, a flat array containing the pixel data
 * @param ArrayType {Type} If given, the desired DataType of the Array (may be typed/non-typed)
 * @param initialize {Boolean} Indicating if the array should be initialized on creation.
 * @returns {ImageWrapper}
 */
function ImageWrapper(size, data, ArrayType, initialize) {
    if (!data) {
        if (ArrayType) {
            this.data = new ArrayType(size.x * size.y);
            if (ArrayType === Array && initialize) {
                __WEBPACK_IMPORTED_MODULE_2__common_array_helper__["a" /* default */].init(this.data, 0);
            }
        } else {
            this.data = new Uint8Array(size.x * size.y);
            if (Uint8Array === Array && initialize) {
                __WEBPACK_IMPORTED_MODULE_2__common_array_helper__["a" /* default */].init(this.data, 0);
            }
        }
    } else {
        this.data = data;
    }
    this.size = size;
}

/**
 * tests if a position is within the image with a given offset
 * @param imgRef {x, y} The location to test
 * @param border Number the padding value in pixel
 * @returns {Boolean} true if location inside the image's border, false otherwise
 * @see cvd/image.h
 */
ImageWrapper.prototype.inImageWithBorder = function (imgRef, border) {
    return imgRef.x >= border && imgRef.y >= border && imgRef.x < this.size.x - border && imgRef.y < this.size.y - border;
};

/**
 * Performs bilinear sampling
 * @param inImg Image to extract sample from
 * @param x the x-coordinate
 * @param y the y-coordinate
 * @returns the sampled value
 * @see cvd/vision.h
 */
ImageWrapper.sample = function (inImg, x, y) {
    var lx = Math.floor(x);
    var ly = Math.floor(y);
    var w = inImg.size.x;
    var base = ly * inImg.size.x + lx;
    var a = inImg.data[base + 0];
    var b = inImg.data[base + 1];
    var c = inImg.data[base + w];
    var d = inImg.data[base + w + 1];
    var e = a - b;
    x -= lx;
    y -= ly;

    var result = Math.floor(x * (y * (e - c + d) - e) + y * (c - a) + a);
    return result;
};

/**
 * Initializes a given array. Sets each element to zero.
 * @param array {Array} The array to initialize
 */
ImageWrapper.clearArray = function (array) {
    var l = array.length;
    while (l--) {
        array[l] = 0;
    }
};

/**
 * Creates a {SubImage} from the current image ({this}).
 * @param from {ImageRef} The position where to start the {SubImage} from. (top-left corner)
 * @param size {ImageRef} The size of the resulting image
 * @returns {SubImage} A shared part of the original image
 */
ImageWrapper.prototype.subImage = function (from, size) {
    return new __WEBPACK_IMPORTED_MODULE_0__subImage__["a" /* default */](from, size, this);
};

/**
 * Creates an {ImageWrapper) and copies the needed underlying image-data area
 * @param imageWrapper {ImageWrapper} The target {ImageWrapper} where the data should be copied
 * @param from {ImageRef} The location where to copy from (top-left location)
 */
ImageWrapper.prototype.subImageAsCopy = function (imageWrapper, from) {
    var sizeY = imageWrapper.size.y,
        sizeX = imageWrapper.size.x;
    var x, y;
    for (x = 0; x < sizeX; x++) {
        for (y = 0; y < sizeY; y++) {
            imageWrapper.data[y * sizeX + x] = this.data[(from.y + y) * this.size.x + from.x + x];
        }
    }
};

ImageWrapper.prototype.copyTo = function (imageWrapper) {
    var length = this.data.length,
        srcData = this.data,
        dstData = imageWrapper.data;

    while (length--) {
        dstData[length] = srcData[length];
    }
};

/**
 * Retrieves a given pixel position from the image
 * @param x {Number} The x-position
 * @param y {Number} The y-position
 * @returns {Number} The grayscale value at the pixel-position
 */
ImageWrapper.prototype.get = function (x, y) {
    return this.data[y * this.size.x + x];
};

/**
 * Retrieves a given pixel position from the image
 * @param x {Number} The x-position
 * @param y {Number} The y-position
 * @returns {Number} The grayscale value at the pixel-position
 */
ImageWrapper.prototype.getSafe = function (x, y) {
    var i;

    if (!this.indexMapping) {
        this.indexMapping = {
            x: [],
            y: []
        };
        for (i = 0; i < this.size.x; i++) {
            this.indexMapping.x[i] = i;
            this.indexMapping.x[i + this.size.x] = i;
        }
        for (i = 0; i < this.size.y; i++) {
            this.indexMapping.y[i] = i;
            this.indexMapping.y[i + this.size.y] = i;
        }
    }
    return this.data[this.indexMapping.y[y + this.size.y] * this.size.x + this.indexMapping.x[x + this.size.x]];
};

/**
 * Sets a given pixel position in the image
 * @param x {Number} The x-position
 * @param y {Number} The y-position
 * @param value {Number} The grayscale value to set
 * @returns {ImageWrapper} The Image itself (for possible chaining)
 */
ImageWrapper.prototype.set = function (x, y, value) {
    this.data[y * this.size.x + x] = value;
    return this;
};

/**
 * Sets the border of the image (1 pixel) to zero
 */
ImageWrapper.prototype.zeroBorder = function () {
    var i,
        width = this.size.x,
        height = this.size.y,
        data = this.data;
    for (i = 0; i < width; i++) {
        data[i] = data[(height - 1) * width + i] = 0;
    }
    for (i = 1; i < height - 1; i++) {
        data[i * width] = data[i * width + (width - 1)] = 0;
    }
};

/**
 * Inverts a binary image in place
 */
ImageWrapper.prototype.invert = function () {
    var data = this.data,
        length = data.length;

    while (length--) {
        data[length] = data[length] ? 0 : 1;
    }
};

ImageWrapper.prototype.convolve = function (kernel) {
    var x,
        y,
        kx,
        ky,
        kSize = kernel.length / 2 | 0,
        accu = 0;
    for (y = 0; y < this.size.y; y++) {
        for (x = 0; x < this.size.x; x++) {
            accu = 0;
            for (ky = -kSize; ky <= kSize; ky++) {
                for (kx = -kSize; kx <= kSize; kx++) {
                    accu += kernel[ky + kSize][kx + kSize] * this.getSafe(x + kx, y + ky);
                }
            }
            this.data[y * this.size.x + x] = accu;
        }
    }
};

ImageWrapper.prototype.moments = function (labelcount) {
    var data = this.data,
        x,
        y,
        height = this.size.y,
        width = this.size.x,
        val,
        ysq,
        labelsum = [],
        i,
        label,
        mu11,
        mu02,
        mu20,
        x_,
        y_,
        tmp,
        result = [],
        PI = Math.PI,
        PI_4 = PI / 4;

    if (labelcount <= 0) {
        return result;
    }

    for (i = 0; i < labelcount; i++) {
        labelsum[i] = {
            m00: 0,
            m01: 0,
            m10: 0,
            m11: 0,
            m02: 0,
            m20: 0,
            theta: 0,
            rad: 0
        };
    }

    for (y = 0; y < height; y++) {
        ysq = y * y;
        for (x = 0; x < width; x++) {
            val = data[y * width + x];
            if (val > 0) {
                label = labelsum[val - 1];
                label.m00 += 1;
                label.m01 += y;
                label.m10 += x;
                label.m11 += x * y;
                label.m02 += ysq;
                label.m20 += x * x;
            }
        }
    }

    for (i = 0; i < labelcount; i++) {
        label = labelsum[i];
        if (!isNaN(label.m00) && label.m00 !== 0) {
            x_ = label.m10 / label.m00;
            y_ = label.m01 / label.m00;
            mu11 = label.m11 / label.m00 - x_ * y_;
            mu02 = label.m02 / label.m00 - y_ * y_;
            mu20 = label.m20 / label.m00 - x_ * x_;
            tmp = (mu02 - mu20) / (2 * mu11);
            tmp = 0.5 * Math.atan(tmp) + (mu11 >= 0 ? PI_4 : -PI_4) + PI;
            label.theta = (tmp * 180 / PI + 90) % 180 - 90;
            if (label.theta < 0) {
                label.theta += 180;
            }
            label.rad = tmp > PI ? tmp - PI : tmp;
            label.vec = vec2.clone([Math.cos(tmp), Math.sin(tmp)]);
            result.push(label);
        }
    }

    return result;
};

/**
 * Displays the {ImageWrapper} in a given canvas
 * @param canvas {Canvas} The canvas element to write to
 * @param scale {Number} Scale which is applied to each pixel-value
 */
ImageWrapper.prototype.show = function (canvas, scale) {
    var ctx, frame, data, current, pixel, x, y;

    if (!scale) {
        scale = 1.0;
    }
    ctx = canvas.getContext('2d');
    canvas.width = this.size.x;
    canvas.height = this.size.y;
    frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = frame.data;
    current = 0;
    for (y = 0; y < this.size.y; y++) {
        for (x = 0; x < this.size.x; x++) {
            pixel = y * this.size.x + x;
            current = this.get(x, y) * scale;
            data[pixel * 4 + 0] = current;
            data[pixel * 4 + 1] = current;
            data[pixel * 4 + 2] = current;
            data[pixel * 4 + 3] = 255;
        }
    }
    //frame.data = data;
    ctx.putImageData(frame, 0, 0);
};

/**
 * Displays the {SubImage} in a given canvas
 * @param canvas {Canvas} The canvas element to write to
 * @param scale {Number} Scale which is applied to each pixel-value
 */
ImageWrapper.prototype.overlay = function (canvas, scale, from) {
    if (!scale || scale < 0 || scale > 360) {
        scale = 360;
    }
    var hsv = [0, 1, 1];
    var rgb = [0, 0, 0];
    var whiteRgb = [255, 255, 255];
    var blackRgb = [0, 0, 0];
    var result = [];
    var ctx = canvas.getContext('2d');
    var frame = ctx.getImageData(from.x, from.y, this.size.x, this.size.y);
    var data = frame.data;
    var length = this.data.length;
    while (length--) {
        hsv[0] = this.data[length] * scale;
        result = hsv[0] <= 0 ? whiteRgb : hsv[0] >= 360 ? blackRgb : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["a" /* hsv2rgb */])(hsv, rgb);
        data[length * 4 + 0] = result[0];
        data[length * 4 + 1] = result[1];
        data[length * 4 + 2] = result[2];
        data[length * 4 + 3] = 255;
    }
    ctx.putImageData(frame, from.x, from.y);
};

/* harmony default export */ __webpack_exports__["a"] = ImageWrapper;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(37);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(95),
    getValue = __webpack_require__(118);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(27);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(25),
    isLength = __webpack_require__(26);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(0);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(98),
    createAssigner = __webpack_require__(114);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */
var Tracer = {
    searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
    create: function create(imageWrapper, labelWrapper) {
        var imageData = imageWrapper.data,
            labelData = labelWrapper.data,
            searchDirections = this.searchDirections,
            width = imageWrapper.size.x,
            pos;

        function _trace(current, color, label, edgelabel) {
            var i, y, x;

            for (i = 0; i < 7; i++) {
                y = current.cy + searchDirections[current.dir][0];
                x = current.cx + searchDirections[current.dir][1];
                pos = y * width + x;
                if (imageData[pos] === color && (labelData[pos] === 0 || labelData[pos] === label)) {
                    labelData[pos] = label;
                    current.cy = y;
                    current.cx = x;
                    return true;
                } else {
                    if (labelData[pos] === 0) {
                        labelData[pos] = edgelabel;
                    }
                    current.dir = (current.dir + 1) % 8;
                }
            }
            return false;
        }

        function vertex2D(x, y, dir) {
            return {
                dir: dir,
                x: x,
                y: y,
                next: null,
                prev: null
            };
        }

        function _contourTracing(sy, sx, label, color, edgelabel) {
            var Fv = null,
                Cv,
                P,
                ldir,
                current = {
                cx: sx,
                cy: sy,
                dir: 0
            };

            if (_trace(current, color, label, edgelabel)) {
                Fv = vertex2D(sx, sy, current.dir);
                Cv = Fv;
                ldir = current.dir;
                P = vertex2D(current.cx, current.cy, 0);
                P.prev = Cv;
                Cv.next = P;
                P.next = null;
                Cv = P;
                do {
                    current.dir = (current.dir + 6) % 8;
                    _trace(current, color, label, edgelabel);
                    if (ldir !== current.dir) {
                        Cv.dir = current.dir;
                        P = vertex2D(current.cx, current.cy, 0);
                        P.prev = Cv;
                        Cv.next = P;
                        P.next = null;
                        Cv = P;
                    } else {
                        Cv.dir = ldir;
                        Cv.x = current.cx;
                        Cv.y = current.cy;
                    }
                    ldir = current.dir;
                } while (current.cx !== sx || current.cy !== sy);
                Fv.prev = Cv.prev;
                Cv.prev.next = Fv;
            }
            return Fv;
        }

        return {
            trace: function trace(current, color, label, edgelabel) {
                return _trace(current, color, label, edgelabel);
            },
            contourTracing: function contourTracing(sy, sx, label, color, edgelabel) {
                return _contourTracing(sy, sx, label, color, edgelabel);
            }
        };
    }
};

/* harmony default export */ __webpack_exports__["a"] = Tracer;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barcode_reader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_array_helper__ = __webpack_require__(8);



function Code39Reader() {
    __WEBPACK_IMPORTED_MODULE_0__barcode_reader__["a" /* default */].call(this);
}

var properties = {
    ALPHABETH_STRING: { value: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%" },
    ALPHABET: { value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45, 46, 32, 42, 36, 47, 43, 37] },
    CHARACTER_ENCODINGS: { value: [0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064, 0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C, 0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016, 0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x094, 0x0A8, 0x0A2, 0x08A, 0x02A] },
    ASTERISK: { value: 0x094 },
    FORMAT: { value: "code_39", writeable: false }
};

Code39Reader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__barcode_reader__["a" /* default */].prototype, properties);
Code39Reader.prototype.constructor = Code39Reader;

Code39Reader.prototype._toCounters = function (start, counter) {
    var self = this,
        numCounters = counter.length,
        end = self._row.length,
        isWhite = !self._row[start],
        i,
        counterPos = 0;

    __WEBPACK_IMPORTED_MODULE_1__common_array_helper__["a" /* default */].init(counter, 0);

    for (i = start; i < end; i++) {
        if (self._row[i] ^ isWhite) {
            counter[counterPos]++;
        } else {
            counterPos++;
            if (counterPos === numCounters) {
                break;
            } else {
                counter[counterPos] = 1;
                isWhite = !isWhite;
            }
        }
    }

    return counter;
};

Code39Reader.prototype._decode = function () {
    var self = this,
        counters = [0, 0, 0, 0, 0, 0, 0, 0, 0],
        result = [],
        start = self._findStart(),
        decodedChar,
        lastStart,
        pattern,
        nextStart;

    if (!start) {
        return null;
    }
    nextStart = self._nextSet(self._row, start.end);

    do {
        counters = self._toCounters(nextStart, counters);
        pattern = self._toPattern(counters);
        if (pattern < 0) {
            return null;
        }
        decodedChar = self._patternToChar(pattern);
        if (decodedChar < 0) {
            return null;
        }
        result.push(decodedChar);
        lastStart = nextStart;
        nextStart += __WEBPACK_IMPORTED_MODULE_1__common_array_helper__["a" /* default */].sum(counters);
        nextStart = self._nextSet(self._row, nextStart);
    } while (decodedChar !== '*');
    result.pop();

    if (!result.length) {
        return null;
    }

    if (!self._verifyTrailingWhitespace(lastStart, nextStart, counters)) {
        return null;
    }

    return {
        code: result.join(""),
        start: start.start,
        end: nextStart,
        startInfo: start,
        decodedCodes: result
    };
};

Code39Reader.prototype._verifyTrailingWhitespace = function (lastStart, nextStart, counters) {
    var trailingWhitespaceEnd,
        patternSize = __WEBPACK_IMPORTED_MODULE_1__common_array_helper__["a" /* default */].sum(counters);

    trailingWhitespaceEnd = nextStart - lastStart - patternSize;
    if (trailingWhitespaceEnd * 3 >= patternSize) {
        return true;
    }
    return false;
};

Code39Reader.prototype._patternToChar = function (pattern) {
    var i,
        self = this;

    for (i = 0; i < self.CHARACTER_ENCODINGS.length; i++) {
        if (self.CHARACTER_ENCODINGS[i] === pattern) {
            return String.fromCharCode(self.ALPHABET[i]);
        }
    }
    return -1;
};

Code39Reader.prototype._findNextWidth = function (counters, current) {
    var i,
        minWidth = Number.MAX_VALUE;

    for (i = 0; i < counters.length; i++) {
        if (counters[i] < minWidth && counters[i] > current) {
            minWidth = counters[i];
        }
    }

    return minWidth;
};

Code39Reader.prototype._toPattern = function (counters) {
    var numCounters = counters.length,
        maxNarrowWidth = 0,
        numWideBars = numCounters,
        wideBarWidth = 0,
        self = this,
        pattern,
        i;

    while (numWideBars > 3) {
        maxNarrowWidth = self._findNextWidth(counters, maxNarrowWidth);
        numWideBars = 0;
        pattern = 0;
        for (i = 0; i < numCounters; i++) {
            if (counters[i] > maxNarrowWidth) {
                pattern |= 1 << numCounters - 1 - i;
                numWideBars++;
                wideBarWidth += counters[i];
            }
        }

        if (numWideBars === 3) {
            for (i = 0; i < numCounters && numWideBars > 0; i++) {
                if (counters[i] > maxNarrowWidth) {
                    numWideBars--;
                    if (counters[i] * 2 >= wideBarWidth) {
                        return -1;
                    }
                }
            }
            return pattern;
        }
    }
    return -1;
};

Code39Reader.prototype._findStart = function () {
    var self = this,
        offset = self._nextSet(self._row),
        patternStart = offset,
        counter = [0, 0, 0, 0, 0, 0, 0, 0, 0],
        counterPos = 0,
        isWhite = false,
        i,
        j,
        whiteSpaceMustStart;

    for (i = offset; i < self._row.length; i++) {
        if (self._row[i] ^ isWhite) {
            counter[counterPos]++;
        } else {
            if (counterPos === counter.length - 1) {
                // find start pattern
                if (self._toPattern(counter) === self.ASTERISK) {
                    whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));
                    if (self._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                        return {
                            start: patternStart,
                            end: i
                        };
                    }
                }

                patternStart += counter[0] + counter[1];
                for (j = 0; j < 7; j++) {
                    counter[j] = counter[j + 2];
                }
                counter[7] = 0;
                counter[8] = 0;
                counterPos--;
            } else {
                counterPos++;
            }
            counter[counterPos] = 1;
            isWhite = !isWhite;
        }
    }
    return null;
};

/* harmony default export */ __webpack_exports__["a"] = Code39Reader;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(22),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(136),
    mapCacheDelete = __webpack_require__(137),
    mapCacheGet = __webpack_require__(138),
    mapCacheHas = __webpack_require__(139),
    mapCacheSet = __webpack_require__(140);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(21),
    eq = __webpack_require__(17);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(21),
    eq = __webpack_require__(17);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(22);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(145);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(85);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(104),
    shortOut = __webpack_require__(146);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(161);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(96),
    baseUnary = __webpack_require__(107),
    nodeUtil = __webpack_require__(143);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(86),
    baseKeysIn = __webpack_require__(97),
    isArrayLike = __webpack_require__(24);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_typedefs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_typedefs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_typedefs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_image_wrapper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locator_barcode_locator__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__decoder_barcode_decoder__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_events__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_camera_access__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_image_debug__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__analytics_result_collector__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_input_stream__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_frame_grabber__ = __webpack_require__(61);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

 // eslint-disable-line no-unused-vars











var vec2 = {
    clone: __webpack_require__(6)
};

var _inputStream,
    _framegrabber,
    _stopped,
    _canvasContainer = {
    ctx: {
        image: null,
        overlay: null
    },
    dom: {
        image: null,
        overlay: null
    }
},
    _inputImageWrapper,
    _boxSize,
    _decoder,
    _workerPool = [],
    _onUIThread = true,
    _resultCollector,
    _config = {};

function initializeData(imageWrapper) {
    initBuffers(imageWrapper);
    _decoder = __WEBPACK_IMPORTED_MODULE_4__decoder_barcode_decoder__["a" /* default */].create(_config.decoder, _inputImageWrapper);
}

function initInputStream(cb) {
    var video;
    if (_config.inputStream.type === "VideoStream") {
        video = document.createElement("video");
        _inputStream = __WEBPACK_IMPORTED_MODULE_10_input_stream__["a" /* default */].createVideoStream(video);
    } else if (_config.inputStream.type === "ImageStream") {
        _inputStream = __WEBPACK_IMPORTED_MODULE_10_input_stream__["a" /* default */].createImageStream();
    } else if (_config.inputStream.type === "LiveStream") {
        var $viewport = getViewPort();
        if ($viewport) {
            video = $viewport.querySelector("video");
            if (!video) {
                video = document.createElement("video");
                $viewport.appendChild(video);
            }
        }
        _inputStream = __WEBPACK_IMPORTED_MODULE_10_input_stream__["a" /* default */].createLiveStream(video);
        __WEBPACK_IMPORTED_MODULE_6__input_camera_access__["a" /* default */].request(video, _config.inputStream.constraints).then(function () {
            _inputStream.trigger("canrecord");
        }).catch(function (err) {
            return cb(err);
        });
    }

    _inputStream.setAttribute("preload", "auto");
    _inputStream.setInputStream(_config.inputStream);
    _inputStream.addEventListener("canrecord", canRecord.bind(undefined, cb));
}

function getViewPort() {
    var target = _config.inputStream.target;
    // Check if target is already a DOM element
    if (target && target.nodeName && target.nodeType === 1) {
        return target;
    } else {
        // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
        var selector = typeof target === 'string' ? target : '#interactive.viewport';
        return document.querySelector(selector);
    }
}

function canRecord(cb) {
    __WEBPACK_IMPORTED_MODULE_3__locator_barcode_locator__["a" /* default */].checkImageConstraints(_inputStream, _config.locator);
    initCanvas(_config);
    _framegrabber = __WEBPACK_IMPORTED_MODULE_11_frame_grabber__["a" /* default */].create(_inputStream, _canvasContainer.dom.image);

    adjustWorkerPool(_config.numOfWorkers, function () {
        if (_config.numOfWorkers === 0) {
            initializeData();
        }
        ready(cb);
    });
}

function ready(cb) {
    _inputStream.play();
    cb();
}

function initCanvas() {
    if (typeof document !== "undefined") {
        var $viewport = getViewPort();
        _canvasContainer.dom.image = document.querySelector("canvas.imgBuffer");
        if (!_canvasContainer.dom.image) {
            _canvasContainer.dom.image = document.createElement("canvas");
            _canvasContainer.dom.image.className = "imgBuffer";
            if ($viewport && _config.inputStream.type === "ImageStream") {
                $viewport.appendChild(_canvasContainer.dom.image);
            }
        }
        _canvasContainer.ctx.image = _canvasContainer.dom.image.getContext("2d");
        _canvasContainer.dom.image.width = _inputStream.getCanvasSize().x;
        _canvasContainer.dom.image.height = _inputStream.getCanvasSize().y;

        _canvasContainer.dom.overlay = document.querySelector("canvas.drawingBuffer");
        if (!_canvasContainer.dom.overlay) {
            _canvasContainer.dom.overlay = document.createElement("canvas");
            _canvasContainer.dom.overlay.className = "drawingBuffer";
            if ($viewport) {
                $viewport.appendChild(_canvasContainer.dom.overlay);
            }
            var clearFix = document.createElement("br");
            clearFix.setAttribute("clear", "all");
            if ($viewport) {
                $viewport.appendChild(clearFix);
            }
        }
        _canvasContainer.ctx.overlay = _canvasContainer.dom.overlay.getContext("2d");
        _canvasContainer.dom.overlay.width = _inputStream.getCanvasSize().x;
        _canvasContainer.dom.overlay.height = _inputStream.getCanvasSize().y;
    }
}

function initBuffers(imageWrapper) {
    if (imageWrapper) {
        _inputImageWrapper = imageWrapper;
    } else {
        _inputImageWrapper = new __WEBPACK_IMPORTED_MODULE_2__common_image_wrapper__["a" /* default */]({
            x: _inputStream.getWidth(),
            y: _inputStream.getHeight()
        });
    }

    if (true) {
        console.log(_inputImageWrapper.size);
    }
    _boxSize = [vec2.clone([0, 0]), vec2.clone([0, _inputImageWrapper.size.y]), vec2.clone([_inputImageWrapper.size.x, _inputImageWrapper.size.y]), vec2.clone([_inputImageWrapper.size.x, 0])];
    __WEBPACK_IMPORTED_MODULE_3__locator_barcode_locator__["a" /* default */].init(_inputImageWrapper, _config.locator);
}

function getBoundingBoxes() {
    if (_config.locate) {
        return __WEBPACK_IMPORTED_MODULE_3__locator_barcode_locator__["a" /* default */].locate();
    } else {
        return [[vec2.clone(_boxSize[0]), vec2.clone(_boxSize[1]), vec2.clone(_boxSize[2]), vec2.clone(_boxSize[3])]];
    }
}

function transformResult(result) {
    var topRight = _inputStream.getTopRight(),
        xOffset = topRight.x,
        yOffset = topRight.y,
        i;

    if (xOffset === 0 && yOffset === 0) {
        return;
    }

    if (result.barcodes) {
        for (i = 0; i < result.barcodes.length; i++) {
            transformResult(result.barcodes[i]);
        }
    }

    if (result.line && result.line.length === 2) {
        moveLine(result.line);
    }

    if (result.box) {
        moveBox(result.box);
    }

    if (result.boxes && result.boxes.length > 0) {
        for (i = 0; i < result.boxes.length; i++) {
            moveBox(result.boxes[i]);
        }
    }

    function moveBox(box) {
        var corner = box.length;

        while (corner--) {
            box[corner][0] += xOffset;
            box[corner][1] += yOffset;
        }
    }

    function moveLine(line) {
        line[0].x += xOffset;
        line[0].y += yOffset;
        line[1].x += xOffset;
        line[1].y += yOffset;
    }
}

function addResult(result, imageData) {
    if (!imageData || !_resultCollector) {
        return;
    }

    if (result.barcodes) {
        result.barcodes.filter(function (barcode) {
            return barcode.codeResult;
        }).forEach(function (barcode) {
            return addResult(barcode, imageData);
        });
    } else if (result.codeResult) {
        _resultCollector.addResult(imageData, _inputStream.getCanvasSize(), result.codeResult);
    }
}

function hasCodeResult(result) {
    return result && (result.barcodes ? result.barcodes.some(function (barcode) {
        return barcode.codeResult;
    }) : result.codeResult);
}

function publishResult(result, imageData) {
    var resultToPublish = result;

    if (result && _onUIThread) {
        transformResult(result);
        addResult(result, imageData);
        resultToPublish = result.barcodes || result;
    }

    __WEBPACK_IMPORTED_MODULE_5__common_events__["a" /* default */].publish("processed", resultToPublish);
    if (hasCodeResult(result)) {
        __WEBPACK_IMPORTED_MODULE_5__common_events__["a" /* default */].publish("detected", resultToPublish);
    }
}

function locateAndDecode() {
    var result, boxes;

    boxes = getBoundingBoxes();
    if (boxes) {
        result = _decoder.decodeFromBoundingBoxes(boxes);
        result = result || {};
        result.boxes = boxes;
        publishResult(result, _inputImageWrapper.data);
    } else {
        publishResult();
    }
}

function update() {
    var availableWorker;

    if (_onUIThread) {
        if (_workerPool.length > 0) {
            availableWorker = _workerPool.filter(function (workerThread) {
                return !workerThread.busy;
            })[0];
            if (availableWorker) {
                _framegrabber.attachData(availableWorker.imageData);
            } else {
                return; // all workers are busy
            }
        } else {
            _framegrabber.attachData(_inputImageWrapper.data);
        }
        if (_framegrabber.grab()) {
            if (availableWorker) {
                availableWorker.busy = true;
                availableWorker.worker.postMessage({
                    cmd: 'process',
                    imageData: availableWorker.imageData
                }, [availableWorker.imageData.buffer]);
            } else {
                locateAndDecode();
            }
        }
    } else {
        locateAndDecode();
    }
}

function startContinuousUpdate() {
    var next = null,
        delay = 1000 / (_config.frequency || 60);

    _stopped = false;
    (function frame(timestamp) {
        next = next || timestamp;
        if (!_stopped) {
            if (timestamp >= next) {
                next += delay;
                update();
            }
            window.requestAnimFrame(frame);
        }
    })(performance.now());
}

function _start() {
    if (_onUIThread && _config.inputStream.type === "LiveStream") {
        startContinuousUpdate();
    } else {
        update();
    }
}

function initWorker(cb) {
    var blobURL,
        workerThread = {
        worker: undefined,
        imageData: new Uint8Array(_inputStream.getWidth() * _inputStream.getHeight()),
        busy: true
    };

    blobURL = generateWorkerBlob();
    workerThread.worker = new Worker(blobURL);

    workerThread.worker.onmessage = function (e) {
        if (e.data.event === 'initialized') {
            URL.revokeObjectURL(blobURL);
            workerThread.busy = false;
            workerThread.imageData = new Uint8Array(e.data.imageData);
            if (true) {
                console.log("Worker initialized");
            }
            return cb(workerThread);
        } else if (e.data.event === 'processed') {
            workerThread.imageData = new Uint8Array(e.data.imageData);
            workerThread.busy = false;
            publishResult(e.data.result, workerThread.imageData);
        } else if (e.data.event === 'error') {
            if (true) {
                console.log("Worker error: " + e.data.message);
            }
        }
    };

    workerThread.worker.postMessage({
        cmd: 'init',
        size: { x: _inputStream.getWidth(), y: _inputStream.getHeight() },
        imageData: workerThread.imageData,
        config: configForWorker(_config)
    }, [workerThread.imageData.buffer]);
}

function configForWorker(config) {
    return _extends({}, config, {
        inputStream: _extends({}, config.inputStream, {
            target: null
        })
    });
}

function workerInterface(factory) {
    /* eslint-disable no-undef*/
    if (factory) {
        var Quagga = factory().default;
        if (!Quagga) {
            self.postMessage({ 'event': 'error', message: 'Quagga could not be created' });
            return;
        }
    }
    var imageWrapper;

    self.onmessage = function (e) {
        if (e.data.cmd === 'init') {
            var config = e.data.config;
            config.numOfWorkers = 0;
            imageWrapper = new Quagga.ImageWrapper({
                x: e.data.size.x,
                y: e.data.size.y
            }, new Uint8Array(e.data.imageData));
            Quagga.init(config, ready, imageWrapper);
            Quagga.onProcessed(onProcessed);
        } else if (e.data.cmd === 'process') {
            imageWrapper.data = new Uint8Array(e.data.imageData);
            Quagga.start();
        } else if (e.data.cmd === 'setReaders') {
            Quagga.setReaders(e.data.readers);
        }
    };

    function onProcessed(result) {
        self.postMessage({
            'event': 'processed',
            imageData: imageWrapper.data,
            result: result
        }, [imageWrapper.data.buffer]);
    }

    function ready() {
        // eslint-disable-line
        self.postMessage({ 'event': 'initialized', imageData: imageWrapper.data }, [imageWrapper.data.buffer]);
    }

    /* eslint-enable */
}

function generateWorkerBlob() {
    var blob, factorySource;

    /* jshint ignore:start */
    if (typeof __factorySource__ !== 'undefined') {
        factorySource = __factorySource__; // eslint-disable-line no-undef
    }
    /* jshint ignore:end */

    blob = new Blob(['(' + workerInterface.toString() + ')(' + factorySource + ');'], { type: 'text/javascript' });

    return window.URL.createObjectURL(blob);
}

function _setReaders(readers) {
    if (_decoder) {
        _decoder.setReaders(readers);
    } else if (_onUIThread && _workerPool.length > 0) {
        _workerPool.forEach(function (workerThread) {
            workerThread.worker.postMessage({ cmd: 'setReaders', readers: readers });
        });
    }
}

function adjustWorkerPool(capacity, cb) {
    var increaseBy = capacity - _workerPool.length;
    if (increaseBy === 0) {
        return cb && cb();
    }
    if (increaseBy < 0) {
        var workersToTerminate = _workerPool.slice(increaseBy);
        workersToTerminate.forEach(function (workerThread) {
            workerThread.worker.terminate();
            if (true) {
                console.log("Worker terminated!");
            }
        });
        _workerPool = _workerPool.slice(0, increaseBy);
        return cb && cb();
    } else {
        var workerInitialized = function workerInitialized(workerThread) {
            _workerPool.push(workerThread);
            if (_workerPool.length >= capacity) {
                cb && cb();
            }
        };

        for (var i = 0; i < increaseBy; i++) {
            initWorker(workerInitialized);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = {
    init: function init(config, cb, imageWrapper) {
        _config = __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()({}, __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* default */], config);
        if (imageWrapper) {
            _onUIThread = false;
            initializeData(imageWrapper);
            return cb();
        } else {
            initInputStream(cb);
        }
    },
    start: function start() {
        _start();
    },
    stop: function stop() {
        _stopped = true;
        adjustWorkerPool(0);
        if (_config.inputStream.type === "LiveStream") {
            __WEBPACK_IMPORTED_MODULE_6__input_camera_access__["a" /* default */].release();
            _inputStream.clearEventHandlers();
        }
    },
    pause: function pause() {
        _stopped = true;
    },
    onDetected: function onDetected(callback) {
        __WEBPACK_IMPORTED_MODULE_5__common_events__["a" /* default */].subscribe("detected", callback);
    },
    offDetected: function offDetected(callback) {
        __WEBPACK_IMPORTED_MODULE_5__common_events__["a" /* default */].unsubscribe("detected", callback);
    },
    onProcessed: function onProcessed(callback) {
        __WEBPACK_IMPORTED_MODULE_5__common_events__["a" /* default */].subscribe("processed", callback);
    },
    offProcessed: function offProcessed(callback) {
        __WEBPACK_IMPORTED_MODULE_5__common_events__["a" /* default */].unsubscribe("processed", callback);
    },
    setReaders: function setReaders(readers) {
        _setReaders(readers);
    },
    registerResultCollector: function registerResultCollector(resultCollector) {
        if (resultCollector && typeof resultCollector.addResult === 'function') {
            _resultCollector = resultCollector;
        }
    },
    canvas: _canvasContainer,
    decodeSingle: function decodeSingle(config, resultCallback) {
        var _this = this;

        config = __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()({
            inputStream: {
                type: "ImageStream",
                sequence: false,
                size: 800,
                src: config.src
            },
            numOfWorkers: true && config.debug ? 0 : 1,
            locator: {
                halfSample: false
            }
        }, config);
        this.init(config, function () {
            __WEBPACK_IMPORTED_MODULE_5__common_events__["a" /* default */].once("processed", function (result) {
                _this.stop();
                resultCallback.call(null, result);
            }, true);
            _start();
        });
    },
    ImageWrapper: __WEBPACK_IMPORTED_MODULE_2__common_image_wrapper__["a" /* default */],
    ImageDebug: __WEBPACK_IMPORTED_MODULE_7__common_image_debug__["a" /* default */],
    ResultCollector: __WEBPACK_IMPORTED_MODULE_8__analytics_result_collector__["a" /* default */],
    CameraAccess: __WEBPACK_IMPORTED_MODULE_6__input_camera_access__["a" /* default */]
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_image_debug__ = __webpack_require__(9);


function contains(codeResult, list) {
    if (list) {
        return list.some(function (item) {
            return Object.keys(item).every(function (key) {
                return item[key] === codeResult[key];
            });
        });
    }
    return false;
}

function passesFilter(codeResult, filter) {
    if (typeof filter === 'function') {
        return filter(codeResult);
    }
    return true;
}

/* harmony default export */ __webpack_exports__["a"] = {
    create: function create(config) {
        var canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d"),
            results = [],
            capacity = config.capacity || 20,
            capture = config.capture === true;

        function matchesConstraints(codeResult) {
            return capacity && codeResult && !contains(codeResult, config.blacklist) && passesFilter(codeResult, config.filter);
        }

        return {
            addResult: function addResult(data, imageSize, codeResult) {
                var result = {};

                if (matchesConstraints(codeResult)) {
                    capacity--;
                    result.codeResult = codeResult;
                    if (capture) {
                        canvas.width = imageSize.x;
                        canvas.height = imageSize.y;
                        __WEBPACK_IMPORTED_MODULE_0__common_image_debug__["a" /* default */].drawImage(data, imageSize, ctx);
                        result.frame = canvas.toDataURL();
                    }
                    results.push(result);
                }
            },
            getResults: function getResults() {
                return results;
            }
        };
    }
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var vec2 = {
    clone: __webpack_require__(6),
    dot: __webpack_require__(32)
};
/**
 * Creates a cluster for grouping similar orientations of datapoints
 */
/* harmony default export */ __webpack_exports__["a"] = {
    create: function create(point, threshold) {
        var points = [],
            center = {
            rad: 0,
            vec: vec2.clone([0, 0])
        },
            pointMap = {};

        function init() {
            _add(point);
            updateCenter();
        }

        function _add(pointToAdd) {
            pointMap[pointToAdd.id] = pointToAdd;
            points.push(pointToAdd);
        }

        function updateCenter() {
            var i,
                sum = 0;
            for (i = 0; i < points.length; i++) {
                sum += points[i].rad;
            }
            center.rad = sum / points.length;
            center.vec = vec2.clone([Math.cos(center.rad), Math.sin(center.rad)]);
        }

        init();

        return {
            add: function add(pointToAdd) {
                if (!pointMap[pointToAdd.id]) {
                    _add(pointToAdd);
                    updateCenter();
                }
            },
            fits: function fits(otherPoint) {
                // check cosine similarity to center-angle
                var similarity = Math.abs(vec2.dot(otherPoint.point.vec, center.vec));
                if (similarity > threshold) {
                    return true;
                }
                return false;
            },
            getPoints: function getPoints() {
                return points;
            },
            getCenter: function getCenter() {
                return center;
            }
        };
    },
    createPoint: function createPoint(newPoint, id, property) {
        return {
            rad: newPoint[property],
            point: newPoint,
            id: id
        };
    }
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var events = {};

    function getEvent(eventName) {
        if (!events[eventName]) {
            events[eventName] = {
                subscribers: []
            };
        }
        return events[eventName];
    }

    function clearEvents() {
        events = {};
    }

    function publishSubscription(subscription, data) {
        if (subscription.async) {
            setTimeout(function () {
                subscription.callback(data);
            }, 4);
        } else {
            subscription.callback(data);
        }
    }

    function _subscribe(event, callback, async) {
        var subscription;

        if (typeof callback === "function") {
            subscription = {
                callback: callback,
                async: async
            };
        } else {
            subscription = callback;
            if (!subscription.callback) {
                throw "Callback was not specified on options";
            }
        }

        getEvent(event).subscribers.push(subscription);
    }

    return {
        subscribe: function subscribe(event, callback, async) {
            return _subscribe(event, callback, async);
        },
        publish: function publish(eventName, data) {
            var event = getEvent(eventName),
                subscribers = event.subscribers;

            // Publish one-time subscriptions
            subscribers.filter(function (subscriber) {
                return !!subscriber.once;
            }).forEach(function (subscriber) {
                publishSubscription(subscriber, data);
            });

            // remove them from the subscriber
            event.subscribers = subscribers.filter(function (subscriber) {
                return !subscriber.once;
            });

            // publish the rest
            event.subscribers.forEach(function (subscriber) {
                publishSubscription(subscriber, data);
            });
        },
        once: function once(event, callback, async) {
            _subscribe(event, {
                callback: callback,
                async: async,
                once: true
            });
        },
        unsubscribe: function unsubscribe(eventName, callback) {
            var event;

            if (eventName) {
                event = getEvent(eventName);
                if (event && callback) {
                    event.subscribers = event.subscribers.filter(function (subscriber) {
                        return subscriber.callback !== callback;
                    });
                } else {
                    event.subscribers = [];
                }
            } else {
                clearEvents();
            }
        }
    };
})();

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = enumerateDevices;
/* harmony export (immutable) */ __webpack_exports__["a"] = getUserMedia;

function enumerateDevices() {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.enumerateDevices === 'function') {
        return navigator.mediaDevices.enumerateDevices();
    }
    return Promise.reject(new Error('enumerateDevices is not defined'));
};

function getUserMedia(constraints) {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
        return navigator.mediaDevices.getUserMedia(constraints);
    }
    return Promise.reject(new Error('getUserMedia is not defined'));
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Construct representing a part of another {ImageWrapper}. Shares data
 * between the parent and the child.
 * @param from {ImageRef} The position where to start the {SubImage} from. (top-left corner)
 * @param size {ImageRef} The size of the resulting image
 * @param I {ImageWrapper} The {ImageWrapper} to share from
 * @returns {SubImage} A shared part of the original image
 */
function SubImage(from, size, I) {
    if (!I) {
        I = {
            data: null,
            size: size
        };
    }
    this.data = I.data;
    this.originalSize = I.size;
    this.I = I;

    this.from = from;
    this.size = size;
}

/**
 * Displays the {SubImage} in a given canvas
 * @param canvas {Canvas} The canvas element to write to
 * @param scale {Number} Scale which is applied to each pixel-value
 */
SubImage.prototype.show = function (canvas, scale) {
    var ctx, frame, data, current, y, x, pixel;

    if (!scale) {
        scale = 1.0;
    }
    ctx = canvas.getContext('2d');
    canvas.width = this.size.x;
    canvas.height = this.size.y;
    frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = frame.data;
    current = 0;
    for (y = 0; y < this.size.y; y++) {
        for (x = 0; x < this.size.x; x++) {
            pixel = y * this.size.x + x;
            current = this.get(x, y) * scale;
            data[pixel * 4 + 0] = current;
            data[pixel * 4 + 1] = current;
            data[pixel * 4 + 2] = current;
            data[pixel * 4 + 3] = 255;
        }
    }
    frame.data = data;
    ctx.putImageData(frame, 0, 0);
};

/**
 * Retrieves a given pixel position from the {SubImage}
 * @param x {Number} The x-position
 * @param y {Number} The y-position
 * @returns {Number} The grayscale value at the pixel-position
 */
SubImage.prototype.get = function (x, y) {
    return this.data[(this.from.y + y) * this.originalSize.x + this.from.x + x];
};

/**
 * Updates the underlying data from a given {ImageWrapper}
 * @param image {ImageWrapper} The updated image
 */
SubImage.prototype.updateData = function (image) {
    this.originalSize = image.size;
    this.data = image.data;
};

/**
 * Updates the position of the shared area
 * @param from {x,y} The new location
 * @returns {SubImage} returns {this} for possible chaining
 */
SubImage.prototype.updateFrom = function (from) {
    this.from = from;
    return this;
};

/* harmony default export */ __webpack_exports__["a"] = SubImage;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

/*
 * typedefs.js
 * Normalizes browser-specific prefixes
 */

if (typeof window !== 'undefined') {
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function FrameRequestCallback */callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    }();
}
Math.imul = Math.imul || function (a, b) {
    var ah = a >>> 16 & 0xffff,
        al = a & 0xffff,
        bh = b >>> 16 & 0xffff,
        bl = b & 0xffff;
    // the shift by 0 fixes the sign on the high part
    // the final |0 converts the unsigned value into a signed value
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
};

if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
        // .length of function is 2
        'use strict';

        if (target === null) {
            // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource !== null) {
                // Skip over if undefined or null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
    inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
            width: 640,
            height: 480,
            // aspectRatio: 640/480, // optional
            facingMode: "environment" },
        area: {
            top: "0%",
            right: "0%",
            left: "0%",
            bottom: "0%"
        },
        singleChannel: false // true: only the red color-channel is read
    },
    locate: true,
    numOfWorkers: 0,
    decoder: {
        readers: ['code_128_reader'],
        debug: {
            drawBoundingBox: false,
            showFrequency: false,
            drawScanline: false,
            showPattern: false
        }
    },
    locator: {
        halfSample: true,
        patchSize: "medium", // x-small, small, medium, large, x-large
        debug: {
            showCanvas: false,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
                showTransformed: false,
                showTransformedBox: false,
                showBB: false
            }
        }
    }
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = void 0;

if (true) {
    config = __webpack_require__(55);
} else if (ENV.node) {
    config = require('./config.node.js');
} else {
    config = require('./config.prod.js');
}

/* harmony default export */ __webpack_exports__["a"] = config;

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bresenham__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_image_debug__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reader_code_128_reader__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reader_ean_reader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reader_code_39_reader__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reader_code_39_vin_reader__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reader_codabar_reader__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reader_upc_reader__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reader_ean_8_reader__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reader_ean_2_reader__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reader_ean_5_reader__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reader_upc_e_reader__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reader_i2of5_reader__ = __webpack_require__(73);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };















var READERS = {
    code_128_reader: __WEBPACK_IMPORTED_MODULE_2__reader_code_128_reader__["a" /* default */],
    ean_reader: __WEBPACK_IMPORTED_MODULE_3__reader_ean_reader__["a" /* default */],
    ean_5_reader: __WEBPACK_IMPORTED_MODULE_10__reader_ean_5_reader__["a" /* default */],
    ean_2_reader: __WEBPACK_IMPORTED_MODULE_9__reader_ean_2_reader__["a" /* default */],
    ean_8_reader: __WEBPACK_IMPORTED_MODULE_8__reader_ean_8_reader__["a" /* default */],
    code_39_reader: __WEBPACK_IMPORTED_MODULE_4__reader_code_39_reader__["a" /* default */],
    code_39_vin_reader: __WEBPACK_IMPORTED_MODULE_5__reader_code_39_vin_reader__["a" /* default */],
    codabar_reader: __WEBPACK_IMPORTED_MODULE_6__reader_codabar_reader__["a" /* default */],
    upc_reader: __WEBPACK_IMPORTED_MODULE_7__reader_upc_reader__["a" /* default */],
    upc_e_reader: __WEBPACK_IMPORTED_MODULE_11__reader_upc_e_reader__["a" /* default */],
    i2of5_reader: __WEBPACK_IMPORTED_MODULE_12__reader_i2of5_reader__["a" /* default */]
};
/* harmony default export */ __webpack_exports__["a"] = {
    create: function create(config, inputImageWrapper) {
        var _canvas = {
            ctx: {
                frequency: null,
                pattern: null,
                overlay: null
            },
            dom: {
                frequency: null,
                pattern: null,
                overlay: null
            }
        },
            _barcodeReaders = [];

        initCanvas();
        initReaders();
        initConfig();

        function initCanvas() {
            if (true && typeof document !== 'undefined') {
                var $debug = document.querySelector("#debug.detection");
                _canvas.dom.frequency = document.querySelector("canvas.frequency");
                if (!_canvas.dom.frequency) {
                    _canvas.dom.frequency = document.createElement("canvas");
                    _canvas.dom.frequency.className = "frequency";
                    if ($debug) {
                        $debug.appendChild(_canvas.dom.frequency);
                    }
                }
                _canvas.ctx.frequency = _canvas.dom.frequency.getContext("2d");

                _canvas.dom.pattern = document.querySelector("canvas.patternBuffer");
                if (!_canvas.dom.pattern) {
                    _canvas.dom.pattern = document.createElement("canvas");
                    _canvas.dom.pattern.className = "patternBuffer";
                    if ($debug) {
                        $debug.appendChild(_canvas.dom.pattern);
                    }
                }
                _canvas.ctx.pattern = _canvas.dom.pattern.getContext("2d");

                _canvas.dom.overlay = document.querySelector("canvas.drawingBuffer");
                if (_canvas.dom.overlay) {
                    _canvas.ctx.overlay = _canvas.dom.overlay.getContext("2d");
                }
            }
        }

        function initReaders() {
            config.readers.forEach(function (readerConfig) {
                var reader,
                    configuration = {},
                    supplements = [];

                if ((typeof readerConfig === 'undefined' ? 'undefined' : _typeof(readerConfig)) === 'object') {
                    reader = readerConfig.format;
                    configuration = readerConfig.config;
                } else if (typeof readerConfig === 'string') {
                    reader = readerConfig;
                }
                if (true) {
                    console.log("Before registering reader: ", reader);
                }
                if (configuration.supplements) {
                    supplements = configuration.supplements.map(function (supplement) {
                        return new READERS[supplement]();
                    });
                }
                _barcodeReaders.push(new READERS[reader](configuration, supplements));
            });
            if (true) {
                console.log("Registered Readers: " + _barcodeReaders.map(function (reader) {
                    return JSON.stringify({ format: reader.FORMAT, config: reader.config });
                }).join(', '));
            }
        }

        function initConfig() {
            if (true && typeof document !== 'undefined') {
                var i,
                    vis = [{
                    node: _canvas.dom.frequency,
                    prop: config.debug.showFrequency
                }, {
                    node: _canvas.dom.pattern,
                    prop: config.debug.showPattern
                }];

                for (i = 0; i < vis.length; i++) {
                    if (vis[i].prop === true) {
                        vis[i].node.style.display = "block";
                    } else {
                        vis[i].node.style.display = "none";
                    }
                }
            }
        }

        /**
         * extend the line on both ends
         * @param {Array} line
         * @param {Number} angle
         */
        function getExtendedLine(line, angle, ext) {
            function extendLine(amount) {
                var extension = {
                    y: amount * Math.sin(angle),
                    x: amount * Math.cos(angle)
                };

                line[0].y -= extension.y;
                line[0].x -= extension.x;
                line[1].y += extension.y;
                line[1].x += extension.x;
            }

            // check if inside image
            extendLine(ext);
            while (ext > 1 && (!inputImageWrapper.inImageWithBorder(line[0], 0) || !inputImageWrapper.inImageWithBorder(line[1], 0))) {
                ext -= Math.ceil(ext / 2);
                extendLine(-ext);
            }
            return line;
        }

        function getLine(box) {
            return [{
                x: (box[1][0] - box[0][0]) / 2 + box[0][0],
                y: (box[1][1] - box[0][1]) / 2 + box[0][1]
            }, {
                x: (box[3][0] - box[2][0]) / 2 + box[2][0],
                y: (box[3][1] - box[2][1]) / 2 + box[2][1]
            }];
        }

        function tryDecode(line) {
            var result = null,
                i,
                barcodeLine = __WEBPACK_IMPORTED_MODULE_0__bresenham__["a" /* default */].getBarcodeLine(inputImageWrapper, line[0], line[1]);

            if (true && config.debug.showFrequency) {
                __WEBPACK_IMPORTED_MODULE_1__common_image_debug__["a" /* default */].drawPath(line, { x: 'x', y: 'y' }, _canvas.ctx.overlay, { color: 'red', lineWidth: 3 });
                __WEBPACK_IMPORTED_MODULE_0__bresenham__["a" /* default */].debug.printFrequency(barcodeLine.line, _canvas.dom.frequency);
            }

            __WEBPACK_IMPORTED_MODULE_0__bresenham__["a" /* default */].toBinaryLine(barcodeLine);

            if (true && config.debug.showPattern) {
                __WEBPACK_IMPORTED_MODULE_0__bresenham__["a" /* default */].debug.printPattern(barcodeLine.line, _canvas.dom.pattern);
            }

            for (i = 0; i < _barcodeReaders.length && result === null; i++) {
                result = _barcodeReaders[i].decodePattern(barcodeLine.line);
            }
            if (result === null) {
                return null;
            }
            return {
                codeResult: result,
                barcodeLine: barcodeLine
            };
        }

        /**
         * This method slices the given area apart and tries to detect a barcode-pattern
         * for each slice. It returns the decoded barcode, or null if nothing was found
         * @param {Array} box
         * @param {Array} line
         * @param {Number} lineAngle
         */
        function tryDecodeBruteForce(box, line, lineAngle) {
            var sideLength = Math.sqrt(Math.pow(box[1][0] - box[0][0], 2) + Math.pow(box[1][1] - box[0][1], 2)),
                i,
                slices = 16,
                result = null,
                dir,
                extension,
                xdir = Math.sin(lineAngle),
                ydir = Math.cos(lineAngle);

            for (i = 1; i < slices && result === null; i++) {
                // move line perpendicular to angle
                dir = sideLength / slices * i * (i % 2 === 0 ? -1 : 1);
                extension = {
                    y: dir * xdir,
                    x: dir * ydir
                };
                line[0].y += extension.x;
                line[0].x -= extension.y;
                line[1].y += extension.x;
                line[1].x -= extension.y;

                result = tryDecode(line);
            }
            return result;
        }

        function getLineLength(line) {
            return Math.sqrt(Math.pow(Math.abs(line[1].y - line[0].y), 2) + Math.pow(Math.abs(line[1].x - line[0].x), 2));
        }

        /**
         * With the help of the configured readers (Code128 or EAN) this function tries to detect a
         * valid barcode pattern within the given area.
         * @param {Object} box The area to search in
         * @returns {Object} the result {codeResult, line, angle, pattern, threshold}
         */
        function _decodeFromBoundingBox(box) {
            var line,
                lineAngle,
                ctx = _canvas.ctx.overlay,
                result,
                lineLength;

            if (true) {
                if (config.debug.drawBoundingBox && ctx) {
                    __WEBPACK_IMPORTED_MODULE_1__common_image_debug__["a" /* default */].drawPath(box, { x: 0, y: 1 }, ctx, { color: "blue", lineWidth: 2 });
                }
            }

            line = getLine(box);
            lineLength = getLineLength(line);
            lineAngle = Math.atan2(line[1].y - line[0].y, line[1].x - line[0].x);
            line = getExtendedLine(line, lineAngle, Math.floor(lineLength * 0.1));
            if (line === null) {
                return null;
            }

            result = tryDecode(line);
            if (result === null) {
                result = tryDecodeBruteForce(box, line, lineAngle);
            }

            if (result === null) {
                return null;
            }

            if (true && result && config.debug.drawScanline && ctx) {
                __WEBPACK_IMPORTED_MODULE_1__common_image_debug__["a" /* default */].drawPath(line, { x: 'x', y: 'y' }, ctx, { color: 'red', lineWidth: 3 });
            }

            return {
                codeResult: result.codeResult,
                line: line,
                angle: lineAngle,
                pattern: result.barcodeLine.line,
                threshold: result.barcodeLine.threshold
            };
        }

        return {
            decodeFromBoundingBox: function decodeFromBoundingBox(box) {
                return _decodeFromBoundingBox(box);
            },
            decodeFromBoundingBoxes: function decodeFromBoundingBoxes(boxes) {
                var i,
                    result,
                    barcodes = [],
                    multiple = config.multiple;

                for (i = 0; i < boxes.length; i++) {
                    var box = boxes[i];
                    result = _decodeFromBoundingBox(box) || {};
                    result.box = box;

                    if (multiple) {
                        barcodes.push(result);
                    } else if (result.codeResult) {
                        return result;
                    }
                }

                if (multiple) {
                    return {
                        barcodes: barcodes
                    };
                }
            },
            setReaders: function setReaders(readers) {
                config.readers = readers;
                _barcodeReaders.length = 0;
                initReaders();
            }
        };
    }
};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__ = __webpack_require__(20);


var Bresenham = {};

var Slope = {
    DIR: {
        UP: 1,
        DOWN: -1
    }
};
/**
 * Scans a line of the given image from point p1 to p2 and returns a result object containing
 * gray-scale values (0-255) of the underlying pixels in addition to the min
 * and max values.
 * @param {Object} imageWrapper
 * @param {Object} p1 The start point {x,y}
 * @param {Object} p2 The end point {x,y}
 * @returns {line, min, max}
 */
Bresenham.getBarcodeLine = function (imageWrapper, p1, p2) {
    var x0 = p1.x | 0,
        y0 = p1.y | 0,
        x1 = p2.x | 0,
        y1 = p2.y | 0,
        steep = Math.abs(y1 - y0) > Math.abs(x1 - x0),
        deltax,
        deltay,
        error,
        ystep,
        y,
        tmp,
        x,
        line = [],
        imageData = imageWrapper.data,
        width = imageWrapper.size.x,
        sum = 0,
        val,
        min = 255,
        max = 0;

    function read(a, b) {
        val = imageData[b * width + a];
        sum += val;
        min = val < min ? val : min;
        max = val > max ? val : max;
        line.push(val);
    }

    if (steep) {
        tmp = x0;
        x0 = y0;
        y0 = tmp;

        tmp = x1;
        x1 = y1;
        y1 = tmp;
    }
    if (x0 > x1) {
        tmp = x0;
        x0 = x1;
        x1 = tmp;

        tmp = y0;
        y0 = y1;
        y1 = tmp;
    }
    deltax = x1 - x0;
    deltay = Math.abs(y1 - y0);
    error = deltax / 2 | 0;
    y = y0;
    ystep = y0 < y1 ? 1 : -1;
    for (x = x0; x < x1; x++) {
        if (steep) {
            read(y, x);
        } else {
            read(x, y);
        }
        error = error - deltay;
        if (error < 0) {
            y = y + ystep;
            error = error + deltax;
        }
    }

    return {
        line: line,
        min: min,
        max: max
    };
};

/**
 * Converts the result from getBarcodeLine into a binary representation
 * also considering the frequency and slope of the signal for more robust results
 * @param {Object} result {line, min, max}
 */
Bresenham.toBinaryLine = function (result) {
    var min = result.min,
        max = result.max,
        line = result.line,
        slope,
        slope2,
        center = min + (max - min) / 2,
        extrema = [],
        currentDir,
        dir,
        threshold = (max - min) / 12,
        rThreshold = -threshold,
        i,
        j;

    // 1. find extrema
    currentDir = line[0] > center ? Slope.DIR.UP : Slope.DIR.DOWN;
    extrema.push({
        pos: 0,
        val: line[0]
    });
    for (i = 0; i < line.length - 2; i++) {
        slope = line[i + 1] - line[i];
        slope2 = line[i + 2] - line[i + 1];
        if (slope + slope2 < rThreshold && line[i + 1] < center * 1.5) {
            dir = Slope.DIR.DOWN;
        } else if (slope + slope2 > threshold && line[i + 1] > center * 0.5) {
            dir = Slope.DIR.UP;
        } else {
            dir = currentDir;
        }

        if (currentDir !== dir) {
            extrema.push({
                pos: i,
                val: line[i]
            });
            currentDir = dir;
        }
    }
    extrema.push({
        pos: line.length,
        val: line[line.length - 1]
    });

    for (j = extrema[0].pos; j < extrema[1].pos; j++) {
        line[j] = line[j] > center ? 0 : 1;
    }

    // iterate over extrema and convert to binary based on avg between minmax
    for (i = 1; i < extrema.length - 1; i++) {
        if (extrema[i + 1].val > extrema[i].val) {
            threshold = extrema[i].val + (extrema[i + 1].val - extrema[i].val) / 3 * 2 | 0;
        } else {
            threshold = extrema[i + 1].val + (extrema[i].val - extrema[i + 1].val) / 3 | 0;
        }

        for (j = extrema[i].pos; j < extrema[i + 1].pos; j++) {
            line[j] = line[j] > threshold ? 0 : 1;
        }
    }

    return {
        line: line,
        threshold: threshold
    };
};

/**
 * Used for development only
 */
Bresenham.debug = {
    printFrequency: function printFrequency(line, canvas) {
        var i,
            ctx = canvas.getContext("2d");
        canvas.width = line.length;
        canvas.height = 256;

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        for (i = 0; i < line.length; i++) {
            ctx.moveTo(i, 255);
            ctx.lineTo(i, 255 - line[i]);
        }
        ctx.stroke();
        ctx.closePath();
    },

    printPattern: function printPattern(line, canvas) {
        var ctx = canvas.getContext("2d"),
            i;

        canvas.width = line.length;
        ctx.fillColor = "black";
        for (i = 0; i < line.length; i++) {
            if (line[i] === 1) {
                ctx.fillRect(i, 0, 1, 100);
            }
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = Bresenham;

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_pick__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mediaDevices__ = __webpack_require__(52);
/* unused harmony export pickConstraints */




var facingMatching = {
    "user": /front/i,
    "environment": /back/i
};

var streamRef;

function waitForVideo(video) {
    return new Promise(function (resolve, reject) {
        var attempts = 10;

        function checkVideo() {
            if (attempts > 0) {
                if (video.videoWidth > 0 && video.videoHeight > 0) {
                    if (true) {
                        console.log(video.videoWidth + "px x " + video.videoHeight + "px");
                    }
                    resolve();
                } else {
                    window.setTimeout(checkVideo, 500);
                }
            } else {
                reject('Unable to play video stream. Is webcam working?');
            }
            attempts--;
        }
        checkVideo();
    });
}

/**
 * Tries to attach the camera-stream to a given video-element
 * and calls the callback function when the content is ready
 * @param {Object} constraints
 * @param {Object} video
 */
function initCamera(video, constraints) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mediaDevices__["a" /* getUserMedia */])(constraints).then(function (stream) {
        return new Promise(function (resolve) {
            streamRef = stream;
            video.setAttribute("autoplay", 'true');
            video.srcObject = stream;
            video.addEventListener('loadedmetadata', function () {
                video.play();
                resolve();
            });
        });
    }).then(waitForVideo.bind(null, video));
}

function deprecatedConstraints(videoConstraints) {
    var normalized = __WEBPACK_IMPORTED_MODULE_0_lodash_pick___default()(videoConstraints, ["width", "height", "facingMode", "aspectRatio", "deviceId"]);

    if (typeof videoConstraints.minAspectRatio !== 'undefined' && videoConstraints.minAspectRatio > 0) {
        normalized.aspectRatio = videoConstraints.minAspectRatio;
        console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead");
    }
    if (typeof videoConstraints.facing !== 'undefined') {
        normalized.facingMode = videoConstraints.facing;
        console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'");
    }
    return normalized;
}

function pickConstraints(videoConstraints) {
    var normalizedConstraints = {
        audio: false,
        video: deprecatedConstraints(videoConstraints)
    };

    if (normalizedConstraints.video.deviceId && normalizedConstraints.video.facingMode) {
        delete normalizedConstraints.video.facingMode;
    }
    return Promise.resolve(normalizedConstraints);
}

function enumerateVideoDevices() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mediaDevices__["b" /* enumerateDevices */])().then(function (devices) {
        return devices.filter(function (device) {
            return device.kind === 'videoinput';
        });
    });
}

/* harmony default export */ __webpack_exports__["a"] = {
    request: function request(video, videoConstraints) {
        return pickConstraints(videoConstraints).then(initCamera.bind(null, video));
    },
    release: function release() {
        var tracks = streamRef && streamRef.getVideoTracks();
        if (tracks && tracks.length) {
            tracks[0].stop();
        }
        streamRef = null;
    },
    enumerateVideoDevices: enumerateVideoDevices,
    getActiveStreamLabel: function getActiveStreamLabel() {
        if (streamRef) {
            var tracks = streamRef.getVideoTracks();
            if (tracks && tracks.length) {
                return tracks[0].label;
            }
        }
    }
};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AvailableTags */
/* harmony export (immutable) */ __webpack_exports__["a"] = findTagsInObjectURL;
/* unused harmony export base64ToArrayBuffer */
/* unused harmony export findTagsInBuffer */
// Scraped from https://github.com/exif-js/exif-js

var ExifTags = { 0x0112: "orientation" };
var AvailableTags = Object.keys(ExifTags).map(function (key) {
    return ExifTags[key];
});

function findTagsInObjectURL(src) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AvailableTags;

    if (/^blob\:/i.test(src)) {
        return objectURLToBlob(src).then(readToBuffer).then(function (buffer) {
            return findTagsInBuffer(buffer, tags);
        });
    }
    return Promise.resolve(null);
}

function base64ToArrayBuffer(dataUrl) {
    var base64 = dataUrl.replace(/^data\:([^\;]+)\;base64,/gmi, ''),
        binary = atob(base64),
        len = binary.length,
        buffer = new ArrayBuffer(len),
        view = new Uint8Array(buffer);

    for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
    }
    return buffer;
}

function readToBuffer(blob) {
    return new Promise(function (resolve) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            return resolve(e.target.result);
        };
        fileReader.readAsArrayBuffer(blob);
    });
}

function objectURLToBlob(url) {
    return new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE && (http.status === 200 || http.status === 0)) {
                resolve(this.response);
            }
        };
        http.onerror = reject;
        http.send();
    });
}

function findTagsInBuffer(file) {
    var selectedTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AvailableTags;

    var dataView = new DataView(file),
        length = file.byteLength,
        exifTags = selectedTags.reduce(function (result, selectedTag) {
        var exifTag = Object.keys(ExifTags).filter(function (tag) {
            return ExifTags[tag] === selectedTag;
        })[0];
        if (exifTag) {
            result[exifTag] = selectedTag;
        }
        return result;
    }, {});
    var offset = 2,
        marker = void 0;

    if (dataView.getUint8(0) !== 0xFF || dataView.getUint8(1) !== 0xD8) {
        return false;
    }

    while (offset < length) {
        if (dataView.getUint8(offset) !== 0xFF) {
            return false;
        }

        marker = dataView.getUint8(offset + 1);
        if (marker === 0xE1) {
            return readEXIFData(dataView, offset + 4, exifTags);
        } else {
            offset += 2 + dataView.getUint16(offset + 2);
        }
    }
}

function readEXIFData(file, start, exifTags) {
    if (getStringFromBuffer(file, start, 4) !== "Exif") {
        return false;
    }

    var tiffOffset = start + 6;
    var bigEnd = void 0,
        tags = void 0;

    if (file.getUint16(tiffOffset) === 0x4949) {
        bigEnd = false;
    } else if (file.getUint16(tiffOffset) === 0x4D4D) {
        bigEnd = true;
    } else {
        return false;
    }

    if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
        return false;
    }

    var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
    if (firstIFDOffset < 0x00000008) {
        return false;
    }

    tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, exifTags, bigEnd);
    return tags;
}

function readTags(file, tiffStart, dirStart, strings, bigEnd) {
    var entries = file.getUint16(dirStart, !bigEnd),
        tags = {};

    for (var i = 0; i < entries; i++) {
        var entryOffset = dirStart + i * 12 + 2,
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
        if (tag) {
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
    }
    return tags;
}

function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
    var type = file.getUint16(entryOffset + 2, !bigEnd),
        numValues = file.getUint32(entryOffset + 4, !bigEnd);

    switch (type) {
        case 3:
            if (numValues === 1) {
                return file.getUint16(entryOffset + 8, !bigEnd);
            }
    }
}

function getStringFromBuffer(buffer, start, length) {
    var outstr = "";
    for (var n = start; n < start + length; n++) {
        outstr += String.fromCharCode(buffer.getUint8(n));
    }
    return outstr;
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_cv_utils__ = __webpack_require__(19);


var TO_RADIANS = Math.PI / 180;

function adjustCanvasSize(canvas, targetSize) {
    if (canvas.width !== targetSize.x) {
        if (true) {
            console.log("WARNING: canvas-size needs to be adjusted");
        }
        canvas.width = targetSize.x;
    }
    if (canvas.height !== targetSize.y) {
        if (true) {
            console.log("WARNING: canvas-size needs to be adjusted");
        }
        canvas.height = targetSize.y;
    }
}

var FrameGrabber = {};

FrameGrabber.create = function (inputStream, canvas) {
    var _that = {},
        _streamConfig = inputStream.getConfig(),
        _video_size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_cv_utils__["b" /* imageRef */])(inputStream.getRealWidth(), inputStream.getRealHeight()),
        _canvasSize = inputStream.getCanvasSize(),
        _size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_cv_utils__["b" /* imageRef */])(inputStream.getWidth(), inputStream.getHeight()),
        topRight = inputStream.getTopRight(),
        _sx = topRight.x,
        _sy = topRight.y,
        _canvas,
        _ctx = null,
        _data = null;

    _canvas = canvas ? canvas : document.createElement("canvas");
    _canvas.width = _canvasSize.x;
    _canvas.height = _canvasSize.y;
    _ctx = _canvas.getContext("2d");
    _data = new Uint8Array(_size.x * _size.y);
    if (true) {
        console.log("FrameGrabber", JSON.stringify({
            size: _size,
            topRight: topRight,
            videoSize: _video_size,
            canvasSize: _canvasSize
        }));
    }

    /**
     * Uses the given array as frame-buffer
     */
    _that.attachData = function (data) {
        _data = data;
    };

    /**
     * Returns the used frame-buffer
     */
    _that.getData = function () {
        return _data;
    };

    /**
     * Fetches a frame from the input-stream and puts into the frame-buffer.
     * The image-data is converted to gray-scale and then half-sampled if configured.
     */
    _that.grab = function () {
        var doHalfSample = _streamConfig.halfSample,
            frame = inputStream.getFrame(),
            drawable = frame,
            drawAngle = 0,
            ctxData;
        if (drawable) {
            adjustCanvasSize(_canvas, _canvasSize);
            if (_streamConfig.type === 'ImageStream') {
                drawable = frame.img;
                if (frame.tags && frame.tags.orientation) {
                    switch (frame.tags.orientation) {
                        case 6:
                            drawAngle = 90 * TO_RADIANS;
                            break;
                        case 8:
                            drawAngle = -90 * TO_RADIANS;
                            break;
                    }
                }
            }

            if (drawAngle !== 0) {
                _ctx.translate(_canvasSize.x / 2, _canvasSize.y / 2);
                _ctx.rotate(drawAngle);
                _ctx.drawImage(drawable, -_canvasSize.y / 2, -_canvasSize.x / 2, _canvasSize.y, _canvasSize.x);
                _ctx.rotate(-drawAngle);
                _ctx.translate(-_canvasSize.x / 2, -_canvasSize.y / 2);
            } else {
                _ctx.drawImage(drawable, 0, 0, _canvasSize.x, _canvasSize.y);
            }

            ctxData = _ctx.getImageData(_sx, _sy, _size.x, _size.y).data;
            if (doHalfSample) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_cv_utils__["c" /* grayAndHalfSampleFromCanvasData */])(ctxData, _size, _data);
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_cv_utils__["d" /* computeGray */])(ctxData, _data, _streamConfig);
            }
            return true;
        } else {
            return false;
        }
    };

    _that.getSize = function () {
        return _size;
    };

    return _that;
};

/* harmony default export */ __webpack_exports__["a"] = FrameGrabber;

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exif_helper__ = __webpack_require__(60);


var ImageLoader = {};
ImageLoader.load = function (directory, callback, offset, size, sequence) {
    var htmlImagesSrcArray = new Array(size),
        htmlImagesArray = new Array(htmlImagesSrcArray.length),
        i,
        img,
        num;

    if (sequence === false) {
        htmlImagesSrcArray[0] = directory;
    } else {
        for (i = 0; i < htmlImagesSrcArray.length; i++) {
            num = offset + i;
            htmlImagesSrcArray[i] = directory + "image-" + ("00" + num).slice(-3) + ".jpg";
        }
    }
    htmlImagesArray.notLoaded = [];
    htmlImagesArray.addImage = function (image) {
        htmlImagesArray.notLoaded.push(image);
    };
    htmlImagesArray.loaded = function (loadedImg) {
        var notloadedImgs = htmlImagesArray.notLoaded;
        for (var x = 0; x < notloadedImgs.length; x++) {
            if (notloadedImgs[x] === loadedImg) {
                notloadedImgs.splice(x, 1);
                for (var y = 0; y < htmlImagesSrcArray.length; y++) {
                    var imgName = htmlImagesSrcArray[y].substr(htmlImagesSrcArray[y].lastIndexOf("/"));
                    if (loadedImg.src.lastIndexOf(imgName) !== -1) {
                        htmlImagesArray[y] = { img: loadedImg };
                        break;
                    }
                }
                break;
            }
        }
        if (notloadedImgs.length === 0) {
            if (true) {
                console.log("Images loaded");
            }
            if (sequence === false) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exif_helper__["a" /* findTagsInObjectURL */])(directory, ['orientation']).then(function (tags) {
                    htmlImagesArray[0].tags = tags;
                    callback(htmlImagesArray);
                }).catch(function (e) {
                    console.log(e);
                    callback(htmlImagesArray);
                });
            } else {
                callback(htmlImagesArray);
            }
        }
    };

    for (i = 0; i < htmlImagesSrcArray.length; i++) {
        img = new Image();
        htmlImagesArray.addImage(img);
        addOnloadHandler(img, htmlImagesArray);
        img.src = htmlImagesSrcArray[i];
    }
};

function addOnloadHandler(img, htmlImagesArray) {
    img.onload = function () {
        htmlImagesArray.loaded(this);
    };
}

/* harmony default export */ __webpack_exports__["a"] = ImageLoader;

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_loader__ = __webpack_require__(62);


var InputStream = {};
InputStream.createVideoStream = function (video) {
    var that = {},
        _config = null,
        _eventNames = ['canrecord', 'ended'],
        _eventHandlers = {},
        _calculatedWidth,
        _calculatedHeight,
        _topRight = { x: 0, y: 0 },
        _canvasSize = { x: 0, y: 0 };

    function initSize() {
        var width = video.videoWidth,
            height = video.videoHeight;

        _calculatedWidth = _config.size ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width;
        _calculatedHeight = _config.size ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;

        _canvasSize.x = _calculatedWidth;
        _canvasSize.y = _calculatedHeight;
    }

    that.getRealWidth = function () {
        return video.videoWidth;
    };

    that.getRealHeight = function () {
        return video.videoHeight;
    };

    that.getWidth = function () {
        return _calculatedWidth;
    };

    that.getHeight = function () {
        return _calculatedHeight;
    };

    that.setWidth = function (width) {
        _calculatedWidth = width;
    };

    that.setHeight = function (height) {
        _calculatedHeight = height;
    };

    that.setInputStream = function (config) {
        _config = config;
        video.src = typeof config.src !== 'undefined' ? config.src : '';
    };

    that.ended = function () {
        return video.ended;
    };

    that.getConfig = function () {
        return _config;
    };

    that.setAttribute = function (name, value) {
        video.setAttribute(name, value);
    };

    that.pause = function () {
        video.pause();
    };

    that.play = function () {
        video.play();
    };

    that.setCurrentTime = function (time) {
        if (_config.type !== "LiveStream") {
            video.currentTime = time;
        }
    };

    that.addEventListener = function (event, f, bool) {
        if (_eventNames.indexOf(event) !== -1) {
            if (!_eventHandlers[event]) {
                _eventHandlers[event] = [];
            }
            _eventHandlers[event].push(f);
        } else {
            video.addEventListener(event, f, bool);
        }
    };

    that.clearEventHandlers = function () {
        _eventNames.forEach(function (eventName) {
            var handlers = _eventHandlers[eventName];
            if (handlers && handlers.length > 0) {
                handlers.forEach(function (handler) {
                    video.removeEventListener(eventName, handler);
                });
            }
        });
    };

    that.trigger = function (eventName, args) {
        var j,
            handlers = _eventHandlers[eventName];

        if (eventName === 'canrecord') {
            initSize();
        }
        if (handlers && handlers.length > 0) {
            for (j = 0; j < handlers.length; j++) {
                handlers[j].apply(that, args);
            }
        }
    };

    that.setTopRight = function (topRight) {
        _topRight.x = topRight.x;
        _topRight.y = topRight.y;
    };

    that.getTopRight = function () {
        return _topRight;
    };

    that.setCanvasSize = function (size) {
        _canvasSize.x = size.x;
        _canvasSize.y = size.y;
    };

    that.getCanvasSize = function () {
        return _canvasSize;
    };

    that.getFrame = function () {
        return video;
    };

    return that;
};

InputStream.createLiveStream = function (video) {
    video.setAttribute("autoplay", true);
    var that = InputStream.createVideoStream(video);

    that.ended = function () {
        return false;
    };

    return that;
};

InputStream.createImageStream = function () {
    var that = {};
    var _config = null;

    var width = 0,
        height = 0,
        frameIdx = 0,
        paused = true,
        loaded = false,
        imgArray = null,
        size = 0,
        offset = 1,
        baseUrl = null,
        ended = false,
        calculatedWidth,
        calculatedHeight,
        _eventNames = ['canrecord', 'ended'],
        _eventHandlers = {},
        _topRight = { x: 0, y: 0 },
        _canvasSize = { x: 0, y: 0 };

    function loadImages() {
        loaded = false;
        __WEBPACK_IMPORTED_MODULE_0__image_loader__["a" /* default */].load(baseUrl, function (imgs) {
            imgArray = imgs;
            if (imgs[0].tags && imgs[0].tags.orientation) {
                switch (imgs[0].tags.orientation) {
                    case 6:
                    case 8:
                        width = imgs[0].img.height;
                        height = imgs[0].img.width;
                        break;
                    default:
                        width = imgs[0].img.width;
                        height = imgs[0].img.height;
                }
            } else {
                width = imgs[0].img.width;
                height = imgs[0].img.height;
            }
            calculatedWidth = _config.size ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width;
            calculatedHeight = _config.size ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
            _canvasSize.x = calculatedWidth;
            _canvasSize.y = calculatedHeight;
            loaded = true;
            frameIdx = 0;
            setTimeout(function () {
                publishEvent("canrecord", []);
            }, 0);
        }, offset, size, _config.sequence);
    }

    function publishEvent(eventName, args) {
        var j,
            handlers = _eventHandlers[eventName];

        if (handlers && handlers.length > 0) {
            for (j = 0; j < handlers.length; j++) {
                handlers[j].apply(that, args);
            }
        }
    }

    that.trigger = publishEvent;

    that.getWidth = function () {
        return calculatedWidth;
    };

    that.getHeight = function () {
        return calculatedHeight;
    };

    that.setWidth = function (newWidth) {
        calculatedWidth = newWidth;
    };

    that.setHeight = function (newHeight) {
        calculatedHeight = newHeight;
    };

    that.getRealWidth = function () {
        return width;
    };

    that.getRealHeight = function () {
        return height;
    };

    that.setInputStream = function (stream) {
        _config = stream;
        if (stream.sequence === false) {
            baseUrl = stream.src;
            size = 1;
        } else {
            baseUrl = stream.src;
            size = stream.length;
        }
        loadImages();
    };

    that.ended = function () {
        return ended;
    };

    that.setAttribute = function () {};

    that.getConfig = function () {
        return _config;
    };

    that.pause = function () {
        paused = true;
    };

    that.play = function () {
        paused = false;
    };

    that.setCurrentTime = function (time) {
        frameIdx = time;
    };

    that.addEventListener = function (event, f) {
        if (_eventNames.indexOf(event) !== -1) {
            if (!_eventHandlers[event]) {
                _eventHandlers[event] = [];
            }
            _eventHandlers[event].push(f);
        }
    };

    that.setTopRight = function (topRight) {
        _topRight.x = topRight.x;
        _topRight.y = topRight.y;
    };

    that.getTopRight = function () {
        return _topRight;
    };

    that.setCanvasSize = function (canvasSize) {
        _canvasSize.x = canvasSize.x;
        _canvasSize.y = canvasSize.y;
    };

    that.getCanvasSize = function () {
        return _canvasSize;
    };

    that.getFrame = function () {
        var frame;

        if (!loaded) {
            return null;
        }
        if (!paused) {
            frame = imgArray[frameIdx];
            if (frameIdx < size - 1) {
                frameIdx++;
            } else {
                setTimeout(function () {
                    ended = true;
                    publishEvent("ended", []);
                }, 0);
            }
        }
        return frame;
    };

    return that;
};

/* harmony default export */ __webpack_exports__["a"] = InputStream;

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_cv_utils__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_array_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_image_debug__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rasterizer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracer__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skeletonizer__ = __webpack_require__(66);







var vec2 = {
    clone: __webpack_require__(6),
    dot: __webpack_require__(32),
    scale: __webpack_require__(79),
    transformMat2: __webpack_require__(80)
};
var mat2 = {
    copy: __webpack_require__(76),
    create: __webpack_require__(77),
    invert: __webpack_require__(78)
};

var _config,
    _currentImageWrapper,
    _skelImageWrapper,
    _subImageWrapper,
    _labelImageWrapper,
    _patchGrid,
    _patchLabelGrid,
    _imageToPatchGrid,
    _binaryImageWrapper,
    _patchSize,
    _canvasContainer = {
    ctx: {
        binary: null
    },
    dom: {
        binary: null
    }
},
    _numPatches = { x: 0, y: 0 },
    _inputImageWrapper,
    _skeletonizer;

function initBuffers() {
    var skeletonImageData;

    if (_config.halfSample) {
        _currentImageWrapper = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */]({
            x: _inputImageWrapper.size.x / 2 | 0,
            y: _inputImageWrapper.size.y / 2 | 0
        });
    } else {
        _currentImageWrapper = _inputImageWrapper;
    }

    _patchSize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["e" /* calculatePatchSize */])(_config.patchSize, _currentImageWrapper.size);

    _numPatches.x = _currentImageWrapper.size.x / _patchSize.x | 0;
    _numPatches.y = _currentImageWrapper.size.y / _patchSize.y | 0;

    _binaryImageWrapper = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */](_currentImageWrapper.size, undefined, Uint8Array, false);

    _labelImageWrapper = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */](_patchSize, undefined, Array, true);

    skeletonImageData = new ArrayBuffer(64 * 1024);
    _subImageWrapper = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */](_patchSize, new Uint8Array(skeletonImageData, 0, _patchSize.x * _patchSize.y));
    _skelImageWrapper = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */](_patchSize, new Uint8Array(skeletonImageData, _patchSize.x * _patchSize.y * 3, _patchSize.x * _patchSize.y), undefined, true);
    _skeletonizer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__skeletonizer__["a" /* default */])(typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : global, {
        size: _patchSize.x
    }, skeletonImageData);

    _imageToPatchGrid = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */]({
        x: _currentImageWrapper.size.x / _subImageWrapper.size.x | 0,
        y: _currentImageWrapper.size.y / _subImageWrapper.size.y | 0
    }, undefined, Array, true);
    _patchGrid = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */](_imageToPatchGrid.size, undefined, undefined, true);
    _patchLabelGrid = new __WEBPACK_IMPORTED_MODULE_0__common_image_wrapper__["a" /* default */](_imageToPatchGrid.size, undefined, Int32Array, true);
}

function initCanvas() {
    if (_config.useWorker || typeof document === 'undefined') {
        return;
    }
    _canvasContainer.dom.binary = document.createElement("canvas");
    _canvasContainer.dom.binary.className = "binaryBuffer";
    if (true && _config.debug.showCanvas === true) {
        document.querySelector("#debug").appendChild(_canvasContainer.dom.binary);
    }
    _canvasContainer.ctx.binary = _canvasContainer.dom.binary.getContext("2d");
    _canvasContainer.dom.binary.width = _binaryImageWrapper.size.x;
    _canvasContainer.dom.binary.height = _binaryImageWrapper.size.y;
}

/**
 * Creates a bounding box which encloses all the given patches
 * @returns {Array} The minimal bounding box
 */
function boxFromPatches(patches) {
    var overAvg,
        i,
        j,
        patch,
        transMat,
        minx = _binaryImageWrapper.size.x,
        miny = _binaryImageWrapper.size.y,
        maxx = -_binaryImageWrapper.size.x,
        maxy = -_binaryImageWrapper.size.y,
        box,
        scale;

    // draw all patches which are to be taken into consideration
    overAvg = 0;
    for (i = 0; i < patches.length; i++) {
        patch = patches[i];
        overAvg += patch.rad;
        if (true && _config.debug.showPatches) {
            __WEBPACK_IMPORTED_MODULE_3__common_image_debug__["a" /* default */].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, { color: "red" });
        }
    }

    overAvg /= patches.length;
    overAvg = (overAvg * 180 / Math.PI + 90) % 180 - 90;
    if (overAvg < 0) {
        overAvg += 180;
    }

    overAvg = (180 - overAvg) * Math.PI / 180;
    transMat = mat2.copy(mat2.create(), [Math.cos(overAvg), Math.sin(overAvg), -Math.sin(overAvg), Math.cos(overAvg)]);

    // iterate over patches and rotate by angle
    for (i = 0; i < patches.length; i++) {
        patch = patches[i];
        for (j = 0; j < 4; j++) {
            vec2.transformMat2(patch.box[j], patch.box[j], transMat);
        }

        if (true && _config.debug.boxFromPatches.showTransformed) {
            __WEBPACK_IMPORTED_MODULE_3__common_image_debug__["a" /* default */].drawPath(patch.box, { x: 0, y: 1 }, _canvasContainer.ctx.binary, { color: '#99ff00', lineWidth: 2 });
        }
    }

    // find bounding box
    for (i = 0; i < patches.length; i++) {
        patch = patches[i];
        for (j = 0; j < 4; j++) {
            if (patch.box[j][0] < minx) {
                minx = patch.box[j][0];
            }
            if (patch.box[j][0] > maxx) {
                maxx = patch.box[j][0];
            }
            if (patch.box[j][1] < miny) {
                miny = patch.box[j][1];
            }
            if (patch.box[j][1] > maxy) {
                maxy = patch.box[j][1];
            }
        }
    }

    box = [[minx, miny], [maxx, miny], [maxx, maxy], [minx, maxy]];

    if (true && _config.debug.boxFromPatches.showTransformedBox) {
        __WEBPACK_IMPORTED_MODULE_3__common_image_debug__["a" /* default */].drawPath(box, { x: 0, y: 1 }, _canvasContainer.ctx.binary, { color: '#ff0000', lineWidth: 2 });
    }

    scale = _config.halfSample ? 2 : 1;
    // reverse rotation;
    transMat = mat2.invert(transMat, transMat);
    for (j = 0; j < 4; j++) {
        vec2.transformMat2(box[j], box[j], transMat);
    }

    if (true && _config.debug.boxFromPatches.showBB) {
        __WEBPACK_IMPORTED_MODULE_3__common_image_debug__["a" /* default */].drawPath(box, { x: 0, y: 1 }, _canvasContainer.ctx.binary, { color: '#ff0000', lineWidth: 2 });
    }

    for (j = 0; j < 4; j++) {
        vec2.scale(box[j], box[j], scale);
    }

    return box;
}

/**
 * Creates a binary image of the current image
 */
function binarizeImage() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["f" /* otsuThreshold */])(_currentImageWrapper, _binaryImageWrapper);
    _binaryImageWrapper.zeroBorder();
    if (true && _config.debug.showCanvas) {
        _binaryImageWrapper.show(_canvasContainer.dom.binary, 255);
    }
}

/**
 * Iterate over the entire image
 * extract patches
 */
function findPatches() {
    var i,
        j,
        x,
        y,
        moments,
        patchesFound = [],
        rasterizer,
        rasterResult,
        patch;
    for (i = 0; i < _numPatches.x; i++) {
        for (j = 0; j < _numPatches.y; j++) {
            x = _subImageWrapper.size.x * i;
            y = _subImageWrapper.size.y * j;

            // seperate parts
            skeletonize(x, y);

            // Rasterize, find individual bars
            _skelImageWrapper.zeroBorder();
            __WEBPACK_IMPORTED_MODULE_2__common_array_helper__["a" /* default */].init(_labelImageWrapper.data, 0);
            rasterizer = __WEBPACK_IMPORTED_MODULE_4__rasterizer__["a" /* default */].create(_skelImageWrapper, _labelImageWrapper);
            rasterResult = rasterizer.rasterize(0);

            if (true && _config.debug.showLabels) {
                _labelImageWrapper.overlay(_canvasContainer.dom.binary, Math.floor(360 / rasterResult.count), { x: x, y: y });
            }

            // calculate moments from the skeletonized patch
            moments = _labelImageWrapper.moments(rasterResult.count);

            // extract eligible patches
            patchesFound = patchesFound.concat(describePatch(moments, [i, j], x, y));
        }
    }

    if (true && _config.debug.showFoundPatches) {
        for (i = 0; i < patchesFound.length; i++) {
            patch = patchesFound[i];
            __WEBPACK_IMPORTED_MODULE_3__common_image_debug__["a" /* default */].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, { color: "#99ff00", lineWidth: 2 });
        }
    }

    return patchesFound;
}

/**
 * Finds those connected areas which contain at least 6 patches
 * and returns them ordered DESC by the number of contained patches
 * @param {Number} maxLabel
 */
function findBiggestConnectedAreas(maxLabel) {
    var i,
        sum,
        labelHist = [],
        topLabels = [];

    for (i = 0; i < maxLabel; i++) {
        labelHist.push(0);
    }
    sum = _patchLabelGrid.data.length;
    while (sum--) {
        if (_patchLabelGrid.data[sum] > 0) {
            labelHist[_patchLabelGrid.data[sum] - 1]++;
        }
    }

    labelHist = labelHist.map(function (val, idx) {
        return {
            val: val,
            label: idx + 1
        };
    });

    labelHist.sort(function (a, b) {
        return b.val - a.val;
    });

    // extract top areas with at least 6 patches present
    topLabels = labelHist.filter(function (el) {
        return el.val >= 5;
    });

    return topLabels;
}

/**
 *
 */
function findBoxes(topLabels, maxLabel) {
    var i,
        j,
        sum,
        patches = [],
        patch,
        box,
        boxes = [],
        hsv = [0, 1, 1],
        rgb = [0, 0, 0];

    for (i = 0; i < topLabels.length; i++) {
        sum = _patchLabelGrid.data.length;
        patches.length = 0;
        while (sum--) {
            if (_patchLabelGrid.data[sum] === topLabels[i].label) {
                patch = _imageToPatchGrid.data[sum];
                patches.push(patch);
            }
        }
        box = boxFromPatches(patches);
        if (box) {
            boxes.push(box);

            // draw patch-labels if requested
            if (true && _config.debug.showRemainingPatchLabels) {
                for (j = 0; j < patches.length; j++) {
                    patch = patches[j];
                    hsv[0] = topLabels[i].label / (maxLabel + 1) * 360;
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["a" /* hsv2rgb */])(hsv, rgb);
                    __WEBPACK_IMPORTED_MODULE_3__common_image_debug__["a" /* default */].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, { color: "rgb(" + rgb.join(",") + ")", lineWidth: 2 });
                }
            }
        }
    }
    return boxes;
}

/**
 * Find similar moments (via cluster)
 * @param {Object} moments
 */
function similarMoments(moments) {
    var clusters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["g" /* cluster */])(moments, 0.90);
    var topCluster = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["h" /* topGeneric */])(clusters, 1, function (e) {
        return e.getPoints().length;
    });
    var points = [],
        result = [];
    if (topCluster.length === 1) {
        points = topCluster[0].item.getPoints();
        for (var i = 0; i < points.length; i++) {
            result.push(points[i].point);
        }
    }
    return result;
}

function skeletonize(x, y) {
    _binaryImageWrapper.subImageAsCopy(_subImageWrapper, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["b" /* imageRef */])(x, y));
    _skeletonizer.skeletonize();

    // Show skeleton if requested
    if (true && _config.debug.showSkeleton) {
        _skelImageWrapper.overlay(_canvasContainer.dom.binary, 360, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["b" /* imageRef */])(x, y));
    }
}

/**
 * Extracts and describes those patches which seem to contain a barcode pattern
 * @param {Array} moments
 * @param {Object} patchPos,
 * @param {Number} x
 * @param {Number} y
 * @returns {Array} list of patches
 */
function describePatch(moments, patchPos, x, y) {
    var k,
        avg,
        eligibleMoments = [],
        matchingMoments,
        patch,
        patchesFound = [],
        minComponentWeight = Math.ceil(_patchSize.x / 3);

    if (moments.length >= 2) {
        // only collect moments which's area covers at least minComponentWeight pixels.
        for (k = 0; k < moments.length; k++) {
            if (moments[k].m00 > minComponentWeight) {
                eligibleMoments.push(moments[k]);
            }
        }

        // if at least 2 moments are found which have at least minComponentWeights covered
        if (eligibleMoments.length >= 2) {
            matchingMoments = similarMoments(eligibleMoments);
            avg = 0;
            // determine the similarity of the moments
            for (k = 0; k < matchingMoments.length; k++) {
                avg += matchingMoments[k].rad;
            }

            // Only two of the moments are allowed not to fit into the equation
            // add the patch to the set
            if (matchingMoments.length > 1 && matchingMoments.length >= eligibleMoments.length / 4 * 3 && matchingMoments.length > moments.length / 4) {
                avg /= matchingMoments.length;
                patch = {
                    index: patchPos[1] * _numPatches.x + patchPos[0],
                    pos: {
                        x: x,
                        y: y
                    },
                    box: [vec2.clone([x, y]), vec2.clone([x + _subImageWrapper.size.x, y]), vec2.clone([x + _subImageWrapper.size.x, y + _subImageWrapper.size.y]), vec2.clone([x, y + _subImageWrapper.size.y])],
                    moments: matchingMoments,
                    rad: avg,
                    vec: vec2.clone([Math.cos(avg), Math.sin(avg)])
                };
                patchesFound.push(patch);
            }
        }
    }
    return patchesFound;
}

/**
 * finds patches which are connected and share the same orientation
 * @param {Object} patchesFound
 */
function rasterizeAngularSimilarity(patchesFound) {
    var label = 0,
        threshold = 0.95,
        currIdx = 0,
        j,
        patch,
        hsv = [0, 1, 1],
        rgb = [0, 0, 0];

    function notYetProcessed() {
        var i;
        for (i = 0; i < _patchLabelGrid.data.length; i++) {
            if (_patchLabelGrid.data[i] === 0 && _patchGrid.data[i] === 1) {
                return i;
            }
        }
        return _patchLabelGrid.length;
    }

    function trace(currentIdx) {
        var x,
            y,
            currentPatch,
            idx,
            dir,
            current = {
            x: currentIdx % _patchLabelGrid.size.x,
            y: currentIdx / _patchLabelGrid.size.x | 0
        },
            similarity;

        if (currentIdx < _patchLabelGrid.data.length) {
            currentPatch = _imageToPatchGrid.data[currentIdx];
            // assign label
            _patchLabelGrid.data[currentIdx] = label;
            for (dir = 0; dir < __WEBPACK_IMPORTED_MODULE_5__tracer__["a" /* default */].searchDirections.length; dir++) {
                y = current.y + __WEBPACK_IMPORTED_MODULE_5__tracer__["a" /* default */].searchDirections[dir][0];
                x = current.x + __WEBPACK_IMPORTED_MODULE_5__tracer__["a" /* default */].searchDirections[dir][1];
                idx = y * _patchLabelGrid.size.x + x;

                // continue if patch empty
                if (_patchGrid.data[idx] === 0) {
                    _patchLabelGrid.data[idx] = Number.MAX_VALUE;
                    continue;
                }

                if (_patchLabelGrid.data[idx] === 0) {
                    similarity = Math.abs(vec2.dot(_imageToPatchGrid.data[idx].vec, currentPatch.vec));
                    if (similarity > threshold) {
                        trace(idx);
                    }
                }
            }
        }
    }

    // prepare for finding the right patches
    __WEBPACK_IMPORTED_MODULE_2__common_array_helper__["a" /* default */].init(_patchGrid.data, 0);
    __WEBPACK_IMPORTED_MODULE_2__common_array_helper__["a" /* default */].init(_patchLabelGrid.data, 0);
    __WEBPACK_IMPORTED_MODULE_2__common_array_helper__["a" /* default */].init(_imageToPatchGrid.data, null);

    for (j = 0; j < patchesFound.length; j++) {
        patch = patchesFound[j];
        _imageToPatchGrid.data[patch.index] = patch;
        _patchGrid.data[patch.index] = 1;
    }

    // rasterize the patches found to determine area
    _patchGrid.zeroBorder();

    while ((currIdx = notYetProcessed()) < _patchLabelGrid.data.length) {
        label++;
        trace(currIdx);
    }

    // draw patch-labels if requested
    if (true && _config.debug.showPatchLabels) {
        for (j = 0; j < _patchLabelGrid.data.length; j++) {
            if (_patchLabelGrid.data[j] > 0 && _patchLabelGrid.data[j] <= label) {
                patch = _imageToPatchGrid.data[j];
                hsv[0] = _patchLabelGrid.data[j] / (label + 1) * 360;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["a" /* hsv2rgb */])(hsv, rgb);
                __WEBPACK_IMPORTED_MODULE_3__common_image_debug__["a" /* default */].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, { color: "rgb(" + rgb.join(",") + ")", lineWidth: 2 });
            }
        }
    }

    return label;
}

/* harmony default export */ __webpack_exports__["a"] = {
    init: function init(inputImageWrapper, config) {
        _config = config;
        _inputImageWrapper = inputImageWrapper;

        initBuffers();
        initCanvas();
    },

    locate: function locate() {
        var patchesFound, topLabels, boxes;

        if (_config.halfSample) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["i" /* halfSample */])(_inputImageWrapper, _currentImageWrapper);
        }

        binarizeImage();
        patchesFound = findPatches();
        // return unless 5% or more patches are found
        if (patchesFound.length < _numPatches.x * _numPatches.y * 0.05) {
            return null;
        }

        // rasterrize area by comparing angular similarity;
        var maxLabel = rasterizeAngularSimilarity(patchesFound);
        if (maxLabel < 1) {
            return null;
        }

        // search for area with the most patches (biggest connected area)
        topLabels = findBiggestConnectedAreas(maxLabel);
        if (topLabels.length === 0) {
            return null;
        }

        boxes = findBoxes(topLabels, maxLabel);
        return boxes;
    },

    checkImageConstraints: function checkImageConstraints(inputStream, config) {
        var patchSize,
            width = inputStream.getWidth(),
            height = inputStream.getHeight(),
            halfSample = config.halfSample ? 0.5 : 1,
            size,
            area;

        // calculate width and height based on area
        if (inputStream.getConfig().area) {
            area = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["j" /* computeImageArea */])(width, height, inputStream.getConfig().area);
            inputStream.setTopRight({ x: area.sx, y: area.sy });
            inputStream.setCanvasSize({ x: width, y: height });
            width = area.sw;
            height = area.sh;
        }

        size = {
            x: Math.floor(width * halfSample),
            y: Math.floor(height * halfSample)
        };

        patchSize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_cv_utils__["e" /* calculatePatchSize */])(config.patchSize, size);
        if (true) {
            console.log("Patch-Size: " + JSON.stringify(patchSize));
        }

        inputStream.setWidth(Math.floor(Math.floor(size.x / patchSize.x) * (1 / halfSample) * patchSize.x));
        inputStream.setHeight(Math.floor(Math.floor(size.y / patchSize.y) * (1 / halfSample) * patchSize.y));

        if (inputStream.getWidth() % patchSize.x === 0 && inputStream.getHeight() % patchSize.y === 0) {
            return true;
        }

        throw new Error("Image dimensions do not comply with the current settings: Width (" + width + " )and height (" + height + ") must a multiple of " + patchSize.x);
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(47)))

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracer__ = __webpack_require__(30);


/**
 * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */
var Rasterizer = {
    createContour2D: function createContour2D() {
        return {
            dir: null,
            index: null,
            firstVertex: null,
            insideContours: null,
            nextpeer: null,
            prevpeer: null
        };
    },
    CONTOUR_DIR: {
        CW_DIR: 0,
        CCW_DIR: 1,
        UNKNOWN_DIR: 2
    },
    DIR: {
        OUTSIDE_EDGE: -32767,
        INSIDE_EDGE: -32766
    },
    create: function create(imageWrapper, labelWrapper) {
        var imageData = imageWrapper.data,
            labelData = labelWrapper.data,
            width = imageWrapper.size.x,
            height = imageWrapper.size.y,
            tracer = __WEBPACK_IMPORTED_MODULE_0__tracer__["a" /* default */].create(imageWrapper, labelWrapper);

        return {
            rasterize: function rasterize(depthlabel) {
                var color,
                    bc,
                    lc,
                    labelindex,
                    cx,
                    cy,
                    colorMap = [],
                    vertex,
                    p,
                    cc,
                    sc,
                    pos,
                    connectedCount = 0,
                    i;

                for (i = 0; i < 400; i++) {
                    colorMap[i] = 0;
                }

                colorMap[0] = imageData[0];
                cc = null;
                for (cy = 1; cy < height - 1; cy++) {
                    labelindex = 0;
                    bc = colorMap[0];
                    for (cx = 1; cx < width - 1; cx++) {
                        pos = cy * width + cx;
                        if (labelData[pos] === 0) {
                            color = imageData[pos];
                            if (color !== bc) {
                                if (labelindex === 0) {
                                    lc = connectedCount + 1;
                                    colorMap[lc] = color;
                                    bc = color;
                                    vertex = tracer.contourTracing(cy, cx, lc, color, Rasterizer.DIR.OUTSIDE_EDGE);
                                    if (vertex !== null) {
                                        connectedCount++;
                                        labelindex = lc;
                                        p = Rasterizer.createContour2D();
                                        p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                                        p.index = labelindex;
                                        p.firstVertex = vertex;
                                        p.nextpeer = cc;
                                        p.insideContours = null;
                                        if (cc !== null) {
                                            cc.prevpeer = p;
                                        }
                                        cc = p;
                                    }
                                } else {
                                    vertex = tracer.contourTracing(cy, cx, Rasterizer.DIR.INSIDE_EDGE, color, labelindex);
                                    if (vertex !== null) {
                                        p = Rasterizer.createContour2D();
                                        p.firstVertex = vertex;
                                        p.insideContours = null;
                                        if (depthlabel === 0) {
                                            p.dir = Rasterizer.CONTOUR_DIR.CCW_DIR;
                                        } else {
                                            p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                                        }
                                        p.index = depthlabel;
                                        sc = cc;
                                        while (sc !== null && sc.index !== labelindex) {
                                            sc = sc.nextpeer;
                                        }
                                        if (sc !== null) {
                                            p.nextpeer = sc.insideContours;
                                            if (sc.insideContours !== null) {
                                                sc.insideContours.prevpeer = p;
                                            }
                                            sc.insideContours = p;
                                        }
                                    }
                                }
                            } else {
                                labelData[pos] = labelindex;
                            }
                        } else if (labelData[pos] === Rasterizer.DIR.OUTSIDE_EDGE || labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
                            labelindex = 0;
                            if (labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
                                bc = imageData[pos];
                            } else {
                                bc = colorMap[0];
                            }
                        } else {
                            labelindex = labelData[pos];
                            bc = colorMap[labelindex];
                        }
                    }
                }
                sc = cc;
                while (sc !== null) {
                    sc.index = depthlabel;
                    sc = sc.nextpeer;
                }
                return {
                    cc: cc,
                    count: connectedCount
                };
            },
            debug: {
                drawContour: function drawContour(canvas, firstContour) {
                    var ctx = canvas.getContext("2d"),
                        pq = firstContour,
                        iq,
                        q,
                        p;

                    ctx.strokeStyle = "red";
                    ctx.fillStyle = "red";
                    ctx.lineWidth = 1;

                    if (pq !== null) {
                        iq = pq.insideContours;
                    } else {
                        iq = null;
                    }

                    while (pq !== null) {
                        if (iq !== null) {
                            q = iq;
                            iq = iq.nextpeer;
                        } else {
                            q = pq;
                            pq = pq.nextpeer;
                            if (pq !== null) {
                                iq = pq.insideContours;
                            } else {
                                iq = null;
                            }
                        }

                        switch (q.dir) {
                            case Rasterizer.CONTOUR_DIR.CW_DIR:
                                ctx.strokeStyle = "red";
                                break;
                            case Rasterizer.CONTOUR_DIR.CCW_DIR:
                                ctx.strokeStyle = "blue";
                                break;
                            case Rasterizer.CONTOUR_DIR.UNKNOWN_DIR:
                                ctx.strokeStyle = "green";
                                break;
                        }

                        p = q.firstVertex;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        do {
                            p = p.next;
                            ctx.lineTo(p.x, p.y);
                        } while (p !== q.firstVertex);
                        ctx.stroke();
                    }
                }
            }
        };
    }
};

/* harmony default export */ __webpack_exports__["a"] = Rasterizer;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @preserve ASM BEGIN */
/* eslint-disable eqeqeq*/
function Skeletonizer(stdlib, foreign, buffer) {
    "use asm";

    var images = new stdlib.Uint8Array(buffer),
        size = foreign.size | 0,
        imul = stdlib.Math.imul;

    function erode(inImagePtr, outImagePtr) {
        inImagePtr = inImagePtr | 0;
        outImagePtr = outImagePtr | 0;

        var v = 0,
            u = 0,
            sum = 0,
            yStart1 = 0,
            yStart2 = 0,
            xStart1 = 0,
            xStart2 = 0,
            offset = 0;

        for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
            offset = offset + size | 0;
            for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
                yStart1 = offset - size | 0;
                yStart2 = offset + size | 0;
                xStart1 = u - 1 | 0;
                xStart2 = u + 1 | 0;
                sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;
                if ((sum | 0) == (5 | 0)) {
                    images[outImagePtr + offset + u | 0] = 1;
                } else {
                    images[outImagePtr + offset + u | 0] = 0;
                }
            }
        }
        return;
    }

    function subtract(aImagePtr, bImagePtr, outImagePtr) {
        aImagePtr = aImagePtr | 0;
        bImagePtr = bImagePtr | 0;
        outImagePtr = outImagePtr | 0;

        var length = 0;

        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0;
        }
    }

    function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {
        aImagePtr = aImagePtr | 0;
        bImagePtr = bImagePtr | 0;
        outImagePtr = outImagePtr | 0;

        var length = 0;

        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0;
        }
    }

    function countNonZero(imagePtr) {
        imagePtr = imagePtr | 0;

        var sum = 0,
            length = 0;

        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
            length = length - 1 | 0;
            sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0;
        }

        return sum | 0;
    }

    function init(imagePtr, value) {
        imagePtr = imagePtr | 0;
        value = value | 0;

        var length = 0;

        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[imagePtr + length | 0] = value;
        }
    }

    function dilate(inImagePtr, outImagePtr) {
        inImagePtr = inImagePtr | 0;
        outImagePtr = outImagePtr | 0;

        var v = 0,
            u = 0,
            sum = 0,
            yStart1 = 0,
            yStart2 = 0,
            xStart1 = 0,
            xStart2 = 0,
            offset = 0;

        for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
            offset = offset + size | 0;
            for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
                yStart1 = offset - size | 0;
                yStart2 = offset + size | 0;
                xStart1 = u - 1 | 0;
                xStart2 = u + 1 | 0;
                sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;
                if ((sum | 0) > (0 | 0)) {
                    images[outImagePtr + offset + u | 0] = 1;
                } else {
                    images[outImagePtr + offset + u | 0] = 0;
                }
            }
        }
        return;
    }

    function memcpy(srcImagePtr, dstImagePtr) {
        srcImagePtr = srcImagePtr | 0;
        dstImagePtr = dstImagePtr | 0;

        var length = 0;

        length = imul(size, size) | 0;

        while ((length | 0) > 0) {
            length = length - 1 | 0;
            images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0;
        }
    }

    function zeroBorder(imagePtr) {
        imagePtr = imagePtr | 0;

        var x = 0,
            y = 0;

        for (x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0) {
            images[imagePtr + x | 0] = 0;
            images[imagePtr + y | 0] = 0;
            y = y + size - 1 | 0;
            images[imagePtr + y | 0] = 0;
            y = y + 1 | 0;
        }
        for (x = 0; (x | 0) < (size | 0); x = x + 1 | 0) {
            images[imagePtr + y | 0] = 0;
            y = y + 1 | 0;
        }
    }

    function skeletonize() {
        var subImagePtr = 0,
            erodedImagePtr = 0,
            tempImagePtr = 0,
            skelImagePtr = 0,
            sum = 0,
            done = 0;

        erodedImagePtr = imul(size, size) | 0;
        tempImagePtr = erodedImagePtr + erodedImagePtr | 0;
        skelImagePtr = tempImagePtr + erodedImagePtr | 0;

        // init skel-image
        init(skelImagePtr, 0);
        zeroBorder(subImagePtr);

        do {
            erode(subImagePtr, erodedImagePtr);
            dilate(erodedImagePtr, tempImagePtr);
            subtract(subImagePtr, tempImagePtr, tempImagePtr);
            bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);
            memcpy(erodedImagePtr, subImagePtr);
            sum = countNonZero(subImagePtr) | 0;
            done = (sum | 0) == 0 | 0;
        } while (!done);
    }
    return {
        skeletonize: skeletonize
    };
}
/* @preserve ASM END */
/* harmony default export */ __webpack_exports__["a"] = Skeletonizer;
/* eslint-enable eqeqeq*/

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barcode_reader__ = __webpack_require__(5);


function CodabarReader() {
    __WEBPACK_IMPORTED_MODULE_0__barcode_reader__["a" /* default */].call(this);
    this._counters = [];
}

var properties = {
    ALPHABETH_STRING: { value: "0123456789-$:/.+ABCD" },
    ALPHABET: { value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68] },
    CHARACTER_ENCODINGS: { value: [0x003, 0x006, 0x009, 0x060, 0x012, 0x042, 0x021, 0x024, 0x030, 0x048, 0x00c, 0x018, 0x045, 0x051, 0x054, 0x015, 0x01A, 0x029, 0x00B, 0x00E] },
    START_END: { value: [0x01A, 0x029, 0x00B, 0x00E] },
    MIN_ENCODED_CHARS: { value: 4 },
    MAX_ACCEPTABLE: { value: 2.0 },
    PADDING: { value: 1.5 },
    FORMAT: { value: "codabar", writeable: false }
};

CodabarReader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__barcode_reader__["a" /* default */].prototype, properties);
CodabarReader.prototype.constructor = CodabarReader;

CodabarReader.prototype._decode = function () {
    var self = this,
        result = [],
        start,
        decodedChar,
        pattern,
        nextStart,
        end;

    this._counters = self._fillCounters();
    start = self._findStart();
    if (!start) {
        return null;
    }
    nextStart = start.startCounter;

    do {
        pattern = self._toPattern(nextStart);
        if (pattern < 0) {
            return null;
        }
        decodedChar = self._patternToChar(pattern);
        if (decodedChar < 0) {
            return null;
        }
        result.push(decodedChar);
        nextStart += 8;
        if (result.length > 1 && self._isStartEnd(pattern)) {
            break;
        }
    } while (nextStart < self._counters.length);

    // verify end
    if (result.length - 2 < self.MIN_ENCODED_CHARS || !self._isStartEnd(pattern)) {
        return null;
    }

    // verify end white space
    if (!self._verifyWhitespace(start.startCounter, nextStart - 8)) {
        return null;
    }

    if (!self._validateResult(result, start.startCounter)) {
        return null;
    }

    nextStart = nextStart > self._counters.length ? self._counters.length : nextStart;
    end = start.start + self._sumCounters(start.startCounter, nextStart - 8);

    return {
        code: result.join(""),
        start: start.start,
        end: end,
        startInfo: start,
        decodedCodes: result
    };
};

CodabarReader.prototype._verifyWhitespace = function (startCounter, endCounter) {
    if (startCounter - 1 <= 0 || this._counters[startCounter - 1] >= this._calculatePatternLength(startCounter) / 2.0) {
        if (endCounter + 8 >= this._counters.length || this._counters[endCounter + 7] >= this._calculatePatternLength(endCounter) / 2.0) {
            return true;
        }
    }
    return false;
};

CodabarReader.prototype._calculatePatternLength = function (offset) {
    var i,
        sum = 0;

    for (i = offset; i < offset + 7; i++) {
        sum += this._counters[i];
    }

    return sum;
};

CodabarReader.prototype._thresholdResultPattern = function (result, startCounter) {
    var self = this,
        categorization = {
        space: {
            narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE },
            wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }
        },
        bar: {
            narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE },
            wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }
        }
    },
        kind,
        cat,
        i,
        j,
        pos = startCounter,
        pattern;

    for (i = 0; i < result.length; i++) {
        pattern = self._charToPattern(result[i]);
        for (j = 6; j >= 0; j--) {
            kind = (j & 1) === 2 ? categorization.bar : categorization.space;
            cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
            cat.size += self._counters[pos + j];
            cat.counts++;
            pattern >>= 1;
        }
        pos += 8;
    }

    ["space", "bar"].forEach(function (key) {
        var newkind = categorization[key];
        newkind.wide.min = Math.floor((newkind.narrow.size / newkind.narrow.counts + newkind.wide.size / newkind.wide.counts) / 2);
        newkind.narrow.max = Math.ceil(newkind.wide.min);
        newkind.wide.max = Math.ceil((newkind.wide.size * self.MAX_ACCEPTABLE + self.PADDING) / newkind.wide.counts);
    });

    return categorization;
};

CodabarReader.prototype._charToPattern = function (char) {
    var self = this,
        charCode = char.charCodeAt(0),
        i;

    for (i = 0; i < self.ALPHABET.length; i++) {
        if (self.ALPHABET[i] === charCode) {
            return self.CHARACTER_ENCODINGS[i];
        }
    }
    return 0x0;
};

CodabarReader.prototype._validateResult = function (result, startCounter) {
    var self = this,
        thresholds = self._thresholdResultPattern(result, startCounter),
        i,
        j,
        kind,
        cat,
        size,
        pos = startCounter,
        pattern;

    for (i = 0; i < result.length; i++) {
        pattern = self._charToPattern(result[i]);
        for (j = 6; j >= 0; j--) {
            kind = (j & 1) === 0 ? thresholds.bar : thresholds.space;
            cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
            size = self._counters[pos + j];
            if (size < cat.min || size > cat.max) {
                return false;
            }
            pattern >>= 1;
        }
        pos += 8;
    }
    return true;
};

CodabarReader.prototype._patternToChar = function (pattern) {
    var i,
        self = this;

    for (i = 0; i < self.CHARACTER_ENCODINGS.length; i++) {
        if (self.CHARACTER_ENCODINGS[i] === pattern) {
            return String.fromCharCode(self.ALPHABET[i]);
        }
    }
    return -1;
};

CodabarReader.prototype._computeAlternatingThreshold = function (offset, end) {
    var i,
        min = Number.MAX_VALUE,
        max = 0,
        counter;

    for (i = offset; i < end; i += 2) {
        counter = this._counters[i];
        if (counter > max) {
            max = counter;
        }
        if (counter < min) {
            min = counter;
        }
    }

    return (min + max) / 2.0 | 0;
};

CodabarReader.prototype._toPattern = function (offset) {
    var numCounters = 7,
        end = offset + numCounters,
        barThreshold,
        spaceThreshold,
        bitmask = 1 << numCounters - 1,
        pattern = 0,
        i,
        threshold;

    if (end > this._counters.length) {
        return -1;
    }

    barThreshold = this._computeAlternatingThreshold(offset, end);
    spaceThreshold = this._computeAlternatingThreshold(offset + 1, end);

    for (i = 0; i < numCounters; i++) {
        threshold = (i & 1) === 0 ? barThreshold : spaceThreshold;
        if (this._counters[offset + i] > threshold) {
            pattern |= bitmask;
        }
        bitmask >>= 1;
    }

    return pattern;
};

CodabarReader.prototype._isStartEnd = function (pattern) {
    var i;

    for (i = 0; i < this.START_END.length; i++) {
        if (this.START_END[i] === pattern) {
            return true;
        }
    }
    return false;
};

CodabarReader.prototype._sumCounters = function (start, end) {
    var i,
        sum = 0;

    for (i = start; i < end; i++) {
        sum += this._counters[i];
    }
    return sum;
};

CodabarReader.prototype._findStart = function () {
    var self = this,
        i,
        pattern,
        start = self._nextUnset(self._row),
        end;

    for (i = 1; i < this._counters.length; i++) {
        pattern = self._toPattern(i);
        if (pattern !== -1 && self._isStartEnd(pattern)) {
            // TODO: Look for whitespace ahead
            start += self._sumCounters(0, i);
            end = start + self._sumCounters(i, i + 8);
            return {
                start: start,
                end: end,
                startCounter: i,
                endCounter: i + 8
            };
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = CodabarReader;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barcode_reader__ = __webpack_require__(5);


function Code128Reader() {
    __WEBPACK_IMPORTED_MODULE_0__barcode_reader__["a" /* default */].call(this);
}

var properties = {
    CODE_SHIFT: { value: 98 },
    CODE_C: { value: 99 },
    CODE_B: { value: 100 },
    CODE_A: { value: 101 },
    START_CODE_A: { value: 103 },
    START_CODE_B: { value: 104 },
    START_CODE_C: { value: 105 },
    STOP_CODE: { value: 106 },
    CODE_PATTERN: { value: [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]] },
    SINGLE_CODE_ERROR: { value: 0.64 },
    AVG_CODE_ERROR: { value: 0.30 },
    FORMAT: { value: "code_128", writeable: false },
    MODULE_INDICES: { value: { bar: [0, 2, 4], space: [1, 3, 5] } }
};

Code128Reader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__barcode_reader__["a" /* default */].prototype, properties);
Code128Reader.prototype.constructor = Code128Reader;

Code128Reader.prototype._decodeCode = function (start, correction) {
    var counter = [0, 0, 0, 0, 0, 0],
        i,
        self = this,
        offset = start,
        isWhite = !self._row[offset],
        counterPos = 0,
        bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start,
        correction: {
            bar: 1,
            space: 1
        }
    },
        code,
        error;

    for (i = offset; i < self._row.length; i++) {
        if (self._row[i] ^ isWhite) {
            counter[counterPos]++;
        } else {
            if (counterPos === counter.length - 1) {
                if (correction) {
                    self._correct(counter, correction);
                }
                for (code = 0; code < self.CODE_PATTERN.length; code++) {
                    error = self._matchPattern(counter, self.CODE_PATTERN[code]);
                    if (error < bestMatch.error) {
                        bestMatch.code = code;
                        bestMatch.error = error;
                    }
                }
                bestMatch.end = i;
                if (bestMatch.code === -1 || bestMatch.error > self.AVG_CODE_ERROR) {
                    return null;
                }
                if (self.CODE_PATTERN[bestMatch.code]) {
                    bestMatch.correction.bar = calculateCorrection(self.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
                    bestMatch.correction.space = calculateCorrection(self.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
                }
                return bestMatch;
            } else {
                counterPos++;
            }
            counter[counterPos] = 1;
            isWhite = !isWhite;
        }
    }
    return null;
};

Code128Reader.prototype._correct = function (counter, correction) {
    this._correctBars(counter, correction.bar, this.MODULE_INDICES.bar);
    this._correctBars(counter, correction.space, this.MODULE_INDICES.space);
};

Code128Reader.prototype._findStart = function () {
    var counter = [0, 0, 0, 0, 0, 0],
        i,
        self = this,
        offset = self._nextSet(self._row),
        isWhite = false,
        counterPos = 0,
        bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0,
        correction: {
            bar: 1,
            space: 1
        }
    },
        code,
        error,
        j,
        sum;

    for (i = offset; i < self._row.length; i++) {
        if (self._row[i] ^ isWhite) {
            counter[counterPos]++;
        } else {
            if (counterPos === counter.length - 1) {
                sum = 0;
                for (j = 0; j < counter.length; j++) {
                    sum += counter[j];
                }
                for (code = self.START_CODE_A; code <= self.START_CODE_C; code++) {
                    error = self._matchPattern(counter, self.CODE_PATTERN[code]);
                    if (error < bestMatch.error) {
                        bestMatch.code = code;
                        bestMatch.error = error;
                    }
                }
                if (bestMatch.error < self.AVG_CODE_ERROR) {
                    bestMatch.start = i - sum;
                    bestMatch.end = i;
                    bestMatch.correction.bar = calculateCorrection(self.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
                    bestMatch.correction.space = calculateCorrection(self.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
                    return bestMatch;
                }

                for (j = 0; j < 4; j++) {
                    counter[j] = counter[j + 2];
                }
                counter[4] = 0;
                counter[5] = 0;
                counterPos--;
            } else {
                counterPos++;
            }
            counter[counterPos] = 1;
            isWhite = !isWhite;
        }
    }
    return null;
};

Code128Reader.prototype._decode = function () {
    var self = this,
        startInfo = self._findStart(),
        code = null,
        done = false,
        result = [],
        multiplier = 0,
        checksum = 0,
        codeset,
        rawResult = [],
        decodedCodes = [],
        shiftNext = false,
        unshift,
        removeLastCharacter = true;

    if (startInfo === null) {
        return null;
    }
    code = {
        code: startInfo.code,
        start: startInfo.start,
        end: startInfo.end,
        correction: {
            bar: startInfo.correction.bar,
            space: startInfo.correction.space
        }
    };
    decodedCodes.push(code);
    checksum = code.code;
    switch (code.code) {
        case self.START_CODE_A:
            codeset = self.CODE_A;
            break;
        case self.START_CODE_B:
            codeset = self.CODE_B;
            break;
        case self.START_CODE_C:
            codeset = self.CODE_C;
            break;
        default:
            return null;
    }

    while (!done) {
        unshift = shiftNext;
        shiftNext = false;
        code = self._decodeCode(code.end, code.correction);
        if (code !== null) {
            if (code.code !== self.STOP_CODE) {
                removeLastCharacter = true;
            }

            if (code.code !== self.STOP_CODE) {
                rawResult.push(code.code);
                multiplier++;
                checksum += multiplier * code.code;
            }
            decodedCodes.push(code);

            switch (codeset) {
                case self.CODE_A:
                    if (code.code < 64) {
                        result.push(String.fromCharCode(32 + code.code));
                    } else if (code.code < 96) {
                        result.push(String.fromCharCode(code.code - 64));
                    } else {
                        if (code.code !== self.STOP_CODE) {
                            removeLastCharacter = false;
                        }
                        switch (code.code) {
                            case self.CODE_SHIFT:
                                shiftNext = true;
                                codeset = self.CODE_B;
                                break;
                            case self.CODE_B:
                                codeset = self.CODE_B;
                                break;
                            case self.CODE_C:
                                codeset = self.CODE_C;
                                break;
                            case self.STOP_CODE:
                                done = true;
                                break;
                        }
                    }
                    break;
                case self.CODE_B:
                    if (code.code < 96) {
                        result.push(String.fromCharCode(32 + code.code));
                    } else {
                        if (code.code !== self.STOP_CODE) {
                            removeLastCharacter = false;
                        }
                        switch (code.code) {
                            case self.CODE_SHIFT:
                                shiftNext = true;
                                codeset = self.CODE_A;
                                break;
                            case self.CODE_A:
                                codeset = self.CODE_A;
                                break;
                            case self.CODE_C:
                                codeset = self.CODE_C;
                                break;
                            case self.STOP_CODE:
                                done = true;
                                break;
                        }
                    }
                    break;
                case self.CODE_C:
                    if (code.code < 100) {
                        result.push(code.code < 10 ? "0" + code.code : code.code);
                    } else {
                        if (code.code !== self.STOP_CODE) {
                            removeLastCharacter = false;
                        }
                        switch (code.code) {
                            case self.CODE_A:
                                codeset = self.CODE_A;
                                break;
                            case self.CODE_B:
                                codeset = self.CODE_B;
                                break;
                            case self.STOP_CODE:
                                done = true;
                                break;
                        }
                    }
                    break;
            }
        } else {
            done = true;
        }
        if (unshift) {
            codeset = codeset === self.CODE_A ? self.CODE_B : self.CODE_A;
        }
    }

    if (code === null) {
        return null;
    }

    code.end = self._nextUnset(self._row, code.end);
    if (!self._verifyTrailingWhitespace(code)) {
        return null;
    }

    checksum -= multiplier * rawResult[rawResult.length - 1];
    if (checksum % 103 !== rawResult[rawResult.length - 1]) {
        return null;
    }

    if (!result.length) {
        return null;
    }

    // remove last code from result (checksum)
    if (removeLastCharacter) {
        result.splice(result.length - 1, 1);
    }

    return {
        code: result.join(""),
        start: startInfo.start,
        end: code.end,
        codeset: codeset,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        endInfo: code
    };
};

__WEBPACK_IMPORTED_MODULE_0__barcode_reader__["a" /* default */].prototype._verifyTrailingWhitespace = function (endInfo) {
    var self = this,
        trailingWhitespaceEnd;

    trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;
    if (trailingWhitespaceEnd < self._row.length) {
        if (self._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
            return endInfo;
        }
    }
    return null;
};

function calculateCorrection(expected, normalized, indices) {
    var length = indices.length,
        sumNormalized = 0,
        sumExpected = 0;

    while (length--) {
        sumExpected += expected[indices[length]];
        sumNormalized += normalized[indices[length]];
    }
    return sumExpected / sumNormalized;
}

/* harmony default export */ __webpack_exports__["a"] = Code128Reader;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_39_reader__ = __webpack_require__(31);


function Code39VINReader() {
    __WEBPACK_IMPORTED_MODULE_0__code_39_reader__["a" /* default */].call(this);
}

var patterns = {
    IOQ: /[IOQ]/g,
    AZ09: /[A-Z0-9]{17}/
};

Code39VINReader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__code_39_reader__["a" /* default */].prototype);
Code39VINReader.prototype.constructor = Code39VINReader;

// Cribbed from:
// https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/VINResultParser.java
Code39VINReader.prototype._decode = function () {
    var result = __WEBPACK_IMPORTED_MODULE_0__code_39_reader__["a" /* default */].prototype._decode.apply(this);
    if (!result) {
        return null;
    }

    var code = result.code;

    if (!code) {
        return null;
    }

    code = code.replace(patterns.IOQ, '');

    if (!code.match(patterns.AZ09)) {
        if (true) {
            console.log('Failed AZ09 pattern code:', code);
        }
        return null;
    }

    if (!this._checkChecksum(code)) {
        return null;
    }

    result.code = code;
    return result;
};

Code39VINReader.prototype._checkChecksum = function (code) {
    // TODO
    return !!code;
};

/* harmony default export */ __webpack_exports__["a"] = Code39VINReader;

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ean_reader__ = __webpack_require__(2);


function EAN2Reader() {
    __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].call(this);
}

var properties = {
    FORMAT: { value: "ean_2", writeable: false }
};

EAN2Reader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype, properties);
EAN2Reader.prototype.constructor = EAN2Reader;

EAN2Reader.prototype.decode = function (row, start) {
    this._row = row;
    var counters = [0, 0, 0, 0],
        codeFrequency = 0,
        i = 0,
        offset = start,
        end = this._row.length,
        code,
        result = [],
        decodedCodes = [];

    for (i = 0; i < 2 && offset < end; i++) {
        code = this._decodeCode(offset);
        if (!code) {
            return null;
        }
        decodedCodes.push(code);
        result.push(code.code % 10);
        if (code.code >= this.CODE_G_START) {
            codeFrequency |= 1 << 1 - i;
        }
        if (i != 1) {
            offset = this._nextSet(this._row, code.end);
            offset = this._nextUnset(this._row, offset);
        }
    }

    if (result.length != 2 || parseInt(result.join("")) % 4 !== codeFrequency) {
        return null;
    }
    return {
        code: result.join(""),
        decodedCodes: decodedCodes,
        end: code.end
    };
};

/* harmony default export */ __webpack_exports__["a"] = EAN2Reader;

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ean_reader__ = __webpack_require__(2);


function EAN5Reader() {
    __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].call(this);
}

var properties = {
    FORMAT: { value: "ean_5", writeable: false }
};

var CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];

EAN5Reader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype, properties);
EAN5Reader.prototype.constructor = EAN5Reader;

EAN5Reader.prototype.decode = function (row, start) {
    this._row = row;
    var counters = [0, 0, 0, 0],
        codeFrequency = 0,
        i = 0,
        offset = start,
        end = this._row.length,
        code,
        result = [],
        decodedCodes = [];

    for (i = 0; i < 5 && offset < end; i++) {
        code = this._decodeCode(offset);
        if (!code) {
            return null;
        }
        decodedCodes.push(code);
        result.push(code.code % 10);
        if (code.code >= this.CODE_G_START) {
            codeFrequency |= 1 << 4 - i;
        }
        if (i != 4) {
            offset = this._nextSet(this._row, code.end);
            offset = this._nextUnset(this._row, offset);
        }
    }

    if (result.length != 5) {
        return null;
    }

    if (extensionChecksum(result) !== determineCheckDigit(codeFrequency)) {
        return null;
    }
    return {
        code: result.join(""),
        decodedCodes: decodedCodes,
        end: code.end
    };
};

function determineCheckDigit(codeFrequency) {
    var i;
    for (i = 0; i < 10; i++) {
        if (codeFrequency === CHECK_DIGIT_ENCODINGS[i]) {
            return i;
        }
    }
    return null;
}

function extensionChecksum(result) {
    var length = result.length,
        sum = 0,
        i;

    for (i = length - 2; i >= 0; i -= 2) {
        sum += result[i];
    }
    sum *= 3;
    for (i = length - 1; i >= 0; i -= 2) {
        sum += result[i];
    }
    sum *= 3;
    return sum % 10;
}

/* harmony default export */ __webpack_exports__["a"] = EAN5Reader;

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ean_reader__ = __webpack_require__(2);


function EAN8Reader(opts, supplements) {
    __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].call(this, opts, supplements);
}

var properties = {
    FORMAT: { value: "ean_8", writeable: false }
};

EAN8Reader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype, properties);
EAN8Reader.prototype.constructor = EAN8Reader;

EAN8Reader.prototype._decodePayload = function (code, result, decodedCodes) {
    var i,
        self = this;

    for (i = 0; i < 4; i++) {
        code = self._decodeCode(code.end, self.CODE_G_START);
        if (!code) {
            return null;
        }
        result.push(code.code);
        decodedCodes.push(code);
    }

    code = self._findPattern(self.MIDDLE_PATTERN, code.end, true, false);
    if (code === null) {
        return null;
    }
    decodedCodes.push(code);

    for (i = 0; i < 4; i++) {
        code = self._decodeCode(code.end, self.CODE_G_START);
        if (!code) {
            return null;
        }
        decodedCodes.push(code);
        result.push(code.code);
    }

    return code;
};

/* harmony default export */ __webpack_exports__["a"] = EAN8Reader;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__barcode_reader__ = __webpack_require__(5);




function I2of5Reader(opts) {
    opts = __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()(getDefaulConfig(), opts);
    __WEBPACK_IMPORTED_MODULE_1__barcode_reader__["a" /* default */].call(this, opts);
    this.barSpaceRatio = [1, 1];
    if (opts.normalizeBarSpaceWidth) {
        this.SINGLE_CODE_ERROR = 0.38;
        this.AVG_CODE_ERROR = 0.09;
    }
}

function getDefaulConfig() {
    var config = {};

    Object.keys(I2of5Reader.CONFIG_KEYS).forEach(function (key) {
        config[key] = I2of5Reader.CONFIG_KEYS[key].default;
    });
    return config;
}

var N = 1,
    W = 3,
    properties = {
    START_PATTERN: { value: [N, N, N, N] },
    STOP_PATTERN: { value: [N, N, W] },
    CODE_PATTERN: { value: [[N, N, W, W, N], [W, N, N, N, W], [N, W, N, N, W], [W, W, N, N, N], [N, N, W, N, W], [W, N, W, N, N], [N, W, W, N, N], [N, N, N, W, W], [W, N, N, W, N], [N, W, N, W, N]] },
    SINGLE_CODE_ERROR: { value: 0.78, writable: true },
    AVG_CODE_ERROR: { value: 0.38, writable: true },
    MAX_CORRECTION_FACTOR: { value: 5 },
    FORMAT: { value: "i2of5" }
};

I2of5Reader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_1__barcode_reader__["a" /* default */].prototype, properties);
I2of5Reader.prototype.constructor = I2of5Reader;

I2of5Reader.prototype._matchPattern = function (counter, code) {
    if (this.config.normalizeBarSpaceWidth) {
        var i,
            counterSum = [0, 0],
            codeSum = [0, 0],
            correction = [0, 0],
            correctionRatio = this.MAX_CORRECTION_FACTOR,
            correctionRatioInverse = 1 / correctionRatio;

        for (i = 0; i < counter.length; i++) {
            counterSum[i % 2] += counter[i];
            codeSum[i % 2] += code[i];
        }
        correction[0] = codeSum[0] / counterSum[0];
        correction[1] = codeSum[1] / counterSum[1];

        correction[0] = Math.max(Math.min(correction[0], correctionRatio), correctionRatioInverse);
        correction[1] = Math.max(Math.min(correction[1], correctionRatio), correctionRatioInverse);
        this.barSpaceRatio = correction;
        for (i = 0; i < counter.length; i++) {
            counter[i] *= this.barSpaceRatio[i % 2];
        }
    }
    return __WEBPACK_IMPORTED_MODULE_1__barcode_reader__["a" /* default */].prototype._matchPattern.call(this, counter, code);
};

I2of5Reader.prototype._findPattern = function (pattern, offset, isWhite, tryHarder) {
    var counter = [],
        self = this,
        i,
        counterPos = 0,
        bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
    },
        error,
        j,
        sum,
        normalized,
        epsilon = self.AVG_CODE_ERROR;

    isWhite = isWhite || false;
    tryHarder = tryHarder || false;

    if (!offset) {
        offset = self._nextSet(self._row);
    }

    for (i = 0; i < pattern.length; i++) {
        counter[i] = 0;
    }

    for (i = offset; i < self._row.length; i++) {
        if (self._row[i] ^ isWhite) {
            counter[counterPos]++;
        } else {
            if (counterPos === counter.length - 1) {
                sum = 0;
                for (j = 0; j < counter.length; j++) {
                    sum += counter[j];
                }
                error = self._matchPattern(counter, pattern);
                if (error < epsilon) {
                    bestMatch.error = error;
                    bestMatch.start = i - sum;
                    bestMatch.end = i;
                    return bestMatch;
                }
                if (tryHarder) {
                    for (j = 0; j < counter.length - 2; j++) {
                        counter[j] = counter[j + 2];
                    }
                    counter[counter.length - 2] = 0;
                    counter[counter.length - 1] = 0;
                    counterPos--;
                } else {
                    return null;
                }
            } else {
                counterPos++;
            }
            counter[counterPos] = 1;
            isWhite = !isWhite;
        }
    }
    return null;
};

I2of5Reader.prototype._findStart = function () {
    var self = this,
        leadingWhitespaceStart,
        offset = self._nextSet(self._row),
        startInfo,
        narrowBarWidth = 1;

    while (!startInfo) {
        startInfo = self._findPattern(self.START_PATTERN, offset, false, true);
        if (!startInfo) {
            return null;
        }
        narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / 4);
        leadingWhitespaceStart = startInfo.start - narrowBarWidth * 10;
        if (leadingWhitespaceStart >= 0) {
            if (self._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
                return startInfo;
            }
        }
        offset = startInfo.end;
        startInfo = null;
    }
};

I2of5Reader.prototype._verifyTrailingWhitespace = function (endInfo) {
    var self = this,
        trailingWhitespaceEnd;

    trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;
    if (trailingWhitespaceEnd < self._row.length) {
        if (self._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
            return endInfo;
        }
    }
    return null;
};

I2of5Reader.prototype._findEnd = function () {
    var self = this,
        endInfo,
        tmp;

    self._row.reverse();
    endInfo = self._findPattern(self.STOP_PATTERN);
    self._row.reverse();

    if (endInfo === null) {
        return null;
    }

    // reverse numbers
    tmp = endInfo.start;
    endInfo.start = self._row.length - endInfo.end;
    endInfo.end = self._row.length - tmp;

    return endInfo !== null ? self._verifyTrailingWhitespace(endInfo) : null;
};

I2of5Reader.prototype._decodePair = function (counterPair) {
    var i,
        code,
        codes = [],
        self = this;

    for (i = 0; i < counterPair.length; i++) {
        code = self._decodeCode(counterPair[i]);
        if (!code) {
            return null;
        }
        codes.push(code);
    }
    return codes;
};

I2of5Reader.prototype._decodeCode = function (counter) {
    var j,
        self = this,
        sum = 0,
        normalized,
        error,
        epsilon = self.AVG_CODE_ERROR,
        code,
        bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
    };

    for (j = 0; j < counter.length; j++) {
        sum += counter[j];
    }
    for (code = 0; code < self.CODE_PATTERN.length; code++) {
        error = self._matchPattern(counter, self.CODE_PATTERN[code]);
        if (error < bestMatch.error) {
            bestMatch.code = code;
            bestMatch.error = error;
        }
    }
    if (bestMatch.error < epsilon) {
        return bestMatch;
    }
};

I2of5Reader.prototype._decodePayload = function (counters, result, decodedCodes) {
    var i,
        self = this,
        pos = 0,
        counterLength = counters.length,
        counterPair = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
        codes;

    while (pos < counterLength) {
        for (i = 0; i < 5; i++) {
            counterPair[0][i] = counters[pos] * this.barSpaceRatio[0];
            counterPair[1][i] = counters[pos + 1] * this.barSpaceRatio[1];
            pos += 2;
        }
        codes = self._decodePair(counterPair);
        if (!codes) {
            return null;
        }
        for (i = 0; i < codes.length; i++) {
            result.push(codes[i].code + "");
            decodedCodes.push(codes[i]);
        }
    }
    return codes;
};

I2of5Reader.prototype._verifyCounterLength = function (counters) {
    return counters.length % 10 === 0;
};

I2of5Reader.prototype._decode = function () {
    var startInfo,
        endInfo,
        self = this,
        code,
        result = [],
        decodedCodes = [],
        counters;

    startInfo = self._findStart();
    if (!startInfo) {
        return null;
    }
    decodedCodes.push(startInfo);

    endInfo = self._findEnd();
    if (!endInfo) {
        return null;
    }

    counters = self._fillCounters(startInfo.end, endInfo.start, false);
    if (!self._verifyCounterLength(counters)) {
        return null;
    }
    code = self._decodePayload(counters, result, decodedCodes);
    if (!code) {
        return null;
    }
    if (result.length % 2 !== 0 || result.length < 6) {
        return null;
    }

    decodedCodes.push(endInfo);
    return {
        code: result.join(""),
        start: startInfo.start,
        end: endInfo.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes
    };
};

I2of5Reader.CONFIG_KEYS = {
    normalizeBarSpaceWidth: {
        'type': 'boolean',
        'default': false,
        'description': 'If true, the reader tries to normalize the' + 'width-difference between bars and spaces'
    }
};

/* harmony default export */ __webpack_exports__["a"] = I2of5Reader;

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ean_reader__ = __webpack_require__(2);


function UPCEReader(opts, supplements) {
    __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].call(this, opts, supplements);
}

var properties = {
    CODE_FREQUENCY: { value: [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]] },
    STOP_PATTERN: { value: [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7] },
    FORMAT: { value: "upc_e", writeable: false }
};

UPCEReader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype, properties);
UPCEReader.prototype.constructor = UPCEReader;

UPCEReader.prototype._decodePayload = function (code, result, decodedCodes) {
    var i,
        self = this,
        codeFrequency = 0x0;

    for (i = 0; i < 6; i++) {
        code = self._decodeCode(code.end);
        if (!code) {
            return null;
        }
        if (code.code >= self.CODE_G_START) {
            code.code = code.code - self.CODE_G_START;
            codeFrequency |= 1 << 5 - i;
        }
        result.push(code.code);
        decodedCodes.push(code);
    }
    if (!self._determineParity(codeFrequency, result)) {
        return null;
    }

    return code;
};

UPCEReader.prototype._determineParity = function (codeFrequency, result) {
    var i, nrSystem;

    for (nrSystem = 0; nrSystem < this.CODE_FREQUENCY.length; nrSystem++) {
        for (i = 0; i < this.CODE_FREQUENCY[nrSystem].length; i++) {
            if (codeFrequency === this.CODE_FREQUENCY[nrSystem][i]) {
                result.unshift(nrSystem);
                result.push(i);
                return true;
            }
        }
    }
    return false;
};

UPCEReader.prototype._convertToUPCA = function (result) {
    var upca = [result[0]],
        lastDigit = result[result.length - 2];

    if (lastDigit <= 2) {
        upca = upca.concat(result.slice(1, 3)).concat([lastDigit, 0, 0, 0, 0]).concat(result.slice(3, 6));
    } else if (lastDigit === 3) {
        upca = upca.concat(result.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(result.slice(4, 6));
    } else if (lastDigit === 4) {
        upca = upca.concat(result.slice(1, 5)).concat([0, 0, 0, 0, 0, result[5]]);
    } else {
        upca = upca.concat(result.slice(1, 6)).concat([0, 0, 0, 0, lastDigit]);
    }

    upca.push(result[result.length - 1]);
    return upca;
};

UPCEReader.prototype._checksum = function (result) {
    return __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype._checksum.call(this, this._convertToUPCA(result));
};

UPCEReader.prototype._findEnd = function (offset, isWhite) {
    isWhite = true;
    return __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype._findEnd.call(this, offset, isWhite);
};

UPCEReader.prototype._verifyTrailingWhitespace = function (endInfo) {
    var self = this,
        trailingWhitespaceEnd;

    trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;
    if (trailingWhitespaceEnd < self._row.length) {
        if (self._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
            return endInfo;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = UPCEReader;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ean_reader__ = __webpack_require__(2);


function UPCReader(opts, supplements) {
    __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].call(this, opts, supplements);
}

var properties = {
    FORMAT: { value: "upc_a", writeable: false }
};

UPCReader.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype, properties);
UPCReader.prototype.constructor = UPCReader;

UPCReader.prototype._decode = function () {
    var result = __WEBPACK_IMPORTED_MODULE_0__ean_reader__["a" /* default */].prototype._decode.call(this);

    if (result && result.code && result.code.length === 13 && result.code.charAt(0) === "0") {
        result.code = result.code.substring(1);
        return result;
    }
    return null;
};

/* harmony default export */ __webpack_exports__["a"] = UPCReader;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = copy

/**
 * Copy the values from one mat2 to another
 *
 * @alias mat2.copy
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  return out
}


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = create

/**
 * Creates a new identity mat2
 *
 * @alias mat2.create
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new Float32Array(4)
  out[0] = 1
  out[1] = 0
  out[2] = 0
  out[3] = 1
  return out
}


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = invert

/**
 * Inverts a mat2
 *
 * @alias mat2.invert
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  var a0 = a[0]
  var a1 = a[1]
  var a2 = a[2]
  var a3 = a[3]
  var det = a0 * a3 - a2 * a1

  if (!det) return null
  det = 1.0 / det

  out[0] =  a3 * det
  out[1] = -a1 * det
  out[2] = -a2 * det
  out[3] =  a0 * det

  return out
}


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = transformMat2

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y
    out[1] = m[1] * x + m[3] * y
    return out
}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = clone;

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
    var out = new Float32Array(3)
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(120),
    hashDelete = __webpack_require__(121),
    hashGet = __webpack_require__(122),
    hashHas = __webpack_require__(123),
    hashSet = __webpack_require__(124);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10),
    stackClear = __webpack_require__(147),
    stackDelete = __webpack_require__(148),
    stackGet = __webpack_require__(149),
    stackHas = __webpack_require__(150),
    stackSet = __webpack_require__(151);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(105),
    isArguments = __webpack_require__(18),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(44),
    isIndex = __webpack_require__(15),
    isTypedArray = __webpack_require__(45);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(88),
    isFlattenable = __webpack_require__(126);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(115);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(13),
    toKey = __webpack_require__(23);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(25),
    isMasked = __webpack_require__(130),
    isObject = __webpack_require__(0),
    toSource = __webpack_require__(153);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isLength = __webpack_require__(26),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    isPrototype = __webpack_require__(40),
    nativeKeysIn = __webpack_require__(142);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(83),
    assignMergeValue = __webpack_require__(35),
    baseFor = __webpack_require__(91),
    baseMergeDeep = __webpack_require__(99),
    isObject = __webpack_require__(0),
    keysIn = __webpack_require__(46);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(35),
    cloneBuffer = __webpack_require__(109),
    cloneTypedArray = __webpack_require__(110),
    copyArray = __webpack_require__(111),
    initCloneObject = __webpack_require__(125),
    isArguments = __webpack_require__(18),
    isArray = __webpack_require__(1),
    isArrayLikeObject = __webpack_require__(157),
    isBuffer = __webpack_require__(44),
    isFunction = __webpack_require__(25),
    isObject = __webpack_require__(0),
    isPlainObject = __webpack_require__(158),
    isTypedArray = __webpack_require__(45),
    toPlainObject = __webpack_require__(162);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(101),
    hasIn = __webpack_require__(156);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(92),
    baseSet = __webpack_require__(103),
    castPath = __webpack_require__(13);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(43),
    overRest = __webpack_require__(41),
    setToString = __webpack_require__(42);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(36),
    castPath = __webpack_require__(13),
    isIndex = __webpack_require__(15),
    isObject = __webpack_require__(0),
    toKey = __webpack_require__(23);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(154),
    defineProperty = __webpack_require__(37),
    identity = __webpack_require__(43);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    arrayMap = __webpack_require__(87),
    isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(27);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(84);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(108);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(36),
    baseAssignValue = __webpack_require__(21);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(102),
    isIterateeCall = __webpack_require__(127);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(155),
    overRest = __webpack_require__(41),
    setToString = __webpack_require__(42);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(13),
    isArguments = __webpack_require__(18),
    isArray = __webpack_require__(1),
    isIndex = __webpack_require__(15),
    isLength = __webpack_require__(26),
    toKey = __webpack_require__(23);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(89),
    getPrototype = __webpack_require__(39),
    isPrototype = __webpack_require__(40);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    isArguments = __webpack_require__(18),
    isArray = __webpack_require__(1);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(17),
    isArrayLike = __webpack_require__(24),
    isIndex = __webpack_require__(15),
    isObject = __webpack_require__(0);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(27);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(113);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(82),
    ListCache = __webpack_require__(10),
    Map = __webpack_require__(33);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(14);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(14);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(14);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(14);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(159);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(38);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

/***/ }),
/* 144 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10),
    Map = __webpack_require__(33),
    MapCache = __webpack_require__(34);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(141);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(90);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(93),
    hasPath = __webpack_require__(119);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(24),
    isObjectLike = __webpack_require__(4);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    getPrototype = __webpack_require__(39),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(34);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(100),
    flatRest = __webpack_require__(116);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(112),
    keysIn = __webpack_require__(46);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(106);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDMwODMyYmJhYWQyNmExYjA0ZWZmIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci9lYW5fcmVhZGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZGVyL2JhcmNvZGVfcmVhZGVyLmpzIiwid2VicGFjazovLy8uL34vZ2wtdmVjMi9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2FycmF5X2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlX2RlYnVnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY3ZfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWFnZV93cmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhdG9yL3RyYWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZGVyL2NvZGVfMzlfcmVhZGVyLmpzIiwid2VicGFjazovLy8uL34vZ2wtdmVjMi9kb3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnbk1lcmdlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVhZ2dhLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3MvcmVzdWx0X2NvbGxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NsdXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9tZWRpYURldmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdWJJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3R5cGVkZWZzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvY29uZmlnLmRldi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb2Rlci9iYXJjb2RlX2RlY29kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29kZXIvYnJlc2VuaGFtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9jYW1lcmFfYWNjZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9leGlmX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvZnJhbWVfZ3JhYmJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvaW1hZ2VfbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dF9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2F0b3IvYmFyY29kZV9sb2NhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhdG9yL3Jhc3Rlcml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2F0b3Ivc2tlbGV0b25pemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWFkZXIvY29kYWJhcl9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci9jb2RlXzEyOF9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci9jb2RlXzM5X3Zpbl9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci9lYW5fMl9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci9lYW5fNV9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci9lYW5fOF9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci9pMm9mNV9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci91cGNfZV9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWRlci91cGNfcmVhZGVyLmpzIiwid2VicGFjazovLy8uL34vZ2wtbWF0Mi9jb3B5LmpzIiwid2VicGFjazovLy8uL34vZ2wtbWF0Mi9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nbC1tYXQyL2ludmVydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsLXZlYzIvc2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nbC12ZWMyL3RyYW5zZm9ybU1hdDIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nbC12ZWMzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNZXJnZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQaWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUGlja0J5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mbGF0UmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9oYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvcGljay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9QbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b1N0cmluZy5qcyJdLCJuYW1lcyI6WyJFQU5SZWFkZXIiLCJvcHRzIiwic3VwcGxlbWVudHMiLCJnZXREZWZhdWxDb25maWciLCJCYXJjb2RlUmVhZGVyIiwiY2FsbCIsImNvbmZpZyIsIk9iamVjdCIsImtleXMiLCJDT05GSUdfS0VZUyIsImZvckVhY2giLCJrZXkiLCJkZWZhdWx0IiwicHJvcGVydGllcyIsIkNPREVfTF9TVEFSVCIsInZhbHVlIiwiQ09ERV9HX1NUQVJUIiwiU1RBUlRfUEFUVEVSTiIsIlNUT1BfUEFUVEVSTiIsIk1JRERMRV9QQVRURVJOIiwiRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4iLCJDT0RFX1BBVFRFUk4iLCJDT0RFX0ZSRVFVRU5DWSIsIlNJTkdMRV9DT0RFX0VSUk9SIiwiQVZHX0NPREVfRVJST1IiLCJGT1JNQVQiLCJ3cml0ZWFibGUiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9kZWNvZGVDb2RlIiwic3RhcnQiLCJjb2RlcmFuZ2UiLCJjb3VudGVyIiwiaSIsInNlbGYiLCJvZmZzZXQiLCJpc1doaXRlIiwiX3JvdyIsImNvdW50ZXJQb3MiLCJiZXN0TWF0Y2giLCJlcnJvciIsIk51bWJlciIsIk1BWF9WQUxVRSIsImNvZGUiLCJlbmQiLCJsZW5ndGgiLCJfbWF0Y2hQYXR0ZXJuIiwiX2ZpbmRQYXR0ZXJuIiwicGF0dGVybiIsInRyeUhhcmRlciIsImVwc2lsb24iLCJqIiwic3VtIiwiX25leHRTZXQiLCJ1bmRlZmluZWQiLCJfZmluZFN0YXJ0IiwibGVhZGluZ1doaXRlc3BhY2VTdGFydCIsInN0YXJ0SW5mbyIsIl9tYXRjaFJhbmdlIiwiX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZSIsImVuZEluZm8iLCJ0cmFpbGluZ1doaXRlc3BhY2VFbmQiLCJfZmluZEVuZCIsIl9jYWxjdWxhdGVGaXJzdERpZ2l0IiwiY29kZUZyZXF1ZW5jeSIsIl9kZWNvZGVQYXlsb2FkIiwicmVzdWx0IiwiZGVjb2RlZENvZGVzIiwiZmlyc3REaWdpdCIsInB1c2giLCJ1bnNoaWZ0IiwiX2RlY29kZSIsInJlc3VsdEluZm8iLCJfY2hlY2tzdW0iLCJleHQiLCJfZGVjb2RlRXh0ZW5zaW9ucyIsImxhc3RDb2RlIiwic3VwcGxlbWVudCIsImpvaW4iLCJjb2Rlc2V0IiwiZGVjb2RlIiwiX25leHRVbnNldCIsImxpbmUiLCJtYXhTaW5nbGVFcnJvciIsInNpbmdsZUVycm9yIiwibW9kdWxvIiwiYmFyV2lkdGgiLCJjb3VudCIsInNjYWxlZCIsIk1hdGgiLCJhYnMiLCJfY29ycmVjdEJhcnMiLCJjb3JyZWN0aW9uIiwiaW5kaWNlcyIsInRtcCIsIl9tYXRjaFRyYWNlIiwiY21wQ291bnRlciIsImRlY29kZVBhdHRlcm4iLCJyZXZlcnNlIiwiZGlyZWN0aW9uIiwiRElSRUNUSU9OIiwiUkVWRVJTRSIsIkZPUldBUkQiLCJmb3JtYXQiLCJfZmlsbENvdW50ZXJzIiwiY291bnRlcnMiLCJkZWZpbmVQcm9wZXJ0eSIsIkV4Y2VwdGlvbiIsIlN0YXJ0Tm90Rm91bmRFeGNlcHRpb24iLCJDb2RlTm90Rm91bmRFeGNlcHRpb24iLCJQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb24iLCJpbml0IiwiYXJyIiwidmFsIiwibCIsInNodWZmbGUiLCJ4IiwiZmxvb3IiLCJyYW5kb20iLCJ0b1BvaW50TGlzdCIsInJvdyIsInJvd3MiLCJ0aHJlc2hvbGQiLCJzY29yZUZ1bmMiLCJxdWV1ZSIsImFwcGx5IiwibWF4SW5kZXgiLCJtYXgiLCJkcmF3UmVjdCIsInBvcyIsInNpemUiLCJjdHgiLCJzdHlsZSIsInN0cm9rZVN0eWxlIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJzdHJva2VSZWN0IiwieSIsImRyYXdQYXRoIiwicGF0aCIsImRlZiIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImRyYXdJbWFnZSIsImltYWdlRGF0YSIsImNhbnZhc0RhdGEiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwiaW1hZ2VEYXRhUG9zIiwiY2FudmFzRGF0YVBvcyIsInB1dEltYWdlRGF0YSIsInZlYzIiLCJjbG9uZSIsInJlcXVpcmUiLCJ2ZWMzIiwiaW1hZ2VSZWYiLCJ0aGF0IiwidG9WZWMyIiwidG9WZWMzIiwicm91bmQiLCJjb21wdXRlSW50ZWdyYWxJbWFnZTIiLCJpbWFnZVdyYXBwZXIiLCJpbnRlZ3JhbFdyYXBwZXIiLCJ3aWR0aCIsImhlaWdodCIsImludGVncmFsSW1hZ2VEYXRhIiwicG9zQSIsInBvc0IiLCJwb3NDIiwicG9zRCIsImNvbXB1dGVJbnRlZ3JhbEltYWdlIiwidiIsInUiLCJ0aHJlc2hvbGRJbWFnZSIsInRhcmdldFdyYXBwZXIiLCJ0YXJnZXREYXRhIiwiY29tcHV0ZUhpc3RvZ3JhbSIsImJpdHNQZXJQaXhlbCIsImJpdFNoaWZ0IiwiYnVja2V0Q250IiwiaGlzdCIsIkludDMyQXJyYXkiLCJzaGFycGVuTGluZSIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImRldGVybWluZU90c3VUaHJlc2hvbGQiLCJweCIsIm14IiwiZGV0ZXJtaW5lVGhyZXNob2xkIiwidmV0IiwicDEiLCJwMiIsInAxMiIsImsiLCJtMSIsIm0yIiwibTEyIiwiQXJyYXlIZWxwZXIiLCJvdHN1VGhyZXNob2xkIiwiY29tcHV0ZUJpbmFyeUltYWdlIiwia2VybmVsIiwiQSIsIkIiLCJDIiwiRCIsImF2ZyIsImNsdXN0ZXIiLCJwb2ludHMiLCJwcm9wZXJ0eSIsInBvaW50IiwiY2x1c3RlcnMiLCJhZGRUb0NsdXN0ZXIiLCJuZXdQb2ludCIsImZvdW5kIiwiZml0cyIsImFkZCIsIkNsdXN0ZXIyIiwiY3JlYXRlUG9pbnQiLCJUcmFjZXIiLCJ0cmFjZSIsInZlYyIsIml0ZXJhdGlvbiIsIm1heEl0ZXJhdGlvbnMiLCJ0b3AiLCJjZW50ZXJQb3MiLCJjdXJyZW50UG9zIiwiaWR4IiwiZm9yd2FyZCIsImZyb20iLCJ0byIsInRvSWR4IiwicHJlZGljdGVkUG9zIiwidGhyZXNob2xkWCIsInRocmVzaG9sZFkiLCJtYXRjaCIsInByZWRpY3RlZCIsIkRJTEFURSIsIkVST0RFIiwiZGlsYXRlIiwiaW5JbWFnZVdyYXBwZXIiLCJvdXRJbWFnZVdyYXBwZXIiLCJpbkltYWdlRGF0YSIsIm91dEltYWdlRGF0YSIsInlTdGFydDEiLCJ5U3RhcnQyIiwieFN0YXJ0MSIsInhTdGFydDIiLCJlcm9kZSIsInN1YnRyYWN0IiwiYUltYWdlV3JhcHBlciIsImJJbWFnZVdyYXBwZXIiLCJyZXN1bHRJbWFnZVdyYXBwZXIiLCJhSW1hZ2VEYXRhIiwiYkltYWdlRGF0YSIsImNJbWFnZURhdGEiLCJiaXR3aXNlT3IiLCJjb3VudE5vblplcm8iLCJ0b3BHZW5lcmljIiwibGlzdCIsIm1pbklkeCIsIm1pbiIsInNjb3JlIiwiaGl0IiwiaXRlbSIsImdyYXlBcnJheUZyb21JbWFnZSIsImh0bWxJbWFnZSIsIm9mZnNldFgiLCJhcnJheSIsImN0eERhdGEiLCJjb21wdXRlR3JheSIsImdyYXlBcnJheUZyb21Db250ZXh0IiwiZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YSIsIm91dEFycmF5IiwidG9wUm93SWR4IiwiYm90dG9tUm93SWR4IiwiZW5kSWR4Iiwib3V0V2lkdGgiLCJvdXRJbWdJZHgiLCJpbldpZHRoIiwic2luZ2xlQ2hhbm5lbCIsImxvYWRJbWFnZUFycmF5Iiwic3JjIiwiY2FsbGJhY2siLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImdldENvbnRleHQiLCJVaW50OEFycmF5IiwiaGFsZlNhbXBsZSIsImluSW1nV3JhcHBlciIsIm91dEltZ1dyYXBwZXIiLCJpbkltZyIsIm91dEltZyIsImhzdjJyZ2IiLCJoc3YiLCJyZ2IiLCJoIiwicyIsImMiLCJtIiwiciIsImciLCJiIiwiX2NvbXB1dGVEaXZpc29ycyIsIm4iLCJsYXJnZURpdmlzb3JzIiwiZGl2aXNvcnMiLCJzcXJ0IiwiY29uY2F0IiwiX2NvbXB1dGVJbnRlcnNlY3Rpb24iLCJhcnIxIiwiYXJyMiIsImNhbGN1bGF0ZVBhdGNoU2l6ZSIsInBhdGNoU2l6ZSIsImltZ1NpemUiLCJkaXZpc29yc1giLCJkaXZpc29yc1kiLCJ3aWRlU2lkZSIsImNvbW1vbiIsIm5yT2ZQYXRjaGVzTGlzdCIsIm5yT2ZQYXRjaGVzTWFwIiwibnJPZlBhdGNoZXNJZHgiLCJtZWRpdW0iLCJuck9mUGF0Y2hlcyIsImRlc2lyZWRQYXRjaFNpemUiLCJvcHRpbWFsUGF0Y2hTaXplIiwiZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzIiwiX3BhcnNlQ1NTRGltZW5zaW9uVmFsdWVzIiwiZGltZW5zaW9uIiwicGFyc2VGbG9hdCIsInVuaXQiLCJpbmRleE9mIiwiX2RpbWVuc2lvbnNDb252ZXJ0ZXJzIiwiY29udGV4dCIsImJvdHRvbSIsImNvbXB1dGVJbWFnZUFyZWEiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJhcmVhIiwicGFyc2VkQXJlYSIsInJlZHVjZSIsInBhcnNlZCIsImNhbGN1bGF0ZWQiLCJzeCIsInN5Iiwic3ciLCJzaCIsIkltYWdlV3JhcHBlciIsIkFycmF5VHlwZSIsImluaXRpYWxpemUiLCJBcnJheSIsImluSW1hZ2VXaXRoQm9yZGVyIiwiaW1nUmVmIiwiYm9yZGVyIiwic2FtcGxlIiwibHgiLCJseSIsInciLCJiYXNlIiwiYSIsImQiLCJlIiwiY2xlYXJBcnJheSIsInN1YkltYWdlIiwic3ViSW1hZ2VBc0NvcHkiLCJzaXplWSIsInNpemVYIiwiY29weVRvIiwic3JjRGF0YSIsImRzdERhdGEiLCJnZXQiLCJnZXRTYWZlIiwiaW5kZXhNYXBwaW5nIiwic2V0IiwiemVyb0JvcmRlciIsImludmVydCIsImNvbnZvbHZlIiwia3giLCJreSIsImtTaXplIiwiYWNjdSIsIm1vbWVudHMiLCJsYWJlbGNvdW50IiwieXNxIiwibGFiZWxzdW0iLCJsYWJlbCIsIm11MTEiLCJtdTAyIiwibXUyMCIsInhfIiwieV8iLCJQSSIsIlBJXzQiLCJtMDAiLCJtMDEiLCJtMTAiLCJtMTEiLCJtMDIiLCJtMjAiLCJ0aGV0YSIsInJhZCIsImlzTmFOIiwiYXRhbiIsImNvcyIsInNpbiIsInNob3ciLCJzY2FsZSIsImZyYW1lIiwiY3VycmVudCIsInBpeGVsIiwib3ZlcmxheSIsIndoaXRlUmdiIiwiYmxhY2tSZ2IiLCJzZWFyY2hEaXJlY3Rpb25zIiwibGFiZWxXcmFwcGVyIiwibGFiZWxEYXRhIiwiZWRnZWxhYmVsIiwiY3kiLCJkaXIiLCJjeCIsInZlcnRleDJEIiwibmV4dCIsInByZXYiLCJjb250b3VyVHJhY2luZyIsIkZ2IiwiQ3YiLCJQIiwibGRpciIsIkNvZGUzOVJlYWRlciIsIkFMUEhBQkVUSF9TVFJJTkciLCJBTFBIQUJFVCIsIkNIQVJBQ1RFUl9FTkNPRElOR1MiLCJBU1RFUklTSyIsIl90b0NvdW50ZXJzIiwibnVtQ291bnRlcnMiLCJkZWNvZGVkQ2hhciIsImxhc3RTdGFydCIsIm5leHRTdGFydCIsIl90b1BhdHRlcm4iLCJfcGF0dGVyblRvQ2hhciIsInBvcCIsInBhdHRlcm5TaXplIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiX2ZpbmROZXh0V2lkdGgiLCJtaW5XaWR0aCIsIm1heE5hcnJvd1dpZHRoIiwibnVtV2lkZUJhcnMiLCJ3aWRlQmFyV2lkdGgiLCJwYXR0ZXJuU3RhcnQiLCJ3aGl0ZVNwYWNlTXVzdFN0YXJ0IiwiX2lucHV0U3RyZWFtIiwiX2ZyYW1lZ3JhYmJlciIsIl9zdG9wcGVkIiwiX2NhbnZhc0NvbnRhaW5lciIsImltYWdlIiwiZG9tIiwiX2lucHV0SW1hZ2VXcmFwcGVyIiwiX2JveFNpemUiLCJfZGVjb2RlciIsIl93b3JrZXJQb29sIiwiX29uVUlUaHJlYWQiLCJfcmVzdWx0Q29sbGVjdG9yIiwiX2NvbmZpZyIsImluaXRpYWxpemVEYXRhIiwiaW5pdEJ1ZmZlcnMiLCJCYXJjb2RlRGVjb2RlciIsImRlY29kZXIiLCJpbml0SW5wdXRTdHJlYW0iLCJjYiIsInZpZGVvIiwiaW5wdXRTdHJlYW0iLCJ0eXBlIiwiSW5wdXRTdHJlYW0iLCJjcmVhdGVWaWRlb1N0cmVhbSIsImNyZWF0ZUltYWdlU3RyZWFtIiwiJHZpZXdwb3J0IiwiZ2V0Vmlld1BvcnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVMaXZlU3RyZWFtIiwiQ2FtZXJhQWNjZXNzIiwicmVxdWVzdCIsImNvbnN0cmFpbnRzIiwidGhlbiIsInRyaWdnZXIiLCJjYXRjaCIsImVyciIsInNldEF0dHJpYnV0ZSIsInNldElucHV0U3RyZWFtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhblJlY29yZCIsImJpbmQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsIm5vZGVUeXBlIiwic2VsZWN0b3IiLCJCYXJjb2RlTG9jYXRvciIsImNoZWNrSW1hZ2VDb25zdHJhaW50cyIsImxvY2F0b3IiLCJpbml0Q2FudmFzIiwiRnJhbWVHcmFiYmVyIiwiYWRqdXN0V29ya2VyUG9vbCIsIm51bU9mV29ya2VycyIsInJlYWR5IiwicGxheSIsImNsYXNzTmFtZSIsImdldENhbnZhc1NpemUiLCJjbGVhckZpeCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImdldEJvdW5kaW5nQm94ZXMiLCJsb2NhdGUiLCJ0cmFuc2Zvcm1SZXN1bHQiLCJ0b3BSaWdodCIsImdldFRvcFJpZ2h0IiwieE9mZnNldCIsInlPZmZzZXQiLCJiYXJjb2RlcyIsIm1vdmVMaW5lIiwiYm94IiwibW92ZUJveCIsImJveGVzIiwiY29ybmVyIiwiYWRkUmVzdWx0IiwiZmlsdGVyIiwiYmFyY29kZSIsImNvZGVSZXN1bHQiLCJoYXNDb2RlUmVzdWx0Iiwic29tZSIsInB1Ymxpc2hSZXN1bHQiLCJyZXN1bHRUb1B1Ymxpc2giLCJFdmVudHMiLCJwdWJsaXNoIiwibG9jYXRlQW5kRGVjb2RlIiwiZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMiLCJ1cGRhdGUiLCJhdmFpbGFibGVXb3JrZXIiLCJ3b3JrZXJUaHJlYWQiLCJidXN5IiwiYXR0YWNoRGF0YSIsImdyYWIiLCJ3b3JrZXIiLCJwb3N0TWVzc2FnZSIsImNtZCIsImJ1ZmZlciIsInN0YXJ0Q29udGludW91c1VwZGF0ZSIsImRlbGF5IiwiZnJlcXVlbmN5IiwidGltZXN0YW1wIiwid2luZG93IiwicmVxdWVzdEFuaW1GcmFtZSIsInBlcmZvcm1hbmNlIiwibm93IiwiaW5pdFdvcmtlciIsImJsb2JVUkwiLCJnZW5lcmF0ZVdvcmtlckJsb2IiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJldmVudCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJjb25maWdGb3JXb3JrZXIiLCJ3b3JrZXJJbnRlcmZhY2UiLCJmYWN0b3J5IiwiUXVhZ2dhIiwib25Qcm9jZXNzZWQiLCJzZXRSZWFkZXJzIiwicmVhZGVycyIsImJsb2IiLCJmYWN0b3J5U291cmNlIiwiX19mYWN0b3J5U291cmNlX18iLCJCbG9iIiwidG9TdHJpbmciLCJjcmVhdGVPYmplY3RVUkwiLCJjYXBhY2l0eSIsImluY3JlYXNlQnkiLCJ3b3JrZXJzVG9UZXJtaW5hdGUiLCJzbGljZSIsInRlcm1pbmF0ZSIsIndvcmtlckluaXRpYWxpemVkIiwic3RvcCIsInJlbGVhc2UiLCJjbGVhckV2ZW50SGFuZGxlcnMiLCJwYXVzZSIsIm9uRGV0ZWN0ZWQiLCJzdWJzY3JpYmUiLCJvZmZEZXRlY3RlZCIsInVuc3Vic2NyaWJlIiwib2ZmUHJvY2Vzc2VkIiwicmVnaXN0ZXJSZXN1bHRDb2xsZWN0b3IiLCJyZXN1bHRDb2xsZWN0b3IiLCJkZWNvZGVTaW5nbGUiLCJyZXN1bHRDYWxsYmFjayIsInNlcXVlbmNlIiwiZGVidWciLCJvbmNlIiwiSW1hZ2VEZWJ1ZyIsIlJlc3VsdENvbGxlY3RvciIsImNvbnRhaW5zIiwiZXZlcnkiLCJwYXNzZXNGaWx0ZXIiLCJyZXN1bHRzIiwiY2FwdHVyZSIsIm1hdGNoZXNDb25zdHJhaW50cyIsImJsYWNrbGlzdCIsImltYWdlU2l6ZSIsInRvRGF0YVVSTCIsImdldFJlc3VsdHMiLCJkb3QiLCJwb2ludE1hcCIsInVwZGF0ZUNlbnRlciIsInBvaW50VG9BZGQiLCJpZCIsIm90aGVyUG9pbnQiLCJzaW1pbGFyaXR5IiwiZ2V0UG9pbnRzIiwiZ2V0Q2VudGVyIiwiZXZlbnRzIiwiZ2V0RXZlbnQiLCJldmVudE5hbWUiLCJzdWJzY3JpYmVycyIsImNsZWFyRXZlbnRzIiwicHVibGlzaFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbiIsImFzeW5jIiwic2V0VGltZW91dCIsInN1YnNjcmliZXIiLCJlbnVtZXJhdGVEZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZ2V0VXNlck1lZGlhIiwiU3ViSW1hZ2UiLCJJIiwib3JpZ2luYWxTaXplIiwidXBkYXRlRGF0YSIsInVwZGF0ZUZyb20iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbXVsIiwiYWgiLCJhbCIsImJoIiwiYmwiLCJhc3NpZ24iLCJUeXBlRXJyb3IiLCJpbmRleCIsImFyZ3VtZW50cyIsIm5leHRTb3VyY2UiLCJuZXh0S2V5IiwiaGFzT3duUHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImZhY2luZ01vZGUiLCJkcmF3Qm91bmRpbmdCb3giLCJzaG93RnJlcXVlbmN5IiwiZHJhd1NjYW5saW5lIiwic2hvd1BhdHRlcm4iLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiRU5WIiwibm9kZSIsIlJFQURFUlMiLCJjb2RlXzEyOF9yZWFkZXIiLCJlYW5fcmVhZGVyIiwiZWFuXzVfcmVhZGVyIiwiZWFuXzJfcmVhZGVyIiwiZWFuXzhfcmVhZGVyIiwiY29kZV8zOV9yZWFkZXIiLCJjb2RlXzM5X3Zpbl9yZWFkZXIiLCJjb2RhYmFyX3JlYWRlciIsInVwY19yZWFkZXIiLCJ1cGNfZV9yZWFkZXIiLCJpMm9mNV9yZWFkZXIiLCJJMm9mNVJlYWRlciIsImlucHV0SW1hZ2VXcmFwcGVyIiwiX2NhbnZhcyIsIl9iYXJjb2RlUmVhZGVycyIsImluaXRSZWFkZXJzIiwiaW5pdENvbmZpZyIsIiRkZWJ1ZyIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJtYXAiLCJKU09OIiwic3RyaW5naWZ5IiwidmlzIiwicHJvcCIsImRpc3BsYXkiLCJnZXRFeHRlbmRlZExpbmUiLCJhbmdsZSIsImV4dGVuZExpbmUiLCJhbW91bnQiLCJleHRlbnNpb24iLCJjZWlsIiwiZ2V0TGluZSIsInRyeURlY29kZSIsImJhcmNvZGVMaW5lIiwiQnJlc2VuaGFtIiwiZ2V0QmFyY29kZUxpbmUiLCJwcmludEZyZXF1ZW5jeSIsInRvQmluYXJ5TGluZSIsInByaW50UGF0dGVybiIsInRyeURlY29kZUJydXRlRm9yY2UiLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwicG93Iiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJnZXRMaW5lTGVuZ3RoIiwiZGVjb2RlRnJvbUJvdW5kaW5nQm94IiwibGluZUxlbmd0aCIsImF0YW4yIiwibXVsdGlwbGUiLCJTbG9wZSIsIkRJUiIsIlVQIiwiRE9XTiIsIngwIiwieTAiLCJ4MSIsInkxIiwic3RlZXAiLCJkZWx0YXgiLCJkZWx0YXkiLCJ5c3RlcCIsInJlYWQiLCJzbG9wZSIsInNsb3BlMiIsImV4dHJlbWEiLCJjdXJyZW50RGlyIiwiclRocmVzaG9sZCIsImZpbGxDb2xvciIsImZpbGxSZWN0IiwiZmFjaW5nTWF0Y2hpbmciLCJzdHJlYW1SZWYiLCJ3YWl0Rm9yVmlkZW8iLCJyZXNvbHZlIiwiYXR0ZW1wdHMiLCJjaGVja1ZpZGVvIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiaW5pdENhbWVyYSIsInN0cmVhbSIsInNyY09iamVjdCIsImRlcHJlY2F0ZWRDb25zdHJhaW50cyIsInZpZGVvQ29uc3RyYWludHMiLCJub3JtYWxpemVkIiwibWluQXNwZWN0UmF0aW8iLCJhc3BlY3RSYXRpbyIsImZhY2luZyIsInBpY2tDb25zdHJhaW50cyIsIm5vcm1hbGl6ZWRDb25zdHJhaW50cyIsImF1ZGlvIiwiZGV2aWNlSWQiLCJlbnVtZXJhdGVWaWRlb0RldmljZXMiLCJkZXZpY2VzIiwiZGV2aWNlIiwia2luZCIsInRyYWNrcyIsImdldFZpZGVvVHJhY2tzIiwiZ2V0QWN0aXZlU3RyZWFtTGFiZWwiLCJFeGlmVGFncyIsIkF2YWlsYWJsZVRhZ3MiLCJmaW5kVGFnc0luT2JqZWN0VVJMIiwidGFncyIsInRlc3QiLCJvYmplY3RVUkxUb0Jsb2IiLCJyZWFkVG9CdWZmZXIiLCJmaW5kVGFnc0luQnVmZmVyIiwiYmFzZTY0VG9BcnJheUJ1ZmZlciIsImRhdGFVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwiYmluYXJ5IiwiYXRvYiIsImxlbiIsIkFycmF5QnVmZmVyIiwidmlldyIsImNoYXJDb2RlQXQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwidXJsIiwiaHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwicmVzcG9uc2UiLCJvbmVycm9yIiwic2VuZCIsImZpbGUiLCJzZWxlY3RlZFRhZ3MiLCJkYXRhVmlldyIsIkRhdGFWaWV3IiwiYnl0ZUxlbmd0aCIsImV4aWZUYWdzIiwic2VsZWN0ZWRUYWciLCJleGlmVGFnIiwidGFnIiwibWFya2VyIiwiZ2V0VWludDgiLCJyZWFkRVhJRkRhdGEiLCJnZXRVaW50MTYiLCJnZXRTdHJpbmdGcm9tQnVmZmVyIiwidGlmZk9mZnNldCIsImJpZ0VuZCIsImZpcnN0SUZET2Zmc2V0IiwiZ2V0VWludDMyIiwicmVhZFRhZ3MiLCJ0aWZmU3RhcnQiLCJkaXJTdGFydCIsInN0cmluZ3MiLCJlbnRyaWVzIiwiZW50cnlPZmZzZXQiLCJyZWFkVGFnVmFsdWUiLCJudW1WYWx1ZXMiLCJvdXRzdHIiLCJUT19SQURJQU5TIiwiYWRqdXN0Q2FudmFzU2l6ZSIsInRhcmdldFNpemUiLCJfdGhhdCIsIl9zdHJlYW1Db25maWciLCJnZXRDb25maWciLCJfdmlkZW9fc2l6ZSIsImdldFJlYWxXaWR0aCIsImdldFJlYWxIZWlnaHQiLCJfY2FudmFzU2l6ZSIsIl9zaXplIiwiX3N4IiwiX3N5IiwiX2N0eCIsIl9kYXRhIiwidmlkZW9TaXplIiwiY2FudmFzU2l6ZSIsImdldERhdGEiLCJkb0hhbGZTYW1wbGUiLCJnZXRGcmFtZSIsImRyYXdhYmxlIiwiZHJhd0FuZ2xlIiwib3JpZW50YXRpb24iLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJnZXRTaXplIiwiSW1hZ2VMb2FkZXIiLCJsb2FkIiwiZGlyZWN0b3J5IiwiaHRtbEltYWdlc1NyY0FycmF5IiwiaHRtbEltYWdlc0FycmF5IiwibnVtIiwibm90TG9hZGVkIiwiYWRkSW1hZ2UiLCJsb2FkZWQiLCJsb2FkZWRJbWciLCJub3Rsb2FkZWRJbWdzIiwic3BsaWNlIiwiaW1nTmFtZSIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiYWRkT25sb2FkSGFuZGxlciIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJfY2FsY3VsYXRlZFdpZHRoIiwiX2NhbGN1bGF0ZWRIZWlnaHQiLCJfdG9wUmlnaHQiLCJpbml0U2l6ZSIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiZW5kZWQiLCJzZXRDdXJyZW50VGltZSIsInRpbWUiLCJjdXJyZW50VGltZSIsImYiLCJib29sIiwiaGFuZGxlcnMiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFyZ3MiLCJzZXRUb3BSaWdodCIsInNldENhbnZhc1NpemUiLCJmcmFtZUlkeCIsInBhdXNlZCIsImltZ0FycmF5IiwiYmFzZVVybCIsImNhbGN1bGF0ZWRXaWR0aCIsImNhbGN1bGF0ZWRIZWlnaHQiLCJsb2FkSW1hZ2VzIiwiaW1ncyIsInB1Ymxpc2hFdmVudCIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwidHJhbnNmb3JtTWF0MiIsIm1hdDIiLCJjb3B5IiwiX2N1cnJlbnRJbWFnZVdyYXBwZXIiLCJfc2tlbEltYWdlV3JhcHBlciIsIl9zdWJJbWFnZVdyYXBwZXIiLCJfbGFiZWxJbWFnZVdyYXBwZXIiLCJfcGF0Y2hHcmlkIiwiX3BhdGNoTGFiZWxHcmlkIiwiX2ltYWdlVG9QYXRjaEdyaWQiLCJfYmluYXJ5SW1hZ2VXcmFwcGVyIiwiX3BhdGNoU2l6ZSIsIl9udW1QYXRjaGVzIiwiX3NrZWxldG9uaXplciIsInNrZWxldG9uSW1hZ2VEYXRhIiwic2tlbGV0b25pemVyIiwiZ2xvYmFsIiwidXNlV29ya2VyIiwicGF0Y2hlcyIsIm92ZXJBdmciLCJwYXRjaCIsInRyYW5zTWF0IiwibWlueCIsIm1pbnkiLCJtYXh4IiwibWF4eSIsImJpbmFyaXplSW1hZ2UiLCJmaW5kUGF0Y2hlcyIsInBhdGNoZXNGb3VuZCIsInJhc3Rlcml6ZXIiLCJyYXN0ZXJSZXN1bHQiLCJza2VsZXRvbml6ZSIsIlJhc3Rlcml6ZXIiLCJyYXN0ZXJpemUiLCJkZXNjcmliZVBhdGNoIiwiZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyIsIm1heExhYmVsIiwibGFiZWxIaXN0IiwidG9wTGFiZWxzIiwic29ydCIsImVsIiwiZmluZEJveGVzIiwic2ltaWxhck1vbWVudHMiLCJ0b3BDbHVzdGVyIiwicGF0Y2hQb3MiLCJlbGlnaWJsZU1vbWVudHMiLCJtYXRjaGluZ01vbWVudHMiLCJtaW5Db21wb25lbnRXZWlnaHQiLCJyYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eSIsImN1cnJJZHgiLCJub3RZZXRQcm9jZXNzZWQiLCJjdXJyZW50SWR4IiwiY3VycmVudFBhdGNoIiwiY3JlYXRlQ29udG91cjJEIiwiZmlyc3RWZXJ0ZXgiLCJpbnNpZGVDb250b3VycyIsIm5leHRwZWVyIiwicHJldnBlZXIiLCJDT05UT1VSX0RJUiIsIkNXX0RJUiIsIkNDV19ESVIiLCJVTktOT1dOX0RJUiIsIk9VVFNJREVfRURHRSIsIklOU0lERV9FREdFIiwidHJhY2VyIiwiZGVwdGhsYWJlbCIsImJjIiwibGMiLCJsYWJlbGluZGV4IiwiY29sb3JNYXAiLCJ2ZXJ0ZXgiLCJwIiwiY2MiLCJzYyIsImNvbm5lY3RlZENvdW50IiwiZHJhd0NvbnRvdXIiLCJmaXJzdENvbnRvdXIiLCJwcSIsImlxIiwicSIsIlNrZWxldG9uaXplciIsInN0ZGxpYiIsImZvcmVpZ24iLCJpbWFnZXMiLCJpbkltYWdlUHRyIiwib3V0SW1hZ2VQdHIiLCJhSW1hZ2VQdHIiLCJiSW1hZ2VQdHIiLCJpbWFnZVB0ciIsIm1lbWNweSIsInNyY0ltYWdlUHRyIiwiZHN0SW1hZ2VQdHIiLCJzdWJJbWFnZVB0ciIsImVyb2RlZEltYWdlUHRyIiwidGVtcEltYWdlUHRyIiwic2tlbEltYWdlUHRyIiwiZG9uZSIsIkNvZGFiYXJSZWFkZXIiLCJfY291bnRlcnMiLCJTVEFSVF9FTkQiLCJNSU5fRU5DT0RFRF9DSEFSUyIsIk1BWF9BQ0NFUFRBQkxFIiwiUEFERElORyIsInN0YXJ0Q291bnRlciIsIl9pc1N0YXJ0RW5kIiwiX3ZlcmlmeVdoaXRlc3BhY2UiLCJfdmFsaWRhdGVSZXN1bHQiLCJfc3VtQ291bnRlcnMiLCJlbmRDb3VudGVyIiwiX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgiLCJfdGhyZXNob2xkUmVzdWx0UGF0dGVybiIsImNhdGVnb3JpemF0aW9uIiwic3BhY2UiLCJuYXJyb3ciLCJjb3VudHMiLCJ3aWRlIiwiYmFyIiwiY2F0IiwiX2NoYXJUb1BhdHRlcm4iLCJuZXdraW5kIiwiY2hhciIsImNoYXJDb2RlIiwidGhyZXNob2xkcyIsIl9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQiLCJiYXJUaHJlc2hvbGQiLCJzcGFjZVRocmVzaG9sZCIsImJpdG1hc2siLCJDb2RlMTI4UmVhZGVyIiwiQ09ERV9TSElGVCIsIkNPREVfQyIsIkNPREVfQiIsIkNPREVfQSIsIlNUQVJUX0NPREVfQSIsIlNUQVJUX0NPREVfQiIsIlNUQVJUX0NPREVfQyIsIlNUT1BfQ09ERSIsIk1PRFVMRV9JTkRJQ0VTIiwiX2NvcnJlY3QiLCJjYWxjdWxhdGVDb3JyZWN0aW9uIiwibXVsdGlwbGllciIsImNoZWNrc3VtIiwicmF3UmVzdWx0Iiwic2hpZnROZXh0IiwicmVtb3ZlTGFzdENoYXJhY3RlciIsImV4cGVjdGVkIiwic3VtTm9ybWFsaXplZCIsInN1bUV4cGVjdGVkIiwiQ29kZTM5VklOUmVhZGVyIiwicGF0dGVybnMiLCJJT1EiLCJBWjA5IiwiX2NoZWNrQ2hlY2tzdW0iLCJFQU4yUmVhZGVyIiwicGFyc2VJbnQiLCJFQU41UmVhZGVyIiwiQ0hFQ0tfRElHSVRfRU5DT0RJTkdTIiwiZXh0ZW5zaW9uQ2hlY2tzdW0iLCJkZXRlcm1pbmVDaGVja0RpZ2l0IiwiRUFOOFJlYWRlciIsImJhclNwYWNlUmF0aW8iLCJub3JtYWxpemVCYXJTcGFjZVdpZHRoIiwiTiIsIlciLCJ3cml0YWJsZSIsIk1BWF9DT1JSRUNUSU9OX0ZBQ1RPUiIsImNvdW50ZXJTdW0iLCJjb2RlU3VtIiwiY29ycmVjdGlvblJhdGlvIiwiY29ycmVjdGlvblJhdGlvSW52ZXJzZSIsIm5hcnJvd0JhcldpZHRoIiwiX2RlY29kZVBhaXIiLCJjb3VudGVyUGFpciIsImNvZGVzIiwiY291bnRlckxlbmd0aCIsIl92ZXJpZnlDb3VudGVyTGVuZ3RoIiwiVVBDRVJlYWRlciIsIl9kZXRlcm1pbmVQYXJpdHkiLCJuclN5c3RlbSIsIl9jb252ZXJ0VG9VUENBIiwidXBjYSIsImxhc3REaWdpdCIsIlVQQ1JlYWRlciIsImNoYXJBdCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7QUFHQSxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QkMsV0FBekIsRUFBc0M7QUFDbENELFdBQU8scURBQU1FLGlCQUFOLEVB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InF1YWdnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUXVhZ2dhXCJdID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG5cdGVsc2Vcblx0XHRyb290W1wiUXVhZ2dhXCJdID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG59KSh0aGlzLCBmdW5jdGlvbihfX2ZhY3RvcnlTb3VyY2VfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL215TW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNjQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwODMyYmJhYWQyNmExYjA0ZWZmIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhcmNvZGVSZWFkZXIgZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBFQU5SZWFkZXIob3B0cywgc3VwcGxlbWVudHMpIHtcbiAgICBvcHRzID0gbWVyZ2UoZ2V0RGVmYXVsQ29uZmlnKCksIG9wdHMpO1xuICAgIEJhcmNvZGVSZWFkZXIuY2FsbCh0aGlzLCBvcHRzLCBzdXBwbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bENvbmZpZygpIHtcbiAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhFQU5SZWFkZXIuQ09ORklHX0tFWVMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGNvbmZpZ1trZXldID0gRUFOUmVhZGVyLkNPTkZJR19LRVlTW2tleV0uZGVmYXVsdDtcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZmlnO1xufVxuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgICBDT0RFX0xfU1RBUlQ6IHt2YWx1ZTogMH0sXG4gICAgQ09ERV9HX1NUQVJUOiB7dmFsdWU6IDEwfSxcbiAgICBTVEFSVF9QQVRURVJOOiB7dmFsdWU6IFsxLCAxLCAxXX0sXG4gICAgU1RPUF9QQVRURVJOOiB7dmFsdWU6IFsxLCAxLCAxXX0sXG4gICAgTUlERExFX1BBVFRFUk46IHt2YWx1ZTogWzEsIDEsIDEsIDEsIDFdfSxcbiAgICBFWFRFTlNJT05fU1RBUlRfUEFUVEVSTjoge3ZhbHVlOiBbMSwgMSwgMl19LFxuICAgIENPREVfUEFUVEVSTjoge3ZhbHVlOiBbXG4gICAgICAgIFszLCAyLCAxLCAxXSxcbiAgICAgICAgWzIsIDIsIDIsIDFdLFxuICAgICAgICBbMiwgMSwgMiwgMl0sXG4gICAgICAgIFsxLCA0LCAxLCAxXSxcbiAgICAgICAgWzEsIDEsIDMsIDJdLFxuICAgICAgICBbMSwgMiwgMywgMV0sXG4gICAgICAgIFsxLCAxLCAxLCA0XSxcbiAgICAgICAgWzEsIDMsIDEsIDJdLFxuICAgICAgICBbMSwgMiwgMSwgM10sXG4gICAgICAgIFszLCAxLCAxLCAyXSxcbiAgICAgICAgWzEsIDEsIDIsIDNdLFxuICAgICAgICBbMSwgMiwgMiwgMl0sXG4gICAgICAgIFsyLCAyLCAxLCAyXSxcbiAgICAgICAgWzEsIDEsIDQsIDFdLFxuICAgICAgICBbMiwgMywgMSwgMV0sXG4gICAgICAgIFsxLCAzLCAyLCAxXSxcbiAgICAgICAgWzQsIDEsIDEsIDFdLFxuICAgICAgICBbMiwgMSwgMywgMV0sXG4gICAgICAgIFszLCAxLCAyLCAxXSxcbiAgICAgICAgWzIsIDEsIDEsIDNdXG4gICAgXX0sXG4gICAgQ09ERV9GUkVRVUVOQ1k6IHt2YWx1ZTogWzAsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdfSxcbiAgICBTSU5HTEVfQ09ERV9FUlJPUjoge3ZhbHVlOiAwLjcwfSxcbiAgICBBVkdfQ09ERV9FUlJPUjoge3ZhbHVlOiAwLjQ4fSxcbiAgICBGT1JNQVQ6IHt2YWx1ZTogXCJlYW5fMTNcIiwgd3JpdGVhYmxlOiBmYWxzZX1cbn07XG5cbkVBTlJlYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhcmNvZGVSZWFkZXIucHJvdG90eXBlLCBwcm9wZXJ0aWVzKTtcbkVBTlJlYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFQU5SZWFkZXI7XG5cbkVBTlJlYWRlci5wcm90b3R5cGUuX2RlY29kZUNvZGUgPSBmdW5jdGlvbihzdGFydCwgY29kZXJhbmdlKSB7XG4gICAgdmFyIGNvdW50ZXIgPSBbMCwgMCwgMCwgMF0sXG4gICAgICAgIGksXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBvZmZzZXQgPSBzdGFydCxcbiAgICAgICAgaXNXaGl0ZSA9ICFzZWxmLl9yb3dbb2Zmc2V0XSxcbiAgICAgICAgY291bnRlclBvcyA9IDAsXG4gICAgICAgIGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgIH0sXG4gICAgICAgIGNvZGUsXG4gICAgICAgIGVycm9yO1xuXG4gICAgaWYgKCFjb2RlcmFuZ2UpIHtcbiAgICAgICAgY29kZXJhbmdlID0gc2VsZi5DT0RFX1BBVFRFUk4ubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoIGkgPSBvZmZzZXQ7IGkgPCBzZWxmLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgY29kZXJhbmdlOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBzZWxmLl9tYXRjaFBhdHRlcm4oY291bnRlciwgc2VsZi5DT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPiBzZWxmLkFWR19DT0RFX0VSUk9SKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbkVBTlJlYWRlci5wcm90b3R5cGUuX2ZpbmRQYXR0ZXJuID0gZnVuY3Rpb24ocGF0dGVybiwgb2Zmc2V0LCBpc1doaXRlLCB0cnlIYXJkZXIsIGVwc2lsb24pIHtcbiAgICB2YXIgY291bnRlciA9IFtdLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgaSxcbiAgICAgICAgY291bnRlclBvcyA9IDAsXG4gICAgICAgIGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcixcbiAgICAgICAgaixcbiAgICAgICAgc3VtO1xuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gc2VsZi5fbmV4dFNldChzZWxmLl9yb3cpO1xuICAgIH1cblxuICAgIGlmIChpc1doaXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXNXaGl0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0cnlIYXJkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0cnlIYXJkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICggZXBzaWxvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVwc2lsb24gPSBzZWxmLkFWR19DT0RFX0VSUk9SO1xuICAgIH1cblxuICAgIGZvciAoIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb3VudGVyW2ldID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKCBpID0gb2Zmc2V0OyBpIDwgc2VsZi5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKCBqID0gMDsgaiA8IGNvdW50ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVycm9yID0gc2VsZi5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIHBhdHRlcm4pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLnN0YXJ0ID0gaSAtIHN1bTtcbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0cnlIYXJkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgaXNXaGl0ZSA9ICFpc1doaXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuRUFOUmVhZGVyLnByb3RvdHlwZS5fZmluZFN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0LFxuICAgICAgICBvZmZzZXQgPSBzZWxmLl9uZXh0U2V0KHNlbGYuX3JvdyksXG4gICAgICAgIHN0YXJ0SW5mbztcblxuICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgIHN0YXJ0SW5mbyA9IHNlbGYuX2ZpbmRQYXR0ZXJuKHNlbGYuU1RBUlRfUEFUVEVSTiwgb2Zmc2V0KTtcbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPSBzdGFydEluZm8uc3RhcnQgLSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCk7XG4gICAgICAgIGlmIChsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID49IDApIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgfVxufTtcblxuRUFOUmVhZGVyLnByb3RvdHlwZS5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlID0gZnVuY3Rpb24oZW5kSW5mbykge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kO1xuXG4gICAgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KTtcbiAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgc2VsZi5fcm93Lmxlbmd0aCkge1xuICAgICAgICBpZiAoc2VsZi5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5FQU5SZWFkZXIucHJvdG90eXBlLl9maW5kRW5kID0gZnVuY3Rpb24ob2Zmc2V0LCBpc1doaXRlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBlbmRJbmZvID0gc2VsZi5fZmluZFBhdHRlcm4oc2VsZi5TVE9QX1BBVFRFUk4sIG9mZnNldCwgaXNXaGl0ZSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyBzZWxmLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xufTtcblxuRUFOUmVhZGVyLnByb3RvdHlwZS5fY2FsY3VsYXRlRmlyc3REaWdpdCA9IGZ1bmN0aW9uKGNvZGVGcmVxdWVuY3kpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICBmb3IgKCBpID0gMDsgaSA8IHNlbGYuQ09ERV9GUkVRVUVOQ1kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IHNlbGYuQ09ERV9GUkVRVUVOQ1lbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuRUFOUmVhZGVyLnByb3RvdHlwZS5fZGVjb2RlUGF5bG9hZCA9IGZ1bmN0aW9uKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKSB7XG4gICAgdmFyIGksXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBjb2RlRnJlcXVlbmN5ID0gMHgwLFxuICAgICAgICBmaXJzdERpZ2l0O1xuXG4gICAgZm9yICggaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29kZSA9IHNlbGYuX2RlY29kZUNvZGUoY29kZS5lbmQpO1xuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlLmNvZGUgPj0gc2VsZi5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgIGNvZGUuY29kZSA9IGNvZGUuY29kZSAtIHNlbGYuQ09ERV9HX1NUQVJUO1xuICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg1IC0gaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDAgPDwgKDUgLSBpKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICB9XG5cbiAgICBmaXJzdERpZ2l0ID0gc2VsZi5fY2FsY3VsYXRlRmlyc3REaWdpdChjb2RlRnJlcXVlbmN5KTtcbiAgICBpZiAoZmlyc3REaWdpdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmVzdWx0LnVuc2hpZnQoZmlyc3REaWdpdCk7XG5cbiAgICBjb2RlID0gc2VsZi5fZmluZFBhdHRlcm4oc2VsZi5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIHRydWUsIGZhbHNlKTtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICBmb3IgKCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb2RlID0gc2VsZi5fZGVjb2RlQ29kZShjb2RlLmVuZCwgc2VsZi5DT0RFX0dfU1RBUlQpO1xuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2RlO1xufTtcblxuRUFOUmVhZGVyLnByb3RvdHlwZS5fZGVjb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YXJ0SW5mbyxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGNvZGUsXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBkZWNvZGVkQ29kZXMgPSBbXSxcbiAgICAgICAgcmVzdWx0SW5mbyA9IHt9O1xuXG4gICAgc3RhcnRJbmZvID0gc2VsZi5fZmluZFN0YXJ0KCk7XG4gICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvZGUgPSB7XG4gICAgICAgIGNvZGU6IHN0YXJ0SW5mby5jb2RlLFxuICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICBlbmQ6IHN0YXJ0SW5mby5lbmRcbiAgICB9O1xuICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgIGNvZGUgPSBzZWxmLl9kZWNvZGVQYXlsb2FkKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcbiAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvZGUgPSBzZWxmLl9maW5kRW5kKGNvZGUuZW5kLCBmYWxzZSk7XG4gICAgaWYgKCFjb2RlKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAvLyBDaGVja3N1bVxuICAgIGlmICghc2VsZi5fY2hlY2tzdW0ocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdXBwbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBleHQgPSB0aGlzLl9kZWNvZGVFeHRlbnNpb25zKGNvZGUuZW5kKTtcbiAgICAgICAgaWYgKCFleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0Q29kZSA9IGV4dC5kZWNvZGVkQ29kZXNbZXh0LmRlY29kZWRDb2Rlcy5sZW5ndGgtMV0sXG4gICAgICAgICAgICBlbmRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBsYXN0Q29kZS5zdGFydCArICgoKGxhc3RDb2RlLmVuZCAtIGxhc3RDb2RlLnN0YXJ0KSAvIDIpIHwgMCksXG4gICAgICAgICAgICAgICAgZW5kOiBsYXN0Q29kZS5lbmRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmKCFzZWxmLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEluZm8gPSB7XG4gICAgICAgICAgICBzdXBwbGVtZW50OiBleHQsXG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbihcIlwiKSArIGV4dC5jb2RlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiByZXN1bHQuam9pbihcIlwiKSxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgZW5kOiBjb2RlLmVuZCxcbiAgICAgICAgY29kZXNldDogXCJcIixcbiAgICAgICAgc3RhcnRJbmZvOiBzdGFydEluZm8sXG4gICAgICAgIGRlY29kZWRDb2RlczogZGVjb2RlZENvZGVzLFxuICAgICAgICAuLi5yZXN1bHRJbmZvXG4gICAgfTtcbn07XG5cbkVBTlJlYWRlci5wcm90b3R5cGUuX2RlY29kZUV4dGVuc2lvbnMgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgc3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgb2Zmc2V0KSxcbiAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5FWFRFTlNJT05fU1RBUlRfUEFUVEVSTiwgc3RhcnQsIGZhbHNlLCBmYWxzZSksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChzdGFydEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zdXBwbGVtZW50c1tpXS5kZWNvZGUodGhpcy5fcm93LCBzdGFydEluZm8uZW5kKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2RlOiByZXN1bHQuY29kZSxcbiAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICAgICAgZW5kOiByZXN1bHQuZW5kLFxuICAgICAgICAgICAgICAgIGNvZGVzZXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHQuZGVjb2RlZENvZGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5FQU5SZWFkZXIucHJvdG90eXBlLl9jaGVja3N1bSA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHZhciBzdW0gPSAwLCBpO1xuXG4gICAgZm9yICggaSA9IHJlc3VsdC5sZW5ndGggLSAyOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgIH1cbiAgICBzdW0gKj0gMztcbiAgICBmb3IgKCBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgfVxuICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbn07XG5cbkVBTlJlYWRlci5DT05GSUdfS0VZUyA9IHtcbiAgICBzdXBwbGVtZW50czoge1xuICAgICAgICAndHlwZSc6ICdhcnJheU9mKHN0cmluZyknLFxuICAgICAgICAnZGVmYXVsdCc6IFtdLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQWxsb3dlZCBleHRlbnNpb25zIHRvIGJlIGRlY29kZWQgKDIgYW5kL29yIDUpJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChFQU5SZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlYWRlci9lYW5fcmVhZGVyLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBCYXJjb2RlUmVhZGVyKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICB0aGlzLl9yb3cgPSBbXTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLnN1cHBsZW1lbnRzID0gc3VwcGxlbWVudHM7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbkJhcmNvZGVSZWFkZXIucHJvdG90eXBlLl9uZXh0VW5zZXQgPSBmdW5jdGlvbihsaW5lLCBzdGFydCkge1xuICAgIHZhciBpO1xuXG4gICAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFsaW5lW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGluZS5sZW5ndGg7XG59O1xuXG5CYXJjb2RlUmVhZGVyLnByb3RvdHlwZS5fbWF0Y2hQYXR0ZXJuID0gZnVuY3Rpb24oY291bnRlciwgY29kZSwgbWF4U2luZ2xlRXJyb3IpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgZXJyb3IgPSAwLFxuICAgICAgICBzaW5nbGVFcnJvciA9IDAsXG4gICAgICAgIHN1bSA9IDAsXG4gICAgICAgIG1vZHVsbyA9IDAsXG4gICAgICAgIGJhcldpZHRoLFxuICAgICAgICBjb3VudCxcbiAgICAgICAgc2NhbGVkO1xuXG4gICAgbWF4U2luZ2xlRXJyb3IgPSBtYXhTaW5nbGVFcnJvciB8fCB0aGlzLlNJTkdMRV9DT0RFX0VSUk9SIHx8IDE7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdW0gKz0gY291bnRlcltpXTtcbiAgICAgICAgbW9kdWxvICs9IGNvZGVbaV07XG4gICAgfVxuICAgIGlmIChzdW0gPCBtb2R1bG8pIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgfVxuICAgIGJhcldpZHRoID0gc3VtIC8gbW9kdWxvO1xuICAgIG1heFNpbmdsZUVycm9yICo9IGJhcldpZHRoO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY291bnQgPSBjb3VudGVyW2ldO1xuICAgICAgICBzY2FsZWQgPSBjb2RlW2ldICogYmFyV2lkdGg7XG4gICAgICAgIHNpbmdsZUVycm9yID0gTWF0aC5hYnMoY291bnQgLSBzY2FsZWQpIC8gc2NhbGVkO1xuICAgICAgICBpZiAoc2luZ2xlRXJyb3IgPiBtYXhTaW5nbGVFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IgKz0gc2luZ2xlRXJyb3I7XG4gICAgfVxuICAgIHJldHVybiBlcnJvciAvIG1vZHVsbztcbn07XG5cbkJhcmNvZGVSZWFkZXIucHJvdG90eXBlLl9uZXh0U2V0ID0gZnVuY3Rpb24obGluZSwgb2Zmc2V0KSB7XG4gICAgdmFyIGk7XG5cbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaW5lW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGluZS5sZW5ndGg7XG59O1xuXG5CYXJjb2RlUmVhZGVyLnByb3RvdHlwZS5fY29ycmVjdEJhcnMgPSBmdW5jdGlvbihjb3VudGVyLCBjb3JyZWN0aW9uLCBpbmRpY2VzKSB7XG4gICAgdmFyIGxlbmd0aCA9IGluZGljZXMubGVuZ3RoLFxuICAgICAgICB0bXAgPSAwO1xuICAgIHdoaWxlKGxlbmd0aC0tKSB7XG4gICAgICAgIHRtcCA9IGNvdW50ZXJbaW5kaWNlc1tsZW5ndGhdXSAqICgxIC0gKCgxIC0gY29ycmVjdGlvbikgLyAyKSk7XG4gICAgICAgIGlmICh0bXAgPiAxKSB7XG4gICAgICAgICAgICBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gPSB0bXA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkJhcmNvZGVSZWFkZXIucHJvdG90eXBlLl9tYXRjaFRyYWNlID0gZnVuY3Rpb24oY21wQ291bnRlciwgZXBzaWxvbikge1xuICAgIHZhciBjb3VudGVyID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBvZmZzZXQgPSBzZWxmLl9uZXh0U2V0KHNlbGYuX3JvdyksXG4gICAgICAgIGlzV2hpdGUgPSAhc2VsZi5fcm93W29mZnNldF0sXG4gICAgICAgIGNvdW50ZXJQb3MgPSAwLFxuICAgICAgICBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I7XG5cbiAgICBpZiAoY21wQ291bnRlcikge1xuICAgICAgICBmb3IgKCBpID0gMDsgaSA8IGNtcENvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKCBpID0gb2Zmc2V0OyBpIDwgc2VsZi5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHNlbGYuX21hdGNoUGF0dGVybihjb3VudGVyLCBjbXBDb3VudGVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY291bnRlciA9IGNvdW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIucHVzaCgwKTtcbiAgICAgICAgZm9yICggaSA9IG9mZnNldDsgaSA8IHNlbGYuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBjb3VudGVyLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9ICFpc1doaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgY21wQ291bnRlciB3YXMgbm90IGdpdmVuXG4gICAgYmVzdE1hdGNoLnN0YXJ0ID0gb2Zmc2V0O1xuICAgIGJlc3RNYXRjaC5lbmQgPSBzZWxmLl9yb3cubGVuZ3RoIC0gMTtcbiAgICBiZXN0TWF0Y2guY291bnRlciA9IGNvdW50ZXI7XG4gICAgcmV0dXJuIGJlc3RNYXRjaDtcbn07XG5cbkJhcmNvZGVSZWFkZXIucHJvdG90eXBlLmRlY29kZVBhdHRlcm4gPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBzZWxmLl9yb3cgPSBwYXR0ZXJuO1xuICAgIHJlc3VsdCA9IHNlbGYuX2RlY29kZSgpO1xuICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgc2VsZi5fcm93LnJldmVyc2UoKTtcbiAgICAgICAgcmVzdWx0ID0gc2VsZi5fZGVjb2RlKCk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5kaXJlY3Rpb24gPSBCYXJjb2RlUmVhZGVyLkRJUkVDVElPTi5SRVZFUlNFO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0ID0gc2VsZi5fcm93Lmxlbmd0aCAtIHJlc3VsdC5zdGFydDtcbiAgICAgICAgICAgIHJlc3VsdC5lbmQgPSBzZWxmLl9yb3cubGVuZ3RoIC0gcmVzdWx0LmVuZDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5kaXJlY3Rpb24gPSBCYXJjb2RlUmVhZGVyLkRJUkVDVElPTi5GT1JXQVJEO1xuICAgIH1cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5mb3JtYXQgPSBzZWxmLkZPUk1BVDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbkJhcmNvZGVSZWFkZXIucHJvdG90eXBlLl9tYXRjaFJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIGVuZCwgdmFsdWUpIHtcbiAgICB2YXIgaTtcblxuICAgIHN0YXJ0ID0gc3RhcnQgPCAwID8gMCA6IHN0YXJ0O1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbkJhcmNvZGVSZWFkZXIucHJvdG90eXBlLl9maWxsQ291bnRlcnMgPSBmdW5jdGlvbihvZmZzZXQsIGVuZCwgaXNXaGl0ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgY291bnRlclBvcyA9IDAsXG4gICAgICAgIGksXG4gICAgICAgIGNvdW50ZXJzID0gW107XG5cbiAgICBpc1doaXRlID0gKHR5cGVvZiBpc1doaXRlICE9PSAndW5kZWZpbmVkJykgPyBpc1doaXRlIDogdHJ1ZTtcbiAgICBvZmZzZXQgPSAodHlwZW9mIG9mZnNldCAhPT0gJ3VuZGVmaW5lZCcpID8gb2Zmc2V0IDogc2VsZi5fbmV4dFVuc2V0KHNlbGYuX3Jvdyk7XG4gICAgZW5kID0gZW5kIHx8IHNlbGYuX3Jvdy5sZW5ndGg7XG5cbiAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDA7XG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50ZXJzO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhcmNvZGVSZWFkZXIucHJvdG90eXBlLCBcIkZPUk1BVFwiLCB7XG4gICAgdmFsdWU6ICd1bmtub3duJyxcbiAgICB3cml0ZWFibGU6IGZhbHNlXG59KTtcblxuQmFyY29kZVJlYWRlci5ESVJFQ1RJT04gPSB7XG4gICAgRk9SV0FSRDogMSxcbiAgICBSRVZFUlNFOiAtMVxufTtcblxuQmFyY29kZVJlYWRlci5FeGNlcHRpb24gPSB7XG4gICAgU3RhcnROb3RGb3VuZEV4Y2VwdGlvbjogXCJTdGFydC1JbmZvIHdhcyBub3QgZm91bmQhXCIsXG4gICAgQ29kZU5vdEZvdW5kRXhjZXB0aW9uOiBcIkNvZGUgY291bGQgbm90IGJlIGZvdW5kIVwiLFxuICAgIFBhdHRlcm5Ob3RGb3VuZEV4Y2VwdGlvbjogXCJQYXR0ZXJuIGNvdWxkIG5vdCBiZSBmb3VuZCFcIlxufTtcblxuQmFyY29kZVJlYWRlci5DT05GSUdfS0VZUyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlUmVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlYWRlci9iYXJjb2RlX3JlYWRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgyKVxuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbC12ZWMyL2Nsb25lLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihhcnIsIHZhbCkge1xuICAgICAgICB2YXIgbCA9IGFyci5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgICAgIGFycltsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaHVmZmxlcyB0aGUgY29udGVudCBvZiBhbiBhcnJheVxuICAgICAqIEByZXR1cm4ge0FycmF5fSB0aGUgYXJyYXkgaXRzZWxmIHNodWZmbGVkXG4gICAgICovXG4gICAgc2h1ZmZsZTogZnVuY3Rpb24oYXJyKSB7XG4gICAgICAgIHZhciBpID0gYXJyLmxlbmd0aCAtIDEsIGosIHg7XG4gICAgICAgIGZvciAoaTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgICAgICAgIHggPSBhcnJbaV07XG4gICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICBhcnJbal0gPSB4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcblxuICAgIHRvUG9pbnRMaXN0OiBmdW5jdGlvbihhcnIpIHtcbiAgICAgICAgdmFyIGksIGosIHJvdyA9IFtdLCByb3dzID0gW107XG4gICAgICAgIGZvciAoIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAoIGogPSAwOyBqIDwgYXJyW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93W2pdID0gYXJyW2ldW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93c1tpXSA9IFwiW1wiICsgcm93LmpvaW4oXCIsXCIpICsgXCJdXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiW1wiICsgcm93cy5qb2luKFwiLFxcclxcblwiKSArIFwiXVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBlbGVtZW50cyB3aGljaCdzIHNjb3JlIGlzIGJpZ2dlciB0aGFuIHRoZSB0aHJlc2hvbGRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gdGhlIHJlZHVjZWQgYXJyYXlcbiAgICAgKi9cbiAgICB0aHJlc2hvbGQ6IGZ1bmN0aW9uKGFyciwgdGhyZXNob2xkLCBzY29yZUZ1bmMpIHtcbiAgICAgICAgdmFyIGksIHF1ZXVlID0gW107XG4gICAgICAgIGZvciAoIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2NvcmVGdW5jLmFwcGx5KGFyciwgW2FycltpXV0pID49IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVldWU7XG4gICAgfSxcblxuICAgIG1heEluZGV4OiBmdW5jdGlvbihhcnIpIHtcbiAgICAgICAgdmFyIGksIG1heCA9IDA7XG4gICAgICAgIGZvciAoIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2ldID4gYXJyW21heF0pIHtcbiAgICAgICAgICAgICAgICBtYXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfSxcblxuICAgIG1heDogZnVuY3Rpb24oYXJyKSB7XG4gICAgICAgIHZhciBpLCBtYXggPSAwO1xuICAgICAgICBmb3IgKCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFycltpXSA+IG1heCkge1xuICAgICAgICAgICAgICAgIG1heCA9IGFycltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH0sXG5cbiAgICBzdW06IGZ1bmN0aW9uKGFycikge1xuICAgICAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgICAgICAgIHN1bSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgICBzdW0gKz0gYXJyW2xlbmd0aF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9hcnJheV9oZWxwZXIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZHJhd1JlY3Q6IGZ1bmN0aW9uKHBvcywgc2l6ZSwgY3R4LCBzdHlsZSl7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gc3R5bGUuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHBvcy54LCBwb3MueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIH0sXG4gICAgZHJhd1BhdGg6IGZ1bmN0aW9uKHBhdGgsIGRlZiwgY3R4LCBzdHlsZSkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHlsZS5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gc3R5bGUubGluZVdpZHRoO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocGF0aFswXVtkZWYueF0sIHBhdGhbMF1bZGVmLnldKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBwYXRoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKHBhdGhbal1bZGVmLnhdLCBwYXRoW2pdW2RlZi55XSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSxcbiAgICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGltYWdlRGF0YSwgc2l6ZSwgY3R4KSB7XG4gICAgICAgIHZhciBjYW52YXNEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLngsIHNpemUueSksXG4gICAgICAgICAgICBkYXRhID0gY2FudmFzRGF0YS5kYXRhLFxuICAgICAgICAgICAgaW1hZ2VEYXRhUG9zID0gaW1hZ2VEYXRhLmxlbmd0aCxcbiAgICAgICAgICAgIGNhbnZhc0RhdGFQb3MgPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgICAgIHZhbHVlO1xuXG4gICAgICAgIGlmIChjYW52YXNEYXRhUG9zIC8gaW1hZ2VEYXRhUG9zICE9PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGltYWdlRGF0YVBvcy0tKXtcbiAgICAgICAgICAgIHZhbHVlID0gaW1hZ2VEYXRhW2ltYWdlRGF0YVBvc107XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzRGF0YVBvc10gPSAyNTU7XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzRGF0YVBvc10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNEYXRhUG9zXSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0RhdGFQb3NdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YShjYW52YXNEYXRhLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vaW1hZ2VfZGVidWcuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENsdXN0ZXIyIGZyb20gJy4vY2x1c3Rlcic7XG5pbXBvcnQgQXJyYXlIZWxwZXIgZnJvbSAnLi9hcnJheV9oZWxwZXInO1xuY29uc3QgdmVjMiA9IHtcbiAgICBjbG9uZTogcmVxdWlyZSgnZ2wtdmVjMi9jbG9uZScpLFxufTtcbmNvbnN0IHZlYzMgPSB7XG4gICAgY2xvbmU6IHJlcXVpcmUoJ2dsLXZlYzMvY2xvbmUnKSxcbn07XG5cbi8qKlxuICogQHBhcmFtIHggeC1jb29yZGluYXRlXG4gKiBAcGFyYW0geSB5LWNvb3JkaW5hdGVcbiAqIEByZXR1cm4gSW1hZ2VSZWZlcmVuY2Uge3gseX0gQ29vcmRpbmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VSZWYoeCwgeSkge1xuICAgIHZhciB0aGF0ID0ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgICAgICB0b1ZlYzI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZlYzIuY2xvbmUoW3RoaXMueCwgdGhpcy55XSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvVmVjMzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVjMy5jbG9uZShbdGhpcy54LCB0aGlzLnksIDFdKTtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54ID4gMC4wID8gTWF0aC5mbG9vcih0aGlzLnggKyAwLjUpIDogTWF0aC5mbG9vcih0aGlzLnggLSAwLjUpO1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55ID4gMC4wID8gTWF0aC5mbG9vcih0aGlzLnkgKyAwLjUpIDogTWF0aC5mbG9vcih0aGlzLnkgLSAwLjUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0aGF0O1xufTtcblxuLyoqXG4gKiBDb21wdXRlcyBhbiBpbnRlZ3JhbCBpbWFnZSBvZiBhIGdpdmVuIGdyYXlzY2FsZSBpbWFnZS5cbiAqIEBwYXJhbSBpbWFnZURhdGFDb250YWluZXIge0ltYWdlRGF0YUNvbnRhaW5lcn0gdGhlIGltYWdlIHRvIGJlIGludGVncmF0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVJbnRlZ3JhbEltYWdlMihpbWFnZVdyYXBwZXIsIGludGVncmFsV3JhcHBlcikge1xuICAgIHZhciBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICB2YXIgd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIHZhciBoZWlnaHQgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgIHZhciBpbnRlZ3JhbEltYWdlRGF0YSA9IGludGVncmFsV3JhcHBlci5kYXRhO1xuICAgIHZhciBzdW0gPSAwLCBwb3NBID0gMCwgcG9zQiA9IDAsIHBvc0MgPSAwLCBwb3NEID0gMCwgeCwgeTtcblxuICAgIC8vIHN1bSB1cCBmaXJzdCBjb2x1bW5cbiAgICBwb3NCID0gd2lkdGg7XG4gICAgc3VtID0gMDtcbiAgICBmb3IgKCB5ID0gMTsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgIHN1bSArPSBpbWFnZURhdGFbcG9zQV07XG4gICAgICAgIGludGVncmFsSW1hZ2VEYXRhW3Bvc0JdICs9IHN1bTtcbiAgICAgICAgcG9zQSArPSB3aWR0aDtcbiAgICAgICAgcG9zQiArPSB3aWR0aDtcbiAgICB9XG5cbiAgICBwb3NBID0gMDtcbiAgICBwb3NCID0gMTtcbiAgICBzdW0gPSAwO1xuICAgIGZvciAoIHggPSAxOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICBzdW0gKz0gaW1hZ2VEYXRhW3Bvc0FdO1xuICAgICAgICBpbnRlZ3JhbEltYWdlRGF0YVtwb3NCXSArPSBzdW07XG4gICAgICAgIHBvc0ErKztcbiAgICAgICAgcG9zQisrO1xuICAgIH1cblxuICAgIGZvciAoIHkgPSAxOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgcG9zQSA9IHkgKiB3aWR0aCArIDE7XG4gICAgICAgIHBvc0IgPSAoeSAtIDEpICogd2lkdGggKyAxO1xuICAgICAgICBwb3NDID0geSAqIHdpZHRoO1xuICAgICAgICBwb3NEID0gKHkgLSAxKSAqIHdpZHRoO1xuICAgICAgICBmb3IgKCB4ID0gMTsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIGludGVncmFsSW1hZ2VEYXRhW3Bvc0FdICs9XG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhW3Bvc0FdICsgaW50ZWdyYWxJbWFnZURhdGFbcG9zQl0gKyBpbnRlZ3JhbEltYWdlRGF0YVtwb3NDXSAtIGludGVncmFsSW1hZ2VEYXRhW3Bvc0RdO1xuICAgICAgICAgICAgcG9zQSsrO1xuICAgICAgICAgICAgcG9zQisrO1xuICAgICAgICAgICAgcG9zQysrO1xuICAgICAgICAgICAgcG9zRCsrO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVJbnRlZ3JhbEltYWdlKGltYWdlV3JhcHBlciwgaW50ZWdyYWxXcmFwcGVyKSB7XG4gICAgdmFyIGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIHZhciB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgdmFyIGhlaWdodCA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgdmFyIGludGVncmFsSW1hZ2VEYXRhID0gaW50ZWdyYWxXcmFwcGVyLmRhdGE7XG4gICAgdmFyIHN1bSA9IDA7XG5cbiAgICAvLyBzdW0gdXAgZmlyc3Qgcm93XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgIHN1bSArPSBpbWFnZURhdGFbaV07XG4gICAgICAgIGludGVncmFsSW1hZ2VEYXRhW2ldID0gc3VtO1xuICAgIH1cblxuICAgIGZvciAodmFyIHYgPSAxOyB2IDwgaGVpZ2h0OyB2KyspIHtcbiAgICAgICAgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgdSA9IDA7IHUgPCB3aWR0aDsgdSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaW1hZ2VEYXRhW3YgKiB3aWR0aCArIHVdO1xuICAgICAgICAgICAgaW50ZWdyYWxJbWFnZURhdGFbKCh2KSAqIHdpZHRoKSArIHVdID0gc3VtICsgaW50ZWdyYWxJbWFnZURhdGFbKHYgLSAxKSAqIHdpZHRoICsgdV07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGhyZXNob2xkSW1hZ2UoaW1hZ2VXcmFwcGVyLCB0aHJlc2hvbGQsIHRhcmdldFdyYXBwZXIpIHtcbiAgICBpZiAoIXRhcmdldFdyYXBwZXIpIHtcbiAgICAgICAgdGFyZ2V0V3JhcHBlciA9IGltYWdlV3JhcHBlcjtcbiAgICB9XG4gICAgdmFyIGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhLCBsZW5ndGggPSBpbWFnZURhdGEubGVuZ3RoLCB0YXJnZXREYXRhID0gdGFyZ2V0V3JhcHBlci5kYXRhO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIHRhcmdldERhdGFbbGVuZ3RoXSA9IGltYWdlRGF0YVtsZW5ndGhdIDwgdGhyZXNob2xkID8gMSA6IDA7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cbiAgICB2YXIgaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGEsXG4gICAgICAgIGxlbmd0aCA9IGltYWdlRGF0YS5sZW5ndGgsXG4gICAgICAgIGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbCxcbiAgICAgICAgYnVja2V0Q250ID0gMSA8PCBiaXRzUGVyUGl4ZWwsXG4gICAgICAgIGhpc3QgPSBuZXcgSW50MzJBcnJheShidWNrZXRDbnQpO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGhpc3RbaW1hZ2VEYXRhW2xlbmd0aF0gPj4gYml0U2hpZnRdKys7XG4gICAgfVxuICAgIHJldHVybiBoaXN0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJwZW5MaW5lKGxpbmUpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbGVuZ3RoID0gbGluZS5sZW5ndGgsXG4gICAgICAgIGxlZnQgPSBsaW5lWzBdLFxuICAgICAgICBjZW50ZXIgPSBsaW5lWzFdLFxuICAgICAgICByaWdodDtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgcmlnaHQgPSBsaW5lW2kgKyAxXTtcbiAgICAgICAgLy8gIC0xIDQgLTEga2VybmVsXG4gICAgICAgIGxpbmVbaSAtIDFdID0gKCgoY2VudGVyICogMikgLSBsZWZ0IC0gcmlnaHQpKSAmIDI1NTtcbiAgICAgICAgbGVmdCA9IGNlbnRlcjtcbiAgICAgICAgY2VudGVyID0gcmlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBsaW5lO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cbiAgICB2YXIgaGlzdCxcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICBiaXRTaGlmdCA9IDggLSBiaXRzUGVyUGl4ZWw7XG5cbiAgICBmdW5jdGlvbiBweChpbml0LCBlbmQpIHtcbiAgICAgICAgdmFyIHN1bSA9IDAsIGk7XG4gICAgICAgIGZvciAoIGkgPSBpbml0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaGlzdFtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG14KGluaXQsIGVuZCkge1xuICAgICAgICB2YXIgaSwgc3VtID0gMDtcblxuICAgICAgICBmb3IgKCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGkgKiBoaXN0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXRlcm1pbmVUaHJlc2hvbGQoKSB7XG4gICAgICAgIHZhciB2ZXQgPSBbMF0sIHAxLCBwMiwgcDEyLCBrLCBtMSwgbTIsIG0xMixcbiAgICAgICAgICAgIG1heCA9ICgxIDw8IGJpdHNQZXJQaXhlbCkgLSAxO1xuXG4gICAgICAgIGhpc3QgPSBjb21wdXRlSGlzdG9ncmFtKGltYWdlV3JhcHBlciwgYml0c1BlclBpeGVsKTtcbiAgICAgICAgZm9yICggayA9IDE7IGsgPCBtYXg7IGsrKykge1xuICAgICAgICAgICAgcDEgPSBweCgwLCBrKTtcbiAgICAgICAgICAgIHAyID0gcHgoayArIDEsIG1heCk7XG4gICAgICAgICAgICBwMTIgPSBwMSAqIHAyO1xuICAgICAgICAgICAgaWYgKHAxMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHAxMiA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtMSA9IG14KDAsIGspICogcDI7XG4gICAgICAgICAgICBtMiA9IG14KGsgKyAxLCBtYXgpICogcDE7XG4gICAgICAgICAgICBtMTIgPSBtMSAtIG0yO1xuICAgICAgICAgICAgdmV0W2tdID0gbTEyICogbTEyIC8gcDEyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheUhlbHBlci5tYXhJbmRleCh2ZXQpO1xuICAgIH1cblxuICAgIHRocmVzaG9sZCA9IGRldGVybWluZVRocmVzaG9sZCgpO1xuICAgIHJldHVybiB0aHJlc2hvbGQgPDwgYml0U2hpZnQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXIsIHRhcmdldFdyYXBwZXIpIHtcbiAgICB2YXIgdGhyZXNob2xkID0gZGV0ZXJtaW5lT3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXIpO1xuXG4gICAgdGhyZXNob2xkSW1hZ2UoaW1hZ2VXcmFwcGVyLCB0aHJlc2hvbGQsIHRhcmdldFdyYXBwZXIpO1xuICAgIHJldHVybiB0aHJlc2hvbGQ7XG59O1xuXG4vLyBsb2NhbCB0aHJlc2hvbGRpbmdcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQmluYXJ5SW1hZ2UoaW1hZ2VXcmFwcGVyLCBpbnRlZ3JhbFdyYXBwZXIsIHRhcmdldFdyYXBwZXIpIHtcbiAgICBjb21wdXRlSW50ZWdyYWxJbWFnZShpbWFnZVdyYXBwZXIsIGludGVncmFsV3JhcHBlcik7XG5cbiAgICBpZiAoIXRhcmdldFdyYXBwZXIpIHtcbiAgICAgICAgdGFyZ2V0V3JhcHBlciA9IGltYWdlV3JhcHBlcjtcbiAgICB9XG4gICAgdmFyIGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIHZhciB0YXJnZXREYXRhID0gdGFyZ2V0V3JhcHBlci5kYXRhO1xuICAgIHZhciB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgdmFyIGhlaWdodCA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgdmFyIGludGVncmFsSW1hZ2VEYXRhID0gaW50ZWdyYWxXcmFwcGVyLmRhdGE7XG4gICAgdmFyIHN1bSA9IDAsIHYsIHUsIGtlcm5lbCA9IDMsIEEsIEIsIEMsIEQsIGF2Zywgc2l6ZSA9IChrZXJuZWwgKiAyICsgMSkgKiAoa2VybmVsICogMiArIDEpO1xuXG4gICAgLy8gY2xlYXIgb3V0IHRvcCAmIGJvdHRvbS1ib3JkZXJcbiAgICBmb3IgKCB2ID0gMDsgdiA8PSBrZXJuZWw7IHYrKykge1xuICAgICAgICBmb3IgKCB1ID0gMDsgdSA8IHdpZHRoOyB1KyspIHtcbiAgICAgICAgICAgIHRhcmdldERhdGFbKCh2KSAqIHdpZHRoKSArIHVdID0gMDtcbiAgICAgICAgICAgIHRhcmdldERhdGFbKCgoaGVpZ2h0IC0gMSkgLSB2KSAqIHdpZHRoKSArIHVdID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNsZWFyIG91dCBsZWZ0ICYgcmlnaHQgYm9yZGVyXG4gICAgZm9yICggdiA9IGtlcm5lbDsgdiA8IGhlaWdodCAtIGtlcm5lbDsgdisrKSB7XG4gICAgICAgIGZvciAoIHUgPSAwOyB1IDw9IGtlcm5lbDsgdSsrKSB7XG4gICAgICAgICAgICB0YXJnZXREYXRhWygodikgKiB3aWR0aCkgKyB1XSA9IDA7XG4gICAgICAgICAgICB0YXJnZXREYXRhWygodikgKiB3aWR0aCkgKyAod2lkdGggLSAxIC0gdSldID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoIHYgPSBrZXJuZWwgKyAxOyB2IDwgaGVpZ2h0IC0ga2VybmVsIC0gMTsgdisrKSB7XG4gICAgICAgIGZvciAoIHUgPSBrZXJuZWwgKyAxOyB1IDwgd2lkdGggLSBrZXJuZWw7IHUrKykge1xuICAgICAgICAgICAgQSA9IGludGVncmFsSW1hZ2VEYXRhWyh2IC0ga2VybmVsIC0gMSkgKiB3aWR0aCArICh1IC0ga2VybmVsIC0gMSldO1xuICAgICAgICAgICAgQiA9IGludGVncmFsSW1hZ2VEYXRhWyh2IC0ga2VybmVsIC0gMSkgKiB3aWR0aCArICh1ICsga2VybmVsKV07XG4gICAgICAgICAgICBDID0gaW50ZWdyYWxJbWFnZURhdGFbKHYgKyBrZXJuZWwpICogd2lkdGggKyAodSAtIGtlcm5lbCAtIDEpXTtcbiAgICAgICAgICAgIEQgPSBpbnRlZ3JhbEltYWdlRGF0YVsodiArIGtlcm5lbCkgKiB3aWR0aCArICh1ICsga2VybmVsKV07XG4gICAgICAgICAgICBzdW0gPSBEIC0gQyAtIEIgKyBBO1xuICAgICAgICAgICAgYXZnID0gc3VtIC8gKHNpemUpO1xuICAgICAgICAgICAgdGFyZ2V0RGF0YVt2ICogd2lkdGggKyB1XSA9IGltYWdlRGF0YVt2ICogd2lkdGggKyB1XSA+IChhdmcgKyA1KSA/IDAgOiAxO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsdXN0ZXIocG9pbnRzLCB0aHJlc2hvbGQsIHByb3BlcnR5KSB7XG4gICAgdmFyIGksIGssIGNsdXN0ZXIsIHBvaW50LCBjbHVzdGVycyA9IFtdO1xuXG4gICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgICBwcm9wZXJ0eSA9IFwicmFkXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9DbHVzdGVyKG5ld1BvaW50KSB7XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKCBrID0gMDsgayA8IGNsdXN0ZXJzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjbHVzdGVyID0gY2x1c3RlcnNba107XG4gICAgICAgICAgICBpZiAoY2x1c3Rlci5maXRzKG5ld1BvaW50KSkge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXIuYWRkKG5ld1BvaW50KTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIC8vIGl0ZXJhdGUgb3ZlciBlYWNoIGNsb3VkXG4gICAgZm9yICggaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9pbnQgPSBDbHVzdGVyMi5jcmVhdGVQb2ludChwb2ludHNbaV0sIGksIHByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFhZGRUb0NsdXN0ZXIocG9pbnQpKSB7XG4gICAgICAgICAgICBjbHVzdGVycy5wdXNoKENsdXN0ZXIyLmNyZWF0ZShwb2ludCwgdGhyZXNob2xkKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsdXN0ZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IFRyYWNlciA9IHtcbiAgICB0cmFjZTogZnVuY3Rpb24ocG9pbnRzLCB2ZWMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdGlvbiwgbWF4SXRlcmF0aW9ucyA9IDEwLCB0b3AgPSBbXSwgcmVzdWx0ID0gW10sIGNlbnRlclBvcyA9IDAsIGN1cnJlbnRQb3MgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNlKGlkeCwgZm9yd2FyZCkge1xuICAgICAgICAgICAgdmFyIGZyb20sIHRvLCB0b0lkeCwgcHJlZGljdGVkUG9zLCB0aHJlc2hvbGRYID0gMSwgdGhyZXNob2xkWSA9IE1hdGguYWJzKHZlY1sxXSAvIDEwKSwgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2gocG9zLCBwcmVkaWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zLnggPiAocHJlZGljdGVkLnggLSB0aHJlc2hvbGRYKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgcG9zLnggPCAocHJlZGljdGVkLnggKyB0aHJlc2hvbGRYKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgcG9zLnkgPiAocHJlZGljdGVkLnkgLSB0aHJlc2hvbGRZKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgcG9zLnkgPCAocHJlZGljdGVkLnkgKyB0aHJlc2hvbGRZKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgbmV4dCBpbmRleCBpcyB3aXRoaW4gdGhlIHZlYyBzcGVjaWZpY2F0aW9uc1xuICAgICAgICAgICAgLy8gaWYgbm90LCBjaGVjayBhcyBsb25nIGFzIHRoZSB0aHJlc2hvbGQgaXMgbWV0XG5cbiAgICAgICAgICAgIGZyb20gPSBwb2ludHNbaWR4XTtcbiAgICAgICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgcHJlZGljdGVkUG9zID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBmcm9tLnggKyB2ZWNbMF0sXG4gICAgICAgICAgICAgICAgICAgIHk6IGZyb20ueSArIHZlY1sxXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZWRpY3RlZFBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZnJvbS54IC0gdmVjWzBdLFxuICAgICAgICAgICAgICAgICAgICB5OiBmcm9tLnkgLSB2ZWNbMV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b0lkeCA9IGZvcndhcmQgPyBpZHggKyAxIDogaWR4IC0gMTtcbiAgICAgICAgICAgIHRvID0gcG9pbnRzW3RvSWR4XTtcbiAgICAgICAgICAgIHdoaWxlICh0byAmJiAoIGZvdW5kID0gbWF0Y2godG8sIHByZWRpY3RlZFBvcykpICE9PSB0cnVlICYmIChNYXRoLmFicyh0by55IC0gZnJvbS55KSA8IHZlY1sxXSkpIHtcbiAgICAgICAgICAgICAgICB0b0lkeCA9IGZvcndhcmQgPyB0b0lkeCArIDEgOiB0b0lkeCAtIDE7XG4gICAgICAgICAgICAgICAgdG8gPSBwb2ludHNbdG9JZHhdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm91bmQgPyB0b0lkeCA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBpdGVyYXRpb24gPSAwOyBpdGVyYXRpb24gPCBtYXhJdGVyYXRpb25zOyBpdGVyYXRpb24rKykge1xuICAgICAgICAgICAgLy8gcmFuZG9tbHkgc2VsZWN0IHBvaW50IHRvIHN0YXJ0IHdpdGhcbiAgICAgICAgICAgIGNlbnRlclBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvaW50cy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyB0cmFjZSBmb3J3YXJkXG4gICAgICAgICAgICB0b3AgPSBbXTtcbiAgICAgICAgICAgIGN1cnJlbnRQb3MgPSBjZW50ZXJQb3M7XG4gICAgICAgICAgICB0b3AucHVzaChwb2ludHNbY3VycmVudFBvc10pO1xuICAgICAgICAgICAgd2hpbGUgKCggY3VycmVudFBvcyA9IHRyYWNlKGN1cnJlbnRQb3MsIHRydWUpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRvcC5wdXNoKHBvaW50c1tjdXJyZW50UG9zXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2VudGVyUG9zID4gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgPSBjZW50ZXJQb3M7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCggY3VycmVudFBvcyA9IHRyYWNlKGN1cnJlbnRQb3MsIGZhbHNlKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wLnB1c2gocG9pbnRzW2N1cnJlbnRQb3NdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b3AubGVuZ3RoID4gcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBESUxBVEUgPSAxO1xuZXhwb3J0IGNvbnN0IEVST0RFID0gMjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpbGF0ZShpbkltYWdlV3JhcHBlciwgb3V0SW1hZ2VXcmFwcGVyKSB7XG4gICAgdmFyIHYsXG4gICAgICAgIHUsXG4gICAgICAgIGluSW1hZ2VEYXRhID0gaW5JbWFnZVdyYXBwZXIuZGF0YSxcbiAgICAgICAgb3V0SW1hZ2VEYXRhID0gb3V0SW1hZ2VXcmFwcGVyLmRhdGEsXG4gICAgICAgIGhlaWdodCA9IGluSW1hZ2VXcmFwcGVyLnNpemUueSxcbiAgICAgICAgd2lkdGggPSBpbkltYWdlV3JhcHBlci5zaXplLngsXG4gICAgICAgIHN1bSxcbiAgICAgICAgeVN0YXJ0MSxcbiAgICAgICAgeVN0YXJ0MixcbiAgICAgICAgeFN0YXJ0MSxcbiAgICAgICAgeFN0YXJ0MjtcblxuICAgIGZvciAoIHYgPSAxOyB2IDwgaGVpZ2h0IC0gMTsgdisrKSB7XG4gICAgICAgIGZvciAoIHUgPSAxOyB1IDwgd2lkdGggLSAxOyB1KyspIHtcbiAgICAgICAgICAgIHlTdGFydDEgPSB2IC0gMTtcbiAgICAgICAgICAgIHlTdGFydDIgPSB2ICsgMTtcbiAgICAgICAgICAgIHhTdGFydDEgPSB1IC0gMTtcbiAgICAgICAgICAgIHhTdGFydDIgPSB1ICsgMTtcbiAgICAgICAgICAgIHN1bSA9IGluSW1hZ2VEYXRhW3lTdGFydDEgKiB3aWR0aCArIHhTdGFydDFdICsgaW5JbWFnZURhdGFbeVN0YXJ0MSAqIHdpZHRoICsgeFN0YXJ0Ml0gK1xuICAgICAgICAgICAgaW5JbWFnZURhdGFbdiAqIHdpZHRoICsgdV0gK1xuICAgICAgICAgICAgaW5JbWFnZURhdGFbeVN0YXJ0MiAqIHdpZHRoICsgeFN0YXJ0MV0gKyBpbkltYWdlRGF0YVt5U3RhcnQyICogd2lkdGggKyB4U3RhcnQyXTtcbiAgICAgICAgICAgIG91dEltYWdlRGF0YVt2ICogd2lkdGggKyB1XSA9IHN1bSA+IDAgPyAxIDogMDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlcm9kZShpbkltYWdlV3JhcHBlciwgb3V0SW1hZ2VXcmFwcGVyKSB7XG4gICAgdmFyIHYsXG4gICAgICAgIHUsXG4gICAgICAgIGluSW1hZ2VEYXRhID0gaW5JbWFnZVdyYXBwZXIuZGF0YSxcbiAgICAgICAgb3V0SW1hZ2VEYXRhID0gb3V0SW1hZ2VXcmFwcGVyLmRhdGEsXG4gICAgICAgIGhlaWdodCA9IGluSW1hZ2VXcmFwcGVyLnNpemUueSxcbiAgICAgICAgd2lkdGggPSBpbkltYWdlV3JhcHBlci5zaXplLngsXG4gICAgICAgIHN1bSxcbiAgICAgICAgeVN0YXJ0MSxcbiAgICAgICAgeVN0YXJ0MixcbiAgICAgICAgeFN0YXJ0MSxcbiAgICAgICAgeFN0YXJ0MjtcblxuICAgIGZvciAoIHYgPSAxOyB2IDwgaGVpZ2h0IC0gMTsgdisrKSB7XG4gICAgICAgIGZvciAoIHUgPSAxOyB1IDwgd2lkdGggLSAxOyB1KyspIHtcbiAgICAgICAgICAgIHlTdGFydDEgPSB2IC0gMTtcbiAgICAgICAgICAgIHlTdGFydDIgPSB2ICsgMTtcbiAgICAgICAgICAgIHhTdGFydDEgPSB1IC0gMTtcbiAgICAgICAgICAgIHhTdGFydDIgPSB1ICsgMTtcbiAgICAgICAgICAgIHN1bSA9IGluSW1hZ2VEYXRhW3lTdGFydDEgKiB3aWR0aCArIHhTdGFydDFdICsgaW5JbWFnZURhdGFbeVN0YXJ0MSAqIHdpZHRoICsgeFN0YXJ0Ml0gK1xuICAgICAgICAgICAgaW5JbWFnZURhdGFbdiAqIHdpZHRoICsgdV0gK1xuICAgICAgICAgICAgaW5JbWFnZURhdGFbeVN0YXJ0MiAqIHdpZHRoICsgeFN0YXJ0MV0gKyBpbkltYWdlRGF0YVt5U3RhcnQyICogd2lkdGggKyB4U3RhcnQyXTtcbiAgICAgICAgICAgIG91dEltYWdlRGF0YVt2ICogd2lkdGggKyB1XSA9IHN1bSA9PT0gNSA/IDEgOiAwO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KGFJbWFnZVdyYXBwZXIsIGJJbWFnZVdyYXBwZXIsIHJlc3VsdEltYWdlV3JhcHBlcikge1xuICAgIGlmICghcmVzdWx0SW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIHJlc3VsdEltYWdlV3JhcHBlciA9IGFJbWFnZVdyYXBwZXI7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBhSW1hZ2VXcmFwcGVyLmRhdGEubGVuZ3RoLFxuICAgICAgICBhSW1hZ2VEYXRhID0gYUltYWdlV3JhcHBlci5kYXRhLFxuICAgICAgICBiSW1hZ2VEYXRhID0gYkltYWdlV3JhcHBlci5kYXRhLFxuICAgICAgICBjSW1hZ2VEYXRhID0gcmVzdWx0SW1hZ2VXcmFwcGVyLmRhdGE7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgY0ltYWdlRGF0YVtsZW5ndGhdID0gYUltYWdlRGF0YVtsZW5ndGhdIC0gYkltYWdlRGF0YVtsZW5ndGhdO1xuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBiaXR3aXNlT3IoYUltYWdlV3JhcHBlciwgYkltYWdlV3JhcHBlciwgcmVzdWx0SW1hZ2VXcmFwcGVyKSB7XG4gICAgaWYgKCFyZXN1bHRJbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgcmVzdWx0SW1hZ2VXcmFwcGVyID0gYUltYWdlV3JhcHBlcjtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IGFJbWFnZVdyYXBwZXIuZGF0YS5sZW5ndGgsXG4gICAgICAgIGFJbWFnZURhdGEgPSBhSW1hZ2VXcmFwcGVyLmRhdGEsXG4gICAgICAgIGJJbWFnZURhdGEgPSBiSW1hZ2VXcmFwcGVyLmRhdGEsXG4gICAgICAgIGNJbWFnZURhdGEgPSByZXN1bHRJbWFnZVdyYXBwZXIuZGF0YTtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBjSW1hZ2VEYXRhW2xlbmd0aF0gPSBhSW1hZ2VEYXRhW2xlbmd0aF0gfHwgYkltYWdlRGF0YVtsZW5ndGhdO1xuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudE5vblplcm8oaW1hZ2VXcmFwcGVyKSB7XG4gICAgdmFyIGxlbmd0aCA9IGltYWdlV3JhcHBlci5kYXRhLmxlbmd0aCwgZGF0YSA9IGltYWdlV3JhcHBlci5kYXRhLCBzdW0gPSAwO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIHN1bSArPSBkYXRhW2xlbmd0aF07XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9wR2VuZXJpYyhsaXN0LCB0b3AsIHNjb3JlRnVuYykge1xuICAgIHZhciBpLCBtaW5JZHggPSAwLCBtaW4gPSAwLCBxdWV1ZSA9IFtdLCBzY29yZSwgaGl0LCBwb3M7XG5cbiAgICBmb3IgKCBpID0gMDsgaSA8IHRvcDsgaSsrKSB7XG4gICAgICAgIHF1ZXVlW2ldID0ge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBpdGVtOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICggaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNjb3JlID0gc2NvcmVGdW5jLmFwcGx5KHRoaXMsIFtsaXN0W2ldXSk7XG4gICAgICAgIGlmIChzY29yZSA+IG1pbikge1xuICAgICAgICAgICAgaGl0ID0gcXVldWVbbWluSWR4XTtcbiAgICAgICAgICAgIGhpdC5zY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgaGl0Lml0ZW0gPSBsaXN0W2ldO1xuICAgICAgICAgICAgbWluID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIGZvciAoIHBvcyA9IDA7IHBvcyA8IHRvcDsgcG9zKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocXVldWVbcG9zXS5zY29yZSA8IG1pbikge1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBxdWV1ZVtwb3NdLnNjb3JlO1xuICAgICAgICAgICAgICAgICAgICBtaW5JZHggPSBwb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdyYXlBcnJheUZyb21JbWFnZShodG1sSW1hZ2UsIG9mZnNldFgsIGN0eCwgYXJyYXkpIHtcbiAgICBjdHguZHJhd0ltYWdlKGh0bWxJbWFnZSwgb2Zmc2V0WCwgMCwgaHRtbEltYWdlLndpZHRoLCBodG1sSW1hZ2UuaGVpZ2h0KTtcbiAgICB2YXIgY3R4RGF0YSA9IGN0eC5nZXRJbWFnZURhdGEob2Zmc2V0WCwgMCwgaHRtbEltYWdlLndpZHRoLCBodG1sSW1hZ2UuaGVpZ2h0KS5kYXRhO1xuICAgIGNvbXB1dGVHcmF5KGN0eERhdGEsIGFycmF5KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBncmF5QXJyYXlGcm9tQ29udGV4dChjdHgsIHNpemUsIG9mZnNldCwgYXJyYXkpIHtcbiAgICB2YXIgY3R4RGF0YSA9IGN0eC5nZXRJbWFnZURhdGEob2Zmc2V0LngsIG9mZnNldC55LCBzaXplLngsIHNpemUueSkuZGF0YTtcbiAgICBjb21wdXRlR3JheShjdHhEYXRhLCBhcnJheSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YShjYW52YXNEYXRhLCBzaXplLCBvdXRBcnJheSkge1xuICAgIHZhciB0b3BSb3dJZHggPSAwO1xuICAgIHZhciBib3R0b21Sb3dJZHggPSBzaXplLng7XG4gICAgdmFyIGVuZElkeCA9IE1hdGguZmxvb3IoY2FudmFzRGF0YS5sZW5ndGggLyA0KTtcbiAgICB2YXIgb3V0V2lkdGggPSBzaXplLnggLyAyO1xuICAgIHZhciBvdXRJbWdJZHggPSAwO1xuICAgIHZhciBpbldpZHRoID0gc2l6ZS54O1xuICAgIHZhciBpO1xuXG4gICAgd2hpbGUgKGJvdHRvbVJvd0lkeCA8IGVuZElkeCkge1xuICAgICAgICBmb3IgKCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIG91dEFycmF5W291dEltZ0lkeF0gPSBNYXRoLmZsb29yKChcbiAgICAgICAgICAgICAgICAoMC4yOTkgKiBjYW52YXNEYXRhW3RvcFJvd0lkeCAqIDQgKyAwXSArXG4gICAgICAgICAgICAgICAgIDAuNTg3ICogY2FudmFzRGF0YVt0b3BSb3dJZHggKiA0ICsgMV0gK1xuICAgICAgICAgICAgICAgICAwLjExNCAqIGNhbnZhc0RhdGFbdG9wUm93SWR4ICogNCArIDJdKSArXG4gICAgICAgICAgICAgICAgKDAuMjk5ICogY2FudmFzRGF0YVsodG9wUm93SWR4ICsgMSkgKiA0ICsgMF0gK1xuICAgICAgICAgICAgICAgICAwLjU4NyAqIGNhbnZhc0RhdGFbKHRvcFJvd0lkeCArIDEpICogNCArIDFdICtcbiAgICAgICAgICAgICAgICAgMC4xMTQgKiBjYW52YXNEYXRhWyh0b3BSb3dJZHggKyAxKSAqIDQgKyAyXSkgK1xuICAgICAgICAgICAgICAgICgwLjI5OSAqIGNhbnZhc0RhdGFbKGJvdHRvbVJvd0lkeCkgKiA0ICsgMF0gK1xuICAgICAgICAgICAgICAgICAwLjU4NyAqIGNhbnZhc0RhdGFbKGJvdHRvbVJvd0lkeCkgKiA0ICsgMV0gK1xuICAgICAgICAgICAgICAgICAwLjExNCAqIGNhbnZhc0RhdGFbKGJvdHRvbVJvd0lkeCkgKiA0ICsgMl0pICtcbiAgICAgICAgICAgICAgICAoMC4yOTkgKiBjYW52YXNEYXRhWyhib3R0b21Sb3dJZHggKyAxKSAqIDQgKyAwXSArXG4gICAgICAgICAgICAgICAgIDAuNTg3ICogY2FudmFzRGF0YVsoYm90dG9tUm93SWR4ICsgMSkgKiA0ICsgMV0gK1xuICAgICAgICAgICAgICAgICAwLjExNCAqIGNhbnZhc0RhdGFbKGJvdHRvbVJvd0lkeCArIDEpICogNCArIDJdKSkgLyA0KTtcbiAgICAgICAgICAgIG91dEltZ0lkeCsrO1xuICAgICAgICAgICAgdG9wUm93SWR4ID0gdG9wUm93SWR4ICsgMjtcbiAgICAgICAgICAgIGJvdHRvbVJvd0lkeCA9IGJvdHRvbVJvd0lkeCArIDI7XG4gICAgICAgIH1cbiAgICAgICAgdG9wUm93SWR4ID0gdG9wUm93SWR4ICsgaW5XaWR0aDtcbiAgICAgICAgYm90dG9tUm93SWR4ID0gYm90dG9tUm93SWR4ICsgaW5XaWR0aDtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUdyYXkoaW1hZ2VEYXRhLCBvdXRBcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIGwgPSAoaW1hZ2VEYXRhLmxlbmd0aCAvIDQpIHwgMCxcbiAgICAgICAgaSxcbiAgICAgICAgc2luZ2xlQ2hhbm5lbCA9IGNvbmZpZyAmJiBjb25maWcuc2luZ2xlQ2hhbm5lbCA9PT0gdHJ1ZTtcblxuICAgIGlmIChzaW5nbGVDaGFubmVsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG91dEFycmF5W2ldID0gaW1hZ2VEYXRhW2kgKiA0ICsgMF07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBvdXRBcnJheVtpXSA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgMC4yOTkgKiBpbWFnZURhdGFbaSAqIDQgKyAwXSArIDAuNTg3ICogaW1hZ2VEYXRhW2kgKiA0ICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVtpICogNCArIDJdKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2VBcnJheShzcmMsIGNhbGxiYWNrLCBjYW52YXMpIHtcbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB9XG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgMCwgMCk7XG4gICAgICAgIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgMCwgMCk7XG4gICAgICAgIHZhciBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkuZGF0YTtcbiAgICAgICAgY29tcHV0ZUdyYXkoZGF0YSwgYXJyYXkpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrKGFycmF5LCB7XG4gICAgICAgICAgICB4OiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgeTogdGhpcy5oZWlnaHRcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gc3JjO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gaW5JbWcge0ltYWdlV3JhcHBlcn0gaW5wdXQgaW1hZ2UgdG8gYmUgc2FtcGxlZFxuICogQHBhcmFtIG91dEltZyB7SW1hZ2VXcmFwcGVyfSB0byBiZSBzdG9yZWQgaW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbGZTYW1wbGUoaW5JbWdXcmFwcGVyLCBvdXRJbWdXcmFwcGVyKSB7XG4gICAgdmFyIGluSW1nID0gaW5JbWdXcmFwcGVyLmRhdGE7XG4gICAgdmFyIGluV2lkdGggPSBpbkltZ1dyYXBwZXIuc2l6ZS54O1xuICAgIHZhciBvdXRJbWcgPSBvdXRJbWdXcmFwcGVyLmRhdGE7XG4gICAgdmFyIHRvcFJvd0lkeCA9IDA7XG4gICAgdmFyIGJvdHRvbVJvd0lkeCA9IGluV2lkdGg7XG4gICAgdmFyIGVuZElkeCA9IGluSW1nLmxlbmd0aDtcbiAgICB2YXIgb3V0V2lkdGggPSBpbldpZHRoIC8gMjtcbiAgICB2YXIgb3V0SW1nSWR4ID0gMDtcbiAgICB3aGlsZSAoYm90dG9tUm93SWR4IDwgZW5kSWR4KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0V2lkdGg7IGkrKykge1xuICAgICAgICAgICAgb3V0SW1nW291dEltZ0lkeF0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIChpbkltZ1t0b3BSb3dJZHhdICsgaW5JbWdbdG9wUm93SWR4ICsgMV0gKyBpbkltZ1tib3R0b21Sb3dJZHhdICsgaW5JbWdbYm90dG9tUm93SWR4ICsgMV0pIC8gNCk7XG4gICAgICAgICAgICBvdXRJbWdJZHgrKztcbiAgICAgICAgICAgIHRvcFJvd0lkeCA9IHRvcFJvd0lkeCArIDI7XG4gICAgICAgICAgICBib3R0b21Sb3dJZHggPSBib3R0b21Sb3dJZHggKyAyO1xuICAgICAgICB9XG4gICAgICAgIHRvcFJvd0lkeCA9IHRvcFJvd0lkeCArIGluV2lkdGg7XG4gICAgICAgIGJvdHRvbVJvd0lkeCA9IGJvdHRvbVJvd0lkeCArIGluV2lkdGg7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhzdjJyZ2IoaHN2LCByZ2IpIHtcbiAgICB2YXIgaCA9IGhzdlswXSxcbiAgICAgICAgcyA9IGhzdlsxXSxcbiAgICAgICAgdiA9IGhzdlsyXSxcbiAgICAgICAgYyA9IHYgKiBzLFxuICAgICAgICB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggLyA2MCkgJSAyIC0gMSkpLFxuICAgICAgICBtID0gdiAtIGMsXG4gICAgICAgIHIgPSAwLFxuICAgICAgICBnID0gMCxcbiAgICAgICAgYiA9IDA7XG5cbiAgICByZ2IgPSByZ2IgfHwgWzAsIDAsIDBdO1xuXG4gICAgaWYgKGggPCA2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgZyA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMTIwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAxODApIHtcbiAgICAgICAgZyA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH0gZWxzZSBpZiAoaCA8IDI0MCkge1xuICAgICAgICBnID0geDtcbiAgICAgICAgYiA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMzAwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH1cbiAgICByZ2JbMF0gPSAoKHIgKyBtKSAqIDI1NSkgfCAwO1xuICAgIHJnYlsxXSA9ICgoZyArIG0pICogMjU1KSB8IDA7XG4gICAgcmdiWzJdID0gKChiICsgbSkgKiAyNTUpIHwgMDtcbiAgICByZXR1cm4gcmdiO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9jb21wdXRlRGl2aXNvcnMobikge1xuICAgIHZhciBsYXJnZURpdmlzb3JzID0gW10sXG4gICAgICAgIGRpdmlzb3JzID0gW10sXG4gICAgICAgIGk7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgTWF0aC5zcXJ0KG4pICsgMTsgaSsrKSB7XG4gICAgICAgIGlmIChuICUgaSA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChpKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBuIC8gaSkge1xuICAgICAgICAgICAgICAgIGxhcmdlRGl2aXNvcnMudW5zaGlmdChNYXRoLmZsb29yKG4gLyBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpdmlzb3JzLmNvbmNhdChsYXJnZURpdmlzb3JzKTtcbn07XG5cbmZ1bmN0aW9uIF9jb21wdXRlSW50ZXJzZWN0aW9uKGFycjEsIGFycjIpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGogPSAwLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhcnIxW2ldID09PSBhcnIyW2pdKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChhcnIxW2ldKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfSBlbHNlIGlmIChhcnIxW2ldID4gYXJyMltqXSkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGF0Y2hTaXplKHBhdGNoU2l6ZSwgaW1nU2l6ZSkge1xuICAgIHZhciBkaXZpc29yc1ggPSBfY29tcHV0ZURpdmlzb3JzKGltZ1NpemUueCksXG4gICAgICAgIGRpdmlzb3JzWSA9IF9jb21wdXRlRGl2aXNvcnMoaW1nU2l6ZS55KSxcbiAgICAgICAgd2lkZVNpZGUgPSBNYXRoLm1heChpbWdTaXplLngsIGltZ1NpemUueSksXG4gICAgICAgIGNvbW1vbiA9IF9jb21wdXRlSW50ZXJzZWN0aW9uKGRpdmlzb3JzWCwgZGl2aXNvcnNZKSxcbiAgICAgICAgbnJPZlBhdGNoZXNMaXN0ID0gWzgsIDEwLCAxNSwgMjAsIDMyLCA2MCwgODBdLFxuICAgICAgICBuck9mUGF0Y2hlc01hcCA9IHtcbiAgICAgICAgICAgIFwieC1zbWFsbFwiOiA1LFxuICAgICAgICAgICAgXCJzbWFsbFwiOiA0LFxuICAgICAgICAgICAgXCJtZWRpdW1cIjogMyxcbiAgICAgICAgICAgIFwibGFyZ2VcIjogMixcbiAgICAgICAgICAgIFwieC1sYXJnZVwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIG5yT2ZQYXRjaGVzSWR4ID0gbnJPZlBhdGNoZXNNYXBbcGF0Y2hTaXplXSB8fCBuck9mUGF0Y2hlc01hcC5tZWRpdW0sXG4gICAgICAgIG5yT2ZQYXRjaGVzID0gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSWR4XSxcbiAgICAgICAgZGVzaXJlZFBhdGNoU2l6ZSA9IE1hdGguZmxvb3Iod2lkZVNpZGUgLyBuck9mUGF0Y2hlcyksXG4gICAgICAgIG9wdGltYWxQYXRjaFNpemU7XG5cbiAgICBmdW5jdGlvbiBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoZGl2aXNvcnMpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tNYXRoLmZsb29yKGRpdmlzb3JzLmxlbmd0aCAvIDIpXTtcblxuICAgICAgICB3aGlsZSAoaSA8IChkaXZpc29ycy5sZW5ndGggLSAxKSAmJiBkaXZpc29yc1tpXSA8IGRlc2lyZWRQYXRjaFNpemUpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXZpc29yc1tpXSAtIGRlc2lyZWRQYXRjaFNpemUpID4gTWF0aC5hYnMoZGl2aXNvcnNbaSAtIDFdIC0gZGVzaXJlZFBhdGNoU2l6ZSkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2kgLSAxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kIDwgbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSWR4ICsgMV0gLyBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJZHhdICYmXG4gICAgICAgICAgICBkZXNpcmVkUGF0Y2hTaXplIC8gZm91bmQgPiBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJZHggLSAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0lkeF0gKSB7XG4gICAgICAgICAgICByZXR1cm4ge3g6IGZvdW5kLCB5OiBmb3VuZH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb3B0aW1hbFBhdGNoU2l6ZSA9IGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhjb21tb24pO1xuICAgIGlmICghb3B0aW1hbFBhdGNoU2l6ZSkge1xuICAgICAgICBvcHRpbWFsUGF0Y2hTaXplID0gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlRGl2aXNvcnMod2lkZVNpZGUpKTtcbiAgICAgICAgaWYgKCFvcHRpbWFsUGF0Y2hTaXplKSB7XG4gICAgICAgICAgICBvcHRpbWFsUGF0Y2hTaXplID0gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKChfY29tcHV0ZURpdmlzb3JzKGRlc2lyZWRQYXRjaFNpemUgKiBuck9mUGF0Y2hlcykpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW1hbFBhdGNoU2l6ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfcGFyc2VDU1NEaW1lbnNpb25WYWx1ZXModmFsdWUpIHtcbiAgICB2YXIgZGltZW5zaW9uID0ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZSksXG4gICAgICAgIHVuaXQ6IHZhbHVlLmluZGV4T2YoXCIlXCIpID09PSB2YWx1ZS5sZW5ndGggLSAxID8gXCIlXCIgOiBcIiVcIlxuICAgIH07XG5cbiAgICByZXR1cm4gZGltZW5zaW9uO1xufTtcblxuZXhwb3J0IGNvbnN0IF9kaW1lbnNpb25zQ29udmVydGVycyA9IHtcbiAgICB0b3A6IGZ1bmN0aW9uKGRpbWVuc2lvbiwgY29udGV4dCkge1xuICAgICAgICBpZiAoZGltZW5zaW9uLnVuaXQgPT09IFwiJVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjb250ZXh0LmhlaWdodCAqIChkaW1lbnNpb24udmFsdWUgLyAxMDApKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmlnaHQ6IGZ1bmN0aW9uKGRpbWVuc2lvbiwgY29udGV4dCkge1xuICAgICAgICBpZiAoZGltZW5zaW9uLnVuaXQgPT09IFwiJVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjb250ZXh0LndpZHRoIC0gKGNvbnRleHQud2lkdGggKiAoZGltZW5zaW9uLnZhbHVlIC8gMTAwKSkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBib3R0b206IGZ1bmN0aW9uKGRpbWVuc2lvbiwgY29udGV4dCkge1xuICAgICAgICBpZiAoZGltZW5zaW9uLnVuaXQgPT09IFwiJVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjb250ZXh0LmhlaWdodCAtIChjb250ZXh0LmhlaWdodCAqIChkaW1lbnNpb24udmFsdWUgLyAxMDApKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxlZnQ6IGZ1bmN0aW9uKGRpbWVuc2lvbiwgY29udGV4dCkge1xuICAgICAgICBpZiAoZGltZW5zaW9uLnVuaXQgPT09IFwiJVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjb250ZXh0LndpZHRoICogKGRpbWVuc2lvbi52YWx1ZSAvIDEwMCkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVJbWFnZUFyZWEoaW5wdXRXaWR0aCwgaW5wdXRIZWlnaHQsIGFyZWEpIHtcbiAgICB2YXIgY29udGV4dCA9IHt3aWR0aDogaW5wdXRXaWR0aCwgaGVpZ2h0OiBpbnB1dEhlaWdodH07XG5cbiAgICB2YXIgcGFyc2VkQXJlYSA9IE9iamVjdC5rZXlzKGFyZWEpLnJlZHVjZShmdW5jdGlvbihyZXN1bHQsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBhcmVhW2tleV0sXG4gICAgICAgICAgICBwYXJzZWQgPSBfcGFyc2VDU1NEaW1lbnNpb25WYWx1ZXModmFsdWUpLFxuICAgICAgICAgICAgY2FsY3VsYXRlZCA9IF9kaW1lbnNpb25zQ29udmVydGVyc1trZXldKHBhcnNlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmVzdWx0W2tleV0gPSBjYWxjdWxhdGVkO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN4OiBwYXJzZWRBcmVhLmxlZnQsXG4gICAgICAgIHN5OiBwYXJzZWRBcmVhLnRvcCxcbiAgICAgICAgc3c6IHBhcnNlZEFyZWEucmlnaHQgLSBwYXJzZWRBcmVhLmxlZnQsXG4gICAgICAgIHNoOiBwYXJzZWRBcmVhLmJvdHRvbSAtIHBhcnNlZEFyZWEudG9wXG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2N2X3V0aWxzLmpzIiwiaW1wb3J0IFN1YkltYWdlIGZyb20gJy4vc3ViSW1hZ2UnO1xuaW1wb3J0IHtoc3YycmdifSBmcm9tICcuLi9jb21tb24vY3ZfdXRpbHMnO1xuaW1wb3J0IEFycmF5SGVscGVyIGZyb20gJy4uL2NvbW1vbi9hcnJheV9oZWxwZXInO1xuY29uc3QgdmVjMiA9IHtcbiAgICBjbG9uZTogcmVxdWlyZSgnZ2wtdmVjMi9jbG9uZScpLFxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgYmFzaWMgaW1hZ2UgY29tYmluaW5nIHRoZSBkYXRhIGFuZCBzaXplLlxuICogSW4gYWRkaXRpb24sIHNvbWUgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW9uIGFyZSBjb250YWluZWQuXG4gKiBAcGFyYW0gc2l6ZSB7eCx5fSBUaGUgc2l6ZSBvZiB0aGUgaW1hZ2UgaW4gcGl4ZWxcbiAqIEBwYXJhbSBkYXRhIHtBcnJheX0gSWYgZ2l2ZW4sIGEgZmxhdCBhcnJheSBjb250YWluaW5nIHRoZSBwaXhlbCBkYXRhXG4gKiBAcGFyYW0gQXJyYXlUeXBlIHtUeXBlfSBJZiBnaXZlbiwgdGhlIGRlc2lyZWQgRGF0YVR5cGUgb2YgdGhlIEFycmF5IChtYXkgYmUgdHlwZWQvbm9uLXR5cGVkKVxuICogQHBhcmFtIGluaXRpYWxpemUge0Jvb2xlYW59IEluZGljYXRpbmcgaWYgdGhlIGFycmF5IHNob3VsZCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvbi5cbiAqIEByZXR1cm5zIHtJbWFnZVdyYXBwZXJ9XG4gKi9cbmZ1bmN0aW9uIEltYWdlV3JhcHBlcihzaXplLCBkYXRhLCBBcnJheVR5cGUsIGluaXRpYWxpemUpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgaWYgKEFycmF5VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5VHlwZShzaXplLnggKiBzaXplLnkpO1xuICAgICAgICAgICAgaWYgKEFycmF5VHlwZSA9PT0gQXJyYXkgJiYgaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIEFycmF5SGVscGVyLmluaXQodGhpcy5kYXRhLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KHNpemUueCAqIHNpemUueSk7XG4gICAgICAgICAgICBpZiAoVWludDhBcnJheSA9PT0gQXJyYXkgJiYgaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIEFycmF5SGVscGVyLmluaXQodGhpcy5kYXRhLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG59XG5cbi8qKlxuICogdGVzdHMgaWYgYSBwb3NpdGlvbiBpcyB3aXRoaW4gdGhlIGltYWdlIHdpdGggYSBnaXZlbiBvZmZzZXRcbiAqIEBwYXJhbSBpbWdSZWYge3gsIHl9IFRoZSBsb2NhdGlvbiB0byB0ZXN0XG4gKiBAcGFyYW0gYm9yZGVyIE51bWJlciB0aGUgcGFkZGluZyB2YWx1ZSBpbiBwaXhlbFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgbG9jYXRpb24gaW5zaWRlIHRoZSBpbWFnZSdzIGJvcmRlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAc2VlIGN2ZC9pbWFnZS5oXG4gKi9cbkltYWdlV3JhcHBlci5wcm90b3R5cGUuaW5JbWFnZVdpdGhCb3JkZXIgPSBmdW5jdGlvbihpbWdSZWYsIGJvcmRlcikge1xuICAgIHJldHVybiAoaW1nUmVmLnggPj0gYm9yZGVyKVxuICAgICAgICAmJiAoaW1nUmVmLnkgPj0gYm9yZGVyKVxuICAgICAgICAmJiAoaW1nUmVmLnggPCAodGhpcy5zaXplLnggLSBib3JkZXIpKVxuICAgICAgICAmJiAoaW1nUmVmLnkgPCAodGhpcy5zaXplLnkgLSBib3JkZXIpKTtcbn07XG5cbi8qKlxuICogUGVyZm9ybXMgYmlsaW5lYXIgc2FtcGxpbmdcbiAqIEBwYXJhbSBpbkltZyBJbWFnZSB0byBleHRyYWN0IHNhbXBsZSBmcm9tXG4gKiBAcGFyYW0geCB0aGUgeC1jb29yZGluYXRlXG4gKiBAcGFyYW0geSB0aGUgeS1jb29yZGluYXRlXG4gKiBAcmV0dXJucyB0aGUgc2FtcGxlZCB2YWx1ZVxuICogQHNlZSBjdmQvdmlzaW9uLmhcbiAqL1xuSW1hZ2VXcmFwcGVyLnNhbXBsZSA9IGZ1bmN0aW9uKGluSW1nLCB4LCB5KSB7XG4gICAgdmFyIGx4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB2YXIgbHkgPSBNYXRoLmZsb29yKHkpO1xuICAgIHZhciB3ID0gaW5JbWcuc2l6ZS54O1xuICAgIHZhciBiYXNlID0gbHkgKiBpbkltZy5zaXplLnggKyBseDtcbiAgICB2YXIgYSA9IGluSW1nLmRhdGFbYmFzZSArIDBdO1xuICAgIHZhciBiID0gaW5JbWcuZGF0YVtiYXNlICsgMV07XG4gICAgdmFyIGMgPSBpbkltZy5kYXRhW2Jhc2UgKyB3XTtcbiAgICB2YXIgZCA9IGluSW1nLmRhdGFbYmFzZSArIHcgKyAxXTtcbiAgICB2YXIgZSA9IGEgLSBiO1xuICAgIHggLT0gbHg7XG4gICAgeSAtPSBseTtcblxuICAgIHZhciByZXN1bHQgPSBNYXRoLmZsb29yKHggKiAoeSAqIChlIC0gYyArIGQpIC0gZSkgKyB5ICogKGMgLSBhKSArIGEpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGEgZ2l2ZW4gYXJyYXkuIFNldHMgZWFjaCBlbGVtZW50IHRvIHplcm8uXG4gKiBAcGFyYW0gYXJyYXkge0FycmF5fSBUaGUgYXJyYXkgdG8gaW5pdGlhbGl6ZVxuICovXG5JbWFnZVdyYXBwZXIuY2xlYXJBcnJheSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIGwgPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgICBhcnJheVtsXSA9IDA7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEge1N1YkltYWdlfSBmcm9tIHRoZSBjdXJyZW50IGltYWdlICh7dGhpc30pLlxuICogQHBhcmFtIGZyb20ge0ltYWdlUmVmfSBUaGUgcG9zaXRpb24gd2hlcmUgdG8gc3RhcnQgdGhlIHtTdWJJbWFnZX0gZnJvbS4gKHRvcC1sZWZ0IGNvcm5lcilcbiAqIEBwYXJhbSBzaXplIHtJbWFnZVJlZn0gVGhlIHNpemUgb2YgdGhlIHJlc3VsdGluZyBpbWFnZVxuICogQHJldHVybnMge1N1YkltYWdlfSBBIHNoYXJlZCBwYXJ0IG9mIHRoZSBvcmlnaW5hbCBpbWFnZVxuICovXG5JbWFnZVdyYXBwZXIucHJvdG90eXBlLnN1YkltYWdlID0gZnVuY3Rpb24oZnJvbSwgc2l6ZSkge1xuICAgIHJldHVybiBuZXcgU3ViSW1hZ2UoZnJvbSwgc2l6ZSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4ge0ltYWdlV3JhcHBlcikgYW5kIGNvcGllcyB0aGUgbmVlZGVkIHVuZGVybHlpbmcgaW1hZ2UtZGF0YSBhcmVhXG4gKiBAcGFyYW0gaW1hZ2VXcmFwcGVyIHtJbWFnZVdyYXBwZXJ9IFRoZSB0YXJnZXQge0ltYWdlV3JhcHBlcn0gd2hlcmUgdGhlIGRhdGEgc2hvdWxkIGJlIGNvcGllZFxuICogQHBhcmFtIGZyb20ge0ltYWdlUmVmfSBUaGUgbG9jYXRpb24gd2hlcmUgdG8gY29weSBmcm9tICh0b3AtbGVmdCBsb2NhdGlvbilcbiAqL1xuSW1hZ2VXcmFwcGVyLnByb3RvdHlwZS5zdWJJbWFnZUFzQ29weSA9IGZ1bmN0aW9uKGltYWdlV3JhcHBlciwgZnJvbSkge1xuICAgIHZhciBzaXplWSA9IGltYWdlV3JhcHBlci5zaXplLnksIHNpemVYID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICB2YXIgeCwgeTtcbiAgICBmb3IgKCB4ID0gMDsgeCA8IHNpemVYOyB4KyspIHtcbiAgICAgICAgZm9yICggeSA9IDA7IHkgPCBzaXplWTsgeSsrKSB7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIuZGF0YVt5ICogc2l6ZVggKyB4XSA9IHRoaXMuZGF0YVsoZnJvbS55ICsgeSkgKiB0aGlzLnNpemUueCArIGZyb20ueCArIHhdO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuSW1hZ2VXcmFwcGVyLnByb3RvdHlwZS5jb3B5VG8gPSBmdW5jdGlvbihpbWFnZVdyYXBwZXIpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aCwgc3JjRGF0YSA9IHRoaXMuZGF0YSwgZHN0RGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGRzdERhdGFbbGVuZ3RoXSA9IHNyY0RhdGFbbGVuZ3RoXTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGZyb20gdGhlIGltYWdlXG4gKiBAcGFyYW0geCB7TnVtYmVyfSBUaGUgeC1wb3NpdGlvblxuICogQHBhcmFtIHkge051bWJlcn0gVGhlIHktcG9zaXRpb25cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBncmF5c2NhbGUgdmFsdWUgYXQgdGhlIHBpeGVsLXBvc2l0aW9uXG4gKi9cbkltYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF07XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGZyb20gdGhlIGltYWdlXG4gKiBAcGFyYW0geCB7TnVtYmVyfSBUaGUgeC1wb3NpdGlvblxuICogQHBhcmFtIHkge051bWJlcn0gVGhlIHktcG9zaXRpb25cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBncmF5c2NhbGUgdmFsdWUgYXQgdGhlIHBpeGVsLXBvc2l0aW9uXG4gKi9cbkltYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0U2FmZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgaTtcblxuICAgIGlmICghdGhpcy5pbmRleE1hcHBpbmcpIHtcbiAgICAgICAgdGhpcy5pbmRleE1hcHBpbmcgPSB7XG4gICAgICAgICAgICB4OiBbXSxcbiAgICAgICAgICAgIHk6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNpemUueDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4TWFwcGluZy54W2ldID0gaTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhNYXBwaW5nLnhbaSArIHRoaXMuc2l6ZS54XSA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2l6ZS55OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhNYXBwaW5nLnlbaV0gPSBpO1xuICAgICAgICAgICAgdGhpcy5pbmRleE1hcHBpbmcueVtpICsgdGhpcy5zaXplLnldID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXRhWyh0aGlzLmluZGV4TWFwcGluZy55W3kgKyB0aGlzLnNpemUueV0pICogdGhpcy5zaXplLnggKyB0aGlzLmluZGV4TWFwcGluZy54W3ggKyB0aGlzLnNpemUueF1dO1xufTtcblxuLyoqXG4gKiBTZXRzIGEgZ2l2ZW4gcGl4ZWwgcG9zaXRpb24gaW4gdGhlIGltYWdlXG4gKiBAcGFyYW0geCB7TnVtYmVyfSBUaGUgeC1wb3NpdGlvblxuICogQHBhcmFtIHkge051bWJlcn0gVGhlIHktcG9zaXRpb25cbiAqIEBwYXJhbSB2YWx1ZSB7TnVtYmVyfSBUaGUgZ3JheXNjYWxlIHZhbHVlIHRvIHNldFxuICogQHJldHVybnMge0ltYWdlV3JhcHBlcn0gVGhlIEltYWdlIGl0c2VsZiAoZm9yIHBvc3NpYmxlIGNoYWluaW5nKVxuICovXG5JbWFnZVdyYXBwZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHgsIHksIHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhW3kgKiB0aGlzLnNpemUueCArIHhdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGJvcmRlciBvZiB0aGUgaW1hZ2UgKDEgcGl4ZWwpIHRvIHplcm9cbiAqL1xuSW1hZ2VXcmFwcGVyLnByb3RvdHlwZS56ZXJvQm9yZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIHdpZHRoID0gdGhpcy5zaXplLngsIGhlaWdodCA9IHRoaXMuc2l6ZS55LCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGZvciAoIGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICBkYXRhW2ldID0gZGF0YVsoaGVpZ2h0IC0gMSkgKiB3aWR0aCArIGldID0gMDtcbiAgICB9XG4gICAgZm9yICggaSA9IDE7IGkgPCBoZWlnaHQgLSAxOyBpKyspIHtcbiAgICAgICAgZGF0YVtpICogd2lkdGhdID0gZGF0YVtpICogd2lkdGggKyAod2lkdGggLSAxKV0gPSAwO1xuICAgIH1cbn07XG5cbi8qKlxuICogSW52ZXJ0cyBhIGJpbmFyeSBpbWFnZSBpbiBwbGFjZVxuICovXG5JbWFnZVdyYXBwZXIucHJvdG90eXBlLmludmVydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhLCBsZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBkYXRhW2xlbmd0aF0gPSBkYXRhW2xlbmd0aF0gPyAwIDogMTtcbiAgICB9XG59O1xuXG5JbWFnZVdyYXBwZXIucHJvdG90eXBlLmNvbnZvbHZlID0gZnVuY3Rpb24oa2VybmVsKSB7XG4gICAgdmFyIHgsIHksIGt4LCBreSwga1NpemUgPSAoa2VybmVsLmxlbmd0aCAvIDIpIHwgMCwgYWNjdSA9IDA7XG4gICAgZm9yICggeSA9IDA7IHkgPCB0aGlzLnNpemUueTsgeSsrKSB7XG4gICAgICAgIGZvciAoIHggPSAwOyB4IDwgdGhpcy5zaXplLng7IHgrKykge1xuICAgICAgICAgICAgYWNjdSA9IDA7XG4gICAgICAgICAgICBmb3IgKCBreSA9IC1rU2l6ZTsga3kgPD0ga1NpemU7IGt5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKCBreCA9IC1rU2l6ZTsga3ggPD0ga1NpemU7IGt4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjdSArPSBrZXJuZWxba3kgKyBrU2l6ZV1ba3ggKyBrU2l6ZV0gKiB0aGlzLmdldFNhZmUoeCArIGt4LCB5ICsga3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVt5ICogdGhpcy5zaXplLnggKyB4XSA9IGFjY3U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5JbWFnZVdyYXBwZXIucHJvdG90eXBlLm1vbWVudHMgPSBmdW5jdGlvbihsYWJlbGNvdW50KSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLmRhdGEsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuc2l6ZS55LFxuICAgICAgICB3aWR0aCA9IHRoaXMuc2l6ZS54LFxuICAgICAgICB2YWwsXG4gICAgICAgIHlzcSxcbiAgICAgICAgbGFiZWxzdW0gPSBbXSxcbiAgICAgICAgaSxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIG11MTEsXG4gICAgICAgIG11MDIsXG4gICAgICAgIG11MjAsXG4gICAgICAgIHhfLFxuICAgICAgICB5XyxcbiAgICAgICAgdG1wLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgUEkgPSBNYXRoLlBJLFxuICAgICAgICBQSV80ID0gUEkgLyA0O1xuXG4gICAgaWYgKGxhYmVsY291bnQgPD0gMCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZvciAoIGkgPSAwOyBpIDwgbGFiZWxjb3VudDsgaSsrKSB7XG4gICAgICAgIGxhYmVsc3VtW2ldID0ge1xuICAgICAgICAgICAgbTAwOiAwLFxuICAgICAgICAgICAgbTAxOiAwLFxuICAgICAgICAgICAgbTEwOiAwLFxuICAgICAgICAgICAgbTExOiAwLFxuICAgICAgICAgICAgbTAyOiAwLFxuICAgICAgICAgICAgbTIwOiAwLFxuICAgICAgICAgICAgdGhldGE6IDAsXG4gICAgICAgICAgICByYWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgIHlzcSA9IHkgKiB5O1xuICAgICAgICBmb3IgKCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIHZhbCA9IGRhdGFbeSAqIHdpZHRoICsgeF07XG4gICAgICAgICAgICBpZiAodmFsID4gMCkge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWxzdW1bdmFsIC0gMV07XG4gICAgICAgICAgICAgICAgbGFiZWwubTAwICs9IDE7XG4gICAgICAgICAgICAgICAgbGFiZWwubTAxICs9IHk7XG4gICAgICAgICAgICAgICAgbGFiZWwubTEwICs9IHg7XG4gICAgICAgICAgICAgICAgbGFiZWwubTExICs9IHggKiB5O1xuICAgICAgICAgICAgICAgIGxhYmVsLm0wMiArPSB5c3E7XG4gICAgICAgICAgICAgICAgbGFiZWwubTIwICs9IHggKiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICggaSA9IDA7IGkgPCBsYWJlbGNvdW50OyBpKyspIHtcbiAgICAgICAgbGFiZWwgPSBsYWJlbHN1bVtpXTtcbiAgICAgICAgaWYgKCFpc05hTihsYWJlbC5tMDApICYmIGxhYmVsLm0wMCAhPT0gMCkge1xuICAgICAgICAgICAgeF8gPSBsYWJlbC5tMTAgLyBsYWJlbC5tMDA7XG4gICAgICAgICAgICB5XyA9IGxhYmVsLm0wMSAvIGxhYmVsLm0wMDtcbiAgICAgICAgICAgIG11MTEgPSBsYWJlbC5tMTEgLyBsYWJlbC5tMDAgLSB4XyAqIHlfO1xuICAgICAgICAgICAgbXUwMiA9IGxhYmVsLm0wMiAvIGxhYmVsLm0wMCAtIHlfICogeV87XG4gICAgICAgICAgICBtdTIwID0gbGFiZWwubTIwIC8gbGFiZWwubTAwIC0geF8gKiB4XztcbiAgICAgICAgICAgIHRtcCA9IChtdTAyIC0gbXUyMCkgLyAoMiAqIG11MTEpO1xuICAgICAgICAgICAgdG1wID0gMC41ICogTWF0aC5hdGFuKHRtcCkgKyAobXUxMSA+PSAwID8gUElfNCA6IC1QSV80ICkgKyBQSTtcbiAgICAgICAgICAgIGxhYmVsLnRoZXRhID0gKHRtcCAqIDE4MCAvIFBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgICAgICBpZiAobGFiZWwudGhldGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwudGhldGEgKz0gMTgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwucmFkID0gdG1wID4gUEkgPyB0bXAgLSBQSSA6IHRtcDtcbiAgICAgICAgICAgIGxhYmVsLnZlYyA9IHZlYzIuY2xvbmUoW01hdGguY29zKHRtcCksIE1hdGguc2luKHRtcCldKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSB7SW1hZ2VXcmFwcGVyfSBpbiBhIGdpdmVuIGNhbnZhc1xuICogQHBhcmFtIGNhbnZhcyB7Q2FudmFzfSBUaGUgY2FudmFzIGVsZW1lbnQgdG8gd3JpdGUgdG9cbiAqIEBwYXJhbSBzY2FsZSB7TnVtYmVyfSBTY2FsZSB3aGljaCBpcyBhcHBsaWVkIHRvIGVhY2ggcGl4ZWwtdmFsdWVcbiAqL1xuSW1hZ2VXcmFwcGVyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oY2FudmFzLCBzY2FsZSkge1xuICAgIHZhciBjdHgsXG4gICAgICAgIGZyYW1lLFxuICAgICAgICBkYXRhLFxuICAgICAgICBjdXJyZW50LFxuICAgICAgICBwaXhlbCxcbiAgICAgICAgeCxcbiAgICAgICAgeTtcblxuICAgIGlmICghc2NhbGUpIHtcbiAgICAgICAgc2NhbGUgPSAxLjA7XG4gICAgfVxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICBmcmFtZSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBkYXRhID0gZnJhbWUuZGF0YTtcbiAgICBjdXJyZW50ID0gMDtcbiAgICBmb3IgKHkgPSAwOyB5IDwgdGhpcy5zaXplLnk7IHkrKykge1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgdGhpcy5zaXplLng7IHgrKykge1xuICAgICAgICAgICAgcGl4ZWwgPSB5ICogdGhpcy5zaXplLnggKyB4O1xuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0KHgsIHkpICogc2NhbGU7XG4gICAgICAgICAgICBkYXRhW3BpeGVsICogNCArIDBdID0gY3VycmVudDtcbiAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMV0gPSBjdXJyZW50O1xuICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAyXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBkYXRhW3BpeGVsICogNCArIDNdID0gMjU1O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vZnJhbWUuZGF0YSA9IGRhdGE7XG4gICAgY3R4LnB1dEltYWdlRGF0YShmcmFtZSwgMCwgMCk7XG59O1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSB7U3ViSW1hZ2V9IGluIGEgZ2l2ZW4gY2FudmFzXG4gKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCB0byB3cml0ZSB0b1xuICogQHBhcmFtIHNjYWxlIHtOdW1iZXJ9IFNjYWxlIHdoaWNoIGlzIGFwcGxpZWQgdG8gZWFjaCBwaXhlbC12YWx1ZVxuICovXG5JbWFnZVdyYXBwZXIucHJvdG90eXBlLm92ZXJsYXkgPSBmdW5jdGlvbihjYW52YXMsIHNjYWxlLCBmcm9tKSB7XG4gICAgaWYgKCFzY2FsZSB8fCBzY2FsZSA8IDAgfHwgc2NhbGUgPiAzNjApIHtcbiAgICAgICAgc2NhbGUgPSAzNjA7XG4gICAgfVxuICAgIHZhciBoc3YgPSBbMCwgMSwgMV07XG4gICAgdmFyIHJnYiA9IFswLCAwLCAwXTtcbiAgICB2YXIgd2hpdGVSZ2IgPSBbMjU1LCAyNTUsIDI1NV07XG4gICAgdmFyIGJsYWNrUmdiID0gWzAsIDAsIDBdO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIGZyYW1lID0gY3R4LmdldEltYWdlRGF0YShmcm9tLngsIGZyb20ueSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcbiAgICB2YXIgZGF0YSA9IGZyYW1lLmRhdGE7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGhzdlswXSA9IHRoaXMuZGF0YVtsZW5ndGhdICogc2NhbGU7XG4gICAgICAgIHJlc3VsdCA9IGhzdlswXSA8PSAwID8gd2hpdGVSZ2IgOiBoc3ZbMF0gPj0gMzYwID8gYmxhY2tSZ2IgOiBoc3YycmdiKGhzdiwgcmdiKTtcbiAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMF0gPSByZXN1bHRbMF07XG4gICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDFdID0gcmVzdWx0WzFdO1xuICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAyXSA9IHJlc3VsdFsyXTtcbiAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgM10gPSAyNTU7XG4gICAgfVxuICAgIGN0eC5wdXRJbWFnZURhdGEoZnJhbWUsIGZyb20ueCwgZnJvbS55KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlV3JhcHBlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vaW1hZ2Vfd3JhcHBlci5qcyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlTWVyZ2UgPSByZXF1aXJlKCcuL19iYXNlTWVyZ2UnKSxcbiAgICBjcmVhdGVBc3NpZ25lciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUFzc2lnbmVyJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5hc3NpZ25gIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IG1lcmdlcyBvd24gYW5kXG4gKiBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0cyBpbnRvIHRoZVxuICogZGVzdGluYXRpb24gb2JqZWN0LiBTb3VyY2UgcHJvcGVydGllcyB0aGF0IHJlc29sdmUgdG8gYHVuZGVmaW5lZGAgYXJlXG4gKiBza2lwcGVkIGlmIGEgZGVzdGluYXRpb24gdmFsdWUgZXhpc3RzLiBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IHByb3BlcnRpZXNcbiAqIGFyZSBtZXJnZWQgcmVjdXJzaXZlbHkuIE90aGVyIG9iamVjdHMgYW5kIHZhbHVlIHR5cGVzIGFyZSBvdmVycmlkZGVuIGJ5XG4gKiBhc3NpZ25tZW50LiBTb3VyY2Ugb2JqZWN0cyBhcmUgYXBwbGllZCBmcm9tIGxlZnQgdG8gcmlnaHQuIFN1YnNlcXVlbnRcbiAqIHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjUuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0ge1xuICogICAnYSc6IFt7ICdiJzogMiB9LCB7ICdkJzogNCB9XVxuICogfTtcbiAqXG4gKiB2YXIgb3RoZXIgPSB7XG4gKiAgICdhJzogW3sgJ2MnOiAzIH0sIHsgJ2UnOiA1IH1dXG4gKiB9O1xuICpcbiAqIF8ubWVyZ2Uob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB7ICdhJzogW3sgJ2InOiAyLCAnYyc6IDMgfSwgeyAnZCc6IDQsICdlJzogNSB9XSB9XG4gKi9cbnZhciBtZXJnZSA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCkge1xuICBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9tZXJnZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xudmFyIFRyYWNlciA9IHtcbiAgICBzZWFyY2hEaXJlY3Rpb25zOiBbWzAsIDFdLCBbMSwgMV0sIFsxLCAwXSwgWzEsIC0xXSwgWzAsIC0xXSwgWy0xLCAtMV0sIFstMSwgMF0sIFstMSwgMV1dLFxuICAgIGNyZWF0ZTogZnVuY3Rpb24oaW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXIpIHtcbiAgICAgICAgdmFyIGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhLFxuICAgICAgICAgICAgbGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGEsXG4gICAgICAgICAgICBzZWFyY2hEaXJlY3Rpb25zID0gdGhpcy5zZWFyY2hEaXJlY3Rpb25zLFxuICAgICAgICAgICAgd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54LFxuICAgICAgICAgICAgcG9zO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZWxhYmVsKSB7XG4gICAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgIHg7XG5cbiAgICAgICAgICAgIGZvciAoIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeSA9IGN1cnJlbnQuY3kgKyBzZWFyY2hEaXJlY3Rpb25zW2N1cnJlbnQuZGlyXVswXTtcbiAgICAgICAgICAgICAgICB4ID0gY3VycmVudC5jeCArIHNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzFdO1xuICAgICAgICAgICAgICAgIHBvcyA9IHkgKiB3aWR0aCArIHg7XG4gICAgICAgICAgICAgICAgaWYgKChpbWFnZURhdGFbcG9zXSA9PT0gY29sb3IpICYmICgobGFiZWxEYXRhW3Bvc10gPT09IDApIHx8IChsYWJlbERhdGFbcG9zXSA9PT0gbGFiZWwpKSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbERhdGFbcG9zXSA9IGxhYmVsO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmN5ID0geTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jeCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxEYXRhW3Bvc10gPSBlZGdlbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyAxKSAlIDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdmVydGV4MkQoeCwgeSwgZGlyKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpcjogZGlyLFxuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXY6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb250b3VyVHJhY2luZyhzeSwgc3gsIGxhYmVsLCBjb2xvciwgZWRnZWxhYmVsKSB7XG4gICAgICAgICAgICB2YXIgRnYgPSBudWxsLFxuICAgICAgICAgICAgICAgIEN2LFxuICAgICAgICAgICAgICAgIFAsXG4gICAgICAgICAgICAgICAgbGRpcixcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBjeDogc3gsXG4gICAgICAgICAgICAgICAgICAgIGN5OiBzeSxcbiAgICAgICAgICAgICAgICAgICAgZGlyOiAwXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZWxhYmVsKSkge1xuICAgICAgICAgICAgICAgIEZ2ID0gdmVydGV4MkQoc3gsIHN5LCBjdXJyZW50LmRpcik7XG4gICAgICAgICAgICAgICAgQ3YgPSBGdjtcbiAgICAgICAgICAgICAgICBsZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICAgICAgUCA9IHZlcnRleDJEKGN1cnJlbnQuY3gsIGN1cnJlbnQuY3ksIDApO1xuICAgICAgICAgICAgICAgIFAucHJldiA9IEN2O1xuICAgICAgICAgICAgICAgIEN2Lm5leHQgPSBQO1xuICAgICAgICAgICAgICAgIFAubmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgQ3YgPSBQO1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyA2KSAlIDg7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZWxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxkaXIgIT09IGN1cnJlbnQuZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDdi5kaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFAgPSB2ZXJ0ZXgyRChjdXJyZW50LmN4LCBjdXJyZW50LmN5LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFAucHJldiA9IEN2O1xuICAgICAgICAgICAgICAgICAgICAgICAgQ3YubmV4dCA9IFA7XG4gICAgICAgICAgICAgICAgICAgICAgICBQLm5leHQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ3YgPSBQO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ3YuZGlyID0gbGRpcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIEN2LnggPSBjdXJyZW50LmN4O1xuICAgICAgICAgICAgICAgICAgICAgICAgQ3YueSA9IGN1cnJlbnQuY3k7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGN1cnJlbnQuY3ggIT09IHN4IHx8IGN1cnJlbnQuY3kgIT09IHN5KTtcbiAgICAgICAgICAgICAgICBGdi5wcmV2ID0gQ3YucHJldjtcbiAgICAgICAgICAgICAgICBDdi5wcmV2Lm5leHQgPSBGdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBGdjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFjZTogZnVuY3Rpb24oY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlbGFiZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2UoY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlbGFiZWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRvdXJUcmFjaW5nOiBmdW5jdGlvbihzeSwgc3gsIGxhYmVsLCBjb2xvciwgZWRnZWxhYmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRvdXJUcmFjaW5nKHN5LCBzeCwgbGFiZWwsIGNvbG9yLCBlZGdlbGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChUcmFjZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2F0b3IvdHJhY2VyLmpzIiwiaW1wb3J0IEJhcmNvZGVSZWFkZXIgZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5pbXBvcnQgQXJyYXlIZWxwZXIgZnJvbSAnLi4vY29tbW9uL2FycmF5X2hlbHBlcic7XG5cbmZ1bmN0aW9uIENvZGUzOVJlYWRlcigpIHtcbiAgICBCYXJjb2RlUmVhZGVyLmNhbGwodGhpcyk7XG59XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICAgIEFMUEhBQkVUSF9TVFJJTkc6IHt2YWx1ZTogXCIwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAqJC8rJVwifSxcbiAgICBBTFBIQUJFVDoge3ZhbHVlOiBbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCxcbiAgICAgICAgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgNDUsIDQ2LCAzMiwgNDIsIDM2LCA0NywgNDMsIDM3XX0sXG4gICAgQ0hBUkFDVEVSX0VOQ09ESU5HUzoge3ZhbHVlOiBbMHgwMzQsIDB4MTIxLCAweDA2MSwgMHgxNjAsIDB4MDMxLCAweDEzMCwgMHgwNzAsIDB4MDI1LCAweDEyNCwgMHgwNjQsIDB4MTA5LCAweDA0OSxcbiAgICAgICAgMHgxNDgsIDB4MDE5LCAweDExOCwgMHgwNTgsIDB4MDBELCAweDEwQywgMHgwNEMsIDB4MDFDLCAweDEwMywgMHgwNDMsIDB4MTQyLCAweDAxMywgMHgxMTIsIDB4MDUyLCAweDAwNywgMHgxMDYsXG4gICAgICAgIDB4MDQ2LCAweDAxNiwgMHgxODEsIDB4MEMxLCAweDFDMCwgMHgwOTEsIDB4MTkwLCAweDBEMCwgMHgwODUsIDB4MTg0LCAweDBDNCwgMHgwOTQsIDB4MEE4LCAweDBBMiwgMHgwOEEsIDB4MDJBXG4gICAgXX0sXG4gICAgQVNURVJJU0s6IHt2YWx1ZTogMHgwOTR9LFxuICAgIEZPUk1BVDoge3ZhbHVlOiBcImNvZGVfMzlcIiwgd3JpdGVhYmxlOiBmYWxzZX1cbn07XG5cbkNvZGUzOVJlYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhcmNvZGVSZWFkZXIucHJvdG90eXBlLCBwcm9wZXJ0aWVzKTtcbkNvZGUzOVJlYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb2RlMzlSZWFkZXI7XG5cbkNvZGUzOVJlYWRlci5wcm90b3R5cGUuX3RvQ291bnRlcnMgPSBmdW5jdGlvbihzdGFydCwgY291bnRlcikge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgbnVtQ291bnRlcnMgPSBjb3VudGVyLmxlbmd0aCxcbiAgICAgICAgZW5kID0gc2VsZi5fcm93Lmxlbmd0aCxcbiAgICAgICAgaXNXaGl0ZSA9ICFzZWxmLl9yb3dbc3RhcnRdLFxuICAgICAgICBpLFxuICAgICAgICBjb3VudGVyUG9zID0gMDtcblxuICAgIEFycmF5SGVscGVyLmluaXQoY291bnRlciwgMCk7XG5cbiAgICBmb3IgKCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IG51bUNvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudGVyO1xufTtcblxuQ29kZTM5UmVhZGVyLnByb3RvdHlwZS5fZGVjb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBjb3VudGVycyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIHN0YXJ0ID0gc2VsZi5fZmluZFN0YXJ0KCksXG4gICAgICAgIGRlY29kZWRDaGFyLFxuICAgICAgICBsYXN0U3RhcnQsXG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIG5leHRTdGFydDtcblxuICAgIGlmICghc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG5leHRTdGFydCA9IHNlbGYuX25leHRTZXQoc2VsZi5fcm93LCBzdGFydC5lbmQpO1xuXG4gICAgZG8ge1xuICAgICAgICBjb3VudGVycyA9IHNlbGYuX3RvQ291bnRlcnMobmV4dFN0YXJ0LCBjb3VudGVycyk7XG4gICAgICAgIHBhdHRlcm4gPSBzZWxmLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRlY29kZWRDaGFyID0gc2VsZi5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgaWYgKGRlY29kZWRDaGFyIDwgMCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgIGxhc3RTdGFydCA9IG5leHRTdGFydDtcbiAgICAgICAgbmV4dFN0YXJ0ICs9IEFycmF5SGVscGVyLnN1bShjb3VudGVycyk7XG4gICAgICAgIG5leHRTdGFydCA9IHNlbGYuX25leHRTZXQoc2VsZi5fcm93LCBuZXh0U3RhcnQpO1xuICAgIH0gd2hpbGUgKGRlY29kZWRDaGFyICE9PSAnKicpO1xuICAgIHJlc3VsdC5wb3AoKTtcblxuICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGYuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKFwiXCIpLFxuICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgIGVuZDogbmV4dFN0YXJ0LFxuICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgIH07XG59O1xuXG5Db2RlMzlSZWFkZXIucHJvdG90eXBlLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UgPSBmdW5jdGlvbihsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpIHtcbiAgICB2YXIgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLFxuICAgICAgICBwYXR0ZXJuU2l6ZSA9IEFycmF5SGVscGVyLnN1bShjb3VudGVycyk7XG5cbiAgICB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBuZXh0U3RhcnQgLSBsYXN0U3RhcnQgLSBwYXR0ZXJuU2l6ZTtcbiAgICBpZiAoKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCAqIDMpID49IHBhdHRlcm5TaXplKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Db2RlMzlSZWFkZXIucHJvdG90eXBlLl9wYXR0ZXJuVG9DaGFyID0gZnVuY3Rpb24ocGF0dGVybikge1xuICAgIHZhciBpLFxuICAgICAgICBzZWxmID0gdGhpcztcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzZWxmLkNIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc2VsZi5BTFBIQUJFVFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufTtcblxuQ29kZTM5UmVhZGVyLnByb3RvdHlwZS5fZmluZE5leHRXaWR0aCA9IGZ1bmN0aW9uKGNvdW50ZXJzLCBjdXJyZW50KSB7XG4gICAgdmFyIGksXG4gICAgICAgIG1pbldpZHRoID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY291bnRlcnNbaV0gPCBtaW5XaWR0aCAmJiBjb3VudGVyc1tpXSA+IGN1cnJlbnQpIHtcbiAgICAgICAgICAgIG1pbldpZHRoID0gY291bnRlcnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWluV2lkdGg7XG59O1xuXG5Db2RlMzlSZWFkZXIucHJvdG90eXBlLl90b1BhdHRlcm4gPSBmdW5jdGlvbihjb3VudGVycykge1xuICAgIHZhciBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aCxcbiAgICAgICAgbWF4TmFycm93V2lkdGggPSAwLFxuICAgICAgICBudW1XaWRlQmFycyA9IG51bUNvdW50ZXJzLFxuICAgICAgICB3aWRlQmFyV2lkdGggPSAwLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgaTtcblxuICAgIHdoaWxlIChudW1XaWRlQmFycyA+IDMpIHtcbiAgICAgICAgbWF4TmFycm93V2lkdGggPSBzZWxmLl9maW5kTmV4dFdpZHRoKGNvdW50ZXJzLCBtYXhOYXJyb3dXaWR0aCk7XG4gICAgICAgIG51bVdpZGVCYXJzID0gMDtcbiAgICAgICAgcGF0dGVybiA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlcnNbaV0gPiBtYXhOYXJyb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gfD0gMSA8PCAobnVtQ291bnRlcnMgLSAxIC0gaSk7XG4gICAgICAgICAgICAgICAgbnVtV2lkZUJhcnMrKztcbiAgICAgICAgICAgICAgICB3aWRlQmFyV2lkdGggKz0gY291bnRlcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVtV2lkZUJhcnMgPT09IDMpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1Db3VudGVycyAmJiBudW1XaWRlQmFycyA+IDA7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA+IG1heE5hcnJvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoY291bnRlcnNbaV0gKiAyKSA+PSB3aWRlQmFyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG5cbkNvZGUzOVJlYWRlci5wcm90b3R5cGUuX2ZpbmRTdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgb2Zmc2V0ID0gc2VsZi5fbmV4dFNldChzZWxmLl9yb3cpLFxuICAgICAgICBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQsXG4gICAgICAgIGNvdW50ZXIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIGNvdW50ZXJQb3MgPSAwLFxuICAgICAgICBpc1doaXRlID0gZmFsc2UsXG4gICAgICAgIGksXG4gICAgICAgIGosXG4gICAgICAgIHdoaXRlU3BhY2VNdXN0U3RhcnQ7XG5cbiAgICBmb3IgKCBpID0gb2Zmc2V0OyBpIDwgc2VsZi5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gZmluZCBzdGFydCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX3RvUGF0dGVybihjb3VudGVyKSA9PT0gc2VsZi5BU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlTXVzdFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBwYXR0ZXJuU3RhcnQgLSAoKGkgLSBwYXR0ZXJuU3RhcnQpIC8gNCkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcGF0dGVyblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhdHRlcm5TdGFydCArPSBjb3VudGVyWzBdICsgY291bnRlclsxXTtcbiAgICAgICAgICAgICAgICBmb3IgKCBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbN10gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbOF0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlMzlSZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVhZGVyL2NvZGVfMzlfcmVhZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBkb3RcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2wtdmVjMi9kb3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXG4gKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbk1lcmdlVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NpZ25NZXJnZVZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVNldFRvU3RyaW5nJyksXG4gICAgc2hvcnRPdXQgPSByZXF1aXJlKCcuL19zaG9ydE91dCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHlwZURlZnMgZnJvbSAnLi9jb21tb24vdHlwZWRlZnMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgSW1hZ2VXcmFwcGVyIGZyb20gJy4vY29tbW9uL2ltYWdlX3dyYXBwZXInO1xuaW1wb3J0IEJhcmNvZGVMb2NhdG9yIGZyb20gJy4vbG9jYXRvci9iYXJjb2RlX2xvY2F0b3InO1xuaW1wb3J0IEJhcmNvZGVEZWNvZGVyIGZyb20gJy4vZGVjb2Rlci9iYXJjb2RlX2RlY29kZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2NvbW1vbi9ldmVudHMnO1xuaW1wb3J0IENhbWVyYUFjY2VzcyBmcm9tICcuL2lucHV0L2NhbWVyYV9hY2Nlc3MnO1xuaW1wb3J0IEltYWdlRGVidWcgZnJvbSAnLi9jb21tb24vaW1hZ2VfZGVidWcnO1xuaW1wb3J0IFJlc3VsdENvbGxlY3RvciBmcm9tICcuL2FuYWx5dGljcy9yZXN1bHRfY29sbGVjdG9yJztcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnJztcbmltcG9ydCBJbnB1dFN0cmVhbSBmcm9tICdpbnB1dF9zdHJlYW0nO1xuaW1wb3J0IEZyYW1lR3JhYmJlciBmcm9tICdmcmFtZV9ncmFiYmVyJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5jb25zdCB2ZWMyID0ge1xuICAgIGNsb25lOiByZXF1aXJlKCdnbC12ZWMyL2Nsb25lJylcbn07XG5cbnZhciBfaW5wdXRTdHJlYW0sXG4gICAgX2ZyYW1lZ3JhYmJlcixcbiAgICBfc3RvcHBlZCxcbiAgICBfY2FudmFzQ29udGFpbmVyID0ge1xuICAgICAgICBjdHg6IHtcbiAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkb206IHtcbiAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBfaW5wdXRJbWFnZVdyYXBwZXIsXG4gICAgX2JveFNpemUsXG4gICAgX2RlY29kZXIsXG4gICAgX3dvcmtlclBvb2wgPSBbXSxcbiAgICBfb25VSVRocmVhZCA9IHRydWUsXG4gICAgX3Jlc3VsdENvbGxlY3RvcixcbiAgICBfY29uZmlnID0ge307XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcikge1xuICAgIGluaXRCdWZmZXJzKGltYWdlV3JhcHBlcik7XG4gICAgX2RlY29kZXIgPSBCYXJjb2RlRGVjb2Rlci5jcmVhdGUoX2NvbmZpZy5kZWNvZGVyLCBfaW5wdXRJbWFnZVdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBpbml0SW5wdXRTdHJlYW0oY2IpIHtcbiAgICB2YXIgdmlkZW87XG4gICAgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gXCJWaWRlb1N0cmVhbVwiKSB7XG4gICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBJbnB1dFN0cmVhbS5jcmVhdGVWaWRlb1N0cmVhbSh2aWRlbyk7XG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09IFwiSW1hZ2VTdHJlYW1cIikge1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBJbnB1dFN0cmVhbS5jcmVhdGVJbWFnZVN0cmVhbSgpO1xuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSBcIkxpdmVTdHJlYW1cIikge1xuICAgICAgICB2YXIgJHZpZXdwb3J0ID0gZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgaWYgKCR2aWV3cG9ydCkge1xuICAgICAgICAgICAgdmlkZW8gPSAkdmlld3BvcnQucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpO1xuICAgICAgICAgICAgaWYgKCF2aWRlbykge1xuICAgICAgICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuICAgICAgICAgICAgICAgICR2aWV3cG9ydC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2lucHV0U3RyZWFtID0gSW5wdXRTdHJlYW0uY3JlYXRlTGl2ZVN0cmVhbSh2aWRlbyk7XG4gICAgICAgIENhbWVyYUFjY2Vzcy5yZXF1ZXN0KHZpZGVvLCBfY29uZmlnLmlucHV0U3RyZWFtLmNvbnN0cmFpbnRzKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBfaW5wdXRTdHJlYW0udHJpZ2dlcihcImNhbnJlY29yZFwiKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9pbnB1dFN0cmVhbS5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICBfaW5wdXRTdHJlYW0uc2V0SW5wdXRTdHJlYW0oX2NvbmZpZy5pbnB1dFN0cmVhbSk7XG4gICAgX2lucHV0U3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5yZWNvcmRcIiwgY2FuUmVjb3JkLmJpbmQodW5kZWZpbmVkLCBjYikpO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3UG9ydCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX2NvbmZpZy5pbnB1dFN0cmVhbS50YXJnZXQ7XG4gICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGFscmVhZHkgYSBET00gZWxlbWVudFxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVOYW1lICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSAnI2ludGVyYWN0aXZlLnZpZXdwb3J0JyBhcyBhIGZhbGxiYWNrIHNlbGVjdG9yIChiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSlcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyB0YXJnZXQgOiAnI2ludGVyYWN0aXZlLnZpZXdwb3J0JztcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FuUmVjb3JkKGNiKSB7XG4gICAgQmFyY29kZUxvY2F0b3IuY2hlY2tJbWFnZUNvbnN0cmFpbnRzKF9pbnB1dFN0cmVhbSwgX2NvbmZpZy5sb2NhdG9yKTtcbiAgICBpbml0Q2FudmFzKF9jb25maWcpO1xuICAgIF9mcmFtZWdyYWJiZXIgPSBGcmFtZUdyYWJiZXIuY3JlYXRlKF9pbnB1dFN0cmVhbSwgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpO1xuXG4gICAgYWRqdXN0V29ya2VyUG9vbChfY29uZmlnLm51bU9mV29ya2VycywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChfY29uZmlnLm51bU9mV29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICByZWFkeShjYik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlYWR5KGNiKXtcbiAgICBfaW5wdXRTdHJlYW0ucGxheSgpO1xuICAgIGNiKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMoKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgJHZpZXdwb3J0ID0gZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzLmltZ0J1ZmZlclwiKTtcbiAgICAgICAgaWYgKCFfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSkge1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuY2xhc3NOYW1lID0gXCJpbWdCdWZmZXJcIjtcbiAgICAgICAgICAgIGlmICgkdmlld3BvcnQgJiYgX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSBcIkltYWdlU3RyZWFtXCIpIHtcbiAgICAgICAgICAgICAgICAkdmlld3BvcnQuYXBwZW5kQ2hpbGQoX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuY3R4LmltYWdlID0gX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS53aWR0aCA9IF9pbnB1dFN0cmVhbS5nZXRDYW52YXNTaXplKCkueDtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuaGVpZ2h0ID0gX2lucHV0U3RyZWFtLmdldENhbnZhc1NpemUoKS55O1xuXG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzLmRyYXdpbmdCdWZmZXJcIik7XG4gICAgICAgIGlmICghX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSkge1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmNsYXNzTmFtZSA9IFwiZHJhd2luZ0J1ZmZlclwiO1xuICAgICAgICAgICAgaWYgKCR2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgICR2aWV3cG9ydC5hcHBlbmRDaGlsZChfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjbGVhckZpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICAgICAgICAgIGNsZWFyRml4LnNldEF0dHJpYnV0ZShcImNsZWFyXCIsIFwiYWxsXCIpO1xuICAgICAgICAgICAgaWYgKCR2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgICR2aWV3cG9ydC5hcHBlbmRDaGlsZChjbGVhckZpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5jdHgub3ZlcmxheSA9IF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LndpZHRoID0gX2lucHV0U3RyZWFtLmdldENhbnZhc1NpemUoKS54O1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmhlaWdodCA9IF9pbnB1dFN0cmVhbS5nZXRDYW52YXNTaXplKCkueTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRCdWZmZXJzKGltYWdlV3JhcHBlcikge1xuICAgIGlmIChpbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgX2lucHV0SW1hZ2VXcmFwcGVyID0gaW1hZ2VXcmFwcGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIF9pbnB1dEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgeDogX2lucHV0U3RyZWFtLmdldFdpZHRoKCksXG4gICAgICAgICAgICB5OiBfaW5wdXRTdHJlYW0uZ2V0SGVpZ2h0KClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKEVOVi5kZXZlbG9wbWVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZSk7XG4gICAgfVxuICAgIF9ib3hTaXplID0gW1xuICAgICAgICB2ZWMyLmNsb25lKFswLCAwXSksXG4gICAgICAgIHZlYzIuY2xvbmUoWzAsIF9pbnB1dEltYWdlV3JhcHBlci5zaXplLnldKSxcbiAgICAgICAgdmVjMi5jbG9uZShbX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCwgX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueV0pLFxuICAgICAgICB2ZWMyLmNsb25lKFtfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCAwXSlcbiAgICBdO1xuICAgIEJhcmNvZGVMb2NhdG9yLmluaXQoX2lucHV0SW1hZ2VXcmFwcGVyLCBfY29uZmlnLmxvY2F0b3IpO1xufVxuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0JveGVzKCkge1xuICAgIGlmIChfY29uZmlnLmxvY2F0ZSkge1xuICAgICAgICByZXR1cm4gQmFyY29kZUxvY2F0b3IubG9jYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtbXG4gICAgICAgICAgICB2ZWMyLmNsb25lKF9ib3hTaXplWzBdKSxcbiAgICAgICAgICAgIHZlYzIuY2xvbmUoX2JveFNpemVbMV0pLFxuICAgICAgICAgICAgdmVjMi5jbG9uZShfYm94U2l6ZVsyXSksXG4gICAgICAgICAgICB2ZWMyLmNsb25lKF9ib3hTaXplWzNdKV1dO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUmVzdWx0KHJlc3VsdCkge1xuICAgIHZhciB0b3BSaWdodCA9IF9pbnB1dFN0cmVhbS5nZXRUb3BSaWdodCgpLFxuICAgICAgICB4T2Zmc2V0ID0gdG9wUmlnaHQueCxcbiAgICAgICAgeU9mZnNldCA9IHRvcFJpZ2h0LnksXG4gICAgICAgIGk7XG5cbiAgICBpZiAoeE9mZnNldCA9PT0gMCAmJiB5T2Zmc2V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQuYmFyY29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlc3VsdChyZXN1bHQuYmFyY29kZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5saW5lICYmIHJlc3VsdC5saW5lLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBtb3ZlTGluZShyZXN1bHQubGluZSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5ib3gpIHtcbiAgICAgICAgbW92ZUJveChyZXN1bHQuYm94KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJveGVzICYmIHJlc3VsdC5ib3hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQuYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vdmVCb3gocmVzdWx0LmJveGVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVCb3goYm94KSB7XG4gICAgICAgIHZhciBjb3JuZXIgPSBib3gubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChjb3JuZXItLSkge1xuICAgICAgICAgICAgYm94W2Nvcm5lcl1bMF0gKz0geE9mZnNldDtcbiAgICAgICAgICAgIGJveFtjb3JuZXJdWzFdICs9IHlPZmZzZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlTGluZShsaW5lKSB7XG4gICAgICAgIGxpbmVbMF0ueCArPSB4T2Zmc2V0O1xuICAgICAgICBsaW5lWzBdLnkgKz0geU9mZnNldDtcbiAgICAgICAgbGluZVsxXS54ICs9IHhPZmZzZXQ7XG4gICAgICAgIGxpbmVbMV0ueSArPSB5T2Zmc2V0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUmVzdWx0IChyZXN1bHQsIGltYWdlRGF0YSkge1xuICAgIGlmICghaW1hZ2VEYXRhIHx8ICFfcmVzdWx0Q29sbGVjdG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5maWx0ZXIoYmFyY29kZSA9PiBiYXJjb2RlLmNvZGVSZXN1bHQpXG4gICAgICAgICAgICAuZm9yRWFjaChiYXJjb2RlID0+IGFkZFJlc3VsdChiYXJjb2RlLCBpbWFnZURhdGEpKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgIF9yZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0KGltYWdlRGF0YSwgX2lucHV0U3RyZWFtLmdldENhbnZhc1NpemUoKSwgcmVzdWx0LmNvZGVSZXN1bHQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzQ29kZVJlc3VsdCAocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdCAmJiAocmVzdWx0LmJhcmNvZGVzID9cbiAgICAgIHJlc3VsdC5iYXJjb2Rlcy5zb21lKGJhcmNvZGUgPT4gYmFyY29kZS5jb2RlUmVzdWx0KSA6XG4gICAgICByZXN1bHQuY29kZVJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZXN1bHQocmVzdWx0LCBpbWFnZURhdGEpIHtcbiAgICBsZXQgcmVzdWx0VG9QdWJsaXNoID0gcmVzdWx0O1xuXG4gICAgaWYgKHJlc3VsdCAmJiBfb25VSVRocmVhZCkge1xuICAgICAgICB0cmFuc2Zvcm1SZXN1bHQocmVzdWx0KTtcbiAgICAgICAgYWRkUmVzdWx0KHJlc3VsdCwgaW1hZ2VEYXRhKTtcbiAgICAgICAgcmVzdWx0VG9QdWJsaXNoID0gcmVzdWx0LmJhcmNvZGVzIHx8IHJlc3VsdDtcbiAgICB9XG5cbiAgICBFdmVudHMucHVibGlzaChcInByb2Nlc3NlZFwiLCByZXN1bHRUb1B1Ymxpc2gpO1xuICAgIGlmIChoYXNDb2RlUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgRXZlbnRzLnB1Ymxpc2goXCJkZXRlY3RlZFwiLCByZXN1bHRUb1B1Ymxpc2gpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9jYXRlQW5kRGVjb2RlKCkge1xuICAgIHZhciByZXN1bHQsXG4gICAgICAgIGJveGVzO1xuXG4gICAgYm94ZXMgPSBnZXRCb3VuZGluZ0JveGVzKCk7XG4gICAgaWYgKGJveGVzKSB7XG4gICAgICAgIHJlc3VsdCA9IF9kZWNvZGVyLmRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9O1xuICAgICAgICByZXN1bHQuYm94ZXMgPSBib3hlcztcbiAgICAgICAgcHVibGlzaFJlc3VsdChyZXN1bHQsIF9pbnB1dEltYWdlV3JhcHBlci5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwdWJsaXNoUmVzdWx0KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIGF2YWlsYWJsZVdvcmtlcjtcblxuICAgIGlmIChfb25VSVRocmVhZCkge1xuICAgICAgICBpZiAoX3dvcmtlclBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyID0gX3dvcmtlclBvb2wuZmlsdGVyKGZ1bmN0aW9uKHdvcmtlclRocmVhZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhd29ya2VyVGhyZWFkLmJ1c3k7XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBfZnJhbWVncmFiYmVyLmF0dGFjaERhdGEoYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gYWxsIHdvcmtlcnMgYXJlIGJ1c3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9mcmFtZWdyYWJiZXIuYXR0YWNoRGF0YShfaW5wdXRJbWFnZVdyYXBwZXIuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9mcmFtZWdyYWJiZXIuZ3JhYigpKSB7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLmJ1c3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlci53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjbWQ6ICdwcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhXG4gICAgICAgICAgICAgICAgfSwgW2F2YWlsYWJsZVdvcmtlci5pbWFnZURhdGEuYnVmZmVyXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2F0ZUFuZERlY29kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRlQW5kRGVjb2RlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdGFydENvbnRpbnVvdXNVcGRhdGUoKSB7XG4gICAgdmFyIG5leHQgPSBudWxsLFxuICAgICAgICBkZWxheSA9IDEwMDAgLyAoX2NvbmZpZy5mcmVxdWVuY3kgfHwgNjApO1xuXG4gICAgX3N0b3BwZWQgPSBmYWxzZTtcbiAgICAoZnVuY3Rpb24gZnJhbWUodGltZXN0YW1wKSB7XG4gICAgICAgIG5leHQgPSBuZXh0IHx8IHRpbWVzdGFtcDtcbiAgICAgICAgaWYgKCFfc3RvcHBlZCkge1xuICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCA+PSBuZXh0KSB7XG4gICAgICAgICAgICAgICAgbmV4dCArPSBkZWxheTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lKGZyYW1lKTtcbiAgICAgICAgfVxuICAgIH0ocGVyZm9ybWFuY2Uubm93KCkpKTtcbn1cblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKF9vblVJVGhyZWFkICYmIF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gXCJMaXZlU3RyZWFtXCIpIHtcbiAgICAgICAgc3RhcnRDb250aW51b3VzVXBkYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0V29ya2VyKGNiKSB7XG4gICAgdmFyIGJsb2JVUkwsXG4gICAgICAgIHdvcmtlclRocmVhZCA9IHtcbiAgICAgICAgICAgIHdvcmtlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaW1hZ2VEYXRhOiBuZXcgVWludDhBcnJheShfaW5wdXRTdHJlYW0uZ2V0V2lkdGgoKSAqIF9pbnB1dFN0cmVhbS5nZXRIZWlnaHQoKSksXG4gICAgICAgICAgICBidXN5OiB0cnVlXG4gICAgICAgIH07XG5cbiAgICBibG9iVVJMID0gZ2VuZXJhdGVXb3JrZXJCbG9iKCk7XG4gICAgd29ya2VyVGhyZWFkLndvcmtlciA9IG5ldyBXb3JrZXIoYmxvYlVSTCk7XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PT0gJ2luaXRpYWxpemVkJykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICBpZiAoRU5WLmRldmVsb3BtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXb3JrZXIgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2Iod29ya2VyVGhyZWFkKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEuZXZlbnQgPT09ICdwcm9jZXNzZWQnKSB7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgcHVibGlzaFJlc3VsdChlLmRhdGEucmVzdWx0LCB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEuZXZlbnQgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldvcmtlciBlcnJvcjogXCIgKyBlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd29ya2VyVGhyZWFkLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGNtZDogJ2luaXQnLFxuICAgICAgICBzaXplOiB7eDogX2lucHV0U3RyZWFtLmdldFdpZHRoKCksIHk6IF9pbnB1dFN0cmVhbS5nZXRIZWlnaHQoKX0sXG4gICAgICAgIGltYWdlRGF0YTogd29ya2VyVGhyZWFkLmltYWdlRGF0YSxcbiAgICAgICAgY29uZmlnOiBjb25maWdGb3JXb3JrZXIoX2NvbmZpZylcbiAgICB9LCBbd29ya2VyVGhyZWFkLmltYWdlRGF0YS5idWZmZXJdKTtcbn1cblxuZnVuY3Rpb24gY29uZmlnRm9yV29ya2VyKGNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgICAgIC4uLmNvbmZpZy5pbnB1dFN0cmVhbSxcbiAgICAgICAgICAgIHRhcmdldDogbnVsbFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd29ya2VySW50ZXJmYWNlKGZhY3RvcnkpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiovXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgdmFyIFF1YWdnYSA9IGZhY3RvcnkoKS5kZWZhdWx0O1xuICAgICAgICBpZiAoIVF1YWdnYSkge1xuICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7J2V2ZW50JzogJ2Vycm9yJywgbWVzc2FnZTogJ1F1YWdnYSBjb3VsZCBub3QgYmUgY3JlYXRlZCd9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgaW1hZ2VXcmFwcGVyO1xuXG4gICAgc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmRhdGEuY21kID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBlLmRhdGEuY29uZmlnO1xuICAgICAgICAgICAgY29uZmlnLm51bU9mV29ya2VycyA9IDA7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIgPSBuZXcgUXVhZ2dhLkltYWdlV3JhcHBlcih7XG4gICAgICAgICAgICAgICAgeDogZS5kYXRhLnNpemUueCxcbiAgICAgICAgICAgICAgICB5OiBlLmRhdGEuc2l6ZS55XG4gICAgICAgICAgICB9LCBuZXcgVWludDhBcnJheShlLmRhdGEuaW1hZ2VEYXRhKSk7XG4gICAgICAgICAgICBRdWFnZ2EuaW5pdChjb25maWcsIHJlYWR5LCBpbWFnZVdyYXBwZXIpO1xuICAgICAgICAgICAgUXVhZ2dhLm9uUHJvY2Vzc2VkKG9uUHJvY2Vzc2VkKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEuY21kID09PSAncHJvY2VzcycpIHtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICBRdWFnZ2Euc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEuY21kID09PSAnc2V0UmVhZGVycycpIHtcbiAgICAgICAgICAgIFF1YWdnYS5zZXRSZWFkZXJzKGUuZGF0YS5yZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvblByb2Nlc3NlZChyZXN1bHQpIHtcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAnZXZlbnQnOiAncHJvY2Vzc2VkJyxcbiAgICAgICAgICAgIGltYWdlRGF0YTogaW1hZ2VXcmFwcGVyLmRhdGEsXG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICB9LCBbaW1hZ2VXcmFwcGVyLmRhdGEuYnVmZmVyXSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHkoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7J2V2ZW50JzogJ2luaXRpYWxpemVkJywgaW1hZ2VEYXRhOiBpbWFnZVdyYXBwZXIuZGF0YX0sIFtpbWFnZVdyYXBwZXIuZGF0YS5idWZmZXJdKTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV29ya2VyQmxvYigpIHtcbiAgICB2YXIgYmxvYixcbiAgICAgICAgZmFjdG9yeVNvdXJjZTtcblxuICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICBpZiAodHlwZW9mIF9fZmFjdG9yeVNvdXJjZV9fICE
