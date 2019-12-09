/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.round(t * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = (function () {
  function play() { 
    raf = requestAnimationFrame(step);
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    if (activeInstancesLength) {
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);
          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }
        i++;
      }
      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }
  return play;
})();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) { return ins.pause(); });
    pausedInstances = activeInstances.slice(0);
    anime.running = activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) { return ins.play(); });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    if (!raf) { engine(); }
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.1.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ __webpack_exports__["default"] = (anime);


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/is-function/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-function/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),

/***/ "./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/xhr/index.js":
/*!***********************************!*\
  !*** ./node_modules/xhr/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(/*! global/window */ "./node_modules/global/window.js")
var isFunction = __webpack_require__(/*! is-function */ "./node_modules/is-function/index.js")
var parseHeaders = __webpack_require__(/*! parse-headers */ "./node_modules/parse-headers/parse-headers.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")

module.exports = createXHR
// Allow use of default import syntax in TypeScript
module.exports.default = createXHR;
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    // xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
    // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
    try {
        if (xhr.responseType === "document") {
            return xhr.responseXML
        }
        var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
        if (xhr.responseType === "" && !firefoxBugTakenEffect) {
            return xhr.responseXML
        }
    } catch (e) {}

    return null
}

function noop() {}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./resources/js/common.js":
/*!********************************!*\
  !*** ./resources/js/common.js ***!
  \********************************/
/*! exports provided: prevAll, nextAll, getHashKey, queryElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashKey", function() { return getHashKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElement", function() { return queryElement; });
function prevAll(element) {
  var result = [];

  while (element = element.previousElementSibling) {
    result.push(element);
  }

  return result;
}
function nextAll(element) {
  var result = [];

  while (element = element.nextElementSibling) {
    result.push(element);
  }

  return result;
}
function getHashKey() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-hash-key]';
  var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data-hash-key';
  return document.querySelector(selector).getAttribute(attribute);
}
function queryElement(selectorOrElement) {
  var element;

  if (typeof selectorOrElement === 'string') {
    element = document.querySelector(selectorOrElement);
  } else {
    element = selectorOrElement;
  }

  return element;
}

/***/ }),

/***/ "./resources/js/modules/AddHandlerForEvent.js":
/*!****************************************************!*\
  !*** ./resources/js/modules/AddHandlerForEvent.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddHandlerForEvent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddHandlerForEvent = function AddHandlerForEvent(object, event, handler) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  _classCallCheck(this, AddHandlerForEvent);

  if (object.addEventListener) {
    object.addEventListener(event, handler, useCapture);
  } else if (object.attachEvent) {
    object.attachEvent('on' + event, handler);
  } else {
    console.error("Add handler is not supported");
  }
};



/***/ }),

/***/ "./resources/js/modules/Animations.js":
/*!********************************************!*\
  !*** ./resources/js/modules/Animations.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animations; });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Animations =
/*#__PURE__*/
function () {
  function Animations() {
    _classCallCheck(this, Animations);
  }

  _createClass(Animations, [{
    key: "changeWidthAndHeight",
    value: function changeWidthAndHeight(targets, options) {
      Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: targets,
        width: options.width,
        height: options.height
      });
    }
  }, {
    key: "changeWidth",
    value: function changeWidth(targets, options) {
      Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: targets,
        width: options.width
      });
    }
  }, {
    key: "changeHeight",
    value: function changeHeight(targets, height) {
      Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: targets,
        height: height
      });
    }
  }, {
    key: "switchOpacity",
    value: function switchOpacity(targets, options) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: targets,
        opacity: options.opacity,
        delay: options.delay
      }, delay);
    }
  }, {
    key: "moveLeftRight",
    value: function moveLeftRight(targets, options) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: targets,
        translateX: options.translateX,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      }, delay);
    }
  }, {
    key: "horizontalMixing",
    value: function horizontalMixing(targets, options) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: targets,
        translateX: options.translateX // direction: 'alternate',
        // loop: false,
        // easing: 'easeInOutSine'

      }, delay);
    }
  }]);

  return Animations;
}();



/***/ }),

/***/ "./resources/js/modules/ApplicationSettings.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/ApplicationSettings.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationSettings; });
/* harmony import */ var _AddHandlerForEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddHandlerForEvent */ "./resources/js/modules/AddHandlerForEvent.js");
/* harmony import */ var _widgets_tradeIn_src_Events_EventRollUpClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/tradeIn/src/Events/EventRollUpClose */ "./resources/widgets/tradeIn/src/Events/EventRollUpClose.js");
/* harmony import */ var _Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animations */ "./resources/js/modules/Animations.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ApplicationSettings =
/*#__PURE__*/
function () {
  function ApplicationSettings(element) {
    _classCallCheck(this, ApplicationSettings);

    this.element = element;
  }

  _createClass(ApplicationSettings, [{
    key: "addStyle",
    value: function addStyle(styles) {
      for (var style in styles) {
        this.element.style[style] = styles[style];
      }
    }
  }, {
    key: "addSettings",
    value: function addSettings(settings) {
      for (var setting in settings) {
        this.element[setting] = settings[setting];
      }
    }
  }, {
    key: "addEvents",
    value: function addEvents(events, target) {
      events.forEach(function (item) {
        new _AddHandlerForEvent__WEBPACK_IMPORTED_MODULE_0__["default"](target, item.trigger, function (event) {
          item.options.event = event;
          item.handler(item.options);
        });
      });
    }
  }, {
    key: "addAnimate",
    value: function addAnimate(animates) {
      var _this = this;

      animates.forEach(function (item) {
        var delay = !item.delay ? 0 : item.delay;
        _Animations__WEBPACK_IMPORTED_MODULE_2__["default"].prototype[item.title](_this.element, item.options, delay);
      });
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributes) {
      var _this2 = this;

      attributes.forEach(function (item) {
        _this2.element.setAttribute(item.title, item.value);
      });
    }
  }, {
    key: "handler",
    value: function handler(item) {
      if (item["class"]) {
        this.element.classList.add(item["class"]);
      }

      if (item.id) {
        this.element.setAttribute('id', item.id);
      }

      if (item.styles) {
        this.addStyle(item.styles);
      }

      if (item.settings) {
        this.addSettings(item.settings);
      }

      if (item.attributes) {
        this.addAttribute(item.attributes);
      }

      if (item.events) {
        this.addEvents(item.events, this.element);
      }

      if (item.animates) {
        this.addAnimate(item.animates);
      }

      return this.element;
    }
  }, {
    key: "element",
    set: function set(element) {
      this._element = typeof element === 'string' ? document.querySelector(element) : element;
    },
    get: function get() {
      return this._element;
    }
  }]);

  return ApplicationSettings;
}();



/***/ }),

/***/ "./resources/js/modules/CreateElement.js":
/*!***********************************************!*\
  !*** ./resources/js/modules/CreateElement.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateElements; });
/* harmony import */ var _ApplicationSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationSettings */ "./resources/js/modules/ApplicationSettings.js");
/* harmony import */ var _AddHandlerForEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddHandlerForEvent */ "./resources/js/modules/AddHandlerForEvent.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CreateElements =
/*#__PURE__*/
function () {
  function CreateElements(object) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, CreateElements);

    if (object.length === 0) {
      throw "Create Elements take Empty object";
    }

    this.items = object;
    this.parent = parent;
    this.handler();

    if (!this.parent) {
      return this.element;
    }
  }

  _createClass(CreateElements, [{
    key: "handler",
    value: function handler() {
      var _this = this;

      this.items.forEach(function (item) {
        _this.element = item.tag;
        var ApplicationSettingController = new _ApplicationSettings__WEBPACK_IMPORTED_MODULE_0__["default"](_this.element);
        _this.element = ApplicationSettingController.handler(item);

        if (item.internalElements) {
          new CreateElements(item.internalElements, _this.element);
        }

        if (_this.parent) {
          _this.parent.append(_this.element);
        }
      });
    }
  }, {
    key: "element",
    set: function set(element) {
      this._element = typeof element === 'string' ? document.createElement(element) : element;
    },
    get: function get() {
      return this._element;
    }
  }]);

  return CreateElements;
}();



/***/ }),

/***/ "./resources/js/modules/EventsAbstract.js":
/*!************************************************!*\
  !*** ./resources/js/modules/EventsAbstract.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventAbstract; });
/* harmony import */ var _ApplicationSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationSettings */ "./resources/js/modules/ApplicationSettings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EventAbstract =
/*#__PURE__*/
function () {
  function EventAbstract() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, EventAbstract);

    this.settings = options;
  }

  _createClass(EventAbstract, [{
    key: "handler",
    value: function handler() {
      this.settings.forEach(function (item) {
        var ApplicationSettingController = new _ApplicationSettings__WEBPACK_IMPORTED_MODULE_0__["default"](item.selector);
        ApplicationSettingController.handler(item);
      });
    }
  }]);

  return EventAbstract;
}();



/***/ }),

/***/ "./resources/js/modules/ParserGet.js":
/*!*******************************************!*\
  !*** ./resources/js/modules/ParserGet.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParserGet; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParserGet =
/*#__PURE__*/
function () {
  function ParserGet(url) {
    _classCallCheck(this, ParserGet);

    this.url = url;

    if (this.url.indexOf('?') === -1) {
      return false;
    }

    this.urlArray = this.url;
  }

  _createClass(ParserGet, [{
    key: "url",
    set: function set(url) {
      if (!url || url == '') {
        this._url = decodeURI(document.location.search);
      } else {
        this._url = url;
      }
    },
    get: function get() {
      return this._url;
    }
  }, {
    key: "urlArray",
    set: function set(value) {
      var data = {};
      value.split('&').forEach(function (item) {
        var arr = item.split('=');
        var title = arr[0].replace('?', '');
        data[title] = arr[1];
      });
      this._urlArray = data;
    },
    get: function get() {
      return this._urlArray;
    }
  }]);

  return ParserGet;
}();



/***/ }),

