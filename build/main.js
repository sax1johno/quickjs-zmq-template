import { setTimeout as setTimeout$1, clearTimeout as clearTimeout$1 } from 'os';
import require$$0 from 'events';
import require$$1 from 'net';
import require$$2 from 'tls';
import require$$0$2 from 'buffer';
import require$$1$2 from 'string_decoder';
import require$$0$1 from 'assert';
import require$$1$1 from 'util';
import require$$9 from 'url';
import require$$0$3 from 'crypto';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _AwaitValue(value) {
  this.wrapped = value;
}

function _AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen.return !== "function") {
    this.return = undefined;
  }
}

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
};

_AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

_AsyncGenerator.prototype.throw = function (arg) {
  return this._invoke("throw", arg);
};

_AsyncGenerator.prototype.return = function (arg) {
  return this._invoke("return", arg);
};

function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator(fn.apply(this, arguments));
  };
}

function _awaitAsyncGenerator(value) {
  return new _AwaitValue(value);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var ActionTypes;

(function (ActionTypes) {
  ActionTypes["Start"] = "xstate.start";
  ActionTypes["Stop"] = "xstate.stop";
  ActionTypes["Raise"] = "xstate.raise";
  ActionTypes["Send"] = "xstate.send";
  ActionTypes["Cancel"] = "xstate.cancel";
  ActionTypes["NullEvent"] = "";
  ActionTypes["Assign"] = "xstate.assign";
  ActionTypes["After"] = "xstate.after";
  ActionTypes["DoneState"] = "done.state";
  ActionTypes["DoneInvoke"] = "done.invoke";
  ActionTypes["Log"] = "xstate.log";
  ActionTypes["Init"] = "xstate.init";
  ActionTypes["Invoke"] = "xstate.invoke";
  ActionTypes["ErrorExecution"] = "error.execution";
  ActionTypes["ErrorCommunication"] = "error.communication";
  ActionTypes["ErrorPlatform"] = "error.platform";
  ActionTypes["ErrorCustom"] = "xstate.error";
  ActionTypes["Update"] = "xstate.update";
  ActionTypes["Pure"] = "xstate.pure";
  ActionTypes["Choose"] = "xstate.choose";
})(ActionTypes || (ActionTypes = {}));

var SpecialTargets;

(function (SpecialTargets) {
  SpecialTargets["Parent"] = "#_parent";
  SpecialTargets["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));

var start$1 = ActionTypes.Start;
var stop$1 = ActionTypes.Stop;
var raise$1 = ActionTypes.Raise;
var send$1 = ActionTypes.Send;
var cancel$1 = ActionTypes.Cancel;
var nullEvent = ActionTypes.NullEvent;
var assign = ActionTypes.Assign;
ActionTypes.After;
ActionTypes.DoneState;
var log = ActionTypes.Log;
var init = ActionTypes.Init;
var invoke = ActionTypes.Invoke;
ActionTypes.ErrorExecution;
var errorPlatform = ActionTypes.ErrorPlatform;
var error$1 = ActionTypes.ErrorCustom;
var update = ActionTypes.Update;
var choose = ActionTypes.Choose;
var pure = ActionTypes.Pure;

var STATE_DELIMITER = '.';
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = 'xstate.guard';
var TARGETLESS_KEY = '';

var IS_PRODUCTION = "production" === 'production';

var _a$1;

function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = STATE_DELIMITER;
  }

  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);

  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    } // Parent more specific than child


    return false;
  }

  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }

  return Object.keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }

    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}

function getEventType(event) {
  try {
    return isString(event) || typeof event === 'number' ? "".concat(event) : event.type;
  } catch (e) {
    throw new Error('Events must be strings or objects with a string event.type property.');
  }
}

function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }

    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'".concat(stateId, "' is not a valid state path."));
  }
}

function isStateLike(state) {
  return _typeof(state) === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
}

function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }

  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }

  if (typeof stateValue !== 'string') {
    return stateValue;
  }

  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}

function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }

  var value = {};
  var marker = value;

  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }

  return value;
}

function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = Object.keys(collection);

  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }

  return result;
}

function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a;

  var result = {};

  try {
    for (var _b = __values(Object.keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];

      if (!predicate(item)) {
        continue;
      }

      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */


var path = function path(props) {
  return function (object) {
    var e_2, _a;

    var result = object;

    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1["return"])) _a.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return result;
  };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */


function nestedPath(props, accessorProp) {
  return function (object) {
    var e_3, _a;

    var result = object;

    try {
      for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a = props_2["return"])) _a.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
}

function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }

  if (isString(stateValue)) {
    return [[stateValue]];
  }

  var result = flatten(Object.keys(stateValue).map(function (key) {
    var subStateValue = stateValue[key];

    if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }

    return toStatePaths(stateValue[key]).map(function (subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}

function flatten(array) {
  var _a;

  return (_a = []).concat.apply(_a, __spreadArray([], __read(array), false));
}

function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}

function toArray(value) {
  if (value === undefined) {
    return [];
  }

  return toArrayStrict(value);
}

function mapContext(mapper, context, _event) {
  var e_5, _a;

  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }

  var result = {};

  try {
    for (var _b = __values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];

      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return result;
}

function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}

function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  } // Check if shape matches the Promise/A+ specification for a "thenable".


  if (value !== null && (isFunction(value) || _typeof(value) === 'object') && isFunction(value.then)) {
    return true;
  }

  return false;
}

function isBehavior(value) {
  return value !== null && _typeof(value) === 'object' && 'transition' in value && typeof value.transition === 'function';
}

function partition(items, predicate) {
  var e_6, _a;

  var _b = __read([[], []], 2),
      truthy = _b[0],
      falsy = _b[1];

  try {
    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1["return"])) _a.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }

  return [truthy, falsy];
}

function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function (subHist, key) {
    if (!subHist) {
      return undefined;
    }

    var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

    if (!subStateValue) {
      return undefined;
    }

    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}

function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}

function updateContext(context, _event, assignActions, state) {

  var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
    var e_7, _a;

    var assignment = assignAction.assignment;
    var meta = {
      state: state,
      action: assignAction,
      _event: _event
    };
    var partialUpdate = {};

    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = __values(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
} // tslint:disable-next-line:no-empty


var warn = function warn() {};

function isArray(value) {
  return Array.isArray(value);
} // tslint:disable-next-line:ban-types


function isFunction(value) {
  return typeof value === 'function';
}

function isString(value) {
  return typeof value === 'string';
}

function toGuard(condition, guardMap) {
  if (!condition) {
    return undefined;
  }

  if (isString(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition,
      predicate: guardMap ? guardMap[condition] : undefined
    };
  }

  if (isFunction(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition.name,
      predicate: condition
    };
  }

  return condition;
}

function isObservable(value) {
  try {
    return 'subscribe' in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}

var symbolObservable = /*#__PURE__*/function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}(); // TODO: to be removed in v5, left it out just to minimize the scope of the change and maintain compatibility with older versions of integration paackages


(_a$1 = {}, _a$1[symbolObservable] = function () {
  return this;
}, _a$1[Symbol.observable] = function () {
  return this;
}, _a$1);

function isMachine(value) {
  return !!value && '__xstatenode' in value;
}

function isActor$1(value) {
  return !!value && typeof value.send === 'function';
}

function toEventObject(event, payload // id?: TEvent['type']
) {
  if (isString(event) || typeof event === 'number') {
    return _assign({
      type: event
    }, payload);
  }

  return event;
}

function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  var eventObject = toEventObject(event);
  return _assign({
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external'
  }, scxmlEvent);
}

function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
      return {
        target: transitionLike,
        event: event
      };
    }

    return _assign(_assign({}, transitionLike), {
      event: event
    });
  });
  return transitions;
}

function normalizeTarget(target) {
  if (target === undefined || target === TARGETLESS_KEY) {
    return undefined;
  }

  return toArray(target);
}

function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state: state,
    cond: guard,
    _event: _event
  }; // TODO: do not hardcode!

  if (guard.type === DEFAULT_GUARD_TYPE) {
    return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
  }

  var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];

  if (!condFn) {
    throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
  }

  return condFn(context, _event.data, guardMeta);
}

function toInvokeSource$1(src) {
  if (typeof src === 'string') {
    return {
      type: src
    };
  }

  return src;
}

function toObserver(nextHandler, errorHandler, completionHandler) {
  if (_typeof(nextHandler) === 'object') {
    return nextHandler;
  }

  var noop = function noop() {
    return void 0;
  };

  return {
    next: nextHandler,
    error: errorHandler || noop,
    complete: completionHandler || noop
  };
}

function createInvokeId(stateNodeId, index) {
  return "".concat(stateNodeId, ":invocation[").concat(index, "]");
}

var initEvent = /*#__PURE__*/toSCXMLEvent({
  type: init
});

function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
}

function toActionObject(action, actionFunctionMap) {
  var actionObject;

  if (isString(action) || typeof action === 'number') {
    var exec = getActionFunction(action, actionFunctionMap);

    if (isFunction(exec)) {
      actionObject = {
        type: action,
        exec: exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: undefined
      };
    }
  } else if (isFunction(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);

    if (isFunction(exec)) {
      actionObject = _assign(_assign({}, action), {
        exec: exec
      });
    } else if (exec) {
      var actionType = exec.type || action.type;
      actionObject = _assign(_assign(_assign({}, exec), action), {
        type: actionType
      });
    } else {
      actionObject = action;
    }
  }

  return actionObject;
}

var toActionObjects = function toActionObjects(action, actionFunctionMap) {
  if (!action) {
    return [];
  }

  var actions = isArray(action) ? action : [action];
  return actions.map(function (subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};

function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return _assign(_assign({
    id: isString(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */


function raise(event) {
  if (!isString(event)) {
    return send(event, {
      to: SpecialTargets.Internal
    });
  }

  return {
    type: raise$1,
    event: event
  };
}

function resolveRaise(action) {
  return {
    type: raise$1,
    _event: toSCXMLEvent(action.event)
  };
}
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */


function send(event, options) {
  return {
    to: options ? options.to : undefined,
    type: send$1,
    event: isFunction(event) ? event : toEventObject(event),
    delay: options ? options.delay : undefined,
    id: options && options.id !== undefined ? options.id : isFunction(event) ? event.name : getEventType(event)
  };
}

function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event: _event
  }; // TODO: helper function for resolving Expr

  var resolvedEvent = toSCXMLEvent(isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;

  if (isString(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }

  var resolvedTarget = isFunction(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return _assign(_assign({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}

var resolveLog = function resolveLog(action, ctx, _event) {
  return _assign(_assign({}, action), {
    value: isString(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event: _event
    })
  });
};
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */


var cancel = function cancel(sendId) {
  return {
    type: cancel$1,
    sendId: sendId
  };
};
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */


function start(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: ActionTypes.Start,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Stops an activity.
 *
 * @param actorRef The activity to stop.
 */


function stop(actorRef) {
  var activity = isFunction(actorRef) ? actorRef : toActivityDefinition(actorRef);
  return {
    type: ActionTypes.Stop,
    activity: activity,
    exec: undefined
  };
}

function resolveStop(action, context, _event) {
  var actorRefOrString = isFunction(action.activity) ? action.activity(context, _event.data) : action.activity;
  var resolvedActorRef = typeof actorRefOrString === 'string' ? {
    id: actorRefOrString
  } : actorRefOrString;
  var actionObject = {
    type: ActionTypes.Stop,
    activity: resolvedActorRef
  };
  return actionObject;
}
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */


function after(delayRef, id) {
  var idSuffix = id ? "#".concat(id) : '';
  return "".concat(ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
}
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */


function done(id, data) {
  var type = "".concat(ActionTypes.DoneState, ".").concat(id);
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */


function doneInvoke(id, data) {
  var type = "".concat(ActionTypes.DoneInvoke, ".").concat(id);
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function error(id, data) {
  var type = "".concat(ActionTypes.ErrorPlatform, ".").concat(id);
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function resolveActions(machine, currentState, currentContext, _event, actions, preserveActionOrder) {
  if (preserveActionOrder === void 0) {
    preserveActionOrder = false;
  }

  var _a = __read(preserveActionOrder ? [[], actions] : partition(actions, function (action) {
    return action.type === assign;
  }), 2),
      assignActions = _a[0],
      otherActions = _a[1];

  var updatedContext = assignActions.length ? updateContext(currentContext, _event, assignActions, currentState) : currentContext;
  var preservedContexts = preserveActionOrder ? [currentContext] : undefined;
  var resolvedActions = flatten(otherActions.map(function (actionObject) {
    var _a;

    switch (actionObject.type) {
      case raise$1:
        return resolveRaise(actionObject);

      case send$1:
        var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays); // TODO: fix ActionTypes.Init

        return sendAction;

      case log:
        return resolveLog(actionObject, updatedContext, _event);

      case choose:
        {
          var chooseAction = actionObject;
          var matchedActions = (_a = chooseAction.conds.find(function (condition) {
            var guard = toGuard(condition.cond, machine.options.guards);
            return !guard || evaluateGuard(machine, guard, updatedContext, _event, currentState);
          })) === null || _a === void 0 ? void 0 : _a.actions;

          if (!matchedActions) {
            return [];
          }

          var _b = __read(resolveActions(machine, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine.options.actions), preserveActionOrder), 2),
              resolvedActionsFromChoose = _b[0],
              resolvedContextFromChoose = _b[1];

          updatedContext = resolvedContextFromChoose;
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          return resolvedActionsFromChoose;
        }

      case pure:
        {
          var matchedActions = actionObject.get(updatedContext, _event.data);

          if (!matchedActions) {
            return [];
          }

          var _c = __read(resolveActions(machine, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine.options.actions), preserveActionOrder), 2),
              resolvedActionsFromPure = _c[0],
              resolvedContext = _c[1];

          updatedContext = resolvedContext;
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          return resolvedActionsFromPure;
        }

      case stop$1:
        {
          return resolveStop(actionObject, updatedContext, _event);
        }

      case assign:
        {
          updatedContext = updateContext(updatedContext, _event, [actionObject], currentState);
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          break;
        }

      default:
        var resolvedActionObject = toActionObject(actionObject, machine.options.actions);
        var exec_1 = resolvedActionObject.exec;

        if (exec_1 && preservedContexts) {
          var contextIndex_1 = preservedContexts.length - 1;
          resolvedActionObject = _assign(_assign({}, resolvedActionObject), {
            exec: function exec(_ctx) {
              var args = [];

              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }

              exec_1.apply(void 0, __spreadArray([preservedContexts[contextIndex_1]], __read(args), false));
            }
          });
        }

        return resolvedActionObject;
    }
  }).filter(function (a) {
    return !!a;
  }));
  return [resolvedActions, updatedContext];
}

/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 */

var provide = function provide(service, fn) {
  var result = fn(service);
  return result;
};

function createNullActor(id) {
  var _a;

  return _a = {
    id: id,
    send: function send() {
      return void 0;
    },
    subscribe: function subscribe() {
      return {
        unsubscribe: function unsubscribe() {
          return void 0;
        }
      };
    },
    getSnapshot: function getSnapshot() {
      return undefined;
    },
    toJSON: function toJSON() {
      return {
        id: id
      };
    }
  }, _a[symbolObservable] = function () {
    return this;
  }, _a;
}
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */


function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a;

  var invokeSrc = toInvokeSource$1(invokeDefinition.src);
  var serviceCreator = (_a = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? mapContext(invokeDefinition.data, context, _event) : undefined;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id); // @ts-ignore

  tempActor.meta = invokeDefinition;
  return tempActor;
}

function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id); // @ts-ignore

  tempActor.deferred = true;

  if (isMachine(entity)) {
    // "mute" the existing service scope so potential spawned actors within the `.initialState` stay deferred here
    var initialState_1 = tempActor.state = provide(undefined, function () {
      return (data ? entity.withContext(data) : entity).initialState;
    });

    tempActor.getSnapshot = function () {
      return initialState_1;
    };
  }

  return tempActor;
}

function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}

function isSpawnedActor(item) {
  return isActor(item) && 'id' in item;
} // TODO: refactor the return type, this could be written in a better way but it's best to avoid unneccessary breaking changes now


function toActorRef(actorRefLike) {
  var _a;

  return _assign((_a = {
    subscribe: function subscribe() {
      return {
        unsubscribe: function unsubscribe() {
          return void 0;
        }
      };
    },
    id: 'anonymous',
    getSnapshot: function getSnapshot() {
      return undefined;
    }
  }, _a[symbolObservable] = function () {
    return this;
  }, _a), actorRefLike);
}

var isLeafNode = function isLeafNode(stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};

function getChildren(stateNode) {
  return Object.keys(stateNode.states).map(function (key) {
    return stateNode.states[key];
  });
}

function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];

  if (isLeafNode(stateNode)) {
    return stateNodes;
  }

  return stateNodes.concat(flatten(getChildren(stateNode).map(getAllStateNodes)));
}

function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);

  try {
    // add all ancestors
    for (var configuration_1 = __values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1["return"])) _a.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  var adjList = getAdjList(configuration);

  try {
    // add descendants
    for (var configuration_2 = __values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value; // if previously active, add existing child nodes

      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function (sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function (sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === 'parallel') {
          try {
            for (var _e = (e_3 = void 0, __values(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;

              if (child.type === 'history') {
                continue;
              }

              if (!configuration.has(child)) {
                configuration.add(child);

                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function (sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function (sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e["return"])) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2["return"])) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  try {
    // add all ancestors
    for (var configuration_3 = __values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3["return"])) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return configuration;
}

function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);

  if (!childStateNodes) {
    return {}; // todo: fix?
  }

  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];

    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }

  var stateValue = {};
  childStateNodes.forEach(function (csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}

function getAdjList(configuration) {
  var e_5, _a;

  var adjList = new Map();

  try {
    for (var configuration_4 = __values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;

      if (!adjList.has(s)) {
        adjList.set(s, []);
      }

      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }

        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4["return"])) _a.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return adjList;
}

function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}

function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function (member) {
      return member === item;
    });
  }

  if (iterable instanceof Set) {
    return iterable.has(item);
  }

  return false; // TODO: fix
}

function nextEvents(configuration) {
  return __spreadArray([], __read(new Set(flatten(__spreadArray([], __read(configuration.map(function (sn) {
    return sn.ownEvents;
  })), false)))), false);
}

function isInFinalState(configuration, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && has(configuration, s);
    });
  }

  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(configuration, sn);
    });
  }

  return false;
}

function getMeta(configuration) {
  if (configuration === void 0) {
    configuration = [];
  }

  return configuration.reduce(function (acc, stateNode) {
    if (stateNode.meta !== undefined) {
      acc[stateNode.id] = stateNode.meta;
    }

    return acc;
  }, {});
}

function getTagsFromConfiguration(configuration) {
  return new Set(flatten(configuration.map(function (sn) {
    return sn.tags;
  })));
}

function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if (isString(a) || isString(b)) {
    return a === b;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  return aKeys.length === bKeys.length && aKeys.every(function (key) {
    return stateValuesEqual(a[key], b[key]);
  });
}

function isStateConfig(state) {
  if (_typeof(state) !== 'object' || state === null) {
    return false;
  }

  return 'value' in state && '_event' in state;
}

function bindActionToState(action, state) {
  var exec = action.exec;

  var boundAction = _assign(_assign({}, action), {
    exec: exec !== undefined ? function () {
      return exec(state.context, state.event, {
        action: action,
        state: state,
        _event: state._event
      });
    } : undefined
  });

  return boundAction;
}

var State =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */
  function State(config) {
    var _this = this;

    var _a;

    this.actions = [];
    this.activities = EMPTY_ACTIVITY_MAP;
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || EMPTY_ACTIVITY_MAP;
    this.meta = getMeta(config.configuration);
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    this.tags = (_a = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a !== void 0 ? _a : new Set();
    this.machine = config.machine;
    Object.defineProperty(this, 'nextEvents', {
      get: function get() {
        return nextEvents(_this.configuration);
      }
    });
  }
  /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */


  State.from = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (stateValue.context !== context) {
        return new State({
          value: stateValue.value,
          context: context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }

      return stateValue;
    }

    var _event = initEvent;
    return new State({
      value: stateValue,
      context: context,
      _event: _event,
      _sessionid: null,
      historyValue: undefined,
      history: undefined,
      actions: [],
      activities: undefined,
      meta: undefined,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */


  State.create = function (config) {
    return new State(config);
  };
  /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */


  State.inert = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (!stateValue.actions.length) {
        return stateValue;
      }

      var _event = initEvent;
      return new State({
        value: stateValue.value,
        context: context,
        _event: _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }

    return State.from(stateValue, context);
  };
  /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */


  State.prototype.toStrings = function (stateValue, delimiter) {
    var _this = this;

    if (stateValue === void 0) {
      stateValue = this.value;
    }

    if (delimiter === void 0) {
      delimiter = '.';
    }

    if (isString(stateValue)) {
      return [stateValue];
    }

    var valueKeys = Object.keys(stateValue);
    return valueKeys.concat.apply(valueKeys, __spreadArray([], __read(valueKeys.map(function (key) {
      return _this.toStrings(stateValue[key], delimiter).map(function (s) {
        return key + delimiter + s;
      });
    })), false));
  };

  State.prototype.toJSON = function () {
    var _a = this;

    _a.configuration;
    _a.transitions;
    var tags = _a.tags;
    _a.machine;

    var jsonValues = __rest(_a, ["configuration", "transitions", "tags", "machine"]);

    return _assign(_assign({}, jsonValues), {
      tags: Array.from(tags)
    });
  };

  State.prototype.matches = function (parentStateValue) {
    return matchesState(parentStateValue, this.value);
  };
  /**
   * Whether the current state configuration has a state node with the specified `tag`.
   * @param tag
   */


  State.prototype.hasTag = function (tag) {
    return this.tags.has(tag);
  };
  /**
   * Determines whether sending the `event` will cause a non-forbidden transition
   * to be selected, even if the transitions have no actions nor
   * change the state value.
   *
   * @param event The event to test
   * @returns Whether the event will cause a transition
   */


  State.prototype.can = function (event) {
    var _a;

    {
      warn(!!this.machine);
    }

    var transitionData = (_a = this.machine) === null || _a === void 0 ? void 0 : _a.getTransitionData(this, event);
    return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
    transitionData.transitions.some(function (t) {
      return t.target !== undefined || t.actions.length;
    });
  };

  return State;
}();

var defaultOptions = {
  deferEvents: false
};

var Scheduler =
/*#__PURE__*/

/** @class */
function () {
  function Scheduler(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = _assign(_assign({}, defaultOptions), options);
  }

  Scheduler.prototype.initialize = function (callback) {
    this.initialized = true;

    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }

      this.process(callback);
    }

    this.flushEvents();
  };

  Scheduler.prototype.schedule = function (task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }

    if (this.queue.length !== 0) {
      throw new Error('Event queue should be empty when it is not processing events');
    }

    this.process(task);
    this.flushEvents();
  };

  Scheduler.prototype.clear = function () {
    this.queue = [];
  };

  Scheduler.prototype.flushEvents = function () {
    var nextCallback = this.queue.shift();

    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };

  Scheduler.prototype.process = function (callback) {
    this.processingEvent = true;

    try {
      callback();
    } catch (e) {
      // there is no use to keep the future events
      // as the situation is not anymore the same
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };

  return Scheduler;
}();

var children = /*#__PURE__*/new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function bookId() {
    return "x:".concat(sessionIdIndex++);
  },
  register: function register(id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function get(id) {
    return children.get(id);
  },
  free: function free(id) {
    children["delete"](id);
  }
};

function getGlobal() {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }
}

function getDevTools() {
  var global = getGlobal();

  if (global && '__xstate__' in global) {
    return global.__xstate__;
  }

  return undefined;
}

function registerService(service) {
  if (!getGlobal()) {
    return;
  }

  var devTools = getDevTools();

  if (devTools) {
    devTools.register(service);
  }
}

function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }

  var state = behavior.initialState;
  var observers = new Set();
  var mailbox = [];
  var flushing = false;

  var flush = function flush() {
    if (flushing) {
      return;
    }

    flushing = true;

    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers.forEach(function (observer) {
        return observer.next(state);
      });
    }

    flushing = false;
  };

  var actor = toActorRef({
    id: options.id,
    send: function send(event) {
      mailbox.push(event);
      flush();
    },
    getSnapshot: function getSnapshot() {
      return state;
    },
    subscribe: function subscribe(next, handleError, complete) {
      var observer = toObserver(next, handleError, complete);
      observers.add(observer);
      observer.next(state);
      return {
        unsubscribe: function unsubscribe() {
          observers["delete"](observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || 'anonymous',
    observers: observers
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}

var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
var InterpreterStatus;

(function (InterpreterStatus) {
  InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
  InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));

var Interpreter =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */
  function Interpreter(machine, options) {
    var _this = this;

    if (options === void 0) {
      options = Interpreter.defaultOptions;
    }

    this.machine = machine;
    this.scheduler = new Scheduler();
    this.delayedEventsMap = {};
    this.listeners = new Set();
    this.contextListeners = new Set();
    this.stopListeners = new Set();
    this.doneListeners = new Set();
    this.eventListeners = new Set();
    this.sendListeners = new Set();
    /**
     * Whether the service is started.
     */

    this.initialized = false;
    this.status = InterpreterStatus.NotStarted;
    this.children = new Map();
    this.forwardTo = new Set();
    /**
     * Alias for Interpreter.prototype.start
     */

    this.init = this.start;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */

    this.send = function (event, payload) {
      if (isArray(event)) {
        _this.batch(event);

        return _this.state;
      }

      var _event = toSCXMLEvent(toEventObject(event, payload));

      if (_this.status === InterpreterStatus.Stopped) {

        return _this.state;
      }

      if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
        throw new Error("Event \"".concat(_event.name, "\" was sent to uninitialized service \"").concat(_this.machine.id // tslint:disable-next-line:max-line-length
        , "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ").concat(JSON.stringify(_event.data)));
      }

      _this.scheduler.schedule(function () {
        // Forward copy of event to child actors
        _this.forward(_event);

        var nextState = _this.nextState(_event);

        _this.update(nextState, _event);
      });

      return _this._state; // TODO: deprecate (should return void)
      // tslint:disable-next-line:semicolon
    };

    this.sendTo = function (event, to) {
      var isParent = _this.parent && (to === SpecialTargets.Parent || _this.parent.id === to);
      var target = isParent ? _this.parent : isString(to) ? _this.children.get(to) || registry.get(to) : isActor$1(to) ? to : undefined;

      if (!target) {
        if (!isParent) {
          throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
        } // tslint:disable-next-line:no-console

        return;
      }

      if ('machine' in target) {
        // Send SCXML events to machines
        target.send(_assign(_assign({}, event), {
          name: event.name === error$1 ? "".concat(error(_this.id)) : event.name,
          origin: _this.sessionId
        }));
      } else {
        // Send normal events to other targets
        target.send(event.data);
      }
    };

    var resolvedOptions = _assign(_assign({}, Interpreter.defaultOptions), options);

    var clock = resolvedOptions.clock,
        logger = resolvedOptions.logger,
        parent = resolvedOptions.parent,
        id = resolvedOptions.id;
    var resolvedId = id !== undefined ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new Scheduler({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = registry.bookId();
  }

  Object.defineProperty(Interpreter.prototype, "initialState", {
    get: function get() {
      var _this = this;

      if (this._initialState) {
        return this._initialState;
      }

      return provide(this, function () {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Interpreter.prototype, "state", {
    get: function get() {

      return this._state;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */

  Interpreter.prototype.execute = function (state, actionsConfig) {
    var e_1, _a;

    try {
      for (var _b = __values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Interpreter.prototype.update = function (state, _event) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

    var _this = this; // Attach session ID to state


    state._sessionid = this.sessionId; // Update state

    this._state = state; // Execute actions

    if (this.options.execute) {
      this.execute(this.state);
    } // Update children


    this.children.forEach(function (child) {
      _this.state.children[child.id] = child;
    }); // Dev tools

    if (this.devTools) {
      this.devTools.send(_event.data, state);
    } // Execute listeners


    if (state.event) {
      try {
        for (var _e = __values(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e["return"])) _a.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    try {
      for (var _g = __values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    try {
      for (var _j = __values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j["return"])) _c.call(_j);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    var isDone = isInFinalState(state.configuration || [], this.machine);

    if (this.state.configuration && isDone) {
      // get final child state node
      var finalChildStateNode = state.configuration.find(function (sn) {
        return sn.type === 'final' && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.doneData ? mapContext(finalChildStateNode.doneData, state.context, _event) : undefined;

      try {
        for (var _l = __values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener(doneInvoke(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l["return"])) _d.call(_l);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      this.stop();
    }
  };
  /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */


  Interpreter.prototype.onTransition = function (listener) {
    this.listeners.add(listener); // Send current state to listener

    if (this.status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }

    return this;
  };

  Interpreter.prototype.subscribe = function (nextListenerOrObserver, _, // TODO: error listener
  completeListener) {
    var _this = this;

    if (!nextListenerOrObserver) {
      return {
        unsubscribe: function unsubscribe() {
          return void 0;
        }
      };
    }

    var listener;
    var resolvedCompleteListener = completeListener;

    if (typeof nextListenerOrObserver === 'function') {
      listener = nextListenerOrObserver;
    } else {
      listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
      resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
    }

    this.listeners.add(listener); // Send current state to listener

    if (this.status === InterpreterStatus.Running) {
      listener(this.state);
    }

    if (resolvedCompleteListener) {
      this.onDone(resolvedCompleteListener);
    }

    return {
      unsubscribe: function unsubscribe() {
        listener && _this.listeners["delete"](listener);
        resolvedCompleteListener && _this.doneListeners["delete"](resolvedCompleteListener);
      }
    };
  };
  /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */


  Interpreter.prototype.onEvent = function (listener) {
    this.eventListeners.add(listener);
    return this;
  };
  /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */


  Interpreter.prototype.onSend = function (listener) {
    this.sendListeners.add(listener);
    return this;
  };
  /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */


  Interpreter.prototype.onChange = function (listener) {
    this.contextListeners.add(listener);
    return this;
  };
  /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */


  Interpreter.prototype.onStop = function (listener) {
    this.stopListeners.add(listener);
    return this;
  };
  /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */


  Interpreter.prototype.onDone = function (listener) {
    this.doneListeners.add(listener);
    return this;
  };
  /**
   * Removes a listener.
   * @param listener The listener to remove
   */


  Interpreter.prototype.off = function (listener) {
    this.listeners["delete"](listener);
    this.eventListeners["delete"](listener);
    this.sendListeners["delete"](listener);
    this.stopListeners["delete"](listener);
    this.doneListeners["delete"](listener);
    this.contextListeners["delete"](listener);
    return this;
  };
  /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */


  Interpreter.prototype.start = function (initialState) {
    var _this = this;

    if (this.status === InterpreterStatus.Running) {
      // Do not restart the service if it is already started
      return this;
    } // yes, it's a hack but we need the related cache to be populated for some things to work (like delayed transitions)
    // this is usually called by `machine.getInitialState` but if we rehydrate from a state we might bypass this call
    // we also don't want to call this method here as it resolves the full initial state which might involve calling assign actions
    // and that could potentially lead to some unwanted side-effects (even such as creating some rogue actors)


    this.machine._init();

    registry.register(this.sessionId, this);
    this.initialized = true;
    this.status = InterpreterStatus.Running;
    var resolvedState = initialState === undefined ? this.initialState : provide(this, function () {
      return isStateConfig(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.from(initialState, _this.machine.context));
    });

    if (this.options.devTools) {
      this.attachDev();
    }

    this.scheduler.initialize(function () {
      _this.update(resolvedState, initEvent);
    });
    return this;
  };
  /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */


  Interpreter.prototype.stop = function () {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

    var _this = this;

    try {
      for (var _f = __values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners["delete"](listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a = _f["return"])) _a.call(_f);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    try {
      for (var _h = __values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value; // call listener, then remove

        listener();
        this.stopListeners["delete"](listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h["return"])) _b.call(_h);
      } finally {
        if (e_7) throw e_7.error;
      }
    }

    try {
      for (var _k = __values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners["delete"](listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k["return"])) _c.call(_k);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    try {
      for (var _m = __values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners["delete"](listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m["return"])) _d.call(_m);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    if (!this.initialized) {
      // Interpreter already stopped; do nothing
      return this;
    }

    __spreadArray([], __read(this.state.configuration), false).sort(function (a, b) {
      return b.order - a.order;
    }).forEach(function (stateNode) {
      var e_11, _a;

      try {
        for (var _b = __values(stateNode.definition.exit), _c = _b.next(); !_c.done; _c = _b.next()) {
          var action = _c.value;

          _this.exec(action, _this.state);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_11) throw e_11.error;
        }
      }
    }); // Stop all children


    this.children.forEach(function (child) {
      if (isFunction(child.stop)) {
        child.stop();
      }
    });

    try {
      // Cancel all delayed events
      for (var _p = __values(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e = _p["return"])) _e.call(_p);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    this.scheduler.clear();
    this.initialized = false;
    this.status = InterpreterStatus.Stopped;
    registry.free(this.sessionId);
    return this;
  };

  Interpreter.prototype.batch = function (events) {
    var _this = this;

    if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) ; else if (this.status !== InterpreterStatus.Running) {
      throw new Error( // tslint:disable-next-line:max-line-length
      "".concat(events.length, " event(s) were sent to uninitialized service \"").concat(this.machine.id, "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options."));
    }

    this.scheduler.schedule(function () {
      var e_12, _a;

      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];

      var _loop_1 = function _loop_1(event_1) {
        var _event = toSCXMLEvent(event_1);

        _this.forward(_event);

        nextState = provide(_this, function () {
          return _this.machine.transition(nextState, _event);
        });
        batchedActions.push.apply(batchedActions, __spreadArray([], __read(nextState.actions.map(function (a) {
          return bindActionToState(a, nextState);
        })), false));
        batchChanged = batchChanged || !!nextState.changed;
      };

      try {
        for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;

          _loop_1(event_1);
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a = events_1["return"])) _a.call(events_1);
        } finally {
          if (e_12) throw e_12.error;
        }
      }

      nextState.changed = batchChanged;
      nextState.actions = batchedActions;

      _this.update(nextState, toSCXMLEvent(events[events.length - 1]));
    });
  };
  /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */


  Interpreter.prototype.sender = function (event) {
    return this.send.bind(this, event);
  };
  /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */


  Interpreter.prototype.nextState = function (event) {
    var _this = this;

    var _event = toSCXMLEvent(event);

    if (_event.name.indexOf(errorPlatform) === 0 && !this.state.nextEvents.some(function (nextEvent) {
      return nextEvent.indexOf(errorPlatform) === 0;
    })) {
      throw _event.data.data;
    }

    var nextState = provide(this, function () {
      return _this.machine.transition(_this.state, _event);
    });
    return nextState;
  };

  Interpreter.prototype.forward = function (event) {
    var e_13, _a;

    try {
      for (var _b = __values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);

        if (!child) {
          throw new Error("Unable to forward event '".concat(event, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
        }

        child.send(event);
      }
    } catch (e_13_1) {
      e_13 = {
        error: e_13_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_13) throw e_13.error;
      }
    }
  };

  Interpreter.prototype.defer = function (sendAction) {
    var _this = this;

    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };

  Interpreter.prototype.cancel = function (sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };

  Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
    if (actionFunctionMap === void 0) {
      actionFunctionMap = this.machine.options.actions;
    }

    var context = state.context,
        _event = state._event;
    var actionOrExec = action.exec || getActionFunction(action.type, actionFunctionMap);
    var exec = isFunction(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

    if (exec) {
      try {
        return exec(context, _event.data, {
          action: action,
          state: this.state,
          _event: _event
        });
      } catch (err) {
        if (this.parent) {
          this.parent.send({
            type: 'xstate.error',
            data: err
          });
        }

        throw err;
      }
    }

    switch (action.type) {
      case send$1:
        var sendAction = action;

        if (typeof sendAction.delay === 'number') {
          this.defer(sendAction);
          return;
        } else {
          if (sendAction.to) {
            this.sendTo(sendAction._event, sendAction.to);
          } else {
            this.send(sendAction._event);
          }
        }

        break;

      case cancel$1:
        this.cancel(action.sendId);
        break;

      case start$1:
        {
          if (this.status !== InterpreterStatus.Running) {
            return;
          }

          var activity = action.activity; // If the activity will be stopped right after it's started
          // (such as in transient states)
          // don't bother starting the activity.

          if (!this.state.activities[activity.id || activity.type]) {
            break;
          } // Invoked services


          if (activity.type === ActionTypes.Invoke) {
            var invokeSource = toInvokeSource$1(activity.src);
            var serviceCreator = this.machine.options.services ? this.machine.options.services[invokeSource.type] : undefined;
            var id = activity.id,
                data = activity.data;

            var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

            if (!serviceCreator) {

              return;
            }

            var resolvedData = data ? mapContext(data, context, _event) : undefined;

            if (typeof serviceCreator === 'string') {
              // TODO: warn
              return;
            }

            var source = isFunction(serviceCreator) ? serviceCreator(context, _event.data, {
              data: resolvedData,
              src: invokeSource,
              meta: activity.meta
            }) : serviceCreator;

            if (!source) {
              // TODO: warn?
              return;
            }

            var options = void 0;

            if (isMachine(source)) {
              source = resolvedData ? source.withContext(resolvedData) : source;
              options = {
                autoForward: autoForward
              };
            }

            this.spawn(source, id, options);
          } else {
            this.spawnActivity(activity);
          }

          break;
        }

      case stop$1:
        {
          this.stopChild(action.activity.id);
          break;
        }

      case log:
        var label = action.label,
            value = action.value;

        if (label) {
          this.logger(label, value);
        } else {
          this.logger(value);
        }

        break;
    }

    return undefined;
  };

  Interpreter.prototype.removeChild = function (childId) {
    var _a;

    this.children["delete"](childId);
    this.forwardTo["delete"](childId); // this.state might not exist at the time this is called,
    // such as when a child is added then removed while initializing the state

    (_a = this.state) === null || _a === void 0 ? true : delete _a.children[childId];
  };

  Interpreter.prototype.stopChild = function (childId) {
    var child = this.children.get(childId);

    if (!child) {
      return;
    }

    this.removeChild(childId);

    if (isFunction(child.stop)) {
      child.stop();
    }
  };

  Interpreter.prototype.spawn = function (entity, name, options) {
    if (isPromiseLike(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if (isFunction(entity)) {
      return this.spawnCallback(entity, name);
    } else if (isSpawnedActor(entity)) {
      return this.spawnActor(entity, name);
    } else if (isObservable(entity)) {
      return this.spawnObservable(entity, name);
    } else if (isMachine(entity)) {
      return this.spawnMachine(entity, _assign(_assign({}, options), {
        id: name
      }));
    } else if (isBehavior(entity)) {
      return this.spawnBehavior(entity, name);
    } else {
      throw new Error("Unable to spawn entity \"".concat(name, "\" of type \"").concat(_typeof(entity), "\"."));
    }
  };

  Interpreter.prototype.spawnMachine = function (machine, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var childService = new Interpreter(machine, _assign(_assign({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));

    var resolvedOptions = _assign(_assign({}, DEFAULT_SPAWN_OPTIONS), options);

    if (resolvedOptions.sync) {
      childService.onTransition(function (state) {
        _this.send(update, {
          state: state,
          id: childService.id
        });
      });
    }

    var actor = childService;
    this.children.set(childService.id, actor);

    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }

    childService.onDone(function (doneEvent) {
      _this.removeChild(childService.id);

      _this.send(toSCXMLEvent(doneEvent, {
        origin: childService.id
      }));
    }).start();
    return actor;
  };

  Interpreter.prototype.spawnBehavior = function (behavior, id) {
    var actorRef = spawnBehavior(behavior, {
      id: id,
      parent: this
    });
    this.children.set(id, actorRef);
    return actorRef;
  };

  Interpreter.prototype.spawnPromise = function (promise, id) {
    var _a;

    var _this = this;

    var canceled = false;
    var resolvedData;
    promise.then(function (response) {
      if (!canceled) {
        resolvedData = response;

        _this.removeChild(id);

        _this.send(toSCXMLEvent(doneInvoke(id, response), {
          origin: id
        }));
      }
    }, function (errorData) {
      if (!canceled) {
        _this.removeChild(id);

        var errorEvent = error(id, errorData);

        try {
          // Send "error.platform.id" to this (parent).
          _this.send(toSCXMLEvent(errorEvent, {
            origin: id
          }));
        } catch (error) {

          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }

          if (_this.machine.strict) {
            // it would be better to always stop the state machine if unhandled
            // exception/promise rejection happens but because we don't want to
            // break existing code so enforce it on strict mode only especially so
            // because documentation says that onError is optional
            _this.stop();
          }
        }
      }
    });
    var actor = (_a = {
      id: id,
      send: function send() {
        return void 0;
      },
      subscribe: function subscribe(next, handleError, complete) {
        var observer = toObserver(next, handleError, complete);
        var unsubscribed = false;
        promise.then(function (response) {
          if (unsubscribed) {
            return;
          }

          observer.next(response);

          if (unsubscribed) {
            return;
          }

          observer.complete();
        }, function (err) {
          if (unsubscribed) {
            return;
          }

          observer.error(err);
        });
        return {
          unsubscribe: function unsubscribe() {
            return unsubscribed = true;
          }
        };
      },
      stop: function stop() {
        canceled = true;
      },
      toJSON: function toJSON() {
        return {
          id: id
        };
      },
      getSnapshot: function getSnapshot() {
        return resolvedData;
      }
    }, _a[symbolObservable] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnCallback = function (callback, id) {
    var _a;

    var _this = this;

    var canceled = false;
    var receivers = new Set();
    var listeners = new Set();
    var emitted;

    var receive = function receive(e) {
      emitted = e;
      listeners.forEach(function (listener) {
        return listener(e);
      });

      if (canceled) {
        return;
      }

      _this.send(toSCXMLEvent(e, {
        origin: id
      }));
    };

    var callbackStop;

    try {
      callbackStop = callback(receive, function (newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send(error(id, err));
    }

    if (isPromiseLike(callbackStop)) {
      // it turned out to be an async function, can't reliably check this before calling `callback`
      // because transpiled async functions are not recognizable
      return this.spawnPromise(callbackStop, id);
    }

    var actor = (_a = {
      id: id,
      send: function send(event) {
        return receivers.forEach(function (receiver) {
          return receiver(event);
        });
      },
      subscribe: function subscribe(next) {
        var observer = toObserver(next);
        listeners.add(observer.next);
        return {
          unsubscribe: function unsubscribe() {
            listeners["delete"](observer.next);
          }
        };
      },
      stop: function stop() {
        canceled = true;

        if (isFunction(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function toJSON() {
        return {
          id: id
        };
      },
      getSnapshot: function getSnapshot() {
        return emitted;
      }
    }, _a[symbolObservable] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnObservable = function (source, id) {
    var _a;

    var _this = this;

    var emitted;
    var subscription = source.subscribe(function (value) {
      emitted = value;

      _this.send(toSCXMLEvent(value, {
        origin: id
      }));
    }, function (err) {
      _this.removeChild(id);

      _this.send(toSCXMLEvent(error(id, err), {
        origin: id
      }));
    }, function () {
      _this.removeChild(id);

      _this.send(toSCXMLEvent(doneInvoke(id), {
        origin: id
      }));
    });
    var actor = (_a = {
      id: id,
      send: function send() {
        return void 0;
      },
      subscribe: function subscribe(next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function stop() {
        return subscription.unsubscribe();
      },
      getSnapshot: function getSnapshot() {
        return emitted;
      },
      toJSON: function toJSON() {
        return {
          id: id
        };
      }
    }, _a[symbolObservable] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActor = function (actor, name) {
    this.children.set(name, actor);
    return actor;
  };

  Interpreter.prototype.spawnActivity = function (activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

    if (!implementation) {


      return;
    } // Start implementation


    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };

  Interpreter.prototype.spawnEffect = function (id, dispose) {
    var _a;

    this.children.set(id, (_a = {
      id: id,
      send: function send() {
        return void 0;
      },
      subscribe: function subscribe() {
        return {
          unsubscribe: function unsubscribe() {
            return void 0;
          }
        };
      },
      stop: dispose || undefined,
      getSnapshot: function getSnapshot() {
        return undefined;
      },
      toJSON: function toJSON() {
        return {
          id: id
        };
      }
    }, _a[symbolObservable] = function () {
      return this;
    }, _a));
  };

  Interpreter.prototype.attachDev = function () {
    var global = getGlobal();

    if (this.options.devTools && global) {
      if (global.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = _typeof(this.options.devTools) === 'object' ? this.options.devTools : undefined;
        this.devTools = global.__REDUX_DEVTOOLS_EXTENSION__.connect(_assign(_assign({
          name: this.id,
          autoPause: true,
          stateSanitizer: function stateSanitizer(state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: _assign({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : undefined)
        }), this.machine);
        this.devTools.init(this.state);
      } // add XState-specific dev tooling hook


      registerService(this);
    }
  };

  Interpreter.prototype.toJSON = function () {
    return {
      id: this.id
    };
  };

  Interpreter.prototype[symbolObservable] = function () {
    return this;
  };

  Interpreter.prototype.getSnapshot = function () {
    if (this.status === InterpreterStatus.NotStarted) {
      return this.initialState;
    }

    return this._state;
  };
  /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */


  Interpreter.defaultOptions = {
    execute: true,
    deferEvents: true,
    clock: {
      setTimeout: function (_setTimeout) {
        function setTimeout(_x, _x2) {
          return _setTimeout.apply(this, arguments);
        }

        setTimeout.toString = function () {
          return _setTimeout.toString();
        };

        return setTimeout;
      }(function (fn, ms) {
        return setTimeout(fn, ms);
      }),
      clearTimeout: function (_clearTimeout) {
        function clearTimeout(_x3) {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function (id) {
        return clearTimeout(id);
      })
    },
    logger: /*#__PURE__*/console.log.bind(console),
    devTools: false
  };
  Interpreter.interpret = interpret;
  return Interpreter;
}();
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */


function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}

function toInvokeSource(src) {
  if (typeof src === 'string') {
    var simpleSrc = {
      type: src
    };

    simpleSrc.toString = function () {
      return src;
    }; // v4 compat - TODO: remove in v5


    return simpleSrc;
  }

  return src;
}

function toInvokeDefinition(invokeConfig) {
  return _assign(_assign({
    type: invoke
  }, invokeConfig), {
    toJSON: function toJSON() {
      invokeConfig.onDone;
      invokeConfig.onError;

      var invokeDef = __rest(invokeConfig, ["onDone", "onError"]);

      return _assign(_assign({}, invokeDef), {
        type: invoke,
        src: toInvokeSource(invokeConfig.src)
      });
    }
  });
}

var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function isStateId(str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function createDefaultOptions() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function validateArrayifiedTransitions(stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && (isString(transition.target) || isMachine(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '".concat(event, "'");
  warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  _context, // TODO: this is unsafe, but we're removing it in v5 anyway
  _stateInfo) {
    var _this = this;

    if (_context === void 0) {
      _context = 'context' in config ? config.context : undefined;
    }

    var _a;

    this.config = config;
    this._context = _context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.tags = [];
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
    this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : STATE_DELIMITER);
    this.id = this.config.id || __spreadArray([this.machine.key], __read(this.path), false).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object.keys(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');
    this.schema = this.parent ? this.machine.schema : (_a = this.config.schema) !== null && _a !== void 0 ? _a : {};
    this.description = this.config.description;

    this.initial = this.config.initial;
    this.states = this.config.states ? mapValues(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {}, undefined, {
        parent: _this,
        key: key
      });
      Object.assign(_this.idMap, _assign((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = __values(getChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on);
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = toArray(this.config.entry || this.config.onEntry).map(function (action) {
      return toActionObject(action);
    }); // TODO: deprecate (exit)

    this.onExit = toArray(this.config.exit || this.config.onExit).map(function (action) {
      return toActionObject(action);
    });
    this.meta = this.config.meta;
    this.doneData = this.type === 'final' ? this.config.data : undefined;
    this.invoke = toArray(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if (isMachine(invokeConfig)) {
        var invokeId = createInvokeId(_this.id, i);
        _this.machine.options.services = _assign((_a = {}, _a[invokeId] = invokeConfig, _a), _this.machine.options.services);
        return toInvokeDefinition({
          src: invokeId,
          id: invokeId
        });
      } else if (isString(invokeConfig.src)) {
        var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
        return toInvokeDefinition(_assign(_assign({}, invokeConfig), {
          id: invokeId,
          src: invokeConfig.src
        }));
      } else if (isMachine(invokeConfig.src) || isFunction(invokeConfig.src)) {
        var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
        _this.machine.options.services = _assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
        return toInvokeDefinition(_assign(_assign({
          id: invokeId
        }, invokeConfig), {
          src: invokeId
        }));
      } else {
        var invokeSource = invokeConfig.src;
        return toInvokeDefinition(_assign(_assign({
          id: createInvokeId(_this.id, i)
        }, invokeConfig), {
          src: invokeSource
        }));
      }
    });
    this.activities = toArray(this.config.activities).concat(this.invoke).map(function (activity) {
      return toActivityDefinition(activity);
    });
    this.transition = this.transition.bind(this);
    this.tags = toArray(this.config.tags); // TODO: this is the real fix for initialization once
    // state node getters are deprecated
    // if (!this.parent) {
    //   this._init();
    // }
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    getAllStateNodes(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: _assign(_assign({}, actions), options.actions),
      activities: _assign(_assign({}, activities), options.activities),
      guards: _assign(_assign({}, guards), options.guards),
      services: _assign(_assign({}, services), options.services),
      delays: _assign(_assign({}, delays), options.delays)
    }, context !== null && context !== void 0 ? context : this.context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "context", {
    get: function get() {
      return isFunction(this._context) ? this._context() : this._context;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function get() {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: mapValues(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.doneData,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags
      };
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function get() {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function get() {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function get() {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var _transient = eventName === NULL_EVENT;

    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return _transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function mutateEntryExit(delay, i) {
      var delayRef = isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
      var eventType = after(delayRef, _this.id);

      _this.onEntry.push(send(eventType, {
        delay: delay
      }));

      _this.onExit.push(cancel(eventType));

      return eventType;
    };

    var delayedTransitions = isArray(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return _assign(_assign({}, transition), {
        event: eventType
      });
    }) : flatten(Object.keys(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = isString(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return toArray(resolvedTransition).map(function (transition) {
        return _assign(_assign({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return _assign(_assign({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof State ? state.value : toStateValue(state, this.delimiter);

    if (isString(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this, this.states[stateValue]];
    }

    var subStateKeys = Object.keys(stateValue);
    var subStateNodes = [this];
    subStateNodes.push.apply(subStateNodes, __spreadArray([], __read(flatten(subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
    }))), false));
    return subStateNodes;
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = getEventType(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var stateFromConfig = state instanceof State ? state : State.create(state);
    var configuration = Array.from(getConfiguration([], this.getStateNodes(stateFromConfig.value)));
    return new State(_assign(_assign({}, stateFromConfig), {
      value: this.resolve(stateFromConfig.value),
      configuration: configuration,
      done: isInFinalState(configuration, this),
      tags: getTagsFromConfiguration(configuration),
      machine: this.machine
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = Object.keys(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = __values(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = Object.keys(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = flatten(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var entryNodes = flatten(stateTransitions.map(function (t) {
      return t.entrySet;
    }));
    var configuration = flatten(Object.keys(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: flatten(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: flatten(Object.keys(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if (isString(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if (Object.keys(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.getTransitionData = function (state, event) {
    return this._transition(state.value, state, toSCXMLEvent(event));
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = __values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate["in"];
        var resolvedContext = state.context;
        var isInState = stateIn ? isString(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches(toStateValue(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        matchesState(toStateValue(stateIn, this.delimiter), path(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || evaluateGuard(this.machine, cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, __spreadArray([], __read(candidate.actions), false));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = flatten(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = isInternal ? [] : flatten(allNextStateNodes.map(function (n) {
      return _this.nodesFromChild(n);
    }));
    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  };

  StateNode.prototype.nodesFromChild = function (childStateNode) {
    if (childStateNode.escapes(this)) {
      return [];
    }

    var nodes = [];
    var marker = childStateNode;

    while (marker && marker !== this) {
      nodes.push(marker);
      marker = marker.parent;
    }

    nodes.push(this); // inclusive

    return nodes;
  };
  /**
   * Whether the given state node "escapes" this state node. If the `stateNode` is equal to or the parent of
   * this state node, it does not escape.
   */


  StateNode.prototype.escapes = function (stateNode) {
    if (this === stateNode) {
      return false;
    }

    var parent = this.parent;

    while (parent) {
      if (parent === stateNode) {
        return false;
      }

      parent = parent.parent;
    }

    return true;
  };

  StateNode.prototype.getActions = function (transition, currentContext, _event, prevState) {
    var e_4, _a, e_5, _b;

    var prevConfig = getConfiguration([], prevState ? this.getStateNodes(prevState.value) : [this]);
    var resolvedConfig = transition.configuration.length ? getConfiguration(prevConfig, transition.configuration) : prevConfig;

    try {
      for (var resolvedConfig_1 = __values(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;

        if (!has(prevConfig, sn)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1["return"])) _a.call(resolvedConfig_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = __values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!has(resolvedConfig, sn) || has(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1["return"])) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    var doneEvents = flatten(transition.entrySet.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;

      if (!parent.parent) {
        return events;
      }

      events.push(done(sn.id, sn.doneData), // TODO: deprecate - final states should not emit done events for their own state.
      done(parent.id, sn.doneData ? mapContext(sn.doneData, currentContext, _event) : undefined));
      var grandparent = parent.parent;

      if (grandparent.type === 'parallel') {
        if (getChildren(grandparent).every(function (parentNode) {
          return isInFinalState(transition.configuration, parentNode);
        })) {
          events.push(done(grandparent.id));
        }
      }

      return events;
    }));
    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    transition.entrySet.sort(function (a, b) {
      return a.order - b.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);

    var _c = __read([flatten(Array.from(entryStates).map(function (stateNode) {
      return __spreadArray(__spreadArray([], __read(stateNode.activities.map(function (activity) {
        return start(activity);
      })), false), __read(stateNode.onEntry), false);
    })).concat(doneEvents.map(raise)), flatten(Array.from(exitStates).map(function (stateNode) {
      return __spreadArray(__spreadArray([], __read(stateNode.onExit), false), __read(stateNode.activities.map(function (activity) {
        return stop(activity);
      })), false);
    }))], 2),
        entryActions = _c[0],
        exitActions = _c[1];

    var actions = toActionObjects(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
    return actions;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = toSCXMLEvent(event);

    var currentState;

    if (state instanceof State) {
      currentState = context === undefined ? state : this.resolveState(State.from(state, context));
    } else {
      var resolvedStateValue = isString(state) ? this.resolve(pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
      currentState = this.resolveState(State.from(resolvedStateValue, resolvedContext));
    }

    if (!IS_PRODUCTION && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !isBuiltInEvent(_event.name)) {
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = getConfiguration([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = __spreadArray([], __read(resolvedConfig), false);
    return this.resolveTransition(stateTransition, currentState, currentState.context, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event); // Save original event to state
    // TODO: this should be the raised event! Delete in V5 (breaking)

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, __spreadArray([], __read(currentActions), false));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, context, _event) {
    var e_6, _a;

    var _this = this;

    if (_event === void 0) {
      _event = initEvent;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedStateValue = willTransition ? getValue(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var actions = this.getActions(stateTransition, context, _event, currentState);
    var activities = currentState ? _assign({}, currentState.activities) : {};

    try {
      for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
        var action = actions_1_1.value;

        if (action.type === start$1) {
          activities[action.activity.id || action.activity.type] = action;
        } else if (action.type === stop$1) {
          activities[action.activity.id || action.activity.type] = false;
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actions_1_1 && !actions_1_1.done && (_a = actions_1["return"])) _a.call(actions_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _b = __read(resolveActions(this, currentState, context, _event, actions, this.machine.config.preserveActionOrder), 2),
        resolvedActions = _b[0],
        updatedContext = _b[1];

    var _c = __read(partition(resolvedActions, function (action) {
      return action.type === raise$1 || action.type === send$1 && action.to === SpecialTargets.Internal;
    }), 2),
        raisedEvents = _c[0],
        nonRaisedActions = _c[1];

    var invokeActions = resolvedActions.filter(function (action) {
      var _a;

      return action.type === start$1 && ((_a = action.activity) === null || _a === void 0 ? void 0 : _a.type) === invoke;
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = createInvocableActor(action.activity, _this.machine, updatedContext, _event);
      return acc;
    }, currentState ? _assign({}, currentState.children) : {});
    var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var isDone = isInFinalState(resolvedConfiguration, this);
    var nextState = new State({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? updateHistoryValue(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone,
      tags: currentState === null || currentState === void 0 ? void 0 : currentState.tags,
      machine: this
    });
    var didUpdateContext = context !== updatedContext;
    nextState.changed = _event.name === update || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    } // There are transient transitions if the machine is not in a final state
    // and if some of the state nodes have transient ("always") transitions.


    var isTransient = !isDone && (this._transient || configuration.some(function (stateNode) {
      return stateNode._transient;
    })); // If there are no enabled transitions, check if there are transient transitions.
    // If there are transient transitions, continue checking for more transitions
    // because an transient transition should be triggered even if there are no
    // enabled transitions.
    //
    // If we're already working on an transient transition (by checking
    // if the event is a NULL_EVENT), then stop to prevent an infinite loop.
    //
    // Otherwise, if there are no enabled nor transient transitions, we are done.

    if (!willTransition && (!isTransient || _event.name === NULL_EVENT)) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      if (isTransient) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: nullEvent
        }, _event);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || _typeof(history.value) !== _typeof(maybeNextState.value) || !stateValuesEqual(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.history = history;
    maybeNextState.tags = getTagsFromConfiguration(maybeNextState.configuration);
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = toStatePath(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return mapValues(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if (isString(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!Object.keys(stateValue).length) {
          return this.initialStateValue || {};
        }

        return mapValues(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
      }

      return stateNode.path;
    }

    return toStatePath(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function get() {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = mapFilterValues(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
        }

        initialStateValue = isLeafNode(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      } else {
        // The finite state value of a machine without child states is just an empty object
        initialStateValue = {};
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    this._init(); // TODO: this should be in the constructor (see note in constructor)


    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      entrySet: configuration,
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, context !== null && context !== void 0 ? context : this.machine.context, undefined);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function get() {
      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function get() {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if (isString(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function get() {
      var _this = this;

      if (isLeafNode(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!IS_PRODUCTION) {
          warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
        }

        return [this];
      }

      var initialStateNodePaths = toStatePaths(this.initialStateValue);
      return flatten(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = __read(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!Object.keys(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: mapFilterValues(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = isString(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? flatten(toStatePaths(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = nestedPath(parent.path, 'states')(historyValue).current;

    if (isString(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return flatten(toStatePaths(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function get() {
      var _this = this;

      var childStateIds = flatten(Object.keys(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function get() {
      var e_7, _a, e_8, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = __values(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_8 = void 0, __values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("".concat(event_1));
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function get() {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!isString(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = normalizeTarget(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return isString(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);

    var transition = _assign(_assign({}, transitionConfig), {
      actions: toActionObjects(toArray(transitionConfig.actions)),
      cond: toGuard(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event,
      toJSON: function toJSON() {
        return _assign(_assign({}, transition), {
          target: transition.target ? transition.target.map(function (t) {
            return "#".concat(t.id);
          }) : undefined,
          source: "#".concat(_this.id)
        });
      }
    });

    return transition;
  };

  StateNode.prototype.formatTransitions = function () {
    var e_9, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictTransitionConfigs_1 = __rest(_b, [_typeof(_c) === "symbol" ? _c : _c + ""]);

      onConfig = flatten(Object.keys(strictTransitionConfigs_1).map(function (key) {
        if (!IS_PRODUCTION && key === NULL_EVENT) {
          warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + "Please check the `on` configuration for \"#".concat(_this.id, "\"."));
        }

        var transitionConfigArray = toTransitionConfigArray(key, strictTransitionConfigs_1[key]);

        if (!IS_PRODUCTION) {
          validateArrayifiedTransitions(_this, key, transitionConfigArray);
        }

        return transitionConfigArray;
      }).concat(toTransitionConfigArray(WILDCARD, wildcardConfigs)));
    }

    var eventlessConfig = this.config.always ? toTransitionConfigArray('', this.config.always) : [];
    var doneConfig = this.config.onDone ? toTransitionConfigArray(String(done(this.id)), this.config.onDone) : [];

    if (!IS_PRODUCTION) {
      warn(!(this.config.onDone && !this.parent), "Root nodes cannot have an \".onDone\" transition. Please check the config of \"".concat(this.id, "\"."));
    }

    var invokeConfig = flatten(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(error(invokeDef.id)), invokeDef.onError)), false));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = flatten(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(doneConfig), false), __read(invokeConfig), false), __read(onConfig), false), __read(eventlessConfig), false).map(function (transitionConfig) {
      return toArray(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = __values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1["return"])) _a.call(delayedTransitions_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();

function createMachine(config, options) {
  return new StateNode(config, options);
}

var runtimeMachine = createMachine({
  id: "Hello World",
  initial: "ping",
  states: {
    ping: {
      after: {
        1000: {
          target: "pong",
          actions: ["log"]
        }
      }
    },
    pong: {
      after: {
        1000: {
          target: "ping",
          actions: ["log"]
        }
      }
    }
  }
}, {
  actions: {
    log: function log(context, event) {
      console.log(JSON.stringify(event));
    }
  }
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dist$6 = {};

var dist$5 = {};

var client = {};

var commands$6 = {};

var commands$5 = {};

var APPEND$1 = {};

Object.defineProperty(APPEND$1, "__esModule", {
  value: true
});
APPEND$1.transformArguments = APPEND$1.FIRST_KEY_INDEX = void 0;
APPEND$1.FIRST_KEY_INDEX = 1;

function transformArguments$4y(key, value) {
  return ['APPEND', key, value];
}

APPEND$1.transformArguments = transformArguments$4y;

var BITCOUNT$1 = {};

Object.defineProperty(BITCOUNT$1, "__esModule", {
  value: true
});
BITCOUNT$1.transformArguments = BITCOUNT$1.IS_READ_ONLY = BITCOUNT$1.FIRST_KEY_INDEX = void 0;
BITCOUNT$1.FIRST_KEY_INDEX = 1;
BITCOUNT$1.IS_READ_ONLY = true;

function transformArguments$4x(key, range) {
  var args = ['BITCOUNT', key];

  if (range) {
    args.push(range.start.toString(), range.end.toString());
  }

  return args;
}

BITCOUNT$1.transformArguments = transformArguments$4x;

var BITFIELD$1 = {};

Object.defineProperty(BITFIELD$1, "__esModule", {
  value: true
});
BITFIELD$1.transformArguments = BITFIELD$1.IS_READ_ONLY = BITFIELD$1.FIRST_KEY_INDEX = void 0;
BITFIELD$1.FIRST_KEY_INDEX = 1;
BITFIELD$1.IS_READ_ONLY = true;

function transformArguments$4w(key, operations) {
  var args = ['BITFIELD', key];

  var _iterator = _createForOfIteratorHelper(operations),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var options = _step.value;

      switch (options.operation) {
        case 'GET':
          args.push('GET', options.type, options.offset.toString());
          break;

        case 'SET':
          args.push('SET', options.type, options.offset.toString(), options.value.toString());
          break;

        case 'INCRBY':
          args.push('INCRBY', options.type, options.offset.toString(), options.increment.toString());
          break;

        case 'OVERFLOW':
          args.push('OVERFLOW', options.behavior);
          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return args;
}

BITFIELD$1.transformArguments = transformArguments$4w;

var BITOP$1 = {};

var genericTransformers = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformCommandReply = exports.CommandCategories = exports.CommandFlags = exports.pushOptionalVerdictArgument = exports.pushVerdictArgument = exports.pushVerdictArguments = exports.pushEvalArguments = exports.transformPXAT = exports.transformEXAT = exports.transformGeoMembersWithReply = exports.GeoReplyWith = exports.pushGeoSearchArguments = exports.pushGeoCountArgument = exports.transformSortedSetWithScoresReply = exports.transformSortedSetMemberNullReply = exports.transformStreamsMessagesReply = exports.transformStreamMessagesReply = exports.transformTuplesReply = exports.transformStringNumberInfinityArgument = exports.transformNumberInfinityArgument = exports.transformNumberInfinityNullArrayReply = exports.transformNumberInfinityNullReply = exports.transformNumberInfinityReply = exports.pushScanArguments = exports.transformBooleanArrayReply = exports.transformBooleanReply = void 0;

  function transformBooleanReply(reply) {
    return reply === 1;
  }

  exports.transformBooleanReply = transformBooleanReply;

  function transformBooleanArrayReply(reply) {
    return reply.map(transformBooleanReply);
  }

  exports.transformBooleanArrayReply = transformBooleanArrayReply;

  function pushScanArguments(args, cursor, options) {
    args.push(cursor.toString());

    if (options === null || options === void 0 ? void 0 : options.MATCH) {
      args.push('MATCH', options.MATCH);
    }

    if (options === null || options === void 0 ? void 0 : options.COUNT) {
      args.push('COUNT', options.COUNT.toString());
    }

    return args;
  }

  exports.pushScanArguments = pushScanArguments;

  function transformNumberInfinityReply(reply) {
    switch (reply.toString()) {
      case '+inf':
        return Infinity;

      case '-inf':
        return -Infinity;

      default:
        return Number(reply);
    }
  }

  exports.transformNumberInfinityReply = transformNumberInfinityReply;

  function transformNumberInfinityNullReply(reply) {
    if (reply === null) return null;
    return transformNumberInfinityReply(reply);
  }

  exports.transformNumberInfinityNullReply = transformNumberInfinityNullReply;

  function transformNumberInfinityNullArrayReply(reply) {
    return reply.map(transformNumberInfinityNullReply);
  }

  exports.transformNumberInfinityNullArrayReply = transformNumberInfinityNullArrayReply;

  function transformNumberInfinityArgument(num) {
    switch (num) {
      case Infinity:
        return '+inf';

      case -Infinity:
        return '-inf';

      default:
        return num.toString();
    }
  }

  exports.transformNumberInfinityArgument = transformNumberInfinityArgument;

  function transformStringNumberInfinityArgument(num) {
    if (typeof num !== 'number') return num;
    return transformNumberInfinityArgument(num);
  }

  exports.transformStringNumberInfinityArgument = transformStringNumberInfinityArgument;

  function transformTuplesReply(reply) {
    var message = Object.create(null);

    for (var i = 0; i < reply.length; i += 2) {
      message[reply[i].toString()] = reply[i + 1];
    }

    return message;
  }

  exports.transformTuplesReply = transformTuplesReply;

  function transformStreamMessagesReply(reply) {
    var messages = [];

    var _iterator = _createForOfIteratorHelper(reply),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            id = _step$value[0],
            message = _step$value[1];

        messages.push({
          id: id,
          message: transformTuplesReply(message)
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return messages;
  }

  exports.transformStreamMessagesReply = transformStreamMessagesReply;

  function transformStreamsMessagesReply(reply) {
    if (reply === null) return null;
    return reply.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          rawMessages = _ref2[1];

      return {
        name: name,
        messages: transformStreamMessagesReply(rawMessages)
      };
    });
  }

  exports.transformStreamsMessagesReply = transformStreamsMessagesReply;

  function transformSortedSetMemberNullReply(reply) {
    if (!reply.length) return null;
    return {
      value: reply[0],
      score: transformNumberInfinityReply(reply[1])
    };
  }

  exports.transformSortedSetMemberNullReply = transformSortedSetMemberNullReply;

  function transformSortedSetWithScoresReply(reply) {
    var members = [];

    for (var i = 0; i < reply.length; i += 2) {
      members.push({
        value: reply[i],
        score: transformNumberInfinityReply(reply[i + 1])
      });
    }

    return members;
  }

  exports.transformSortedSetWithScoresReply = transformSortedSetWithScoresReply;

  function pushGeoCountArgument(args, count) {
    if (typeof count === 'number') {
      args.push('COUNT', count.toString());
    } else if (count) {
      args.push('COUNT', count.value.toString());

      if (count.ANY) {
        args.push('ANY');
      }
    }

    return args;
  }

  exports.pushGeoCountArgument = pushGeoCountArgument;

  function pushGeoSearchArguments(args, key, from, by, options) {
    args.push(key);

    if (typeof from === 'string') {
      args.push('FROMMEMBER', from);
    } else {
      args.push('FROMLONLAT', from.longitude.toString(), from.latitude.toString());
    }

    if ('radius' in by) {
      args.push('BYRADIUS', by.radius.toString());
    } else {
      args.push('BYBOX', by.width.toString(), by.height.toString());
    }

    args.push(by.unit);

    if (options === null || options === void 0 ? void 0 : options.SORT) {
      args.push(options.SORT);
    }

    pushGeoCountArgument(args, options === null || options === void 0 ? void 0 : options.COUNT);
    return args;
  }

  exports.pushGeoSearchArguments = pushGeoSearchArguments;
  var GeoReplyWith;

  (function (GeoReplyWith) {
    GeoReplyWith["DISTANCE"] = "WITHDIST";
    GeoReplyWith["HASH"] = "WITHHASH";
    GeoReplyWith["COORDINATES"] = "WITHCOORD";
  })(GeoReplyWith = exports.GeoReplyWith || (exports.GeoReplyWith = {}));

  function transformGeoMembersWithReply(reply, replyWith) {
    var replyWithSet = new Set(replyWith);
    var index = 0;
    var distanceIndex = replyWithSet.has(GeoReplyWith.DISTANCE) && ++index,
        hashIndex = replyWithSet.has(GeoReplyWith.HASH) && ++index,
        coordinatesIndex = replyWithSet.has(GeoReplyWith.COORDINATES) && ++index;
    return reply.map(function (member) {
      var transformedMember = {
        member: member[0]
      };

      if (distanceIndex) {
        transformedMember.distance = member[distanceIndex];
      }

      if (hashIndex) {
        transformedMember.hash = member[hashIndex];
      }

      if (coordinatesIndex) {
        var _member$coordinatesIn = _slicedToArray(member[coordinatesIndex], 2),
            longitude = _member$coordinatesIn[0],
            latitude = _member$coordinatesIn[1];

        transformedMember.coordinates = {
          longitude: longitude,
          latitude: latitude
        };
      }

      return transformedMember;
    });
  }

  exports.transformGeoMembersWithReply = transformGeoMembersWithReply;

  function transformEXAT(EXAT) {
    return (typeof EXAT === 'number' ? EXAT : Math.floor(EXAT.getTime() / 1000)).toString();
  }

  exports.transformEXAT = transformEXAT;

  function transformPXAT(PXAT) {
    return (typeof PXAT === 'number' ? PXAT : PXAT.getTime()).toString();
  }

  exports.transformPXAT = transformPXAT;

  function pushEvalArguments(args, options) {
    if (options === null || options === void 0 ? void 0 : options.keys) {
      args.push.apply(args, [options.keys.length.toString()].concat(_toConsumableArray(options.keys)));
    } else {
      args.push('0');
    }

    if (options === null || options === void 0 ? void 0 : options.arguments) {
      args.push.apply(args, _toConsumableArray(options.arguments));
    }

    return args;
  }

  exports.pushEvalArguments = pushEvalArguments;

  function pushVerdictArguments(args, value) {
    if (Array.isArray(value)) {
      args.push.apply(args, _toConsumableArray(value));
    } else {
      args.push(value);
    }

    return args;
  }

  exports.pushVerdictArguments = pushVerdictArguments;

  function pushVerdictArgument(args, value) {
    if (Array.isArray(value)) {
      args.push.apply(args, [value.length.toString()].concat(_toConsumableArray(value)));
    } else {
      args.push('1', value);
    }

    return args;
  }

  exports.pushVerdictArgument = pushVerdictArgument;

  function pushOptionalVerdictArgument(args, name, value) {
    if (value === undefined) return args;
    args.push(name);
    return pushVerdictArgument(args, value);
  }

  exports.pushOptionalVerdictArgument = pushOptionalVerdictArgument;

  (function (CommandFlags) {
    CommandFlags["WRITE"] = "write";
    CommandFlags["READONLY"] = "readonly";
    CommandFlags["DENYOOM"] = "denyoom";
    CommandFlags["ADMIN"] = "admin";
    CommandFlags["PUBSUB"] = "pubsub";
    CommandFlags["NOSCRIPT"] = "noscript";
    CommandFlags["RANDOM"] = "random";
    CommandFlags["SORT_FOR_SCRIPT"] = "sort_for_script";
    CommandFlags["LOADING"] = "loading";
    CommandFlags["STALE"] = "stale";
    CommandFlags["SKIP_MONITOR"] = "skip_monitor";
    CommandFlags["ASKING"] = "asking";
    CommandFlags["FAST"] = "fast";
    CommandFlags["MOVABLEKEYS"] = "movablekeys"; // keys have no pre-determined position. You must discover keys yourself.
  })(exports.CommandFlags || (exports.CommandFlags = {}));

  (function (CommandCategories) {
    CommandCategories["KEYSPACE"] = "@keyspace";
    CommandCategories["READ"] = "@read";
    CommandCategories["WRITE"] = "@write";
    CommandCategories["SET"] = "@set";
    CommandCategories["SORTEDSET"] = "@sortedset";
    CommandCategories["LIST"] = "@list";
    CommandCategories["HASH"] = "@hash";
    CommandCategories["STRING"] = "@string";
    CommandCategories["BITMAP"] = "@bitmap";
    CommandCategories["HYPERLOGLOG"] = "@hyperloglog";
    CommandCategories["GEO"] = "@geo";
    CommandCategories["STREAM"] = "@stream";
    CommandCategories["PUBSUB"] = "@pubsub";
    CommandCategories["ADMIN"] = "@admin";
    CommandCategories["FAST"] = "@fast";
    CommandCategories["SLOW"] = "@slow";
    CommandCategories["BLOCKING"] = "@blocking";
    CommandCategories["DANGEROUS"] = "@dangerous";
    CommandCategories["CONNECTION"] = "@connection";
    CommandCategories["TRANSACTION"] = "@transaction";
    CommandCategories["SCRIPTING"] = "@scripting";
  })(exports.CommandCategories || (exports.CommandCategories = {}));

  function transformCommandReply(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 7),
        name = _ref4[0],
        arity = _ref4[1],
        flags = _ref4[2],
        firstKeyIndex = _ref4[3],
        lastKeyIndex = _ref4[4],
        step = _ref4[5],
        categories = _ref4[6];

    return {
      name: name,
      arity: arity,
      flags: new Set(flags),
      firstKeyIndex: firstKeyIndex,
      lastKeyIndex: lastKeyIndex,
      step: step,
      categories: new Set(categories)
    };
  }

  exports.transformCommandReply = transformCommandReply;
})(genericTransformers);

Object.defineProperty(BITOP$1, "__esModule", {
  value: true
});
BITOP$1.transformArguments = BITOP$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$14 = genericTransformers;
BITOP$1.FIRST_KEY_INDEX = 2;

function transformArguments$4v(operation, destKey, key) {
  return (0, generic_transformers_1$14.pushVerdictArguments)(['BITOP', operation, destKey], key);
}

BITOP$1.transformArguments = transformArguments$4v;

var BITPOS$1 = {};

Object.defineProperty(BITPOS$1, "__esModule", {
  value: true
});
BITPOS$1.transformArguments = BITPOS$1.IS_READ_ONLY = BITPOS$1.FIRST_KEY_INDEX = void 0;
BITPOS$1.FIRST_KEY_INDEX = 1;
BITPOS$1.IS_READ_ONLY = true;

function transformArguments$4u(key, bit, start, end) {
  var args = ['BITPOS', key, bit.toString()];

  if (typeof start === 'number') {
    args.push(start.toString());
  }

  if (typeof end === 'number') {
    args.push(end.toString());
  }

  return args;
}

BITPOS$1.transformArguments = transformArguments$4u;

var BLMOVE$1 = {};

Object.defineProperty(BLMOVE$1, "__esModule", {
  value: true
});
BLMOVE$1.transformArguments = BLMOVE$1.FIRST_KEY_INDEX = void 0;
BLMOVE$1.FIRST_KEY_INDEX = 1;

function transformArguments$4t(source, destination, sourceDirection, destinationDirection, timeout) {
  return ['BLMOVE', source, destination, sourceDirection, destinationDirection, timeout.toString()];
}

BLMOVE$1.transformArguments = transformArguments$4t;

var BLPOP$1 = {};

Object.defineProperty(BLPOP$1, "__esModule", {
  value: true
});
BLPOP$1.transformReply = BLPOP$1.transformArguments = BLPOP$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$13 = genericTransformers;
BLPOP$1.FIRST_KEY_INDEX = 1;

function transformArguments$4s(keys, timeout) {
  var args = (0, generic_transformers_1$13.pushVerdictArguments)(['BLPOP'], keys);
  args.push(timeout.toString());
  return args;
}

BLPOP$1.transformArguments = transformArguments$4s;

function transformReply$P(reply) {
  if (reply === null) return null;
  return {
    key: reply[0],
    element: reply[1]
  };
}

BLPOP$1.transformReply = transformReply$P;

var BRPOP$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, timeout) {
    var args = (0, generic_transformers_1.pushVerdictArguments)(['BRPOP'], key);
    args.push(timeout.toString());
    return args;
  }

  exports.transformArguments = transformArguments;
  var BLPOP_1 = BLPOP$1;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return BLPOP_1.transformReply;
    }
  });
})(BRPOP$1);

var BRPOPLPUSH$1 = {};

Object.defineProperty(BRPOPLPUSH$1, "__esModule", {
  value: true
});
BRPOPLPUSH$1.transformArguments = BRPOPLPUSH$1.FIRST_KEY_INDEX = void 0;
BRPOPLPUSH$1.FIRST_KEY_INDEX = 1;

function transformArguments$4r(source, destination, timeout) {
  return ['BRPOPLPUSH', source, destination, timeout.toString()];
}

BRPOPLPUSH$1.transformArguments = transformArguments$4r;

var BZPOPMAX$1 = {};

Object.defineProperty(BZPOPMAX$1, "__esModule", {
  value: true
});
BZPOPMAX$1.transformReply = BZPOPMAX$1.transformArguments = BZPOPMAX$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$12 = genericTransformers;
BZPOPMAX$1.FIRST_KEY_INDEX = 1;

function transformArguments$4q(key, timeout) {
  var args = (0, generic_transformers_1$12.pushVerdictArguments)(['BZPOPMAX'], key);
  args.push(timeout.toString());
  return args;
}

BZPOPMAX$1.transformArguments = transformArguments$4q;

function transformReply$O(reply) {
  if (!reply) return null;
  return {
    key: reply[0],
    value: reply[1],
    score: (0, generic_transformers_1$12.transformNumberInfinityReply)(reply[2])
  };
}

BZPOPMAX$1.transformReply = transformReply$O;

var BZPOPMIN$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, timeout) {
    var args = (0, generic_transformers_1.pushVerdictArguments)(['BZPOPMIN'], key);
    args.push(timeout.toString());
    return args;
  }

  exports.transformArguments = transformArguments;
  var BZPOPMAX_1 = BZPOPMAX$1;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return BZPOPMAX_1.transformReply;
    }
  });
})(BZPOPMIN$1);

var COPY$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(source, destination, options) {
    var args = ['COPY', source, destination];

    if (options === null || options === void 0 ? void 0 : options.destinationDb) {
      args.push('DB', options.destinationDb.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.replace) {
      args.push('REPLACE');
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(COPY$1);

var DECR$1 = {};

Object.defineProperty(DECR$1, "__esModule", {
  value: true
});
DECR$1.transformArguments = DECR$1.FIRST_KEY_INDEX = void 0;
DECR$1.FIRST_KEY_INDEX = 1;

function transformArguments$4p(key) {
  return ['DECR', key];
}

DECR$1.transformArguments = transformArguments$4p;

var DECRBY$2 = {};

Object.defineProperty(DECRBY$2, "__esModule", {
  value: true
});
DECRBY$2.transformArguments = DECRBY$2.FIRST_KEY_INDEX = void 0;
DECRBY$2.FIRST_KEY_INDEX = 1;

function transformArguments$4o(key, decrement) {
  return ['DECRBY', key, decrement.toString()];
}

DECRBY$2.transformArguments = transformArguments$4o;

var DEL$6 = {};

Object.defineProperty(DEL$6, "__esModule", {
  value: true
});
DEL$6.transformArguments = void 0;
var generic_transformers_1$11 = genericTransformers;

function transformArguments$4n(keys) {
  return (0, generic_transformers_1$11.pushVerdictArguments)(['DEL'], keys);
}

DEL$6.transformArguments = transformArguments$4n;

var DUMP$1 = {};

Object.defineProperty(DUMP$1, "__esModule", {
  value: true
});
DUMP$1.transformArguments = void 0;

function transformArguments$4m(key) {
  return ['DUMP', key];
}

DUMP$1.transformArguments = transformArguments$4m;

var EVAL$1 = {};

Object.defineProperty(EVAL$1, "__esModule", {
  value: true
});
EVAL$1.transformArguments = void 0;
var generic_transformers_1$10 = genericTransformers;

function transformArguments$4l(script, options) {
  return (0, generic_transformers_1$10.pushEvalArguments)(['EVAL', script], options);
}

EVAL$1.transformArguments = transformArguments$4l;

var EVALSHA$1 = {};

Object.defineProperty(EVALSHA$1, "__esModule", {
  value: true
});
EVALSHA$1.transformArguments = void 0;
var generic_transformers_1$$ = genericTransformers;

function transformArguments$4k(sha1, options) {
  return (0, generic_transformers_1$$.pushEvalArguments)(['EVALSHA', sha1], options);
}

EVALSHA$1.transformArguments = transformArguments$4k;

var EXISTS$5 = {};

Object.defineProperty(EXISTS$5, "__esModule", {
  value: true
});
EXISTS$5.transformArguments = EXISTS$5.IS_READ_ONLY = EXISTS$5.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$_ = genericTransformers;
EXISTS$5.FIRST_KEY_INDEX = 1;
EXISTS$5.IS_READ_ONLY = true;

function transformArguments$4j(keys) {
  return (0, generic_transformers_1$_.pushVerdictArguments)(['EXISTS'], keys);
}

EXISTS$5.transformArguments = transformArguments$4j;

var EXPIRE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, seconds) {
    return ['EXPIRE', key, seconds.toString()];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(EXPIRE$1);

var EXPIREAT$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, timestamp) {
    return ['EXPIREAT', key, (0, generic_transformers_1.transformEXAT)(timestamp)];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformBooleanReply;
    }
  });
})(EXPIREAT$1);

var GEOADD$1 = {};

Object.defineProperty(GEOADD$1, "__esModule", {
  value: true
});
GEOADD$1.transformArguments = GEOADD$1.FIRST_KEY_INDEX = void 0;
GEOADD$1.FIRST_KEY_INDEX = 1;

function transformArguments$4i(key, toAdd, options) {
  var _a, _b;

  var args = ['GEOADD', key];

  if ((_a = options) === null || _a === void 0 ? void 0 : _a.NX) {
    args.push('NX');
  } else if ((_b = options) === null || _b === void 0 ? void 0 : _b.XX) {
    args.push('XX');
  }

  if (options === null || options === void 0 ? void 0 : options.CH) {
    args.push('CH');
  }

  var _iterator = _createForOfIteratorHelper(Array.isArray(toAdd) ? toAdd : [toAdd]),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          longitude = _step$value.longitude,
          latitude = _step$value.latitude,
          member = _step$value.member;
      args.push(longitude.toString(), latitude.toString(), member);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return args;
}

GEOADD$1.transformArguments = transformArguments$4i;

var GEODIST$1 = {};

Object.defineProperty(GEODIST$1, "__esModule", {
  value: true
});
GEODIST$1.transformReply = GEODIST$1.transformArguments = GEODIST$1.IS_READ_ONLY = GEODIST$1.FIRST_KEY_INDEX = void 0;
GEODIST$1.FIRST_KEY_INDEX = 1;
GEODIST$1.IS_READ_ONLY = true;

function transformArguments$4h(key, member1, member2, unit) {
  var args = ['GEODIST', key, member1, member2];

  if (unit) {
    args.push(unit);
  }

  return args;
}

GEODIST$1.transformArguments = transformArguments$4h;

function transformReply$N(reply) {
  return reply === null ? null : Number(reply);
}

GEODIST$1.transformReply = transformReply$N;

var GEOHASH$1 = {};

Object.defineProperty(GEOHASH$1, "__esModule", {
  value: true
});
GEOHASH$1.transformArguments = GEOHASH$1.IS_READ_ONLY = GEOHASH$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$Z = genericTransformers;
GEOHASH$1.FIRST_KEY_INDEX = 1;
GEOHASH$1.IS_READ_ONLY = true;

function transformArguments$4g(key, member) {
  return (0, generic_transformers_1$Z.pushVerdictArguments)(['GEOHASH', key], member);
}

GEOHASH$1.transformArguments = transformArguments$4g;

var GEOPOS$1 = {};

Object.defineProperty(GEOPOS$1, "__esModule", {
  value: true
});
GEOPOS$1.transformReply = GEOPOS$1.transformArguments = GEOPOS$1.IS_READ_ONLY = GEOPOS$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$Y = genericTransformers;
GEOPOS$1.FIRST_KEY_INDEX = 1;
GEOPOS$1.IS_READ_ONLY = true;

function transformArguments$4f(key, member) {
  return (0, generic_transformers_1$Y.pushVerdictArguments)(['GEOPOS', key], member);
}

GEOPOS$1.transformArguments = transformArguments$4f;

function transformReply$M(reply) {
  return reply.map(function (coordinates) {
    return coordinates === null ? null : {
      longitude: coordinates[0],
      latitude: coordinates[1]
    };
  });
}

GEOPOS$1.transformReply = transformReply$M;

var GEOSEARCH_WITH$1 = {};

var GEOSEARCH$1 = {};

Object.defineProperty(GEOSEARCH$1, "__esModule", {
  value: true
});
GEOSEARCH$1.transformArguments = GEOSEARCH$1.IS_READ_ONLY = GEOSEARCH$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$X = genericTransformers;
GEOSEARCH$1.FIRST_KEY_INDEX = 1;
GEOSEARCH$1.IS_READ_ONLY = true;

function transformArguments$4e(key, from, by, options) {
  return (0, generic_transformers_1$X.pushGeoSearchArguments)(['GEOSEARCH'], key, from, by, options);
}

GEOSEARCH$1.transformArguments = transformArguments$4e;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var GEOSEARCH_1 = GEOSEARCH$1;
  var GEOSEARCH_2 = GEOSEARCH$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return GEOSEARCH_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return GEOSEARCH_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, from, by, replyWith, options) {
    var args = (0, GEOSEARCH_1.transformArguments)(key, from, by, options);
    args.push.apply(args, _toConsumableArray(replyWith));
    args.preserve = replyWith;
    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformGeoMembersWithReply;
    }
  });
})(GEOSEARCH_WITH$1);

var GEOSEARCHSTORE$1 = {};

Object.defineProperty(GEOSEARCHSTORE$1, "__esModule", {
  value: true
});
GEOSEARCHSTORE$1.transformReply = GEOSEARCHSTORE$1.transformArguments = GEOSEARCHSTORE$1.IS_READ_ONLY = GEOSEARCHSTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$W = genericTransformers;
GEOSEARCHSTORE$1.FIRST_KEY_INDEX = 1;
GEOSEARCHSTORE$1.IS_READ_ONLY = true;

function transformArguments$4d(destination, source, from, by, options) {
  var args = (0, generic_transformers_1$W.pushGeoSearchArguments)(['GEOSEARCHSTORE', destination], source, from, by, options);

  if (options === null || options === void 0 ? void 0 : options.STOREDIST) {
    args.push('STOREDIST');
  }

  return args;
}

GEOSEARCHSTORE$1.transformArguments = transformArguments$4d;

function transformReply$L(reply) {
  if (typeof reply !== 'number') {
    throw new TypeError("https://github.com/redis/redis/issues/9261");
  }

  return reply;
}

GEOSEARCHSTORE$1.transformReply = transformReply$L;

var GET$4 = {};

Object.defineProperty(GET$4, "__esModule", {
  value: true
});
GET$4.transformArguments = GET$4.IS_READ_ONLY = GET$4.FIRST_KEY_INDEX = void 0;
GET$4.FIRST_KEY_INDEX = 1;
GET$4.IS_READ_ONLY = true;

function transformArguments$4c(key) {
  return ['GET', key];
}

GET$4.transformArguments = transformArguments$4c;

var GETBIT$1 = {};

Object.defineProperty(GETBIT$1, "__esModule", {
  value: true
});
GETBIT$1.transformArguments = GETBIT$1.IS_READ_ONLY = GETBIT$1.FIRST_KEY_INDEX = void 0;
GETBIT$1.FIRST_KEY_INDEX = 1;
GETBIT$1.IS_READ_ONLY = true;

function transformArguments$4b(key, offset) {
  return ['GETBIT', key, offset.toString()];
}

GETBIT$1.transformArguments = transformArguments$4b;

var GETDEL$1 = {};

Object.defineProperty(GETDEL$1, "__esModule", {
  value: true
});
GETDEL$1.transformArguments = GETDEL$1.FIRST_KEY_INDEX = void 0;
GETDEL$1.FIRST_KEY_INDEX = 1;

function transformArguments$4a(key) {
  return ['GETDEL', key];
}

GETDEL$1.transformArguments = transformArguments$4a;

var GETEX$1 = {};

Object.defineProperty(GETEX$1, "__esModule", {
  value: true
});
GETEX$1.transformArguments = GETEX$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$V = genericTransformers;
GETEX$1.FIRST_KEY_INDEX = 1;

function transformArguments$49(key, mode) {
  var args = ['GETEX', key];

  if ('EX' in mode) {
    args.push('EX', mode.EX.toString());
  } else if ('PX' in mode) {
    args.push('PX', mode.PX.toString());
  } else if ('EXAT' in mode) {
    args.push('EXAT', (0, generic_transformers_1$V.transformEXAT)(mode.EXAT));
  } else if ('PXAT' in mode) {
    args.push('PXAT', (0, generic_transformers_1$V.transformPXAT)(mode.PXAT));
  } else {
    // PERSIST
    args.push('PERSIST');
  }

  return args;
}

GETEX$1.transformArguments = transformArguments$49;

var GETRANGE$1 = {};

Object.defineProperty(GETRANGE$1, "__esModule", {
  value: true
});
GETRANGE$1.transformArguments = GETRANGE$1.IS_READ_ONLY = GETRANGE$1.FIRST_KEY_INDEX = void 0;
GETRANGE$1.FIRST_KEY_INDEX = 1;
GETRANGE$1.IS_READ_ONLY = true;

function transformArguments$48(key, start, end) {
  return ['GETRANGE', key, start.toString(), end.toString()];
}

GETRANGE$1.transformArguments = transformArguments$48;

var GETSET$1 = {};

Object.defineProperty(GETSET$1, "__esModule", {
  value: true
});
GETSET$1.transformArguments = GETSET$1.FIRST_KEY_INDEX = void 0;
GETSET$1.FIRST_KEY_INDEX = 1;

function transformArguments$47(key, value) {
  return ['GETSET', key, value];
}

GETSET$1.transformArguments = transformArguments$47;

var HDEL$1 = {};

Object.defineProperty(HDEL$1, "__esModule", {
  value: true
});
HDEL$1.transformArguments = HDEL$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$U = genericTransformers;
HDEL$1.FIRST_KEY_INDEX = 1;

function transformArguments$46(key, field) {
  return (0, generic_transformers_1$U.pushVerdictArguments)(['HDEL', key], field);
}

HDEL$1.transformArguments = transformArguments$46;

var HEXISTS$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, field) {
    return ['HEXISTS', key, field];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(HEXISTS$1);

var HGET$1 = {};

Object.defineProperty(HGET$1, "__esModule", {
  value: true
});
HGET$1.transformArguments = HGET$1.IS_READ_ONLY = HGET$1.FIRST_KEY_INDEX = void 0;
HGET$1.FIRST_KEY_INDEX = 1;
HGET$1.IS_READ_ONLY = true;

function transformArguments$45(key, field) {
  return ['HGET', key, field];
}

HGET$1.transformArguments = transformArguments$45;

var HGETALL$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key) {
    return ['HGETALL', key];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformTuplesReply;
    }
  });
})(HGETALL$1);

var HINCRBY$1 = {};

Object.defineProperty(HINCRBY$1, "__esModule", {
  value: true
});
HINCRBY$1.transformArguments = HINCRBY$1.FIRST_KEY_INDEX = void 0;
HINCRBY$1.FIRST_KEY_INDEX = 1;

function transformArguments$44(key, field, increment) {
  return ['HINCRBY', key, field, increment.toString()];
}

HINCRBY$1.transformArguments = transformArguments$44;

var HINCRBYFLOAT$1 = {};

Object.defineProperty(HINCRBYFLOAT$1, "__esModule", {
  value: true
});
HINCRBYFLOAT$1.transformArguments = HINCRBYFLOAT$1.FIRST_KEY_INDEX = void 0;
HINCRBYFLOAT$1.FIRST_KEY_INDEX = 1;

function transformArguments$43(key, field, increment) {
  return ['HINCRBYFLOAT', key, field, increment.toString()];
}

HINCRBYFLOAT$1.transformArguments = transformArguments$43;

var HKEYS$1 = {};

Object.defineProperty(HKEYS$1, "__esModule", {
  value: true
});
HKEYS$1.transformArguments = HKEYS$1.FIRST_KEY_INDEX = void 0;
HKEYS$1.FIRST_KEY_INDEX = 1;

function transformArguments$42(key) {
  return ['HKEYS', key];
}

HKEYS$1.transformArguments = transformArguments$42;

var HLEN$1 = {};

Object.defineProperty(HLEN$1, "__esModule", {
  value: true
});
HLEN$1.transformArguments = HLEN$1.FIRST_KEY_INDEX = void 0;
HLEN$1.FIRST_KEY_INDEX = 1;

function transformArguments$41(key) {
  return ['HLEN', key];
}

HLEN$1.transformArguments = transformArguments$41;

var HMGET$1 = {};

Object.defineProperty(HMGET$1, "__esModule", {
  value: true
});
HMGET$1.transformArguments = HMGET$1.IS_READ_ONLY = HMGET$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$T = genericTransformers;
HMGET$1.FIRST_KEY_INDEX = 1;
HMGET$1.IS_READ_ONLY = true;

function transformArguments$40(key, fields) {
  return (0, generic_transformers_1$T.pushVerdictArguments)(['HMGET', key], fields);
}

HMGET$1.transformArguments = transformArguments$40;

var HRANDFIELD_COUNT_WITHVALUES$1 = {};

var HRANDFIELD_COUNT$1 = {};

var HRANDFIELD$1 = {};

Object.defineProperty(HRANDFIELD$1, "__esModule", {
  value: true
});
HRANDFIELD$1.transformArguments = HRANDFIELD$1.IS_READ_ONLY = HRANDFIELD$1.FIRST_KEY_INDEX = void 0;
HRANDFIELD$1.FIRST_KEY_INDEX = 1;
HRANDFIELD$1.IS_READ_ONLY = true;

function transformArguments$3$(key) {
  return ['HRANDFIELD', key];
}

HRANDFIELD$1.transformArguments = transformArguments$3$;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var HRANDFIELD_1 = HRANDFIELD$1;
  var HRANDFIELD_2 = HRANDFIELD$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return HRANDFIELD_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return HRANDFIELD_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, count) {
    return [].concat(_toConsumableArray((0, HRANDFIELD_1.transformArguments)(key)), [count.toString()]);
  }

  exports.transformArguments = transformArguments;
})(HRANDFIELD_COUNT$1);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var HRANDFIELD_COUNT_1 = HRANDFIELD_COUNT$1;
  var HRANDFIELD_COUNT_2 = HRANDFIELD_COUNT$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return HRANDFIELD_COUNT_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return HRANDFIELD_COUNT_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, count) {
    return [].concat(_toConsumableArray((0, HRANDFIELD_COUNT_1.transformArguments)(key, count)), ['WITHVALUES']);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformTuplesReply;
    }
  });
})(HRANDFIELD_COUNT_WITHVALUES$1);

var HSCAN$1 = {};

Object.defineProperty(HSCAN$1, "__esModule", {
  value: true
});
HSCAN$1.transformReply = HSCAN$1.transformArguments = HSCAN$1.IS_READ_ONLY = HSCAN$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$S = genericTransformers;
HSCAN$1.FIRST_KEY_INDEX = 1;
HSCAN$1.IS_READ_ONLY = true;

function transformArguments$3_(key, cursor, options) {
  return (0, generic_transformers_1$S.pushScanArguments)(['HSCAN', key], cursor, options);
}

HSCAN$1.transformArguments = transformArguments$3_;

function transformReply$K(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      cursor = _ref2[0],
      rawTuples = _ref2[1];

  var parsedTuples = [];

  for (var i = 0; i < rawTuples.length; i += 2) {
    parsedTuples.push({
      field: rawTuples[i],
      value: rawTuples[i + 1]
    });
  }

  return {
    cursor: Number(cursor),
    tuples: parsedTuples
  };
}

HSCAN$1.transformReply = transformReply$K;

var HSET$1 = {};

Object.defineProperty(HSET$1, "__esModule", {
  value: true
});
HSET$1.transformArguments = HSET$1.FIRST_KEY_INDEX = void 0;
HSET$1.FIRST_KEY_INDEX = 1;

function transformArguments$3Z() {
  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
    _ref[_key] = arguments[_key];
  }

  var key = _ref[0],
      value = _ref[1],
      fieldValue = _ref[2];
  var args = ['HSET', key];

  if (typeof value === 'string' || typeof value === 'number' || Buffer.isBuffer(value)) {
    pushValue(args, value);
    pushValue(args, fieldValue);
  } else if (value instanceof Map) {
    pushMap(args, value);
  } else if (Array.isArray(value)) {
    pushTuples(args, value);
  } else {
    pushObject(args, value);
  }

  return args;
}

HSET$1.transformArguments = transformArguments$3Z;

function pushMap(args, map) {
  var _iterator = _createForOfIteratorHelper(map.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      pushValue(args, key);
      pushValue(args, value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function pushTuples(args, tuples) {
  var _iterator2 = _createForOfIteratorHelper(tuples),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var tuple = _step2.value;

      if (Array.isArray(tuple)) {
        pushTuples(args, tuple);
        continue;
      }

      pushValue(args, tuple);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function pushObject(args, object) {
  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    args.push(key.toString(), object[key].toString());
  }
}

function pushValue(args, value) {
  args.push(typeof value === 'number' ? value.toString() : value);
}

var HSETNX$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, field, value) {
    return ['HSETNX', key, field, value];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(HSETNX$1);

var HSTRLEN$1 = {};

Object.defineProperty(HSTRLEN$1, "__esModule", {
  value: true
});
HSTRLEN$1.transformArguments = HSTRLEN$1.FIRST_KEY_INDEX = void 0;
HSTRLEN$1.FIRST_KEY_INDEX = 1;

function transformArguments$3Y(key, field) {
  return ['HSTRLEN', key, field];
}

HSTRLEN$1.transformArguments = transformArguments$3Y;

var HVALS$1 = {};

Object.defineProperty(HVALS$1, "__esModule", {
  value: true
});
HVALS$1.transformArguments = HVALS$1.FIRST_KEY_INDEX = void 0;
HVALS$1.FIRST_KEY_INDEX = 1;

function transformArguments$3X(key) {
  return ['HVALS', key];
}

HVALS$1.transformArguments = transformArguments$3X;

var INCR$1 = {};

Object.defineProperty(INCR$1, "__esModule", {
  value: true
});
INCR$1.transformArguments = INCR$1.FIRST_KEY_INDEX = void 0;
INCR$1.FIRST_KEY_INDEX = 1;

function transformArguments$3W(key) {
  return ['INCR', key];
}

INCR$1.transformArguments = transformArguments$3W;

var INCRBY$6 = {};

Object.defineProperty(INCRBY$6, "__esModule", {
  value: true
});
INCRBY$6.transformArguments = INCRBY$6.FIRST_KEY_INDEX = void 0;
INCRBY$6.FIRST_KEY_INDEX = 1;

function transformArguments$3V(key, increment) {
  return ['INCRBY', key, increment.toString()];
}

INCRBY$6.transformArguments = transformArguments$3V;

var INCRBYFLOAT$1 = {};

Object.defineProperty(INCRBYFLOAT$1, "__esModule", {
  value: true
});
INCRBYFLOAT$1.transformArguments = INCRBYFLOAT$1.FIRST_KEY_INDEX = void 0;
INCRBYFLOAT$1.FIRST_KEY_INDEX = 1;

function transformArguments$3U(key, increment) {
  return ['INCRBYFLOAT', key, increment.toString()];
}

INCRBYFLOAT$1.transformArguments = transformArguments$3U;

var LINDEX$1 = {};

Object.defineProperty(LINDEX$1, "__esModule", {
  value: true
});
LINDEX$1.transformArguments = LINDEX$1.IS_READ_ONLY = void 0;
LINDEX$1.IS_READ_ONLY = true;

function transformArguments$3T(key, index) {
  return ['LINDEX', key, index.toString()];
}

LINDEX$1.transformArguments = transformArguments$3T;

var LINSERT$1 = {};

Object.defineProperty(LINSERT$1, "__esModule", {
  value: true
});
LINSERT$1.transformArguments = LINSERT$1.FIRST_KEY_INDEX = void 0;
LINSERT$1.FIRST_KEY_INDEX = 1;

function transformArguments$3S(key, position, pivot, element) {
  return ['LINSERT', key, position, pivot, element];
}

LINSERT$1.transformArguments = transformArguments$3S;

var LLEN$1 = {};

Object.defineProperty(LLEN$1, "__esModule", {
  value: true
});
LLEN$1.transformArguments = LLEN$1.IS_READ_ONLY = LLEN$1.FIRST_KEY_INDEX = void 0;
LLEN$1.FIRST_KEY_INDEX = 1;
LLEN$1.IS_READ_ONLY = true;

function transformArguments$3R(key) {
  return ['LLEN', key];
}

LLEN$1.transformArguments = transformArguments$3R;

var LMOVE$1 = {};

Object.defineProperty(LMOVE$1, "__esModule", {
  value: true
});
LMOVE$1.transformArguments = LMOVE$1.FIRST_KEY_INDEX = void 0;
LMOVE$1.FIRST_KEY_INDEX = 1;

function transformArguments$3Q(source, destination, sourceSide, destinationSide) {
  return ['LMOVE', source, destination, sourceSide, destinationSide];
}

LMOVE$1.transformArguments = transformArguments$3Q;

var LPOP_COUNT$1 = {};

Object.defineProperty(LPOP_COUNT$1, "__esModule", {
  value: true
});
LPOP_COUNT$1.transformArguments = LPOP_COUNT$1.FIRST_KEY_INDEX = void 0;
LPOP_COUNT$1.FIRST_KEY_INDEX = 1;

function transformArguments$3P(key, count) {
  return ['LPOP', key, count.toString()];
}

LPOP_COUNT$1.transformArguments = transformArguments$3P;

var LPOP$1 = {};

Object.defineProperty(LPOP$1, "__esModule", {
  value: true
});
LPOP$1.transformArguments = LPOP$1.FIRST_KEY_INDEX = void 0;
LPOP$1.FIRST_KEY_INDEX = 1;

function transformArguments$3O(key) {
  return ['LPOP', key];
}

LPOP$1.transformArguments = transformArguments$3O;

var LPOS_COUNT$1 = {};

var LPOS$1 = {};

Object.defineProperty(LPOS$1, "__esModule", {
  value: true
});
LPOS$1.transformArguments = LPOS$1.IS_READ_ONLY = LPOS$1.FIRST_KEY_INDEX = void 0;
LPOS$1.FIRST_KEY_INDEX = 1;
LPOS$1.IS_READ_ONLY = true;

function transformArguments$3N(key, element, options) {
  var args = ['LPOS', key, element];

  if (typeof (options === null || options === void 0 ? void 0 : options.RANK) === 'number') {
    args.push('RANK', options.RANK.toString());
  }

  if (typeof (options === null || options === void 0 ? void 0 : options.MAXLEN) === 'number') {
    args.push('MAXLEN', options.MAXLEN.toString());
  }

  return args;
}

LPOS$1.transformArguments = transformArguments$3N;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var LPOS_1 = LPOS$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return LPOS_1.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return LPOS_1.IS_READ_ONLY;
    }
  });

  function transformArguments(key, element, count, options) {
    var args = ['LPOS', key, element];

    if (typeof (options === null || options === void 0 ? void 0 : options.RANK) === 'number') {
      args.push('RANK', options.RANK.toString());
    }

    args.push('COUNT', count.toString());

    if (typeof (options === null || options === void 0 ? void 0 : options.MAXLEN) === 'number') {
      args.push('MAXLEN', options.MAXLEN.toString());
    }

    return args;
  }

  exports.transformArguments = transformArguments;
})(LPOS_COUNT$1);

var LPUSH$1 = {};

Object.defineProperty(LPUSH$1, "__esModule", {
  value: true
});
LPUSH$1.transformArguments = LPUSH$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$R = genericTransformers;
LPUSH$1.FIRST_KEY_INDEX = 1;

function transformArguments$3M(key, elements) {
  return (0, generic_transformers_1$R.pushVerdictArguments)(['LPUSH', key], elements);
}

LPUSH$1.transformArguments = transformArguments$3M;

var LPUSHX$1 = {};

Object.defineProperty(LPUSHX$1, "__esModule", {
  value: true
});
LPUSHX$1.transformArguments = LPUSHX$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$Q = genericTransformers;
LPUSHX$1.FIRST_KEY_INDEX = 1;

function transformArguments$3L(key, element) {
  return (0, generic_transformers_1$Q.pushVerdictArguments)(['LPUSHX', key], element);
}

LPUSHX$1.transformArguments = transformArguments$3L;

var LRANGE$1 = {};

Object.defineProperty(LRANGE$1, "__esModule", {
  value: true
});
LRANGE$1.transformArguments = LRANGE$1.IS_READ_ONLY = LRANGE$1.FIRST_KEY_INDEX = void 0;
LRANGE$1.FIRST_KEY_INDEX = 1;
LRANGE$1.IS_READ_ONLY = true;

function transformArguments$3K(key, start, stop) {
  return ['LRANGE', key, start.toString(), stop.toString()];
}

LRANGE$1.transformArguments = transformArguments$3K;

var LREM$1 = {};

Object.defineProperty(LREM$1, "__esModule", {
  value: true
});
LREM$1.transformArguments = LREM$1.FIRST_KEY_INDEX = void 0;
LREM$1.FIRST_KEY_INDEX = 1;

function transformArguments$3J(key, count, element) {
  return ['LREM', key, count.toString(), element];
}

LREM$1.transformArguments = transformArguments$3J;

var LSET$1 = {};

Object.defineProperty(LSET$1, "__esModule", {
  value: true
});
LSET$1.transformArguments = LSET$1.FIRST_KEY_INDEX = void 0;
LSET$1.FIRST_KEY_INDEX = 1;

function transformArguments$3I(key, index, element) {
  return ['LSET', key, index.toString(), element];
}

LSET$1.transformArguments = transformArguments$3I;

var LTRIM$1 = {};

Object.defineProperty(LTRIM$1, "__esModule", {
  value: true
});
LTRIM$1.transformArguments = LTRIM$1.FIRST_KEY_INDEX = void 0;
LTRIM$1.FIRST_KEY_INDEX = 1;

function transformArguments$3H(key, start, stop) {
  return ['LTRIM', key, start.toString(), stop.toString()];
}

LTRIM$1.transformArguments = transformArguments$3H;

var MGET$4 = {};

Object.defineProperty(MGET$4, "__esModule", {
  value: true
});
MGET$4.transformArguments = MGET$4.IS_READ_ONLY = MGET$4.FIRST_KEY_INDEX = void 0;
MGET$4.FIRST_KEY_INDEX = 1;
MGET$4.IS_READ_ONLY = true;

function transformArguments$3G(keys) {
  return ['MGET'].concat(_toConsumableArray(keys));
}

MGET$4.transformArguments = transformArguments$3G;

var MIGRATE$1 = {};

Object.defineProperty(MIGRATE$1, "__esModule", {
  value: true
});
MIGRATE$1.transformArguments = void 0;

function transformArguments$3F(host, port, key, destinationDb, timeout, options) {
  var args = ['MIGRATE', host, port.toString()],
      isKeyArray = Array.isArray(key);

  if (isKeyArray) {
    args.push('""');
  } else {
    args.push(key);
  }

  args.push(destinationDb.toString(), timeout.toString());

  if (options === null || options === void 0 ? void 0 : options.COPY) {
    args.push('COPY');
  }

  if (options === null || options === void 0 ? void 0 : options.REPLACE) {
    args.push('REPLACE');
  }

  if (options === null || options === void 0 ? void 0 : options.AUTH) {
    if (options.AUTH.username) {
      args.push('AUTH2', options.AUTH.username, options.AUTH.password);
    } else {
      args.push('AUTH', options.AUTH.password);
    }
  }

  if (isKeyArray) {
    args.push.apply(args, ['KEYS'].concat(_toConsumableArray(key)));
  }

  return args;
}

MIGRATE$1.transformArguments = transformArguments$3F;

var MSET$1 = {};

Object.defineProperty(MSET$1, "__esModule", {
  value: true
});
MSET$1.transformArguments = MSET$1.FIRST_KEY_INDEX = void 0;
MSET$1.FIRST_KEY_INDEX = 1;

function transformArguments$3E(toSet) {
  var args = ['MSET'];

  if (Array.isArray(toSet)) {
    args.push.apply(args, _toConsumableArray(toSet.flat()));
  } else {
    for (var _i = 0, _Object$keys = Object.keys(toSet); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      args.push(key, toSet[key]);
    }
  }

  return args;
}

MSET$1.transformArguments = transformArguments$3E;

var MSETNX$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(toSet) {
    var args = ['MSETNX'];

    if (Array.isArray(toSet)) {
      args.push.apply(args, _toConsumableArray(toSet.flat()));
    } else {
      for (var _i = 0, _Object$keys = Object.keys(toSet); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        args.push(key, toSet[key]);
      }
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(MSETNX$1);

var PERSIST$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key) {
    return ['PERSIST', key];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(PERSIST$1);

var PEXPIRE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, milliseconds) {
    return ['PEXPIRE', key, milliseconds.toString()];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(PEXPIRE$1);

var PEXPIREAT$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, millisecondsTimestamp) {
    return ['PEXPIREAT', key, (0, generic_transformers_1.transformPXAT)(millisecondsTimestamp)];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformBooleanReply;
    }
  });
})(PEXPIREAT$1);

var PFADD$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, element) {
    return (0, generic_transformers_1.pushVerdictArguments)(['PFADD', key], element);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformBooleanReply;
    }
  });
})(PFADD$1);

var PFCOUNT$1 = {};

Object.defineProperty(PFCOUNT$1, "__esModule", {
  value: true
});
PFCOUNT$1.transformArguments = PFCOUNT$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$P = genericTransformers;
PFCOUNT$1.FIRST_KEY_INDEX = 1;

function transformArguments$3D(key) {
  return (0, generic_transformers_1$P.pushVerdictArguments)(['PFCOUNT'], key);
}

PFCOUNT$1.transformArguments = transformArguments$3D;

var PFMERGE$1 = {};

Object.defineProperty(PFMERGE$1, "__esModule", {
  value: true
});
PFMERGE$1.transformArguments = PFMERGE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$O = genericTransformers;
PFMERGE$1.FIRST_KEY_INDEX = 1;

function transformArguments$3C(destination, source) {
  return (0, generic_transformers_1$O.pushVerdictArguments)(['PFMERGE', destination], source);
}

PFMERGE$1.transformArguments = transformArguments$3C;

var PSETEX$1 = {};

Object.defineProperty(PSETEX$1, "__esModule", {
  value: true
});
PSETEX$1.transformArguments = PSETEX$1.FIRST_KEY_INDEX = void 0;
PSETEX$1.FIRST_KEY_INDEX = 1;

function transformArguments$3B(key, milliseconds, value) {
  return ['PSETEX', key, milliseconds.toString(), value];
}

PSETEX$1.transformArguments = transformArguments$3B;

var PTTL$1 = {};

Object.defineProperty(PTTL$1, "__esModule", {
  value: true
});
PTTL$1.transformArguments = PTTL$1.IS_READ_ONLY = PTTL$1.FIRST_KEY_INDEX = void 0;
PTTL$1.FIRST_KEY_INDEX = 1;
PTTL$1.IS_READ_ONLY = true;

function transformArguments$3A(key) {
  return ['PTTL', key];
}

PTTL$1.transformArguments = transformArguments$3A;

var PUBLISH$1 = {};

Object.defineProperty(PUBLISH$1, "__esModule", {
  value: true
});
PUBLISH$1.transformArguments = void 0;

function transformArguments$3z(channel, message) {
  return ['PUBLISH', channel, message];
}

PUBLISH$1.transformArguments = transformArguments$3z;

var RENAME$1 = {};

Object.defineProperty(RENAME$1, "__esModule", {
  value: true
});
RENAME$1.transformArguments = RENAME$1.FIRST_KEY_INDEX = void 0;
RENAME$1.FIRST_KEY_INDEX = 1;

function transformArguments$3y(key, newKey) {
  return ['RENAME', key, newKey];
}

RENAME$1.transformArguments = transformArguments$3y;

var RENAMENX$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, newKey) {
    return ['RENAMENX', key, newKey];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(RENAMENX$1);

var RPOP_COUNT$1 = {};

Object.defineProperty(RPOP_COUNT$1, "__esModule", {
  value: true
});
RPOP_COUNT$1.transformArguments = RPOP_COUNT$1.FIRST_KEY_INDEX = void 0;
RPOP_COUNT$1.FIRST_KEY_INDEX = 1;

function transformArguments$3x(key, count) {
  return ['RPOP', key, count.toString()];
}

RPOP_COUNT$1.transformArguments = transformArguments$3x;

var RPOP$1 = {};

Object.defineProperty(RPOP$1, "__esModule", {
  value: true
});
RPOP$1.transformArguments = RPOP$1.FIRST_KEY_INDEX = void 0;
RPOP$1.FIRST_KEY_INDEX = 1;

function transformArguments$3w(key) {
  return ['RPOP', key];
}

RPOP$1.transformArguments = transformArguments$3w;

var RPOPLPUSH$1 = {};

Object.defineProperty(RPOPLPUSH$1, "__esModule", {
  value: true
});
RPOPLPUSH$1.transformArguments = RPOPLPUSH$1.FIRST_KEY_INDEX = void 0;
RPOPLPUSH$1.FIRST_KEY_INDEX = 1;

function transformArguments$3v(source, destination) {
  return ['RPOPLPUSH', source, destination];
}

RPOPLPUSH$1.transformArguments = transformArguments$3v;

var RPUSH$1 = {};

Object.defineProperty(RPUSH$1, "__esModule", {
  value: true
});
RPUSH$1.transformArguments = RPUSH$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$N = genericTransformers;
RPUSH$1.FIRST_KEY_INDEX = 1;

function transformArguments$3u(key, element) {
  return (0, generic_transformers_1$N.pushVerdictArguments)(['RPUSH', key], element);
}

RPUSH$1.transformArguments = transformArguments$3u;

var RPUSHX$1 = {};

Object.defineProperty(RPUSHX$1, "__esModule", {
  value: true
});
RPUSHX$1.transformArguments = RPUSHX$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$M = genericTransformers;
RPUSHX$1.FIRST_KEY_INDEX = 1;

function transformArguments$3t(key, element) {
  return (0, generic_transformers_1$M.pushVerdictArguments)(['RPUSHX', key], element);
}

RPUSHX$1.transformArguments = transformArguments$3t;

var SADD$1 = {};

Object.defineProperty(SADD$1, "__esModule", {
  value: true
});
SADD$1.transformArguments = SADD$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$L = genericTransformers;
SADD$1.FIRST_KEY_INDEX = 1;

function transformArguments$3s(key, members) {
  return (0, generic_transformers_1$L.pushVerdictArguments)(['SADD', key], members);
}

SADD$1.transformArguments = transformArguments$3s;

var SCARD$1 = {};

Object.defineProperty(SCARD$1, "__esModule", {
  value: true
});
SCARD$1.transformArguments = SCARD$1.FIRST_KEY_INDEX = void 0;
SCARD$1.FIRST_KEY_INDEX = 1;

function transformArguments$3r(key) {
  return ['SCARD', key];
}

SCARD$1.transformArguments = transformArguments$3r;

var SDIFF$1 = {};

Object.defineProperty(SDIFF$1, "__esModule", {
  value: true
});
SDIFF$1.transformArguments = SDIFF$1.IS_READ_ONLY = SDIFF$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$K = genericTransformers;
SDIFF$1.FIRST_KEY_INDEX = 1;
SDIFF$1.IS_READ_ONLY = true;

function transformArguments$3q(keys) {
  return (0, generic_transformers_1$K.pushVerdictArguments)(['SDIFF'], keys);
}

SDIFF$1.transformArguments = transformArguments$3q;

var SDIFFSTORE$1 = {};

Object.defineProperty(SDIFFSTORE$1, "__esModule", {
  value: true
});
SDIFFSTORE$1.transformArguments = SDIFFSTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$J = genericTransformers;
SDIFFSTORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$3p(destination, keys) {
  return (0, generic_transformers_1$J.pushVerdictArguments)(['SDIFFSTORE', destination], keys);
}

SDIFFSTORE$1.transformArguments = transformArguments$3p;

var SET$3 = {};

Object.defineProperty(SET$3, "__esModule", {
  value: true
});
SET$3.transformArguments = SET$3.FIRST_KEY_INDEX = void 0;
SET$3.FIRST_KEY_INDEX = 1;

function transformArguments$3o(key, value, options) {
  var args = ['SET', key, typeof value === 'number' ? value.toString() : value];

  if (options === null || options === void 0 ? void 0 : options.EX) {
    args.push('EX', options.EX.toString());
  } else if (options === null || options === void 0 ? void 0 : options.PX) {
    args.push('PX', options.PX.toString());
  } else if (options === null || options === void 0 ? void 0 : options.EXAT) {
    args.push('EXAT', options.EXAT.toString());
  } else if (options === null || options === void 0 ? void 0 : options.PXAT) {
    args.push('PXAT', options.PXAT.toString());
  } else if (options === null || options === void 0 ? void 0 : options.KEEPTTL) {
    args.push('KEEPTTL');
  }

  if (options === null || options === void 0 ? void 0 : options.NX) {
    args.push('NX');
  } else if (options === null || options === void 0 ? void 0 : options.XX) {
    args.push('XX');
  }

  if (options === null || options === void 0 ? void 0 : options.GET) {
    args.push('GET');
  }

  return args;
}

SET$3.transformArguments = transformArguments$3o;

var SETBIT$1 = {};

Object.defineProperty(SETBIT$1, "__esModule", {
  value: true
});
SETBIT$1.transformArguments = SETBIT$1.FIRST_KEY_INDEX = void 0;
SETBIT$1.FIRST_KEY_INDEX = 1;

function transformArguments$3n(key, offset, value) {
  return ['SETBIT', key, offset.toString(), value.toString()];
}

SETBIT$1.transformArguments = transformArguments$3n;

var SETEX$1 = {};

Object.defineProperty(SETEX$1, "__esModule", {
  value: true
});
SETEX$1.transformArguments = SETEX$1.FIRST_KEY_INDEX = void 0;
SETEX$1.FIRST_KEY_INDEX = 1;

function transformArguments$3m(key, seconds, value) {
  return ['SETEX', key, seconds.toString(), value];
}

SETEX$1.transformArguments = transformArguments$3m;

var SETNX$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, value) {
    return ['SETNX', key, value];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(SETNX$1);

var SETRANGE$1 = {};

Object.defineProperty(SETRANGE$1, "__esModule", {
  value: true
});
SETRANGE$1.transformArguments = SETRANGE$1.FIRST_KEY_INDEX = void 0;
SETRANGE$1.FIRST_KEY_INDEX = 1;

function transformArguments$3l(key, offset, value) {
  return ['SETRANGE', key, offset.toString(), value];
}

SETRANGE$1.transformArguments = transformArguments$3l;

var SINTER$1 = {};

Object.defineProperty(SINTER$1, "__esModule", {
  value: true
});
SINTER$1.transformArguments = SINTER$1.IS_READ_ONLY = SINTER$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$I = genericTransformers;
SINTER$1.FIRST_KEY_INDEX = 1;
SINTER$1.IS_READ_ONLY = true;

function transformArguments$3k(keys) {
  return (0, generic_transformers_1$I.pushVerdictArguments)(['SINTER'], keys);
}

SINTER$1.transformArguments = transformArguments$3k;

var SINTERSTORE$1 = {};

Object.defineProperty(SINTERSTORE$1, "__esModule", {
  value: true
});
SINTERSTORE$1.transformArguments = SINTERSTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$H = genericTransformers;
SINTERSTORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$3j(destination, keys) {
  return (0, generic_transformers_1$H.pushVerdictArguments)(['SINTERSTORE', destination], keys);
}

SINTERSTORE$1.transformArguments = transformArguments$3j;

var SISMEMBER$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, member) {
    return ['SISMEMBER', key, member];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(SISMEMBER$1);

var SMEMBERS$1 = {};

Object.defineProperty(SMEMBERS$1, "__esModule", {
  value: true
});
SMEMBERS$1.transformArguments = SMEMBERS$1.FIRST_KEY_INDEX = void 0;
SMEMBERS$1.FIRST_KEY_INDEX = 1;

function transformArguments$3i(key) {
  return ['SMEMBERS', key];
}

SMEMBERS$1.transformArguments = transformArguments$3i;

var SMISMEMBER$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, members) {
    return ['SMISMEMBER', key].concat(_toConsumableArray(members));
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanArrayReply;
    }
  });
})(SMISMEMBER$1);

var SMOVE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(source, destination, member) {
    return ['SMOVE', source, destination, member];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(SMOVE$1);

var SORT$1 = {};

Object.defineProperty(SORT$1, "__esModule", {
  value: true
});
SORT$1.transformReply = SORT$1.transformArguments = SORT$1.IS_READ_ONLY = SORT$1.FIRST_KEY_INDEX = void 0;
SORT$1.FIRST_KEY_INDEX = 1;
SORT$1.IS_READ_ONLY = true;

function transformArguments$3h(key, options) {
  var args = ['SORT', key];

  if (options === null || options === void 0 ? void 0 : options.BY) {
    args.push('BY', options.BY);
  }

  if (options === null || options === void 0 ? void 0 : options.LIMIT) {
    args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.GET) {
    var _iterator = _createForOfIteratorHelper(typeof options.GET === 'string' ? [options.GET] : options.GET),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pattern = _step.value;
        args.push('GET', pattern);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (options === null || options === void 0 ? void 0 : options.DIRECTION) {
    args.push(options.DIRECTION);
  }

  if (options === null || options === void 0 ? void 0 : options.ALPHA) {
    args.push('ALPHA');
  }

  if (options === null || options === void 0 ? void 0 : options.STORE) {
    args.push('STORE', options.STORE);
  }

  return args;
}

SORT$1.transformArguments = transformArguments$3h; // integer when using `STORE`

function transformReply$J(reply) {
  return reply;
}

SORT$1.transformReply = transformReply$J;

var SPOP$1 = {};

Object.defineProperty(SPOP$1, "__esModule", {
  value: true
});
SPOP$1.transformArguments = SPOP$1.FIRST_KEY_INDEX = void 0;
SPOP$1.FIRST_KEY_INDEX = 1;

function transformArguments$3g(key, count) {
  var args = ['SPOP', key];

  if (typeof count === 'number') {
    args.push(count.toString());
  }

  return args;
}

SPOP$1.transformArguments = transformArguments$3g;

var SRANDMEMBER_COUNT$1 = {};

var SRANDMEMBER$1 = {};

Object.defineProperty(SRANDMEMBER$1, "__esModule", {
  value: true
});
SRANDMEMBER$1.transformArguments = SRANDMEMBER$1.FIRST_KEY_INDEX = void 0;
SRANDMEMBER$1.FIRST_KEY_INDEX = 1;

function transformArguments$3f(key) {
  return ['SRANDMEMBER', key];
}

SRANDMEMBER$1.transformArguments = transformArguments$3f;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var SRANDMEMBER_1 = SRANDMEMBER$1;
  var SRANDMEMBER_2 = SRANDMEMBER$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return SRANDMEMBER_2.FIRST_KEY_INDEX;
    }
  });

  function transformArguments(key, count) {
    return [].concat(_toConsumableArray((0, SRANDMEMBER_1.transformArguments)(key)), [count.toString()]);
  }

  exports.transformArguments = transformArguments;
})(SRANDMEMBER_COUNT$1);

var SREM$1 = {};

Object.defineProperty(SREM$1, "__esModule", {
  value: true
});
SREM$1.transformArguments = SREM$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$G = genericTransformers;
SREM$1.FIRST_KEY_INDEX = 1;

function transformArguments$3e(key, members) {
  return (0, generic_transformers_1$G.pushVerdictArguments)(['SREM', key], members);
}

SREM$1.transformArguments = transformArguments$3e;

var SSCAN$1 = {};

Object.defineProperty(SSCAN$1, "__esModule", {
  value: true
});
SSCAN$1.transformReply = SSCAN$1.transformArguments = SSCAN$1.IS_READ_ONLY = SSCAN$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$F = genericTransformers;
SSCAN$1.FIRST_KEY_INDEX = 1;
SSCAN$1.IS_READ_ONLY = true;

function transformArguments$3d(key, cursor, options) {
  return (0, generic_transformers_1$F.pushScanArguments)(['SSCAN', key], cursor, options);
}

SSCAN$1.transformArguments = transformArguments$3d;

function transformReply$I(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      cursor = _ref2[0],
      members = _ref2[1];

  return {
    cursor: Number(cursor),
    members: members
  };
}

SSCAN$1.transformReply = transformReply$I;

var STRLEN$3 = {};

Object.defineProperty(STRLEN$3, "__esModule", {
  value: true
});
STRLEN$3.transformArguments = STRLEN$3.IS_READ_ONLY = STRLEN$3.FIRST_KEY_INDEX = void 0;
STRLEN$3.FIRST_KEY_INDEX = 1;
STRLEN$3.IS_READ_ONLY = true;

function transformArguments$3c(key) {
  return ['STRLEN', key];
}

STRLEN$3.transformArguments = transformArguments$3c;

var SUNION$1 = {};

Object.defineProperty(SUNION$1, "__esModule", {
  value: true
});
SUNION$1.transformArguments = SUNION$1.IS_READ_ONLY = SUNION$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$E = genericTransformers;
SUNION$1.FIRST_KEY_INDEX = 1;
SUNION$1.IS_READ_ONLY = true;

function transformArguments$3b(keys) {
  return (0, generic_transformers_1$E.pushVerdictArguments)(['SUNION'], keys);
}

SUNION$1.transformArguments = transformArguments$3b;

var SUNIONSTORE$1 = {};

Object.defineProperty(SUNIONSTORE$1, "__esModule", {
  value: true
});
SUNIONSTORE$1.transformArguments = SUNIONSTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$D = genericTransformers;
SUNIONSTORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$3a(destination, keys) {
  return (0, generic_transformers_1$D.pushVerdictArguments)(['SUNIONSTORE', destination], keys);
}

SUNIONSTORE$1.transformArguments = transformArguments$3a;

var TOUCH$1 = {};

Object.defineProperty(TOUCH$1, "__esModule", {
  value: true
});
TOUCH$1.transformArguments = TOUCH$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$C = genericTransformers;
TOUCH$1.FIRST_KEY_INDEX = 1;

function transformArguments$39(key) {
  return (0, generic_transformers_1$C.pushVerdictArguments)(['TOUCH'], key);
}

TOUCH$1.transformArguments = transformArguments$39;

var TTL$1 = {};

Object.defineProperty(TTL$1, "__esModule", {
  value: true
});
TTL$1.transformArguments = TTL$1.IS_READ_ONLY = TTL$1.FIRST_KEY_INDEX = void 0;
TTL$1.FIRST_KEY_INDEX = 1;
TTL$1.IS_READ_ONLY = true;

function transformArguments$38(key) {
  return ['TTL', key];
}

TTL$1.transformArguments = transformArguments$38;

var TYPE$3 = {};

Object.defineProperty(TYPE$3, "__esModule", {
  value: true
});
TYPE$3.transformArguments = TYPE$3.IS_READ_ONLY = TYPE$3.FIRST_KEY_INDEX = void 0;
TYPE$3.FIRST_KEY_INDEX = 1;
TYPE$3.IS_READ_ONLY = true;

function transformArguments$37(key) {
  return ['TYPE', key];
}

TYPE$3.transformArguments = transformArguments$37;

var UNLINK$1 = {};

Object.defineProperty(UNLINK$1, "__esModule", {
  value: true
});
UNLINK$1.transformArguments = UNLINK$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$B = genericTransformers;
UNLINK$1.FIRST_KEY_INDEX = 1;

function transformArguments$36(key) {
  return (0, generic_transformers_1$B.pushVerdictArguments)(['UNLINK'], key);
}

UNLINK$1.transformArguments = transformArguments$36;

var WATCH$1 = {};

Object.defineProperty(WATCH$1, "__esModule", {
  value: true
});
WATCH$1.transformArguments = void 0;
var generic_transformers_1$A = genericTransformers;

function transformArguments$35(key) {
  return (0, generic_transformers_1$A.pushVerdictArguments)(['WATCH'], key);
}

WATCH$1.transformArguments = transformArguments$35;

var XACK$1 = {};

Object.defineProperty(XACK$1, "__esModule", {
  value: true
});
XACK$1.transformArguments = XACK$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$z = genericTransformers;
XACK$1.FIRST_KEY_INDEX = 1;

function transformArguments$34(key, group, id) {
  return (0, generic_transformers_1$z.pushVerdictArguments)(['XACK', key, group], id);
}

XACK$1.transformArguments = transformArguments$34;

var XADD$1 = {};

Object.defineProperty(XADD$1, "__esModule", {
  value: true
});
XADD$1.transformArguments = XADD$1.FIRST_KEY_INDEX = void 0;
XADD$1.FIRST_KEY_INDEX = 1;

function transformArguments$33(key, id, message, options) {
  var args = ['XADD', key];

  if (options === null || options === void 0 ? void 0 : options.NOMKSTREAM) {
    args.push('NOMKSTREAM');
  }

  if (options === null || options === void 0 ? void 0 : options.TRIM) {
    if (options.TRIM.strategy) {
      args.push(options.TRIM.strategy);
    }

    if (options.TRIM.strategyModifier) {
      args.push(options.TRIM.strategyModifier);
    }

    args.push(options.TRIM.threshold.toString());

    if (options.TRIM.limit) {
      args.push('LIMIT', options.TRIM.limit.toString());
    }
  }

  args.push(id);

  for (var _i = 0, _Object$entries = Object.entries(message); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        _key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    args.push(_key, value);
  }

  return args;
}

XADD$1.transformArguments = transformArguments$33;

var XAUTOCLAIM_JUSTID$1 = {};

var XAUTOCLAIM$1 = {};

Object.defineProperty(XAUTOCLAIM$1, "__esModule", {
  value: true
});
XAUTOCLAIM$1.transformReply = XAUTOCLAIM$1.transformArguments = XAUTOCLAIM$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$y = genericTransformers;
XAUTOCLAIM$1.FIRST_KEY_INDEX = 1;

function transformArguments$32(key, group, consumer, minIdleTime, start, options) {
  var args = ['XAUTOCLAIM', key, group, consumer, minIdleTime.toString(), start];

  if (options === null || options === void 0 ? void 0 : options.COUNT) {
    args.push('COUNT', options.COUNT.toString());
  }

  return args;
}

XAUTOCLAIM$1.transformArguments = transformArguments$32;

function transformReply$H(reply) {
  return {
    nextId: reply[0],
    messages: (0, generic_transformers_1$y.transformStreamMessagesReply)(reply[1])
  };
}

XAUTOCLAIM$1.transformReply = transformReply$H;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var XAUTOCLAIM_1 = XAUTOCLAIM$1;
  var XAUTOCLAIM_2 = XAUTOCLAIM$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return XAUTOCLAIM_2.FIRST_KEY_INDEX;
    }
  });

  function transformArguments() {
    return [].concat(_toConsumableArray((XAUTOCLAIM_1.transformArguments).apply(void 0, arguments)), ['JUSTID']);
  }

  exports.transformArguments = transformArguments;

  function transformReply(reply) {
    return {
      nextId: reply[0],
      messages: reply[1]
    };
  }

  exports.transformReply = transformReply;
})(XAUTOCLAIM_JUSTID$1);

var XCLAIM_JUSTID$1 = {};

var XCLAIM$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, group, consumer, minIdleTime, id, options) {
    var args = ['XCLAIM', key, group, consumer, minIdleTime.toString()];
    (0, generic_transformers_1.pushVerdictArguments)(args, id);

    if (options === null || options === void 0 ? void 0 : options.IDLE) {
      args.push('IDLE', options.IDLE.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.TIME) {
      args.push('TIME', (typeof options.TIME === 'number' ? options.TIME : options.TIME.getTime()).toString());
    }

    if (options === null || options === void 0 ? void 0 : options.RETRYCOUNT) {
      args.push('RETRYCOUNT', options.RETRYCOUNT.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.FORCE) {
      args.push('FORCE');
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformStreamMessagesReply;
    }
  });
})(XCLAIM$1);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var XCLAIM_1 = XCLAIM$1;
  var XCLAIM_2 = XCLAIM$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return XCLAIM_2.FIRST_KEY_INDEX;
    }
  });

  function transformArguments() {
    return [].concat(_toConsumableArray((XCLAIM_1.transformArguments).apply(void 0, arguments)), ['JUSTID']);
  }

  exports.transformArguments = transformArguments;
})(XCLAIM_JUSTID$1);

var XDEL$1 = {};

Object.defineProperty(XDEL$1, "__esModule", {
  value: true
});
XDEL$1.transformArguments = XDEL$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$x = genericTransformers;
XDEL$1.FIRST_KEY_INDEX = 1;

function transformArguments$31(key, id) {
  return (0, generic_transformers_1$x.pushVerdictArguments)(['XDEL', key], id);
}

XDEL$1.transformArguments = transformArguments$31;

var XGROUP_CREATE$1 = {};

Object.defineProperty(XGROUP_CREATE$1, "__esModule", {
  value: true
});
XGROUP_CREATE$1.transformArguments = XGROUP_CREATE$1.FIRST_KEY_INDEX = void 0;
XGROUP_CREATE$1.FIRST_KEY_INDEX = 2;

function transformArguments$30(key, group, id, options) {
  var args = ['XGROUP', 'CREATE', key, group, id];

  if (options === null || options === void 0 ? void 0 : options.MKSTREAM) {
    args.push('MKSTREAM');
  }

  return args;
}

XGROUP_CREATE$1.transformArguments = transformArguments$30;

var XGROUP_CREATECONSUMER$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 2;

  function transformArguments(key, group, consumer) {
    return ['XGROUP', 'CREATECONSUMER', key, group, consumer];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(XGROUP_CREATECONSUMER$1);

var XGROUP_DELCONSUMER$1 = {};

Object.defineProperty(XGROUP_DELCONSUMER$1, "__esModule", {
  value: true
});
XGROUP_DELCONSUMER$1.transformArguments = XGROUP_DELCONSUMER$1.FIRST_KEY_INDEX = void 0;
XGROUP_DELCONSUMER$1.FIRST_KEY_INDEX = 2;

function transformArguments$2$(key, group, consumer) {
  return ['XGROUP', 'DELCONSUMER', key, group, consumer];
}

XGROUP_DELCONSUMER$1.transformArguments = transformArguments$2$;

var XGROUP_DESTROY$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 2;

  function transformArguments(key, group) {
    return ['XGROUP', 'DESTROY', key, group];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(XGROUP_DESTROY$1);

var XGROUP_SETID$1 = {};

Object.defineProperty(XGROUP_SETID$1, "__esModule", {
  value: true
});
XGROUP_SETID$1.transformArguments = XGROUP_SETID$1.FIRST_KEY_INDEX = void 0;
XGROUP_SETID$1.FIRST_KEY_INDEX = 2;

function transformArguments$2_(key, group, id) {
  return ['XGROUP', 'SETID', key, group, id];
}

XGROUP_SETID$1.transformArguments = transformArguments$2_;

var XINFO_CONSUMERS$1 = {};

Object.defineProperty(XINFO_CONSUMERS$1, "__esModule", {
  value: true
});
XINFO_CONSUMERS$1.transformReply = XINFO_CONSUMERS$1.transformArguments = XINFO_CONSUMERS$1.IS_READ_ONLY = XINFO_CONSUMERS$1.FIRST_KEY_INDEX = void 0;
XINFO_CONSUMERS$1.FIRST_KEY_INDEX = 2;
XINFO_CONSUMERS$1.IS_READ_ONLY = true;

function transformArguments$2Z(key, group) {
  return ['XINFO', 'CONSUMERS', key, group];
}

XINFO_CONSUMERS$1.transformArguments = transformArguments$2Z;

function transformReply$G(rawReply) {
  return rawReply.map(function (consumer) {
    return {
      name: consumer[1],
      pending: consumer[3],
      idle: consumer[5]
    };
  });
}

XINFO_CONSUMERS$1.transformReply = transformReply$G;

var XINFO_GROUPS$1 = {};

Object.defineProperty(XINFO_GROUPS$1, "__esModule", {
  value: true
});
XINFO_GROUPS$1.transformReply = XINFO_GROUPS$1.transformArguments = XINFO_GROUPS$1.IS_READ_ONLY = XINFO_GROUPS$1.FIRST_KEY_INDEX = void 0;
XINFO_GROUPS$1.FIRST_KEY_INDEX = 2;
XINFO_GROUPS$1.IS_READ_ONLY = true;

function transformArguments$2Y(key) {
  return ['XINFO', 'GROUPS', key];
}

XINFO_GROUPS$1.transformArguments = transformArguments$2Y;

function transformReply$F(rawReply) {
  return rawReply.map(function (group) {
    return {
      name: group[1],
      consumers: group[3],
      pending: group[5],
      lastDeliveredId: group[7]
    };
  });
}

XINFO_GROUPS$1.transformReply = transformReply$F;

var XINFO_STREAM$1 = {};

Object.defineProperty(XINFO_STREAM$1, "__esModule", {
  value: true
});
XINFO_STREAM$1.transformReply = XINFO_STREAM$1.transformArguments = XINFO_STREAM$1.IS_READ_ONLY = XINFO_STREAM$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$w = genericTransformers;
XINFO_STREAM$1.FIRST_KEY_INDEX = 2;
XINFO_STREAM$1.IS_READ_ONLY = true;

function transformArguments$2X(key) {
  return ['XINFO', 'STREAM', key];
}

XINFO_STREAM$1.transformArguments = transformArguments$2X;

function transformReply$E(rawReply) {
  var parsedReply = {};

  for (var i = 0; i < rawReply.length; i += 2) {
    switch (rawReply[i]) {
      case 'length':
        parsedReply.length = rawReply[i + 1];
        break;

      case 'radix-tree-keys':
        parsedReply.radixTreeKeys = rawReply[i + 1];
        break;

      case 'radix-tree-nodes':
        parsedReply.radixTreeNodes = rawReply[i + 1];
        break;

      case 'groups':
        parsedReply.groups = rawReply[i + 1];
        break;

      case 'last-generated-id':
        parsedReply.lastGeneratedId = rawReply[i + 1];
        break;

      case 'first-entry':
        parsedReply.firstEntry = rawReply[i + 1] ? {
          id: rawReply[i + 1][0],
          message: (0, generic_transformers_1$w.transformTuplesReply)(rawReply[i + 1][1])
        } : null;
        break;

      case 'last-entry':
        parsedReply.lastEntry = rawReply[i + 1] ? {
          id: rawReply[i + 1][0],
          message: (0, generic_transformers_1$w.transformTuplesReply)(rawReply[i + 1][1])
        } : null;
        break;
    }
  }

  return parsedReply;
}

XINFO_STREAM$1.transformReply = transformReply$E;

var XLEN$1 = {};

Object.defineProperty(XLEN$1, "__esModule", {
  value: true
});
XLEN$1.transformArguments = XLEN$1.IS_READ_ONLY = XLEN$1.FIRST_KEY_INDEX = void 0;
XLEN$1.FIRST_KEY_INDEX = 1;
XLEN$1.IS_READ_ONLY = true;

function transformArguments$2W(key) {
  return ['XLEN', key];
}

XLEN$1.transformArguments = transformArguments$2W;

var XPENDING_RANGE$1 = {};

Object.defineProperty(XPENDING_RANGE$1, "__esModule", {
  value: true
});
XPENDING_RANGE$1.transformReply = XPENDING_RANGE$1.transformArguments = XPENDING_RANGE$1.IS_READ_ONLY = XPENDING_RANGE$1.FIRST_KEY_INDEX = void 0;
XPENDING_RANGE$1.FIRST_KEY_INDEX = 1;
XPENDING_RANGE$1.IS_READ_ONLY = true;

function transformArguments$2V(key, group, start, end, count, options) {
  var args = ['XPENDING', key, group];

  if (options === null || options === void 0 ? void 0 : options.IDLE) {
    args.push('IDLE', options.IDLE.toString());
  }

  args.push(start, end, count.toString());

  if (options === null || options === void 0 ? void 0 : options.consumer) {
    args.push(options.consumer);
  }

  return args;
}

XPENDING_RANGE$1.transformArguments = transformArguments$2V;

function transformReply$D(reply) {
  return reply.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
        id = _ref2[0],
        owner = _ref2[1],
        millisecondsSinceLastDelivery = _ref2[2],
        deliveriesCounter = _ref2[3];

    return {
      id: id,
      owner: owner,
      millisecondsSinceLastDelivery: millisecondsSinceLastDelivery,
      deliveriesCounter: deliveriesCounter
    };
  });
}

XPENDING_RANGE$1.transformReply = transformReply$D;

var XPENDING$1 = {};

Object.defineProperty(XPENDING$1, "__esModule", {
  value: true
});
XPENDING$1.transformReply = XPENDING$1.transformArguments = XPENDING$1.IS_READ_ONLY = XPENDING$1.FIRST_KEY_INDEX = void 0;
XPENDING$1.FIRST_KEY_INDEX = 1;
XPENDING$1.IS_READ_ONLY = true;

function transformArguments$2U(key, group) {
  return ['XPENDING', key, group];
}

XPENDING$1.transformArguments = transformArguments$2U;

function transformReply$C(reply) {
  return {
    pending: reply[0],
    firstId: reply[1],
    lastId: reply[2],
    consumers: reply[3] === null ? null : reply[3].map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          deliveriesCounter = _ref2[1];

      return {
        name: name,
        deliveriesCounter: Number(deliveriesCounter)
      };
    })
  };
}

XPENDING$1.transformReply = transformReply$C;

var XRANGE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, start, end, options) {
    var args = ['XRANGE', key, start, end];

    if (options === null || options === void 0 ? void 0 : options.COUNT) {
      args.push('COUNT', options.COUNT.toString());
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformStreamMessagesReply;
    }
  });
})(XRANGE$1);

var XREAD$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;

  var FIRST_KEY_INDEX = function FIRST_KEY_INDEX(streams) {
    return Array.isArray(streams) ? streams[0].key : streams.key;
  };

  exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
  exports.IS_READ_ONLY = true;

  function transformArguments(streams, options) {
    var args = ['XREAD'];

    if (options === null || options === void 0 ? void 0 : options.COUNT) {
      args.push('COUNT', options.COUNT.toString());
    }

    if (typeof (options === null || options === void 0 ? void 0 : options.BLOCK) === 'number') {
      args.push('BLOCK', options.BLOCK.toString());
    }

    args.push('STREAMS');
    var streamsArray = Array.isArray(streams) ? streams : [streams],
        argsLength = args.length;

    for (var i = 0; i < streamsArray.length; i++) {
      var stream = streamsArray[i];
      args[argsLength + i] = stream.key;
      args[argsLength + streamsArray.length + i] = stream.id;
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformStreamsMessagesReply;
    }
  });
})(XREAD$1);

var XREADGROUP$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;

  var FIRST_KEY_INDEX = function FIRST_KEY_INDEX(_group, _consumer, streams) {
    return Array.isArray(streams) ? streams[0].key : streams.key;
  };

  exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
  exports.IS_READ_ONLY = true;

  function transformArguments(group, consumer, streams, options) {
    var args = ['XREADGROUP', 'GROUP', group, consumer];

    if (options === null || options === void 0 ? void 0 : options.COUNT) {
      args.push('COUNT', options.COUNT.toString());
    }

    if (typeof (options === null || options === void 0 ? void 0 : options.BLOCK) === 'number') {
      args.push('BLOCK', options.BLOCK.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.NOACK) {
      args.push('NOACK');
    }

    args.push('STREAMS');
    var streamsArray = Array.isArray(streams) ? streams : [streams],
        argsLength = args.length;

    for (var i = 0; i < streamsArray.length; i++) {
      var stream = streamsArray[i];
      args[argsLength + i] = stream.key;
      args[argsLength + streamsArray.length + i] = stream.id;
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformStreamsMessagesReply;
    }
  });
})(XREADGROUP$1);

var XREVRANGE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, start, end, options) {
    var args = ['XREVRANGE', key, start, end];

    if (options === null || options === void 0 ? void 0 : options.COUNT) {
      args.push('COUNT', options.COUNT.toString());
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformStreamMessagesReply;
    }
  });
})(XREVRANGE$1);

var XTRIM$1 = {};

Object.defineProperty(XTRIM$1, "__esModule", {
  value: true
});
XTRIM$1.transformArguments = XTRIM$1.FIRST_KEY_INDEX = void 0;
XTRIM$1.FIRST_KEY_INDEX = 1;

function transformArguments$2T(key, strategy, threshold, options) {
  var args = ['XTRIM', key, strategy];

  if (options === null || options === void 0 ? void 0 : options.strategyModifier) {
    args.push(options.strategyModifier);
  }

  args.push(threshold.toString());

  if (options === null || options === void 0 ? void 0 : options.LIMIT) {
    args.push('LIMIT', options.LIMIT.toString());
  }

  return args;
}

XTRIM$1.transformArguments = transformArguments$2T;

var ZADD$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, members, options) {
    var _a, _b, _c, _d, _e, _f;

    var args = ['ZADD', key];

    if ((_a = options) === null || _a === void 0 ? void 0 : _a.NX) {
      args.push('NX');
    } else {
      if ((_b = options) === null || _b === void 0 ? void 0 : _b.XX) {
        args.push('XX');
      }

      if ((_c = options) === null || _c === void 0 ? void 0 : _c.GT) {
        args.push('GT');
      } else if ((_d = options) === null || _d === void 0 ? void 0 : _d.LT) {
        args.push('LT');
      }
    }

    if ((_e = options) === null || _e === void 0 ? void 0 : _e.CH) {
      args.push('CH');
    }

    if ((_f = options) === null || _f === void 0 ? void 0 : _f.INCR) {
      args.push('INCR');
    }

    var _iterator = _createForOfIteratorHelper(Array.isArray(members) ? members : [members]),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
            score = _step$value.score,
            value = _step$value.value;
        args.push((0, generic_transformers_1.transformNumberInfinityArgument)(score), value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformNumberInfinityReply;
    }
  });
})(ZADD$1);

var ZCARD$1 = {};

Object.defineProperty(ZCARD$1, "__esModule", {
  value: true
});
ZCARD$1.transformArguments = ZCARD$1.IS_READ_ONLY = ZCARD$1.FIRST_KEY_INDEX = void 0;
ZCARD$1.FIRST_KEY_INDEX = 1;
ZCARD$1.IS_READ_ONLY = true;

function transformArguments$2S(key) {
  return ['ZCARD', key];
}

ZCARD$1.transformArguments = transformArguments$2S;

var ZCOUNT$1 = {};

Object.defineProperty(ZCOUNT$1, "__esModule", {
  value: true
});
ZCOUNT$1.transformArguments = ZCOUNT$1.IS_READ_ONLY = ZCOUNT$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$v = genericTransformers;
ZCOUNT$1.FIRST_KEY_INDEX = 1;
ZCOUNT$1.IS_READ_ONLY = true;

function transformArguments$2R(key, min, max) {
  return ['ZCOUNT', key, (0, generic_transformers_1$v.transformStringNumberInfinityArgument)(min), (0, generic_transformers_1$v.transformStringNumberInfinityArgument)(max)];
}

ZCOUNT$1.transformArguments = transformArguments$2R;

var ZDIFF_WITHSCORES$1 = {};

var ZDIFF$1 = {};

Object.defineProperty(ZDIFF$1, "__esModule", {
  value: true
});
ZDIFF$1.transformArguments = ZDIFF$1.IS_READ_ONLY = ZDIFF$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$u = genericTransformers;
ZDIFF$1.FIRST_KEY_INDEX = 2;
ZDIFF$1.IS_READ_ONLY = true;

function transformArguments$2Q(keys) {
  return (0, generic_transformers_1$u.pushVerdictArgument)(['ZDIFF'], keys);
}

ZDIFF$1.transformArguments = transformArguments$2Q;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var ZDIFF_1 = ZDIFF$1;
  var ZDIFF_2 = ZDIFF$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZDIFF_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return ZDIFF_2.IS_READ_ONLY;
    }
  });

  function transformArguments() {
    return [].concat(_toConsumableArray((ZDIFF_1.transformArguments).apply(void 0, arguments)), ['WITHSCORES']);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZDIFF_WITHSCORES$1);

var ZDIFFSTORE$1 = {};

Object.defineProperty(ZDIFFSTORE$1, "__esModule", {
  value: true
});
ZDIFFSTORE$1.transformArguments = ZDIFFSTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$t = genericTransformers;
ZDIFFSTORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$2P(destination, keys) {
  return (0, generic_transformers_1$t.pushVerdictArgument)(['ZDIFFSTORE', destination], keys);
}

ZDIFFSTORE$1.transformArguments = transformArguments$2P;

var ZINCRBY$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, increment, member) {
    return ['ZINCRBY', key, (0, generic_transformers_1.transformNumberInfinityArgument)(increment), member];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformNumberInfinityReply;
    }
  });
})(ZINCRBY$1);

var ZINTER_WITHSCORES$1 = {};

var ZINTER$1 = {};

Object.defineProperty(ZINTER$1, "__esModule", {
  value: true
});
ZINTER$1.transformArguments = ZINTER$1.IS_READ_ONLY = ZINTER$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$s = genericTransformers;
ZINTER$1.FIRST_KEY_INDEX = 2;
ZINTER$1.IS_READ_ONLY = true;

function transformArguments$2O(keys, options) {
  var args = (0, generic_transformers_1$s.pushVerdictArgument)(['ZINTER'], keys);

  if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
    args.push.apply(args, ['WEIGHTS'].concat(_toConsumableArray(options.WEIGHTS.map(function (weight) {
      return weight.toString();
    }))));
  }

  if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
    args.push('AGGREGATE', options.AGGREGATE);
  }

  return args;
}

ZINTER$1.transformArguments = transformArguments$2O;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var ZINTER_1 = ZINTER$1;
  var ZINTER_2 = ZINTER$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZINTER_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return ZINTER_2.IS_READ_ONLY;
    }
  });

  function transformArguments() {
    return [].concat(_toConsumableArray((ZINTER_1.transformArguments).apply(void 0, arguments)), ['WITHSCORES']);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZINTER_WITHSCORES$1);

var ZINTERSTORE$1 = {};

Object.defineProperty(ZINTERSTORE$1, "__esModule", {
  value: true
});
ZINTERSTORE$1.transformArguments = ZINTERSTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$r = genericTransformers;
ZINTERSTORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$2N(destination, keys, options) {
  var args = (0, generic_transformers_1$r.pushVerdictArgument)(['ZINTERSTORE', destination], keys);

  if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
    args.push.apply(args, ['WEIGHTS'].concat(_toConsumableArray(options.WEIGHTS.map(function (weight) {
      return weight.toString();
    }))));
  }

  if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
    args.push('AGGREGATE', options.AGGREGATE);
  }

  return args;
}

ZINTERSTORE$1.transformArguments = transformArguments$2N;

var ZLEXCOUNT$1 = {};

Object.defineProperty(ZLEXCOUNT$1, "__esModule", {
  value: true
});
ZLEXCOUNT$1.transformArguments = ZLEXCOUNT$1.IS_READ_ONLY = ZLEXCOUNT$1.FIRST_KEY_INDEX = void 0;
ZLEXCOUNT$1.FIRST_KEY_INDEX = 1;
ZLEXCOUNT$1.IS_READ_ONLY = true;

function transformArguments$2M(key, min, max) {
  return ['ZLEXCOUNT', key, min, max];
}

ZLEXCOUNT$1.transformArguments = transformArguments$2M;

var ZMSCORE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, member) {
    return (0, generic_transformers_1.pushVerdictArguments)(['ZMSCORE', key], member);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformNumberInfinityNullArrayReply;
    }
  });
})(ZMSCORE$1);

var ZPOPMAX_COUNT$1 = {};

var ZPOPMAX$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key) {
    return ['ZPOPMAX', key];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetMemberNullReply;
    }
  });
})(ZPOPMAX$1);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var ZPOPMAX_1 = ZPOPMAX$1;
  var ZPOPMAX_2 = ZPOPMAX$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZPOPMAX_2.FIRST_KEY_INDEX;
    }
  });

  function transformArguments(key, count) {
    return [].concat(_toConsumableArray((0, ZPOPMAX_1.transformArguments)(key)), [count.toString()]);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZPOPMAX_COUNT$1);

var ZPOPMIN_COUNT$1 = {};

var ZPOPMIN$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key) {
    return ['ZPOPMIN', key];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetMemberNullReply;
    }
  });
})(ZPOPMIN$1);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var ZPOPMIN_1 = ZPOPMIN$1;
  var ZPOPMIN_2 = ZPOPMIN$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZPOPMIN_2.FIRST_KEY_INDEX;
    }
  });

  function transformArguments(key, count) {
    return [].concat(_toConsumableArray((0, ZPOPMIN_1.transformArguments)(key)), [count.toString()]);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZPOPMIN_COUNT$1);

var ZRANDMEMBER_COUNT_WITHSCORES$1 = {};

var ZRANDMEMBER_COUNT$1 = {};

var ZRANDMEMBER$1 = {};

Object.defineProperty(ZRANDMEMBER$1, "__esModule", {
  value: true
});
ZRANDMEMBER$1.transformArguments = ZRANDMEMBER$1.IS_READ_ONLY = ZRANDMEMBER$1.FIRST_KEY_INDEX = void 0;
ZRANDMEMBER$1.FIRST_KEY_INDEX = 1;
ZRANDMEMBER$1.IS_READ_ONLY = true;

function transformArguments$2L(key) {
  return ['ZRANDMEMBER', key];
}

ZRANDMEMBER$1.transformArguments = transformArguments$2L;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var ZRANDMEMBER_1 = ZRANDMEMBER$1;
  var ZRANDMEMBER_2 = ZRANDMEMBER$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZRANDMEMBER_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return ZRANDMEMBER_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, count) {
    return [].concat(_toConsumableArray((0, ZRANDMEMBER_1.transformArguments)(key)), [count.toString()]);
  }

  exports.transformArguments = transformArguments;
})(ZRANDMEMBER_COUNT$1);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var ZRANDMEMBER_COUNT_1 = ZRANDMEMBER_COUNT$1;
  var ZRANDMEMBER_COUNT_2 = ZRANDMEMBER_COUNT$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZRANDMEMBER_COUNT_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return ZRANDMEMBER_COUNT_2.IS_READ_ONLY;
    }
  });

  function transformArguments() {
    return [].concat(_toConsumableArray((ZRANDMEMBER_COUNT_1.transformArguments).apply(void 0, arguments)), ['WITHSCORES']);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZRANDMEMBER_COUNT_WITHSCORES$1);

var ZRANGE_WITHSCORES$1 = {};

var ZRANGE$1 = {};

Object.defineProperty(ZRANGE$1, "__esModule", {
  value: true
});
ZRANGE$1.transformArguments = ZRANGE$1.IS_READ_ONLY = ZRANGE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$q = genericTransformers;
ZRANGE$1.FIRST_KEY_INDEX = 1;
ZRANGE$1.IS_READ_ONLY = true;

function transformArguments$2K(key, min, max, options) {
  var args = ['ZRANGE', key, (0, generic_transformers_1$q.transformStringNumberInfinityArgument)(min), (0, generic_transformers_1$q.transformStringNumberInfinityArgument)(max)];

  switch (options === null || options === void 0 ? void 0 : options.BY) {
    case 'SCORE':
      args.push('BYSCORE');
      break;

    case 'LEX':
      args.push('BYLEX');
      break;
  }

  if (options === null || options === void 0 ? void 0 : options.REV) {
    args.push('REV');
  }

  if (options === null || options === void 0 ? void 0 : options.LIMIT) {
    args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
  }

  return args;
}

ZRANGE$1.transformArguments = transformArguments$2K;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var ZRANGE_1 = ZRANGE$1;
  var ZRANGE_2 = ZRANGE$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZRANGE_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return ZRANGE_2.IS_READ_ONLY;
    }
  });

  function transformArguments() {
    return [].concat(_toConsumableArray((ZRANGE_1.transformArguments).apply(void 0, arguments)), ['WITHSCORES']);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZRANGE_WITHSCORES$1);

var ZRANGEBYLEX$1 = {};

Object.defineProperty(ZRANGEBYLEX$1, "__esModule", {
  value: true
});
ZRANGEBYLEX$1.transformArguments = ZRANGEBYLEX$1.IS_READ_ONLY = ZRANGEBYLEX$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$p = genericTransformers;
ZRANGEBYLEX$1.FIRST_KEY_INDEX = 1;
ZRANGEBYLEX$1.IS_READ_ONLY = true;

function transformArguments$2J(key, min, max, options) {
  var args = ['ZRANGEBYLEX', key, (0, generic_transformers_1$p.transformStringNumberInfinityArgument)(min), (0, generic_transformers_1$p.transformStringNumberInfinityArgument)(max)];

  if (options === null || options === void 0 ? void 0 : options.LIMIT) {
    args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
  }

  return args;
}

ZRANGEBYLEX$1.transformArguments = transformArguments$2J;

var ZRANGEBYSCORE_WITHSCORES$1 = {};

var ZRANGEBYSCORE$1 = {};

Object.defineProperty(ZRANGEBYSCORE$1, "__esModule", {
  value: true
});
ZRANGEBYSCORE$1.transformArguments = ZRANGEBYSCORE$1.IS_READ_ONLY = ZRANGEBYSCORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$o = genericTransformers;
ZRANGEBYSCORE$1.FIRST_KEY_INDEX = 1;
ZRANGEBYSCORE$1.IS_READ_ONLY = true;

function transformArguments$2I(key, min, max, options) {
  var args = ['ZRANGEBYSCORE', key, (0, generic_transformers_1$o.transformStringNumberInfinityArgument)(min), (0, generic_transformers_1$o.transformStringNumberInfinityArgument)(max)];

  if (options === null || options === void 0 ? void 0 : options.LIMIT) {
    args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
  }

  return args;
}

ZRANGEBYSCORE$1.transformArguments = transformArguments$2I;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var ZRANGEBYSCORE_1 = ZRANGEBYSCORE$1;
  var ZRANGEBYSCORE_2 = ZRANGEBYSCORE$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZRANGEBYSCORE_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return ZRANGEBYSCORE_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, min, max, options) {
    return [].concat(_toConsumableArray((0, ZRANGEBYSCORE_1.transformArguments)(key, min, max, options)), ['WITHSCORES']);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZRANGEBYSCORE_WITHSCORES$1);

var ZRANGESTORE$1 = {};

Object.defineProperty(ZRANGESTORE$1, "__esModule", {
  value: true
});
ZRANGESTORE$1.transformReply = ZRANGESTORE$1.transformArguments = ZRANGESTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$n = genericTransformers;
ZRANGESTORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$2H(dst, src, min, max, options) {
  var args = ['ZRANGESTORE', dst, src, (0, generic_transformers_1$n.transformStringNumberInfinityArgument)(min), (0, generic_transformers_1$n.transformStringNumberInfinityArgument)(max)];

  switch (options === null || options === void 0 ? void 0 : options.BY) {
    case 'SCORE':
      args.push('BYSCORE');
      break;

    case 'LEX':
      args.push('BYLEX');
      break;
  }

  if (options === null || options === void 0 ? void 0 : options.REV) {
    args.push('REV');
  }

  if (options === null || options === void 0 ? void 0 : options.LIMIT) {
    args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.WITHSCORES) {
    args.push('WITHSCORES');
  }

  return args;
}

ZRANGESTORE$1.transformArguments = transformArguments$2H;

function transformReply$B(reply) {
  if (typeof reply !== 'number') {
    throw new TypeError("Upgrade to Redis 6.2.5 and up (https://github.com/redis/redis/pull/9089)");
  }

  return reply;
}

ZRANGESTORE$1.transformReply = transformReply$B;

var ZRANK$1 = {};

Object.defineProperty(ZRANK$1, "__esModule", {
  value: true
});
ZRANK$1.transformArguments = ZRANK$1.IS_READ_ONLY = ZRANK$1.FIRST_KEY_INDEX = void 0;
ZRANK$1.FIRST_KEY_INDEX = 1;
ZRANK$1.IS_READ_ONLY = true;

function transformArguments$2G(key, member) {
  return ['ZRANK', key, member];
}

ZRANK$1.transformArguments = transformArguments$2G;

var ZREM$1 = {};

Object.defineProperty(ZREM$1, "__esModule", {
  value: true
});
ZREM$1.transformArguments = ZREM$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$m = genericTransformers;
ZREM$1.FIRST_KEY_INDEX = 1;

function transformArguments$2F(key, member) {
  return (0, generic_transformers_1$m.pushVerdictArguments)(['ZREM', key], member);
}

ZREM$1.transformArguments = transformArguments$2F;

var ZREMRANGEBYLEX$1 = {};

Object.defineProperty(ZREMRANGEBYLEX$1, "__esModule", {
  value: true
});
ZREMRANGEBYLEX$1.transformArguments = ZREMRANGEBYLEX$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$l = genericTransformers;
ZREMRANGEBYLEX$1.FIRST_KEY_INDEX = 1;

function transformArguments$2E(key, min, max) {
  return ['ZREMRANGEBYLEX', key, (0, generic_transformers_1$l.transformStringNumberInfinityArgument)(min), (0, generic_transformers_1$l.transformStringNumberInfinityArgument)(max)];
}

ZREMRANGEBYLEX$1.transformArguments = transformArguments$2E;

var ZREMRANGEBYRANK$1 = {};

Object.defineProperty(ZREMRANGEBYRANK$1, "__esModule", {
  value: true
});
ZREMRANGEBYRANK$1.transformArguments = ZREMRANGEBYRANK$1.FIRST_KEY_INDEX = void 0;
ZREMRANGEBYRANK$1.FIRST_KEY_INDEX = 1;

function transformArguments$2D(key, start, stop) {
  return ['ZREMRANGEBYRANK', key, start.toString(), stop.toString()];
}

ZREMRANGEBYRANK$1.transformArguments = transformArguments$2D;

var ZREMRANGEBYSCORE$1 = {};

Object.defineProperty(ZREMRANGEBYSCORE$1, "__esModule", {
  value: true
});
ZREMRANGEBYSCORE$1.transformArguments = ZREMRANGEBYSCORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$k = genericTransformers;
ZREMRANGEBYSCORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$2C(key, min, max) {
  return ['ZREMRANGEBYSCORE', key, (0, generic_transformers_1$k.transformStringNumberInfinityArgument)(min), (0, generic_transformers_1$k.transformStringNumberInfinityArgument)(max)];
}

ZREMRANGEBYSCORE$1.transformArguments = transformArguments$2C;

var ZREVRANK$1 = {};

Object.defineProperty(ZREVRANK$1, "__esModule", {
  value: true
});
ZREVRANK$1.transformArguments = ZREVRANK$1.IS_READ_ONLY = ZREVRANK$1.FIRST_KEY_INDEX = void 0;
ZREVRANK$1.FIRST_KEY_INDEX = 1;
ZREVRANK$1.IS_READ_ONLY = true;

function transformArguments$2B(key, member) {
  return ['ZREVRANK', key, member];
}

ZREVRANK$1.transformArguments = transformArguments$2B;

var ZSCAN$1 = {};

Object.defineProperty(ZSCAN$1, "__esModule", {
  value: true
});
ZSCAN$1.transformReply = ZSCAN$1.transformArguments = ZSCAN$1.IS_READ_ONLY = ZSCAN$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$j = genericTransformers;
ZSCAN$1.FIRST_KEY_INDEX = 1;
ZSCAN$1.IS_READ_ONLY = true;

function transformArguments$2A(key, cursor, options) {
  return (0, generic_transformers_1$j.pushScanArguments)(['ZSCAN', key], cursor, options);
}

ZSCAN$1.transformArguments = transformArguments$2A;

function transformReply$A(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      cursor = _ref2[0],
      rawMembers = _ref2[1];

  var parsedMembers = [];

  for (var i = 0; i < rawMembers.length; i += 2) {
    parsedMembers.push({
      value: rawMembers[i],
      score: (0, generic_transformers_1$j.transformNumberInfinityReply)(rawMembers[i + 1])
    });
  }

  return {
    cursor: Number(cursor),
    members: parsedMembers
  };
}

ZSCAN$1.transformReply = transformReply$A;

var ZSCORE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, member) {
    return ['ZSCORE', key, member];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformNumberInfinityNullReply;
    }
  });
})(ZSCORE$1);

var ZUNION_WITHSCORES$1 = {};

var ZUNION$1 = {};

Object.defineProperty(ZUNION$1, "__esModule", {
  value: true
});
ZUNION$1.transformArguments = ZUNION$1.IS_READ_ONLY = ZUNION$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$i = genericTransformers;
ZUNION$1.FIRST_KEY_INDEX = 2;
ZUNION$1.IS_READ_ONLY = true;

function transformArguments$2z(keys, options) {
  var args = (0, generic_transformers_1$i.pushVerdictArgument)(['ZUNION'], keys);

  if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
    args.push.apply(args, ['WEIGHTS'].concat(_toConsumableArray(options.WEIGHTS.map(function (weight) {
      return weight.toString();
    }))));
  }

  if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
    args.push('AGGREGATE', options.AGGREGATE);
  }

  return args;
}

ZUNION$1.transformArguments = transformArguments$2z;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var ZUNION_1 = ZUNION$1;
  var ZUNION_2 = ZUNION$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return ZUNION_2.FIRST_KEY_INDEX;
    }
  });
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return ZUNION_2.IS_READ_ONLY;
    }
  });

  function transformArguments() {
    return [].concat(_toConsumableArray((ZUNION_1.transformArguments).apply(void 0, arguments)), ['WITHSCORES']);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    }
  });
})(ZUNION_WITHSCORES$1);

var ZUNIONSTORE$1 = {};

Object.defineProperty(ZUNIONSTORE$1, "__esModule", {
  value: true
});
ZUNIONSTORE$1.transformArguments = ZUNIONSTORE$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$h = genericTransformers;
ZUNIONSTORE$1.FIRST_KEY_INDEX = 1;

function transformArguments$2y(destination, keys, options) {
  var args = (0, generic_transformers_1$h.pushVerdictArgument)(['ZUNIONSTORE', destination], keys);

  if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
    args.push.apply(args, ['WEIGHTS'].concat(_toConsumableArray(options.WEIGHTS.map(function (weight) {
      return weight.toString();
    }))));
  }

  if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
    args.push('AGGREGATE', options.AGGREGATE);
  }

  return args;
}

ZUNIONSTORE$1.transformArguments = transformArguments$2y;

Object.defineProperty(commands$5, "__esModule", {
  value: true
});
var APPEND = APPEND$1;
var BITCOUNT = BITCOUNT$1;
var BITFIELD = BITFIELD$1;
var BITOP = BITOP$1;
var BITPOS = BITPOS$1;
var BLMOVE = BLMOVE$1;
var BLPOP = BLPOP$1;
var BRPOP = BRPOP$1;
var BRPOPLPUSH = BRPOPLPUSH$1;
var BZPOPMAX = BZPOPMAX$1;
var BZPOPMIN = BZPOPMIN$1;
var COPY = COPY$1;
var DECR = DECR$1;
var DECRBY$1 = DECRBY$2;
var DEL$5 = DEL$6;
var DUMP = DUMP$1;
var EVAL = EVAL$1;
var EVALSHA = EVALSHA$1;
var EXISTS$4 = EXISTS$5;
var EXPIRE = EXPIRE$1;
var EXPIREAT = EXPIREAT$1;
var GEOADD = GEOADD$1;
var GEODIST = GEODIST$1;
var GEOHASH = GEOHASH$1;
var GEOPOS = GEOPOS$1;
var GEOSEARCH_WITH = GEOSEARCH_WITH$1;
var GEOSEARCH = GEOSEARCH$1;
var GEOSEARCHSTORE = GEOSEARCHSTORE$1;
var GET$3 = GET$4;
var GETBIT = GETBIT$1;
var GETDEL = GETDEL$1;
var GETEX = GETEX$1;
var GETRANGE = GETRANGE$1;
var GETSET = GETSET$1;
var HDEL = HDEL$1;
var HEXISTS = HEXISTS$1;
var HGET = HGET$1;
var HGETALL = HGETALL$1;
var HINCRBY = HINCRBY$1;
var HINCRBYFLOAT = HINCRBYFLOAT$1;
var HKEYS = HKEYS$1;
var HLEN = HLEN$1;
var HMGET = HMGET$1;
var HRANDFIELD_COUNT_WITHVALUES = HRANDFIELD_COUNT_WITHVALUES$1;
var HRANDFIELD_COUNT = HRANDFIELD_COUNT$1;
var HRANDFIELD = HRANDFIELD$1;
var HSCAN = HSCAN$1;
var HSET = HSET$1;
var HSETNX = HSETNX$1;
var HSTRLEN = HSTRLEN$1;
var HVALS = HVALS$1;
var INCR = INCR$1;
var INCRBY$5 = INCRBY$6;
var INCRBYFLOAT = INCRBYFLOAT$1;
var LINDEX = LINDEX$1;
var LINSERT = LINSERT$1;
var LLEN = LLEN$1;
var LMOVE = LMOVE$1;
var LPOP_COUNT = LPOP_COUNT$1;
var LPOP = LPOP$1;
var LPOS_COUNT = LPOS_COUNT$1;
var LPOS = LPOS$1;
var LPUSH = LPUSH$1;
var LPUSHX = LPUSHX$1;
var LRANGE = LRANGE$1;
var LREM = LREM$1;
var LSET = LSET$1;
var LTRIM = LTRIM$1;
var MGET$3 = MGET$4;
var MIGRATE = MIGRATE$1;
var MSET = MSET$1;
var MSETNX = MSETNX$1;
var PERSIST = PERSIST$1;
var PEXPIRE = PEXPIRE$1;
var PEXPIREAT = PEXPIREAT$1;
var PFADD = PFADD$1;
var PFCOUNT = PFCOUNT$1;
var PFMERGE = PFMERGE$1;
var PSETEX = PSETEX$1;
var PTTL = PTTL$1;
var PUBLISH = PUBLISH$1;
var RENAME = RENAME$1;
var RENAMENX = RENAMENX$1;
var RPOP_COUNT = RPOP_COUNT$1;
var RPOP = RPOP$1;
var RPOPLPUSH = RPOPLPUSH$1;
var RPUSH = RPUSH$1;
var RPUSHX = RPUSHX$1;
var SADD = SADD$1;
var SCARD = SCARD$1;
var SDIFF = SDIFF$1;
var SDIFFSTORE = SDIFFSTORE$1;
var SET$2 = SET$3;
var SETBIT = SETBIT$1;
var SETEX = SETEX$1;
var SETNX = SETNX$1;
var SETRANGE = SETRANGE$1;
var SINTER = SINTER$1;
var SINTERSTORE = SINTERSTORE$1;
var SISMEMBER = SISMEMBER$1;
var SMEMBERS = SMEMBERS$1;
var SMISMEMBER = SMISMEMBER$1;
var SMOVE = SMOVE$1;
var SORT = SORT$1;
var SPOP = SPOP$1;
var SRANDMEMBER_COUNT = SRANDMEMBER_COUNT$1;
var SRANDMEMBER = SRANDMEMBER$1;
var SREM = SREM$1;
var SSCAN = SSCAN$1;
var STRLEN$2 = STRLEN$3;
var SUNION = SUNION$1;
var SUNIONSTORE = SUNIONSTORE$1;
var TOUCH = TOUCH$1;
var TTL = TTL$1;
var TYPE$2 = TYPE$3;
var UNLINK = UNLINK$1;
var WATCH = WATCH$1;
var XACK = XACK$1;
var XADD = XADD$1;
var XAUTOCLAIM_JUSTID = XAUTOCLAIM_JUSTID$1;
var XAUTOCLAIM = XAUTOCLAIM$1;
var XCLAIM_JUSTID = XCLAIM_JUSTID$1;
var XCLAIM = XCLAIM$1;
var XDEL = XDEL$1;
var XGROUP_CREATE = XGROUP_CREATE$1;
var XGROUP_CREATECONSUMER = XGROUP_CREATECONSUMER$1;
var XGROUP_DELCONSUMER = XGROUP_DELCONSUMER$1;
var XGROUP_DESTROY = XGROUP_DESTROY$1;
var XGROUP_SETID = XGROUP_SETID$1;
var XINFO_CONSUMERS = XINFO_CONSUMERS$1;
var XINFO_GROUPS = XINFO_GROUPS$1;
var XINFO_STREAM = XINFO_STREAM$1;
var XLEN = XLEN$1;
var XPENDING_RANGE = XPENDING_RANGE$1;
var XPENDING = XPENDING$1;
var XRANGE = XRANGE$1;
var XREAD = XREAD$1;
var XREADGROUP = XREADGROUP$1;
var XREVRANGE = XREVRANGE$1;
var XTRIM = XTRIM$1;
var ZADD = ZADD$1;
var ZCARD = ZCARD$1;
var ZCOUNT = ZCOUNT$1;
var ZDIFF_WITHSCORES = ZDIFF_WITHSCORES$1;
var ZDIFF = ZDIFF$1;
var ZDIFFSTORE = ZDIFFSTORE$1;
var ZINCRBY = ZINCRBY$1;
var ZINTER_WITHSCORES = ZINTER_WITHSCORES$1;
var ZINTER = ZINTER$1;
var ZINTERSTORE = ZINTERSTORE$1;
var ZLEXCOUNT = ZLEXCOUNT$1;
var ZMSCORE = ZMSCORE$1;
var ZPOPMAX_COUNT = ZPOPMAX_COUNT$1;
var ZPOPMAX = ZPOPMAX$1;
var ZPOPMIN_COUNT = ZPOPMIN_COUNT$1;
var ZPOPMIN = ZPOPMIN$1;
var ZRANDMEMBER_COUNT_WITHSCORES = ZRANDMEMBER_COUNT_WITHSCORES$1;
var ZRANDMEMBER_COUNT = ZRANDMEMBER_COUNT$1;
var ZRANDMEMBER = ZRANDMEMBER$1;
var ZRANGE_WITHSCORES = ZRANGE_WITHSCORES$1;
var ZRANGE = ZRANGE$1;
var ZRANGEBYLEX = ZRANGEBYLEX$1;
var ZRANGEBYSCORE_WITHSCORES = ZRANGEBYSCORE_WITHSCORES$1;
var ZRANGEBYSCORE = ZRANGEBYSCORE$1;
var ZRANGESTORE = ZRANGESTORE$1;
var ZRANK = ZRANK$1;
var ZREM = ZREM$1;
var ZREMRANGEBYLEX = ZREMRANGEBYLEX$1;
var ZREMRANGEBYRANK = ZREMRANGEBYRANK$1;
var ZREMRANGEBYSCORE = ZREMRANGEBYSCORE$1;
var ZREVRANK = ZREVRANK$1;
var ZSCAN = ZSCAN$1;
var ZSCORE = ZSCORE$1;
var ZUNION_WITHSCORES = ZUNION_WITHSCORES$1;
var ZUNION = ZUNION$1;
var ZUNIONSTORE = ZUNIONSTORE$1;

commands$5["default"] = {
  APPEND: APPEND,
  append: APPEND,
  BITCOUNT: BITCOUNT,
  bitCount: BITCOUNT,
  BITFIELD: BITFIELD,
  bitField: BITFIELD,
  BITOP: BITOP,
  bitOp: BITOP,
  BITPOS: BITPOS,
  bitPos: BITPOS,
  BLMOVE: BLMOVE,
  blMove: BLMOVE,
  BLPOP: BLPOP,
  blPop: BLPOP,
  BRPOP: BRPOP,
  brPop: BRPOP,
  BRPOPLPUSH: BRPOPLPUSH,
  brPopLPush: BRPOPLPUSH,
  BZPOPMAX: BZPOPMAX,
  bzPopMax: BZPOPMAX,
  BZPOPMIN: BZPOPMIN,
  bzPopMin: BZPOPMIN,
  COPY: COPY,
  copy: COPY,
  DECR: DECR,
  decr: DECR,
  DECRBY: DECRBY$1,
  decrBy: DECRBY$1,
  DEL: DEL$5,
  del: DEL$5,
  DUMP: DUMP,
  dump: DUMP,
  EVAL: EVAL,
  eval: EVAL,
  EVALSHA: EVALSHA,
  evalSha: EVALSHA,
  EXISTS: EXISTS$4,
  exists: EXISTS$4,
  EXPIRE: EXPIRE,
  expire: EXPIRE,
  EXPIREAT: EXPIREAT,
  expireAt: EXPIREAT,
  GEOADD: GEOADD,
  geoAdd: GEOADD,
  GEODIST: GEODIST,
  geoDist: GEODIST,
  GEOHASH: GEOHASH,
  geoHash: GEOHASH,
  GEOPOS: GEOPOS,
  geoPos: GEOPOS,
  GEOSEARCH_WITH: GEOSEARCH_WITH,
  geoSearchWith: GEOSEARCH_WITH,
  GEOSEARCH: GEOSEARCH,
  geoSearch: GEOSEARCH,
  GEOSEARCHSTORE: GEOSEARCHSTORE,
  geoSearchStore: GEOSEARCHSTORE,
  GET: GET$3,
  get: GET$3,
  GETBIT: GETBIT,
  getBit: GETBIT,
  GETDEL: GETDEL,
  getDel: GETDEL,
  GETEX: GETEX,
  getEx: GETEX,
  GETRANGE: GETRANGE,
  getRange: GETRANGE,
  GETSET: GETSET,
  getSet: GETSET,
  HDEL: HDEL,
  hDel: HDEL,
  HEXISTS: HEXISTS,
  hExists: HEXISTS,
  HGET: HGET,
  hGet: HGET,
  HGETALL: HGETALL,
  hGetAll: HGETALL,
  HINCRBY: HINCRBY,
  hIncrBy: HINCRBY,
  HINCRBYFLOAT: HINCRBYFLOAT,
  hIncrByFloat: HINCRBYFLOAT,
  HKEYS: HKEYS,
  hKeys: HKEYS,
  HLEN: HLEN,
  hLen: HLEN,
  HMGET: HMGET,
  hmGet: HMGET,
  HRANDFIELD_COUNT_WITHVALUES: HRANDFIELD_COUNT_WITHVALUES,
  hRandFieldCountWithValues: HRANDFIELD_COUNT_WITHVALUES,
  HRANDFIELD_COUNT: HRANDFIELD_COUNT,
  hRandFieldCount: HRANDFIELD_COUNT,
  HRANDFIELD: HRANDFIELD,
  hRandField: HRANDFIELD,
  HSCAN: HSCAN,
  hScan: HSCAN,
  HSET: HSET,
  hSet: HSET,
  HSETNX: HSETNX,
  hSetNX: HSETNX,
  HSTRLEN: HSTRLEN,
  hStrLen: HSTRLEN,
  HVALS: HVALS,
  hVals: HVALS,
  INCR: INCR,
  incr: INCR,
  INCRBY: INCRBY$5,
  incrBy: INCRBY$5,
  INCRBYFLOAT: INCRBYFLOAT,
  incrByFloat: INCRBYFLOAT,
  LINDEX: LINDEX,
  lIndex: LINDEX,
  LINSERT: LINSERT,
  lInsert: LINSERT,
  LLEN: LLEN,
  lLen: LLEN,
  LMOVE: LMOVE,
  lMove: LMOVE,
  LPOP_COUNT: LPOP_COUNT,
  lPopCount: LPOP_COUNT,
  LPOP: LPOP,
  lPop: LPOP,
  LPOS_COUNT: LPOS_COUNT,
  lPosCount: LPOS_COUNT,
  LPOS: LPOS,
  lPos: LPOS,
  LPUSH: LPUSH,
  lPush: LPUSH,
  LPUSHX: LPUSHX,
  lPushX: LPUSHX,
  LRANGE: LRANGE,
  lRange: LRANGE,
  LREM: LREM,
  lRem: LREM,
  LSET: LSET,
  lSet: LSET,
  LTRIM: LTRIM,
  lTrim: LTRIM,
  MGET: MGET$3,
  mGet: MGET$3,
  MIGRATE: MIGRATE,
  migrate: MIGRATE,
  MSET: MSET,
  mSet: MSET,
  MSETNX: MSETNX,
  mSetNX: MSETNX,
  PERSIST: PERSIST,
  persist: PERSIST,
  PEXPIRE: PEXPIRE,
  pExpire: PEXPIRE,
  PEXPIREAT: PEXPIREAT,
  pExpireAt: PEXPIREAT,
  PFADD: PFADD,
  pfAdd: PFADD,
  PFCOUNT: PFCOUNT,
  pfCount: PFCOUNT,
  PFMERGE: PFMERGE,
  pfMerge: PFMERGE,
  PSETEX: PSETEX,
  pSetEx: PSETEX,
  PTTL: PTTL,
  pTTL: PTTL,
  PUBLISH: PUBLISH,
  publish: PUBLISH,
  RENAME: RENAME,
  rename: RENAME,
  RENAMENX: RENAMENX,
  renameNX: RENAMENX,
  RPOP_COUNT: RPOP_COUNT,
  rPopCount: RPOP_COUNT,
  RPOP: RPOP,
  rPop: RPOP,
  RPOPLPUSH: RPOPLPUSH,
  rPopLPush: RPOPLPUSH,
  RPUSH: RPUSH,
  rPush: RPUSH,
  RPUSHX: RPUSHX,
  rPushX: RPUSHX,
  SADD: SADD,
  sAdd: SADD,
  SCARD: SCARD,
  sCard: SCARD,
  SDIFF: SDIFF,
  sDiff: SDIFF,
  SDIFFSTORE: SDIFFSTORE,
  sDiffStore: SDIFFSTORE,
  SINTER: SINTER,
  sInter: SINTER,
  SINTERSTORE: SINTERSTORE,
  sInterStore: SINTERSTORE,
  SET: SET$2,
  set: SET$2,
  SETBIT: SETBIT,
  setBit: SETBIT,
  SETEX: SETEX,
  setEx: SETEX,
  SETNX: SETNX,
  setNX: SETNX,
  SETRANGE: SETRANGE,
  setRange: SETRANGE,
  SISMEMBER: SISMEMBER,
  sIsMember: SISMEMBER,
  SMEMBERS: SMEMBERS,
  sMembers: SMEMBERS,
  SMISMEMBER: SMISMEMBER,
  smIsMember: SMISMEMBER,
  SMOVE: SMOVE,
  sMove: SMOVE,
  SORT: SORT,
  sort: SORT,
  SPOP: SPOP,
  sPop: SPOP,
  SRANDMEMBER_COUNT: SRANDMEMBER_COUNT,
  sRandMemberCount: SRANDMEMBER_COUNT,
  SRANDMEMBER: SRANDMEMBER,
  sRandMember: SRANDMEMBER,
  SREM: SREM,
  sRem: SREM,
  SSCAN: SSCAN,
  sScan: SSCAN,
  STRLEN: STRLEN$2,
  strLen: STRLEN$2,
  SUNION: SUNION,
  sUnion: SUNION,
  SUNIONSTORE: SUNIONSTORE,
  sUnionStore: SUNIONSTORE,
  TOUCH: TOUCH,
  touch: TOUCH,
  TTL: TTL,
  ttl: TTL,
  TYPE: TYPE$2,
  type: TYPE$2,
  UNLINK: UNLINK,
  unlink: UNLINK,
  WATCH: WATCH,
  watch: WATCH,
  XACK: XACK,
  xAck: XACK,
  XADD: XADD,
  xAdd: XADD,
  XAUTOCLAIM_JUSTID: XAUTOCLAIM_JUSTID,
  xAutoClaimJustId: XAUTOCLAIM_JUSTID,
  XAUTOCLAIM: XAUTOCLAIM,
  xAutoClaim: XAUTOCLAIM,
  XCLAIM: XCLAIM,
  xClaim: XCLAIM,
  XCLAIM_JUSTID: XCLAIM_JUSTID,
  xClaimJustId: XCLAIM_JUSTID,
  XDEL: XDEL,
  xDel: XDEL,
  XGROUP_CREATE: XGROUP_CREATE,
  xGroupCreate: XGROUP_CREATE,
  XGROUP_CREATECONSUMER: XGROUP_CREATECONSUMER,
  xGroupCreateConsumer: XGROUP_CREATECONSUMER,
  XGROUP_DELCONSUMER: XGROUP_DELCONSUMER,
  xGroupDelConsumer: XGROUP_DELCONSUMER,
  XGROUP_DESTROY: XGROUP_DESTROY,
  xGroupDestroy: XGROUP_DESTROY,
  XGROUP_SETID: XGROUP_SETID,
  xGroupSetId: XGROUP_SETID,
  XINFO_CONSUMERS: XINFO_CONSUMERS,
  xInfoConsumers: XINFO_CONSUMERS,
  XINFO_GROUPS: XINFO_GROUPS,
  xInfoGroups: XINFO_GROUPS,
  XINFO_STREAM: XINFO_STREAM,
  xInfoStream: XINFO_STREAM,
  XLEN: XLEN,
  xLen: XLEN,
  XPENDING_RANGE: XPENDING_RANGE,
  xPendingRange: XPENDING_RANGE,
  XPENDING: XPENDING,
  xPending: XPENDING,
  XRANGE: XRANGE,
  xRange: XRANGE,
  XREAD: XREAD,
  xRead: XREAD,
  XREADGROUP: XREADGROUP,
  xReadGroup: XREADGROUP,
  XREVRANGE: XREVRANGE,
  xRevRange: XREVRANGE,
  XTRIM: XTRIM,
  xTrim: XTRIM,
  ZADD: ZADD,
  zAdd: ZADD,
  ZCARD: ZCARD,
  zCard: ZCARD,
  ZCOUNT: ZCOUNT,
  zCount: ZCOUNT,
  ZDIFF_WITHSCORES: ZDIFF_WITHSCORES,
  zDiffWithScores: ZDIFF_WITHSCORES,
  ZDIFF: ZDIFF,
  zDiff: ZDIFF,
  ZDIFFSTORE: ZDIFFSTORE,
  zDiffStore: ZDIFFSTORE,
  ZINCRBY: ZINCRBY,
  zIncrBy: ZINCRBY,
  ZINTER_WITHSCORES: ZINTER_WITHSCORES,
  zInterWithScores: ZINTER_WITHSCORES,
  ZINTER: ZINTER,
  zInter: ZINTER,
  ZINTERSTORE: ZINTERSTORE,
  zInterStore: ZINTERSTORE,
  ZLEXCOUNT: ZLEXCOUNT,
  zLexCount: ZLEXCOUNT,
  ZMSCORE: ZMSCORE,
  zmScore: ZMSCORE,
  ZPOPMAX_COUNT: ZPOPMAX_COUNT,
  zPopMaxCount: ZPOPMAX_COUNT,
  ZPOPMAX: ZPOPMAX,
  zPopMax: ZPOPMAX,
  ZPOPMIN_COUNT: ZPOPMIN_COUNT,
  zPopMinCount: ZPOPMIN_COUNT,
  ZPOPMIN: ZPOPMIN,
  zPopMin: ZPOPMIN,
  ZRANDMEMBER_COUNT_WITHSCORES: ZRANDMEMBER_COUNT_WITHSCORES,
  zRandMemberCountWithScores: ZRANDMEMBER_COUNT_WITHSCORES,
  ZRANDMEMBER_COUNT: ZRANDMEMBER_COUNT,
  zRandMemberCount: ZRANDMEMBER_COUNT,
  ZRANDMEMBER: ZRANDMEMBER,
  zRandMember: ZRANDMEMBER,
  ZRANGE_WITHSCORES: ZRANGE_WITHSCORES,
  zRangeWithScores: ZRANGE_WITHSCORES,
  ZRANGE: ZRANGE,
  zRange: ZRANGE,
  ZRANGEBYLEX: ZRANGEBYLEX,
  zRangeByLex: ZRANGEBYLEX,
  ZRANGEBYSCORE_WITHSCORES: ZRANGEBYSCORE_WITHSCORES,
  zRangeByScoreWithScores: ZRANGEBYSCORE_WITHSCORES,
  ZRANGEBYSCORE: ZRANGEBYSCORE,
  zRangeByScore: ZRANGEBYSCORE,
  ZRANGESTORE: ZRANGESTORE,
  zRangeStore: ZRANGESTORE,
  ZRANK: ZRANK,
  zRank: ZRANK,
  ZREM: ZREM,
  zRem: ZREM,
  ZREMRANGEBYLEX: ZREMRANGEBYLEX,
  zRemRangeByLex: ZREMRANGEBYLEX,
  ZREMRANGEBYRANK: ZREMRANGEBYRANK,
  zRemRangeByRank: ZREMRANGEBYRANK,
  ZREMRANGEBYSCORE: ZREMRANGEBYSCORE,
  zRemRangeByScore: ZREMRANGEBYSCORE,
  ZREVRANK: ZREVRANK,
  zRevRank: ZREVRANK,
  ZSCAN: ZSCAN,
  zScan: ZSCAN,
  ZSCORE: ZSCORE,
  zScore: ZSCORE,
  ZUNION_WITHSCORES: ZUNION_WITHSCORES,
  zUnionWithScores: ZUNION_WITHSCORES,
  ZUNION: ZUNION,
  zUnion: ZUNION,
  ZUNIONSTORE: ZUNIONSTORE,
  zUnionStore: ZUNIONSTORE
};

var ACL_CAT$1 = {};

Object.defineProperty(ACL_CAT$1, "__esModule", {
  value: true
});
ACL_CAT$1.transformArguments = void 0;

function transformArguments$2x(categoryName) {
  var args = ['ACL', 'CAT'];

  if (categoryName) {
    args.push(categoryName);
  }

  return args;
}

ACL_CAT$1.transformArguments = transformArguments$2x;

var ACL_DELUSER$1 = {};

Object.defineProperty(ACL_DELUSER$1, "__esModule", {
  value: true
});
ACL_DELUSER$1.transformArguments = void 0;
var generic_transformers_1$g = genericTransformers;

function transformArguments$2w(username) {
  return (0, generic_transformers_1$g.pushVerdictArguments)(['ACL', 'DELUSER'], username);
}

ACL_DELUSER$1.transformArguments = transformArguments$2w;

var ACL_GENPASS$1 = {};

Object.defineProperty(ACL_GENPASS$1, "__esModule", {
  value: true
});
ACL_GENPASS$1.transformArguments = void 0;

function transformArguments$2v(bits) {
  var args = ['ACL', 'GENPASS'];

  if (bits) {
    args.push(bits.toString());
  }

  return args;
}

ACL_GENPASS$1.transformArguments = transformArguments$2v;

var ACL_GETUSER$1 = {};

Object.defineProperty(ACL_GETUSER$1, "__esModule", {
  value: true
});
ACL_GETUSER$1.transformReply = ACL_GETUSER$1.transformArguments = void 0;

function transformArguments$2u(username) {
  return ['ACL', 'GETUSER', username];
}

ACL_GETUSER$1.transformArguments = transformArguments$2u;

function transformReply$z(reply) {
  return {
    flags: reply[1],
    passwords: reply[3],
    commands: reply[5],
    keys: reply[7],
    channels: reply[9]
  };
}

ACL_GETUSER$1.transformReply = transformReply$z;

var ACL_LIST$1 = {};

Object.defineProperty(ACL_LIST$1, "__esModule", {
  value: true
});
ACL_LIST$1.transformArguments = void 0;

function transformArguments$2t() {
  return ['ACL', 'LIST'];
}

ACL_LIST$1.transformArguments = transformArguments$2t;

var ACL_LOAD$1 = {};

Object.defineProperty(ACL_LOAD$1, "__esModule", {
  value: true
});
ACL_LOAD$1.transformArguments = void 0;

function transformArguments$2s() {
  return ['ACL', 'LOAD'];
}

ACL_LOAD$1.transformArguments = transformArguments$2s;

var ACL_LOG_RESET$1 = {};

Object.defineProperty(ACL_LOG_RESET$1, "__esModule", {
  value: true
});
ACL_LOG_RESET$1.transformArguments = void 0;

function transformArguments$2r() {
  return ['ACL', 'LOG', 'RESET'];
}

ACL_LOG_RESET$1.transformArguments = transformArguments$2r;

var ACL_LOG$1 = {};

Object.defineProperty(ACL_LOG$1, "__esModule", {
  value: true
});
ACL_LOG$1.transformReply = ACL_LOG$1.transformArguments = void 0;

function transformArguments$2q(count) {
  var args = ['ACL', 'LOG'];

  if (count) {
    args.push(count.toString());
  }

  return args;
}

ACL_LOG$1.transformArguments = transformArguments$2q;

function transformReply$y(reply) {
  return reply.map(function (log) {
    return {
      count: log[1],
      reason: log[3],
      context: log[5],
      object: log[7],
      username: log[9],
      ageSeconds: Number(log[11]),
      clientInfo: log[13]
    };
  });
}

ACL_LOG$1.transformReply = transformReply$y;

var ACL_SAVE$1 = {};

Object.defineProperty(ACL_SAVE$1, "__esModule", {
  value: true
});
ACL_SAVE$1.transformArguments = void 0;

function transformArguments$2p() {
  return ['ACL', 'SAVE'];
}

ACL_SAVE$1.transformArguments = transformArguments$2p;

var ACL_SETUSER$1 = {};

Object.defineProperty(ACL_SETUSER$1, "__esModule", {
  value: true
});
ACL_SETUSER$1.transformArguments = void 0;
var generic_transformers_1$f = genericTransformers;

function transformArguments$2o(username, rule) {
  return (0, generic_transformers_1$f.pushVerdictArguments)(['ACL', 'SETUSER', username], rule);
}

ACL_SETUSER$1.transformArguments = transformArguments$2o;

var ACL_USERS$1 = {};

Object.defineProperty(ACL_USERS$1, "__esModule", {
  value: true
});
ACL_USERS$1.transformArguments = void 0;

function transformArguments$2n() {
  return ['ACL', 'USERS'];
}

ACL_USERS$1.transformArguments = transformArguments$2n;

var ACL_WHOAMI$1 = {};

Object.defineProperty(ACL_WHOAMI$1, "__esModule", {
  value: true
});
ACL_WHOAMI$1.transformArguments = void 0;

function transformArguments$2m() {
  return ['ACL', 'WHOAMI'];
}

ACL_WHOAMI$1.transformArguments = transformArguments$2m;

var ASKING$1 = {};

Object.defineProperty(ASKING$1, "__esModule", {
  value: true
});
ASKING$1.transformArguments = void 0;

function transformArguments$2l() {
  return ['ASKING'];
}

ASKING$1.transformArguments = transformArguments$2l;

var AUTH$1 = {};

Object.defineProperty(AUTH$1, "__esModule", {
  value: true
});
AUTH$1.transformArguments = void 0;

function transformArguments$2k(_ref) {
  var username = _ref.username,
      password = _ref.password;

  if (!username) {
    return ['AUTH', password];
  }

  return ['AUTH', username, password];
}

AUTH$1.transformArguments = transformArguments$2k;

var BGREWRITEAOF$1 = {};

Object.defineProperty(BGREWRITEAOF$1, "__esModule", {
  value: true
});
BGREWRITEAOF$1.transformArguments = void 0;

function transformArguments$2j() {
  return ['BGREWRITEAOF'];
}

BGREWRITEAOF$1.transformArguments = transformArguments$2j;

var BGSAVE$1 = {};

Object.defineProperty(BGSAVE$1, "__esModule", {
  value: true
});
BGSAVE$1.transformArguments = void 0;

function transformArguments$2i(options) {
  var args = ['BGSAVE'];

  if (options === null || options === void 0 ? void 0 : options.SCHEDULE) {
    args.push('SCHEDULE');
  }

  return args;
}

BGSAVE$1.transformArguments = transformArguments$2i;

var CLIENT_CACHING$1 = {};

Object.defineProperty(CLIENT_CACHING$1, "__esModule", {
  value: true
});
CLIENT_CACHING$1.transformArguments = void 0;

function transformArguments$2h(value) {
  return ['CLIENT', 'CACHING', value ? 'YES' : 'NO'];
}

CLIENT_CACHING$1.transformArguments = transformArguments$2h;

var CLIENT_GETNAME$1 = {};

Object.defineProperty(CLIENT_GETNAME$1, "__esModule", {
  value: true
});
CLIENT_GETNAME$1.transformArguments = void 0;

function transformArguments$2g() {
  return ['CLIENT', 'GETNAME'];
}

CLIENT_GETNAME$1.transformArguments = transformArguments$2g;

var CLIENT_GETREDIR$1 = {};

Object.defineProperty(CLIENT_GETREDIR$1, "__esModule", {
  value: true
});
CLIENT_GETREDIR$1.transformArguments = void 0;

function transformArguments$2f() {
  return ['CLIENT', 'GETREDIR'];
}

CLIENT_GETREDIR$1.transformArguments = transformArguments$2f;

var CLIENT_ID$1 = {};

Object.defineProperty(CLIENT_ID$1, "__esModule", {
  value: true
});
CLIENT_ID$1.transformArguments = CLIENT_ID$1.IS_READ_ONLY = void 0;
CLIENT_ID$1.IS_READ_ONLY = true;

function transformArguments$2e() {
  return ['CLIENT', 'ID'];
}

CLIENT_ID$1.transformArguments = transformArguments$2e;

var CLIENT_KILL$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.ClientKillFilters = void 0;
  var ClientKillFilters;

  (function (ClientKillFilters) {
    ClientKillFilters["ADDRESS"] = "ADDR";
    ClientKillFilters["LOCAL_ADDRESS"] = "LADDR";
    ClientKillFilters["ID"] = "ID";
    ClientKillFilters["TYPE"] = "TYPE";
    ClientKillFilters["USER"] = "USER";
    ClientKillFilters["SKIP_ME"] = "SKIPME";
  })(ClientKillFilters = exports.ClientKillFilters || (exports.ClientKillFilters = {}));

  function transformArguments(filters) {
    var args = ['CLIENT', 'KILL'];

    if (Array.isArray(filters)) {
      var _iterator = _createForOfIteratorHelper(filters),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var filter = _step.value;
          pushFilter(args, filter);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      pushFilter(args, filters);
    }

    return args;
  }

  exports.transformArguments = transformArguments;

  function pushFilter(args, filter) {
    if (filter === ClientKillFilters.SKIP_ME) {
      args.push('SKIPME');
      return;
    }

    args.push(filter.filter);

    switch (filter.filter) {
      case ClientKillFilters.ADDRESS:
        args.push(filter.address);
        break;

      case ClientKillFilters.LOCAL_ADDRESS:
        args.push(filter.localAddress);
        break;

      case ClientKillFilters.ID:
        args.push(typeof filter.id === 'number' ? filter.id.toString() : filter.id);
        break;

      case ClientKillFilters.TYPE:
        args.push(filter.type);
        break;

      case ClientKillFilters.USER:
        args.push(filter.username);
        break;

      case ClientKillFilters.SKIP_ME:
        args.push(filter.skipMe ? 'yes' : 'no');
        break;
    }
  }
})(CLIENT_KILL$1);

var CLIENT_SETNAME$1 = {};

Object.defineProperty(CLIENT_SETNAME$1, "__esModule", {
  value: true
});
CLIENT_SETNAME$1.transformArguments = void 0;

function transformArguments$2d(name) {
  return ['CLIENT', 'SETNAME', name];
}

CLIENT_SETNAME$1.transformArguments = transformArguments$2d;

var CLIENT_INFO$1 = {};

Object.defineProperty(CLIENT_INFO$1, "__esModule", {
  value: true
});
CLIENT_INFO$1.transformReply = CLIENT_INFO$1.transformArguments = void 0;

function transformArguments$2c() {
  return ['CLIENT', 'INFO'];
}

CLIENT_INFO$1.transformArguments = transformArguments$2c;
var REGEX = /=([^\s]*)/g;

function transformReply$x(reply) {
  var _ref = _toConsumableArray(reply.matchAll(REGEX)),
      _ref$ = _slicedToArray(_ref[0], 2),
      id = _ref$[1],
      _ref$2 = _slicedToArray(_ref[1], 2),
      addr = _ref$2[1],
      _ref$3 = _slicedToArray(_ref[2], 2),
      laddr = _ref$3[1],
      _ref$4 = _slicedToArray(_ref[3], 2),
      fd = _ref$4[1],
      _ref$5 = _slicedToArray(_ref[4], 2),
      name = _ref$5[1],
      _ref$6 = _slicedToArray(_ref[5], 2),
      age = _ref$6[1],
      _ref$7 = _slicedToArray(_ref[6], 2),
      idle = _ref$7[1],
      _ref$8 = _slicedToArray(_ref[7], 2),
      flags = _ref$8[1],
      _ref$9 = _slicedToArray(_ref[8], 2),
      db = _ref$9[1],
      _ref$10 = _slicedToArray(_ref[9], 2),
      sub = _ref$10[1],
      _ref$11 = _slicedToArray(_ref[10], 2),
      psub = _ref$11[1],
      _ref$12 = _slicedToArray(_ref[11], 2),
      multi = _ref$12[1],
      _ref$13 = _slicedToArray(_ref[12], 2),
      qbuf = _ref$13[1],
      _ref$14 = _slicedToArray(_ref[13], 2),
      qbufFree = _ref$14[1],
      _ref$15 = _slicedToArray(_ref[14], 2),
      argvMem = _ref$15[1],
      _ref$16 = _slicedToArray(_ref[15], 2),
      obl = _ref$16[1],
      _ref$17 = _slicedToArray(_ref[16], 2),
      oll = _ref$17[1],
      _ref$18 = _slicedToArray(_ref[17], 2),
      omem = _ref$18[1],
      _ref$19 = _slicedToArray(_ref[18], 2),
      totMem = _ref$19[1],
      _ref$20 = _slicedToArray(_ref[19], 2),
      events = _ref$20[1],
      _ref$21 = _slicedToArray(_ref[20], 2),
      cmd = _ref$21[1],
      _ref$22 = _slicedToArray(_ref[21], 2),
      user = _ref$22[1],
      _ref$23 = _slicedToArray(_ref[22], 2),
      redir = _ref$23[1];

  return {
    id: Number(id),
    addr: addr,
    laddr: laddr,
    fd: Number(fd),
    name: name,
    age: Number(age),
    idle: Number(idle),
    flags: flags,
    db: Number(db),
    sub: Number(sub),
    psub: Number(psub),
    multi: Number(multi),
    qbuf: Number(qbuf),
    qbufFree: Number(qbufFree),
    argvMem: Number(argvMem),
    obl: Number(obl),
    oll: Number(oll),
    omem: Number(omem),
    totMem: Number(totMem),
    events: events,
    cmd: cmd,
    user: user,
    redir: Number(redir)
  };
}

CLIENT_INFO$1.transformReply = transformReply$x;

var CLUSTER_ADDSLOTS$1 = {};

Object.defineProperty(CLUSTER_ADDSLOTS$1, "__esModule", {
  value: true
});
CLUSTER_ADDSLOTS$1.transformArguments = void 0;

function transformArguments$2b(slots) {
  var args = ['CLUSTER', 'ADDSLOTS'];

  if (typeof slots === 'number') {
    args.push(slots.toString());
  } else {
    args.push.apply(args, _toConsumableArray(slots.map(String)));
  }

  return args;
}

CLUSTER_ADDSLOTS$1.transformArguments = transformArguments$2b;

var CLUSTER_FLUSHSLOTS$1 = {};

Object.defineProperty(CLUSTER_FLUSHSLOTS$1, "__esModule", {
  value: true
});
CLUSTER_FLUSHSLOTS$1.transformArguments = void 0;

function transformArguments$2a() {
  return ['CLUSTER', 'FLUSHSLOTS'];
}

CLUSTER_FLUSHSLOTS$1.transformArguments = transformArguments$2a;

var CLUSTER_INFO$1 = {};

Object.defineProperty(CLUSTER_INFO$1, "__esModule", {
  value: true
});
CLUSTER_INFO$1.extractLineValue = CLUSTER_INFO$1.transformReply = CLUSTER_INFO$1.transformArguments = void 0;

function transformArguments$29() {
  return ['CLUSTER', 'INFO'];
}

CLUSTER_INFO$1.transformArguments = transformArguments$29;

function transformReply$w(reply) {
  var lines = reply.split('\r\n');
  return {
    state: extractLineValue(lines[0]),
    slots: {
      assigned: Number(extractLineValue(lines[1])),
      ok: Number(extractLineValue(lines[2])),
      pfail: Number(extractLineValue(lines[3])),
      fail: Number(extractLineValue(lines[4]))
    },
    knownNodes: Number(extractLineValue(lines[5])),
    size: Number(extractLineValue(lines[6])),
    currentEpoch: Number(extractLineValue(lines[7])),
    myEpoch: Number(extractLineValue(lines[8])),
    stats: {
      messagesSent: Number(extractLineValue(lines[9])),
      messagesReceived: Number(extractLineValue(lines[10]))
    }
  };
}

CLUSTER_INFO$1.transformReply = transformReply$w;

function extractLineValue(line) {
  return line.substring(line.indexOf(':') + 1);
}

CLUSTER_INFO$1.extractLineValue = extractLineValue;

var CLUSTER_NODES$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.RedisClusterNodeLinkStates = exports.transformArguments = void 0;

  function transformArguments() {
    return ['CLUSTER', 'NODES'];
  }

  exports.transformArguments = transformArguments;

  (function (RedisClusterNodeLinkStates) {
    RedisClusterNodeLinkStates["CONNECTED"] = "connected";
    RedisClusterNodeLinkStates["DISCONNECTED"] = "disconnected";
  })(exports.RedisClusterNodeLinkStates || (exports.RedisClusterNodeLinkStates = {}));

  function transformReply(reply) {
    var lines = reply.split('\n');
    lines.pop(); // last line is empty

    var mastersMap = new Map(),
        replicasMap = new Map();

    var _iterator = _createForOfIteratorHelper(lines),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var line = _step.value;

        var _line$split = line.split(' '),
            _line$split2 = _toArray(_line$split),
            id = _line$split2[0],
            address = _line$split2[1],
            flags = _line$split2[2],
            masterId = _line$split2[3],
            pingSent = _line$split2[4],
            pongRecv = _line$split2[5],
            configEpoch = _line$split2[6],
            linkState = _line$split2[7],
            slots = _line$split2.slice(8),
            node = _objectSpread2(_objectSpread2({
          id: id,
          address: address
        }, transformNodeAddress(address)), {}, {
          flags: flags.split(','),
          pingSent: Number(pingSent),
          pongRecv: Number(pongRecv),
          configEpoch: Number(configEpoch),
          linkState: linkState
        });

        if (masterId === '-') {
          var replicas = replicasMap.get(id);

          if (!replicas) {
            replicas = [];
            replicasMap.set(id, replicas);
          }

          mastersMap.set(id, _objectSpread2(_objectSpread2({}, node), {}, {
            slots: slots.map(function (slot) {
              // TODO: importing & exporting (https://redis.io/commands/cluster-nodes#special-slot-entries)
              var _slot$split = slot.split('-', 2),
                  _slot$split2 = _slicedToArray(_slot$split, 2),
                  fromString = _slot$split2[0],
                  toString = _slot$split2[1],
                  from = Number(fromString);

              return {
                from: from,
                to: toString ? Number(toString) : from
              };
            }),
            replicas: replicas
          }));
        } else {
          var _replicas = replicasMap.get(masterId);

          if (!_replicas) {
            replicasMap.set(masterId, [node]);
          } else {
            _replicas.push(node);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _toConsumableArray(mastersMap.values());
  }

  exports.transformReply = transformReply;

  function transformNodeAddress(address) {
    var indexOfColon = address.indexOf(':'),
        indexOfAt = address.indexOf('@', indexOfColon),
        host = address.substring(0, indexOfColon);

    if (indexOfAt === -1) {
      return {
        host: host,
        port: Number(address.substring(indexOfColon + 1)),
        cport: null
      };
    }

    return {
      host: address.substring(0, indexOfColon),
      port: Number(address.substring(indexOfColon + 1, indexOfAt)),
      cport: Number(address.substring(indexOfAt + 1))
    };
  }
})(CLUSTER_NODES$1);

var CLUSTER_MEET$1 = {};

Object.defineProperty(CLUSTER_MEET$1, "__esModule", {
  value: true
});
CLUSTER_MEET$1.transformArguments = void 0;

function transformArguments$28(ip, port) {
  return ['CLUSTER', 'MEET', ip, port.toString()];
}

CLUSTER_MEET$1.transformArguments = transformArguments$28;

var CLUSTER_RESET$1 = {};

Object.defineProperty(CLUSTER_RESET$1, "__esModule", {
  value: true
});
CLUSTER_RESET$1.transformArguments = void 0;

function transformArguments$27(mode) {
  var args = ['CLUSTER', 'RESET'];

  if (mode) {
    args.push(mode);
  }

  return args;
}

CLUSTER_RESET$1.transformArguments = transformArguments$27;

var CLUSTER_SETSLOT$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.ClusterSlotStates = void 0;

  (function (ClusterSlotStates) {
    ClusterSlotStates["IMPORTING"] = "IMPORTING";
    ClusterSlotStates["MIGRATING"] = "MIGRATING";
    ClusterSlotStates["STABLE"] = "STABLE";
    ClusterSlotStates["NODE"] = "NODE";
  })(exports.ClusterSlotStates || (exports.ClusterSlotStates = {}));

  function transformArguments(slot, state, nodeId) {
    var args = ['CLUSTER', 'SETSLOT', slot.toString(), state];

    if (nodeId) {
      args.push(nodeId);
    }

    return args;
  }

  exports.transformArguments = transformArguments;
})(CLUSTER_SETSLOT$1);

var CLUSTER_SLOTS$1 = {};

Object.defineProperty(CLUSTER_SLOTS$1, "__esModule", {
  value: true
});
CLUSTER_SLOTS$1.transformReply = CLUSTER_SLOTS$1.transformArguments = void 0;

function transformArguments$26() {
  return ['CLUSTER', 'SLOTS'];
}

CLUSTER_SLOTS$1.transformArguments = transformArguments$26;

function transformReply$v(reply) {
  return reply.map(function (_ref) {
    var _ref2 = _toArray(_ref),
        from = _ref2[0],
        to = _ref2[1],
        master = _ref2[2],
        replicas = _ref2.slice(3);

    return {
      from: from,
      to: to,
      master: transformNode(master),
      replicas: replicas.map(transformNode)
    };
  });
}

CLUSTER_SLOTS$1.transformReply = transformReply$v;

function transformNode(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 3),
      ip = _ref4[0],
      port = _ref4[1],
      id = _ref4[2];

  return {
    ip: ip,
    port: port,
    id: id
  };
}

var COMMAND_COUNT$1 = {};

Object.defineProperty(COMMAND_COUNT$1, "__esModule", {
  value: true
});
COMMAND_COUNT$1.transformArguments = COMMAND_COUNT$1.IS_READ_ONLY = void 0;
COMMAND_COUNT$1.IS_READ_ONLY = true;

function transformArguments$25() {
  return ['COMMAND', 'COUNT'];
}

COMMAND_COUNT$1.transformArguments = transformArguments$25;

var COMMAND_GETKEYS$1 = {};

Object.defineProperty(COMMAND_GETKEYS$1, "__esModule", {
  value: true
});
COMMAND_GETKEYS$1.transformArguments = COMMAND_GETKEYS$1.IS_READ_ONLY = void 0;
COMMAND_GETKEYS$1.IS_READ_ONLY = true;

function transformArguments$24(args) {
  return ['COMMAND', 'GETKEYS'].concat(_toConsumableArray(args));
}

COMMAND_GETKEYS$1.transformArguments = transformArguments$24;

var COMMAND_INFO$1 = {};

Object.defineProperty(COMMAND_INFO$1, "__esModule", {
  value: true
});
COMMAND_INFO$1.transformReply = COMMAND_INFO$1.transformArguments = COMMAND_INFO$1.IS_READ_ONLY = void 0;
var generic_transformers_1$e = genericTransformers;
COMMAND_INFO$1.IS_READ_ONLY = true;

function transformArguments$23(commands) {
  return ['COMMAND', 'INFO'].concat(_toConsumableArray(commands));
}

COMMAND_INFO$1.transformArguments = transformArguments$23;

function transformReply$u(reply) {
  return reply.map(function (command) {
    return command ? (0, generic_transformers_1$e.transformCommandReply)(command) : null;
  });
}

COMMAND_INFO$1.transformReply = transformReply$u;

var COMMAND$1 = {};

Object.defineProperty(COMMAND$1, "__esModule", {
  value: true
});
COMMAND$1.transformReply = COMMAND$1.transformArguments = COMMAND$1.IS_READ_ONLY = void 0;
var generic_transformers_1$d = genericTransformers;
COMMAND$1.IS_READ_ONLY = true;

function transformArguments$22() {
  return ['COMMAND'];
}

COMMAND$1.transformArguments = transformArguments$22;

function transformReply$t(reply) {
  return reply.map(generic_transformers_1$d.transformCommandReply);
}

COMMAND$1.transformReply = transformReply$t;

var CONFIG_GET$4 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = void 0;

  function transformArguments(parameter) {
    return ['CONFIG', 'GET', parameter];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformTuplesReply;
    }
  });
})(CONFIG_GET$4);

var CONFIG_RESETSTAT = {};

Object.defineProperty(CONFIG_RESETSTAT, "__esModule", {
  value: true
});
CONFIG_RESETSTAT.transformArguments = void 0;

function transformArguments$21() {
  return ['CONFIG', 'RESETSTAT'];
}

CONFIG_RESETSTAT.transformArguments = transformArguments$21;

var CONFIG_REWRITE$1 = {};

Object.defineProperty(CONFIG_REWRITE$1, "__esModule", {
  value: true
});
CONFIG_REWRITE$1.transformArguments = void 0;

function transformArguments$20() {
  return ['CONFIG', 'REWRITE'];
}

CONFIG_REWRITE$1.transformArguments = transformArguments$20;

var CONFIG_SET$4 = {};

Object.defineProperty(CONFIG_SET$4, "__esModule", {
  value: true
});
CONFIG_SET$4.transformArguments = void 0;

function transformArguments$1$(parameter, value) {
  return ['CONFIG', 'SET', parameter, value];
}

CONFIG_SET$4.transformArguments = transformArguments$1$;

var DBSIZE$1 = {};

Object.defineProperty(DBSIZE$1, "__esModule", {
  value: true
});
DBSIZE$1.transformArguments = DBSIZE$1.IS_READ_ONLY = void 0;
DBSIZE$1.IS_READ_ONLY = true;

function transformArguments$1_() {
  return ['DBSIZE'];
}

DBSIZE$1.transformArguments = transformArguments$1_;

var DISCARD$1 = {};

Object.defineProperty(DISCARD$1, "__esModule", {
  value: true
});
DISCARD$1.transformArguments = void 0;

function transformArguments$1Z() {
  return ['DISCARD'];
}

DISCARD$1.transformArguments = transformArguments$1Z;

var ECHO$1 = {};

Object.defineProperty(ECHO$1, "__esModule", {
  value: true
});
ECHO$1.transformArguments = ECHO$1.IS_READ_ONLY = void 0;
ECHO$1.IS_READ_ONLY = true;

function transformArguments$1Y(message) {
  return ['ECHO', message];
}

ECHO$1.transformArguments = transformArguments$1Y;

var FAILOVER$1 = {};

Object.defineProperty(FAILOVER$1, "__esModule", {
  value: true
});
FAILOVER$1.transformArguments = void 0;

function transformArguments$1X(options) {
  var args = ['FAILOVER'];

  if (options === null || options === void 0 ? void 0 : options.TO) {
    args.push('TO', options.TO.host, options.TO.port.toString());

    if (options.TO.FORCE) {
      args.push('FORCE');
    }
  }

  if (options === null || options === void 0 ? void 0 : options.ABORT) {
    args.push('ABORT');
  }

  if (options === null || options === void 0 ? void 0 : options.TIMEOUT) {
    args.push('TIMEOUT', options.TIMEOUT.toString());
  }

  return args;
}

FAILOVER$1.transformArguments = transformArguments$1X;

var FLUSHALL$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformArguments = exports.RedisFlushModes = void 0;

  (function (RedisFlushModes) {
    RedisFlushModes["ASYNC"] = "ASYNC";
    RedisFlushModes["SYNC"] = "SYNC";
  })(exports.RedisFlushModes || (exports.RedisFlushModes = {}));

  function transformArguments(mode) {
    var args = ['FLUSHALL'];

    if (mode) {
      args.push(mode);
    }

    return args;
  }

  exports.transformArguments = transformArguments;
})(FLUSHALL$1);

var FLUSHDB$1 = {};

Object.defineProperty(FLUSHDB$1, "__esModule", {
  value: true
});
FLUSHDB$1.transformArguments = void 0;

function transformArguments$1W(mode) {
  var args = ['FLUSHDB'];

  if (mode) {
    args.push(mode);
  }

  return args;
}

FLUSHDB$1.transformArguments = transformArguments$1W;

var HELLO$1 = {};

Object.defineProperty(HELLO$1, "__esModule", {
  value: true
});
HELLO$1.transformReply = HELLO$1.transformArguments = void 0;

function transformArguments$1V(options) {
  var args = ['HELLO'];

  if (options) {
    args.push(options.protover.toString());

    if (options.auth) {
      args.push('AUTH', options.auth.username, options.auth.password);
    }

    if (options.clientName) {
      args.push('SETNAME', options.clientName);
    }
  }

  return args;
}

HELLO$1.transformArguments = transformArguments$1V;

function transformReply$s(reply) {
  return {
    server: reply[1],
    version: reply[3],
    proto: reply[5],
    id: reply[7],
    mode: reply[9],
    role: reply[11],
    modules: reply[13]
  };
}

HELLO$1.transformReply = transformReply$s;

var INFO$b = {};

Object.defineProperty(INFO$b, "__esModule", {
  value: true
});
INFO$b.transformArguments = INFO$b.IS_READ_ONLY = void 0;
INFO$b.IS_READ_ONLY = true;

function transformArguments$1U(section) {
  var args = ['INFO'];

  if (section) {
    args.push(section);
  }

  return args;
}

INFO$b.transformArguments = transformArguments$1U;

var KEYS$1 = {};

Object.defineProperty(KEYS$1, "__esModule", {
  value: true
});
KEYS$1.transformArguments = void 0;

function transformArguments$1T(pattern) {
  return ['KEYS', pattern];
}

KEYS$1.transformArguments = transformArguments$1T;

var LASTSAVE$1 = {};

Object.defineProperty(LASTSAVE$1, "__esModule", {
  value: true
});
LASTSAVE$1.transformReply = LASTSAVE$1.transformArguments = LASTSAVE$1.IS_READ_ONLY = void 0;
LASTSAVE$1.IS_READ_ONLY = true;

function transformArguments$1S() {
  return ['LASTSAVE'];
}

LASTSAVE$1.transformArguments = transformArguments$1S;

function transformReply$r(reply) {
  return new Date(reply);
}

LASTSAVE$1.transformReply = transformReply$r;

var LOLWUT$1 = {};

Object.defineProperty(LOLWUT$1, "__esModule", {
  value: true
});
LOLWUT$1.transformArguments = LOLWUT$1.IS_READ_ONLY = void 0;
LOLWUT$1.IS_READ_ONLY = true;

function transformArguments$1R(version) {
  var args = ['LOLWUT'];

  if (version) {
    for (var _len = arguments.length, optionalArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      optionalArguments[_key - 1] = arguments[_key];
    }

    args.push.apply(args, ['VERSION', version.toString()].concat(_toConsumableArray(optionalArguments.map(String))));
  }

  return args;
}

LOLWUT$1.transformArguments = transformArguments$1R;

var MEMORY_DOCTOR = {};

Object.defineProperty(MEMORY_DOCTOR, "__esModule", {
  value: true
});
MEMORY_DOCTOR.transformArguments = void 0;

function transformArguments$1Q() {
  return ['MEMORY', 'DOCTOR'];
}

MEMORY_DOCTOR.transformArguments = transformArguments$1Q;

var MEMORY_MALLOCSTATS = {};

Object.defineProperty(MEMORY_MALLOCSTATS, "__esModule", {
  value: true
});
MEMORY_MALLOCSTATS.transformArguments = void 0;

function transformArguments$1P() {
  return ['MEMORY', 'MALLOC-STATS'];
}

MEMORY_MALLOCSTATS.transformArguments = transformArguments$1P;

var MEMORY_PURGE$1 = {};

Object.defineProperty(MEMORY_PURGE$1, "__esModule", {
  value: true
});
MEMORY_PURGE$1.transformArguments = void 0;

function transformArguments$1O() {
  return ['MEMORY', 'PURGE'];
}

MEMORY_PURGE$1.transformArguments = transformArguments$1O;

var MEMORY_STATS$1 = {};

Object.defineProperty(MEMORY_STATS$1, "__esModule", {
  value: true
});
MEMORY_STATS$1.transformReply = MEMORY_STATS$1.transformArguments = void 0;

function transformArguments$1N() {
  return ['MEMORY', 'STATS'];
}

MEMORY_STATS$1.transformArguments = transformArguments$1N;
var FIELDS_MAPPING = {
  'peak.allocated': 'peakAllocated',
  'total.allocated': 'totalAllocated',
  'startup.allocated': 'startupAllocated',
  'replication.backlog': 'replicationBacklog',
  'clients.slaves': 'clientsReplicas',
  'clients.normal': 'clientsNormal',
  'aof.buffer': 'aofBuffer',
  'lua.caches': 'luaCaches',
  'overhead.total': 'overheadTotal',
  'keys.count': 'keysCount',
  'keys.bytes-per-key': 'keysBytesPerKey',
  'dataset.bytes': 'datasetBytes',
  'dataset.percentage': 'datasetPercentage',
  'peak.percentage': 'peakPercentage',
  'allocator.allocated': 'allocatorAllocated',
  'allocator.active': 'allocatorActive',
  'allocator.resident': 'allocatorResident',
  'allocator-fragmentation.ratio': 'allocatorFragmentationRatio',
  'allocator-fragmentation.bytes': 'allocatorFragmentationBytes',
  'allocator-rss.ratio': 'allocatorRssRatio',
  'allocator-rss.bytes': 'allocatorRssBytes',
  'rss-overhead.ratio': 'rssOverheadRatio',
  'rss-overhead.bytes': 'rssOverheadBytes',
  'fragmentation': 'fragmentation',
  'fragmentation.bytes': 'fragmentationBytes'
},
    DB_FIELDS_MAPPING = {
  'overhead.hashtable.main': 'overheadHashtableMain',
  'overhead.hashtable.expires': 'overheadHashtableExpires'
};

function transformReply$q(rawReply) {
  var reply = {
    db: {}
  };

  for (var i = 0; i < rawReply.length; i += 2) {
    var key = rawReply[i];

    if (key.startsWith('db.')) {
      var dbTuples = rawReply[i + 1],
          db = {};

      for (var j = 0; j < dbTuples.length; j += 2) {
        db[DB_FIELDS_MAPPING[dbTuples[j]]] = dbTuples[j + 1];
      }

      reply.db[key.substring(3)] = db;
      continue;
    }

    reply[FIELDS_MAPPING[key]] = Number(rawReply[i + 1]);
  }

  return reply;
}

MEMORY_STATS$1.transformReply = transformReply$q;

var MEMORY_USAGE$1 = {};

Object.defineProperty(MEMORY_USAGE$1, "__esModule", {
  value: true
});
MEMORY_USAGE$1.transformArguments = MEMORY_USAGE$1.IS_READ_ONLY = MEMORY_USAGE$1.FIRST_KEY_INDEX = void 0;
MEMORY_USAGE$1.FIRST_KEY_INDEX = 1;
MEMORY_USAGE$1.IS_READ_ONLY = true;

function transformArguments$1M(key, options) {
  var args = ['MEMORY', 'USAGE', key];

  if (options === null || options === void 0 ? void 0 : options.SAMPLES) {
    args.push('SAMPLES', options.SAMPLES.toString());
  }

  return args;
}

MEMORY_USAGE$1.transformArguments = transformArguments$1M;

var MODULE_LIST$1 = {};

Object.defineProperty(MODULE_LIST$1, "__esModule", {
  value: true
});
MODULE_LIST$1.transformArguments = void 0;

function transformArguments$1L() {
  return ['MODULE', 'LIST'];
}

MODULE_LIST$1.transformArguments = transformArguments$1L;

var MODULE_LOAD$1 = {};

Object.defineProperty(MODULE_LOAD$1, "__esModule", {
  value: true
});
MODULE_LOAD$1.transformArguments = void 0;

function transformArguments$1K(path, moduleArgs) {
  var args = ['MODULE', 'LOAD', path];

  if (moduleArgs) {
    args.push.apply(args, _toConsumableArray(moduleArgs));
  }

  return args;
}

MODULE_LOAD$1.transformArguments = transformArguments$1K;

var MODULE_UNLOAD$1 = {};

Object.defineProperty(MODULE_UNLOAD$1, "__esModule", {
  value: true
});
MODULE_UNLOAD$1.transformArguments = void 0;

function transformArguments$1J(name) {
  return ['MODULE', 'UNLOAD', name];
}

MODULE_UNLOAD$1.transformArguments = transformArguments$1J;

var MOVE$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = void 0;

  function transformArguments(key, db) {
    return ['MOVE', key, db.toString()];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(MOVE$1);

var PING$1 = {};

Object.defineProperty(PING$1, "__esModule", {
  value: true
});
PING$1.transformArguments = void 0;

function transformArguments$1I() {
  return ['PING'];
}

PING$1.transformArguments = transformArguments$1I;

var PUBSUB_CHANNELS$1 = {};

Object.defineProperty(PUBSUB_CHANNELS$1, "__esModule", {
  value: true
});
PUBSUB_CHANNELS$1.transformArguments = PUBSUB_CHANNELS$1.IS_READ_ONLY = void 0;
PUBSUB_CHANNELS$1.IS_READ_ONLY = true;

function transformArguments$1H(pattern) {
  var args = ['PUBSUB', 'CHANNELS'];

  if (pattern) {
    args.push(pattern);
  }

  return args;
}

PUBSUB_CHANNELS$1.transformArguments = transformArguments$1H;

var PUBSUB_NUMPAT$1 = {};

Object.defineProperty(PUBSUB_NUMPAT$1, "__esModule", {
  value: true
});
PUBSUB_NUMPAT$1.transformArguments = PUBSUB_NUMPAT$1.IS_READ_ONLY = void 0;
PUBSUB_NUMPAT$1.IS_READ_ONLY = true;

function transformArguments$1G() {
  return ['PUBSUB', 'NUMPAT'];
}

PUBSUB_NUMPAT$1.transformArguments = transformArguments$1G;

var PUBSUB_NUMSUB$1 = {};

Object.defineProperty(PUBSUB_NUMSUB$1, "__esModule", {
  value: true
});
PUBSUB_NUMSUB$1.transformReply = PUBSUB_NUMSUB$1.transformArguments = PUBSUB_NUMSUB$1.IS_READ_ONLY = void 0;
var generic_transformers_1$c = genericTransformers;
PUBSUB_NUMSUB$1.IS_READ_ONLY = true;

function transformArguments$1F(channels) {
  var args = ['PUBSUB', 'NUMSUB'];

  if (channels) {
    (0, generic_transformers_1$c.pushVerdictArguments)(args, channels);
  }

  return args;
}

PUBSUB_NUMSUB$1.transformArguments = transformArguments$1F;

function transformReply$p(rawReply) {
  var transformedReply = Object.create(null);

  for (var i = 0; i < rawReply.length; i += 2) {
    transformedReply[rawReply[i]] = rawReply[i + 1];
  }

  return transformedReply;
}

PUBSUB_NUMSUB$1.transformReply = transformReply$p;

var RANDOMKEY$1 = {};

Object.defineProperty(RANDOMKEY$1, "__esModule", {
  value: true
});
RANDOMKEY$1.transformArguments = RANDOMKEY$1.IS_READ_ONLY = void 0;
RANDOMKEY$1.IS_READ_ONLY = true;

function transformArguments$1E() {
  return ['RANDOMKEY'];
}

RANDOMKEY$1.transformArguments = transformArguments$1E;

var READONLY$1 = {};

Object.defineProperty(READONLY$1, "__esModule", {
  value: true
});
READONLY$1.transformArguments = void 0;

function transformArguments$1D() {
  return ['READONLY'];
}

READONLY$1.transformArguments = transformArguments$1D;

var READWRITE$1 = {};

Object.defineProperty(READWRITE$1, "__esModule", {
  value: true
});
READWRITE$1.transformArguments = void 0;

function transformArguments$1C() {
  return ['READWRITE'];
}

READWRITE$1.transformArguments = transformArguments$1C;

var REPLICAOF$1 = {};

Object.defineProperty(REPLICAOF$1, "__esModule", {
  value: true
});
REPLICAOF$1.transformArguments = void 0;

function transformArguments$1B(host, port) {
  return ['REPLICAOF', host, port.toString()];
}

REPLICAOF$1.transformArguments = transformArguments$1B;

var RESTOREASKING = {};

Object.defineProperty(RESTOREASKING, "__esModule", {
  value: true
});
RESTOREASKING.transformArguments = void 0;

function transformArguments$1A() {
  return ['RESTORE-ASKING'];
}

RESTOREASKING.transformArguments = transformArguments$1A;

var ROLE$1 = {};

Object.defineProperty(ROLE$1, "__esModule", {
  value: true
});
ROLE$1.transformReply = ROLE$1.transformArguments = ROLE$1.IS_READ_ONLY = void 0;
ROLE$1.IS_READ_ONLY = true;

function transformArguments$1z() {
  return ['ROLE'];
}

ROLE$1.transformArguments = transformArguments$1z;

function transformReply$o(reply) {
  switch (reply[0]) {
    case 'master':
      return {
        role: 'master',
        replicationOffest: reply[1],
        replicas: reply[2].map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              ip = _ref2[0],
              port = _ref2[1],
              replicationOffest = _ref2[2];

          return {
            ip: ip,
            port: Number(port),
            replicationOffest: Number(replicationOffest)
          };
        })
      };

    case 'slave':
      return {
        role: 'slave',
        master: {
          ip: reply[1],
          port: reply[2]
        },
        state: reply[3],
        dataReceived: reply[4]
      };

    case 'sentinel':
      return {
        role: 'sentinel',
        masterNames: reply[1]
      };
  }
}

ROLE$1.transformReply = transformReply$o;

var SAVE$1 = {};

Object.defineProperty(SAVE$1, "__esModule", {
  value: true
});
SAVE$1.transformArguments = void 0;

function transformArguments$1y() {
  return ['SAVE'];
}

SAVE$1.transformArguments = transformArguments$1y;

var SCAN$1 = {};

Object.defineProperty(SCAN$1, "__esModule", {
  value: true
});
SCAN$1.transformReply = SCAN$1.transformArguments = SCAN$1.IS_READ_ONLY = void 0;
var generic_transformers_1$b = genericTransformers;
SCAN$1.IS_READ_ONLY = true;

function transformArguments$1x(cursor, options) {
  var args = (0, generic_transformers_1$b.pushScanArguments)(['SCAN'], cursor, options);

  if (options === null || options === void 0 ? void 0 : options.TYPE) {
    args.push('TYPE', options.TYPE);
  }

  return args;
}

SCAN$1.transformArguments = transformArguments$1x;

function transformReply$n(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      cursor = _ref2[0],
      keys = _ref2[1];

  return {
    cursor: Number(cursor),
    keys: keys
  };
}

SCAN$1.transformReply = transformReply$n;

var SCRIPT_DEBUG$1 = {};

Object.defineProperty(SCRIPT_DEBUG$1, "__esModule", {
  value: true
});
SCRIPT_DEBUG$1.transformArguments = void 0;

function transformArguments$1w(mode) {
  return ['SCRIPT', 'DEBUG', mode];
}

SCRIPT_DEBUG$1.transformArguments = transformArguments$1w;

var SCRIPT_EXISTS$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = void 0;
  var generic_transformers_1 = genericTransformers;

  function transformArguments(sha1) {
    return (0, generic_transformers_1.pushVerdictArguments)(['SCRIPT', 'EXISTS'], sha1);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformBooleanArrayReply;
    }
  });
})(SCRIPT_EXISTS$1);

var SCRIPT_FLUSH$1 = {};

Object.defineProperty(SCRIPT_FLUSH$1, "__esModule", {
  value: true
});
SCRIPT_FLUSH$1.transformArguments = void 0;

function transformArguments$1v(mode) {
  var args = ['SCRIPT', 'FLUSH'];

  if (mode) {
    args.push(mode);
  }

  return args;
}

SCRIPT_FLUSH$1.transformArguments = transformArguments$1v;

var SCRIPT_KILL$1 = {};

Object.defineProperty(SCRIPT_KILL$1, "__esModule", {
  value: true
});
SCRIPT_KILL$1.transformArguments = void 0;

function transformArguments$1u() {
  return ['SCRIPT', 'KILL'];
}

SCRIPT_KILL$1.transformArguments = transformArguments$1u;

var SCRIPT_LOAD$1 = {};

Object.defineProperty(SCRIPT_LOAD$1, "__esModule", {
  value: true
});
SCRIPT_LOAD$1.transformArguments = void 0;

function transformArguments$1t(script) {
  return ['SCRIPT', 'LOAD', script];
}

SCRIPT_LOAD$1.transformArguments = transformArguments$1t;

var SHUTDOWN$1 = {};

Object.defineProperty(SHUTDOWN$1, "__esModule", {
  value: true
});
SHUTDOWN$1.transformArguments = void 0;

function transformArguments$1s(mode) {
  var args = ['SHUTDOWN'];

  if (mode) {
    args.push(mode);
  }

  return args;
}

SHUTDOWN$1.transformArguments = transformArguments$1s;

var SWAPDB$1 = {};

Object.defineProperty(SWAPDB$1, "__esModule", {
  value: true
});
SWAPDB$1.transformArguments = void 0;

function transformArguments$1r(index1, index2) {
  return ['SWAPDB', index1.toString(), index2.toString()];
}

SWAPDB$1.transformArguments = transformArguments$1r;

var TIME$1 = {};

Object.defineProperty(TIME$1, "__esModule", {
  value: true
});
TIME$1.transformReply = TIME$1.transformArguments = void 0;

function transformArguments$1q() {
  return ['TIME'];
}

TIME$1.transformArguments = transformArguments$1q;

function transformReply$m(reply) {
  var seconds = Number(reply[0]),
      microseconds = Number(reply[1]),
      d = new Date(seconds + Math.round(microseconds / 1000));
  d.microseconds = microseconds;
  return d;
}

TIME$1.transformReply = transformReply$m;

var UNWATCH$1 = {};

Object.defineProperty(UNWATCH$1, "__esModule", {
  value: true
});
UNWATCH$1.transformArguments = void 0;

function transformArguments$1p() {
  return ['UNWATCH'];
}

UNWATCH$1.transformArguments = transformArguments$1p;

var WAIT$1 = {};

Object.defineProperty(WAIT$1, "__esModule", {
  value: true
});
WAIT$1.transformArguments = WAIT$1.FIRST_KEY_INDEX = void 0;
WAIT$1.FIRST_KEY_INDEX = 1;

function transformArguments$1o(numberOfReplicas, timeout) {
  return ['WAIT', numberOfReplicas.toString(), timeout.toString()];
}

WAIT$1.transformArguments = transformArguments$1o;

Object.defineProperty(commands$6, "__esModule", {
  value: true
});
var commands_1$4 = commands$5;
var ACL_CAT = ACL_CAT$1;
var ACL_DELUSER = ACL_DELUSER$1;
var ACL_GENPASS = ACL_GENPASS$1;
var ACL_GETUSER = ACL_GETUSER$1;
var ACL_LIST = ACL_LIST$1;
var ACL_LOAD = ACL_LOAD$1;
var ACL_LOG_RESET = ACL_LOG_RESET$1;
var ACL_LOG = ACL_LOG$1;
var ACL_SAVE = ACL_SAVE$1;
var ACL_SETUSER = ACL_SETUSER$1;
var ACL_USERS = ACL_USERS$1;
var ACL_WHOAMI = ACL_WHOAMI$1;
var ASKING = ASKING$1;
var AUTH = AUTH$1;
var BGREWRITEAOF = BGREWRITEAOF$1;
var BGSAVE = BGSAVE$1;
var CLIENT_CACHING = CLIENT_CACHING$1;
var CLIENT_GETNAME = CLIENT_GETNAME$1;
var CLIENT_GETREDIR = CLIENT_GETREDIR$1;
var CLIENT_ID = CLIENT_ID$1;
var CLIENT_KILL = CLIENT_KILL$1;
var CLIENT_SETNAME = CLIENT_SETNAME$1;
var CLIENT_INFO = CLIENT_INFO$1;
var CLUSTER_ADDSLOTS = CLUSTER_ADDSLOTS$1;
var CLUSTER_FLUSHSLOTS = CLUSTER_FLUSHSLOTS$1;
var CLUSTER_INFO = CLUSTER_INFO$1;
var CLUSTER_NODES = CLUSTER_NODES$1;
var CLUSTER_MEET = CLUSTER_MEET$1;
var CLUSTER_RESET = CLUSTER_RESET$1;
var CLUSTER_SETSLOT = CLUSTER_SETSLOT$1;
var CLUSTER_SLOTS = CLUSTER_SLOTS$1;
var COMMAND_COUNT = COMMAND_COUNT$1;
var COMMAND_GETKEYS = COMMAND_GETKEYS$1;
var COMMAND_INFO = COMMAND_INFO$1;
var COMMAND = COMMAND$1;
var CONFIG_GET$3 = CONFIG_GET$4;
var CONFIG_RESETASTAT = CONFIG_RESETSTAT;
var CONFIG_REWRITE = CONFIG_REWRITE$1;
var CONFIG_SET$3 = CONFIG_SET$4;
var DBSIZE = DBSIZE$1;
var DISCARD = DISCARD$1;
var ECHO = ECHO$1;
var FAILOVER = FAILOVER$1;
var FLUSHALL = FLUSHALL$1;
var FLUSHDB = FLUSHDB$1;
var HELLO = HELLO$1;
var INFO$a = INFO$b;
var KEYS = KEYS$1;
var LASTSAVE = LASTSAVE$1;
var LOLWUT = LOLWUT$1;
var MEMOERY_DOCTOR = MEMORY_DOCTOR;
var MEMORY_MALLOC_STATS = MEMORY_MALLOCSTATS;
var MEMORY_PURGE = MEMORY_PURGE$1;
var MEMORY_STATS = MEMORY_STATS$1;
var MEMORY_USAGE = MEMORY_USAGE$1;
var MODULE_LIST = MODULE_LIST$1;
var MODULE_LOAD = MODULE_LOAD$1;
var MODULE_UNLOAD = MODULE_UNLOAD$1;
var MOVE = MOVE$1;
var PING = PING$1;
var PUBSUB_CHANNELS = PUBSUB_CHANNELS$1;
var PUBSUB_NUMPAT = PUBSUB_NUMPAT$1;
var PUBSUB_NUMSUB = PUBSUB_NUMSUB$1;
var RANDOMKEY = RANDOMKEY$1;
var READONLY = READONLY$1;
var READWRITE = READWRITE$1;
var REPLICAOF = REPLICAOF$1;
var RESTORE_ASKING = RESTOREASKING;
var ROLE = ROLE$1;
var SAVE = SAVE$1;
var SCAN = SCAN$1;
var SCRIPT_DEBUG = SCRIPT_DEBUG$1;
var SCRIPT_EXISTS = SCRIPT_EXISTS$1;
var SCRIPT_FLUSH = SCRIPT_FLUSH$1;
var SCRIPT_KILL = SCRIPT_KILL$1;
var SCRIPT_LOAD = SCRIPT_LOAD$1;
var SHUTDOWN = SHUTDOWN$1;
var SWAPDB = SWAPDB$1;
var TIME = TIME$1;
var UNWATCH = UNWATCH$1;
var WAIT = WAIT$1;

commands$6["default"] = _objectSpread2(_objectSpread2({}, commands_1$4["default"]), {}, {
  ACL_CAT: ACL_CAT,
  aclCat: ACL_CAT,
  ACL_DELUSER: ACL_DELUSER,
  aclDelUser: ACL_DELUSER,
  ACL_GENPASS: ACL_GENPASS,
  aclGenPass: ACL_GENPASS,
  ACL_GETUSER: ACL_GETUSER,
  aclGetUser: ACL_GETUSER,
  ACL_LIST: ACL_LIST,
  aclList: ACL_LIST,
  ACL_LOAD: ACL_LOAD,
  aclLoad: ACL_LOAD,
  ACL_LOG_RESET: ACL_LOG_RESET,
  aclLogReset: ACL_LOG_RESET,
  ACL_LOG: ACL_LOG,
  aclLog: ACL_LOG,
  ACL_SAVE: ACL_SAVE,
  aclSave: ACL_SAVE,
  ACL_SETUSER: ACL_SETUSER,
  aclSetUser: ACL_SETUSER,
  ACL_USERS: ACL_USERS,
  aclUsers: ACL_USERS,
  ACL_WHOAMI: ACL_WHOAMI,
  aclWhoAmI: ACL_WHOAMI,
  ASKING: ASKING,
  asking: ASKING,
  AUTH: AUTH,
  auth: AUTH,
  BGREWRITEAOF: BGREWRITEAOF,
  bgRewriteAof: BGREWRITEAOF,
  BGSAVE: BGSAVE,
  bgSave: BGSAVE,
  CLIENT_CACHING: CLIENT_CACHING,
  clientCaching: CLIENT_CACHING,
  CLIENT_GETNAME: CLIENT_GETNAME,
  clientGetName: CLIENT_GETNAME,
  CLIENT_GETREDIR: CLIENT_GETREDIR,
  clientGetRedir: CLIENT_GETREDIR,
  CLIENT_ID: CLIENT_ID,
  clientId: CLIENT_ID,
  CLIENT_KILL: CLIENT_KILL,
  clientKill: CLIENT_KILL,
  CLIENT_SETNAME: CLIENT_SETNAME,
  clientSetName: CLIENT_SETNAME,
  CLIENT_INFO: CLIENT_INFO,
  clientInfo: CLIENT_INFO,
  CLUSTER_ADDSLOTS: CLUSTER_ADDSLOTS,
  clusterAddSlots: CLUSTER_ADDSLOTS,
  CLUSTER_FLUSHSLOTS: CLUSTER_FLUSHSLOTS,
  clusterFlushSlots: CLUSTER_FLUSHSLOTS,
  CLUSTER_INFO: CLUSTER_INFO,
  clusterInfo: CLUSTER_INFO,
  CLUSTER_NODES: CLUSTER_NODES,
  clusterNodes: CLUSTER_NODES,
  CLUSTER_MEET: CLUSTER_MEET,
  clusterMeet: CLUSTER_MEET,
  CLUSTER_RESET: CLUSTER_RESET,
  clusterReset: CLUSTER_RESET,
  CLUSTER_SETSLOT: CLUSTER_SETSLOT,
  clusterSetSlot: CLUSTER_SETSLOT,
  CLUSTER_SLOTS: CLUSTER_SLOTS,
  clusterSlots: CLUSTER_SLOTS,
  COMMAND_COUNT: COMMAND_COUNT,
  commandCount: COMMAND_COUNT,
  COMMAND_GETKEYS: COMMAND_GETKEYS,
  commandGetKeys: COMMAND_GETKEYS,
  COMMAND_INFO: COMMAND_INFO,
  commandInfo: COMMAND_INFO,
  COMMAND: COMMAND,
  command: COMMAND,
  CONFIG_GET: CONFIG_GET$3,
  configGet: CONFIG_GET$3,
  CONFIG_RESETASTAT: CONFIG_RESETASTAT,
  configResetStat: CONFIG_RESETASTAT,
  CONFIG_REWRITE: CONFIG_REWRITE,
  configRewrite: CONFIG_REWRITE,
  CONFIG_SET: CONFIG_SET$3,
  configSet: CONFIG_SET$3,
  DBSIZE: DBSIZE,
  dbSize: DBSIZE,
  DISCARD: DISCARD,
  discard: DISCARD,
  ECHO: ECHO,
  echo: ECHO,
  FAILOVER: FAILOVER,
  failover: FAILOVER,
  FLUSHALL: FLUSHALL,
  flushAll: FLUSHALL,
  FLUSHDB: FLUSHDB,
  flushDb: FLUSHDB,
  HELLO: HELLO,
  hello: HELLO,
  INFO: INFO$a,
  info: INFO$a,
  KEYS: KEYS,
  keys: KEYS,
  LASTSAVE: LASTSAVE,
  lastSave: LASTSAVE,
  LOLWUT: LOLWUT,
  lolwut: LOLWUT,
  MEMOERY_DOCTOR: MEMOERY_DOCTOR,
  memoryDoctor: MEMOERY_DOCTOR,
  'MEMORY_MALLOC-STATS': MEMORY_MALLOC_STATS,
  memoryMallocStats: MEMORY_MALLOC_STATS,
  MEMORY_PURGE: MEMORY_PURGE,
  memoryPurge: MEMORY_PURGE,
  MEMORY_STATS: MEMORY_STATS,
  memoryStats: MEMORY_STATS,
  MEMORY_USAGE: MEMORY_USAGE,
  memoryUsage: MEMORY_USAGE,
  MODULE_LIST: MODULE_LIST,
  moduleList: MODULE_LIST,
  MODULE_LOAD: MODULE_LOAD,
  moduleLoad: MODULE_LOAD,
  MODULE_UNLOAD: MODULE_UNLOAD,
  moduleUnload: MODULE_UNLOAD,
  MOVE: MOVE,
  move: MOVE,
  PING: PING,
  ping: PING,
  PUBSUB_CHANNELS: PUBSUB_CHANNELS,
  pubSubChannels: PUBSUB_CHANNELS,
  PUBSUB_NUMPAT: PUBSUB_NUMPAT,
  pubSubNumPat: PUBSUB_NUMPAT,
  PUBSUB_NUMSUB: PUBSUB_NUMSUB,
  pubSubNumSub: PUBSUB_NUMSUB,
  RANDOMKEY: RANDOMKEY,
  randomKey: RANDOMKEY,
  READONLY: READONLY,
  readonly: READONLY,
  READWRITE: READWRITE,
  readwrite: READWRITE,
  REPLICAOF: REPLICAOF,
  replicaOf: REPLICAOF,
  'RESTORE-ASKING': RESTORE_ASKING,
  restoreAsking: RESTORE_ASKING,
  ROLE: ROLE,
  role: ROLE,
  SAVE: SAVE,
  save: SAVE,
  SCAN: SCAN,
  scan: SCAN,
  SCRIPT_DEBUG: SCRIPT_DEBUG,
  scriptDebug: SCRIPT_DEBUG,
  SCRIPT_EXISTS: SCRIPT_EXISTS,
  scriptExists: SCRIPT_EXISTS,
  SCRIPT_FLUSH: SCRIPT_FLUSH,
  scriptFlush: SCRIPT_FLUSH,
  SCRIPT_KILL: SCRIPT_KILL,
  scriptKill: SCRIPT_KILL,
  SCRIPT_LOAD: SCRIPT_LOAD,
  scriptLoad: SCRIPT_LOAD,
  SHUTDOWN: SHUTDOWN,
  shutdown: SHUTDOWN,
  SWAPDB: SWAPDB,
  swapDb: SWAPDB,
  TIME: TIME,
  time: TIME,
  UNWATCH: UNWATCH,
  unwatch: UNWATCH,
  WAIT: WAIT,
  wait: WAIT
});

var socket = {};

var commander = {exports: {}};

var commandOptions$1 = {};

Object.defineProperty(commandOptions$1, "__esModule", {
  value: true
});
commandOptions$1.isCommandOptions = commandOptions$1.commandOptions = void 0;
var symbol = Symbol('Command Options');

function commandOptions(options) {
  options[symbol] = true;
  return options;
}

commandOptions$1.commandOptions = commandOptions;

function isCommandOptions(options) {
  return (options === null || options === void 0 ? void 0 : options[symbol]) === true;
}

commandOptions$1.isCommandOptions = isCommandOptions;

(function (module, exports) {

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(encodeCommand);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformCommandReply = exports.encodeCommand = exports.transformCommandArguments = exports.extendWithModulesAndScripts = exports.extendWithCommands = void 0;
  var command_options_1 = commandOptions$1;

  function extendWithCommands(_ref) {
    var BaseClass = _ref.BaseClass,
        commands = _ref.commands,
        executor = _ref.executor;

    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          name = _Object$entries$_i[0],
          command = _Object$entries$_i[1];

      BaseClass.prototype[name] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return executor.call(this, command, args);
      };
    };

    for (var _i = 0, _Object$entries = Object.entries(commands); _i < _Object$entries.length; _i++) {
      _loop();
    }
  }

  exports.extendWithCommands = extendWithCommands;

  function extendWithModulesAndScripts(config) {
    var Commander;

    if (config.modules) {
      Commander = /*#__PURE__*/function (_config$BaseClass) {
        _inherits(Commander, _config$BaseClass);

        var _super = _createSuper(Commander);

        function Commander() {
          var _this;

          _classCallCheck(this, Commander);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          for (var _i2 = 0, _Object$keys = Object.keys(config.modules); _i2 < _Object$keys.length; _i2++) {
            var _module = _Object$keys[_i2];
            _this[_module] = new _this[_module](_assertThisInitialized(_this));
          }

          return _this;
        }

        return _createClass(Commander);
      }(config.BaseClass);

      for (var _i3 = 0, _Object$entries2 = Object.entries(config.modules); _i3 < _Object$entries2.length; _i3++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
            moduleName = _Object$entries2$_i[0],
            _module2 = _Object$entries2$_i[1];

        Commander.prototype[moduleName] = /*#__PURE__*/function () {
          function _class(self) {
            _classCallCheck(this, _class);

            Object.defineProperty(this, "self", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: void 0
            });
            this.self = self;
          }

          return _createClass(_class);
        }();

        var _loop2 = function _loop2() {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
              commandName = _Object$entries3$_i[0],
              command = _Object$entries3$_i[1];

          Commander.prototype[moduleName].prototype[commandName] = function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return config.modulesCommandsExecutor.call(this.self, command, args);
          };
        };

        for (var _i4 = 0, _Object$entries3 = Object.entries(_module2); _i4 < _Object$entries3.length; _i4++) {
          _loop2();
        }
      }
    }

    if (config.scripts) {
      Commander !== null && Commander !== void 0 ? Commander : Commander = /*#__PURE__*/function (_config$BaseClass2) {
        _inherits(Commander, _config$BaseClass2);

        var _super2 = _createSuper(Commander);

        function Commander() {
          _classCallCheck(this, Commander);

          return _super2.apply(this, arguments);
        }

        return _createClass(Commander);
      }(config.BaseClass);

      var _loop3 = function _loop3() {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
            name = _Object$entries4$_i[0],
            script = _Object$entries4$_i[1];

        Commander.prototype[name] = function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return config.scriptsExecutor.call(this, script, args);
        };
      };

      for (var _i5 = 0, _Object$entries4 = Object.entries(config.scripts); _i5 < _Object$entries4.length; _i5++) {
        _loop3();
      }
    }

    return Commander !== null && Commander !== void 0 ? Commander : config.BaseClass;
  }

  exports.extendWithModulesAndScripts = extendWithModulesAndScripts;

  function transformCommandArguments(command, args) {
    var options;

    if ((0, command_options_1.isCommandOptions)(args[0])) {
      options = args[0];
      args = args.slice(1);
    }

    return {
      args: command.transformArguments.apply(command, _toConsumableArray(args)),
      options: options
    };
  }

  exports.transformCommandArguments = transformCommandArguments;
  var DELIMITER = '\r\n';

  function encodeCommand(args) {
    var _a, _b, strings, stringsLength, _iterator, _step, arg, string, byteLength, totalLength;

    return regeneratorRuntime.wrap(function encodeCommand$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            strings = "*".concat(args.length).concat(DELIMITER), stringsLength = 0;
            _iterator = _createForOfIteratorHelper(args);
            _context.prev = 2;

            _iterator.s();

          case 4:
            if ((_step = _iterator.n()).done) {
              _context.next = 30;
              break;
            }

            arg = _step.value;

            if (!Buffer.isBuffer(arg)) {
              _context.next = 15;
              break;
            }

            _context.next = 9;
            return "".concat(strings, "$").concat(arg.length).concat(DELIMITER);

          case 9:
            strings = '';
            stringsLength = 0;
            _context.next = 13;
            return arg;

          case 13:
            _context.next = 27;
            break;

          case 15:
            string = (_b = (_a = arg === null || arg === void 0 ? void 0 : arg.toString) === null || _a === void 0 ? void 0 : _a.call(arg)) !== null && _b !== void 0 ? _b : '', byteLength = Buffer.byteLength(string);
            strings += "$".concat(byteLength).concat(DELIMITER);
            totalLength = stringsLength + byteLength;

            if (!(totalLength > 1024)) {
              _context.next = 25;
              break;
            }

            _context.next = 21;
            return strings;

          case 21:
            strings = string;
            stringsLength = byteLength;
            _context.next = 27;
            break;

          case 25:
            strings += string;
            stringsLength = totalLength;

          case 27:
            strings += DELIMITER;

          case 28:
            _context.next = 4;
            break;

          case 30:
            _context.next = 35;
            break;

          case 32:
            _context.prev = 32;
            _context.t0 = _context["catch"](2);

            _iterator.e(_context.t0);

          case 35:
            _context.prev = 35;

            _iterator.f();

            return _context.finish(35);

          case 38:
            _context.next = 40;
            return strings;

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, null, [[2, 32, 35, 38]]);
  }

  exports.encodeCommand = encodeCommand;

  function transformCommandReply(command, rawReply, preserved) {
    if (!command.transformReply) {
      return rawReply;
    }

    return command.transformReply(rawReply, preserved);
  }

  exports.transformCommandReply = transformCommandReply;
})(commander, commander.exports);

var errors$3 = {};

Object.defineProperty(errors$3, "__esModule", {
  value: true
});
errors$3.ReconnectStrategyError = errors$3.RootNodesUnavailableError = errors$3.AuthError = errors$3.SocketClosedUnexpectedlyError = errors$3.DisconnectsClientError = errors$3.ClientClosedError = errors$3.ConnectionTimeoutError = errors$3.WatchError = errors$3.AbortError = void 0;

var AbortError$2 = /*#__PURE__*/function (_Error) {
  _inherits(AbortError, _Error);

  var _super = _createSuper(AbortError);

  function AbortError() {
    _classCallCheck(this, AbortError);

    return _super.call(this, 'The command was aborted');
  }

  return _createClass(AbortError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.AbortError = AbortError$2;

var WatchError = /*#__PURE__*/function (_Error2) {
  _inherits(WatchError, _Error2);

  var _super2 = _createSuper(WatchError);

  function WatchError() {
    _classCallCheck(this, WatchError);

    return _super2.call(this, 'One (or more) of the watched keys has been changed');
  }

  return _createClass(WatchError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.WatchError = WatchError;

var ConnectionTimeoutError = /*#__PURE__*/function (_Error3) {
  _inherits(ConnectionTimeoutError, _Error3);

  var _super3 = _createSuper(ConnectionTimeoutError);

  function ConnectionTimeoutError() {
    _classCallCheck(this, ConnectionTimeoutError);

    return _super3.call(this, 'Connection timeout');
  }

  return _createClass(ConnectionTimeoutError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.ConnectionTimeoutError = ConnectionTimeoutError;

var ClientClosedError = /*#__PURE__*/function (_Error4) {
  _inherits(ClientClosedError, _Error4);

  var _super4 = _createSuper(ClientClosedError);

  function ClientClosedError() {
    _classCallCheck(this, ClientClosedError);

    return _super4.call(this, 'The client is closed');
  }

  return _createClass(ClientClosedError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.ClientClosedError = ClientClosedError;

var DisconnectsClientError = /*#__PURE__*/function (_Error5) {
  _inherits(DisconnectsClientError, _Error5);

  var _super5 = _createSuper(DisconnectsClientError);

  function DisconnectsClientError() {
    _classCallCheck(this, DisconnectsClientError);

    return _super5.call(this, 'Disconnects client');
  }

  return _createClass(DisconnectsClientError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.DisconnectsClientError = DisconnectsClientError;

var SocketClosedUnexpectedlyError = /*#__PURE__*/function (_Error6) {
  _inherits(SocketClosedUnexpectedlyError, _Error6);

  var _super6 = _createSuper(SocketClosedUnexpectedlyError);

  function SocketClosedUnexpectedlyError() {
    _classCallCheck(this, SocketClosedUnexpectedlyError);

    return _super6.call(this, 'Socket closed unexpectedly');
  }

  return _createClass(SocketClosedUnexpectedlyError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.SocketClosedUnexpectedlyError = SocketClosedUnexpectedlyError;

var AuthError = /*#__PURE__*/function (_Error7) {
  _inherits(AuthError, _Error7);

  var _super7 = _createSuper(AuthError);

  function AuthError(message) {
    _classCallCheck(this, AuthError);

    return _super7.call(this, message);
  }

  return _createClass(AuthError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.AuthError = AuthError;

var RootNodesUnavailableError = /*#__PURE__*/function (_Error8) {
  _inherits(RootNodesUnavailableError, _Error8);

  var _super8 = _createSuper(RootNodesUnavailableError);

  function RootNodesUnavailableError() {
    _classCallCheck(this, RootNodesUnavailableError);

    return _super8.call(this, 'All the root nodes are unavailable');
  }

  return _createClass(RootNodesUnavailableError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.RootNodesUnavailableError = RootNodesUnavailableError;

var ReconnectStrategyError = /*#__PURE__*/function (_Error9) {
  _inherits(ReconnectStrategyError, _Error9);

  var _super9 = _createSuper(ReconnectStrategyError);

  function ReconnectStrategyError(originalError, socketError) {
    var _this;

    _classCallCheck(this, ReconnectStrategyError);

    _this = _super9.call(this, originalError.message);
    Object.defineProperty(_assertThisInitialized(_this), "originalError", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "socketError", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    _this.originalError = originalError;
    _this.socketError = socketError;
    return _this;
  }

  return _createClass(ReconnectStrategyError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

errors$3.ReconnectStrategyError = ReconnectStrategyError;

var utils$1 = {};

Object.defineProperty(utils$1, "__esModule", {
  value: true
});
utils$1.promiseTimeout = void 0;

function promiseTimeout(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

utils$1.promiseTimeout = promiseTimeout;

var __classPrivateFieldSet$5 = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet$5 = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _RedisSocket_instances, _a, _RedisSocket_initiateOptions, _RedisSocket_defaultReconnectStrategy, _RedisSocket_isTlsSocket, _RedisSocket_initiator, _RedisSocket_options, _RedisSocket_socket, _RedisSocket_isOpen, _RedisSocket_isReady, _RedisSocket_writableNeedDrain, _RedisSocket_connect, _RedisSocket_retryConnection, _RedisSocket_createSocket, _RedisSocket_createNetSocket, _RedisSocket_createTlsSocket, _RedisSocket_onSocketError, _RedisSocket_isCorked;

Object.defineProperty(socket, "__esModule", {
  value: true
});
var events_1$2 = require$$0;
var net = require$$1;
var tls = require$$2;
var commander_1$4 = commander.exports;
var errors_1$3 = errors$3;
var utils_1 = utils$1;

var RedisSocket = /*#__PURE__*/function (_events_1$EventEmitte) {
  _inherits(RedisSocket, _events_1$EventEmitte);

  var _super = _createSuper(RedisSocket);

  function RedisSocket(initiator, options) {
    var _this;

    _classCallCheck(this, RedisSocket);

    _this = _super.call(this);

    _RedisSocket_instances.add(_assertThisInitialized(_this));

    _RedisSocket_initiator.set(_assertThisInitialized(_this), void 0);

    _RedisSocket_options.set(_assertThisInitialized(_this), void 0);

    _RedisSocket_socket.set(_assertThisInitialized(_this), void 0);

    _RedisSocket_isOpen.set(_assertThisInitialized(_this), false);

    _RedisSocket_isReady.set(_assertThisInitialized(_this), false); // `writable.writableNeedDrain` was added in v15.2.0 and therefore can't be used
    // https://nodejs.org/api/stream.html#stream_writable_writableneeddrain


    _RedisSocket_writableNeedDrain.set(_assertThisInitialized(_this), false);

    _RedisSocket_isCorked.set(_assertThisInitialized(_this), false);

    __classPrivateFieldSet$5(_assertThisInitialized(_this), _RedisSocket_initiator, initiator, "f");

    __classPrivateFieldSet$5(_assertThisInitialized(_this), _RedisSocket_options, __classPrivateFieldGet$5(RedisSocket, _a, "m", _RedisSocket_initiateOptions).call(RedisSocket, options), "f");

    return _this;
  }

  _createClass(RedisSocket, [{
    key: "isOpen",
    get: function get() {
      return __classPrivateFieldGet$5(this, _RedisSocket_isOpen, "f");
    }
  }, {
    key: "isReady",
    get: function get() {
      return __classPrivateFieldGet$5(this, _RedisSocket_isReady, "f");
    }
  }, {
    key: "writableNeedDrain",
    get: function get() {
      return __classPrivateFieldGet$5(this, _RedisSocket_writableNeedDrain, "f");
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!__classPrivateFieldGet$5(this, _RedisSocket_isOpen, "f")) {
                  _context.next = 2;
                  break;
                }

                throw new Error('Socket already opened');

              case 2:
                return _context.abrupt("return", __classPrivateFieldGet$5(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "writeCommand",
    value: function writeCommand(args) {
      if (!__classPrivateFieldGet$5(this, _RedisSocket_socket, "f")) {
        throw new errors_1$3.ClientClosedError();
      }

      var _iterator = _createForOfIteratorHelper((0, commander_1$4.encodeCommand)(args)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var toWrite = _step.value;

          __classPrivateFieldSet$5(this, _RedisSocket_writableNeedDrain, !__classPrivateFieldGet$5(this, _RedisSocket_socket, "f").write(toWrite), "f");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (!__classPrivateFieldGet$5(this, _RedisSocket_socket, "f")) {
        throw new errors_1$3.ClientClosedError();
      } else {
        __classPrivateFieldSet$5(this, _RedisSocket_isOpen, __classPrivateFieldSet$5(this, _RedisSocket_isReady, false, "f"), "f");
      }

      __classPrivateFieldGet$5(this, _RedisSocket_socket, "f").destroy();

      __classPrivateFieldSet$5(this, _RedisSocket_socket, undefined, "f");

      this.emit('end');
    }
  }, {
    key: "quit",
    value: function () {
      var _quit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fn) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (__classPrivateFieldGet$5(this, _RedisSocket_isOpen, "f")) {
                  _context2.next = 2;
                  break;
                }

                throw new errors_1$3.ClientClosedError();

              case 2:
                __classPrivateFieldSet$5(this, _RedisSocket_isOpen, false, "f");

                _context2.next = 5;
                return fn();

              case 5:
                this.disconnect();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function quit(_x) {
        return _quit.apply(this, arguments);
      }

      return quit;
    }()
  }, {
    key: "cork",
    value: function cork() {
      var _this2 = this;

      if (!__classPrivateFieldGet$5(this, _RedisSocket_socket, "f") || __classPrivateFieldGet$5(this, _RedisSocket_isCorked, "f")) {
        return;
      }

      __classPrivateFieldGet$5(this, _RedisSocket_socket, "f").cork();

      __classPrivateFieldSet$5(this, _RedisSocket_isCorked, true, "f");

      queueMicrotask(function () {
        var _b;

        (_b = __classPrivateFieldGet$5(_this2, _RedisSocket_socket, "f")) === null || _b === void 0 ? void 0 : _b.uncork();

        __classPrivateFieldSet$5(_this2, _RedisSocket_isCorked, false, "f");
      });
    }
  }]);

  return RedisSocket;
}(events_1$2.EventEmitter);

socket["default"] = RedisSocket;

_a = RedisSocket, _RedisSocket_initiator = new WeakMap(), _RedisSocket_options = new WeakMap(), _RedisSocket_socket = new WeakMap(), _RedisSocket_isOpen = new WeakMap(), _RedisSocket_isReady = new WeakMap(), _RedisSocket_writableNeedDrain = new WeakMap(), _RedisSocket_isCorked = new WeakMap(), _RedisSocket_instances = new WeakSet(), _RedisSocket_initiateOptions = function _RedisSocket_initiateOptions(options) {
  var _b, _c, _d, _e, _f;

  var _g, _h;

  options !== null && options !== void 0 ? options : options = {};

  if (!options.path) {
    (_b = (_g = options).port) !== null && _b !== void 0 ? _b : _g.port = 6379;
    (_c = (_h = options).host) !== null && _c !== void 0 ? _c : _h.host = 'localhost';
  }

  (_d = options.connectTimeout) !== null && _d !== void 0 ? _d : options.connectTimeout = 5000;
  (_e = options.keepAlive) !== null && _e !== void 0 ? _e : options.keepAlive = 5000;
  (_f = options.noDelay) !== null && _f !== void 0 ? _f : options.noDelay = true;
  return options;
}, _RedisSocket_defaultReconnectStrategy = function _RedisSocket_defaultReconnectStrategy(retries) {
  return Math.min(retries * 50, 500);
}, _RedisSocket_isTlsSocket = function _RedisSocket_isTlsSocket(options) {
  return options.tls === true;
}, _RedisSocket_connect = /*#__PURE__*/function () {
  var _RedisSocket_connect2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(hadError) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            __classPrivateFieldSet$5(this, _RedisSocket_isOpen, true, "f");

            _context3.t0 = __classPrivateFieldSet$5;
            _context3.t1 = this;
            _context3.t2 = _RedisSocket_socket;
            _context3.next = 7;
            return __classPrivateFieldGet$5(this, _RedisSocket_instances, "m", _RedisSocket_retryConnection).call(this, 0, hadError);

          case 7:
            _context3.t3 = _context3.sent;
            (0, _context3.t0)(_context3.t1, _context3.t2, _context3.t3, "f");

            __classPrivateFieldSet$5(this, _RedisSocket_writableNeedDrain, false, "f");

            _context3.next = 18;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t4 = _context3["catch"](0);

            __classPrivateFieldSet$5(this, _RedisSocket_isOpen, false, "f");

            this.emit('error', _context3.t4);
            this.emit('end');
            throw _context3.t4;

          case 18:
            if (__classPrivateFieldGet$5(this, _RedisSocket_isOpen, "f")) {
              _context3.next = 21;
              break;
            }

            this.disconnect();
            return _context3.abrupt("return");

          case 21:
            this.emit('connect');

            if (!__classPrivateFieldGet$5(this, _RedisSocket_initiator, "f")) {
              _context3.next = 36;
              break;
            }

            _context3.prev = 23;
            _context3.next = 26;
            return __classPrivateFieldGet$5(this, _RedisSocket_initiator, "f").call(this);

          case 26:
            _context3.next = 34;
            break;

          case 28:
            _context3.prev = 28;
            _context3.t5 = _context3["catch"](23);

            __classPrivateFieldGet$5(this, _RedisSocket_socket, "f").destroy();

            __classPrivateFieldSet$5(this, _RedisSocket_socket, undefined, "f");

            if (_context3.t5 instanceof errors_1$3.AuthError) {
              __classPrivateFieldSet$5(this, _RedisSocket_isOpen, false, "f");
            }

            throw _context3.t5;

          case 34:
            if (__classPrivateFieldGet$5(this, _RedisSocket_isOpen, "f")) {
              _context3.next = 36;
              break;
            }

            return _context3.abrupt("return");

          case 36:
            __classPrivateFieldSet$5(this, _RedisSocket_isReady, true, "f");

            this.emit('ready');

          case 38:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 12], [23, 28]]);
  }));

  function _RedisSocket_connect(_x2) {
    return _RedisSocket_connect2.apply(this, arguments);
  }

  return _RedisSocket_connect;
}(), _RedisSocket_retryConnection = /*#__PURE__*/function () {
  var _RedisSocket_retryConnection2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(retries, hadError) {
    var _b, _c, retryIn;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (retries > 0 || hadError) {
              this.emit('reconnecting');
            }

            _context4.prev = 1;
            _context4.next = 4;
            return __classPrivateFieldGet$5(this, _RedisSocket_instances, "m", _RedisSocket_createSocket).call(this);

          case 4:
            return _context4.abrupt("return", _context4.sent);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);

            if (__classPrivateFieldGet$5(this, _RedisSocket_isOpen, "f")) {
              _context4.next = 11;
              break;
            }

            throw _context4.t0;

          case 11:
            retryIn = ((_c = (_b = __classPrivateFieldGet$5(this, _RedisSocket_options, "f")) === null || _b === void 0 ? void 0 : _b.reconnectStrategy) !== null && _c !== void 0 ? _c : __classPrivateFieldGet$5(RedisSocket, _a, "m", _RedisSocket_defaultReconnectStrategy))(retries);

            if (!(retryIn instanceof Error)) {
              _context4.next = 14;
              break;
            }

            throw new errors_1$3.ReconnectStrategyError(retryIn, _context4.t0);

          case 14:
            this.emit('error', _context4.t0);
            _context4.next = 17;
            return (0, utils_1.promiseTimeout)(retryIn);

          case 17:
            return _context4.abrupt("return", __classPrivateFieldGet$5(this, _RedisSocket_instances, "m", _RedisSocket_retryConnection).call(this, retries + 1));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[1, 7]]);
  }));

  function _RedisSocket_retryConnection(_x3, _x4) {
    return _RedisSocket_retryConnection2.apply(this, arguments);
  }

  return _RedisSocket_retryConnection;
}(), _RedisSocket_createSocket = function _RedisSocket_createSocket() {
  var _this3 = this;

  return new Promise(function (resolve, reject) {
    var _ref = __classPrivateFieldGet$5(RedisSocket, _a, "m", _RedisSocket_isTlsSocket).call(RedisSocket, __classPrivateFieldGet$5(_this3, _RedisSocket_options, "f")) ? __classPrivateFieldGet$5(_this3, _RedisSocket_instances, "m", _RedisSocket_createTlsSocket).call(_this3) : __classPrivateFieldGet$5(_this3, _RedisSocket_instances, "m", _RedisSocket_createNetSocket).call(_this3),
        connectEvent = _ref.connectEvent,
        socket = _ref.socket;

    if (__classPrivateFieldGet$5(_this3, _RedisSocket_options, "f").connectTimeout) {
      socket.setTimeout(__classPrivateFieldGet$5(_this3, _RedisSocket_options, "f").connectTimeout, function () {
        return socket.destroy(new errors_1$3.ConnectionTimeoutError());
      });
    }

    socket.setNoDelay(__classPrivateFieldGet$5(_this3, _RedisSocket_options, "f").noDelay).setKeepAlive(__classPrivateFieldGet$5(_this3, _RedisSocket_options, "f").keepAlive !== false, __classPrivateFieldGet$5(_this3, _RedisSocket_options, "f").keepAlive || 0).once('error', reject).once(connectEvent, function () {
      socket.setTimeout(0).off('error', reject).once('error', function (err) {
        return __classPrivateFieldGet$5(_this3, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(_this3, err);
      }).once('close', function (hadError) {
        if (!hadError && __classPrivateFieldGet$5(_this3, _RedisSocket_isOpen, "f") && __classPrivateFieldGet$5(_this3, _RedisSocket_socket, "f") === socket) {
          __classPrivateFieldGet$5(_this3, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(_this3, new errors_1$3.SocketClosedUnexpectedlyError());
        }
      }).on('drain', function () {
        __classPrivateFieldSet$5(_this3, _RedisSocket_writableNeedDrain, false, "f");

        _this3.emit('drain');
      }).on('data', function (data) {
        return _this3.emit('data', data);
      });
      resolve(socket);
    });
  });
}, _RedisSocket_createNetSocket = function _RedisSocket_createNetSocket() {
  return {
    connectEvent: 'connect',
    socket: net.connect(__classPrivateFieldGet$5(this, _RedisSocket_options, "f")) // TODO

  };
}, _RedisSocket_createTlsSocket = function _RedisSocket_createTlsSocket() {
  return {
    connectEvent: 'secureConnect',
    socket: tls.connect(__classPrivateFieldGet$5(this, _RedisSocket_options, "f")) // TODO

  };
}, _RedisSocket_onSocketError = function _RedisSocket_onSocketError(err) {
  __classPrivateFieldSet$5(this, _RedisSocket_isReady, false, "f");

  this.emit('error', err);

  __classPrivateFieldGet$5(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this, true)["catch"](function () {// the error was already emitted, silently ignore it
  });
};

var commandsQueue = {};

var yallist = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;

function Yallist(list) {
  var self = this;

  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self;
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list');
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }

  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;

  if (head) {
    head.prev = node;
  }

  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }

  this.length++;
};

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;

  if (tail) {
    tail.next = node;
  }

  this.tail = node;

  if (!this.head) {
    this.head = node;
  }

  this.length++;
};

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined;
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined;
  }

  var res = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }

  return res;
};

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }

  return res;
};

Yallist.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc;
};

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc;
};

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }

  return arr;
};

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }

  return arr;
};

Yallist.prototype.slice = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }

  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }

  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.splice = function (start, deleteCount) {
  if (start > this.length) {
    start = this.length - 1;
  }

  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];

  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }

  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i++) {
    walker = insert(this, walker, i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2]);
  }

  return ret;
};

Yallist.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;

  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }

  this.head = tail;
  this.tail = head;
  return this;
};

function insert(self, node, value) {
  var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }

  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;
  return inserted;
}

function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);

  if (!self.head) {
    self.head = self.tail;
  }

  self.length++;
}

function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);

  if (!self.tail) {
    self.tail = self.head;
  }

  self.length++;
}

function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  require('./iterator.js')(Yallist);
} catch (er) {}

var assert$1 = require$$0$1;
var util = require$$1$1; // RedisError

function RedisError$1(message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  });
  Error.captureStackTrace(this, this.constructor);
}

util.inherits(RedisError$1, Error);
Object.defineProperty(RedisError$1.prototype, 'name', {
  value: 'RedisError',
  configurable: true,
  writable: true
}); // ParserError

function ParserError$2(message, buffer, offset) {
  assert$1(buffer);
  assert$1.strictEqual(_typeof(offset), 'number');
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  });
  var tmp = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  Error.captureStackTrace(this, this.constructor);
  Error.stackTraceLimit = tmp;
  this.offset = offset;
  this.buffer = buffer;
}

util.inherits(ParserError$2, RedisError$1);
Object.defineProperty(ParserError$2.prototype, 'name', {
  value: 'ParserError',
  configurable: true,
  writable: true
}); // ReplyError

function ReplyError$2(message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  });
  var tmp = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  Error.captureStackTrace(this, this.constructor);
  Error.stackTraceLimit = tmp;
}

util.inherits(ReplyError$2, RedisError$1);
Object.defineProperty(ReplyError$2.prototype, 'name', {
  value: 'ReplyError',
  configurable: true,
  writable: true
}); // AbortError

function AbortError$1(message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  });
  Error.captureStackTrace(this, this.constructor);
}

util.inherits(AbortError$1, RedisError$1);
Object.defineProperty(AbortError$1.prototype, 'name', {
  value: 'AbortError',
  configurable: true,
  writable: true
}); // InterruptError

function InterruptError$1(message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  });
  Error.captureStackTrace(this, this.constructor);
}

util.inherits(InterruptError$1, AbortError$1);
Object.defineProperty(InterruptError$1.prototype, 'name', {
  value: 'InterruptError',
  configurable: true,
  writable: true
});
var old = {
  RedisError: RedisError$1,
  ParserError: ParserError$2,
  ReplyError: ReplyError$2,
  AbortError: AbortError$1,
  InterruptError: InterruptError$1
};

var assert = require$$0$1;

var RedisError = /*#__PURE__*/function (_Error) {
  _inherits(RedisError, _Error);

  var _super = _createSuper(RedisError);

  function RedisError() {
    _classCallCheck(this, RedisError);

    return _super.apply(this, arguments);
  }

  _createClass(RedisError, [{
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return RedisError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var ParserError$1 = /*#__PURE__*/function (_RedisError) {
  _inherits(ParserError, _RedisError);

  var _super2 = _createSuper(ParserError);

  function ParserError(message, buffer, offset) {
    var _this;

    _classCallCheck(this, ParserError);

    assert(buffer);
    assert.strictEqual(_typeof(offset), 'number');
    var tmp = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    _this = _super2.call(this, message);
    Error.stackTraceLimit = tmp;
    _this.offset = offset;
    _this.buffer = buffer;
    return _this;
  }

  _createClass(ParserError, [{
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return ParserError;
}(RedisError);

var ReplyError$1 = /*#__PURE__*/function (_RedisError2) {
  _inherits(ReplyError, _RedisError2);

  var _super3 = _createSuper(ReplyError);

  function ReplyError(message) {
    var _this2;

    _classCallCheck(this, ReplyError);

    var tmp = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    _this2 = _super3.call(this, message);
    Error.stackTraceLimit = tmp;
    return _this2;
  }

  _createClass(ReplyError, [{
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return ReplyError;
}(RedisError);

var AbortError = /*#__PURE__*/function (_RedisError3) {
  _inherits(AbortError, _RedisError3);

  var _super4 = _createSuper(AbortError);

  function AbortError() {
    _classCallCheck(this, AbortError);

    return _super4.apply(this, arguments);
  }

  _createClass(AbortError, [{
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return AbortError;
}(RedisError);

var InterruptError = /*#__PURE__*/function (_AbortError) {
  _inherits(InterruptError, _AbortError);

  var _super5 = _createSuper(InterruptError);

  function InterruptError() {
    _classCallCheck(this, InterruptError);

    return _super5.apply(this, arguments);
  }

  _createClass(InterruptError, [{
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return InterruptError;
}(AbortError);

var modern = {
  RedisError: RedisError,
  ParserError: ParserError$1,
  ReplyError: ReplyError$1,
  AbortError: AbortError,
  InterruptError: InterruptError
};

var Errors = process.version.charCodeAt(1) < 55 && process.version.charCodeAt(2) === 46 ? old // Node.js < 7
: modern;
var redisErrors = Errors;

var Buffer$1 = require$$0$2.Buffer;
var StringDecoder = require$$1$2.StringDecoder;
var decoder = new StringDecoder();
var errors$2 = redisErrors;
var ReplyError = errors$2.ReplyError;
var ParserError = errors$2.ParserError;
var bufferPool = Buffer$1.allocUnsafe(32 * 1024);
var bufferOffset = 0;
var interval = null;
var counter = 0;
var notDecreased = 0;
/**
 * Used for integer numbers only
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|number}
 */

function parseSimpleNumbers(parser) {
  var length = parser.buffer.length - 1;
  var offset = parser.offset;
  var number = 0;
  var sign = 1;

  if (parser.buffer[offset] === 45) {
    sign = -1;
    offset++;
  }

  while (offset < length) {
    var c1 = parser.buffer[offset++];

    if (c1 === 13) {
      // \r\n
      parser.offset = offset + 1;
      return sign * number;
    }

    number = number * 10 + (c1 - 48);
  }
}
/**
 * Used for integer numbers in case of the returnNumbers option
 *
 * Reading the string as parts of n SMI is more efficient than
 * using a string directly.
 *
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|string}
 */


function parseStringNumbers(parser) {
  var length = parser.buffer.length - 1;
  var offset = parser.offset;
  var number = 0;
  var res = '';

  if (parser.buffer[offset] === 45) {
    res += '-';
    offset++;
  }

  while (offset < length) {
    var c1 = parser.buffer[offset++];

    if (c1 === 13) {
      // \r\n
      parser.offset = offset + 1;

      if (number !== 0) {
        res += number;
      }

      return res;
    } else if (number > 429496728) {
      res += number * 10 + (c1 - 48);
      number = 0;
    } else if (c1 === 48 && number === 0) {
      res += 0;
    } else {
      number = number * 10 + (c1 - 48);
    }
  }
}
/**
 * Parse a '+' redis simple string response but forward the offsets
 * onto convertBufferRange to generate a string.
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|string|Buffer}
 */


function parseSimpleString(parser) {
  var start = parser.offset;
  var buffer = parser.buffer;
  var length = buffer.length - 1;
  var offset = start;

  while (offset < length) {
    if (buffer[offset++] === 13) {
      // \r\n
      parser.offset = offset + 1;

      if (parser.optionReturnBuffers === true) {
        return parser.buffer.slice(start, offset - 1);
      }

      return parser.buffer.toString('utf8', start, offset - 1);
    }
  }
}
/**
 * Returns the read length
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|number}
 */


function parseLength(parser) {
  var length = parser.buffer.length - 1;
  var offset = parser.offset;
  var number = 0;

  while (offset < length) {
    var c1 = parser.buffer[offset++];

    if (c1 === 13) {
      parser.offset = offset + 1;
      return number;
    }

    number = number * 10 + (c1 - 48);
  }
}
/**
 * Parse a ':' redis integer response
 *
 * If stringNumbers is activated the parser always returns numbers as string
 * This is important for big numbers (number > Math.pow(2, 53)) as js numbers
 * are 64bit floating point numbers with reduced precision
 *
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|number|string}
 */


function parseInteger(parser) {
  if (parser.optionStringNumbers === true) {
    return parseStringNumbers(parser);
  }

  return parseSimpleNumbers(parser);
}
/**
 * Parse a '$' redis bulk string response
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|null|string}
 */


function parseBulkString(parser) {
  var length = parseLength(parser);

  if (length === undefined) {
    return;
  }

  if (length < 0) {
    return null;
  }

  var offset = parser.offset + length;

  if (offset + 2 > parser.buffer.length) {
    parser.bigStrSize = offset + 2;
    parser.totalChunkSize = parser.buffer.length;
    parser.bufferCache.push(parser.buffer);
    return;
  }

  var start = parser.offset;
  parser.offset = offset + 2;

  if (parser.optionReturnBuffers === true) {
    return parser.buffer.slice(start, offset);
  }

  return parser.buffer.toString('utf8', start, offset);
}
/**
 * Parse a '-' redis error response
 * @param {JavascriptRedisParser} parser
 * @returns {ReplyError}
 */


function parseError(parser) {
  var string = parseSimpleString(parser);

  if (string !== undefined) {
    if (parser.optionReturnBuffers === true) {
      string = string.toString();
    }

    return new ReplyError(string);
  }
}
/**
 * Parsing error handler, resets parser buffer
 * @param {JavascriptRedisParser} parser
 * @param {number} type
 * @returns {undefined}
 */


function handleError(parser, type) {
  var err = new ParserError('Protocol error, got ' + JSON.stringify(String.fromCharCode(type)) + ' as reply type byte', JSON.stringify(parser.buffer), parser.offset);
  parser.buffer = null;
  parser.returnFatalError(err);
}
/**
 * Parse a '*' redis array response
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|null|any[]}
 */


function parseArray(parser) {
  var length = parseLength(parser);

  if (length === undefined) {
    return;
  }

  if (length < 0) {
    return null;
  }

  var responses = new Array(length);
  return parseArrayElements(parser, responses, 0);
}
/**
 * Push a partly parsed array to the stack
 *
 * @param {JavascriptRedisParser} parser
 * @param {any[]} array
 * @param {number} pos
 * @returns {undefined}
 */


function pushArrayCache(parser, array, pos) {
  parser.arrayCache.push(array);
  parser.arrayPos.push(pos);
}
/**
 * Parse chunked redis array response
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|any[]}
 */


function parseArrayChunks(parser) {
  var tmp = parser.arrayCache.pop();
  var pos = parser.arrayPos.pop();

  if (parser.arrayCache.length) {
    var res = parseArrayChunks(parser);

    if (res === undefined) {
      pushArrayCache(parser, tmp, pos);
      return;
    }

    tmp[pos++] = res;
  }

  return parseArrayElements(parser, tmp, pos);
}
/**
 * Parse redis array response elements
 * @param {JavascriptRedisParser} parser
 * @param {Array} responses
 * @param {number} i
 * @returns {undefined|null|any[]}
 */


function parseArrayElements(parser, responses, i) {
  var bufferLength = parser.buffer.length;

  while (i < responses.length) {
    var offset = parser.offset;

    if (parser.offset >= bufferLength) {
      pushArrayCache(parser, responses, i);
      return;
    }

    var response = parseType(parser, parser.buffer[parser.offset++]);

    if (response === undefined) {
      if (!(parser.arrayCache.length || parser.bufferCache.length)) {
        parser.offset = offset;
      }

      pushArrayCache(parser, responses, i);
      return;
    }

    responses[i] = response;
    i++;
  }

  return responses;
}
/**
 * Called the appropriate parser for the specified type.
 *
 * 36: $
 * 43: +
 * 42: *
 * 58: :
 * 45: -
 *
 * @param {JavascriptRedisParser} parser
 * @param {number} type
 * @returns {*}
 */


function parseType(parser, type) {
  switch (type) {
    case 36:
      return parseBulkString(parser);

    case 43:
      return parseSimpleString(parser);

    case 42:
      return parseArray(parser);

    case 58:
      return parseInteger(parser);

    case 45:
      return parseError(parser);

    default:
      return handleError(parser, type);
  }
}
/**
 * Decrease the bufferPool size over time
 *
 * Balance between increasing and decreasing the bufferPool.
 * Decrease the bufferPool by 10% by removing the first 10% of the current pool.
 * @returns {undefined}
 */


function decreaseBufferPool() {
  if (bufferPool.length > 50 * 1024) {
    if (counter === 1 || notDecreased > counter * 2) {
      var minSliceLen = Math.floor(bufferPool.length / 10);
      var sliceLength = minSliceLen < bufferOffset ? bufferOffset : minSliceLen;
      bufferOffset = 0;
      bufferPool = bufferPool.slice(sliceLength, bufferPool.length);
    } else {
      notDecreased++;
      counter--;
    }
  } else {
    clearInterval(interval);
    counter = 0;
    notDecreased = 0;
    interval = null;
  }
}
/**
 * Check if the requested size fits in the current bufferPool.
 * If it does not, reset and increase the bufferPool accordingly.
 *
 * @param {number} length
 * @returns {undefined}
 */


function resizeBuffer(length) {
  if (bufferPool.length < length + bufferOffset) {
    var multiplier = length > 1024 * 1024 * 75 ? 2 : 3;

    if (bufferOffset > 1024 * 1024 * 111) {
      bufferOffset = 1024 * 1024 * 50;
    }

    bufferPool = Buffer$1.allocUnsafe(length * multiplier + bufferOffset);
    bufferOffset = 0;
    counter++;

    if (interval === null) {
      interval = setInterval(decreaseBufferPool, 50);
    }
  }
}
/**
 * Concat a bulk string containing multiple chunks
 *
 * Notes:
 * 1) The first chunk might contain the whole bulk string including the \r
 * 2) We are only safe to fully add up elements that are neither the first nor any of the last two elements
 *
 * @param {JavascriptRedisParser} parser
 * @returns {String}
 */


function concatBulkString(parser) {
  var list = parser.bufferCache;
  var oldOffset = parser.offset;
  var chunks = list.length;
  var offset = parser.bigStrSize - parser.totalChunkSize;
  parser.offset = offset;

  if (offset <= 2) {
    if (chunks === 2) {
      return list[0].toString('utf8', oldOffset, list[0].length + offset - 2);
    }

    chunks--;
    offset = list[list.length - 2].length + offset;
  }

  var res = decoder.write(list[0].slice(oldOffset));

  for (var i = 1; i < chunks - 1; i++) {
    res += decoder.write(list[i]);
  }

  res += decoder.end(list[i].slice(0, offset - 2));
  return res;
}
/**
 * Concat the collected chunks from parser.bufferCache.
 *
 * Increases the bufferPool size beforehand if necessary.
 *
 * @param {JavascriptRedisParser} parser
 * @returns {Buffer}
 */


function concatBulkBuffer(parser) {
  var list = parser.bufferCache;
  var oldOffset = parser.offset;
  var length = parser.bigStrSize - oldOffset - 2;
  var chunks = list.length;
  var offset = parser.bigStrSize - parser.totalChunkSize;
  parser.offset = offset;

  if (offset <= 2) {
    if (chunks === 2) {
      return list[0].slice(oldOffset, list[0].length + offset - 2);
    }

    chunks--;
    offset = list[list.length - 2].length + offset;
  }

  resizeBuffer(length);
  var start = bufferOffset;
  list[0].copy(bufferPool, start, oldOffset, list[0].length);
  bufferOffset += list[0].length - oldOffset;

  for (var i = 1; i < chunks - 1; i++) {
    list[i].copy(bufferPool, bufferOffset);
    bufferOffset += list[i].length;
  }

  list[i].copy(bufferPool, bufferOffset, 0, offset - 2);
  bufferOffset += offset - 2;
  return bufferPool.slice(start, bufferOffset);
}

var JavascriptRedisParser = /*#__PURE__*/function () {
  /**
   * Javascript Redis Parser constructor
   * @param {{returnError: Function, returnReply: Function, returnFatalError?: Function, returnBuffers: boolean, stringNumbers: boolean }} options
   * @constructor
   */
  function JavascriptRedisParser(options) {
    _classCallCheck(this, JavascriptRedisParser);

    if (!options) {
      throw new TypeError('Options are mandatory.');
    }

    if (typeof options.returnError !== 'function' || typeof options.returnReply !== 'function') {
      throw new TypeError('The returnReply and returnError options have to be functions.');
    }

    this.setReturnBuffers(!!options.returnBuffers);
    this.setStringNumbers(!!options.stringNumbers);
    this.returnError = options.returnError;
    this.returnFatalError = options.returnFatalError || options.returnError;
    this.returnReply = options.returnReply;
    this.reset();
  }
  /**
   * Reset the parser values to the initial state
   *
   * @returns {undefined}
   */


  _createClass(JavascriptRedisParser, [{
    key: "reset",
    value: function reset() {
      this.offset = 0;
      this.buffer = null;
      this.bigStrSize = 0;
      this.totalChunkSize = 0;
      this.bufferCache = [];
      this.arrayCache = [];
      this.arrayPos = [];
    }
    /**
     * Set the returnBuffers option
     *
     * @param {boolean} returnBuffers
     * @returns {undefined}
     */

  }, {
    key: "setReturnBuffers",
    value: function setReturnBuffers(returnBuffers) {
      if (typeof returnBuffers !== 'boolean') {
        throw new TypeError('The returnBuffers argument has to be a boolean');
      }

      this.optionReturnBuffers = returnBuffers;
    }
    /**
     * Set the stringNumbers option
     *
     * @param {boolean} stringNumbers
     * @returns {undefined}
     */

  }, {
    key: "setStringNumbers",
    value: function setStringNumbers(stringNumbers) {
      if (typeof stringNumbers !== 'boolean') {
        throw new TypeError('The stringNumbers argument has to be a boolean');
      }

      this.optionStringNumbers = stringNumbers;
    }
    /**
     * Parse the redis buffer
     * @param {Buffer} buffer
     * @returns {undefined}
     */

  }, {
    key: "execute",
    value: function execute(buffer) {
      if (this.buffer === null) {
        this.buffer = buffer;
        this.offset = 0;
      } else if (this.bigStrSize === 0) {
        var oldLength = this.buffer.length;
        var remainingLength = oldLength - this.offset;
        var newBuffer = Buffer$1.allocUnsafe(remainingLength + buffer.length);
        this.buffer.copy(newBuffer, 0, this.offset, oldLength);
        buffer.copy(newBuffer, remainingLength, 0, buffer.length);
        this.buffer = newBuffer;
        this.offset = 0;

        if (this.arrayCache.length) {
          var arr = parseArrayChunks(this);

          if (arr === undefined) {
            return;
          }

          this.returnReply(arr);
        }
      } else if (this.totalChunkSize + buffer.length >= this.bigStrSize) {
        this.bufferCache.push(buffer);
        var tmp = this.optionReturnBuffers ? concatBulkBuffer(this) : concatBulkString(this);
        this.bigStrSize = 0;
        this.bufferCache = [];
        this.buffer = buffer;

        if (this.arrayCache.length) {
          this.arrayCache[0][this.arrayPos[0]++] = tmp;
          tmp = parseArrayChunks(this);

          if (tmp === undefined) {
            return;
          }
        }

        this.returnReply(tmp);
      } else {
        this.bufferCache.push(buffer);
        this.totalChunkSize += buffer.length;
        return;
      }

      while (this.offset < this.buffer.length) {
        var offset = this.offset;
        var type = this.buffer[this.offset++];
        var response = parseType(this, type);

        if (response === undefined) {
          if (!(this.arrayCache.length || this.bufferCache.length)) {
            this.offset = offset;
          }

          return;
        }

        if (type === 45) {
          this.returnError(response);
        } else {
          this.returnReply(response);
        }
      }

      this.buffer = null;
    }
  }]);

  return JavascriptRedisParser;
}();

var parser = JavascriptRedisParser;

var redisParser = parser;

(function (exports) {

  var __classPrivateFieldSet = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };

  var __classPrivateFieldGet = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };

  var _RedisCommandsQueue_instances, _a, _RedisCommandsQueue_flushQueue, _RedisCommandsQueue_emitPubSubMessage, _RedisCommandsQueue_maxLength, _RedisCommandsQueue_waitingToBeSent, _RedisCommandsQueue_waitingForReply, _RedisCommandsQueue_pubSubState, _RedisCommandsQueue_PUB_SUB_MESSAGES, _RedisCommandsQueue_parser, _RedisCommandsQueue_chainInExecution, _RedisCommandsQueue_initiatePubSubState, _RedisCommandsQueue_pushPubSubCommand, _RedisCommandsQueue_setReturnBuffers, _RedisCommandsQueue_shiftWaitingForReply;

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PubSubUnsubscribeCommands = exports.PubSubSubscribeCommands = void 0;
  var LinkedList = yallist;
  var errors_1 = errors$3; // We need to use 'require', because it's not possible with Typescript to import
  // classes that are exported as 'module.exports = class`, without esModuleInterop
  // set to true.

  var RedisParser = redisParser;
  var PubSubSubscribeCommands;

  (function (PubSubSubscribeCommands) {
    PubSubSubscribeCommands["SUBSCRIBE"] = "SUBSCRIBE";
    PubSubSubscribeCommands["PSUBSCRIBE"] = "PSUBSCRIBE";
  })(PubSubSubscribeCommands = exports.PubSubSubscribeCommands || (exports.PubSubSubscribeCommands = {}));

  var PubSubUnsubscribeCommands;

  (function (PubSubUnsubscribeCommands) {
    PubSubUnsubscribeCommands["UNSUBSCRIBE"] = "UNSUBSCRIBE";
    PubSubUnsubscribeCommands["PUNSUBSCRIBE"] = "PUNSUBSCRIBE";
  })(PubSubUnsubscribeCommands = exports.PubSubUnsubscribeCommands || (exports.PubSubUnsubscribeCommands = {}));

  var RedisCommandsQueue = /*#__PURE__*/function () {
    function RedisCommandsQueue(maxLength) {
      var _this = this;

      _classCallCheck(this, RedisCommandsQueue);

      _RedisCommandsQueue_instances.add(this);

      _RedisCommandsQueue_maxLength.set(this, void 0);

      _RedisCommandsQueue_waitingToBeSent.set(this, new LinkedList());

      _RedisCommandsQueue_waitingForReply.set(this, new LinkedList());

      _RedisCommandsQueue_pubSubState.set(this, void 0);

      _RedisCommandsQueue_parser.set(this, new RedisParser({
        returnReply: function returnReply(reply) {
          if (__classPrivateFieldGet(_this, _RedisCommandsQueue_pubSubState, "f") && Array.isArray(reply)) {
            if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).message.equals(reply[0])) {
              return __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_emitPubSubMessage).call(RedisCommandsQueue, __classPrivateFieldGet(_this, _RedisCommandsQueue_pubSubState, "f").listeners.channels, reply[2], reply[1]);
            } else if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pMessage.equals(reply[0])) {
              return __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_emitPubSubMessage).call(RedisCommandsQueue, __classPrivateFieldGet(_this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns, reply[3], reply[2], reply[1]);
            } else if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).subscribe.equals(reply[0]) || __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pSubscribe.equals(reply[0]) || __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).unsubscribe.equals(reply[0]) || __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pUnsubscribe.equals(reply[0])) {
              if (--__classPrivateFieldGet(_this, _RedisCommandsQueue_waitingForReply, "f").head.value.channelsCounter === 0) {
                __classPrivateFieldGet(_this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_shiftWaitingForReply).call(_this).resolve();
              }

              return;
            }
          }

          __classPrivateFieldGet(_this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_shiftWaitingForReply).call(_this).resolve(reply);
        },
        returnError: function returnError(err) {
          return __classPrivateFieldGet(_this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_shiftWaitingForReply).call(_this).reject(err);
        }
      }));

      _RedisCommandsQueue_chainInExecution.set(this, void 0);

      __classPrivateFieldSet(this, _RedisCommandsQueue_maxLength, maxLength, "f");
    }

    _createClass(RedisCommandsQueue, [{
      key: "addCommand",
      value: function addCommand(args, options) {
        var _this2 = this;

        var _b;

        if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f") && !(options === null || options === void 0 ? void 0 : options.ignorePubSubMode)) {
          return Promise.reject(new Error('Cannot send commands in PubSub mode'));
        } else if (__classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f") && __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").length + __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length >= __classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f")) {
          return Promise.reject(new Error('The queue is full'));
        } else if ((_b = options === null || options === void 0 ? void 0 : options.signal) === null || _b === void 0 ? void 0 : _b.aborted) {
          return Promise.reject(new errors_1.AbortError());
        }

        return new Promise(function (resolve, reject) {
          var node = new LinkedList.Node({
            args: args,
            chainId: options === null || options === void 0 ? void 0 : options.chainId,
            returnBuffers: options === null || options === void 0 ? void 0 : options.returnBuffers,
            resolve: resolve,
            reject: reject
          });

          if (options === null || options === void 0 ? void 0 : options.signal) {
            var listener = function listener() {
              __classPrivateFieldGet(_this2, _RedisCommandsQueue_waitingToBeSent, "f").removeNode(node);

              node.value.reject(new errors_1.AbortError());
            };

            node.value.abort = {
              signal: options.signal,
              listener: listener
            }; // AbortSignal type is incorrent

            options.signal.addEventListener('abort', listener, {
              once: true
            });
          }

          if (options === null || options === void 0 ? void 0 : options.asap) {
            __classPrivateFieldGet(_this2, _RedisCommandsQueue_waitingToBeSent, "f").unshiftNode(node);
          } else {
            __classPrivateFieldGet(_this2, _RedisCommandsQueue_waitingToBeSent, "f").pushNode(node);
          }
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(command, channels, listener, returnBuffers) {
        var pubSubState = __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_initiatePubSubState).call(this),
            channelsToSubscribe = [],
            listenersMap = command === PubSubSubscribeCommands.SUBSCRIBE ? pubSubState.listeners.channels : pubSubState.listeners.patterns;

        var _iterator = _createForOfIteratorHelper(Array.isArray(channels) ? channels : [channels]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var channel = _step.value;
            var channelString = typeof channel === 'string' ? channel : channel.toString();
            var listeners = listenersMap.get(channelString);

            if (!listeners) {
              listeners = {
                buffers: new Set(),
                strings: new Set()
              };
              listenersMap.set(channelString, listeners);
              channelsToSubscribe.push(channel);
            } // https://github.com/microsoft/TypeScript/issues/23132


            (returnBuffers ? listeners.buffers : listeners.strings).add(listener);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (!channelsToSubscribe.length) {
          return Promise.resolve();
        }

        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, channelsToSubscribe);
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(command, channels, listener, returnBuffers) {
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) {
          return Promise.resolve();
        }

        var listeners = command === PubSubUnsubscribeCommands.UNSUBSCRIBE ? __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.channels : __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns;

        if (!channels) {
          var size = listeners.size;
          listeners.clear();
          return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, size);
        }

        var channelsToUnsubscribe = [];

        var _iterator2 = _createForOfIteratorHelper(Array.isArray(channels) ? channels : [channels]),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var channel = _step2.value;
            var sets = listeners.get(channel);
            if (!sets) continue;
            var shouldUnsubscribe = void 0;

            if (listener) {
              // https://github.com/microsoft/TypeScript/issues/23132
              (returnBuffers ? sets.buffers : sets.strings)["delete"](listener);
              shouldUnsubscribe = !sets.buffers.size && !sets.strings.size;
            } else {
              shouldUnsubscribe = true;
            }

            if (shouldUnsubscribe) {
              channelsToUnsubscribe.push(channel);
              listeners["delete"](channel);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (!channelsToUnsubscribe.length) {
          return Promise.resolve();
        }

        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, channelsToUnsubscribe);
      }
    }, {
      key: "resubscribe",
      value: function resubscribe() {
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) {
          return;
        }

        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").subscribed = 0;

        var promises = [],
            _classPrivateFieldGe = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners,
            channels = _classPrivateFieldGe.channels,
            patterns = _classPrivateFieldGe.patterns;

        if (channels.size) {
          promises.push(__classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, PubSubSubscribeCommands.SUBSCRIBE, _toConsumableArray(channels.keys())));
        }

        if (patterns.size) {
          promises.push(__classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, PubSubSubscribeCommands.PSUBSCRIBE, _toConsumableArray(patterns.keys())));
        }

        if (promises.length) {
          return Promise.all(promises);
        }
      }
    }, {
      key: "getCommandToSend",
      value: function getCommandToSend() {
        var toSend = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();

        if (toSend) {
          __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").push({
            resolve: toSend.resolve,
            reject: toSend.reject,
            channelsCounter: toSend.channelsCounter,
            returnBuffers: toSend.returnBuffers
          });
        }

        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, toSend === null || toSend === void 0 ? void 0 : toSend.chainId, "f");

        return toSend === null || toSend === void 0 ? void 0 : toSend.args;
      }
    }, {
      key: "parseResponse",
      value: function parseResponse(data) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_setReturnBuffers).call(this);

        __classPrivateFieldGet(this, _RedisCommandsQueue_parser, "f").execute(data);
      }
    }, {
      key: "flushWaitingForReply",
      value: function flushWaitingForReply(err) {
        var _b;

        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);

        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) return;

        while (((_b = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").head) === null || _b === void 0 ? void 0 : _b.value.chainId) === __classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) {
          __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        }

        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, undefined, "f");
      }
    }, {
      key: "flushAll",
      value: function flushAll(err) {
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);

        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f"), err);
      }
    }]);

    return RedisCommandsQueue;
  }();

  exports["default"] = RedisCommandsQueue;
  _a = RedisCommandsQueue, _RedisCommandsQueue_maxLength = new WeakMap(), _RedisCommandsQueue_waitingToBeSent = new WeakMap(), _RedisCommandsQueue_waitingForReply = new WeakMap(), _RedisCommandsQueue_pubSubState = new WeakMap(), _RedisCommandsQueue_parser = new WeakMap(), _RedisCommandsQueue_chainInExecution = new WeakMap(), _RedisCommandsQueue_instances = new WeakSet(), _RedisCommandsQueue_flushQueue = function _RedisCommandsQueue_flushQueue(queue, err) {
    while (queue.length) {
      queue.shift().reject(err);
    }
  }, _RedisCommandsQueue_emitPubSubMessage = function _RedisCommandsQueue_emitPubSubMessage(listenersMap, message, channel, pattern) {
    var keyString = (pattern !== null && pattern !== void 0 ? pattern : channel).toString(),
        listeners = listenersMap.get(keyString);
    if (!listeners) return;

    var _iterator3 = _createForOfIteratorHelper(listeners.buffers),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var listener = _step3.value;
        listener(message, channel);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (!listeners.strings.size) return;
    var channelString = pattern ? channel.toString() : keyString,
        messageString = channelString === '__redis__:invalidate' ? // https://github.com/redis/redis/pull/7469
    // https://github.com/redis/redis/issues/7463
    message === null ? null : message.map(function (x) {
      return x.toString();
    }) : message.toString();

    var _iterator4 = _createForOfIteratorHelper(listeners.strings),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _listener = _step4.value;

        _listener(messageString, channelString);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }, _RedisCommandsQueue_initiatePubSubState = function _RedisCommandsQueue_initiatePubSubState() {
    var _b;

    return __classPrivateFieldSet(this, _RedisCommandsQueue_pubSubState, (_b = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) !== null && _b !== void 0 ? _b : {
      subscribed: 0,
      subscribing: 0,
      unsubscribing: 0,
      listeners: {
        channels: new Map(),
        patterns: new Map()
      }
    }, "f");
  }, _RedisCommandsQueue_pushPubSubCommand = function _RedisCommandsQueue_pushPubSubCommand(command, channels) {
    var _this3 = this;

    return new Promise(function (_resolve, _reject) {
      var pubSubState = __classPrivateFieldGet(_this3, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_initiatePubSubState).call(_this3),
          isSubscribe = command === PubSubSubscribeCommands.SUBSCRIBE || command === PubSubSubscribeCommands.PSUBSCRIBE,
          inProgressKey = isSubscribe ? 'subscribing' : 'unsubscribing',
          commandArgs = [command];

      var channelsCounter;

      if (typeof channels === 'number') {
        // unsubscribe only
        channelsCounter = channels;
      } else {
        commandArgs.push.apply(commandArgs, _toConsumableArray(channels));
        channelsCounter = channels.length;
      }

      pubSubState[inProgressKey] += channelsCounter;

      __classPrivateFieldGet(_this3, _RedisCommandsQueue_waitingToBeSent, "f").push({
        args: commandArgs,
        channelsCounter: channelsCounter,
        returnBuffers: true,
        resolve: function resolve() {
          pubSubState[inProgressKey] -= channelsCounter;

          if (isSubscribe) {
            pubSubState.subscribed += channelsCounter;
          } else {
            pubSubState.subscribed -= channelsCounter;

            if (!pubSubState.subscribed && !pubSubState.subscribing && !pubSubState.subscribed) {
              __classPrivateFieldSet(_this3, _RedisCommandsQueue_pubSubState, undefined, "f");
            }
          }

          _resolve();
        },
        reject: function reject(err) {
          pubSubState[inProgressKey] -= channelsCounter * (isSubscribe ? 1 : -1);

          _reject(err);
        }
      });
    });
  }, _RedisCommandsQueue_setReturnBuffers = function _RedisCommandsQueue_setReturnBuffers() {
    var _b, _c;

    __classPrivateFieldGet(this, _RedisCommandsQueue_parser, "f").setReturnBuffers(!!((_b = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head) === null || _b === void 0 ? void 0 : _b.value.returnBuffers) || !!((_c = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) === null || _c === void 0 ? void 0 : _c.subscribed));
  }, _RedisCommandsQueue_shiftWaitingForReply = function _RedisCommandsQueue_shiftWaitingForReply() {
    if (!__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length) {
      throw new Error('Got an unexpected reply from Redis');
    }

    var waitingForReply = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift();

    __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_setReturnBuffers).call(this);

    return waitingForReply;
  };
  _RedisCommandsQueue_PUB_SUB_MESSAGES = {
    value: {
      message: Buffer.from('message'),
      pMessage: Buffer.from('pmessage'),
      subscribe: Buffer.from('subscribe'),
      pSubscribe: Buffer.from('psubscribe'),
      unsubscribe: Buffer.from('unsunscribe'),
      pUnsubscribe: Buffer.from('punsubscribe')
    }
  };
})(commandsQueue);

var multiCommand$2 = {};

var multiCommand$1 = {};

Object.defineProperty(multiCommand$1, "__esModule", {
  value: true
});
var errors_1$2 = errors$3;

var RedisMultiCommand = /*#__PURE__*/function () {
  function RedisMultiCommand() {
    _classCallCheck(this, RedisMultiCommand);

    Object.defineProperty(this, "queue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "scriptsInUse", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Set()
    });
  }

  _createClass(RedisMultiCommand, [{
    key: "addCommand",
    value: function addCommand(args, transformReply) {
      this.queue.push({
        args: args,
        transformReply: transformReply
      });
    }
  }, {
    key: "addScript",
    value: function addScript(script, args) {
      var transformedArguments = [];

      if (this.scriptsInUse.has(script.SHA1)) {
        transformedArguments.push('EVALSHA', script.SHA1);
      } else {
        this.scriptsInUse.add(script.SHA1);
        transformedArguments.push('EVAL', script.SCRIPT);
      }

      transformedArguments.push(script.NUMBER_OF_KEYS.toString());
      var scriptArguments = script.transformArguments.apply(script, _toConsumableArray(args));
      transformedArguments.push.apply(transformedArguments, _toConsumableArray(scriptArguments));

      if (scriptArguments.preserve) {
        transformedArguments.preserve = scriptArguments.preserve;
      }

      this.addCommand(transformedArguments, script.transformReply);
      return transformedArguments;
    }
  }, {
    key: "exec",
    value: function exec() {
      if (!this.queue.length) {
        return;
      }

      return [{
        args: ['MULTI']
      }].concat(_toConsumableArray(this.queue), [{
        args: ['EXEC']
      }]);
    }
  }, {
    key: "handleExecReplies",
    value: function handleExecReplies(rawReplies) {
      var execReply = rawReplies[rawReplies.length - 1];

      if (execReply === null) {
        throw new errors_1$2.WatchError();
      }

      return this.transformReplies(execReply);
    }
  }, {
    key: "transformReplies",
    value: function transformReplies(rawReplies) {
      var _this = this;

      return rawReplies.map(function (reply, i) {
        var _this$queue$i = _this.queue[i],
            transformReply = _this$queue$i.transformReply,
            args = _this$queue$i.args;
        return transformReply ? transformReply(reply, args.preserve) : reply;
      });
    }
  }], [{
    key: "generateChainId",
    value: function generateChainId() {
      return Symbol('RedisMultiCommand Chain Id');
    }
  }]);

  return RedisMultiCommand;
}();

multiCommand$1["default"] = RedisMultiCommand;

var __classPrivateFieldSet$4 = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet$4 = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _RedisClientMultiCommand_instances, _RedisClientMultiCommand_multi, _RedisClientMultiCommand_executor, _RedisClientMultiCommand_legacyMode, _RedisClientMultiCommand_defineLegacyCommand;

Object.defineProperty(multiCommand$2, "__esModule", {
  value: true
});
var commands_1$3 = commands$6;
var multi_command_1$3 = multiCommand$1;
var commander_1$3 = commander.exports;

var RedisClientMultiCommand = /*#__PURE__*/function () {
  function RedisClientMultiCommand(executor) {
    var legacyMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RedisClientMultiCommand);

    _RedisClientMultiCommand_instances.add(this);

    _RedisClientMultiCommand_multi.set(this, new multi_command_1$3["default"]());

    _RedisClientMultiCommand_executor.set(this, void 0);

    Object.defineProperty(this, "v4", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "EXEC", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.exec
    });

    __classPrivateFieldSet$4(this, _RedisClientMultiCommand_executor, executor, "f");

    if (legacyMode) {
      __classPrivateFieldGet$4(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_legacyMode).call(this);
    }
  }

  _createClass(RedisClientMultiCommand, [{
    key: "commandsExecutor",
    value: function commandsExecutor(command, args) {
      return this.addCommand(command.transformArguments.apply(command, _toConsumableArray(args)), command.transformReply);
    }
  }, {
    key: "addCommand",
    value: function addCommand(args, transformReply) {
      __classPrivateFieldGet$4(this, _RedisClientMultiCommand_multi, "f").addCommand(args, transformReply);

      return this;
    }
  }, {
    key: "scriptsExecutor",
    value: function scriptsExecutor(script, args) {
      __classPrivateFieldGet$4(this, _RedisClientMultiCommand_multi, "f").addScript(script, args);

      return this;
    }
  }, {
    key: "exec",
    value: function () {
      var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var execAsPipeline,
            commands,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                execAsPipeline = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;

                if (!execAsPipeline) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", this.execAsPipeline());

              case 3:
                commands = __classPrivateFieldGet$4(this, _RedisClientMultiCommand_multi, "f").exec();

                if (commands) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", []);

              case 6:
                _context.t0 = __classPrivateFieldGet$4(this, _RedisClientMultiCommand_multi, "f");
                _context.next = 9;
                return __classPrivateFieldGet$4(this, _RedisClientMultiCommand_executor, "f").call(this, commands, multi_command_1$3["default"].generateChainId());

              case 9:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.handleExecReplies.call(_context.t0, _context.t1));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function exec() {
        return _exec.apply(this, arguments);
      }

      return exec;
    }()
  }, {
    key: "execAsPipeline",
    value: function () {
      var _execAsPipeline = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (__classPrivateFieldGet$4(this, _RedisClientMultiCommand_multi, "f").queue.length) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", []);

              case 2:
                _context2.t0 = __classPrivateFieldGet$4(this, _RedisClientMultiCommand_multi, "f");
                _context2.next = 5;
                return __classPrivateFieldGet$4(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet$4(this, _RedisClientMultiCommand_multi, "f").queue);

              case 5:
                _context2.t1 = _context2.sent;
                return _context2.abrupt("return", _context2.t0.transformReplies.call(_context2.t0, _context2.t1));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function execAsPipeline() {
        return _execAsPipeline.apply(this, arguments);
      }

      return execAsPipeline;
    }()
  }], [{
    key: "extend",
    value: function extend(plugins) {
      return (0, commander_1$3.extendWithModulesAndScripts)({
        BaseClass: RedisClientMultiCommand,
        modules: plugins === null || plugins === void 0 ? void 0 : plugins.modules,
        modulesCommandsExecutor: RedisClientMultiCommand.prototype.commandsExecutor,
        scripts: plugins === null || plugins === void 0 ? void 0 : plugins.scripts,
        scriptsExecutor: RedisClientMultiCommand.prototype.scriptsExecutor
      });
    }
  }]);

  return RedisClientMultiCommand;
}();

multiCommand$2["default"] = RedisClientMultiCommand;

_RedisClientMultiCommand_multi = new WeakMap(), _RedisClientMultiCommand_executor = new WeakMap(), _RedisClientMultiCommand_instances = new WeakSet(), _RedisClientMultiCommand_legacyMode = function _RedisClientMultiCommand_legacyMode() {
  var _this = this;

  this.v4.addCommand = this.addCommand.bind(this);

  this.addCommand = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    __classPrivateFieldGet$4(_this, _RedisClientMultiCommand_multi, "f").addCommand(args.flat());

    return _this;
  };

  this.v4.exec = this.exec.bind(this);

  this.exec = function (callback) {
    _this.v4.exec().then(function (reply) {
      if (!callback) return;
      callback(null, reply);
    })["catch"](function (err) {
      if (!callback) {
        // this.emit('error', err);
        return;
      }

      callback(err);
    });
  };

  for (var _i = 0, _Object$keys = Object.keys(commands_1$3["default"]); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];

    __classPrivateFieldGet$4(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_defineLegacyCommand).call(this, name);
  }

  for (var _i2 = 0, _Object$keys2 = Object.keys(commands_1$3["default"]); _i2 < _Object$keys2.length; _i2++) {
    var _name = _Object$keys2[_i2];
    this[_name.toLowerCase()] = this[_name];
  }
}, _RedisClientMultiCommand_defineLegacyCommand = function _RedisClientMultiCommand_defineLegacyCommand(name) {
  var _this2 = this;

  this.v4[name] = this[name].bind(this.v4);

  this[name] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _this2.addCommand(name, args);
  };
};
(0, commander_1$3.extendWithCommands)({
  BaseClass: RedisClientMultiCommand,
  commands: commands_1$3["default"],
  executor: RedisClientMultiCommand.prototype.commandsExecutor
});

var factoryValidator$1 = function factoryValidator(factory) {
  if (typeof factory.create !== "function") {
    throw new TypeError("factory.create must be a function");
  }

  if (typeof factory.destroy !== "function") {
    throw new TypeError("factory.destroy must be a function");
  }

  if (typeof factory.validate !== "undefined" && typeof factory.validate !== "function") {
    throw new TypeError("factory.validate must be a function");
  }
};

/**
 * Create the default settings used by the pool
 *
 * @class
 */


var PoolDefaults$1 = /*#__PURE__*/_createClass(function PoolDefaults() {
  _classCallCheck(this, PoolDefaults);

  this.fifo = true;
  this.priorityRange = 1;
  this.testOnBorrow = false;
  this.testOnReturn = false;
  this.autostart = true;
  this.evictionRunIntervalMillis = 0;
  this.numTestsPerEvictionRun = 3;
  this.softIdleTimeoutMillis = -1;
  this.idleTimeoutMillis = 30000; // FIXME: no defaults!

  this.acquireTimeoutMillis = null;
  this.destroyTimeoutMillis = null;
  this.maxWaitingClients = null;
  this.min = null;
  this.max = null; // FIXME: this seems odd?

  this.Promise = Promise;
});

var PoolDefaults_1 = PoolDefaults$1;

var PoolDefaults = PoolDefaults_1;

var PoolOptions$1 = /*#__PURE__*/_createClass(
/**
 * @param {Object} opts
 *   configuration for the pool
 * @param {Number} [opts.max=null]
 *   Maximum number of items that can exist at the same time.  Default: 1.
 *   Any further acquire requests will be pushed to the waiting list.
 * @param {Number} [opts.min=null]
 *   Minimum number of items in pool (including in-use). Default: 0.
 *   When the pool is created, or a resource destroyed, this minimum will
 *   be checked. If the pool resource count is below the minimum, a new
 *   resource will be created and added to the pool.
 * @param {Number} [opts.maxWaitingClients=null]
 *   maximum number of queued requests allowed after which acquire calls will be rejected
 * @param {Boolean} [opts.testOnBorrow=false]
 *   should the pool validate resources before giving them to clients. Requires that
 *   `factory.validate` is specified.
 * @param {Boolean} [opts.testOnReturn=false]
 *   should the pool validate resources before returning them to the pool.
 * @param {Number} [opts.acquireTimeoutMillis=null]
 *   Delay in milliseconds after which the an `acquire` call will fail. optional.
 *   Default: undefined. Should be positive and non-zero
 * @param {Number} [opts.destroyTimeoutMillis=null]
 *   Delay in milliseconds after which the an `destroy` call will fail, causing it to emit a factoryDestroyError event. optional.
 *   Default: undefined. Should be positive and non-zero
 * @param {Number} [opts.priorityRange=1]
 *   The range from 1 to be treated as a valid priority
 * @param {Boolean} [opts.fifo=true]
 *   Sets whether the pool has LIFO (last in, first out) behaviour with respect to idle objects.
 *   if false then pool has FIFO behaviour
 * @param {Boolean} [opts.autostart=true]
 *   Should the pool start creating resources etc once the constructor is called
 * @param {Number} [opts.evictionRunIntervalMillis=0]
 *   How often to run eviction checks.  Default: 0 (does not run).
 * @param {Number} [opts.numTestsPerEvictionRun=3]
 *   Number of resources to check each eviction run.  Default: 3.
 * @param {Number} [opts.softIdleTimeoutMillis=-1]
 *   amount of time an object may sit idle in the pool before it is eligible
 *   for eviction by the idle object evictor (if any), with the extra condition
 *   that at least "min idle" object instances remain in the pool. Default -1 (nothing can get evicted)
 * @param {Number} [opts.idleTimeoutMillis=30000]
 *   the minimum amount of time that an object may sit idle in the pool before it is eligible for eviction
 *   due to idle time. Supercedes "softIdleTimeoutMillis" Default: 30000
 * @param {typeof Promise} [opts.Promise=Promise]
 *   What promise implementation should the pool use, defaults to native promises.
 */
function PoolOptions(opts) {
  _classCallCheck(this, PoolOptions);

  var poolDefaults = new PoolDefaults();
  opts = opts || {};
  this.fifo = typeof opts.fifo === "boolean" ? opts.fifo : poolDefaults.fifo;
  this.priorityRange = opts.priorityRange || poolDefaults.priorityRange;
  this.testOnBorrow = typeof opts.testOnBorrow === "boolean" ? opts.testOnBorrow : poolDefaults.testOnBorrow;
  this.testOnReturn = typeof opts.testOnReturn === "boolean" ? opts.testOnReturn : poolDefaults.testOnReturn;
  this.autostart = typeof opts.autostart === "boolean" ? opts.autostart : poolDefaults.autostart;

  if (opts.acquireTimeoutMillis) {
    // @ts-ignore
    this.acquireTimeoutMillis = parseInt(opts.acquireTimeoutMillis, 10);
  }

  if (opts.destroyTimeoutMillis) {
    // @ts-ignore
    this.destroyTimeoutMillis = parseInt(opts.destroyTimeoutMillis, 10);
  }

  if (opts.maxWaitingClients !== undefined) {
    // @ts-ignore
    this.maxWaitingClients = parseInt(opts.maxWaitingClients, 10);
  } // @ts-ignore


  this.max = parseInt(opts.max, 10); // @ts-ignore

  this.min = parseInt(opts.min, 10);
  this.max = Math.max(isNaN(this.max) ? 1 : this.max, 1);
  this.min = Math.min(isNaN(this.min) ? 0 : this.min, this.max);
  this.evictionRunIntervalMillis = opts.evictionRunIntervalMillis || poolDefaults.evictionRunIntervalMillis;
  this.numTestsPerEvictionRun = opts.numTestsPerEvictionRun || poolDefaults.numTestsPerEvictionRun;
  this.softIdleTimeoutMillis = opts.softIdleTimeoutMillis || poolDefaults.softIdleTimeoutMillis;
  this.idleTimeoutMillis = opts.idleTimeoutMillis || poolDefaults.idleTimeoutMillis;
  this.Promise = opts.Promise != null ? opts.Promise : poolDefaults.Promise;
});

var PoolOptions_1 = PoolOptions$1;

/**
 * This is apparently a bit like a Jquery deferred, hence the name
 */


var Deferred$3 = /*#__PURE__*/function () {
  function Deferred(Promise) {
    var _this = this;

    _classCallCheck(this, Deferred);

    this._state = Deferred.PENDING;
    this._resolve = undefined;
    this._reject = undefined;
    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
  }

  _createClass(Deferred, [{
    key: "state",
    get: function get() {
      return this._state;
    }
  }, {
    key: "promise",
    get: function get() {
      return this._promise;
    }
  }, {
    key: "reject",
    value: function reject(reason) {
      if (this._state !== Deferred.PENDING) {
        return;
      }

      this._state = Deferred.REJECTED;

      this._reject(reason);
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      if (this._state !== Deferred.PENDING) {
        return;
      }

      this._state = Deferred.FULFILLED;

      this._resolve(value);
    }
  }]);

  return Deferred;
}(); // TODO: should these really live here? or be a seperate 'state' enum


Deferred$3.PENDING = "PENDING";
Deferred$3.FULFILLED = "FULFILLED";
Deferred$3.REJECTED = "REJECTED";
var Deferred_1 = Deferred$3;

var ExtendableError = /*#__PURE__*/function (_Error) {
  _inherits(ExtendableError, _Error);

  var _super = _createSuper(ExtendableError);

  function ExtendableError(message) {
    var _this;

    _classCallCheck(this, ExtendableError);

    _this = _super.call(this, message); // @ts-ignore

    _this.name = _this.constructor.name;
    _this.message = message;

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return _createClass(ExtendableError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/* eslint-disable no-useless-constructor */


var TimeoutError = /*#__PURE__*/function (_ExtendableError) {
  _inherits(TimeoutError, _ExtendableError);

  var _super2 = _createSuper(TimeoutError);

  function TimeoutError(m) {
    _classCallCheck(this, TimeoutError);

    return _super2.call(this, m);
  }

  return _createClass(TimeoutError);
}(ExtendableError);
/* eslint-enable no-useless-constructor */


var errors$1 = {
  TimeoutError: TimeoutError
};

var Deferred$2 = Deferred_1;
var errors = errors$1;

function fbind(fn, ctx) {
  return function bound() {
    return fn.apply(ctx, arguments);
  };
}
/**
 * Wraps a users request for a resource
 * Basically a promise mashed in with a timeout
 * @private
 */


var ResourceRequest$1 = /*#__PURE__*/function (_Deferred) {
  _inherits(ResourceRequest, _Deferred);

  var _super = _createSuper(ResourceRequest);

  /**
   * [constructor description]
   * @param  {Number} ttl     timeout
   */
  function ResourceRequest(ttl, Promise) {
    var _this;

    _classCallCheck(this, ResourceRequest);

    _this = _super.call(this, Promise);
    _this._creationTimestamp = Date.now();
    _this._timeout = null;

    if (ttl !== undefined) {
      _this.setTimeout(ttl);
    }

    return _this;
  }

  _createClass(ResourceRequest, [{
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout(_x) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (delay) {
      if (this._state !== ResourceRequest.PENDING) {
        return;
      }

      var ttl = parseInt(delay, 10);

      if (isNaN(ttl) || ttl <= 0) {
        throw new Error("delay must be a positive int");
      }

      var age = Date.now() - this._creationTimestamp;

      if (this._timeout) {
        this.removeTimeout();
      }

      this._timeout = setTimeout(fbind(this._fireTimeout, this), Math.max(ttl - age, 0));
    })
  }, {
    key: "removeTimeout",
    value: function removeTimeout() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }

      this._timeout = null;
    }
  }, {
    key: "_fireTimeout",
    value: function _fireTimeout() {
      this.reject(new errors.TimeoutError("ResourceRequest timed out"));
    }
  }, {
    key: "reject",
    value: function reject(reason) {
      this.removeTimeout();

      _get(_getPrototypeOf(ResourceRequest.prototype), "reject", this).call(this, reason);
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      this.removeTimeout();

      _get(_getPrototypeOf(ResourceRequest.prototype), "resolve", this).call(this, value);
    }
  }]);

  return ResourceRequest;
}(Deferred$2);

var ResourceRequest_1 = ResourceRequest$1;

var Deferred$1 = Deferred_1;
/**
 * Plan is to maybe add tracking via Error objects
 * and other fun stuff!
 */

var ResourceLoan$1 = /*#__PURE__*/function (_Deferred) {
  _inherits(ResourceLoan, _Deferred);

  var _super = _createSuper(ResourceLoan);

  /**
   *
   * @param  {any} pooledResource the PooledResource this loan belongs to
   * @return {any}                [description]
   */
  function ResourceLoan(pooledResource, Promise) {
    var _this;

    _classCallCheck(this, ResourceLoan);

    _this = _super.call(this, Promise);
    _this._creationTimestamp = Date.now();
    _this.pooledResource = pooledResource;
    return _this;
  }

  _createClass(ResourceLoan, [{
    key: "reject",
    value: function reject() {
      /**
       * Loans can only be resolved at the moment
       */
    }
  }]);

  return ResourceLoan;
}(Deferred$1);

var ResourceLoan_1 = ResourceLoan$1;

var PooledResourceStateEnum$1 = {
  ALLOCATED: "ALLOCATED",
  // In use
  IDLE: "IDLE",
  // In the queue, not in use.
  INVALID: "INVALID",
  // Failed validation
  RETURNING: "RETURNING",
  // Resource is in process of returning
  VALIDATION: "VALIDATION" // Currently being tested

};
var PooledResourceStateEnum_1 = PooledResourceStateEnum$1;

var PooledResourceStateEnum = PooledResourceStateEnum_1;
/**
 * @class
 * @private
 */

var PooledResource$1 = /*#__PURE__*/function () {
  function PooledResource(resource) {
    _classCallCheck(this, PooledResource);

    this.creationTime = Date.now();
    this.lastReturnTime = null;
    this.lastBorrowTime = null;
    this.lastIdleTime = null;
    this.obj = resource;
    this.state = PooledResourceStateEnum.IDLE;
  } // mark the resource as "allocated"


  _createClass(PooledResource, [{
    key: "allocate",
    value: function allocate() {
      this.lastBorrowTime = Date.now();
      this.state = PooledResourceStateEnum.ALLOCATED;
    } // mark the resource as "deallocated"

  }, {
    key: "deallocate",
    value: function deallocate() {
      this.lastReturnTime = Date.now();
      this.state = PooledResourceStateEnum.IDLE;
    }
  }, {
    key: "invalidate",
    value: function invalidate() {
      this.state = PooledResourceStateEnum.INVALID;
    }
  }, {
    key: "test",
    value: function test() {
      this.state = PooledResourceStateEnum.VALIDATION;
    }
  }, {
    key: "idle",
    value: function idle() {
      this.lastIdleTime = Date.now();
      this.state = PooledResourceStateEnum.IDLE;
    }
  }, {
    key: "returning",
    value: function returning() {
      this.state = PooledResourceStateEnum.RETURNING;
    }
  }]);

  return PooledResource;
}();

var PooledResource_1 = PooledResource$1;

var DefaultEvictor$1 = /*#__PURE__*/function () {
  function DefaultEvictor() {
    _classCallCheck(this, DefaultEvictor);
  }

  _createClass(DefaultEvictor, [{
    key: "evict",
    value: function evict(config, pooledResource, availableObjectsCount) {
      var idleTime = Date.now() - pooledResource.lastIdleTime;

      if (config.softIdleTimeoutMillis > 0 && config.softIdleTimeoutMillis < idleTime && config.min < availableObjectsCount) {
        return true;
      }

      if (config.idleTimeoutMillis < idleTime) {
        return true;
      }

      return false;
    }
  }]);

  return DefaultEvictor;
}();

var DefaultEvictor_1 = DefaultEvictor$1;

/**
 * A Doubly Linked List, because there aren't enough in the world...
 * this is pretty much a direct JS port of the one wikipedia
 * https://en.wikipedia.org/wiki/Doubly_linked_list
 *
 * For most usage 'insertBeginning' and 'insertEnd' should be enough
 *
 * nodes are expected to something like a POJSO like
 * {
 *   prev: null,
 *   next: null,
 *   something: 'whatever you like'
 * }
 */


var DoublyLinkedList$2 = /*#__PURE__*/function () {
  function DoublyLinkedList() {
    _classCallCheck(this, DoublyLinkedList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(DoublyLinkedList, [{
    key: "insertBeginning",
    value: function insertBeginning(node) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        node.prev = null;
        node.next = null;
        this.length++;
      } else {
        this.insertBefore(this.head, node);
      }
    }
  }, {
    key: "insertEnd",
    value: function insertEnd(node) {
      if (this.tail === null) {
        this.insertBeginning(node);
      } else {
        this.insertAfter(this.tail, node);
      }
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(node, newNode) {
      newNode.prev = node;
      newNode.next = node.next;

      if (node.next === null) {
        this.tail = newNode;
      } else {
        node.next.prev = newNode;
      }

      node.next = newNode;
      this.length++;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(node, newNode) {
      newNode.prev = node.prev;
      newNode.next = node;

      if (node.prev === null) {
        this.head = newNode;
      } else {
        node.prev.next = newNode;
      }

      node.prev = newNode;
      this.length++;
    }
  }, {
    key: "remove",
    value: function remove(node) {
      if (node.prev === null) {
        this.head = node.next;
      } else {
        node.prev.next = node.next;
      }

      if (node.next === null) {
        this.tail = node.prev;
      } else {
        node.next.prev = node.prev;
      }

      node.prev = null;
      node.next = null;
      this.length--;
    } // FIXME: this should not live here and has become a dumping ground...

  }], [{
    key: "createNode",
    value: function createNode(data) {
      return {
        prev: null,
        next: null,
        data: data
      };
    }
  }]);

  return DoublyLinkedList;
}();

var DoublyLinkedList_1 = DoublyLinkedList$2;

/**
 * Creates an interator for a DoublyLinkedList starting at the given node
 * It's internal cursor will remains relative to the last "iterated" node as that
 * node moves through the list until it either iterates to the end of the list,
 * or the the node it's tracking is removed from the list. Until the first 'next'
 * call it tracks the head/tail of the linked list. This means that one can create
 * an iterator on an empty list, then add nodes, and then the iterator will follow
 * those nodes. Because the DoublyLinkedList nodes don't track their owning "list" and
 * it's highly inefficient to walk the list for every iteration, the iterator won't know
 * if the node has been detached from one List and added to another list, or if the iterator
 *
 * The created object is an es6 compatible iterator
 */


var DoublyLinkedListIterator$1 = /*#__PURE__*/function () {
  /**
   * @param  {Object} doublyLinkedList     a node that is part of a doublyLinkedList
   * @param  {Boolean} [reverse=false]     is this a reverse iterator? default: false
   */
  function DoublyLinkedListIterator(doublyLinkedList, reverse) {
    _classCallCheck(this, DoublyLinkedListIterator);

    this._list = doublyLinkedList; // NOTE: these key names are tied to the DoublyLinkedListIterator

    this._direction = reverse === true ? "prev" : "next";
    this._startPosition = reverse === true ? "tail" : "head";
    this._started = false;
    this._cursor = null;
    this._done = false;
  }

  _createClass(DoublyLinkedListIterator, [{
    key: "_start",
    value: function _start() {
      this._cursor = this._list[this._startPosition];
      this._started = true;
    }
  }, {
    key: "_advanceCursor",
    value: function _advanceCursor() {
      if (this._started === false) {
        this._started = true;
        this._cursor = this._list[this._startPosition];
        return;
      }

      this._cursor = this._cursor[this._direction];
    }
  }, {
    key: "reset",
    value: function reset() {
      this._done = false;
      this._started = false;
      this._cursor = null;
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this._started === false || this._done === true || this._isCursorDetached()) {
        return false;
      }

      this._list.remove(this._cursor);
    }
  }, {
    key: "next",
    value: function next() {
      if (this._done === true) {
        return {
          done: true
        };
      }

      this._advanceCursor(); // if there is no node at the cursor or the node at the cursor is no longer part of
      // a doubly linked list then we are done/finished/kaput


      if (this._cursor === null || this._isCursorDetached()) {
        this._done = true;
        return {
          done: true
        };
      }

      return {
        value: this._cursor,
        done: false
      };
    }
    /**
     * Is the node detached from a list?
     * NOTE: you can trick/bypass/confuse this check by removing a node from one DoublyLinkedList
     * and adding it to another.
     * TODO: We can make this smarter by checking the direction of travel and only checking
     * the required next/prev/head/tail rather than all of them
     * @return {Boolean}      [description]
     */

  }, {
    key: "_isCursorDetached",
    value: function _isCursorDetached() {
      return this._cursor.prev === null && this._cursor.next === null && this._list.tail !== this._cursor && this._list.head !== this._cursor;
    }
  }]);

  return DoublyLinkedListIterator;
}();

var DoublyLinkedListIterator_1 = DoublyLinkedListIterator$1;

var DoublyLinkedListIterator = DoublyLinkedListIterator_1;
/**
 * Thin wrapper around an underlying DDL iterator
 */

var DequeIterator$1 = /*#__PURE__*/function (_DoublyLinkedListIter) {
  _inherits(DequeIterator, _DoublyLinkedListIter);

  var _super = _createSuper(DequeIterator);

  function DequeIterator() {
    _classCallCheck(this, DequeIterator);

    return _super.apply(this, arguments);
  }

  _createClass(DequeIterator, [{
    key: "next",
    value: function next() {
      var result = _get(_getPrototypeOf(DequeIterator.prototype), "next", this).call(this); // unwrap the node...


      if (result.value) {
        result.value = result.value.data;
      }

      return result;
    }
  }]);

  return DequeIterator;
}(DoublyLinkedListIterator);

var DequeIterator_1 = DequeIterator$1;

var DoublyLinkedList$1 = DoublyLinkedList_1;
var DequeIterator = DequeIterator_1;
/**
 * DoublyLinkedList backed double ended queue
 * implements just enough to keep the Pool
 */

var Deque$2 = /*#__PURE__*/function (_Symbol$iterator) {
  function Deque() {
    _classCallCheck(this, Deque);

    this._list = new DoublyLinkedList$1();
  }
  /**
   * removes and returns the first element from the queue
   * @return {any} [description]
   */


  _createClass(Deque, [{
    key: "shift",
    value: function shift() {
      if (this.length === 0) {
        return undefined;
      }

      var node = this._list.head;

      this._list.remove(node);

      return node.data;
    }
    /**
     * adds one elemts to the beginning of the queue
     * @param  {any} element [description]
     * @return {any}         [description]
     */

  }, {
    key: "unshift",
    value: function unshift(element) {
      var node = DoublyLinkedList$1.createNode(element);

      this._list.insertBeginning(node);
    }
    /**
     * adds one to the end of the queue
     * @param  {any} element [description]
     * @return {any}         [description]
     */

  }, {
    key: "push",
    value: function push(element) {
      var node = DoublyLinkedList$1.createNode(element);

      this._list.insertEnd(node);
    }
    /**
     * removes and returns the last element from the queue
     */

  }, {
    key: "pop",
    value: function pop() {
      if (this.length === 0) {
        return undefined;
      }

      var node = this._list.tail;

      this._list.remove(node);

      return node.data;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      return new DequeIterator(this._list);
    }
  }, {
    key: "iterator",
    value: function iterator() {
      return new DequeIterator(this._list);
    }
  }, {
    key: "reverseIterator",
    value: function reverseIterator() {
      return new DequeIterator(this._list, true);
    }
    /**
     * get a reference to the item at the head of the queue
     * @return {any} [description]
     */

  }, {
    key: "head",
    get: function get() {
      if (this.length === 0) {
        return undefined;
      }

      var node = this._list.head;
      return node.data;
    }
    /**
     * get a reference to the item at the tail of the queue
     * @return {any} [description]
     */

  }, {
    key: "tail",
    get: function get() {
      if (this.length === 0) {
        return undefined;
      }

      var node = this._list.tail;
      return node.data;
    }
  }, {
    key: "length",
    get: function get() {
      return this._list.length;
    }
  }]);

  return Deque;
}(Symbol.iterator);

var Deque_1 = Deque$2;

var DoublyLinkedList = DoublyLinkedList_1;
var Deque$1 = Deque_1;
/**
 * Sort of a internal queue for holding the waiting
 * resource requets for a given "priority".
 * Also handles managing timeouts rejections on items (is this the best place for this?)
 * This is the last point where we know which queue a resourceRequest is in
 *
 */

var Queue$1 = /*#__PURE__*/function (_Deque) {
  _inherits(Queue, _Deque);

  var _super = _createSuper(Queue);

  function Queue() {
    _classCallCheck(this, Queue);

    return _super.apply(this, arguments);
  }

  _createClass(Queue, [{
    key: "push",
    value:
    /**
     * Adds the obj to the end of the list for this slot
     * we completely override the parent method because we need access to the
     * node for our rejection handler
     * @param {any} resourceRequest [description]
     */
    function push(resourceRequest) {
      var node = DoublyLinkedList.createNode(resourceRequest);
      resourceRequest.promise["catch"](this._createTimeoutRejectionHandler(node));

      this._list.insertEnd(node);
    }
  }, {
    key: "_createTimeoutRejectionHandler",
    value: function _createTimeoutRejectionHandler(node) {
      var _this = this;

      return function (reason) {
        if (reason.name === "TimeoutError") {
          _this._list.remove(node);
        }
      };
    }
  }]);

  return Queue;
}(Deque$1);

var Queue_1 = Queue$1;

var Queue = Queue_1;
/**
 * @class
 * @private
 */

var PriorityQueue$1 = /*#__PURE__*/function () {
  function PriorityQueue(size) {
    _classCallCheck(this, PriorityQueue);

    this._size = Math.max(+size | 0, 1);
    /** @type {Queue[]} */

    this._slots = []; // initialize arrays to hold queue elements

    for (var i = 0; i < this._size; i++) {
      this._slots.push(new Queue());
    }
  }

  _createClass(PriorityQueue, [{
    key: "length",
    get: function get() {
      var _length = 0;

      for (var i = 0, slots = this._slots.length; i < slots; i++) {
        _length += this._slots[i].length;
      }

      return _length;
    }
  }, {
    key: "enqueue",
    value: function enqueue(obj, priority) {
      // Convert to integer with a default value of 0.
      priority = priority && +priority | 0 || 0;

      if (priority) {
        if (priority < 0 || priority >= this._size) {
          priority = this._size - 1; // put obj at the end of the line
        }
      }

      this._slots[priority].push(obj);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      for (var i = 0, sl = this._slots.length; i < sl; i += 1) {
        if (this._slots[i].length) {
          return this._slots[i].shift();
        }
      }

      return;
    }
  }, {
    key: "head",
    get: function get() {
      for (var i = 0, sl = this._slots.length; i < sl; i += 1) {
        if (this._slots[i].length > 0) {
          return this._slots[i].head;
        }
      }

      return;
    }
  }, {
    key: "tail",
    get: function get() {
      for (var i = this._slots.length - 1; i >= 0; i--) {
        if (this._slots[i].length > 0) {
          return this._slots[i].tail;
        }
      }

      return;
    }
  }]);

  return PriorityQueue;
}();

var PriorityQueue_1 = PriorityQueue$1;

var utils = {};

function noop() {}
/**
 * Reflects a promise but does not expose any
 * underlying value or rejection from that promise.
 * @param  {Promise} promise [description]
 * @return {Promise}         [description]
 */


utils.reflector = function (promise) {
  return promise.then(noop, noop);
};

var EventEmitter = require$$0.EventEmitter;
var factoryValidator = factoryValidator$1;
var PoolOptions = PoolOptions_1;
var ResourceRequest = ResourceRequest_1;
var ResourceLoan = ResourceLoan_1;
var PooledResource = PooledResource_1;
var Deferred = Deferred_1;
var reflector = utils.reflector;
/**
 * TODO: move me
 */

var FACTORY_CREATE_ERROR = "factoryCreateError";
var FACTORY_DESTROY_ERROR = "factoryDestroyError";

var Pool$1 = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Pool, _EventEmitter);

  var _super = _createSuper(Pool);

  /**
   * Generate an Object pool with a specified `factory` and `config`.
   *
   * @param {typeof DefaultEvictor} Evictor
   * @param {typeof Deque} Deque
   * @param {typeof PriorityQueue} PriorityQueue
   * @param {Object} factory
   *   Factory to be used for generating and destroying the items.
   * @param {Function} factory.create
   *   Should create the item to be acquired,
   *   and call it's first callback argument with the generated item as it's argument.
   * @param {Function} factory.destroy
   *   Should gently close any resources that the item is using.
   *   Called before the items is destroyed.
   * @param {Function} factory.validate
   *   Test if a resource is still valid .Should return a promise that resolves to a boolean, true if resource is still valid and false
   *   If it should be removed from pool.
   * @param {Object} options
   */
  function Pool(Evictor, Deque, PriorityQueue, factory, options) {
    var _this;

    _classCallCheck(this, Pool);

    _this = _super.call(this);
    factoryValidator(factory);
    _this._config = new PoolOptions(options); // TODO: fix up this ugly glue-ing

    _this._Promise = _this._config.Promise;
    _this._factory = factory;
    _this._draining = false;
    _this._started = false;
    /**
     * Holds waiting clients
     * @type {PriorityQueue}
     */

    _this._waitingClientsQueue = new PriorityQueue(_this._config.priorityRange);
    /**
     * Collection of promises for resource creation calls made by the pool to factory.create
     * @type {Set}
     */

    _this._factoryCreateOperations = new Set();
    /**
     * Collection of promises for resource destruction calls made by the pool to factory.destroy
     * @type {Set}
     */

    _this._factoryDestroyOperations = new Set();
    /**
     * A queue/stack of pooledResources awaiting acquisition
     * TODO: replace with LinkedList backed array
     * @type {Deque}
     */

    _this._availableObjects = new Deque();
    /**
     * Collection of references for any resource that are undergoing validation before being acquired
     * @type {Set}
     */

    _this._testOnBorrowResources = new Set();
    /**
     * Collection of references for any resource that are undergoing validation before being returned
     * @type {Set}
     */

    _this._testOnReturnResources = new Set();
    /**
     * Collection of promises for any validations currently in process
     * @type {Set}
     */

    _this._validationOperations = new Set();
    /**
     * All objects associated with this pool in any state (except destroyed)
     * @type {Set}
     */

    _this._allObjects = new Set();
    /**
     * Loans keyed by the borrowed resource
     * @type {Map}
     */

    _this._resourceLoans = new Map();
    /**
     * Infinitely looping iterator over available object
     * @type {DequeIterator}
     */

    _this._evictionIterator = _this._availableObjects.iterator();
    _this._evictor = new Evictor();
    /**
     * handle for setTimeout for next eviction run
     * @type {(number|null)}
     */

    _this._scheduledEviction = null; // create initial resources (if factory.min > 0)

    if (_this._config.autostart === true) {
      _this.start();
    }

    return _this;
  }

  _createClass(Pool, [{
    key: "_destroy",
    value: function _destroy(pooledResource) {
      var _this2 = this;

      // FIXME: do we need another state for "in destruction"?
      pooledResource.invalidate();

      this._allObjects["delete"](pooledResource); // NOTE: this maybe very bad promise usage?


      var destroyPromise = this._factory.destroy(pooledResource.obj);

      var wrappedDestroyPromise = this._config.destroyTimeoutMillis ? this._Promise.resolve(this._applyDestroyTimeout(destroyPromise)) : this._Promise.resolve(destroyPromise);

      this._trackOperation(wrappedDestroyPromise, this._factoryDestroyOperations)["catch"](function (reason) {
        _this2.emit(FACTORY_DESTROY_ERROR, reason);
      }); // TODO: maybe ensuring minimum pool size should live outside here


      this._ensureMinimum();
    }
  }, {
    key: "_applyDestroyTimeout",
    value: function _applyDestroyTimeout(promise) {
      var _this3 = this;

      var timeoutPromise = new this._Promise(function (resolve, reject) {
        setTimeout(function () {
          reject(new Error("destroy timed out"));
        }, _this3._config.destroyTimeoutMillis).unref();
      });
      return this._Promise.race([timeoutPromise, promise]);
    }
    /**
     * Attempt to move an available resource into test and then onto a waiting client
     * @return {Boolean} could we move an available resource into test
     */

  }, {
    key: "_testOnBorrow",
    value: function _testOnBorrow() {
      var _this4 = this;

      if (this._availableObjects.length < 1) {
        return false;
      }

      var pooledResource = this._availableObjects.shift(); // Mark the resource as in test


      pooledResource.test();

      this._testOnBorrowResources.add(pooledResource);

      var validationPromise = this._factory.validate(pooledResource.obj);

      var wrappedValidationPromise = this._Promise.resolve(validationPromise);

      this._trackOperation(wrappedValidationPromise, this._validationOperations).then(function (isValid) {
        _this4._testOnBorrowResources["delete"](pooledResource);

        if (isValid === false) {
          pooledResource.invalidate();

          _this4._destroy(pooledResource);

          _this4._dispense();

          return;
        }

        _this4._dispatchPooledResourceToNextWaitingClient(pooledResource);
      });

      return true;
    }
    /**
     * Attempt to move an available resource to a waiting client
     * @return {Boolean} [description]
     */

  }, {
    key: "_dispatchResource",
    value: function _dispatchResource() {
      if (this._availableObjects.length < 1) {
        return false;
      }

      var pooledResource = this._availableObjects.shift();

      this._dispatchPooledResourceToNextWaitingClient(pooledResource);

      return false;
    }
    /**
     * Attempt to resolve an outstanding resource request using an available resource from
     * the pool, or creating new ones
     *
     * @private
     */

  }, {
    key: "_dispense",
    value: function _dispense() {
      /**
       * Local variables for ease of reading/writing
       * these don't (shouldn't) change across the execution of this fn
       */
      var numWaitingClients = this._waitingClientsQueue.length; // If there aren't any waiting requests then there is nothing to do
      // so lets short-circuit

      if (numWaitingClients < 1) {
        return;
      }

      var resourceShortfall = numWaitingClients - this._potentiallyAllocableResourceCount;
      var actualNumberOfResourcesToCreate = Math.min(this.spareResourceCapacity, resourceShortfall);

      for (var i = 0; actualNumberOfResourcesToCreate > i; i++) {
        this._createResource();
      } // If we are doing test-on-borrow see how many more resources need to be moved into test
      // to help satisfy waitingClients


      if (this._config.testOnBorrow === true) {
        // how many available resources do we need to shift into test
        var desiredNumberOfResourcesToMoveIntoTest = numWaitingClients - this._testOnBorrowResources.size;
        var actualNumberOfResourcesToMoveIntoTest = Math.min(this._availableObjects.length, desiredNumberOfResourcesToMoveIntoTest);

        for (var _i = 0; actualNumberOfResourcesToMoveIntoTest > _i; _i++) {
          this._testOnBorrow();
        }
      } // if we aren't testing-on-borrow then lets try to allocate what we can


      if (this._config.testOnBorrow === false) {
        var actualNumberOfResourcesToDispatch = Math.min(this._availableObjects.length, numWaitingClients);

        for (var _i2 = 0; actualNumberOfResourcesToDispatch > _i2; _i2++) {
          this._dispatchResource();
        }
      }
    }
    /**
     * Dispatches a pooledResource to the next waiting client (if any) else
     * puts the PooledResource back on the available list
     * @param  {PooledResource} pooledResource [description]
     * @return {Boolean}                [description]
     */

  }, {
    key: "_dispatchPooledResourceToNextWaitingClient",
    value: function _dispatchPooledResourceToNextWaitingClient(pooledResource) {
      var clientResourceRequest = this._waitingClientsQueue.dequeue();

      if (clientResourceRequest === undefined || clientResourceRequest.state !== Deferred.PENDING) {
        // While we were away either all the waiting clients timed out
        // or were somehow fulfilled. put our pooledResource back.
        this._addPooledResourceToAvailableObjects(pooledResource); // TODO: do need to trigger anything before we leave?


        return false;
      }

      var loan = new ResourceLoan(pooledResource, this._Promise);

      this._resourceLoans.set(pooledResource.obj, loan);

      pooledResource.allocate();
      clientResourceRequest.resolve(pooledResource.obj);
      return true;
    }
    /**
     * tracks on operation using given set
     * handles adding/removing from the set and resolve/rejects the value/reason
     * @param  {Promise} operation
     * @param  {Set} set       Set holding operations
     * @return {Promise}       Promise that resolves once operation has been removed from set
     */

  }, {
    key: "_trackOperation",
    value: function _trackOperation(operation, set) {
      var _this5 = this;

      set.add(operation);
      return operation.then(function (v) {
        set["delete"](operation);
        return _this5._Promise.resolve(v);
      }, function (e) {
        set["delete"](operation);
        return _this5._Promise.reject(e);
      });
    }
    /**
     * @private
     */

  }, {
    key: "_createResource",
    value: function _createResource() {
      var _this6 = this;

      // An attempt to create a resource
      var factoryPromise = this._factory.create();

      var wrappedFactoryPromise = this._Promise.resolve(factoryPromise).then(function (resource) {
        var pooledResource = new PooledResource(resource);

        _this6._allObjects.add(pooledResource);

        _this6._addPooledResourceToAvailableObjects(pooledResource);
      });

      this._trackOperation(wrappedFactoryPromise, this._factoryCreateOperations).then(function () {
        _this6._dispense(); // Stop bluebird complaining about this side-effect only handler
        // - a promise was created in a handler but was not returned from it
        // https://goo.gl/rRqMUw


        return null;
      })["catch"](function (reason) {
        _this6.emit(FACTORY_CREATE_ERROR, reason);

        _this6._dispense();
      });
    }
    /**
     * @private
     */

  }, {
    key: "_ensureMinimum",
    value: function _ensureMinimum() {
      if (this._draining === true) {
        return;
      }

      var minShortfall = this._config.min - this._count;

      for (var i = 0; i < minShortfall; i++) {
        this._createResource();
      }
    }
  }, {
    key: "_evict",
    value: function _evict() {
      var testsToRun = Math.min(this._config.numTestsPerEvictionRun, this._availableObjects.length);
      var evictionConfig = {
        softIdleTimeoutMillis: this._config.softIdleTimeoutMillis,
        idleTimeoutMillis: this._config.idleTimeoutMillis,
        min: this._config.min
      };

      for (var testsHaveRun = 0; testsHaveRun < testsToRun;) {
        var iterationResult = this._evictionIterator.next(); // Safety check incase we could get stuck in infinite loop because we
        // somehow emptied the array after checking its length.


        if (iterationResult.done === true && this._availableObjects.length < 1) {
          this._evictionIterator.reset();

          return;
        } // If this happens it should just mean we reached the end of the
        // list and can reset the cursor.


        if (iterationResult.done === true && this._availableObjects.length > 0) {
          this._evictionIterator.reset();

          continue;
        }

        var resource = iterationResult.value;

        var shouldEvict = this._evictor.evict(evictionConfig, resource, this._availableObjects.length);

        testsHaveRun++;

        if (shouldEvict === true) {
          // take it out of the _availableObjects list
          this._evictionIterator.remove();

          this._destroy(resource);
        }
      }
    }
  }, {
    key: "_scheduleEvictorRun",
    value: function _scheduleEvictorRun() {
      var _this7 = this;

      // Start eviction if set
      if (this._config.evictionRunIntervalMillis > 0) {
        // @ts-ignore
        this._scheduledEviction = setTimeout(function () {
          _this7._evict();

          _this7._scheduleEvictorRun();
        }, this._config.evictionRunIntervalMillis);
      }
    }
  }, {
    key: "_descheduleEvictorRun",
    value: function _descheduleEvictorRun() {
      if (this._scheduledEviction) {
        clearTimeout(this._scheduledEviction);
      }

      this._scheduledEviction = null;
    }
  }, {
    key: "start",
    value: function start() {
      if (this._draining === true) {
        return;
      }

      if (this._started === true) {
        return;
      }

      this._started = true;

      this._scheduleEvictorRun();

      this._ensureMinimum();
    }
    /**
     * Request a new resource. The callback will be called,
     * when a new resource is available, passing the resource to the callback.
     * TODO: should we add a seperate "acquireWithPriority" function
     *
     * @param {Number} [priority=0]
     *   Optional.  Integer between 0 and (priorityRange - 1).  Specifies the priority
     *   of the caller if there are no available resources.  Lower numbers mean higher
     *   priority.
     *
     * @returns {Promise}
     */

  }, {
    key: "acquire",
    value: function acquire(priority) {
      if (this._started === false && this._config.autostart === false) {
        this.start();
      }

      if (this._draining) {
        return this._Promise.reject(new Error("pool is draining and cannot accept work"));
      } // TODO: should we defer this check till after this event loop incase "the situation" changes in the meantime


      if (this.spareResourceCapacity < 1 && this._availableObjects.length < 1 && this._config.maxWaitingClients !== undefined && this._waitingClientsQueue.length >= this._config.maxWaitingClients) {
        return this._Promise.reject(new Error("max waitingClients count exceeded"));
      }

      var resourceRequest = new ResourceRequest(this._config.acquireTimeoutMillis, this._Promise);

      this._waitingClientsQueue.enqueue(resourceRequest, priority);

      this._dispense();

      return resourceRequest.promise;
    }
    /**
     * [use method, aquires a resource, passes the resource to a user supplied function and releases it]
     * @param  {Function} fn [a function that accepts a resource and returns a promise that resolves/rejects once it has finished using the resource]
     * @return {Promise}      [resolves once the resource is released to the pool]
     */

  }, {
    key: "use",
    value: function use(fn, priority) {
      var _this8 = this;

      return this.acquire(priority).then(function (resource) {
        return fn(resource).then(function (result) {
          _this8.release(resource);

          return result;
        }, function (err) {
          _this8.destroy(resource);

          throw err;
        });
      });
    }
    /**
     * Check if resource is currently on loan from the pool
     *
     * @param {Function} resource
     *    Resource for checking.
     *
     * @returns {Boolean}
     *  True if resource belongs to this pool and false otherwise
     */

  }, {
    key: "isBorrowedResource",
    value: function isBorrowedResource(resource) {
      return this._resourceLoans.has(resource);
    }
    /**
     * Return the resource to the pool when it is no longer required.
     *
     * @param {Object} resource
     *   The acquired object to be put back to the pool.
     */

  }, {
    key: "release",
    value: function release(resource) {
      // check for an outstanding loan
      var loan = this._resourceLoans.get(resource);

      if (loan === undefined) {
        return this._Promise.reject(new Error("Resource not currently part of this pool"));
      }

      this._resourceLoans["delete"](resource);

      loan.resolve();
      var pooledResource = loan.pooledResource;
      pooledResource.deallocate();

      this._addPooledResourceToAvailableObjects(pooledResource);

      this._dispense();

      return this._Promise.resolve();
    }
    /**
     * Request the resource to be destroyed. The factory's destroy handler
     * will also be called.
     *
     * This should be called within an acquire() block as an alternative to release().
     *
     * @param {Object} resource
     *   The acquired resource to be destoyed.
     */

  }, {
    key: "destroy",
    value: function destroy(resource) {
      // check for an outstanding loan
      var loan = this._resourceLoans.get(resource);

      if (loan === undefined) {
        return this._Promise.reject(new Error("Resource not currently part of this pool"));
      }

      this._resourceLoans["delete"](resource);

      loan.resolve();
      var pooledResource = loan.pooledResource;
      pooledResource.deallocate();

      this._destroy(pooledResource);

      this._dispense();

      return this._Promise.resolve();
    }
  }, {
    key: "_addPooledResourceToAvailableObjects",
    value: function _addPooledResourceToAvailableObjects(pooledResource) {
      pooledResource.idle();

      if (this._config.fifo === true) {
        this._availableObjects.push(pooledResource);
      } else {
        this._availableObjects.unshift(pooledResource);
      }
    }
    /**
     * Disallow any new acquire calls and let the request backlog dissapate.
     * The Pool will no longer attempt to maintain a "min" number of resources
     * and will only make new resources on demand.
     * Resolves once all resource requests are fulfilled and all resources are returned to pool and available...
     * Should probably be called "drain work"
     * @returns {Promise}
     */

  }, {
    key: "drain",
    value: function drain() {
      var _this9 = this;

      this._draining = true;
      return this.__allResourceRequestsSettled().then(function () {
        return _this9.__allResourcesReturned();
      }).then(function () {
        _this9._descheduleEvictorRun();
      });
    }
  }, {
    key: "__allResourceRequestsSettled",
    value: function __allResourceRequestsSettled() {
      if (this._waitingClientsQueue.length > 0) {
        // wait for last waiting client to be settled
        // FIXME: what if they can "resolve" out of order....?
        return reflector(this._waitingClientsQueue.tail.promise);
      }

      return this._Promise.resolve();
    } // FIXME: this is a horrific mess

  }, {
    key: "__allResourcesReturned",
    value: function __allResourcesReturned() {
      var ps = Array.from(this._resourceLoans.values()).map(function (loan) {
        return loan.promise;
      }).map(reflector);
      return this._Promise.all(ps);
    }
    /**
     * Forcibly destroys all available resources regardless of timeout.  Intended to be
     * invoked as part of a drain.  Does not prevent the creation of new
     * resources as a result of subsequent calls to acquire.
     *
     * Note that if factory.min > 0 and the pool isn't "draining", the pool will destroy all idle resources
     * in the pool, but replace them with newly created resources up to the
     * specified factory.min value.  If this is not desired, set factory.min
     * to zero before calling clear()
     *
     */

  }, {
    key: "clear",
    value: function clear() {
      var _this10 = this;

      var reflectedCreatePromises = Array.from(this._factoryCreateOperations).map(reflector); // wait for outstanding factory.create to complete

      return this._Promise.all(reflectedCreatePromises).then(function () {
        // Destroy existing resources
        // @ts-ignore
        var _iterator = _createForOfIteratorHelper(_this10._availableObjects),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var resource = _step.value;

            _this10._destroy(resource);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var reflectedDestroyPromises = Array.from(_this10._factoryDestroyOperations).map(reflector);
        return reflector(_this10._Promise.all(reflectedDestroyPromises));
      });
    }
    /**
     * Waits until the pool is ready.
     * We define ready by checking if the current resource number is at least
     * the minimum number defined.
     * @returns {Promise} that resolves when the minimum number is ready.
     */

  }, {
    key: "ready",
    value: function ready() {
      var _this11 = this;

      return new this._Promise(function (resolve) {
        var isReady = function isReady() {
          if (_this11.available >= _this11.min) {
            resolve();
          } else {
            setTimeout(isReady, 100);
          }
        };

        isReady();
      });
    }
    /**
     * How many resources are available to allocated
     * (includes resources that have not been tested and may faul validation)
     * NOTE: internal for now as the name is awful and might not be useful to anyone
     * @return {Number} number of resources the pool has to allocate
     */

  }, {
    key: "_potentiallyAllocableResourceCount",
    get: function get() {
      return this._availableObjects.length + this._testOnBorrowResources.size + this._testOnReturnResources.size + this._factoryCreateOperations.size;
    }
    /**
     * The combined count of the currently created objects and those in the
     * process of being created
     * Does NOT include resources in the process of being destroyed
     * sort of legacy...
     * @return {Number}
     */

  }, {
    key: "_count",
    get: function get() {
      return this._allObjects.size + this._factoryCreateOperations.size;
    }
    /**
     * How many more resources does the pool have room for
     * @return {Number} number of resources the pool could create before hitting any limits
     */

  }, {
    key: "spareResourceCapacity",
    get: function get() {
      return this._config.max - (this._allObjects.size + this._factoryCreateOperations.size);
    }
    /**
     * see _count above
     * @return {Number} [description]
     */

  }, {
    key: "size",
    get: function get() {
      return this._count;
    }
    /**
     * number of available resources
     * @return {Number} [description]
     */

  }, {
    key: "available",
    get: function get() {
      return this._availableObjects.length;
    }
    /**
     * number of resources that are currently acquired
     * @return {Number} [description]
     */

  }, {
    key: "borrowed",
    get: function get() {
      return this._resourceLoans.size;
    }
    /**
     * number of waiting acquire calls
     * @return {Number} [description]
     */

  }, {
    key: "pending",
    get: function get() {
      return this._waitingClientsQueue.length;
    }
    /**
     * maximum size of the pool
     * @return {Number} [description]
     */

  }, {
    key: "max",
    get: function get() {
      return this._config.max;
    }
    /**
     * minimum size of the pool
     * @return {Number} [description]
     */

  }, {
    key: "min",
    get: function get() {
      return this._config.min;
    }
  }]);

  return Pool;
}(EventEmitter);

var Pool_1 = Pool$1;

var Pool = Pool_1;
var Deque = Deque_1;
var PriorityQueue = PriorityQueue_1;
var DefaultEvictor = DefaultEvictor_1;
var genericPool = {
  Pool: Pool,
  Deque: Deque,
  PriorityQueue: PriorityQueue,
  DefaultEvictor: DefaultEvictor,
  createPool: function createPool(factory, config) {
    return new Pool(DefaultEvictor, Deque, PriorityQueue, factory, config);
  }
};

var __classPrivateFieldGet$3 = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var __classPrivateFieldSet$3 = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var _RedisClient_instances, _RedisClient_options, _RedisClient_socket, _RedisClient_queue, _RedisClient_isolationPool, _RedisClient_v4, _RedisClient_selectedDB, _RedisClient_initiateOptions, _RedisClient_initiateSocket, _RedisClient_initiateQueue, _RedisClient_legacyMode, _RedisClient_defineLegacyCommand, _RedisClient_sendCommand, _RedisClient_subscribe, _RedisClient_unsubscribe, _RedisClient_tick, _RedisClient_destroyIsolationPool;

Object.defineProperty(client, "__esModule", {
  value: true
});
var commands_1$2 = commands$6;
var socket_1 = socket;
var commands_queue_1 = commandsQueue;
var multi_command_1$2 = multiCommand$2;
var events_1$1 = require$$0;
var command_options_1 = commandOptions$1;
var commander_1$2 = commander.exports;
var generic_pool_1 = genericPool;
var errors_1$1 = errors$3;
var url_1 = require$$9;

var RedisClient = /*#__PURE__*/function (_events_1$EventEmitte) {
  _inherits(RedisClient, _events_1$EventEmitte);

  var _super = _createSuper(RedisClient);

  function RedisClient(options) {
    var _this5;

    _classCallCheck(this, RedisClient);

    _this5 = _super.call(this);

    _RedisClient_instances.add(_assertThisInitialized(_this5));

    Object.defineProperty(_assertThisInitialized(_this5), "commandOptions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: RedisClient.commandOptions
    });

    _RedisClient_options.set(_assertThisInitialized(_this5), void 0);

    _RedisClient_socket.set(_assertThisInitialized(_this5), void 0);

    _RedisClient_queue.set(_assertThisInitialized(_this5), void 0);

    _RedisClient_isolationPool.set(_assertThisInitialized(_this5), void 0);

    _RedisClient_v4.set(_assertThisInitialized(_this5), {});

    _RedisClient_selectedDB.set(_assertThisInitialized(_this5), 0);

    Object.defineProperty(_assertThisInitialized(_this5), "select", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _this5.SELECT
    });
    Object.defineProperty(_assertThisInitialized(_this5), "subscribe", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _this5.SUBSCRIBE
    });
    Object.defineProperty(_assertThisInitialized(_this5), "pSubscribe", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _this5.PSUBSCRIBE
    });
    Object.defineProperty(_assertThisInitialized(_this5), "unsubscribe", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _this5.UNSUBSCRIBE
    });
    Object.defineProperty(_assertThisInitialized(_this5), "pUnsubscribe", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _this5.PUNSUBSCRIBE
    });
    Object.defineProperty(_assertThisInitialized(_this5), "quit", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _this5.QUIT
    });

    __classPrivateFieldSet$3(_assertThisInitialized(_this5), _RedisClient_options, __classPrivateFieldGet$3(_assertThisInitialized(_this5), _RedisClient_instances, "m", _RedisClient_initiateOptions).call(_assertThisInitialized(_this5), options), "f");

    __classPrivateFieldSet$3(_assertThisInitialized(_this5), _RedisClient_socket, __classPrivateFieldGet$3(_assertThisInitialized(_this5), _RedisClient_instances, "m", _RedisClient_initiateSocket).call(_assertThisInitialized(_this5)), "f");

    __classPrivateFieldSet$3(_assertThisInitialized(_this5), _RedisClient_queue, __classPrivateFieldGet$3(_assertThisInitialized(_this5), _RedisClient_instances, "m", _RedisClient_initiateQueue).call(_assertThisInitialized(_this5)), "f");

    __classPrivateFieldSet$3(_assertThisInitialized(_this5), _RedisClient_isolationPool, (0, generic_pool_1.createPool)({
      create: function () {
        var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var duplicate;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  duplicate = _this5.duplicate({
                    isolationPoolOptions: undefined
                  });
                  _context.next = 3;
                  return duplicate.connect();

                case 3:
                  return _context.abrupt("return", duplicate);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function create() {
          return _create.apply(this, arguments);
        }

        return create;
      }(),
      destroy: function destroy(client) {
        return client.disconnect();
      }
    }, options === null || options === void 0 ? void 0 : options.isolationPoolOptions), "f");

    __classPrivateFieldGet$3(_assertThisInitialized(_this5), _RedisClient_instances, "m", _RedisClient_legacyMode).call(_assertThisInitialized(_this5));

    return _this5;
  }

  _createClass(RedisClient, [{
    key: "options",
    get: function get() {
      return __classPrivateFieldGet$3(this, _RedisClient_options, "f");
    }
  }, {
    key: "isOpen",
    get: function get() {
      return __classPrivateFieldGet$3(this, _RedisClient_socket, "f").isOpen;
    }
  }, {
    key: "v4",
    get: function get() {
      var _a;

      if (!((_a = __classPrivateFieldGet$3(this, _RedisClient_options, "f")) === null || _a === void 0 ? void 0 : _a.legacyMode)) {
        throw new Error('the client is not in "legacy mode"');
      }

      return __classPrivateFieldGet$3(this, _RedisClient_v4, "f");
    }
  }, {
    key: "duplicate",
    value: function duplicate(overrides) {
      return new (Object.getPrototypeOf(this).constructor)(_objectSpread2(_objectSpread2({}, __classPrivateFieldGet$3(this, _RedisClient_options, "f")), overrides));
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __classPrivateFieldGet$3(this, _RedisClient_socket, "f").connect();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "commandsExecutor",
    value: function () {
      var _commandsExecutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(command, args) {
        var _ref, redisArgs, options;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref = (0, commander_1$2.transformCommandArguments)(command, args), redisArgs = _ref.args, options = _ref.options;
                _context3.t0 = (commander_1$2.transformCommandReply);
                _context3.t1 = command;
                _context3.next = 5;
                return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);

              case 5:
                _context3.t2 = _context3.sent;
                _context3.t3 = redisArgs.preserve;
                return _context3.abrupt("return", (0, _context3.t0)(_context3.t1, _context3.t2, _context3.t3));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function commandsExecutor(_x, _x2) {
        return _commandsExecutor.apply(this, arguments);
      }

      return commandsExecutor;
    }()
  }, {
    key: "sendCommand",
    value: function sendCommand(args, options) {
      return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, args, options);
    }
  }, {
    key: "scriptsExecutor",
    value: function () {
      var _scriptsExecutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(script, args) {
        var _ref2, redisArgs, options;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref2 = (0, commander_1$2.transformCommandArguments)(script, args), redisArgs = _ref2.args, options = _ref2.options;
                _context4.t0 = (commander_1$2.transformCommandReply);
                _context4.t1 = script;
                _context4.next = 5;
                return this.executeScript(script, redisArgs, options);

              case 5:
                _context4.t2 = _context4.sent;
                _context4.t3 = redisArgs.preserve;
                return _context4.abrupt("return", (0, _context4.t0)(_context4.t1, _context4.t2, _context4.t3));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function scriptsExecutor(_x3, _x4) {
        return _scriptsExecutor.apply(this, arguments);
      }

      return scriptsExecutor;
    }()
  }, {
    key: "executeScript",
    value: function () {
      var _executeScript = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(script, args, options) {
        var _a, _b;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ['EVALSHA', script.SHA1, script.NUMBER_OF_KEYS.toString()].concat(_toConsumableArray(args)), options);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);

                if ((_b = (_a = _context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) === null || _a === void 0 ? void 0 : _a.startsWith) === null || _b === void 0 ? void 0 : _b.call(_a, 'NOSCRIPT')) {
                  _context5.next = 10;
                  break;
                }

                throw _context5.t0;

              case 10:
                _context5.next = 12;
                return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ['EVAL', script.SCRIPT, script.NUMBER_OF_KEYS.toString()].concat(_toConsumableArray(args)), options);

              case 12:
                return _context5.abrupt("return", _context5.sent);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 6]]);
      }));

      function executeScript(_x5, _x6, _x7) {
        return _executeScript.apply(this, arguments);
      }

      return executeScript;
    }()
  }, {
    key: "SELECT",
    value: function () {
      var _SELECT = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(options, db) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(0, command_options_1.isCommandOptions)(options)) {
                  db = options;
                  options = null;
                }

                _context6.next = 3;
                return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ['SELECT', db.toString()], options);

              case 3:
                __classPrivateFieldSet$3(this, _RedisClient_selectedDB, db, "f");

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function SELECT(_x8, _x9) {
        return _SELECT.apply(this, arguments);
      }

      return SELECT;
    }()
  }, {
    key: "SUBSCRIBE",
    value: function SUBSCRIBE(channels, listener, bufferMode) {
      return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_subscribe).call(this, commands_queue_1.PubSubSubscribeCommands.SUBSCRIBE, channels, listener, bufferMode);
    }
  }, {
    key: "PSUBSCRIBE",
    value: function PSUBSCRIBE(patterns, listener, bufferMode) {
      return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_subscribe).call(this, commands_queue_1.PubSubSubscribeCommands.PSUBSCRIBE, patterns, listener, bufferMode);
    }
  }, {
    key: "UNSUBSCRIBE",
    value: function UNSUBSCRIBE(channels, listener, bufferMode) {
      return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_unsubscribe).call(this, commands_queue_1.PubSubUnsubscribeCommands.UNSUBSCRIBE, channels, listener, bufferMode);
    }
  }, {
    key: "PUNSUBSCRIBE",
    value: function PUNSUBSCRIBE(patterns, listener, bufferMode) {
      return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_unsubscribe).call(this, commands_queue_1.PubSubUnsubscribeCommands.PUNSUBSCRIBE, patterns, listener, bufferMode);
    }
  }, {
    key: "QUIT",
    value: function QUIT() {
      var _this6 = this;

      return __classPrivateFieldGet$3(this, _RedisClient_socket, "f").quit(function () {
        var quitPromise = __classPrivateFieldGet$3(_this6, _RedisClient_queue, "f").addCommand(['QUIT'], {
          ignorePubSubMode: true
        });

        __classPrivateFieldGet$3(_this6, _RedisClient_instances, "m", _RedisClient_tick).call(_this6);

        return Promise.all([quitPromise, __classPrivateFieldGet$3(_this6, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(_this6)]);
      });
    }
  }, {
    key: "executeIsolated",
    value: function executeIsolated(fn) {
      return __classPrivateFieldGet$3(this, _RedisClient_isolationPool, "f").use(fn);
    }
  }, {
    key: "multi",
    value: function multi() {
      var _a;

      return new this.Multi(this.multiExecutor.bind(this), (_a = __classPrivateFieldGet$3(this, _RedisClient_options, "f")) === null || _a === void 0 ? void 0 : _a.legacyMode);
    }
  }, {
    key: "multiExecutor",
    value: function multiExecutor(commands, chainId) {
      var _this7 = this;

      var promise = Promise.all(commands.map(function (_ref3) {
        var args = _ref3.args;
        return __classPrivateFieldGet$3(_this7, _RedisClient_queue, "f").addCommand(args, RedisClient.commandOptions({
          chainId: chainId
        }));
      }));

      __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);

      return promise;
    }
  }, {
    key: "scanIterator",
    value: function scanIterator(options) {
      var _this = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var cursor, reply, _iterator, _step, key;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                cursor = 0;

              case 1:
                _context7.next = 3;
                return _awaitAsyncGenerator(_this.scan(cursor, options));

              case 3:
                reply = _context7.sent;
                cursor = reply.cursor;
                _iterator = _createForOfIteratorHelper(reply.keys);
                _context7.prev = 6;

                _iterator.s();

              case 8:
                if ((_step = _iterator.n()).done) {
                  _context7.next = 14;
                  break;
                }

                key = _step.value;
                _context7.next = 12;
                return key;

              case 12:
                _context7.next = 8;
                break;

              case 14:
                _context7.next = 19;
                break;

              case 16:
                _context7.prev = 16;
                _context7.t0 = _context7["catch"](6);

                _iterator.e(_context7.t0);

              case 19:
                _context7.prev = 19;

                _iterator.f();

                return _context7.finish(19);

              case 22:
                if (cursor !== 0) {
                  _context7.next = 1;
                  break;
                }

              case 23:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[6, 16, 19, 22]]);
      }))();
    }
  }, {
    key: "hScanIterator",
    value: function hScanIterator(key, options) {
      var _this2 = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var cursor, reply, _iterator2, _step2, tuple;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                cursor = 0;

              case 1:
                _context8.next = 3;
                return _awaitAsyncGenerator(_this2.hScan(key, cursor, options));

              case 3:
                reply = _context8.sent;
                cursor = reply.cursor;
                _iterator2 = _createForOfIteratorHelper(reply.tuples);
                _context8.prev = 6;

                _iterator2.s();

              case 8:
                if ((_step2 = _iterator2.n()).done) {
                  _context8.next = 14;
                  break;
                }

                tuple = _step2.value;
                _context8.next = 12;
                return tuple;

              case 12:
                _context8.next = 8;
                break;

              case 14:
                _context8.next = 19;
                break;

              case 16:
                _context8.prev = 16;
                _context8.t0 = _context8["catch"](6);

                _iterator2.e(_context8.t0);

              case 19:
                _context8.prev = 19;

                _iterator2.f();

                return _context8.finish(19);

              case 22:
                if (cursor !== 0) {
                  _context8.next = 1;
                  break;
                }

              case 23:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[6, 16, 19, 22]]);
      }))();
    }
  }, {
    key: "sScanIterator",
    value: function sScanIterator(key, options) {
      var _this3 = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var cursor, reply, _iterator3, _step3, member;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                cursor = 0;

              case 1:
                _context9.next = 3;
                return _awaitAsyncGenerator(_this3.sScan(key, cursor, options));

              case 3:
                reply = _context9.sent;
                cursor = reply.cursor;
                _iterator3 = _createForOfIteratorHelper(reply.members);
                _context9.prev = 6;

                _iterator3.s();

              case 8:
                if ((_step3 = _iterator3.n()).done) {
                  _context9.next = 14;
                  break;
                }

                member = _step3.value;
                _context9.next = 12;
                return member;

              case 12:
                _context9.next = 8;
                break;

              case 14:
                _context9.next = 19;
                break;

              case 16:
                _context9.prev = 16;
                _context9.t0 = _context9["catch"](6);

                _iterator3.e(_context9.t0);

              case 19:
                _context9.prev = 19;

                _iterator3.f();

                return _context9.finish(19);

              case 22:
                if (cursor !== 0) {
                  _context9.next = 1;
                  break;
                }

              case 23:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[6, 16, 19, 22]]);
      }))();
    }
  }, {
    key: "zScanIterator",
    value: function zScanIterator(key, options) {
      var _this4 = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var cursor, reply, _iterator4, _step4, member;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                cursor = 0;

              case 1:
                _context10.next = 3;
                return _awaitAsyncGenerator(_this4.zScan(key, cursor, options));

              case 3:
                reply = _context10.sent;
                cursor = reply.cursor;
                _iterator4 = _createForOfIteratorHelper(reply.members);
                _context10.prev = 6;

                _iterator4.s();

              case 8:
                if ((_step4 = _iterator4.n()).done) {
                  _context10.next = 14;
                  break;
                }

                member = _step4.value;
                _context10.next = 12;
                return member;

              case 12:
                _context10.next = 8;
                break;

              case 14:
                _context10.next = 19;
                break;

              case 16:
                _context10.prev = 16;
                _context10.t0 = _context10["catch"](6);

                _iterator4.e(_context10.t0);

              case 19:
                _context10.prev = 19;

                _iterator4.f();

                return _context10.finish(19);

              case 22:
                if (cursor !== 0) {
                  _context10.next = 1;
                  break;
                }

              case 23:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[6, 16, 19, 22]]);
      }))();
    }
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                __classPrivateFieldGet$3(this, _RedisClient_queue, "f").flushAll(new errors_1$1.DisconnectsClientError());

                __classPrivateFieldGet$3(this, _RedisClient_socket, "f").disconnect();

                _context11.next = 4;
                return __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function disconnect() {
        return _disconnect.apply(this, arguments);
      }

      return disconnect;
    }()
  }], [{
    key: "commandOptions",
    value: function commandOptions(options) {
      return (0, command_options_1.commandOptions)(options);
    }
  }, {
    key: "extend",
    value: function extend(plugins) {
      var Client = (0, commander_1$2.extendWithModulesAndScripts)({
        BaseClass: RedisClient,
        modules: plugins === null || plugins === void 0 ? void 0 : plugins.modules,
        modulesCommandsExecutor: RedisClient.prototype.commandsExecutor,
        scripts: plugins === null || plugins === void 0 ? void 0 : plugins.scripts,
        scriptsExecutor: RedisClient.prototype.scriptsExecutor
      });

      if (Client !== RedisClient) {
        Client.prototype.Multi = multi_command_1$2["default"].extend(plugins);
      }

      return Client;
    }
  }, {
    key: "create",
    value: function create(options) {
      return new (RedisClient.extend(options))(options);
    }
  }, {
    key: "parseURL",
    value: function parseURL(url) {
      // https://www.iana.org/assignments/uri-schemes/prov/redis
      var _url_1$URL = new url_1.URL(url),
          hostname = _url_1$URL.hostname,
          port = _url_1$URL.port,
          protocol = _url_1$URL.protocol,
          username = _url_1$URL.username,
          password = _url_1$URL.password,
          pathname = _url_1$URL.pathname,
          parsed = {
        socket: {
          host: hostname
        }
      };

      if (protocol === 'rediss:') {
        parsed.socket.tls = true;
      } else if (protocol !== 'redis:') {
        throw new TypeError('Invalid protocol');
      }

      if (port) {
        parsed.socket.port = Number(port);
      }

      if (username) {
        parsed.username = decodeURIComponent(username);
      }

      if (password) {
        parsed.password = decodeURIComponent(password);
      }

      if (pathname.length > 1) {
        var database = Number(pathname.substring(1));

        if (isNaN(database)) {
          throw new TypeError('Invalid pathname');
        }

        parsed.database = database;
      }

      return parsed;
    }
  }]);

  return RedisClient;
}(events_1$1.EventEmitter);

client["default"] = RedisClient;

_RedisClient_options = new WeakMap(), _RedisClient_socket = new WeakMap(), _RedisClient_queue = new WeakMap(), _RedisClient_isolationPool = new WeakMap(), _RedisClient_v4 = new WeakMap(), _RedisClient_selectedDB = new WeakMap(), _RedisClient_instances = new WeakSet(), _RedisClient_initiateOptions = function _RedisClient_initiateOptions(options) {
  if (options === null || options === void 0 ? void 0 : options.url) {
    var parsed = RedisClient.parseURL(options.url);

    if (options.socket) {
      parsed.socket = Object.assign(options.socket, parsed.socket);
    }

    Object.assign(options, parsed);
  }

  if (options === null || options === void 0 ? void 0 : options.database) {
    __classPrivateFieldSet$3(this, _RedisClient_selectedDB, options.database, "f");
  }

  return options;
}, _RedisClient_initiateSocket = function _RedisClient_initiateSocket() {
  var _this8 = this;

  var _a;

  var socketInitiator = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      var _a, _b, _c, _d, _e, promises, resubscribePromise;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              promises = [];

              if (__classPrivateFieldGet$3(_this8, _RedisClient_selectedDB, "f") !== 0) {
                promises.push(__classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").addCommand(['SELECT', __classPrivateFieldGet$3(_this8, _RedisClient_selectedDB, "f").toString()], {
                  asap: true
                }));
              }

              if ((_a = __classPrivateFieldGet$3(_this8, _RedisClient_options, "f")) === null || _a === void 0 ? void 0 : _a.readonly) {
                promises.push(__classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").addCommand(commands_1$2["default"].READONLY.transformArguments(), {
                  asap: true
                }));
              }

              if ((_b = __classPrivateFieldGet$3(_this8, _RedisClient_options, "f")) === null || _b === void 0 ? void 0 : _b.name) {
                promises.push(__classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").addCommand(commands_1$2["default"].CLIENT_SETNAME.transformArguments(__classPrivateFieldGet$3(_this8, _RedisClient_options, "f").name), {
                  asap: true
                }));
              }

              if (((_c = __classPrivateFieldGet$3(_this8, _RedisClient_options, "f")) === null || _c === void 0 ? void 0 : _c.username) || ((_d = __classPrivateFieldGet$3(_this8, _RedisClient_options, "f")) === null || _d === void 0 ? void 0 : _d.password)) {
                promises.push(__classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").addCommand(commands_1$2["default"].AUTH.transformArguments({
                  username: __classPrivateFieldGet$3(_this8, _RedisClient_options, "f").username,
                  password: (_e = __classPrivateFieldGet$3(_this8, _RedisClient_options, "f").password) !== null && _e !== void 0 ? _e : ''
                }), {
                  asap: true
                })["catch"](function (err) {
                  throw new errors_1$1.AuthError(err.message);
                }));
              }

              resubscribePromise = __classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").resubscribe();

              if (resubscribePromise) {
                promises.push(resubscribePromise);
              }

              if (!promises.length) {
                _context12.next = 11;
                break;
              }

              __classPrivateFieldGet$3(_this8, _RedisClient_instances, "m", _RedisClient_tick).call(_this8, true);

              _context12.next = 11;
              return Promise.all(promises);

            case 11:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function socketInitiator() {
      return _ref4.apply(this, arguments);
    };
  }();

  return new socket_1["default"](socketInitiator, (_a = __classPrivateFieldGet$3(this, _RedisClient_options, "f")) === null || _a === void 0 ? void 0 : _a.socket).on('data', function (data) {
    return __classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").parseResponse(data);
  }).on('error', function (err) {
    var _a;

    _this8.emit('error', err);

    if (__classPrivateFieldGet$3(_this8, _RedisClient_socket, "f").isOpen && !((_a = __classPrivateFieldGet$3(_this8, _RedisClient_options, "f")) === null || _a === void 0 ? void 0 : _a.disableOfflineQueue)) {
      __classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").flushWaitingForReply(err);
    } else {
      __classPrivateFieldGet$3(_this8, _RedisClient_queue, "f").flushAll(err);
    }
  }).on('connect', function () {
    return _this8.emit('connect');
  }).on('ready', function () {
    _this8.emit('ready');

    __classPrivateFieldGet$3(_this8, _RedisClient_instances, "m", _RedisClient_tick).call(_this8);
  }).on('reconnecting', function () {
    return _this8.emit('reconnecting');
  }).on('drain', function () {
    return __classPrivateFieldGet$3(_this8, _RedisClient_instances, "m", _RedisClient_tick).call(_this8);
  }).on('end', function () {
    return _this8.emit('end');
  });
}, _RedisClient_initiateQueue = function _RedisClient_initiateQueue() {
  var _a;

  return new commands_queue_1["default"]((_a = __classPrivateFieldGet$3(this, _RedisClient_options, "f")) === null || _a === void 0 ? void 0 : _a.commandsQueueMaxLength);
}, _RedisClient_legacyMode = function _RedisClient_legacyMode() {
  var _this9 = this;

  var _a;

  if (!((_a = __classPrivateFieldGet$3(this, _RedisClient_options, "f")) === null || _a === void 0 ? void 0 : _a.legacyMode)) return;
  __classPrivateFieldGet$3(this, _RedisClient_v4, "f").sendCommand = __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_sendCommand).bind(this);

  this.sendCommand = function () {
    var callback;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[args.length - 1] === 'function') {
      callback = args.pop();
    }

    __classPrivateFieldGet$3(_this9, _RedisClient_instances, "m", _RedisClient_sendCommand).call(_this9, args.flat()).then(function (reply) {
      if (!callback) return; // https://github.com/NodeRedis/node-redis#commands:~:text=minimal%20parsing

      callback(null, reply);
    })["catch"](function (err) {
      if (!callback) {
        _this9.emit('error', err);

        return;
      }

      callback(err);
    });
  };

  for (var _i = 0, _Object$keys = Object.keys(commands_1$2["default"]); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];

    __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, name);
  }

  for (var _i2 = 0, _Object$keys2 = Object.keys(commands_1$2["default"]); _i2 < _Object$keys2.length; _i2++) {
    var _name = _Object$keys2[_i2];
    this[_name.toLowerCase()] = this[_name];
  } // hard coded commands


  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'SELECT');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'select');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'SUBSCRIBE');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'subscribe');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'PSUBSCRIBE');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'pSubscribe');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'UNSUBSCRIBE');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'unsubscribe');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'PUNSUBSCRIBE');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'pUnsubscribe');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'QUIT');

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'quit');
}, _RedisClient_defineLegacyCommand = function _RedisClient_defineLegacyCommand(name) {
  var _this10 = this;

  __classPrivateFieldGet$3(this, _RedisClient_v4, "f")[name] = this[name].bind(this);

  this[name] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _this10.sendCommand.apply(_this10, [name].concat(args));
  };
}, _RedisClient_sendCommand = function _RedisClient_sendCommand(args, options) {
  if (!__classPrivateFieldGet$3(this, _RedisClient_socket, "f").isOpen) {
    return Promise.reject(new errors_1$1.ClientClosedError());
  }

  if (options === null || options === void 0 ? void 0 : options.isolated) {
    return this.executeIsolated(function (isolatedClient) {
      return isolatedClient.sendCommand(args, _objectSpread2(_objectSpread2({}, options), {}, {
        isolated: false
      }));
    });
  }

  var promise = __classPrivateFieldGet$3(this, _RedisClient_queue, "f").addCommand(args, options);

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);

  return promise;
}, _RedisClient_subscribe = function _RedisClient_subscribe(command, channels, listener, bufferMode) {
  var promise = __classPrivateFieldGet$3(this, _RedisClient_queue, "f").subscribe(command, channels, listener, bufferMode);

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);

  return promise;
}, _RedisClient_unsubscribe = function _RedisClient_unsubscribe(command, channels, listener, bufferMode) {
  var promise = __classPrivateFieldGet$3(this, _RedisClient_queue, "f").unsubscribe(command, channels, listener, bufferMode);

  __classPrivateFieldGet$3(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);

  return promise;
}, _RedisClient_tick = function _RedisClient_tick() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (__classPrivateFieldGet$3(this, _RedisClient_socket, "f").writableNeedDrain || !force && !__classPrivateFieldGet$3(this, _RedisClient_socket, "f").isReady) {
    return;
  }

  __classPrivateFieldGet$3(this, _RedisClient_socket, "f").cork();

  while (!__classPrivateFieldGet$3(this, _RedisClient_socket, "f").writableNeedDrain) {
    var args = __classPrivateFieldGet$3(this, _RedisClient_queue, "f").getCommandToSend();

    if (args === undefined) break;

    __classPrivateFieldGet$3(this, _RedisClient_socket, "f").writeCommand(args);
  }
}, _RedisClient_destroyIsolationPool = /*#__PURE__*/function () {
  var _RedisClient_destroyIsolationPool2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return __classPrivateFieldGet$3(this, _RedisClient_isolationPool, "f").drain();

          case 2:
            _context13.next = 4;
            return __classPrivateFieldGet$3(this, _RedisClient_isolationPool, "f").clear();

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  function _RedisClient_destroyIsolationPool() {
    return _RedisClient_destroyIsolationPool2.apply(this, arguments);
  }

  return _RedisClient_destroyIsolationPool;
}();
(0, commander_1$2.extendWithCommands)({
  BaseClass: RedisClient,
  commands: commands_1$2["default"],
  executor: RedisClient.prototype.commandsExecutor
});
RedisClient.prototype.Multi = multi_command_1$2["default"];

var cluster = {};

var clusterSlots = {};

var lib = {exports: {}};

/*
 * Copyright 2001-2010 Georges Menie (www.menie.org)
 * Copyright 2010 Salvatore Sanfilippo (adapted to Redis coding style)
 * Copyright 2015 Zihua Li (http://zihua.li) (ported to JavaScript)
 * Copyright 2016 Mike Diarmid (http://github.com/salakar) (re-write for performance, ~700% perf inc)
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the University of California, Berkeley nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/* CRC16 implementation according to CCITT standards.
 *
 * Note by @antirez: this is actually the XMODEM CRC 16 algorithm, using the
 * following parameters:
 *
 * Name                       : "XMODEM", also known as "ZMODEM", "CRC-16/ACORN"
 * Width                      : 16 bit
 * Poly                       : 1021 (That is actually x^16 + x^12 + x^5 + 1)
 * Initialization             : 0000
 * Reflect Input byte         : False
 * Reflect Output CRC         : False
 * Xor constant to output CRC : 0000
 * Output for "123456789"     : 31C3
 */

var lookup = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6, 0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d, 0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823, 0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a, 0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70, 0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d, 0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634, 0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a, 0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1, 0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];
/**
 * Convert a string to a UTF8 array - faster than via buffer
 * @param str
 * @returns {Array}
 */

var toUTF8Array = function toUTF8Array(str) {
  var _char;

  var i = 0;
  var p = 0;
  var utf8 = [];
  var len = str.length;

  for (; i < len; i++) {
    _char = str.charCodeAt(i);

    if (_char < 128) {
      utf8[p++] = _char;
    } else if (_char < 2048) {
      utf8[p++] = _char >> 6 | 192;
      utf8[p++] = _char & 63 | 128;
    } else if ((_char & 0xFC00) === 0xD800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
      _char = 0x10000 + ((_char & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
      utf8[p++] = _char >> 18 | 240;
      utf8[p++] = _char >> 12 & 63 | 128;
      utf8[p++] = _char >> 6 & 63 | 128;
      utf8[p++] = _char & 63 | 128;
    } else {
      utf8[p++] = _char >> 12 | 224;
      utf8[p++] = _char >> 6 & 63 | 128;
      utf8[p++] = _char & 63 | 128;
    }
  }

  return utf8;
};
/**
 * Convert a string into a redis slot hash.
 * @param str
 * @returns {number}
 */


var generate = lib.exports = function generate(str) {
  var _char2;

  var i = 0;
  var start = -1;
  var result = 0;
  var resultHash = 0;
  var utf8 = typeof str === 'string' ? toUTF8Array(str) : str;
  var len = utf8.length;

  while (i < len) {
    _char2 = utf8[i++];

    if (start === -1) {
      if (_char2 === 0x7B) {
        start = i;
      }
    } else if (_char2 !== 0x7D) {
      resultHash = lookup[(_char2 ^ resultHash >> 8) & 0xFF] ^ resultHash << 8;
    } else if (i - 1 !== start) {
      return resultHash & 0x3FFF;
    }

    result = lookup[(_char2 ^ result >> 8) & 0xFF] ^ result << 8;
  }

  return result & 0x3FFF;
};
/**
 * Convert an array of multiple strings into a redis slot hash.
 * Returns -1 if one of the keys is not for the same slot as the others
 * @param keys
 * @returns {number}
 */


lib.exports.generateMulti = function generateMulti(keys) {
  var i = 1;
  var len = keys.length;
  var base = generate(keys[0]);

  while (i < len) {
    if (generate(keys[i++]) !== base) return -1;
  }

  return base;
};

var __classPrivateFieldSet$2 = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet$2 = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _RedisClusterSlots_instances, _RedisClusterSlots_options, _RedisClusterSlots_Client, _RedisClusterSlots_onError, _RedisClusterSlots_nodeByAddress, _RedisClusterSlots_slots, _RedisClusterSlots_discoverNodes, _RedisClusterSlots_runningRediscoverPromise, _RedisClusterSlots_rediscover, _RedisClusterSlots_reset, _RedisClusterSlots_clientOptionsDefaults, _RedisClusterSlots_initiateClient, _RedisClusterSlots_getNodeAddress, _RedisClusterSlots_initiateClientForNode, _RedisClusterSlots_slotClientIterator, _RedisClusterSlots_getSlotClient, _RedisClusterSlots_randomClientIterator, _RedisClusterSlots_getRandomClient, _RedisClusterSlots_destroy;

Object.defineProperty(clusterSlots, "__esModule", {
  value: true
});
var client_1 = client;
var errors_1 = errors$3; // We need to use 'require', because it's not possible with Typescript to import
// function that are exported as 'module.exports = function`, without esModuleInterop
// set to true.

var calculateSlot = lib.exports;

var RedisClusterSlots = /*#__PURE__*/function () {
  function RedisClusterSlots(options, onError) {
    _classCallCheck(this, RedisClusterSlots);

    _RedisClusterSlots_instances.add(this);

    _RedisClusterSlots_options.set(this, void 0);

    _RedisClusterSlots_Client.set(this, void 0);

    _RedisClusterSlots_onError.set(this, void 0);

    _RedisClusterSlots_nodeByAddress.set(this, new Map());

    _RedisClusterSlots_slots.set(this, []);

    _RedisClusterSlots_runningRediscoverPromise.set(this, void 0);

    _RedisClusterSlots_randomClientIterator.set(this, void 0);

    __classPrivateFieldSet$2(this, _RedisClusterSlots_options, options, "f");

    __classPrivateFieldSet$2(this, _RedisClusterSlots_Client, client_1["default"].extend(options), "f");

    __classPrivateFieldSet$2(this, _RedisClusterSlots_onError, onError, "f");
  }

  _createClass(RedisClusterSlots, [{
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _iterator, _step, rootNode;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(__classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").rootNodes);
                _context.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context.next = 11;
                  break;
                }

                rootNode = _step.value;
                _context.next = 7;
                return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverNodes).call(this, rootNode);

              case 7:
                if (!_context.sent) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                _context.next = 3;
                break;

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);

                _iterator.e(_context.t0);

              case 16:
                _context.prev = 16;

                _iterator.f();

                return _context.finish(16);

              case 19:
                throw new errors_1.RootNodesUnavailableError();

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13, 16, 19]]);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "rediscover",
    value: function () {
      var _rediscover = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(startWith) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!__classPrivateFieldGet$2(this, _RedisClusterSlots_runningRediscoverPromise, "f")) {
                  __classPrivateFieldSet$2(this, _RedisClusterSlots_runningRediscoverPromise, __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_rediscover).call(this, startWith)["finally"](function () {
                    return __classPrivateFieldSet$2(_this, _RedisClusterSlots_runningRediscoverPromise, undefined, "f");
                  }), "f");
                }

                return _context2.abrupt("return", __classPrivateFieldGet$2(this, _RedisClusterSlots_runningRediscoverPromise, "f"));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function rediscover(_x) {
        return _rediscover.apply(this, arguments);
      }

      return rediscover;
    }()
  }, {
    key: "getSlotMaster",
    value: function getSlotMaster(slot) {
      return __classPrivateFieldGet$2(this, _RedisClusterSlots_slots, "f")[slot].master;
    }
  }, {
    key: "getClient",
    value: function getClient(firstKey, isReadonly) {
      if (!firstKey) {
        return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getRandomClient).call(this);
      }

      var slot = calculateSlot(firstKey);

      if (!isReadonly || !__classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").useReplicas) {
        return this.getSlotMaster(slot).client;
      }

      return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getSlotClient).call(this, slot);
    }
  }, {
    key: "getMasters",
    value: function getMasters() {
      var _a;

      var masters = [];

      var _iterator2 = _createForOfIteratorHelper(__classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").values()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var node = _step2.value;
          if ((_a = node.client.options) === null || _a === void 0 ? void 0 : _a.readonly) continue;
          masters.push(node);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return masters;
    }
  }, {
    key: "getNodeByAddress",
    value: function getNodeByAddress(address) {
      var mappedAddress = __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getNodeAddress).call(this, address);

      return __classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").get(mappedAddress ? "".concat(mappedAddress.host, ":").concat(mappedAddress.port) : address);
    }
  }, {
    key: "quit",
    value: function quit() {
      return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, function (client) {
        return client.quit();
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, function (client) {
        return client.disconnect();
      });
    }
  }]);

  return RedisClusterSlots;
}();

clusterSlots["default"] = RedisClusterSlots;

_RedisClusterSlots_options = new WeakMap(), _RedisClusterSlots_Client = new WeakMap(), _RedisClusterSlots_onError = new WeakMap(), _RedisClusterSlots_nodeByAddress = new WeakMap(), _RedisClusterSlots_slots = new WeakMap(), _RedisClusterSlots_runningRediscoverPromise = new WeakMap(), _RedisClusterSlots_randomClientIterator = new WeakMap(), _RedisClusterSlots_instances = new WeakSet(), _RedisClusterSlots_discoverNodes = /*#__PURE__*/function () {
  var _RedisClusterSlots_discoverNodes2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(clientOptions) {
    var client;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            client = __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClient).call(this, clientOptions);
            _context3.next = 3;
            return client.connect();

          case 3:
            _context3.prev = 3;
            _context3.t0 = __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_reset);
            _context3.t1 = this;
            _context3.next = 8;
            return client.clusterNodes();

          case 8:
            _context3.t2 = _context3.sent;
            _context3.next = 11;
            return _context3.t0.call.call(_context3.t0, _context3.t1, _context3.t2);

          case 11:
            return _context3.abrupt("return", true);

          case 14:
            _context3.prev = 14;
            _context3.t3 = _context3["catch"](3);

            __classPrivateFieldGet$2(this, _RedisClusterSlots_onError, "f").call(this, _context3.t3);

            return _context3.abrupt("return", false);

          case 18:
            _context3.prev = 18;

            if (!client.isOpen) {
              _context3.next = 22;
              break;
            }

            _context3.next = 22;
            return client.disconnect();

          case 22:
            return _context3.finish(18);

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[3, 14, 18, 23]]);
  }));

  function _RedisClusterSlots_discoverNodes(_x2) {
    return _RedisClusterSlots_discoverNodes2.apply(this, arguments);
  }

  return _RedisClusterSlots_discoverNodes;
}(), _RedisClusterSlots_rediscover = /*#__PURE__*/function () {
  var _RedisClusterSlots_rediscover2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(startWith) {
    var _iterator3, _step3, client;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverNodes).call(this, startWith.options);

          case 2:
            if (!_context4.sent) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return");

          case 4:
            _iterator3 = _createForOfIteratorHelper(__classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").values());
            _context4.prev = 5;

            _iterator3.s();

          case 7:
            if ((_step3 = _iterator3.n()).done) {
              _context4.next = 17;
              break;
            }

            client = _step3.value.client;

            if (!(client === startWith)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("continue", 15);

          case 11:
            _context4.next = 13;
            return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverNodes).call(this, client.options);

          case 13:
            if (!_context4.sent) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt("return");

          case 15:
            _context4.next = 7;
            break;

          case 17:
            _context4.next = 22;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](5);

            _iterator3.e(_context4.t0);

          case 22:
            _context4.prev = 22;

            _iterator3.f();

            return _context4.finish(22);

          case 25:
            throw new Error('None of the cluster nodes is available');

          case 26:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[5, 19, 22, 25]]);
  }));

  function _RedisClusterSlots_rediscover(_x3) {
    return _RedisClusterSlots_rediscover2.apply(this, arguments);
  }

  return _RedisClusterSlots_rediscover;
}(), _RedisClusterSlots_reset = /*#__PURE__*/function () {
  var _RedisClusterSlots_reset2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(masters) {
    var _this2 = this;

    var promises, clientsInUse, _iterator4, _step4, master, slot, _iterator6, _step6, _step6$value, from, to, i, _iterator5, _step5, _step5$value, address, client;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // Override this.#slots and add not existing clients to this.#nodeByAddress
            promises = [], clientsInUse = new Set();
            _iterator4 = _createForOfIteratorHelper(masters);

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                master = _step4.value;
                slot = {
                  master: __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClientForNode).call(this, master, false, clientsInUse, promises),
                  replicas: __classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").useReplicas ? master.replicas.map(function (replica) {
                    return __classPrivateFieldGet$2(_this2, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClientForNode).call(_this2, replica, true, clientsInUse, promises);
                  }) : [],
                  clientIterator: undefined // will be initiated in use

                };
                _iterator6 = _createForOfIteratorHelper(master.slots);

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    _step6$value = _step6.value, from = _step6$value.from, to = _step6$value.to;

                    for (i = from; i <= to; i++) {
                      __classPrivateFieldGet$2(this, _RedisClusterSlots_slots, "f")[i] = slot;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              } // Remove unused clients from this.#nodeByAddress using clientsInUse

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            _iterator5 = _createForOfIteratorHelper(__classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").entries());
            _context5.prev = 4;

            _iterator5.s();

          case 6:
            if ((_step5 = _iterator5.n()).done) {
              _context5.next = 14;
              break;
            }

            _step5$value = _slicedToArray(_step5.value, 2), address = _step5$value[0], client = _step5$value[1].client;

            if (!clientsInUse.has(address)) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("continue", 12);

          case 10:
            promises.push(client.disconnect());

            __classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f")["delete"](address);

          case 12:
            _context5.next = 6;
            break;

          case 14:
            _context5.next = 19;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](4);

            _iterator5.e(_context5.t0);

          case 19:
            _context5.prev = 19;

            _iterator5.f();

            return _context5.finish(19);

          case 22:
            _context5.next = 24;
            return Promise.all(promises);

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[4, 16, 19, 22]]);
  }));

  function _RedisClusterSlots_reset(_x4) {
    return _RedisClusterSlots_reset2.apply(this, arguments);
  }

  return _RedisClusterSlots_reset;
}(), _RedisClusterSlots_clientOptionsDefaults = function _RedisClusterSlots_clientOptionsDefaults(options) {
  var _a;

  if (!__classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").defaults) return options;
  return _objectSpread2(_objectSpread2(_objectSpread2({}, __classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").defaults), options), {}, {
    socket: __classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").defaults.socket && (options === null || options === void 0 ? void 0 : options.socket) ? _objectSpread2(_objectSpread2({}, __classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").defaults.socket), options.socket) : (_a = __classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").defaults.socket) !== null && _a !== void 0 ? _a : options === null || options === void 0 ? void 0 : options.socket
  });
}, _RedisClusterSlots_initiateClient = function _RedisClusterSlots_initiateClient(options) {
  return new (__classPrivateFieldGet$2(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, options)).on('error', __classPrivateFieldGet$2(this, _RedisClusterSlots_onError, "f"));
}, _RedisClusterSlots_getNodeAddress = function _RedisClusterSlots_getNodeAddress(address) {
  switch (_typeof(__classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").nodeAddressMap)) {
    case 'object':
      return __classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").nodeAddressMap[address];

    case 'function':
      return __classPrivateFieldGet$2(this, _RedisClusterSlots_options, "f").nodeAddressMap(address);
  }
}, _RedisClusterSlots_initiateClientForNode = function _RedisClusterSlots_initiateClientForNode(nodeData, readonly, clientsInUse, promises) {
  var _a;

  var address = "".concat(nodeData.host, ":").concat(nodeData.port);
  clientsInUse.add(address);

  var node = __classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").get(address);

  if (!node) {
    node = {
      id: nodeData.id,
      client: __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClient).call(this, {
        socket: (_a = __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getNodeAddress).call(this, address)) !== null && _a !== void 0 ? _a : {
          host: nodeData.host,
          port: nodeData.port
        },
        readonly: readonly
      })
    };
    promises.push(node.client.connect());

    __classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").set(address, node);
  }

  return node;
}, _RedisClusterSlots_slotClientIterator = /*#__PURE__*/regeneratorRuntime.mark(function _RedisClusterSlots_slotClientIterator(slotNumber) {
  var slot, _iterator7, _step7, replica;

  return regeneratorRuntime.wrap(function _RedisClusterSlots_slotClientIterator$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          slot = __classPrivateFieldGet$2(this, _RedisClusterSlots_slots, "f")[slotNumber];
          _context6.next = 3;
          return slot.master.client;

        case 3:
          _iterator7 = _createForOfIteratorHelper(slot.replicas);
          _context6.prev = 4;

          _iterator7.s();

        case 6:
          if ((_step7 = _iterator7.n()).done) {
            _context6.next = 12;
            break;
          }

          replica = _step7.value;
          _context6.next = 10;
          return replica.client;

        case 10:
          _context6.next = 6;
          break;

        case 12:
          _context6.next = 17;
          break;

        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](4);

          _iterator7.e(_context6.t0);

        case 17:
          _context6.prev = 17;

          _iterator7.f();

          return _context6.finish(17);

        case 20:
        case "end":
          return _context6.stop();
      }
    }
  }, _RedisClusterSlots_slotClientIterator, this, [[4, 14, 17, 20]]);
}), _RedisClusterSlots_getSlotClient = function _RedisClusterSlots_getSlotClient(slotNumber) {
  var slot = __classPrivateFieldGet$2(this, _RedisClusterSlots_slots, "f")[slotNumber];

  if (!slot.clientIterator) {
    slot.clientIterator = __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_slotClientIterator).call(this, slotNumber);
  }

  var _slot$clientIterator$ = slot.clientIterator.next(),
      done = _slot$clientIterator$.done,
      value = _slot$clientIterator$.value;

  if (done) {
    slot.clientIterator = undefined;
    return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getSlotClient).call(this, slotNumber);
  }

  return value;
}, _RedisClusterSlots_getRandomClient = function _RedisClusterSlots_getRandomClient() {
  if (!__classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").size) {
    throw new Error('Cluster is not connected');
  }

  if (!__classPrivateFieldGet$2(this, _RedisClusterSlots_randomClientIterator, "f")) {
    __classPrivateFieldSet$2(this, _RedisClusterSlots_randomClientIterator, __classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").values(), "f");
  }

  var _classPrivateFieldGe = __classPrivateFieldGet$2(this, _RedisClusterSlots_randomClientIterator, "f").next(),
      done = _classPrivateFieldGe.done,
      value = _classPrivateFieldGe.value;

  if (done) {
    __classPrivateFieldSet$2(this, _RedisClusterSlots_randomClientIterator, undefined, "f");

    return __classPrivateFieldGet$2(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getRandomClient).call(this);
  }

  return value.client;
}, _RedisClusterSlots_destroy = /*#__PURE__*/function () {
  var _RedisClusterSlots_destroy2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(fn) {
    var promises, _iterator8, _step8, client;

    return regeneratorRuntime.wrap(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            promises = [];
            _iterator8 = _createForOfIteratorHelper(__classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").values());

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                client = _step8.value.client;
                promises.push(fn(client));
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            _context7.next = 5;
            return Promise.all(promises);

          case 5:
            __classPrivateFieldGet$2(this, _RedisClusterSlots_nodeByAddress, "f").clear();

            __classPrivateFieldGet$2(this, _RedisClusterSlots_slots, "f").splice(0);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee6, this);
  }));

  function _RedisClusterSlots_destroy(_x5) {
    return _RedisClusterSlots_destroy2.apply(this, arguments);
  }

  return _RedisClusterSlots_destroy;
}();

var multiCommand = {};

var __classPrivateFieldSet$1 = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet$1 = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _RedisClusterMultiCommand_multi, _RedisClusterMultiCommand_executor, _RedisClusterMultiCommand_firstKey;

Object.defineProperty(multiCommand, "__esModule", {
  value: true
});
var commands_1$1 = commands$5;
var multi_command_1$1 = multiCommand$1;
var commander_1$1 = commander.exports;
var _1$p = cluster;

var RedisClusterMultiCommand = /*#__PURE__*/function () {
  function RedisClusterMultiCommand(executor, firstKey) {
    _classCallCheck(this, RedisClusterMultiCommand);

    _RedisClusterMultiCommand_multi.set(this, new multi_command_1$1["default"]());

    _RedisClusterMultiCommand_executor.set(this, void 0);

    _RedisClusterMultiCommand_firstKey.set(this, void 0);

    Object.defineProperty(this, "EXEC", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.exec
    });

    __classPrivateFieldSet$1(this, _RedisClusterMultiCommand_executor, executor, "f");

    __classPrivateFieldSet$1(this, _RedisClusterMultiCommand_firstKey, firstKey, "f");
  }

  _createClass(RedisClusterMultiCommand, [{
    key: "commandsExecutor",
    value: function commandsExecutor(command, args) {
      var transformedArguments = command.transformArguments.apply(command, _toConsumableArray(args));

      if (!__classPrivateFieldGet$1(this, _RedisClusterMultiCommand_firstKey, "f")) {
        __classPrivateFieldSet$1(this, _RedisClusterMultiCommand_firstKey, _1$p["default"].extractFirstKey(command, args, transformedArguments), "f");
      }

      return this.addCommand(undefined, transformedArguments, command.transformReply);
    }
  }, {
    key: "addCommand",
    value: function addCommand(firstKey, args, transformReply) {
      if (!__classPrivateFieldGet$1(this, _RedisClusterMultiCommand_firstKey, "f")) {
        __classPrivateFieldSet$1(this, _RedisClusterMultiCommand_firstKey, firstKey, "f");
      }

      __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_multi, "f").addCommand(args, transformReply);

      return this;
    }
  }, {
    key: "scriptsExecutor",
    value: function scriptsExecutor(script, args) {
      var transformedArguments = __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_multi, "f").addScript(script, args);

      if (!__classPrivateFieldGet$1(this, _RedisClusterMultiCommand_firstKey, "f")) {
        __classPrivateFieldSet$1(this, _RedisClusterMultiCommand_firstKey, _1$p["default"].extractFirstKey(script, args, transformedArguments), "f");
      }

      return this.addCommand(undefined, transformedArguments);
    }
  }, {
    key: "exec",
    value: function () {
      var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var execAsPipeline,
            commands,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                execAsPipeline = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;

                if (!execAsPipeline) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", this.execAsPipeline());

              case 3:
                commands = __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_multi, "f").exec();

                if (commands) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", []);

              case 6:
                _context.t0 = __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_multi, "f");
                _context.next = 9;
                return __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_executor, "f").call(this, commands, __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_firstKey, "f"), multi_command_1$1["default"].generateChainId());

              case 9:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.handleExecReplies.call(_context.t0, _context.t1));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function exec() {
        return _exec.apply(this, arguments);
      }

      return exec;
    }()
  }, {
    key: "execAsPipeline",
    value: function () {
      var _execAsPipeline = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_multi, "f");
                _context2.next = 3;
                return __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet$1(this, _RedisClusterMultiCommand_firstKey, "f"));

              case 3:
                _context2.t1 = _context2.sent;
                return _context2.abrupt("return", _context2.t0.transformReplies.call(_context2.t0, _context2.t1));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function execAsPipeline() {
        return _execAsPipeline.apply(this, arguments);
      }

      return execAsPipeline;
    }()
  }], [{
    key: "extend",
    value: function extend(plugins) {
      return (0, commander_1$1.extendWithModulesAndScripts)({
        BaseClass: RedisClusterMultiCommand,
        modules: plugins === null || plugins === void 0 ? void 0 : plugins.modules,
        modulesCommandsExecutor: RedisClusterMultiCommand.prototype.commandsExecutor,
        scripts: plugins === null || plugins === void 0 ? void 0 : plugins.scripts,
        scriptsExecutor: RedisClusterMultiCommand.prototype.scriptsExecutor
      });
    }
  }]);

  return RedisClusterMultiCommand;
}();

multiCommand["default"] = RedisClusterMultiCommand;

_RedisClusterMultiCommand_multi = new WeakMap(), _RedisClusterMultiCommand_executor = new WeakMap(), _RedisClusterMultiCommand_firstKey = new WeakMap();
(0, commander_1$1.extendWithCommands)({
  BaseClass: RedisClusterMultiCommand,
  commands: commands_1$1["default"],
  executor: RedisClusterMultiCommand.prototype.commandsExecutor
});

var __classPrivateFieldSet = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _RedisCluster_instances, _RedisCluster_options, _RedisCluster_slots, _RedisCluster_Multi, _RedisCluster_execute;

Object.defineProperty(cluster, "__esModule", {
  value: true
});
var commands_1 = commands$5;
var cluster_slots_1 = clusterSlots;
var commander_1 = commander.exports;
var events_1 = require$$0;
var multi_command_1 = multiCommand;

var RedisCluster = /*#__PURE__*/function (_events_1$EventEmitte) {
  _inherits(RedisCluster, _events_1$EventEmitte);

  var _super = _createSuper(RedisCluster);

  function RedisCluster(options) {
    var _this;

    _classCallCheck(this, RedisCluster);

    _this = _super.call(this);

    _RedisCluster_instances.add(_assertThisInitialized(_this));

    _RedisCluster_options.set(_assertThisInitialized(_this), void 0);

    _RedisCluster_slots.set(_assertThisInitialized(_this), void 0);

    _RedisCluster_Multi.set(_assertThisInitialized(_this), void 0);

    __classPrivateFieldSet(_assertThisInitialized(_this), _RedisCluster_options, options, "f");

    __classPrivateFieldSet(_assertThisInitialized(_this), _RedisCluster_slots, new cluster_slots_1["default"](options, function (err) {
      return _this.emit('error', err);
    }), "f");

    __classPrivateFieldSet(_assertThisInitialized(_this), _RedisCluster_Multi, multi_command_1["default"].extend(options), "f");

    return _this;
  }

  _createClass(RedisCluster, [{
    key: "duplicate",
    value: function duplicate(overrides) {
      return new (Object.getPrototypeOf(this).constructor)(_objectSpread2(_objectSpread2({}, __classPrivateFieldGet(this, _RedisCluster_options, "f")), overrides));
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", __classPrivateFieldGet(this, _RedisCluster_slots, "f").connect());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "commandsExecutor",
    value: function () {
      var _commandsExecutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(command, args) {
        var _ref, redisArgs, options;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref = (0, commander_1.transformCommandArguments)(command, args), redisArgs = _ref.args, options = _ref.options;
                _context2.t0 = (commander_1.transformCommandReply);
                _context2.t1 = command;
                _context2.next = 5;
                return this.sendCommand(RedisCluster.extractFirstKey(command, args, redisArgs), command.IS_READ_ONLY, redisArgs, options);

              case 5:
                _context2.t2 = _context2.sent;
                _context2.t3 = redisArgs.preserve;
                return _context2.abrupt("return", (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function commandsExecutor(_x, _x2) {
        return _commandsExecutor.apply(this, arguments);
      }

      return commandsExecutor;
    }()
  }, {
    key: "sendCommand",
    value: function () {
      var _sendCommand = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(firstKey, isReadonly, args, options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, isReadonly, function (client) {
                  return client.sendCommand(args, options);
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sendCommand(_x3, _x4, _x5, _x6) {
        return _sendCommand.apply(this, arguments);
      }

      return sendCommand;
    }()
  }, {
    key: "scriptsExecutor",
    value: function () {
      var _scriptsExecutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(script, args) {
        var _ref2, redisArgs, options;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref2 = (0, commander_1.transformCommandArguments)(script, args), redisArgs = _ref2.args, options = _ref2.options;
                _context4.t0 = (commander_1.transformCommandReply);
                _context4.t1 = script;
                _context4.next = 5;
                return this.executeScript(script, args, redisArgs, options);

              case 5:
                _context4.t2 = _context4.sent;
                _context4.t3 = redisArgs.preserve;
                return _context4.abrupt("return", (0, _context4.t0)(_context4.t1, _context4.t2, _context4.t3));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function scriptsExecutor(_x7, _x8) {
        return _scriptsExecutor.apply(this, arguments);
      }

      return scriptsExecutor;
    }()
  }, {
    key: "executeScript",
    value: function () {
      var _executeScript = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(script, originalArgs, redisArgs, options) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, RedisCluster.extractFirstKey(script, originalArgs, redisArgs), script.IS_READ_ONLY, function (client) {
                  return client.executeScript(script, redisArgs, options);
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function executeScript(_x9, _x10, _x11, _x12) {
        return _executeScript.apply(this, arguments);
      }

      return executeScript;
    }()
  }, {
    key: "multi",
    value: function multi(routing) {
      var _this2 = this;

      return new (__classPrivateFieldGet(this, _RedisCluster_Multi, "f"))(function (commands, firstKey, chainId) {
        return __classPrivateFieldGet(_this2, _RedisCluster_instances, "m", _RedisCluster_execute).call(_this2, firstKey, false, function (client) {
          return client.multiExecutor(commands, chainId);
        });
      }, routing);
    }
  }, {
    key: "getMasters",
    value: function getMasters() {
      return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasters();
    }
  }, {
    key: "getSlotMaster",
    value: function getSlotMaster(slot) {
      return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getSlotMaster(slot);
    }
  }, {
    key: "quit",
    value: function quit() {
      return __classPrivateFieldGet(this, _RedisCluster_slots, "f").quit();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      return __classPrivateFieldGet(this, _RedisCluster_slots, "f").disconnect();
    }
  }], [{
    key: "extractFirstKey",
    value: function extractFirstKey(command, originalArgs, redisArgs) {
      if (command.FIRST_KEY_INDEX === undefined) {
        return undefined;
      } else if (typeof command.FIRST_KEY_INDEX === 'number') {
        return redisArgs[command.FIRST_KEY_INDEX];
      }

      return command.FIRST_KEY_INDEX.apply(command, _toConsumableArray(originalArgs));
    }
  }, {
    key: "create",
    value: function create(options) {
      return new ((0, commander_1.extendWithModulesAndScripts)({
        BaseClass: RedisCluster,
        modules: options === null || options === void 0 ? void 0 : options.modules,
        modulesCommandsExecutor: RedisCluster.prototype.commandsExecutor,
        scripts: options === null || options === void 0 ? void 0 : options.scripts,
        scriptsExecutor: RedisCluster.prototype.scriptsExecutor
      }))(options);
    }
  }]);

  return RedisCluster;
}(events_1.EventEmitter);

cluster["default"] = RedisCluster;

_RedisCluster_options = new WeakMap(), _RedisCluster_slots = new WeakMap(), _RedisCluster_Multi = new WeakMap(), _RedisCluster_instances = new WeakSet(), _RedisCluster_execute = /*#__PURE__*/function () {
  var _RedisCluster_execute2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(firstKey, isReadonly, executor) {
    var _a, _b, maxCommandRedirections, client, i, address, redirectTo;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            maxCommandRedirections = (_a = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections) !== null && _a !== void 0 ? _a : 16;
            client = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
            i = 0;

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return executor(client);

          case 6:
            return _context6.abrupt("return", _context6.sent);

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](3);

            if (!(++i > maxCommandRedirections || !(_context6.t0 instanceof Error))) {
              _context6.next = 13;
              break;
            }

            throw _context6.t0;

          case 13:
            if (!_context6.t0.message.startsWith('ASK')) {
              _context6.next = 30;
              break;
            }

            address = _context6.t0.message.substring(_context6.t0.message.lastIndexOf(' ') + 1);

            if (!(((_b = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getNodeByAddress(address)) === null || _b === void 0 ? void 0 : _b.client) === client)) {
              _context6.next = 19;
              break;
            }

            _context6.next = 18;
            return client.asking();

          case 18:
            return _context6.abrupt("continue", 36);

          case 19:
            _context6.next = 21;
            return __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);

          case 21:
            redirectTo = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getNodeByAddress(address);

            if (redirectTo) {
              _context6.next = 24;
              break;
            }

            throw new Error("Cannot find node ".concat(address));

          case 24:
            _context6.next = 26;
            return redirectTo.client.asking();

          case 26:
            client = redirectTo.client;
            return _context6.abrupt("continue", 36);

          case 30:
            if (!_context6.t0.message.startsWith('MOVED')) {
              _context6.next = 35;
              break;
            }

            _context6.next = 33;
            return __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);

          case 33:
            client = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
            return _context6.abrupt("continue", 36);

          case 35:
            throw _context6.t0;

          case 36:
            i++;
            _context6.next = 3;
            break;

          case 39:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[3, 9]]);
  }));

  function _RedisCluster_execute(_x13, _x14, _x15) {
    return _RedisCluster_execute2.apply(this, arguments);
  }

  return _RedisCluster_execute;
}();
(0, commander_1.extendWithCommands)({
  BaseClass: RedisCluster,
  commands: commands_1["default"],
  executor: RedisCluster.prototype.commandsExecutor
});

var luaScript = {};

Object.defineProperty(luaScript, "__esModule", {
  value: true
});
luaScript.scriptSha1 = luaScript.defineScript = void 0;
var crypto_1 = require$$0$3;

function defineScript(script) {
  return _objectSpread2(_objectSpread2({}, script), {}, {
    SHA1: scriptSha1(script.SCRIPT)
  });
}

luaScript.defineScript = defineScript;

function scriptSha1(script) {
  return (0, crypto_1.createHash)('sha1').update(script).digest('hex');
}

luaScript.scriptSha1 = scriptSha1;

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineScript = exports.createCluster = exports.commandOptions = exports.createClient = void 0;
  var client_1 = client;
  var cluster_1 = cluster;
  exports.createClient = client_1["default"].create;
  exports.commandOptions = client_1["default"].commandOptions;
  exports.createCluster = cluster_1["default"].create;
  var lua_script_1 = luaScript;
  Object.defineProperty(exports, "defineScript", {
    enumerable: true,
    get: function get() {
      return lua_script_1.defineScript;
    }
  });

  __exportStar(errors$3, exports);
})(dist$5);

var dist$4 = {};

var commands$4 = {};

var bloom = {};

var ADD$6 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, item) {
    return ['BF.ADD', key, item];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(ADD$6);

var EXISTS$3 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, item) {
    return ['BF.EXISTS', key, item];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(EXISTS$3);

var INFO$9 = {};

Object.defineProperty(INFO$9, "__esModule", {
  value: true
});
INFO$9.transformReply = INFO$9.transformArguments = INFO$9.IS_READ_ONLY = INFO$9.FIRST_KEY_INDEX = void 0;
INFO$9.FIRST_KEY_INDEX = 1;
INFO$9.IS_READ_ONLY = true;

function transformArguments$1n(key) {
  return ['BF.INFO', key];
}

INFO$9.transformArguments = transformArguments$1n;

function transformReply$l(reply) {
  return {
    capacity: reply[1],
    size: reply[3],
    numberOfFilters: reply[5],
    numberOfInsertedItems: reply[7],
    expansionRate: reply[9]
  };
}

INFO$9.transformReply = transformReply$l;

var INSERT$3 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, items, options) {
    var args = ['BF.INSERT', key];

    if (options === null || options === void 0 ? void 0 : options.CAPACITY) {
      args.push('CAPACITY', options.CAPACITY.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.ERROR) {
      args.push('ERROR', options.ERROR.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.EXPANSION) {
      args.push('EXPANSION', options.EXPANSION.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.NOCREATE) {
      args.push('NOCREATE');
    }

    if (options === null || options === void 0 ? void 0 : options.NONSCALING) {
      args.push('NONSCALING');
    }

    args.push('ITEMS');
    (0, generic_transformers_1.pushVerdictArguments)(args, items);
    return args;
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_2 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_2.transformBooleanArrayReply;
    }
  });
})(INSERT$3);

var LOADCHUNK$3 = {};

Object.defineProperty(LOADCHUNK$3, "__esModule", {
  value: true
});
LOADCHUNK$3.transformArguments = LOADCHUNK$3.FIRST_KEY_INDEX = void 0;
LOADCHUNK$3.FIRST_KEY_INDEX = 1;

function transformArguments$1m(key, iteretor, chunk) {
  return ['BF.LOADCHUNK', key, iteretor.toString(), chunk];
}

LOADCHUNK$3.transformArguments = transformArguments$1m;

var MADD$2 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, items) {
    return ['BF.MADD', key].concat(_toConsumableArray(items));
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanArrayReply;
    }
  });
})(MADD$2);

var MEXISTS$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, items) {
    return ['BF.MEXISTS', key].concat(_toConsumableArray(items));
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanArrayReply;
    }
  });
})(MEXISTS$1);

var RESERVE$5 = {};

Object.defineProperty(RESERVE$5, "__esModule", {
  value: true
});
RESERVE$5.transformArguments = RESERVE$5.FIRST_KEY_INDEX = void 0;
RESERVE$5.FIRST_KEY_INDEX = 1;

function transformArguments$1l(key, errorRate, capacity, options) {
  var args = ['BF.RESERVE', key, errorRate.toString(), capacity.toString()];

  if (options === null || options === void 0 ? void 0 : options.EXPANSION) {
    args.push('EXPANSION', options.EXPANSION.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.NONSCALING) {
    args.push('NONSCALING');
  }

  return args;
}

RESERVE$5.transformArguments = transformArguments$1l;

var SCANDUMP$3 = {};

Object.defineProperty(SCANDUMP$3, "__esModule", {
  value: true
});
SCANDUMP$3.transformReply = SCANDUMP$3.transformArguments = SCANDUMP$3.IS_READ_ONLY = SCANDUMP$3.FIRST_KEY_INDEX = void 0;
SCANDUMP$3.FIRST_KEY_INDEX = 1;
SCANDUMP$3.IS_READ_ONLY = true;

function transformArguments$1k(key, iterator) {
  return ['BF.SCANDUMP', key, iterator.toString()];
}

SCANDUMP$3.transformArguments = transformArguments$1k;

function transformReply$k(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      iterator = _ref2[0],
      chunk = _ref2[1];

  return {
    iterator: iterator,
    chunk: chunk
  };
}

SCANDUMP$3.transformReply = transformReply$k;

Object.defineProperty(bloom, "__esModule", {
  value: true
});
var ADD$5 = ADD$6;
var EXISTS$2 = EXISTS$3;
var INFO$8 = INFO$9;
var INSERT$2 = INSERT$3;
var LOADCHUNK$2 = LOADCHUNK$3;
var MADD$1 = MADD$2;
var MEXISTS = MEXISTS$1;
var RESERVE$4 = RESERVE$5;
var SCANDUMP$2 = SCANDUMP$3;

bloom["default"] = {
  ADD: ADD$5,
  add: ADD$5,
  EXISTS: EXISTS$2,
  exists: EXISTS$2,
  INFO: INFO$8,
  info: INFO$8,
  INSERT: INSERT$2,
  insert: INSERT$2,
  LOADCHUNK: LOADCHUNK$2,
  loadChunk: LOADCHUNK$2,
  MADD: MADD$1,
  mAdd: MADD$1,
  MEXISTS: MEXISTS,
  mExists: MEXISTS,
  RESERVE: RESERVE$4,
  reserve: RESERVE$4,
  SCANDUMP: SCANDUMP$2,
  scanDump: SCANDUMP$2
};

var countMinSketch = {};

var INCRBY$4 = {};

Object.defineProperty(INCRBY$4, "__esModule", {
  value: true
});
INCRBY$4.transformArguments = INCRBY$4.FIRST_KEY_INDEX = void 0;
INCRBY$4.FIRST_KEY_INDEX = 1;

function transformArguments$1j(key, items) {
  var args = ['CMS.INCRBY', key];

  if (Array.isArray(items)) {
    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        pushIncrByItem$1(args, item);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    pushIncrByItem$1(args, items);
  }

  return args;
}

INCRBY$4.transformArguments = transformArguments$1j;

function pushIncrByItem$1(args, _ref) {
  var item = _ref.item,
      incrementBy = _ref.incrementBy;
  args.push(item, incrementBy.toString());
}

var INFO$7 = {};

Object.defineProperty(INFO$7, "__esModule", {
  value: true
});
INFO$7.transformReply = INFO$7.transformArguments = INFO$7.IS_READ_ONLY = INFO$7.FIRST_KEY_INDEX = void 0;
INFO$7.FIRST_KEY_INDEX = 1;
INFO$7.IS_READ_ONLY = true;

function transformArguments$1i(key) {
  return ['CMS.INFO', key];
}

INFO$7.transformArguments = transformArguments$1i;

function transformReply$j(reply) {
  return {
    width: reply[1],
    depth: reply[3],
    count: reply[5]
  };
}

INFO$7.transformReply = transformReply$j;

var INITBYDIM$1 = {};

Object.defineProperty(INITBYDIM$1, "__esModule", {
  value: true
});
INITBYDIM$1.transformArguments = INITBYDIM$1.FIRST_KEY_INDEX = void 0;
INITBYDIM$1.FIRST_KEY_INDEX = 1;

function transformArguments$1h(key, width, depth) {
  return ['CMS.INITBYDIM', key, width.toString(), depth.toString()];
}

INITBYDIM$1.transformArguments = transformArguments$1h;

var INITBYPROB$1 = {};

Object.defineProperty(INITBYPROB$1, "__esModule", {
  value: true
});
INITBYPROB$1.transformArguments = INITBYPROB$1.FIRST_KEY_INDEX = void 0;
INITBYPROB$1.FIRST_KEY_INDEX = 1;

function transformArguments$1g(key, error, probability) {
  return ['CMS.INITBYPROB', key, error.toString(), probability.toString()];
}

INITBYPROB$1.transformArguments = transformArguments$1g;

var MERGE$1 = {};

Object.defineProperty(MERGE$1, "__esModule", {
  value: true
});
MERGE$1.transformArguments = MERGE$1.FIRST_KEY_INDEX = void 0;
MERGE$1.FIRST_KEY_INDEX = 1;

function transformArguments$1f(dest, src) {
  var args = ['CMS.MERGE', dest, src.length.toString()];

  if (isStringSketches(src)) {
    args.push.apply(args, _toConsumableArray(src));
  } else {
    var _iterator = _createForOfIteratorHelper(src),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sketch = _step.value;
        args.push(sketch.name);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    args.push('WEIGHTS');

    var _iterator2 = _createForOfIteratorHelper(src),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _sketch = _step2.value;
        args.push(_sketch.weight.toString());
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return args;
}

MERGE$1.transformArguments = transformArguments$1f;

function isStringSketches(src) {
  return typeof src[0] === 'string';
}

var QUERY$5 = {};

Object.defineProperty(QUERY$5, "__esModule", {
  value: true
});
QUERY$5.transformArguments = QUERY$5.IS_READ_ONLY = QUERY$5.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$a = genericTransformers;
QUERY$5.FIRST_KEY_INDEX = 1;
QUERY$5.IS_READ_ONLY = true;

function transformArguments$1e(key, items) {
  return (0, generic_transformers_1$a.pushVerdictArguments)(['CMS.QUERY', key], items);
}

QUERY$5.transformArguments = transformArguments$1e;

Object.defineProperty(countMinSketch, "__esModule", {
  value: true
});
var INCRBY$3 = INCRBY$4;
var INFO$6 = INFO$7;
var INITBYDIM = INITBYDIM$1;
var INITBYPROB = INITBYPROB$1;
var MERGE = MERGE$1;
var QUERY$4 = QUERY$5;

countMinSketch["default"] = {
  INCRBY: INCRBY$3,
  incrBy: INCRBY$3,
  INFO: INFO$6,
  info: INFO$6,
  INITBYDIM: INITBYDIM,
  initByDim: INITBYDIM,
  INITBYPROB: INITBYPROB,
  initByProb: INITBYPROB,
  MERGE: MERGE,
  merge: MERGE,
  QUERY: QUERY$4,
  query: QUERY$4
};

var cuckoo = {};

var ADD$4 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, item) {
    return ['CF.ADD', key, item];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(ADD$4);

var ADDNX$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, item) {
    return ['CF.ADDNX', key, item];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(ADDNX$1);

var COUNT$3 = {};

Object.defineProperty(COUNT$3, "__esModule", {
  value: true
});
COUNT$3.transformArguments = COUNT$3.FIRST_KEY_INDEX = void 0;
COUNT$3.FIRST_KEY_INDEX = 1;

function transformArguments$1d(key, item) {
  return ['CF.COUNT', key, item];
}

COUNT$3.transformArguments = transformArguments$1d;

var DEL$4 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, item) {
    return ['CF.DEL', key, item];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(DEL$4);

var EXISTS$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, item) {
    return ['CF.EXISTS', key, item];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(EXISTS$1);

var INFO$5 = {};

Object.defineProperty(INFO$5, "__esModule", {
  value: true
});
INFO$5.transformReply = INFO$5.transformArguments = INFO$5.IS_READ_ONLY = INFO$5.FIRST_KEY_INDEX = void 0;
INFO$5.FIRST_KEY_INDEX = 1;
INFO$5.IS_READ_ONLY = true;

function transformArguments$1c(key) {
  return ['CF.INFO', key];
}

INFO$5.transformArguments = transformArguments$1c;

function transformReply$i(reply) {
  return {
    size: reply[1],
    numberOfBuckets: reply[3],
    numberOfFilters: reply[5],
    numberOfInsertedItems: reply[7],
    numberOfDeletedItems: reply[9],
    bucketSize: reply[11],
    expansionRate: reply[13],
    maxIteration: reply[15]
  };
}

INFO$5.transformReply = transformReply$i;

var INSERT$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var _1 = cuckoo;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, items, options) {
    return (0, _1.pushInsertOptions)(['CF.INSERT', key], items, options);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanArrayReply;
    }
  });
})(INSERT$1);

var INSERTNX$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  var _1 = cuckoo;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, items, options) {
    return (0, _1.pushInsertOptions)(['CF.INSERTNX', key], items, options);
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanArrayReply;
    }
  });
})(INSERTNX$1);

var LOADCHUNK$1 = {};

Object.defineProperty(LOADCHUNK$1, "__esModule", {
  value: true
});
LOADCHUNK$1.transformArguments = LOADCHUNK$1.FIRST_KEY_INDEX = void 0;
LOADCHUNK$1.FIRST_KEY_INDEX = 1;

function transformArguments$1b(key, iterator, chunk) {
  return ['CF.LOADCHUNK', key, iterator.toString(), chunk];
}

LOADCHUNK$1.transformArguments = transformArguments$1b;

var RESERVE$3 = {};

Object.defineProperty(RESERVE$3, "__esModule", {
  value: true
});
RESERVE$3.transformArguments = RESERVE$3.FIRST_KEY_INDEX = void 0;
RESERVE$3.FIRST_KEY_INDEX = 1;

function transformArguments$1a(key, capacity, options) {
  var args = ['CF.RESERVE', key, capacity.toString()];

  if (options === null || options === void 0 ? void 0 : options.BUCKETSIZE) {
    args.push('BUCKETSIZE', options.BUCKETSIZE.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.MAXITERATIONS) {
    args.push('MAXITERATIONS', options.MAXITERATIONS.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.EXPANSION) {
    args.push('EXPANSION', options.EXPANSION.toString());
  }

  return args;
}

RESERVE$3.transformArguments = transformArguments$1a;

var SCANDUMP$1 = {};

Object.defineProperty(SCANDUMP$1, "__esModule", {
  value: true
});
SCANDUMP$1.transformReply = SCANDUMP$1.transformArguments = SCANDUMP$1.FIRST_KEY_INDEX = void 0;
SCANDUMP$1.FIRST_KEY_INDEX = 1;

function transformArguments$19(key, iterator) {
  return ['CF.SCANDUMP', key, iterator.toString()];
}

SCANDUMP$1.transformArguments = transformArguments$19;

function transformReply$h(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      iterator = _ref2[0],
      chunk = _ref2[1];

  return {
    iterator: iterator,
    chunk: chunk
  };
}

SCANDUMP$1.transformReply = transformReply$h;

Object.defineProperty(cuckoo, "__esModule", {
  value: true
});
cuckoo.pushInsertOptions = void 0;
var ADD$3 = ADD$4;
var ADDNX = ADDNX$1;
var COUNT$2 = COUNT$3;
var DEL$3 = DEL$4;
var EXISTS = EXISTS$1;
var INFO$4 = INFO$5;
var INSERT = INSERT$1;
var INSERTNX = INSERTNX$1;
var LOADCHUNK = LOADCHUNK$1;
var RESERVE$2 = RESERVE$3;
var SCANDUMP = SCANDUMP$1;
var generic_transformers_1$9 = genericTransformers;

cuckoo["default"] = {
  ADD: ADD$3,
  add: ADD$3,
  ADDNX: ADDNX,
  addNX: ADDNX,
  COUNT: COUNT$2,
  count: COUNT$2,
  DEL: DEL$3,
  del: DEL$3,
  EXISTS: EXISTS,
  exists: EXISTS,
  INFO: INFO$4,
  info: INFO$4,
  INSERT: INSERT,
  insert: INSERT,
  INSERTNX: INSERTNX,
  insertNX: INSERTNX,
  LOADCHUNK: LOADCHUNK,
  loadChunk: LOADCHUNK,
  RESERVE: RESERVE$2,
  reserve: RESERVE$2,
  SCANDUMP: SCANDUMP,
  scanDump: SCANDUMP
};

function pushInsertOptions(args, items, options) {
  if (options === null || options === void 0 ? void 0 : options.CAPACITY) {
    args.push('CAPACITY');
    args.push(options.CAPACITY.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.NOCREATE) {
    args.push('NOCREATE');
  }

  args.push('ITEMS');
  return (0, generic_transformers_1$9.pushVerdictArguments)(args, items);
}

cuckoo.pushInsertOptions = pushInsertOptions;

var topK = {};

var ADD$2 = {};

Object.defineProperty(ADD$2, "__esModule", {
  value: true
});
ADD$2.transformArguments = ADD$2.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$8 = genericTransformers;
ADD$2.FIRST_KEY_INDEX = 1;

function transformArguments$18(key, items) {
  return (0, generic_transformers_1$8.pushVerdictArguments)(['TOPK.ADD', key], items);
}

ADD$2.transformArguments = transformArguments$18;

var COUNT$1 = {};

Object.defineProperty(COUNT$1, "__esModule", {
  value: true
});
COUNT$1.transformArguments = COUNT$1.IS_READ_ONLY = COUNT$1.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$7 = genericTransformers;
COUNT$1.FIRST_KEY_INDEX = 1;
COUNT$1.IS_READ_ONLY = true;

function transformArguments$17(key, items) {
  return (0, generic_transformers_1$7.pushVerdictArguments)(['TOPK.COUNT', key], items);
}

COUNT$1.transformArguments = transformArguments$17;

var INCRBY$2 = {};

Object.defineProperty(INCRBY$2, "__esModule", {
  value: true
});
INCRBY$2.transformArguments = INCRBY$2.FIRST_KEY_INDEX = void 0;
INCRBY$2.FIRST_KEY_INDEX = 1;

function transformArguments$16(key, items) {
  var args = ['TOPK.INCRBY', key];

  if (Array.isArray(items)) {
    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        pushIncrByItem(args, item);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    pushIncrByItem(args, items);
  }

  return args;
}

INCRBY$2.transformArguments = transformArguments$16;

function pushIncrByItem(args, _ref) {
  var item = _ref.item,
      incrementBy = _ref.incrementBy;
  args.push(item, incrementBy.toString());
}

var INFO$3 = {};

Object.defineProperty(INFO$3, "__esModule", {
  value: true
});
INFO$3.transformReply = INFO$3.transformArguments = INFO$3.IS_READ_ONLY = INFO$3.FIRST_KEY_INDEX = void 0;
INFO$3.FIRST_KEY_INDEX = 1;
INFO$3.IS_READ_ONLY = true;

function transformArguments$15(key) {
  return ['TOPK.INFO', key];
}

INFO$3.transformArguments = transformArguments$15;

function transformReply$g(reply) {
  return {
    k: reply[1],
    width: reply[3],
    depth: reply[5],
    decay: Number(reply[7])
  };
}

INFO$3.transformReply = transformReply$g;

var LIST$3 = {};

Object.defineProperty(LIST$3, "__esModule", {
  value: true
});
LIST$3.transformArguments = LIST$3.FIRST_KEY_INDEX = void 0;
LIST$3.FIRST_KEY_INDEX = 1;

function transformArguments$14(key) {
  return ['TOPK.LIST', key];
}

LIST$3.transformArguments = transformArguments$14;

var QUERY$3 = {};

Object.defineProperty(QUERY$3, "__esModule", {
  value: true
});
QUERY$3.transformArguments = QUERY$3.IS_READ_ONLY = QUERY$3.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$6 = genericTransformers;
QUERY$3.FIRST_KEY_INDEX = 1;
QUERY$3.IS_READ_ONLY = true;

function transformArguments$13(key, items) {
  return (0, generic_transformers_1$6.pushVerdictArguments)(['TOPK.QUERY', key], items);
}

QUERY$3.transformArguments = transformArguments$13;

var RESERVE$1 = {};

Object.defineProperty(RESERVE$1, "__esModule", {
  value: true
});
RESERVE$1.transformArguments = RESERVE$1.FIRST_KEY_INDEX = void 0;
RESERVE$1.FIRST_KEY_INDEX = 1;

function transformArguments$12(key, topK, options) {
  var args = ['TOPK.RESERVE', key, topK.toString()];

  if (options) {
    args.push(options.width.toString(), options.depth.toString(), options.decay.toString());
  }

  return args;
}

RESERVE$1.transformArguments = transformArguments$12;

Object.defineProperty(topK, "__esModule", {
  value: true
});
var ADD$1 = ADD$2;
var COUNT = COUNT$1;
var INCRBY$1 = INCRBY$2;
var INFO$2 = INFO$3;
var LIST$2 = LIST$3;
var QUERY$2 = QUERY$3;
var RESERVE = RESERVE$1;

topK["default"] = {
  ADD: ADD$1,
  add: ADD$1,
  COUNT: COUNT,
  count: COUNT,
  INCRBY: INCRBY$1,
  incrBy: INCRBY$1,
  INFO: INFO$2,
  info: INFO$2,
  LIST: LIST$2,
  list: LIST$2,
  QUERY: QUERY$2,
  query: QUERY$2,
  RESERVE: RESERVE,
  reserve: RESERVE
};

Object.defineProperty(commands$4, "__esModule", {
  value: true
});
var bloom_1 = bloom;
var count_min_sketch_1 = countMinSketch;
var cuckoo_1 = cuckoo;
var top_k_1 = topK;

commands$4["default"] = {
  bf: bloom_1["default"],
  cms: count_min_sketch_1["default"],
  cf: cuckoo_1["default"],
  topK: top_k_1["default"]
};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var commands_1 = commands$4;
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return commands_1["default"];
    }
  });
})(dist$4);

var dist$3 = {};

var commands$3 = {};

var CONFIG_GET$2 = {};

Object.defineProperty(CONFIG_GET$2, "__esModule", {
  value: true
});
CONFIG_GET$2.transformArguments = CONFIG_GET$2.IS_READ_ONLY = void 0;
CONFIG_GET$2.IS_READ_ONLY = true;

function transformArguments$11(configKey) {
  return ['GRAPH.CONFIG', 'GET', configKey];
}

CONFIG_GET$2.transformArguments = transformArguments$11;

var CONFIG_SET$2 = {};

Object.defineProperty(CONFIG_SET$2, "__esModule", {
  value: true
});
CONFIG_SET$2.transformArguments = void 0;

function transformArguments$10(configKey, value) {
  return ['GRAPH.CONFIG', 'SET', configKey, value.toString()];
}

CONFIG_SET$2.transformArguments = transformArguments$10;

var DELETE$1 = {};

Object.defineProperty(DELETE$1, "__esModule", {
  value: true
});
DELETE$1.transformArguments = DELETE$1.FIRST_KEY_INDEX = void 0;
DELETE$1.FIRST_KEY_INDEX = 1;

function transformArguments$$(key) {
  return ['GRAPH.DELETE', key];
}

DELETE$1.transformArguments = transformArguments$$;

var EXPLAIN$2 = {};

Object.defineProperty(EXPLAIN$2, "__esModule", {
  value: true
});
EXPLAIN$2.transformArguments = EXPLAIN$2.IS_READ_ONLY = EXPLAIN$2.FIRST_KEY_INDEX = void 0;
EXPLAIN$2.FIRST_KEY_INDEX = 1;
EXPLAIN$2.IS_READ_ONLY = true;

function transformArguments$_(key, query) {
  return ['GRAPH.EXPLAIN', key, query];
}

EXPLAIN$2.transformArguments = transformArguments$_;

var LIST$1 = {};

Object.defineProperty(LIST$1, "__esModule", {
  value: true
});
LIST$1.transformArguments = LIST$1.IS_READ_ONLY = void 0;
LIST$1.IS_READ_ONLY = true;

function transformArguments$Z() {
  return ['GRAPH.LIST'];
}

LIST$1.transformArguments = transformArguments$Z;

var PROFILE$1 = {};

Object.defineProperty(PROFILE$1, "__esModule", {
  value: true
});
PROFILE$1.transformArguments = PROFILE$1.IS_READ_ONLY = PROFILE$1.FIRST_KEY_INDEX = void 0;
PROFILE$1.FIRST_KEY_INDEX = 1;
PROFILE$1.IS_READ_ONLY = true;

function transformArguments$Y(key, query) {
  return ['GRAPH.PROFILE', key, query];
}

PROFILE$1.transformArguments = transformArguments$Y;

var QUERY_RO$1 = {};

var QUERY$1 = {};

Object.defineProperty(QUERY$1, "__esModule", {
  value: true
});
QUERY$1.transformReply = QUERY$1.transformArguments = QUERY$1.FIRST_KEY_INDEX = void 0;
var _1$o = commands$3;
QUERY$1.FIRST_KEY_INDEX = 1;

function transformArguments$X(graph, query, timeout) {
  return (0, _1$o.pushQueryArguments)(['GRAPH.QUERY'], graph, query, timeout);
}

QUERY$1.transformArguments = transformArguments$X;

function transformReply$f(reply) {
  return {
    headers: reply[0],
    data: reply[1],
    metadata: reply[2]
  };
}

QUERY$1.transformReply = transformReply$f;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var _1 = commands$3;
  var QUERY_1 = QUERY$1;
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return QUERY_1.FIRST_KEY_INDEX;
    }
  });
  exports.IS_READ_ONLY = true;

  function transformArguments(graph, query, timeout) {
    return (0, _1.pushQueryArguments)(['GRAPH.RO_QUERY'], graph, query, timeout);
  }

  exports.transformArguments = transformArguments;
  var QUERY_2 = QUERY$1;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return QUERY_2.transformReply;
    }
  });
})(QUERY_RO$1);

var SLOWLOG$1 = {};

Object.defineProperty(SLOWLOG$1, "__esModule", {
  value: true
});
SLOWLOG$1.transformReply = SLOWLOG$1.transformArguments = SLOWLOG$1.FIRST_KEY_INDEX = SLOWLOG$1.IS_READ_ONLY = void 0;
SLOWLOG$1.IS_READ_ONLY = true;
SLOWLOG$1.FIRST_KEY_INDEX = 1;

function transformArguments$W(key) {
  return ['GRAPH.SLOWLOG', key];
}

SLOWLOG$1.transformArguments = transformArguments$W;

function transformReply$e(logs) {
  return logs.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
        timestamp = _ref2[0],
        command = _ref2[1],
        query = _ref2[2],
        took = _ref2[3];

    return {
      timestamp: new Date(Number(timestamp) * 1000),
      command: command,
      query: query,
      took: Number(took)
    };
  });
}

SLOWLOG$1.transformReply = transformReply$e;

Object.defineProperty(commands$3, "__esModule", {
  value: true
});
commands$3.pushQueryArguments = void 0;
var CONFIG_GET$1 = CONFIG_GET$2;
var CONFIG_SET$1 = CONFIG_SET$2;
var DELETE = DELETE$1;
var EXPLAIN$1 = EXPLAIN$2;
var LIST = LIST$1;
var PROFILE = PROFILE$1;
var QUERY_RO = QUERY_RO$1;
var QUERY = QUERY$1;
var SLOWLOG = SLOWLOG$1;

commands$3["default"] = {
  CONFIG_GET: CONFIG_GET$1,
  configGet: CONFIG_GET$1,
  CONFIG_SET: CONFIG_SET$1,
  configSet: CONFIG_SET$1,
  DELETE: DELETE,
  "delete": DELETE,
  EXPLAIN: EXPLAIN$1,
  explain: EXPLAIN$1,
  LIST: LIST,
  list: LIST,
  PROFILE: PROFILE,
  profile: PROFILE,
  QUERY_RO: QUERY_RO,
  queryRo: QUERY_RO,
  QUERY: QUERY,
  query: QUERY,
  SLOWLOG: SLOWLOG,
  slowLog: SLOWLOG
};

function pushQueryArguments(args, graph, query, timeout) {
  args.push(graph, query);

  if (timeout !== undefined) {
    args.push(timeout.toString());
  }

  return args;
}

commands$3.pushQueryArguments = pushQueryArguments;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var commands_1 = commands$3;
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return commands_1["default"];
    }
  });
})(dist$3);

var dist$2 = {};

var commands$2 = {};

var ARRAPPEND$1 = {};

Object.defineProperty(ARRAPPEND$1, "__esModule", {
  value: true
});
ARRAPPEND$1.transformArguments = ARRAPPEND$1.FIRST_KEY_INDEX = void 0;
var _1$n = commands$2;
ARRAPPEND$1.FIRST_KEY_INDEX = 1;

function transformArguments$V(key, path) {
  var args = ['JSON.ARRAPPEND', key, path];

  for (var _len = arguments.length, jsons = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    jsons[_key - 2] = arguments[_key];
  }

  for (var _i = 0, _jsons = jsons; _i < _jsons.length; _i++) {
    var json = _jsons[_i];
    args.push((0, _1$n.transformRedisJsonArgument)(json));
  }

  return args;
}

ARRAPPEND$1.transformArguments = transformArguments$V;

var ARRINDEX$1 = {};

Object.defineProperty(ARRINDEX$1, "__esModule", {
  value: true
});
ARRINDEX$1.transformArguments = ARRINDEX$1.IS_READ_ONLY = ARRINDEX$1.FIRST_KEY_INDEX = void 0;
var _1$m = commands$2;
ARRINDEX$1.FIRST_KEY_INDEX = 1;
ARRINDEX$1.IS_READ_ONLY = true;

function transformArguments$U(key, path, json, start, stop) {
  var args = ['JSON.ARRINDEX', key, path, (0, _1$m.transformRedisJsonArgument)(json)];

  if (start !== undefined && start !== null) {
    args.push(start.toString());

    if (stop !== undefined && stop !== null) {
      args.push(stop.toString());
    }
  }

  return args;
}

ARRINDEX$1.transformArguments = transformArguments$U;

var ARRINSERT$1 = {};

Object.defineProperty(ARRINSERT$1, "__esModule", {
  value: true
});
ARRINSERT$1.transformArguments = ARRINSERT$1.FIRST_KEY_INDEX = void 0;
var _1$l = commands$2;
ARRINSERT$1.FIRST_KEY_INDEX = 1;

function transformArguments$T(key, path, index) {
  var args = ['JSON.ARRINSERT', key, path, index.toString()];

  for (var _len = arguments.length, jsons = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    jsons[_key - 3] = arguments[_key];
  }

  for (var _i = 0, _jsons = jsons; _i < _jsons.length; _i++) {
    var json = _jsons[_i];
    args.push((0, _1$l.transformRedisJsonArgument)(json));
  }

  return args;
}

ARRINSERT$1.transformArguments = transformArguments$T;

var ARRLEN$1 = {};

Object.defineProperty(ARRLEN$1, "__esModule", {
  value: true
});
ARRLEN$1.transformArguments = ARRLEN$1.IS_READ_ONLY = ARRLEN$1.FIRST_KEY_INDEX = void 0;
ARRLEN$1.FIRST_KEY_INDEX = 1;
ARRLEN$1.IS_READ_ONLY = true;

function transformArguments$S(key, path) {
  var args = ['JSON.ARRLEN', key];

  if (path) {
    args.push(path);
  }

  return args;
}

ARRLEN$1.transformArguments = transformArguments$S;

var ARRPOP$1 = {};

Object.defineProperty(ARRPOP$1, "__esModule", {
  value: true
});
ARRPOP$1.transformReply = ARRPOP$1.transformArguments = ARRPOP$1.FIRST_KEY_INDEX = void 0;
var _1$k = commands$2;
ARRPOP$1.FIRST_KEY_INDEX = 1;

function transformArguments$R(key, path, index) {
  var args = ['JSON.ARRPOP', key];

  if (path) {
    args.push(path);

    if (index !== undefined && index !== null) {
      args.push(index.toString());
    }
  }

  return args;
}

ARRPOP$1.transformArguments = transformArguments$R;

function transformReply$d(reply) {
  if (reply === null) return null;

  if (Array.isArray(reply)) {
    return reply.map(_1$k.transformRedisJsonNullReply);
  }

  return (0, _1$k.transformRedisJsonNullReply)(reply);
}

ARRPOP$1.transformReply = transformReply$d;

var ARRTRIM$1 = {};

Object.defineProperty(ARRTRIM$1, "__esModule", {
  value: true
});
ARRTRIM$1.transformArguments = ARRTRIM$1.FIRST_KEY_INDEX = void 0;
ARRTRIM$1.FIRST_KEY_INDEX = 1;

function transformArguments$Q(key, path, start, stop) {
  return ['JSON.ARRTRIM', key, path, start.toString(), stop.toString()];
}

ARRTRIM$1.transformArguments = transformArguments$Q;

var DEBUG_MEMORY$1 = {};

Object.defineProperty(DEBUG_MEMORY$1, "__esModule", {
  value: true
});
DEBUG_MEMORY$1.transformArguments = DEBUG_MEMORY$1.FIRST_KEY_INDEX = void 0;
DEBUG_MEMORY$1.FIRST_KEY_INDEX = 2;

function transformArguments$P(key, path) {
  var args = ['JSON.DEBUG', 'MEMORY', key];

  if (path) {
    args.push(path);
  }

  return args;
}

DEBUG_MEMORY$1.transformArguments = transformArguments$P;

var DEL$2 = {};

Object.defineProperty(DEL$2, "__esModule", {
  value: true
});
DEL$2.transformArguments = DEL$2.FIRST_KEY_INDEX = void 0;
DEL$2.FIRST_KEY_INDEX = 1;

function transformArguments$O(key, path) {
  var args = ['JSON.DEL', key];

  if (path) {
    args.push(path);
  }

  return args;
}

DEL$2.transformArguments = transformArguments$O;

var FORGET$1 = {};

Object.defineProperty(FORGET$1, "__esModule", {
  value: true
});
FORGET$1.transformArguments = FORGET$1.FIRST_KEY_INDEX = void 0;
FORGET$1.FIRST_KEY_INDEX = 1;

function transformArguments$N(key, path) {
  var args = ['JSON.FORGET', key];

  if (path) {
    args.push(path);
  }

  return args;
}

FORGET$1.transformArguments = transformArguments$N;

var GET$2 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
  var generic_transformers_1 = genericTransformers;
  exports.FIRST_KEY_INDEX = 1;
  exports.IS_READ_ONLY = true;

  function transformArguments(key, options) {
    var args = ['JSON.GET', key];

    if (options === null || options === void 0 ? void 0 : options.path) {
      (0, generic_transformers_1.pushVerdictArguments)(args, options.path);
    }

    if (options === null || options === void 0 ? void 0 : options.INDENT) {
      args.push('INDENT', options.INDENT);
    }

    if (options === null || options === void 0 ? void 0 : options.NEWLINE) {
      args.push('NEWLINE', options.NEWLINE);
    }

    if (options === null || options === void 0 ? void 0 : options.SPACE) {
      args.push('SPACE', options.SPACE);
    }

    if (options === null || options === void 0 ? void 0 : options.NOESCAPE) {
      args.push('NOESCAPE');
    }

    return args;
  }

  exports.transformArguments = transformArguments;
  var _1 = commands$2;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return _1.transformRedisJsonNullReply;
    }
  });
})(GET$2);

var MGET$2 = {};

Object.defineProperty(MGET$2, "__esModule", {
  value: true
});
MGET$2.transformReply = MGET$2.transformArguments = MGET$2.FIRST_KEY_INDEX = void 0;
var _1$j = commands$2;
MGET$2.FIRST_KEY_INDEX = 1;

function transformArguments$M(keys, path) {
  return ['JSON.MGET'].concat(_toConsumableArray(keys), [path]);
}

MGET$2.transformArguments = transformArguments$M;

function transformReply$c(reply) {
  return reply.map(_1$j.transformRedisJsonNullReply);
}

MGET$2.transformReply = transformReply$c;

var NUMINCRBY$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, path, by) {
    return ['JSON.NUMINCRBY', key, path, by.toString()];
  }

  exports.transformArguments = transformArguments;
  var _1 = commands$2;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return _1.transformNumbersReply;
    }
  });
})(NUMINCRBY$1);

var NUMMULTBY$1 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
  exports.FIRST_KEY_INDEX = 1;

  function transformArguments(key, path, by) {
    return ['JSON.NUMMULTBY', key, path, by.toString()];
  }

  exports.transformArguments = transformArguments;
  var _1 = commands$2;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return _1.transformNumbersReply;
    }
  });
})(NUMMULTBY$1);

var OBJKEYS$1 = {};

Object.defineProperty(OBJKEYS$1, "__esModule", {
  value: true
});
OBJKEYS$1.transformArguments = OBJKEYS$1.FIRST_KEY_INDEX = void 0;
OBJKEYS$1.FIRST_KEY_INDEX = 1;

function transformArguments$L(key, path) {
  var args = ['JSON.OBJKEYS', key];

  if (path) {
    args.push(path);
  }

  return args;
}

OBJKEYS$1.transformArguments = transformArguments$L;

var OBJLEN$1 = {};

Object.defineProperty(OBJLEN$1, "__esModule", {
  value: true
});
OBJLEN$1.transformArguments = OBJLEN$1.FIRST_KEY_INDEX = void 0;
OBJLEN$1.FIRST_KEY_INDEX = 1;

function transformArguments$K(key, path) {
  var args = ['JSON.OBJLEN', key];

  if (path) {
    args.push(path);
  }

  return args;
}

OBJLEN$1.transformArguments = transformArguments$K;

var RESP$1 = {};

Object.defineProperty(RESP$1, "__esModule", {
  value: true
});
RESP$1.transformArguments = RESP$1.FIRST_KEY_INDEX = void 0;
RESP$1.FIRST_KEY_INDEX = 1;

function transformArguments$J(key, path) {
  var args = ['JSON.RESP', key];

  if (path) {
    args.push(path);
  }

  return args;
}

RESP$1.transformArguments = transformArguments$J;

var SET$1 = {};

Object.defineProperty(SET$1, "__esModule", {
  value: true
});
SET$1.transformArguments = SET$1.FIRST_KEY_INDEX = void 0;
var _1$i = commands$2;
SET$1.FIRST_KEY_INDEX = 1;

function transformArguments$I(key, path, json, options) {
  var _a, _b;

  var args = ['JSON.SET', key, path, (0, _1$i.transformRedisJsonArgument)(json)];

  if ((_a = options) === null || _a === void 0 ? void 0 : _a.NX) {
    args.push('NX');
  } else if ((_b = options) === null || _b === void 0 ? void 0 : _b.XX) {
    args.push('XX');
  }

  return args;
}

SET$1.transformArguments = transformArguments$I;

var STRAPPEND$1 = {};

Object.defineProperty(STRAPPEND$1, "__esModule", {
  value: true
});
STRAPPEND$1.transformArguments = STRAPPEND$1.FIRST_KEY_INDEX = void 0;
var _1$h = commands$2;
STRAPPEND$1.FIRST_KEY_INDEX = 1;

function transformArguments$H() {
  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
    _ref[_key] = arguments[_key];
  }

  var key = _ref[0],
      pathOrAppend = _ref[1],
      append = _ref[2];
  var args = ['JSON.STRAPPEND', key];

  if (append !== undefined && append !== null) {
    args.push(pathOrAppend, (0, _1$h.transformRedisJsonArgument)(append));
  } else {
    args.push((0, _1$h.transformRedisJsonArgument)(pathOrAppend));
  }

  return args;
}

STRAPPEND$1.transformArguments = transformArguments$H;

var STRLEN$1 = {};

Object.defineProperty(STRLEN$1, "__esModule", {
  value: true
});
STRLEN$1.transformArguments = STRLEN$1.IS_READ_ONLY = STRLEN$1.FIRST_KEY_INDEX = void 0;
STRLEN$1.FIRST_KEY_INDEX = 1;
STRLEN$1.IS_READ_ONLY = true;

function transformArguments$G(key, path) {
  var args = ['JSON.STRLEN', key];

  if (path) {
    args.push(path);
  }

  return args;
}

STRLEN$1.transformArguments = transformArguments$G;

var TYPE$1 = {};

Object.defineProperty(TYPE$1, "__esModule", {
  value: true
});
TYPE$1.transformArguments = TYPE$1.FIRST_KEY_INDEX = void 0;
TYPE$1.FIRST_KEY_INDEX = 1;

function transformArguments$F(key, path) {
  var args = ['JSON.TYPE', key];

  if (path) {
    args.push(path);
  }

  return args;
}

TYPE$1.transformArguments = transformArguments$F;

Object.defineProperty(commands$2, "__esModule", {
  value: true
});
commands$2.transformNumbersReply = commands$2.transformRedisJsonNullReply = commands$2.transformRedisJsonReply = commands$2.transformRedisJsonArgument = void 0;
var ARRAPPEND = ARRAPPEND$1;
var ARRINDEX = ARRINDEX$1;
var ARRINSERT = ARRINSERT$1;
var ARRLEN = ARRLEN$1;
var ARRPOP = ARRPOP$1;
var ARRTRIM = ARRTRIM$1;
var DEBUG_MEMORY = DEBUG_MEMORY$1;
var DEL$1 = DEL$2;
var FORGET = FORGET$1;
var GET$1 = GET$2;
var MGET$1 = MGET$2;
var NUMINCRBY = NUMINCRBY$1;
var NUMMULTBY = NUMMULTBY$1;
var OBJKEYS = OBJKEYS$1;
var OBJLEN = OBJLEN$1;
var RESP = RESP$1;
var SET = SET$1;
var STRAPPEND = STRAPPEND$1;
var STRLEN = STRLEN$1;
var TYPE = TYPE$1;

commands$2["default"] = {
  ARRAPPEND: ARRAPPEND,
  arrAppend: ARRAPPEND,
  ARRINDEX: ARRINDEX,
  arrIndex: ARRINDEX,
  ARRINSERT: ARRINSERT,
  arrInsert: ARRINSERT,
  ARRLEN: ARRLEN,
  arrLen: ARRLEN,
  ARRPOP: ARRPOP,
  arrPop: ARRPOP,
  ARRTRIM: ARRTRIM,
  arrTrim: ARRTRIM,
  DEBUG_MEMORY: DEBUG_MEMORY,
  debugMemory: DEBUG_MEMORY,
  DEL: DEL$1,
  del: DEL$1,
  FORGET: FORGET,
  forget: FORGET,
  GET: GET$1,
  get: GET$1,
  MGET: MGET$1,
  mGet: MGET$1,
  NUMINCRBY: NUMINCRBY,
  numIncrBy: NUMINCRBY,
  NUMMULTBY: NUMMULTBY,
  numMultBy: NUMMULTBY,
  OBJKEYS: OBJKEYS,
  objKeys: OBJKEYS,
  OBJLEN: OBJLEN,
  objLen: OBJLEN,
  RESP: RESP,
  resp: RESP,
  SET: SET,
  set: SET,
  STRAPPEND: STRAPPEND,
  strAppend: STRAPPEND,
  STRLEN: STRLEN,
  strLen: STRLEN,
  TYPE: TYPE,
  type: TYPE
};

function transformRedisJsonArgument(json) {
  return JSON.stringify(json);
}

commands$2.transformRedisJsonArgument = transformRedisJsonArgument;

function transformRedisJsonReply(json) {
  return JSON.parse(json);
}

commands$2.transformRedisJsonReply = transformRedisJsonReply;

function transformRedisJsonNullReply(json) {
  if (json === null) return null;
  return transformRedisJsonReply(json);
}

commands$2.transformRedisJsonNullReply = transformRedisJsonNullReply;

function transformNumbersReply(reply) {
  return JSON.parse(reply);
}

commands$2.transformNumbersReply = transformNumbersReply;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var commands_1 = commands$2;
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return commands_1["default"];
    }
  });
})(dist$2);

var dist$1 = {};

var commands$1 = {};

var _LIST = {};

Object.defineProperty(_LIST, "__esModule", {
  value: true
});
_LIST.transformArguments = void 0;

function transformArguments$E() {
  return ['FT._LIST'];
}

_LIST.transformArguments = transformArguments$E;

var ALTER$1 = {};

Object.defineProperty(ALTER$1, "__esModule", {
  value: true
});
ALTER$1.transformArguments = void 0;
var _1$g = commands$1;

function transformArguments$D(index, schema) {
  var args = ['FT.ALTER', index, 'SCHEMA', 'ADD'];
  (0, _1$g.pushSchema)(args, schema);
  return args;
}

ALTER$1.transformArguments = transformArguments$D;

var AGGREGATE = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.pushAggregatehOptions = exports.transformArguments = exports.AggregateGroupByReducers = exports.AggregateSteps = void 0;
  var generic_transformers_1 = genericTransformers;
  var _1 = commands$1;
  var AggregateSteps;

  (function (AggregateSteps) {
    AggregateSteps["GROUPBY"] = "GROUPBY";
    AggregateSteps["SORTBY"] = "SORTBY";
    AggregateSteps["APPLY"] = "APPLY";
    AggregateSteps["LIMIT"] = "LIMIT";
    AggregateSteps["FILTER"] = "FILTER";
  })(AggregateSteps = exports.AggregateSteps || (exports.AggregateSteps = {}));

  var AggregateGroupByReducers;

  (function (AggregateGroupByReducers) {
    AggregateGroupByReducers["COUNT"] = "COUNT";
    AggregateGroupByReducers["COUNT_DISTINCT"] = "COUNT_DISTINCT";
    AggregateGroupByReducers["COUNT_DISTINCTISH"] = "COUNT_DISTINCTISH";
    AggregateGroupByReducers["SUM"] = "SUM";
    AggregateGroupByReducers["MIN"] = "MIN";
    AggregateGroupByReducers["MAX"] = "MAX";
    AggregateGroupByReducers["AVG"] = "AVG";
    AggregateGroupByReducers["STDDEV"] = "STDDEV";
    AggregateGroupByReducers["QUANTILE"] = "QUANTILE";
    AggregateGroupByReducers["TOLIST"] = "TOLIST";
    AggregateGroupByReducers["TO_LIST"] = "TOLIST";
    AggregateGroupByReducers["FIRST_VALUE"] = "FIRST_VALUE";
    AggregateGroupByReducers["RANDOM_SAMPLE"] = "RANDOM_SAMPLE";
  })(AggregateGroupByReducers = exports.AggregateGroupByReducers || (exports.AggregateGroupByReducers = {}));

  function transformArguments(index, query, options) {
    var args = ['FT.AGGREGATE', index, query];
    pushAggregatehOptions(args, options);
    return args;
  }

  exports.transformArguments = transformArguments;

  function pushAggregatehOptions(args, options) {
    if (options === null || options === void 0 ? void 0 : options.VERBATIM) {
      args.push('VERBATIM');
    }

    if (options === null || options === void 0 ? void 0 : options.LOAD) {
      args.push('LOAD');
      (0, _1.pushArgumentsWithLength)(args, function () {
        if (Array.isArray(options.LOAD)) {
          var _iterator = _createForOfIteratorHelper(options.LOAD),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var load = _step.value;
              pushLoadField(args, load);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          pushLoadField(args, options.LOAD);
        }
      });
    }

    if (options === null || options === void 0 ? void 0 : options.STEPS) {
      var _iterator2 = _createForOfIteratorHelper(options.STEPS),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var step = _step2.value;

          switch (step.type) {
            case AggregateSteps.GROUPBY:
              args.push('GROUPBY');

              if (!step.properties) {
                args.push('0');
              } else {
                (0, generic_transformers_1.pushVerdictArgument)(args, step.properties);
              }

              if (Array.isArray(step.REDUCE)) {
                var _iterator3 = _createForOfIteratorHelper(step.REDUCE),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var reducer = _step3.value;
                    pushGroupByReducer(args, reducer);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              } else {
                pushGroupByReducer(args, step.REDUCE);
              }

              break;

            case AggregateSteps.SORTBY:
              (0, _1.pushSortByArguments)(args, 'SORTBY', step.BY);

              if (step.MAX) {
                args.push('MAX', step.MAX.toString());
              }

              break;

            case AggregateSteps.APPLY:
              args.push('APPLY', step.expression, 'AS', step.AS);
              break;

            case AggregateSteps.LIMIT:
              args.push('LIMIT', step.from.toString(), step.size.toString());
              break;

            case AggregateSteps.FILTER:
              args.push('FILTER', step.expression);
              break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    return args;
  }

  exports.pushAggregatehOptions = pushAggregatehOptions;

  function pushLoadField(args, toLoad) {
    if (typeof toLoad === 'string') {
      args.push(toLoad);
    } else {
      args.push(toLoad.identifier);

      if (toLoad.AS) {
        args.push('AS', toLoad.AS);
      }
    }
  }

  function pushGroupByReducer(args, reducer) {
    args.push('REDUCE', reducer.type);

    switch (reducer.type) {
      case AggregateGroupByReducers.COUNT:
        args.push('0');
        break;

      case AggregateGroupByReducers.COUNT_DISTINCT:
      case AggregateGroupByReducers.COUNT_DISTINCTISH:
      case AggregateGroupByReducers.SUM:
      case AggregateGroupByReducers.MIN:
      case AggregateGroupByReducers.MAX:
      case AggregateGroupByReducers.AVG:
      case AggregateGroupByReducers.STDDEV:
      case AggregateGroupByReducers.TOLIST:
        args.push('1', reducer.property);
        break;

      case AggregateGroupByReducers.QUANTILE:
        args.push('2', reducer.property, reducer.quantile.toString());
        break;

      case AggregateGroupByReducers.FIRST_VALUE:
        {
          (0, _1.pushArgumentsWithLength)(args, function () {
            args.push(reducer.property);

            if (reducer.BY) {
              args.push('BY');

              if (typeof reducer.BY === 'string') {
                args.push(reducer.BY);
              } else {
                args.push(reducer.BY.property);

                if (reducer.BY.direction) {
                  args.push(reducer.BY.direction);
                }
              }
            }
          });
          break;
        }

      case AggregateGroupByReducers.RANDOM_SAMPLE:
        args.push('2', reducer.property, reducer.sampleSize.toString());
        break;
    }

    if (reducer.AS) {
      args.push('AS', reducer.AS);
    }
  }

  function transformReply(rawReply) {
    var results = [];

    for (var i = 1; i < rawReply.length; i++) {
      results.push((0, generic_transformers_1.transformTuplesReply)(rawReply[i]));
    }

    return {
      total: rawReply[0],
      results: results
    };
  }

  exports.transformReply = transformReply;
})(AGGREGATE);

var ALIASADD = {};

Object.defineProperty(ALIASADD, "__esModule", {
  value: true
});
ALIASADD.transformArguments = void 0;

function transformArguments$C(name, index) {
  return ['FT.ALIASADD', name, index];
}

ALIASADD.transformArguments = transformArguments$C;

var ALIASDEL = {};

Object.defineProperty(ALIASDEL, "__esModule", {
  value: true
});
ALIASDEL.transformArguments = void 0;

function transformArguments$B(name, index) {
  return ['FT.ALIASDEL', name, index];
}

ALIASDEL.transformArguments = transformArguments$B;

var ALIASUPDATE = {};

Object.defineProperty(ALIASUPDATE, "__esModule", {
  value: true
});
ALIASUPDATE.transformArguments = void 0;

function transformArguments$A(name, index) {
  return ['FT.ALIASUPDATE', name, index];
}

ALIASUPDATE.transformArguments = transformArguments$A;

var CONFIG_GET = {};

Object.defineProperty(CONFIG_GET, "__esModule", {
  value: true
});
CONFIG_GET.transformReply = CONFIG_GET.transformArguments = void 0;

function transformArguments$z(option) {
  return ['FT.CONFIG', 'GET', option];
}

CONFIG_GET.transformArguments = transformArguments$z;

function transformReply$b(rawReply) {
  var transformedReply = Object.create(null);

  var _iterator = _createForOfIteratorHelper(rawReply),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      transformedReply[key] = value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return transformedReply;
}

CONFIG_GET.transformReply = transformReply$b;

var CONFIG_SET = {};

Object.defineProperty(CONFIG_SET, "__esModule", {
  value: true
});
CONFIG_SET.transformArguments = void 0;

function transformArguments$y(option, value) {
  return ['FT.CONFIG', 'SET', option, value];
}

CONFIG_SET.transformArguments = transformArguments$y;

var CREATE$1 = {};

Object.defineProperty(CREATE$1, "__esModule", {
  value: true
});
CREATE$1.transformArguments = void 0;
var generic_transformers_1$5 = genericTransformers;
var _1$f = commands$1;

function transformArguments$x(index, schema, options) {
  var args = ['FT.CREATE', index];

  if (options === null || options === void 0 ? void 0 : options.ON) {
    args.push('ON', options.ON);
  }

  (0, generic_transformers_1$5.pushOptionalVerdictArgument)(args, 'PREFIX', options === null || options === void 0 ? void 0 : options.PREFIX);

  if (options === null || options === void 0 ? void 0 : options.FILTER) {
    args.push('FILTER', options.FILTER);
  }

  if (options === null || options === void 0 ? void 0 : options.LANGUAGE) {
    args.push('LANGUAGE', options.LANGUAGE);
  }

  if (options === null || options === void 0 ? void 0 : options.LANGUAGE_FIELD) {
    args.push('LANGUAGE_FIELD', options.LANGUAGE_FIELD);
  }

  if (options === null || options === void 0 ? void 0 : options.SCORE) {
    args.push('SCORE', options.SCORE.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.SCORE_FIELD) {
    args.push('SCORE_FIELD', options.SCORE_FIELD);
  } // if (options?.PAYLOAD_FIELD) {
  //     args.push('PAYLOAD_FIELD', options.PAYLOAD_FIELD);
  // }


  if (options === null || options === void 0 ? void 0 : options.MAXTEXTFIELDS) {
    args.push('MAXTEXTFIELDS');
  }

  if (options === null || options === void 0 ? void 0 : options.TEMPORARY) {
    args.push('TEMPORARY', options.TEMPORARY.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.NOOFFSETS) {
    args.push('NOOFFSETS');
  }

  if (options === null || options === void 0 ? void 0 : options.NOHL) {
    args.push('NOHL');
  }

  if (options === null || options === void 0 ? void 0 : options.NOFIELDS) {
    args.push('NOFIELDS');
  }

  if (options === null || options === void 0 ? void 0 : options.NOFREQS) {
    args.push('NOFREQS');
  }

  if (options === null || options === void 0 ? void 0 : options.SKIPINITIALSCAN) {
    args.push('SKIPINITIALSCAN');
  }

  (0, generic_transformers_1$5.pushOptionalVerdictArgument)(args, 'STOPWORDS', options === null || options === void 0 ? void 0 : options.STOPWORDS);
  args.push('SCHEMA');
  (0, _1$f.pushSchema)(args, schema);
  return args;
}

CREATE$1.transformArguments = transformArguments$x;

var DICTADD = {};

Object.defineProperty(DICTADD, "__esModule", {
  value: true
});
DICTADD.transformArguments = void 0;
var generic_transformers_1$4 = genericTransformers;

function transformArguments$w(dictionary, term) {
  return (0, generic_transformers_1$4.pushVerdictArguments)(['FT.DICTADD', dictionary], term);
}

DICTADD.transformArguments = transformArguments$w;

var DICTDEL = {};

Object.defineProperty(DICTDEL, "__esModule", {
  value: true
});
DICTDEL.transformArguments = void 0;
var generic_transformers_1$3 = genericTransformers;

function transformArguments$v(dictionary, term) {
  return (0, generic_transformers_1$3.pushVerdictArguments)(['FT.DICTDEL', dictionary], term);
}

DICTDEL.transformArguments = transformArguments$v;

var DICTDUMP = {};

Object.defineProperty(DICTDUMP, "__esModule", {
  value: true
});
DICTDUMP.transformArguments = void 0;

function transformArguments$u(dictionary) {
  return ['FT.DICTDUMP', dictionary];
}

DICTDUMP.transformArguments = transformArguments$u;

var DROPINDEX = {};

Object.defineProperty(DROPINDEX, "__esModule", {
  value: true
});
DROPINDEX.transformArguments = void 0;

function transformArguments$t(index, options) {
  var args = ['FT.DROPINDEX', index];

  if (options === null || options === void 0 ? void 0 : options.DD) {
    args.push('DD');
  }

  return args;
}

DROPINDEX.transformArguments = transformArguments$t;

var EXPLAIN = {};

Object.defineProperty(EXPLAIN, "__esModule", {
  value: true
});
EXPLAIN.transformArguments = EXPLAIN.IS_READ_ONLY = void 0;
EXPLAIN.IS_READ_ONLY = true;

function transformArguments$s(index, query) {
  return ['FT.EXPLAIN', index, query];
}

EXPLAIN.transformArguments = transformArguments$s;

var EXPLAINCLI = {};

Object.defineProperty(EXPLAINCLI, "__esModule", {
  value: true
});
EXPLAINCLI.transformArguments = EXPLAINCLI.IS_READ_ONLY = void 0;
EXPLAINCLI.IS_READ_ONLY = true;

function transformArguments$r(index, query) {
  return ['FT.EXPLAINCLI', index, query];
}

EXPLAINCLI.transformArguments = transformArguments$r;

var INFO$1 = {};

Object.defineProperty(INFO$1, "__esModule", {
  value: true
});
INFO$1.transformReply = INFO$1.transformArguments = void 0;

function transformArguments$q(index) {
  return ['FT.INFO', index];
}

INFO$1.transformArguments = transformArguments$q;

function transformReply$a(rawReply) {
  return {
    indexName: rawReply[1],
    indexOptions: rawReply[3],
    indexDefinition: {
      keyType: rawReply[5][1],
      prefixes: rawReply[5][3],
      defaultScore: rawReply[5][5]
    },
    attributes: rawReply[7],
    numDocs: rawReply[9],
    maxDocId: rawReply[11],
    numTerms: rawReply[13],
    numRecords: rawReply[15],
    invertedSzMb: rawReply[17],
    totalInvertedIndexBlocks: rawReply[19],
    offsetVectorsSzMb: rawReply[21],
    docTableSizeMb: rawReply[23],
    sortableValuesSizeMb: rawReply[25],
    keyTableSizeMb: rawReply[27],
    recordsPerDocAvg: rawReply[29],
    bytesPerRecordAvg: rawReply[31],
    offsetsPerTermAvg: rawReply[33],
    offsetBitsPerRecordAvg: rawReply[35],
    hashIndexingFailures: rawReply[37],
    indexing: rawReply[39],
    percentIndexed: rawReply[41],
    gcStats: {
      bytesCollected: rawReply[43][1],
      totalMsRun: rawReply[43][3],
      totalCycles: rawReply[43][5],
      averageCycleTimeMs: rawReply[43][7],
      lastRunTimeMs: rawReply[43][9],
      gcNumericTreesMissed: rawReply[43][11],
      gcBlocksDenied: rawReply[43][13]
    },
    cursorStats: {
      globalIdle: rawReply[45][1],
      globalTotal: rawReply[45][3],
      indexCapacity: rawReply[45][5],
      idnexTotal: rawReply[45][7]
    }
  };
}

INFO$1.transformReply = transformReply$a;

var PROFILE_SEARCH = {};

var SEARCH = {};

Object.defineProperty(SEARCH, "__esModule", {
  value: true
});
SEARCH.transformReply = SEARCH.transformArguments = SEARCH.IS_READ_ONLY = SEARCH.FIRST_KEY_INDEX = void 0;
var generic_transformers_1$2 = genericTransformers;
var _1$e = commands$1;
SEARCH.FIRST_KEY_INDEX = 1;
SEARCH.IS_READ_ONLY = true;

function transformArguments$p(index, query, options) {
  var args = ['FT.SEARCH', index, query];
  (0, _1$e.pushSearchOptions)(args, options);
  return args;
}

SEARCH.transformArguments = transformArguments$p;

function transformReply$9(reply) {
  var documents = [];

  for (var i = 1; i < reply.length; i += 2) {
    var tuples = reply[i + 1];
    documents.push({
      id: reply[i],
      value: tuples.length === 2 && tuples[0] === '$' ? JSON.parse(tuples[1]) : (0, generic_transformers_1$2.transformTuplesReply)(tuples)
    });
  }

  return {
    total: reply[0],
    documents: documents
  };
}

SEARCH.transformReply = transformReply$9;

Object.defineProperty(PROFILE_SEARCH, "__esModule", {
  value: true
});
PROFILE_SEARCH.transformReply = PROFILE_SEARCH.transformArguments = PROFILE_SEARCH.IS_READ_ONLY = void 0;
var SEARCH_1 = SEARCH;
var _1$d = commands$1;
PROFILE_SEARCH.IS_READ_ONLY = true;

function transformArguments$o(index, query, options) {
  var args = ['FT.PROFILE', index, 'SEARCH'];

  if (options === null || options === void 0 ? void 0 : options.LIMITED) {
    args.push('LIMITED');
  }

  args.push('QUERY', query);
  (0, _1$d.pushSearchOptions)(args, options);
  return args;
}

PROFILE_SEARCH.transformArguments = transformArguments$o;

function transformReply$8(reply) {
  return {
    results: (0, SEARCH_1.transformReply)(reply[0]),
    profile: (0, _1$d.transformProfile)(reply[1])
  };
}

PROFILE_SEARCH.transformReply = transformReply$8;

var PROFILE_AGGREGATE = {};

Object.defineProperty(PROFILE_AGGREGATE, "__esModule", {
  value: true
});
PROFILE_AGGREGATE.transformReply = PROFILE_AGGREGATE.transformArguments = PROFILE_AGGREGATE.IS_READ_ONLY = void 0;
var AGGREGATE_1 = AGGREGATE;
var _1$c = commands$1;
PROFILE_AGGREGATE.IS_READ_ONLY = true;

function transformArguments$n(index, query, options) {
  var args = ['FT.PROFILE', index, 'AGGREGATE'];

  if (options === null || options === void 0 ? void 0 : options.LIMITED) {
    args.push('LIMITED');
  }

  args.push('QUERY', query);
  (0, AGGREGATE_1.pushAggregatehOptions)(args, options);
  return args;
}

PROFILE_AGGREGATE.transformArguments = transformArguments$n;

function transformReply$7(reply) {
  return {
    results: (0, AGGREGATE_1.transformReply)(reply[0]),
    profile: (0, _1$c.transformProfile)(reply[1])
  };
}

PROFILE_AGGREGATE.transformReply = transformReply$7;

var SPELLCHECK = {};

Object.defineProperty(SPELLCHECK, "__esModule", {
  value: true
});
SPELLCHECK.transformReply = SPELLCHECK.transformArguments = void 0;

function transformArguments$m(index, query, options) {
  var args = ['FT.SPELLCHECK', index, query];

  if (options === null || options === void 0 ? void 0 : options.DISTANCE) {
    args.push('DISTANCE', options.DISTANCE.toString());
  }

  if (options === null || options === void 0 ? void 0 : options.TERMS) {
    if (Array.isArray(options.TERMS)) {
      var _iterator = _createForOfIteratorHelper(options.TERMS),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var term = _step.value;
          pushTerms(args, term);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      pushTerms(args, options.TERMS);
    }
  }

  return args;
}

SPELLCHECK.transformArguments = transformArguments$m;

function pushTerms(args, _ref) {
  var mode = _ref.mode,
      dictionary = _ref.dictionary;
  args.push('TERMS', mode, dictionary);
}

function transformReply$6(rawReply) {
  return rawReply.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        term = _ref3[1],
        suggestions = _ref3[2];

    return {
      term: term,
      suggestions: suggestions.map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            score = _ref5[0],
            suggestion = _ref5[1];

        return {
          score: Number(score),
          suggestion: suggestion
        };
      })
    };
  });
}

SPELLCHECK.transformReply = transformReply$6;

var SUGADD = {};

Object.defineProperty(SUGADD, "__esModule", {
  value: true
});
SUGADD.transformArguments = void 0;

function transformArguments$l(key, string, score, options) {
  var args = ['FT.SUGADD', key, string, score.toString()];

  if (options === null || options === void 0 ? void 0 : options.INCR) {
    args.push('INCR');
  }

  if (options === null || options === void 0 ? void 0 : options.PAYLOAD) {
    args.push('PAYLOAD', options.PAYLOAD);
  }

  return args;
}

SUGADD.transformArguments = transformArguments$l;

var SUGDEL = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = void 0;

  function transformArguments(key, string) {
    return ['FT.SUGDEL', key, string];
  }

  exports.transformArguments = transformArguments;
  var generic_transformers_1 = genericTransformers;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return generic_transformers_1.transformBooleanReply;
    }
  });
})(SUGDEL);

var SUGGET_WITHPAYLOADS = {};

var SUGGET = {};

Object.defineProperty(SUGGET, "__esModule", {
  value: true
});
SUGGET.transformArguments = SUGGET.IS_READ_ONLY = void 0;
SUGGET.IS_READ_ONLY = true;

function transformArguments$k(key, prefix, options) {
  var args = ['FT.SUGGET', key, prefix];

  if (options === null || options === void 0 ? void 0 : options.FUZZY) {
    args.push('FUZZY');
  }

  if (options === null || options === void 0 ? void 0 : options.MAX) {
    args.push('MAX', options.MAX.toString());
  }

  return args;
}

SUGGET.transformArguments = transformArguments$k;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
  var SUGGET_1 = SUGGET;
  var SUGGET_2 = SUGGET;
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return SUGGET_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, prefix, options) {
    return [].concat(_toConsumableArray((0, SUGGET_1.transformArguments)(key, prefix, options)), ['WITHPAYLOADS']);
  }

  exports.transformArguments = transformArguments;

  function transformReply(rawReply) {
    if (rawReply === null) return null;
    var transformedReply = [];

    for (var i = 0; i < rawReply.length; i += 2) {
      transformedReply.push({
        suggestion: rawReply[i],
        payload: rawReply[i + 1]
      });
    }

    return transformedReply;
  }

  exports.transformReply = transformReply;
})(SUGGET_WITHPAYLOADS);

var SUGGET_WITHSCORES_WITHPAYLOADS = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
  var SUGGET_1 = SUGGET;
  var SUGGET_2 = SUGGET;
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return SUGGET_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, prefix, options) {
    return [].concat(_toConsumableArray((0, SUGGET_1.transformArguments)(key, prefix, options)), ['WITHSCORES', 'WITHPAYLOADS']);
  }

  exports.transformArguments = transformArguments;

  function transformReply(rawReply) {
    if (rawReply === null) return null;
    var transformedReply = [];

    for (var i = 0; i < rawReply.length; i += 3) {
      transformedReply.push({
        suggestion: rawReply[i],
        score: Number(rawReply[i + 1]),
        payload: rawReply[i + 2]
      });
    }

    return transformedReply;
  }

  exports.transformReply = transformReply;
})(SUGGET_WITHSCORES_WITHPAYLOADS);

var SUGGET_WITHSCORES = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
  var SUGGET_1 = SUGGET;
  var SUGGET_2 = SUGGET;
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return SUGGET_2.IS_READ_ONLY;
    }
  });

  function transformArguments(key, prefix, options) {
    return [].concat(_toConsumableArray((0, SUGGET_1.transformArguments)(key, prefix, options)), ['WITHSCORES']);
  }

  exports.transformArguments = transformArguments;

  function transformReply(rawReply) {
    if (rawReply === null) return null;
    var transformedReply = [];

    for (var i = 0; i < rawReply.length; i += 2) {
      transformedReply.push({
        suggestion: rawReply[i],
        score: Number(rawReply[i + 1])
      });
    }

    return transformedReply;
  }

  exports.transformReply = transformReply;
})(SUGGET_WITHSCORES);

var SUGLEN = {};

Object.defineProperty(SUGLEN, "__esModule", {
  value: true
});
SUGLEN.transformArguments = SUGLEN.IS_READ_ONLY = void 0;
SUGLEN.IS_READ_ONLY = true;

function transformArguments$j(key) {
  return ['FT.SUGLEN', key];
}

SUGLEN.transformArguments = transformArguments$j;

var SYNDUMP = {};

Object.defineProperty(SYNDUMP, "__esModule", {
  value: true
});
SYNDUMP.transformArguments = void 0;

function transformArguments$i(index) {
  return ['FT.SYNDUMP', index];
}

SYNDUMP.transformArguments = transformArguments$i;

var SYNUPDATE = {};

Object.defineProperty(SYNUPDATE, "__esModule", {
  value: true
});
SYNUPDATE.transformArguments = void 0;
var generic_transformers_1$1 = genericTransformers;

function transformArguments$h(index, groupId, terms, options) {
  var args = ['FT.SYNUPDATE', index, groupId];

  if (options === null || options === void 0 ? void 0 : options.SKIPINITIALSCAN) {
    args.push('SKIPINITIALSCAN');
  }

  return (0, generic_transformers_1$1.pushVerdictArguments)(args, terms);
}

SYNUPDATE.transformArguments = transformArguments$h;

var TAGVALS = {};

Object.defineProperty(TAGVALS, "__esModule", {
  value: true
});
TAGVALS.transformArguments = void 0;

function transformArguments$g(index, fieldName) {
  return ['FT.TAGVALS', index, fieldName];
}

TAGVALS.transformArguments = transformArguments$g;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformProfile = exports.pushSearchOptions = exports.pushSchema = exports.SchemaTextFieldPhonetics = exports.SchemaFieldTypes = exports.pushArgumentsWithLength = exports.pushSortByArguments = exports.pushSortByProperty = exports.RedisSearchLanguages = void 0;
  var _LIST$1 = _LIST;
  var ALTER = ALTER$1;
  var AGGREGATE$1 = AGGREGATE;
  var ALIASADD$1 = ALIASADD;
  var ALIASDEL$1 = ALIASDEL;
  var ALIASUPDATE$1 = ALIASUPDATE;
  var CONFIG_GET$1 = CONFIG_GET;
  var CONFIG_SET$1 = CONFIG_SET;
  var CREATE = CREATE$1;
  var DICTADD$1 = DICTADD;
  var DICTDEL$1 = DICTDEL;
  var DICTDUMP$1 = DICTDUMP;
  var DROPINDEX$1 = DROPINDEX;
  var EXPLAIN$1 = EXPLAIN;
  var EXPLAINCLI$1 = EXPLAINCLI;
  var INFO = INFO$1;
  var PROFILESEARCH = PROFILE_SEARCH;
  var PROFILEAGGREGATE = PROFILE_AGGREGATE;
  var SEARCH$1 = SEARCH;
  var SPELLCHECK$1 = SPELLCHECK;
  var SUGADD$1 = SUGADD;
  var SUGDEL$1 = SUGDEL;
  var SUGGET_WITHPAYLOADS$1 = SUGGET_WITHPAYLOADS;
  var SUGGET_WITHSCORES_WITHPAYLOADS$1 = SUGGET_WITHSCORES_WITHPAYLOADS;
  var SUGGET_WITHSCORES$1 = SUGGET_WITHSCORES;
  var SUGGET$1 = SUGGET;
  var SUGLEN$1 = SUGLEN;
  var SYNDUMP$1 = SYNDUMP;
  var SYNUPDATE$1 = SYNUPDATE;
  var TAGVALS$1 = TAGVALS;
  var generic_transformers_1 = genericTransformers;
  exports["default"] = {
    _LIST: _LIST$1,
    _list: _LIST$1,
    ALTER: ALTER,
    alter: ALTER,
    AGGREGATE: AGGREGATE$1,
    aggregate: AGGREGATE$1,
    ALIASADD: ALIASADD$1,
    aliasAdd: ALIASADD$1,
    ALIASDEL: ALIASDEL$1,
    aliasDel: ALIASDEL$1,
    ALIASUPDATE: ALIASUPDATE$1,
    aliasUpdate: ALIASUPDATE$1,
    CONFIG_GET: CONFIG_GET$1,
    configGet: CONFIG_GET$1,
    CONFIG_SET: CONFIG_SET$1,
    configSet: CONFIG_SET$1,
    CREATE: CREATE,
    create: CREATE,
    DICTADD: DICTADD$1,
    dictAdd: DICTADD$1,
    DICTDEL: DICTDEL$1,
    dictDel: DICTDEL$1,
    DICTDUMP: DICTDUMP$1,
    dictDump: DICTDUMP$1,
    DROPINDEX: DROPINDEX$1,
    dropIndex: DROPINDEX$1,
    EXPLAIN: EXPLAIN$1,
    explain: EXPLAIN$1,
    EXPLAINCLI: EXPLAINCLI$1,
    explainCli: EXPLAINCLI$1,
    INFO: INFO,
    info: INFO,
    PROFILESEARCH: PROFILESEARCH,
    profileSearch: PROFILESEARCH,
    PROFILEAGGREGATE: PROFILEAGGREGATE,
    profileAggregate: PROFILEAGGREGATE,
    SEARCH: SEARCH$1,
    search: SEARCH$1,
    SPELLCHECK: SPELLCHECK$1,
    spellCheck: SPELLCHECK$1,
    SUGADD: SUGADD$1,
    sugAdd: SUGADD$1,
    SUGDEL: SUGDEL$1,
    sugDel: SUGDEL$1,
    SUGGET_WITHPAYLOADS: SUGGET_WITHPAYLOADS$1,
    sugGetWithPayloads: SUGGET_WITHPAYLOADS$1,
    SUGGET_WITHSCORES_WITHPAYLOADS: SUGGET_WITHSCORES_WITHPAYLOADS$1,
    sugGetWithScoresWithPayloads: SUGGET_WITHSCORES_WITHPAYLOADS$1,
    SUGGET_WITHSCORES: SUGGET_WITHSCORES$1,
    sugGetWithScores: SUGGET_WITHSCORES$1,
    SUGGET: SUGGET$1,
    sugGet: SUGGET$1,
    SUGLEN: SUGLEN$1,
    sugLen: SUGLEN$1,
    SYNDUMP: SYNDUMP$1,
    synDump: SYNDUMP$1,
    SYNUPDATE: SYNUPDATE$1,
    synUpdate: SYNUPDATE$1,
    TAGVALS: TAGVALS$1,
    tagVals: TAGVALS$1
  };

  (function (RedisSearchLanguages) {
    RedisSearchLanguages["ARABIC"] = "Arabic";
    RedisSearchLanguages["BASQUE"] = "Basque";
    RedisSearchLanguages["CATALANA"] = "Catalan";
    RedisSearchLanguages["DANISH"] = "Danish";
    RedisSearchLanguages["DUTCH"] = "Dutch";
    RedisSearchLanguages["ENGLISH"] = "English";
    RedisSearchLanguages["FINNISH"] = "Finnish";
    RedisSearchLanguages["FRENCH"] = "French";
    RedisSearchLanguages["GERMAN"] = "German";
    RedisSearchLanguages["GREEK"] = "Greek";
    RedisSearchLanguages["HUNGARIAN"] = "Hungarian";
    RedisSearchLanguages["INDONESAIN"] = "Indonesian";
    RedisSearchLanguages["IRISH"] = "Irish";
    RedisSearchLanguages["ITALIAN"] = "Italian";
    RedisSearchLanguages["LITHUANIAN"] = "Lithuanian";
    RedisSearchLanguages["NEPALI"] = "Nepali";
    RedisSearchLanguages["NORWEIGAN"] = "Norwegian";
    RedisSearchLanguages["PORTUGUESE"] = "Portuguese";
    RedisSearchLanguages["ROMANIAN"] = "Romanian";
    RedisSearchLanguages["RUSSIAN"] = "Russian";
    RedisSearchLanguages["SPANISH"] = "Spanish";
    RedisSearchLanguages["SWEDISH"] = "Swedish";
    RedisSearchLanguages["TAMIL"] = "Tamil";
    RedisSearchLanguages["TURKISH"] = "Turkish";
    RedisSearchLanguages["CHINESE"] = "Chinese";
  })(exports.RedisSearchLanguages || (exports.RedisSearchLanguages = {}));

  function pushSortByProperty(args, sortBy) {
    if (typeof sortBy === 'string') {
      args.push(sortBy);
    } else {
      args.push(sortBy.BY);

      if (sortBy.DIRECTION) {
        args.push(sortBy.DIRECTION);
      }
    }
  }

  exports.pushSortByProperty = pushSortByProperty;

  function pushSortByArguments(args, name, sortBy) {
    var lengthBefore = args.push(name, '' // will be overwritten
    );

    if (Array.isArray(sortBy)) {
      var _iterator = _createForOfIteratorHelper(sortBy),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          pushSortByProperty(args, field);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      pushSortByProperty(args, sortBy);
    }

    args[lengthBefore - 1] = (args.length - lengthBefore).toString();
    return args;
  }

  exports.pushSortByArguments = pushSortByArguments;

  function pushArgumentsWithLength(args, fn) {
    var lengthIndex = args.push('') - 1;
    fn(args);
    args[lengthIndex] = (args.length - lengthIndex - 1).toString();
    return args;
  }

  exports.pushArgumentsWithLength = pushArgumentsWithLength;
  var SchemaFieldTypes;

  (function (SchemaFieldTypes) {
    SchemaFieldTypes["TEXT"] = "TEXT";
    SchemaFieldTypes["NUMERIC"] = "NUMERIC";
    SchemaFieldTypes["GEO"] = "GEO";
    SchemaFieldTypes["TAG"] = "TAG";
  })(SchemaFieldTypes = exports.SchemaFieldTypes || (exports.SchemaFieldTypes = {}));

  (function (SchemaTextFieldPhonetics) {
    SchemaTextFieldPhonetics["DM_EN"] = "dm:en";
    SchemaTextFieldPhonetics["DM_FR"] = "dm:fr";
    SchemaTextFieldPhonetics["FM_PT"] = "dm:pt";
    SchemaTextFieldPhonetics["DM_ES"] = "dm:es";
  })(exports.SchemaTextFieldPhonetics || (exports.SchemaTextFieldPhonetics = {}));

  function pushSchema(args, schema) {
    for (var _i = 0, _Object$entries = Object.entries(schema); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          field = _Object$entries$_i[0],
          fieldOptions = _Object$entries$_i[1];

      args.push(field);

      if (typeof fieldOptions === 'string') {
        args.push(fieldOptions);
        continue;
      }

      if (fieldOptions.AS) {
        args.push('AS', fieldOptions.AS);
      }

      args.push(fieldOptions.type);

      switch (fieldOptions.type) {
        case SchemaFieldTypes.TEXT:
          if (fieldOptions.NOSTEM) {
            args.push('NOSTEM');
          }

          if (fieldOptions.WEIGHT) {
            args.push('WEIGHT', fieldOptions.WEIGHT.toString());
          }

          if (fieldOptions.PHONETIC) {
            args.push('PHONETIC', fieldOptions.PHONETIC);
          }

          break;
        // case SchemaFieldTypes.NUMERIC:
        // case SchemaFieldTypes.GEO:
        //     break;

        case SchemaFieldTypes.TAG:
          if (fieldOptions.SEPARATOR) {
            args.push('SEPARATOR', fieldOptions.SEPARATOR);
          }

          if (fieldOptions.CASESENSITIVE) {
            args.push('CASESENSITIVE');
          }

          break;
      }

      if (fieldOptions.SORTABLE) {
        args.push('SORTABLE');

        if (fieldOptions.SORTABLE === 'UNF') {
          args.push('UNF');
        }
      }

      if (fieldOptions.NOINDEX) {
        args.push('NOINDEX');
      }
    }
  }

  exports.pushSchema = pushSchema;

  function pushSearchOptions(args, options) {
    if (options === null || options === void 0 ? void 0 : options.VERBATIM) {
      args.push('VERBATIM');
    }

    if (options === null || options === void 0 ? void 0 : options.NOSTOPWORDS) {
      args.push('NOSTOPWORDS');
    } // if (options?.WITHSCORES) {
    //     args.push('WITHSCORES');
    // }
    // if (options?.WITHPAYLOADS) {
    //     args.push('WITHPAYLOADS');
    // }


    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'INKEYS', options === null || options === void 0 ? void 0 : options.INKEYS);
    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'INFIELDS', options === null || options === void 0 ? void 0 : options.INFIELDS);
    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'RETURN', options === null || options === void 0 ? void 0 : options.RETURN);

    if (options === null || options === void 0 ? void 0 : options.SUMMARIZE) {
      args.push('SUMMARIZE');

      if (_typeof(options.SUMMARIZE) === 'object') {
        if (options.SUMMARIZE.FIELDS) {
          args.push('FIELDS');
          (0, generic_transformers_1.pushVerdictArgument)(args, options.SUMMARIZE.FIELDS);
        }

        if (options.SUMMARIZE.FRAGS) {
          args.push('FRAGS', options.SUMMARIZE.FRAGS.toString());
        }

        if (options.SUMMARIZE.LEN) {
          args.push('LEN', options.SUMMARIZE.LEN.toString());
        }

        if (options.SUMMARIZE.SEPARATOR) {
          args.push('SEPARATOR', options.SUMMARIZE.SEPARATOR);
        }
      }
    }

    if (options === null || options === void 0 ? void 0 : options.HIGHLIGHT) {
      args.push('HIGHLIGHT');

      if (_typeof(options.HIGHLIGHT) === 'object') {
        if (options.HIGHLIGHT.FIELDS) {
          args.push('FIELDS');
          (0, generic_transformers_1.pushVerdictArgument)(args, options.HIGHLIGHT.FIELDS);
        }

        if (options.HIGHLIGHT.TAGS) {
          args.push('TAGS', options.HIGHLIGHT.TAGS.open, options.HIGHLIGHT.TAGS.close);
        }
      }
    }

    if (options === null || options === void 0 ? void 0 : options.SLOP) {
      args.push('SLOP', options.SLOP.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.INORDER) {
      args.push('INORDER');
    }

    if (options === null || options === void 0 ? void 0 : options.LANGUAGE) {
      args.push('LANGUAGE', options.LANGUAGE);
    }

    if (options === null || options === void 0 ? void 0 : options.EXPANDER) {
      args.push('EXPANDER', options.EXPANDER);
    }

    if (options === null || options === void 0 ? void 0 : options.SCORER) {
      args.push('SCORER', options.SCORER);
    } // if (options?.EXPLAINSCORE) {
    //     args.push('EXPLAINSCORE');
    // }
    // if (options?.PAYLOAD) {
    //     args.push('PAYLOAD', options.PAYLOAD);
    // }


    if (options === null || options === void 0 ? void 0 : options.SORTBY) {
      args.push('SORTBY');
      pushSortByProperty(args, options.SORTBY);
    } // if (options?.MSORTBY) {
    //     pushSortByArguments(args, 'MSORTBY', options.MSORTBY);
    // }


    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
      args.push('LIMIT', options.LIMIT.from.toString(), options.LIMIT.size.toString());
    }

    return args;
  }

  exports.pushSearchOptions = pushSearchOptions;

  function transformProfile(reply) {
    return {
      totalProfileTime: reply[0][1],
      parsingTime: reply[1][1],
      pipelineCreationTime: reply[2][1],
      iteratorsProfile: transformIterators(reply[3][1])
    };
  }

  exports.transformProfile = transformProfile;

  function transformIterators(IteratorsProfile) {
    var res = {};

    for (var i = 0; i < IteratorsProfile.length; i += 2) {
      var value = IteratorsProfile[i + 1];

      switch (IteratorsProfile[i]) {
        case 'Type':
          res.type = value;
          break;

        case 'Counter':
          res.counter = value;
          break;

        case 'Time':
          res.time = value;
          break;

        case 'Query type':
          res.queryType = value;
          break;

        case 'Child iterators':
          res.childIterators = value.map(transformChildIterators);
          break;
      }
    }

    return res;
  }

  function transformChildIterators(IteratorsProfile) {
    var res = {};

    for (var i = 1; i < IteratorsProfile.length; i += 2) {
      var value = IteratorsProfile[i + 1];

      switch (IteratorsProfile[i]) {
        case 'Type':
          res.type = value;
          break;

        case 'Counter':
          res.counter = value;
          break;

        case 'Time':
          res.time = value;
          break;

        case 'Size':
          res.size = value;
          break;

        case 'Term':
          res.term = value;
          break;

        case 'Child iterators':
          res.childIterators = value.map(transformChildIterators);
          break;
      }
    }

    return res;
  }
})(commands$1);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AggregateGroupByReducers = exports.AggregateSteps = exports.SchemaTextFieldPhonetics = exports.SchemaFieldTypes = exports["default"] = void 0;
  var commands_1 = commands$1;
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return commands_1["default"];
    }
  });
  var commands_2 = commands$1;
  Object.defineProperty(exports, "SchemaFieldTypes", {
    enumerable: true,
    get: function get() {
      return commands_2.SchemaFieldTypes;
    }
  });
  Object.defineProperty(exports, "SchemaTextFieldPhonetics", {
    enumerable: true,
    get: function get() {
      return commands_2.SchemaTextFieldPhonetics;
    }
  });
  var AGGREGATE_1 = AGGREGATE;
  Object.defineProperty(exports, "AggregateSteps", {
    enumerable: true,
    get: function get() {
      return AGGREGATE_1.AggregateSteps;
    }
  });
  Object.defineProperty(exports, "AggregateGroupByReducers", {
    enumerable: true,
    get: function get() {
      return AGGREGATE_1.AggregateGroupByReducers;
    }
  });
})(dist$1);

var dist = {};

var commands = {};

var ADD = {};

Object.defineProperty(ADD, "__esModule", {
  value: true
});
ADD.transformArguments = ADD.FIRST_KEY_INDEX = void 0;
var _1$b = commands;
ADD.FIRST_KEY_INDEX = 1;

function transformArguments$f(key, timestamp, value, options) {
  var args = ['TS.ADD', key, (0, _1$b.transformTimestampArgument)(timestamp), value.toString()];
  (0, _1$b.pushRetentionArgument)(args, options === null || options === void 0 ? void 0 : options.RETENTION);
  (0, _1$b.pushEncodingArgument)(args, options === null || options === void 0 ? void 0 : options.ENCODING);
  (0, _1$b.pushChunkSizeArgument)(args, options === null || options === void 0 ? void 0 : options.CHUNK_SIZE);

  if (options === null || options === void 0 ? void 0 : options.ON_DUPLICATE) {
    args.push('ON_DUPLICATE', options.ON_DUPLICATE);
  }

  (0, _1$b.pushLabelsArgument)(args, options === null || options === void 0 ? void 0 : options.LABELS);
  return args;
}

ADD.transformArguments = transformArguments$f;

var ALTER = {};

Object.defineProperty(ALTER, "__esModule", {
  value: true
});
ALTER.transformArguments = ALTER.FIRST_KEY_INDEX = void 0;
var _1$a = commands;
ALTER.FIRST_KEY_INDEX = 1;

function transformArguments$e(key, options) {
  var args = ['TS.ALTER', key];
  (0, _1$a.pushRetentionArgument)(args, options === null || options === void 0 ? void 0 : options.RETENTION);
  (0, _1$a.pushLabelsArgument)(args, options === null || options === void 0 ? void 0 : options.LABELS);
  return args;
}

ALTER.transformArguments = transformArguments$e;

var CREATE = {};

Object.defineProperty(CREATE, "__esModule", {
  value: true
});
CREATE.transformArguments = CREATE.FIRST_KEY_INDEX = void 0;
var _1$9 = commands;
CREATE.FIRST_KEY_INDEX = 1;

function transformArguments$d(key, options) {
  var args = ['TS.CREATE', key];
  (0, _1$9.pushRetentionArgument)(args, options === null || options === void 0 ? void 0 : options.RETENTION);
  (0, _1$9.pushEncodingArgument)(args, options === null || options === void 0 ? void 0 : options.ENCODING);
  (0, _1$9.pushChunkSizeArgument)(args, options === null || options === void 0 ? void 0 : options.CHUNK_SIZE);

  if (options === null || options === void 0 ? void 0 : options.DUPLICATE_POLICY) {
    args.push('DUPLICATE_POLICY', options.DUPLICATE_POLICY);
  }

  (0, _1$9.pushLabelsArgument)(args, options === null || options === void 0 ? void 0 : options.LABELS);
  return args;
}

CREATE.transformArguments = transformArguments$d;

var CREATERULE = {};

Object.defineProperty(CREATERULE, "__esModule", {
  value: true
});
CREATERULE.transformArguments = CREATERULE.FIRST_KEY_INDEX = void 0;
CREATERULE.FIRST_KEY_INDEX = 1;

function transformArguments$c(sourceKey, destinationKey, aggregationType, timeBucket) {
  return ['TS.CREATERULE', sourceKey, destinationKey, 'AGGREGATION', aggregationType, timeBucket.toString()];
}

CREATERULE.transformArguments = transformArguments$c;

var DECRBY = {};

Object.defineProperty(DECRBY, "__esModule", {
  value: true
});
DECRBY.transformArguments = DECRBY.FIRST_KEY_INDEX = void 0;
var _1$8 = commands;
DECRBY.FIRST_KEY_INDEX = 1;

function transformArguments$b(key, value, options) {
  return (0, _1$8.transformIncrDecrArguments)('TS.DECRBY', key, value, options);
}

DECRBY.transformArguments = transformArguments$b;

var DEL = {};

Object.defineProperty(DEL, "__esModule", {
  value: true
});
DEL.transformArguments = DEL.FIRTS_KEY_INDEX = void 0;
var _1$7 = commands;
DEL.FIRTS_KEY_INDEX = 1;

function transformArguments$a(key, fromTimestamp, toTimestamp) {
  return ['TS.DEL', key, (0, _1$7.transformTimestampArgument)(fromTimestamp), (0, _1$7.transformTimestampArgument)(toTimestamp)];
}

DEL.transformArguments = transformArguments$a;

var DELETERULE = {};

Object.defineProperty(DELETERULE, "__esModule", {
  value: true
});
DELETERULE.transformArguments = DELETERULE.FIRST_KEY_INDEX = void 0;
DELETERULE.FIRST_KEY_INDEX = 1;

function transformArguments$9(sourceKey, destinationKey) {
  return ['TS.DELETERULE', sourceKey, destinationKey];
}

DELETERULE.transformArguments = transformArguments$9;

var GET = {};

Object.defineProperty(GET, "__esModule", {
  value: true
});
GET.transformReply = GET.transformArguments = GET.IS_READ_ONLY = GET.FIRST_KEY_INDEX = void 0;
var _1$6 = commands;
GET.FIRST_KEY_INDEX = 1;
GET.IS_READ_ONLY = true;

function transformArguments$8(key) {
  return ['TS.GET', key];
}

GET.transformArguments = transformArguments$8;

function transformReply$5(reply) {
  if (reply.length === 0) return null;
  return (0, _1$6.transformSampleReply)(reply);
}

GET.transformReply = transformReply$5;

var INCRBY = {};

Object.defineProperty(INCRBY, "__esModule", {
  value: true
});
INCRBY.transformArguments = INCRBY.FIRST_KEY_INDEX = void 0;
var _1$5 = commands;
INCRBY.FIRST_KEY_INDEX = 1;

function transformArguments$7(key, value, options) {
  return (0, _1$5.transformIncrDecrArguments)('TS.INCRBY', key, value, options);
}

INCRBY.transformArguments = transformArguments$7;

var INFO_DEBUG = {};

var INFO = {};

Object.defineProperty(INFO, "__esModule", {
  value: true
});
INFO.transformReply = INFO.transformArguments = INFO.IS_READ_ONLY = INFO.FIRST_KEY_INDEX = void 0;
INFO.FIRST_KEY_INDEX = 1;
INFO.IS_READ_ONLY = true;

function transformArguments$6(key) {
  return ['TS.INFO', key];
}

INFO.transformArguments = transformArguments$6;

function transformReply$4(reply) {
  return {
    totalSamples: reply[1],
    memoryUsage: reply[3],
    firstTimestamp: reply[5],
    lastTimestamp: reply[7],
    retentionTime: reply[9],
    chunkCount: reply[11],
    chunkSize: reply[13],
    chunkType: reply[15],
    duplicatePolicy: reply[17],
    labels: reply[19].map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];

      return {
        name: name,
        value: value
      };
    }),
    sourceKey: reply[21],
    rules: reply[23].map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 3),
          key = _ref4[0],
          timeBucket = _ref4[1],
          aggregationType = _ref4[2];

      return {
        key: key,
        timeBucket: timeBucket,
        aggregationType: aggregationType
      };
    })
  };
}

INFO.transformReply = transformReply$4;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = exports.IS_READ_ONLY = void 0;
  var INFO_1 = INFO;
  var INFO_2 = INFO;
  Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function get() {
      return INFO_2.IS_READ_ONLY;
    }
  });
  Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function get() {
      return INFO_2.FIRST_KEY_INDEX;
    }
  });

  function transformArguments(key) {
    var args = (0, INFO_1.transformArguments)(key);
    args.push('DEBUG');
    return args;
  }

  exports.transformArguments = transformArguments;

  function transformReply(rawReply) {
    var reply = (0, INFO_1.transformReply)(rawReply);
    reply.keySelfName = rawReply[25];
    reply.chunks = rawReply[27].map(function (chunk) {
      return {
        startTimestamp: chunk[1],
        endTimestamp: chunk[3],
        samples: chunk[5],
        size: chunk[7],
        bytesPerSample: chunk[9]
      };
    });
    return reply;
  }

  exports.transformReply = transformReply;
})(INFO_DEBUG);

var MADD = {};

Object.defineProperty(MADD, "__esModule", {
  value: true
});
MADD.transformArguments = MADD.FIRST_KEY_INDEX = void 0;
var _1$4 = commands;
MADD.FIRST_KEY_INDEX = 1;

function transformArguments$5(toAdd) {
  var args = ['TS.MADD'];

  var _iterator = _createForOfIteratorHelper(toAdd),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          key = _step$value.key,
          timestamp = _step$value.timestamp,
          value = _step$value.value;
      args.push(key, (0, _1$4.transformTimestampArgument)(timestamp), value.toString());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return args;
}

MADD.transformArguments = transformArguments$5;

var MGET = {};

Object.defineProperty(MGET, "__esModule", {
  value: true
});
MGET.transformReply = MGET.transformArguments = MGET.IS_READ_ONLY = void 0;
var _1$3 = commands;
MGET.IS_READ_ONLY = true;

function transformArguments$4(filter) {
  return (0, _1$3.pushFilterArgument)(['TS.MGET'], filter);
}

MGET.transformArguments = transformArguments$4;

function transformReply$3(reply) {
  return reply.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        key = _ref2[0];
        _ref2[1];
        var sample = _ref2[2];

    return {
      key: key,
      sample: (0, _1$3.transformSampleReply)(sample)
    };
  });
}

MGET.transformReply = transformReply$3;

var MGET_WITHLABELS = {};

Object.defineProperty(MGET_WITHLABELS, "__esModule", {
  value: true
});
MGET_WITHLABELS.transformReply = MGET_WITHLABELS.transformArguments = MGET_WITHLABELS.IS_READ_ONLY = void 0;
var _1$2 = commands;
MGET_WITHLABELS.IS_READ_ONLY = true;

function transformArguments$3(filter, options) {
  var args = ['TS.MGET'];
  (0, _1$2.pushWithLabelsArgument)(args, options === null || options === void 0 ? void 0 : options.SELECTED_LABELS);
  (0, _1$2.pushFilterArgument)(args, filter);
  return args;
}

MGET_WITHLABELS.transformArguments = transformArguments$3;

function transformReply$2(reply) {
  return reply.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        key = _ref2[0],
        labels = _ref2[1],
        sample = _ref2[2];

    return {
      key: key,
      labels: (0, _1$2.transformLablesReply)(labels),
      sample: (0, _1$2.transformSampleReply)(sample)
    };
  });
}

MGET_WITHLABELS.transformReply = transformReply$2;

var QUERYINDEX = {};

Object.defineProperty(QUERYINDEX, "__esModule", {
  value: true
});
QUERYINDEX.transformArguments = QUERYINDEX.IS_READ_ONLY = void 0;
var generic_transformers_1 = genericTransformers;
QUERYINDEX.IS_READ_ONLY = true;

function transformArguments$2(filter) {
  return (0, generic_transformers_1.pushVerdictArguments)(['TS.QUERYINDEX'], filter);
}

QUERYINDEX.transformArguments = transformArguments$2;

var RANGE = {};

Object.defineProperty(RANGE, "__esModule", {
  value: true
});
RANGE.transformReply = RANGE.transformArguments = RANGE.IS_READ_ONLY = RANGE.FIRST_KEY_INDEX = void 0;
var _1$1 = commands;
RANGE.FIRST_KEY_INDEX = 1;
RANGE.IS_READ_ONLY = true;

function transformArguments$1(key, fromTimestamp, toTimestamp, options) {
  return (0, _1$1.pushRangeArguments)(['TS.RANGE', key], fromTimestamp, toTimestamp, options);
}

RANGE.transformArguments = transformArguments$1;

function transformReply$1(reply) {
  return (0, _1$1.transformRangeReply)(reply);
}

RANGE.transformReply = transformReply$1;

var REVRANGE = {};

Object.defineProperty(REVRANGE, "__esModule", {
  value: true
});
REVRANGE.transformReply = REVRANGE.transformArguments = REVRANGE.IS_READ_ONLY = REVRANGE.FIRST_KEY_INDEX = void 0;
var _1 = commands;
REVRANGE.FIRST_KEY_INDEX = 1;
REVRANGE.IS_READ_ONLY = true;

function transformArguments(key, fromTimestamp, toTimestamp, options) {
  return (0, _1.pushRangeArguments)(['TS.REVRANGE', key], fromTimestamp, toTimestamp, options);
}

REVRANGE.transformArguments = transformArguments;

function transformReply(reply) {
  return (0, _1.transformRangeReply)(reply);
}

REVRANGE.transformReply = transformReply;

var MRANGE = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
  var _1 = commands;
  exports.IS_READ_ONLY = true;

  function transformArguments(fromTimestamp, toTimestamp, filters, options) {
    return (0, _1.pushMRangeArguments)(['TS.MRANGE'], fromTimestamp, toTimestamp, filters, options);
  }

  exports.transformArguments = transformArguments;
  var _2 = commands;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return _2.transformMRangeReply;
    }
  });
})(MRANGE);

var MRANGE_WITHLABELS = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
  var _1 = commands;
  exports.IS_READ_ONLY = true;

  function transformArguments(fromTimestamp, toTimestamp, filters, options) {
    return (0, _1.pushMRangeWithLabelsArguments)(['TS.MRANGE'], fromTimestamp, toTimestamp, filters, options);
  }

  exports.transformArguments = transformArguments;
  var _2 = commands;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return _2.transformMRangeWithLabelsReply;
    }
  });
})(MRANGE_WITHLABELS);

var MREVRANGE = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
  var _1 = commands;
  exports.IS_READ_ONLY = true;

  function transformArguments(fromTimestamp, toTimestamp, filters, options) {
    return (0, _1.pushMRangeArguments)(['TS.MREVRANGE'], fromTimestamp, toTimestamp, filters, options);
  }

  exports.transformArguments = transformArguments;
  var _2 = commands;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return _2.transformMRangeReply;
    }
  });
})(MREVRANGE);

var MREVRANGE_WITHLABELS = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
  var _1 = commands;
  exports.IS_READ_ONLY = true;

  function transformArguments(fromTimestamp, toTimestamp, filters, options) {
    return (0, _1.pushMRangeWithLabelsArguments)(['TS.MREVRANGE'], fromTimestamp, toTimestamp, filters, options);
  }

  exports.transformArguments = transformArguments;
  var _2 = commands;
  Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function get() {
      return _2.transformMRangeWithLabelsReply;
    }
  });
})(MREVRANGE_WITHLABELS);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transformMRangeWithLabelsReply = exports.transformMRangeReply = exports.transformRangeReply = exports.pushMRangeWithLabelsArguments = exports.pushWithLabelsArgument = exports.pushMRangeArguments = exports.pushFilterArgument = exports.pushMRangeGroupByArguments = exports.pushRangeArguments = exports.transformSampleReply = exports.transformIncrDecrArguments = exports.pushLabelsArgument = exports.transformLablesReply = exports.pushChunkSizeArgument = exports.pushEncodingArgument = exports.TimeSeriesEncoding = exports.pushRetentionArgument = exports.transformTimestampArgument = exports.TimeSeriesReducers = exports.TimeSeriesDuplicatePolicies = exports.TimeSeriesAggregationType = void 0;
  var ADD$1 = ADD;
  var ALTER$1 = ALTER;
  var CREATE$1 = CREATE;
  var CREATERULE$1 = CREATERULE;
  var DECRBY$1 = DECRBY;
  var DEL$1 = DEL;
  var DELETERULE$1 = DELETERULE;
  var GET$1 = GET;
  var INCRBY$1 = INCRBY;
  var INFO_DEBUG$1 = INFO_DEBUG;
  var INFO$1 = INFO;
  var MADD$1 = MADD;
  var MGET$1 = MGET;
  var MGET_WITHLABELS$1 = MGET_WITHLABELS;
  var QUERYINDEX$1 = QUERYINDEX;
  var RANGE$1 = RANGE;
  var REVRANGE$1 = REVRANGE;
  var MRANGE$1 = MRANGE;
  var MRANGE_WITHLABELS$1 = MRANGE_WITHLABELS;
  var MREVRANGE$1 = MREVRANGE;
  var MREVRANGE_WITHLABELS$1 = MREVRANGE_WITHLABELS;
  var generic_transformers_1 = genericTransformers;
  exports["default"] = {
    ADD: ADD$1,
    add: ADD$1,
    ALTER: ALTER$1,
    alter: ALTER$1,
    CREATE: CREATE$1,
    create: CREATE$1,
    CREATERULE: CREATERULE$1,
    createRule: CREATERULE$1,
    DECRBY: DECRBY$1,
    decrBy: DECRBY$1,
    DEL: DEL$1,
    del: DEL$1,
    DELETERULE: DELETERULE$1,
    deleteRule: DELETERULE$1,
    GET: GET$1,
    get: GET$1,
    INCRBY: INCRBY$1,
    incrBy: INCRBY$1,
    INFO_DEBUG: INFO_DEBUG$1,
    infoDebug: INFO_DEBUG$1,
    INFO: INFO$1,
    info: INFO$1,
    MADD: MADD$1,
    mAdd: MADD$1,
    MGET: MGET$1,
    mGet: MGET$1,
    MGET_WITHLABELS: MGET_WITHLABELS$1,
    mGetWithLabels: MGET_WITHLABELS$1,
    QUERYINDEX: QUERYINDEX$1,
    queryIndex: QUERYINDEX$1,
    RANGE: RANGE$1,
    range: RANGE$1,
    REVRANGE: REVRANGE$1,
    revRange: REVRANGE$1,
    MRANGE: MRANGE$1,
    mRange: MRANGE$1,
    MRANGE_WITHLABELS: MRANGE_WITHLABELS$1,
    mRangeWithLabels: MRANGE_WITHLABELS$1,
    MREVRANGE: MREVRANGE$1,
    mRevRange: MREVRANGE$1,
    MREVRANGE_WITHLABELS: MREVRANGE_WITHLABELS$1,
    mRevRangeWithLabels: MREVRANGE_WITHLABELS$1
  };

  (function (TimeSeriesAggregationType) {
    TimeSeriesAggregationType["AVERAGE"] = "avg";
    TimeSeriesAggregationType["SUM"] = "sum";
    TimeSeriesAggregationType["MINIMUM"] = "min";
    TimeSeriesAggregationType["MAXIMUM"] = "max";
    TimeSeriesAggregationType["RANGE"] = "range";
    TimeSeriesAggregationType["COUNT"] = "count";
    TimeSeriesAggregationType["FIRST"] = "first";
    TimeSeriesAggregationType["LAST"] = "last";
    TimeSeriesAggregationType["STD_P"] = "std.p";
    TimeSeriesAggregationType["STD_S"] = "std.s";
    TimeSeriesAggregationType["VAR_P"] = "var.p";
    TimeSeriesAggregationType["VAR_S"] = "var.s";
  })(exports.TimeSeriesAggregationType || (exports.TimeSeriesAggregationType = {}));

  (function (TimeSeriesDuplicatePolicies) {
    TimeSeriesDuplicatePolicies["BLOCK"] = "BLOCK";
    TimeSeriesDuplicatePolicies["FIRST"] = "FIRST";
    TimeSeriesDuplicatePolicies["LAST"] = "LAST";
    TimeSeriesDuplicatePolicies["MIN"] = "MIN";
    TimeSeriesDuplicatePolicies["MAX"] = "MAX";
    TimeSeriesDuplicatePolicies["SUM"] = "SUM";
  })(exports.TimeSeriesDuplicatePolicies || (exports.TimeSeriesDuplicatePolicies = {}));

  (function (TimeSeriesReducers) {
    TimeSeriesReducers["SUM"] = "sum";
    TimeSeriesReducers["MINIMUM"] = "min";
    TimeSeriesReducers["MAXIMUM"] = "max";
  })(exports.TimeSeriesReducers || (exports.TimeSeriesReducers = {}));

  function transformTimestampArgument(timestamp) {
    if (typeof timestamp === 'string') return timestamp;
    return (typeof timestamp === 'number' ? timestamp : timestamp.getTime()).toString();
  }

  exports.transformTimestampArgument = transformTimestampArgument;

  function pushRetentionArgument(args, retention) {
    if (retention) {
      args.push('RETENTION', retention.toString());
    }

    return args;
  }

  exports.pushRetentionArgument = pushRetentionArgument;

  (function (TimeSeriesEncoding) {
    TimeSeriesEncoding["COMPRESSED"] = "COMPRESSED";
    TimeSeriesEncoding["UNCOMPRESSED"] = "UNCOMPRESSED";
  })(exports.TimeSeriesEncoding || (exports.TimeSeriesEncoding = {}));

  function pushEncodingArgument(args, encoding) {
    if (encoding) {
      args.push('ENCODING', encoding);
    }

    return args;
  }

  exports.pushEncodingArgument = pushEncodingArgument;

  function pushChunkSizeArgument(args, chunkSize) {
    if (chunkSize) {
      args.push('CHUNK_SIZE', chunkSize.toString());
    }

    return args;
  }

  exports.pushChunkSizeArgument = pushChunkSizeArgument;

  function transformLablesReply(reply) {
    var labels = {};

    var _iterator = _createForOfIteratorHelper(reply),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        labels[key] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return labels;
  }

  exports.transformLablesReply = transformLablesReply;

  function pushLabelsArgument(args, labels) {
    if (labels) {
      args.push('LABELS');

      for (var _i = 0, _Object$entries = Object.entries(labels); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            label = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        args.push(label, value);
      }
    }

    return args;
  }

  exports.pushLabelsArgument = pushLabelsArgument;

  function transformIncrDecrArguments(command, key, value, options) {
    var args = [command, key, value.toString()];

    if ((options === null || options === void 0 ? void 0 : options.TIMESTAMP) !== undefined && (options === null || options === void 0 ? void 0 : options.TIMESTAMP) !== null) {
      args.push('TIMESTAMP', transformTimestampArgument(options.TIMESTAMP));
    }

    pushRetentionArgument(args, options === null || options === void 0 ? void 0 : options.RETENTION);

    if (options === null || options === void 0 ? void 0 : options.UNCOMPRESSED) {
      args.push('UNCOMPRESSED');
    }

    pushChunkSizeArgument(args, options === null || options === void 0 ? void 0 : options.CHUNK_SIZE);
    pushLabelsArgument(args, options === null || options === void 0 ? void 0 : options.LABELS);
    return args;
  }

  exports.transformIncrDecrArguments = transformIncrDecrArguments;

  function transformSampleReply(reply) {
    return {
      timestamp: reply[0],
      value: Number(reply[1])
    };
  }

  exports.transformSampleReply = transformSampleReply;

  function pushRangeArguments(args, fromTimestamp, toTimestamp, options) {
    args.push(transformTimestampArgument(fromTimestamp), transformTimestampArgument(toTimestamp));

    if (options === null || options === void 0 ? void 0 : options.FILTER_BY_TS) {
      args.push('FILTER_BY_TS');

      var _iterator2 = _createForOfIteratorHelper(options.FILTER_BY_TS),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ts = _step2.value;
          args.push(transformTimestampArgument(ts));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (options === null || options === void 0 ? void 0 : options.FILTER_BY_VALUE) {
      args.push('FILTER_BY_VALUE', options.FILTER_BY_VALUE.min.toString(), options.FILTER_BY_VALUE.max.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.COUNT) {
      args.push('COUNT', options.COUNT.toString());
    }

    if (options === null || options === void 0 ? void 0 : options.ALIGN) {
      args.push('ALIGN', transformTimestampArgument(options.ALIGN));
    }

    if (options === null || options === void 0 ? void 0 : options.AGGREGATION) {
      args.push('AGGREGATION', options.AGGREGATION.type, transformTimestampArgument(options.AGGREGATION.timeBucket));
    }

    return args;
  }

  exports.pushRangeArguments = pushRangeArguments;

  function pushMRangeGroupByArguments(args, groupBy) {
    if (groupBy) {
      args.push('GROUPBY', groupBy.label, 'REDUCE', groupBy.reducer);
    }

    return args;
  }

  exports.pushMRangeGroupByArguments = pushMRangeGroupByArguments;

  function pushFilterArgument(args, filter) {
    args.push('FILTER');
    (0, generic_transformers_1.pushVerdictArguments)(args, filter);
    return args;
  }

  exports.pushFilterArgument = pushFilterArgument;

  function pushMRangeArguments(args, fromTimestamp, toTimestamp, filter, options) {
    pushRangeArguments(args, fromTimestamp, toTimestamp, options);
    pushFilterArgument(args, filter);
    pushMRangeGroupByArguments(args, options === null || options === void 0 ? void 0 : options.GROUPBY);
    return args;
  }

  exports.pushMRangeArguments = pushMRangeArguments;

  function pushWithLabelsArgument(args, selectedLabels) {
    if (!selectedLabels) {
      args.push('WITHLABELS');
    } else {
      args.push('SELECTED_LABELS');
      (0, generic_transformers_1.pushVerdictArguments)(args, selectedLabels);
    }

    return args;
  }

  exports.pushWithLabelsArgument = pushWithLabelsArgument;

  function pushMRangeWithLabelsArguments(args, fromTimestamp, toTimestamp, filter, options) {
    pushRangeArguments(args, fromTimestamp, toTimestamp, options);
    pushWithLabelsArgument(args, options === null || options === void 0 ? void 0 : options.SELECTED_LABELS);
    pushFilterArgument(args, filter);
    pushMRangeGroupByArguments(args, options === null || options === void 0 ? void 0 : options.GROUPBY);
    return args;
  }

  exports.pushMRangeWithLabelsArguments = pushMRangeWithLabelsArguments;

  function transformRangeReply(reply) {
    return reply.map(transformSampleReply);
  }

  exports.transformRangeReply = transformRangeReply;

  function transformMRangeReply(reply) {
    var args = [];

    var _iterator3 = _createForOfIteratorHelper(reply),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 3),
            key = _step3$value[0],
            _ = _step3$value[1],
            sample = _step3$value[2];

        args.push({
          key: key,
          samples: sample.map(transformSampleReply)
        });
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return args;
  }

  exports.transformMRangeReply = transformMRangeReply;

  function transformMRangeWithLabelsReply(reply) {
    var args = [];

    var _iterator4 = _createForOfIteratorHelper(reply),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 3),
            key = _step4$value[0],
            labels = _step4$value[1],
            samples = _step4$value[2];

        args.push({
          key: key,
          labels: transformLablesReply(labels),
          samples: samples.map(transformSampleReply)
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return args;
  }

  exports.transformMRangeWithLabelsReply = transformMRangeWithLabelsReply;
})(commands);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TimeSeriesAggregationType = exports.TimeSeriesEncoding = exports.TimeSeriesDuplicatePolicies = exports["default"] = void 0;
  var commands_1 = commands;
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return commands_1["default"];
    }
  });
  var commands_2 = commands;
  Object.defineProperty(exports, "TimeSeriesDuplicatePolicies", {
    enumerable: true,
    get: function get() {
      return commands_2.TimeSeriesDuplicatePolicies;
    }
  });
  Object.defineProperty(exports, "TimeSeriesEncoding", {
    enumerable: true,
    get: function get() {
      return commands_2.TimeSeriesEncoding;
    }
  });
  Object.defineProperty(exports, "TimeSeriesAggregationType", {
    enumerable: true,
    get: function get() {
      return commands_2.TimeSeriesAggregationType;
    }
  });
})(dist);

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createCluster = exports.createClient = void 0;
  var client_1 = dist$5;
  var bloom_1 = dist$4;
  var graph_1 = dist$3;
  var json_1 = dist$2;
  var search_1 = dist$1;
  var time_series_1 = dist;

  __exportStar(dist$5, exports);

  __exportStar(dist$4, exports);

  __exportStar(dist$3, exports);

  __exportStar(dist$2, exports);

  __exportStar(dist$1, exports);

  __exportStar(dist, exports);

  var modules = _objectSpread2(_objectSpread2({}, bloom_1["default"]), {}, {
    graph: graph_1["default"],
    json: json_1["default"],
    ft: search_1["default"],
    ts: time_series_1["default"]
  });

  function createClient(options) {
    return (0, client_1.createClient)(_objectSpread2(_objectSpread2({}, options), {}, {
      modules: _objectSpread2(_objectSpread2({}, modules), options === null || options === void 0 ? void 0 : options.modules)
    }));
  }

  exports.createClient = createClient;

  function createCluster(options) {
    return (0, client_1.createCluster)(_objectSpread2(_objectSpread2({}, options), {}, {
      modules: _objectSpread2(_objectSpread2({}, modules), options === null || options === void 0 ? void 0 : options.modules)
    }));
  }

  exports.createCluster = createCluster;
})(dist$6);

var testService = interpret(runtimeMachine, {
  clock: {
    setTimeout: setTimeout$1,
    clearTimeout: clearTimeout$1
  }
});
testService.start();

(function () {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var client;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = dist$6.createClient();
            client.on('error', function (err) {
              return console.log('Redis Client Error', err);
            });
            _context.next = 4;
            return client.connect();

          case 4:
            _context.next = 6;
            return client.set('key', 'value');

          case 6:
            _context.next = 8;
            return client.get('key');

          case 8:

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
})();
