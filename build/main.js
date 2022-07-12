import * as ffi from '../vendor/quickjs/quickjs-ffi/quickjs-ffi.so';
import { LIBC_SO } from './quickjs-ffi.so';

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

var dlCache = {}; // {'filename': {handle: ..., symbols: {'...': ...}}}

function dlOpen(filename) {
  if (dlCache.hasOwnProperty(filename)) {
    return dlCache[filename];
  } // console.log(filename);


  var h = ffi.dlopen(filename, ffi.RTLD_NOW);

  if (h === 0) {
    throw new TypeError(ffi.dlerror());
  }

  var file = {
    handle: h,
    symbols: {}
  };
  dlCache[filename] = file;
  return file;
}

function dlSym(filename, symbol) {
  var file = dlOpen(filename);

  if (file.symbols.hasOwnProperty(symbol)) {
    return file.symbols[symbol];
  } // console.log(filename, symbol);


  var pointer = ffi.dlsym(file.handle, symbol);

  if (pointer === 0) {
    throw new TypeError(ffi.dlerror());
  }

  file.symbols[symbol] = pointer;
  return pointer;
}

var dummy = function dummy() {};

var rint = function rint(issigned, bytewidth) {
  return function (ptr) {
    return ffi.memreadint(ptr, bytewidth, 0, issigned, bytewidth);
  };
};

var wint = function wint(bytewidth) {
  return function (ptr, val) {
    return ffi.memwriteint(ptr, bytewidth, 0, bytewidth, val);
  };
};

var rfloat = function rfloat(isdouble) {
  return function (ptr) {
    return ffi.memreadfloat(ptr, isdouble ? 8 : 4, 0, isdouble);
  };
};

var wfloat = function wfloat(isdouble) {
  return function (ptr, val) {
    return ffi.memwritefloat(ptr, isdouble ? 8 : 4, 0, isdouble, val);
  };
}; // const primitiveTypes = { // [ffi_type address, byte width, read function, write function]
//     'void': [ffi.ffi_type_void, 0, dummy, dummy],
//     'uint8_t': [ffi.ffi_type_uint8, 1, rint(false, 1), wint(1)],
//     'int8_t': [ffi.ffi_type_sint8, 1, rint(true, 1), wint(1)],
//     'uint16_t': [ffi.ffi_type_uint16, 2, rint(false, 2), wint(2)],
//     'int16_t': [ffi.ffi_type_sint16, 2, rint(true, 2), wint(2)],
//     'uint32_t': [ffi.ffi_type_uint32, 4, rint(false, 4), wint(4)],
//     'int32_t': [ffi.ffi_type_sint32, 4, rint(true, 4), wint(4)],
//     'uint64_t': [ffi.ffi_type_uint64, 8, rint(false, 8), wint(8)],
//     'int64_t': [ffi.ffi_type_sint64, 8, rint(true, 8), wint(8)],
//     'float': [ffi.ffi_type_float, 4, rfloat(false), wfloat(false)],
//     'double': [ffi.ffi_type_double, 8, rfloat(true), wfloat(true)],
//     'pointer': [ffi.ffi_type_pointer, ffi.sizeof_uintptr_t, rint(false, ffi.sizeof_uintptr_t), wint(ffi.sizeof_uintptr_t)],
//     'longdouble': [ffi.ffi_type_longdouble, 8, rfloat(true), wfloat(true)],
//     'complex_float': [ffi.ffi_type_complex_float, undefined, undefined, undefined],
//     'complex_double': [ffi.ffi_type_complex_double, undefined, undefined, undefined],
//     'complex_longdouble': [ffi.ffi_type_complex_longdouble, undefined, undefined, undefined],
//     'uchar': [ffi.ffi_type_uchar, 1, rint(false, 1), wint(1)],
//     'char': [ffi.ffi_type_schar, 1, rint(true, 1), wint(1)],
//     'ushort': [ffi.ffi_type_ushort, 2, rint(false, 2), wint(2)],
//     'short': [ffi.ffi_type_sshort, 2, rint(true, 2), wint(2)],
//     'uint': [ffi.ffi_type_uint, ffi.sizeof_int, rint(false, ffi.sizeof_int), wint(ffi.sizeof_int)],
//     'int': [ffi.ffi_type_sint, ffi.sizeof_int, rint(true, ffi.sizeof_int), wint(ffi.sizeof_int)],
//     'ulong': [ffi.ffi_type_ulong, 8, rint(false, 8), wint(8)],
//     'long': [ffi.ffi_type_slong, 8, rint(true, 8), wint(8)],
//     'uintptr_t': [ffi.ffi_type_uintptr_t, ffi.sizeof_uintptr_t, rint(false, ffi.sizeof_uintptr_t), wint(ffi.sizeof_uintptr_t)],
//     'intptr_t': [ffi.ffi_type_intptr_t, ffi.sizeof_uintptr_t, rint(true, ffi.sizeof_uintptr_t), wint(ffi.sizeof_uintptr_t)],
//     'size_t': [ffi.ffi_type_size_t, ffi.sizeof_size_t, rint(false, ffi.sizeof_size_t), wint(ffi.sizeof_size_t)],
//     'string': [ffi.ffi_type_pointer, ffi.sizeof_uintptr_t, rint(false, ffi.sizeof_uintptr_t), wint(ffi.sizeof_uintptr_t)],
// }


