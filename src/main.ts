import ffi from 'ffi-cross';

const libm = ffi.Library('libm', {
  'ceil': [ ffi.types.double [ ffi.types.double ] ]
});
libm.ceil(1.5); // 2

// You can also access just functions in the current process by passing a null
const current = ffi.Library(null, {
  'atoi': [ ffi.types.int, [ ffi.types.CString ] ]
});
current.atoi('1234'); // 1234