/***/ "./resources/js/modules/XhrClass.js":
/*!******************************************!*\
  !*** ./resources/js/modules/XhrClass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return xhrClass; });
/* harmony import */ var xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xhr */ "./node_modules/xhr/index.js");
/* harmony import */ var xhr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xhr__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var xhrClass =
/*#__PURE__*/
function () {
  function xhrClass(options) {
    _classCallCheck(this, xhrClass);

    this.xhr = xhr__WEBPACK_IMPORTED_MODULE_0___default.a;
    this.sync = !options.sync ? true : options.sync;
    this.uri = !options.uri ? '/admin-ajax' : options.uri;
    this.body = options.body;
    this.method = options.method;
    this.callback = !options.callback ? null : options.callback;

    if (options.headers) {
      this.headers = options.headers;
    }

    this.response = false;

    switch (_typeof(options.body)) {
      case "string":
        this.pushJSON();
        break;

      case "object":
        this.pushObject();
        break;

      case "function":
        options.body();
        break;

      case "undefined":
      default:
        return this.response;
    }

    return this.response;
  }

  _createClass(xhrClass, [{
    key: "pushObject",
    value: function pushObject() {
      // this.headers = {'Content-Type':'application/post'};
      this.headers = {
        'Content-Type': false
      };
      this.push();
    }
  }, {
    key: "pushJSON",
    value: function pushJSON() {
      this.headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.push();
    }
  }, {
    key: "push",
    value: function push() {
      this.xhr({
        method: this.method,
        body: this.body,
        uri: this.uri,
        headers: this.headers,
        processData: false,
        contentType: false,
        sync: this.sync,
        useXDR: true,
        json: true
      }, this.callback.bind(this));
    }
  }, {
    key: "headers",
    set: function set(headers) {
      if (!this._headers) {
        this._headers = {};
      }

      for (var item in headers) {
        this._headers[item] = headers[item];
      }
    },
    get: function get() {
      return this._headers;
    }
  }]);

  return xhrClass;
}();



/***/ }),

/***/ "./resources/widgets/UTM/Controllers/ControllerParseUTM.js":
/*!*****************************************************************!*\
  !*** ./resources/widgets/UTM/Controllers/ControllerParseUTM.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControllerParseUTM; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/widgets/UTM/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ControllerParseUTM =
/*#__PURE__*/
function () {
  function ControllerParseUTM(array) {
    _classCallCheck(this, ControllerParseUTM);

    if (!array || array.length < 1) {
      return false;
    }

    this.utm = array;
  }

  _createClass(ControllerParseUTM, [{
    key: "utm",
    set: function set(array) {
      var utm = false;

      var _loop = function _loop(item) {
        var key = _config__WEBPACK_IMPORTED_MODULE_0__["UTMSearch"].find(function (element) {
          if (element === item) {
            return item;
          }

          return false;
        });

        if (key) {
          utm = key;
        }
      };

      for (var item in array) {
        _loop(item);
      }

      this._utm = utm;
    },
    get: function get() {
      return this._utm;
    }
  }]);

  return ControllerParseUTM;
}();



/***/ }),

/***/ "./resources/widgets/UTM/Events/EventPopUpBanner.js":
/*!**********************************************************!*\
  !*** ./resources/widgets/UTM/Events/EventPopUpBanner.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventPopUpBanner; });
/* harmony import */ var _js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/modules/EventsAbstract */ "./resources/js/modules/EventsAbstract.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./resources/widgets/UTM/config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var EventPopUpBanner =
/*#__PURE__*/
function (_EventAbstract) {
  _inherits(EventPopUpBanner, _EventAbstract);

  function EventPopUpBanner() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, EventPopUpBanner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventPopUpBanner).call(this, options));
    _this.settings = _this.settings ? _this.settings : _config__WEBPACK_IMPORTED_MODULE_1__["Events"].popUpBanner.settings;

    _this.handler.apply(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(EventPopUpBanner, [{
    key: "handler",
    value: function handler() {
      _get(_getPrototypeOf(EventPopUpBanner.prototype), "handler", this).call(this);
    }
  }]);

  return EventPopUpBanner;
}(_js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/widgets/UTM/Front/FrontAssemblyElements.js":
/*!**************************************************************!*\
  !*** ./resources/widgets/UTM/Front/FrontAssemblyElements.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrontAssemblyElements; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/widgets/UTM/config.js");
/* harmony import */ var _js_modules_CreateElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/modules/CreateElement */ "./resources/js/modules/CreateElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FrontAssemblyElements =
/*#__PURE__*/
function () {
  function FrontAssemblyElements() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, FrontAssemblyElements);

    this.settings = !options ? _config__WEBPACK_IMPORTED_MODULE_0__["Elements"] : options;
    this.modalBanner = new _js_modules_CreateElement__WEBPACK_IMPORTED_MODULE_1__["default"](this.settings);
    this.handler();
  }

  _createClass(FrontAssemblyElements, [{
    key: "handler",
    value: function handler() {
      document.querySelector('body').append(this.modalBanner);
    }
  }]);

  return FrontAssemblyElements;
}();



/***/ }),

/***/ "./resources/widgets/UTM/config.js":
/*!*****************************************!*\
  !*** ./resources/widgets/UTM/config.js ***!
  \*****************************************/
/*! exports provided: UTMSearch, ElementConfig, Events, Elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTMSearch", function() { return UTMSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementConfig", function() { return ElementConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elements", function() { return Elements; });
// import EventPopUpBanner from "./Events/EventPopUpBanner";
var UTMSearch = ['utm_campaign', 'utm_content'];
var ElementConfig = {
  classes: {
    wrapper: 'widgetUtmAdvertising-wrapper',
    content: 'widgetUtmAdvertising-content',
    close: 'widgetUtmAdvertising-close'
  }
};
var Events = {
  popUpBanner: {
    // handler:EventPopUpBanner,
    settings: [{
      selector: ".".concat(ElementConfig.classes.wrapper),
      styles: {
        display: 'flex'
      },
      animates: [{
        title: 'switchOpacity',
        options: {
          opacity: '1'
        }
      }]
    }]
  }
};
var Elements = [{
  tag: 'div',
  "class": ElementConfig.classes.wrapper,
  styles: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    opacity: '0',
    display: 'none'
  },
  internalElements: [{
    tag: 'div',
    "class": ElementConfig.classes.content,
    styles: {
      padding: '2rem',
      width: '25rem',
      height: '5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '15%',
      backgroundColor: '#000000',
      color: '#ffffff',
      textAlign: 'center',
      verticalAlign: 'middle',
      fontStyle: 'italic',
      fontWeight: 'bold',
      borderRadius: '20px'
    },
    settings: {
      innerText: 'Какой то рекламный баннер'
    }
  }, {
    tag: 'span',
    "class": ElementConfig.classes.close,
    styles: {
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      opacity: '0.5',
      right: '35%',
      position: 'absolute',
      top: '40%',
      cursor: 'pointer',
      zIndex: '99999'
    },
    internalElements: [{
      tag: 'span',
      styles: {
        width: '80%',
        height: '2px',
        backgroundColor: '#000000',
        transform: 'rotate(45deg)',
        borderRadius: '2px',
        right: '5px',
        position: 'absolute'
      }
    }, {
      tag: 'span',
      styles: {
        width: '80%',
        height: '2px',
        backgroundColor: '#000000',
        transform: 'rotate(-45deg)',
        borderRadius: '2px',
        right: '5px',
        position: 'absolute'
      }
    }]
  }]
}];

/***/ }),

/***/ "./resources/widgets/UTM/index.js":
/*!****************************************!*\
  !*** ./resources/widgets/UTM/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Front_FrontAssemblyElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Front/FrontAssemblyElements */ "./resources/widgets/UTM/Front/FrontAssemblyElements.js");
/* harmony import */ var _Events_EventPopUpBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events/EventPopUpBanner */ "./resources/widgets/UTM/Events/EventPopUpBanner.js");
/* harmony import */ var _js_modules_ParserGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/modules/ParserGet */ "./resources/js/modules/ParserGet.js");
/* harmony import */ var _Controllers_ControllerParseUTM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controllers/ControllerParseUTM */ "./resources/widgets/UTM/Controllers/ControllerParseUTM.js");






(function _callee() {
  var ParserGetController, ControllerParserUtm;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          new _Front_FrontAssemblyElements__WEBPACK_IMPORTED_MODULE_1__["default"]();
          ParserGetController = new _js_modules_ParserGet__WEBPACK_IMPORTED_MODULE_3__["default"]();
          ControllerParserUtm = new _Controllers_ControllerParseUTM__WEBPACK_IMPORTED_MODULE_4__["default"](ParserGetController.urlArray);

          if (ControllerParserUtm.utm) {
            setTimeout(function () {
              new _Events_EventPopUpBanner__WEBPACK_IMPORTED_MODULE_2__["default"]();
            }, 1000);
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
})();

/***/ }),

/***/ "./resources/widgets/tradeIn/config.js":
/*!*********************************************!*\
  !*** ./resources/widgets/tradeIn/config.js ***!
  \*********************************************/
/*! exports provided: AjaxUri, mobileSize, actions, ElementsConfig, events, Elements, mobileSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxUri", function() { return AjaxUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSize", function() { return mobileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsConfig", function() { return ElementsConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elements", function() { return Elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSettings", function() { return mobileSettings; });
/* harmony import */ var _src_Events_EventRollUpClose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Events/EventRollUpClose */ "./resources/widgets/tradeIn/src/Events/EventRollUpClose.js");
/* harmony import */ var _src_Events_EventRollUpOpen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Events/EventRollUpOpen */ "./resources/widgets/tradeIn/src/Events/EventRollUpOpen.js");
/* harmony import */ var _src_Events_EventOpenModalWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Events/EventOpenModalWindow */ "./resources/widgets/tradeIn/src/Events/EventOpenModalWindow.js");
/* harmony import */ var _js_modules_Animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/modules/Animations */ "./resources/js/modules/Animations.js");
/* harmony import */ var _src_Events_EventCloseModalWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Events/EventCloseModalWindow */ "./resources/widgets/tradeIn/src/Events/EventCloseModalWindow.js");
/* harmony import */ var _src_Events_SelectChangeController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Events/SelectChangeController */ "./resources/widgets/tradeIn/src/Events/SelectChangeController.js");
/* harmony import */ var _src_Events_EventBackStep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Events/EventBackStep */ "./resources/widgets/tradeIn/src/Events/EventBackStep.js");
/* harmony import */ var _src_Events_EventNextStep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Events/EventNextStep */ "./resources/widgets/tradeIn/src/Events/EventNextStep.js");
/* harmony import */ var _src_Events_EventCarSelection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Events/EventCarSelection */ "./resources/widgets/tradeIn/src/Events/EventCarSelection.js");
/* harmony import */ var _src_Events_EventSendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Events/EventSendForm */ "./resources/widgets/tradeIn/src/Events/EventSendForm.js");