var primitiveTypes = {
  // [ffi_type address, byte width, read function, write function]
  "void": [ffi.ffi_type_void, 0, dummy, dummy],
  uint8: [ffi.ffi_type_uint8, 1, rint(false, 1), wint(1)],
  sint8: [ffi.ffi_type_sint8, 1, rint(true, 1), wint(1)],
  uint16: [ffi.ffi_type_uint16, 2, rint(false, 2), wint(2)],
  sint16: [ffi.ffi_type_sint16, 2, rint(true, 2), wint(2)],
  uint32: [ffi.ffi_type_uint32, 4, rint(false, 4), wint(4)],
  sint32: [ffi.ffi_type_sint32, 4, rint(true, 4), wint(4)],
  uint64: [ffi.ffi_type_uint64, 8, rint(false, 8), wint(8)],
  sint64: [ffi.ffi_type_sint64, 8, rint(true, 8), wint(8)],
  "float": [ffi.ffi_type_float, 4, rfloat(false), wfloat(false)],
  "double": [ffi.ffi_type_double, 8, rfloat(true), wfloat(true)],
  uchar: [ffi.ffi_type_uchar, 1, rint(false, 1), wint(1)],
  schar: [ffi.ffi_type_schar, 1, rint(true, 1), wint(1)],
  ushort: [ffi.ffi_type_ushort, 2, rint(false, 2), wint(2)],
  sshort: [ffi.ffi_type_sshort, 2, rint(true, 2), wint(2)],
  uint: [ffi.ffi_type_uint, ffi.sizeof_int, rint(false, ffi.sizeof_int), wint(ffi.sizeof_int)],
  sint: [ffi.ffi_type_sint, ffi.sizeof_int, rint(true, ffi.sizeof_int), wint(ffi.sizeof_int)],
  ulong: [ffi.ffi_type_ulong, 8, rint(false, 8), wint(8)],
  slong: [ffi.ffi_type_slong, 8, rint(true, 8), wint(8)],
  longdouble: [ffi.ffi_type_longdouble, 8, rfloat(true), wfloat(true)],
  pointer: [ffi.ffi_type_pointer, ffi.sizeof_uintptr_t, rint(false, ffi.sizeof_uintptr_t), wint(ffi.sizeof_uintptr_t)],
  complex_float: [ffi.ffi_type_complex_float, undefined, undefined, undefined],
  complex_double: [ffi.ffi_type_complex_double, undefined, undefined, undefined],
  complex_longdouble: [ffi.ffi_type_complex_longdouble, undefined, undefined, undefined]
};
primitiveTypes.uint8_t = primitiveTypes.uint8;
primitiveTypes.int8_t = primitiveTypes.sint8;
primitiveTypes.uint16_t = primitiveTypes.uint16;
primitiveTypes.int16_t = primitiveTypes.sint16;
primitiveTypes.uint32_t = primitiveTypes.uint32;
primitiveTypes.int32_t = primitiveTypes.sint32;
primitiveTypes["char"] = primitiveTypes.schar;
primitiveTypes["short"] = primitiveTypes.sshort;
primitiveTypes["int"] = primitiveTypes.sint;
primitiveTypes["long"] = primitiveTypes.slong;
primitiveTypes.string = primitiveTypes.pointer;
primitiveTypes.uintptr_t = [ffi.ffi_type_uintptr_t, ffi.sizeof_uintptr_t, rint(false, ffi.sizeof_uintptr_t), wint(ffi.sizeof_uintptr_t)];
primitiveTypes.intptr_t = [ffi.ffi_type_intptr_t, ffi.sizeof_uintptr_t, rint(true, ffi.sizeof_uintptr_t), wint(ffi.sizeof_uintptr_t)];
primitiveTypes.size_t = [ffi.ffi_type_size_t, ffi.sizeof_size_t, rint(false, ffi.sizeof_size_t), wint(ffi.sizeof_size_t)];

