import require$$1$1 from 'assert';
import require$$1 from 'util';
import require$$5 from 'fs';

var ffi = {};

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

var ref$b = {exports: {}};

var browser$1 = {exports: {}};

var s$1 = 1000;
var m$1 = s$1 * 60;
var h$1 = m$1 * 60;
var d$7 = h$1 * 24;
var w = d$7 * 7;
var y$1 = d$7 * 365.25;
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

var ms$1 = function ms(val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse$1(val);
  } else if (type === 'number' && isFinite(val)) {
    return options["long"] ? fmtLong$1(val) : fmtShort$1(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse$1(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

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
      return n * y$1;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d$7;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h$1;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m$1;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s$1;

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


function fmtShort$1(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d$7) {
    return Math.round(ms / d$7) + 'd';
  }

  if (msAbs >= h$1) {
    return Math.round(ms / h$1) + 'h';
  }

  if (msAbs >= m$1) {
    return Math.round(ms / m$1) + 'm';
  }

  if (msAbs >= s$1) {
    return Math.round(ms / s$1) + 's';
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


function fmtLong$1(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d$7) {
    return plural$1(ms, msAbs, d$7, 'day');
  }

  if (msAbs >= h$1) {
    return plural$1(ms, msAbs, h$1, 'hour');
  }

  if (msAbs >= m$1) {
    return plural$1(ms, msAbs, m$1, 'minute');
  }

  if (msAbs >= s$1) {
    return plural$1(ms, msAbs, s$1, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural$1(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup$1(env) {
  createDebug.debug = createDebug;
  createDebug["default"] = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = ms$1;
  createDebug.destroy = destroy;
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;
    var enableOverride = null;
    var namespacesCache;
    var enabledCache;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: function get() {
        if (enableOverride !== null) {
          return enableOverride;
        }

        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }

        return enabledCache;
      },
      set: function set(v) {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

var common = setup$1;

/* eslint-env browser */

(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   */
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();

  exports.destroy = function () {
    var warned = false;
    return function () {
      if (!warned) {
        warned = true;
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
      }
    };
  }();
  /**
   * Colors.
   */


  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */
  // eslint-disable-next-line complexity

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
      return true;
    } // Internet Explorer and Edge do not support colors.


    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    } // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */


  function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

    if (!this.useColors) {
      return;
    }

    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into

    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if (match === '%%') {
        return;
      }

      index++;

      if (match === '%c') {
        // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  /**
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */


  exports.log = console.debug || console.log || function () {};
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */


  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem('debug', namespaces);
      } else {
        exports.storage.removeItem('debug');
      }
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
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
      r = exports.storage.getItem('debug');
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }
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
      // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
      // The Browser also has localStorage in the global context.
      return localStorage;
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }

  module.exports = common(exports);
  var formatters = module.exports.formatters;
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return '[UnexpectedJSONParseError]: ' + error.message;
    }
  };
})(browser$1, browser$1.exports);

var buffer = {};

(function (exports) {
  // CUSTOM ERRORS
  // =============
  // Simplified versions from Node, changed for Buffer-only usage
  var errors = {};

  function E(sym, getMessage, Base) {
    errors[sym] = /*#__PURE__*/function (_Base) {
      _inherits(NodeError, _Base);

      var _super = _createSuper(NodeError);

      function NodeError() {
        var _this;

        _classCallCheck(this, NodeError);

        _this = _super.call(this);
        Object.defineProperty(_assertThisInitialized(_this), "message", {
          value: getMessage.apply(_assertThisInitialized(_this), arguments),
          writable: true,
          configurable: true
        }); // Add the error code to the name to include it in the stack trace.

        _this.name = "".concat(_this.name, " [").concat(sym, "]"); // Access the stack to generate the error message including the error code
        // from the name.

        _this.stack; // eslint-disable-line no-unused-expressions
        // Reset the name to the actual name.

        delete _this.name;
        return _this;
      }

      _createClass(NodeError, [{
        key: "code",
        get: function get() {
          return sym;
        },
        set: function set(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: value,
            writable: true
          });
        }
      }, {
        key: "toString",
        value: function toString() {
          return "".concat(this.name, " [").concat(sym, "]: ").concat(this.message);
        }
      }]);

      return NodeError;
    }(Base);
  }

  E("ERR_BUFFER_OUT_OF_BOUNDS", function (name) {
    if (name) {
      return "".concat(name, " is outside of buffer bounds");
    }

    return "Attempt to access memory outside buffer bounds";
  }, RangeError);
  E("ERR_INVALID_ARG_TYPE", function (name, type, actual) {
    return "The \"".concat(name, "\" argument must be of type ").concat(type, ". Received type ").concat(_typeof(actual));
  }, TypeError);
  E("ERR_OUT_OF_RANGE", function (str, range, input) {
    var msg = "The value of \"".concat(str, "\" is out of range.");
    var received = input;

    if (Number.isInteger(input) && Math.abs(input) > Math.pow(2, 32)) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === "bigint") {
      received = String(input);

      if (input > Math.pow(BigInt(2), BigInt(32)) || input < -Math.pow(BigInt(2), BigInt(32))) {
        received = addNumericalSeparator(received);
      }

      received += "n";
    }

    msg += " It must be ".concat(range, ". Received ").concat(received);
    return msg;
  }, RangeError);

  function addNumericalSeparator(val) {
    var res = "";
    var i = val.length;
    var start = val[0] === "-" ? 1 : 0;

    for (; i >= start + 4; i -= 3) {
      res = "_".concat(val.slice(i - 3, i)).concat(res);
    }

    return "".concat(val.slice(0, i)).concat(res);
  } // CHECK FUNCTIONS
  // ===============

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */


  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
  }

  function checkInt(buf, value, offset, ext, max, min) {
    if (!(buf instanceof Uint8Array)) {
      throw new TypeError('"buffer" argument must be a Uint8Array instance');
    }

    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
  }

  function checkBounds(buf, offset, byteLength) {
    if (!(buf instanceof Uint8Array)) {
      throw new TypeError('"buffer" argument must be a Uint8Array instance');
    }

    validateNumber(offset, "offset");

    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
      boundsError(offset, buf.length - (byteLength + 1));
    }
  }

  function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (typeof value !== 'bigint') {
      throw new errors.ERR_INVALID_ARG_TYPE('value', "bigint", value);
    }

    if (value > max || value < min) {
      var range;

      if (byteLength > 3) {
        if (min === 0 || min === BigInt(0)) {
          range = ">= 0n and < 2n ** ".concat((byteLength + 1) * 8, "n");
        } else {
          range = ">= -(2n ** ".concat((byteLength + 1) * 8 - 1, "n) and < 2 ** ") + "".concat((byteLength + 1) * 8 - 1, "n");
        }
      } else {
        range = ">= ".concat(min, "n and <= ").concat(max, "n");
      }

      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }

    checkBounds(buf, offset, byteLength);
  }

  function validateNumber(value, name) {
    if (typeof value !== "number") {
      throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
  }

  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }

    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }

    throw new errors.ERR_OUT_OF_RANGE(type || "offset", ">= ".concat(type ? 1 : 0, " and <= ").concat(length), value);
  }

  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
  } // EXPORTS FUNCTIONS
  // =================


  var endiannessValue = function endianness() {
    var b = new ArrayBuffer(4);
    var a = new Uint32Array(b);
    var c = new Uint8Array(b);
    a[0] = 0xdeadbeef;
    if (c[0] == 0xef) return "LE";
    if (c[0] == 0xde) return "BE";
    throw new Error("unknown endianness");
  }();
  /**
   * A string that represents the native endianness of the machine's processor.
   * The possible values are either `"LE"` or `"BE"`.
   *
   * ```
   * console.log(buffer.endianness);
   * 'LE'
   * ```
   *
   * @name endianness
   * @type String
   */


  exports.endianness = endiannessValue; // EXPORTS READ FUNCTIONS
  // ======================

  /**
   * @param {Uint8Array} buf A Uint8Array
   */

  exports.readUInt8 = function readUInt8(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, buf.length);
    return buf[offset];
  };

  exports.readUInt16LE = function readUInt16LE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, buf.length);
    return buf[offset] | buf[offset + 1] << 8;
  };

  exports.readUInt16BE = function readUInt16BE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, buf.length);
    return buf[offset] << 8 | buf[offset + 1];
  };

  exports.readUInt16 = endiannessValue === "BE" ? exports.readUInt16BE : exports.readUInt16LE;

  exports.readUInt32LE = function readUInt32LE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, buf.length);
    return (buf[offset] | buf[offset + 1] << 8 | buf[offset + 2] << 16) + buf[offset + 3] * 0x1000000;
  };

  exports.readUInt32BE = function readUInt32BE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, buf.length);
    return buf[offset] * 0x1000000 + (buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3]);
  };

  exports.readUInt32 = endiannessValue === "BE" ? exports.readUInt32BE : exports.readUInt32LE;

  exports.readBigUInt64LE = function readBigUInt64LE(buf, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      validateNumber(offset, "offset");
      var first = buf[offset];
      var last = buf[offset + 7];

      if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
      }
    }

    var view = new DataView(buf.buffer);
    return view.getBigUint64(buf.byteOffset + offset, true);
  };

  exports.readBigUInt64BE = function readBigUInt64BE(buf, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      validateNumber(offset, "offset");
      var first = buf[offset];
      var last = buf[offset + 7];

      if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
      }
    }

    var view = new DataView(buf.buffer);
    return view.getBigUint64(buf.byteOffset + offset, false);
  };

  exports.readBigUInt64 = endiannessValue === "BE" ? exports.readBigUInt64BE : exports.readBigUInt64LE;

  exports.readInt8 = function readInt8(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, buf.length);
    if (!(buf[offset] & 0x80)) return buf[offset];
    return (0xff - buf[offset] + 1) * -1;
  };

  exports.readInt16LE = function readInt16LE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, buf.length);
    var val = buf[offset] | buf[offset + 1] << 8;
    return val & 0x8000 ? val | 0xffff0000 : val;
  };

  exports.readInt16BE = function readInt16BE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, buf.length);
    var val = buf[offset + 1] | buf[offset] << 8;
    return val & 0x8000 ? val | 0xffff0000 : val;
  };

  exports.readInt16 = endiannessValue === "BE" ? exports.readInt16BE : exports.readInt16LE;

  exports.readInt32LE = function readInt32LE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, buf.length);
    return buf[offset] | buf[offset + 1] << 8 | buf[offset + 2] << 16 | buf[offset + 3] << 24;
  };

  exports.readInt32BE = function readInt32BE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, buf.length);
    return buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
  };

  exports.readInt32 = endiannessValue === "BE" ? exports.readInt32BE : exports.readInt32LE;

  exports.readBigInt64LE = function readBigInt64LE(buf, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      validateNumber(offset, "offset");
      var first = buf[offset];
      var last = buf[offset + 7];

      if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
      }
    }

    var view = new DataView(buf.buffer);
    return view.getBigInt64(buf.byteOffset + offset, true);
  };

  exports.readBigInt64BE = function readBigInt64BE(buf, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      validateNumber(offset, "offset");
      var first = buf[offset];
      var last = buf[offset + 7];

      if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
      }
    }

    var view = new DataView(buf.buffer);
    return view.getBigInt64(buf.byteOffset + offset, false);
  };

  exports.readBigInt64 = endiannessValue === "BE" ? exports.readBigInt64BE : exports.readBigInt64LE;

  exports.readFloatLE = function readFloatLE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, buf.length);
    var view = new DataView(buf.buffer);
    return view.getFloat32(buf.byteOffset + offset, true);
  };

  exports.readFloatBE = function readFloatBE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, buf.length);
    var view = new DataView(buf.buffer);
    return view.getFloat32(buf.byteOffset + offset, false);
  };

  exports.readFloat = endiannessValue === "BE" ? exports.readFloatBE : exports.readFloatLE;

  exports.readDoubleLE = function readDoubleLE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, buf.length);
    var view = new DataView(buf.buffer);
    return view.getFloat64(buf.byteOffset + offset, true);
  };

  exports.readDoubleBE = function readDoubleBE(buf, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, buf.length);
    var view = new DataView(buf.buffer);
    return view.getFloat64(buf.byteOffset + offset, false);
  };

  exports.readDouble = endiannessValue === "BE" ? exports.readDoubleBE : exports.readDoubleLE; // EXPORTS WRITE FUNCTIONS
  // ======================

  /**
   * @param {Uint8Array} buf A Uint8Array
   */

  exports.writeUInt8 = function writeUInt8(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 1, 0xff, 0);
    buf[offset] = value & 0xff;
    return offset + 1;
  };

  exports.writeUInt16LE = function writeUInt16LE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 2, 0xffff, 0);
    buf[offset] = value & 0xff;
    buf[offset + 1] = value >>> 8;
    return offset + 2;
  };

  exports.writeUInt16BE = function writeUInt16BE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 2, 0xffff, 0);
    buf[offset] = value >>> 8;
    buf[offset + 1] = value & 0xff;
    return offset + 2;
  };

  exports.writeUInt16 = endiannessValue === "BE" ? exports.writeUInt16BE : exports.writeUInt16LE;

  exports.writeUInt32LE = function writeUInt32LE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 4, 0xffffffff, 0);
    buf[offset + 3] = value >>> 24;
    buf[offset + 2] = value >>> 16;
    buf[offset + 1] = value >>> 8;
    buf[offset] = value & 0xff;
    return offset + 4;
  };

  exports.writeUInt32BE = function writeUInt32BE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 4, 0xffffffff, 0);
    buf[offset] = value >>> 24;
    buf[offset + 1] = value >>> 16;
    buf[offset + 2] = value >>> 8;
    buf[offset + 3] = value & 0xff;
    return offset + 4;
  };

  exports.writeUInt32 = endiannessValue === "BE" ? exports.writeUInt32BE : exports.writeUInt32LE;
  /**
   * Write BigInt into buf with offset
   * @param {Uint8Array} buf A Buffer instance to base the returned Buffer off of.
   */

  exports.writeBigUInt64LE = function writeBigUInt64LE(buf, value, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkIntBI(value, BigInt(0), BigInt("0xffffffffffffffff"), buf, offset, 7);
    var view = new DataView(buf.buffer);
    view.setBigUint64(buf.byteOffset + offset, value, true);
    return offset + 8;
  };
  /**
   * Write BigInt into buf with offset
   * @param {Uint8Array} buf A Buffer instance to base the returned Buffer off of.
   */


  exports.writeBigUInt64BE = function writeBigUInt64BE(buf, value, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkIntBI(value, BigInt(0), BigInt("0xffffffffffffffff"), buf, offset, 7);
    var view = new DataView(buf.buffer);
    view.setBigUint64(buf.byteOffset + offset, value, false);
    return offset + 8;
  };

  exports.writeBigUInt64 = endiannessValue === "BE" ? exports.writeBigUInt64BE : exports.writeBigUInt64LE;

  exports.writeInt8 = function writeInt8(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 1, 0x7f, -0x80);
    if (value < 0) value = 0xff + value + 1;
    buf[offset] = value & 0xff;
    return offset + 1;
  };

  exports.writeInt16LE = function writeInt16LE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 2, 0x7fff, -0x8000);
    buf[offset] = value & 0xff;
    buf[offset + 1] = value >>> 8;
    return offset + 2;
  };

  exports.writeInt16BE = function writeInt16BE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 2, 0x7fff, -0x8000);
    buf[offset] = value >>> 8;
    buf[offset + 1] = value & 0xff;
    return offset + 2;
  };

  exports.writeInt16 = endiannessValue === "BE" ? exports.writeInt16BE : exports.writeInt16LE;

  exports.writeInt32LE = function writeInt32LE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 4, 0x7fffffff, -0x80000000);
    buf[offset] = value & 0xff;
    buf[offset + 1] = value >>> 8;
    buf[offset + 2] = value >>> 16;
    buf[offset + 3] = value >>> 24;
    return offset + 4;
  };

  exports.writeInt32BE = function writeInt32BE(buf, value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(buf, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    buf[offset] = value >>> 24;
    buf[offset + 1] = value >>> 16;
    buf[offset + 2] = value >>> 8;
    buf[offset + 3] = value & 0xff;
    return offset + 4;
  };

  exports.writeInt32 = endiannessValue === "BE" ? exports.writeInt32BE : exports.writeInt32LE;
  /**
   * Write BigInt into buf with offset
   * @param {Uint8Array} buf A Buffer instance to base the returned Buffer off of.
   */

  exports.writeBigInt64LE = function writeBigInt64LE(buf, value, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkIntBI(value, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"), buf, offset, 7);
    var view = new DataView(buf.buffer);
    view.setBigInt64(buf.byteOffset + offset, value, true);
    return offset + 8;
  };
  /**
   * Write BigInt into buf with offset
   * @param {Uint8Array} buf A Buffer instance to base the returned Buffer off of.
   */


  exports.writeBigInt64BE = function writeBigInt64BE(buf, value, offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkIntBI(value, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"), buf, offset, 7);
    var view = new DataView(buf.buffer);
    view.setBigInt64(buf.byteOffset + offset, value, false);
    return offset + 8;
  };

  exports.writeBigInt64 = endiannessValue === "BE" ? exports.writeBigInt64BE : exports.writeBigInt64LE;
  /**
   * Write BigInt into buf with offset
   * @param {Uint8Array} buf A Buffer instance to base the returned Buffer off of.
   */

  exports.writeFloatLE = function writeFloatLE(buf, value, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }

    var view = new DataView(buf.buffer);
    view.setFloat32(buf.byteOffset + offset, value, true);
    return offset + 4;
  };

  exports.writeFloatBE = function writeFloatBE(buf, value, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }

    var view = new DataView(buf.buffer);
    view.setFloat32(buf.byteOffset + offset, value, false);
    return offset + 4;
  };

  exports.writeFloat = endiannessValue === "BE" ? exports.writeFloatBE : exports.writeFloatLE;

  exports.writeDoubleLE = function writeDoubleLE(buf, value, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }

    var view = new DataView(buf.buffer);
    view.setFloat64(buf.byteOffset + offset, value, true);
    return offset + 8;
  };

  exports.writeDoubleBE = function writeDoubleBE(buf, value, offset, noAssert) {
    offset = offset >>> 0;

    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }

    var view = new DataView(buf.buffer);
    view.setFloat64(buf.byteOffset + offset, value, false);
    return offset + 8;
  };

  exports.writeDouble = endiannessValue === "BE" ? exports.writeDoubleBE : exports.writeDoubleLE;
})(buffer);