var AjaxUri = 'http://carsdb/widget/trade-in';
var mobileSize = 600;
var actions = {
  'mark': 'getMarks',
  'model': 'getModels',
  'year': 'getYear',
  'carGeneration': 'getCarGeneration',
  'engine': 'getEngine',
  'wheelDriveCar': 'getWheelDriveCar',
  'body': 'getBody',
  'mileage': 'getMileage',
  'price': 'getPrice',
  'cars': 'getParserCars',
  'form': 'sendMail'
};
var ElementsConfig = {
  classes: {
    sideWindowFront: {
      wrapper: "widjetTradeInSideWindow",
      select: "widjetTradeInSideWindowSelect",
      buttonContinue: "continueToFill",
      buttonTurn: "widjetTradeInRollUp",
      turnWrapper: "widjetTradeInOpenSideWindow",
      turnText: "widjetTradeInOpenSideWindowText"
    },
    modalWindow: {
      wrapper: 'widjetTradeInWrapper',
      content: 'content',
      leftColumn: 'widjetTradeInLeftColumn',
      rightColumn: 'widjetTradeInRightColumn',
      step_1: 'step_1',
      selectWrapper: 'widgetTradeInInputWrapper',
      buttonWrapper: 'widjetTradeInButtonWrapper',
      buttonCalculate: "widjetTradeInButtonDisabled",
      step_2: 'step_2',
      step_3: 'step_3',
      close: 'widjetTradeInClose',
      backStep: 'backStep',
      answer: 'answer',
      quote: 'quote',
      select: {
        mark: 'mark',
        model: 'model',
        year: 'year',
        carGeneration: 'carGeneration',
        engine: 'engine',
        wheelDriveCar: 'wheelDriveCar',
        body: 'body',
        mileage: 'mileage'
      },
      carCard: 'tradeIn-carCard',
      carCardImgWrapper: 'tradeIn-carCard-img-wrapper',
      carCardTitle: 'tradeIn-carCard-title',
      carCardEquipment: 'tradeIn-carCard-Equipment',
      carCardPrice: 'tradeIn-carCard-Price',
      carCardPriceOld: 'tradeIn-carCard-PriceOld',
      carCardPriceNew: 'tradeIn-carCard-PriceNew',
      carCardButton: 'tradeIn-carCard-Button',
      step_3ContentTradeInCar: 'titleTradeInCar',
      step_3ContentParserCar: 'titleParserCar',
      step_3ContentPrice: 'tradeInNewPrice'
    }
  },
  styles: {
    selects: {
      enabled: {
        background: 'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))'
      },
      disabled: {
        background: 'rgb(218,218,218)'
      }
    }
  },
  settings: {
    step: 800,
    stepUnit: 'px'
  },
  attributes: {
    cardPrice: 'data-price'
  }
};
var events = {
  rollUpClose: {
    handler: _src_Events_EventRollUpClose__WEBPACK_IMPORTED_MODULE_0__["default"],
    settings: [{
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.buttonTurn),
      styles: {
        display: "none",
        padding: "0",
        opacity: "0"
      },
      events: [{
        trigger: 'mouseenter',
        handler: function handler(options) {
          _js_modules_Animations__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.switchOpacity(document.querySelector(options.selector), {
            opacity: 1
          });
        },
        options: {
          selector: ".".concat(ElementsConfig.classes.sideWindowFront.buttonTurn)
        }
      }]
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper),
      styles: {
        opacity: '0.3',
        borderRadius: '5px 0 0 5px'
      },
      events: [{
        trigger: 'mouseover',
        target: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper),
        handler: function handler(options) {
          document.querySelector(options.target).style.opacity = 1;
        },
        options: {
          target: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper)
        }
      }, {
        trigger: 'mouseout',
        target: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper),
        handler: function handler(options) {
          document.querySelector(options.target).style.opacity = 0.3;
        },
        options: {
          target: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper)
        }
      }],
      animates: [{
        title: 'changeWidthAndHeight',
        options: {
          width: '120px',
          height: '50px'
        }
      }]
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper, " span:not(.").concat(ElementsConfig.classes.sideWindowFront.turnWrapper, ")"),
      styles: {
        display: 'none'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.select),
      styles: {
        display: 'none'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.turnWrapper),
      styles: {
        display: 'block'
      },
      animates: [{
        title: 'switchOpacity',
        options: {
          opacity: '1'
        }
      }]
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.turnText),
      styles: {
        right: '50px',
        top: "26px"
      }
    }]
  },
  rollUpOpen: {
    handler: _src_Events_EventRollUpOpen__WEBPACK_IMPORTED_MODULE_1__["default"],
    settings: [{
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.turnWrapper),
      styles: {
        display: 'none'
      },
      animates: [{
        title: 'switchOpacity',
        options: {
          opacity: '0'
        }
      }]
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper),
      styles: {
        borderRadius: '0 5px 5px 0',
        padding: '10px 30px'
      },
      animates: [{
        title: 'changeWidthAndHeight',
        options: {
          width: '240px',
          height: "85px"
        }
      }, {
        title: 'switchOpacity',
        options: {
          opacity: '1'
        }
      }]
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.wrapper, " span:not(.").concat(ElementsConfig.classes.sideWindowFront.buttonTurn, ")"),
      styles: {
        display: 'block'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.select),
      styles: {
        display: 'block'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.buttonTurn),
      styles: {
        display: 'block',
        padding: '10px'
      },
      animates: [{
        title: "switchOpacity",
        options: {
          delay: "300",
          opacity: "1"
        }
      }]
    }]
  },
  openModalWindow: {
    handler: _src_Events_EventOpenModalWindow__WEBPACK_IMPORTED_MODULE_2__["default"],
    settings: [{
      selector: ".".concat(ElementsConfig.classes.modalWindow.wrapper),
      styles: {
        display: 'flex'
      },
      animates: [{
        title: 'switchOpacity',
        options: {
          opacity: '1'
        }
      }]
    }]
  },
  closeModalWindow: {
    handler: _src_Events_EventCloseModalWindow__WEBPACK_IMPORTED_MODULE_4__["default"],
    settings: [{
      selector: ".".concat(ElementsConfig.classes.modalWindow.wrapper),
      animates: [{
        title: 'switchOpacity',
        options: {
          opacity: '0'
        }
      }]
    }, {
      selector: ".".concat(ElementsConfig.classes.modalWindow.wrapper),
      styles: {
        display: 'none'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.select),
      styles: {
        display: 'none'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.buttonContinue),
      styles: {
        display: 'block'
      }
    }]
  },
  selectItem: {
    handler: _src_Events_SelectChangeController__WEBPACK_IMPORTED_MODULE_5__["default"],
    settings: [{}]
  },
  backStep: {
    handler: _src_Events_EventBackStep__WEBPACK_IMPORTED_MODULE_6__["default"],
    activeElement: '[data-active="active"]',
    settings: [{}]
  },
  carSelection: {
    trigger: 'click',
    handler: function handler(options) {
      return new _src_Events_EventCarSelection__WEBPACK_IMPORTED_MODULE_8__["default"](options);
    },
    // settings:
    //     [
    //         {
    //
    //         }
    //     ],
    options: {}
  },
  sendForm: {
    handler: _src_Events_EventSendForm__WEBPACK_IMPORTED_MODULE_9__["default"],
    settings: [{}]
  },
  clearWidget: {
    settings: [{
      selector: ".".concat(ElementsConfig.classes.modalWindow.wrapper),
      animates: [{
        title: 'switchOpacity',
        options: {
          opacity: '0'
        }
      }],
      styles: {
        display: 'none'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.modalWindow.step_1),
      attributes: [{
        title: 'data-active',
        value: 'active'
      }],
      styles: {
        transform: 'translateX(0px)'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.modalWindow.step_2),
      attributes: [{
        title: 'data-active',
        value: 'disabled'
      }],
      styles: {
        transform: 'translateX(0px)'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.modalWindow.step_3),
      attributes: [{
        title: 'data-active',
        value: 'disabled'
      }],
      styles: {
        transform: 'translateX(800px)'
      }
    }, {
      selector: ".".concat(ElementsConfig.classes.sideWindowFront.select),
      settings: {
        value: '0'
      }
    }]
  }
};
var Elements = {
  sideWindowFront: [{
    tag: "div",
    "class": ElementsConfig.classes.sideWindowFront.wrapper,
    styles: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '10px 30px',
      background: 'rgb(17, 50, 191)',
      color: '#fff',
      borderRadius: '0px 5px 5px 0px',
      marginBottom: '10px',
      position: 'fixed',
      width: '240px',
      height: '85px',
      zIndex: '999',
      right: '0',
      top: '16%'
    },
    internalElements: [{
      tag: "span",
      styles: {
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '14px'
      },
      settings: {
        innerText: "Предложение по TRADE-IN за 1 минуту"
      }
    }, {
      tag: "select",
      "class": ElementsConfig.classes.sideWindowFront.select,
      styles: {
        background: ElementsConfig.styles.selects.enabled.background,
        borderRadius: '3px',
        width: '100%',
        padding: '5px 10px',
        color: '#000000'
      },
      events: [{
        trigger: 'change',
        handler: function handler(options) {
          return new events.openModalWindow.handler(options);
        },
        options: {
          settings: events.openModalWindow.settings
        }
      }],
      internalElements: [{
        tag: 'option',
        settings: {
          value: "0",
          innerText: "Модель",
          selected: true
        }
      }]
    }, {
      tag: "button",
      "class": ElementsConfig.classes.sideWindowFront.buttonContinue,
      styles: {
        display: 'none',
        background: 'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))',
        borderRadius: '3px',
        width: '100%',
        padding: '5px 10px',
        color: 'rgb(0, 0, 0)'
      },
      settings: {
        innerText: "Продолжить"
      },
      events: [{
        trigger: 'click',
        handler: function handler(options) {
          return new events.openModalWindow.handler(options);
        },
        options: {
          settings: events.openModalWindow.settings
        }
      }]
    }, {
      tag: "button",
      "class": ElementsConfig.classes.sideWindowFront.buttonTurn,
      styles: {
        position: 'absolute',
        color: 'rgb(0, 0, 0)',
        background: 'rgb(239, 239, 239)',
        bottom: '32%',
        right: '265px',
        padding: '8px 12px',
        fontSize: '13px',
        borderRadius: '0px 0px 5px 5px',
        cursor: 'pointer',
        fontFamily: 'Roboto',
        width: '105px',
        height: '36px',
        overflow: 'hidden',
        transform: 'rotate(90deg)',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        border: "none"
      },
      settings: {
        innerText: "Свернуть"
      },
      events: [{
        trigger: "click",
        handler: function handler(options) {
          return new events.rollUpClose.handler(options);
        },
        options: events.rollUpClose.settings
      }]
    }, {
      tag: "div",
      "class": ElementsConfig.classes.sideWindowFront.turnWrapper,
      styles: {
        display: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '10px',
        opacity: '0',
        top: '0',
        left: '0'
      },
      internalElements: [{
        tag: 'div',
        styles: {
          height: '25px',
          width: '25px',
          borderTop: '6px solid rgb(239, 239, 239)',
          borderLeft: '6px solid rgb(239, 239, 239)',
          transform: 'rotate(-45deg)',
          position: 'absolute',
          top: '25%',
          left: '20%',
          cursor: 'pointer'
        },
        animates: [{
          title: 'moveLeftRight',
          options: {
            translateX: '15%'
          }
        }],
        events: [{
          trigger: 'click',
          handler: function handler(options) {
            return new events.rollUpOpen.handler(options);
          },
          options: events.rollUpOpen.settings
        }]
      }, {
        tag: 'span',
        "class": "widjetTradeInOpenSideWindowText",
        styles: {
          position: 'absolute',
          right: '10px',
          top: '16px',
          cursor: 'pointer'
        },
        settings: {
          innerText: "TRADE-IN"
        }
      }]
    }]
  }],
  modalWindow: [{
    tag: 'div',
    "class": ElementsConfig.classes.modalWindow.wrapper,
    styles: {
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '9999',
      backgroundColor: 'rgba(0,0,0,0.7)',
      top: '0',
      right: '0',
      opacity: '0'
    },
    internalElements: [{
      tag: 'div',
      "class": ElementsConfig.classes.modalWindow.content,
      styles: {
        width: '900px',
        minHeight: '500px',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: '5px',
        position: 'relative',
        display: 'flex'
      },
      internalElements: [{
        tag: 'div',
        "class": ElementsConfig.classes.modalWindow.leftColumn,
        styles: {
          backgroundColor: '#1132bf',
          color: '#ffffff',
          padding: '10px',
          borderRadius: '5px 0 0 5px',
          position: 'relative',
          width: '200px'
        },
        internalElements: [{
          tag: 'span',
          styles: {
            position: 'absolute',
            border: '10px solid #1132bf',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            right: '-20px',
            borderRightColor: 'transparent',
            top: '30px'
          }
        }, {
          tag: 'span',
          styles: {
            textAlign: 'center',
            display: 'block',
            fontSize: '18px',
            fontWeight: 'bold'
          },
          settings: {
            innerText: "Расчёт по TRADE-IN за 1 минуту"
          }
        }]
      }, {
        tag: 'div',
        "class": ElementsConfig.classes.modalWindow.rightColumn,
        styles: {
          width: '700px',
          overflow: 'hidden',
          position: 'relative'
        },
        internalElements: [{
          tag: 'div',
          "class": ElementsConfig.classes.modalWindow.step_1,
          styles: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            top: 0,
            right: 0
          },
          attributes: [{
            title: 'data-active',
            value: 'active'
          }],
          internalElements: [{
            tag: 'form',
            internalElements: [{
              tag: 'h3',
              styles: {
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'center'
              },
              settings: {
                innerText: "ПОЛУЧИТЕ ПРЕДЛОЖЕНИЕ ПО ТРЕЙД-ИН ЗА 1 МИНУТУ БЕЗ ПОЕЗДКИ В АВТОСАЛОН И ОБЩЕНИЯ С МЕНЕДЖЕРОМ"
              }
            }, {
              tag: "h4",
              styles: {
                fontSize: '14px',
                textAlign: 'center',
                marginBottom: '15px'
              },
              settings: {
                innerText: 'ПОЛУЧИТЕ ПРЕДЛОЖЕНИЕ ПО ТРЕЙД-ИН ЗА 1 МИНУТУ БЕЗ ПОЕЗДКИ В АВТОСАЛОН И ОБЩЕНИЯ С МЕНЕДЖЕРОМ'
              }
            }, {
              tag: 'div',
              "class": ElementsConfig.classes.modalWindow.selectWrapper,
              styles: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
              },
              internalElements: [{
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.mark,
                styles: {
                  background: ElementsConfig.styles.selects.disabled.background,
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'model',
                  disabled: 'disabled',
                  title: "mark"
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Марка',
                    value: '0'
                  }
                }]
              }, {
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.model,
                styles: {
                  background: 'rgb(218,218,218)',
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'year',
                  disabled: 'disabled',
                  title: "model"
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Модель',
                    value: '0'
                  }
                }]
              }, {
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.year,
                styles: {
                  background: 'rgb(218,218,218)',
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'carGeneration',
                  disabled: 'disabled',
                  title: "year"
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Год',
                    value: '0'
                  }
                }]
              }, {
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.carGeneration,
                styles: {
                  background: 'rgb(218,218,218)',
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'engine',
                  disabled: 'disabled',
                  title: "carGeneration"
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Поколение',
                    value: '0'
                  }
                }]
              }, {
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.engine,
                styles: {
                  background: 'rgb(218,218,218)',
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'wheelDriveCar',
                  disabled: 'disabled',
                  title: 'engine'
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Двигатель',
                    value: '0'
                  }
                }]
              }, {
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.wheelDriveCar,
                styles: {
                  background: 'rgb(218,218,218)',
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'body',
                  disabled: 'disabled',
                  title: "wheelDriveCar"
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Привод',
                    value: '0'
                  }
                }]
              }, {
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.body,
                styles: {
                  background: 'rgb(218,218,218)',
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'mileage',
                  disabled: 'disabled',
                  title: 'body'
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Кузов',
                    value: '0'
                  }
                }]
              }, {
                tag: 'select',
                "class": ElementsConfig.classes.modalWindow.select.mileage,
                styles: {
                  background: 'rgb(218,218,218)',
                  borderRadius: '3px',
                  width: '40%',
                  padding: '5px 10px',
                  display: 'block',
                  marginBottom: '12px',
                  color: '#000000'
                },
                settings: {
                  value: 0,
                  action: 'price',
                  disabled: 'disabled',
                  title: 'mileage'
                },
                events: [{
                  trigger: 'change',
                  handler: function handler(options) {
                    return new events.selectItem.handler(options);
                  },
                  options: {
                    settings: events.selectItem.settings
                  }
                }],
                internalElements: [{
                  tag: 'option',
                  settings: {
                    innerText: 'Пробег',
                    value: '0'
                  }
                }]
              }, {
                tag: 'div',
                "class": ElementsConfig.classes.modalWindow.buttonWrapper,
                styles: {
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                },
                internalElements: [{
                  tag: "div",
                  id: "widjetTradeInCalculateResult",
                  "class": ElementsConfig.classes.modalWindow.buttonCalculate,
                  styles: {
                    padding: '10px 40px',
                    borderRadius: '5px',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    marginTop: '10px',
                    cursor: 'pointer',
                    backgroundColor: '#1132bf'
                  },
                  settings: {
                    innerText: "Оценить прямо сейчас!"
                  }
                }]
              }]
            }]
          }]
        }, {
          tag: "div",
          "class": ElementsConfig.classes.modalWindow.step_2,
          styles: {
            position: 'absolute',
            // width: '585px',
            width: '85%',
            height: '85%',
            display: 'flex',
            alignItems: 'center',
            top: 0,
            right: '-800px',
            padding: '50px',
            paddingBottom: '20px',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflowY: 'scroll'
          },
          attributes: [{
            title: 'data-active',
            value: 'disabled'
          }],
          internalElements: [{
            tag: "div",
            "class": ElementsConfig.classes.modalWindow.carCard,
            styles: {
              display: 'flex',
              flexDirection: 'column',
              width: '20%',
              height: 'auto',
              padding: '5%'
            },
            internalElements: [{
              tag: 'div',
              "class": ElementsConfig.classes.modalWindow.carCardImgWrapper,
              styles: {
                overflow: 'hidden'
              },
              internalElements: [{
                tag: "img",
                settings: {
                  src: ''
                },
                styles: {
                  maxWidth: '100%'
                }
              }]
            }, {
              tag: "span",
              "class": ElementsConfig.classes.modalWindow.carCardTitle,
              styles: {
                textAlign: 'center'
              },
              settings: {
                innerText: 'Car'
              }
            }, {
              tag: "span",
              "class": ElementsConfig.classes.modalWindow.carCardEquipment,
              styles: {
                textAlign: 'center'
              },
              settings: {
                innerText: 'equipment'
              }
            }, {
              tag: "div",
              "class": ElementsConfig.classes.modalWindow.carCardPrice,
              styles: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              },
              internalElements: [{
                tag: 'div',
                "class": ElementsConfig.classes.modalWindow.carCardPriceOld,
                styles: {
                  textDecoration: 'line-through',
                  textAlign: 'center'
                },
                internalElements: [{
                  tag: 'span',
                  settings: {
                    innerText: ''
                  }
                }, {
                  tag: 'span',
                  settings: {
                    innerText: ' руб'
                  }
                }]
              }, {
                tag: 'div',
                "class": ElementsConfig.classes.modalWindow.carCardPriceNew,
                styles: {
                  textAlign: 'center',
                  fontWeight: 'bold'
                },
                internalElements: [{
                  tag: 'span',
                  settings: {
                    innerText: ''
                  }
                }, {
                  tag: 'span',
                  settings: {
                    innerText: ' руб'
                  }
                }]
              }]
            }, {
              tag: "button",
              "class": ElementsConfig.classes.modalWindow.carCardButton,
              styles: {
                width: '90%',
                margin: '2px auto',
                textAlign: 'center',
                background: '#1132bf',
                border: '0',
                padding: '8px',
                color: '#ffffff',
                borderRadius: '8px',
                cursor: 'pointer'
              },
              settings: {
                innerText: 'Обменять'
              }
            }]
          }]
        }, {
          tag: "div",
          "class": ElementsConfig.classes.modalWindow.step_3,
          styles: {
            position: 'absolute',
            // width: '700px',
            width: '85%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            top: 0,
            right: '-800px',
            padding: '10px 50px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            overflowY: 'hidden'
          },
          attributes: [{
            title: 'data-active',
            value: 'disabled'
          }],
          internalElements: [{
            tag: 'h3',
            styles: {
              fontSize: '19px',
              fontWeight: '200',
              textAlign: 'center',
              textTransform: 'uppercase'
            },
            settings: {
              innerHTML: "\u0421\u0414\u0410\u0419\u0422\u0415 \u0412\u0410\u0428 \u0410\u0412\u0422\u041E\u041C\u041E\u0411\u0418\u041B\u042C <span class=\"".concat(ElementsConfig.classes.modalWindow.step_3ContentTradeInCar, "\"></span> \u0412 TRADE-IN \u0418 \u041F\u0420\u0418\u041E\u0411\u0420\u0415\u0422\u0418\u0422\u0415 \u041D\u041E\u0412\u042B\u0419 <span class=\"").concat(ElementsConfig.classes.modalWindow.step_3ContentParserCar, "\"></span> \u043E\u0442 <span class=\"").concat(ElementsConfig.classes.modalWindow.step_3ContentPrice, "\"></span>")
            }
          }, {
            tag: 'h4',
            styles: {
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '15px'
            },
            settings: {
              innerText: "ОСТАВЬТЕ ТЕЛЕФОН, ЧТОБЫ ПОЛУЧИТЬ ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ ПО TRADE-IN"
            }
          }, {
            tag: 'span',
            "class": ElementsConfig.classes.modalWindow.answer,
            styles: {
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80%',
              height: '40px',
              margin: '0 auto',
              backgroundColor: '#0be313',
              borderRadius: '5px',
              color: '#ffffff',
              opacity: '0',
              padding: '20px'
            },
            settings: {
              innerText: "Ваше сообщение отправлено"
            }
          }, {
            tag: 'form',
            styles: {
              width: 'auto',
              height: 'auto',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            },
            internalElements: [{
              tag: 'span',
              styles: {
                fontSize: '30px',
                position: 'absolute',
                backgroundColor: 'transparent',
                opacity: '0.5',
                top: '16px',
                left: '42px',
                zIndex: 999
              },
              settings: {
                innerText: "📞"
              }
            }, {
              tag: 'input',
              styles: {
                width: '88%',
                padding: '12px 20px 12px 40px',
                border: '1px solid #1132bf',
                borderRadius: '10px',
                fontSize: '20px',
                margin: '10px 0',
                position: 'relative',
                letterSpacing: '4px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Roboto'
              },
              settings: {
                type: "tel",
                required: "required",
                name: "form_text_230"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_mark"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_model"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_year"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_carGeneration"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_engine"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_wheelDriveCar"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_body"
              }
            }, {
              tag: 'input',
              settings: {
                type: "hidden",
                name: "_mileage"
              }
            }, {
              tag: 'button',
              styles: {
                width: '88%',
                padding: '16px 50px',
                borderRadius: '5px',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginTop: '10px',
                cursor: 'pointer',
                backgroundColor: '#1132bf',
                border: 'none'
              },
              settings: {
                innerText: "Получить выгодное предложение по Trade-In"
              },
              events: [{
                trigger: 'click',
                handler: function handler(options) {
                  return new events.sendForm.handler(options);
                },
                options: {
                  settings: events.sendForm.settings
                }
              }]
            }, {
              tag: 'span',
              "class": 'quote',
              styles: {
                display: 'block',
                textAlign: 'center',
                fontWeight: 'bold'
              },
              settings: {
                innerText: "Сегодня уже 27 клиентов оставили заявку"
              }
            }, {
              tag: 'p',
              styles: {
                marginTop: '30px'
              },
              settings: {
                innerText: "При отправке заявки вы соглашаетесь на использование ваших персональных данных. Конечная цена автомобиля зависит от состояния Вашего автомобиля и выбранной комплектации и опций нового автомобиля Hyundai"
              }
            }]
          }]
        }]
      }, {
        tag: "span",
        "class": ElementsConfig.classes.modalWindow.close,
        styles: {
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: '0.5',
          right: '20px',
          position: 'absolute',
          top: '5px',
          cursor: 'pointer',
          zIndex: '99999'
        },
        events: [{
          trigger: 'click',
          handler: function handler(options) {
            return new events.closeModalWindow.handler(options);
          },
          options: {
            settings: events.closeModalWindow.settings
          }
        }],
        internalElements: [{
          tag: "span",
          styles: {
            width: '80%',
            height: '2px',
            backgroundColor: '#000000',
            transform: 'rotate(45deg)',
            borderRadius: '2px',
            right: '5px',
            position: 'absolute'
          }
        }, {
          tag: "span",
          styles: {
            width: '80%',
            height: '2px',
            backgroundColor: '#000000',
            transform: 'rotate(-45deg)',
            borderRadius: '2px',
            right: '5px',
            position: 'absolute'
          }
        }]
      }, {
        tag: "span",
        "class": ElementsConfig.classes.modalWindow.backStep,
        styles: {
          display: 'flex',
          flexDirection: 'center',
          alignItems: 'center',
          opacity: '0',
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          top: '40%',
          left: '15%',
          cursor: 'pointer'
        },
        events: [{
          trigger: 'click',
          handler: function handler(options) {
            return new events.backStep.handler(options);
          },
          options: {
            element: events.backStep.activeElement
          }
        }],
        internalElements: [{
          tag: "span",
          styles: {
            width: '20px',
            height: '20px',
            border: '2px solid #ffffff',
            borderTop: 'none',
            borderRight: 'none',
            transform: 'rotate(45deg)',
            position: 'absolute',
            left: '16px'
          }
        }]
      }]
    }]
  }]
};
var mobileSettings = {
  sideWindowFront: [{
    // selector    :`.${Elements.sideWindowFront.class}`,
    styles: [{
      style: 'width',
      value: '120px'
    }, {
      style: 'height',
      value: '50px'
    }, {
      style: 'padding',
      value: 0
    }, {
      style: 'borderRadius',
      value: '5px 0 0 5px'
    }]
  }, {
    // selector    :`.${Elements.sideWindowFront.select.class}`,
    styles: [{
      style: "display",
      value: "none"
    }],
    settings: [{
      title: 'innerText' // value   : Elements.sideWindowFront.RollUp.close.innerInnerSpan.text

    }]
  }, {
    selector: ".".concat(Elements.sideWindowFront["class"], ">span"),
    settings: [{
      title: 'innerText' // value   : Elements.sideWindowFront.RollUp.close.innerInnerSpan.text

    }],
    styles: [{
      style: 'margin',
      value: "0"
    }]
  }, {
    // selector    :`.${Elements.sideWindowFront.RollUp.open.class}`,
    styles: [{
      style: 'display',
      value: "none"
    }]
  }]
}; // module.exports = {AjaxUri,actions,Elements,ElementsConfig,mobileSettings,events,mobileSize};