var MemoryAllocator = /*#__PURE__*/_createClass(function MemoryAllocator() {
  var _this = this;

  _classCallCheck(this, MemoryAllocator);

  _defineProperty(this, "pointers", []);

  _defineProperty(this, "alloc", function (size) {
    var ptr = ffi.malloc(size);

    _this.pointers.push(ptr);

    return ptr;
  });

  _defineProperty(this, "free", function () {
    while (_this.pointers.length > 0) {
      ffi.free(_this.pointers.pop());
    }
  });
});

function allocUintptrArray(mem) {
  var buflen = ffi.sizeof_uintptr_t * (arguments.length <= 1 ? 0 : arguments.length - 1);
  var buf = mem.alloc(buflen);

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    ffi.memwriteint(buf, buflen, ffi.sizeof_uintptr_t * i, ffi.sizeof_uintptr_t, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
  }

  return buf;
}

function allocStructType(mem) {
  var typ = mem.alloc(ffi.sizeof_ffi_type);
  ffi.memset(typ, 0, ffi.sizeof_ffi_type);
  ffi.memwriteint(typ, ffi.sizeof_ffi_type, ffi.offsetof_ffi_type_type, 2, ffi.FFI_TYPE_STRUCT);

  for (var _len = arguments.length, elems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elems[_key - 1] = arguments[_key];
  }

  ffi.memwriteint(typ, ffi.sizeof_ffi_type, ffi.offsetof_ffi_type_elements, ffi.sizeof_uintptr_t, allocUintptrArray.apply(void 0, [mem].concat(elems, [ffi.NULL])));
  return typ;
}

function getStructOffsets(struct_typ, elem_count) {
  var ptr = ffi.malloc(ffi.sizeof_size_t * elem_count);
  var status = ffi.ffi_get_struct_offsets(ffi.FFI_DEFAULT_ABI, struct_typ, ptr);

  if (status != ffi.FFI_OK) {
    ffi.free(ptr);
    throw new TypeError('get_struct_offsets failed with return code ' + status);
  }

  var offsets = [];

  for (var i = 0; i < elem_count; i++) {
    offsets.push(ffi.memreadint(ptr, ffi.sizeof_size_t * elem_count, ffi.sizeof_size_t * i, false, ffi.sizeof_size_t));
  }

  ffi.free(ptr);
  return offsets;
}