var bindings$7;

try {
  bindings$7 = require("../build/Release/ffi_bindings.node");
} catch (outerError) {
  try {
    bindings$7 = require("../build/Debug/ffi_bindings.node");
  } catch (innerError) {
    console.error("innerError", innerError); // Re-throw the exception from the Release require if the Debug require fails as well

    throw outerError;
  }
}

var bindings_1 = bindings$7.initializeBindings();

(function (module, exports) {

  var assert = require$$1$1;
  var inspect = require$$1.inspect;
  var debug = browser$1.exports('ref');
  var buffer$1 = buffer;
  var bindings = bindings_1;
  var nativeRef = bindings.ref;
  exports = module.exports = nativeRef;
  /**
   * A `Buffer` that references the C NULL pointer. That is, its memory address
   * points to 0. Its `length` is 0 because accessing any data from this buffer
   * would cause a _segmentation fault_.
   *
   * ```
   * console.log(ref.NULL);
   * <SlowBuffer@0x0 >
   * ```
   *
   * @name NULL
   * @type Buffer
   */

  /**
   * A string that represents the native endianness of the machine's processor.
   * The possible values are either `"LE"` or `"BE"`.
   *
   * ```
   * console.log(ref.endianness);
   * 'LE'
   * ```
   *
   * @name endianness
   * @type String
   */

  exports.endianness = buffer$1.endianness;
  /**
   * Accepts a `Buffer` instance and returns the memory address of the buffer
   * instance. Returns a JavaScript BigInt
   * ```
   * console.log(ref.address(new Buffer(1)));
   * 4320233616n
   *
   * console.log(ref.address(ref.NULL)));
   * 0n
   * ```
   *
   * @param {Buffer} buffer The buffer to get the memory address of.
   * @return {BigInt} The memory address the buffer instance.
   * @name address
   * @type method
   */

  /**
   * Accepts a `Buffer` instance and returns the memory address of the buffer
   * instance. Returns a JavaScript String
   * ```
   * console.log(ref.hexAddress(new Buffer(1)));
   * 4320233616n
   *
   * console.log(ref.hexAddress(ref.NULL)));
   * 0n
   * ```
   *
   * @param {Buffer} buffer The buffer to get the memory address of.
   * @return {string} The hex memory address the buffer instance.
   * @name hexAddress
   * @type method
   */

  exports.hexAddress = function (buf) {
    var pointerSize = nativeRef.sizeof.pointer;
    var hexStr = exports.address(buf).toString(16);
    return ('0000000000000000' + hexStr).slice(pointerSize * 2);
  };
  /**
   * Accepts a `Buffer` instance and returns _true_ if the buffer represents the
   * NULL pointer, _false_ otherwise.
   *
   * ```
   * console.log(ref.isNull(new Buffer(1)));
   * false
   *
   * console.log(ref.isNull(ref.NULL));
   * true
   * ```
   *
   * @param {Buffer} buffer The buffer to check for NULL.
   * @return {Boolean} true or false.
   * @name isNull
   * @type method
   */


  exports.isNull = function (buf) {
    return exports.address(buf) === 0n;
  };
  /**
   * Reads a JavaScript Object that has previously been written to the given
   * _buffer_ at the given _offset_.
   *
   * ```
   * var obj = { foo: 'bar' };
   * var buf = ref.alloc('Object', obj);
   *
   * var obj2 = ref.readObject(buf, 0);
   * console.log(obj === obj2);
   * true
   * ```
   *
   * @param {Buffer} buffer The buffer to read an Object from.
   * @param {Number} offset The offset to begin reading from.
   * @return {Object} The Object that was read from _buffer_.
   * @name readObject
   * @type method
   */

  /**
   * Reads a Buffer instance from the given _buffer_ at the given _offset_.
   * The _size_ parameter specifies the `length` of the returned Buffer instance,
   * which defaults to __0__.
   *
   * ```
   * var buf = new Buffer('hello world');
   * var pointer = ref.alloc('pointer', buf);
   *
   * var buf2 = ref.readPointer(pointer, 0, buf.length);
   * console.log(buf2.toString());
   * 'hello world'
   * ```
   *
   * @param {Buffer} buffer The buffer to read a Buffer from.
   * @param {Number} offset The offset to begin reading from.
   * @param {Number} length (optional) The length of the returned Buffer. Defaults to 0.
   * @return {Buffer} The Buffer instance that was read from _buffer_.
   * @name readPointer
   * @type method
   */

  /**
   * Returns a JavaScript String read from _buffer_ at the given _offset_. The
   * C String is read until the first NULL byte, which indicates the end of the
   * String.
   *
   * This function can read beyond the `length` of a Buffer.
   *
   * ```
   * var buf = new Buffer('hello\0world\0');
   *
   * var str = ref.readCString(buf, 0);
   * console.log(str);
   * 'hello'
   * ```
   *
   * @param {Buffer} buffer The buffer to read a Buffer from.
   * @param {Number} offset The offset to begin reading from.
   * @param {String} encoding (optional) The encoding to read the C string as. Defaults to __'utf8'__.
   * @return {String} The String that was read from _buffer_.
   * @name readCString
   * @type method
   */


  exports.readCString = function readCString(buf, offset, encoding) {
    encoding = typeof encoding !== 'string' ? 'utf8' : encoding;
    return exports._reinterpretUntilZeros8(buf, offset >>> 0).toString(encoding);
  };
  /**
   * Returns a new clone of the given "type" object, with its
   * `indirection` level incremented by **1**.
   *
   * Say you wanted to create a type representing a `void *`:
   *
   * ```
   * var voidPtrType = ref.refType(ref.types.void);
   * ```
   *
   * @param {Object|String} type The "type" object to create a reference type from. Strings get coerced first.
   * @return {Object} The new "type" object with its `indirection` incremented by 1.
   */


  exports.refType = function refType(type) {
    var _type = exports.coerceType(type);

    var rtn = Object.create(_type);
    rtn.indirection++;

    if (_type.name) {
      Object.defineProperty(rtn, 'name', {
        value: _type.name + '*',
        configurable: true,
        enumerable: true,
        writable: true
      });
    }

    rtn.NULL = nativeRef.NULL;
    return rtn;
  };
  /**
   * Returns a new clone of the given "type" object, with its
   * `indirection` level decremented by 1.
   *
   * @param {Object|String} type The "type" object to create a dereference type from. Strings get coerced first.
   * @return {Object} The new "type" object with its `indirection` decremented by 1.
   */


  exports.derefType = function derefType(type) {
    var _type = exports.coerceType(type);

    if (_type.indirection === 1) {
      throw new Error('Cannot create deref\'d type for type with indirection 1');
    }

    var rtn = Object.getPrototypeOf(_type);

    if (rtn.indirection !== _type.indirection - 1) {
      // slow case
      rtn = Object.create(_type);
      rtn.indirection--;
    }

    return rtn;
  };
  /**
   * Coerces a "type" object from a String or an actual "type" object. String values
   * are looked up from the `ref.types` Object. So:
   *
   *   * `"int"` gets coerced into `ref.types.int`.
   *   * `"int *"` gets translated into `ref.refType(ref.types.int)`
   *   * `ref.types.int` gets translated into `ref.types.int` (returns itself)
   *
   * Throws an Error if no valid "type" object could be determined. Most `ref`
   * functions use this function under the hood, so anywhere a "type" object is
   * expected, a String may be passed as well, including simply setting the
   * `buffer.type` property.
   *
   * ```
   * var type = ref.coerceType('int **');
   *
   * console.log(type.indirection);
   * 3
   * ```
   *
   * @param {Object|String} type The "type" Object or String to coerce.
   * @return {Object} A "type" object
   */


  exports.coerceType = function coerceType(type) {
    var rtn = type;

    if (typeof rtn === 'string') {
      rtn = types[type];
      if (rtn) return rtn; // strip whitespace

      rtn = type.replace(/\s+/g, '').toLowerCase();

      if (rtn === 'pointer') {
        // legacy "pointer" being used :(
        rtn = exports.refType(types["void"]); // void *
      } else if (rtn === 'string') {
        rtn = types.CString; // special char * type
      } else {
        var refCount = 0;
        rtn = rtn.replace(/\*/g, function () {
          refCount++;
          return '';
        }); // allow string names to be passed in

        rtn = types[rtn];

        if (refCount > 0) {
          if (!(rtn && 'size' in rtn && 'indirection' in rtn)) {
            throw new TypeError('could not determine a proper "type" from: ' + inspect(type));
          }

          for (var i = 0; i < refCount; i++) {
            rtn = exports.refType(rtn);
          }
        }
      }
    }

    if (!(rtn && 'size' in rtn && 'indirection' in rtn)) {
      throw new TypeError('could not determine a proper "type" from: ' + inspect(type));
    }

    return rtn;
  };
  /**
   * Returns the "type" property of the given Buffer.
   * Creates a default type for the buffer when none exists.
   *
   * @param {Buffer} buffer The Buffer instance to get the "type" object from.
   * @return {Object} The "type" object from the given Buffer.
   */


  exports.getType = function getType(buffer) {
    if (!buffer.type) {
      debug('WARN: no "type" found on buffer, setting default "type"', buffer);
      buffer.type = {};
      buffer.type.size = buffer.length;
      buffer.type.indirection = 1;

      buffer.type.get = function get() {
        throw new Error('unknown "type"; cannot get()');
      };

      buffer.type.set = function set() {
        throw new Error('unknown "type"; cannot set()');
      };
    }

    return exports.coerceType(buffer.type);
  };
  /**
   * Calls the `get()` function of the Buffer's current "type" (or the
   * passed in _type_ if present) at the given _offset_.
   *
   * This function handles checking the "indirection" level and returning a
   * proper "dereferenced" Bufffer instance when necessary.
   *
   * @param {Buffer} buffer The Buffer instance to read from.
   * @param {Number} offset (optional) The offset on the Buffer to start reading from. Defaults to 0.
   * @param {Object|String} type (optional) The "type" object to use when reading. Defaults to calling `getType()` on the buffer.
   * @return {?} Whatever value the "type" used when reading returns.
   */


  exports.get = function get(buffer, offset, type) {
    if (!offset) {
      offset = 0;
    }

    if (type) {
      type = exports.coerceType(type);
    } else {
      type = exports.getType(buffer);
    }

    debug('get(): (offset: %d)', offset, buffer);
    assert(type.indirection > 0, "\"indirection\" level must be at least 1, saw ".concat(type.indirection));

    if (type.indirection === 1) {
      // need to check "type"
      return type.get(buffer, offset);
    } else {
      // need to create a deref'd Buffer
      var _size = type.indirection === 2 ? type.size : exports.sizeof.pointer;

      var reference = exports.readPointer(buffer, offset, _size);
      reference.type = exports.derefType(type);
      return reference;
    }
  };
  /**
   * Calls the `set()` function of the Buffer's current "type" (or the
   * passed in _type_ if present) at the given _offset_.
   *
   * This function handles checking the "indirection" level writing a pointer rather
   * than calling the `set()` function if the indirection is greater than 1.
   *
   * @param {Buffer} buffer The Buffer instance to write to.
   * @param {?} value The value to write to the Buffer instance.
   * @param {Number} offset The offset on the Buffer to start writing to.
   * @param {Object|String} type (optional) The "type" object to use when reading. Defaults to calling `getType()` on the buffer.
   */


  exports.set = function set(buffer, value, offset, type) {
    if (!offset) {
      offset = 0;
    }

    if (type) {
      type = exports.coerceType(type);
    } else {
      type = exports.getType(buffer);
    }

    debug('set(): (offset: %d)', offset, buffer, value);
    assert(type.indirection >= 1, '"indirection" level must be at least 1');

    if (type.indirection === 1) {
      type.set(buffer, value, offset);
    } else {
      exports.writePointer(buffer, value, offset);
    }
  };
  /**
   * Returns a new Buffer instance big enough to hold `type`,
   * with the given `value` written to it.
   *
   * ``` js
   * var intBuf = ref.alloc(ref.types.int)
   * var int_with_4 = ref.alloc(ref.types.int, 4)
   * ```
   *
   * @param {Object|String} type The "type" object to allocate. Strings get coerced first.
   * @param {?} value (optional) The initial value set on the returned Buffer, using _type_'s `set()` function.
   * @return {Buffer} A new Buffer instance with it's `type` set to "type", and (optionally) "value" written to it.
   */


  exports.alloc = function alloc(_type, value) {
    var type = exports.coerceType(_type);
    debug('allocating Buffer for type with "size"', type.size);
    var size;

    if (type.indirection === 1) {
      size = type.size;
    } else {
      size = exports.sizeof.pointer;
    }

    var buffer = Buffer.alloc(size);
    buffer.type = type;

    if (arguments.length >= 2) {
      debug('setting value on allocated buffer', value);
      exports.set(buffer, value, 0, type);
    }

    return buffer;
  };
  /**
   * Returns a new `Buffer` instance with the given String written to it with the
   * given encoding (defaults to __'utf8'__). The buffer is 1 byte longer than the
   * string itself, and is NUL terminated.
   *
   * ```
   * var buf = ref.allocCString('hello world');
   *
   * console.log(buf.toString());
   * 'hello world\u0000'
   * ```
   *
   * @param {String} string The JavaScript string to be converted to a C string.
   * @param {String} encoding (optional) The encoding to use for the C string. Defaults to __'utf8'__.
   * @return {Buffer} The new `Buffer` instance with the specified String wrtten to it, and a trailing NUL byte.
   */


  exports.allocCString = function allocCString(string, encoding) {
    if (null == string || Buffer.isBuffer(string) && exports.isNull(string)) {
      return exports.NULL;
    }

    var size = Buffer.byteLength(string, encoding) + 1;
    var buffer = Buffer.allocUnsafe(size);
    exports.writeCString(buffer, string, 0, encoding);
    buffer.type = types.charPtr;
    return buffer;
  };
  /**
   * Writes the given string as a C String (NULL terminated) to the given buffer
   * at the given offset. "encoding" is optional and defaults to __'utf8'__.
   *
   * Unlike `readCString()`, this function requires the buffer to actually have the
   * proper length.
   *
   * @param {Buffer} buffer The Buffer instance to write to.
   * @param {String} string The JavaScript String to write that will be written to the buffer.
   * @param {Number} offset The offset of the buffer to begin writing at.
   * @param {String} encoding (optional) The encoding to read the C string as. Defaults to __'utf8'__.
   */


  exports.writeCString = function writeCString(buffer, string, offset, encoding) {
    assert(Buffer.isBuffer(buffer), 'expected a Buffer as the first argument');
    assert.strictEqual('string', _typeof(string), 'expected a "string" as the third argument');

    if (!offset) {
      offset = 0;
    }

    if (!encoding) {
      encoding = 'utf8';
    }

    var size = buffer.length - offset - 1;
    var len = buffer.write(string, offset, size, encoding);
    buffer.writeUInt8(0, offset + len); // NUL terminate
  };
  /**
   * `ref()` accepts a Buffer instance and returns a new Buffer
   * instance that is "pointer" sized and has its data pointing to the given
   * Buffer instance. Essentially the created Buffer is a "reference" to the
   * original pointer, equivalent to the following C code:
   *
   * ``` c
   * char *buf = buffer;
   * char **ref = &buf;
   * ```
   *
   * @param {Buffer | ArrayTypeValue | StructTypeValue | UnionTypeValue} buffer A Buffer instance to create a reference to.
   * @return {Buffer} A new Buffer instance pointing to _buffer_.
   */


  exports.ref = function ref(buffer) {
    if (buffer instanceof Uint8Array) {
      debug('creating a reference to buffer', buffer);
      var type = exports.refType(exports.getType(buffer));
      return exports.alloc(type, buffer);
    } else {
      return buffer.refOverride();
    }
  };
  /**
   * Accepts a Buffer instance and attempts to "dereference" it.
   * That is, first it checks the `indirection` count of _buffer_'s "type", and if
   * it's greater than __1__ then it merely returns another Buffer, but with one
   * level less `indirection`.
   *
   * When _buffer_'s indirection is at __1__, then it checks for `buffer.type`
   * which should be an Object with its own `get()` function.
   *
   * ```
   * var buf = ref.alloc('int', 6);
   *
   * var val = ref.deref(buf);
   * console.log(val);
   * 6
   * ```
   *
   *
   * @param {Buffer} buffer A Buffer instance to dereference.
   * @return {?} The returned value after dereferencing _buffer_.
   */


  exports.deref = function deref(buffer) {
    debug('dereferencing buffer', buffer);
    return exports.get(buffer);
  };

  var kAttachedRefs = Symbol('attached');
  /**
   * Attaches _object_ to _buffer_ such that it prevents _object_ from being garbage
   * collected until _buffer_ does.
   *
   * @param {Buffer} buffer A Buffer instance to attach _object_ to.
   * @param {Object|Buffer} object An Object or Buffer to prevent from being garbage collected until _buffer_ does.
   * @api private
   */

  exports._attach = function _attach(buf, obj) {
    if (!buf[kAttachedRefs]) {
      buf[kAttachedRefs] = [];
    }

    buf[kAttachedRefs].push(obj);
  };
  /**
   * @param {Buffer} buffer
   * @param {Number} offset
   * @param {Object} object
   * @name _writeObject
   * @api private
   */

  /**
   * Writes a pointer to _object_ into _buffer_ at the specified _offset.
   *
   * This function "attaches" _object_ to _buffer_ to prevent it from being garbage
   * collected.
   *
   * ```
   * var buf = ref.alloc('Object');
   * ref.writeObject(buf, { foo: 'bar' }, 0);
   *
   * ```
   *
   * @param {Buffer} buffer A Buffer instance to write _object_ to.
   * @param {Object} object The Object to be written into _buffer_.
   * @param {Number} offset The offset on the Buffer to start writing at.
   */


  exports.writeObject = function writeObject(buf, obj, offset) {
    debug('writing Object to buffer', buf, obj, offset);

    exports._writeObject(buf, obj, offset);

    exports._attach(buf, obj);
  };
  /**
   * Same as `ref.writePointer()`, except that this version does not attach
   * _pointer_ to _buffer_, which is potentially unsafe if the garbage collector
   * runs.
   *
   * @param {Buffer} buffer A Buffer instance to write _pointer to.
   * @param {Buffer} pointer The Buffer instance whose memory address will be written to _buffer_.
   * @param {Number} offset The offset on the Buffer to start writing at.
   * @param {Boolean} reference if create a node-api reference and finalizer to ensure that
   *  the buffer whoes pointer is written can only be collected after the finalizers for the buffer
   *  to which the pointer was written have already run
   * @name _writePointer
   * @api private
   */

  /**
   * Writes the memory address of _pointer_ to _buffer_ at the specified _offset_.
   *
   * This function "attaches" _object_ to _buffer_ to prevent it from being garbage
   * collected.
   *
   * ```
   * var someBuffer = new Buffer('whatever');
   * var buf = ref.alloc('pointer');
   * ref.writePointer(buf, someBuffer, 0);
   * ```
   *
   * @param {Buffer} buffer A Buffer instance to write _pointer to.
   * @param {Buffer} pointer The Buffer instance whose memory address will be written to _buffer_.
   * @param {Number} offset The offset on the Buffer to start writing at.
   */


  exports.writePointer = function writePointer(buf, ptr, offset) {
    debug('writing pointer to buffer', buf, ptr, offset); // Passing true as a fourth parameter does an a stronger
    // version of attach which ensures ptr is only collected after
    // the finalizer for buf has run. See
    // for why this is necessary

    exports._writePointer(buf, ptr, offset >>> 0, true);
  };
  /**
   * Same as `ref.reinterpret()`, except that this version does not attach
   * _buffer_ to the returned Buffer, which is potentially unsafe if the
   * garbage collector runs.
   *
   * @param {Buffer} buffer A Buffer instance to base the returned Buffer off of.
   * @param {Number} size The `length` property of the returned Buffer.
   * @param {Number} offset The offset of the Buffer to begin from.
   * @return {Buffer} A new Buffer instance with the same memory address as _buffer_, and the requested _size_.
   * @name _reinterpret
   * @api private
   */

  /**
   * Returns a new Buffer instance with the specified _size_, with the same memory
   * address as _buffer_.
   *
   * This function "attaches" _buffer_ to the returned Buffer to prevent it from
   * being garbage collected.
   *
   * @param {Buffer} buffer A Buffer instance to base the returned Buffer off of.
   * @param {Number} size The `length` property of the returned Buffer.
   * @param {Number} offset The offset of the Buffer to begin from.
   * @return {Buffer} A new Buffer instance with the same memory address as _buffer_, and the requested _size_.
   */


  exports.reinterpret = function reinterpret(buffer, size, offset) {
    debug('reinterpreting buffer to "%d" bytes', size);

    var rtn = exports._reinterpret(buffer, size, offset >>> 0);

    exports._attach(rtn, buffer);

    return rtn;
  };
  /**
   * Accepts a `Buffer` instance and a number of `NULL` bytes to read from the
   * pointer. This function will scan past the boundary of the Buffer's `length`
   * until it finds `size` number of aligned `NULL` bytes.
   *
   * This is useful for finding the end of NUL-termintated array or C string.
   *
   * This function "attaches" _buffer_ to the returned Buffer to prevent it from
   * being garbage collected.
   *
   * @param {Buffer} buffer A Buffer instance to base the returned Buffer off of.
   * @param {Number} size The number of sequential, aligned `NULL` bytes are required to terminate the buffer.
   * @param {Number} offset The offset of the Buffer to begin from.
   * @return {Buffer} A new Buffer instance with the same memory address as _buffer_, and a variable `length` that is terminated by _size_ NUL bytes.
   */


  exports.reinterpretUntilZeros = function reinterpretUntilZeros(buffer, size, offset) {
    debug('reinterpreting buffer to until "%d" NULL (0) bytes are found', size);
    var bitCount = size * 8;
    var _reinterpretUntilZeros = exports["_reinterpretUntilZeros".concat(bitCount)];

    if (_reinterpretUntilZeros === undefined) {
      throw new Error("reinterpretUntilZeros only support size 1,2,4,8 bytes, not size:".concat(size));
    }

    var rtn = _reinterpretUntilZeros(buffer, offset >>> 0);

    exports._attach(rtn, buffer);

    return rtn;
  };

  function getAlignmentAndSize(nativeRef, name) {
    if (name === 'ssize_t' || name === 'intptr_t' || name === 'uintptr_t') {
      name = 'size_t';
    }

    return {
      size: nativeRef.sizeof[name],
      alignment: nativeRef.alignof[name]
    };
  }

  function getFunctionsGenerate(max_size_is_8, unsigned, size) {
    var readFunctionNumber = unsigned ? buffer$1["readUInt".concat(size * 8)] : buffer$1["readInt".concat(size * 8)];
    var readFunctionBigInt = unsigned ? buffer$1["readBigUInt".concat(size * 8)] : buffer$1["readBigInt".concat(size * 8)];
    /* Always get as number */

    var getFunctionNumber = readFunctionNumber;

    if (!getFunctionNumber) {
      getFunctionNumber = function getFunctionNumber(buf, offset) {
        return Number(readFunctionBigInt(buf, offset));
      };
    }
    /* Always get as bigint */


    var getFunctionBigInt = readFunctionBigInt;

    if (!getFunctionBigInt) {
      getFunctionBigInt = function getFunctionBigInt(buf, offset) {
        return BigInt(readFunctionNumber(buf, offset));
      };
    }
    /**
     * getFunction
     * should always return `bigint` for max_size_is_8 type,
     * such as size_t, intptr_t, long
     * should always return `number` for types that the type size are within 4 byte
     * such as bool char uchar byte short int uint32_t
     */


    var getFunction;

    if (max_size_is_8) {
      getFunction = getFunctionBigInt;
    } else {
      getFunction = getFunctionNumber;
    }

    return {
      get: getFunction,
      getNumber: getFunctionNumber,
      getBigInt: getFunctionBigInt
    };
  }

  function setFunctionsGenerate(max_size_is_8, unsigned, size) {
    var writeFunctionNumber = unsigned ? buffer$1["writeUInt".concat(size * 8)] : buffer$1["writeInt".concat(size * 8)];
    var writeFunctionBigInt = unsigned ? buffer$1["writeBigUInt".concat(size * 8)] : buffer$1["writeBigInt".concat(size * 8)];
    /* Always set as number */

    var setFunctionNumber = writeFunctionNumber;

    if (!setFunctionNumber) {
      /* Means the sizeof type is 8 byte */
      setFunctionNumber = function setFunctionNumber(buf, val, offset) {
        return writeFunctionBigInt(buf, BigInt(val), offset);
      };
    }
    /* Always set as bigint */


    var setFunctionBigInt = writeFunctionBigInt;

    if (!setFunctionBigInt) {
      /* Means the sizeof type is 4byte or less */
      if (unsigned) {
        setFunctionBigInt = function setFunctionBigInt(buf, val, offset) {
          return writeFunctionNumber(buf, BigInt.asUintN(val, 32), offset);
        };
      } else {
        setFunctionBigInt = function setFunctionBigInt(buf, val, offset) {
          return writeFunctionNumber(buf, BigInt.asIntN(val, 32), offset);
        };
      }
    }
    /**
     * setFunction
     * should accept `bigint` only for max_size_is_8 type,
     * such as size_t, intptr_t, long, uint64_t
     * should accept `number` only for types that the type size are within 4 byte
     * such as bool char uchar byte short int uint32_t
     */


    var setFunction;

    if (max_size_is_8) {
      setFunction = setFunctionBigInt;
    } else {
      setFunction = setFunctionNumber;
    }

    return {
      set: setFunction,
      setNumeric: function setNumeric(buf, val, offset) {
        if (typeof val === 'bigint') {
          return setFunctionBigInt(buf, val, offset);
        } else {
          return setFunctionNumber(buf, val, offset);
        }
      },
      setNumber: setFunctionNumber,
      setBigInt: setFunctionBigInt
    };
  }

  function overrideGetSetFunctions(name, unsigned, getFunctions, setFunctions) {
    switch (name) {
      case 'bool':
        {
          var getFunctionOld = getFunctions.get;

          getFunctions.get = function (buf, offset) {
            return getFunctionOld(buf, offset) !== 0;
          };

          var setFunctionOld = setFunctions.set;

          setFunctions.set = function (buf, val, offset) {
            /* Turn boolean to number from https://stackoverflow.com/a/22239859 */
            return setFunctionOld(buf, val | 0, offset);
          };

          break;
        }

      case 'uchar':
      case 'char':
        {
          var readFunction = buffer$1.readUInt8;
          var writeFunction = unsigned ? buffer$1.writeUInt8 : buffer$1.writeInt8;

          getFunctions.get = function (buf, offset) {
            /* Always read in UInt8 type so that the charCode be valid */
            var charCode = readFunction(buf, offset);
            return String.fromCodePoint(charCode);
          };

          setFunctions.set = function (buf, val, offset) {
            return writeFunction(buf, val.charCodeAt(0), offset);
          };

          break;
        }

      case 'float':
        {
          getFunctions.get = buffer$1.readFloat;
          setFunctions.set = buffer$1.writeFloat;
          break;
        }

      case 'double':
        {
          getFunctions.get = buffer$1.readDouble;
          setFunctions.set = buffer$1.writeDouble;
          break;
        }

      case 'Object':
        {
          getFunctions.get = function (buf, offset) {
            return nativeRef.readObject(buf, offset >>> 0);
          };

          getFunctions.set = function (buf, val, offset) {
            nativeRef.writeObject(buf, val, offset >>> 0);
            return offset + size;
          };

          break;
        }
    }
  }
  /**
   * @param {String} name The c type name
   */


  function createCType(name) {
    var unsigned = name === 'bool' || name === 'byte' || name === 'size_t' || name[0] === 'u';

    var _getAlignmentAndSize = getAlignmentAndSize(nativeRef, name),
        size = _getAlignmentAndSize.size,
        alignment = _getAlignmentAndSize.alignment;

    assert(alignment > 0);
    var max_size_is_8 = name === 'long' || name === 'ulong' || name === 'longlong' || name === 'ulonglong' || name === 'size_t' || name === 'ssize_t' || name === 'intptr_t' || name === 'uintptr_t' || size === 8;
    var zero_value = 0;
    var negative_one_value = -1;

    if (name === 'bool') {
      zero_value = false;
      negative_one_value = true;
    } else if (max_size_is_8) {
      zero_value = 0n;

      if (unsigned) {
        negative_one_value = 1n << BigInt(size) * 8n;
      } else {
        negative_one_value = -1n;
      }
    }

    var getFunctions = getFunctionsGenerate(max_size_is_8, unsigned, size);
    var setFunctions = setFunctionsGenerate(max_size_is_8, unsigned, size);
    overrideGetSetFunctions(name, unsigned, getFunctions, setFunctions); // "typedef"s for the variable-sized types

    var typedefTypes = ['bool', 'byte', 'char', 'uchar', 'short', 'ushort', 'int', 'uint', 'long', 'ulong', 'longlong', 'ulonglong', 'size_t', 'ssize_t', 'intptr_t', 'uintptr_t'];
    var newType;

    if (typedefTypes.indexOf(name) >= 0) {
      var typeName = 'int' + size * 8;

      if (unsigned) {
        typeName = 'u' + typeName;
      }

      newType = Object.create(types[typeName]);
    } else {
      /**
       * Attributes that may shared between types when do typedef,
       * such as typedef uint8_t uchar
       */
      newType = {
        name: name,
        size: size,
        alignment: alignment,
        indirection: 1
      };
    }

    Object.assign(newType, {
      /* Different for each type */
      realName: name,

      /* typedef name realName */
      zero: zero_value,
      negative_one: negative_one_value,
      max_size_is_8: max_size_is_8
    }, getFunctions, setFunctions);
    return newType;
  } // the built-in "types"


  var types = exports.types = {};
  /**
   * The `void` type.
   *
   * @section types
   */

  types["void"] = {
    name: 'void',
    size: 0,
    indirection: 1,
    get: function get(buf, offset) {
      debug('getting `void` type (returns `undefined`)');
      return undefined;
    },
    set: function set(buf, val, offset) {
      debug('setting `void` type (no-op)');
    }
  };
  /**
   * The `int8` type.
   */

  types.int8 = createCType('int8');
  /**
   * The `uint8` type.
   */

  types.uint8 = createCType('uint8');
  /**
   * The `int16` type.
   */

  types.int16 = createCType('int16');
  /**
   * The `uint16` type.
   */

  types.uint16 = createCType('uint16');
  /**
   * The `int32` type.
   */

  types.int32 = createCType('int32');
  /**
   * The `uint32` type.
   */

  types.uint32 = createCType('uint32');
  /**
   * The `int64` type.
   */

  types.int64 = createCType('int64');
  /**
   * The `uint64` type.
   */

  types.uint64 = createCType('uint64');
  /**
   * The `float` type.
   */

  types["float"] = createCType('float');
  /**
   * The `double` type.
   */

  types["double"] = createCType('double');
  /**
   * The `Object` type. This can be used to read/write regular JS Objects
   * into raw memory.
   */

  types.Object = createCType('Object');
  /**
   * The `CString` (a.k.a `"string"`) type.
   *
   * CStrings are a kind of weird thing. We say it's `sizeof(char *)`, and
   * `indirection` level of 1, which means that we have to return a Buffer that
   * is pointer sized, and points to a some utf8 string data, so we have to create
   * a 2nd "in-between" buffer.
   */

  types.CString = {
    name: 'CString',
    size: nativeRef.sizeof.pointer,
    alignment: nativeRef.alignof.pointer,
    indirection: 1,
    get: function get(buf, offset) {
      var _buf = exports.readPointer(buf, offset);

      if (exports.isNull(_buf)) {
        return null;
      }

      return exports.readCString(_buf, 0);
    },
    set: function set(buf, val, offset) {
      var _buf;

      if (Buffer.isBuffer(val)) {
        _buf = val;
      } else {
        // assume string
        _buf = exports.allocCString(val);
      }

      return exports.writePointer(buf, _buf, offset);
    }
  };
  /**
   * The `bool` type.
   *
   * Wrapper type around `types.uint8` that accepts/returns `true` or
   * `false` Boolean JavaScript values.
   *
   * @name bool
   *
   */

  types.bool = createCType('bool');
  /**
   * The `byte` type.
   *
   * @name byte
   */

  types["byte"] = createCType('byte');
  /**
   * The `char` type.
   *
   * @name char
   */

  types["char"] = createCType('char');
  /**
   * The `uchar` type.
   *
   * @name uchar
   */

  types.uchar = createCType('uchar');
  /**
   * The `short` type.
   *
   * @name short
   */

  types["short"] = createCType('short');
  /**
   * The `ushort` type.
   *
   * @name ushort
   */

  types.ushort = createCType('ushort');
  /**
   * The `int` type.
   *
   * @name int
   */

  types["int"] = createCType('int');
  /**
   * The `uint` type.
   *
   * @name uint
   */

  types.uint = createCType('uint');
  /**
   * The `long` type.
   *
   * @name long
   */

  types["long"] = createCType('long');
  /**
   * The `ulong` type.
   *
   * @name ulong
   */

  types.ulong = createCType('ulong');
  /**
   * The `longlong` type.
   *
   * @name longlong
   */

  types.longlong = createCType('longlong');
  /**
   * The `ulonglong` type.
   *
   * @name ulonglong
   */

  types.ulonglong = createCType('ulonglong');
  /**
   * The `ssize_t` type.
   *
   * @name ssize_t
   */

  types.ssize_t = createCType('ssize_t');
  /**
   * The `size_t` type.
   *
   * @name size_t
   */

  types.size_t = createCType('size_t');
  /**
   * The `intptr_t` type.
   *
   * @name intptr_t
   */

  types.intptr_t = createCType('intptr_t');
  /**
   * The `uintptr_t` type.
   *
   * @name uintptr_t
   */

  types.uintptr_t = createCType('uintptr_t');
  /**
   * The `char *` type is used by "allocCString()"
   * @name charPtr
   */

  types.charPtr = exports.refType(types["char"]);
  /**
   * The `void *` type
   * @name voidPtr
   */

  types.voidPtr = exports.refType(types["void"]);
  /*!
   * Set the `type` property of the `NULL` pointer Buffer object.
   */

  exports.NULL.type = types["void"];
  /**
   * `NULL_POINTER` is a pointer-sized `Buffer` instance pointing to `NULL`.
   * Conceptually, it's equivalent to the following C code:
   *
   * ``` c
   * char *null_pointer;
   * null_pointer = NULL;
   * ```
   *
   * @type Buffer
   */

  exports.NULL_POINTER = exports.ref(exports.NULL);
  /**
   * `ref` overwrites the default `Buffer#inspect()` function to include the
   * hex-encoded memory address of the Buffer instance when invoked.
   *
   * This is simply a nice-to-have.
   *
   * **Before**:
   *
   * ``` js
   * console.log(new Buffer('ref'));
   * <Buffer 72 65 66>
   * ```
   *
   * **After**:
   *
   * ``` js
   * console.log(new Buffer('ref'));
   * <Buffer@0x103015490 72 65 66>
   * ```
   */

  var inspectSym = inspect.custom || 'inspect';
  /**
   * in node 6.91, inspect.custom does not give a correct value; so in this case, don't torch the whole process.
   * fixed in >6.9.2
   */

  if (Buffer.prototype[inspectSym]) {
    Buffer.prototype[inspectSym] = overwriteInspect(Buffer.prototype[inspectSym]);
  }

  function overwriteInspect(inspect) {
    if (inspect.name === 'refinspect') {
      return inspect;
    } else {
      return function refinspect() {
        var v = inspect.apply(this, arguments);
        return v.replace('Buffer', 'Buffer@0x' + exports.hexAddress(this));
      };
    }
  }
})(ref$b, ref$b.exports);