/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventBackStep.js":
/*!***************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventBackStep.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventBackStep; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/modules/Animations */ "./resources/js/modules/Animations.js");
/* harmony import */ var _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../js/modules/ApplicationSettings */ "./resources/js/modules/ApplicationSettings.js");
/* harmony import */ var _SwitchButtonBackStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchButtonBackStep */ "./resources/widgets/tradeIn/src/Events/SwitchButtonBackStep.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var EventBackStep =
/*#__PURE__*/
function () {
  function EventBackStep(options) {
    _classCallCheck(this, EventBackStep);

    if (!options.element) {
      return;
    }

    this.element = options.element;
    this.stepUnit = !options.stepUnit ? _config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].settings.stepUnit : options.stepUnit;
    this.prevElement = this.element;
    this.step = !options.step ? _config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].settings.step : options.step;

    if (this.prevElement) {
      this.handler();
    }
  }

  _createClass(EventBackStep, [{
    key: "handler",
    value: function handler() {
      _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.horizontalMixing(this.element, {
        translateX: this.step + this.stepUnit
      });
      _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.horizontalMixing(this.prevElement, {
        translateX: "-".concat(this.step + this.stepUnit)
      }); // Animations.prototype.horizontalMixing(this.prevElement,{translateX:`0`});

      var ApplicationSettingElement = new _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_2__["default"](this.element);
      var ApplicationSettingPrevElement = new _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_2__["default"](this.prevElement);
      ApplicationSettingElement.addAttribute([{
        title: 'data-active',
        value: 'disabled'
      }]);
      ApplicationSettingPrevElement.addAttribute([{
        title: 'data-active',
        value: 'active'
      }]);
      new _SwitchButtonBackStep__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
  }, {
    key: "element",
    set: function set(selector) {
      this._element = document.querySelector(selector);
    },
    get: function get() {
      return this._element;
    }
  }, {
    key: "prevElement",
    set: function set(element) {
      this._prevElement = element.previousElementSibling;
    },
    get: function get() {
      return this._prevElement;
    }
  }, {
    key: "step",
    set: function set(value) {
      if (this.prevElement.style.right === '0px') {
        this._step = 0;
      } else {
        this._step = value;
      }
    },
    get: function get() {
      return this._step;
    }
  }]);

  return EventBackStep;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventCarSelection.js":
/*!*******************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventCarSelection.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventCarSelection; });
/* harmony import */ var _EventNextStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventNextStep */ "./resources/widgets/tradeIn/src/Events/EventNextStep.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _front_CollectFormCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front/CollectFormCallback */ "./resources/widgets/tradeIn/src/front/CollectFormCallback.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var EventCarSelection =
/*#__PURE__*/
function () {
  function EventCarSelection(options) {
    _classCallCheck(this, EventCarSelection);

    this.card = options.event.target.parentNode;
    this.title = this.card.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.carCardTitle)).innerText;
    this.equipment = this.card.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.carCardEquipment)).innerText;
    this.price = this.card.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.carCardPriceNew)).innerText;
    this.handler();
  }

  _createClass(EventCarSelection, [{
    key: "collectFormCallback",
    value: function collectFormCallback() {
      var CollectFormCallbackController = new _front_CollectFormCallback__WEBPACK_IMPORTED_MODULE_2__["default"]();
      CollectFormCallbackController.setPriceContent(this.price);
    }
  }, {
    key: "handler",
    value: function handler() {
      new _EventNextStep__WEBPACK_IMPORTED_MODULE_0__["default"]({
        element: document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.step_2))
      });
      this.collectFormCallback();
    }
  }, {
    key: "title",
    set: function set(value) {
      this._title = value;
    },
    get: function get() {
      return this._title;
    }
  }, {
    key: "equipment",
    set: function set(value) {
      this._equipment = value;
    },
    get: function get() {
      return this._equipment;
    }
  }, {
    key: "price",
    set: function set(value) {
      this._price = value;
    },
    get: function get() {
      return this._price;
    }
  }]);

  return EventCarSelection;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventClearWidget.js":