function parseType(mem, repr) {
  var elementsRepresentations = [];

  var Node = /*#__PURE__*/_createClass(function Node() {
    _classCallCheck(this, Node);

    _defineProperty(this, "ffiType", null);

    _defineProperty(this, "nBytes", null);

    _defineProperty(this, "absOffset", 0);

    _defineProperty(this, "children", null);

    _defineProperty(this, "childrenRelOffsets", null);
  });

  function buildTree(mem, repr) {
    if (typeof repr === 'string') {
      if (!primitiveTypes.hasOwnProperty(repr)) {
        throw new TypeError('primitive type \"' + repr + '\" not supported');
      }

      elementsRepresentations.push(repr);
      var node = new Node();
      node.ffiType = primitiveTypes[repr][0];
      node.nBytes = primitiveTypes[repr][1];
      return node;
    } else if (Array.isArray(repr)) {
      var _node = new Node();

      _node.children = [];

      var _iterator = _createForOfIteratorHelper(repr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pr = _step.value;

          _node.children.push(buildTree(mem, pr));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _node.ffiType = allocStructType.apply(void 0, [mem].concat(_toConsumableArray(_node.children.map(function (child) {
        return child.ffiType;
      }))));
      _node.childrenRelOffsets = getStructOffsets(_node.ffiType, _node.children.length);
      return _node;
    } else {
      throw new TypeError('type representation neither string nor array');
    }
  }

  var root = buildTree(mem, repr);
  var elementsOffsets = [];
  var lastPrimitiveElementOffset = 0;
  var lastPrimitiveElementByteWidth = 0;

  function walkTree(node) {
    if (node.children !== null) {
      for (var i = 0; i < node.children.length; i++) {
        node.children[i].absOffset = node.childrenRelOffsets[i] + node.absOffset;
        walkTree(node.children[i]);
      }
    } else {
      elementsOffsets.push(node.absOffset);
      lastPrimitiveElementOffset = node.absOffset;
      lastPrimitiveElementByteWidth = node.nBytes;
    }
  }

  walkTree(root);
  var ret = {
    typ: root.ffiType,
    nbytes: lastPrimitiveElementOffset + lastPrimitiveElementByteWidth,
    ereprs: elementsRepresentations,
    eoffsets: elementsOffsets
  };
  return ret;
}

var cifCache = {};

function getCifCacheIndex(nfixedargs, rrepr) {
  for (var _len2 = arguments.length, areprs = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    areprs[_key2 - 2] = arguments[_key2];
  }

  return JSON.stringify([nfixedargs, rrepr, [areprs]]);
}

function prepCif(nfixedargs, rrepr) {
  for (var _len3 = arguments.length, areprs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    areprs[_key3 - 2] = arguments[_key3];
  }

  if (typeof nfixedargs === 'number') {
    if (nfixedargs > areprs.length) {
      throw new TypeError('nfixedargs must <= areprs.length');
    } else if (nfixedargs <= 0) {
      throw new TypeError('nfixedargs must > 0');
    }
  } else if (nfixedargs !== null) {
    throw new TypeError('nfixedargs must be null or number');
  }

  var index = getCifCacheIndex.apply(void 0, [nfixedargs, rrepr].concat(areprs));

  if (cifCache.hasOwnProperty(index)) {
    return cifCache[index];
  }

  var mem = new MemoryAllocator();
  var nargs = areprs.length;
  var aparsed = areprs.map(function (repr) {
    return parseType(mem, repr);
  });
  var rparsed = parseType(mem, rrepr);
  var atypes = allocUintptrArray.apply(void 0, [mem].concat(_toConsumableArray(aparsed.map(function (parsed) {
    return parsed.typ;
  }))));
  var rtype = rparsed.typ;
  var cif = mem.alloc(ffi.sizeof_ffi_cif);
  var status = nfixedargs === null ? ffi.ffi_prep_cif(cif, ffi.FFI_DEFAULT_ABI, nargs, rtype, atypes) : ffi.ffi_prep_cif_var(cif, ffi.FFI_DEFAULT_ABI, nfixedargs, nargs, rtype, atypes);

  if (status != ffi.FFI_OK) {
    mem.free();
    throw new TypeError('ffi_prep_cif failed with return code ' + status);
  }

  var cache = {
    index: index,
    mem: mem,
    cif: cif,
    rnbytes: rparsed.nbytes,
    anbytes: aparsed.map(function (p) {
      return p.nbytes;
    }),
    rereprs: rparsed.ereprs,
    aereprs: aparsed.map(function (p) {
      return p.ereprs;
    }),
    reoffsets: rparsed.eoffsets,
    aeoffsets: aparsed.map(function (p) {
      return p.eoffsets;
    })
  };
  cifCache[index] = cache;
  return cache;
}

function freeCif(index) {
  if (cifCache.hasOwnProperty(index)) {
    cifCache[index].mem.free();
    delete cifCache[index];
  }
}

var CStringAllocator = /*#__PURE__*/_createClass(function CStringAllocator() {
  var _this2 = this;

  _classCallCheck(this, CStringAllocator);

  _defineProperty(this, "pointers", []);

  _defineProperty(this, "to", function (s) {
    var cstr = ffi.tocstring(s);

    _this2.pointers.push(cstr);

    return cstr;
  });

  _defineProperty(this, "free", function () {
    while (_this2.pointers.length > 0) {
      ffi.freecstring(_this2.pointers.pop());
    }
  });
});

var CFunction = /*#__PURE__*/_createClass(function CFunction(filename, symbol) {
  var _this3 = this;

  _classCallCheck(this, CFunction);

  _defineProperty(this, "mem", new MemoryAllocator());

  _defineProperty(this, "cstr", new CStringAllocator());

  _defineProperty(this, "cif", void 0);

  _defineProperty(this, "cifcacheindex", void 0);

  _defineProperty(this, "cfuncptr", void 0);

  _defineProperty(this, "rvalue", void 0);

  _defineProperty(this, "avalues", void 0);

  _defineProperty(this, "avaluesptr", void 0);

  _defineProperty(this, "rereprs", void 0);

  _defineProperty(this, "aereprs", void 0);

  _defineProperty(this, "reoffsets", void 0);

  _defineProperty(this, "aeoffsets", void 0);

  _defineProperty(this, "invoke", function () {
    var writeArg = function writeArg(a, e, val) {
      // console.log(a, e, val)
      var repr = _this3.aereprs[a][e];
      var f = primitiveTypes[repr][3];
      var p = _this3.avalues[a] + _this3.aeoffsets[a][e];
      repr == 'string' ? f(p, _this3.cstr.to(val)) : f(p, val);
    };

    for (var a = 0; a < arguments.length; a++) {
      var arg = a < 0 || arguments.length <= a ? undefined : arguments[a];

      if (Array.isArray(arg)) {
        for (var e = 0; e < arg.length; e++) {
          writeArg(a, e, arg[e]);
        }
      } else {
        writeArg(a, 0, arg);
      }
    }

    ffi.ffi_call(_this3.cif, _this3.cfuncptr, _this3.rvalue, _this3.avaluesptr);

    _this3.cstr.free();

    var readRet = function readRet(e) {
      var repr = _this3.rereprs[e];
      var f = primitiveTypes[repr][2];
      var p = _this3.rvalue + _this3.reoffsets[e];
      return repr == 'string' ? ffi.newstring(f(p)) : f(p);
    };

    if (_this3.rereprs.length == 1) {
      return readRet(0);
    } else {
      var ret = [];

      for (var _e = 0; _e < _this3.rereprs.length; _e++) {
        ret.push(readRet(_e));
      }

      return ret;
    }
  });

  _defineProperty(this, "free", function () {
    _this3.mem.free();

    _this3.cstr.free();
  });

  this.cfuncptr = dlSym(filename, symbol);

  for (var _len4 = arguments.length, _args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    _args[_key4 - 2] = arguments[_key4];
  }

  var c = prepCif.apply(void 0, _args);
  this.cif = c.cif;
  this.cifcacheindex = c.index;
  this.rvalue = this.mem.alloc(c.rnbytes);
  this.avalues = c.anbytes.map(function (n) {
    return _this3.mem.alloc(n);
  });
  this.avaluesptr = allocUintptrArray.apply(void 0, [this.mem].concat(_toConsumableArray(this.avalues)));
  this.rereprs = c.rereprs;
  this.aereprs = c.aereprs;
  this.reoffsets = c.reoffsets;
  this.aeoffsets = c.aeoffsets;
});

var printf = new CFunction(LIBC_SO, 'printf', 1, 'int', 'string', 'double', 'double', 'int');
printf.invoke('%g %g %d\n', 3.141592654, 2.718281829, 299792458);
freeCif(printf.cifcacheindex);
printf.free();
printf = new CFunction(LIBC_SO, 'printf', 1, 'int', 'string', 'string', 'string');
printf.invoke('%s %s\n', 'hello', 'world');
freeCif(printf.cifcacheindex);
printf.free();