var type = {};

/**
 * An interface for modeling and instantiating C-style data structures. This is
 * not a constructor per-say, but a constructor generator. It takes an array of
 * tuples, the left side being the type, and the right side being a field name.
 * The order should be the same order it would appear in the C-style struct
 * definition. It returns a function that can be used to construct an object that
 * reads and writes to the data structure using properties specified by the
 * initial field list.
 *
 * The only verboten field names are "ref", which is used used on struct
 * instances as a function to retrieve the backing Buffer instance of the
 * struct, and "ref.buffer" which contains the backing Buffer instance.
 *
 *
 * Example:
 *
 * ``` javascript
 * var ref = require('ref')
 * var Struct = require('ref-struct')
 *
 * // create the `char *` type
 * var charPtr = ref.refType(ref.types.char)
 * var int = ref.types.int
 *
 * // create the struct "type" / constructor
 * var PasswordEntry = Struct({
 *     'username': 'string'
 *   , 'password': 'string'
 *   , 'salt':     int
 * })
 *
 * // create an instance of the struct, backed a Buffer instance
 * var pwd = new PasswordEntry()
 * pwd.username = 'ricky'
 * pwd.password = 'rbransonlovesnode.js'
 * pwd.salt = (Math.random() * 1000000) | 0
 *
 * pwd.username // → 'ricky'
 * pwd.password // → 'rbransonlovesnode.js'
 * pwd.salt     // → 820088
 * ```
 */