/*!******************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventClearWidget.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventClearWidget; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/modules/EventsAbstract */ "./resources/js/modules/EventsAbstract.js");
/* harmony import */ var _front_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front/SelectChangeAbstract */ "./resources/widgets/tradeIn/src/front/SelectChangeAbstract.js");
/* harmony import */ var _front_SelectDisabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../front/SelectDisabled */ "./resources/widgets/tradeIn/src/front/SelectDisabled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var EventClearWidget =
/*#__PURE__*/
function (_EventsAbstract) {
  _inherits(EventClearWidget, _EventsAbstract);

  function EventClearWidget() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, EventClearWidget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventClearWidget).call(this, options));
    _this.settings = _this.settings ? _this.settings : _config__WEBPACK_IMPORTED_MODULE_0__["events"].clearWidget.settings;

    _this.handler.apply(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(EventClearWidget, [{
    key: "clearSelect",
    value: function clearSelect() {
      var selectMark = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.select.mark));
      var SelectChangeAbstractController = new _front_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_2__["default"](selectMark, '0');
      SelectChangeAbstractController.allNextSelect.forEach(function (item) {
        new _front_SelectDisabled__WEBPACK_IMPORTED_MODULE_3__["default"](item, '0');
      });
      selectMark.disabled = true;
      selectMark.value = 0;
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      var inputs = document.querySelectorAll(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_3, " input"));
      inputs.forEach(function (item) {
        item.value = '';
      });
    }
  }, {
    key: "handler",
    value: function handler() {
      _get(_getPrototypeOf(EventClearWidget.prototype), "handler", this).call(this);

      this.clearSelect();
      this.clearInput();
    }
  }]);

  return EventClearWidget;
}(_js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventCloseModalWindow.js":
/*!***********************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventCloseModalWindow.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventCloseModalWindow; });
/* harmony import */ var _js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../js/modules/EventsAbstract */ "./resources/js/modules/EventsAbstract.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var EventCloseModalWindow =
/*#__PURE__*/
function (_EventsAbstract) {
  _inherits(EventCloseModalWindow, _EventsAbstract);

  function EventCloseModalWindow() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, EventCloseModalWindow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventCloseModalWindow).call(this, options));
    _this.settings = _config__WEBPACK_IMPORTED_MODULE_1__["events"].closeModalWindow.settings;

    _this.handler.apply(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(EventCloseModalWindow, [{
    key: "handler",
    value: function handler() {
      _get(_getPrototypeOf(EventCloseModalWindow.prototype), "handler", this).call(this);

      var buttonContinue = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.sideWindowFront.buttonContinue));
      buttonContinue.setAttribute('data-active', '1');
    }
  }]);

  return EventCloseModalWindow;
}(_js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventNextStep.js":
/*!***************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventNextStep.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventNextStep; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/modules/Animations */ "./resources/js/modules/Animations.js");
/* harmony import */ var _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../js/modules/ApplicationSettings */ "./resources/js/modules/ApplicationSettings.js");
/* harmony import */ var _SwitchButtonBackStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchButtonBackStep */ "./resources/widgets/tradeIn/src/Events/SwitchButtonBackStep.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var EventNextStep =
/*#__PURE__*/
function () {
  function EventNextStep(options) {
    _classCallCheck(this, EventNextStep);

    if (!options.element) {
      return;
    }

    this.element = options.element;
    this.step = !options.step ? _config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].settings.step : options.step;
    this.stepUnit = !options.stepUnit ? _config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].settings.stepUnit : options.stepUnit;
    this.nextElement = this.element;

    if (this.nextElement) {
      this.handler();
    }
  }

  _createClass(EventNextStep, [{
    key: "handler",
    value: function handler() {
      _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.horizontalMixing(this.nextElement, {
        translateX: "-".concat(this.step + this.stepUnit)
      });
      _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.horizontalMixing(this.element, {
        translateX: this.step + this.stepUnit
      });
      var ApplicationSettingElement = new _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_2__["default"](this.element);
      var ApplicationSettingNextElement = new _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_2__["default"](this.nextElement);
      ApplicationSettingElement.addAttribute([{
        title: 'data-active',
        value: 'disabled'
      }]);
      ApplicationSettingNextElement.addAttribute([{
        title: 'data-active',
        value: 'active'
      }]);
      new _SwitchButtonBackStep__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
  }, {
    key: "element",
    set: function set(element) {
      if (typeof element === 'string') {
        this._element = document.querySelector(element);
      } else {
        this._element = element;
      }
    },
    get: function get() {
      return this._element;
    }
  }, {
    key: "nextElement",
    set: function set(element) {
      this._nextElement = element.nextElementSibling;
    },
    get: function get() {
      return this._nextElement;
    }
  }]);

  return EventNextStep;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventOpenModalWindow.js":
/*!**********************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventOpenModalWindow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventOpenModalWindow; });
/* harmony import */ var _js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../js/modules/EventsAbstract */ "./resources/js/modules/EventsAbstract.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _front_SelectEnabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front/SelectEnabled */ "./resources/widgets/tradeIn/src/front/SelectEnabled.js");
/* harmony import */ var _SelectChangeController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectChangeController */ "./resources/widgets/tradeIn/src/Events/SelectChangeController.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var EventOpenModalWindow =
/*#__PURE__*/
function (_EventsAbstract) {
  _inherits(EventOpenModalWindow, _EventsAbstract);

  function EventOpenModalWindow() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, EventOpenModalWindow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventOpenModalWindow).call(this, options.settings));
    _this.settings = _this.settings ? _this.settings : _config__WEBPACK_IMPORTED_MODULE_1__["events"];
    _this.value = options.event.target.value;

    _this.handler.apply(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(EventOpenModalWindow, [{
    key: "handler",
    value: function handler() {
      _get(_getPrototypeOf(EventOpenModalWindow.prototype), "handler", this).call(this);

      var attributeButtonContinue = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.sideWindowFront.buttonContinue)).getAttribute('data-active');

      if (attributeButtonContinue === '0' || attributeButtonContinue === null) {
        new _front_SelectEnabled__WEBPACK_IMPORTED_MODULE_2__["default"](null, this.value);
        new _SelectChangeController__WEBPACK_IMPORTED_MODULE_3__["default"]({
          event: {
            target: document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.select.mark))
          }
        });
      }
    }
  }]);

  return EventOpenModalWindow;
}(_js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventPriceComparison.js":
/*!**********************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventPriceComparison.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventPriceComparison; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EventPriceComparison =
/*#__PURE__*/
function () {
  function EventPriceComparison(price) {
    _classCallCheck(this, EventPriceComparison);

    price = Number(price);

    if (!price || typeof price !== 'number') {
      return;
    }

    this.price = price;
    this.cards = ".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.carCard);
    this.handler();
  }

  _createClass(EventPriceComparison, [{
    key: "comparisonPrice",
    value: function comparisonPrice(oldPrice, price) {
      if (oldPrice - price <= 0) {
        return 0;
      }

      return oldPrice - price;
    }
  }, {
    key: "handler",
    value: function handler() {
      var _this = this;

      this.cards.forEach(function (item) {
        var oldPrice = item.getAttribute(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].attributes.cardPrice);
        var containerPrice = item.querySelectorAll(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.carCardPriceNew, " span"))[0];
        containerPrice.innerText = _this.comparisonPrice(oldPrice, _this.price);
      });
    }
  }, {
    key: "cards",
    set: function set(selector) {
      this._cards = document.querySelectorAll(selector);
    },
    get: function get() {
      return this._cards;
    }
  }]);

  return EventPriceComparison;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventRollUpClose.js":
/*!******************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventRollUpClose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventRollUpClose; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/modules/EventsAbstract */ "./resources/js/modules/EventsAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var EventRollUpClose =
/*#__PURE__*/
function (_EventsAbstract) {
  _inherits(EventRollUpClose, _EventsAbstract);

  function EventRollUpClose() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, EventRollUpClose);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventRollUpClose).call(this, options));
    _this.settings = _this.settings ? _this.settings : _config__WEBPACK_IMPORTED_MODULE_0__["events"].rollUpClose.settings;

    _this.handler.apply(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(EventRollUpClose, [{
    key: "handler",
    value: function handler() {
      _get(_getPrototypeOf(EventRollUpClose.prototype), "handler", this).call(this);

      var buttonContinue = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.sideWindowFront.buttonContinue));

      if (buttonContinue.getAttribute('data-active') === '1') {
        buttonContinue.style.display = 'none';
      }
    }
  }]);

  return EventRollUpClose;
}(_js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventRollUpOpen.js":
/*!*****************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventRollUpOpen.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventRollUpOpen; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/modules/EventsAbstract */ "./resources/js/modules/EventsAbstract.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var EventRollUpOpen =
/*#__PURE__*/
function (_EventsAbstract) {
  _inherits(EventRollUpOpen, _EventsAbstract);

  function EventRollUpOpen() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, EventRollUpOpen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventRollUpOpen).call(this, options));
    _this.settings = _this.settings ? _this.settings : _config__WEBPACK_IMPORTED_MODULE_0__["events"].rollUpOpen.settings;

    _this.handler.apply(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(EventRollUpOpen, [{
    key: "handler",
    value: function handler() {
      _get(_getPrototypeOf(EventRollUpOpen.prototype), "handler", this).call(this);

      var buttonContinue = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.sideWindowFront.buttonContinue));
      var select = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.sideWindowFront.select));

      if (buttonContinue.getAttribute('data-active') === '1') {
        buttonContinue.style.display = 'block';
        select.style.display = 'none';
      }
    }
  }]);

  return EventRollUpOpen;
}(_js_modules_EventsAbstract__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventSendForm.js":
/*!***************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventSendForm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSendForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connect_GetItemsClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connect/GetItemsClass */ "./resources/widgets/tradeIn/src/connect/GetItemsClass.js");
/* harmony import */ var _EventClearWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventClearWidget */ "./resources/widgets/tradeIn/src/Events/EventClearWidget.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var EventSendForm =
/*#__PURE__*/
function () {
  function EventSendForm(options) {
    _classCallCheck(this, EventSendForm);

    options.event.preventDefault();
    this.data = document.querySelectorAll(".".concat(_config__WEBPACK_IMPORTED_MODULE_3__["ElementsConfig"].classes.modalWindow.step_3, " input"));
    this.handler();
  }

  _createClass(EventSendForm, [{
    key: "handler",
    value: function handler() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handler$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _connect_GetItemsClass__WEBPACK_IMPORTED_MODULE_1__["default"]({
                table: 'form',
                data: this.data
              }));

            case 2:
              response = _context.sent;
              new _EventClearWidget__WEBPACK_IMPORTED_MODULE_2__["default"]();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "data",
    set: function set(elements) {
      var data = [];
      elements.forEach(function (item) {
        data.push({
          title: item.name,
          value: item.value
        });
      });
      this._data = data;
    },
    get: function get() {
      return this._data;
    }
  }]);

  return EventSendForm;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/EventTradeInCarSelected.js":