/**
 * Module dependencies.
 */


var util = require$$1;
var assert$b = require$$1$1;
var debug$e = browser$1.exports('ref:struct');
/**
 * Module exports.
 */

var struct = function struct(ref) {
  /**
   * The Struct "type" meta-constructor.
   */
  function Struct() {
    debug$e('defining new struct "type"');
    /**
     * This is the "constructor" of the Struct type that gets returned.
     *
     * Invoke it with `new` to create a new Buffer instance backing the struct.
     * Pass it an existing Buffer instance to use that as the backing buffer.
     * Pass in an Object containing the struct fields to auto-populate the
     * struct with the data.
     */

    function StructType(arg, data) {
      if (!(this instanceof StructType)) {
        return new StructType(arg, data);
      }

      debug$e('creating new struct instance');
      var store;

      if (Buffer.isBuffer(arg)) {
        debug$e('using passed-in Buffer instance to back the struct', arg);
        assert$b(arg.length >= StructType.size, 'Buffer instance must be at least ' + StructType.size + ' bytes to back this struct type');
        store = arg;
        arg = data;
      } else {
        debug$e('creating new Buffer instance to back the struct (size: %d)', StructType.size);
        store = Buffer.alloc(StructType.size);
      } // set the backing Buffer store


      store.type = StructType;
      this['ref.buffer'] = store;

      if (arg) {
        for (var key in arg) {
          // hopefully hit the struct setters
          this[key] = arg[key];
        }
      }

      StructType._instanceCreated = true;
    } // make instances inherit from the `proto`


    StructType.prototype = Object.create(proto, {
      constructor: {
        value: StructType,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    StructType.defineProperty = defineProperty;
    StructType.toString = toString;
    StructType.fields = {};
    var opt = arguments.length > 0 && arguments[1] ? arguments[1] : {}; // Setup the ref "type" interface. The constructor doubles as the "type" object

    StructType.size = 0;
    StructType.alignment = 0;
    StructType.indirection = 1;
    StructType.isPacked = opt.packed ? Boolean(opt.packed) : false;
    StructType.get = get;
    StructType.set = set; // Read the fields list and apply all the fields to the struct
    // TODO: Better arg handling... (maybe look at ES6 binary data API?)

    var arg = arguments[0];

    if (Array.isArray(arg)) {
      // legacy API
      arg.forEach(function (a) {
        var type = a[0];
        var name = a[1];
        StructType.defineProperty(name, type);
      });
    } else if (_typeof(arg) === 'object') {
      Object.keys(arg).forEach(function (name) {
        var type = arg[name];
        StructType.defineProperty(name, type);
      });
    }

    return StructType;
  }
  /**
   * The "get" function of the Struct "type" interface
   */


  function get(buffer, offset) {
    debug$e('Struct "type" getter for buffer at offset', buffer, offset);

    if (offset > 0) {
      buffer = buffer.slice(offset);
    }

    return new this(buffer);
  }
  /**
   * The "set" function of the Struct "type" interface
   */


  function set(buffer, value, offset) {
    debug$e('Struct "type" setter for buffer at offset', buffer, value, offset);
    var isStruct = value instanceof this;

    if (isStruct) {
      // optimization: copy the buffer contents directly rather
      // than going through the ref-struct constructor
      value['ref.buffer'].copy(buffer, offset, 0, this.size);
    } else {
      if (offset > 0) {
        buffer = buffer.slice(offset);
      }

      new this(buffer, value);
    }
  }
  /**
   * Custom `toString()` override for struct type instances.
   */


  function toString() {
    return '[StructType]';
  }
  /**
   * Adds a new field to the struct instance with the given name and type.
   * Note that this function will throw an Error if any instances of the struct
   * type have already been created, therefore this function must be called at the
   * beginning, before any instances are created.
   */


  function defineProperty(name, type) {
    debug$e('defining new struct type field', name); // allow string types for convenience

    type = ref.coerceType(type);
    assert$b(!this._instanceCreated, 'an instance of this Struct type has already ' + 'been created, cannot add new "fields" anymore');
    assert$b.equal('string', _typeof(name), 'expected a "string" field name');
    assert$b(type && /object|function/i.test(_typeof(type)) && 'size' in type && 'indirection' in type, 'expected a "type" object describing the field type: "' + type + '"');
    assert$b(type.indirection > 1 || type.size > 0, '"type" object must have a size greater than 0');
    assert$b(!(name in this.prototype), 'the field "' + name + '" already exists in this Struct type');
    var field = {
      type: type
    };
    this.fields[name] = field; // define the getter/setter property

    var desc = {
      enumerable: true,
      configurable: true
    };

    desc.get = function () {
      debug$e('getting "%s" struct field (offset: %d)', name, field.offset);
      return ref.get(this['ref.buffer'], field.offset, type);
    };

    desc.set = function (value) {
      debug$e('setting "%s" struct field (offset: %d)', name, value, field.offset);
      return ref.set(this['ref.buffer'], value, field.offset, type);
    }; // calculate the new size and field offsets


    recalc(this);
    Object.defineProperty(this.prototype, name, desc);
  }

  function recalc(struct) {
    // reset size and alignment
    struct.size = 0;
    struct.alignment = 0;
    var fieldNames = Object.keys(struct.fields); // first loop through is to determine the `alignment` of this struct

    fieldNames.forEach(function (name) {
      var field = struct.fields[name];
      var type = field.type;
      var alignment = type.alignment || ref.alignof.pointer;

      if (type.indirection > 1) {
        alignment = ref.alignof.pointer;
      }

      if (struct.isPacked) {
        struct.alignment = Math.min(struct.alignment || alignment, alignment);
      } else {
        struct.alignment = Math.max(struct.alignment, alignment);
      }
    }); // second loop through sets the `offset` property on each "field"
    // object, and sets the `struct.size` as we go along

    fieldNames.forEach(function (name) {
      var field = struct.fields[name];
      var type = field.type;

      if (null != type.fixedLength) {
        // "ref-array" types set the "fixedLength" prop. don't treat arrays like one
        // contiguous entity. instead, treat them like individual elements in the
        // struct. doing this makes the padding end up being calculated correctly.
        field.offset = addType(type.type);

        for (var i = 1; i < type.fixedLength; i++) {
          addType(type.type);
        }
      } else {
        field.offset = addType(type);
      }
    });

    function addType(type) {
      var offset = struct.size;
      var align = type.indirection === 1 ? type.alignment : ref.alignof.pointer;
      var padding = struct.isPacked ? 0 : (align - offset % align) % align;
      var size = type.indirection === 1 ? type.size : ref.sizeof.pointer;
      offset += padding;

      if (!struct.isPacked) {
        assert$b.equal(offset % align, 0, "offset should align");
      } // adjust the "size" of the struct type


      struct.size = offset + size; // return the calulated offset

      return offset;
    } // any final padding?


    var left = struct.size % struct.alignment;

    if (left > 0) {
      debug$e('additional padding to the end of struct:', struct.alignment - left);
      struct.size += struct.alignment - left;
    }
  }
  /**
   * this is the custom prototype of Struct type instances.
   */


  var proto = {};
  /**
   * set a placeholder variable on the prototype so that defineProperty() will
   * throw an error if you try to define a struct field with the name "buffer".
   */

  proto['ref.buffer'] = ref.NULL;
  /**
   * Flattens the Struct instance into a regular JavaScript Object. This function
   * "gets" all the defined properties.
   *
   * @api public
   */

  proto.toObject = function toObject() {
    var obj = {};
    Object.keys(this.constructor.fields).forEach(function (k) {
      obj[k] = this[k];
    }, this);
    return obj;
  };
  /**
   * Basic `JSON.stringify(struct)` support.
   */


  proto.toJSON = function toJSON() {
    return this.toObject();
  };
  /**
   * `.inspect()` override. For the REPL.
   *
   * @api public
   */


  proto.inspect = function inspect() {
    var obj = this.toObject(); // add instance's "own properties"

    Object.keys(this).forEach(function (k) {
      obj[k] = this[k];
    }, this);
    return util.inspect(obj);
  };
  /**
   * returns a Buffer pointing to this struct data structure.
   */


  proto.refOverride = function ref() {
    return this['ref.buffer'];
  };

  return Struct;
};

/**
 * Module dependencies.
 */


var assert$a = require$$1$1;
var debug$d = browser$1.exports('ref-union');
/**
 * Module exports.
 */

var union = function union(ref) {
  /**
   * The "Union" type constructor.
   */
  function Union() {
    debug$d('defining new union "type"');

    function UnionType(arg, data) {
      if (!(this instanceof UnionType)) {
        return new UnionType(arg, data);
      }

      debug$d('creating new union instance');
      var store;

      if (Buffer.isBuffer(arg)) {
        debug$d('using passed-in Buffer instance to back the union', arg);
        assert$a(arg.length >= UnionType.size, 'Buffer instance must be at least ' + UnionType.size + ' bytes to back this untion type');
        store = arg;
        arg = data;
      } else {
        debug$d('creating new Buffer instance to back the union (size: %d)', UnionType.size);
        store = Buffer.alloc(UnionType.size);
      } // set the backing Buffer store


      store.type = UnionType;
      this['ref.buffer'] = store; // initialise the union with values supplied

      if (arg) {
        //TODO: Sanity check - e.g. (Object.keys(arg).length == 1)
        for (var key in arg) {
          // hopefully hit the union setters
          this[key] = arg[key];
        }
      }

      UnionType._instanceCreated = true;
    } // make instances inherit from `proto`


    UnionType.prototype = Object.create(proto, {
      constructor: {
        value: UnionType,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    UnionType.defineProperty = defineProperty;
    UnionType.toString = toString;
    UnionType.fields = {}; // comply with ref's "type" interface

    UnionType.size = 0;
    UnionType.alignment = 0;
    UnionType.indirection = 1;
    UnionType.get = get;
    UnionType.set = set; // Read the fields list

    var arg = arguments[0];

    if (_typeof(arg) === 'object') {
      Object.keys(arg).forEach(function (name) {
        var type = arg[name];
        UnionType.defineProperty(name, type);
      });
    }

    return UnionType;
  }

  function get(buffer, offset) {
    debug$d('Union "type" getter for buffer at offset', buffer, offset);

    if (offset > 0) {
      buffer = buffer.slice(offset);
    }

    return new this(buffer);
  }

  function set(buffer, value, offset) {
    debug$d('Union "type" setter for buffer at offset', buffer, value, offset);

    if (offset > 0) {
      buffer = buffer.slice(offset);
    }

    var union = new this(buffer);
    var isUnion = value instanceof this;

    if (isUnion) {
      // TODO: optimize - use Buffer#copy()
      Object.keys(this.fields).forEach(function (name) {
        // hopefully hit the setters
        union[name] = value[name];
      });
    } else {
      for (var name in value) {
        // hopefully hit the setters
        union[name] = value[name];
      }
    }
  }

  function toString() {
    return '[UnionType]';
  }
  /**
   * Adds a new field to the union instance with the given name and type.
   * Note that this function will throw an Error if any instances of the union
   * type have already been created, therefore this function must be called at the
   * beginning, before any instances are created.
   */


  function defineProperty(name, type) {
    debug$d('defining new union type field', name); // allow string types for convenience

    type = ref.coerceType(type);
    assert$a(!this._instanceCreated, 'an instance of this Union type has already ' + 'been created, cannot add new data members anymore');
    assert$a.equal('string', _typeof(name), 'expected a "string" field name');
    assert$a(type && /object|function/i.test(_typeof(type)) && 'size' in type && 'indirection' in type, 'expected a "type" object describing the field type: "' + type + '"');
    assert$a(!(name in this.prototype), 'the field "' + name + '" already exists in this Union type'); // define the getter/setter property

    Object.defineProperty(this.prototype, name, {
      enumerable: true,
      configurable: true,
      get: get,
      set: set
    });
    var field = {
      type: type
    };
    this.fields[name] = field; // calculate the new size and alignment

    recalc(this);

    function get() {
      debug$d('getting "%s" union field (length: %d)', name, type.size);
      return ref.get(this['ref.buffer'], 0, type);
    }

    function set(value) {
      debug$d('setting "%s" union field (length: %d)', name, type.size, value);
      return ref.set(this['ref.buffer'], value, 0, type);
    }
  }

  function recalc(union) {
    // reset size and alignment
    union.size = 0;
    union.alignment = 0;
    var fieldNames = Object.keys(union.fields); // loop through to set the size of the union of the largest member field
    // and the alignment to the requirements of the largest member

    fieldNames.forEach(function (name) {
      var field = union.fields[name];
      var type = field.type;
      var size = type.indirection === 1 ? type.size : ref.sizeof.pointer;
      var alignment = type.alignment || ref.alignof.pointer;

      if (type.indirection > 1) {
        alignment = ref.alignof.pointer;
      }

      union.alignment = Math.max(union.alignment, alignment);
      union.size = Math.max(union.size, size);
    }); // any padding

    var left = union.size % union.alignment;

    if (left > 0) {
      debug$d('additional padding to the end of union:', union.alignment - left);
      union.size += union.alignment - left;
    }
  }
  /**
   * the base prototype that union type instances will inherit from.
   */


  var proto = {};
  proto['ref.buffer'] = ref.NULL;
  /**
   * returns a Buffer pointing to this union data structure.
   */

  proto.refOverride = function ref() {
    return this['ref.buffer'];
  };

  return Union;
};

var isImplemented$4 = function isImplemented() {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) !== "object") return false;
  if (!globalThis) return false;
  return globalThis.Array === Array;
};

var naiveFallback = function naiveFallback() {
  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self) return self;
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window) return window;
  throw new Error("Unable to resolve global `this`");
};

var implementation = function () {
  if (this) return this; // Unexpected strict mode (may happen if e.g. bundled into ESM module)
  // Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
  // In all ES5+ engines global object inherits from Object.prototype
  // (if you approached one that doesn't please report)

  try {
    Object.defineProperty(Object.prototype, "__global__", {
      get: function get() {
        return this;
      },
      configurable: true
    });
  } catch (error) {
    // Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)
    return naiveFallback();
  }

  try {
    // Safari case (window.__global__ is resolved with global context, but __global__ does not)
    if (!__global__) return naiveFallback();
    return __global__;
  } finally {
    delete Object.prototype.__global__;
  }
}();

var globalThis_1 = isImplemented$4() ? globalThis : implementation;

var global = globalThis_1,
    validTypes = {
  object: true,
  symbol: true
};

var isImplemented$3 = function isImplemented() {
  var _Symbol = global.Symbol;
  var symbol;
  if (typeof _Symbol !== "function") return false;
  symbol = _Symbol("test symbol");

  try {
    String(symbol);
  } catch (e) {
    return false;
  } // Return 'true' also for polyfills


  if (!validTypes[_typeof(_Symbol.iterator)]) return false;
  if (!validTypes[_typeof(_Symbol.toPrimitive)]) return false;
  if (!validTypes[_typeof(_Symbol.toStringTag)]) return false;
  return true;
};

var d$6 = {exports: {}};

var _undefined$1 = void 0;

var is$4 = function is(value) {
  return value !== _undefined$1 && value !== null;
};

var isValue$5 = is$4; // prettier-ignore

var possibleTypes = {
  "object": true,
  "function": true,
  "undefined": true
  /* document.all */

};

var is$3 = function is(value) {
  if (!isValue$5(value)) return false;
  return hasOwnProperty.call(possibleTypes, _typeof(value));
};

var isObject = is$3;

var is$2 = function is(value) {
  if (!isObject(value)) return false;

  try {
    if (!value.constructor) return false;
    return value.constructor.prototype === value;
  } catch (error) {
    return false;
  }
};

var isPrototype = is$2;

var is$1 = function is(value) {
  if (typeof value !== "function") return false;
  if (!hasOwnProperty.call(value, "length")) return false;

  try {
    if (typeof value.length !== "number") return false;
    if (typeof value.call !== "function") return false;
    if (typeof value.apply !== "function") return false;
  } catch (error) {
    return false;
  }

  return !isPrototype(value);
};

var isFunction = is$1;
var classRe = /^\s*class[\s{/}]/,
    functionToString = Function.prototype.toString;

var is = function is(value) {
  if (!isFunction(value)) return false;
  if (classRe.test(functionToString.call(value))) return false;
  return true;
};

var isImplemented$2 = function isImplemented() {
  var assign = Object.assign,
      obj;
  if (typeof assign !== "function") return false;
  obj = {
    foo: "raz"
  };
  assign(obj, {
    bar: "dwa"
  }, {
    trzy: "trzy"
  });
  return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

var isImplemented$1 = function isImplemented() {
  try {
    Object.keys("primitive");
    return true;
  } catch (e) {
    return false;
  }
};

var noop = function noop() {};

var _undefined = noop(); // Support ES3 engines


var isValue$4 = function isValue(val) {
  return val !== _undefined && val !== null;
};

var isValue$3 = isValue$4;
var keys$2 = Object.keys;

var shim$2 = function shim(object) {
  return keys$2(isValue$3(object) ? Object(object) : object);
};

var keys$1 = isImplemented$1() ? Object.keys : shim$2;

var isValue$2 = isValue$4;

var validValue = function validValue(value) {
  if (!isValue$2(value)) throw new TypeError("Cannot use null or undefined");
  return value;
};

var keys = keys$1,
    value = validValue,
    max = Math.max;

var shim$1 = function shim(dest, src
/*, …srcn*/
) {
  var error,
      i,
      length = max(arguments.length, 2),
      assign;
  dest = Object(value(dest));

  assign = function assign(key) {
    try {
      dest[key] = src[key];
    } catch (e) {
      if (!error) error = e;
    }
  };

  for (i = 1; i < length; ++i) {
    src = arguments[i];
    keys(src).forEach(assign);
  }

  if (error !== undefined) throw error;
  return dest;
};

var assign$1 = isImplemented$2() ? Object.assign : shim$1;

var isValue$1 = isValue$4;
var forEach = Array.prototype.forEach,
    create$2 = Object.create;

var process$1 = function process(src, obj) {
  var key;

  for (key in src) {
    obj[key] = src[key];
  }
}; // eslint-disable-next-line no-unused-vars


var normalizeOptions = function normalizeOptions(opts1
/*, …options*/
) {
  var result = create$2(null);
  forEach.call(arguments, function (options) {
    if (!isValue$1(options)) return;
    process$1(Object(options), result);
  });
  return result;
};

var str = "razdwatrzy";

var isImplemented = function isImplemented() {
  if (typeof str.contains !== "function") return false;
  return str.contains("dwa") === true && str.contains("foo") === false;
};

var indexOf = String.prototype.indexOf;

var shim = function shim(searchString
/*, position*/
) {
  return indexOf.call(this, searchString, arguments[1]) > -1;
};

var contains$1 = isImplemented() ? String.prototype.contains : shim;

var isValue = is$4,
    isPlainFunction = is,
    assign = assign$1,
    normalizeOpts = normalizeOptions,
    contains = contains$1;

var d$5 = d$6.exports = function (dscr, value
/*, options*/
) {
  var c, e, w, options, desc;

  if (arguments.length < 2 || typeof dscr !== "string") {
    options = value;
    value = dscr;
    dscr = null;
  } else {
    options = arguments[2];
  }

  if (isValue(dscr)) {
    c = contains.call(dscr, "c");
    e = contains.call(dscr, "e");
    w = contains.call(dscr, "w");
  } else {
    c = w = true;
    e = false;
  }

  desc = {
    value: value,
    configurable: c,
    enumerable: e,
    writable: w
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};

d$5.gs = function (dscr, get, set
/*, options*/
) {
  var c, e, options, desc;

  if (typeof dscr !== "string") {
    options = set;
    set = get;
    get = dscr;
    dscr = null;
  } else {
    options = arguments[3];
  }

  if (!isValue(get)) {
    get = undefined;
  } else if (!isPlainFunction(get)) {
    options = get;
    get = set = undefined;
  } else if (!isValue(set)) {
    set = undefined;
  } else if (!isPlainFunction(set)) {
    options = set;
    set = undefined;
  }

  if (isValue(dscr)) {
    c = contains.call(dscr, "c");
    e = contains.call(dscr, "e");
  } else {
    c = true;
    e = false;
  }

  desc = {
    get: get,
    set: set,
    configurable: c,
    enumerable: e
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};

var isSymbol$1 = function isSymbol(value) {
  if (!value) return false;
  if (_typeof(value) === "symbol") return true;
  if (!value.constructor) return false;
  if (value.constructor.name !== "Symbol") return false;
  return value[value.constructor.toStringTag] === "Symbol";
};

var isSymbol = isSymbol$1;

var validateSymbol$2 = function validateSymbol(value) {
  if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
  return value;
};

var d$4 = d$6.exports;
var create$1 = Object.create,
    defineProperty$1 = Object.defineProperty,
    objPrototype = Object.prototype;
var created = create$1(null);

var generateName$1 = function generateName(desc) {
  var postfix = 0,
      name,
      ie11BugWorkaround;

  while (created[desc + (postfix || "")]) {
    ++postfix;
  }

  desc += postfix || "";
  created[desc] = true;
  name = "@@" + desc;
  defineProperty$1(objPrototype, name, d$4.gs(null, function (value) {
    // For IE11 issue see:
    // https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
    //    ie11-broken-getters-on-dom-objects
    // https://github.com/medikoo/es6-symbol/issues/12
    if (ie11BugWorkaround) return;
    ie11BugWorkaround = true;
    defineProperty$1(this, name, d$4(value));
    ie11BugWorkaround = false;
  }));
  return name;
};

var d$3 = d$6.exports,
    NativeSymbol$1 = globalThis_1.Symbol;

var standardSymbols = function standardSymbols(SymbolPolyfill) {
  return Object.defineProperties(SymbolPolyfill, {
    // To ensure proper interoperability with other native functions (e.g. Array.from)
    // fallback to eventual native implementation of given symbol
    hasInstance: d$3("", NativeSymbol$1 && NativeSymbol$1.hasInstance || SymbolPolyfill("hasInstance")),
    isConcatSpreadable: d$3("", NativeSymbol$1 && NativeSymbol$1.isConcatSpreadable || SymbolPolyfill("isConcatSpreadable")),
    iterator: d$3("", NativeSymbol$1 && NativeSymbol$1.iterator || SymbolPolyfill("iterator")),
    match: d$3("", NativeSymbol$1 && NativeSymbol$1.match || SymbolPolyfill("match")),
    replace: d$3("", NativeSymbol$1 && NativeSymbol$1.replace || SymbolPolyfill("replace")),
    search: d$3("", NativeSymbol$1 && NativeSymbol$1.search || SymbolPolyfill("search")),
    species: d$3("", NativeSymbol$1 && NativeSymbol$1.species || SymbolPolyfill("species")),
    split: d$3("", NativeSymbol$1 && NativeSymbol$1.split || SymbolPolyfill("split")),
    toPrimitive: d$3("", NativeSymbol$1 && NativeSymbol$1.toPrimitive || SymbolPolyfill("toPrimitive")),
    toStringTag: d$3("", NativeSymbol$1 && NativeSymbol$1.toStringTag || SymbolPolyfill("toStringTag")),
    unscopables: d$3("", NativeSymbol$1 && NativeSymbol$1.unscopables || SymbolPolyfill("unscopables"))
  });
};

var d$2 = d$6.exports,
    validateSymbol$1 = validateSymbol$2;
var registry = Object.create(null);

var symbolRegistry = function symbolRegistry(SymbolPolyfill) {
  return Object.defineProperties(SymbolPolyfill, {
    "for": d$2(function (key) {
      if (registry[key]) return registry[key];
      return registry[key] = SymbolPolyfill(String(key));
    }),
    keyFor: d$2(function (symbol) {
      var key;
      validateSymbol$1(symbol);

      for (key in registry) {
        if (registry[key] === symbol) return key;
      }

      return undefined;
    })
  });
};

var d$1 = d$6.exports,
    validateSymbol = validateSymbol$2,
    NativeSymbol = globalThis_1.Symbol,
    generateName = generateName$1,
    setupStandardSymbols = standardSymbols,
    setupSymbolRegistry = symbolRegistry;
var create = Object.create,
    defineProperties = Object.defineProperties,
    defineProperty = Object.defineProperty;
var SymbolPolyfill, HiddenSymbol, isNativeSafe;

if (typeof NativeSymbol === "function") {
  try {
    String(NativeSymbol());
    isNativeSafe = true;
  } catch (ignore) {}
} else {
  NativeSymbol = null;
} // Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false


HiddenSymbol = function _Symbol(description) {
  if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
  return SymbolPolyfill(description);
}; // Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)


var polyfill = SymbolPolyfill = function _Symbol2(description) {
  var symbol;
  if (this instanceof _Symbol2) throw new TypeError("Symbol is not a constructor");
  if (isNativeSafe) return NativeSymbol(description);
  symbol = create(HiddenSymbol.prototype);
  description = description === undefined ? "" : String(description);
  return defineProperties(symbol, {
    __description__: d$1("", description),
    __name__: d$1("", generateName(description))
  });
};

setupStandardSymbols(SymbolPolyfill);
setupSymbolRegistry(SymbolPolyfill); // Internal tweaks for real symbol producer

defineProperties(HiddenSymbol.prototype, {
  constructor: d$1(SymbolPolyfill),
  toString: d$1("", function () {
    return this.__name__;
  })
}); // Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype

defineProperties(SymbolPolyfill.prototype, {
  toString: d$1(function () {
    return "Symbol (" + validateSymbol(this).__description__ + ")";
  }),
  valueOf: d$1(function () {
    return validateSymbol(this);
  })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d$1("", function () {
  var symbol = validateSymbol(this);
  if (_typeof(symbol) === "symbol") return symbol;
  return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d$1("c", "Symbol")); // Proper implementaton of toPrimitive and toStringTag for returned symbol instances

defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag, d$1("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])); // Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149

defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive, d$1("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

var es6Symbol = isImplemented$3() ? globalThis_1.Symbol : polyfill;

var browser = {exports: {}};

var debug$c = {exports: {}};

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

var ms = function ms(val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options["long"] ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
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

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

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
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
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

(function (module, exports) {
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
  exports.humanize = ms;
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
    var hash = 0,
        i;

    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
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
      var self = debug; // set `diff` timestamp

      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr; // turn the `arguments` into a proper Array

      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %O
        args.unshift('%O');
      } // apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];

        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // apply env-specific formatting (colors, etc.)

      exports.formatArgs.call(self, args);
      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace); // env-specific initialization logic for debug instances

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
})(debug$c, debug$c.exports);

(function (module, exports) {
  exports = module.exports = debug$c.exports;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
  /**
   * Colors.
   */

  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
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
    } // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */


  exports.formatters.j = function (v) {
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
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors) return;
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into

    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
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
    return 'object' === (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
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
    } catch (e) {}
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
    } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
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
})(browser, browser.exports);

/**
 * Module dependencies.
 */

var _Symbol = es6Symbol;
var debug$b = browser.exports('array-index');

var get = _Symbol('get');

var set = _Symbol('set');

var length = _Symbol('length');
/**
 * JavaScript Array "length" is bound to an unsigned 32-bit int.
 * See: http://stackoverflow.com/a/6155063/376773
 */


var MAX_LENGTH = Math.pow(2, 32);
/**
 * Module exports.
 */

var arrayIndex = ArrayIndex$1;
ArrayIndex$1.get = get;
ArrayIndex$1.set = set;
/**
 * Subclass this.
 */

function ArrayIndex$1(_length) {
  Object.defineProperty(this, 'length', {
    get: getLength,
    set: setLength,
    enumerable: false,
    configurable: true
  });
  this[length] = 0;

  if (arguments.length > 0) {
    setLength.call(this, _length);
  }
}
/**
 * You overwrite the "get" Symbol in your subclass.
 */


ArrayIndex$1.prototype[ArrayIndex$1.get] = function () {
  throw new Error('you must implement the `ArrayIndex.get` Symbol');
};
/**
 * You overwrite the "set" Symbol in your subclass.
 */


ArrayIndex$1.prototype[ArrayIndex$1.set] = function () {
  throw new Error('you must implement the `ArrayIndex.set` Symbol');
};
/**
 * Converts this array class into a real JavaScript Array. Note that this
 * is a "flattened" array and your defined getters and setters won't be invoked
 * when you interact with the returned Array. This function will call the
 * getter on every array index of the object.
 *
 * @return {Array} The flattened array
 * @api public
 */


ArrayIndex$1.prototype.toArray = function toArray() {
  var i = 0;
  var l = this.length;
  var array = new Array(l);

  for (; i < l; i++) {
    array[i] = this[i];
  }

  return array;
};
/**
 * Basic support for `JSON.stringify()`.
 */


ArrayIndex$1.prototype.toJSON = function toJSON() {
  return this.toArray();
};
/**
 * toString() override. Use Array.prototype.toString().
 */


ArrayIndex$1.prototype.toString = function toString() {
  var a = this.toArray();
  return a.toString.apply(a, arguments);
};
/**
 * inspect() override. For the REPL.
 */


ArrayIndex$1.prototype.inspect = function inspect() {
  var a = this.toArray();
  Object.keys(this).forEach(function (k) {
    a[k] = this[k];
  }, this);
  return a;
};
/**
 * Getter for the "length" property.
 * Returns the value of the "length" Symbol.
 */


function getLength() {
  debug$b('getting "length": %o', this[length]);
  return this[length];
}
/**
 * Setter for the "length" property.
 * Calls "ensureLength()", then sets the "length" Symbol.
 */

function setLength(v) {
  debug$b('setting "length": %o', v);
  return this[length] = ensureLength(this, v);
}
/**
 * Ensures that getters/setters from 0 up to "_newLength" have been defined
 * on `Object.getPrototypeOf(this)`.
 *
 * @api private
 */

function ensureLength(self, _newLength) {
  var newLength;

  if (_newLength > MAX_LENGTH) {
    newLength = MAX_LENGTH;
  } else {
    newLength = _newLength | 0;
  }

  var proto = Object.getPrototypeOf(self);
  var cur = proto[length] | 0;
  var num = newLength - cur;

  if (num > 0) {
    var desc = {};
    debug$b('creating a descriptor object with %o entries', num);

    for (var i = cur; i < newLength; i++) {
      desc[i] = setup(i);
    }

    debug$b('calling `Object.defineProperties()` with %o entries', num);
    Object.defineProperties(proto, desc);
    proto[length] = newLength;
  }

  return newLength;
}
/**
 * Returns a property descriptor for the given "index", with "get" and "set"
 * functions created within the closure.
 *
 * @api private
 */


function setup(index) {
  function get() {
    return this[ArrayIndex$1.get](index);
  }

  function set(v) {
    return this[ArrayIndex$1.set](index, v);
  }

  return {
    enumerable: true,
    configurable: true,
    get: get,
    set: set
  };
}

/**
 * Module dependencies.
 */

var assert$9 = require$$1$1;
var debug$a = browser$1.exports('ref:array');
var ArrayIndex = arrayIndex;
var isArray = Array.isArray;
/**
 * The Array "type" constructor.
 * The returned constructor's API is highly influenced by the WebGL
 * TypedArray API.
 */

var array = function array(_ref) {
  var Array_ = function Array(_type, _length) {
    debug$a('defining new array "type"');

    var type = _ref.coerceType(_type);

    var fixedLength = _length | 0;
    /**
     * This is the ArrayType "constructor" that gets returned.
     */

    function ArrayType(data, length) {
      if (!(this instanceof ArrayType)) {
        return new ArrayType(data, length);
      }

      debug$a('creating new array instance');
      ArrayIndex.call(this);
      var item_size = ArrayType.BYTES_PER_ELEMENT;

      if (0 === arguments.length) {
        // new IntArray()
        // use the "fixedLength" if provided, otherwise throw an Error
        if (fixedLength > 0) {
          this.length = fixedLength;
          this.buffer = Buffer.alloc(this.length * item_size);
        } else {
          throw new Error('A "length", "array" or "buffer" must be passed as the first argument');
        }
      } else if ('number' == typeof data) {
        // new IntArray(69)
        this.length = data;
        this.buffer = Buffer.alloc(this.length * item_size);
      } else if (isArray(data)) {
        // new IntArray([ 1, 2, 3, 4, 5 ], {len})
        // use optional "length" if provided, otherwise use "fixedLength, otherwise
        // use the Array's .length
        var len = 0;

        if (null != length) {
          len = length;
        } else if (fixedLength > 0) {
          len = fixedLength;
        } else {
          len = data.length;
        }

        if (data.length < len) {
          throw new Error('array length must be at least ' + len + ', got ' + data.length);
        }

        this.length = len;
        this.buffer = Buffer.alloc(len * item_size);

        for (var i = 0; i < len; i++) {
          this[i] = data[i];
        }
      } else if (Buffer.isBuffer(data)) {
        // new IntArray(Buffer(8))
        var len = 0;

        if (null != length) {
          len = length;
        } else if (fixedLength > 0) {
          len = fixedLength;
        } else {
          len = data.length / item_size | 0;
        }

        var expectedLength = item_size * len;
        this.length = len;

        if (data.length != expectedLength) {
          if (data.length < expectedLength) {
            throw new Error('buffer length must be at least ' + expectedLength + ', got ' + data.length);
          } else {
            debug$a('resizing buffer from %d to %d', data.length, expectedLength);
            data = data.slice(0, expectedLength);
          }
        }

        this.buffer = data;
      }
    } // make array instances inherit from our `ArrayIndex.prototype`


    ArrayType.prototype = Object.create(ArrayIndex.prototype, {
      constructor: {
        value: ArrayType,
        enumerable: false,
        writable: true,
        configurable: true
      },
      // "buffer" is the backing buffer instance
      buffer: {
        value: _ref.NULL,
        enumerable: true,
        writable: true,
        configurable: true
      },
      // "node-ffi" calls this when passed an array instance to an ffi'd function
      refOverride: {
        value: ref,
        enumerable: true,
        writable: true,
        configurable: true
      },
      // "slice" implementation
      slice: {
        value: slice,
        enumerable: true,
        writable: true,
        configurable: true
      }
    }); // part of the "array-index" interface

    ArrayType.prototype[ArrayIndex.get] = getter;
    ArrayType.prototype[ArrayIndex.set] = setter; // save down the "fixedLength" if specified. "ref-struct" needs this value

    if (fixedLength > 0) {
      ArrayType.fixedLength = fixedLength;
    } // keep a reference to the base "type"


    ArrayType.type = type;
    ArrayType.BYTES_PER_ELEMENT = type.indirection == 1 ? type.size : _ref.sizeof.pointer;
    assert$9(ArrayType.BYTES_PER_ELEMENT > 0); // the ref "type" interface

    if (fixedLength > 0) {
      // this "type" is probably going in a ref-struct or being used manually
      ArrayType.size = ArrayType.BYTES_PER_ELEMENT * fixedLength;
      ArrayType.alignment = type.alignment;
      ArrayType.indirection = 1;
      ArrayType.get = get;
      ArrayType.set = set;
    } else {
      // this "type" is probably an argument/return value for a node-ffi function
      ArrayType.size = _ref.sizeof.pointer;
      ArrayType.alignment = _ref.alignof.pointer;
      ArrayType.indirection = 1;
      ArrayType.get = getRef;
      ArrayType.set = setRef;
    } // untilZeros() function


    ArrayType.untilZeros = untilZeros;

    ArrayType.toString = function () {
      return '[ArrayType]';
    };

    return ArrayType;
  };
  /**
   * The "get" function of the Array "type" interface.
   * Most likely invoked when accessing within a "ref-struct" type.
   */


  function get(buffer, offset) {
    debug$a('Array "type" getter for buffer at offset', offset);

    if (offset > 0) {
      buffer = buffer.slice(offset);
    }

    return new this(buffer);
  }
  /**
   * The "set" function of the Array "type" interface.
   * Most likely invoked when setting within a "ref-struct" type.
   */


  function set(buffer, value, offset) {
    debug$a('Array "type" setter for buffer at offset', buffer, value, offset);
    var array = this.get(buffer, offset);
    var isInstance = value instanceof this;

    if (isInstance || isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        array[i] = value[i];
      }
    } else {
      throw new Error('not sure how to set into Array: ' + value);
    }
  }
  /**
   * Reads a pointer from the given offset and returns a new "array" instance of
   * this type.
   * Most likely invoked when getting an array instance back as a return value from
   * an FFI'd function.
   */


  function getRef(buffer, offset) {
    debug$a('Array reference "type" getter for buffer at offset', offset);
    return new this(_ref.readPointer(buffer, offset));
  }
  /**
   * Most likely invoked when passing an array instance as an argument to an FFI'd
   * function.
   */


  function setRef(buffer, value, offset) {
    debug$a('Array reference "type" setter for buffer at offset', offset);
    var ptr;

    if (value instanceof this) {
      ptr = value.buffer;
    } else {
      ptr = new this(value).buffer;
    }

    _ref.writePointer(buffer, ptr, offset);
  }
  /**
   * Returns a reference to the backing buffer of this Array instance.
   *
   * i.e. if the array represents `int[]` (a.k.a. `int *`),
   *      then the returned Buffer represents `int (*)[]` (a.k.a. `int **`)
   */


  function ref() {
    debug$a('ref()');
    var type = this.constructor;
    var origSize = this.buffer.length;

    var r = _ref.ref(this.buffer);

    r.type = Object.create(_ref.types.CString);

    r.type.get = function (buf, offset) {
      return new type(_ref.readPointer(buf, offset | 0, origSize));
    };

    r.type.set = function () {
      assert$9(0, 'implement!!!');
    };

    return r;
  }
  /**
   * The "getter" implementation for the "array-index" interface.
   */


  function getter(index) {
    debug$a('getting array[%d]', index);
    var size = this.constructor.BYTES_PER_ELEMENT;
    var baseType = this.constructor.type;
    var offset = size * index;
    var end = offset + size;
    var buffer = this.buffer;

    if (buffer.length < end) {
      debug$a('reinterpreting buffer from %d to %d', buffer.length, end);
      buffer = _ref.reinterpret(buffer, end);
    }

    return _ref.get(buffer, offset, baseType);
  }
  /**
   * The "setter" implementation for  the "array-index" interface.
   */


  function setter(index, value) {
    debug$a('setting array[%d]', index);
    var size = this.constructor.BYTES_PER_ELEMENT;
    var baseType = this.constructor.type;
    var offset = size * index;
    var end = offset + size;
    var buffer = this.buffer;

    if (buffer.length < end) {
      debug$a('reinterpreting buffer from %d to %d', buffer.length, end);
      buffer = _ref.reinterpret(buffer, end);
    } // TODO: DRY with getter()


    _ref.set(buffer, value, offset, baseType);

    return value;
  }
  /**
   * The "slice" implementation.
   */


  function slice(start, end) {
    var data;

    if (end) {
      debug$a('slicing array from %d to %d', start, end);
      data = this.buffer.slice(start * this.constructor.BYTES_PER_ELEMENT, end * this.constructor.BYTES_PER_ELEMENT);
    } else {
      debug$a('slicing array from %d', start);
      data = this.buffer.slice(start * this.constructor.BYTES_PER_ELEMENT);
    }

    return new this.constructor(data);
  }
  /**
   * Accepts a Buffer instance that should be an already-populated with data for the
   * ArrayType. The "length" of the Array is determined by searching through the
   * buffer's contents until an aligned NULL pointer is encountered.
   *
   * @param {Buffer} buffer the null-terminated buffer to convert into an Array
   * @api public
   */


  function untilZeros(buffer) {
    return new this(_ref.reinterpretUntilZeros(buffer, this.type.size));
  }

  return Array_;
};

/**
 * Module dependencies.
 */


var ref$a = ref$b.exports;
var assert$8 = require$$1$1;
var debug$9 = browser$1.exports('ffi:types');
var bindings$6 = bindings_1;
var StructType = struct(ref$a);
var UnionType = union(ref$a);
var ArrayType = array(ref$a);
/**
 * Define the `ffi_type` struct (see deps/libffi/include/ffi.h) for use in JS.
 * This struct type is used internally to define custom struct ret/arg types.
 */

var FFI_TYPE = Type$3.FFI_TYPE = StructType();
FFI_TYPE.defineProperty('size', ref$a.types.size_t);
FFI_TYPE.defineProperty('alignment', ref$a.types.ushort);
FFI_TYPE.defineProperty('type', ref$a.types.ushort); // this last prop is a C Array of `ffi_type *` elements, so this is `ffi_type **`

var ffi_type_ptr_array = ref$a.refType(ref$a.refType(FFI_TYPE));
FFI_TYPE.defineProperty('elements', ffi_type_ptr_array);
assert$8.strictEqual(bindings$6.FFI_TYPE_SIZE, FFI_TYPE.size);
/**
 * Returns a `ffi_type *` Buffer appropriate for the given "type".
 *
 * @param {Type|String} type A "ref" type (or string) to get the `ffi_type` for
 * @return {Buffer} A buffer pointing to a `ffi_type` instance for "type"
 * @api private
 */

function Type$3(type) {
  type = ref$a.coerceType(type);
  debug$9('Type()', type.name || type);
  assert$8(type.indirection >= 1, 'invalid "type" given: ' + (type.name || type));
  var ret; // first we assume it's a regular "type". if the "indirection" is greater than
  // 1, then we can just use "pointer" ffi_type, otherwise we hope "ffi_type" is
  // set

  if (type.indirection === 1) {
    ret = type.ffi_type;
  } else {
    ret = bindings$6.FFI_TYPES.pointer;
  } // if "ret" isn't set (ffi_type was not set) then we check for "ref-array" type


  if (!ret && type.type) {
    // got a "ref-array" type
    // passing arrays to C functions are always by reference, so we use "pointer"
    ret = bindings$6.FFI_TYPES.pointer;
  }

  if (!ret && type.fields) {
    // got a "ref-struct" type
    // need to create the `ffi_type` instance manually
    debug$9('creating an `ffi_type` for given "ref-struct" type');
    var fields = type.fields;
    var fieldNames = Object.keys(fields);
    var numFields = fieldNames.length;
    var numElements = 0;
    var ffi_type = new FFI_TYPE();
    var field;
    var ffi_type_ptr; // these are the "ffi_type" values expected for a struct

    ffi_type.size = 0n;
    ffi_type.alignment = 0;
    ffi_type.type = 13; // FFI_TYPE_STRUCT
    // first we have to figure out the number of "elements" that will go in the
    // array. this would normally just be "numFields" but we also have to account
    // for arrays, which each act as their own element

    for (var i = 0; i < numFields; i++) {
      field = fields[fieldNames[i]];

      if (field.type.fixedLength > 0) {
        // a fixed-length "ref-array" type
        numElements += field.type.fixedLength;
      } else {
        numElements += 1;
      }
    } // hand-crafting a null-terminated array here.
    // XXX: use "ref-array"?


    var size = ref$a.sizeof.pointer * (numElements + 1); // +1 because of the NULL terminator

    var elements = ffi_type.elements = Buffer.alloc(size);
    var index = 0;

    for (var _i = 0; _i < numFields; _i++) {
      field = fields[fieldNames[_i]];

      if (field.type.fixedLength > 0) {
        // a fixed-length "ref-array" type
        ffi_type_ptr = Type$3(field.type.type);

        for (var j = 0; j < field.type.fixedLength; j++) {
          ref$a.writePointer(elements, ffi_type_ptr, index++ * ref$a.sizeof.pointer);
        }
      } else {
        ffi_type_ptr = Type$3(field.type);
        ref$a.writePointer(elements, ffi_type_ptr, index++ * ref$a.sizeof.pointer);
      }
    } // final NULL pointer to terminate the Array


    ref$a.writePointer(elements, ref$a.NULL, index * ref$a.sizeof.pointer); // also set the `ffi_type` property to that it's cached for next time

    ret = type.ffi_type = ref$a.ref(ffi_type);
  }

  if (!ret && type.name) {
    // handle "ref" types other than the set that node-ffi is using (i.e.
    // a separate copy)
    if ('CString' == type.name) {
      ret = type.ffi_type = bindings$6.FFI_TYPES.pointer;
    } else {
      var cur = type;

      while (!ret && cur) {
        ret = cur.ffi_type = bindings$6.FFI_TYPES[cur.name];
        cur = Object.getPrototypeOf(cur);
      }
    }
  }

  assert$8(ret, 'Could not determine the `ffi_type` instance for type: ' + (type.name || type));
  debug$9('returning `ffi_type`', ret.name);
  return ret;
}

type.Type = Type$3;
type.StructType = StructType;
type.UnionType = UnionType;
type.ArrayType = ArrayType;

/**
 * Module dependencies.
 */


var Type$2 = type.Type;
var assert$7 = require$$1$1;
var debug$8 = browser$1.exports('ffi:cif');
var ref$9 = ref$b.exports;
var bindings$5 = bindings_1;
var POINTER_SIZE$2 = ref$9.sizeof.pointer;
var ffi_prep_cif = bindings$5.ffi_prep_cif;
var FFI_CIF_SIZE$1 = bindings$5.FFI_CIF_SIZE;
var FFI_DEFAULT_ABI$1 = bindings$5.FFI_DEFAULT_ABI; // status codes

var FFI_OK$1 = bindings$5.FFI_OK;
var FFI_BAD_TYPEDEF$1 = bindings$5.FFI_BAD_TYPEDEF;
var FFI_BAD_ABI$1 = bindings$5.FFI_BAD_ABI;

function CIF$2(rtype, types, abi) {
  debug$8('creating `ffi_cif *` instance'); // the return and arg types are expected to be coerced at this point...

  assert$7(!!rtype, 'expected a return "type" object as the first argument');
  assert$7(Array.isArray(types), 'expected an Array of arg "type" objects as the second argument'); // the buffer that will contain the return `ffi_cif *` instance

  var cif = Buffer.alloc(FFI_CIF_SIZE$1);
  var numArgs = types.length;

  var _argtypesptr = Buffer.alloc(numArgs * POINTER_SIZE$2);

  var _rtypeptr = Type$2(rtype);

  for (var i = 0; i < numArgs; i++) {
    var type = types[i];
    var ffiType = Type$2(type);
    ref$9.writePointer(_argtypesptr, ffiType, i * POINTER_SIZE$2);
  } // prevent GC of the arg type and rtn type buffers (not sure if this is required)


  cif.rtnTypePtr = _rtypeptr;
  cif.argTypesPtr = _argtypesptr;

  if (typeof abi === 'undefined') {
    debug$8('no ABI specified (this is OK), using FFI_DEFAULT_ABI');
    abi = FFI_DEFAULT_ABI$1;
  }

  var status = ffi_prep_cif(cif, numArgs, _rtypeptr, _argtypesptr, abi);

  if (status !== FFI_OK$1) {
    switch (status) {
      case FFI_BAD_TYPEDEF$1:
        {
          var err = new Error('ffi_prep_cif() returned an FFI_BAD_TYPEDEF error');
          err.code = 'FFI_BAD_TYPEDEF';
          err.errno = status;
          throw err;
        }

      case FFI_BAD_ABI$1:
        {
          var _err = new Error('ffi_prep_cif() returned an FFI_BAD_ABI error');

          _err.code = 'FFI_BAD_ABI';
          _err.errno = status;
          throw _err;
        }

      default:
        throw new Error('ffi_prep_cif() returned an error: ' + status);
    }
  }

  if (debug$8.enabled || "".concat(process.env.DEBUG).match(/\bffi\b/)) ;
  return cif;
}

var cif = CIF$2;

/**
 * Module dependencies.
 */


var Type$1 = type.Type;
var assert$6 = require$$1$1;
var debug$7 = browser$1.exports('ffi:cif_var');
var ref$8 = ref$b.exports;
var bindings$4 = bindings_1;
var POINTER_SIZE$1 = ref$8.sizeof.pointer;
var ffi_prep_cif_var = bindings$4.ffi_prep_cif_var;
var FFI_CIF_SIZE = bindings$4.FFI_CIF_SIZE;
var FFI_DEFAULT_ABI = bindings$4.FFI_DEFAULT_ABI; // status codes

var FFI_OK = bindings$4.FFI_OK;
var FFI_BAD_TYPEDEF = bindings$4.FFI_BAD_TYPEDEF;
var FFI_BAD_ABI = bindings$4.FFI_BAD_ABI;
/**
 * JS wrapper for the `ffi_prep_cif_var` function.
 * Returns a Buffer instance representing a variadic `ffi_cif *` instance.
 */

function CIF_var$1(rtype, types, numFixedArgs, abi) {
  debug$7('creating `ffi_cif *` instance with `ffi_prep_cif_var()`'); // the return and arg types are expected to be coerced at this point...

  assert$6(!!rtype, 'expected a return "type" object as the first argument');
  assert$6(Array.isArray(types), 'expected an Array of arg "type" objects as the second argument');
  assert$6(numFixedArgs >= 1, 'expected the number of fixed arguments to be at least 1'); // the buffer that will contain the return `ffi_cif *` instance

  var cif = Buffer.alloc(FFI_CIF_SIZE);
  var numTotalArgs = types.length;

  var _argtypesptr = Buffer.alloc(numTotalArgs * POINTER_SIZE$1);

  var _rtypeptr = Type$1(rtype);

  for (var i = 0; i < numTotalArgs; i++) {
    var ffiType = Type$1(types[i]);
    ref$8.writePointer(_argtypesptr, ffiType, i * POINTER_SIZE$1);
  } // prevent GC of the arg type and rtn type buffers (not sure if this is required)


  cif.rtnTypePtr = _rtypeptr;
  cif.argTypesPtr = _argtypesptr;

  if (typeof abi === 'undefined') {
    debug$7('no ABI specified (this is OK), using FFI_DEFAULT_ABI');
    abi = FFI_DEFAULT_ABI;
  }

  var status = ffi_prep_cif_var(cif, numFixedArgs, numTotalArgs, _rtypeptr, _argtypesptr, abi);

  if (status !== FFI_OK) {
    switch (status) {
      case FFI_BAD_TYPEDEF:
        {
          var err = new Error('ffi_prep_cif_var() returned an FFI_BAD_TYPEDEF error');
          err.code = 'FFI_BAD_TYPEDEF';
          err.errno = status;
          throw err;
        }

      case FFI_BAD_ABI:
        {
          var _err = new Error('ffi_prep_cif_var() returned an FFI_BAD_ABI error');

          _err.code = 'FFI_BAD_ABI';
          _err.errno = status;
          throw _err;
        }

      default:
        {
          var _err2 = new Error('ffi_prep_cif_var() returned an error: ' + status);

          _err2.errno = status;
          throw _err2;
        }
    }
  }

  return cif;
}

var cif_var = CIF_var$1;

/**
 * Module dependencies.
 */


var ref$7 = ref$b.exports;
var CIF$1 = cif;
var assert$5 = require$$1$1;
var debug$6 = browser$1.exports('ffi:Callback');
var _Callback = bindings_1.Callback; // Function used to report errors to the current process event loop,
// When user callback function gets gced.

function errorReportCallback(err) {
  if (err) {
    process.nextTick(function () {
      if (typeof err === 'string') {
        throw new Error(err);
      } else {
        throw err;
      }
    });
  }
}
/**
 * Turns a JavaScript function into a C function pointer.
 * The function pointer may be used in other C functions that
 * accept C callback functions.
 */


function Callback$1(retType, argTypes, abi, func) {
  debug$6('creating new Callback');

  if (typeof abi === 'function') {
    func = abi;
    abi = undefined;
  } // check args


  assert$5(!!retType, 'expected a return "type" object as the first argument');
  assert$5(Array.isArray(argTypes), 'expected Array of arg "type" objects as the second argument');
  assert$5.equal(_typeof(func), 'function', 'expected a function as the third argument'); // normalize the "types" (they could be strings, so turn into real type
  // instances)

  retType = ref$7.coerceType(retType);
  argTypes = argTypes.map(ref$7.coerceType); // create the `ffi_cif *` instance

  var cif = CIF$1(retType, argTypes, abi);
  var argc = argTypes.length;

  var callback = _Callback(cif, retType.size, argc, errorReportCallback, function (retval, params) {
    debug$6('Callback function being invoked');

    try {
      var args = [];

      for (var i = 0; i < argc; i++) {
        var type = argTypes[i];
        var argPtr = ref$7.readPointer(params, i * ref$7.sizeof.pointer, type.size);
        argPtr.type = type;
        args.push(ref$7.deref(argPtr));
      } // Invoke the user-given function


      var result = func.apply(null, args);

      try {
        ref$7.set(retval, result, 0, retType);
      } catch (e) {
        e.message = 'error setting return value - ' + e.message;
        throw e;
      }
    } catch (e) {
      return e;
    }
  }); // store reference to the CIF Buffer so that it doesn't get
  // garbage collected before the callback Buffer does


  callback._cif = cif;
  return callback;
}

var callback = Callback$1;

/**
 * Module dependencies.
 */


var assert$4 = require$$1$1;
var debug$5 = browser$1.exports('ffi:_ForeignFunction');
var ref$6 = ref$b.exports;
var bindings$3 = bindings_1;
var POINTER_SIZE = ref$6.sizeof.pointer;
var FFI_ARG_SIZE = bindings$3.FFI_ARG_SIZE;

function ForeignFunction$5(cif, funcPtr, returnType, argTypes) {
  debug$5('creating new ForeignFunction', funcPtr);
  var numArgs = argTypes.length;
  var argsArraySize = numArgs * POINTER_SIZE; // "result" must point to storage that is sizeof(long) or larger. For smaller
  // return value sizes, the ffi_arg or ffi_sarg integral type must be used to
  // hold the return value

  var resultSize = returnType.size >= ref$6.sizeof["long"] ? returnType.size : FFI_ARG_SIZE;
  assert$4(resultSize > 0);
  /**
   * This is the actual JS function that gets returned.
   * It handles marshalling input arguments into C values,
   * and unmarshalling the return value back into a JS value
   */

  var proxy = function proxy() {
    debug$5('invoking proxy function');

    if (arguments.length !== numArgs) {
      throw new TypeError('Expected ' + numArgs + ' arguments, got ' + arguments.length);
    } // storage buffers for input arguments and the return value


    var result = Buffer.alloc(resultSize);
    var argsList = Buffer.alloc(argsArraySize); // write arguments to storage areas

    var i;

    try {
      for (i = 0; i < numArgs; i++) {
        var argType = argTypes[i];
        var val = arguments[i];
        var valPtr = ref$6.alloc(argType, val);
        ref$6.writePointer(argsList, valPtr, i * POINTER_SIZE);
      }
    } catch (e) {
      // counting arguments from 1 is more human readable
      i++;
      e.message = 'error setting argument ' + i + ' - ' + e.message;
      throw e;
    } // invoke the `ffi_call()` function


    bindings$3.ffi_call(cif, funcPtr, result, argsList);
    result.type = returnType;
    return ref$6.deref(result);
  };
  /**
   * The asynchronous version of the proxy function.
   */


  proxy.async = function () {
    debug$5('invoking async proxy function');
    var argc = arguments.length;

    if (argc !== numArgs + 1) {
      throw new TypeError('Expected ' + (numArgs + 1) + ' arguments, got ' + argc);
    }

    var callback = arguments[argc - 1];

    if (typeof callback !== 'function') {
      throw new TypeError('Expected a callback function as argument number: ' + (argc - 1));
    } // storage buffers for input arguments and the return value


    var result = Buffer.alloc(resultSize);
    var argsList = Buffer.alloc(argsArraySize); // write arguments to storage areas

    var i;

    try {
      for (i = 0; i < numArgs; i++) {
        var argType = argTypes[i];
        var val = arguments[i];
        var valPtr = ref$6.alloc(argType, val);
        ref$6.writePointer(argsList, valPtr, i * POINTER_SIZE);
      }
    } catch (e) {
      e.message = 'error setting argument ' + i + ' - ' + e.message;
      return process.nextTick(callback.bind(null, e));
    } // invoke the `ffi_call()` function asynchronously


    bindings$3.ffi_call_async(cif, funcPtr, result, argsList, function (err) {

      if (err) {
        callback(err);
      } else {
        result.type = returnType;
        callback(null, ref$6.deref(result));
      }
    });
  };

  return proxy;
}

var _foreign_function = ForeignFunction$5;

/**
 * Module dependencies.
 */


var CIF = cif;
var _ForeignFunction$1 = _foreign_function;
var debug$4 = browser$1.exports('ffi:ForeignFunction');
var assert$3 = require$$1$1;
var ref$5 = ref$b.exports;
/**
 * Represents a foreign function in another library. Manages all of the aspects
 * of function execution, including marshalling the data parameters for the
 * function into native types and also unmarshalling the return from function
 * execution.
 */

function ForeignFunction$4(funcPtr, returnType, argTypes, abi) {
  debug$4('creating new ForeignFunction', funcPtr); // check args

  assert$3(Buffer.isBuffer(funcPtr), 'expected Buffer as first argument');
  assert$3(!!returnType, 'expected a return "type" object as the second argument');
  assert$3(Array.isArray(argTypes), 'expected Array of arg "type" objects as the third argument'); // normalize the "types" (they could be strings,
  // so turn into real type instances)

  returnType = ref$5.coerceType(returnType);
  argTypes = argTypes.map(ref$5.coerceType); // create the `ffi_cif *` instance

  var cif = CIF(returnType, argTypes, abi); // create and return the JS proxy function

  return _ForeignFunction$1(cif, funcPtr, returnType, argTypes);
}

var foreign_function = ForeignFunction$4;

/**
 * Module dependencies.
 */


var ref$4 = ref$b.exports;
var assert$2 = require$$1$1;
var bindings$2 = bindings_1;
var Callback = callback;
var ForeignFunction$3 = foreign_function;
var debug$3 = browser$1.exports('ffi:FunctionType');
/**
 * Module exports.
 */

var _function = Function$1;
/**
 * Creates and returns a "type" object for a C "function pointer".
 *
 * @api public
 */

function Function$1(retType, argTypes, abi) {
  if (!(this instanceof Function$1)) {
    return new Function$1(retType, argTypes, abi);
  }

  debug$3('creating new FunctionType'); // check args

  assert$2(!!retType, 'expected a return "type" object as the first argument');
  assert$2(Array.isArray(argTypes), 'expected Array of arg "type" objects as the second argument'); // normalize the "types" (they could be strings, so turn into real type
  // instances)

  this.retType = ref$4.coerceType(retType);
  this.argTypes = argTypes.map(ref$4.coerceType);
  this.abi = null == abi ? bindings$2.FFI_DEFAULT_ABI : abi;
}
/**
 * The "ffi_type" is set for node-ffi functions.
 */


Function$1.prototype.ffi_type = bindings$2.FFI_TYPES.pointer;
/**
 * The "size" is always pointer-sized.
 */

Function$1.prototype.size = ref$4.sizeof.pointer;
/**
 * The "alignment" is always pointer-aligned.
 */

Function$1.prototype.alignment = ref$4.alignof.pointer;
/**
 * The "indirection" is always 1 to ensure that our get()/set() get called.
 */

Function$1.prototype.indirection = 1;
/**
 * Returns a ffi.Callback pointer (Buffer) of this function type for the
 * given `fn` Function.
 */

Function$1.prototype.toPointer = function toPointer(fn) {
  return Callback(this.retType, this.argTypes, this.abi, fn);
};
/**
 * Returns a ffi.ForeignFunction (Function) of this function type for the
 * given `buf` Buffer.
 */


Function$1.prototype.toFunction = function toFunction(buf) {
  return ForeignFunction$3(buf, this.retType, this.argTypes, this.abi);
};
/**
 * get function; return a ForeignFunction instance.
 */


Function$1.prototype.get = function get(buffer, offset) {
  debug$3('ffi FunctionType "get" function');
  var ptr = ref$4.readPointer(buffer, offset);
  return this.toFunction(ptr);
};
/**
 * set function; return a Callback buffer.
 */


Function$1.prototype.set = function set(buffer, value, offset) {
  debug$3('ffi FunctionType "set" function');
  var ptr;

  if ('function' == typeof value) {
    ptr = this.toPointer(value);
  } else if (Buffer.isBuffer(value)) {
    ptr = value;
  } else {
    throw new Error('don\'t know how to set callback function for: ' + value);
  }

  ref$4.writePointer(buffer, ptr, offset);
};

/**
 * Module dependencies.
 */


var CIF_var = cif_var;
var Type = type.Type;
var _ForeignFunction = _foreign_function;
var assert$1 = require$$1$1;
var debug$2 = browser$1.exports('ffi:VariadicForeignFunction');
var ref$3 = ref$b.exports;
/**
 * For when you want to call to a C function with variable amount of arguments.
 * i.e. `printf()`.
 *
 * This function takes care of caching and reusing ForeignFunction instances that
 * contain the same ffi_type argument signature.
 */

function VariadicForeignFunction$1(funcPtr, returnType, fixedArgTypes, abi) {
  debug$2('creating new VariadicForeignFunction', funcPtr); // the cache of ForeignFunction instances that this
  // VariadicForeignFunction has created so far

  var cache = {}; // check args

  assert$1(Buffer.isBuffer(funcPtr), 'expected Buffer as first argument');
  assert$1(!!returnType, 'expected a return "type" object as the second argument');
  assert$1(Array.isArray(fixedArgTypes), 'expected Array of arg "type" objects as the third argument');
  var numFixedArgs = fixedArgTypes.length; // normalize the "types" (they could be strings,
  // so turn into real type instances)

  fixedArgTypes = fixedArgTypes.map(ref$3.coerceType); // get the names of the fixed arg types

  var fixedKey = fixedArgTypes.map(function (type) {
    return getId(type);
  }); // what gets returned is another function that needs to be invoked with the rest
  // of the variadic types that are being invoked from the function.

  function variadic_function_generator() {
    debug$2('variadic_function_generator invoked'); // first get the types of variadic args we are working with

    var argTypes = fixedArgTypes.slice();
    var key = fixedKey.slice();

    for (var i = 0; i < arguments.length; i++) {
      var type = ref$3.coerceType(arguments[i]);
      argTypes.push(type);
      var ffi_type = Type(type);
      assert$1(ffi_type.name);
      key.push(getId(type));
    } // now figure out the return type


    var rtnType = ref$3.coerceType(variadic_function_generator.returnType);
    var rtnName = getId(rtnType);
    assert$1(rtnName); // first let's generate the key and see if we got a cache-hit

    key = rtnName + key.join('');
    var func = cache[key];

    if (func) {
      debug$2('cache hit for key:', key);
    } else {
      // create the `ffi_cif *` instance
      debug$2('creating the variadic ffi_cif instance for key:', key);
      var cif = CIF_var(returnType, argTypes, numFixedArgs, abi);
      func = cache[key] = _ForeignFunction(cif, funcPtr, rtnType, argTypes);
    }

    return func;
  } // set the return type. we set it as a property of the function generator to
  // allow for monkey patching the return value in the very rare case where the
  // return type is variadic as well


  variadic_function_generator.returnType = returnType;
  return variadic_function_generator;
}

var foreign_function_var = VariadicForeignFunction$1;
var idKey = '_ffiId';
var counter = 0;

function getId(type) {
  if (!type.hasOwnProperty(idKey)) {
    type[idKey] = (counter++ * 0x10000 | 0).toString(16);
  }

  return type[idKey];
}

/**
 * Module dependencies.
 */


var ForeignFunction$2 = foreign_function;
var assert = require$$1$1;
var debug$1 = browser$1.exports('ffi:DynamicLibrary');
var bindings$1 = bindings_1;
var funcs$1 = bindings$1.StaticFunctions;
var ref$2 = ref$b.exports;
var types$1 = ref$2.types;
var read = require$$5.readFileSync; // typedefs

var dlopen = ForeignFunction$2(funcs$1.dlopen, types$1.voidPtr, [types$1.CString, types$1["int"]]);
var dlclose = ForeignFunction$2(funcs$1.dlclose, types$1["int"], [types$1.voidPtr]);
var dlsym = ForeignFunction$2(funcs$1.dlsym, types$1.voidPtr, [types$1.voidPtr, types$1.CString]);
var dlerror = ForeignFunction$2(funcs$1.dlerror, types$1.CString, []);
/**
 * `DynamicLibrary` loads and fetches function pointers for dynamic libraries
 * (.so, .dylib, etc). After the libray's function pointer is acquired, then you
 * call `get(symbol)` to retreive a pointer to an exported symbol. You need to
 * call `get___()` on the pointer to dereference it into its actual value, or
 * turn the pointer into a callable function with `ForeignFunction`.
 */

function DynamicLibrary$2(path, mode) {
  if (!(this instanceof DynamicLibrary$2)) {
    return new DynamicLibrary$2(path, mode);
  }

  debug$1('new DynamicLibrary()', path, mode);

  if (null == mode) {
    mode = DynamicLibrary$2.FLAGS.RTLD_LAZY;
  }

  this._path = path;
  this._handle = dlopen(path, mode);
  assert(Buffer.isBuffer(this._handle), 'expected a Buffer instance to be returned from `dlopen()`');

  if (ref$2.isNull(this._handle)) {
    var err = this.error(); // THIS CODE IS BASED ON GHC Trac ticket #2615
    // http://hackage.haskell.org/trac/ghc/attachment/ticket/2615
    // On some systems (e.g., Gentoo Linux) dynamic files (e.g. libc.so)
    // contain linker scripts rather than ELF-format object code. This
    // code handles the situation by recognizing the real object code
    // file name given in the linker script.
    // If an "invalid ELF header" error occurs, it is assumed that the
    // .so file contains a linker script instead of ELF object code.
    // In this case, the code looks for the GROUP ( ... ) linker
    // directive. If one is found, the first file name inside the
    // parentheses is treated as the name of a dynamic library and the
    // code attempts to dlopen that file. If this is also unsuccessful,
    // an error message is returned.
    // see if the error message is due to an invalid ELF header

    var match;

    if (match = err.match(/^(([^ \t()])+\.so([^ \t:()])*):([ \t])*/)) {
      var content = read(match[1], 'ascii'); // try to find a GROUP ( ... ) command

      if (match = content.match(/GROUP *\( *(([^ )])+)/)) {
        return DynamicLibrary$2.call(this, match[1], mode);
      }
    }

    throw new Error('Dynamic Linking Error: ' + err);
  }
}

var dynamic_library = DynamicLibrary$2;
/**
 * Set the exported flags from "dlfcn.h"
 */

DynamicLibrary$2.FLAGS = {};
Object.keys(bindings$1).forEach(function (k) {
  if (!/^RTLD_/.test(k)) return;
  var desc = Object.getOwnPropertyDescriptor(bindings$1, k);
  Object.defineProperty(DynamicLibrary$2.FLAGS, k, desc);
});
/**
 * Close this library, returns the result of the dlclose() system function.
 */

DynamicLibrary$2.prototype.close = function () {
  debug$1('dlclose()');
  return dlclose(this._handle);
};
/**
 * Get a symbol from this library, returns a Pointer for (memory address of) the symbol
 */


DynamicLibrary$2.prototype.get = function (symbol) {
  debug$1('dlsym()', symbol);
  assert.strictEqual('string', _typeof(symbol));
  var ptr = dlsym(this._handle, symbol);
  assert(Buffer.isBuffer(ptr));

  if (ref$2.isNull(ptr)) {
    throw new Error('Dynamic Symbol Retrieval Error: ' + this.error());
  }

  ptr.name = symbol;
  return ptr;
};
/**
 * Returns the result of the dlerror() system function
 */


DynamicLibrary$2.prototype.error = function error() {
  debug$1('dlerror()');
  return dlerror();
};
/**
 * Returns the path originally passed to the constructor
 */


DynamicLibrary$2.prototype.path = function error() {
  return this._path;
};

/**
 * Module dependencies.
 */


var DynamicLibrary$1 = dynamic_library;
var ForeignFunction$1 = foreign_function;
var VariadicForeignFunction = foreign_function_var;
var debug = browser$1.exports('ffi:Library');
var RTLD_NOW = DynamicLibrary$1.FLAGS.RTLD_NOW;
var ref$1 = ref$b.exports;
/**
 * The extension to use on libraries.
 * i.e.  libm  ->  libm.so   on linux
 */

var EXT = Library.EXT = {
  'linux': '.so',
  'linux2': '.so',
  'sunos': '.so',
  'solaris': '.so',
  'freebsd': '.so',
  'openbsd': '.so',
  'darwin': '.dylib',
  'mac': '.dylib',
  'win32': '.dll'
}[process.platform];
/**
 * Provides a friendly abstraction/API on-top of DynamicLibrary and
 * ForeignFunction.
 */

function Library(libfile, funcs, lib) {
  debug('creating Library object for', libfile);

  if (libfile && typeof libfile === 'string' && libfile.indexOf(EXT) === -1) {
    debug('appending library extension to library name', EXT);
    libfile += EXT;
  }

  if (!lib) {
    lib = {};
  }

  var dl;

  if (typeof libfile === 'string' || !libfile) {
    dl = new DynamicLibrary$1(libfile || null, RTLD_NOW);
  } else {
    dl = libfile;
  }

  Object.keys(funcs || {}).forEach(function (func) {
    debug('defining function', func);
    var fptr = dl.get(func);
    var info = funcs[func];

    if (ref$1.isNull(fptr)) {
      throw new Error('Library: "' + dl.path() + '" returned NULL function pointer for "' + func + '"');
    }

    var resultType = info[0];
    var paramTypes = info[1];
    var fopts = info[2];
    var abi = fopts && fopts.abi;
    var async = fopts && fopts.async;
    var varargs = fopts && fopts.varargs;

    if (varargs) {
      lib[func] = VariadicForeignFunction(fptr, resultType, paramTypes, abi);
    } else {
      var ff = ForeignFunction$1(fptr, resultType, paramTypes, abi);
      lib[func] = async ? ff.async : ff;
    }
  });
  return lib;
}

var library = Library;

var DynamicLibrary = dynamic_library;
var ForeignFunction = foreign_function;
var bindings = bindings_1;
var funcs = bindings.StaticFunctions;
var ref = ref$b.exports;
var types = ref.types;
var errno = null;
var intPtr = ref.refType(types["int"]);

if (process.platform == 'win32') {
  var _errno = DynamicLibrary('msvcrt.dll').get('_errno');

  var errnoPtr = ForeignFunction(_errno, intPtr, []);

  errno = function errno() {
    return ref.deref(errnoPtr());
  };
} else {
  errno = ForeignFunction(funcs._errno, types["int"], []);
}

var errno_1 = errno;

(function (exports) {
  /**
   * Module dependencies.
   */

  var ref = ref$b.exports;
  var buffer$1 = buffer;
  var debug = browser$1.exports('ffi:ffi');
  var bindings = bindings_1;
  var type$1 = type;
  /**
   * Export some of the properties from the "bindings" file.
   */

  ['FFI_TYPES', 'FFI_OK', 'FFI_BAD_TYPEDEF', 'FFI_BAD_ABI', 'FFI_DEFAULT_ABI', 'FFI_FIRST_ABI', 'FFI_LAST_ABI', 'FFI_SYSV', 'FFI_UNIX64', 'FFI_WIN64', 'FFI_VFP', 'FFI_STDCALL', 'FFI_THISCALL', 'FFI_FASTCALL', 'RTLD_LAZY', 'RTLD_NOW', 'RTLD_LOCAL', 'RTLD_GLOBAL', 'RTLD_NOLOAD', 'RTLD_NODELETE', 'RTLD_FIRST', 'RTLD_NEXT', 'RTLD_DEFAULT', 'RTLD_SELF', 'RTLD_MAIN_ONLY', 'FFI_MS_CDECL'].forEach(function (prop) {
    if (!bindings.hasOwnProperty(prop)) {
      return debug('skipping exporting of non-existant property', prop);
    }

    var desc = Object.getOwnPropertyDescriptor(bindings, prop);
    Object.defineProperty(exports, prop, desc);
  });
  /**
   * Set the `ffi_type` property on the built-in types.
   */

  Object.keys(bindings.FFI_TYPES).forEach(function (name) {
    var type = bindings.FFI_TYPES[name];
    type.name = name;
    if (name === 'pointer') return; // there is no "pointer" type...

    ref.types[name].ffi_type = type;
  }); // make `ssize_t` `size_t` `intptr_t` `uintptr_t` use the "ffi_type_pointer"

  ref.types.ssize_t.ffi_type = bindings.FFI_TYPES.pointer;
  ref.types.size_t.ffi_type = bindings.FFI_TYPES.pointer;
  ref.types.intptr_t.ffi_type = bindings.FFI_TYPES.pointer;
  ref.types.uintptr_t.ffi_type = bindings.FFI_TYPES.pointer; // make `CString` use "ffi_type_pointer"

  ref.types.CString.ffi_type = bindings.FFI_TYPES.pointer; // make `Object` use the "ffi_type_pointer"

  ref.types.Object.ffi_type = bindings.FFI_TYPES.pointer; // libffi is weird when it comes to long data types (defaults to 64-bit),
  // so we emulate here, since some platforms have 32-bit longs and some
  // platforms have 64-bit longs.

  switch (ref.sizeof["long"]) {
    case 4:
      ref.types.ulong.ffi_type = bindings.FFI_TYPES.uint32;
      ref.types["long"].ffi_type = bindings.FFI_TYPES.int32;
      break;

    case 8:
      ref.types.ulong.ffi_type = bindings.FFI_TYPES.uint64;
      ref.types["long"].ffi_type = bindings.FFI_TYPES.int64;
      break;

    default:
      throw new Error('unsupported "long" size: ' + ref.sizeof["long"]);
  }
  /**
   * Alias the "ref" types onto ffi's exports, for convenience...
   */


  exports.types = ref.types; // Include our other modules

  exports.version = bindings.version;
  exports.CIF = cif;
  exports.CIF_var = cif_var;
  exports.Function = _function;
  exports.ForeignFunction = foreign_function;
  exports.VariadicForeignFunction = foreign_function_var;
  exports.DynamicLibrary = dynamic_library;
  exports.Library = library;
  exports.Callback = callback;
  exports.errno = errno_1;
  exports.ffiType = type$1.Type; // the shared library extension for this platform

  exports.LIB_EXT = exports.Library.EXT; // the FFI_TYPE struct definition

  exports.FFI_TYPE = exports.ffiType.FFI_TYPE;
  exports.buffer = buffer$1;
  exports.ref = ref;
  exports.StructType = type$1.StructType;
  exports.UnionType = type$1.UnionType;
  exports.ArrayType = type$1.ArrayType;
})(ffi);

var libm = ffi.Library('libm', {
  'ceil': [ffi.types["double"][ffi.types["double"]]]
});
libm.ceil(1.5);
var current = ffi.Library(null, {
  'atoi': [ffi.types["int"], [ffi.types.CString]]
});
current.atoi('1234');