/*!*************************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/EventTradeInCarSelected.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTradeInCarSelected; });
/* harmony import */ var _EventNextStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventNextStep */ "./resources/widgets/tradeIn/src/Events/EventNextStep.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _EventPriceComparison__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventPriceComparison */ "./resources/widgets/tradeIn/src/Events/EventPriceComparison.js");
/* harmony import */ var _front_CollectFormCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../front/CollectFormCallback */ "./resources/widgets/tradeIn/src/front/CollectFormCallback.js");
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../js/common */ "./resources/js/common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var EventTradeInCarSelected =
/*#__PURE__*/
function () {
  function EventTradeInCarSelected(price) {
    _classCallCheck(this, EventTradeInCarSelected);

    this.price = price;
    this.tradeInCar = {
      mark: ".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.select.mark),
      model: ".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.select.model)
    };
    this.selects = document.querySelectorAll(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.step_1, " select"));
    this.handler();
  }

  _createClass(EventTradeInCarSelected, [{
    key: "collectFormCallback",
    value: function collectFormCallback() {
      var CollectFormCallbackController = new _front_CollectFormCallback__WEBPACK_IMPORTED_MODULE_3__["default"]();
      CollectFormCallbackController.setTradeInCarContent(this.tradeInCar);
      CollectFormCallbackController.setInputsValue(this.selects);
    }
  }, {
    key: "handler",
    value: function handler() {
      new _EventNextStep__WEBPACK_IMPORTED_MODULE_0__["default"]({
        element: document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.wrapper, " .").concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.step_1))
      });
      new _EventPriceComparison__WEBPACK_IMPORTED_MODULE_2__["default"](this.price);
      this.collectFormCallback();
    }
  }, {
    key: "tradeInCar",
    set: function set(value) {
      var mark = Object(_js_common__WEBPACK_IMPORTED_MODULE_4__["queryElement"])(value.mark);
      var model = Object(_js_common__WEBPACK_IMPORTED_MODULE_4__["queryElement"])(value.model);
      var markValue = mark.options[mark.selectedIndex].innerText;
      var modelValue = model.options[model.selectedIndex].innerText;
      this._tradeInCar = "".concat(markValue, " ").concat(modelValue);
    },
    get: function get() {
      return this._tradeInCar;
    }
  }, {
    key: "selects",
    set: function set(elements) {
      var data = [];
      elements.forEach(function (item) {
        data.push({
          title: item.title,
          value: item.value
        });
      });
      this._selects = data;
    },
    get: function get() {
      return this._selects;
    }
  }]);

  return EventTradeInCarSelected;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/SelectChangeController.js":
/*!************************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/SelectChangeController.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectChangeController; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connect_GetItemsClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connect/GetItemsClass */ "./resources/widgets/tradeIn/src/connect/GetItemsClass.js");
/* harmony import */ var _front_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../front/SelectChangeAbstract */ "./resources/widgets/tradeIn/src/front/SelectChangeAbstract.js");
/* harmony import */ var _front_SelectEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../front/SelectEnabled */ "./resources/widgets/tradeIn/src/front/SelectEnabled.js");
/* harmony import */ var _front_SelectDisabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../front/SelectDisabled */ "./resources/widgets/tradeIn/src/front/SelectDisabled.js");
/* harmony import */ var _EventNextStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventNextStep */ "./resources/widgets/tradeIn/src/Events/EventNextStep.js");
/* harmony import */ var _EventPriceComparison__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventPriceComparison */ "./resources/widgets/tradeIn/src/Events/EventPriceComparison.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _EventTradeInCarSelected__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventTradeInCarSelected */ "./resources/widgets/tradeIn/src/Events/EventTradeInCarSelected.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var SelectChangeController =
/*#__PURE__*/
function () {
  function SelectChangeController(options) {
    _classCallCheck(this, SelectChangeController);

    if (!options.event || options.event.target.value === '0') {
      return;
    }

    this.select = options.event.target;
    this.data = this.select;
    this.action = this.select;
    this.nextSelect = this.select;
    this.handler();
  }

  _createClass(SelectChangeController, [{
    key: "handler",
    value: function handler() {
      var response, SelectChangeAbstractController, SelectEnabledController;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handler$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _connect_GetItemsClass__WEBPACK_IMPORTED_MODULE_1__["default"]({
                table: this.action,
                data: this.data
              }));

            case 2:
              response = _context.sent;

              if (!response.price) {
                _context.next = 6;
                break;
              }

              new _EventTradeInCarSelected__WEBPACK_IMPORTED_MODULE_8__["default"](response.price);
              return _context.abrupt("return");

            case 6:
              SelectChangeAbstractController = new _front_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_2__["default"](this.select);
              SelectChangeAbstractController.allNextSelect.forEach(function (item) {
                new _front_SelectDisabled__WEBPACK_IMPORTED_MODULE_4__["default"](item);
              });

              if (this.nextSelect) {
                SelectEnabledController = new _front_SelectEnabled__WEBPACK_IMPORTED_MODULE_3__["default"](this.nextSelect, '0', response);
                this.nextSelect.value = "0";
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "nextSelect",
    set: function set(select) {
      var SelectChangeAbstractController = new _front_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_2__["default"](select);
      this._nextSelect = SelectChangeAbstractController.nextSelect;
    },
    get: function get() {
      return this._nextSelect;
    }
  }, {
    key: "action",
    set: function set(element) {
      this._action = element.action;
    },
    get: function get() {
      return this._action;
    }
  }, {
    key: "data",
    set: function set(select) {
      var data = {};
      var SelectChangeAbstractController = new _front_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_2__["default"](select);
      var prevSelects = SelectChangeAbstractController.allPrevSelect;
      data[select.title] = select.value;
      prevSelects.forEach(function (item) {
        data[item.title] = item.value;
      });
      this._data = data;
    },
    get: function get() {
      return this._data;
    }
  }]);

  return SelectChangeController;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/Events/SwitchButtonBackStep.js":
/*!**********************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/Events/SwitchButtonBackStep.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchButtonBackStep; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/modules/Animations */ "./resources/js/modules/Animations.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SwitchButtonBackStep =
/*#__PURE__*/
function () {
  function SwitchButtonBackStep() {
    _classCallCheck(this, SwitchButtonBackStep);

    this.button = ".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.backStep);
    this.activeElement = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.wrapper));
    this.value = this.constructor.options();
    this.handler();
  }

  _createClass(SwitchButtonBackStep, [{
    key: "handler",
    value: function handler() {
      var opacity = '0';

      if (this.value === 'enabled') {
        opacity = '1';
      }

      _js_modules_Animations__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.switchOpacity(this.button, {
        opacity: opacity
      });
    }
  }, {
    key: "activeElement",
    set: function set(wrapper) {
      this._activeElement = wrapper.querySelector("[data-active=\"active\"]");
    },
    get: function get() {
      return this._activeElement;
    }
  }, {
    key: "value",
    set: function set(options) {
      var _this = this;

      options.forEach(function (item) {
        if (_this.activeElement.classList.contains(item["class"])) {
          _this._value = item.value;
        }
      });
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "button",
    set: function set(selector) {
      this._button = document.querySelector(selector);
    },
    get: function get() {
      return this._button;
    }
  }], [{
    key: "options",
    value: function options() {
      return [{
        "class": _config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_1,
        value: 'disabled'
      }, {
        "class": _config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_2,
        value: 'enabled'
      }, {
        "class": _config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_3,
        value: 'enabled'
      }];
    }
  }]);

  return SwitchButtonBackStep;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/connect/GetItemsClass.js":
/*!****************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/connect/GetItemsClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetItemsClass; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modules_XhrClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/modules/XhrClass */ "./resources/js/modules/XhrClass.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GetItemsClass =
/*#__PURE__*/
function () {
  function GetItemsClass(options) {
    _classCallCheck(this, GetItemsClass);

    if (!options.table) {
      return;
    }

    this.action = options.table;
    this.data = !options.data ? null : options.data;
    return this.handler.apply(this);
  }

  _createClass(GetItemsClass, [{
    key: "handler",
    value: function handler() {
      var _this = this;

      var data, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handler$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {
                'action': this.action,
                'data': this.data,
                'key': window.tradeInKey
              };
              response = new Promise(function (resolve, reject) {
                var reader = new _js_modules_XhrClass__WEBPACK_IMPORTED_MODULE_1__["default"]({
                  body: data,
                  uri: _config__WEBPACK_IMPORTED_MODULE_2__["AjaxUri"],
                  method: 'post',
                  callback: _this.callback.bind(_this),
                  sync: false
                });

                reader.onreadystatechange = function (e) {
                  resolve(e);
                };
              });
              return _context.abrupt("return", this.response);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "callback",
    value: function callback(err, resp, body) {
      if (err) {
        throw new Error(err);
      }

      this.response = body;
    }
  }, {
    key: "action",
    set: function set(table) {
      this._action = _config__WEBPACK_IMPORTED_MODULE_2__["actions"][table];
    },
    get: function get() {
      return this._action;
    }
  }]);

  return GetItemsClass;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/front/CollectFormCallback.js":
/*!********************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/front/CollectFormCallback.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectFormCallback; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/common */ "./resources/js/common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CollectFormCallback =
/*#__PURE__*/
function () {
  function CollectFormCallback() {
    var wrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, CollectFormCallback);

    this.wrapper = wrapper;
    this.tradeInCarElement = ".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_3ContentTradeInCar);
    this.parserCarElement = ".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_3ContentParserCar);
    this.priceElement = ".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_3ContentPrice);
  }

  _createClass(CollectFormCallback, [{
    key: "setTradeInCarContent",
    value: function setTradeInCarContent(value) {
      this.tradeInCarElement.innerText = value;
    }
  }, {
    key: "setParserCarContent",
    value: function setParserCarContent(value) {
      this.parserCarElement.innerText = value;
    }
  }, {
    key: "setPriceContent",
    value: function setPriceContent(value) {
      this.priceElement.innerText = value;
    }
  }, {
    key: "setInputsValue",
    value: function setInputsValue(data) {
      var _this = this;

      data.forEach(function (item) {
        var input = _this.wrapper.querySelector("[name=_".concat(item.title, "]"));

        input.value = item.value;
      });
    }
  }, {
    key: "wrapper",
    set: function set(value) {
      if (!value) {
        this._wrapper = document.querySelector(".".concat(_config__WEBPACK_IMPORTED_MODULE_0__["ElementsConfig"].classes.modalWindow.step_3));
      } else {
        this._wrapper = Object(_js_common__WEBPACK_IMPORTED_MODULE_1__["queryElement"])(value);
      }
    },
    get: function get() {
      return this._wrapper;
    }
  }, {
    key: "tradeInCarElement",
    set: function set(value) {
      this._tradeInCarElement = Object(_js_common__WEBPACK_IMPORTED_MODULE_1__["queryElement"])(value);
    },
    get: function get() {
      return this._tradeInCarElement;
    }
  }, {
    key: "parserCarElement",
    set: function set(value) {
      this._parserCarElement = Object(_js_common__WEBPACK_IMPORTED_MODULE_1__["queryElement"])(value);
    },
    get: function get() {
      return this._parserCarElement;
    }
  }, {
    key: "priceElement",
    set: function set(value) {
      this._priceElement = Object(_js_common__WEBPACK_IMPORTED_MODULE_1__["queryElement"])(value);
    },
    get: function get() {
      return this._priceElement;
    }
  }]);

  return CollectFormCallback;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/front/SelectChangeAbstract.js":
/*!*********************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/front/SelectChangeAbstract.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectChangeAbstract; });
/* harmony import */ var _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../js/modules/ApplicationSettings */ "./resources/js/modules/ApplicationSettings.js");
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/common */ "./resources/js/common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SelectChangeAbstract =
/*#__PURE__*/
function () {
  function SelectChangeAbstract(select) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, SelectChangeAbstract);

    this.select = select;
    this.nextSelect = this.select;
    this.prevSelect = this.select;
    this.allNextSelect = this.select;
    this.allPrevSelect = this.select;

    if (value) {
      this.select.value = value;
    }
  }

  _createClass(SelectChangeAbstract, [{
    key: "setStyles",
    value: function setStyles(styles) {
      var ApplicationSettingsController = new _js_modules_ApplicationSettings__WEBPACK_IMPORTED_MODULE_0__["default"](this.select);
      ApplicationSettingsController.addStyle(styles);
    }
  }, {
    key: "cleanSelect",
    value: function cleanSelect() {
      var defaultOptionContent = this.select.options[0].innerText;
      var defaultOption = this.select.options[0].cloneNode();
      defaultOption.innerText = defaultOptionContent;
      this.select.innerHTML = '';
      this.select.prepend(defaultOption);
    }
  }, {
    key: "select",
    set: function set(selectorOrSelect) {
      this._select = typeof selectorOrSelect === 'string' ? document.querySelector(selectorOrSelect) : selectorOrSelect;
    },
    get: function get() {
      return this._select;
    }
  }, {
    key: "nextSelect",
    set: function set(element) {
      this._nextSelect = element.nextSibling && element.nextSibling.tagName === 'SELECT' ? element.nextSibling : null;
    },
    get: function get() {
      return this._nextSelect;
    }
  }, {
    key: "prevSelect",
    set: function set(element) {
      this._prevSelect = element.previousSibling && element.previousSibling.tagName === 'SELECT' ? element.previousSibling : null;
    },
    get: function get() {
      return this._prevSelect;
    }
  }, {
    key: "allPrevSelect",
    set: function set(select) {
      this._allPrevSelect = Object(_js_common__WEBPACK_IMPORTED_MODULE_1__["prevAll"])(select);
    },
    get: function get() {
      return this._allPrevSelect;
    }
  }, {
    key: "allNextSelect",
    set: function set(select) {
      var elements = Object(_js_common__WEBPACK_IMPORTED_MODULE_1__["nextAll"])(select);
      elements.forEach(function (item, key) {
        if (item.tagName !== 'SELECT') {
          elements[key].remove();
        }
      });
      this._allNextSelect = elements;
    },
    get: function get() {
      return this._allNextSelect;
    }
  }]);

  return SelectChangeAbstract;
}();



/***/ }),

/***/ "./resources/widgets/tradeIn/src/front/SelectDisabled.js":
/*!***************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/front/SelectDisabled.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectDisabled; });
/* harmony import */ var _SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectChangeAbstract */ "./resources/widgets/tradeIn/src/front/SelectChangeAbstract.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SelectDisabled =
/*#__PURE__*/
function (_SelectChangeAbstract) {
  _inherits(SelectDisabled, _SelectChangeAbstract);

  function SelectDisabled() {
    var _this;

    var select = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var optionsElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, SelectDisabled);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectDisabled).call(this, !select ? ".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.selectWrapper, " select:disabled") : select, value));

    _this.disabledSelect();

    _this.cleanSelect();

    _this.setStyles(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].styles.selects.disabled);

    return _possibleConstructorReturn(_this, _this.select);
  }

  _createClass(SelectDisabled, [{
    key: "cleanSelect",
    value: function cleanSelect() {
      _get(_getPrototypeOf(SelectDisabled.prototype), "cleanSelect", this).call(this);
    }
  }, {
    key: "disabledSelect",
    value: function disabledSelect() {
      this.select.disabled = true;
    }
  }]);

  return SelectDisabled;
}(_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/widgets/tradeIn/src/front/SelectEnabled.js":
/*!**************************************************************!*\
  !*** ./resources/widgets/tradeIn/src/front/SelectEnabled.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectEnabled; });
/* harmony import */ var _SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectChangeAbstract */ "./resources/widgets/tradeIn/src/front/SelectChangeAbstract.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/widgets/tradeIn/config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SelectEnabled =
/*#__PURE__*/
function (_SelectChangeAbstract) {
  _inherits(SelectEnabled, _SelectChangeAbstract);

  function SelectEnabled() {
    var _this;

    var select = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var optionsElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, SelectEnabled);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectEnabled).call(this, !select ? ".".concat(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].classes.modalWindow.selectWrapper, " select:disabled") : select, value));

    _this.activeSelect();

    _this.optionsElements = optionsElements;

    _this.setStyles(_config__WEBPACK_IMPORTED_MODULE_1__["ElementsConfig"].styles.selects.enabled);

    if (_this.optionsElements) {
      _this.insertOptions();
    }

    return _possibleConstructorReturn(_this, _this.select);
  }

  _createClass(SelectEnabled, [{
    key: "insertOptions",
    value: function insertOptions() {
      var _this2 = this;

      this.cleanSelect();
      this.optionsElements.forEach(function (item) {
        var option = document.createElement('option');
        option.value = item.id;
        option.innerText = item.value;

        _this2.select.append(option);
      });
    }
  }, {
    key: "activeSelect",
    value: function activeSelect() {
      this.select.disabled = false;
    }
  }]);

  return SelectEnabled;
}(_SelectChangeAbstract__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ 2:
/*!**********************************************!*\
  !*** multi ./resources/widgets/UTM/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\YandexDisk\Work\localhost\Demento\Cars\resources\widgets\UTM\index.js */"./resources/widgets/UTM/index.js");


/***/ })

/******/ });